import { DataValidation } from './../../Utils/DataValidation';
import { Codes } from './../../Utils/Codes';
import { MessageHelper } from './../../providers/message-helper';
import { HttpProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, Loading } from 'ionic-angular';
import { DatePipe } from '@angular/common';

@IonicPage()
@Component({
  selector: 'page-leave-approval',
  templateUrl: 'leave-approval.html',
})
export class LeaveApprovalPage {

  leaves: any = null;
  appleaves : any = null;
  rejleaves : any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
    public http: HttpProvider, public msgHelper: MessageHelper, public codes: Codes, public dataValidation: DataValidation,
    public datePipe: DatePipe, public alert: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaveApprovalPage');

    

    var requestJson = {
      "YearValue": String(new Date().getFullYear()),
      "LeaveStatus": "P",
      "AppType": "W"
    };

    this.http.callApi(requestJson, this.codes.API_GET_LEAVE_BALANCE_INFORMATION).then(responseJson => {

      if (this.dataValidation.isEmptyJson(responseJson)) {
        this.msgHelper.showErrorDialog('Error !!!', 'Empty response received from Get Leave Type API');
        return;
      }

      if (this.dataValidation.isEmptyJson(responseJson['resultData'])) {
        this.msgHelper.showErrorDialog('Error !!!', responseJson['resMessage']);
        return;
      }

      this.leaves = responseJson['resultData'];

      for (let i = 0; i < this.leaves.length; i++) {

        if (this.dataValidation.isEmptyJson(this.leaves[i]['UserId'])) {
          continue;
        }

        //Call the user information for each of the user ids
        var reqJsonUser = {
          "UserId": this.leaves[i]['UserId'],
          "AppType": "W"
        };

        this.http.callApi(reqJsonUser, this.codes.API_GET_PARTICULAR_USER_INFORMATION).then(resJson => {
          if (this.dataValidation.isEmptyJson(resJson)) {
            this.msgHelper.showErrorDialog('Error !!!', 'Empty response received from Get Particular User Information API');
            return;
          }

          if (this.dataValidation.isEmptyJson(resJson['resultData'])) {
            this.msgHelper.showErrorDialog('Error !!!', resJson['resMessage']);
            return;
          }

          console.error(resJson['resultData']);
          this.leaves[i]['UserName'] = resJson['resultData'][0]['FirstName'] + " " + resJson['resultData'][0]['LastName'];
          this.leaves[i]['UserImagePath'] = resJson['resultData'][0]['UserImagePath'];


        });
      }
    });


    var requestJson = {
      "YearValue": String(new Date().getFullYear()),
      "LeaveStatus": "A",
      "AppType": "W"
    };

    this.http.callApi(requestJson, this.codes.API_GET_LEAVE_BALANCE_INFORMATION).then(responseJson => {

      if (this.dataValidation.isEmptyJson(responseJson)) {
        this.msgHelper.showErrorDialog('Error !!!', 'Empty response received from Get Leave Type API');
        return;
      }

      if (this.dataValidation.isEmptyJson(responseJson['resultData'])) {
        this.msgHelper.showErrorDialog('Error !!!', responseJson['resMessage']);
        return;
      }

      this.appleaves = responseJson['resultData'];

      for (let i = 0; i < this.appleaves.length; i++) {

        if (this.dataValidation.isEmptyJson(this.appleaves[i]['UserId'])) {
          continue;
        }

        //Call the user information for each of the user ids
        var reqJsonUser = {
          "UserId": this.appleaves[i]['UserId'],
          "AppType": "W"
        };

        this.http.callApi(reqJsonUser, this.codes.API_GET_PARTICULAR_USER_INFORMATION).then(resJson => {
          if (this.dataValidation.isEmptyJson(resJson)) {
            this.msgHelper.showErrorDialog('Error !!!', 'Empty response received from Get Particular User Information API');
            return;
          }

          if (this.dataValidation.isEmptyJson(resJson['resultData'])) {
            this.msgHelper.showErrorDialog('Error !!!', resJson['resMessage']);
            return;
          }

          console.error(resJson['resultData']);
          this.appleaves[i]['UserName'] = resJson['resultData'][0]['FirstName'] + " " + resJson['resultData'][0]['LastName'];
          this.appleaves[i]['UserImagePath'] = resJson['resultData'][0]['UserImagePath'];


        });
      }
    });




    var requestJson = {
      "YearValue": String(new Date().getFullYear()),
      "LeaveStatus": "A",
      "AppType": "W"
    };

    this.http.callApi(requestJson, this.codes.API_GET_LEAVE_BALANCE_INFORMATION).then(responseJson => {

      if (this.dataValidation.isEmptyJson(responseJson)) {
        this.msgHelper.showErrorDialog('Error !!!', 'Empty response received from Get Leave Type API');
        return;
      }

      if (this.dataValidation.isEmptyJson(responseJson['resultData'])) {
        this.msgHelper.showErrorDialog('Error !!!', responseJson['resMessage']);
        return;
      }

      this.rejleaves = responseJson['resultData'];

      for (let i = 0; i < this.rejleaves.length; i++) {

        if (this.dataValidation.isEmptyJson(this.rejleaves[i]['UserId'])) {
          continue;
        }

        //Call the user information for each of the user ids
        var reqJsonUser = {
          "UserId": this.rejleaves[i]['UserId'],
          "AppType": "W"
        };

        this.http.callApi(reqJsonUser, this.codes.API_GET_PARTICULAR_USER_INFORMATION).then(resJson => {
          if (this.dataValidation.isEmptyJson(resJson)) {
            this.msgHelper.showErrorDialog('Error !!!', 'Empty response received from Get Particular User Information API');
            return;
          }

          if (this.dataValidation.isEmptyJson(resJson['resultData'])) {
            this.msgHelper.showErrorDialog('Error !!!', resJson['resMessage']);
            return;
          }

          console.error(resJson['resultData']);
          this.rejleaves[i]['UserName'] = resJson['resultData'][0]['FirstName'] + " " + resJson['resultData'][0]['LastName'];
          this.rejleaves[i]['UserImagePath'] = resJson['resultData'][0]['UserImagePath'];


        });
      }
    });
  }

  approve(leave) {
    leave['Status']="A";
    let approveModal = this.modalCtrl.create('ApproveLeaveCommentsPage',{"Leave":leave});
    approveModal.present();
  }

  reject(leave) {
    leave['Status']="R";
    let approveModal = this.modalCtrl.create('ApproveLeaveCommentsPage',{"Leave":leave});
    approveModal.present();
  }
}