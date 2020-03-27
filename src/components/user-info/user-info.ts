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

    userImage : any = "../../assets/imgs/user.png";

  constructor() {
    console.log('Hello UserInfoComponent Component');

    //Fetch the user image from the local storage
    var userInfo = JSON.parse(localStorage.getItem('userinfo'));
    this.userImage = userInfo[0]['UserImagePath'];
  }

}
