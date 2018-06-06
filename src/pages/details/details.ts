import {Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Geolocation} from "@ionic-native/geolocation";

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
   item:string;

   @ViewChild('map') mapContainer: ElementRef;
   map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
    let item = this.navParams.get('item');
    console.log("Page transfere : "+ item.name)
    this.item = item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
      this.displayGoogleMap();
      this.getMarkers();
  }

    displayGoogleMap() {
        let latLng = new google.maps.LatLng(49.0856, 17.8764);

        let mapOptions = {
            center: latLng,
            disableDefaultUI: true,
            zoom: 4,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
    }

    getMarkers() {
        this.addMarkersToMap(this.item);
    }

    addMarkersToMap(item) {
        var position = new google.maps.LatLng(item.lat, item.long);
        var itemMarker = new google.maps.Marker({
            position: position,
            title: item.name,
            animation: google.maps.Animation.DROP
        });
        itemMarker.setMap(this.map);
    }

}
