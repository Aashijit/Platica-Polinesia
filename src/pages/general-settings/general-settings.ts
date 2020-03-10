import { AlertController } from 'ionic-angular';
import { MessageHelper } from './../../providers/message-helper';
import { DataValidation } from './../../Utils/DataValidation';
import { Codes } from './../../Utils/Codes';
import { HttpProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Grid } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { TitleCasePipe } from '@angular/common';

@IonicPage()
@Component({
  selector: 'page-general-settings',
  templateUrl: 'general-settings.html',
})
export class GeneralSettingsPage {

  //Add the Log Out Confirmation -->

  loadingStatus: any = 'Getting the business units ...';
  userList: any = null;
  businessunitList: any = null;
  brandList: any = null;
  segment: any = 'businessunits';

  groupList: any = null;

  userTypes: any = null;

  activities : any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
    public httpCall: HttpProvider, public codes: Codes, public dataValidation: DataValidation,
    public msgHelper: MessageHelper, public alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneralSettingsPage');


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


        if (!this.dataValidation.isEmptyJson(getUserMappedListJson['resultData'])) {

          var listOfMappings = getUserMappedListJson['resultData'];
          //Fetch the list of group ids

          var requestJson = {
            'AppType': 'W'
          };


          this.httpCall.callApi(requestJson, this.codes.API_GET_USER_GROUP).then(usergroupjson => {

            if (this.dataValidation.isEmptyJson(usergroupjson)) {
              this.msgHelper.showErrorDialog('Error !!', 'Empty response received from server in Get User Group List API !!!');
              return;
            }
            var userGroups = usergroupjson['resultData'];
            if (this.dataValidation.isEmptyJson(userGroups)) {
              this.msgHelper.showErrorDialog('Error !!', usergroupjson['resMessage']);
              return;
            }
            this.groupList = userGroups;
            console.error(this.groupList);
            for (let i = 0; i <= this.userList.length - 1; i++) {
              this.userList[i]['UserTypeName'] = this.getUserTypeName(listOfMappings, this.userList[i]['UserId']);
              this.userList[i]['GroupName'] = this.getUserGroupId(listOfMappings, this.userList[i]['UserId'], userGroups);
            }
          });
          //Call the business units and brands API
          var requestJson = {
            'AppType': 'W'
          };

          this.httpCall.callApi(responseJson, this.codes.API_GET_BUSINESS_UNIT_LIST).then(getbusinessListJson => {


            if (this.dataValidation.isEmptyJson(getbusinessListJson)) {
              this.msgHelper.showErrorDialog('Error !!', 'Empty response received from server in Get Business List API !!!');
              return;
            }

            this.businessunitList = getbusinessListJson['resultData'];

            for (let i = 0; i <= this.businessunitList.length - 1; i++) {
              this.businessunitList[i]['OwnerName'] = this.getOwnerName(this.userList, this.businessunitList[i]['BusinessUnitOwnerID']);
            }
          });


          //Call the Brand List
          var requestJson = {
            'AppType': 'W'
          };

          this.httpCall.callApi(requestJson, this.codes.API_GET_BRAND_LIST).then(brandListResponse => {

            if (this.dataValidation.isEmptyJson(brandListResponse)) {
              this.msgHelper.showErrorDialog('Error !!', 'Empty response received from server in Get Brand List API !!!');
              return;
            }

            this.brandList = brandListResponse['resultData'];
            for (let i = 0; i <= this.brandList.length - 1; i++) {
              this.brandList[i]['OwnerName'] = this.getBrandOwnerName(this.userList, this.brandList[i]['BrandOwnerID']);
            }
          });
        }
      });
    });





    //Get the User Types
    var requestJson = {
      "AppType": "W"
    };


    this.httpCall.callApi(requestJson, this.codes.API_GET_USER_TYPE_LIST).then(responseJson => {

      if (this.dataValidation.isEmptyJson(responseJson)) {
        this.msgHelper.showErrorDialog("Error !!!", "Empty response reeceived from Get user type list");
        return;
      }

      if (responseJson['status'] != 1) {
        this.msgHelper.showErrorDialog('Error !!!', responseJson['resMessage']);
        return;
      }

      this.userTypes = responseJson['resultData'];

    });



     //Get the Activities
     var requestJson = {
      "AppType": "W"
    };

    this.httpCall.callApi(requestJson,this.codes.API_GET_ACTIVITY).then(responseJson => {
     
      if (this.dataValidation.isEmptyJson(responseJson)) {
        this.msgHelper.showErrorDialog("Error !!!", "Empty response reeceived from Get user type list");
        return;
      }

      if (responseJson['status'] != 1) {
        this.msgHelper.showErrorDialog('Error !!!', responseJson['resMessage']);
        return;
      }

      this.activities = responseJson['resultData'];

    });
  }

  editActivity(activity){
    let activityModal = this.modalCtrl.create('EditActivityPage', { 'activity':activity });
    activityModal.present();
  }

  addActivity(){
    let activityModal = this.modalCtrl.create('AddActivityPage');
    activityModal.present();
  }

  addUserType() {
    let userTypeModal = this.modalCtrl.create('AddUserTypePage');
    userTypeModal.present();
  }

  editUserType(userType) {
    let userTypeModal = this.modalCtrl.create('EditUserTypePage', { 'UserTypeName': userType['UserTypeName'], "UserTypeAlias": userType['UserTypeAlias'], 'UserTypeId':userType['UserTypeId'] });
    userTypeModal.present();
  }


  getBrandOwnerName(resultData, ownerId) {
    for (let i = 0; i < resultData.length; i++) {
      if (resultData[i]['UserId'] == ownerId) {
        return resultData[i]['FirstName'] + ' ' + resultData[i]['LastName'];
      }
    }
    return null;

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

  getOwnerName(resultData, ownerId) {
    for (let i = 0; i < resultData.length; i++) {
      if (resultData[i]['UserId'] == ownerId) {
        return resultData[i]['FirstName'] + ' ' + resultData[i]['LastName'];
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


  addBusinessUnit() {
    let userModal = this.modalCtrl.create('AddBusinessUnitPage', { 'userList': this.userList });
    userModal.present();
  }


  addUser() {
    let userModal = this.modalCtrl.create('AddUserPage');
    userModal.present();
  }


  editUser(user) {
    let userModal = this.modalCtrl.create('UpdateUserPage', { 'userinfo': user, 'UserTypes': this.userTypes, 'GroupList': this.groupList });
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
  

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  addBrands() {
    let userModal = this.modalCtrl.create('AddBrandPage', { 'userList': this.userList });
    userModal.present();
  }

  ionViewWillEnter() {
    this.ionViewDidLoad();
  }

  editBusinessUnit(businessunit) {
    let userModal = this.modalCtrl.create('UpdateBusinessUnitPage', { 'businessUnit': businessunit, 'userList': this.userList });
    userModal.present();
  }

  editBrand(brand) {
    let userModal = this.modalCtrl.create('EditBrandPage', { 'brand': brand, 'userList': this.userList });
    userModal.present();
  }

  goToUserMessages() {
    let userModal = this.modalCtrl.create('UserMessageNotificationListPage');
    userModal.present();
  }
}