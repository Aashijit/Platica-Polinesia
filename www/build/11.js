webpackJsonp([11],{

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSettingsPageModule", function() { return GeneralSettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_components_module__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_svg_round_progressbar__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_svg_round_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__general_settings__ = __webpack_require__(463);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var GeneralSettingsPageModule = /** @class */ (function () {
    function GeneralSettingsPageModule() {
    }
    GeneralSettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__general_settings__["a" /* GeneralSettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_4__general_settings__["a" /* GeneralSettingsPage */]),
                __WEBPACK_IMPORTED_MODULE_1_angular_svg_round_progressbar__["RoundProgressModule"],
                __WEBPACK_IMPORTED_MODULE_0__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], GeneralSettingsPageModule);
    return GeneralSettingsPageModule;
}());

//# sourceMappingURL=general-settings.module.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_message_helper__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils_DataValidation__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Utils_Codes__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GeneralSettingsPage = /** @class */ (function () {
    function GeneralSettingsPage(navCtrl, navParams, modalCtrl, httpCall, codes, dataValidation, msgHelper, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.httpCall = httpCall;
        this.codes = codes;
        this.dataValidation = dataValidation;
        this.msgHelper = msgHelper;
        this.alertController = alertController;
        //Add the Log Out Confirmation -->
        this.loadingStatus = 'Getting the business units ...';
        this.userList = null;
        this.businessunitList = null;
        this.brandList = null;
        this.segment = 'businessunits';
        this.groupList = null;
        this.userTypes = null;
        this.activities = null;
        this.materials = null;
    }
    GeneralSettingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad GeneralSettingsPage');
        //Start calling the API's
        //Get user list
        var requestJson = {
            'AppType': 'W'
        };
        this.httpCall.callApi(requestJson, this.codes.API_GET_USER_DETAILS).then(function (responseJson) {
            //Validate
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog('Error !!', 'Empty response received from server !!!');
                return;
            }
            _this.userList = responseJson['resultData'];
            //Get the user mapped list
            _this.httpCall.callApi(requestJson, _this.codes.API_GET_USER_MAP_LIST).then(function (getUserMappedListJson) {
                //Validate
                if (_this.dataValidation.isEmptyJson(getUserMappedListJson)) {
                    _this.msgHelper.showErrorDialog('Error !!', 'Empty response received from server in Get User Map List API !!!');
                    return;
                }
                if (!_this.dataValidation.isEmptyJson(getUserMappedListJson['resultData'])) {
                    var listOfMappings = getUserMappedListJson['resultData'];
                    //Fetch the list of group ids
                    var requestJson = {
                        'AppType': 'W'
                    };
                    _this.httpCall.callApi(requestJson, _this.codes.API_GET_USER_GROUP).then(function (usergroupjson) {
                        if (_this.dataValidation.isEmptyJson(usergroupjson)) {
                            _this.msgHelper.showErrorDialog('Error !!', 'Empty response received from server in Get User Group List API !!!');
                            return;
                        }
                        var userGroups = usergroupjson['resultData'];
                        if (_this.dataValidation.isEmptyJson(userGroups)) {
                            _this.msgHelper.showErrorDialog('Error !!', usergroupjson['resMessage']);
                            return;
                        }
                        _this.groupList = userGroups;
                        console.error(_this.groupList);
                        for (var i = 0; i <= _this.userList.length - 1; i++) {
                            _this.userList[i]['UserTypeName'] = _this.getUserTypeName(listOfMappings, _this.userList[i]['UserId']);
                            _this.userList[i]['GroupName'] = _this.getUserGroupId(listOfMappings, _this.userList[i]['UserId'], userGroups);
                        }
                    });
                    //Call the business units and brands API
                    var requestJson = {
                        'AppType': 'W'
                    };
                    _this.httpCall.callApi(responseJson, _this.codes.API_GET_BUSINESS_UNIT_LIST).then(function (getbusinessListJson) {
                        if (_this.dataValidation.isEmptyJson(getbusinessListJson)) {
                            _this.msgHelper.showErrorDialog('Error !!', 'Empty response received from server in Get Business List API !!!');
                            return;
                        }
                        _this.businessunitList = getbusinessListJson['resultData'];
                        for (var i = 0; i <= _this.businessunitList.length - 1; i++) {
                            _this.businessunitList[i]['OwnerName'] = _this.getOwnerName(_this.userList, _this.businessunitList[i]['BusinessUnitOwnerID']);
                        }
                    });
                    //Call the Brand List
                    var requestJson = {
                        'AppType': 'W'
                    };
                    _this.httpCall.callApi(requestJson, _this.codes.API_GET_BRAND_LIST).then(function (brandListResponse) {
                        if (_this.dataValidation.isEmptyJson(brandListResponse)) {
                            _this.msgHelper.showErrorDialog('Error !!', 'Empty response received from server in Get Brand List API !!!');
                            return;
                        }
                        _this.brandList = brandListResponse['resultData'];
                        for (var i = 0; i <= _this.brandList.length - 1; i++) {
                            _this.brandList[i]['OwnerName'] = _this.getBrandOwnerName(_this.userList, _this.brandList[i]['BrandOwnerID']);
                        }
                    });
                }
            });
        });
        //Get the User Types
        var requestJson = {
            "AppType": "W"
        };
        this.httpCall.callApi(requestJson, this.codes.API_GET_USER_TYPE_LIST).then(function (responseJson) {
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog("Error !!!", "Empty response reeceived from Get user type list");
                return;
            }
            if (responseJson['status'] != 1) {
                _this.msgHelper.showErrorDialog('Error !!!', responseJson['resMessage']);
                return;
            }
            _this.userTypes = responseJson['resultData'];
        });
        //Get the Activities
        var requestJson = {
            "AppType": "W"
        };
        this.httpCall.callApi(requestJson, this.codes.API_GET_ACTIVITY).then(function (responseJson) {
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog("Error !!!", "Empty response reeceived from Get Activity list");
                return;
            }
            if (responseJson['status'] != 1) {
                _this.msgHelper.showErrorDialog('Error !!!', responseJson['resMessage']);
                return;
            }
            _this.activities = responseJson['resultData'];
            for (var i = 0; i < _this.activities.length; i++) {
                _this.activities[i]['PhaseName'] = _this.getPhaseName(_this.activities[i]['PhaseId']);
                _this.activities[i]['ProjectTypeName'] = _this.getProjectTypeName(_this.activities[i]['ProjectTypeId']);
                _this.activities[i]['ProjectTypeImage'] = _this.getProjectTypeImage(_this.activities[i]['ProjectTypeName']);
            }
        });
        //Get All material information
        var requestJson = {
            "AppType": "W"
        };
        this.httpCall.callApi(requestJson, "Material/GetMaterialList").then(function (responseJson) {
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog("Error !!!", "Empty response reeceived from Get Material list");
                return;
            }
            if (responseJson['status'] != 1) {
                _this.msgHelper.showErrorDialog('Error !!!', responseJson['resMessage']);
                return;
            }
            _this.materials = responseJson['resultData'];
        });
    };
    GeneralSettingsPage.prototype.getPhaseName = function (phaseId) {
        //Check if the phase id is present
        if (this.dataValidation.isEmptyJson(localStorage.getItem(this.codes.LSK_PHASES))) {
            return null;
        }
        var phaseInfo = JSON.parse(localStorage.getItem(this.codes.LSK_PHASES));
        for (var i = 0; i < phaseInfo.length; i++) {
            if (phaseInfo[i]['PhaseId'] == phaseId)
                return phaseInfo[i]['PhaseName'];
        }
    };
    GeneralSettingsPage.prototype.getProjectTypeName = function (projectTypeId) {
        //Check if the phase is present
        if (this.dataValidation.isEmptyJson(localStorage.getItem(this.codes.LSK_PROJECT_TYPE))) {
            return null;
        }
        var projectInfo = JSON.parse(localStorage.getItem(this.codes.LSK_PROJECT_TYPE));
        for (var i = 0; i < projectInfo.length; i++) {
            if (projectInfo[i]['ProjectTypeId'] == projectTypeId)
                return projectInfo[i]['ProjectTypeName'];
        }
    };
    GeneralSettingsPage.prototype.getProjectTypeImage = function (projectTypeName) {
        if (projectTypeName == "Music Audio") {
            return "../../assets/imgs/icon_mic.png";
        }
        else if (projectTypeName == "Music Video") {
            return "../../assets/imgs/icon_video.png";
        }
        else if (projectTypeName == "Still Photographs") {
            return "../../assets/imgs/icon_image.png";
        }
        else if (projectTypeName == "Videlo Store") {
            return "../../assets/imgs/icon_doc.png";
        }
    };
    GeneralSettingsPage.prototype.editActivity = function (activity) {
        var activityModal = this.modalCtrl.create('EditActivityPage', { 'activity': activity });
        activityModal.present();
    };
    GeneralSettingsPage.prototype.addActivity = function () {
        var activityModal = this.modalCtrl.create('AddActivityPage');
        activityModal.present();
    };
    GeneralSettingsPage.prototype.addUserType = function () {
        var userTypeModal = this.modalCtrl.create('AddUserTypePage');
        userTypeModal.present();
    };
    GeneralSettingsPage.prototype.editUserType = function (userType) {
        var userTypeModal = this.modalCtrl.create('EditUserTypePage', { 'UserTypeName': userType['UserTypeName'], "UserTypeAlias": userType['UserTypeAlias'], 'UserTypeId': userType['UserTypeId'] });
        userTypeModal.present();
    };
    GeneralSettingsPage.prototype.getBrandOwnerName = function (resultData, ownerId) {
        for (var i = 0; i < resultData.length; i++) {
            if (resultData[i]['UserId'] == ownerId) {
                return resultData[i]['FirstName'] + ' ' + resultData[i]['LastName'];
            }
        }
        return null;
    };
    GeneralSettingsPage.prototype.getUserGroupId = function (resultData, userId, userGroup) {
        for (var i = 0; i <= resultData.length - 1; i++) {
            if (resultData[i]['UserId'] == userId) {
                for (var j = 0; j < userGroup.length; j++) {
                    // alert(userGroup[j]['GroupId']+' '+ resultData[i]['UserGroupIds']);
                    if (userGroup[j]['UserGroupId'] == resultData[i]['UserGroupIds']) {
                        return userGroup[j]['UserGroupName'];
                    }
                }
            }
        }
        return null;
    };
    GeneralSettingsPage.prototype.getOwnerName = function (resultData, ownerId) {
        for (var i = 0; i < resultData.length; i++) {
            if (resultData[i]['UserId'] == ownerId) {
                return resultData[i]['FirstName'] + ' ' + resultData[i]['LastName'];
            }
        }
        return null;
    };
    GeneralSettingsPage.prototype.getUserTypeName = function (resultData, userId) {
        for (var i = 0; i <= resultData.length - 1; i++) {
            if (resultData[i]['UserId'] == userId) {
                return resultData[i]['UserTypeName'];
            }
        }
        return null;
    };
    GeneralSettingsPage.prototype.addBusinessUnit = function () {
        var userModal = this.modalCtrl.create('AddBusinessUnitPage', { 'userList': this.userList });
        userModal.present();
    };
    GeneralSettingsPage.prototype.addUser = function () {
        var userModal = this.modalCtrl.create('AddUserPage');
        userModal.present();
    };
    GeneralSettingsPage.prototype.editUser = function (user) {
        var userModal = this.modalCtrl.create('UpdateUserPage', { 'userinfo': user, 'UserTypes': this.userTypes, 'GroupList': this.groupList });
        userModal.present();
    };
    GeneralSettingsPage.prototype.deleteUser = function (user) {
        var _this = this;
        var alert = this.alertController.create({
            title: 'User to be deleted',
            message: 'User is to be deleted. <strong>Are you sure</strong>!!!',
            buttons: [
                {
                    text: 'No',
                    role: 'no',
                    handler: function () {
                    }
                }, {
                    text: 'Yes',
                    handler: function () {
                        //Call the delete user API
                        var requestJson = {
                            "UserId": user['UserId'],
                            "AppType": "W"
                        };
                        var loading = _this.msgHelper.showWorkingDialog('Deleting the user ...');
                        _this.httpCall.callApi(requestJson, _this.codes.API_DELETE_USER).then(function (responseJson) {
                            loading.dismiss();
                            if (_this.dataValidation.isEmptyJson(responseJson)) {
                                _this.msgHelper.showErrorDialog('Error !!', 'Empty response received from server  !!!');
                                return;
                            }
                            if (responseJson['status'] == 1) {
                                _this.msgHelper.showToast('User deleted !!!');
                                _this.ionViewDidLoad();
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    GeneralSettingsPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.ionViewDidLoad();
        setTimeout(function () {
            refresher.complete();
        }, 2000);
    };
    GeneralSettingsPage.prototype.addBrands = function () {
        var userModal = this.modalCtrl.create('AddBrandPage', { 'userList': this.userList });
        userModal.present();
    };
    // ionViewWillEnter() {
    //   this.ionViewDidLoad();
    // }
    GeneralSettingsPage.prototype.editBusinessUnit = function (businessunit) {
        var userModal = this.modalCtrl.create('UpdateBusinessUnitPage', { 'businessUnit': businessunit, 'userList': this.userList });
        userModal.present();
    };
    GeneralSettingsPage.prototype.editBrand = function (brand) {
        var userModal = this.modalCtrl.create('EditBrandPage', { 'brand': brand, 'userList': this.userList });
        userModal.present();
    };
    GeneralSettingsPage.prototype.goToUserMessages = function () {
        var userModal = this.modalCtrl.create('UserMessageNotificationListPage');
        userModal.present();
    };
    GeneralSettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-general-settings',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/general-settings/general-settings.html"*/'<ion-header style="padding-left:10px !important; padding-right:10px !important">\n  <!--header starts here-->\n  <ion-row>\n    <ion-col class="nopadding mt-16" (click)="goToProjectSelection()">\n      <round-progress [current]="75" [max]="100" [radius]="20" [stroke]="7" [color]="\'#00ff00\'"></round-progress>\n      <img src="../../assets/imgs/icon_video.png" style="width: 26px !important;\n     position: absolute;\n     top: 7px !important;\n     left: 7px !important;" />\n    </ion-col>\n\n    <ion-col class="nopadding mt-20">\n      <star-provider [coins]="50" [stars]="20" [videos]="150"></star-provider>\n    </ion-col>\n\n    <ion-col class="nopadding">\n      <user-info [messageNumber]="10" [notificationNumber]="15" (click)="goToUserMessages()"\n        style="position: absolute;top: 0px !important;right: 0px !important;"></user-info>\n    </ion-col>\n\n  </ion-row>\n\n\n  <ion-segment [(ngModel)]="segment" mode="ios" style="margin-top: 13px !important;background: white !important;">\n\n    <ion-segment-button value="businessunits">\n      <img src="../../assets/imgs/capitol.svg" style="width: 20px !important; margin-top:5px !important" />\n    </ion-segment-button>\n    <ion-segment-button value="brands">\n      <img src="../../assets/imgs/tamiya.svg" style="width: 20px !important; margin-top:5px !important" />\n    </ion-segment-button>\n    <ion-segment-button value="users">\n      <img src="../../assets/imgs/friend.svg" style="width: 20px !important; margin-top:5px !important" />\n    </ion-segment-button>\n    <ion-segment-button value="usertypes">\n      <img src="../../assets/imgs/security.svg" style="width: 20px !important; margin-top:5px !important" />\n    </ion-segment-button>\n    <ion-segment-button value="activities">\n      <img src="../../assets/imgs/work-time.svg" style="width: 20px !important; margin-top:5px !important" />\n    </ion-segment-button>\n    <ion-segment-button value="materials">\n      <img src="../../assets/imgs/documents.svg" style="width: 20px !important; margin-top:5px !important" />\n    </ion-segment-button>\n\n  </ion-segment>\n\n\n  <!--header ends here-->\n</ion-header>\n\n<!--Body starts here-->\n<ion-content padding class="background-content mt-66"\n  style="height: 80% !important; width: 95% !important; margin-left: 2.5% !important; text-align: center;">\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <!--Fab Buttons-->\n  <ion-fab right bottom *ngIf="segment == \'businessunits\'">\n    <button ion-fab (click)="addBusinessUnit()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n\n\n  <ion-fab right bottom *ngIf="segment == \'brands\'">\n    <button ion-fab (click)="addBrands()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n\n  <ion-fab right bottom *ngIf="segment == \'users\'">\n    <button ion-fab (click)="addUser()">\n      <ion-icon name="person-add"></ion-icon>\n    </button>\n  </ion-fab>\n\n\n  <ion-fab right bottom *ngIf="segment == \'usertypes\'">\n    <button ion-fab (click)="addUserType()">\n      <ion-icon name="add" mode="ios"></ion-icon>\n    </button>\n  </ion-fab>\n\n\n  <ion-fab right bottom *ngIf="segment == \'activities\'">\n    <button ion-fab (click)="addActivity()">\n      <ion-icon name="add" mode="ios"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <ion-fab right bottom *ngIf="segment == \'materials\'">\n    <button ion-fab [disabled]=true>\n      <ion-icon name="add" mode="ios"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <!--Fab Buttons-->\n\n  \n  <p style=" margin-top: 4% !important;"></p>\n  <div [ngSwitch]="segment">\n    <p *ngSwitchCase="\'businessunits\'">\n      <ion-list *ngFor=\'let businessunit of businessunitList\' class="nomargin nopadding">\n        <ion-item class="nopadding">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-12 class="underline">\n                <p><strong style="color: dodgerblue !important;">{{businessunit[\'BusinessUnitName\']}}</strong> <span\n                    style="font-size: 12px !important;" (click)="editBusinessUnit(businessunit)">\n                    <ion-icon name="create"></ion-icon>\n                  </span>\n                  <!-- <span style="float:right !important;color:#700000 !important;" (click)="deleteUser(user)"><ion-icon name="trash" mode=\'ios\'></ion-icon></span> -->\n                </p>\n                <p class="subtitle-1">\n                  <ion-icon name="pin"></ion-icon>\n                  {{businessunit[\'Address1\'] +\' \'+businessunit[\'Address2\']}}\n                </p>\n                <p class="subtitle-2">\n                  <ion-icon name="phone-portrait"></ion-icon> <a href="tel:{{businessunit[\'Phone\']}}"\n                    style="text-decoration: none !important;">{{businessunit[\'Phone\']}}</a>\n                </p>\n                <p *ngIf="!dataValidation.isEmptyJson(businessunit[\'OwnerName\'])" style="font-size: 12px !important;">\n                  <ion-icon name="person"></ion-icon>&nbsp;{{businessunit[\'OwnerName\']}}\n                </p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-list>\n \n    </p>\n\n    <p *ngSwitchCase="\'brands\'">\n      <ion-list *ngFor=\'let brand of brandList\' class="nomargin nopadding">\n        <ion-item class="nopadding">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-2 style="margin-top: 2% !important;"> \n                <img [src]="brand[\'BrandImagePath\']" class="camera-img-wrapper" />\n              </ion-col>\n              <ion-col col-10 class="underline">\n                <p><strong style="color: dodgerblue !important;">{{brand[\'BrandName\']}}</strong> <span\n                    style="font-size: 12px !important;" (click)="editBrand(brand)">\n                    <ion-icon name="create"></ion-icon>\n                  </span>\n                  <!-- <span style="float:right !important;color:#700000 !important;" (click)="deleteUser(user)"><ion-icon name="trash" mode=\'ios\'></ion-icon></span> -->\n                </p>\n                <p class="subtitle-1">\n                  <ion-icon name="list-box"></ion-icon>\n                  {{brand[\'BrandDescription\']}}\n                </p>\n                <p *ngIf="!dataValidation.isEmptyJson(brand[\'OwnerName\'])" style="font-size: 12px !important;">\n                  <ion-icon name="person"></ion-icon>&nbsp;{{brand[\'OwnerName\']}}\n                </p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-list>\n\n    </p>\n\n\n    <!-- <p *ngSwitchCase="\'users\'"> -->\n      <div  *ngSwitchCase="\'users\'">\n      <p *ngIf=\'userList == null\'>\n        <ion-spinner name=\'ios\' style="margin-top: 40% !important;"></ion-spinner>\n        <ion-label style="color: #999 !important;">{{loadingStatus}}</ion-label>\n      </p>\n      <!--Break Gap-->\n      <p class="mt-10"></p>\n      <!--Break Gap-->\n      <ion-list *ngFor=\'let user of userList\' class="nomargin nopadding">\n        <ion-item class="nopadding">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-2 style="margin-top: 2% !important;"> \n                <img [src]="user[\'UserImagePath\']" class="camera-img-wrapper" />\n              </ion-col>\n              <ion-col col-10 class="underline">\n                <p><strong style="color: dodgerblue !important;">{{user[\'FirstName\'] + \' \'+user[\'LastName\']}}</strong>\n                  <span style="font-size: 12px !important;" (click)="editUser(user)">\n                    <ion-icon name="create"></ion-icon>\n                  </span>\n                  <span style="float:right !important;color:#700000 !important;" (click)="deleteUser(user)">\n                    <ion-icon name="trash" mode=\'ios\'></ion-icon>\n                  </span>\n                </p>\n                <p class="subtitle-1">\n                  <ion-icon name="pin"></ion-icon> {{user[\'Address1\'] +\' \'+user[\'Address2\']}}\n                </p>\n                <p class="subtitle-2">\n                  <ion-icon name="phone-portrait"></ion-icon> <a href="tel:{{user[\'Mobile\']}}"\n                    style="text-decoration: none !important;">{{user[\'Mobile\']}}</a>\n                  <span> &nbsp;&nbsp;\n                    <ion-icon name="mail"></ion-icon> <a href="mailto:{{user[\'Email\']}}"\n                      style="text-decoration: none !important;">{{user[\'Email\']}}</a></span>\n                </p>\n                <p>\n                  <ion-badge color="dark">{{user[\'GroupName\']}}</ion-badge>\n                  <ion-badge color="success">{{user[\'UserTypeName\']}}</ion-badge>\n                </p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-list>\n\n    </div>\n\n    <p *ngSwitchCase="\'usertypes\'">\n      \n      <ion-item *ngFor="let userType of userTypes">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-2 >\n              <p style="font-size: 10px !important; padding-top:13px !important;border: dodgerblue 2px solid; width:40px !important; height:40px !important; border-radius: 50% !important; background-color: #ddd !important; color: #999 !important;font-weight: 600 !important; text-align: center !important;">{{userType[\'UserTypeAlias\']}}</p>\n            </ion-col>\n            <ion-col col-9 style="margin-top:10px !important;color: dodgerblue !important; font-size: 20px !important; font-weight: 600 !important;">\n              {{userType[\'UserTypeName\']}}\n            </ion-col>\n            <ion-col col-1 style="margin-top:10px !important; color: #919191 !important;" (click)="editUserType(userType)">\n              <ion-icon name="create"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n\n    </p>\n\n\n    <p *ngSwitchCase="\'activities\'" style="margin-top: 28px !important;">\n      <ion-row>\n        <ion-col *ngFor="let activity of activities">\n          <ion-card>\n            <img [src]="activity[\'ProjectTypeImage\']" style="height: 30px !important;\n            width: 30px !important;\n            position: absolute;\n            top: -5px !important;\n            left: -11px !important;\n            border: 2px dodgerblue solid;\n            border-radius: 50%;"/>\n            <span>\n              <ion-badge  *ngIf="activity[\'PhaseName\'] == \'Production\'" style="font-size : 8px !important;">{{activity[\'PhaseName\']}}</ion-badge>\n              <ion-badge color="dark" *ngIf="activity[\'PhaseName\'] == \'Pre Production\'" style="font-size : 8px !important;">{{activity[\'PhaseName\']}}</ion-badge>\n              <ion-badge color="success" *ngIf="activity[\'PhaseName\'] == \'Post Production\'" style="font-size : 8px !important;">{{activity[\'PhaseName\']}}</ion-badge>\n              <ion-badge color="danger" *ngIf="activity[\'PhaseName\'] == \'Analysis\'" style="font-size : 8px !important;">{{activity[\'PhaseName\']}}</ion-badge>\n\n              <ion-badge color="light" style="font-size : 8px !important;">{{activity[\'ProjectTypeName\']}}</ion-badge></span>\n\n            <ion-card-header>{{activity[\'ActivityName\']}} <button ion-button clear style="float: right !important; padding-top: 0px !important; padding-right:0px !important; margin-top: 0px !important;margin-right:0px !important;padding-bottom: 0px !important;margin-bottom: 0px !important;\n                height: 20px !important;" (click)="editActivity(activity)">\n                <ion-icon name="create" style="font-size: 12px !important;"></ion-icon>\n              </button></ion-card-header>\n            <ion-card-content>\n              <p style="text-align: justify !important;font-size: 12px !important; color: #888 !important;padding: 5px !important;height:43px !important">\n                {{activity[\'ActivityDescription\']}}\n              </p>\n              <ion-grid>\n                <ion-row>\n                  <ion-col col-3 style="text-align: center !important;">\n                    <p><img src="../../assets/imgs/trophy.svg" style="width: 15px !important;" /></p>\n                    <p>{{activity[\'CoinRewardQuantity\']}}</p>\n                  </ion-col>\n                  <ion-col col-3 style="text-align: center !important;">\n                    <p><img src="../../assets/imgs/diamond.svg" style="width: 15px !important;" /></p>\n                    <p>{{activity[\'DiamondRewardQuantity\']}}</p>\n                  </ion-col>\n                  <ion-col col-3 style="text-align: center !important;">\n                    <p><img src="../../assets/imgs/coin.png" style="width: 15px !important;" /></p>\n                    <p>{{activity[\'CouponRewardQuantity\']}}</p>\n                  </ion-col>\n                  <ion-col col-3 style="text-align: center !important;">\n                    <p><img src="../../assets/imgs/coupon.png" style="width: 15px !important;" /></p>\n                    <p>{{activity[\'TrophyRewardQuantity\']}}</p>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    \n    </p>\n\n\n\n    <p *ngSwitchCase="\'materials\'">\n\n      <ion-item *ngFor="let material of materials" >\n        <ion-grid>\n          <ion-row>\n            <ion-col style="float: right !important;"><ion-badge>{{material[\'MaterialName\']}}</ion-badge></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col><h2 style="font-weight: 600 !important;">{{material[\'MaterialMake\']}}</h2></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col><h3 style="color: dodgerblue !important;">{{material[\'MaterialModel\']}}</h3></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6><h6 style="white-space: normal !important; color: #919191 !important;">{{material[\'MaterialDescription\']}}</h6></ion-col>\n            <ion-col style="padding:0px !important;" col-4>\n              <ion-badge color="light">Total Quantity : {{material[\'OpeningQuantity\']}}</ion-badge>\n            </ion-col>\n            <ion-col style="padding:0px !important;" col-2>\n              <ion-badge color="dark">Left : {{material[\'MaterialQuantity\']}} </ion-badge>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n\n    </p>\n  </div>\n\n</ion-content>\n<!--Body ends here-->\n\n<!--Footer starts here-->\n<ion-footer style="background-color: #efefef; text-align: center;">\n  <button ion-button clear><img src="../../assets/imgs/menu_proyectos_off.png"\n      style="width: 15px !important;" /></button>\n  <button ion-button clear><img src="../../assets/imgs/menu_reconocimientos_off.png"\n      style="width: 15px !important;" /></button>\n  <button ion-button clear><img src="../../assets/imgs/menu_recompensas_off.png"\n      style="width: 15px !important;" /></button>\n  <button ion-button clear><img src="../../assets/imgs/menu_talentos_off.png"\n      style="width: 15px !important;" /></button>\n  <button ion-button clear><img src="../../assets/imgs/menu_colaboradores_off.png"\n      style="width: 15px !important;" /></button>\n  <button ion-button clear><img src="../../assets/imgs/menu_permisos_off.png"\n      style="width: 15px !important;" /></button>\n  <button ion-button clear (click)="navCtrl.setRoot(\'LeaveSelectionPage\')"> <img src="../../assets/imgs/menu_calendario_off.png"\n      style="width: 15px !important;" /></button>\n  <button ion-button clear><img src="../../assets/imgs/menu_configuracion_on.png"\n      style="width: 15px !important;" /></button>\n</ion-footer>\n<!--Footer ends here-->'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/general-settings/general-settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__Utils_Codes__["a" /* Codes */], __WEBPACK_IMPORTED_MODULE_2__Utils_DataValidation__["a" /* DataValidation */],
            __WEBPACK_IMPORTED_MODULE_1__providers_message_helper__["a" /* MessageHelper */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["AlertController"]])
    ], GeneralSettingsPage);
    return GeneralSettingsPage;
}());

//# sourceMappingURL=general-settings.js.map

/***/ })

});
//# sourceMappingURL=11.js.map