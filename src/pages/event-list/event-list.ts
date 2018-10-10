import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventInfoPage } from '../event-info/event-info';

@Component({
  selector: 'page-event-list',
  templateUrl: 'event-list.html',
})
export class EventListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  events = [
  	{
  		name: "IFHNOS World Tour Manila"
  		, location: "Manila Hotel"
  		, date: "Oct 22-24, 2018"
  		, address: "Level 10-1  One Global Place 5th Avenue & 25th Street, Taguig, 1632 Metro Manila"
  		, landline: "994-1239"
  		, cellNo: "0917-1144615"

  	}
  ];

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventListPage');
  }

  navToEvent(event){
  	this.navCtrl.push(EventInfoPage, {"event": event});
  }
}
