import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-sponsor-popover',
  templateUrl: 'sponsor-popover.html',
})
export class SponsorPopoverPage {

	imageUrl
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.imageUrl = this.navParams.get("imageUrl")
  	console.log("oop", this.imageUrl)
  }

  ionViewDidLoad() {
  }

}
