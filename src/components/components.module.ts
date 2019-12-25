import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { NgModule } from '@angular/core';
import { UserInfoComponent } from './user-info/user-info';
import { ProjectModuleComponent } from './project-module/project-module';
import { StarProviderComponent } from './star-provider/star-provider';
@NgModule({
	declarations: [UserInfoComponent,
    ProjectModuleComponent,
    StarProviderComponent],
	imports: [RoundProgressModule],
	exports: [UserInfoComponent,
    ProjectModuleComponent,
    StarProviderComponent]
})
export class ComponentsModule {}
