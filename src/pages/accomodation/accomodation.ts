import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

@Component({
  selector: 'page-accomodation',
  templateUrl: 'accomodation.html',
})
export class AccomodationPage {

	content = `
	<p>Book your stay at the Manila Hotel here. Registered delegates will be given a special code to avail of the preferential room rate. You may also email the secretariat at ifhnosmanila2018@pso-hns.org to reserve directly.</p>

	<img src="assets/imgs/superior_deluxe_bedroom.jpg">

	<h2>Superior Deluxe Room</h2>
	<h3>PHP 8,700.00 nett</h3>

	<p>The perfect retreat from the bustling city, each room is ornately decorated with extreme sophistication to suit your taste.</p>

	<ol>
	<li>Free Wi-Fi access</li>
	<li>Lavish premium bathroom amenities and toiletries </li>
	<li>for your convenience</li>
	<li>Coffee and tea making facilities</li>
	<li>MP3 player-compatible with AM/FM clock radio</li>
	<li>Separate bathtub and walk-in rain shower</li>
	<li>Individually electronic-controlled air-conditioning</li>
	<li>Remote-control LCD TV with cable channels</li>
	<li>Fully stocked mini-bar</li>
	<li>In-room safe</li>
	<li>Signature contact-less electronic door lock by</li>
	</ol>

	<p>
	Aside from the convention venue, there are numerous excellent hotels nearby . Please watch this space for further details. <br> Thank you for your interest!
	</p>

	<img src="assets/imgs/hotel.jpg">

	`

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , public evt: Events
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccomodationPage');
  }

}
