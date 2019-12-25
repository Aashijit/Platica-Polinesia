import { Component, Input } from '@angular/core';


@Component({
  selector: 'project-module',
  templateUrl: 'project-module.html'
})
export class ProjectModuleComponent {

  text: string;

  constructor() {
    console.log('Hello ProjectModuleComponent Component');
    this.text = 'Hello World';
  }

}
