import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

@Component({
  selector: 'page-sponsors',
  templateUrl: 'sponsors.html',
})
export class SponsorsPage {

	sponsors = {
		platinum: [{
			name: "uap"
			, imageUrl: "assets/imgs/uap_logo.png"
		}],
		gold: [
			{
				name: "abbott"
				, imageUrl: "assets/imgs/abbott_logo.png"
			},
			{
				name: "m"
				, imageUrl: "assets/imgs/m_logo.png"
			},
			{
				name: "mylan"
				, imageUrl: "assets/imgs/mylan_logo.jpg"
			},
		],
		silver: [
			{
				name: "gsk"
				, imageUrl: "assets/imgs/gsk_logo.png"
			},
			{
				name: "natrapham"
				, imageUrl: "assets/imgs/natrapham_logo.png"
			},
		],
		bronze: [{
			name: "uap"
			, imageUrl: "assets/imgs/clearvue_logo.png"
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
			{
				name: "Arcatech Electronics / Muracam"
				, address: "142-D R. Lagmay St., San Juan City"
				, contactNo: "(02) 343-1299"
			},
			{
				name: "Auris Hearing Care, Inc."
				, address: "Unit 2035-2036, 20th Flr., Centuria Medical Makati Century City, Brgy. Poblacion, Makati City"
				, contactNo: "(02) 401-7262 / (02) 654-2843"
			},
			{
				name: "Berovan Marketing Incorporated"
				, address: "1526 Rizal Avenue, Sta. Cruz, Manila"
				, contactNo: "(02) 418-3370; 282-4505"
				, telefax: "(02) 711-2711"
			},
			{
				name: "Biomedis Inc."
				, address: "G/F Unilab Building, 66 United Street, Mandaluyong City"
				, telefax: "(63-2) 812-1252"
			},
			{
				name: "CCM International (Phils.), Inc."
				, address: "Unit 2802, 28th Floor, Atlanta Centre, 31 Annapolis St., Greenhills, San Juan City 1502"
				, contactNo: "(02) 661-4705"
			},
			{
				name: "Celsus Pharmaceuticals Phils. Inc."
				, address: "115 Scout Rallos corner 11th Jamboree Streets, Sacred Heart, Quezon City 1103"
				, contactNo: "(63-2) 928-8208"
				, telefax: "(63-2) 928-0815"
			},
			{
				name: "Dentstall Trading"
				, address: "2111 Legarda St., Quiapo, Manila"
				, contactNo: "(63-2) 488-3218"
			},
			{
				name: "Dubbel Medical Corporation"
				, address: "Unit 202 Ablaza Bldg., 117 E. Rodriguez Sr. Ave., Quezon City"
				, telefax: "(63-2) 740-0713"
			},
			{
				name: "Ear Diagnostics Inc."
				, address: "G/F Cosmopolitan Church corner Apacible, Taft Avenue, Ermita, Manila"
			},
		]
		,
	}










  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , public evt: Events
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SponsorsPage');
  }

}
