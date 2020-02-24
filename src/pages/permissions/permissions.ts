import { MessageHelper } from './../../providers/message-helper';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-permissions',
  templateUrl: 'permissions.html',
})
export class PermissionsPage {

  permissionList : any = null;


  

  constructor(public navCtrl: NavController, public navParams: NavParams,public msgHelper : MessageHelper) {

    this.permissionList = [
      {
        "_MenuId":"0",
        "_CanView":"1",
        "_CanAdd":"1",
        "_CanDelete":"0",
        "_CanModify":"0",
        "_HisOnlyUser":"1"
      },
      {
        "_MenuId":"1",
        "_CanView":"1",
        "_CanAdd":"1",
        "_CanDelete":"1",
        "_CanModify":"1",
        "_HisOnlyUser":"1"
      },
      {
        "_MenuId":"2",
        "_CanView":"1",
        "_CanAdd":"1",
        "_CanDelete":"0",
        "_CanModify":"1",
        "_HisOnlyUser":"1"
      },
      {
        "_MenuId":"3",
        "_CanView":"0",
        "_CanAdd":"1",
        "_CanDelete":"1",
        "_CanModify":"1",
        "_HisOnlyUser":"1"
      },
      {
        "_MenuId":"5",
        "_CanView":"1",
        "_CanAdd":"1",
        "_CanDelete":"1",
        "_CanModify":"1",
        "_HisOnlyUser":"1"
      },
      {
        "_MenuId":"6",
        "_CanView":"1",
        "_CanAdd":"1",
        "_CanDelete":"1",
        "_CanModify":"1",
        "_HisOnlyUser":"1"
      },
      {
        "_MenuId":"7",
        "_CanView":"1",
        "_CanAdd":"1",
        "_CanDelete":"1",
        "_CanModify":"1",
        "_HisOnlyUser":"1"
      },
      {
        "_MenuId":"8",
        "_CanView":"1",
        "_CanAdd":"1",
        "_CanDelete":"1",
        "_CanModify":"1",
        "_HisOnlyUser":"1"
      }
    ];

    //Check if it is present in the local storage
    this.permissionList = JSON.parse(localStorage.getItem('Permission'));


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PermissionsPage');
  }

  change(k,string){
    if(this.permissionList[k][string] == '1')
    this.permissionList[k][string] = '0';
    else
    this.permissionList[k][string] = '1';
  }

  updatePermission(){
    localStorage.setItem('Permission',JSON.stringify(this.permissionList));

    if(localStorage.getItem('Permission') != null){
      var permissions = [
        {
          "_MenuId":"1",
          "_CanView":"1",
        },
        {
          "_MenuId":"2",
          "_CanView":"1",
        },
        {
          "_MenuId":"3",
          "_CanView":"1",
        },
        {
          "_MenuId":"4",
          "_CanView":"1",
        },
        {
          "_MenuId":"5",
          "_CanView":"1",
        },
        {
          "_MenuId":"6",
          "_CanView":"1",
        },
        {
          "_MenuId":"7",
          "_CanView":"1",
        },
        {
          "_MenuId":"8",
          "_CanView":"1",
        },
        {
          "_MenuId":"9",
          "_CanView":"1",
        }
      ];
      this.navCtrl.setRoot('PermissionsHomeTempPage',{'Permissions':permissions});
      this.msgHelper.showToast('Permissions updated !!!');
    }
  }

}