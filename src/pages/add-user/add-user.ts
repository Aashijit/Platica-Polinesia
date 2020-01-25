import { AlertController } from 'ionic-angular';
import { DataValidation } from './../../Utils/DataValidation';
import { Codes } from './../../Utils/Codes';
import { HttpProvider } from './../../providers/data/data';
import { MessageHelper } from './../../providers/message-helper';
import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  update(){
    this.msgHelper.showToast('Creating your user ...');

    this.navCtrl.pop();
  }
  createUserInformation(){
    //Call the change password API
    var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));


    if(this.dataValidation.isEmptyJson(currentUserInfo)){
      this.msgHelper.showToast('Could not fetch user id');
      return;
    }

    //Inserting a new user profile
    var loading = this.msgHelper.showWorkingDialog('Creating your profile');

    var apiUpdateString = this.codes.API_INSERT_USER+
    '?ufname='+this.removeNull(this.firstName)+
    '&umname='+this.removeNull(this.middleName)+
    '&ulname='+this.removeNull(this.lastName)+
    '&uadd1='+this.removeNull(this.address1)+
    '&uadd2='+this.removeNull(this.address2)+
    '&ucity='+this.removeNull(this.city)+
    '&ustate='+this.removeNull(this.state)+
    '&uzip='+this.removeNull(this.pincode)+
    '&uactivestatus=true'+
    '&ucreatebyid='+currentUserInfo['UserId']+
    '&uparentbyid=0'+
    '&upwd=12345'+
    '&AppType=W';
    //TODO: Fix this

    const formData = new FormData();
    formData.append('file', this.profileImage);

    this.httpCall.callApi(formData,apiUpdateString).then(responseJson => {

      alert(JSON.stringify(responseJson));
       //Dismiss the loader
       loading.dismiss();

       //Validate
       if(this.dataValidation.isEmptyJson(responseJson)){
         this.msgHelper.showErrorDialog('Error !!','Empty response received from server !!!');
         return;
       }

       if(responseJson['status'] == 1){
        this.msgHelper.showToast('Profile Added !!!');
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
             alert(imageData);
             this.profileImage  = imageData;

             //Convert the base64 to blob 




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
             console.error(imageData);
             let base64Image = 'data:image/jpeg;base64,' + imageData;
             alert(imageData);
             this.profileImage  = imageData;
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
