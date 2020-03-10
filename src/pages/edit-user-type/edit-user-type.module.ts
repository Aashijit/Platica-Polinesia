import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditUserTypePage } from './edit-user-type';

@NgModule({
  declarations: [
    EditUserTypePage,
  ],
  imports: [
    IonicPageModule.forChild(EditUserTypePage),
  ],
})
export class EditUserTypePageModule {}
