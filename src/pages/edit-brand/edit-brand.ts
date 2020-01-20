import { Loading } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DataValidation } from './../../Utils/DataValidation';
import { Codes } from './../../Utils/Codes';
import { HttpProvider } from './../../providers/data/data';
import { MessageHelper } from './../../providers/message-helper';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edit-brand',
  templateUrl: 'edit-brand.html',
})
export class EditBrandPage {

  brand : any = null;
  userList : any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,public msgHelper : MessageHelper,
    public httpCall : HttpProvider,public codes : Codes,public dataValidation : DataValidation,
    public actionSheet : ActionSheetController,public alertController : AlertController) {

    this.brand = this.navParams.get('brand');
    this.userList = this.navParams.get('userList');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditBrandPage');
  }

  updateBrand(){

    var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));


    if(this.dataValidation.isEmptyJson(currentUserInfo)){
      this.msgHelper.showToast('Could not fetch user id');
      return;
    }


    var reqestApiString = "?brid="+this.brand['BrandId']+
    "&brdesc="+this.brand['BrandDescription']+
    "&brownerid="+this.brand['BrandOwnerID']+
    "&brmodifybyid="+currentUserInfo[0]['UserId']+
    "&AppType=W&updateWithImageStatus=N";

    var loading = this.msgHelper.showWorkingDialog('Updating Brand ...');

    

    this.httpCall.callApi('',this.codes.API_UPDATE_BRAND+reqestApiString).then(responseJson => {

      loading.dismiss();

      if(this.dataValidation.isEmptyJson(responseJson)){
        this.msgHelper.showAlert('Error !!','Empty response received');
        return;
      }
  
      if(responseJson['status'] == '1'){
        this.msgHelper.showToast('Brand Updated !!!');
        this.navCtrl.pop();
        return;
      }
    });
  }

  closeModal(){
    this.navCtrl.pop();
  }
}