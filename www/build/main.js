webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(195);
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
    function EventListPage(navCtrl, navParams, evts) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.evts = evts;
        this.events = [
            {
                name: "IFHNOS World Tour Manila",
                location: "Manila Hotel",
                date: "Oct 22-24, 2018",
                bannerUrl: "assets/imgs/ifhnos.png",
                iconUrl: "assets/imgs/ifhnos_icon.png"
            }
        ];
    }
    EventListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventListPage');
    };
    EventListPage.prototype.navToEvent = function (event) {
        this.evts.publish("select:event", event);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */], { "event": event });
    };
    EventListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-list',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\event-list\event-list.html"*/'<ion-header >\n	<ion-navbar class="theme-background default" >\n		<img class="header-logo" src="assets/imgs/cce_logo.png">\n	  <ion-title>Congress & Events</ion-title>\n	</ion-navbar>\n</ion-header>\n<ion-content padding>\n	<ion-list>\n		<ion-item class="event-list-item" *ngFor="let event of events" (click)="navToEvent(event)">\n			<img class="event-img" src="{{event.iconUrl}}">\n			<div class="event-info" >\n				<h5>{{event.name}}</h5>\n				<h5>{{event.location}}</h5>\n				<h5>{{event.date}}</h5>\n			</div>\n		</ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\event-list\event-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], EventListPage);
    return EventListPage;
}());

//# sourceMappingURL=event-list.js.map

/***/ }),

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_list_event_list__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_info_event_info__ = __webpack_require__(215);
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
        switch (page) {
            case "eventlist":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__event_list_event_list__["a" /* EventListPage */]);
                break;
            case "contact":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__event_info_event_info__["a" /* EventInfoPage */]);
                break;
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\home\home.html"*/'<ion-content padding>\n\n<div class="flex-center-column" style="height: 100%;">\n	<img class="logo" src="assets/imgs/cce_logo.png">\n	<h5><b>Congress</b> & <b>Events</b></h5>\n	<button ion-button class="basic-btn theme-background" (click)="navTo(\'eventlist\')">EVENTS</button>\n	<button ion-button class="basic-btn theme-background" (click)="navTo(\'contact\')">CONTACTS</button>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_list_event_list__ = __webpack_require__(100);
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
            selector: 'page-login',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\login\login.html"*/'<ion-content padding>\n\n	<div class="flex-center-column password-container">\n		<h5>Enter password to proceed</h5>\n		<input class="password-container" type="password" name="password" [(ngModel)]="passwordInput">\n		<div class="action-btn-row">\n			<button ion-button (click)="back()" style="background: #000;">BACK</button>\n			<button ion-button (click)="login()" style="background: #000;">LOGIN</button>\n		</div>\n		<h5 class="please-ask-text">Please ask the confress secretariat for the password</h5>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_event__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__information_information__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_app_app__ = __webpack_require__(6);
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
    function TabsPage(navCtrl, navParams, evt, platform, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.evt = evt;
        this.platform = platform;
        this.app = app;
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__event_event__["a" /* EventPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__information_information__["a" /* InformationPage */];
        this.event = null;
        this.event = this.navParams.get("event");
        this.evt.subscribe("select:event", function (event) {
            _this.event = event;
        });
        this.platform.registerBackButtonAction(function () {
            app.navPop();
        }, 1);
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage', this.event);
    };
    TabsPage.prototype.back = function () {
        this.app.navPop();
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\tabs\tabs.html"*/'<ion-header >\n\n  <ion-navbar class="theme-background" *ngIf="event">\n  	<img class="header-banner" src="{{event.bannerUrl}}">\n  </ion-navbar>\n\n\n\n  <ion-navbar class="theme-background default" *ngIf="!event">\n  	<img class="header-logo" src="assets/imgs/cce_logo.png">\n    <ion-title>Congress & Events</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-tabs tabsPlacement="bottom" selectedIndex="1">\n  <ion-tab  tabTitle="Back" tabIcon="arrow-round-back" (ionSelect)="back()"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Information" tabIcon="information-circle">\n  <ion-tab  tabTitle="Favourites" tabIcon="star-outline"></ion-tab>\n  </ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_app_app__["a" /* App */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sponsors_sponsors__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__announcements_announcements__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__research_presentation_research_presentation__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__schedule_schedule__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__speakers_speakers__ = __webpack_require__(210);
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
                p = __WEBPACK_IMPORTED_MODULE_6__schedule_schedule__["a" /* SchedulePage */];
                break;
            case "speakers":
                p = __WEBPACK_IMPORTED_MODULE_7__speakers_speakers__["a" /* SpeakersPage */];
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
        console.log("p: ", p);
        this.navCtrl.push(p);
    };
    EventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\event\event.html"*/'<ion-content padding>\n	<ion-list class="options-list">\n		<ion-item class="list-option" (click)="navTo(\'program\')">\n			<img src="assets/imgs/program.png" >\n			<h5>Program</h5>\n			<p>></p>\n		</ion-item>\n		<ion-item class="list-option" (click)="navTo(\'speakers\')">\n			<img src="assets/imgs/microphone.png" >\n			<h5>Speakers</h5>\n			<p>></p>\n		</ion-item>\n		<ion-item class="list-option" (click)="navTo(\'research\')">\n			<img src="assets/imgs/chart.png" >\n			<h5>Research Presentation</h5>\n			<p>></p>\n		</ion-item>\n		<ion-item class="list-option"  (click)="navTo(\'about\')">\n			<img src="assets/imgs/about.png">\n			<h5>About the Congress</h5>\n			<p>></p>\n		</ion-item>\n		<ion-item class="list-option" (click)="navTo(\'sponsors\')">\n			<img src="assets/imgs/handshake.png">\n			<h5>Sponsors</h5>\n			<p>></p>\n		</ion-item>\n		<a href="https://beta.pso-hns.org/2018-pso-hns-annual-convention-and-ifhnos-manila-2018-world-tour-evaluation/" style="text-decoration: none;">\n			<ion-item class="list-option" >\n				<img src="assets/imgs/survey.png">\n				<h5 >Course Evaluation</h5>\n				<p>></p>\n			</ion-item>\n		</a>\n		<ion-item class="list-option" (click)="navTo(\'announcements\')">\n			<img src="assets/imgs/announcement.png" >\n			<h5>Announcements</h5>\n			<p>></p>\n		</ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\event\event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], EventPage);
    return EventPage;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SponsorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sponsor_popover_sponsor_popover__ = __webpack_require__(199);
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
    function SponsorsPage(navCtrl, navParams, evt, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.evt = evt;
        this.popoverCtrl = popoverCtrl;
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
                    imageUrl: "assets/imgs/mylan_logoo.jpg"
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
    };
    SponsorsPage.prototype.showSponsorPopover = function (logo) {
        var imageUrl;
        switch (logo) {
            case "m":
                imageUrl = "assets/imgs/sponsors_popup/CCE_Sponsor Popup_FA-01.jpg";
                break;
            case "abbott":
                imageUrl = "assets/imgs/sponsors_popup/CCE_Sponsor Popup_FA-02.jpg";
                break;
            case "gsk":
                imageUrl = "assets/imgs/sponsors_popup/CCE_Sponsor Popup_FA-03.jpg";
                break;
            case "mylan":
                imageUrl = "assets/imgs/sponsors_popup/CCE_Sponsor Popup_FA-04.jpg";
                break;
            case "natrapham":
                imageUrl = "assets/imgs/sponsors_popup/CCE_Sponsor Popup_FA-05.jpg";
                break;
            case "uap":
                imageUrl = "assets/imgs/sponsors_popup/CCE_Sponsor Popup_FA-06.jpg";
                break;
        }
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__sponsor_popover_sponsor_popover__["a" /* SponsorPopoverPage */], {
            imageUrl: imageUrl
        }, {
            cssClass: "sponsor-popover",
            enableBackdropDismiss: true,
            showBackdrop: true
        });
        popover.present({});
    };
    SponsorsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sponsors',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\sponsors\sponsors.html"*/'<ion-content >\n<div class="page-header">\n	<img src="assets/imgs/handshake2.png">\n	<h5>Sponsors</h5>\n</div>\n\n<div padding>\n	<img src="assets/imgs/sponsor_platinum_header.png" class="sponsor-header">\n	<div class="sponsor-row">\n	<img src="{{sponsor.imageUrl}}" class="sponsor-icon" *ngFor="let sponsor of sponsors.platinum" (click)="showSponsorPopover(sponsor.name)">\n	</div>\n	<img src="assets/imgs/sponsor_gold_header.png" class="sponsor-header">\n	<div class="sponsor-row">\n	<img src="{{sponsor.imageUrl}}" class="sponsor-icon" *ngFor="let sponsor of sponsors.gold" (click)="showSponsorPopover(sponsor.name)">\n	</div>\n	<img src="assets/imgs/sponsor_silver_header.png" class="sponsor-header">\n	<div class="sponsor-row">\n	<img src="{{sponsor.imageUrl}}" class="sponsor-icon" *ngFor="let sponsor of sponsors.silver" (click)="showSponsorPopover(sponsor.name)">\n	</div>\n	<img src="assets/imgs/sponsor_bronze_header.png" class="sponsor-header">\n	<div class="sponsor-row">\n	<img src="{{sponsor.imageUrl}}" class="sponsor-icon" *ngFor="let sponsor of sponsors.bronze" (click)="showSponsorPopover(sponsor.name)">\n	</div>\n		<img src="assets/imgs/sponsor_minor_header.png" class="sponsor-header">\n	<div class="sponsor-minor-row" padding>\n		<div class="sponsor-minor" *ngFor="let sponsor of sponsors.minor" >\n			<h5><b>{{sponsor.name}}</b></h5>\n			<h5>{{sponsor.address}}</h5>\n			<h5 *ngIf="sponsor.contactNo">{{sponsor.contactNo}}</h5>\n			<h5 *ngIf="sponsor.telefax">{{sponsor.teleFax}}</h5>\n			<h5 *ngIf="sponsor.mobile">{{sponsor.mobile}}</h5>\n		</div>\n	</div>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\sponsors\sponsors.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* PopoverController */]])
    ], SponsorsPage);
    return SponsorsPage;
}());

//# sourceMappingURL=sponsors.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SponsorPopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SponsorPopoverPage = /** @class */ (function () {
    function SponsorPopoverPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imageUrl = this.navParams.get("imageUrl");
        console.log("oop", this.imageUrl);
    }
    SponsorPopoverPage.prototype.ionViewDidLoad = function () {
    };
    SponsorPopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sponsor-popover',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\sponsor-popover\sponsor-popover.html"*/'<ion-content padding>\n	<img src="{{imageUrl}}">\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\sponsor-popover\sponsor-popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SponsorPopoverPage);
    return SponsorPopoverPage;
}());

//# sourceMappingURL=sponsor-popover.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
            selector: 'page-registration',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\registration\registration.html"*/'<ion-content >\n<div class="page-header" style="justify-content: left;">\n	<h6>Registration <br>\n		<span style="font-size: 10px;">\n			ABOUT THE CONGRESS\n		</span>\n	</h6>\n</div>\n\n<div padding>\n	<p>Please click on the form below to register online:</p>\n	<a href="https://form.jotform.me/80424253174451">Registration Form for the IFHNOS World Tour 2018 and 62nd PSO-HNS Annual Convention</a>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\registration\registration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__research_info_research_info__ = __webpack_require__(206);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ResearchPresentationPage);
    return ResearchPresentationPage;
}());

//# sourceMappingURL=research-presentation.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResearchInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
                    "FP10: Calcifying Epithelial Odontogenic Tumor in a Young face: Conservative Surgery in an Adolescent Patient",
                    "FP11: Case Report on Nasopharyngeal Inflammatory Pseudotumor: A Diagnostic and Therapeutic Quandary",
                    "FP12: Clinical Outcomes Post CO2 Laser Posterior Cordotomy With Anterior Partial Arytenoidectomy in Bilateral Vocal Fold Immobility: A Case Series Retrospective Review of Twenty-Two Filipino Patients in a Tertiary Hospital",
                    "FP13: Clinicopathologic Profile of  Pediatric Thyroid Carcinoma",
                    "FP14: Cyanoacrylate utilization for facial nerve repair after iatrogenic injury post-mastoidectomy: a case report",
                    "FP15: Delayed Presentation Of Supraglottic Web From Caustic Ingestion",
                    "FP16: Diagnostic Utility of Fine Needle Aspiration Biopsy and Frozen Section in Parotid Masses: a 5-year Retrospective Review in a Tertiary Government Hospital, An Update",
                    "FP17: Endoscopic Sinus Surgery Extended Transsphenoidal Approach Performed in a Tertiary Government Hospital, a Case Series",
                    "FP18: Esophageal Fistula, An Unusual Complication of Total Thyroidectomy",
                    "FP19: Frontotemporal mass in oral cavity carcinoma: synchronous tumor or distant metastasis?",
                    "FP20: Game of Groans: A Case Report on Recurrent Pancreatitis with Primary Hyperparathyroidism",
                    "FP21: Hypoglossal nerve schwannoma, Parapharyngeal space, post styloid, right",
                    "FP22: Implication of Extracapsular Spread in the Staging of Patients with Head and Neck Squamous Cell Carcinoma Who Underwent Neck Dissection in a Tertiary Hospital in the City of Manila, Philippines ",
                    "FP23: In vitro study on tea tree oil and eucalyptus as alternative treatment for aspergillus spp.",
                    "FP24: Inflammatory Myofibroblastic Tumor of the Gingiva",
                    "FP25: Intratracheal Mass: Adenoid Cystic Carcinoma",
                    "FP26: Juvenile Laryngeal Amyloidosis Presenting as Laryngeal Papillomatosis : A Case Report",
                    "FP27: Laryngeal Amyloidosis Presenting as a Glottic-Subglottic Bulging",
                    "FP28: Malignancy that Mimics Cholesteatoma",
                    "FP29: Meta-analysis and systematic review of the post-operative ionized calcium slope in predicting symptomatic hypocalcemia among post-thyroidectomy patients",
                    "FP30: Nasopharyngolaryngeal amyloidosis in a 70 year old female",
                    "FP31: Non-Recurrent Laryngeal Nerve in Thyroid Surgery: A Report of Case Series in Vietnam and Literature Review",
                    "FP32: One Stage Simultaneous Bilateral Endoscopic Type I Tympanoplasty with Cartilage reinforcement: Our experience in Ospital ng Makati",
                    "FP33: Outcomes of Transoral CO2 Laser Surgery for Early Glottic Carcinoma: Experience of Two Private Tertiary Hospitals",
                    "FP34: Palliative Right lower lid blepharoplasty, right partial temporal bone resection, right neck dissection, right tympanoplasty, right pectoralis major flap reconstruction in a case of a Recurrent Parotid Adenocarcinoma",
                    "FP35: Patterns Of Craniomaxillofacial Fractures Among Military Personnel: A 3-Year Retrospective Analysis In A Tertiary Military Hospital",
                    "FP36: Profile and Treatment Outcomes of Laryngo-tracheal stenosis in a Tertiary Private Hospital",
                    "FP37: Pyoderma gangrenosum presenting as an ulceration of the eyelid and ear lobule",
                    "FP38: Skull base and Cervical spine Osteomyelitis, an under-recognized complication of Endoscopic Nasopharyngectomy – A case series and review of the literature",
                    "FP39: Spindle Cell Carcinoma of the Left Parotid Gland in a 71 year-old Female",
                    "FP40: Spontaneous Retropharyngeal Emphysema",
                    "FP41: Surgical Reconstruction of the Upper Esophagus via Deltopectoral Flap",
                    "FP42: Tension pneumocephalus from an occult anterior skull base defect in a patient with a ventriculoperitoneal shunt without clinically apparent rhinorrhea",
                    "FP43: The Participation of the Manobo In the Development of Their Community",
                    "FP44: Thyroglossal Duct Cyst ",
                    "FP45: Tongue Teratoma in a Newborn",
                    "FP46: Tonsillar Lymphagiomatous Polyp of the Palatine Tonsil in a 25 year old male",
                    "FP47: Treatment of a Dysfunctional Larynx from Post-Radiation Changes: A Case Report"
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ResearchInfoPage);
    return ResearchInfoPage;
}());

//# sourceMappingURL=research-info.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__day_schedule_day_schedule__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clinical_encounter_clinical_encounter__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SchedulePage = /** @class */ (function () {
    function SchedulePage(navCtrl, navParams, evt) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.evt = evt;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__day_schedule_day_schedule__["a" /* DaySchedulePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__day_schedule_day_schedule__["a" /* DaySchedulePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__day_schedule_day_schedule__["a" /* DaySchedulePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__clinical_encounter_clinical_encounter__["a" /* ClinicalEncounterPage */];
        this.evt;
    }
    SchedulePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SchedulePage');
    };
    SchedulePage.prototype.schedTabClick = function (day) {
        this.evt.publish("schedule:daySelect", day);
    };
    SchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schedule',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\schedule\schedule.html"*/'<ion-content padding class="sched-content">\n	<ion-tabs class="sched-tab" tabsPlacement="top" selectedIndex="0">\n	  <ion-tab [root]="tab1Root" tabTitle="DAY 1" (ionSelect)="schedTabClick(1)"></ion-tab>\n	  <ion-tab [root]="tab2Root" tabTitle="DAY 2" (ionSelect)="schedTabClick(2)"></ion-tab>\n	  <ion-tab [root]="tab3Root" tabTitle="DAY 3" (ionSelect)="schedTabClick(3)"></ion-tab>\n	  <ion-tab [root]="tab4Root" tabTitle="Clinical Encounter"></ion-tab>\n	</ion-tabs>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\schedule\schedule.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], SchedulePage);
    return SchedulePage;
}());

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DaySchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DaySchedulePage = /** @class */ (function () {
    function DaySchedulePage(navCtrl, navParams, evt) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.evt = evt;
        this.days = [
            [
                {
                    time: "8:00 - 8:45 AM",
                    title: "Opening Ceremonies",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "8:45 - 9:00 AM",
                    title: "Keynote Speaker (Jatin P. Shah)",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "9:00 - 9:15 AM",
                    title: "Coffee Break"
                },
                {
                    time: "9:15 - 9:45 AM",
                    title: "Cancer of the Oral Cavity",
                    speaker: "Dr. Jatin P. Shah",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "9:45 - 10:30 AM",
                    title: "Panel Discussion – Cancer of the Oral Cavity",
                    speaker: "Dr. Sandro Porceddu, Dr. Chih-Yeh Chien (TW),Dr. Mamer...",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "10:30 – 11:00 AM",
                    title: "Surgery for the Primary",
                    speaker: "Dr. Jatin P. Shah",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "10:30 – 11:00 AM",
                    title: "Surgery for the Neck",
                    speaker: "Dr. Ashok R. Shaha",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "11:30 – 12:30 PM",
                    title: "Panel Discussion – Thyroid Cancer",
                    speaker: "Dr. Ian Witterick, Dr. Sandro Porceddu, Dr. Choakchai M...",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)",
                    sponsor: "UAP"
                },
                {
                    time: "12:30 – 1:30 PM",
                    title: "LUNCH SYMPOSIUM \r\nAllergic Rhinitis 101: Simple Case Presentation",
                    speaker: "Dr. Generoso T. Abes",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "1:30 – 2:00 PM",
                    title: "Advances in Radiotherapy",
                    speaker: "Dr. Sandro Porceddu",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "2:00 – 4:00 PM",
                    title: "Descriptive Research Contest",
                    location: "Maynila Ballroom",
                    coords: "Dr. Eduard M. Alfanta/ Dr. Erasmo Gonzalo D.V. LLanes"
                },
                {
                    time: "2:00 – 2:30 PM",
                    title: "Advances in Systemic Therapy",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "2:30 – 3:30 PM",
                    title: "Panel Discussion – Multidisciplinary Panel",
                    speaker: "Dr. Ashok R. Shaha, Dr. Marlinda Adham (INDO), Dr. Jorge G. Ignacio (PH), Dr. Michael B. Mejia (PH)",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "3:30 – 3:45 PM",
                    title: "Coffee Break"
                },
                {
                    time: "3:45 – 4:15 PM",
                    title: "Salivary Gland Tumors",
                    speaker: "Dr. Ashok R. Shaha",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "4:15 – 4:45 PM",
                    title: "Panel Discussion – Salivary Gland Tumors",
                    speaker: "Dr. Jatin P. Shah, Dr. Ian Witterick, Dr. Mohd Razif Yunus (MAL), Dr. Jacob S. Matubis (PH), Dr. Arturo S. dela Peña (PH)",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "4:45 – 5:45 PM",
                    title: "Video Presentation – How I do It",
                    speaker: "Dr. Jatin P. Shah, Dr. Ashok R. Shaha",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "7:00 – 8:00 PM",
                    title: "DINNER SYMPOSIU \r\nVertigo Management Updates",
                    speaker: "Dr. Teresa Luisa I. Gloria-Cruz",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)",
                    sponsor: "UAP"
                },
                {
                    time: "8:00 – 10:00 PM",
                    title: "GALA NIGHT (A tribute to Dr. Mariano and Dr. Armando Chiong Sr.)",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
            ],
            // day 2
            [
                {
                    time: "7:00 – 9:00 AM",
                    title: "Free Paper Presentation",
                    location: "Maynila Ballroom",
                    coords: "Dr. Christopher Ed C. Gloria"
                },
                {
                    time: "8:00 – 8:20 AM",
                    title: "Surgery of Oropharynx Cancer",
                    speaker: "Dr. Ian Witterick",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "8:20 – 8:40 AM",
                    title: "Radiotherapy in Oropharynx Cancer",
                    speaker: "Dr. Sandro Porceddu",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "8:40 – 9:30 AM",
                    title: "Panel Discussion – Oropharynx Cancer",
                    speaker: "Dr. Ian Witterick, Dr. Johanna Patricia A. Cañal (PH), Dr. Heinrick Martin Jude Strebel (PH) ",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "9:30 – 10:00 AM",
                    title: "Coffee Break"
                },
                {
                    time: "10:00 – 10:20 AM",
                    title: "Surgery of Larynx Cancer",
                    speaker: "Dr. Jatin P. Shah",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "10:20 – 10:40 AM",
                    title: "Non-Surgical: Chemotherapy of Larynx Cancer",
                    speaker: "Dr. Jan B. Vermorken",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "10:40 – 11:00 AM",
                    title: "Non-Surgical: Radiation in Larynx Cancer",
                    speaker: "Dr. Sandro Porceddu",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "11:00 – 12:00 NN",
                    title: "Panel Discussion – Larynx Cancer",
                    speaker: "Dr. Ian Witterick, Dr. Alfredo Q.Y. Pontejos, Jr. (PH), Dr. William L. Lim (PH), Dr. Edilberto Joaquin V. Fragante, Jr., (PH)",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "12:00 – 1:00 PM",
                    title: "LUNCH SYMPOSIUM \r\The Unmet Medical Need in AR: European Perspective and Parallels in the Philippines",
                    speaker: "Prof. Jean Bousquet, MD, PhD",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)",
                    sponser: "MYLAN"
                },
                {
                    time: "1:00 – 1:30 PM",
                    title: "Skull Base Surgery",
                    location: "Fiesta Pavillon (Rigodon, Polkabal, Pandanggo)",
                    speaker: "Dr. Ian Witterick"
                },
                {
                    time: "1:30 – 2:00 PM",
                    title: "Panel Discussion – Skull Base Tumors",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)",
                    speaker: "Dr. Sandro Porceddu, Dr. Jan B. Vermorken, Dr. Sheng-PoHao (TW), Dr. Ramon Antonio B. Lopa (PH) "
                },
                {
                    time: "2:00 – 2:30 PM",
                    title: "Reconstructive Surgery",
                    speaker: "Dr. Ian Witterick.",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "2:30 – 3:00 PM",
                    title: "Panel Discussion -Reconstructive Surgery",
                    speaker: "Dr. Phakdee Sannikorn (TH), Dr. Samantha S. Castaneda (PH), Dr. Armando M. Chiong, Jr. (PH)",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "3:00 – 3:30 PM",
                    title: "Coffee Break"
                },
                {
                    time: "3:00 – 3:30 PM",
                    title: "Clearvue CME",
                    speaker: "Dr. Don Izzy Yee",
                    location: "Roma Salon"
                },
                {
                    time: "3:30 – 5:00 PM",
                    title: "Analytical Research Contest",
                    speaker: "Roma Salon",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)",
                    coords: "Dr. Eduard M. Alfanta/ Dr. Erasmo Gonzalo D.V. LLanes"
                },
                {
                    time: "3:30 – 4:30 PM",
                    title: "Panel Discussion",
                    speaker: "Dr. Jatin P. Shah, Dr. Ian Witterick, Dr. Sandro Porceddu, Dr. Jan B. Vermorken",
                    location: "Maynila Ballroom",
                    sponsor: "UAP"
                },
                {
                    time: "4:30 – 6:00 PM",
                    title: "Video Presentations – How I do it",
                    speaker: "Dr. Jatin P. Shah, Dr. Ian Witterick",
                    location: "Maynila Ballroom"
                },
                {
                    time: "7:00 – 11:00 PM",
                    title: "DINNER SYMPOSIUM \r\nAllergic Rhinoconjunctivitis: Guidelines Update and New Treatment Strategies",
                    speaker: "Prof. Ralph Mosges, MD, PhD, FAAAAI",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)",
                    sponsor: "Menarini"
                },
                {
                    time: "7:00 – 11:00 PM",
                    title: "Fellowship Night",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
            ],
            // day 3
            [
                {
                    time: "7:00 – 9:00 AM",
                    title: "Paper Presentation",
                    location: "Maynila Ballroom",
                    coords: "Dr. Eduard M. Alfanta/ Dr. Erasmo Gonzalo D.V. LLanes"
                },
                {
                    time: "7:30 – 7:45 AM",
                    title: "Challenges of the Aging Physician",
                    speaker: "Dr. Victoria C. Sarmiento",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "7:45 – 8:00 AM",
                    title: "Insights of a Seasoned Otorhinolaryngologist",
                    speaker: "Dr. Generoso T. Abes",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "8:00 – 8:15 AM",
                    title: "3D Imaging / Printing and Planning in Maxillofacial Surgery",
                    speaker: "Dr. Francis V. Roasa",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "8:15 – 8:30 AM",
                    title: "Closed Reduction: Nasal Bone Fracture",
                    speaker: "Dr. Jehan Grace B. Maglaya ",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "8:30 – 8:45 AM",
                    title: "Prosthesis",
                    speaker: "Dr. Joselito F. David",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "8:45 – 9:00 AM",
                    title: "Office-based Laryngeal Surgery",
                    speaker: "Dr. William L. Lim",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "9:00 – 9:30 AM",
                    title: "Panel Discussion – Laser Surgery in Laryngology",
                    speaker: "Dr. William L. Lim, Dr. Ma. Clarissa S. Fortuna, Dr. Melfred L. Hernandez",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "9:00 – 9:20 AM",
                    title: "The Evolution of Temporal Bone Imaging",
                    speaker: "Dr. Nathaniel W. Yang",
                    location: "Maynila Ballroom"
                },
                {
                    time: "9:20 – 9:40 AM",
                    title: "Basic CT and MRI Imaging for Common Head and Neck Conditions",
                    speaker: "Dr. Johanna A Cañal",
                    location: "Maynila Ballroom"
                },
                {
                    time: "9:30 – 9:45 AM",
                    title: "Epistaxis in Children: What Can We Do in the Clinic?",
                    speaker: "Dr. Lyra V. Veloro",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "9:45 – 10:00 AM",
                    title: "Ventilation tubes for OME in Cleft Palate: Do We or Do We Not?",
                    speaker: "Dr. Cecilia Gretchen S. Navarro- Locsin",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "10:00 – 10:15 AM",
                    title: "Office Management of the Pediatric Airway",
                    location: "Maynila Ballroom",
                    speaker: "Dr. Adonis B. Jurado"
                },
                {
                    time: "10:25 – 10:50 AM",
                    title: "EMR: Issues and Challenges in the Clinical Practice",
                    location: "Maynila Ballroom",
                    speaker: "Dr. Eduard M. Alfanta"
                },
                {
                    time: "10:15 – 10:30 AM",
                    title: "Fat Myringoplasty",
                    speaker: "Dr. Norberto Martinez ",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "10:30 – 10:45 AM",
                    title: "Approach for Single-sided Deafness",
                    speaker: "Dr. Charlotte M.Chiong",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "10:45 – 11:00 AM",
                    title: "Shoeboex Audiometry Updates: How the iPad Audiometer Continues to Revolutionize the World of Hearing Health",
                    speaker: "Ms. Natalie Mai",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "11:00 – 11:20 AM",
                    title: "AEP Testing with Patient Follow-up via Pathtrack Tracking Software",
                    speaker: "Mr. Russell Higgs",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "11:00 – 12:00 NN",
                    title: "Poster Session Contest on Surgical Innovation & instrumentation",
                    location: "Maynila Ballroom",
                    coords: "Dr. Eduard M. Alfanta/ Dr. Erasmo Gonzalo D.V. LLanes"
                },
                {
                    time: "11:30 – 12:00 NN",
                    title: "PRE-LUNCH SYMPOSIUM \r\nNECK Session (Natrapharm Enhancing Clinical Knowledge in Current Practice): Solving the Mysteries of Cervical Lymphaenopath)y",
                    speaker: "Dr. Mark Kristoffer U. Pasayan",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)",
                    sponsor: "Natrapharm"
                },
                {
                    time: "12:00 – 1:00 PM",
                    title: "LUNCH SYMPOSIUM \r\nVertigo-free:Exploring the Possibilities",
                    speaker: "Dr. Michel Lacour, Phd (France)",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)",
                    sponsor: "Abbott  Laboratories"
                },
                {
                    time: "1:00 – 1:15 PM",
                    title: "Nerve Blocks/Anesthesia for Office Procedures and Goretex Thread for Rhinoplasty",
                    speaker: "Dr. Homer M. Matias",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "1:00 – 1:25 PM",
                    title: "Data Privacy Act",
                    speaker: "Atty. Ivy D. Patdu",
                    location: "Maynila Ballroom"
                },
                {
                    time: "1:15 – 1:30 PM",
                    title: "Neuromodulators",
                    speaker: "Dr. Jaime Anthony A. Arzadon, IV",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "1:25 – 1:50 PM",
                    title: "Social Media in the Clinical Practice",
                    speaker: "Dr. Iris Isip-Tan",
                    location: "Maynila Ballroom"
                },
                {
                    time: "1:30 – 1:45 PM",
                    title: "Soft Tissue Filler Augmention",
                    speaker: "Dr.Jospeh Amado C. Galvez",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "1:45 – 2:00 PM",
                    title: "Threadlifts and Fillers for Noselift",
                    speaker: "Dr. Henry John F. Claravall",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "2:00 – 2:15 PM",
                    title: "Evolving Trends in Sinus Surgery",
                    speaker: "Dr. Joman Q.  Laxamana",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "2:15 – 2:30 PM",
                    title: "Office Procedures in Managing Chronic Rhinosinusitis and Nasal Polyposis",
                    speaker: "Dr. Ma. Lourdes B. Enecilla",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "2:30 – 2:45 PM",
                    title: "Image-guided Systems in Sinus and Skullbase Surgery",
                    speaker: "Dr. Peter R. Jarin",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "2:45 – 3:00 PM",
                    title: "Overview and Management of OSA",
                    speaker: "Dr. Maria Patricia Ann T. Puno",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "3:00 – 3:15 PM",
                    title: "Office-based Surgery for the Nasal Cavity",
                    speaker: "Dr. Michael Alexius A. Sarte",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "3:30 – 4:00 PM",
                    title: "Patient Preference Study for Allergic Rhinitis",
                    speaker: "Dr. Edwin Ilagan Villasanta, FPCP, FPCCP",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "4:00 – 6:00 PM",
                    title: "SPECIAL GENERAL MEMBERSHIP MEETING",
                    location: "Fiesta Pavilion (Rigodon, Polkabal, Pandanggo)"
                },
                {
                    time: "6:00 – 10:00 PM",
                    title: "ALUMNI NIGHT"
                },
            ]
        ];
        this.daySchedule = [];
        this.daySchedule = this.days[0];
        this.evt.subscribe("schedule:daySelect", function (day) {
            _this.daySchedule = _this.days[day - 1];
        });
    }
    DaySchedulePage.prototype.ionViewDidLoad = function () {
    };
    DaySchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-day-schedule',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\day-schedule\day-schedule.html"*/'<ion-content padding>\n	<ion-list>\n		<ion-item *ngFor="let daySched of daySchedule">\n			<h6 class="time">{{daySched.time}}</h6>\n			<h2 class="title">{{daySched.title}}</h2>\n			<h5 class="speaker" *ngIf="daySched.speaker">{{daySched.speaker}}</h5>\n			<h6 class="location">{{daySched.location}}</h6>\n			<h5 class="sponsor" *ngIf="daySched.sponsor">Sponsored by: {{daySched.sponsor}}</h5>\n			<h5 class="coords" *ngIf="daySched.coords">Research Coordinators: {{daySched.coords}}</h5>\n		</ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\day-schedule\day-schedule.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], DaySchedulePage);
    return DaySchedulePage;
}());

//# sourceMappingURL=day-schedule.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicalEncounterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClinicalEncounterPage = /** @class */ (function () {
    function ClinicalEncounterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.timeRange = [
            "8:00 - 9:00 AM",
            "10:00 - 11:00 AM",
            "1:00 - 2:00 PM",
            "3:00 - 4:00 PM"
        ];
        this.schedule = [
            [
                {
                    title: "Challenges and Advances in Tonsillectomy and Adenoidectomy",
                    speakers: "Dr. Agnes T. Remulla, Dr. Keith Romeo A. Aguilera",
                    room: "Sampaguita A"
                },
                {
                    title: "Symptoms of Eustachian Tube Dysfunction ",
                    speakers: "Dr. Manuel E. Villegas Jr. ",
                    room: "Sampaguita B"
                },
                {
                    title: "Management of Estachian Tube Dysfunction ",
                    speakers: "Dr. Natividad A. Almazan ",
                    room: "Sampaguita B"
                },
                {
                    title: "Hearing Aids: Updates and New Trends",
                    speakers: "Dr. Ma. Leah C. Tantoco",
                    room: "Sampaguita C"
                },
                {
                    title: "Implantable Devices: Candidacy, Indications and Contraindications ",
                    speakers: "Dr. Maria Rina T. Reyes-Quintos",
                    room: "Sampaguita C"
                },
                {
                    title: "Septorhinoplasty  for the Crooked Nose",
                    speakers: "Dr. Cesar V. Villafuerte, Jr.",
                    room: "Roma Salon"
                },
                {
                    title: "The Role of Nasal Septum in Structural Rhinoplasty ",
                    speakers: "Dr. Eduardo C. Yap ",
                    room: "Roma Salon"
                },
                {
                    title: "Flexible Laryngoscopy and Related ENT Procedures ",
                    speakers: "Dr. Ryner Jose C. Carrillo ",
                    room: "Champagne Salon"
                },
                {
                    title: "Videostroboscopy",
                    speakers: "Dr. Fortuna Corazon A. Aberin-Roldan",
                    room: "Champagne Salon"
                },
            ],
            [
                {
                    title: "Diagnosis, Differentiation and Management of Different Types of BPPV ",
                    speakers: "Dr. Joanne Sebastiana M. De Ramos",
                    room: "Sampaguita A"
                },
                {
                    title: "Home-Based Vestibular Exercises",
                    speakers: "Dr. Manuel E. Villegas Jr.",
                    room: "Sampaguita A"
                },
                {
                    title: "Basic VNG for the ENTs",
                    speakers: "Dr. Ernest Roberto H. Manas",
                    room: "Sampaguita A"
                },
                {
                    title: "Bone-Anchored Hearing Aid",
                    speakers: "Dr. Erasmo Gonzalo DV. Llanes ",
                    room: "Sampaguita B"
                },
                {
                    title: "Cochlear Implant Surgery",
                    speakers: "Dr. Nathaniel W. Yang ",
                    room: "Sampaguita B"
                },
                {
                    title: "Surgery of Juvenile Angiofibroma",
                    speakers: "Dr. Josefino G.  Hernandez",
                    room: "Sampaguita C"
                },
                {
                    title: "Surgery of Inverting Papilloma",
                    speakers: "Dr. Ramon Antonio B. Lopa",
                    room: "Sampaguita C"
                },
                {
                    title: "Basic Principles & Overview on the Use of the Harmonic Scalpel in ENT ",
                    speakers: "Dr. Jaime Anthony A. Arzadon IV ",
                    room: "Rome Salon"
                },
                {
                    title: "The Use of Harmonic Scalpel in ORL-Head and Neck Surgeries",
                    speakers: "Dr. Alfredo Q.Y. Pontejos Jr. ",
                    room: "Rome Salon"
                },
                {
                    title: "Overview and Indications of Image-Guided Systems in Sinus and Skull Base Surgery ",
                    speakers: "Dr. Antonio H. Chua ",
                    room: "Champagne Salon"
                },
                {
                    title: "Image Guided Surgery in the Sinuses and Beyond",
                    speakers: "Dr. Jose Raindrop S. Embate",
                    room: "Champagne Salon"
                },
            ],
            [
                {
                    title: "Steroids 101",
                    speakers: "Dr. Ruzanne M. Caro",
                    room: "Sampaguita A"
                },
                {
                    title: "Steroids for Hearing Loss and Vertigo",
                    speakers: "Dr. Rosario R. Ricalde",
                    room: "Sampaguita A"
                },
                {
                    title: "Barrier Dysfunction in Allergic Rhinitis",
                    speakers: "Dr. Anne Marie V. Espiritu ",
                    room: "Sampaguita B"
                },
                {
                    title: "Local Allergic Rhinitis",
                    speakers: "Dr. Victoria C. Sarmiento",
                    room: "Sampaguita B"
                },
                {
                    title: "Diagnostic Tests for OSA",
                    speakers: "Dr. Michael Alexius A. Sarte",
                    room: "Sampaguita C"
                },
                {
                    title: "Upper Airway Evaluation in OSA Surgery",
                    speakers: "Dr. Cesar V. Villafuerte, Jr.",
                    room: "Sampaguita C"
                },
                {
                    title: "Intuitive Landmark Base Endoscopic Sinus Surgery",
                    speakers: "Dr. Benjamin S.A. Campomanes Jr",
                    room: "Roma Salon"
                },
                {
                    title: "Quality Sleep CME ",
                    speakers: "Cox. Angelo Yu Tan-Ngo, RRT. ",
                    room: "Roma Salon"
                },
                {
                    title: "Investment ",
                    speakers: "Dr. Edgardo C. Rodriguez, Jr.",
                    room: "Champagne Salon"
                },
                {
                    title: "Common ENT-HNS Outpatient Selected Conditions and Situations: How I Managed It  ",
                    speakers: "Dr. Rodolfo P. Nonato",
                    room: "Champagne Salon"
                },
                {
                    title: "Tympanostomy and Nasal Polypectomy using Microdebrider in the Clinic",
                    speakers: "Dr. Cesar Anthony P. Yabut",
                    room: "Champagne Salon"
                },
                {
                    title: "My Unconventional Methods in Otolaryngology-Head and Neck Surgery  ",
                    speakers: "Dr. Felixberto D. Ayahao",
                    room: "Champagne Salon"
                },
                {
                    title: "1. Practice Pearls in Preventive ORL, 2. Cultural Sensitivity in Healthcare, The National TB Program and its Implications in ENT Practice ",
                    speakers: "Dr. Manuel E. Villegas Jr.",
                    room: "Champagne Salon"
                },
            ],
            [
                {
                    title: "CMF Plating That Gets the Best Results: What an ENT Should Know ",
                    speakers: "Dr. Francis V. Roasa ",
                    room: "Sampaguita A"
                },
                {
                    title: "Condylar Fractures: When and When Not To Plate ",
                    speakers: "Dr. Roberto M. Pangan",
                    room: "Sampaguita A"
                },
                {
                    title: "Unsedated Office-based Procedure in Laryngology",
                    speakers: "Dr. Ma. Clarissa S. Fortuna",
                    room: "Sampaguita B"
                },
                {
                    title: "Vocal Fold Injection in the Clinic: When, Why, How ",
                    speakers: "Dr. Melfred L. Hernandez",
                    room: "Sampaguita B"
                },
                {
                    title: "Retroauricular incision: A New Surgical Technique on Selected Parotid Gland Cases ",
                    speakers: "Dr. Dewan Hassan",
                    room: "Sampaguita C"
                },
                {
                    title: "Upper Airway Evaluation in OSA Surgery ",
                    speakers: "Dr. Cesar V. Villafuerte, Jr.",
                    room: "Sampaguita C"
                },
                {
                    title: "Facial Shaping with Neuromodulators and Fillers",
                    speakers: "Dr. Joseph Amado C. Galvez",
                    room: "Roma Salon"
                },
                {
                    title: "Nasal Augmentation using Thread and Fillers in Laryngology Results:",
                    speakers: "Dr. Henry John F. Claravall",
                    room: "Roma Salon"
                },
                {
                    title: "The Value of Ultrasound in the Evaluation of Head and Neck Neoplasms",
                    speakers: "Dr. Daniel M. Alonzo",
                    room: "Champagne Salon"
                },
                {
                    title: '\"No More Blind Biopsies\": Integrating the Use of Ultrasound in Head and Neck Practice',
                    speakers: "Dr. Geraldine L. Luna",
                    room: "Champagne Salon"
                },
                {
                    title: "Interventional Techniques in Neck Ultrasound ",
                    speakers: "Dr. Maria Karen A. Capuz",
                    room: "Champagne Salon"
                },
            ],
        ];
        this.range = 0;
    }
    ClinicalEncounterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClinicalEncounterPage');
    };
    ClinicalEncounterPage.prototype.left = function () {
        console.log("LEFT", this.range);
        if (this.range <= 0)
            return;
        this.range--;
    };
    ClinicalEncounterPage.prototype.right = function () {
        console.log("Right", this.range);
        if (this.range > 2)
            return;
        this.range++;
    };
    ClinicalEncounterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-clinical-encounter',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\clinical-encounter\clinical-encounter.html"*/'<ion-content>\n	<div class="container">\n		<div class="time-row">\n			<ion-icon name="arrow-dropleft" (click)="left()"></ion-icon>\n			<h5>{{timeRange[range]}}</h5>\n			<ion-icon name="arrow-dropright" (click)="right()"></ion-icon>\n		</div>\n		<div class="schedule-contents">\n			<div class="line"></div>\n			<div>\n				<ion-list class="content-range" >\n					<ion-item>\n						<div class="topic">\n							<h2><b>TOPIC</b></h2>\n						</div>\n						<div class="room">\n							<h2><b>ROOM</b></h2>\n						</div>\n					</ion-item>\n					<ion-item *ngFor="let sched of schedule[range]">\n						<div class="topic">\n							<h5>{{sched.title}}</h5>\n							<h6>{{sched.speakers}}</h6>\n						</div>\n						<div class="room">\n							<h5>{{sched.room}}</h5>\n						</div>\n					</ion-item>\n				</ion-list>\n			</div>\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\clinical-encounter\clinical-encounter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ClinicalEncounterPage);
    return ClinicalEncounterPage;
}());

//# sourceMappingURL=clinical-encounter.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__speaker_info_speaker_info__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpeakersPage = /** @class */ (function () {
    function SpeakersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.speakers = [
            {
                lastname: "ABERIN-ROLDAN",
                firstname: "Fortuna Corazon MD",
                details: "Chair, Philippine Academy of Laryngologybroncoesophagology & Phoniatrics (PALP) Consultant, The Medical City Ortigas & East Avenue Medical Center",
                imageUrl: "assets/imgs/speakers/ABERIN-ROLDAN.jpg",
                docs: [
                    {
                        title: "Videostroboscopy",
                        info: "Oct. 24, 8:00-9:00 AM, Champagne Salon",
                        link: "assets/pdfs/CE 5.2 ROLDAN.pdf"
                    }
                ]
            },
            {
                lastname: "ABES",
                firstname: "Generoso MD",
                details: "Professor Emeritus, ORL, University of the Philippines, Manila President Emeritus, Philippine Academy of Neurotology, Otology and	Related Sciences (PANORS) Consultant, Manila Doctors Hospital, Makati Medical Center and Asian 	Hospital & Med. Ctr. ",
                imageUrl: "assets/imgs/speakers/ABES.jpg",
                docs: [
                    {
                        title: "Allergic Rhinitis 101: Simple Case Presentation",
                        info: "Oct. 22, 12:30-1:30 PM, Fiesta Pavilion",
                        link: "assets/pdfs/CE 12.1 ESPIRITU.pdf"
                    },
                    {
                        title: "Insights of a Seasoned Otorhinolaryngologist",
                        info: "Oct. 24, 7:45 – 8:00 AM, Fiesta Pavilion",
                        link: "assets/pdfs/P1.2 ABES.pdf"
                    },
                ]
            },
            {
                lastname: "ADHAM",
                firstname: "Marlinda MD",
                details: "",
                imageUrl: "assets/imgs/speakers/ADHAM.jpg",
                docs: [
                    {
                        title: "Multidisciplinary Management",
                        info: "Oct. 22, 2:30-3:00 PM, Fiesta Pavilion"
                        // , link: "assets/pdfs/CE 5.2 ROLDAN.pdf"
                    },
                ]
            },
            {
                lastname: "AGUILERA",
                firstname: "Keith Romeo MD",
                details: "Assistant Professor I, St. Luke's College of Medicine Consultant, Dept. of ORL-HNS, St. Luke's Medical Center-Global City",
                imageUrl: "assets/imgs/speakers/AGUILERA.jpg",
                docs: [
                    {
                        title: "Challenges and Advances in Tonsillectomy and Adenoidectomy",
                        info: "Oct. 24, 8:00-9:00 AM, Sampaguita A",
                        link: "images/assets/pdfs/CE 1.1 AGUILERA.pdf"
                    },
                ]
            },
            {
                lastname: "ALFANTA",
                firstname: "Eduard MD",
                details: "Chair, Subcommittee on Research, PSO-HNS Consultant, Dept. of ORL-HNS, East Avenue Medical Center Visiting Consultant, Dept. of ORL-HNS, Manila Doctors Hosp. and Asian 	Hospital & Med. Ctr. ",
                imageUrl: "assets/imgs/speakers/ALFANTA.jpg",
                docs: [
                    {
                        title: "EMR: Issues and Challenges in the Clinical Practice",
                        info: "Oct. 24, 10:25 – 10:50 AM, Maynila Ballroom",
                        link: "images/assets/pdfs/S2.2 ALFANTA.pdf"
                    },
                ]
            },
            {
                lastname: "ALMAZAN",
                firstname: "Natividad MD",
                details: "Secretary, Philippine Board of Otolaryngology-HNS Head, Otology Section, East Avenue Medical Center, Manila Central University and Veterans-MMC",
                imageUrl: "assets/imgs/speakers/ALMAZAN.jpg",
                docs: [
                    {
                        title: "Management of Estachian Tube Dysfunction",
                        info: "Oct. 24, 8:00 – 9:00 AM, Sampaguita A",
                        link: "images/assets/pdfs/CE 2.2 ALMAZAN.pdf"
                    },
                ]
            },
            {
                lastname: "ALMELOR",
                firstname: "Mamerto MD",
                details: "",
                imageUrl: "assets/imgs/speakers/ALFANTA.jpg",
                docs: [
                    {
                        title: "Cancer of Oral Cavity",
                        info: "Oct. 22, 9:45-10:30 AM, Fiesta Pavilion "
                        // , link: "images/assets/pdfs/S2.2 ALFANTA.pdf"
                    },
                ]
            },
            {
                lastname: "ALONZO",
                firstname: "Daniel MD",
                details: "Director, Cancer Institute, The Medical City",
                imageUrl: "assets/imgs/speakers/ALFANTA.jpg",
                docs: [
                    {
                        title: "Panel Discussion: Thyroid Cancer",
                        info: "Oct. 22, 11:30 AM – 12:30 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/S2.2 ALFANTA.pdf"
                    },
                    {
                        title: "The Value of Ultrasound in the Evaluation of Head and Neck Neoplasms",
                        info: "Oct. 24, 8:00 – 9:00 AM, Champagne Salon",
                        link: "images/assets/pdfs/CE 20.1 ALONZO.pdf"
                    },
                ]
            },
            {
                lastname: "ARZADON",
                firstname: "Jaime Anthony, IV MD",
                details: "Proprietor & Medical Director, Arzadon Clinic Cosmetic Surgery & Dermatology Head, Section of Facial Plastic Surgery, Department of ORL-HNS, Asian 	Hospital & Med. Ctr.",
                imageUrl: "assets/imgs/speakers/ARZADON.jpg",
                docs: [
                    {
                        title: "Basic Principles & Overview on the Use of the Harmonic Scalpel in ENT",
                        info: "Oct. 24, 8:00 – 9:00 AM, Roma Salon"
                        // , link: "images/assets/pdfs/S2.2 ALFANTA.pdf"
                    },
                    {
                        title: "Neuromodulators",
                        info: "Oct. 24, 1:15 – 1:30 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/S2.2 ALFANTA.pdf"
                    },
                ]
            },
            {
                lastname: "AYAHAO",
                firstname: "Felixberto MD",
                details: "MS 3, Baguio General Hospital",
                imageUrl: "assets/imgs/speakers/AYAHAO.jpg",
                docs: [
                    {
                        title: "My Unconventional Methods in Otolaryngology-Head and Neck Surgery",
                        info: "Oct. 24, 1:00 – 2:00 PM, Champagne Salon",
                        link: "images/assets/pdfs/CE 15.4 AYAHAO.pdf"
                    },
                ]
            },
            {
                lastname: "BAÑEZ",
                firstname: "Ryan Julius MD",
                details: "Clinical Associate Professor, UPCM Medical Informatics Unit Lecturer, Ateneo School of Medicine and Public Health Consultant for Health Information Systems, National Kidney and Transplant Institute",
                imageUrl: "assets/imgs/speakers/BANEZ.png",
                docs: [
                    {
                        title: "Overview of EMR in the Philippines",
                        info: "Oct. 24, 10:00 – 10:25 AM, Maynila Ballroom",
                        link: "images/assets/pdfs/S2.1 BANEZ.pdf"
                    },
                ]
            },
            {
                lastname: "BOUSQUET",
                firstname: "Jean MD, PhD",
                details: "Director, Cancer Institute, The Medical City",
                imageUrl: "assets/imgs/speakers/BOUSQUET.jpg",
                docs: [
                    {
                        title: "The Unmet Medical Need in AR: European Perspective and Parallels in the Philippines",
                        info: "Oct. 23, 12:00 – 1:00 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/S2.2 ALFANTA.pdf"
                    },
                ]
            },
            {
                lastname: "CABUNGCAL",
                firstname: "Arsenio Claro MD",
                details: "Clinical Associate Professor, UP-PGH Board of Trustee, Philippine Society of Otolaryngology-HNS Attending ORL, Victor R. Potenciano Medical Center and National Kidney & Transplant Institute",
                imageUrl: "assets/imgs/speakers/CABUNGCAL.jpg",
                docs: [
                    {
                        title: "Endonasal Endoscopic Transphenoidal Pituitary Surgery ",
                        info: "Oct. 24, 10:00 – 11:00 AM, Sampaguita C",
                        link: "images/assets/pdfs/CE 8.3 CABUNGCAL.pdf"
                    },
                    {
                        title: "Facial Nerve Identification & Dissection in Parotid Surgery: Let's Make it Easy ",
                        info: "Oct. 24, 3:00 - 4:00 PM, Sampaguita C"
                        // , link: "images/assets/pdfs/S2.2 ALFANTA.pdf"
                    },
                ]
            },
            {
                lastname: "CAÑAL",
                firstname: "Johanna MD",
                details: "Professor 4, University of the Philippines-College of Medicine Chair, Radiology, UP-Philippine General Hospital",
                imageUrl: "assets/imgs/speakers/CANAL.jpg",
                docs: [
                    {
                        title: "Panel Discussion: Oropharynx Cancer",
                        info: "Oct 23, 8:40-9:30 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/S2.2 ALFANTA.pdf"
                    },
                    {
                        title: "Basic CT and MRI Imaging for Common Head and Neck Conditions",
                        info: "Oct. 24, 9:20 – 9:40 AM, Maynila Ballroom",
                        link: "images/assets/pdfs/S1.2 Cañal.pdf"
                    },
                ]
            },
            {
                lastname: "CAPUZ",
                firstname: "Maria Karen MD",
                details: "Clinical Faculty, Ateneo School of Medicine & Public Health Assistant Professor, Manila Central University, College of Medicine Head & Neck Subspecialty Consultant, Dept. of ORL-HNS, UST Hospital",
                imageUrl: "assets/imgs/speakers/CAPUZ.jpg",
                docs: [
                    {
                        title: "Techniques of Office Ultrasonography",
                        info: "Oct. 24, 3:00 – 4:00 PM, Champagne Salon",
                        link: "images/assets/pdfs/CE 20.3 CAPUZ.pdf"
                    },
                ]
            },
            {
                lastname: "CARRILLO",
                firstname: "Ryner Jose MD",
                details: "Associate Professor, Dept. of Anatomy, UP-College of Medicine Clinical Associate Professor, Section of Laryngology 			Bronchoesophagology, Dept. of ORL-HNS, UP-PGH",
                imageUrl: "assets/imgs/speakers/CARRILLO.jpg",
                docs: [
                    {
                        title: "Flexible Laryngoscopy and Related ENT Procedures",
                        info: "Oct. 24, 8:00 – 9:00 AM, Champagne Salon"
                        // , link: "images/assets/pdfs/S2.2 ALFANTA.pdf"
                    },
                ]
            },
            {
                lastname: "CARO",
                firstname: "Ruzanne MD",
                details: "Associate Professor, UP-College of Medicine Active Consultant, Capitol Medical Center and UPCM-Philippine General	Hospital",
                imageUrl: "assets/imgs/speakers/CARO.jpg",
                docs: [
                    {
                        title: "Steroids 101 ",
                        info: "Oct. 24, 1:00 – 2:00 PM, Sampaguita A",
                        link: "images/assets/pdfs/CE 11.1 CARO.pdf"
                    },
                ]
            },
            {
                lastname: "CASTAÑEDA",
                firstname: "Samantha MD",
                details: "Assistant Professor, Ateneo School of Medicine & Public Health Section Head, Head & Neck, The Medical City  Training Officer, Dept. of ORL-HNS, Rizal Medical Center",
                imageUrl: "assets/imgs/speakers/CASTANEDA.jpg",
                docs: [
                    {
                        title: "Panel Discussion – Reconstructive Surgery",
                        info: "Oct. 24, 2:30 - 3:00 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/S2.2 ALFANTA.pdf"
                    },
                ]
            },
            {
                lastname: "CHANG",
                firstname: "Jimmy MD",
                details: "Secretary, Philippine Society of Sleep Medicine Vice-President, Philippine Academy of Sleep Surgery (PASS) Head, Comprehensive Sleep Disorder Center, St. Luke's Medical Center, QC",
                imageUrl: "assets/imgs/speakers/CHANG.jpg",
                docs: [
                    {
                        title: "Upper Airway Evaluation in OSA Surgery ",
                        info: "Oct. 24, 1:00 – 2:00 PM, Sampaguita C",
                        link: "images/assets/pdfs/CE 13.2 CHANG.pdf"
                    },
                ]
            },
            {
                lastname: "CHIE-YEH",
                firstname: "Chien MD",
                details: "",
                imageUrl: "assets/imgs/speakers/CHIE-YEH.jpg",
                docs: [
                    {
                        title: "Panel Discussion: Cancer of the Oral Cavity",
                        info: "Oct 22, 9:45 - 10:30 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "CHIONG",
                firstname: "Armando, Jr. MD",
                details: "",
                imageUrl: "assets/imgs/speakers/CHIONG.jpg",
                docs: [
                    {
                        title: "Panel Discussion: Reconstructive Surgery",
                        info: "Oct 23, 2:30 - 3:00PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "CHIONG",
                firstname: "Charlotte MD",
                details: "Dean, University of the Philippines-College of Medicine Director, Philippine National Ear Institute Director, Newborn Hearing Screening Reference Center",
                imageUrl: "assets/imgs/speakers/CHIONG2.jpg",
                docs: [
                    {
                        title: "Approach for Single-sided Deafness",
                        info: "Oct. 24, 10:30 – 10:45 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "CHUA",
                firstname: "Antonio MD",
                details: "Oct. 24, 10:00 – 11:00 AM,   Champagne Salon",
                imageUrl: "assets/imgs/speakers/CHUA.jpg",
                docs: [
                    {
                        title: "Overview and Indications of Image-Guided Systems in Sinus and Skull Base Surgery",
                        info: "",
                        link: "images/assets/pdfs/CE 10.1 CHUA.pdf"
                    },
                ]
            },
            {
                lastname: "CLARAVALL",
                firstname: "Henry John MD",
                details: "Consultant, Dept. of ORL-HNS, University of Santo Tomas Hospital, St. Luke's Global City and The Medical City",
                imageUrl: "assets/imgs/speakers/CLARAVALL.jpg",
                docs: [
                    {
                        title: "Threadlifts and Fillers for Noselift",
                        info: "Oct. 24, 1:45 – 2:00 PM, Fiesta Pavilion",
                        link: "images/assets/pdfs/P7.4 CLARAVALL.pdf"
                    },
                    {
                        title: "Nasal Augmentation using Thread and Fillers ",
                        info: "Oct. 24, 3:00 – 4:00 PM, Roma Salon",
                        link: "images/assets/pdfs/P7.4 CLARAVALL.pdf"
                    },
                ]
            },
            {
                lastname: "DAVID",
                firstname: "Joselito MD",
                details: "Chairman, Dept. of ORL-HNS, Jose R. Reyes Memorial Medical Center Clinical Faculty, Dept. of ORL-HNS, Faculty of Medicine & Surgery, UST Consultant, Santo Tomas University Hospital & Angeles University Foundation Med. Ctr.",
                imageUrl: "assets/imgs/speakers/DAVID.jpg",
                docs: [
                    {
                        title: "Prosthesis",
                        info: "Oct. 24, 8:30 – 8:45 AM, Fiesta Pavilion",
                        link: "images/assets/pdfs/P2.3 DAVID.pdf"
                    },
                ]
            },
            {
                lastname: "DELA PEÑA",
                firstname: "Arturo MD",
                details: "",
                imageUrl: "assets/imgs/speakers/DelaPena.jpg",
                docs: [
                    {
                        title: "Panel Discussion: Salivary Gland Tumors",
                        info: "Oct 22, 4:15-4:45PM, Fiesta Pavilion",
                        link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "DE RAMOS",
                firstname: "Joanne Sebastiana MD",
                details: "Professor 1 (former College Secretary & Associate Dean), St. Luke's College 	of Medicine Active Consultant, Section Head Otology, St. Luke's Medical Center QC Medical Specialist !, Part Time, Veterans Memorial Medical Center",
                imageUrl: "assets/imgs/speakers/DE RAMOS.jpg",
                docs: [
                    {
                        title: "Diagnosis, Differentiation and Management of Different Types of BPPV",
                        info: "Oct. 24, 10:00 – 11:00 AM, Sampaguita A",
                        link: "images/assets/pdfs/CE 6.1 DE RAMOS.pdf"
                    },
                ]
            },
            {
                lastname: "DOFITAS",
                firstname: "Rodney MD",
                details: "",
                imageUrl: "assets/imgs/speakers/DOFITAS.jpg",
                docs: [
                    {
                        title: "Panel Discussion: Thyroid Cancer",
                        info: "Oct 22, 11:30-12:30 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "EMBATE",
                firstname: "Jose Raindrop MD",
                details: "Assistant Professor 1, Davao Medical School Active Consultant, Davao Medical School Foundation Hospital Part Time Associate Active Consultant, Davao Doctors Hospital",
                imageUrl: "assets/imgs/speakers/EMBATE.png",
                docs: [
                    {
                        title: "Image Guided Surgery in the Sinuses and Beyond ",
                        info: "Oct. 24, 10:00 – 11:00 AM, Champagne Salon",
                        link: "images/assets/pdfs/CE 10.2 EMBATE.pdf"
                    },
                ]
            },
            {
                lastname: "ENECILLA",
                firstname: "Ma. Lourdes MD",
                details: "Secretary, Philippine Academy of Rhinology (PAR) Active Consultant, St. Luke's Medical Center-Global City  and Asian 	Hospital & Medical Center ",
                imageUrl: "assets/imgs/speakers/ENECILLA.jpg",
                docs: [
                    {
                        title: "Office Procedures in Managing Chronic Rhinosinusitis and Nasal Polyposis",
                        info: "Oct. 24, 2:15 – 2:30 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "ESPIRITU",
                firstname: "Anne Marie MD",
                details: "Board of Trustee, Philippine Society of Otolaryngology-HNS Head, Section of Rhinopharyngology & Allergy, Dept. of ORL-HNS, Manila Doctors Hospital Associate Board ExAMiner, Philippine Board of Otolaryngology-HNS",
                imageUrl: "assets/imgs/speakers/ESPIRITU.jpg",
                docs: [
                    {
                        title: "Barrier Dysfunction in Allergic Rhinitis ",
                        info: "Oct. 24, 1:00 – 2:00 PM, Sampaguita B",
                        link: "images/assets/pdfs/CE 12.1 ESPIRITU.pdf"
                    },
                ]
            },
            {
                lastname: "FORTUNA",
                firstname: "Ma. Clarissa MD",
                details: "Chair, Dept. of ORL-HNS, The Medical City Consultant Director, ENT-HNS, Center for Voice & Swallowing Disorders, The Medical City Head, Section of Laryngology, Dept. of ORL-HNS, UST Hospital  ",
                imageUrl: "assets/imgs/speakers/CHANG.jpg",
                docs: [
                    {
                        title: "Panel Discussion: Laser Surgery in Laryngology",
                        info: "Oct 24, 9:00-9:30 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Unsedated Office-based Procedure in Laryngology ",
                        info: "Oct. 24, 3:00 – 4:00 PM, Sampaguita B"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "FRAGANTE",
                firstname: "Edilberto Joaquin Jr. MD",
                details: "Clinical Associate Professor, UP-College of Medicine Medical Specialist, UP-PGH and National Kidney & Transplant Institute Active Consultant, Cardinal Santos Medical Center",
                imageUrl: "assets/imgs/speakers/FRAGANTE.jpg",
                docs: [
                    {
                        title: "Panel Discussion: Larynx Cancer",
                        info: "Oct 23, 11:00 AM-12:00 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "GALVEZ",
                firstname: "Joseph Amado MD",
                details: "Chairman, Dept. of ORL-HNS, Ospital ng Maynila Associate Professor, Dept. of ORL-HNS, Emilio Aguinaldo College- College of Medicine Instructor, ORL-HNS, PAMantasan ng Lungsod ng Maynila  College of Medicine",
                imageUrl: "assets/imgs/speakers/GALVEZ.jpg",
                docs: [
                    {
                        title: "Soft Tissue Filler Augmentation",
                        info: "Oct. 24, 1:30 – 1:45 PM, Fiesta Pavilion",
                        link: "images/assets/pdfs/P7.3  GALVEZ.pdf"
                    },
                    {
                        title: "Facial Shaping with Neuromodulators and Fillers",
                        info: "Oct. 24, 3:00 – 4:00 PM, Roma Salon",
                        link: "images/assets/pdfs/CE 19.1 GALVEZ.pdf"
                    },
                ]
            },
            {
                lastname: "GLORIA-CRUZ",
                firstname: "Teresa Luisa MD",
                details: "",
                imageUrl: "assets/imgs/speakers/GLORIA.jpg",
                docs: [
                    {
                        title: "Vertigo: Let’s Review",
                        info: "Oct. 22, 7:00 – 8:00 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "HAO",
                firstname: "Sheng-po MD",
                details: "",
                imageUrl: "assets/imgs/speakers/HAO.jpg",
                docs: [
                    {
                        title: "Panel Discussion: Skull Base Tumors",
                        info: "Oct 23, 1:30-3:00PM, Fiesta Pavilion",
                        link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "HASSAN",
                firstname: "Dewan MD",
                details: "Senior Consultant & Head, Otolaryngology & Head and Neck Surgery, Sarkari Karmachari Hospital Life Member, Society of Otolaryngology & Head and Neck Surgeons of Bangladesh ",
                imageUrl: "assets/imgs/speakers/HASSAN.jpg",
                docs: [
                    {
                        title: "Retroauricular incision: A New Surgical Technique on Selected Parotid Gland Cases ",
                        info: "Oct 24, 3:00-4:00 PM, Sampaguita C",
                        link: "images/assets/pdfs/CE 18.1 HASSAN.pdf"
                    },
                ]
            },
            {
                lastname: "HERNANDEZ",
                firstname: "Josefino MD",
                details: "Associate Professor & Vice-Chairman, Dept. of ORL-HNS, UP-Philippine 	General Hospital Consultant, Asian Hospital & Medical Center and Rizal Medical Center",
                imageUrl: "assets/imgs/speakers/HERNANDEZ.jpg",
                docs: [
                    {
                        title: "Surgery of Juvenile Angiofibroma ",
                        info: "Oct. 24, 10:00 – 11:00 AM, Sampaguita C",
                        link: "images/assets/pdfs/CE 8.1 HERNANDEZ.pdf"
                    },
                ]
            },
            {
                lastname: "HERNANDEZ",
                firstname: "Melfred MD",
                details: "Director, Office of Alumni Relations, UP Manila Assistant to the Vice Chancellor for Administration, UP Manila Head, Section of Laryngobronchoesophagology & Neck, Asian Hospital & 	Medical Center ",
                imageUrl: "assets/imgs/speakers/HERNANDEZ2.jpg",
                docs: [
                    {
                        title: "Panel Discussion: Laser Surgery in Laryngology",
                        info: "Oct 24, 9:00-9:30 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Vocal Fold Injection in the Clinic: When, Why, How ",
                        info: "Oct. 24, 3:00 – 4:00 PM, Sampaguita B",
                        link: "images/assets/pdfs/CE 17.2 HERNANDEZ M.pdf"
                    },
                ]
            },
            {
                lastname: "HIGGS",
                firstname: "Russell",
                details: "International Sales Manager, PATH Medical GmbH (Germany)",
                imageUrl: "",
                docs: [
                    {
                        title: "AEP Testing with Patient Follow-up via Pathtrack Tracking Software",
                        info: "Oct 24, 11:00-11:20 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "IGNACIO",
                firstname: "Jorge MD",
                details: "",
                imageUrl: "assets/imgs/speakers/IGNACIO.jpg",
                docs: [
                    {
                        title: "Panel Discussion–Multidisciplinary",
                        info: "Oct 22, 2:30-3:30 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "ISIP-TAN",
                firstname: "Iris MD",
                details: "Professor 3, Dept. of Medicine, University of the Philippines College of Medicine Attending Physician, Dept. of Medicine, UP-Philippine General Hospital Visiting Consultant, Manila Doctors Hospital ",
                imageUrl: "assets/imgs/speakers/ISIP.jpg",
                docs: [
                    {
                        title: "Social Media in the Clinical Practice",
                        info: "Oct. 24, 1:25 – 1:50 PM, Maynila Ballroom"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "JARIN",
                firstname: "Peter MD",
                details: "Chair, Philippine Academy of Rhinology (PAR) Consultant, Dept. of ORL-HNS, The Medical City & Quirino Memorial 	Medical Center",
                imageUrl: "assets/imgs/speakers/JARIN.jpg",
                docs: [
                    {
                        title: "Image-guided Systems in Sinus and Skullbase Surgery",
                        info: "Oct. 24, 2:30 – 2:45 PM, Fiesta Pavilion",
                        link: "images/assets/pdfs/P8.3 JARIN.pdf"
                    },
                    {
                        title: "Landmark Base Endoscopic Sinus Surgery",
                        info: "Oct. 24, 1:00 – 2:00 PM, Roma Salon",
                        link: "images/assets/pdfs/CE 14.1 JARIN.pdf"
                    },
                ]
            },
            {
                lastname: "JURADO",
                firstname: "Adonis MD",
                details: "Chair, Philippine Academy of Paediatric Otolaryngology (PAPO) Head, Section of Paediatric ORL, Philippine Children's Medical Center Consultant, Dept. of ORL-HNS, Philippine Heart Center and The Medical 	City ",
                imageUrl: "assets/imgs/speakers/JURADO.jpg",
                docs: [
                    {
                        title: "Office Management of the Pediatric Airway",
                        info: "Oct. 24, 10:00 – 10:15 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "KAY-IGNACIO",
                firstname: "Caroline Bernadette King MD",
                details: "Doctor of Medicine, Faculty of Medicine and Surgery, University of Santo Tomas, Espana, Manila Residency Training in Internal Medicine, University of Santo Tomas Hospital, Espana Manila Fellowshi",
                imageUrl: "assets/imgs/speakers/KAY-IGNACIO.jpg",
                docs: [
                    {
                        title: "Patient Preference Study for Allergic Rhinitis",
                        info: "Oct. 24, 3:30 – 4:00 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "LACOUR",
                firstname: "Michel MD",
                details: "",
                imageUrl: "assets/imgs/speakers/LACOUR.jpg",
                docs: [
                    {
                        title: "Vestibular Compensation",
                        info: "Oct. 24, 12:00 – 1:00 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "LAXAMANA",
                firstname: "Joman MD",
                details: "Rhinology Fellow & Rhinology Section Consultant, Dept. of ORL-HNS, East Avenue Medical Center Visiting/Teaching Consultant, Dept. of ORL-HNS, Jose B. Lingad, Memorial 	Regional Hospital ",
                imageUrl: "assets/imgs/speakers/LAXAMANA.jpg",
                docs: [
                    {
                        title: "Evolving Trends in Sinus Surgery",
                        info: "Oct. 24, 2:00 – 2:15 PM, Fiesta Pavilion",
                        link: "images/assets/pdfs/P8.1 LAXAMANA.pdf"
                    },
                ]
            },
            {
                lastname: "LIM",
                firstname: "Ida Marie MD",
                details: "",
                imageUrl: "assets/imgs/speakers/LIM.jpg",
                docs: [
                    {
                        title: "Panel Discussion - Cancer of the Oral Cavity",
                        info: "Oct 22, 9:45-10:30 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "LIM",
                firstname: "WilliAM MD",
                details: "Associate Professor, UERMMMC Head, Dept. of ORL-HNS, St. Luke's Medical Center-Global City",
                imageUrl: "assets/imgs/speakers/LIM2.jpg",
                docs: [
                    {
                        title: "Panel Discussion - Larynx Cancer",
                        info: "Oct 23, 11:00 AM - 12:00 NN, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Office-based Laryngeal Surgery",
                        info: "Oct. 24, 8:45 – 9:00 AM, Fiesta Pavilion",
                        link: "images/assets/pdfs/P3.1 LIM.pdf"
                    },
                    {
                        title: "Panel Discussion: Laser Surgery in Laryngology",
                        info: "Oct. 24, 9:00 – 9:30 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "LLANES",
                firstname: "Erasmo Gonzalo MD",
                details: "Treasurer, Philippine Society of Otolaryngology-HNS Clinical Associate Professor/Attending Otorhinolaryngologist, Dept. of 	ORL-HNS, PGH Consultant Staff and Faculty-External Services, Philippine National Ear 	Institute, NIH, UP Manila ",
                imageUrl: "assets/imgs/speakers/LLANES.jpg",
                docs: [
                    {
                        title: "Bone-Anchored Hearing Aid ",
                        info: "Oct. 24, 10:00 – 11:00 AM, Sampaguita B",
                        link: "images/assets/pdfs/CE 7.1 LLANES.pdf"
                    },
                ]
            },
            {
                lastname: "LOPA",
                firstname: "Ramon Antonio MD",
                details: "Associate Professor, University of the Philippines College of Medicine Attending Consultant, Dept. of ORL-HNS, Makati Medical Center Section Chief, Section of Rhinology, Dept. of ORL-HNS, Makati Medical 	Center ",
                imageUrl: "assets/imgs/speakers/LOPA.jpg",
                docs: [
                    {
                        title: "Panel Discussion – Skull Base Tumors ",
                        info: "Oct 23, 1:30-2:00PM, Fiesta Pavilion",
                        link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Surgery of Inverting Papilloma ",
                        info: "Oct. 24, 10:00 – 11:00 AM, Sampaguita C"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "LUNA",
                firstname: "Geraldine MD",
                details: "Consultant, Dept. of ORL-HNS, Asian Hospital & Medical Center",
                imageUrl: "assets/imgs/speakers/LUNA.jpg",
                docs: [
                    {
                        title: "\"No More Blind Biopsies\": Integrating the Use of Ultrasound in Head and Neck Practice ",
                        info: "Oct. 24, 3:00 – 4:00 PM, Champagne Salon",
                        link: "images/assets/pdfs/CE 20.2 LUNA.pdf"
                    },
                ]
            },
            {
                lastname: "MAGLAYA",
                firstname: "Jehan Grace MD",
                details: "Assistant Professor, UERMMMCI Visiting Consultant, East Avenue Medical Center",
                imageUrl: "assets/imgs/speakers/MAGLAYA.jpg",
                docs: [
                    {
                        title: "Closed Reduction: Nasal Bone Fracture",
                        info: "Oct. 24, 8:15 – 8:30 AM, Fiesta Pavilion",
                        link: "images/assets/pdfs/P2.2 MAGLAYA.pdf"
                    },
                ]
            },
            {
                lastname: "MAI",
                firstname: "Natalie",
                details: "Director of Sales of Healthcare and Hearing Services",
                imageUrl: "assets/imgs/speakers/MAI.jpg",
                docs: [
                    {
                        title: "Shoebox Audiometry Update: How the iPad Audiometer Continues to Revolutionize the World of Hearing Health",
                        info: "Oct 24, 10:45-11:00 AM, Fiesta Pavilion",
                        link: "images/assets/pdfs/P6.1 MAI.pdf"
                    },
                ]
            },
            {
                lastname: "MANAS",
                firstname: "Ernest Roberto MD",
                details: "Chairman, Dept. of ORL-HNS, Asian Hospital & Medical Center",
                imageUrl: "assets/imgs/speakers/MANAS.jpg",
                docs: [
                    {
                        title: "Basic VNG for the ENT ",
                        info: "Oct. 24, 10:00 – 11:00 AM, Sampaguita A",
                        link: "images/assets/pdfs/CE 6.3 MANAS.pdf"
                    },
                ]
            },
            {
                lastname: "MATIAS",
                firstname: "Homer MD",
                details: "Plastic, Reconstructive, Aesthetic Surgeon & Head and Neck Surgeon in General Santos City and Davao City Member, PSO-HNS and Philippine Academy of Aesthetics Surgery (PAAS)",
                imageUrl: "assets/imgs/speakers/MATIAS.png",
                docs: [
                    {
                        title: "Nerve Blocks/Anesthesia for Office Procedures and Goretex Thread for Rhinoplasty",
                        info: "Oct. 24, 1:00 – 1:15 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "MATUBIS",
                firstname: "Jacob MD",
                details: "",
                imageUrl: "assets/imgs/speakers/MATUBIS.jpg",
                docs: [
                    {
                        title: "Panel Discussion - Salivary Gland Tumors",
                        info: "Oct. 22, 4:15 – 4:45 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "MARTINEZ",
                firstname: "Norberto MD",
                details: "Professor, Dept. of ENT, Faculty of Medicine, University of Santo Tomas Chair, Dept. of ENT, Faculty of Medicine, University of Santo Tomas Head, Section of Otology, St. Luke's Medical Center-Quezon City Head, Hearing & Balance Lab., St. Luke's Medical Center-Global City ",
                imageUrl: "assets/imgs/speakers/MARTINEZ.jpg",
                docs: [
                    {
                        title: "Fat Myringoplasty",
                        info: "Oct. 24, 10:15 – 10:30 AM, Fiesta Pavilion",
                        link: "images/assets/pdfs/P4.3 MARTINEZ.pdf"
                    },
                ]
            },
            {
                lastname: "MEJIA",
                firstname: "Michael MD",
                details: "",
                imageUrl: "assets/imgs/speakers/MEJIA.jpg",
                docs: [
                    {
                        title: "Panel Discusson - Multidisciplinary Management",
                        info: "Oct. 22, 2:30 – 3:00 PM, Sampaguita B"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "METHEETRAIRUT",
                firstname: "Choakchai MD",
                details: "Senior Consultant & Head, Otolaryngology & Head and Neck Surgery, Sarkari Karmachari Hospital Life Member, Society of Otolaryngology & Head and Neck Surgeons of 	Bangladesh",
                imageUrl: "",
                docs: [
                    {
                        title: "Panel Discusson - Thyroid Cancer",
                        info: "Oct. 22, 11:30 AM – 12:30 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "MOSGES",
                firstname: "Ralph MD PhD, FAAAAI",
                details: "Associate Professor & Vice-Chairman, Dept. of ORL-HNS, UP-Philippine 	General Hospital Consultant, Asian Hospital & Medical Center and Rizal Medical Center",
                imageUrl: "",
                docs: [
                    {
                        title: "Allergic Rhinoconjunctivitis: Guidelines Update and New Treatment Strategies",
                        info: "Oct. 23, 7:00 – 11:00 AM, Fiesta Pavilion",
                        link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "NAVARRO-LOCSIN",
                firstname: "Cecilia Gretchen MD",
                details: "Assistant Professor II, St. Luke's Medical Center College of Medicine Head, Dept. of ORL-HNS, St. Luke's Medical Center-Quezon City Medical Specialist II, Philippine Children's Medical Center",
                imageUrl: "assets/imgs/speakers/NAVARRO-LOCSIN.jpg",
                docs: [
                    {
                        title: "Ventilation tubes for OME in Cleft Palate: Do We or Do We Not?",
                        info: "Oct. 24, 9:45 – 10:00 AM, Fiesta Pavilion",
                        link: "images/assets/pdfs/P4.2 LOCSIN.pdf"
                    },
                ]
            },
            {
                lastname: "NONATO",
                firstname: "Rodolfo MD",
                details: "Board of Director, Philippine Board of Otolaryngology-HNS Consultant, Dept. of ORL-HNS, Corazon Locsin Montelibano Memorial Regional Hospital ",
                imageUrl: "assets/imgs/speakers/NONATO.png",
                docs: [
                    {
                        title: "Common ENT-HNS Outpatient Selected Conditions and Situations: How I Managed It ",
                        info: "Oct. 24, 1:00 – 2:00 PM, Champagne Salon",
                        link: "images/assets/pdfs/CE 15.2 NONATO.pdf"
                    },
                ]
            },
            {
                lastname: "PANGAN",
                firstname: "Roberto MD",
                details: "Associate Clinical Professor, Dept. of ORL-HNS, UP-Philippine General Hospital Consultant, Dept. of ORL-HNS, East Avenue Medical Center and Cebu 	Doctor's Hospital",
                imageUrl: "assets/imgs/speakers/PANGAN.png",
                docs: [
                    {
                        title: "Condylar Fractures: When and When Not To Plate ",
                        info: "Oct. 24, 3:00 – 4:00 PM, Sampaguita A"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "PASAYAN",
                firstname: "Mark Kristoffer MD",
                details: "Chair, Philippine Academy of Rhinology (PAR) Consultant, Dept. of ORL-HNS, The Medical City & Quirino Memorial 	Medical Center",
                imageUrl: "assets/imgs/speakers/PASAYAN.jpg",
                docs: [
                    {
                        title: "NECK Session (Natrapharm Enhancing Clinical Knowledge in Current Practice): Solving the Mysteries of Cervical Lymphadenopathy",
                        info: "Oct. 24, 11:30 AM – 12:00 NN, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "PATDU",
                firstname: "Ivy MD, REB, JD",
                details: "Lecturer in Medical Jurisprudence, UP Manila, College of Medicine. Lecturer in Legal Medicine, San Beda College of Law. Lecturer in Forensic Medicine, Ateneo Law School",
                imageUrl: "assets/imgs/speakers/PATDU.png",
                docs: [
                    {
                        title: "Data Privacy",
                        info: "Oct. 24, 1:00 – 1:25 PM, Maynila Ballroom",
                        link: "images/assets/pdfs/S3.1 PATDU.pdf"
                    },
                ]
            },
            {
                lastname: "PONTEJOS",
                firstname: "Alfredo Jr. MD",
                details: "Professor 8, University of Manila-College of Medicine Board of Director, Philippine Board of Otolaryngology-HNS Otorhinolaryngologist, Manila Doctors Hospital and Philippine General 	Hospital",
                imageUrl: "assets/imgs/speakers/PONTEJOS.jpg",
                docs: [
                    {
                        title: "Panel Discussion - Larynx Cancer",
                        info: "Oct. 23, 11:00 AM – 12:00 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "The Use of Harmonic Scalpel in ORL-Head and Neck Surgeries ",
                        info: "Oct. 24, 10:00 – 11:00 AM, Roma Salon",
                        link: "images/assets/pdfs/CE 9.2 PONTEJOS.pdf"
                    },
                ]
            },
            {
                lastname: "PUNO",
                firstname: "Maria Patricia Ann MD",
                details: "Active Consultant, Dept. of ORL-HNS, Makati Medical Center",
                imageUrl: "assets/imgs/speakers/PUNO.jpg",
                docs: [
                    {
                        title: "Overview and Management of OSA",
                        info: "Oct. 24, 2:45 – 3:00 PM, Fiesta Pavilion",
                        link: "images/assets/pdfs/P9.1 PUNO.pdf"
                    },
                ]
            },
            {
                lastname: "REMULLA",
                firstname: "Agnes MD",
                details: "President, Philippine Society of Otolaryngology-HNS Clinical Associate Professor, UP-Philippine General Hospital Attending ORL, Asian Hospital & Medical Center and Philippine General 	Hospital ",
                imageUrl: "assets/imgs/speakers/REMULLA.jpg",
                docs: [
                    {
                        title: "Challenges and Advances in Tonsillectomy and Adenoidectomy",
                        info: "Oct. 24, 8:00 – 9:00 AM, Sampaguita A"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "REYES-QUINTOS",
                firstname: "Maria Rina MD",
                details: "Deputy Executive Director, National Institutes of Health Clinical Associate Professor, UP-Philippine General Hospital Consultant Director Hearing and Dizziness Center, The Medical City ",
                imageUrl: "assets/imgs/speakers/QUINTOS.jpg",
                docs: [
                    {
                        title: "Implantable Devices: Candidacy, Indications and Contraindications ",
                        info: "Oct. 24, 8:00 – 9:00 AM, Sampaguita C",
                        link: "images/assets/pdfs/CE 3.2 QUINTOS.pdf"
                    },
                ]
            },
            {
                lastname: "RICALDE",
                firstname: "Rosario MD",
                details: "Clinical Associate Professor, University of the Philippines Manila, College of Medicine Consultant, Dept. of ORL-HNS, Philippine General Hospital Chair, Dept. of ORL-HNS, Providence Hospital ",
                imageUrl: "assets/imgs/speakers/RICALDE.jpg",
                docs: [
                    {
                        title: "Steroids for Hearing Loss and Vertigo ",
                        info: "Oct. 24, 1:00 – 2:00 PM, Sampaguita A",
                        link: "images/assets/pdfs/CE 11.2 RICALDE.pdf"
                    },
                ]
            },
            {
                lastname: "ROASA",
                firstname: "Francis MD",
                details: "Associate Professor III, UST Faculty of Medicine & Surgery Consultant, Dept. of ORL-HNS, UST Hospital and St. Luke's Medical 	Center-Global City Medical Specialist II, Ospital ng Makati",
                imageUrl: "assets/imgs/speakers/ROASA.jpg",
                docs: [
                    {
                        title: "3D Imaging / Printing and Planning in Maxillofacial Surgery",
                        info: "Oct. 24, 8:00 – 8:15 AM, Fiesta Pavilion",
                        link: "images/assets/pdfs/P2.1 ROASA.pdf"
                    },
                    {
                        title: "CMF Plating That Gets the Best Results: What an ENT Should Know Otorhinolaryngologist",
                        info: "Oct. 24, 3:00 – 4:00 PM, Sampaguita A",
                        link: "images/assets/pdfs/CE 16.1 ROASA.pdf"
                    },
                ]
            },
            {
                lastname: "RODRIGUEZ",
                firstname: "Edgardo Jr. MD",
                details: "Associate Professor, Pamantasan ng Lungsod ng Maynila Chairman Emeritus, Dept. of ORL-HNS, Ospital ng Maynila Consultant, Medical Center Parañaque and Asian Hospital & Medical	Center",
                imageUrl: "assets/imgs/speakers/RODRIGUEZ.jpg",
                docs: [
                    {
                        title: "Investment",
                        info: "Oct. 24, 1:00 – 2:00 PM, Champagne Salon",
                        link: "images/assets/pdfs/CE 15.1 RODRIGUEZ.pdf"
                    },
                ]
            },
            {
                lastname: "ROMUALDEZ",
                firstname: "Joel MD",
                details: "Faculty in Otolaryngology, Faculty of Medicine & Surgery, University of 	Santo Tomas Executive Officer, St. Luke's Medical Center-QC Vice-Chair, Philippine Academy of Neurotology, Otology & Related 	Sciences (PANORS) ",
                imageUrl: "assets/imgs/speakers/ROMUALDEZ.jpg",
                docs: [
                    {
                        title: "Home-Based Vestibular Exercises ",
                        info: "Oct. 24, 10:00 – 11:00 AM, Sampaguita A",
                        link: "images/assets/pdfs/CE 6.2 ROMUALDEZ.pdf"
                    },
                ]
            },
            {
                lastname: "SANNIKORN",
                firstname: "Phakdee MD",
                details: "",
                imageUrl: "assets/imgs/speakers/SANNIKORN.jpg",
                docs: [
                    {
                        title: "Panel Discussion - Reconstructive Surgery ",
                        info: "Oct. 24, 2:30 – 3:00 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "SARMIENTO",
                firstname: "Victoria MD",
                details: "Active Consultant, Dept. of ORL-HNS, Makati Medical Center and Manila 	Doctors Hospital",
                imageUrl: "assets/imgs/speakers/SARMIENTO.png",
                docs: [
                    {
                        title: "Challenges of the Aging Physician",
                        info: "Oct. 24, 7:30 – 7:45 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Local Allergic Rhinitis ",
                        info: "Oct. 24, 1:00 – 2:00 PM, Sampaguita B"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "SARTE",
                firstname: "Michael Alexius MD",
                details: "Chairman, Dept. of ORL-HNS, Rizal Medical Center Consultant, Director Sleep Lab., The Medical City ",
                imageUrl: "assets/imgs/speakers/SARTE.jpg",
                docs: [
                    {
                        title: "Office-based Surgery for the Nasal Cavity",
                        info: "Oct. 24, 3:00 – 3:15 PM, Fiesta Pavilion",
                        link: "images/assets/pdfs/P9.2 SARTE.pdf"
                    },
                    {
                        title: "Diagnostic Tests for OSA ",
                        info: "Oct. 24, 1:00 – 2:00 PM, Sampaguita C",
                        link: "images/assets/pdfs/CE 13.1 SARTE.pdf"
                    },
                ]
            },
            {
                lastname: "SHAH",
                firstname: "Jatin MD",
                details: "",
                imageUrl: "assets/imgs/speakers/SHAH.jpg",
                docs: [
                    {
                        title: "Keynote Speaker",
                        info: "Oct. 22, 8:45 – 9:00 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Cancer of the Oral Cavity",
                        info: "Oct. 22, 9:15 – 9:45 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Surgery for the Primary",
                        info: "Oct. 22, 10:30 – 11:00 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Panel Discussion: Stump the Faculty",
                        info: "Oct 23, 3:30-4:30pm, Maynila Ballroom"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "SHAHA",
                firstname: "Ashok MD",
                details: "Oct. 22, 2:30 – 3:00 PM, Fiesta Pavilion",
                imageUrl: "assets/imgs/speakers/SHAHA.jpg",
                docs: [
                    {
                        title: "Panel Discussion - Multidisciplinary Management",
                        info: "Oct. 22, 2:30 – 3:00 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Surgery for the Neck",
                        info: "Oct. 22, 11:00 – 11:30 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Salivary Gland Tumors",
                        info: "Oct. 22, 3:45 – 4:15 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "STREBEL",
                firstname: "Heinrick Martin Jude MD",
                details: "",
                imageUrl: "assets/imgs/speakers/STREBEL.jpg",
                docs: [
                    {
                        title: "Panel Discussion - Oropharynx Cancer",
                        info: "Oct. 23, 8:40 – 9:30 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "TAN-NGO",
                firstname: "Angelo",
                details: "",
                imageUrl: "assets/imgs/speakers/TAN-NGO.jpg",
                docs: [
                    {
                        title: "Level-3 Home Sleep Test - A Convenient Way to Diagnose OSA",
                        info: "Oct. 24, 1:00 – 2:00 PM, Roma Salon"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "PORCEDDU",
                firstname: "Sandro MD",
                details: "",
                imageUrl: "assets/imgs/speakers/PORCEDDU.jpg",
                docs: [
                    {
                        title: "Panel Discussion: Cancer of the Oral Cavity",
                        info: "Oct. 22, 9:45 - 10:30 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Panel Discussion: Thyroid Cancer",
                        info: "Oct. 22, 11:30 AM - 12:30 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Advances in Radiotherapy",
                        info: "Oct. 22, 1:30 – 2:00 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Radiotherapy in Oropharynx Cancer",
                        info: "Oct. 23, 8:20 – 8:40 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Non-Surgical: Radiation in Larynx Cancer",
                        info: "Oct. 23, 10:40 – 11:00 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Panel Discussion: Skull Base Tumors ",
                        info: "Oct .23, 1:30 - 2:00 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Panel Discussion: Stump the Faculty ",
                        info: "Oct. 23, 3:30 - 4:30 PM, Maynila Ballroom"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "VERMORKEN",
                firstname: "Jan MD",
                details: "",
                imageUrl: "assets/imgs/speakers/VERMORKEN.jpg",
                docs: [
                    {
                        title: "Advances in Systemic Therapy",
                        info: "Oct. 22, 2:00 – 2:30 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Non-Surgical: Chemotherapy of Larynx Cancer",
                        info: "Oct. 23, 10:20 – 10:40 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Panel Discussion: Skull Base Tumors",
                        info: "Oct. 23, 1:30 - 2:00 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Panel Discussion: Stump the Faculty",
                        info: "Oct. 23, 3:30 - 4:30 PM, Maynila Ballroom"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "TANTOCO",
                firstname: "Ma. Leah MD",
                details: "Senior Lecturer, UP-CAMP Consultant, Dept. of ORL-HNS, Philippine General Hospital",
                imageUrl: "assets/imgs/speakers/TANTOCO.jpg",
                docs: [
                    {
                        title: "Hearing Aids: Updates and New Trends",
                        info: "Oct. 24, 8:00 – 9:00 AM, Sampaguita C",
                        link: "images/assets/pdfs/CE 3.1 TANTOCO.pdf"
                    },
                ]
            },
            {
                lastname: "VELORO",
                firstname: "Lyra MD",
                details: "Section Head, Pediatric ENT, The Medical City Active Consultant, Philippine Children's Medical Center ",
                imageUrl: "assets/imgs/speakers/VELORO.jpg",
                docs: [
                    {
                        title: "Epistaxis in Children: What Can We Do in the Clinic?",
                        info: "Oct. 24, 9:30 – 9:45 AM, Fiesta Pavilion",
                        link: "images/assets/pdfs/P4.1 VELORO.pdf"
                    },
                ]
            },
            {
                lastname: "VILLAFUERTE",
                firstname: "Cesar Jr. MD",
                details: "President, Philippine Board of Otolaryngology-HNS Associate Professor, Dept. of ORL-HNS, FEU-NRMF and UP-College of Medicine Section Head, Facial Plastic Surgery Section, The Medical City",
                imageUrl: "assets/imgs/speakers/VILLAFUERTE.jpg",
                docs: [
                    {
                        title: "Septorhinoplasty for the Crooked Nose",
                        info: "Oct. 24, 8:00 – 9:00 AM, Roma Salon",
                        link: "images/assets/pdfs/CE 4.1 VILLAFUERTE.pdf"
                    },
                ]
            },
            {
                lastname: "VILLEGAS",
                firstname: "Manuel Jr. MD",
                details: "Chief Medical Officer, Asian Hospital & Medical Cente Professor, ORL-HNS, Emilio Aguinaldo College of Medicin Consultant, Dept. of ORL-HNS, Manila Doctors Hospital and Ospital ng 	Muntinlupa",
                imageUrl: "assets/imgs/speakers/VILLEGAS.jpg",
                docs: [
                    {
                        title: "Symptoms of Eustachian Tube Dysfunction",
                        info: "Oct. 24, 8:00 – 9:00 AM, Sampaguita B"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Practice Pearls in Preventive ORL",
                        info: "Oct. 24, 1:00 – 2:00 PM, Champagne Salon"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "WITTERICK",
                firstname: "Ian MD",
                details: "President, Philippine Society of Otolaryngology-HNS Clinical Associate Professor, UP-Philippine General Hospital Attending ORL, Asian Hospital & Medical Center and Philippine General 	Hospital",
                imageUrl: "assets/imgs/speakers/WITTERICK.jpg",
                docs: [
                    {
                        title: "Panel Discussion: Thyroid Cancer",
                        info: "Oct. 22, 11:30 - 12:30 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Panel Discussion: Salivary Gland Tumors",
                        info: "Oct. 22, 4:15 - 4:45 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Surgery of Oropharynx Cancer",
                        info: "Oct. 23, 8:00 – 8:20 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Panel Discussion: Oropharynx Cancer",
                        info: "Oct. 23, 8:40 - 9:30 AM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Panel Discussion: Larynx Cancer",
                        info: "Oct. 23, 11:00 AM - 12:00 NN, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Skull Base Surgery",
                        info: "Oct. 23, 1:00 – 1:30 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Reconstructive Surgery",
                        info: "Oct. 23, 2:00 – 2:30 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                    {
                        title: "Panel Discussion: Stump the Faculty ",
                        info: "Oct. 23, 3:30 - 4:30 PM, Maynila Ballroom"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "YABUT",
                firstname: "Cesar Anthony MD",
                details: "Consultant, Dept. of ORL-HNS, Southern Philippines Med. Ctr. and General 	Santos Doctor's Hosp. Associate Consultant, Hearing Conservation UP-PGH, Philippine National 	Ear Institute ",
                imageUrl: "assets/imgs/speakers/YABUT.png",
                docs: [
                    {
                        title: "Tympanostomy and Nasal Polypectomy using Microdebrider in the Clinic ",
                        info: "Oct. 24, 1:00 – 2:00 PM, Champagne Salon",
                        link: "images/assets/pdfs/CE 15.3 YABUT.pdf"
                    },
                ]
            },
            {
                lastname: "YANG",
                firstname: "Nathaniel MD",
                details: "Assistant Professor, Dept. of ORL-HNS, FEU-NRMF Clinical Associate Professor, Dept. of ORL-HNS, UP-Philippine General. Hospital Chief, Section of Otology & Neurotology, Dept. of ORL-HNS, FEU-NRMF and 	The Medical City",
                imageUrl: "assets/imgs/speakers/YANG.jpg",
                docs: [
                    {
                        title: "Cochlear Implant Surgery ",
                        info: "Oct. 24, 10:00 – 11:00 AM, Sampaguita B",
                        link: "images/assets/pdfs/CE 7.2 YANG.pdf"
                    },
                    {
                        title: "The Evolution of Temporal Bone Imaging",
                        info: "Oct. 24, 9:00 – 9:20 AM, Maynila Ballroom",
                        link: "images/assets/pdfs/S1.1 YANG.pdf"
                    },
                ]
            },
            {
                lastname: "YAP",
                firstname: "Eduardo MD",
                details: "Consultant - FPS, Belo Medical Group. Consultant, Dept. of ORL-HNS, Metropolitan Medical Center. Founding President, Facial Aesthetic Core of ENT Surgeons (FACES). ",
                imageUrl: "assets/imgs/speakers/YAP.jpg",
                docs: [
                    {
                        title: "The Role of Nasal Septum in Structural Rhinoplasty ",
                        info: "Oct. 24, 8:00 – 9:00 AM, Roma Salon",
                        link: "images/assets/pdfs/CE 4.2 YAP.pdf"
                    },
                ]
            },
            {
                lastname: "YEE",
                firstname: "Don Izzy MD",
                details: "",
                imageUrl: "assets/imgs/speakers/YEE.jpg",
                docs: [
                    {
                        title: "Clearvue CME: \"IV Nutrient Supplementation\" ",
                        info: "Oct. 23, 3:00 – 3:30 PM, Roma Salon"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
            {
                lastname: "YUNUS",
                firstname: "Mohd Razif MD",
                details: "",
                imageUrl: "assets/imgs/speakers/YUNUS.jpg",
                docs: [
                    {
                        title: "Panel Discussion: Salivary Gland Tumors",
                        info: "Oct. 22, 4:15 - 4:45 PM, Fiesta Pavilion"
                        // , link: "images/assets/pdfs/.pdf"
                    },
                ]
            },
        ];
        this.speakerData = [];
        this.speakerData = this.speakers;
    }
    SpeakersPage.prototype.ionViewDidLoad = function () {
    };
    SpeakersPage.prototype.navToSpeakerInfo = function (speaker) {
        console.log('speaker', speaker);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__speaker_info_speaker_info__["a" /* SpeakerInfoPage */], { speaker: speaker });
    };
    SpeakersPage.prototype.onInput = function (e) {
        var val = e.target.value;
        if (val && val.trim() != '') {
            this.speakerData = this.speakers.filter(function (item) {
                var name = item.firstname + "" + item.lastname;
                return (name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.onCancel(0);
        }
    };
    SpeakersPage.prototype.onCancel = function (e) {
        this.searchInput = "";
        this.speakerData = this.speakers;
    };
    SpeakersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-speakers',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\speakers\speakers.html"*/'<ion-content padding>\n	<div>\n		<ion-searchbar\n		  [(ngModel)]="searchInput"\n		  [showCancelButton]="true"\n		  (ionInput)="onInput($event)"\n		  (ionCancel)="onCancel($event)">\n		</ion-searchbar>\n	</div>\n	<ion-list>\n		<ion-item class="speaker-item" *ngFor="let speaker of speakerData" (click)="navToSpeakerInfo(speaker)">\n			<img src="{{speaker.imageUrl}}" *ngIf="speaker.imageUrl != \'\'">\n			<div class="speaker-img-empty" *ngIf="speaker.imageUrl == \'\'"></div>\n			<h5>{{speaker.lastname}}, {{speaker.firstname}}</h5>\n			<ion-icon class="star-icon" name="star-outline"></ion-icon>\n		</ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\speakers\speakers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SpeakersPage);
    return SpeakersPage;
}());

//# sourceMappingURL=speakers.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpeakerInfoPage = /** @class */ (function () {
    function SpeakerInfoPage(navCtrl, navParams, transfer, file, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.transfer = transfer;
        this.file = file;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.speaker = {};
        this.speaker = this.navParams.get("speaker");
    }
    SpeakerInfoPage.prototype.ionViewDidLoad = function () {
    };
    // download(doc){
    //   console.log("file", this.file.externalRootDirectory  + 'file.pdf')
    //   const fileTransfer: FileTransferObject = this.transfer.create();
    //   let loading = this.loadingCtrl.create({
    //     content: 'Downloading PDF...'
    //   });
    //   loading.present();
    //   fileTransfer.download(doc.link, this.file.externalRootDirectory+"/Download/" +doc.title+".pdf", true).then((e)=>{
    //     console.log("success: ", e)
    //     loading.dismiss();  
    //     let toast = this.toastCtrl.create({
    //       message: 'Successfully downloaded document',
    //       duration: 5000,
    //       position: 'top'
    //     });
    //     toast.present();
    //   }).catch((err)=>{
    //     let toast = this.toastCtrl.create({
    //       message: 'Failed to download document',
    //       duration: 5000,
    //       position: 'top'
    //     });
    //     toast.present();
    //     console.log("err",err)
    //     loading.dismiss();  
    //   });
    // }
    SpeakerInfoPage.prototype.download = function (doc) {
        var _this = this;
        if (doc.link.trim().length <= 0) {
            var toast = this.toastCtrl.create({
                message: 'No Document to download',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            return;
        }
        console.log("file", this.file.externalRootDirectory + 'file.pdf');
        var fileTransfer = this.transfer.create();
        var loading = this.loadingCtrl.create({
            content: 'Downloading PDF...'
        });
        loading.present();
        var fileName = doc.link.split("/")[2];
        this.file.copyFile(this.file.applicationDirectory + 'www/assets/pdfs/', fileName, this.file.externalRootDirectory + "/Download/", fileName).then(function (e) {
            var toast = _this.toastCtrl.create({
                message: 'Downloaded to ' + e.fullPath,
                duration: 3000,
                position: 'top'
            });
            toast.present();
            console.log("e", e);
            loading.dismiss();
        }).catch(function (e) {
            var toast = _this.toastCtrl.create({
                message: 'Failed to download document',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            console.log("f", e);
            loading.dismiss();
        });
    };
    SpeakerInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-speaker-info',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\speaker-info\speaker-info.html"*/'<ion-content class="speaker-info-content">\n	<div class="header">\n		<div class="speaker-name">\n			<p>Name:</p>\n			<h6>{{speaker.lastname}}, {{speaker.firstname}}</h6>\n		</div>\n		<img class="speaker-img" src="{{speaker.imageUrl}}" *ngIf="speaker.imageUrl != \'\'">\n		<div class="speaker-empty" *ngIf="speaker.imageUrl == \'\'"></div>\n	</div>\n	<div padding>\n		<div class="details">\n			{{speaker.details}}\n		</div>\n		<ion-list class="speaker-docs">\n			<ion-item *ngFor="let doc of speaker.docs" (click)="download(doc)">\n				<img src="assets/imgs/book.png" class="book-icon">\n				<div class="doc-info">\n					<h5>{{doc.title}}</h5>\n					<h5>{{doc.info}}</h5>\n				</div>\n				<h5 class="arrow">></h5>\n			</ion-item>\n		</ion-list>\n	</div>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\speaker-info\speaker-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], SpeakerInfoPage);
    return SpeakerInfoPage;
}());

//# sourceMappingURL=speaker-info.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], InformationPage);
    return InformationPage;
}());

//# sourceMappingURL=information.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
    function EventInfoPage(navCtrl, navParams, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.event = {
            address: "Level 10-1 One Global Place 5th Avenue & 25th Street, Taguig, 1632 Metro Manila",
            landline: "994-1239",
            cellNo: "0917-1144615"
        };
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
        }, 1);
    }
    EventInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventInfoPage');
    };
    EventInfoPage.prototype.navTo = function () {
        // this.navCtrl.push(LoginPage, {"event":this.event})
    };
    EventInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-info',template:/*ion-inline-start:"C:\wamp64\www\conventionapp\src\pages\event-info\event-info.html"*/'<ion-content class="theme-background" padding (click)="navTo()">\n	<div class="info-container">\n		<h5>{{event.address}}</h5>\n		<h5>Tel no.:{{event.landline}}</h5>\n		<h5>Cellphone no.:{{event.cellNo}}</h5>\n	</div>\n</ion-content>\n'/*ion-inline-end:"C:\wamp64\www\conventionapp\src\pages\event-info\event-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]])
    ], EventInfoPage);
    return EventInfoPage;
}());

//# sourceMappingURL=event-info.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(239);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_event_list_event_list__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_event_info_event_info__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_event_event__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_sponsors_sponsors__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_information_information__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_announcements_announcements__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_about_about__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_registration_registration__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_accomodation_accomodation__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_venue_venue__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_research_presentation_research_presentation__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_research_info_research_info__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_schedule_schedule__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_day_schedule_day_schedule__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_clinical_encounter_clinical_encounter__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_speakers_speakers__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_speaker_info_speaker_info__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_sponsor_popover_sponsor_popover__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_file_transfer__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_file__ = __webpack_require__(213);
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
                __WEBPACK_IMPORTED_MODULE_20__pages_research_info_research_info__["a" /* ResearchInfoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_day_schedule_day_schedule__["a" /* DaySchedulePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_clinical_encounter_clinical_encounter__["a" /* ClinicalEncounterPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_speakers_speakers__["a" /* SpeakersPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_speaker_info_speaker_info__["a" /* SpeakerInfoPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_sponsor_popover_sponsor_popover__["a" /* SponsorPopoverPage */]
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
                __WEBPACK_IMPORTED_MODULE_20__pages_research_info_research_info__["a" /* ResearchInfoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_day_schedule_day_schedule__["a" /* DaySchedulePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_clinical_encounter_clinical_encounter__["a" /* ClinicalEncounterPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_speakers_speakers__["a" /* SpeakersPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_speaker_info_speaker_info__["a" /* SpeakerInfoPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_sponsor_popover_sponsor_popover__["a" /* SponsorPopoverPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_27__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_file__["a" /* File */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_app_app__["a" /* App */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.js.map