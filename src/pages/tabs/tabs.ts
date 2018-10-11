import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events  } from 'ionic-angular';
import { EventPage } from '../event/event';
import { InformationPage } from '../information/information';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
	
  tab2Root = EventPage;
  tab3Root = InformationPage;
  event = {};

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , public evt: Events
    ){
    this.event = this.navParams.get("event")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage', this.event);
  }

  back(){
    this.evt.publish("cmd:back")
  }

}
