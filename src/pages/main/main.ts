import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

loginBut(){
    this.navCtrl.push(AboutPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

}
