import { AlertController } from 'ionic-angular';
import { DataValidation } from './../../Utils/DataValidation';
import { Codes } from './../../Utils/Codes';
import { HttpProvider } from './../../providers/data/data';
import { MessageHelper } from './../../providers/message-helper';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-update-business-unit',
  templateUrl: 'update-business-unit.html',
})
export class UpdateBusinessUnitPage {


  businessUnit : any = null;
  userList : any =  null;

  constructor(public navCtrl: NavController, public navParams: NavParams,public msgHelper : MessageHelper,
    public httpCall : HttpProvider,public codes : Codes,public dataValidation : DataValidation,
    public actionSheet : ActionSheetController,public alertController : AlertController) {

    this.businessUnit = this.navParams.get('businessUnit');
    this.userList = this.navParams.get('userList');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateBusinessUnitPage');
  }

  check(id){
    
  }
  updateBusinessUnit(){

    var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));


    if(this.dataValidation.isEmptyJson(currentUserInfo)){
      this.msgHelper.showToast('Could not fetch user id');
      return;
    }

    this.businessUnit['ModifiedByID'] = currentUserInfo['UserId'];
    this.businessUnit['AppType'] = 'W';

    console.error(JSON.stringify(this.businessUnit));

    var loading = this.msgHelper.showWorkingDialog('Updating Business Unit ...');
    this.httpCall.callApi(this.businessUnit,this.codes.API_UPDATE_BUSINESS_UNIT).then(responseJson => {

      loading.dismiss();

      if(this.dataValidation.isEmptyJson(responseJson)){
        this.msgHelper.showAlert('Error !!','Empty response received');
        return;
      }
  
      if(responseJson['status'] == '1'){
        this.msgHelper.showToast('Business Unit Updated !!!');
        this.navCtrl.pop();
        return;
      }
    });
  }

  closeModal(){
    this.navCtrl.pop();
  }
}