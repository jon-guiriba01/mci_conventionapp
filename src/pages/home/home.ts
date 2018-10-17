import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventListPage } from '../event-list/event-list';
import { TabsPage } from '../tabs/tabs';
import { EventInfoPage } from '../event-info/event-info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navTo(page){
  	switch (page) {
  		case "eventlist":
  			this.navCtrl.push(TabsPage)
  			break;
  		case "contact":
  			this.navCtrl.push(EventInfoPage)
  			break;
  	}
  }

}
