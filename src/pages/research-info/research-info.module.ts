import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResearchInfoPage } from './research-info';

@NgModule({
  declarations: [
    ResearchInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ResearchInfoPage),
  ],
})
export class ResearchInfoPageModule {}
