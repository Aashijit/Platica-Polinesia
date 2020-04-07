import { AlertController } from 'ionic-angular';
import { DataValidation } from './../../Utils/DataValidation';
import { Codes } from './../../Utils/Codes';
import { HttpProvider } from './../../providers/data/data';
import { MessageHelper } from './../../providers/message-helper';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-material-refund',
  templateUrl: 'material-refund.html',
})
export class MaterialRefundPage {

  remarks : any = null;
  refundDate : any = null;
  quantity : any = null;
  material : any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,public msgHelper : MessageHelper,
    public httpCall : HttpProvider,public codes : Codes,public dataValidation : DataValidation,
    public actionSheet : ActionSheetController,public alertController : AlertController) {
    this.material = this.navParams.get('material');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaterialRefundPage');
  }


  refund(){
    var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));


    if(this.dataValidation.isEmptyJson(currentUserInfo)){
      this.msgHelper.showToast('Could not fetch user id');
      return;
    }

    var loading = this.msgHelper.showWorkingDialog('Issue refund in progress ...');

    var requestData = {
      "MaterialIssueRefundId": this.material['MaterialIssueRefundId'],
      "RefundQuantity":this.quantity,
      "RefundDate": this.refundDate,
      "CreatedByID": currentUserInfo[0]['UserId'],
      "Remarks":this.remarks,
      "AppType": "W"
    };


    this.httpCall.callApi(requestData,this.codes.API_REFUND_MATERIAL).then(responseJson => {
        loading.dismiss();

        if(this.dataValidation.isEmptyJson(responseJson)){
          this.msgHelper.showErrorDialog('Error !!!','Empty response received from the Server Refund Material API');
          return;
        } 

        console.error(JSON.stringify(responseJson));

        if(responseJson['resMessage'] == 'Successfully Inserted'){
          this.msgHelper.showToast('Refund !!!');
          this.navCtrl.pop();
        }

    });


  }


  closeModal(){
    this.navCtrl.pop();
  }
}
