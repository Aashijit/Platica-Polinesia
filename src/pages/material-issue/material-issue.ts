import { AlertController } from 'ionic-angular';
import { DataValidation } from './../../Utils/DataValidation';
import { Codes } from './../../Utils/Codes';
import { HttpProvider } from './../../providers/data/data';
import { MessageHelper } from './../../providers/message-helper';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-material-issue',
  templateUrl: 'material-issue.html',
})
export class MaterialIssuePage {
  quantity: any = null;
  issueDate : any = null;
  refundDate : any = null;
  material : any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,public msgHelper : MessageHelper,
    public httpCall : HttpProvider,public codes : Codes,public dataValidation : DataValidation,
    public actionSheet : ActionSheetController,public alertController : AlertController) {

    this.material = this.navParams.get('material');   

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaterialIssuePage');
  }


  issue(){

    var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));


    if(this.dataValidation.isEmptyJson(currentUserInfo)){
      this.msgHelper.showToast('Could not fetch user id');
      return;
    }

    var loading = this.msgHelper.showWorkingDialog('Issue in progress ...');

    var requestData = {
      "MaterialRequisitionId": this.material['MaterialRequisitionId'],
      "IssueDate": this.issueDate,
      "IssueQuantity":this.quantity,
      "RefundDate": this.refundDate,
      "CreatedByID": currentUserInfo[0]['UserId'],
      "AppType": "W"
    };


    this.httpCall.callApi(requestData,this.codes.API_ISSUE_MATERIAL).then(responseJson => {
        loading.dismiss();

        if(this.dataValidation.isEmptyJson(responseJson)){
          this.msgHelper.showErrorDialog('Error !!!','Empty response received from the Server Issue Material API');
          return;
        } 

        console.error(JSON.stringify(responseJson));

        if(responseJson['resMessage'] == 'Successfully Inserted'){
          this.msgHelper.showToast('Issued !!!');
          this.navCtrl.pop();
        }

    });

  }



  closeModal(){
    this.navCtrl.pop();
  }

}
