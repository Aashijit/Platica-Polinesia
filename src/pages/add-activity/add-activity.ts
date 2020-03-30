import { AlertController } from 'ionic-angular';
import { DataValidation } from './../../Utils/DataValidation';
import { Codes } from './../../Utils/Codes';
import { HttpProvider } from './../../providers/data/data';
import { MessageHelper } from './../../providers/message-helper';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-activity',
  templateUrl: 'add-activity.html',
})
export class AddActivityPage {

  activityName : any = null;
  activityDescription : any = null;
  coinRewardQuantity : any = null;
  diamondRewardQuantity : any = null;
  couponRewardQuantity : any = null;
  trophyRewardQuantity : any = null;
  projectTypeId : any = null;
  phaseId : any = null;
  projectTypes : any = null;
  phases : any = null;
  achieveDay1: any = null;
  achieveDay2: any = null;
  achieveDay3: any = null;
  achieveDay4: any = null;

  achievePercentage1: any = null;
  achievePercentage2: any = null;
  achievePercentage3: any = null;
  achievePercentage4: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,public msgHelper : MessageHelper,
    public httpCall : HttpProvider,public codes : Codes,public dataValidation : DataValidation,
    public actionSheet : ActionSheetController,public alertController : AlertController) {

      this.projectTypes = JSON.parse(localStorage.getItem(this.codes.LSK_PROJECT_TYPE));
      this.phases = JSON.parse(localStorage.getItem(this.codes.LSK_PHASES));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddActivityPage');
  }


  addActivity(){

    var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));


    if(this.dataValidation.isEmptyJson(currentUserInfo)){
      this.msgHelper.showToast('Could not fetch user id');
      return;
    }


    var requestJson = {
      "ActivityName": this.activityName,
      "ActivityDescription": this.activityDescription,
      "PhaseId": this.phaseId,
      "CoinRewardQuantity": this.coinRewardQuantity,
      "DiamondRewardQuantity": this.diamondRewardQuantity,
      "CouponRewardQuantity": this.couponRewardQuantity,
      "TrophyRewardQuantity": this.trophyRewardQuantity,
      "CreatedByID": currentUserInfo[0]['UserId'],
      "AchieveDay1": this.achieveDay1,
      "AchieveDay2": this.achieveDay2,
      "AchieveDay3": this.achieveDay3,
      "AchieveDay4": this.achieveDay4,
      "AchievePercentage1" : this.achievePercentage1,
      "AchievePercentage2" : this.achievePercentage2,
      "AchievePercentage3" :this.achievePercentage3, 
      "AchievePercentage4" :this.achievePercentage4, 
      "AppType": "W",
      "ProjectTypeId": this.projectTypeId
    };
    var loading = this.msgHelper.showWorkingDialog('Inserting Activity ...');
    this.httpCall.callApi(requestJson,this.codes.API_INSERT_ACTIVITY).then(responseJson => {
      loading.dismiss();

      if(this.dataValidation.isEmptyJson(responseJson)){
        this.msgHelper.showAlert('Error !!','Empty response received');
        return;
      }

      if(responseJson['status'] != 1){
        this.msgHelper.showErrorDialog('Error !!!',responseJson['resMessage']);
        return;
      }

      this.msgHelper.showToast('Inserted activity !!!');
      this.navCtrl.pop();
    });
  }
  closeModal(){
    this.navCtrl.pop();
  }

}
