import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddBusinessUnitPage } from './add-business-unit';

@NgModule({
  declarations: [
    AddBusinessUnitPage,
  ],
  imports: [
    IonicPageModule.forChild(AddBusinessUnitPage),
  ],
})
export class AddBusinessUnitPageModule {}
