import { AlertController } from 'ionic-angular';
import { DataValidation } from './../../Utils/DataValidation';
import { Codes } from './../../Utils/Codes';
import { HttpProvider } from './../../providers/data/data';
import { MessageHelper } from './../../providers/message-helper';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


@IonicPage()
@Component({
  selector: 'page-update-user',
  templateUrl: 'update-user.html',
})
export class UpdateUserPage {

  userInformation : any;
  newPassword : any;
  oldPassword : any;
  profileImage : any = '../../assets/imgs/user.png';
  userTypeId : any = null;
  UserTypes : any = null;
  groupList : any = null;
  groupIds : any = null;
  toUpdateUserMap : boolean = false;
  readyToUpdate : boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public msgHelper : MessageHelper,
    public httpCall : HttpProvider,public codes : Codes,public dataValidation : DataValidation,
    public actionSheet : ActionSheetController,public alertController : AlertController,public camera : Camera) {

      this.userInformation = this.navParams.get(this.codes.LSK_USER_INFORMATION_JSON);
      this.profileImage = this.userInformation['UserImagePath'];

      this.UserTypes = this.navParams.get('UserTypes');
      this.groupList = this.navParams.get('GroupList');

      //Fetch the user type ids
      var userMapList = JSON.parse(localStorage.getItem(this.codes.LSK_USER_MAP_LIST));

      //Check if the user is previously present in the user map list
      for(let i=0;i<userMapList.length;i++){
        if(userMapList[i]['UserId']==this.userInformation['UserId'])
        {
          this.toUpdateUserMap = true;
          break;
        }
      }

      if(!this.toUpdateUserMap)
       this.readyToUpdate = true;


      //Check if the user has mapped list
      for(let i=0;i<userMapList.length;i++){
        if(userMapList[i]['UserId']==this.userInformation['UserId']){
          var requestJson={
          "AppType": "W",
          "UserMapId": userMapList[i]['UserMapId']
          };
          this.httpCall.callApi(requestJson,this.codes.API_GET_USER_MAP_INFORMATION).then(responseJson => {

            if(this.dataValidation.isEmptyJson(responseJson)){
              this.msgHelper.showErrorDialog('Error !!!','Empty response message !!!');
              return;
            }
            this.userTypeId = responseJson['resultData'][0]['UserMapIds'].split(",");
          });
        }
      }
      console.error(JSON.stringify(this.userInformation));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateUserPage');
  }


  updateUserMapping(){
      var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));


      if(this.dataValidation.isEmptyJson(currentUserInfo)){
        this.msgHelper.showToast('Could not fetch user id');
        return;
      }

      


      //Insert into the database

      if(this.dataValidation.isEmptyJson(this.userTypeId)){
        this.msgHelper.showErrorDialog('Alert !!!','Please select the user types to map.');
        return;
      }

      var requestJson ={
        "AppType": "W",
         "UserId":this.userInformation['UserId'],
         "CreatedByID" : currentUserInfo[0]['UserId'],
         "UserTypeIds" : this.convertArrayToString(this.userTypeId)
      };

      var loading = this.msgHelper.showWorkingDialog('Mapping User ...');

      this.httpCall.callApi(requestJson,this.codes.API_INSERT_USER_MAP).then(responseJson =>{

        loading.dismiss();
        if(this.dataValidation.isEmptyJson(responseJson)){
          this.msgHelper.showAlert('Error !!','No response received !!!');
          return;
        }

        if(responseJson['status'] == 1){
          this.msgHelper.showToast('Mapped user !!!');
          this.navCtrl.pop();
          return;
        }
        
      });
  }


  convertArrayToString(array){

    var str="";

    for(let i=0;i<array.length;i++){
      str = str+array[i]+",";
    }

    return str.substring(0,str.length-1);

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

           

            //Call the change password API
            var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));

            if(this.dataValidation.isEmptyJson(currentUserInfo)){
              this.msgHelper.showToast('Could not fetch user id');
              return;
            }

            var requestJson={
              "UserId": this.userInformation['UserId'],
              "OldPassword": this.oldPassword,
              "NewPassword": this.newPassword,
              "ModifiedById": +currentUserInfo[0]['UserId'],
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

  closeModal(){
    this.navCtrl.pop();
  }

}
