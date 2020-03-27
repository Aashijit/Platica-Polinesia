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
  selector: 'page-leave-apply',
  templateUrl: 'leave-apply.html',
})
export class LeaveApplyPage {

  requestJson : any = null;
  documentImage1 : any = null;
  documentImage2 : any = null;
  documentImage1Blob : any = null;
  documentImage2Blob : any = null;
  comment :any = null;


  constructor(public navCtrl: NavController, public navParams: NavParams,public msgHelper : MessageHelper,
    public httpCall : HttpProvider,public codes : Codes,public dataValidation : DataValidation,
    public actionSheet : ActionSheetController,public alertController : AlertController,
    private camera : Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaveApplyPage');
    this.requestJson = this.navParams.get('RequestJson');
  }

  getImage1(){
    let actionSheet = this.actionSheet.create({
      title: 'Update your document',
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
             this.documentImage1 = 'data:image/jpeg;base64,' + imageData;
             this.documentImage1Blob=  this.convertBase64ToBlob(this.documentImage1);
            //  this.brandImage  = base64Image;
            //  this.brandImageBlob = this.convertBase64ToBlob(base64Image);

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
             this.documentImage1 = 'data:image/jpeg;base64,' + imageData;
             this.documentImage1Blob=  this.convertBase64ToBlob(this.documentImage1);
            //  this.brandImage  = base64Image;
            //  this.brandImageBlob = this.convertBase64ToBlob(base64Image);
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

  getImage2(){
    let actionSheet = this.actionSheet.create({
      title: 'Update your document',
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
             this.documentImage2 = 'data:image/jpeg;base64,' + imageData;

             this.documentImage2Blob = this.convertBase64ToBlob(this.documentImage2);
            //  this.brandImage  = base64Image;
            //  this.brandImageBlob = this.convertBase64ToBlob(base64Image);

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
             this.documentImage2 = 'data:image/jpeg;base64,' + imageData;
             this.documentImage2Blob = this.convertBase64ToBlob(this.documentImage2);
            //  this.brandImage  = base64Image;
            //  this.brandImageBlob = this.convertBase64ToBlob(base64Image);
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


  

  removeNull(string) {
    if(string == null || string == undefined)
      return "";
  }

  applyForLeave(){

    //Check if the images are present
    if(this.dataValidation.isEmptyJson(this.documentImage1) && this.dataValidation.isEmptyJson(this.documentImage2)){

    var requestAPI = "Leave/LeaveApply?"+
    "leavetypeyearlycountid=1"+
    "&leavetakencount="+this.requestJson['LeaveTakeCount']+
    "&leavefromdate="+this.requestJson['LeaveFromDate']+
    "&leavetodate="+this.requestJson['LeaveToDate']+
    "&leavecomments="+this.removeNull(this.comment)+
    "&AppType=W"+
    "&insertwithimagestatus=N";

    var formData : any= new FormData();
      var loading = this.msgHelper.showWorkingDialog('Applying for leave ...');
    this.httpCall.uploadFile(formData,requestAPI).then(responseJson => {
      //Dismiss the loader
      loading.dismiss();

      //Validate
      if(this.dataValidation.isEmptyJson(responseJson)){
        this.msgHelper.showErrorDialog('Error !!','Empty response received from server !!!');
        return;
      }

      // if(responseJson['status'] == 1){
       this.msgHelper.showToast('Leave Applied');
       this.navCtrl.pop();
      // }
   });



  }
  else {

    var requestAPI = "Leave/LeaveApply?"+
    "leavetypeyearlycountid=1"+
    "&leavetakencount="+this.requestJson['LeaveTakeCount']+
    "&leavefromdate="+this.requestJson['LeaveFromDate']+
    "&leavetodate="+this.requestJson['LeaveToDate']+
    "&leavecomments="+this.removeNull(this.comment)+
    "&AppType=W"+
    "&insertwithimagestatus=Y";

    //Convert the images to blob objects from base64 to upload them
    var loading = this.msgHelper.showWorkingDialog('Applying for leave ...');
    var formData : any= new FormData();
    formData.append("", this.documentImage1Blob);
    formData.append("", this.documentImage2Blob);

    this.httpCall.uploadFile(formData,requestAPI).then(responseJson => {
      //Dismiss the loader
      loading.dismiss();

      //Validate
      if(this.dataValidation.isEmptyJson(responseJson)){
        this.msgHelper.showErrorDialog('Error !!','Empty response received from server !!!');
        return;
      }

      // if(responseJson['status'] == 1){
       this.msgHelper.showToast('Leave Applied');
       this.navCtrl.pop();
      // }
   });
  }
}



  closeModal(){
    this.navCtrl.pop();
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


}
