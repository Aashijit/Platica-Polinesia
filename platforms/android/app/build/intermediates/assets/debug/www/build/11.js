webpackJsonp([11],{

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_password__ = __webpack_require__(451);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgotPasswordPageModule = /** @class */ (function () {
    function ForgotPasswordPageModule() {
    }
    ForgotPasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forgot_password__["a" /* ForgotPasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__forgot_password__["a" /* ForgotPasswordPage */]),
            ],
        })
    ], ForgotPasswordPageModule);
    return ForgotPasswordPageModule;
}());

//# sourceMappingURL=forgot-password.module.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils_Codes__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(342);
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






var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(navCtrl, navParams, dataValidation, msgHelper, httpCall, codes) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataValidation = dataValidation;
        this.msgHelper = msgHelper;
        this.httpCall = httpCall;
        this.codes = codes;
    }
    ForgotPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPasswordPage');
    };
    ForgotPasswordPage.prototype.getPassword = function () {
        var _this = this;
        if (!this.dataValidation.isValidEmailId(this.emailId)) {
            this.msgHelper.showToast('Email id looks invalid !!!');
            return;
        }
        var loading = this.msgHelper.showWorkingDialog('Sending you a mail ...');
        var requestJson = {
            "Email": this.emailId,
            "Mobile": "",
            "AppType": "W"
        };
        this.httpCall.callApi(requestJson, this.codes.API_FORGOT_PASSWORD).then(function (responseJson) {
            loading.dismiss();
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog('Error', 'Did not receive any response !!!');
                return;
            }
            if (responseJson['status'] == 1) {
                _this.msgHelper.showToast('Check your registered mail');
                _this.navCtrl.pop();
            }
        });
    };
    ForgotPasswordPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/forgot-password/forgot-password.html"*/'<ion-content padding class="custom-popup">\n\n  <ion-item style="margin-top: 10% !important;">\n    <ion-label color="primary" stacked>Email Id</ion-label>\n    <ion-input type="email" placeholder="Your registered email id" class="input-underline" [(ngModel)]="emailId">\n    </ion-input>\n  </ion-item>\n\n<p style="text-align: center;">\n  <button ion-button outline round (click)="getPassword()">Get Password&nbsp;<ion-icon name="key"></ion-icon></button>\n</p>\n\n</ion-content>\n\n\n\n<ion-footer>\n  <button ion-button clear full (click)="closeModal();" color="light">\n    <ion-icon name="close-circle" color="white"></ion-icon>\n  </button>\n</ion-footer>\n\n'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/forgot-password/forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__Utils_DataValidation__["a" /* DataValidation */], __WEBPACK_IMPORTED_MODULE_2__providers_message_helper__["a" /* MessageHelper */],
            __WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_0__Utils_Codes__["a" /* Codes */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ })

});
//# sourceMappingURL=11.js.map