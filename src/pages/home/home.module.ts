import { StarProviderComponent } from './../../components/star-provider/star-provider';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { ProjectModuleComponent } from './../../components/project-module/project-module';
import { UserInfoComponent } from './../../components/user-info/user-info';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HomePage,
    UserInfoComponent,
    ProjectModuleComponent,
    StarProviderComponent
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    RoundProgressModule
  ],
})
export class HomePageModule {}
