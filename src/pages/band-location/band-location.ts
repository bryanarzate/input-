import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../main/main';
import { BandAvailabilityPage } from '../band-availability/band-availability';
import { ClientRegisterPage } from '../client-register/client-register';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation';

declare var google: any;
/**
 * Generated class for the BandLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-band-location',
  templateUrl: 'band-location.html',
})
export class BandLocationPage {
  @ViewChild('map') mapRef: ElementRef;
  lat;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
  }

  pinBut() {
    this.navCtrl.push(BandAvailabilityPage);
  }

  customerBut() {
    this.navCtrl.push(ClientRegisterPage);
  }

  ionViewDidLoad() {
    this.showMap();
  }
  showMap() {
    const Geooptions = {
      enableHighAccuracy: true
    }

    let location;
    this.geolocation.getCurrentPosition(Geooptions).then((resp: any) => {
      console.log(resp);
      //location-lat long
      location = new google.maps.LatLng(+resp.coords.latitude, +resp.longitude);
      //map options
      const options = {
        center: location,
        zoom: 10
      }

      this.map = new google.maps.Map(this.mapRef.nativeElement, options);

    }).catch((error) => {
      console.log('Error getting location', error);
    });




  }

}
