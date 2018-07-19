import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { BandLocationPage } from '../band-location/band-location';
 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {


  constructor(public navCtrl: NavController) {}
    
    registerBut(){
      this.navCtrl.push(BandLocationPage);
    }
  }