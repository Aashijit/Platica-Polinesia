import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserMessageNotificationListPage } from './user-message-notification-list';

@NgModule({
  declarations: [
    UserMessageNotificationListPage,
  ],
  imports: [
    IonicPageModule.forChild(UserMessageNotificationListPage),
    RoundProgressModule
  ],
})
export class UserMessageNotificationListPageModule {}
