import {Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';
import {Geolocation} from "@ionic-native/geolocation";
import { EventProvider } from "../../providers/event/event"
import { LoginPage } from "../../pages/login/login"
import { UpdatePage } from "../../pages/update/update"
import firebase from "firebase"

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

    id:String

    @ViewChild('map') mapContainer: ElementRef;
    map: any;
    isOnline: Boolean = false;

  constructor(public navCtrl: NavController, public view:ViewController, public navParams: NavParams, public geolocation: Geolocation, private alertCtrl: AlertController, public eventProvider: EventProvider) {
    let item = this.navParams.get('item');
    console.log("Page transfere : "+ item.name)
    this.item = item;
    this.UserIsOnline()
  }

  ionViewDidLoad() {
        console.log('ionViewDidLoad DetailsPage');
        this.displayGoogleMap(this.item);
  }

    displayGoogleMap(item) {
        let latLng = new google.maps.LatLng(item.lat, item.long);
        let mapOptions = {
            center: latLng,
            disableDefaultUI: true,
            zoom: 4,
            zoomControl: true,
            scrollwheel: false,
            disableDoubleClickZoom: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            infoWindow: "Hello"
        };
        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">'+item.name+'</h1>'+
            '<div id="bodyContent">'+
            '<p>Plus d informatations sur <a href='+item.url+'>'+item.name+'</a>'+
            '</div>'+
            '</div>';
        var infowindow = new google.maps.InfoWindow({content: contentString});
        var position = new google.maps.LatLng(item.lat, item.long);
        var itemMarker = new google.maps.Marker({
            position: position,
            title: item.name,
            animation: google.maps.Animation.DROP
        });
        itemMarker.addListener('click', function() {
            infowindow.open(mapOptions, itemMarker);
        });
        this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
        itemMarker.setMap(this.map);
    }

    deleteEvent() {
        let confirm = this.alertCtrl.create({
            title: "Etes vous sûr de vouloir supprimer cet évènement ?",
            message: "",
            buttons: [
                {
                    text: "Non",
                    handler: () => {
                        console.log("Pas OK");
                    }
                },
                {
                    text: "Oui",
                    handler: () => {
                        this.eventProvider.deleteEvent(this.id)
                        this.view.dismiss()
                    }
                }
            ]
        });
        confirm.present();
    }

    updateEvent(item){
        console.log("click"+item.get)
        this.navCtrl.push(UpdatePage,{item:item});
    }

    UserIsOnline() {
        if (firebase.auth().currentUser != null) {
            this.isOnline = true
        } else {
            this.isOnline = false
        }
    }

    goToLogin() {
        this.navCtrl.push(LoginPage)
    }
}
