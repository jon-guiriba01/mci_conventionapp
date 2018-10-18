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
import { NavController, NavParams } from 'ionic-angular';
import { ResearchInfoPage } from '../research-info/research-info';
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
        this.navCtrl.push(ResearchInfoPage, { "type": type });
    };
    ResearchPresentationPage = __decorate([
        Component({
            selector: 'page-research-presentation',
            templateUrl: 'research-presentation.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], ResearchPresentationPage);
    return ResearchPresentationPage;
}());
export { ResearchPresentationPage };
//# sourceMappingURL=research-presentation.js.map