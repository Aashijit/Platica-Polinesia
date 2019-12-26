import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goToUserMessages(){
    let userModal = this.modalCtrl.create('UserMessageNotificationListPage');
    userModal.present();
  }


  goToProjectSelection(){
    let projectSelectionModal = this.modalCtrl.create('ProjectInformationPage');
    projectSelectionModal.present();
  }

}
