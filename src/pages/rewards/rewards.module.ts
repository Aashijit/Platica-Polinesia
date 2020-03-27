import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RewardsPage } from './rewards';

@NgModule({
  declarations: [
    RewardsPage,
  ],
  imports: [
    IonicPageModule.forChild(RewardsPage),
    RoundProgressModule,
    ComponentsModule
  ],
})
export class RewardsPageModule {}
