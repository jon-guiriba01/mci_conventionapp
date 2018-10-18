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
import { LoginPage } from '../login/login';
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
        this.navCtrl.push(LoginPage, { "event": event });
    };
    EventListPage = __decorate([
        Component({
            selector: 'page-event-list',
            templateUrl: 'event-list.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            Events])
    ], EventListPage);
    return EventListPage;
}());
export { EventListPage };
//# sourceMappingURL=event-list.js.map