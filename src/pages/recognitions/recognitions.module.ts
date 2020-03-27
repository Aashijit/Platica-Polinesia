import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecognitionsPage } from './recognitions';

@NgModule({
  declarations: [
    RecognitionsPage,
  ],
  imports: [
    IonicPageModule.forChild(RecognitionsPage),
    RoundProgressModule,
    ComponentsModule
  ],
})
export class RecognitionsPageModule {}
