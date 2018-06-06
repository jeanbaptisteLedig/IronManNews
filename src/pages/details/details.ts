import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  item:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let item = this.navParams.get('item');
    console.log("ok page tranfere"+item.name)
    this.item=item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
