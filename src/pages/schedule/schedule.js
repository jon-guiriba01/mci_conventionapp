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
import { DaySchedulePage } from '../day-schedule/day-schedule';
import { ClinicalEncounterPage } from '../clinical-encounter/clinical-encounter';
var SchedulePage = /** @class */ (function () {
    function SchedulePage(navCtrl, navParams, evt) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.evt = evt;
        this.tab1Root = DaySchedulePage;
        this.tab2Root = DaySchedulePage;
        this.tab3Root = DaySchedulePage;
        this.tab4Root = ClinicalEncounterPage;
        this.evt;
    }
    SchedulePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SchedulePage');
    };
    SchedulePage.prototype.schedTabClick = function (day) {
        this.evt.publish("schedule:daySelect", day);
    };
    SchedulePage = __decorate([
        Component({
            selector: 'page-schedule',
            templateUrl: 'schedule.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            Events])
    ], SchedulePage);
    return SchedulePage;
}());
export { SchedulePage };
//# sourceMappingURL=schedule.js.map