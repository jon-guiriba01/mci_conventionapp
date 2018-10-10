webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_list_event_list__ = __webpack_require__(194);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.navTo = function (page) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__event_list_event_list__["a" /* EventListPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\home\home.html"*/'<ion-content padding>\n\n<div class="flex-center-column">\n	<img src="assets/imgs/logo.png">\n	<h5><b>Congress</b> & <b>Events</b></h5>\n	<button ion-button class="basic-btn" (click)="navTo(EventListPage)">EVENTS</button>\n	<button ion-button class="basic-btn">CONTACTS</button>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_info_event_info__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventListPage = /** @class */ (function () {
    function EventListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = [
            {
                name: "IFHNOS World Tour Manila",
                location: "Manila Hotel",
                date: "Oct 22-24, 2018",
                address: "Level 10-1  One Global Place 5th Avenue & 25th Street, Taguig, 1632 Metro Manila",
                landline: "994-1239",
                cellNo: "0917-1144615"
            }
        ];
    }
    EventListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventListPage');
    };
    EventListPage.prototype.navToEvent = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__event_info_event_info__["a" /* EventInfoPage */], { "event": event });
    };
    EventListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-list',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\event-list\event-list.html"*/'<ion-header>\n\n  <ion-navbar>\n  	<img class="header-logo" src="assets/imgs/logo.png">\n    <ion-title>Congress & Events</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-list>\n		<ion-item class="event-list-item" *ngFor="let event of events" (click)="navToEvent(event)">\n			<img class="event-img" src="assets/imgs/logo.png">\n			<div class="event-info" >\n				<h5>{{event.name}}</h5>\n				<h5>{{event.location}}</h5>\n				<h5>{{event.date}}</h5>\n			</div>\n		</ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\event-list\event-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], EventListPage);
    return EventListPage;
}());

//# sourceMappingURL=event-list.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventInfoPage = /** @class */ (function () {
    function EventInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = {};
        this.event = this.navParams.get("event");
    }
    EventInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventInfoPage');
    };
    EventInfoPage.prototype.navTo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */], { "event": this.event });
    };
    EventInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-info',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\event-info\event-info.html"*/'<ion-content padding (click)="navTo()">\n	<div class="info-container">\n		<h5>{{event.address}}</h5>\n		<h5>Tel no.:{{event.landline}}</h5>\n		<h5>Cellphone no.:{{event.cellNo}}</h5>\n	</div>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\event-info\event-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], EventInfoPage);
    return EventInfoPage;
}());

//# sourceMappingURL=event-info.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = {};
        this.event = this.navParams.get("event");
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.navToEvent = function (event) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */], { event: event });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n  	<img class="header-banner" src="assets/imgs/logo.png">\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<div class="flex-center-column password-container">\n		<h5>Enter password to proceed</h5>\n		<input class="password-container" type="password" name="password" [(ngModel)]="password">\n		<div class="action-btn-row">\n			<button ion-button>BACK</button>\n			<button ion-button (click)="navToEvent(event)">LOGIN</button>\n		</div>\n		<h5 class="please-ask-text">Please ask the confress secretariat for the password</h5>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_event__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__information_information__ = __webpack_require__(274);
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
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__event_event__["a" /* EventPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__information_information__["a" /* InformationPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\tabs\tabs.html"*/'<ion-header>\n\n  <ion-navbar>\n  	<img class="header-banner" src="assets/imgs/logo.png">\n  </ion-navbar>\n\n</ion-header>\n\n<ion-tabs tabsPlacement="bottom" selectedIndex="1">\n  <ion-tab  tabTitle="Back" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Information" tabIcon="home">\n  <ion-tab  tabTitle="Favourites" tabIcon="home"></ion-tab>\n  </ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]) === "function" && _b || Object])
    ], TabsPage);
    return TabsPage;
    var _a, _b;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SponsorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SponsorsPage = /** @class */ (function () {
    function SponsorsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sponsors = {
            platinum: [{
                    name: "uap",
                    imageUrl: "assets/imgs/logo.png"
                }],
            gold: [
                {
                    name: "abbott",
                    imageUrl: "assets/imgs/logo.png"
                },
                {
                    name: "m",
                    imageUrl: "assets/imgs/logo.png"
                },
                {
                    name: "mylan",
                    imageUrl: "assets/imgs/logo.png"
                },
            ],
            silver: [
                {
                    name: "gsk",
                    imageUrl: "assets/imgs/logo.png"
                },
                {
                    name: "natrapham",
                    imageUrl: "assets/imgs/logo.png"
                },
            ],
            bronze: [{
                    name: "uap",
                    imageUrl: "assets/imgs/logo.png"
                }],
            minor: [
                {
                    name: "ADP Pharma Corporation",
                    address: "Suite C, 9/F The Curve, 32nd St., cor. 3rd Avenue BGC, Taguig City",
                    contactNo: "(63-2) 405-5125"
                },
                {
                    name: "Allmed Instruments Medical System Inc. (AIMS) ",
                    address: "Ground Floor Unit 106 Mindanao Nova Realty Bldg. Mindanao Avenue, Brgy. Talipapa, Novaliches Quezon City",
                    contactNo: "(02) 418-3370; 282-4505",
                    telefax: "(02) 930-8708"
                },
            ],
        };
    }
    SponsorsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SponsorsPage');
    };
    SponsorsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sponsors',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\sponsors\sponsors.html"*/'<ion-header>\n\n  <ion-navbar>\n  	<img class="header-banner" src="assets/imgs/logo.png">\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<img class="page-header" src="assets/imgs/logo.png">\n\n	<img src="assets/imgs/logo.png" class="sponsor-header">\n	<div class="sponsor-row">\n	<img src="{{sponsor.imageUrl}}" class="sponsor-icon" *ngFor="let sponsor of sponsors.platinum">\n	</div>\n	<img src="assets/imgs/logo.png" class="sponsor-header">\n	<div class="sponsor-row">\n	<img src="{{sponsor.imageUrl}}" class="sponsor-icon" *ngFor="let sponsor of sponsors.gold">\n	</div>\n	<img src="assets/imgs/logo.png" class="sponsor-header">\n	<div class="sponsor-row">\n	<img src="{{sponsor.imageUrl}}" class="sponsor-icon" *ngFor="let sponsor of sponsors.silver">\n	</div>\n	<img src="assets/imgs/logo.png" class="sponsor-header">\n	<div class="sponsor-row">\n	<img src="{{sponsor.imageUrl}}" class="sponsor-icon" *ngFor="let sponsor of sponsors.bronze">\n	</div>\n		<img src="assets/imgs/logo.png" class="sponsor-header">\n	<div class="sponsor-minor-row" padding>\n		<div class="sponsor-minor" *ngFor="let sponsor of sponsors.minor" >\n			<h5><b>{{sponsor.name}}</b></h5>\n			<h5>{{sponsor.address}}</h5>\n			<h5 *ngIf="sponsor.contactNo">{{sponsor.contactNo}}</h5>\n			<h5 *ngIf="sponsor.telefax">{{sponsor.teleFax}}</h5>\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\sponsors\sponsors.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], SponsorsPage);
    return SponsorsPage;
}());

//# sourceMappingURL=sponsors.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_event_list_event_list__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_event_info_event_info__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_event_event__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_sponsors_sponsors__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_information_information__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_event_list_event_list__["a" /* EventListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_event_info_event_info__["a" /* EventInfoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_sponsors_sponsors__["a" /* SponsorsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_information_information__["a" /* InformationPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_event_list_event_list__["a" /* EventListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_event_info_event_info__["a" /* EventInfoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_sponsors_sponsors__["a" /* SponsorsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_information_information__["a" /* InformationPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sponsors_sponsors__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventPage = /** @class */ (function () {
    function EventPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventPage');
    };
    EventPage.prototype.navTo = function (page) {
        var p;
        switch (page) {
            case "program":
                p = __WEBPACK_IMPORTED_MODULE_2__sponsors_sponsors__["a" /* SponsorsPage */];
                break;
            case "speakers":
                p = __WEBPACK_IMPORTED_MODULE_2__sponsors_sponsors__["a" /* SponsorsPage */];
                break;
            case "research":
                p = __WEBPACK_IMPORTED_MODULE_2__sponsors_sponsors__["a" /* SponsorsPage */];
                break;
            case "about":
                p = __WEBPACK_IMPORTED_MODULE_2__sponsors_sponsors__["a" /* SponsorsPage */];
                break;
            case "sponsors":
                p = __WEBPACK_IMPORTED_MODULE_2__sponsors_sponsors__["a" /* SponsorsPage */];
                break;
            case "course":
                p = __WEBPACK_IMPORTED_MODULE_2__sponsors_sponsors__["a" /* SponsorsPage */];
                break;
            case "announcements":
                p = __WEBPACK_IMPORTED_MODULE_2__sponsors_sponsors__["a" /* SponsorsPage */];
                break;
        }
        this.navCtrl.push(p);
    };
    EventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\event\event.html"*/'<ion-content padding>\n	<ion-list class="options-list">\n		<ion-item class="list-option">\n			<img src="assets/imgs/logo.png" (click)="navTo(\'program\')">\n			<h5>Program</h5>\n			<p>></p>\n		</ion-item>\n		<ion-item class="list-option">\n			<img src="assets/imgs/logo.png" (click)="navTo(\'speakers\')">\n			<h5>Speakers</h5>\n			<p>></p>\n		</ion-item>\n		<ion-item class="list-option">\n			<img src="assets/imgs/logo.png" (click)="navTo(\'research\')">\n			<h5>Research Presentation</h5>\n			<p>></p>\n		</ion-item>\n		<ion-item class="list-option">\n			<img src="assets/imgs/logo.png" (click)="navTo(\'about\')">\n			<h5>About the Congress</h5>\n			<p>></p>\n		</ion-item>\n		<ion-item class="list-option" (click)="navTo(\'sponsors\')">\n			<img src="assets/imgs/logo.png">\n			<h5>Sponsors</h5>\n			<p>></p>\n		</ion-item>\n		<ion-item class="list-option">\n			<img src="assets/imgs/logo.png" (click)="navTo(\'course\')">\n			<h5>Course Evaluation</h5>\n			<p>></p>\n		</ion-item>\n		<ion-item class="list-option">\n			<img src="assets/imgs/logo.png" (click)="navTo(\'announcements\')">\n			<h5>Announcements</h5>\n			<p>></p>\n		</ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\event\event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], EventPage);
    return EventPage;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InformationPage = /** @class */ (function () {
    function InformationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.information = [
            {
                title: "Getting to the Philippines",
                imageUrl: "assets/imgs/logo.png",
                content: "In a country that is made up of over 7,100 islands and islets, most travel from other countries will be via air. Manila, Cebu, Davao, Clark, Subic, and Laoag are the international gateways, with the Ninoy Aquino International Airport (NAIA) in Manila as the primary airport. It is served by more than 30 airlines, which fly to different cities around the world. There are three international terminals, each serving specific airlines. Flights for IFHNOS delegates are best booked to fly to NAIA."
            },
            {
                title: "Entry Formalities",
                imageUrl: "assets/imgs/logo.png",
                content: "Nationals from countries (click list below) who are traveling to the Philippines for business and tourism purposes are allowed to enter the Philippines without visas for a stay not exceeding twenty-one (21) days, provided they hold valid tickets for their return journey to port of origin or next port of destination and their passports are valid for a period of at least six (6) months beyond the contemplated period of stay. However, Immigration Officers at ports of entry may exercise their discretion to admit holders of passports valid for at least sixty (60) days beyond the intended period of stay. 	Nationals from countries allowed to enter the Philippines without Visas for a stay not exceeding 21 days"
            },
            {
                title: "Customs and Currency Regulation",
                imageUrl: "assets/imgs/logo.png",
                content: "Upon Arriving: Visitors are allowed to bring in duty free personal belongings, two cartons of cigarettes or two tins of pipe tobacco and up to one liter of alcohol. Balikbayans have separate rules and should check with the Embassy or Consulate in their home city. The currency in the Philippines is the Peso (PhP) and the Centavo. 100 centavos = P1. Coin denominations are: 1, 5, 10, and 25 centavos, P1, and P5. Bill denominations are : 10, 20, 50, 100, 500 and 1, 000 pesos. Foreign currency may be exchanged at your hotel, and in most of the large department stores, banks and authorized money changing shops. Exchanging money anywhere else is illegal and the laws are strictly enforced.Most large stores, restaurants , hotels and resorts accept major credit cards including American Express, Visa and MasterCard. Personal checks drawn on foreign banks are generally not accepted.It is illegal for any incoming or outgoing passenger to bring in or out Philippine Pesos in excess of P10,000.00 without prior authority from the Bangko Sentral ng Pilipinas. Any violation of this rule may lead to its seizure and civil penalties and / or criminal prosecution. (BSP Circular 98-1995)The transportation of foreign currency or monetary instruments is legal. However, the carrying of foreign currency in excess of US$10,000.00 or its equivalent in other foreign currencies must be declared to a Customs Officer or the Bangko Sentral ng Pilipinas. Violation of this rule may lead to seizure and sanctions, fines and / or penalties."
            }
        ];
    }
    InformationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InformationPage', this.information);
    };
    InformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-information',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\information\information.html"*/'<ion-header>\n\n  <ion-navbar>\n  	<img class="header-banner" src="assets/imgs/logo.png">\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-list>\n		<ion-item *ngFor="let info of information" text-wrap>\n			<div class="info-header">\n				<img src="{{info.imageUrl}}">\n				<h4>{{info.title}}</h4>\n			</div>\n			<p style="margin-top: 10px;">{{info.content}}</p>\n\n		</ion-item>\n		<h5>For more information about the Philippines, please visit the website of the Department of Tourism</h5>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\information\information.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]) === "function" && _b || Object])
    ], InformationPage);
    return InformationPage;
    var _a, _b;
}());

//# sourceMappingURL=information.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map