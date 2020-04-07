webpackJsonp([9],{

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialRefundPageModule", function() { return MaterialRefundPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_refund__ = __webpack_require__(481);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialRefundPageModule = /** @class */ (function () {
    function MaterialRefundPageModule() {
    }
    MaterialRefundPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__material_refund__["a" /* MaterialRefundPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__material_refund__["a" /* MaterialRefundPage */]),
            ],
        })
    ], MaterialRefundPageModule);
    return MaterialRefundPageModule;
}());

//# sourceMappingURL=material-refund.module.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialRefundPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils_DataValidation__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils_Codes__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_message_helper__ = __webpack_require__(342);
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







var MaterialRefundPage = /** @class */ (function () {
    function MaterialRefundPage(navCtrl, navParams, msgHelper, httpCall, codes, dataValidation, actionSheet, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.msgHelper = msgHelper;
        this.httpCall = httpCall;
        this.codes = codes;
        this.dataValidation = dataValidation;
        this.actionSheet = actionSheet;
        this.alertController = alertController;
        this.remarks = null;
        this.refundDate = null;
        this.quantity = null;
        this.material = null;
        this.material = this.navParams.get('material');
    }
    MaterialRefundPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MaterialRefundPage');
    };
    MaterialRefundPage.prototype.refund = function () {
        var _this = this;
        var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));
        if (this.dataValidation.isEmptyJson(currentUserInfo)) {
            this.msgHelper.showToast('Could not fetch user id');
            return;
        }
        var loading = this.msgHelper.showWorkingDialog('Issue refund in progress ...');
        var requestData = {
            "MaterialIssueRefundId": this.material['MaterialIssueRefundId'],
            "RefundQuantity": this.quantity,
            "RefundDate": this.refundDate,
            "CreatedByID": currentUserInfo[0]['UserId'],
            "Remarks": this.remarks,
            "AppType": "W"
        };
        this.httpCall.callApi(requestData, this.codes.API_REFUND_MATERIAL).then(function (responseJson) {
            loading.dismiss();
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog('Error !!!', 'Empty response received from the Server Refund Material API');
                return;
            }
            console.error(JSON.stringify(responseJson));
            if (responseJson['resMessage'] == 'Successfully Inserted') {
                _this.msgHelper.showToast('Refund !!!');
                _this.navCtrl.pop();
            }
        });
    };
    MaterialRefundPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    MaterialRefundPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-material-refund',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/material-refund/material-refund.html"*/'<ion-content padding class="custom-popup">\n\n  <h1 style="color: wheat;">Refund Material</h1>\n\n\n  <ion-list style="text-align: center !important;">\n\n    <ion-item class="no-underline">\n      <ion-label color="primary">Quantity</ion-label>\n      <ion-input [(ngModel)]="quantity">\n      </ion-input>\n    </ion-item>\n\n\n    <ion-item class="no-underline">\n      <ion-label color="primary">Remarks</ion-label>\n      <ion-input [(ngModel)]="remarks">\n      </ion-input>\n    </ion-item>\n    \n\n\n    <ion-item class="no-underline">\n      <ion-label color="primary">Refund Date</ion-label>\n      <ion-datetime [(ngModel)]="refundDate" picker-format="yyy-MM-dd">\n      </ion-datetime>\n    </ion-item>\n\n    <button ion-button clear (click)="refund()"> Refund Material &nbsp;<ion-icon name="create"></ion-icon> </button>\n\n    </ion-list>\n\n\n</ion-content>\n\n<ion-footer>\n  <button ion-button clear full (click)="closeModal()" color="light">\n    <ion-icon name="close-circle" color="white"></ion-icon>\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/material-refund/material-refund.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4__providers_message_helper__["a" /* MessageHelper */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_2__Utils_Codes__["a" /* Codes */], __WEBPACK_IMPORTED_MODULE_1__Utils_DataValidation__["a" /* DataValidation */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["ActionSheetController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["AlertController"]])
    ], MaterialRefundPage);
    return MaterialRefundPage;
}());

//# sourceMappingURL=material-refund.js.map

/***/ })

});
//# sourceMappingURL=9.js.map