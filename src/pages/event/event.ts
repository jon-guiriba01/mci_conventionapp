import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SponsorsPage } from '../sponsors/sponsors';
import { AnnouncementsPage } from '../announcements/announcements';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {

  event = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.event = this.navParams.get("event")
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
  			p = AboutPage;
  			break;
  		case "sponsors":
  			p = SponsorsPage;
  			break;
  		case "course":
  			p = SponsorsPage;
  			break;
  		case "announcements":
  			p = AnnouncementsPage;
  			break;
  	}

  	this.navCtrl.push(p)
  }

}
