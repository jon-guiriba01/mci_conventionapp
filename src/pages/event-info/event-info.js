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
import { NavController, NavParams, Platform } from 'ionic-angular';
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
        Component({
            selector: 'page-event-info',
            templateUrl: 'event-info.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            Platform])
    ], EventInfoPage);
    return EventInfoPage;
}());
export { EventInfoPage };
//# sourceMappingURL=event-info.js.map