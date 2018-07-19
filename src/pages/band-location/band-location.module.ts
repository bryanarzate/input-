import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BandLocationPage } from './band-location';

@NgModule({
  declarations: [
    BandLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(BandLocationPage),
  ],
})
export class BandLocationPageModule {}
