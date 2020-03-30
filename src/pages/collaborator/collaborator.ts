import { AlertController } from 'ionic-angular';
import { MessageHelper } from './../../providers/message-helper';
import { DataValidation } from './../../Utils/DataValidation';
import { Codes } from './../../Utils/Codes';
import { HttpProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Grid } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { DatePipe } from '@angular/common';



@IonicPage()
@Component({
  selector: 'page-collaborator',
  templateUrl: 'collaborator.html',
})
export class CollaboratorPage {

  collaborators : any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
    public httpCall: HttpProvider, public codes: Codes, public dataValidation: DataValidation,
    public msgHelper: MessageHelper, public alertController: AlertController,public datePipe : DatePipe) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollaboratorPage');

    var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));


    if(this.dataValidation.isEmptyJson(currentUserInfo)){
      this.msgHelper.showToast('Could not fetch user id');
      return;
    }

    var requestJson = {
        "AssignedUserId": currentUserInfo[0]['UserId'],
        "AppType": "W"
        
    };

    this.httpCall.callApi(requestJson,this.codes.API_GET_COLLABORATORS).then(responseJson => {

      if(this.dataValidation.isEmptyJson(responseJson)){
        this.msgHelper.showErrorDialog('Error !!!','Empty response received from Server !!!');
        return;
      }
      this.collaborators = responseJson['resultData'];
      
      for(let i=0;i<this.collaborators.length;i++){
        this.collaborators[i]['imagePath'] = this.getProjectTypeImage(this.collaborators[i]['ProjectImage']);
      }
    });

  }

  goToUserMessages() {
    let userModal = this.modalCtrl.create('UserMessageNotificationListPage');
    userModal.present();
  }

  getProjectTypeImage(projectImage){
    if(projectImage == "Icons/microphone.png"){
      return "../../assets/imgs/icon_mic.png";
    }
    if(projectImage == "Icons/music.png"){
      return "../../assets/imgs/icon_music.png";  
    }
    if(projectImage == "Icons/gallery.png"){
      return "../../assets/imgs/icon_gallery.png";  
    }
    return "../../assets/imgs/icon_image.png";
}

}