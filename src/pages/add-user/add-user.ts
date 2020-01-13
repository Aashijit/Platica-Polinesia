import { AlertController } from 'ionic-angular';
import { DataValidation } from './../../Utils/DataValidation';
import { Codes } from './../../Utils/Codes';
import { HttpProvider } from './../../providers/data/data';
import { MessageHelper } from './../../providers/message-helper';
import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-user',
  templateUrl: 'add-user.html',
})
export class AddUserPage {

  userInformation : any;
  firstName : any;
  middleName : any;
  lastName : any;
  address1 : any;
  address2 : any;
  city : any;
  state : any;
  pincode : any;
  profileImage : any = '../../assets/imgs/user.png';

  constructor(public navCtrl: NavController, public navParams: NavParams,public msgHelper : MessageHelper,
    public httpCall : HttpProvider,public codes : Codes,public dataValidation : DataValidation,
    public actionSheet : ActionSheetController,public alertController : AlertController,
    private camera : Camera ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddUserPage');
  }

  createUserInformation(){
    this.msgHelper.showToast('Creating your user ...');

    this.navCtrl.pop();
  }
  updateUserInformation(){
    //Call the change password API
    var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));


    if(this.dataValidation.isEmptyJson(currentUserInfo)){
      this.msgHelper.showToast('Could not fetch user id');
      return;
    }

    //Update the alerady present json to update the information
    var loading = this.msgHelper.showWorkingDialog('Updating your profile');

    var apiUpdateString = this.codes.API_UPDATE_USER+
    '?uid='+this.userInformation['UserId']+
    '&ufname='+this.removeNull(this.userInformation['FirstName'])+
    '&umname='+this.removeNull(this.userInformation['MiddleName'])+
    '&ulname='+this.removeNull(this.userInformation['LastName'])+
    '&uadd1='+this.removeNull(this.userInformation['Address1'])+
    '&uadd2='+this.removeNull(this.userInformation['Address2'])+
    '&ucity='+this.removeNull(this.userInformation['City'])+
    '&ustate='+this.removeNull(this.userInformation['State'])+
    '&uzip='+this.removeNull(this.userInformation['Pincode'])+
    '&uactivestatus=true'+
    '&umodifybyid='+currentUserInfo[0]['UserId']+
    '&uparentbyid=0'+
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

 

  closeModal(){
    this.navCtrl.pop();
  }


}
