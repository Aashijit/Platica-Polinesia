webpackJsonp([9],{

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_components_module__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_svg_round_progressbar__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_svg_round_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home__ = __webpack_require__(453);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_4__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_1_angular_svg_round_progressbar__["RoundProgressModule"],
                __WEBPACK_IMPORTED_MODULE_0__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, modalCtrl, httpCall, codes, dataValidation, msgHelper, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.httpCall = httpCall;
        this.codes = codes;
        this.dataValidation = dataValidation;
        this.msgHelper = msgHelper;
        this.alertController = alertController;
        this.loadingStatus = 'Getting the list of users';
        this.userList = null;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad HomePage');
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
                    _this.httpCall.callApi(requestJson, _this.codes.API_GET_USER_GROUP).then(function (usergroupjson) {
                        if (_this.dataValidation.isEmptyJson(usergroupjson)) {
                            _this.msgHelper.showErrorDialog('Error !!', 'Empty response received from server in Get User Group List API !!!');
                            return;
                        }
                        var userGroups = usergroupjson['resultData'];
                        console.error(userGroups);
                        for (var i = 0; i <= _this.userList.length - 1; i++) {
                            _this.userList[i]['UserTypeName'] = _this.getUserTypeName(listOfMappings, _this.userList[i]['UserId']);
                            _this.userList[i]['GroupName'] = _this.getUserGroupId(listOfMappings, _this.userList[i]['UserId'], userGroups);
                        }
                    });
                }
            });
        });
    };
    HomePage.prototype.getUserGroupId = function (resultData, userId, userGroup) {
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
    HomePage.prototype.getUserTypeName = function (resultData, userId) {
        for (var i = 0; i <= resultData.length - 1; i++) {
            if (resultData[i]['UserId'] == userId) {
                return resultData[i]['UserTypeName'];
            }
        }
        return null;
    };
    HomePage.prototype.goToUserMessages = function () {
        var userModal = this.modalCtrl.create('UserMessageNotificationListPage');
        userModal.present();
    };
    HomePage.prototype.goToProjectSelection = function () {
        var projectSelectionModal = this.modalCtrl.create('ProjectInformationPage');
        projectSelectionModal.present();
    };
    HomePage.prototype.editUser = function (user) {
        var userModal = this.modalCtrl.create('UpdateUserPage', { 'userinfo': user });
        userModal.present();
    };
    HomePage.prototype.deleteUser = function (user) {
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
    HomePage.prototype.addUser = function () {
        var userModal = this.modalCtrl.create('AddUserPage');
        userModal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/home/home.html"*/'<ion-header style="padding-left:10px !important; padding-right:10px !important">\n   <!--header starts here-->\n   <ion-row>\n    <ion-col class="nopadding mt-16" (click)="goToProjectSelection()">\n      <round-progress [current]="75" [max]="100" [radius]="20" [stroke]="7" [color]="\'#00ff00\'"></round-progress>\n      <img src="../../assets/imgs/icon_video.png" style="width: 26px !important;\n      position: absolute;\n      top: 7px !important;\n      left: 7px !important;" />\n    </ion-col>\n\n    <ion-col class="nopadding mt-20">\n      <star-provider [coins]="50" [stars]="20" [videos]="150"></star-provider>\n    </ion-col>\n\n    <ion-col class="nopadding">\n     <user-info [messageNumber]="0" [notificationNumber]="0" (click)="goToUserMessages()" style="position: absolute;top: 0px !important;right: 0px !important;"></user-info>      \n    </ion-col>\n\n  </ion-row>\n<!--header ends here-->\n</ion-header>\n\n<!--Body starts here-->\n<ion-content padding class="background-content mt-66" style="height: 80% !important; width: 95% !important; margin-left: 2.5% !important; text-align: center;">\n\n  \n\n\n</ion-content>\n<!--Body ends here-->\n\n<!--Footer starts here-->\n<ion-footer style="background-color: #efefef; text-align: center;">\n  <button ion-button clear><img src="../../assets/imgs/menu_proyectos_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear><img src="../../assets/imgs/menu_reconocimientos_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear><img src="../../assets/imgs/menu_recompensas_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear><img src="../../assets/imgs/menu_talentos_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear><img src="../../assets/imgs/menu_colaboradores_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear><img src="../../assets/imgs/menu_permisos_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear (click)="navCtrl.setRoot(\'LeaveSelectionPage\')"><img src="../../assets/imgs/menu_calendario_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear (click)="navCtrl.setRoot(\'GeneralSettingsPage\')"><img src="../../assets/imgs/menu_configuracion_off.png" style="width: 15px !important;"/></button>\n</ion-footer>\n<!--Footer ends here-->'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__Utils_Codes__["a" /* Codes */], __WEBPACK_IMPORTED_MODULE_2__Utils_DataValidation__["a" /* DataValidation */],
            __WEBPACK_IMPORTED_MODULE_1__providers_message_helper__["a" /* MessageHelper */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["AlertController"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=9.js.map