import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResearchInfoPage } from '../research-info/research-info';

@Component({
  selector: 'page-research-presentation',
  templateUrl: 'research-presentation.html',
})
export class ResearchPresentationPage {

	clicked = {
		oral: false,
		poster: false,
	}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResearchPresentationPage');
  }

  navToResearchInfo(type){
  	this.navCtrl.push(ResearchInfoPage, {"type": type})
  }


}
