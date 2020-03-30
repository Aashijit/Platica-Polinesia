import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollaboratorPage } from './collaborator';

@NgModule({
  declarations: [
    CollaboratorPage,
  ],
  imports: [
    IonicPageModule.forChild(CollaboratorPage),
    RoundProgressModule,
    ComponentsModule
  ],
})
export class CollaboratorPageModule {}
