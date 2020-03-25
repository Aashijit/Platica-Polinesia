import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventListPage } from './event-list';

@NgModule({
  declarations: [
    EventListPage,
  ],
  imports: [
    IonicPageModule.forChild(EventListPage),
    RoundProgressModule,
    ComponentsModule
  ],
})
export class EventListPageModule {}
