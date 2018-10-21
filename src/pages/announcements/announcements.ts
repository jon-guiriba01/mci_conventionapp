import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

@Component({
  selector: 'page-announcements',
  templateUrl: 'announcements.html',
})
export class AnnouncementsPage {

	announcements = [
    `<b>October 21, 2018 (Sunday)</b><br>
    CONFERMENT OF DIPLOMATES<br>
    1:00 - 3:00 PM <br>
    Centennial Hall, The Manila Hotel`,

    `<b>Day 1 October 22, 2018 (Monday)</b><br>
    OPENING CEREMONIES<br>
    8:00 - 9:00 AM <br>
    Fiesta Pavilion Ballroom, The Manila Hotel<br>
    DESCRIPTIVE RESEARCH CONTEST<br>
    2:00 - 4:00 PM<br>
    Maynila Ballroom, The Manila Hotel<br>
    GALA Night (PSO in “Good Company”)<br>
    7:00 - 10:00 PM<br>
    Fiesta Pavilion Ballroom, The Manila Hotel<br>`,

    `<b>Day 2 October 23, 2018 (Tuesday)</b><br>
    FREE PAPER PRESENTATION 1<br>
    7:00 - 9:00 AM <br>
    Maynila Ballroom, The Manila Hotel<br>
    ANALYTICAL RESEARCH CONTEST<br>
    3:30 - 5:00 PM<br>
    Roma Salon, The Manila Hotel<br>
    Fellowship Night (PSO goes OPM with True Faith Band)<br>
    7:00 - 11:00 PM<br>
    Fiesta Pavilion Ballroom, The Manila Hotel`,

    `<b>Day 3 October 24, 2018 (Wednesday)</b><br>
    FREE PAPER PRESENTATION 2<br>
    7:00 - 9:00 AM <br>
    Maynila Ballroom, The Manila Hotel<br>
    POSTER SESSION CONTEST ON SURGICAL INNOVATION AND INSTRUMENTATION<br>
    11:00 -125:00 NN<br>
    Millenium Foyer, The Manila Hotel`,

		`<b>Day 3 October 24, 2018 (Wednesday)</b><br>
    SPECIAL GENRAL MEMBERSHIP MEETING<br>
    4:00 - 6:00 PM <br>
    Fiesta Pavilion Ballroom, The Manila Hotel<br>
    Alumni Night<br>
    6:00 - 10:00 PM`
	]

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , public evt: Events
    ) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AnnouncementsPage');
  }

}
