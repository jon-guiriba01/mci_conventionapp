import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EventListPage } from '../pages/event-list/event-list';
import { EventInfoPage } from '../pages/event-info/event-info';
import { EventPage } from '../pages/event/event';
import { LoginPage } from '../pages/login/login';
import { SponsorsPage } from '../pages/sponsors/sponsors';
import { TabsPage } from '../pages/tabs/tabs';
import { InformationPage } from '../pages/information/information';
import { AnnouncementsPage } from '../pages/announcements/announcements';
import { AboutPage } from '../pages/about/about';
import { RegistrationPage } from '../pages/registration/registration';
import { AccomodationPage } from '../pages/accomodation/accomodation';
import { VenuePage } from '../pages/venue/venue';
import { ResearchPresentationPage } from '../pages/research-presentation/research-presentation';
import { ResearchInfoPage } from '../pages/research-info/research-info';
import { SchedulePage } from '../pages/schedule/schedule';
import { DaySchedulePage } from '../pages/day-schedule/day-schedule';
import { ClinicalEncounterPage } from '../pages/clinical-encounter/clinical-encounter';
import { SpeakersPage } from '../pages/speakers/speakers';
import { SpeakerInfoPage } from '../pages/speaker-info/speaker-info';
import { SponsorPopoverPage } from '../pages/sponsor-popover/sponsor-popover';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { AndroidPermissions } from '@ionic-native/android-permissions';

@NgModule({
  declarations: [
    MyApp
    ,HomePage
    ,EventListPage
    ,EventInfoPage
    ,EventPage
    ,LoginPage
    ,SponsorsPage
    ,TabsPage
    ,InformationPage
    ,AnnouncementsPage
    ,AboutPage
    ,RegistrationPage
    ,AccomodationPage
    ,VenuePage
    ,ResearchPresentationPage
    ,ResearchInfoPage
    ,SchedulePage
    ,DaySchedulePage
    ,ClinicalEncounterPage
    ,SpeakersPage
    ,SpeakerInfoPage
    ,SponsorPopoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
    ,HomePage
    ,EventListPage
    ,EventInfoPage
    ,EventPage
    ,LoginPage
    ,SponsorsPage
    ,TabsPage
    ,InformationPage
    ,AnnouncementsPage
    ,AboutPage
    ,RegistrationPage
    ,AccomodationPage
    ,VenuePage
    ,ResearchPresentationPage
    ,ResearchInfoPage
    ,SchedulePage
    ,DaySchedulePage
    ,ClinicalEncounterPage
    ,SpeakersPage
    ,SpeakerInfoPage
    ,SponsorPopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen
    ,FileTransfer, FileTransferObject
    ,File
    ,AndroidPermissions
    ,{provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
