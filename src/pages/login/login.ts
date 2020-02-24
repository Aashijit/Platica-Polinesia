import { HttpProvider } from './../../providers/data/data';
import { Codes } from './../../Utils/Codes';
import { MessageHelper } from './../../providers/message-helper';
import { DataValidation } from './../../Utils/DataValidation';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  authenticationSent: any = false;
  emailId: any = "";
  mobileNumber: any = "";
  password: any = "";
  verificationCode: any = "";

  userInformation : any;



  constructor(public navCtrl: NavController, public navParams: NavParams,
    public dataValidation: DataValidation, public msgHelper: MessageHelper, public codes: Codes,
    public httpCall : HttpProvider,public modalCtrl : ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  verify() {

    if(!this.dataValidation.isEmptyJson(this.userInformation)){
      this.navCtrl.push('HomePage',this.userInformation);
    }else{
      this.msgHelper.showToast('User information could not be fetched',false);
      return;
    }
  }

  login() {

    // if(this.emailId == 'aashijitM@gmail.com'){
    //   var permissions = [
    //     {
    //       "_MenuId":"1",
    //       "_CanView":"1",
    //     },
    //     {
    //       "_MenuId":"2",
    //       "_CanView":"1",
    //     },
    //     {
    //       "_MenuId":"3",
    //       "_CanView":"1",
    //     },
    //     {
    //       "_MenuId":"4",
    //       "_CanView":"1",
    //     },
    //     {
    //       "_MenuId":"5",
    //       "_CanView":"1",
    //     },
    //     {
    //       "_MenuId":"6",
    //       "_CanView":"1",
    //     },
    //     {
    //       "_MenuId":"7",
    //       "_CanView":"1",
    //     },
    //     {
    //       "_MenuId":"8",
    //       "_CanView":"1",
    //     },
    //     {
    //       "_MenuId":"9",
    //       "_CanView":"1",
    //     }
    //   ];
    //   this.navCtrl.setRoot('PermissionsHomeTempPage',{"Permissions":permissions});
    //   return;
    // }

    // if(this.emailId == 'bidyutr@gmail.com'){

    //   var permissionList = JSON.parse(localStorage.getItem('Permission'));

    //   permissions = [];
    //   for(let i=0;i<permissionList.length;i++){
    //     var permission = {
    //       "_MenuId":String(i+1),
    //       "_CanView":permissionList[i]['_CanView']
    //     };
    //     permissions[i] = permission;
    //   }
      
    // // var permissions = [
    //   //   {
    //   //     "_MenuId":"1",
    //   //     "_CanView":"0",
    //   //   },
    //   //   {
    //   //     "_MenuId":"2",
    //   //     "_CanView":"1",
    //   //   },
    //   //   {
    //   //     "_MenuId":"3",
    //   //     "_CanView":"1",
    //   //   },
    //   //   {
    //   //     "_MenuId":"4",
    //   //     "_CanView":"1",
    //   //   },
    //   //   {
    //   //     "_MenuId":"5",
    //   //     "_CanView":"0",
    //   //   },
    //   //   {
    //   //     "_MenuId":"6",
    //   //     "_CanView":"1",
    //   //   },
    //   //   {
    //   //     "_MenuId":"7",
    //   //     "_CanView":"1",
    //   //   },
    //   //   {
    //   //     "_MenuId":"8",
    //   //     "_CanView":"0",
    //   //   },
    //   //   {
    //   //     "_MenuId":"9",
    //   //     "_CanView":"1",
    //   //   }
    //   // ];
    //   this.navCtrl.setRoot('PermissionsHomeTempPage',{"Permissions":permissions});
    //   return;
    // }


    //Step 1 : Validate the mobile number TODO:
    // if (!this.dataValidation.isValidMobileNumber(this.mobileNumber)) {
    //   this.msgHelper.showToast(this.codes.EM_INVALID_MOBILE_NUMBER);
    //   return;
    // }
    //Step 2 : Validate the email id
    if (!this.dataValidation.isValidEmailId(this.emailId)) {
      this.msgHelper.showToast(this.codes.EM_INVALID_EMAILID);
      return;
    }

    //Step 3 : Validate the password
    if(this.dataValidation.isEmptyJson(this.password)){
      this.msgHelper.showToast(this.codes.EM_INVALID_PASSWORD);
      return;
    }

    //Step 4 : Make the API call for logging in
    //Create the json
    var getLoginDetailsApiRequestJson = {
      "email" :this.emailId,
      "password" : this.password,
      "apptype" : "W"
    };

    //start the loading controller
    var loading = this.msgHelper.showWorkingDialog("Sending verification message");

    //Call the API

    this.httpCall.callApi(getLoginDetailsApiRequestJson,this.codes.API_GET_LOGIN_DETAILS).then(getLoginDetailsApiResponseJson => {
      //Dismiss the loader
      loading.dismiss();

      //Validate
      if(this.dataValidation.isEmptyJson(getLoginDetailsApiResponseJson)){
        this.msgHelper.showErrorDialog('Error !!','Empty response received from server !!!');
        return;
      }

      //Check for response
      if(getLoginDetailsApiResponseJson['status'] == 1){
        this.authenticationSent = true;

        if(this.dataValidation.isEmptyJson(getLoginDetailsApiResponseJson['resultData']))
        {
          this.msgHelper.showErrorDialog('Alert','No user information fetched !!!');
          return;
        }

        this.userInformation = getLoginDetailsApiResponseJson['resultData'];
        //Keep the user password 
        localStorage.setItem(this.codes.LSK_USER_PASSWORD,this.password);
        //Keep the user info in the user info key
        localStorage.setItem(this.codes.LSK_USER_INFORMATION_JSON,JSON.stringify(this.userInformation));
      }
      else{
        this.msgHelper.showErrorDialog('Error !!!',getLoginDetailsApiResponseJson['resMessage']);
          return;
      }
    });

  }


  forgotPassword(){
    let userModal = this.modalCtrl.create('ForgotPasswordPage');
    userModal.present();
  }
}
