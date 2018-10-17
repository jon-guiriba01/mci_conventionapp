import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { DaySchedulePage } from '../day-schedule/day-schedule';
import { ClinicalEncounterPage } from '../clinical-encounter/clinical-encounter';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  tab1Root = DaySchedulePage;
  tab2Root = DaySchedulePage;
  tab3Root = DaySchedulePage;
  tab4Root = ClinicalEncounterPage;
  
  constructor(
  	public navCtrl: NavController
  	, public navParams: NavParams
  	, public evt: Events
  	) {
  	this.evt
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }

  schedTabClick(day){
  	this.evt.publish("schedule:daySelect", day)
  }
}
