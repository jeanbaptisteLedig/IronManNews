webpackJsonp([1],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(188);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, auth, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.loginForm = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)])]
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var data = this.loginForm.value;
        if (!data.email) {
            return;
        }
        var credentials = {
            email: data.email,
            password: data.password
        };
        this.auth.signInWithEmail(credentials)
            .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]); }, function (error) { return _this.loginError = error.message; });
    };
    LoginPage.prototype.loginWithGoogle = function () {
        var _this = this;
        this.auth.signInWithGoogle()
            .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]); }, function (error) { return console.log(error.message); });
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Cours - Projet/Ionic/IronManNews/src/pages/login/login.html"*/'<!--\nGenerated template for the LoginPage page.\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Log in</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <form (ngSubmit)="login()" [formGroup]="loginForm">\n    <ion-list inset>\n      <ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\',\'dirty\']) }">\n        <ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n      </ion-item>\n      <div ngxErrors="email" #emailErrors="ngxErrors">\n        <div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\', \'dirty\']">It should\n          be a valid email</div>\n      </div>\n      <ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n        <ion-input type="password" placeholder="Password"\n                   formControlName="password"></ion-input>\n      </ion-item>\n      <div ngxErrors="password" #passwordErrors="ngxErrors">\n        <div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">It should be\n          at least 5 characters</div>\n      </div>\n    </ion-list>\n    <div padding-horizontal>\n      <div class="form-error">{{loginError}}</div>\n      <button ion-button full type="submit" [disabled]="!loginForm.valid">Log\n        in</button>\n      <div class="login-footer">\n        <p>\n          <a href="#">Forgot password?</a>\n          If you\'re a new user, please sign up.\n        </p>\n      </div>\n      <ion-list>\n        <button ion-button icon-left block clear (click)="loginWithGoogle()">\n          <ion-icon name="logo-google"></ion-icon>\n          Log in with Google\n        </button>\n        <button ion-button icon-left block clear (click)="signup()">\n          <ion-icon name="person-add"></ion-icon>\n          Sign up\n        </button>\n      </ion-list>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/Cours - Projet/Ionic/IronManNews/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 131;

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		351,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 175;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(182);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsPage = /** @class */ (function () {
    function DetailsPage(navCtrl, navParams, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        var item = this.navParams.get('item');
        console.log("Page transfere : " + item.name);
        this.item = item;
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailsPage');
        this.displayGoogleMap(this.item);
    };
    DetailsPage.prototype.displayGoogleMap = function (item) {
        var latLng = new google.maps.LatLng(item.lat, item.long);
        var mapOptions = {
            center: latLng,
            disableDefaultUI: true,
            zoom: 4,
            zoomControl: true,
            scrollwheel: false,
            disableDoubleClickZoom: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            infoWindow: "Hello"
        };
        var contentString = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h1 id="firstHeading" class="firstHeading">' + item.name + '</h1>' +
            '<div id="bodyContent">' +
            '<p>Plus d informatations sur <a href=' + item.url + '>' + item.name + '</a>' +
            '</div>' +
            '</div>';
        var infowindow = new google.maps.InfoWindow({ content: contentString });
        var position = new google.maps.LatLng(item.lat, item.long);
        var itemMarker = new google.maps.Marker({
            position: position,
            title: item.name,
            animation: google.maps.Animation.DROP
        });
        itemMarker.addListener('click', function () {
            infowindow.open(mapOptions, itemMarker);
        });
        this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
        itemMarker.setMap(this.map);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], DetailsPage.prototype, "mapContainer", void 0);
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"/Cours - Projet/Ionic/IronManNews/src/pages/details/details.html"*/'<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n        <img src="{{item.url_image}}" style="width:230px;height:120px;background-color: black;">\n      </ion-col>\n      <ion-col col-8>\n        <ion-card-title>\n          <h1>{{item.name}}</h1>\n          <h5>{{item.city}} -\n            {{item.country}}</h5>\n          <h5>{{item.date | date: "fullDate"}}</h5>\n        </ion-card-title>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p style="text-align: justify; ">{{item.description}}</p><br>\n        Plus d\'information sur <a href="{{item.url}}">IronMan {{item.city}}</a>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div #map id="map"></div>\n</ion-content>\n'/*ion-inline-end:"/Cours - Projet/Ionic/IronManNews/src/pages/details/details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, fb, auth) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.form = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)])]
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signup = function () {
        var _this = this;
        var data = this.form.value;
        var credentials = {
            email: data.email,
            password: data.password
        };
        this.auth.signUp(credentials).then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]); }, function (error) { return _this.signupError = error.message; });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Cours - Projet/Ionic/IronManNews/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Sign up</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <form (ngSubmit)="signup()" [formGroup]="form">\n    <ion-list inset>\n      <ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\']) }">\n        <ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n      </ion-item>\n      <div ngxErrors="email" #emailErrors="ngxErrors">\n        <div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\']">It should be a\n          valid email</div>\n      </div>\n      <ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n        <ion-input type="password" placeholder="Password"\n                   formControlName="password"></ion-input>\n      </ion-item>\n      <div ngxErrors="password" #passwordErrors="ngxErrors">\n        <div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">It should be\n          at least 6 characters</div>\n      </div>\n    </ion-list>\n    <div padding-horizontal>\n      <div class="form-error">{{signupError}}</div>\n      <button ion-button full type="submit" [disabled]="!form.valid">Sign up</button>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/Cours - Projet/Ionic/IronManNews/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Cours - Projet/Ionic/IronManNews/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Cours - Projet/Ionic/IronManNews/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Cours - Projet/Ionic/IronManNews/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About IronMan®\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<p class="paragraph">L\'Ironman est dans le langage commun du triathlon le nom donné à l\'un des plus longs formats de la discipline.\n    D\'une distance totale de 226 kilomètres (140,6 miles), une compétition Ironman, « Homme de fer » en français, est\n    une course multi-disciplinaire consistant à enchaîner 3,8 km de natation, 180,2 km de cyclisme puis un marathon\n    (course à pied de 42,195 km). Cette appellation est associée au triathlon Ironman d\'Hawaï originel créé en 1978\n    par John et Judy Collins, qui est depuis 1990 le championnat du monde d\'Ironman (Ironman World Championships).\n    Ironman et Triathlon Ironman sont des noms déposés, propriétés de la World Triathlon Corporation (WTC).\n    Cette société privée organise et décerne, chaque année, le titre de « champion du monde d\'Ironman » à l\'issue d\'un\n    circuit de courses qualificatives et d\'une épreuve finale qui se déroule au mois d\'octobre à Kailua-Kona, dans l\'État\n    d\'Hawaï aux États-Unis. Sa devise, adoptée par tous les compétiteurs — les Ironmen —, est « Tout est possible »\n    (Anything is possible). L\'Ironman dont le nom est tout d\'abord celui d\'une compétition à la naissance du triathlon\n    d\'endurance très longue distance (XXL), devient également au fil de son histoire, celui d\'une distance (226 km), d\'un\n    mythe (Ironman d\'Hawaï), d\'une marque (World Triathlon Corporation) pour devenir, enfin, celui du championnat du\n    monde de triathlon très longue distance le plus connu de la planète.</p>\n  <p class="paragraph">En 2005, la World Triathlon Corporation met en place une série de triathlons dénommés « Ironman 70.3 ». Ces\n    compétitions plus courtes, appelées aussi « half Ironman », se pratiquent sur des distances de 1,9 km de natation,\n    90 km de vélo et 21 km de course à pied, soit 113 km (70,3 miles, d\'où sa dénomination). Ces distances représentent\n    la moitié de la distance d\'un Ironman (226 kilomètres ou 140,6 miles). Selon les mêmes principes de qualification\n    et au travers d\'un circuit mondial, un championnat du monde 70.3 est organisé. La finale, contrairement au\n    triathlon Ironman, a lieu dans un pays différent chaque année. Certaines de ces compétitions permettent aussi aux\n    triathlètes professionnels de cumuler des points dans le KPR (« Kona Point Ranking »), afin de se qualifier pour\n    le championnat du monde d\'Ironman à Kailua-Kona (Hawaï).</p>\n</ion-content>\n'/*ion-inline-end:"/Cours - Projet/Ionic/IronManNews/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Cours - Projet/Ionic/IronManNews/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ils ont fini un IronMan 70.3\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Strava</ion-list-header>\n    <ion-item>\n      <ion-icon name="bicycle" item-start></ion-icon>\n      <a href="https://www.strava.com/athletes/2502522">@Jean-Baptiste Ledig</a>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Cours - Projet/Ionic/IronManNews/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(252);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_details_details__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_firestore__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_provider_provider__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_geolocation__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ultimate_ngxerrors__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_camera__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_auth_service__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var firebaseConfig = {
    apiKey: "AIzaSyDZTbdxTTcdcTMqqK3Kd5juQVEKe-ctS8U",
    authDomain: "projet-ionic-ynov.firebaseapp.com",
    databaseURL: "https://projet-ionic-ynov.firebaseio.com",
    projectId: "projet-ionic-ynov",
    storageBucket: "projet-ionic-ynov.appspot.com",
    messagingSenderId: "958938466692"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_18__ultimate_ngxerrors__["a" /* NgxErrorsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_19__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_provider_provider__["a" /* Provider */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_20__services_auth_service__["a" /* AuthService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, auth) {
        var _this = this;
        this.auth = auth;
        //rootPage:any = TabsPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.auth.afAuth.authState
            .subscribe(function (user) {
            if (user) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
            }
        }, function () {
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        });
    }
    MyApp.prototype.login = function () {
        //this.menu.close();
        this.auth.signOut();
        //this.nav.setRoot(LoginPage);
    };
    MyApp.prototype.logout = function () {
        //this.menu.close();
        this.auth.signOut();
        //this.nav.setRoot(HomePage);
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Cours - Projet/Ionic/IronManNews/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Cours - Projet/Ionic/IronManNews/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Provider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Provider = /** @class */ (function () {
    function Provider(db) {
        this.db = db;
        this.requettesProvider = [];
        this.itemsCollection = db.collection('ironman'); //ref()
        console.log('Hello Provider Provider');
    }
    Provider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], Provider);
    return Provider;
}());

//# sourceMappingURL=provider.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        afAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    AuthService.prototype.oauthSignIn = function (provider) {
        var _this = this;
        if (!window.cordova) {
            return this.afAuth.auth.signInWithPopup(provider);
        }
        else {
            return this.afAuth.auth.signInWithRedirect(provider)
                .then(function () {
                return _this.afAuth.auth.getRedirectResult().then(function (result) {
                    // This gives you a Google Access Token.
                    // You can use it to access the Google API.
                    var token = result.credential.accessToken;
                    // The signed-in user info.
                    var user = result.user;
                    console.log(token, user);
                }).catch(function (error) {
                    // Handle Errors here.
                    alert(error.message);
                });
            });
        }
    };
    AuthService.prototype.signInWithEmail = function (credentials) {
        console.log('Sign in with email');
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthService.prototype.signInWithGoogle = function () {
        console.log('Sign in with google');
        return this.oauthSignIn(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.signUp = function (credentials) {
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
    };
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return this.user !== null;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.getEmail = function () {
        return this.user && this.user.email;
    };
    AuthService.prototype.signOut = function () {
        console.log("signout function");
        return this.afAuth.auth.signOut();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__details_details__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__(47);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, db, popoverCtrl, navParams, camera, alertCtrl, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.itemsCollection = db.collection('ironman');
        this.items = this.itemsCollection.snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
    }
    HomePage.prototype.itemSelected = function (item) {
        console.log("click" + item.get);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__details_details__["a" /* DetailsPage */], { item: item });
    };
    HomePage.prototype.ngOnInit = function () {
        this.photos = [];
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.deletePhoto = function (index) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Etes-vous sur de vouloir supprimer cette photo ?',
            message: '',
            buttons: [
                {
                    text: 'Non',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                }, {
                    text: 'Oui',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.photos.splice(index, 1);
                    }
                }
            ]
        });
        confirm.present();
    };
    HomePage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = "data:image/jpeg;base64," + imageData;
            _this.photos.push(_this.base64Image);
            _this.photos.reverse();
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.login = function () {
        //this.menu.close();
        this.auth.signOut();
        //this.nav.setRoot(LoginPage);
    };
    HomePage.prototype.logout = function () {
        //this.menu.close();
        this.auth.signOut();
        //this.nav.setRoot(HomePage);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Cours - Projet/Ionic/IronManNews/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title *ngIf="auth.getEmail()">\n      <h1>IronMan News</h1>\n    </ion-title>\n    <button (click)="logout()" *ngIf="auth.authenticated" style="text-align: right">\n      <ion-icon name="log-out" item-left></ion-icon>\n      Log out\n    </button>\n    <button (click)="login()" *ngIf="!auth.authenticated" style="text-align: right">\n      <ion-icon name="log-in" item-left></ion-icon>\n      Log in\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="card-background-page">\n  <ion-list ion-item *ngFor="let item of items | async" (click)="itemSelected(item)">\n    {{ item.city }}\n  </ion-list>\n\n  <h2>Partagez vos meilleurs souvenir avec IronMan ! <ion-icon name="camera"></ion-icon></h2>\n  <button ion-button full (click)="takePhoto()" >\n    <ion-icon name="camera"></ion-icon>&nbsp; Prendre une photo\n  </button>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 *ngFor="let photo of photos; let id = index">\n        <ion-card class="block">\n          <ion-icon name="trash" class="deleteIcon" (click)="deletePhoto(id)"></ion-icon>\n          <img [src]="photo" *ngIf="photo" />\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list col-6 *ngFor="let photo of photos; let id = index">\n    <ion-item-sliding>\n      <ion-item>\n        <ion-card class="block">\n          <ion-icon name="trash" class="deleteIcon" (click)="deletePhoto(id)"></ion-icon>\n          <img [src]="photo" *ngIf="photo" />\n        </ion-card>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="danger" (click)="deletePhoto(id)">Delete</button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Cours - Projet/Ionic/IronManNews/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* PopoverController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */]) === "function" && _g || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[235]);
//# sourceMappingURL=main.js.map