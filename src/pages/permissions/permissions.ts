import { AlertController, Loading } from 'ionic-angular';
import { MessageHelper } from './../../providers/message-helper';
import { DataValidation } from './../../Utils/DataValidation';
import { Codes } from './../../Utils/Codes';
import { HttpProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Grid } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-permissions',
  templateUrl: 'permissions.html',
})
export class PermissionsPage {

  permissionList : any = null;
  userTypes : any = null;
  selectedUserTypeId : any = 1; //Default

  

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
    public httpCall: HttpProvider, public codes: Codes, public dataValidation: DataValidation,
    public msgHelper: MessageHelper, public alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PermissionsPage');


    //Get the User Types
    var requestJson = {
      "AppType": "W"
    };


    this.httpCall.callApi(requestJson, this.codes.API_GET_USER_TYPE_LIST).then(responseJson => {

      if (this.dataValidation.isEmptyJson(responseJson)) {
        this.msgHelper.showErrorDialog("Error !!!", "Empty response reeceived from Get user type list");
        return;
      }

      if (responseJson['status'] != 1) {
        this.msgHelper.showErrorDialog('Error !!!', responseJson['resMessage']);
        return;
      }

      this.userTypes = responseJson['resultData'];

    });

    var permissionRequestJson = {
      "UserTypeId":this.selectedUserTypeId,
      "AppType": "W"
    };

    this.httpCall.callApi(permissionRequestJson,this.codes.API_GET_PERMISSION_INFORMATION).then(responseJson => {

      if(this.dataValidation.isEmptyJson(responseJson)){
        this.msgHelper.showErrorDialog("Error !!!", "Empty response reeceived from Get Permission Information");
        return;
      }

      this.permissionList = responseJson['resultData'];

      console.warn("Permission List : "+JSON.stringify(this.permissionList));

    });

  }

  

  change(k,string){
    if(this.permissionList[k][string] == false)
    this.permissionList[k][string] = true;
    else
    this.permissionList[k][string] = false;
  }

  recallPermission(){
    var permissionRequestJson = {
      "UserTypeId":this.selectedUserTypeId,
      "AppType": "W"
    };

    this.httpCall.callApi(permissionRequestJson,this.codes.API_GET_PERMISSION_INFORMATION).then(responseJson => {

      if(this.dataValidation.isEmptyJson(responseJson)){
        this.msgHelper.showErrorDialog("Error !!!", "Empty response reeceived from Get Permission Information");
        return;
      }

      this.permissionList = responseJson['resultData'];

      // console.warn("Permission List : "+JSON.stringify(this.permissionList));

    });
  }

  updatePermission(){
    var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));


    if(this.dataValidation.isEmptyJson(currentUserInfo)){
      this.msgHelper.showToast('Could not fetch user id');
      return;
    }
    //Udpate all the persmissions one by one
    var loading = this.msgHelper.showWorkingDialog('Started Updating Permission ...');
   for(let i=0;i<this.permissionList.length;i++){
     
      var requestJson={
        "MenuId":this.permissionList[i]['MenuId'],
        "MenuPermissionId":this.permissionList[i]['MenuPermissionId'],
        "UserTypeId":this.selectedUserTypeId,
        "CanAdd":this.permissionList[i]['CanAdd'],
        "CanModify":this.permissionList[i]['CanModify'],
        "CanDelete":this.permissionList[i]['CanDelete'],
        "CanView":this.permissionList[i]['CanView'],
        "CanOnlyHisUser":this.permissionList[i]['CanOnlyHisUser'],
        "ModifiedByID": currentUserInfo[0]['UserId'],
        "AppType": "W"
      }
      
      

      this.httpCall.callApi(requestJson,this.codes.API_UPDATE_PERMISSION).then(responseJson => {
        if(this.dataValidation.isEmptyJson(responseJson)){
          this.msgHelper.showErrorDialog("Error !!!", "Empty response reeceived from Get Permission Information");
          return;
        }

      });

   }
   loading.dismiss();
  }
}