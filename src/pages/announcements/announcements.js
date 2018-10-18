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
        Component({
            selector: 'page-announcements',
            templateUrl: 'announcements.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            Events])
    ], AnnouncementsPage);
    return AnnouncementsPage;
}());
export { AnnouncementsPage };
//# sourceMappingURL=announcements.js.map