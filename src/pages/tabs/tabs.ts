import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Platform  } from 'ionic-angular';
import { EventPage } from '../event/event';
import { HomePage } from '../home/home';
import { InformationPage } from '../information/information';
import { EventListPage } from '../event-list/event-list';
import { App } from 'ionic-angular/components/app/app';


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
    , public app: App
    ){
    this.event = this.navParams.get("event")

    this.evt.subscribe("select:event", (event)=>{
      this.event = event;
    })

    this.platform.registerBackButtonAction(() => {
      app.navPop()
    },1);
 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage', this.event);
  }

  back(){
    this.app.navPop()
  }

}
