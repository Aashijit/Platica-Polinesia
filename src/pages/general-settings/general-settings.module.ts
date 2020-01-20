import { ComponentsModule } from './../../components/components.module';
import { UserInfoComponent } from './../../components/user-info/user-info';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { ProjectModuleComponent } from './../../components/project-module/project-module';
import { StarProviderComponent } from './../../components/star-provider/star-provider';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneralSettingsPage } from './general-settings';

@NgModule({
  declarations: [
    GeneralSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(GeneralSettingsPage),
    RoundProgressModule,
    ComponentsModule
  ],
})
export class GeneralSettingsPageModule {}
