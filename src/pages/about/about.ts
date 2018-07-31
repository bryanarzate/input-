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
  checkFlag = [false, false, false, false];
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
        zoom: 11,
        streetViewControl: false,
        mapTypeId: 'roadmap'

      }

      let map = new google.maps.Map(this.mapRef.nativeElement, options);

      let marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: 'assets/marker/marker-blue.png'
      })

      var image = {
        url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(20, 32),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32)
      };

      let MARKERS = [
        // {
        //   pos: new google.maps.LatLng(33.900120 , -118.214594),
        //   infoWindow: '<h1>Los Juniors de la Sierra</h1> <h5>(760)892-4904</h5><button class="btn" id="banda1"> Show availability </button>',
        //   icon: 'assets/band-logo/acordeon.png',
        //   id: 'banda1',
        //   price: "<b>$200</b>",
        // },
        {
          pos: new google.maps.LatLng(33.902464, -118.218272),
          infoWindow: '<h1>Amistades de Sinaloa</h1> <h5>(562)415-6112</h5> <button class="btn" id="banda2"> Show availability </button>',
          id: 'banda2',
          icon: 'assets/band-logo/acordeon.png',
          price: "<b>$200</b>",
          priceOpen: true
        },
        {
          pos: new google.maps.LatLng(33.953867, -118.252328),
          infoWindow: '<h1>La Nueva Frequencia</h1> <h5>(323)841-4826</h5> <button class="btn" id="banda3"> Show availability </button>',
          id: 'banda3',
          icon: 'assets/band-logo/acordeon.png',
          price: "<b>$350</b>",
          priceOpen: true
        },
        {
          pos: new google.maps.LatLng(33.938429, -118.278330),
          infoWindow: '<h1>La Nueva Orden</h1> <h5>(323)388-6267</h5> <button class="btn" id="banda4"> Show availability </button>',
          icon: 'assets/band-logo/acordeon.png',
          id: 'banda4',
          price: "<b>$400</b>",
          priceOpen: true
        }
      ]

      MARKERS.forEach((data: any) => {
        var image = {
          url: data.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(0, 0),
          scaledSize: new google.maps.Size(25, 25),
        };
        let infoWindow = new google.maps.InfoWindow({
          content: data.price,
          pixelOffset: new google.maps.Size(-22, 0)
        })

        let infoWindowNavigate = new google.maps.InfoWindow({
          content: data.infoWindow,
          pixelOffset: new google.maps.Size(-22, 0)
        })


        let marker = new google.maps.Marker({
          position: data.pos,
          icon: image,
          map: map,
        })

        marker.addListener('click', () => {
          infoWindow.close();
          infoWindowNavigate.open(map, marker);
          if (this.checkFlag[parseInt(data.id.substr(data.id.length - 1)) - 1] == false) {
            document.getElementById(data.id).addEventListener('click', () => {
              this.navCtrl.push(ContactPage, { id: data.id });
            })
            this.checkFlag[parseInt(data.id.substr(data.id.length - 1)) - 1] = true;
          }
        })

        infoWindowNavigate.addListener('closeclick', function () {
          infoWindow.open(map, marker);
        });

        infoWindow.open(map, marker);

      })


    });
  }

  showCalendar() {
    console.log('clicked');
  }

}
