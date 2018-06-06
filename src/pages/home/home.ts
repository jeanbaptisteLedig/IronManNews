import { Component, ViewChild, ElementRef } from '@angular/core';
import {IonicPage, NavController, PopoverController, NavParams, AlertController} from 'ionic-angular';
import { AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Geolocation } from '@ionic-native/geolocation';
import { DetailsPage } from './../details/details';
import {Camera, CameraOptions} from '@ionic-native/camera';

interface Items {

}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public photos : any;
  public base64Image : string;

  itemsCollection: AngularFirestoreCollection<Items>;
  items: Observable<Items[]>;

  constructor(public navCtrl: NavController, db: AngularFirestore, popoverCtrl: PopoverController, public navParams: NavParams, private camera : Camera, private alertCtrl : AlertController) {
    this.itemsCollection = db.collection<Items>('ironman'); //ref()
    this.items=this.itemsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Items;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    })
  }

  itemSelected(item){
    console.log("click"+item.get)
    this.navCtrl.push(DetailsPage,{item:item});
  }

  ngOnInit() {
    this.photos = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

  deletePhoto(index) {
    let confirm = this.alertCtrl.create({
      title: 'Sure you want to delete this photo? There is NO undo!',
      message: '',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Agree clicked');
            this.photos.splice(index, 1);
          }
        }
      ]
    });
    confirm.present();
  }

  takePhoto() {
    const options : CameraOptions = {
      quality: 50, // picture quality
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options) .then((imageData) => {
      this.base64Image = "data:image/jpeg;base64," + imageData;
      this.photos.push(this.base64Image);
      this.photos.reverse();
    }, (err) => {
      console.log(err);
    });
  }
}
