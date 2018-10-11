import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events} from 'ionic-angular';

import { RegistrationPage } from '../registration/registration';
import { AccomodationPage } from '../accomodation/accomodation';
import { VenuePage } from '../venue/venue';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , public evt: Events
    ) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  
  navTo(page){
  	let p;
  	switch (page) {
  		case "registration":
  			p = RegistrationPage;
  			break;
  		case "accomodation":
  			p = AccomodationPage;
  			break;
  		case "venue":
  			p = VenuePage;
  			break;
  	}

  	this.navCtrl.push(p);
  }
}
