import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-event-info',
  templateUrl: 'event-info.html',
})
export class EventInfoPage {

	event = {
    address: "Level 10-1 One Global Place 5th Avenue & 25th Street, Taguig, 1632 Metro Manila"
    , landline: "994-1239"
    , cellNo: "0917-1144615"
  };

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , public platform: Platform
    ) {

    this.platform.registerBackButtonAction(() => {
      this.navCtrl.pop();
    },1);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventInfoPage');
  }

  navTo(){
  	// this.navCtrl.push(LoginPage, {"event":this.event})
  }
}
