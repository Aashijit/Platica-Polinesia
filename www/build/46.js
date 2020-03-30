webpackJsonp([46],{

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserTypePageModule", function() { return EditUserTypePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_user_type__ = __webpack_require__(468);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditUserTypePageModule = /** @class */ (function () {
    function EditUserTypePageModule() {
    }
    EditUserTypePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_user_type__["a" /* EditUserTypePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_user_type__["a" /* EditUserTypePage */]),
            ],
        })
    ], EditUserTypePageModule);
    return EditUserTypePageModule;
}());

//# sourceMappingURL=edit-user-type.module.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserTypePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils_DataValidation__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_message_helper__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Utils_Codes__ = __webpack_require__(43);
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






var EditUserTypePage = /** @class */ (function () {
    function EditUserTypePage(navCtrl, navParams, httpCall, codes, dataValidation, msgHelper, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpCall = httpCall;
        this.codes = codes;
        this.dataValidation = dataValidation;
        this.msgHelper = msgHelper;
        this.alertController = alertController;
        this.userTypeName = null;
        this.userTypeAlias = null;
        this.userTypeId = null;
        this.userTypeName = this.navParams.get('UserTypeName');
        this.userTypeAlias = this.navParams.get('UserTypeAlias');
        this.userTypeId = this.navParams.get('UserTypeId');
    }
    EditUserTypePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditUserTypePage');
    };
    EditUserTypePage.prototype.editUserType = function () {
        var _this = this;
        var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));
        if (this.dataValidation.isEmptyJson(currentUserInfo)) {
            this.msgHelper.showToast('Could not fetch user id');
            return;
        }
        //TODO: Generate the User type alias
        var requestJson = {
            "UserTypeId": this.userTypeId,
            "UserTypeName": this.userTypeName,
            "UserTypeAlias": this.userTypeAlias,
            "ModifiedByName": currentUserInfo[0]['UserId'],
            "AppType": "W"
        };
        var loading = this.msgHelper.showWorkingDialog('Updating user type ... ');
        loading.present();
        this.httpCall.callApi(requestJson, this.codes.API_UPDATE_USER_TYPE).then(function (responseJson) {
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog('Error !!!', " Empty response received from update user type API");
                return;
            }
            if (responseJson['status'] != 1) {
                _this.msgHelper.showErrorDialog('Error !!!', responseJson['resMessage']);
                return;
            }
            loading.dismiss();
            _this.msgHelper.showToast('User Type Updated !!!');
            _this.navCtrl.pop();
        });
    };
    EditUserTypePage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    EditUserTypePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-edit-user-type',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/edit-user-type/edit-user-type.html"*/'      \n  \n\n<ion-content padding class="custom-popup">\n  <h1 style="color: wheat;">Edit User Type</h1>\n  <br/>\n  <br/>\n  <ion-item>\n    <ion-label floating> User type name</ion-label> \n    <ion-input [(ngModel)]="userTypeName"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating> User type alias</ion-label> \n    <ion-input [(ngModel)]="userTypeAlias"></ion-input>\n  </ion-item>\n\n  <p style="text-align: center !important;">\n  <button ion-button clear (click)="editUserType()">Update user type &nbsp;<ion-icon name="create"></ion-icon></button>\n</p>\n</ion-content>\n\n<ion-footer>\n  <button ion-button clear full (click)="closeModal();" color="light">\n    <ion-icon name="close-circle" color="white"></ion-icon>\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/edit-user-type/edit-user-type.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__Utils_Codes__["a" /* Codes */], __WEBPACK_IMPORTED_MODULE_0__Utils_DataValidation__["a" /* DataValidation */],
            __WEBPACK_IMPORTED_MODULE_1__providers_message_helper__["a" /* MessageHelper */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["AlertController"]])
    ], EditUserTypePage);
    return EditUserTypePage;
}());

//# sourceMappingURL=edit-user-type.js.map

/***/ })

});
//# sourceMappingURL=46.js.map