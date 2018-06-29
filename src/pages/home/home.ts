import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, PopoverController, NavParams, AlertController } from 'ionic-angular';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Geolocation } from '@ionic-native/geolocation';
import { DetailsPage } from './../details/details';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AuthService } from '../../services/auth.service';
import { AddPage } from '../add/add';
import firebase from 'firebase';
import {LoginPage} from "../login/login";

interface Items {

}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
    assetCollection;

    public base64Image : string;

    public myPhotosRef: any;
    public myPhoto: any;
    public myPhotoURL: any;

    isOnline: Boolean = false;

    itemsCollection: AngularFirestoreCollection<Items>;
    items: Observable<Items[]>;

    constructor(public navCtrl: NavController, db: AngularFirestore, popoverCtrl: PopoverController, public navParams: NavParams, private camera : Camera, private alertCtrl : AlertController, private auth: AuthService) {
    this.myPhotosRef = firebase.storage().ref('/PhotosUsers/');
    this.itemsCollection = db.collection<Items>('ironman');
    this.items=this.itemsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Items;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });
    this.UserIsOnline();
    }

    itemSelected(item){
        console.log("click"+item.get)
        this.navCtrl.push(DetailsPage,{item:item});
    }

    ngOnInit() {
      this.loadPictures();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HomePage');
    }

    takePhoto() {
        this.camera.getPicture({
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.PNG,
            saveToPhotoAlbum: true
        }).then(imageData => {
            this.myPhoto = imageData;
            this.uploadPhoto();
        }, error => {
            console.log("ERROR -> " + JSON.stringify(error));
        });
    }

    selectPhoto(): void {
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 100,
            encodingType: this.camera.EncodingType.PNG,
        }).then(imageData => {
            this.myPhoto = imageData;
            this.uploadPhoto();
        }, error => {
            console.log("ERROR -> " + JSON.stringify(error));
        });
    }

    private uploadPhoto(): void {
        this.myPhotosRef.child(this.generateUUID()).child('myPhoto.png')
            .putString(this.myPhoto, 'base64', { contentType: 'image/png' })
            .then((savedPicture) => {
                this.myPhotoURL = savedPicture.downloadURL;
            });
        let confirm = this.alertCtrl.create({
            title: 'Votre photo a bien été uplodé dans Firebase',
            message: '',
            buttons: [
                    {
                    text: 'Ok',
                    handler: () => {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    }

    private generateUUID(): any {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    }

    loadPictures() {
/*        this.myPhotosRef.once('value', (_snapshot: any) => {
            var result = [];

            _snapshot.forEach((_childSnapshot) => {
                var element = _childSnapshot.val();
                element.id = _childSnapshot.key;
                result.push(element);
            });
            this.assetCollection = result;
        });*/
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

    addEvent() {
        this.navCtrl.push(AddPage);
    }
}
