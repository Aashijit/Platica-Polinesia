import { Codes } from './../../Utils/Codes';
import { HttpProvider } from './../../providers/data/data';
import { MessageHelper } from './../../providers/message-helper';
import { DataValidation } from './../../Utils/DataValidation';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {

  emailId : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public dataValidation : DataValidation, public msgHelper : MessageHelper,
    public httpCall : HttpProvider,public codes : Codes) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }

  getPassword(){
    
    if(!this.dataValidation.isValidEmailId(this.emailId)){
        this.msgHelper.showToast('Email id looks invalid !!!');
        return;
    }

    var loading = this.msgHelper.showWorkingDialog('Sending you a mail ...');

    var requestJson = {
      "Email": this.emailId,
      "Mobile": "",
      "AppType": "W"
    }
    
    this.httpCall.callApi(requestJson,this.codes.API_FORGOT_PASSWORD).then(responseJson => {
      loading.dismiss();

      if(this.dataValidation.isEmptyJson(responseJson)){
        this.msgHelper.showErrorDialog('Error','Did not receive any response !!!');
        return;
      }

      if(responseJson['status'] == 1){
        this.msgHelper.showToast('Check your registered mail');
        this.navCtrl.pop();
      }
    });
  }

  closeModal(){
    this.navCtrl.pop();
  }
}