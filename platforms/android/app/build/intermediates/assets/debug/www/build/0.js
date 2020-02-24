webpackJsonp([0],{

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMessageNotificationListPageModule", function() { return UserMessageNotificationListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_message_notification_list__ = __webpack_require__(462);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserMessageNotificationListPageModule = /** @class */ (function () {
    function UserMessageNotificationListPageModule() {
    }
    UserMessageNotificationListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__user_message_notification_list__["a" /* UserMessageNotificationListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__user_message_notification_list__["a" /* UserMessageNotificationListPage */]),
                __WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar__["RoundProgressModule"]
            ],
        })
    ], UserMessageNotificationListPageModule);
    return UserMessageNotificationListPageModule;
}());

//# sourceMappingURL=user-message-notification-list.module.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMessageNotificationListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils_DataValidation__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_message_helper__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Utils_Codes__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserMessageNotificationListPage = /** @class */ (function () {
    function UserMessageNotificationListPage(navCtrl, navParams, codes, msgHelper, httpCall, dataValidation, actionSheet, alertController, camera) {
        //Get the  parameter from the local storage
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.codes = codes;
        this.msgHelper = msgHelper;
        this.httpCall = httpCall;
        this.dataValidation = dataValidation;
        this.actionSheet = actionSheet;
        this.alertController = alertController;
        this.camera = camera;
        this.userName = 'User';
        this.userInformation = null;
        this.showUserInformation = false;
        this.newPassword = null;
        this.profileImage = '../../assets/imgs/user.png';
        this.userInformation = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));
        console.error(this.userInformation[0]);
        this.userName = this.userInformation[0]['FirstName'];
    }
    UserMessageNotificationListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserMessageNotificationListPage');
    };
    UserMessageNotificationListPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    UserMessageNotificationListPage.prototype.showUserEditInformation = function () {
        //Show the contents of the user information -- Do it vice versa
        this.showUserInformation = !this.showUserInformation;
    };
    //Log Out function
    UserMessageNotificationListPage.prototype.logOut = function () {
        var _this = this;
        //Ask for permission from the user to log out
        var alert = this.alertController.create({
            title: 'Log Out',
            message: 'You will be logged out from this app.<strong>Are you sure?</strong>',
            buttons: [
                {
                    text: 'No',
                    role: 'no',
                    handler: function () {
                    }
                }, {
                    text: 'Yes',
                    handler: function () {
                        //Empty the local storage
                        localStorage.removeItem(_this.codes.LSK_USER_INFORMATION_JSON);
                        _this.navCtrl.setRoot('LoginPage');
                    }
                }
            ]
        });
        alert.present();
    };
    UserMessageNotificationListPage.prototype.updateUserInformation = function () {
        var _this = this;
        //Update the alerady present json to update the information
        var loading = this.msgHelper.showWorkingDialog('Updating your profile');
        var apiUpdateString = this.codes.API_UPDATE_USER +
            '?uid=' + this.userInformation[0]['UserId'] +
            '&ufname=' + this.removeNull(this.userInformation[0]['FirstName']) +
            '&umname=' + this.removeNull(this.userInformation[0]['MiddleName']) +
            '&ulname=' + this.removeNull(this.userInformation[0]['LastName']) +
            '&uadd1=' + this.removeNull(this.userInformation[0]['Address1']) +
            '&uadd2=' + this.removeNull(this.userInformation[0]['Address2']) +
            '&ucity=' + this.removeNull(this.userInformation[0]['City']) +
            '&ustate=' + this.removeNull(this.userInformation[0]['State']) +
            '&uzip=' + this.removeNull(this.userInformation[0]['Pincode']) +
            '&uactivestatus=true' +
            '&umodifybyid=' + this.removeNull(this.userInformation[0]['UserId']) +
            '&uparentbyid=0' +
            '&upwd=' + localStorage.getItem(this.codes.LSK_USER_PASSWORD) +
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
    UserMessageNotificationListPage.prototype.removeNull = function (variable) {
        if (variable == null || variable == undefined || variable == 0)
            return '';
        return variable;
    };
    UserMessageNotificationListPage.prototype.presentActionSheetToUpdateImage = function () {
        var _this = this;
        var actionSheet = this.actionSheet.create({
            title: 'Update your profile picture',
            buttons: [
                {
                    text: 'Capture an image',
                    role: 'camera',
                    icon: 'camera',
                    handler: function () {
                        var options = {
                            quality: 100,
                            sourceType: _this.camera.PictureSourceType.CAMERA,
                            destinationType: _this.camera.DestinationType.FILE_URI,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            // imageData is either a base64 encoded string or a file URI
                            // If it's base64 (DATA_URL):
                            var base64Image = 'data:image/jpeg;base64,' + imageData;
                            _this.profileImage = base64Image;
                        }, function (err) {
                            // Handle error
                        });
                    }
                },
                {
                    text: 'Select from gallery',
                    role: 'gallery',
                    icon: 'image',
                    handler: function () {
                        var options = {
                            quality: 100,
                            sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY,
                            destinationType: _this.camera.DestinationType.FILE_URI,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            // imageData is either a base64 encoded string or a file URI
                            // If it's base64 (DATA_URL):
                            var base64Image = 'data:image/jpeg;base64,' + imageData;
                            _this.profileImage = base64Image;
                        }, function (err) {
                            // Handle error
                        });
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
    UserMessageNotificationListPage.prototype.changePassword = function () {
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
                        //Call the delete user API
                        var requestJson = {
                            "UserId": _this.userInformation[0]['UserId'],
                            "OldPassword": localStorage.getItem(_this.codes.LSK_USER_PASSWORD),
                            "NewPassword": _this.newPassword,
                            "ModifiedById": _this.userInformation[0]['UserId'],
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
    UserMessageNotificationListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-user-message-notification-list',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/user-message-notification-list/user-message-notification-list.html"*/'<ion-header style="padding-top: 10px !important;">\n  <!--Header-->\n  <ion-row>\n    <ion-col col-10 style="text-align: right !important;">\n      <p style="color: white;" class="nomargin">\n        Welcome <strong (click)="showUserEditInformation()">{{userName}}</strong>\n      </p>\n      <p style="color: white;margin-top: 2px !important;" class="nomargin" (click)="logOut()">\n        Log Out <ion-icon name="log-out"></ion-icon>\n      </p>\n      <p style="color: white;margin-top: 2px !important;" class="nomargin" (click)="navCtrl.setRoot(\'HomePage\')">\n        Go Home <ion-icon name="home"></ion-icon>\n      </p>\n    </ion-col>\n    <ion-col col-2 (click)="presentActionSheetToUpdateImage()">\n      <img [src]="profileImage" class="camera-img-wrapper" />\n    </ion-col>\n  </ion-row>\n  <!--Header-->\n\n  \n</ion-header>\n\n\n<ion-content padding class="custom-popup">\n\n  <!--User information to be present here-->\n  <ion-list *ngIf=\'showUserInformation\'>\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">First Name</ion-label>\n    <ion-input [(ngModel)]="userInformation[0][\'FirstName\']">\n    </ion-input>\n  </ion-item>\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">Middle Name</ion-label>\n    <ion-input [(ngModel)]="userInformation[0][\'MiddleName\']">\n    </ion-input>\n  </ion-item>\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">Last Name</ion-label>\n    <ion-input [(ngModel)]="userInformation[0][\'LastName\']">\n    </ion-input>\n  </ion-item>\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">Address Line 1</ion-label>\n    <ion-input [(ngModel)]="userInformation[0][\'Address1\']">\n    </ion-input>\n  </ion-item>\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">Address Line 2</ion-label>\n    <ion-input [(ngModel)]="userInformation[0][\'Address2\']">\n    </ion-input>\n  </ion-item>\n\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">City</ion-label>\n    <ion-input [(ngModel)]="userInformation[0][\'City\']">\n    </ion-input>\n  </ion-item>\n\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">State</ion-label>\n    <ion-input [(ngModel)]="userInformation[0][\'State\']">\n    </ion-input>\n  </ion-item>\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">Zipcode</ion-label>\n    <ion-input [(ngModel)]="userInformation[0][\'Pincode\']">\n    </ion-input>\n  </ion-item>\n\n\n  <p style="text-align: center;">\n  <button ion-button clear class="capitalize" (click)="updateUserInformation()">Update Information &nbsp; &nbsp;<ion-icon name="create"></ion-icon></button>\n  </p>  \n\n\n\n</ion-list> \n\n\n<!--Change Password-->\n<p *ngIf=\'showUserInformation\' style="text-align: center;">\n<ion-label style="color: white !important; font-size: 20px !important;">Change Password</ion-label>\n\n\n<ion-item class="no-underline">\n  <ion-label color="primary" floating>New Password</ion-label>\n  <ion-input [(ngModel)]="newPassword">\n  </ion-input>\n</ion-item>\n\n<button ion-button clear (click)="changePassword()">Update Password &nbsp; &nbsp;<ion-icon name="create"></ion-icon></button>\n</p>\n  <!--User information to be present here-->\n\n  \n<!--Message, Notification number-->\n<ion-row class="list-underline" *ngIf=\'!showUserInformation\'>\n  <ion-col col-2 style="text-align: right;"> <img src="../../assets/imgs/profile_ballon1.png" style="width: 25px !important;" /> <span style="color: #fff;\n    position: absolute;\n    font-size: 11px !important;\n    top: 7px !important;\n    left: 27px !important;"></span></ion-col>\n  <ion-col col-2> <img src="../../assets/imgs/profile_ballon2.png" style="width: 25px !important;" /> <span style="color: #fff;\n    position: absolute;\n    font-size: 11px !important;\n    top: 9px !important;\n    left: 10px !important;"></span></ion-col>\n</ion-row>\n<!--Message, Notification number-->\n\n <ion-list style=" text-align: center !important;" *ngIf=\'!showUserInformation\'>\n  <img src=\'../../assets/imgs/no_message.svg\' style="width: 30% !important;margin-top: 40% !important;" />\n  <ion-label style="color: darksalmon !important;">No message/notifications</ion-label>\n </ion-list>\n\n\n</ion-content>\n\n\n<ion-footer>\n  <button ion-button clear full (click)="closeModal();" color="light">\n    <ion-icon name="close-circle" color="white"></ion-icon>\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/user-message-notification-list/user-message-notification-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_3__Utils_Codes__["a" /* Codes */],
            __WEBPACK_IMPORTED_MODULE_2__providers_message_helper__["a" /* MessageHelper */], __WEBPACK_IMPORTED_MODULE_5__providers_data_data__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1__Utils_DataValidation__["a" /* DataValidation */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["ActionSheetController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]])
    ], UserMessageNotificationListPage);
    return UserMessageNotificationListPage;
}());

//# sourceMappingURL=user-message-notification-list.js.map

/***/ })

});
//# sourceMappingURL=0.js.map