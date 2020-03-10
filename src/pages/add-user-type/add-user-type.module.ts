import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddUserTypePage } from './add-user-type';

@NgModule({
  declarations: [
    AddUserTypePage,
  ],
  imports: [
    IonicPageModule.forChild(AddUserTypePage),
  ],
})
export class AddUserTypePageModule {}
