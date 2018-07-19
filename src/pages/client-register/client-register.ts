import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';

/**
 * Generated class for the ClientRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-client-register',
  templateUrl: 'client-register.html',
})
export class ClientRegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  nextButt(){
    this.navCtrl.push(AboutPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientRegisterPage');
  }

}
