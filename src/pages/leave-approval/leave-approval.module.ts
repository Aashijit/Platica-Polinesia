import { ComponentsModule } from './../../components/components.module';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeaveApprovalPage } from './leave-approval';

@NgModule({
  declarations: [
    LeaveApprovalPage,
  ],
  imports: [
    IonicPageModule.forChild(LeaveApprovalPage),
    RoundProgressModule,
    ComponentsModule
  ],
})
export class LeaveApprovalPageModule {}
