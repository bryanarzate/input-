import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BandAvailabilityPage } from './band-availability';

@NgModule({
  declarations: [
    BandAvailabilityPage,
  ],
  imports: [
    IonicPageModule.forChild(BandAvailabilityPage),
  ],
})
export class BandAvailabilityPageModule {}
