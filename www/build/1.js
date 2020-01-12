webpackJsonp([1],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMessageNotificationListPageModule", function() { return UserMessageNotificationListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_message_notification_list__ = __webpack_require__(288);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__user_message_notification_list__["a" /* UserMessageNotificationListPage */]),
                __WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar__["RoundProgressModule"]
            ],
        })
    ], UserMessageNotificationListPageModule);
    return UserMessageNotificationListPageModule;
}());

//# sourceMappingURL=user-message-notification-list.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMessageNotificationListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils_DataValidation__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_message_helper__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils_Codes__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data__ = __webpack_require__(200);
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
    function UserMessageNotificationListPage(navCtrl, navParams, codes, msgHelper, httpCall, dataValidation, actionSheet) {
        //Get the  parameter from the local storage
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.codes = codes;
        this.msgHelper = msgHelper;
        this.httpCall = httpCall;
        this.dataValidation = dataValidation;
        this.actionSheet = actionSheet;
        this.userName = 'User';
        this.userInformation = null;
        this.showUserInformation = false;
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
        //Empty the local storage
        this.navCtrl.setRoot('LoginPage');
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
    UserMessageNotificationListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-user-message-notification-list',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/user-message-notification-list/user-message-notification-list.html"*/'<ion-header style="padding-top: 10px !important;">\n  <!--Header-->\n  <ion-row>\n    <ion-col col-10 style="text-align: right !important;">\n      <p style="color: white;" class="nomargin">\n        Welcome <strong (click)="showUserEditInformation()">{{userName}}</strong>\n      </p>\n      <p style="color: white;" class="nomargin" (click)="logOut()">\n        Log Out <ion-icon name="log-out"></ion-icon>\n      </p>\n    </ion-col>\n    <ion-col col-2 (click)="presentActionSheetToUpdateImage()">\n      <img src="../../assets/imgs/user.png" style="width: 35px !important; height: 35px !important;" />\n    </ion-col>\n  </ion-row>\n  <!--Header-->\n\n  \n</ion-header>\n\n\n<ion-content padding class="custom-popup">\n\n  <!--User information to be present here-->\n  <ion-list *ngIf=\'showUserInformation\'>\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">First Name</ion-label>\n    <ion-input [(ngModel)]="userInformation[0][\'FirstName\']">\n    </ion-input>\n  </ion-item>\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">Middle Name</ion-label>\n    <ion-input [(ngModel)]="userInformation[0][\'MiddleName\']">\n    </ion-input>\n  </ion-item>\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">Last Name</ion-label>\n    <ion-input [(ngModel)]="userInformation[0][\'LastName\']">\n    </ion-input>\n  </ion-item>\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">Address Line 1</ion-label>\n    <ion-input [(ngModel)]="userInformation[0][\'Address1\']">\n    </ion-input>\n  </ion-item>\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">Address Line 2</ion-label>\n    <ion-input [(ngModel)]="userInformation[0][\'Address2\']">\n    </ion-input>\n  </ion-item>\n\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">City</ion-label>\n    <ion-input [(ngModel)]="userInformation[0][\'City\']">\n    </ion-input>\n  </ion-item>\n\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">State</ion-label>\n    <ion-input [(ngModel)]="userInformation[0][\'State\']">\n    </ion-input>\n  </ion-item>\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">Zipcode</ion-label>\n    <ion-input [(ngModel)]="userInformation[0][\'Pincode\']">\n    </ion-input>\n  </ion-item>\n\n\n  <p style="text-align: center;">\n  <button ion-button clear class="capitalize" (click)="updateUserInformation()">Update Information &nbsp; &nbsp;<ion-icon name="create"></ion-icon></button>\n  </p>  \n\n\n\n</ion-list> \n\n\n  <!--User information to be present here-->\n\n  \n<!--Message, Notification number-->\n<ion-row class="list-underline" *ngIf=\'!showUserInformation\'>\n  <ion-col col-2 style="text-align: right;"> <img src="../../assets/imgs/profile_ballon1.png" style="width: 25px !important;" /> <span style="color: #fff;\n    position: absolute;\n    font-size: 11px !important;\n    top: 7px !important;\n    left: 27px !important;"></span></ion-col>\n  <ion-col col-2> <img src="../../assets/imgs/profile_ballon2.png" style="width: 25px !important;" /> <span style="color: #fff;\n    position: absolute;\n    font-size: 11px !important;\n    top: 9px !important;\n    left: 10px !important;"></span></ion-col>\n</ion-row>\n<!--Message, Notification number-->\n\n <ion-list style=" text-align: center !important;" *ngIf=\'!showUserInformation\'>\n  <img src=\'../../assets/imgs/no_message.svg\' style="width: 30% !important;margin-top: 40% !important;" />\n  <ion-label style="color: darksalmon !important;">No message/notifications</ion-label>\n </ion-list>\n\n\n</ion-content>\n\n\n<ion-footer>\n  <button ion-button clear full (click)="closeModal();" color="light">\n    <ion-icon name="close-circle" color="white"></ion-icon>\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/user-message-notification-list/user-message-notification-list.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__Utils_Codes__["a" /* Codes */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Utils_Codes__["a" /* Codes */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__providers_message_helper__["a" /* MessageHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_message_helper__["a" /* MessageHelper */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__providers_data_data__["a" /* HttpProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_data_data__["a" /* HttpProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__Utils_DataValidation__["a" /* DataValidation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__Utils_DataValidation__["a" /* DataValidation */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* ActionSheetController */]) === "function" && _g || Object])
    ], UserMessageNotificationListPage);
    return UserMessageNotificationListPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=user-message-notification-list.js.map

/***/ })

});
//# sourceMappingURL=1.js.map