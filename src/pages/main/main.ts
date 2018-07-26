import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientRegisterPage } from '../client-register/client-register';
import { HomePage } from '../home/home';
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

customerBut(){
    this.navCtrl.push(AboutPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

}
