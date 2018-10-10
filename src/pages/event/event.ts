import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SponsorsPage } from '../sponsors/sponsors';

@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }

  navTo(page){
  	let p;
  	switch (page) {
  		case "program":
  			p = SponsorsPage;
  			break;
  		case "speakers":
  			p = SponsorsPage;
  			break;
  		case "research":
  			p = SponsorsPage;
  			break;
  		case "about":
  			p = SponsorsPage;
  			break;
  		case "sponsors":
  			p = SponsorsPage;
  			break;
  		case "course":
  			p = SponsorsPage;
  			break;
  		case "announcements":
  			p = SponsorsPage;
  			break;
  	}

  	this.navCtrl.push(p)
  }

}
