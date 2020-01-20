import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditBrandPage } from './edit-brand';

@NgModule({
  declarations: [
    EditBrandPage,
  ],
  imports: [
    IonicPageModule.forChild(EditBrandPage),
  ],
})
export class EditBrandPageModule {}
