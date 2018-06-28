import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { EventProvider } from "../../providers/event/event"
import firebase from "firebase"
import {DetailsPage} from "../details/details";

/**
 * Generated class for the UpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {
    item: string;

    id: String
    city: String
    country: String
    date: String
    description: String
    lat: String
    long: String
    name: String
    type: String
    url: String
    url_image: String

    constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public eventProvider: EventProvider) {
        let item = this.navParams.get('item');
        console.log("Page transfere : update " + item.city);
        this.item = item;
        this.id = String(item.id);
        this.city = item.city;
        this.country = item.country;
        this.date = item.date;
        this.description = item.description;
        this.lat = item.lat;
        this.long = item.long;
        this.name = item.name;
        this.type = item.type;
        this.url = item.url;
        this.url_image = item.url_image;
        //this.UserIsOnline()
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad UpdatePage');
    }

    updateEvent(city,country,date,description,lat,long,name,type,url,url_image,item) {
        let confirm = this.alertCtrl.create({
            title: "Etes vous sûr de vouloir modifier cet évènement ?",
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
                        this.eventProvider.updateEvent(item.id, city, country, date, description, lat, long, name, type, url, url_image);
                        this.navCtrl.push(DetailsPage,{item:item});
                    }
                }
            ]
        });
        confirm.present();
    }
}