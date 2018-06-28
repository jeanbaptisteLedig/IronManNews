import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

interface Items {

}

/*
  Generated class for the EventProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventProvider {

  itemsCollection: AngularFirestoreCollection<Items>; //Firestore collection
  items: Observable<Items[]>; // read collection

  constructor(public db: AngularFirestore) {
      this.itemsCollection = db.collection<Items>('ironman');
  }

    deleteEvent(id) {
        console.log(id)
        this.itemsCollection.doc(id).delete();
    }

    addEvent(city,country,date,description,lat,long,name,type,url,url_image){
        this.itemsCollection.doc(Date.now().toString()).set({
            city: city,
            country: country,
            date: date,
            description: description,
            lat: lat,
            long: long,
            name: name,
            type: type,
            url: url,
            url_image: url_image
        })
            .then(success => console.log(success))
            .catch(err => console.log(err))
    }

    updateEvent(id,city,country,date,description,lat,long,name,type,url,url_image){
      this.itemsCollection.doc(id).update({
          city: city,
          country: country,
          date: date,
          description: description,
          lat: lat,
          long: long,
          name: name,
          type: type,
          url: url,
          url_image: url_image
      })
          .then(success => console.log(success))
          .catch(err => console.log(err))
    }
}
