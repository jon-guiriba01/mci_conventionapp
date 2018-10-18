var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { SponsorsPage } from '../sponsors/sponsors';
import { AnnouncementsPage } from '../announcements/announcements';
import { AboutPage } from '../about/about';
import { ResearchPresentationPage } from '../research-presentation/research-presentation';
import { SchedulePage } from '../schedule/schedule';
import { SpeakersPage } from '../speakers/speakers';
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
                p = SchedulePage;
                break;
            case "speakers":
                p = SpeakersPage;
                break;
            case "research":
                p = ResearchPresentationPage;
                break;
            case "about":
                p = AboutPage;
                break;
            case "sponsors":
                p = SponsorsPage;
                break;
            case "course":
                p = SponsorsPage;
                break;
            case "announcements":
                p = AnnouncementsPage;
                break;
        }
        console.log("p: ", p);
        this.navCtrl.push(p);
    };
    EventPage = __decorate([
        Component({
            selector: 'page-event',
            templateUrl: 'event.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            Events])
    ], EventPage);
    return EventPage;
}());
export { EventPage };
//# sourceMappingURL=event.js.map