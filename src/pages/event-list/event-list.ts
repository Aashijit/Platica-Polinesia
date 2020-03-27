import { AlertController } from 'ionic-angular';
import { MessageHelper } from './../../providers/message-helper';
import { DataValidation } from './../../Utils/DataValidation';
import { Codes } from './../../Utils/Codes';
import { HttpProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Grid } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { TitleCasePipe, DatePipe } from '@angular/common';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';
import {
  CalendarModal,
  CalendarModalOptions,
  DayConfig,
  CalendarResult
} from 'ion2-calendar';


@IonicPage()
@Component({
  selector: 'page-event-list',
  templateUrl: 'event-list.html',
})
export class EventListPage {

  events : any = null;
  segment : any = 'events';
  leaves : any = null;
  appliedLeaves : any = null;
  rejectedLeaves : any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
    public httpCall: HttpProvider, public codes: Codes, public dataValidation: DataValidation,
    public msgHelper: MessageHelper, public alertController: AlertController, public datePipe : DatePipe) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventListPage');

    var requestJson = {
      "AppType": "W"
    };
    

    //Fetch the events
    this.httpCall.callApi(requestJson,this.codes.API_GET_EVENTS_LIST).then(responseJson => {

      if(this.dataValidation.isEmptyJson(requestJson)){
        this.msgHelper.showErrorDialog("Error !!!",'Empty response received from Get Event list API');
        return;
      }

      this.events = responseJson['resultData'];

      this.httpCall.callApi(requestJson, this.codes.API_GET_COLOUR_LIST).then(coloursResponseJson => {

        if(this.dataValidation.isEmptyJson(coloursResponseJson)){
          this.msgHelper.showErrorDialog("Error !!!",'Empty response received from Get Colours List API');
          return;
        }

        //Set the colours
        for(let i=0;i<this.events.length;i++){
          this.events[i]['ColourName'] = this.getColourByColourId(this.events[i]['ColourId'],coloursResponseJson['resultData']);
        }

        //Fetch the User Informations

        this.httpCall.callApi(requestJson,this.codes.API_GET_USER_DETAILS).then(responseJsonUserDetails => {

          if(this.dataValidation.isEmptyJson(responseJsonUserDetails)){
            this.msgHelper.showErrorDialog("Error !!!",'Empty response received from Get User Details List API');
            return;
          }

          //Set the user images
          for(let i=0;i<this.events.length;i++){
            //Split the user ids
            var splittedUserIds = this.events[i]['UserIds'].split(",");
            var userImages = [];
            for(let j=0;j<splittedUserIds.length;j++){
                userImages[j] = this.getImageByUserId(splittedUserIds[j],responseJsonUserDetails['resultData']);
            }

            this.events[i]['UserImages'] = userImages;
          }

          console.warn(JSON.stringify(this.events));
        })
      });
    });





    var requestJson ={
      "AppType": "W"
    };
    
    this.httpCall.callApi(requestJson,this.codes.API_GET_LEAVE_TYPE).then(responseJson => {

      if(this.dataValidation.isEmptyJson(responseJson)){
        this.msgHelper.showErrorDialog('Error !!!','Empty response received from Get Leave Type API');
        return;
      }

      if(this.dataValidation.isEmptyJson(responseJson['resultData'])){
        this.msgHelper.showErrorDialog('Error !!!',responseJson['resMessage']);
        return;
      }
      
      this.leaves = responseJson['resultData'];
    });

    var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));


    if(this.dataValidation.isEmptyJson(currentUserInfo)){
      this.msgHelper.showToast('Could not fetch user id');
      return;
    }

    //Call the get leave information

    //Get the current year


    var reqJson = {
      "UserId":currentUserInfo[0]['UserId'],
      "YearValue": String(new Date().getFullYear()), 
      "LeaveStatus": "A",
      "AppType": "W"
    };

    this.httpCall.callApi(reqJson,this.codes.API_GET_USER_LEAVE_BALANCE_INFORMATION).then(responseJson => {
      
      if(this.dataValidation.isEmptyJson(responseJson)){
        this.msgHelper.showErrorDialog('Error !!!','Empty response received from Get Leave Type API');
        return;
      }

      if(this.dataValidation.isEmptyJson(responseJson['resultData'])){
        this.msgHelper.showToast('No Accepted Leaves !!!');
        return;
      }

      this.appliedLeaves = responseJson['resultData'];

      // for(let i=0;i<this.appliedLeaves.length;i++){

      //   if(this.dataValidation.isEmptyJson(this.appliedLeaves[i]['ApprovedOrRejectedBy'])){
      //     continue;
      //   }

      //   //Call the user information for each of the user ids
      //   var reqJsonUser = {
      //       "UserId": this.appliedLeaves[i]['ApprovedOrRejectedBy'],
      //       "AppType": "W"
      //   };

      //   this.http.callApi(reqJsonUser,this.codes.API_GET_PARTICULAR_USER_INFORMATION).then(resJson => {
      //     if(this.dataValidation.isEmptyJson(resJson)){
      //       this.msgHelper.showErrorDialog('Error !!!','Empty response received from Get Particular User Information API');
      //       return;
      //     }
    
      //     if(this.dataValidation.isEmptyJson(resJson['resultData'])){
      //       this.msgHelper.showErrorDialog('Error !!!',resJson['resMessage']);
      //       return;
      //     }

      //     console.error(resJson['resultData']);
      //     this.appliedLeaves[i]['ApprovedByUser'] = resJson['resultData'][0]['FirstName']+" "+resJson['resultData'][0]['LastName'];
      //   });
      // }
    });







//Rejected
    var reqJson = {
      "UserId":currentUserInfo[0]['UserId'],
      "YearValue": String(new Date().getFullYear()), 
      "LeaveStatus": "R",
      "AppType": "W"
    };

    this.httpCall.callApi(reqJson,this.codes.API_GET_USER_LEAVE_BALANCE_INFORMATION).then(responseJson => {
      
      if(this.dataValidation.isEmptyJson(responseJson)){
        this.msgHelper.showErrorDialog('Error !!!','Empty response received from Get Leave Type API');
        return;
      }

      if(this.dataValidation.isEmptyJson(responseJson['resultData'])){
        this.msgHelper.showToast('No Rejected Leaves !!!');
        return;
      }

      this.rejectedLeaves = responseJson['resultData'];

      // for(let i=0;i<this.rejectedLeaves.length;i++){

      //   if(this.dataValidation.isEmptyJson(this.rejectedLeaves[i]['ApprovedOrRejectedBy'])){
      //     continue;
      //   }

      //   //Call the user information for each of the user ids
      //   var reqJsonUser = {
      //       "UserId": this.rejectedLeaves[i]['ApprovedOrRejectedBy'],
      //       "AppType": "W"
      //   };

      //   this.http.callApi(reqJsonUser,this.codes.API_GET_PARTICULAR_USER_INFORMATION).then(resJson => {
      //     if(this.dataValidation.isEmptyJson(resJson)){
      //       this.msgHelper.showErrorDialog('Error !!!','Empty response received from Get Particular User Information API');
      //       return;
      //     }
    
      //     if(this.dataValidation.isEmptyJson(resJson['resultData'])){
      //       this.msgHelper.showErrorDialog('Error !!!',resJson['resMessage']);
      //       return;
      //     }

      //     console.error(resJson['resultData']);
      //     this.rejectedLeaves[i]['ApprovedByUser'] = resJson['resultData'][0]['FirstName']+" "+resJson['resultData'][0]['LastName'];
      //   });
      // }
    });
  }

  getImageByUserId(userId, userList){
    for(let i=0;i<userList.length;i++){
      if(userList[i]['UserId'] == userId)
      return userList[i]['UserImagePath'];
    }
  }

  getColourByColourId(colourId, colours){
    for(let i=0;i<colours.length;i++){
      console.error(colours[i]['ColorId']+"\t"+colourId);
      if(colours[i]['ColorId']==colourId)
        return colours[i]['ColorName'];
    }
  }




  getInformation(leaveTypeId,leave){
    var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));

    if(this.dataValidation.isEmptyJson(currentUserInfo)){
      this.msgHelper.showToast('Could not fetch user id');
      return;
    }

    var requestJson= {
      "UserId": currentUserInfo[0]['UserId'],
      "LeaveTypeId": leaveTypeId,
      "YearValue": String(new Date().getFullYear()),
      "AppType": "W"
    };

    this.httpCall.callApi(requestJson,this.codes.API_GET_LEAVE_INFORMATION_COUNT).then(responseJson => {

      if(this.dataValidation.isEmptyJson(responseJson)){
        this.msgHelper.showErrorDialog('Error !!!','Empty response received from Get Leave Type API');
        return;
      }

      if(this.dataValidation.isEmptyJson(responseJson['resultData'])){
        this.msgHelper.showErrorDialog('Error !!!',responseJson['resMessage']);
        return;
      }
      
      leave['TakenLeave'] = responseJson['resultData'][0]['TakenLeave'];
      leave['RemaningLeave'] = responseJson['resultData'][0]['RemaningLeave'];
    });


  }

  goToUserMessages(){
    let userModal = this.modalCtrl.create('UserMessageNotificationListPage');
    userModal.present();
  }


  openCalendar(leave) {
    const options: CalendarModalOptions = {
      pickMode: 'range',
      title: 'Select Leave Dates',
      color : 'dark'
    };

    let myCalendar = this.modalCtrl.create(CalendarModal, {
      options: options
    });

    myCalendar.present();

    myCalendar.onDidDismiss((date: { from: CalendarResult; to: CalendarResult }, type: string) => {
      console.log(date.from['time']);

      //Show an alert if the person wants to really apply

      //Check if the user will be able to apply for the leave
      //Calculate the difference


      var differenceInDays = (date.to['time'] - date.from['time']) / (1000 * 60 * 60 * 24);

      if(this.dataValidation.isEmptyJson(leave['RemaningLeave'])){
        this.getInformation(leave['LeaveTypeId'],leave);
        this.msgHelper.showToast('Please select the dates again !!!',false);
        return;
      }

      if(differenceInDays > Number(leave['RemaningLeave'])){
        this.msgHelper.showToast('You have only '+leave['RemaningLeave']+' '+ leave['LeaveTypeName']+' leaves left !!!',false);
        return;
      }

      var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));
        
      if(this.dataValidation.isEmptyJson(currentUserInfo)){
       this.msgHelper.showToast('Could not fetch user id');
       return;
      }
        
      var requestJson = {
        "UserId": currentUserInfo[0]['UserId'],
        "LeaveTypeId": leave['LeaveTypeId'],
        "FinancialYearId": 1,
        "LeaveTakeCount": differenceInDays,
        "LeaveApplyDate": this.datePipe.transform(new Date(),'YYYY-MM-DD'),
        "LeaveFromDate": date.from['string'],
        "LeaveToDate": date.to['string'],
        "AppType": "W"
      };

      let applyModal = this.modalCtrl.create('LeaveApplyPage',{"RequestJson":requestJson});
      applyModal.present();
      
    });
  }
}