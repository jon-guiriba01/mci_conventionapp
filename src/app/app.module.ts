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
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
