import { Component, Input } from '@angular/core';

@Component({
  selector: 'star-provider',
  templateUrl: 'star-provider.html'
})
export class StarProviderComponent {

  text: string;


  @Input()
  coins: string = "10";

  @Input()
  stars: string = "20";

  @Input()
  videos: string = "45";


  constructor() {
    console.log('Hello StarProviderComponent Component');
    this.text = 'Hello World';
  }

}
