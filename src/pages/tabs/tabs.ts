import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Platform  } from 'ionic-angular';
import { EventPage } from '../event/event';
import { HomePage } from '../home/home';
import { InformationPage } from '../information/information';
import { EventListPage } from '../event-list/event-list';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
	
  tab2Root = EventPage;
  tab3Root = InformationPage;
  event = null;

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , public evt: Events
    , public platform: Platform
    ){
    this.event = this.navParams.get("event")

    this.evt.subscribe("select:event", (event)=>{
      this.event = event;
    })

    this.platform.registerBackButtonAction(() => {
      this.navCtrl.pop();
    },1);
 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage', this.event);
  }

  back(){
    this.evt.publish("cmd:back")
  }

}
