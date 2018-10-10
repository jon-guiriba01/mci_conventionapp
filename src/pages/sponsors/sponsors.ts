import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-sponsors',
  templateUrl: 'sponsors.html',
})
export class SponsorsPage {

	sponsors = {
		platinum: [{
			name: "uap"
			, imageUrl: "assets/imgs/logo.png"
		}],
		gold: [
			{
				name: "abbott"
				, imageUrl: "assets/imgs/logo.png"
			},
			{
				name: "m"
				, imageUrl: "assets/imgs/logo.png"
			},
			{
				name: "mylan"
				, imageUrl: "assets/imgs/logo.png"
			},
		],
		silver: [
			{
				name: "gsk"
				, imageUrl: "assets/imgs/logo.png"
			},
			{
				name: "natrapham"
				, imageUrl: "assets/imgs/logo.png"
			},
		],
		bronze: [{
			name: "uap"
			, imageUrl: "assets/imgs/logo.png"
		}],
		minor: [
			{
				name: "ADP Pharma Corporation"
				, address: "Suite C, 9/F The Curve, 32nd St., cor. 3rd Avenue BGC, Taguig City"
				, contactNo: "(63-2) 405-5125"
			},
			{
				name: "Allmed Instruments Medical System Inc. (AIMS) "
				, address: "Ground Floor Unit 106 Mindanao Nova Realty Bldg. Mindanao Avenue, Brgy. Talipapa, Novaliches Quezon City"
				, contactNo: "(02) 418-3370; 282-4505"
				, telefax: "(02) 930-8708"
			},
		]
		,
	}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SponsorsPage');
  }

}
