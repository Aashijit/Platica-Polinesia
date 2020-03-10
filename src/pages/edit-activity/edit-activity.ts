import { AlertController } from 'ionic-angular';
import { DataValidation } from './../../Utils/DataValidation';
import { Codes } from './../../Utils/Codes';
import { HttpProvider } from './../../providers/data/data';
import { MessageHelper } from './../../providers/message-helper';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-edit-activity',
  templateUrl: 'edit-activity.html',
})
export class EditActivityPage {

  activityId : any = null;
  activityName : any = null;
  activityDescription : any = null;
  coinRewardQuantity : any = null;
  diamondRewardQuantity : any = null;
  couponRewardQuantity : any = null;
  trophyRewardQuantity : any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,public msgHelper : MessageHelper,
    public httpCall : HttpProvider,public codes : Codes,public dataValidation : DataValidation,
    public actionSheet : ActionSheetController,public alertController : AlertController) {

      this.activityId = this.navParams.get('activity')['ActivityId'];
      this.activityName = this.navParams.get('activity')['ActivityName'];
      this.activityDescription = this.navParams.get('activity')['ActivityDescription'];
      this.coinRewardQuantity = this.navParams.get('activity')['CoinRewardQuantity'];
      this.diamondRewardQuantity = this.navParams.get('activity')['DiamondRewardQuantity'];
      this.couponRewardQuantity = this.navParams.get('activity')['CouponRewardQuantity'];
      this.trophyRewardQuantity = this.navParams.get('activity')['TrophyRewardQuantity'];
      



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditActivityPage');
  }


  editActivity(){

    var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));


    if(this.dataValidation.isEmptyJson(currentUserInfo)){
      this.msgHelper.showToast('Could not fetch user id');
      return;
    }


    var requestJson = {
      "ActivityId": this.activityId,
      "ActivityName": this.activityName,
      "ActivityDescription": this.activityDescription,
      "PhaseId": 1,
      "CoinRewardQuantity": Number(this.coinRewardQuantity),
      "DiamondRewardQuantity": Number(this.diamondRewardQuantity),
      "CouponRewardQuantity": Number(this.couponRewardQuantity),
      "TrophyRewardQuantity": Number(this.trophyRewardQuantity),
      "ModifiedByID": currentUserInfo[0]['UserId'],
      "AppType": "W",
      "ProjectTypeId": 1
    };
    var loading = this.msgHelper.showWorkingDialog('Updating Activity ...');
    this.httpCall.callApi(requestJson,this.codes.API_UPDATE_ACTIVITY).then(responseJson => {
      loading.dismiss();

      if(this.dataValidation.isEmptyJson(responseJson)){
        this.msgHelper.showAlert('Error !!','Empty response received');
        return;
      }

      if(responseJson['status'] != 1){
        this.msgHelper.showErrorDialog('Error !!!',responseJson['resMessage']);
        return;
      }

      this.msgHelper.showToast('Updated activity !!!');
      this.navCtrl.pop();
    });
  }
  closeModal(){
    this.navCtrl.pop();
  }
}