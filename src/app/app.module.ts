import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DetailsPage } from '../pages/details/details';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AddPage } from '../pages/add/add';
import { UpdatePage } from '../pages/update/update';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFireModule} from "angularfire2";
import { Provider } from '../providers/provider/provider';
import { Geolocation } from '@ionic-native/geolocation';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import {Camera} from '@ionic-native/camera';
import { AuthService } from '../services/auth.service';
import { EventProvider } from '../providers/event/event';

export const firebaseConfig = {
  apiKey: "AIzaSyDZTbdxTTcdcTMqqK3Kd5juQVEKe-ctS8U",
  authDomain: "projet-ionic-ynov.firebaseapp.com",
  databaseURL: "https://projet-ionic-ynov.firebaseio.com",
  projectId: "projet-ionic-ynov",
  storageBucket: "projet-ionic-ynov.appspot.com",
  messagingSenderId: "958938466692"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    DetailsPage,
    TabsPage,
    LoginPage,
    SignupPage,
    AddPage,
    UpdatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgxErrorsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    DetailsPage,
    TabsPage,
    LoginPage,
    SignupPage,
    AddPage,
    UpdatePage
  ],
  providers: [
    StatusBar,
    SplashScreen, Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Provider,
    Geolocation,
    AuthService,
    EventProvider
  ]
})
export class AppModule {}
