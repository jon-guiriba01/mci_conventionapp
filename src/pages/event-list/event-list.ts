import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { EventInfoPage } from '../event-info/event-info';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-event-list',
  templateUrl: 'event-list.html',
})
export class EventListPage {

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , public evts: Events
    ) {
  }

  events = [
  	{
  		name: "IFHNOS World Tour Manila"
  		, location: "Manila Hotel"
  		, date: "Oct 22-24, 2018"
      , bannerUrl: "assets/imgs/ifhnos.png"
      , iconUrl: "assets/imgs/ifhnos_icon.png"

  	}
  ];

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventListPage');
  }

  navToEvent(event){
    this.evts.publish("select:event", event)
  	this.navCtrl.push(LoginPage, {"event": event});
  }
}
