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
			{
				name: "Easmed Medical Supplies, Inc."
				, address: "506 A Richmonde Plaza, 21 San Miguel Avenue, Pasig City"
				, contactNo: "(02) 634-0441"
			},
			{
				name: "Getz Pharma Phils. Inc."
				, address: "2F The Rockwell Business Ctr. Tower 1, Ortigas Avenue, Pasig City"
			},
			{
				name: "Glenmark Philippines Inc."
				, address: "Unit 203, Lapanday Center, 2263, Chino Roces Avenue, Makati City, 1200"
				, contactNo: "(02) 802-3235 loc. 118"
			},
			{
				name: "Great Reconstruction Surgicals, Inc."
				, address: "Rm. 501-C Culmat Bldg., 1270-1330, E. Rodriguez Sr. Avenue, Quezon City"
				, telefax: "(63-2) 725-0867"
			},
			{
				name: "Healthworld International Philippines Corp."
				, address: "421 Quirino Ave., La Huerta, Parañaque City"
				, contactNo: "(02) 829-0175"
				, telefax: "(02) 826-6770"
			},
			{
				name: "Hearwell Medical"
				, address: "16 Shaw Road, #01-04, Singapore 367954"
				, contactNo: "(65) 6509 927"
			},
			{
				name: "Hi-Eisai Pharmaceutical Inc. "
				, address: "Unit 2, 22/F, Tower 6789 Ayala Avenue, Makati City 1226"
				, contactNo: "+63 2 887 1053"
				, telefax: "(63-2) 887-5172"
			},
			{
				name: "Homecare & Hospital Enterprises "
				, address: "1744 B Rizal Avenue, Sta. Cruz, Manila"
				, contactNo: "(02) 313-5450; 313-5114"
			},
			{
				name: "Innogene Kalbiotech Pte. Ltd."
				, address: "5F Regus Gateway Tower, Araneta Center, Cubao, Quezon City"
				, contactNo: "+63 2 790-4405 "
			},
			{
				name: "Integra Medica Solutions Corp. "
				, address: "16 S 3 Manhattan Parkview, Gen. Malvar Avenue, Cubao, Quezon City"
				, contactNo: "(02) 961-8284"
			},
			{
				name: "I.O.S. Marketing Corp."
				, address: "647 P. Paterno St., Quiapo, Manila"
				, contactNo: "(02) 733-5445"
				, telefax: "(02) 733-3767"
			},
			{
				name: "Johnson & Johnson (Philippines), Inc."
				, address: "Edison Road, Barrio Ibayo, Parañaque City"
				, contactNo: "(63-2) 824-8845"
			},
			{
				name: "ustright Healthcare Inc. "
				, address: "#20 Palanza corner Guirayan Streets, Brgy. Doña Imelda, Quezon City"
				, contactNo: "(63-2) 412-2367"
				, telefax: "(63-2) 413-0533"
			},
			{
				name: "Karl Storz GmbH & Co.KG"
				, address: "19-01 Picadiliy Star Building, BGC, 4th Ave, Taguig City, 1636"
				, contactNo: "317-4530 loc. 211"
			},
			{
				name: "Lefort Medical Trading Corporation"
				, address: "Unit 102 Susana Condominium, Banahaw St., Cubao, Quezon City"
				, contactNo: "(02) 413-4506"
			},
			{
				name: "Manila Hearing Aid Center, Inc."
				, address: "Unit 809 8th Floor BSA Twin Tower, Bank Drive, Brgy. Wack- Wack Greenhills East, Ortigas Center, Mandaluyong City"
				, telefax: "(02) 696-1580 loc. 101"
			},
			{
				name: "Manning Abella"
				, address: "98 Quezon St., Tondo, Manila"
				, contactNo: "0916-4714158"
				, mobile: "0916-4714158"
			},
			{
				name: "MedAlphA Philippines Inc."
				, address: "Unit 1020, 2301 Civic Place Condominium, Civic Drive, Filinvest Corporate City, Alabang, Muntinlupa City, "
				, telefax: "(02) 865-6991"
			},
			{
				name: "Medilight Incorporated"
				, address: "11 B April Extension Congressional Avenue, Bahay Toro, Quezon City"
				, contactNo: "(02) 454-7074"
			},
			{
				name: "Merck, Inc."
				, address: "25/F GT International Tower, 6813 Ayala Avenue, cor., HV Dela Costa St., Salcedo Village, Makati City, Philippines"
				, contactNo: "(02) 214-3346"
			},
			{
				name: "Microlab Phils., Inc. "
				, address: "1157 Rodriguez Avenue, cor. Heneral Lacuña St., Bangkal, Makati City"
				, contactNo: "(63-2) 551-3839 "
				, telefax: "(63-2) 831-9621 "
			},
			{
				name: "MTC Opto-Medic, Inc."
				, address: "3rd Floor OHI Bldg., 179 Yakal St., San Antonio Village, Makati City"
				, contactNo: "(02) 813-1351"
			},
			{
				name: "NuEar Philippines, Inc."
				, address: "Unit 2001, 20/F Medical Plaza Ortigas, San Miguel Ave., Ortigas Center, Pasig City"
				, contactNo: "(02) 571-1770"
			},
			{
				name: "Nurture Med Pharma, Inc. a subsidiary of Dyna Drug Corp."
				, address: "Capt. Henry Javier cor. Danny Floro St., Brgy. Oranbo, Pasig City"
				, contactNo: "0932-8627882"
			},
			{
				name: "Olten Instruments Phils. Corp."
				, address: "16 Sampaguita St., Tomasa Subd., Ususan, Taguig City"
				, contactNo: "(02) 628-3293; 642-7088"
			},
			{
				name: "One Pharma Company, Inc."
				, address: "Abel Nosce St., BF Resort Village, Talon 2 Las Piñas City"
				, contactNo: "(02) 871-2537"
			},
			{
				name: "Pfizer, Inc."
				, address: "19th Floor, 8 Rockwell Building, Hidalgo Drive, Rockwell Center, Makati City"
				, contactNo: "(02) 451-9200"
			},
			{
				name: "Pharex Health Corp."
				, address: "Units 101-102, G/F Bldg. Alpha UP-Ayala Land TechnoHub, Commonwealth Ave."
			},
			{
				name: "Diliman, Quezon City"
				, contactNo: "(02) 433-8088 "
			},
			{
				name: "Pharma Nutria N.A. (MM-L), Inc."
				, address: "SV More Corporate Center, 16 Sct. Tuazon, Cor. Roces Avenue, Quezon City"
				, contactNo: "+632 373-6240"
			},
			{
				name: "Pharmahex, Inc. "
				, address: "J.A. Development Compound, #7 E. Rodriguez Jr. Ave., Bagong Ilog, Pasig City 1600"
				, contactNo: "(02) 671-2090"
			},
			{
				name: "Pines Medical Trading"
				, address: "14-A Sunflower St., San Luis Village, Baguio City"
			},
			{
				name: "PMII-Bayer Consumer Health "
				, address: "29th Flr. Menarco Tower, 32nd Street, Bonifacio Global City, Taguig"
			},
			{
				name: "Quality Sleep Enterprise Inc."
				, address: "6/F High Pointe Bldg., 1184 C. Roces Avenue, Makati City"
				, contactNo: "(02) 816-3860"
			},
			{
				name: "ResWerkes  Phils., Inc."
				, address: "Unit 1001, 10th Floor The Orient Square Building, F. Ortigas, Jr. Road, Ortigas Center, Pasig City"
				, contactNo: "(02) 470-2931"
				, teleFax: "(02) 470-2809"
			},
			{
				name: "Sai-International"
				, address: "3212 Tindalo St., United Parañaque Subdivision 2, Parañaque City"
				, contactNo: "(02) 821-8828"
			},
			{
				name: "Sandoz Philippines Corp."
				, address: "7th Floor Asian Reinsurance Bldg., Gamboa and Salcedo Sts., Legaspi Village, Makati City "
				, contactNo: "(63-2) 368-7888 loc. 836"
				, telefax: "(63-2) 815-0101     "
			},
			{
				name: "Sensomed Philippines, Inc."
				, address: "Unit 1508 Orient Square Bldg., F. Ortigas Jr. Road, Ortigas Center, Pasig City "
				, contactNo: "(63-2) 635-5169"
				, telefax: "(63-2) 635-5170"
			},
			{
				name: "Trevor International Trading – Dr. Kim"
				, address: "333 A. Mabini St., Caloocan City"
			},
			{
				name: "The Cathay Drug Company Inc."
				, address: "2/F Vernida 1 Bldg., 120 Amorsolo St., Legaspi Village, Makati City"
				, contactNo: "(63-2) 892-5936 "
				, telefax: "(63-2) 818-6739"
			},
			{
				name: "Unilab, Inc. - PRMD"
				, address: "G/F 132 Bayanihan Annex Bldg., Pioneer St., Mandaluyong City"
				, contactNo: "(632) 858-1966 loc 1962"
			},
			{
				name: "Westmont Pharmaceuticals"
				, address: "4th Floor, Bonaventure Plaza, Ortigas Avenue, Greenhills, San Juan City"
				, contactNo: "(63-2) 858-1277"
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
