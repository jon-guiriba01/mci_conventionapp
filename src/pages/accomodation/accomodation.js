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
        Component({
            selector: 'page-accomodation',
            templateUrl: 'accomodation.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            Events])
    ], AccomodationPage);
    return AccomodationPage;
}());
export { AccomodationPage };
//# sourceMappingURL=accomodation.js.map