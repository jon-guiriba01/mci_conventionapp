import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DaySchedulePage } from './day-schedule';

@NgModule({
  declarations: [
    DaySchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(DaySchedulePage),
  ],
})
export class DaySchedulePageModule {}
