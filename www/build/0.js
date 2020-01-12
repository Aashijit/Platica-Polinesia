webpackJsonp([0],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_star_provider_star_provider__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_svg_round_progressbar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_svg_round_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_project_module_project_module__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_info_user_info__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home__ = __webpack_require__(288);
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
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_3__components_user_info_user_info__["a" /* UserInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_2__components_project_module_project_module__["a" /* ProjectModuleComponent */],
                __WEBPACK_IMPORTED_MODULE_0__components_star_provider_star_provider__["a" /* StarProviderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_1_angular_svg_round_progressbar__["RoundProgressModule"]
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarProviderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarProviderComponent = /** @class */ (function () {
    function StarProviderComponent() {
        this.coins = "10";
        this.stars = "20";
        this.videos = "45";
        console.log('Hello StarProviderComponent Component');
        this.text = 'Hello World';
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], StarProviderComponent.prototype, "coins", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], StarProviderComponent.prototype, "stars", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], StarProviderComponent.prototype, "videos", void 0);
    StarProviderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'star-provider',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/components/star-provider/star-provider.html"*/'<div class="background" *ngIf="coins != \'0\' && stars != \'0\' && videos != \'0\'">\n    <span>\n      <img src="../../assets/imgs/coin.png" style="width: 15px !important;  margin-left:2px !important"/> <sup style="font-size: 7px !important;">{{coins}}</sup>\n      <img src="../../assets/imgs/star.png" style="width: 15px !important;  margin-left:2px !important"/> <sup style="font-size: 7px !important; ">{{stars}}</sup>\n      <img src="../../assets/imgs/movie-symbol-of-video-camera.png" style="width: 15px !important; margin-left:2px !important"/> <sup style="font-size: 7px !important;">{{videos}}</sup>\n    </span>\n</div>\n'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/components/star-provider/star-provider.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], StarProviderComponent);
    return StarProviderComponent;
}());

//# sourceMappingURL=star-provider.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectModuleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectModuleComponent = /** @class */ (function () {
    function ProjectModuleComponent() {
        console.log('Hello ProjectModuleComponent Component');
        this.text = 'Hello World';
    }
    ProjectModuleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'project-module',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/components/project-module/project-module.html"*/'<div style="width: 200px !important;">\n  <span>\n  <round-progress [current]="50" [max]="100" [radius]="30" [stroke]="8"></round-progress>\n  <img src="../../assets/imgs/icon_video.png" style="    width: 30px !important;\n  height: 30px !important;\n  top: 125px !important;\n  position: absolute;\n  left: 31px !important;"\n  />\n  <span style="font-size: 8px !important;\n  position: absolute;\n  top: 117px !important;\n  left: 66px !important;\n  background: white;\n  border: 1px solid #ddd;\n  padding: 9px !important;\n  padding-left: 15px !important;\n  z-index: -1 !important;\n  border-radius: 14px !important;">\n    <p class="nomargin">Allejandro wants something</p>\n    <p class="nomargin">2019/12/21 - 2019/12/22</p>\n    <p class="nomargin">Owner : Allejandro</p>\n  </span>\n</span>\n</div>'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/components/project-module/project-module.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProjectModuleComponent);
    return ProjectModuleComponent;
}());

//# sourceMappingURL=project-module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent() {
        console.log('Hello UserInfoComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], UserInfoComponent.prototype, "messageNumber", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], UserInfoComponent.prototype, "notificationNumber", void 0);
    UserInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-info',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/components/user-info/user-info.html"*/'<div>\n\n  <span>\n    \n  <button ion-button clear ><img src="../../assets/imgs/profile_ballon1.png" class="noti-image-size"/>\n    <span style="position: absolute;\n    left: 13px !important;\n    font-size: 9px !important;\n    top: 13px !important;\n    color: white;" *ngIf=\'messageNumber != "0"\'>{{messageNumber}}</span>\n  </button>\n  <p style="margin-left: 26px !important; margin-top: -27px !important;">\n    <img src="../../assets/imgs/user.png" class="user-image-size" />\n  </p>\n  <p style="margin-top: -43px !important;margin-left: 8px !important;">\n  <button ion-button clear >\n    <img src="../../assets/imgs/profile_ballon2.png" class="noti-image-size"/>\n    <span style="position: absolute;\n    left: 13px !important;\n    top: 15px !important;\n    font-size: 8px !important;\n    color: white;" *ngIf=\'notificationNumber != "0"\'>{{notificationNumber}}</span>\n  </button>\n</p>\n  </span>\n  <!-- {{text}} -->\n</div>'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/components/user-info/user-info.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], UserInfoComponent);
    return UserInfoComponent;
}());

//# sourceMappingURL=user-info.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_message_helper__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils_DataValidation__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Utils_Codes__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(200);
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
            selector: 'page-home',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/home/home.html"*/'<ion-header style="padding-left:10px !important; padding-right:10px !important">\n   <!--header starts here-->\n   <ion-row>\n    <ion-col class="nopadding mt-16" (click)="goToProjectSelection()">\n      <round-progress [current]="75" [max]="100" [radius]="20" [stroke]="7" [color]="\'#00ff00\'"></round-progress>\n      <img src="../../assets/imgs/icon_video.png" style="width: 26px !important;\n      position: absolute;\n      top: 7px !important;\n      left: 7px !important;" />\n    </ion-col>\n\n    <ion-col class="nopadding mt-20">\n      <star-provider [coins]="0" [stars]="0" [videos]="0"></star-provider>\n    </ion-col>\n\n    <ion-col class="nopadding">\n     <user-info [messageNumber]="0" [notificationNumber]="0" (click)="goToUserMessages()" style="position: absolute;top: 0px !important;right: 0px !important;"></user-info>      \n    </ion-col>\n\n  </ion-row>\n<!--header ends here-->\n</ion-header>\n\n<!--Body starts here-->\n<ion-content padding class="background-content mt-66" style="height: 80% !important; width: 95% !important; margin-left: 2.5% !important; text-align: center;">\n\n  <p *ngIf=\'userList == null\'>\n  <ion-spinner name=\'ios\' style="margin-top: 40% !important;"></ion-spinner>\n  <ion-label style="color: #999 !important;" >{{loadingStatus}}</ion-label>\n  </p>  \n  <!--Break Gap-->\n  <p class="mt-10"></p>\n  <!--Break Gap-->\n  <ion-list *ngFor=\'let user of userList\' class="nomargin nopadding"> \n    <ion-item class="nopadding"> \n      <ion-grid>\n        <ion-row>\n          <ion-col col-2 style="margin-top: 6% !important;"> \n            <img src="../../assets/imgs/user.png" style="width: 40px !important; height: 40px !important;" /> \n          </ion-col>\n          <ion-col col-10 class="underline">\n          <p><strong style="color: dodgerblue !important;">{{user[\'FirstName\'] + \' \'+user[\'LastName\']}}</strong> <span style="font-size: 12px !important;" (click)="editUser(user)"><ion-icon name="create"></ion-icon></span>\n              <span style="float:right !important;color:#700000 !important;" (click)="deleteUser(user)"><ion-icon name="trash" mode=\'ios\'></ion-icon></span>\n              </p>\n            <p class="subtitle-1"><ion-icon name="pin"></ion-icon> {{user[\'Address1\'] +\' \'+user[\'Address2\']}}</p>\n            <p class="subtitle-2"><ion-icon name="phone-portrait"></ion-icon>  <a href="tel:{{user[\'Mobile\']}}" style="text-decoration: none !important;">{{user[\'Mobile\']}}</a>\n              <span> &nbsp;&nbsp;\n                <ion-icon name="mail"></ion-icon> <a href="mailto:{{user[\'Email\']}}" style="text-decoration: none !important;">{{user[\'Email\']}}</a></span>\n              \n              </p>\n            <p>\n              <ion-badge color="dark" >{{user[\'GroupName\']}}</ion-badge>\n              <ion-badge color="success" >{{user[\'UserTypeName\']}}</ion-badge>\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n  <ion-fab bottom right>\n  <button ion-fab (click)="addUser()"><ion-icon name="person-add"></ion-icon></button>\n</ion-fab>\n</ion-content>\n<!--Body ends here-->\n\n<!--Footer starts here-->\n<ion-footer style="background-color: #efefef; text-align: center;">\n  <button ion-button clear><img src="../../assets/imgs/menu_proyectos_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear><img src="../../assets/imgs/menu_reconocimientos_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear><img src="../../assets/imgs/menu_recompensas_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear><img src="../../assets/imgs/menu_talentos_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear><img src="../../assets/imgs/menu_colaboradores_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear><img src="../../assets/imgs/menu_permisos_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear><img src="../../assets/imgs/menu_calendario_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear><img src="../../assets/imgs/menu_configuracion_off.png" style="width: 15px !important;"/></button>\n</ion-footer>\n<!--Footer ends here-->'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__Utils_Codes__["a" /* Codes */], __WEBPACK_IMPORTED_MODULE_2__Utils_DataValidation__["a" /* DataValidation */],
            __WEBPACK_IMPORTED_MODULE_1__providers_message_helper__["a" /* MessageHelper */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=0.js.map