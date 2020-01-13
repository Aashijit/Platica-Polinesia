import { AlertController } from 'ionic-angular';
import { DataValidation } from './../../Utils/DataValidation';
import { MessageHelper } from './../../providers/message-helper';
import { Codes } from './../../Utils/Codes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ActionSheetController } from 'ionic-angular';
import { HttpProvider } from '../../providers/data/data';
import { Camera, CameraOptions } from '@ionic-native/camera';


@IonicPage()
@Component({
  selector: 'page-user-message-notification-list',
  templateUrl: 'user-message-notification-list.html',
})
export class UserMessageNotificationListPage {

  userName : any= 'User';
  userInformation : any = null;
  showUserInformation : boolean = false;
  newPassword : string = null;
  profileImage : any = '../../assets/imgs/user.png';

  constructor(public navCtrl: NavController, public navParams: NavParams,public codes : Codes,
    public msgHelper : MessageHelper,public httpCall : HttpProvider,public dataValidation : DataValidation,
    public actionSheet : ActionSheetController,public alertController : AlertController,
    public camera : Camera) {

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

            const options: CameraOptions = {
              quality: 100,
              sourceType : this.camera.PictureSourceType.CAMERA,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            }
            
            this.camera.getPicture(options).then((imageData) => {
             // imageData is either a base64 encoded string or a file URI
             // If it's base64 (DATA_URL):
             let base64Image = 'data:image/jpeg;base64,' + imageData;
             this.profileImage  = base64Image;
            }, (err) => {
             // Handle error
            });
          }
        },
        {
          text: 'Select from gallery',
          role: 'gallery',
          icon: 'image',
          handler: () => {

            const options: CameraOptions = {
              quality: 100,
              sourceType : this.camera.PictureSourceType.PHOTOLIBRARY,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            }
            
            this.camera.getPicture(options).then((imageData) => {
             // imageData is either a base64 encoded string or a file URI
             // If it's base64 (DATA_URL):
             let base64Image = 'data:image/jpeg;base64,' + imageData;
             this.profileImage  = base64Image;
            }, (err) => {
             // Handle error
            });



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

  changePassword(){
    const alert = this.alertController.create({
      title: 'Password to be changed',
      message: 'Please note down the password.',
      buttons: [
        {
          text: 'No',
          role: 'no',
          handler: () => {
            
          }
        }, {
          text: 'Yes',
          handler: () => {

            //Validation
            if(this.dataValidation.isEmptyJson(this.newPassword)){
              this.msgHelper.showToast('Please enter a new password !!!');
              return;
            }


            if(String(this.newPassword).length >= 50){
              this.msgHelper.showToast('Password cannot be more than 50 characters !!!');
              return;
            }


            //Call the delete user API
            var requestJson={
              "UserId": this.userInformation[0]['UserId'],
              "OldPassword": localStorage.getItem(this.codes.LSK_USER_PASSWORD),
              "NewPassword": this.newPassword,
              "ModifiedById": this.userInformation[0]['UserId'],
              "AppType": "W"
            }
            var loading = this.msgHelper.showWorkingDialog('Changing the password ...');

            this.httpCall.callApi(requestJson,this.codes.API_CHANGE_USER_PASSWORD).then(responseJson=>{

              loading.dismiss();

              if(this.dataValidation.isEmptyJson(responseJson))
              {
                this.msgHelper.showErrorDialog('Error !!','Empty response received from server  !!!');
                return;
              } 
              if(responseJson['status']==1){
                this.msgHelper.showToast('Password changed successfully !!!');
              }

            });

          }
        }
      ]
    });

     alert.present();


  }
}