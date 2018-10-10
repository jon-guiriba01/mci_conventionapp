import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventPage } from '../event/event';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	event = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.event = this.navParams.get("event")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  navToEvent(event){
  	this.navCtrl.setRoot(EventPage, {event:event})
  }


}

