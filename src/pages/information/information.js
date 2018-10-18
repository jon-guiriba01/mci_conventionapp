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
        Component({
            selector: 'page-information',
            templateUrl: 'information.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], InformationPage);
    return InformationPage;
}());
export { InformationPage };
//# sourceMappingURL=information.js.map