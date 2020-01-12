webpackJsonp([2],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserPageModule", function() { return UpdateUserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_user__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UpdateUserPageModule = /** @class */ (function () {
    function UpdateUserPageModule() {
    }
    UpdateUserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__update_user__["a" /* UpdateUserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__update_user__["a" /* UpdateUserPage */]),
            ],
        })
    ], UpdateUserPageModule);
    return UpdateUserPageModule;
}());

//# sourceMappingURL=update-user.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils_DataValidation__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils_Codes__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_message_helper__ = __webpack_require__(201);
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







var UpdateUserPage = /** @class */ (function () {
    function UpdateUserPage(navCtrl, navParams, msgHelper, httpCall, codes, dataValidation, actionSheet, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.msgHelper = msgHelper;
        this.httpCall = httpCall;
        this.codes = codes;
        this.dataValidation = dataValidation;
        this.actionSheet = actionSheet;
        this.alertController = alertController;
        this.userInformation = this.navParams.get(this.codes.LSK_USER_INFORMATION_JSON);
        console.error(this.userInformation);
    }
    UpdateUserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdateUserPage');
    };
    UpdateUserPage.prototype.updateUserInformation = function () {
        var _this = this;
        //Call the change password API
        var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));
        if (this.dataValidation.isEmptyJson(currentUserInfo)) {
            this.msgHelper.showToast('Could not fetch user id');
            return;
        }
        //Update the alerady present json to update the information
        var loading = this.msgHelper.showWorkingDialog('Updating your profile');
        var apiUpdateString = this.codes.API_UPDATE_USER +
            '?uid=' + this.userInformation['UserId'] +
            '&ufname=' + this.removeNull(this.userInformation['FirstName']) +
            '&umname=' + this.removeNull(this.userInformation['MiddleName']) +
            '&ulname=' + this.removeNull(this.userInformation['LastName']) +
            '&uadd1=' + this.removeNull(this.userInformation['Address1']) +
            '&uadd2=' + this.removeNull(this.userInformation['Address2']) +
            '&ucity=' + this.removeNull(this.userInformation['City']) +
            '&ustate=' + this.removeNull(this.userInformation['State']) +
            '&uzip=' + this.removeNull(this.userInformation['Pincode']) +
            '&uactivestatus=true' +
            '&umodifybyid=' + currentUserInfo[0]['UserId'] +
            '&uparentbyid=0' +
            '&AppType=W&updateWithImageStatus=N'; //TODO: Fix this
        this.httpCall.callApi('', apiUpdateString).then(function (responseJson) {
            //Dismiss the loader
            loading.dismiss();
            //Validate
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog('Error !!', 'Empty response received from server !!!');
                return;
            }
            if (responseJson['status'] == 1) {
                _this.msgHelper.showToast('Profile Information Updated !!!');
                localStorage.removeItem(_this.codes.LSK_USER_INFORMATION_JSON);
                localStorage.setItem(_this.codes.LSK_USER_INFORMATION_JSON, JSON.stringify(_this.userInformation));
            }
        });
    };
    UpdateUserPage.prototype.removeNull = function (variable) {
        if (variable == null || variable == undefined || variable == 0)
            return '';
        return variable;
    };
    UpdateUserPage.prototype.presentActionSheetToUpdateImage = function () {
        var actionSheet = this.actionSheet.create({
            title: 'Update your profile picture',
            buttons: [
                {
                    text: 'Capture an image',
                    role: 'camera',
                    icon: 'camera',
                    handler: function () {
                        //TODO
                    }
                },
                {
                    text: 'Select from gallery',
                    role: 'gallery',
                    icon: 'image',
                    handler: function () {
                        //TODO
                    }
                },
                {
                    text: 'Close',
                    role: 'close',
                    icon: 'close',
                    handler: function () {
                        actionSheet.dismiss();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    UpdateUserPage.prototype.changePassword = function () {
        var _this = this;
        var alert = this.alertController.create({
            title: 'Password to be changed',
            message: 'Please note down the password.',
            buttons: [
                {
                    text: 'No',
                    role: 'no',
                    handler: function () {
                    }
                }, {
                    text: 'Yes',
                    handler: function () {
                        //Validation
                        if (_this.dataValidation.isEmptyJson(_this.newPassword)) {
                            _this.msgHelper.showToast('Please enter a new password !!!');
                            return;
                        }
                        if (String(_this.newPassword).length >= 50) {
                            _this.msgHelper.showToast('Password cannot be more than 50 characters !!!');
                            return;
                        }
                        //Call the change password API
                        var currentUserInfo = JSON.parse(localStorage.getItem(_this.codes.LSK_USER_INFORMATION_JSON));
                        if (_this.dataValidation.isEmptyJson(currentUserInfo)) {
                            _this.msgHelper.showToast('Could not fetch user id');
                            return;
                        }
                        var requestJson = {
                            "UserId": _this.userInformation['UserId'],
                            "OldPassword": _this.oldPassword,
                            "NewPassword": _this.newPassword,
                            "ModifiedById": +currentUserInfo[0]['UserId'],
                            "AppType": "W"
                        };
                        var loading = _this.msgHelper.showWorkingDialog('Changing the password ...');
                        _this.httpCall.callApi(requestJson, _this.codes.API_CHANGE_USER_PASSWORD).then(function (responseJson) {
                            loading.dismiss();
                            if (_this.dataValidation.isEmptyJson(responseJson)) {
                                _this.msgHelper.showErrorDialog('Error !!', 'Empty response received from server  !!!');
                                return;
                            }
                            if (responseJson['status'] == 1) {
                                _this.msgHelper.showToast('Password changed successfully !!!');
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    UpdateUserPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    UpdateUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-update-user',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/update-user/update-user.html"*/'\n<ion-content padding class="custom-popup">\n\n  <!--User information to be present here-->\n  <ion-list style="text-align: center !important;">\n\n    <ion-col col-2 (click)="presentActionSheetToUpdateImage()">\n      <img src="../../assets/imgs/user.png" style="width: 55px !important; height: 55px !important;" />\n    </ion-col>\n    \n  <ion-item class="no-underline">\n    <ion-label color="primary">First Name</ion-label>\n    <ion-input [(ngModel)]="userInformation[\'FirstName\']">\n    </ion-input>\n  </ion-item>\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">Middle Name</ion-label>\n    <ion-input [(ngModel)]="userInformation[\'MiddleName\']">\n    </ion-input>\n  </ion-item>\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">Last Name</ion-label>\n    <ion-input [(ngModel)]="userInformation[\'LastName\']">\n    </ion-input>\n  </ion-item>\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">Address Line 1</ion-label>\n    <ion-input [(ngModel)]="userInformation[\'Address1\']">\n    </ion-input>\n  </ion-item>\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">Address Line 2</ion-label>\n    <ion-input [(ngModel)]="userInformation[\'Address2\']">\n    </ion-input>\n  </ion-item>\n\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">City</ion-label>\n    <ion-input [(ngModel)]="userInformation[\'City\']">\n    </ion-input>\n  </ion-item>\n\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">State</ion-label>\n    <ion-input [(ngModel)]="userInformation[\'State\']">\n    </ion-input>\n  </ion-item>\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">Zipcode</ion-label>\n    <ion-input [(ngModel)]="userInformation[\'Pincode\']">\n    </ion-input>\n  </ion-item>\n\n\n  <p style="text-align: center;">\n  <button ion-button clear class="capitalize" (click)="updateUserInformation()">Update Information &nbsp; &nbsp;<ion-icon name="create"></ion-icon></button>\n  </p>  \n\n\n\n</ion-list> \n\n\n<!--Change Password-->\n<p  style="text-align: center;">\n<ion-title color="light">Change Password</ion-title>\n\n\n<ion-item class="no-underline">\n  <ion-label color="primary" floating>Old Password</ion-label>\n  <ion-input [(ngModel)]="oldPassword">\n  </ion-input>\n</ion-item>\n\n<ion-item class="no-underline">\n  <ion-label color="primary" floating>New Password</ion-label>\n  <ion-input [(ngModel)]="newPassword">\n  </ion-input>\n</ion-item>\n\n<button ion-button clear (click)="changePassword()">Update Password &nbsp; &nbsp;<ion-icon name="create"></ion-icon></button>\n</p>\n  <!--User information to be present here-->\n\n\n\n</ion-content>\n\n\n<ion-footer>\n  <button ion-button clear full (click)="closeModal();" color="light">\n    <ion-icon name="close-circle" color="white"></ion-icon>\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/update-user/update-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_message_helper__["a" /* MessageHelper */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_2__Utils_Codes__["a" /* Codes */], __WEBPACK_IMPORTED_MODULE_1__Utils_DataValidation__["a" /* DataValidation */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */]])
    ], UpdateUserPage);
    return UpdateUserPage;
}());

//# sourceMappingURL=update-user.js.map

/***/ })

});
//# sourceMappingURL=2.js.map