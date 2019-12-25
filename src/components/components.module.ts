import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { NgModule } from '@angular/core';
import { UserInfoComponent } from './user-info/user-info';
import { ProjectModuleComponent } from './project-module/project-module';
@NgModule({
	declarations: [UserInfoComponent,
    ProjectModuleComponent],
	imports: [RoundProgressModule],
	exports: [UserInfoComponent,
    ProjectModuleComponent]
})
export class ComponentsModule {}
