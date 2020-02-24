webpackJsonp([12],{

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBrandPageModule", function() { return EditBrandPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_brand__ = __webpack_require__(450);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditBrandPageModule = /** @class */ (function () {
    function EditBrandPageModule() {
    }
    EditBrandPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_brand__["a" /* EditBrandPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_brand__["a" /* EditBrandPage */]),
            ],
        })
    ], EditBrandPageModule);
    return EditBrandPageModule;
}());

//# sourceMappingURL=edit-brand.module.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBrandPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils_DataValidation__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils_Codes__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_message_helper__ = __webpack_require__(341);
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







var EditBrandPage = /** @class */ (function () {
    function EditBrandPage(navCtrl, navParams, msgHelper, httpCall, codes, dataValidation, actionSheet, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.msgHelper = msgHelper;
        this.httpCall = httpCall;
        this.codes = codes;
        this.dataValidation = dataValidation;
        this.actionSheet = actionSheet;
        this.alertController = alertController;
        this.brand = null;
        this.userList = null;
        this.brand = this.navParams.get('brand');
        this.userList = this.navParams.get('userList');
    }
    EditBrandPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditBrandPage');
    };
    EditBrandPage.prototype.updateBrand = function () {
        var _this = this;
        var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));
        if (this.dataValidation.isEmptyJson(currentUserInfo)) {
            this.msgHelper.showToast('Could not fetch user id');
            return;
        }
        var reqestApiString = "?brid=" + this.brand['BrandId'] +
            "&brdesc=" + this.brand['BrandDescription'] +
            "&brownerid=" + this.brand['BrandOwnerID'] +
            "&brmodifybyid=" + currentUserInfo[0]['UserId'] +
            "&AppType=W&updateWithImageStatus=N";
        var loading = this.msgHelper.showWorkingDialog('Updating Brand ...');
        this.httpCall.callApi('', this.codes.API_UPDATE_BRAND + reqestApiString).then(function (responseJson) {
            loading.dismiss();
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showAlert('Error !!', 'Empty response received');
                return;
            }
            if (responseJson['status'] == '1') {
                _this.msgHelper.showToast('Brand Updated !!!');
                _this.navCtrl.pop();
                return;
            }
        });
    };
    EditBrandPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    EditBrandPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-edit-brand',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/edit-brand/edit-brand.html"*/'<ion-content padding class="custom-popup">\n\n  <h1 style="color: wheat;">Brand</h1>\n\n  <!--User information to be present here-->\n  <ion-list style="text-align: center !important;"> \n\n    <p style="text-align: center;">\n      <img [src]="brand[\'BrandImagePath\']" class="camera-img-wrapper" />\n    </p> \n\n    \n  <ion-item class="no-underline">\n    <ion-label color="primary">Brand Name</ion-label>\n    <ion-input [(ngModel)]="brand[\'BrandName\']" [disabled]=true>\n    </ion-input>\n  </ion-item>\n\n  <ion-item class="no-underline">\n    <ion-label color="primary" floating>Brand Description</ion-label>\n    <ion-textarea [(ngModel)]="brand[\'BrandDescription\']">\n    </ion-textarea>\n  </ion-item>\n\n  \n\n\n  <ion-item class="no-underline">\n    <ion-label color="primary" floating>Brand Owner</ion-label>\n    <ion-select [(ngModel)]="brand[\'BrandOwnerID\']"  interface="popover" [selectOptions]="{ mode: \'ios\' }">\n      <p *ngFor=\'let user of userList\'>\n    <ion-option [value]="user[\'UserId\']">{{user[\'FirstName\']+\' \'+user[\'LastName\']}}</ion-option>\n    </p>\n    </ion-select>\n\n  </ion-item>\n\n\n  <p style="text-align: center;">\n  <button ion-button clear class="capitalize" (click)="updateBrand()">Update Brand &nbsp; &nbsp;<ion-icon name="create"></ion-icon></button>\n  </p>  \n\n\n\n</ion-list> \n\n\n<ion-footer>\n  <button ion-button clear full (click)="closeModal()" color="light">\n    <ion-icon name="close-circle" color="white"></ion-icon>\n  </button>\n</ion-footer>'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/edit-brand/edit-brand.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4__providers_message_helper__["a" /* MessageHelper */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_2__Utils_Codes__["a" /* Codes */], __WEBPACK_IMPORTED_MODULE_1__Utils_DataValidation__["a" /* DataValidation */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["ActionSheetController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["AlertController"]])
    ], EditBrandPage);
    return EditBrandPage;
}());

//# sourceMappingURL=edit-brand.js.map

/***/ })

});
//# sourceMappingURL=12.js.map