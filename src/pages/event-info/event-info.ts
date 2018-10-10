import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-event-info',
  templateUrl: 'event-info.html',
})
export class EventInfoPage {

	event = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.event = this.navParams.get("event")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventInfoPage');
  }

  navTo(){
  	this.navCtrl.push(LoginPage, {"event":this.event})
  }
}
