import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-permissions-home-temp',
  templateUrl: 'permissions-home-temp.html',
})
export class PermissionsHomeTempPage {

  permission: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {

    this.permission = this.navParams.get('Permissions');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PermissionsHomeTempPage');
  }

  goToUserMessages(){
    var userInfo = [
      {
        "FirstName":"Aashijit",
        "MiddleName":"",
        "LastName":"Mukhopadhyay",
        "Address1":"123, Sarat Chatterjee Road",
        "City":"Kolkata",
        "State":"West Bengal"
      }
    ];
    localStorage.setItem('userinfo',JSON.stringify(userInfo));
    let userModal = this.modalCtrl.create('UserMessageNotificationListPage');
    userModal.present();
  }
}