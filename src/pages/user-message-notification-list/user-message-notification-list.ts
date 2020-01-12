import { DataValidation } from './../../Utils/DataValidation';
import { MessageHelper } from './../../providers/message-helper';
import { Codes } from './../../Utils/Codes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ActionSheetController } from 'ionic-angular';
import { HttpProvider } from '../../providers/data/data';


@IonicPage()
@Component({
  selector: 'page-user-message-notification-list',
  templateUrl: 'user-message-notification-list.html',
})
export class UserMessageNotificationListPage {

  userName : any= 'User';
  userInformation : any = null;
  showUserInformation : boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public codes : Codes,
    public msgHelper : MessageHelper,public httpCall : HttpProvider,public dataValidation : DataValidation,
    public actionSheet : ActionSheetController) {

     //Get the  parameter from the local storage
    
     this.userInformation = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));
     console.error(this.userInformation[0]);
     this.userName = this.userInformation[0]['FirstName'];
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserMessageNotificationListPage');
  }

  closeModal(){
    this.navCtrl.pop();
  }

  showUserEditInformation(){
    //Show the contents of the user information -- Do it vice versa
    this.showUserInformation = !this.showUserInformation;
  }


  //Log Out function
  logOut(){
    //Empty the local storage
    this.navCtrl.setRoot('LoginPage');
  }

  updateUserInformation(){
    //Update the alerady present json to update the information
    var loading = this.msgHelper.showWorkingDialog('Updating your profile');

    var apiUpdateString = this.codes.API_UPDATE_USER+
    '?uid='+this.userInformation[0]['UserId']+
    '&ufname='+this.removeNull(this.userInformation[0]['FirstName'])+
    '&umname='+this.removeNull(this.userInformation[0]['MiddleName'])+
    '&ulname='+this.removeNull(this.userInformation[0]['LastName'])+
    '&uadd1='+this.removeNull(this.userInformation[0]['Address1'])+
    '&uadd2='+this.removeNull(this.userInformation[0]['Address2'])+
    '&ucity='+this.removeNull(this.userInformation[0]['City'])+
    '&ustate='+this.removeNull(this.userInformation[0]['State'])+
    '&uzip='+this.removeNull(this.userInformation[0]['Pincode'])+
    '&uactivestatus=true'+
    '&umodifybyid='+this.removeNull(this.userInformation[0]['UserId'])+
    '&uparentbyid=0'+
    '&upwd='+localStorage.getItem(this.codes.LSK_USER_PASSWORD)+
    '&AppType=W&updateWithImageStatus=N';//TODO: Fix this

    this.httpCall.callApi('',apiUpdateString).then(responseJson => {
       //Dismiss the loader
       loading.dismiss();

       //Validate
       if(this.dataValidation.isEmptyJson(responseJson)){
         this.msgHelper.showErrorDialog('Error !!','Empty response received from server !!!');
         return;
       }

       if(responseJson['status'] == 1){
        this.msgHelper.showToast('Profile Information Updated !!!');
        localStorage.removeItem(this.codes.LSK_USER_INFORMATION_JSON);
        localStorage.setItem(this.codes.LSK_USER_INFORMATION_JSON,JSON.stringify(this.userInformation));
       }
    });
  }


  removeNull(variable){
    if(variable == null || variable == undefined || variable == 0)
      return '';
    return  variable;
  }

  presentActionSheetToUpdateImage() {
    let actionSheet = this.actionSheet.create({
      title: 'Update your profile picture',
      buttons: [
        {
          text: 'Capture an image',
          role: 'camera',
          icon: 'camera',
          handler: () => {
            //TODO
          }
        },
        {
          text: 'Select from gallery',
          role: 'gallery',
          icon: 'image',
          handler: () => {
            //TODO
          }
        },
        {
          text: 'Close',
          role: 'close',
          icon : 'close',
          handler: () => {
            actionSheet.dismiss();
          }
        }
      ]
    });
 
    actionSheet.present();
  }
}