import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainPage } from '../main/main';
import { ContactPage } from '../contact/contact';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation';
import { Http } from '@angular/http';

declare var google: any;
declare var google;
var markers = [0, 1, 2, 3, 4,]

@Component({

  selector: 'page-about',
  templateUrl: 'about.html',

})

export class AboutPage {
  public map;
  @ViewChild('map') mapRef: ElementRef;

  constructor(public navCtrl: NavController, public geolocation: Geolocation, ) { 

  }

  yesButt() {
    this.navCtrl.push(ContactPage);
  }


  noButt() {
    this.navCtrl.push(MainPage);
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
      location = new google.maps.LatLng(+resp.coords.latitude, +resp.coords.longitude);
      //map options
      const options = {
        center: location,
        zoom: 10,
        streetViewControl: false,
        mapTypeId: 'roadmap'

      }

      let map = new google.maps.Map(this.mapRef.nativeElement, options);

      let marker = new google.maps.Marker({
        position: location,
        map:map,
        icon: 'assets/marker/marker-blue.png'
      })

      let MARKERS = [
        {
          pos: new google.maps.LatLng(33.900120 , -118.214594),
          infoWindow: '<h1>Los Juniors de la Sierra</h1> <h5>(760)892-4904</h5><button class="btn" id="banda1"> Show availability </button>',
          id: 'banda1'
        },
        {
          pos: new google.maps.LatLng(33.902464 , -118.218272),
          infoWindow: '<h1>Amistades de Sinaloa</h1> <h5>(562)415-6112</h5> <button class="btn" id="banda2"> Show availability </button>',
          id: 'banda2'
        },
        {
          pos: new google.maps.LatLng(33.953867 , -118.252328 ),
          infoWindow: '<h1>La Nueva Frequencia</h1> <h5>(323)841-4826</h5> <button class="btn" id="banda3"> Show availability </button>',
          id: 'banda3'
        },
        {
          pos: new google.maps.LatLng(33.938429, -118.278330 ),
          infoWindow: '<h1>Serafin y Su Nueva Orden</h1> <h5>(323)388-6267</h5> <button class="btn" id="banda4"> Show availability </button>',
          id: 'banda4'
        }
      ]

      MARKERS.forEach((data:any) => {
        let infoWindow = new google.maps.InfoWindow({
          content: data.infoWindow
        })
        let marker = new google.maps.Marker({
          position: data.pos,
          map: map
        })

        marker.addListener('click', () =>{
          infoWindow.open(map, marker);

          document.getElementById(data.id).addEventListener('click', () => {
            this.navCtrl.push(ContactPage, {id: data.id});
          })
        })

      })



    });


  }

  showCalendar() {
    console.log('clicked');
  }

}
