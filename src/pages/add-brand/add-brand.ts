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
  selector: 'page-add-brand',
  templateUrl: 'add-brand.html',
})
export class AddBrandPage {

  brandName : any;
  brandDescription : any;
  brandOwnerId : any;
  brandImage : any = '../../assets/imgs/user.png';
  brandImageBlob : any = null;
  UserList : any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,public msgHelper : MessageHelper,
    public httpCall : HttpProvider,public codes : Codes,public dataValidation : DataValidation,
    public actionSheet : ActionSheetController,public alertController : AlertController,
    private camera : Camera ) {
      this.UserList = this.navParams.get('userList');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddBrandPage');
  }


  addBrand(){

      //Call the change password API
      var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));

      console.error(JSON.stringify(currentUserInfo));
  
      if(this.dataValidation.isEmptyJson(currentUserInfo)){
        this.msgHelper.showToast('Could not fetch user id');
        return;
      }
  
      //Inserting a new user profile
      var loading = this.msgHelper.showWorkingDialog('Creating your brand ...');
  

      var apiUpdateString = this.codes.API_INSERT_BRAND+
      '?brname='+this.removeNull(this.brandName)+
      '&brdesc='+this.removeNull(this.brandDescription)+
      '&brownerid='+this.removeNull(this.brandOwnerId)+
      '&brcreatebyid='+currentUserInfo[0]['UserId']+
      '&AppType=W';
      //TODO: Fix this
  
      if(this.brandImageBlob == null){
        this.msgHelper.showErrorDialog('Error !!!','Brand Image is mandatory');
        return;
      }
  
  
      var formData : any= new FormData();
      formData.append("file", this.brandImageBlob);

      console.error(apiUpdateString);
  
      this.httpCall.uploadFile(formData,apiUpdateString).then(responseJson => {
         //Dismiss the loader
         loading.dismiss();
  
         //Validate
         if(this.dataValidation.isEmptyJson(responseJson)){
           this.msgHelper.showErrorDialog('Error !!','Empty response received from server !!!');
           return;
         }
  
         if(responseJson['status'] == 1){
          this.msgHelper.showToast('Brand Added !!!');
          this.navCtrl.pop();
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
      title: 'Update your brand picture',
      buttons: [
        {
          text: 'Capture an image',
          role: 'camera',
          icon: 'camera',
          handler: () => {

            const options: CameraOptions = {
              quality: 100,
              sourceType : this.camera.PictureSourceType.CAMERA,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            }
            
            this.camera.getPicture(options).then((imageData) => {
             // imageData is either a base64 encoded string or a file URI
             // If it's base64 (DATA_URL):             
             console.error(imageData);
             let base64Image = 'data:image/jpeg;base64,' + imageData;
             this.brandImage  = base64Image;
             this.brandImageBlob = this.convertBase64ToBlob(base64Image);

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
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            }
            
            this.camera.getPicture(options).then((imageData) => {
             // imageData is either a base64 encoded string or a file URI
             // If it's base64 (DATA_URL):
             console.error(imageData);
             let base64Image = 'data:image/jpeg;base64,' + imageData;
             
             this.brandImage  = base64Image;
             this.brandImageBlob = this.convertBase64ToBlob(base64Image);
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


  private convertBase64ToBlob(base64: string) {
    const info = this.getInfoFromBase64(base64);
    const sliceSize = 512;
    const byteCharacters = window.atob(info.rawBase64);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);

      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      byteArrays.push(new Uint8Array(byteNumbers));
    }

    return new Blob(byteArrays, { type: info.mime });
  }

  private getInfoFromBase64(base64: string) {
    const meta = base64.split(',')[0];
    const rawBase64 = base64.split(',')[1].replace(/\s/g, '');
    const mime = /:([^;]+);/.exec(meta)[1];
    const extension = /\/([^;]+);/.exec(meta)[1];

    return {
      mime,
      extension,
      meta,
      rawBase64
    };
  }

 

  closeModal(){
    this.navCtrl.pop();
  }
}