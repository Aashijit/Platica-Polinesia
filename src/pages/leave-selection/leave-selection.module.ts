import { ComponentsModule } from './../../components/components.module';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeaveSelectionPage } from './leave-selection';

@NgModule({
  declarations: [
    LeaveSelectionPage,
  ],
  imports: [
    IonicPageModule.forChild(LeaveSelectionPage),
    RoundProgressModule,
    ComponentsModule,
  ],
})
export class LeaveSelectionPageModule {}
