import { ComponentsModule } from './../components/components.module';
import { GeneralSettingsPageModule } from './../pages/general-settings/general-settings.module';
import { HomePageModule } from './../pages/home/home.module';
import { StarProviderComponent } from './../components/star-provider/star-provider';
import { ProjectModuleComponent } from './../components/project-module/project-module';
import { UserInfoComponent } from './../components/user-info/user-info';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HttpProvider } from './../providers/data/data';
import { Codes } from './../Utils/Codes';
import { MessageHelper } from './../providers/message-helper';
import { DataValidation } from './../Utils/DataValidation';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import { Http, ConnectionBackend, HttpModule } from '@angular/http';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    RoundProgressModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataValidation,
    MessageHelper, 
    Codes,
    HttpProvider,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
