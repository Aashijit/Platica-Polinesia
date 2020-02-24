import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PermissionsHomeTempPage } from './permissions-home-temp';

@NgModule({
  declarations: [
    PermissionsHomeTempPage,
  ],
  imports: [
    IonicPageModule.forChild(PermissionsHomeTempPage),
    RoundProgressModule,
    ComponentsModule
  ],
})
export class PermissionsHomeTempPageModule {}
