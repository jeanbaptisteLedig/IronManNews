import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, PopoverController, NavParams, AlertController } from 'ionic-angular';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Geolocation } from '@ionic-native/geolocation';
import { DetailsPage } from './../details/details';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AuthService } from '../../services/auth.service';

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

  constructor(public navCtrl: NavController, db: AngularFirestore, popoverCtrl: PopoverController, public navParams: NavParams, private camera : Camera, private alertCtrl : AlertController, private auth: AuthService) {
    this.itemsCollection = db.collection<Items>('ironman');
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
    console.log('ionViewDidLoad HomePage');
  }

  deletePhoto(index) {
    let confirm = this.alertCtrl.create({
      title: 'Etes-vous sur de vouloir supprimer cette photo ?',
      message: '',
      buttons: [
        {
          text: 'Non',
          handler: () => {
            console.log('Disagree clicked');
          }
        }, {
          text: 'Oui',
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

    login() {
        //this.menu.close();
        this.auth.signOut();
        //this.nav.setRoot(LoginPage);
    }

    logout() {
        //this.menu.close();
        this.auth.signOut();
        //this.nav.setRoot(HomePage);
    }
}
