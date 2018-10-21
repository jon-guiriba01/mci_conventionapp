import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SpeakerInfoPage } from '../speaker-info/speaker-info';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
	favorites = {
		events:[],
		speakers:[]
	}
  constructor(
  	public navCtrl: NavController
  	, public navParams: NavParams
  	, private storage: Storage
  	) {
  	
  }

  ionViewDidLoad() {
  }

  ionViewDidEnter(){
    this.storage.get('favorites').then(favorites=>{
      if(!favorites) return;
      this.favorites = favorites;
      console.log("FAVORITES TAB", this.favorites)
    })

  }


  navToSpeakerInfo(speaker){
    if(!speaker) return;
    console.log('speaker', speaker)
    this.navCtrl.push(SpeakerInfoPage, {speaker:speaker})
  }

}
