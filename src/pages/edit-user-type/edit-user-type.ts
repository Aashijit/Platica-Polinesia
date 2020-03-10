import { DataValidation } from './../../Utils/DataValidation';
import { MessageHelper } from './../../providers/message-helper';
import { HttpProvider } from './../../providers/data/data';
import { Codes } from './../../Utils/Codes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Loading } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-edit-user-type',
  templateUrl: 'edit-user-type.html',
})
export class EditUserTypePage {

  userTypeName: any = null;
  userTypeAlias : any = null;
  userTypeId : any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public httpCall : HttpProvider,public codes : Codes,public dataValidation : DataValidation,
    public msgHelper : MessageHelper,public alertController : AlertController) {

    this.userTypeName = this.navParams.get('UserTypeName');
    this.userTypeAlias = this.navParams.get('UserTypeAlias');
    this.userTypeId = this.navParams.get('UserTypeId');

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EditUserTypePage');
  }

  editUserType(){

    var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));


    if(this.dataValidation.isEmptyJson(currentUserInfo)){
      this.msgHelper.showToast('Could not fetch user id');
      return;
    }

    //TODO: Generate the User type alias
    var requestJson = {
      "UserTypeId": this.userTypeId,
      "UserTypeName": this.userTypeName,
      "UserTypeAlias": this.userTypeAlias,
      "ModifiedByName": currentUserInfo[0]['UserId'],
      "AppType": "W"
    };
    var loading = this.msgHelper.showWorkingDialog('Updating user type ... ');
    loading.present();

    this.httpCall.callApi(requestJson,this.codes.API_UPDATE_USER_TYPE).then(responseJson => {

      if(this.dataValidation.isEmptyJson(responseJson)){
        this.msgHelper.showErrorDialog('Error !!!'," Empty response received from update user type API");
        return;
      } 

      if(responseJson['status'] != 1){
        this.msgHelper.showErrorDialog('Error !!!',responseJson['resMessage']);
        return;
      }

      loading.dismiss();
      this.msgHelper.showToast('User Type Updated !!!');
      this.navCtrl.pop();
    });
  }
  closeModal(){
    this.navCtrl.pop();
  }
}