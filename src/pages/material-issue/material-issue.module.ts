import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaterialIssuePage } from './material-issue';

@NgModule({
  declarations: [
    MaterialIssuePage,
  ],
  imports: [
    IonicPageModule.forChild(MaterialIssuePage),
  ],
})
export class MaterialIssuePageModule {}
