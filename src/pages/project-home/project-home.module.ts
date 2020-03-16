import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectHomePage } from './project-home';

@NgModule({
  declarations: [
    ProjectHomePage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectHomePage),
    RoundProgressModule,
    ComponentsModule
  ],
})
export class ProjectHomePageModule {}
