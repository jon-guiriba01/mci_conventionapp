import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpeakerInfoPage } from '../speaker-info/speaker-info';

@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html',
})
export class SpeakersPage {

	speakers =  [
			{
				lastname: "ABERIN-ROLDAN"
				, firstname: "Fortuna Corazon MD"
				, details: "Chair, Philippine Academy of Laryngologybroncoesophagology & Phoniatrics (PALP) Consultant, The Medical City Ortigas & East Avenue Medical Center"
				, imageUrl: "assets/imgs/speakers/ABERIN-ROLDAN.jpg"
				, docs: [
					{
							title:"Videostroboscopy"
						, info: "Oct. 24, 8:00-9:00 AM, Champagne Salon"
						, link: "assets/pdfs/CE 5.2 ROLDAN.pdf"
					}
				]
			},
			{
				lastname: "ABES"
				, firstname: "Generoso MD"
				, details: "Professor Emeritus, ORL, University of the Philippines, Manila President Emeritus, Philippine Academy of Neurotology, Otology and	Related Sciences (PANORS) Consultant, Manila Doctors Hospital, Makati Medical Center and Asian 	Hospital & Med. Ctr. "
				, imageUrl: "assets/imgs/speakers/ABES.jpg"
				, docs: [
					{
							title:"Allergic Rhinitis 101: Simple Case Presentation"
						, info: "Oct. 22, 12:30-1:30 PM, Fiesta Pavilion"
						, link: "assets/pdfs/CE 12.1 ESPIRITU.pdf"
					},
					{
							title:"Insights of a Seasoned Otorhinolaryngologist"
						, info: "Oct. 24, 7:45 – 8:00 AM, Fiesta Pavilion"
						, link: "assets/pdfs/P1.2 ABES.pdf"
					},
				]
			},
			{
				lastname: "ADHAM"
				, firstname: "Marlinda MD"
				, details: ""
				, imageUrl: "assets/imgs/speakers/ADHAM.jpg"
				, docs: [
					{
							title:"Multidisciplinary Management"
						, info: "Oct. 22, 2:30-3:00 PM, Fiesta Pavilion"
						, link: "assets/pdfs/CE 5.2 ROLDAN.pdf"
					},
				]
			},
			{
				lastname: "AGUILERA"
				, firstname: "Keith Romeo MD"
				, details: "Assistant Professor I, St. Luke's College of Medicine Consultant, Dept. of ORL-HNS, St. Luke's Medical Center-Global City"
				, imageUrl: "assets/imgs/speakers/AGUILERA.jpg"
				, docs: [
					{
							title:"Challenges and Advances in Tonsillectomy and Adenoidectomy"
						, info: "Oct. 24, 8:00-9:00 AM, Sampaguita A"
						, link: "images/assets/pdfs/CE 1.1 AGUILERA.pdf"
					},
				]
			},
			{
				lastname: "ALFANTA"
				, firstname: "Eduard MD"
				, details: "Chair, Subcommittee on Research, PSO-HNS Consultant, Dept. of ORL-HNS, East Avenue Medical Center Visiting Consultant, Dept. of ORL-HNS, Manila Doctors Hosp. and Asian 	Hospital & Med. Ctr. "
				, imageUrl: "assets/imgs/speakers/ALFANTA.jpg"
				, docs: [
					{
							title:"EMR: Issues and Challenges in the Clinical Practice"
						, info: "Oct. 24, 10:25 – 10:50 AM, Maynila Ballroom"
						, link: "images/assets/pdfs/S2.2 ALFANTA.pdf"
					},
				]
			},

		]
	
		searchInput;

		speakerData = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.speakerData = this.speakers;
  }

  ionViewDidLoad() {
  }

  navToSpeakerInfo(speaker){
  	console.log('speaker', speaker)
  	this.navCtrl.push(SpeakerInfoPage, {speaker:speaker})
  }

  onInput(e){
		const val = e.target.value;

    if (val && val.trim() != '') {
      this.speakerData = this.speakers.filter((item) => {
      	let name = item.firstname+""+item.lastname; 
        return (name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    else{
    	this.onCancel(0);
    }
  }

  onCancel(e){
  	this.searchInput = "";
  	this.speakerData = this.speakers;
  }

}
