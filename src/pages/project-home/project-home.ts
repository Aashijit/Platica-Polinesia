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

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,
    public httpCall : HttpProvider,public codes : Codes,public dataValidation : DataValidation,
    public msgHelper : MessageHelper,public alertController : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectHomePage');
  }


  goToUserMessages(){
    let userModal = this.modalCtrl.create('UserMessageNotificationListPage');
    userModal.present();
  }

}
