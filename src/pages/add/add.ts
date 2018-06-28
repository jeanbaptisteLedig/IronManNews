import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController} from 'ionic-angular';
import { EventProvider } from "../../providers/event/event"

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  constructor(public navCtrl: NavController,public view:ViewController, public navParams: NavParams, public alertCtrl: AlertController, public provider: EventProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

    addEvent(city,country,date,description,lat,long,name,type,url,url_image){
        let confirm = this.alertCtrl.create({
            title: "Validez-vous l'ajout de la course ?",
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
                        console.log("OK");
                        this.provider.add(city,country,date,description,lat,long,name,type,url,url_image)
                        // this.navCtrl.push(HomePage)
                        this.view.dismiss()
                    }
                }

            ]
        });
        confirm.present();
    }
}
