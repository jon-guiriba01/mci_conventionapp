import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-announcements',
  templateUrl: 'announcements.html',
})
export class AnnouncementsPage {

	announcements = [
		`<b>October 21, 2018 (Sunday)</b><br>
		CONFERMENT OF DIPLOMATS<br>
		1:00 - 3:00 PM <br>
		Centennial Hall, The Manila Hotel`
	]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AnnouncementsPage');
  }

}
