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
import { NavController, NavParams, Events, Platform } from 'ionic-angular';
import { EventPage } from '../event/event';
import { InformationPage } from '../information/information';
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams, evt, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.evt = evt;
        this.platform = platform;
        this.tab2Root = EventPage;
        this.tab3Root = InformationPage;
        this.event = null;
        this.event = this.navParams.get("event");
        this.evt.subscribe("select:event", function (event) {
            _this.event = event;
        });
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
        }, 1);
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage', this.event);
    };
    TabsPage.prototype.back = function () {
        this.evt.publish("cmd:back");
    };
    TabsPage = __decorate([
        Component({
            selector: 'page-tabs',
            templateUrl: 'tabs.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            Events,
            Platform])
    ], TabsPage);
    return TabsPage;
}());
export { TabsPage };
//# sourceMappingURL=tabs.js.map