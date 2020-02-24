import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PermissionsPage } from './permissions';

@NgModule({
  declarations: [
    PermissionsPage,
  ],
  imports: [
    IonicPageModule.forChild(PermissionsPage),
    RoundProgressModule,
    ComponentsModule
  ],
})
export class PermissionsPageModule {}
