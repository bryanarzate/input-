import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PricePage } from '../pages/price/price';
import { MainPage } from '../pages/main/main';
import { BandLocationPage } from '../pages/band-location/band-location';
import { ClientRegisterPage } from '../pages/client-register/client-register';
import { BandAvailabilityPage } from '../pages/band-availability/band-availability';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';

import { InAppBrowser } from '@ionic-native/in-app-browser';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PricePage,
    MainPage,
    BandLocationPage,
    ClientRegisterPage,
    BandAvailabilityPage,
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PricePage,
    MainPage,
    BandLocationPage,
    ClientRegisterPage,
    BandAvailabilityPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
