import { AlertController } from 'ionic-angular';
import { DataValidation } from './../../Utils/DataValidation';
import { Codes } from './../../Utils/Codes';
import { HttpProvider } from './../../providers/data/data';
import { MessageHelper } from './../../providers/message-helper';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-add-business-unit',
  templateUrl: 'add-business-unit.html',
})
export class AddBusinessUnitPage {

  businessUnitName: any = null;
  businessUnitAlias: any = null;
  Phone: any = null;
  Address1: any = null;
  Adderss2: any = null;
  City: any = null;
  State: any = null;
  Zip: any = null;
  BusinessUnitOwnerId: any = null;
  UserList: any = null;


  constructor(public navCtrl: NavController, public navParams: NavParams,public msgHelper : MessageHelper,
    public httpCall : HttpProvider,public codes : Codes,public dataValidation : DataValidation,
    public actionSheet : ActionSheetController,public alertController : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddBusinessUnitPage');
    this.UserList = this.navParams.get('userList');
  }

  addBusinessUnit(){

    //TODO: Validations to be done 


    var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));


    if(this.dataValidation.isEmptyJson(currentUserInfo)){
      this.msgHelper.showToast('Could not fetch user id');
      return;
    }

    var requestJson = {
      "BusinessUnitName":this.businessUnitName,
      "BusinessUnitAlias" : this.businessUnitAlias,
      "Phone" : this.Phone,
      "Address1" : this.Address1,
      "Address2" : this.Adderss2,
      "City" : this.City,
      "State" : this.State,
      "Zip" : this.Zip,
      "BusinessUnitOwnerID" : this.BusinessUnitOwnerId,
      "CreatedByID" : currentUserInfo['UserId'],
      "AppType" : "W"

    };
    var loading = this.msgHelper.showWorkingDialog('Inserting Business Unit ...');
    this.httpCall.callApi(requestJson,this.codes.API_INSERT_BUSINESS_UNIT).then(responseJson => {
      loading.dismiss();

    if(this.dataValidation.isEmptyJson(responseJson)){
      this.msgHelper.showAlert('Error !!','Empty response received');
      return;
    }

    if(responseJson['status'] == '1'){
      this.msgHelper.showToast('Business Unit Inserted !!!');
      this.navCtrl.pop();
      return;
    }

    });
  }

  closeModal(){
    this.navCtrl.pop();
  }

}
