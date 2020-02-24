webpackJsonp([6],{

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(455);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_data_data__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils_Codes__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_message_helper__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Utils_DataValidation__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, dataValidation, msgHelper, codes, httpCall, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataValidation = dataValidation;
        this.msgHelper = msgHelper;
        this.codes = codes;
        this.httpCall = httpCall;
        this.modalCtrl = modalCtrl;
        this.authenticationSent = false;
        this.emailId = "";
        this.mobileNumber = "";
        this.password = "";
        this.verificationCode = "";
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.verify = function () {
        if (!this.dataValidation.isEmptyJson(this.userInformation)) {
            this.navCtrl.push('HomePage', this.userInformation);
        }
        else {
            this.msgHelper.showToast('User information could not be fetched', false);
            return;
        }
    };
    LoginPage.prototype.login = function () {
        // if(this.emailId == 'aashijitM@gmail.com'){
        //   var permissions = [
        //     {
        //       "_MenuId":"1",
        //       "_CanView":"1",
        //     },
        //     {
        //       "_MenuId":"2",
        //       "_CanView":"1",
        //     },
        //     {
        //       "_MenuId":"3",
        //       "_CanView":"1",
        //     },
        //     {
        //       "_MenuId":"4",
        //       "_CanView":"1",
        //     },
        //     {
        //       "_MenuId":"5",
        //       "_CanView":"1",
        //     },
        //     {
        //       "_MenuId":"6",
        //       "_CanView":"1",
        //     },
        //     {
        //       "_MenuId":"7",
        //       "_CanView":"1",
        //     },
        //     {
        //       "_MenuId":"8",
        //       "_CanView":"1",
        //     },
        //     {
        //       "_MenuId":"9",
        //       "_CanView":"1",
        //     }
        //   ];
        //   this.navCtrl.setRoot('PermissionsHomeTempPage',{"Permissions":permissions});
        //   return;
        // }
        var _this = this;
        // if(this.emailId == 'bidyutr@gmail.com'){
        //   var permissionList = JSON.parse(localStorage.getItem('Permission'));
        //   permissions = [];
        //   for(let i=0;i<permissionList.length;i++){
        //     var permission = {
        //       "_MenuId":String(i+1),
        //       "_CanView":permissionList[i]['_CanView']
        //     };
        //     permissions[i] = permission;
        //   }
        // // var permissions = [
        //   //   {
        //   //     "_MenuId":"1",
        //   //     "_CanView":"0",
        //   //   },
        //   //   {
        //   //     "_MenuId":"2",
        //   //     "_CanView":"1",
        //   //   },
        //   //   {
        //   //     "_MenuId":"3",
        //   //     "_CanView":"1",
        //   //   },
        //   //   {
        //   //     "_MenuId":"4",
        //   //     "_CanView":"1",
        //   //   },
        //   //   {
        //   //     "_MenuId":"5",
        //   //     "_CanView":"0",
        //   //   },
        //   //   {
        //   //     "_MenuId":"6",
        //   //     "_CanView":"1",
        //   //   },
        //   //   {
        //   //     "_MenuId":"7",
        //   //     "_CanView":"1",
        //   //   },
        //   //   {
        //   //     "_MenuId":"8",
        //   //     "_CanView":"0",
        //   //   },
        //   //   {
        //   //     "_MenuId":"9",
        //   //     "_CanView":"1",
        //   //   }
        //   // ];
        //   this.navCtrl.setRoot('PermissionsHomeTempPage',{"Permissions":permissions});
        //   return;
        // }
        //Step 1 : Validate the mobile number TODO:
        // if (!this.dataValidation.isValidMobileNumber(this.mobileNumber)) {
        //   this.msgHelper.showToast(this.codes.EM_INVALID_MOBILE_NUMBER);
        //   return;
        // }
        //Step 2 : Validate the email id
        if (!this.dataValidation.isValidEmailId(this.emailId)) {
            this.msgHelper.showToast(this.codes.EM_INVALID_EMAILID);
            return;
        }
        //Step 3 : Validate the password
        if (this.dataValidation.isEmptyJson(this.password)) {
            this.msgHelper.showToast(this.codes.EM_INVALID_PASSWORD);
            return;
        }
        //Step 4 : Make the API call for logging in
        //Create the json
        var getLoginDetailsApiRequestJson = {
            "email": this.emailId,
            "password": this.password,
            "apptype": "W"
        };
        //start the loading controller
        var loading = this.msgHelper.showWorkingDialog("Sending verification message");
        //Call the API
        this.httpCall.callApi(getLoginDetailsApiRequestJson, this.codes.API_GET_LOGIN_DETAILS).then(function (getLoginDetailsApiResponseJson) {
            //Dismiss the loader
            loading.dismiss();
            //Validate
            if (_this.dataValidation.isEmptyJson(getLoginDetailsApiResponseJson)) {
                _this.msgHelper.showErrorDialog('Error !!', 'Empty response received from server !!!');
                return;
            }
            //Check for response
            if (getLoginDetailsApiResponseJson['status'] == 1) {
                _this.authenticationSent = true;
                if (_this.dataValidation.isEmptyJson(getLoginDetailsApiResponseJson['resultData'])) {
                    _this.msgHelper.showErrorDialog('Alert', 'No user information fetched !!!');
                    return;
                }
                _this.userInformation = getLoginDetailsApiResponseJson['resultData'];
                //Keep the user password 
                localStorage.setItem(_this.codes.LSK_USER_PASSWORD, _this.password);
                //Keep the user info in the user info key
                localStorage.setItem(_this.codes.LSK_USER_INFORMATION_JSON, JSON.stringify(_this.userInformation));
            }
            else {
                _this.msgHelper.showErrorDialog('Error !!!', getLoginDetailsApiResponseJson['resMessage']);
                return;
            }
        });
    };
    LoginPage.prototype.forgotPassword = function () {
        var userModal = this.modalCtrl.create('ForgotPasswordPage');
        userModal.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/login/login.html"*/'<ion-content padding class="background">\n\n  <p class="image-middle-card nomargin">\n    \n  </p>\n  <ion-card id="content">\n    <ion-avatar id="user-info">\n      <img id="user-image" src="../../assets/imgs/user.png" />\n    </ion-avatar>\n    <!-- <ion-card-header class="primary-header">Authentication Gate</ion-card-header> -->\n    <ion-card-content>\n          <!-- <ion-item class="mt-10">\n            <ion-label color="primary" stacked>Phone Number</ion-label>\n            <ion-input type="tel" maxlength=10 placeholder="Your registered mobile number" class="input-underline" [(ngModel)]="mobileNumber">\n            </ion-input>\n          </ion-item> -->\n\n          <ion-item>\n            <ion-label color="primary" stacked>Email Id</ion-label>\n            <ion-input type="email" placeholder="Your registered email id" class="input-underline" [(ngModel)]="emailId">\n            </ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label color="primary" stacked>Password</ion-label>\n            <ion-input type="password" placeholder="Your password" class="input-underline" [(ngModel)]="password"></ion-input>\n          </ion-item>\n          <p style="text-align: right !important;" *ngIf=\'authenticationSent\'>\n            <ion-item>\n              <ion-label color="primary" stacked>Verification Code</ion-label>\n              <ion-input type="tel" maxlength=6 placeholder="Enter verfication code" class="input-underline" [(ngModel)]="verificationCode"></ion-input>\n            </ion-item>            \n            <ion-spinner name="dots"\n              style="z-index: 10 !important; bottom: 32px !important;margin-right: 10px !important;"></ion-spinner>\n          </p>\n        \n    </ion-card-content>\n    <p style="text-align: right !important; margin-right: 20px !important;">\n      <button ion-button clear *ngIf=\'!authenticationSent\' (click)="login()">Login</button>\n      <button ion-button clear *ngIf=\'authenticationSent\' (click)="verify()">Verify</button>\n    </p>\n    <p style="font-size:10px !important">\n      <button ion-button clear (click)="forgotPassword()">Forgot Password?</button>\n    </p>\n  </ion-card>\n \n\n  <p class="small-text mt-10">\n    Platica Polinesia\n  </p>\n</ion-content>'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__Utils_DataValidation__["a" /* DataValidation */], __WEBPACK_IMPORTED_MODULE_2__providers_message_helper__["a" /* MessageHelper */], __WEBPACK_IMPORTED_MODULE_1__Utils_Codes__["a" /* Codes */],
            __WEBPACK_IMPORTED_MODULE_0__providers_data_data__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["ModalController"]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=6.js.map