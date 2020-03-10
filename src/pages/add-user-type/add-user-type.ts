import { DataValidation } from './../../Utils/DataValidation';
import { MessageHelper } from './../../providers/message-helper';
import { HttpProvider } from './../../providers/data/data';
import { Codes } from './../../Utils/Codes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Loading } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-add-user-type',
  templateUrl: 'add-user-type.html',
})
export class AddUserTypePage {

  userTypeName : any = null;
  userTypeAlias : any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public httpCall : HttpProvider,public codes : Codes,public dataValidation : DataValidation,
    public msgHelper : MessageHelper,public alertController : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddUserTypePage');
  }


  addUserType(){

    var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));


    if(this.dataValidation.isEmptyJson(currentUserInfo)){
      this.msgHelper.showToast('Could not fetch user id');
      return;
    }

    //TODO: Generate the User type alias
    var requestJson = {
      "UserTypeName": this.userTypeName,
      "UserTypeAlias": this.userTypeAlias,
      "CreatedByID": currentUserInfo[0]['UserId'],
      "AppType": "W"
    };
    var loading = this.msgHelper.showWorkingDialog('Inserting user type ... ');
    loading.present();

    this.httpCall.callApi(requestJson,this.codes.API_INSERT_USER_TYPE).then(responseJson => {

      if(this.dataValidation.isEmptyJson(responseJson)){
        this.msgHelper.showErrorDialog('Error !!!'," Empty response received from insert user type API");
        return;
      } 

      if(responseJson['status'] != 1){
        this.msgHelper.showErrorDialog('Error !!!',responseJson['resMessage']);
        return;
      }

      loading.dismiss();
      this.msgHelper.showToast('User Type Inserted !!!');
      this.navCtrl.pop();
    });
  }
  closeModal(){
    this.navCtrl.pop();
  }
}