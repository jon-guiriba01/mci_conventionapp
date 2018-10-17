import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SponsorPopoverPage } from './sponsor-popover';

@NgModule({
  declarations: [
    SponsorPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(SponsorPopoverPage),
  ],
})
export class SponsorPopoverPageModule {}
