import { AlertController } from 'ionic-angular';
import { MessageHelper } from './../../providers/message-helper';
import { DataValidation } from './../../Utils/DataValidation';
import { Codes } from './../../Utils/Codes';
import { HttpProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Grid } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-project-home',
  templateUrl: 'project-home.html',
})
export class ProjectHomePage {

  projects : any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,
    public httpCall : HttpProvider,public codes : Codes,public dataValidation : DataValidation,
    public msgHelper : MessageHelper,public alertController : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectHomePage');


     //Call the change password API
     var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));

     console.error(JSON.stringify(currentUserInfo));
 
     if (this.dataValidation.isEmptyJson(currentUserInfo)) {
       this.msgHelper.showToast('Could not fetch user id');
       return;
     }
 
     //Get user wise project list
     var requestJson = {
       "AssignedUserId": currentUserInfo[0]['UserId'],
       "ProjectYear": new Date().getFullYear(),
       "AppType": "W"
     };
 
     this.httpCall.callApi(requestJson, this.codes.API_GET_USER_WISE_PROJECT_REPORT).then(responseJson => {
 
       if (this.dataValidation.isEmptyJson(responseJson)) {
         this.msgHelper.showErrorDialog('Error !!', 'Empty response received from server !!!');
         return;
       }
 
       this.projects = responseJson['resultData'];

      });
  }


  goToUserMessages(){
    let userModal = this.modalCtrl.create('UserMessageNotificationListPage');
    userModal.present();
  }

}
