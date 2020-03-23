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
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  loadingStatus: any = 'Getting the list of users';
  userList: any = null;
  userMenus : any=  null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
    public httpCall: HttpProvider, public codes: Codes, public dataValidation: DataValidation,
    public msgHelper: MessageHelper, public alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

    //Start calling the API's
    //Get user list

    var requestJson = {
      'AppType': 'W'
    };

    this.httpCall.callApi(requestJson, this.codes.API_GET_USER_DETAILS).then(responseJson => {

      //Validate
      if (this.dataValidation.isEmptyJson(responseJson)) {
        this.msgHelper.showErrorDialog('Error !!', 'Empty response received from server !!!');
        return;
      }

      this.userList = responseJson['resultData'];

      //Get the user mapped list
      this.httpCall.callApi(requestJson, this.codes.API_GET_USER_MAP_LIST).then(getUserMappedListJson => {

        //Validate
        if (this.dataValidation.isEmptyJson(getUserMappedListJson)) {
          this.msgHelper.showErrorDialog('Error !!', 'Empty response received from server in Get User Map List API !!!');
          return;
        }

        //Store the user map list
        localStorage.setItem(this.codes.LSK_USER_MAP_LIST,JSON.stringify(responseJson['resultData']));


        if (!this.dataValidation.isEmptyJson(getUserMappedListJson['resultData'])) {

          var listOfMappings = getUserMappedListJson['resultData'];

          //Fetch the list of group ids
          this.httpCall.callApi(requestJson, this.codes.API_GET_USER_GROUP).then(usergroupjson => {

            if (this.dataValidation.isEmptyJson(usergroupjson)) {
              this.msgHelper.showErrorDialog('Error !!', 'Empty response received from server in Get User Group List API !!!');
              return;
            }
            var userGroups = usergroupjson['resultData'];
            console.error(userGroups);
            for (let i = 0; i <= this.userList.length - 1; i++) {
              this.userList[i]['UserTypeName'] = this.getUserTypeName(listOfMappings, this.userList[i]['UserId']);
              this.userList[i]['GroupName'] = this.getUserGroupId(listOfMappings, this.userList[i]['UserId'], userGroups);
            }
          });
        }
      });
    });


    //Get user permission using user type id
    var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));

    console.error(JSON.stringify(currentUserInfo));

    if (this.dataValidation.isEmptyJson(currentUserInfo)) {
      this.msgHelper.showToast('Could not fetch user id');
      return;
    }

    var permissionRequestJson = {
      "AppType": "W",
      "UserTypeId": currentUserInfo[0]['UserTypeIds']
    }

    this.httpCall.callApi(permissionRequestJson,this.codes.API_GET_PERMISSION_INFORMATION).then(responseJson => {
      if (this.dataValidation.isEmptyJson(responseJson)) {
        this.msgHelper.showErrorDialog('Error !!', 'Empty response received from server in Get Permission Information API !!!');
        return;
      }
      this.userMenus = responseJson['resultData'];
      // console.error("Menus "+this.userMenus);
      localStorage.setItem(this.codes.LSK_PERMISSION_MENU,JSON.stringify(this.userMenus));
    });
  }


  getUserGroupId(resultData, userId, userGroup) {
    for (let i = 0; i <= resultData.length - 1; i++) {
      if (resultData[i]['UserId'] == userId) {
        for (let j = 0; j < userGroup.length; j++) {
          // alert(userGroup[j]['GroupId']+' '+ resultData[i]['UserGroupIds']);
          if (userGroup[j]['UserGroupId'] == resultData[i]['UserGroupIds']) {
            return userGroup[j]['UserGroupName'];
          }
        }
      }
    }
    return null;
  }

  getUserTypeName(resultData, userId) {
    for (let i = 0; i <= resultData.length - 1; i++) {
      if (resultData[i]['UserId'] == userId) {
        return resultData[i]['UserTypeName'];
      }
    }
    return null;
  }

  goToUserMessages() {
    let userModal = this.modalCtrl.create('UserMessageNotificationListPage');
    userModal.present();
  }


  goToProjectSelection() {
    let projectSelectionModal = this.modalCtrl.create('ProjectInformationPage');
    projectSelectionModal.present();
  }

  editUser(user) {
    let userModal = this.modalCtrl.create('UpdateUserPage', { 'userinfo': user });
    userModal.present();
  }


  deleteUser(user) {
    const alert = this.alertController.create({
      title: 'User to be deleted',
      message: 'User is to be deleted. <strong>Are you sure</strong>!!!',
      buttons: [
        {
          text: 'No',
          role: 'no',
          handler: () => {

          }
        }, {
          text: 'Yes',
          handler: () => {

            //Call the delete user API
            var requestJson = {
              "UserId": user['UserId'],
              "AppType": "W"
            };

            var loading = this.msgHelper.showWorkingDialog('Deleting the user ...');

            this.httpCall.callApi(requestJson, this.codes.API_DELETE_USER).then(responseJson => {

              loading.dismiss();

              if (this.dataValidation.isEmptyJson(responseJson)) {
                this.msgHelper.showErrorDialog('Error !!', 'Empty response received from server  !!!');
                return;
              }

              if (responseJson['status'] == 1) {
                this.msgHelper.showToast('User deleted !!!');
                this.ionViewDidLoad();
              }

            });

          }
        }
      ]
    });

    alert.present();

  }


  addUser() {
    let userModal = this.modalCtrl.create('AddUserPage');
    userModal.present();
  }
}
