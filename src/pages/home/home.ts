import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventListPage } from '../event-list/event-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navTo(page){
  	this.navCtrl.push(EventListPage)
  }

}
