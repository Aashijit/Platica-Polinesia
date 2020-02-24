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

    var requestAPI = "Leave/LeaveApply?"+
    "leavetypeyearlycountid=1"+
    "&leavetakencount="+this.requestJson['LeaveTakeCount']+
    "&leavefromdate="+this.requestJson['LeaveFromDate']+
    "&leavetodate="+this.requestJson['LeaveToDate']+
    "&leavecomments="+this.removeNull(this.comment)+
    "&AppType=W"+
    "&insertwithimagestatus=N";

    this.httpCall.callApi("",requestAPI).then(responseJson => {
      console.error(responseJson);
    },error=>{
      console.error(error);
    });
  }



  closeModal(){
    this.navCtrl.pop();
  }

}
