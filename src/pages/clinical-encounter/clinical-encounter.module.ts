import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClinicalEncounterPage } from './clinical-encounter';

@NgModule({
  declarations: [
    ClinicalEncounterPage,
  ],
  imports: [
    IonicPageModule.forChild(ClinicalEncounterPage),
  ],
})
export class ClinicalEncounterPageModule {}
