webpackJsonp([18],{

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserTypePageModule", function() { return AddUserTypePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_user_type__ = __webpack_require__(456);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddUserTypePageModule = /** @class */ (function () {
    function AddUserTypePageModule() {
    }
    AddUserTypePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_user_type__["a" /* AddUserTypePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__add_user_type__["a" /* AddUserTypePage */]),
            ],
        })
    ], AddUserTypePageModule);
    return AddUserTypePageModule;
}());

//# sourceMappingURL=add-user-type.module.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserTypePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils_DataValidation__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_message_helper__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Utils_Codes__ = __webpack_require__(53);
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






var AddUserTypePage = /** @class */ (function () {
    function AddUserTypePage(navCtrl, navParams, httpCall, codes, dataValidation, msgHelper, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpCall = httpCall;
        this.codes = codes;
        this.dataValidation = dataValidation;
        this.msgHelper = msgHelper;
        this.alertController = alertController;
        this.userTypeName = null;
        this.userTypeAlias = null;
    }
    AddUserTypePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddUserTypePage');
    };
    AddUserTypePage.prototype.addUserType = function () {
        var _this = this;
        var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));
        if (this.dataValidation.isEmptyJson(currentUserInfo)) {
            this.msgHelper.showToast('Could not fetch user id');
            return;
        }
        //TODO: Generate the User type alias
        var requestJson = {
            "UserTypeName": this.userTypeName,
            "UserTypeAlias": this.userTypeAlias,
            "CreatedByID": currentUserInfo[0]['UserId'],
            "AppType": "W"
        };
        var loading = this.msgHelper.showWorkingDialog('Inserting user type ... ');
        loading.present();
        this.httpCall.callApi(requestJson, this.codes.API_INSERT_USER_TYPE).then(function (responseJson) {
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog('Error !!!', " Empty response received from insert user type API");
                return;
            }
            if (responseJson['status'] != 1) {
                _this.msgHelper.showErrorDialog('Error !!!', responseJson['resMessage']);
                return;
            }
            loading.dismiss();
            _this.msgHelper.showToast('User Type Inserted !!!');
            _this.navCtrl.pop();
        });
    };
    AddUserTypePage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    AddUserTypePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-add-user-type',template:/*ion-inline-start:"C:\Users\edot3\Documents\Platica-Polinesia\src\pages\add-user-type\add-user-type.html"*/'\n\n<ion-content padding class="custom-popup">\n\n  <ion-title style="color: whitesmoke;">Add User Type</ion-title>\n\n  <br/>\n\n  <br/>\n\n  <ion-item>\n\n    <ion-label floating> User type name</ion-label> \n\n    <ion-input [(ngModel)]="userTypeName"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating> User type alias</ion-label> \n\n    <ion-input [(ngModel)]="userTypeAlias"></ion-input>\n\n  </ion-item>\n\n\n\n  <button ion-button clear (click)="addUserType()">Add user type &nbsp;<ion-icon name="create"></ion-icon></button>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <button ion-button clear full (click)="closeModal();" color="light">\n\n    <ion-icon name="close-circle" color="white"></ion-icon>\n\n  </button>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\edot3\Documents\Platica-Polinesia\src\pages\add-user-type\add-user-type.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__Utils_Codes__["a" /* Codes */], __WEBPACK_IMPORTED_MODULE_0__Utils_DataValidation__["a" /* DataValidation */],
            __WEBPACK_IMPORTED_MODULE_1__providers_message_helper__["a" /* MessageHelper */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["AlertController"]])
    ], AddUserTypePage);
    return AddUserTypePage;
}());

//# sourceMappingURL=add-user-type.js.map

/***/ })

});
//# sourceMappingURL=18.js.map