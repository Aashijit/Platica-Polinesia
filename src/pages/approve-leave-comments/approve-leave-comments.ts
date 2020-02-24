import { DataValidation } from './../../Utils/DataValidation';
import { Codes } from './../../Utils/Codes';
import { MessageHelper } from './../../providers/message-helper';
import { HttpProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, Loading } from 'ionic-angular';
import { DatePipe } from '@angular/common';


@IonicPage()
@Component({
  selector: 'page-approve-leave-comments',
  templateUrl: 'approve-leave-comments.html',
})
export class ApproveLeaveCommentsPage {

  comment : any = null;
  approveTitle : any = null;
  leave : any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
    public http: HttpProvider, public msgHelper: MessageHelper, public codes: Codes, public dataValidation: DataValidation,
    public datePipe: DatePipe, public alert: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApproveLeaveCommentsPage');

    this.leave = this.navParams.get('Leave');

    if(this.leave['Status'] == 'R'){
      this.approveTitle="Reject ";
    }else
    {
      this.approveTitle="Approve ";
    }
  }


  approveOrReject(){
    var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));

    if (this.dataValidation.isEmptyJson(currentUserInfo)) {
      this.msgHelper.showToast('Could not fetch user id');
      return;
    }

    var requestJson = {
      "LeaveBalanceId": this.leave['LeaveBalanceId'],
      "LeaveStatus": this.leave['Status'],
      "ApprovedOrRejectedById": currentUserInfo[0]['UserId'],
      "ApprovedOrRejectedLeaveComments":this.comment,
      "AppType": "W"
    };

    console.error(requestJson);

    this.http.callApi(requestJson, this.codes.API_APPROVE_LEAVE).then(responseJson => {
      if (this.dataValidation.isEmptyJson(responseJson)) {
        this.msgHelper.showErrorDialog('Error !!!', 'Empty response received from Get Leave Type API');
        return;
      }
      if (responseJson['status'] == 1) {
        this.msgHelper.showToast('Leave have been approved !!!');
        this.navCtrl.pop();
        return;
      }
    });
  }

  goBack(){
    this.navCtrl.pop();
  }
}