webpackJsonp([5],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSettingsPageModule", function() { return GeneralSettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_components_module__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_svg_round_progressbar__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_svg_round_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__general_settings__ = __webpack_require__(293);
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
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__general_settings__["a" /* GeneralSettingsPage */]),
                __WEBPACK_IMPORTED_MODULE_1_angular_svg_round_progressbar__["RoundProgressModule"],
                __WEBPACK_IMPORTED_MODULE_0__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], GeneralSettingsPageModule);
    return GeneralSettingsPageModule;
}());

//# sourceMappingURL=general-settings.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_message_helper__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils_DataValidation__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Utils_Codes__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(201);
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
        this.loadingStatus = 'Getting the list of users';
        this.userList = null;
        this.businessunitList = null;
        this.brandList = null;
        this.segment = 'users';
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
                        console.error(userGroups);
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
    };
    GeneralSettingsPage.prototype.addUser = function () {
        var userModal = this.modalCtrl.create('AddUserPage');
        userModal.present();
    };
    GeneralSettingsPage.prototype.editUser = function (user) {
        var userModal = this.modalCtrl.create('UpdateUserPage', { 'userinfo': user });
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
    GeneralSettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-general-settings',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/general-settings/general-settings.html"*/'<ion-header style="padding-left:10px !important; padding-right:10px !important">\n  <!--header starts here-->\n  <ion-row>\n    <ion-col class="nopadding mt-16" (click)="goToProjectSelection()">\n      <round-progress [current]="75" [max]="100" [radius]="20" [stroke]="7" [color]="\'#00ff00\'"></round-progress>\n      <img src="../../assets/imgs/icon_video.png" style="width: 26px !important;\n     position: absolute;\n     top: 7px !important;\n     left: 7px !important;" />\n    </ion-col>\n\n    <ion-col class="nopadding mt-20">\n      <star-provider [coins]="50" [stars]="20" [videos]="150"></star-provider>\n    </ion-col>\n\n    <ion-col class="nopadding">\n      <user-info [messageNumber]="10" [notificationNumber]="15" (click)="goToUserMessages()"\n        style="position: absolute;top: 0px !important;right: 0px !important;"></user-info>\n    </ion-col>\n\n  </ion-row>\n\n\n  <ion-segment [(ngModel)]="segment" mode="ios" style="margin-top: 13px !important; padding: 3% !important;">\n\n    <ion-segment-button value="businessunits">\n      Business Units\n    </ion-segment-button>\n    <ion-segment-button value="brands">\n      Brands\n    </ion-segment-button>\n    <ion-segment-button value="users">\n      Users\n    </ion-segment-button>\n\n  </ion-segment>\n\n\n  <!--header ends here-->\n</ion-header>\n\n<!--Body starts here-->\n<ion-content padding class="background-content mt-66"\n  style="height: 80% !important; width: 95% !important; margin-left: 2.5% !important; text-align: center;">\n\n  <p style=" margin-top: 10% !important;"></p>\n  <div [ngSwitch]="segment">\n    <p *ngSwitchCase="\'businessunits\'">\n      <ion-list *ngFor=\'let businessunit of businessunitList\' class="nomargin nopadding">\n        <ion-item class="nopadding">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-12 class="underline">\n                <p><strong style="color: dodgerblue !important;">{{businessunit[\'BusinessUnitName\']}}</strong> <span\n                    style="font-size: 12px !important;" (click)="editBusinessUnit(businessunit)">\n                    <ion-icon name="create"></ion-icon>\n                  </span>\n                  <!-- <span style="float:right !important;color:#700000 !important;" (click)="deleteUser(user)"><ion-icon name="trash" mode=\'ios\'></ion-icon></span> -->\n                </p>\n                <p class="subtitle-1">\n                  <ion-icon name="pin"></ion-icon>\n                  {{businessunit[\'Address1\'] +\' \'+businessunit[\'Address2\']}}\n                </p>\n                <p class="subtitle-2">\n                  <ion-icon name="phone-portrait"></ion-icon> <a href="tel:{{businessunit[\'Phone\']}}"\n                    style="text-decoration: none !important;">{{businessunit[\'Phone\']}}</a>\n                </p>\n                <p *ngIf="!dataValidation.isEmptyJson(businessunit[\'OwnerName\'])" style="font-size: 12px !important;">\n                  <ion-icon name="person"></ion-icon>&nbsp;{{businessunit[\'OwnerName\']}}\n                </p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-list>\n      <ion-fab bottom right>\n        <button ion-fab (click)="addBusinessUnit()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-fab>\n    </p>\n\n    <p *ngSwitchCase="\'brands\'">\n      <ion-list *ngFor=\'let brand of brandList\' class="nomargin nopadding">\n        <ion-item class="nopadding">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-2 style="margin-top: 2% !important;"> \n                <img [src]="brand[\'BrandImagePath\']" class="camera-img-wrapper" />\n              </ion-col>\n              <ion-col col-10 class="underline">\n                <p><strong style="color: dodgerblue !important;">{{brand[\'BrandName\']}}</strong> <span\n                    style="font-size: 12px !important;" (click)="editBrand(brand)">\n                    <ion-icon name="create"></ion-icon>\n                  </span>\n                  <!-- <span style="float:right !important;color:#700000 !important;" (click)="deleteUser(user)"><ion-icon name="trash" mode=\'ios\'></ion-icon></span> -->\n                </p>\n                <p class="subtitle-1">\n                  <ion-icon name="list-box"></ion-icon>\n                  {{brand[\'BrandDescription\']}}\n                </p>\n                <p *ngIf="!dataValidation.isEmptyJson(brand[\'OwnerName\'])" style="font-size: 12px !important;">\n                  <ion-icon name="person"></ion-icon>&nbsp;{{brand[\'OwnerName\']}}\n                </p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-list>\n      <ion-fab bottom right>\n        <button ion-fab (click)="addBrands()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-fab>\n    </p>\n\n\n    <!-- <p *ngSwitchCase="\'users\'"> -->\n      <div  *ngSwitchCase="\'users\'">\n      <p *ngIf=\'userList == null\'>\n        <ion-spinner name=\'ios\' style="margin-top: 40% !important;"></ion-spinner>\n        <ion-label style="color: #999 !important;">{{loadingStatus}}</ion-label>\n      </p>\n      <!--Break Gap-->\n      <p class="mt-10"></p>\n      <!--Break Gap-->\n      <ion-list *ngFor=\'let user of userList\' class="nomargin nopadding">\n        <ion-item class="nopadding">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-2 style="margin-top: 2% !important;"> \n                <img [src]="user[\'UserImagePath\']" class="camera-img-wrapper" />\n              </ion-col>\n              <ion-col col-10 class="underline">\n                <p><strong style="color: dodgerblue !important;">{{user[\'FirstName\'] + \' \'+user[\'LastName\']}}</strong>\n                  <span style="font-size: 12px !important;" (click)="editUser(user)">\n                    <ion-icon name="create"></ion-icon>\n                  </span>\n                  <span style="float:right !important;color:#700000 !important;" (click)="deleteUser(user)">\n                    <ion-icon name="trash" mode=\'ios\'></ion-icon>\n                  </span>\n                </p>\n                <p class="subtitle-1">\n                  <ion-icon name="pin"></ion-icon> {{user[\'Address1\'] +\' \'+user[\'Address2\']}}\n                </p>\n                <p class="subtitle-2">\n                  <ion-icon name="phone-portrait"></ion-icon> <a href="tel:{{user[\'Mobile\']}}"\n                    style="text-decoration: none !important;">{{user[\'Mobile\']}}</a>\n                  <span> &nbsp;&nbsp;\n                    <ion-icon name="mail"></ion-icon> <a href="mailto:{{user[\'Email\']}}"\n                      style="text-decoration: none !important;">{{user[\'Email\']}}</a></span>\n                </p>\n                <p>\n                  <ion-badge color="dark">{{user[\'GroupName\']}}</ion-badge>\n                  <ion-badge color="success">{{user[\'UserTypeName\']}}</ion-badge>\n                </p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-list>\n      <ion-fab bottom right>\n        <button ion-fab (click)="addUser()">\n          <ion-icon name="person-add"></ion-icon>\n        </button>\n      </ion-fab>\n    </div>\n  </div>\n\n</ion-content>\n<!--Body ends here-->\n\n<!--Footer starts here-->\n<ion-footer style="background-color: #efefef; text-align: center;">\n  <button ion-button clear><img src="../../assets/imgs/menu_proyectos_off.png"\n      style="width: 15px !important;" /></button>\n  <button ion-button clear><img src="../../assets/imgs/menu_reconocimientos_off.png"\n      style="width: 15px !important;" /></button>\n  <button ion-button clear><img src="../../assets/imgs/menu_recompensas_off.png"\n      style="width: 15px !important;" /></button>\n  <button ion-button clear><img src="../../assets/imgs/menu_talentos_off.png"\n      style="width: 15px !important;" /></button>\n  <button ion-button clear><img src="../../assets/imgs/menu_colaboradores_off.png"\n      style="width: 15px !important;" /></button>\n  <button ion-button clear><img src="../../assets/imgs/menu_permisos_off.png"\n      style="width: 15px !important;" /></button>\n  <button ion-button clear><img src="../../assets/imgs/menu_calendario_off.png"\n      style="width: 15px !important;" /></button>\n  <button ion-button clear><img src="../../assets/imgs/menu_configuracion_on.png"\n      style="width: 15px !important;" /></button>\n</ion-footer>\n<!--Footer ends here-->'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/general-settings/general-settings.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* HttpProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* HttpProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__Utils_Codes__["a" /* Codes */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Utils_Codes__["a" /* Codes */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__Utils_DataValidation__["a" /* DataValidation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Utils_DataValidation__["a" /* DataValidation */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__providers_message_helper__["a" /* MessageHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_message_helper__["a" /* MessageHelper */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */]) === "function" && _h || Object])
    ], GeneralSettingsPage);
    return GeneralSettingsPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=general-settings.js.map

/***/ })

});
//# sourceMappingURL=5.js.map