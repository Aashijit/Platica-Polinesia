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


@IonicPage()
@Component({
  selector: 'page-event-list',
  templateUrl: 'event-list.html',
})
export class EventListPage {

  events : any = null;

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
}