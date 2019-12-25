import { Component, Input } from '@angular/core';


@Component({
  selector: 'user-info',
  templateUrl: 'user-info.html'
})
export class UserInfoComponent {

  @Input()
    messageNumber: string;
    
  @Input()
    notificationNumber : string;

  constructor() {
    console.log('Hello UserInfoComponent Component');
  }

}
