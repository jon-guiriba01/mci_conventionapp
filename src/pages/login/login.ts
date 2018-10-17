import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { EventListPage } from '../event-list/event-list';
import { EventPage } from '../event/event';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	event = {};
  // password = "opensesame"
  password = ""
  passwordInput = ""

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.event = this.navParams.get("event")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  login(){
    if(this.passwordInput == this.password)
      this.navCtrl.push(EventPage, {event: this.event})
  }

  back(){
    this.navCtrl.setRoot(EventListPage)
  }

}

