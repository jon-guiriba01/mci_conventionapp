webpackJsonp([0],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_list_event_list__ = __webpack_require__(99);
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
            selector: 'page-home',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\home\home.html"*/'<ion-content padding>\n\n<div class="flex-center-column" style="height: 100%;">\n	<img class="logo" src="assets/imgs/cce_logo.png">\n	<h5><b>Congress</b> & <b>Events</b></h5>\n	<button ion-button class="basic-btn theme-background" (click)="navTo(EventListPage)">EVENTS</button>\n	<button ion-button class="basic-btn theme-background">CONTACTS</button>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
            selector: 'page-event-info',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\event-info\event-info.html"*/'<ion-content class="theme-background" padding (click)="navTo()">\n	<div class="info-container">\n		<h5>{{event.address}}</h5>\n		<h5>Tel no.:{{event.landline}}</h5>\n		<h5>Cellphone no.:{{event.cellNo}}</h5>\n	</div>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\event-info\event-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_list_event_list__ = __webpack_require__(99);
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
        // password = "opensesame"
        this.password = "";
        this.passwordInput = "";
        this.event = this.navParams.get("event");
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        if (this.passwordInput == this.password)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */], { event: this.event });
    };
    LoginPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__event_list_event_list__["a" /* EventListPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n  	<img class="header-banner" src="{{event.bannerUrl}}">\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<div class="flex-center-column password-container">\n		<h5>Enter password to proceed</h5>\n		<input class="password-container" type="password" name="password" [(ngModel)]="passwordInput">\n		<div class="action-btn-row">\n			<button ion-button (click)="back()" style="background: #000;">BACK</button>\n			<button ion-button (click)="login()" style="background: #000;">LOGIN</button>\n		</div>\n		<h5 class="please-ask-text">Please ask the confress secretariat for the password</h5>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_event__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__information_information__ = __webpack_require__(206);
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
    function TabsPage(navCtrl, navParams, evt) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.evt = evt;
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__event_event__["a" /* EventPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__information_information__["a" /* InformationPage */];
        this.event = {};
        this.event = this.navParams.get("event");
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage', this.event);
    };
    TabsPage.prototype.back = function () {
        this.evt.publish("cmd:back");
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\tabs\tabs.html"*/'<ion-header >\n\n  <ion-navbar class="theme-background">\n  	<img class="header-banner" src="{{event.bannerUrl}}">\n  </ion-navbar>\n\n</ion-header>\n\n<ion-tabs tabsPlacement="bottom" selectedIndex="1">\n  <ion-tab  tabTitle="Back" tabIcon="arrow-round-back" (ionSelect)="back()"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Information" tabIcon="information-circle">\n  <ion-tab  tabTitle="Favourites" tabIcon="star-outline"></ion-tab>\n  </ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sponsors_sponsors__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__announcements_announcements__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__research_presentation_research_presentation__ = __webpack_require__(205);
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
    function EventPage(navCtrl, navParams, evt) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.evt = evt;
        this.event = {};
        this.event = this.navParams.get("event");
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
                p = __WEBPACK_IMPORTED_MODULE_5__research_presentation_research_presentation__["a" /* ResearchPresentationPage */];
                break;
            case "about":
                p = __WEBPACK_IMPORTED_MODULE_4__about_about__["a" /* AboutPage */];
                break;
            case "sponsors":
                p = __WEBPACK_IMPORTED_MODULE_2__sponsors_sponsors__["a" /* SponsorsPage */];
                break;
            case "course":
                p = __WEBPACK_IMPORTED_MODULE_2__sponsors_sponsors__["a" /* SponsorsPage */];
                break;
            case "announcements":
                p = __WEBPACK_IMPORTED_MODULE_3__announcements_announcements__["a" /* AnnouncementsPage */];
                break;
        }
        this.navCtrl.push(p);
    };
    EventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\event\event.html"*/'<ion-content padding>\n	<ion-list class="options-list">\n		<ion-item class="list-option" (click)="navTo(\'program\')">\n			<img src="assets/imgs/program.png" >\n			<h5>Program</h5>\n			<p>></p>\n		</ion-item>\n		<ion-item class="list-option" (click)="navTo(\'speakers\')">\n			<img src="assets/imgs/microphone.png" >\n			<h5>Speakers</h5>\n			<p>></p>\n		</ion-item>\n		<ion-item class="list-option" (click)="navTo(\'research\')">\n			<img src="assets/imgs/chart.png" >\n			<h5>Research Presentation</h5>\n			<p>></p>\n		</ion-item>\n		<ion-item class="list-option"  (click)="navTo(\'about\')">\n			<img src="assets/imgs/about.png">\n			<h5>About the Congress</h5>\n			<p>></p>\n		</ion-item>\n		<ion-item class="list-option" (click)="navTo(\'sponsors\')">\n			<img src="assets/imgs/handshake.png">\n			<h5>Sponsors</h5>\n			<p>></p>\n		</ion-item>\n		<ion-item class="list-option"  (click)="navTo(\'course\')">\n			<img src="assets/imgs/survey.png">\n			<h5>Course Evaluation</h5>\n			<p>></p>\n		</ion-item>\n		<ion-item class="list-option" (click)="navTo(\'announcements\')">\n			<img src="assets/imgs/announcement.png" >\n			<h5>Announcements</h5>\n			<p>></p>\n		</ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\event\event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], EventPage);
    return EventPage;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SponsorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    function SponsorsPage(navCtrl, navParams, evt) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.evt = evt;
        this.sponsors = {
            platinum: [{
                    name: "uap",
                    imageUrl: "assets/imgs/uap_logo.png"
                }],
            gold: [
                {
                    name: "abbott",
                    imageUrl: "assets/imgs/abbott_logo.png"
                },
                {
                    name: "m",
                    imageUrl: "assets/imgs/m_logo.png"
                },
                {
                    name: "mylan",
                    imageUrl: "assets/imgs/mylan_logo.jpg"
                },
            ],
            silver: [
                {
                    name: "gsk",
                    imageUrl: "assets/imgs/gsk_logo.png"
                },
                {
                    name: "natrapham",
                    imageUrl: "assets/imgs/natrapham_logo.png"
                },
            ],
            bronze: [{
                    name: "uap",
                    imageUrl: "assets/imgs/clearvue_logo.png"
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
                {
                    name: "Arcatech Electronics / Muracam",
                    address: "142-D R. Lagmay St., San Juan City",
                    contactNo: "(02) 343-1299"
                },
                {
                    name: "Auris Hearing Care, Inc.",
                    address: "Unit 2035-2036, 20th Flr., Centuria Medical Makati Century City, Brgy. Poblacion, Makati City",
                    contactNo: "(02) 401-7262 / (02) 654-2843"
                },
                {
                    name: "Berovan Marketing Incorporated",
                    address: "1526 Rizal Avenue, Sta. Cruz, Manila",
                    contactNo: "(02) 418-3370; 282-4505",
                    telefax: "(02) 711-2711"
                },
                {
                    name: "Biomedis Inc.",
                    address: "G/F Unilab Building, 66 United Street, Mandaluyong City",
                    telefax: "(63-2) 812-1252"
                },
                {
                    name: "CCM International (Phils.), Inc.",
                    address: "Unit 2802, 28th Floor, Atlanta Centre, 31 Annapolis St., Greenhills, San Juan City 1502",
                    contactNo: "(02) 661-4705"
                },
                {
                    name: "Celsus Pharmaceuticals Phils. Inc.",
                    address: "115 Scout Rallos corner 11th Jamboree Streets, Sacred Heart, Quezon City 1103",
                    contactNo: "(63-2) 928-8208",
                    telefax: "(63-2) 928-0815"
                },
                {
                    name: "Dentstall Trading",
                    address: "2111 Legarda St., Quiapo, Manila",
                    contactNo: "(63-2) 488-3218"
                },
                {
                    name: "Dubbel Medical Corporation",
                    address: "Unit 202 Ablaza Bldg., 117 E. Rodriguez Sr. Ave., Quezon City",
                    telefax: "(63-2) 740-0713"
                },
                {
                    name: "Ear Diagnostics Inc.",
                    address: "G/F Cosmopolitan Church corner Apacible, Taft Avenue, Ermita, Manila"
                },
                {
                    name: "Easmed Medical Supplies, Inc.",
                    address: "506 A Richmonde Plaza, 21 San Miguel Avenue, Pasig City",
                    contactNo: "(02) 634-0441"
                },
                {
                    name: "Getz Pharma Phils. Inc.",
                    address: "2F The Rockwell Business Ctr. Tower 1, Ortigas Avenue, Pasig City"
                },
                {
                    name: "Glenmark Philippines Inc.",
                    address: "Unit 203, Lapanday Center, 2263, Chino Roces Avenue, Makati City, 1200",
                    contactNo: "(02) 802-3235 loc. 118"
                },
                {
                    name: "Great Reconstruction Surgicals, Inc.",
                    address: "Rm. 501-C Culmat Bldg., 1270-1330, E. Rodriguez Sr. Avenue, Quezon City",
                    telefax: "(63-2) 725-0867"
                },
                {
                    name: "Healthworld International Philippines Corp.",
                    address: "421 Quirino Ave., La Huerta, Parañaque City",
                    contactNo: "(02) 829-0175",
                    telefax: "(02) 826-6770"
                },
                {
                    name: "Hearwell Medical",
                    address: "16 Shaw Road, #01-04, Singapore 367954",
                    contactNo: "(65) 6509 927"
                },
                {
                    name: "Hi-Eisai Pharmaceutical Inc. ",
                    address: "Unit 2, 22/F, Tower 6789 Ayala Avenue, Makati City 1226",
                    contactNo: "+63 2 887 1053",
                    telefax: "(63-2) 887-5172"
                },
                {
                    name: "Homecare & Hospital Enterprises ",
                    address: "1744 B Rizal Avenue, Sta. Cruz, Manila",
                    contactNo: "(02) 313-5450; 313-5114"
                },
                {
                    name: "Innogene Kalbiotech Pte. Ltd.",
                    address: "5F Regus Gateway Tower, Araneta Center, Cubao, Quezon City",
                    contactNo: "+63 2 790-4405 "
                },
                {
                    name: "Integra Medica Solutions Corp. ",
                    address: "16 S 3 Manhattan Parkview, Gen. Malvar Avenue, Cubao, Quezon City",
                    contactNo: "(02) 961-8284"
                },
                {
                    name: "I.O.S. Marketing Corp.",
                    address: "647 P. Paterno St., Quiapo, Manila",
                    contactNo: "(02) 733-5445",
                    telefax: "(02) 733-3767"
                },
                {
                    name: "Johnson & Johnson (Philippines), Inc.",
                    address: "Edison Road, Barrio Ibayo, Parañaque City",
                    contactNo: "(63-2) 824-8845"
                },
                {
                    name: "ustright Healthcare Inc. ",
                    address: "#20 Palanza corner Guirayan Streets, Brgy. Doña Imelda, Quezon City",
                    contactNo: "(63-2) 412-2367",
                    telefax: "(63-2) 413-0533"
                },
                {
                    name: "Karl Storz GmbH & Co.KG",
                    address: "19-01 Picadiliy Star Building, BGC, 4th Ave, Taguig City, 1636",
                    contactNo: "317-4530 loc. 211"
                },
                {
                    name: "Lefort Medical Trading Corporation",
                    address: "Unit 102 Susana Condominium, Banahaw St., Cubao, Quezon City",
                    contactNo: "(02) 413-4506"
                },
                {
                    name: "Manila Hearing Aid Center, Inc.",
                    address: "Unit 809 8th Floor BSA Twin Tower, Bank Drive, Brgy. Wack- Wack Greenhills East, Ortigas Center, Mandaluyong City",
                    telefax: "(02) 696-1580 loc. 101"
                },
                {
                    name: "Manning Abella",
                    address: "98 Quezon St., Tondo, Manila",
                    contactNo: "0916-4714158",
                    mobile: "0916-4714158"
                },
                {
                    name: "MedAlphA Philippines Inc.",
                    address: "Unit 1020, 2301 Civic Place Condominium, Civic Drive, Filinvest Corporate City, Alabang, Muntinlupa City, ",
                    telefax: "(02) 865-6991"
                },
                {
                    name: "Medilight Incorporated",
                    address: "11 B April Extension Congressional Avenue, Bahay Toro, Quezon City",
                    contactNo: "(02) 454-7074"
                },
                {
                    name: "Merck, Inc.",
                    address: "25/F GT International Tower, 6813 Ayala Avenue, cor., HV Dela Costa St., Salcedo Village, Makati City, Philippines",
                    contactNo: "(02) 214-3346"
                },
                {
                    name: "Microlab Phils., Inc. ",
                    address: "1157 Rodriguez Avenue, cor. Heneral Lacuña St., Bangkal, Makati City",
                    contactNo: "(63-2) 551-3839 ",
                    telefax: "(63-2) 831-9621 "
                },
                {
                    name: "MTC Opto-Medic, Inc.",
                    address: "3rd Floor OHI Bldg., 179 Yakal St., San Antonio Village, Makati City",
                    contactNo: "(02) 813-1351"
                },
                {
                    name: "NuEar Philippines, Inc.",
                    address: "Unit 2001, 20/F Medical Plaza Ortigas, San Miguel Ave., Ortigas Center, Pasig City",
                    contactNo: "(02) 571-1770"
                },
                {
                    name: "Nurture Med Pharma, Inc. a subsidiary of Dyna Drug Corp.",
                    address: "Capt. Henry Javier cor. Danny Floro St., Brgy. Oranbo, Pasig City",
                    contactNo: "0932-8627882"
                },
                {
                    name: "Olten Instruments Phils. Corp.",
                    address: "16 Sampaguita St., Tomasa Subd., Ususan, Taguig City",
                    contactNo: "(02) 628-3293; 642-7088"
                },
                {
                    name: "One Pharma Company, Inc.",
                    address: "Abel Nosce St., BF Resort Village, Talon 2 Las Piñas City",
                    contactNo: "(02) 871-2537"
                },
                {
                    name: "Pfizer, Inc.",
                    address: "19th Floor, 8 Rockwell Building, Hidalgo Drive, Rockwell Center, Makati City",
                    contactNo: "(02) 451-9200"
                },
                {
                    name: "Pharex Health Corp.",
                    address: "Units 101-102, G/F Bldg. Alpha UP-Ayala Land TechnoHub, Commonwealth Ave."
                },
                {
                    name: "Diliman, Quezon City",
                    contactNo: "(02) 433-8088 "
                },
                {
                    name: "Pharma Nutria N.A. (MM-L), Inc.",
                    address: "SV More Corporate Center, 16 Sct. Tuazon, Cor. Roces Avenue, Quezon City",
                    contactNo: "+632 373-6240"
                },
                {
                    name: "Pharmahex, Inc. ",
                    address: "J.A. Development Compound, #7 E. Rodriguez Jr. Ave., Bagong Ilog, Pasig City 1600",
                    contactNo: "(02) 671-2090"
                },
                {
                    name: "Pines Medical Trading",
                    address: "14-A Sunflower St., San Luis Village, Baguio City"
                },
                {
                    name: "PMII-Bayer Consumer Health ",
                    address: "29th Flr. Menarco Tower, 32nd Street, Bonifacio Global City, Taguig"
                },
                {
                    name: "Quality Sleep Enterprise Inc.",
                    address: "6/F High Pointe Bldg., 1184 C. Roces Avenue, Makati City",
                    contactNo: "(02) 816-3860"
                },
                {
                    name: "ResWerkes  Phils., Inc.",
                    address: "Unit 1001, 10th Floor The Orient Square Building, F. Ortigas, Jr. Road, Ortigas Center, Pasig City",
                    contactNo: "(02) 470-2931",
                    teleFax: "(02) 470-2809"
                },
                {
                    name: "Sai-International",
                    address: "3212 Tindalo St., United Parañaque Subdivision 2, Parañaque City",
                    contactNo: "(02) 821-8828"
                },
                {
                    name: "Sandoz Philippines Corp.",
                    address: "7th Floor Asian Reinsurance Bldg., Gamboa and Salcedo Sts., Legaspi Village, Makati City ",
                    contactNo: "(63-2) 368-7888 loc. 836",
                    telefax: "(63-2) 815-0101     "
                },
                {
                    name: "Sensomed Philippines, Inc.",
                    address: "Unit 1508 Orient Square Bldg., F. Ortigas Jr. Road, Ortigas Center, Pasig City ",
                    contactNo: "(63-2) 635-5169",
                    telefax: "(63-2) 635-5170"
                },
                {
                    name: "Trevor International Trading – Dr. Kim",
                    address: "333 A. Mabini St., Caloocan City"
                },
                {
                    name: "The Cathay Drug Company Inc.",
                    address: "2/F Vernida 1 Bldg., 120 Amorsolo St., Legaspi Village, Makati City",
                    contactNo: "(63-2) 892-5936 ",
                    telefax: "(63-2) 818-6739"
                },
                {
                    name: "Unilab, Inc. - PRMD",
                    address: "G/F 132 Bayanihan Annex Bldg., Pioneer St., Mandaluyong City",
                    contactNo: "(632) 858-1966 loc 1962"
                },
                {
                    name: "Westmont Pharmaceuticals",
                    address: "4th Floor, Bonaventure Plaza, Ortigas Avenue, Greenhills, San Juan City",
                    contactNo: "(63-2) 858-1277"
                },
            ],
        };
    }
    SponsorsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SponsorsPage');
    };
    SponsorsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sponsors',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\sponsors\sponsors.html"*/'<ion-content >\n<div class="page-header">\n	<img src="assets/imgs/handshake2.png">\n	<h5>Sponsors</h5>\n</div>\n\n<div padding>\n	<img src="assets/imgs/sponsor_platinum_header.png" class="sponsor-header">\n	<div class="sponsor-row">\n	<img src="{{sponsor.imageUrl}}" class="sponsor-icon" *ngFor="let sponsor of sponsors.platinum">\n	</div>\n	<img src="assets/imgs/sponsor_gold_header.png" class="sponsor-header">\n	<div class="sponsor-row">\n	<img src="{{sponsor.imageUrl}}" class="sponsor-icon" *ngFor="let sponsor of sponsors.gold">\n	</div>\n	<img src="assets/imgs/sponsor_silver_header.png" class="sponsor-header">\n	<div class="sponsor-row">\n	<img src="{{sponsor.imageUrl}}" class="sponsor-icon" *ngFor="let sponsor of sponsors.silver">\n	</div>\n	<img src="assets/imgs/sponsor_bronze_header.png" class="sponsor-header">\n	<div class="sponsor-row">\n	<img src="{{sponsor.imageUrl}}" class="sponsor-icon" *ngFor="let sponsor of sponsors.bronze">\n	</div>\n		<img src="assets/imgs/sponsor_minor_header.png" class="sponsor-header">\n	<div class="sponsor-minor-row" padding>\n		<div class="sponsor-minor" *ngFor="let sponsor of sponsors.minor" >\n			<h5><b>{{sponsor.name}}</b></h5>\n			<h5>{{sponsor.address}}</h5>\n			<h5 *ngIf="sponsor.contactNo">{{sponsor.contactNo}}</h5>\n			<h5 *ngIf="sponsor.telefax">{{sponsor.teleFax}}</h5>\n			<h5 *ngIf="sponsor.mobile">{{sponsor.mobile}}</h5>\n		</div>\n	</div>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\sponsors\sponsors.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], SponsorsPage);
    return SponsorsPage;
}());

//# sourceMappingURL=sponsors.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnnouncementsPage = /** @class */ (function () {
    function AnnouncementsPage(navCtrl, navParams, evt) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.evt = evt;
        this.announcements = [
            "<b>October 21, 2018 (Sunday)</b><br>\n\t\tCONFERMENT OF DIPLOMATS<br>\n\t\t1:00 - 3:00 PM <br>\n\t\tCentennial Hall, The Manila Hotel"
        ];
    }
    AnnouncementsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AnnouncementsPage');
    };
    AnnouncementsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-announcements',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\announcements\announcements.html"*/'<ion-content >\n<div class="page-header">\n	<img src="assets/imgs/announcement2.png">\n	<h5>Announcements</h5>\n</div>\n\n	<div padding>\n		<ion-list>\n			<ion-item *ngFor="let announcement of announcements">\n				<div [innerHtml]="announcement"></div>\n			</ion-item>\n		</ion-list>\n	</div>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\announcements\announcements.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], AnnouncementsPage);
    return AnnouncementsPage;
}());

//# sourceMappingURL=announcements.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration_registration__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accomodation_accomodation__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__venue_venue__ = __webpack_require__(204);
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
    function AboutPage(navCtrl, navParams, evt) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.evt = evt;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage.prototype.navTo = function (page) {
        var p;
        switch (page) {
            case "registration":
                p = __WEBPACK_IMPORTED_MODULE_2__registration_registration__["a" /* RegistrationPage */];
                break;
            case "accomodation":
                p = __WEBPACK_IMPORTED_MODULE_3__accomodation_accomodation__["a" /* AccomodationPage */];
                break;
            case "venue":
                p = __WEBPACK_IMPORTED_MODULE_4__venue_venue__["a" /* VenuePage */];
                break;
        }
        this.navCtrl.push(p);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\about\about.html"*/'<ion-content >\n<div class="page-header">\n	<img src="assets/imgs/about2.png">\n	<h5>ABOUT THE CONGRESS</h5>\n</div>\n\n	<ion-list class="options-list">\n		<ion-item class="list-option" (click)="navTo(\'registration\')">\n			<img src="assets/imgs/registration.png" >\n			<h5>Registration</h5>\n			<p>></p>\n		</ion-item>\n		<ion-item class="list-option" (click)="navTo(\'accomodation\')">\n			<img src="assets/imgs/hotel.png" >\n			<h5>Hotel Accomodation</h5>\n			<p>></p>\n		</ion-item>\n		<ion-item class="list-option" (click)="navTo(\'venue\')">\n			<img src="assets/imgs/pin.png" >\n			<h5>Venue</h5>\n			<p>></p>\n		</ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegistrationPage = /** @class */ (function () {
    function RegistrationPage(navCtrl, navParams, evt) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.evt = evt;
    }
    RegistrationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistrationPage');
    };
    RegistrationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registration',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\registration\registration.html"*/'<ion-content >\n<div class="page-header" style="justify-content: left;">\n	<h6>Registration <br>\n		<span style="font-size: 10px;">\n			ABOUT THE CONGRESS\n		</span>\n	</h6>\n</div>\n\n<div padding>\n	<p>Please click on the form below to register online:</p>\n	<a href="#">Registration Form for the IFHNOS World Tour 2018 and 62nd PSO-HNS Annual Convention</a>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\registration\registration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], RegistrationPage);
    return RegistrationPage;
}());

//# sourceMappingURL=registration.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccomodationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccomodationPage = /** @class */ (function () {
    function AccomodationPage(navCtrl, navParams, evt) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.evt = evt;
        this.content = "\n\t<p>Book your stay at the Manila Hotel here. Registered delegates will be given a special code to avail of the preferential room rate. You may also email the secretariat at ifhnosmanila2018@pso-hns.org to reserve directly.</p>\n\n\t<img src=\"assets/imgs/superior_deluxe_bedroom.jpg\">\n\n\t<h2>Superior Deluxe Room</h2>\n\t<h3>PHP 8,700.00 nett</h3>\n\n\t<p>The perfect retreat from the bustling city, each room is ornately decorated with extreme sophistication to suit your taste.</p>\n\n\t<ol>\n\t<li>Free Wi-Fi access</li>\n\t<li>Lavish premium bathroom amenities and toiletries </li>\n\t<li>for your convenience</li>\n\t<li>Coffee and tea making facilities</li>\n\t<li>MP3 player-compatible with AM/FM clock radio</li>\n\t<li>Separate bathtub and walk-in rain shower</li>\n\t<li>Individually electronic-controlled air-conditioning</li>\n\t<li>Remote-control LCD TV with cable channels</li>\n\t<li>Fully stocked mini-bar</li>\n\t<li>In-room safe</li>\n\t<li>Signature contact-less electronic door lock by</li>\n\t</ol>\n\n\t<p>\n\tAside from the convention venue, there are numerous excellent hotels nearby . Please watch this space for further details. <br> Thank you for your interest!\n\t</p>\n\n\t<img src=\"assets/imgs/hotel.jpg\">\n\n\t";
    }
    AccomodationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccomodationPage');
    };
    AccomodationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-accomodation',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\accomodation\accomodation.html"*/'\n<ion-content >\n<div class="page-header" style="justify-content: left;">\n	<h6>Hotel Accomodation <br>\n		<span style="font-size: 10px;">\n			ABOUT THE CONGRESS\n		</span>\n	</h6>\n</div>\n\n<div [innerHtml]="content" class="accomodation-content" padding></div>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\accomodation\accomodation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], AccomodationPage);
    return AccomodationPage;
}());

//# sourceMappingURL=accomodation.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VenuePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VenuePage = /** @class */ (function () {
    function VenuePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = {};
        this.event = this.navParams.get("event");
    }
    VenuePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VenuePage');
    };
    VenuePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-venue',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\venue\venue.html"*/'<ion-content >\n<div class="page-header" style="justify-content: left;">\n	<h6>Venue <br>\n		<span style="font-size: 10px;">\n			ABOUT THE CONGRESS\n		</span>\n	</h6>\n</div>\n<div class="venue-container">\n	<img src="assets/imgs/venue.png">\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\venue\venue.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], VenuePage);
    return VenuePage;
}());

//# sourceMappingURL=venue.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResearchPresentationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__research_info_research_info__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResearchPresentationPage = /** @class */ (function () {
    function ResearchPresentationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clicked = {
            oral: false,
            poster: false,
        };
    }
    ResearchPresentationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResearchPresentationPage');
    };
    ResearchPresentationPage.prototype.navToResearchInfo = function (type) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__research_info_research_info__["a" /* ResearchInfoPage */], { "type": type });
    };
    ResearchPresentationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-research-presentation',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\research-presentation\research-presentation.html"*/'<ion-content padding>\n	<div class="page-header">\n		<img src="assets/imgs/chart.png">\n		<h5>Research Presentation</h5>\n	</div>\n\n	<div class="research-options">\n		<div class="option oral">\n			<div class="title" (click)="clicked.oral = !clicked.oral">\n				<h5>ORAL PRESENTATION</h5>\n				<ion-icon name="arrow-dropdown-circle" *ngIf="!clicked.oral"></ion-icon>\n				<ion-icon name="arrow-dropup-circle" *ngIf="clicked.oral"></ion-icon>\n			</div>\n			<div class="sub-opt" *ngIf="clicked.oral">\n				<h5 (click)="navToResearchInfo(\'analytical\')">Analytical Research Paper Contest</h5>\n				<h5 (click)="navToResearchInfo(\'descriptive\')">Descriptive Research Paper Contest</h5>\n			</div>\n		</div>\n		<div class="option poster">\n			<div class="title"  (click)="clicked.poster = !clicked.poster">\n				<h5>POSTER PRESENTATION</h5>\n				<ion-icon name="arrow-dropdown-circle" *ngIf="!clicked.poster"></ion-icon>\n				<ion-icon name="arrow-dropup-circle" *ngIf="clicked.poster"></ion-icon>\n			</div>\n			<div class="sub-opt"  *ngIf="clicked.poster" >\n				<h5 (click)="navToResearchInfo(\'innovation\')">Surgical Innovation Paper Contest</h5>\n				<h5 (click)="navToResearchInfo(\'instrumentation\')">Surgical Instrumentation Paper Contest</h5>\n			</div>\n		</div>\n		<div class="option oral" (click)="navToResearchInfo(\'free\')">\n			<div class="title">\n				<h5>FREE PAPER</h5>\n			</div>\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\research-presentation\research-presentation.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object])
    ], ResearchPresentationPage);
    return ResearchPresentationPage;
    var _a, _b;
}());

//# sourceMappingURL=research-presentation.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
                imageUrl: "assets/imgs/ph_icon.png",
                content: "In a country that is made up of over 7,100 islands and islets, most travel from other countries will be via air. Manila, Cebu, Davao, Clark, Subic, and Laoag are the international gateways, with the Ninoy Aquino International Airport (NAIA) in Manila as the primary airport. It is served by more than 30 airlines, which fly to different cities around the world. There are three international terminals, each serving specific airlines. Flights for IFHNOS delegates are best booked to fly to NAIA."
            },
            {
                title: "Entry Formalities",
                imageUrl: "assets/imgs/passport_icon.png",
                content: "Nationals from countries (click list below) who are traveling to the Philippines for business and tourism purposes are allowed to enter the Philippines without visas for a stay not exceeding twenty-one (21) days, provided they hold valid tickets for their return journey to port of origin or next port of destination and their passports are valid for a period of at least six (6) months beyond the contemplated period of stay. However, Immigration Officers at ports of entry may exercise their discretion to admit holders of passports valid for at least sixty (60) days beyond the intended period of stay. 	Nationals from countries allowed to enter the Philippines without Visas for a stay not exceeding 21 days"
            },
            {
                title: "Customs and Currency Regulation",
                imageUrl: "assets/imgs/currency_icon.png",
                content: "Upon Arriving: Visitors are allowed to bring in duty free personal belongings, two cartons of cigarettes or two tins of pipe tobacco and up to one liter of alcohol. Balikbayans have separate rules and should check with the Embassy or Consulate in their home city. The currency in the Philippines is the Peso (PhP) and the Centavo. 100 centavos = P1. Coin denominations are: 1, 5, 10, and 25 centavos, P1, and P5. Bill denominations are : 10, 20, 50, 100, 500 and 1, 000 pesos. Foreign currency may be exchanged at your hotel, and in most of the large department stores, banks and authorized money changing shops. Exchanging money anywhere else is illegal and the laws are strictly enforced.Most large stores, restaurants , hotels and resorts accept major credit cards including American Express, Visa and MasterCard. Personal checks drawn on foreign banks are generally not accepted.It is illegal for any incoming or outgoing passenger to bring in or out Philippine Pesos in excess of P10,000.00 without prior authority from the Bangko Sentral ng Pilipinas. Any violation of this rule may lead to its seizure and civil penalties and / or criminal prosecution. (BSP Circular 98-1995)The transportation of foreign currency or monetary instruments is legal. However, the carrying of foreign currency in excess of US$10,000.00 or its equivalent in other foreign currencies must be declared to a Customs Officer or the Bangko Sentral ng Pilipinas. Violation of this rule may lead to seizure and sanctions, fines and / or penalties."
            }
        ];
    }
    InformationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InformationPage', this.information);
    };
    InformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-information',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\information\information.html"*/'<ion-content padding class="header-fix">\n	<ion-list>\n		<ion-item *ngFor="let info of information" text-wrap>\n			<div class="info-header">\n				<img src="{{info.imageUrl}}">\n				<h2><b>{{info.title}}</b></h2>\n			</div>\n			<p style="margin-top: 10px;">{{info.content}}</p>\n\n		</ion-item>\n		<h5>For more information about the Philippines, please visit the website of the Department of Tourism</h5>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\information\information.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], InformationPage);
    return InformationPage;
}());

//# sourceMappingURL=information.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_event_list_event_list__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_event_info_event_info__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_event_event__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_sponsors_sponsors__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_information_information__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_announcements_announcements__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_about_about__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_registration_registration__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_accomodation_accomodation__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_venue_venue__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_research_presentation_research_presentation__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_research_info_research_info__ = __webpack_require__(281);
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
                __WEBPACK_IMPORTED_MODULE_13__pages_information_information__["a" /* InformationPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_announcements_announcements__["a" /* AnnouncementsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_registration_registration__["a" /* RegistrationPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_accomodation_accomodation__["a" /* AccomodationPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_venue_venue__["a" /* VenuePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_research_presentation_research_presentation__["a" /* ResearchPresentationPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_research_info_research_info__["a" /* ResearchInfoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_event_list_event_list__["a" /* EventListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_event_info_event_info__["a" /* EventInfoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_sponsors_sponsors__["a" /* SponsorsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_information_information__["a" /* InformationPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_announcements_announcements__["a" /* AnnouncementsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_registration_registration__["a" /* RegistrationPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_accomodation_accomodation__["a" /* AccomodationPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_venue_venue__["a" /* VenuePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_research_presentation_research_presentation__["a" /* ResearchPresentationPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_research_info_research_info__["a" /* ResearchInfoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_app_app__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(194);
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
    function MyApp(platform, statusBar, splashScreen, evt, app) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            evt.subscribe("cmd:back", function () {
                app.navPop();
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_app_app__["a" /* App */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResearchInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResearchInfoPage = /** @class */ (function () {
    function ResearchInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = "Analytical Research Paper Contest";
        this.content = [];
        this.contents = {
            analytical: {
                title: "Analytical Research Paper Contest",
                body: [
                    "ARC1:  Comparison of The Incidence of Post-Operative Bleeding in Tonsillectomy versus Tonsillectomy with Fossa Closure in a Tertiary Military Hospital: A Retrospective Cohort Study",
                    "ARC2: The use of Smartphone vs Conventional ENT Endoscopy among Otolaryngologists: A cross-sectional analytical study",
                    "ARC3: Association Of Ultrasonographic Findings And Thyroid Malignancy In A Tertiary Hospital In Metro Manila",
                    "ARC4: Morbidity Outcomes of Prophylactic Central Neck Dissection with Total Thyroidectomy versus Total Thyroidectomy alone in Patients with Node Negative Papillary Thyroid Cancer: A Meta Analysis",
                    "ARC5: Comparison of Salivary pH and Taste Sensitivity among Patients in a Tertiary Hospital: A Cross Sectional Study"
                ]
            },
            descriptive: {
                title: "Descriptive Research Paper Contest",
                body: [
                    "DRC1: Incidence of Facial Paralysis in Temporal Bone Fracture at a Tertiary Government Hospital in the Philippines",
                    "DRC2:Outcome of Single-operator Rigid Esophagoscopy in Sword Swallower’s Position Technique for Extraction of Ingested Foreign Body",
                    "DRC3: Maxillary Sinus Squamous Cell Carcinoma in a Tertiary Hospital in the Philippines",
                    "DRC4: Advanced Laryngotracheal Stenosis Patients in a Tertiary Government Hospital: Clinico-etiologic profile, Management & Outcome (A Preliminary Study)",
                    "DRC5: Clinical Profile of Filipino Patients with Epistaxis: A University Hospital Experience"
                ]
            },
            innovation: {
                title: "Surgical Innovation Paper Contest",
                body: [
                    "PSC1: Penetrating Neck Injury Secondary To Hacking Wound: A Case Report",
                    "PSC2: One Day Simultaneous Bilateral Endoscopic Type I Tympanoplasty With Cartilage Reinforcement: Our Experience In Tertiary Public Hospital",
                    "PSC3: The Application Of Open-source 3d Planning Software In Virtual Reconstruction Of Complex Maxillofacial Defects: Our Local Experience",
                    "PSC4: The Use Of Middle Turbinate Mucosal Graft In Endoscopic Guided Repair Of Csf Leak At The Cribriform Plate In A Patient With Severe Craniofacial",
                    "PSC5: A Qualitative Experimental Study On The Efficacy Of Polydioxanone Suture (Pds) I As Internal Fixator Among Pediatric Patients With Open Displaced Linear Fracture Of The Mandibular Body, Angle Or Symphysis Admitted In A Tertiary Hospital From November 2016 – May 2018"
                ]
            },
            instrumentation: {
                title: "Surgical Instrumentation Paper Contest",
                body: [
                    "PSC6: Electrocautery Knife",
                    "PSC7: Titanium Mesh as an alternative to Isshiki’s Thyroplasty Titanium Bridge for Isshiki Thyroplasty Type II"
                ]
            },
            free: {
                title: "Free Paper Presentation",
                body: [
                    "FP1: A Case of Ciguatera Fish Poisoning in a 23 Year Old Male",
                    "FP2: A Case Report of a Bilateral Non-Contiguous Buccal Squamous Cell Carcinoma in a 39-year Old Male",
                    "FP3: A Primary Submental Papillary Cystadenocarcinoma from a Salivary Gland Origin – A Rare Case Report",
                    "FP4: A Retrospective Study Comparing Enucleation Combined with Peripheral Ostectomy and Segmental Mandibulectomy in the Management of Large Cystic Ameloblastomas Among Patients in Cebu City, Philippines from year January 1, 2000 to December 31, 2017.",
                    "FP5: A Retrospective Study of Hypocalcemic Patients with Benign or Malignant Thyroid Mass Who Underwent Total Thyroidectomy at Vicente Sotto Memorial Medical Center, Cebu City",
                    "FP6: A Retrospective Study on the Possible Risk Factors of Failed Otoacoustic Emission Testing Results among Neonates Delivered in a Tertiary Hospital from January to December 2015",
                    "FP7: Adenoid Cystic Carcinoma of the Nasal Ala",
                    "FP8: Association of ultrasonographic findings and thyroid malignancy in a tertiary hospital in Metro Manila",
                    "FP9: Basal Cell Carcinoma, Odontogenic Cysts, Brain and Skeletal Abnormalities (Gorlin Goltz) Syndrome in a 46-year-old female",
                    "FP10: Calcifying Epithelial Odontogenic Tumor in a Young face: Conservative Surgery in an Adolescent Patient"
                ]
            },
        };
        this.title = this.contents[this.navParams.get("type")].title;
        this.content = this.contents[this.navParams.get("type")].body;
    }
    ResearchInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResearchInfoPage');
    };
    ResearchInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-research-info',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\research-info\research-info.html"*/'<ion-content padding class="header-fix">\n<div class="page-header">\n	<img src="assets/imgs/chart.png">\n	<h5>Research Presentation</h5>\n</div>\n\n<div class="research-info">\n	<h5 class="title">\n		{{title}}\n	</h5>\n	<ion-list>\n		<ion-item *ngFor="let item of content" text-wrap>\n			{{item}}\n		</ion-item>\n	</ion-list>\n		\n</div>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\research-info\research-info.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object])
    ], ResearchInfoPage);
    return ResearchInfoPage;
    var _a, _b;
}());

//# sourceMappingURL=research-info.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
                cellNo: "0917-1144615",
                bannerUrl: "assets/imgs/ifhnos.png",
                iconUrl: "assets/imgs/ifhnos_icon.png"
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
            selector: 'page-event-list',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\event-list\event-list.html"*/'<ion-header>\n\n  <ion-navbar class="theme-background">\n  	<img class="header-logo" src="assets/imgs/cce_logo.png">\n    <ion-title>Congress & Events</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-list>\n		<ion-item class="event-list-item" *ngFor="let event of events" (click)="navToEvent(event)">\n			<img class="event-img" src="{{event.iconUrl}}">\n			<div class="event-info" >\n				<h5>{{event.name}}</h5>\n				<h5>{{event.location}}</h5>\n				<h5>{{event.date}}</h5>\n			</div>\n		</ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\event-list\event-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], EventListPage);
    return EventListPage;
}());

//# sourceMappingURL=event-list.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map