webpackJsonp([9],{

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialIssuePageModule", function() { return MaterialIssuePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_issue__ = __webpack_require__(480);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialIssuePageModule = /** @class */ (function () {
    function MaterialIssuePageModule() {
    }
    MaterialIssuePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__material_issue__["a" /* MaterialIssuePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__material_issue__["a" /* MaterialIssuePage */]),
            ],
        })
    ], MaterialIssuePageModule);
    return MaterialIssuePageModule;
}());

//# sourceMappingURL=material-issue.module.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialIssuePage; });
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







var MaterialIssuePage = /** @class */ (function () {
    function MaterialIssuePage(navCtrl, navParams, msgHelper, httpCall, codes, dataValidation, actionSheet, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.msgHelper = msgHelper;
        this.httpCall = httpCall;
        this.codes = codes;
        this.dataValidation = dataValidation;
        this.actionSheet = actionSheet;
        this.alertController = alertController;
        this.quantity = null;
        this.issueDate = null;
        this.refundDate = null;
        this.material = null;
        this.material = this.navParams.get('material');
    }
    MaterialIssuePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MaterialIssuePage');
    };
    MaterialIssuePage.prototype.issue = function () {
        var _this = this;
        var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));
        if (this.dataValidation.isEmptyJson(currentUserInfo)) {
            this.msgHelper.showToast('Could not fetch user id');
            return;
        }
        var loading = this.msgHelper.showWorkingDialog('Issue in progress ...');
        var requestData = {
            "MaterialRequisitionId": this.material['MaterialRequisitionId'],
            "IssueDate": this.issueDate,
            "IssueQuantity": this.quantity,
            "RefundDate": this.refundDate,
            "CreatedByID": currentUserInfo[0]['UserId'],
            "AppType": "W"
        };
        this.httpCall.callApi(requestData, this.codes.API_ISSUE_MATERIAL).then(function (responseJson) {
            loading.dismiss();
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog('Error !!!', 'Empty response received from the Server Issue Material API');
                return;
            }
            console.error(JSON.stringify(responseJson));
            if (responseJson['resMessage'] == 'Successfully Inserted') {
                _this.msgHelper.showToast('Issued !!!');
                _this.navCtrl.pop();
            }
        });
    };
    MaterialIssuePage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    MaterialIssuePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-material-issue',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/material-issue/material-issue.html"*/'<ion-content padding class="custom-popup">\n\n  <h1 style="color: wheat;">Issue Material</h1>\n\n\n  <ion-list style="text-align: center !important;">\n\n    <ion-item class="no-underline">\n      <ion-label color="primary">Quantity</ion-label>\n      <ion-input [(ngModel)]="quantity">\n      </ion-input>\n    </ion-item>\n    \n\n    <ion-item class="no-underline">\n      <ion-label color="primary">Issue Date</ion-label>\n      <ion-datetime [(ngModel)]="issueDate" picker-format="yyy-MM-dd">\n      </ion-datetime>\n    </ion-item>\n\n    <ion-item class="no-underline">\n      <ion-label color="primary">Refund Date</ion-label>\n      <ion-datetime [(ngModel)]="refundDate" picker-format="yyy-MM-dd">\n      </ion-datetime>\n    </ion-item>\n\n    <button ion-button clear (click)="issue()"> Issue Material &nbsp;<ion-icon name="create"></ion-icon> </button>\n\n    </ion-list>\n\n\n</ion-content>\n\n<ion-footer>\n  <button ion-button clear full (click)="closeModal()" color="light">\n    <ion-icon name="close-circle" color="white"></ion-icon>\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/material-issue/material-issue.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4__providers_message_helper__["a" /* MessageHelper */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_2__Utils_Codes__["a" /* Codes */], __WEBPACK_IMPORTED_MODULE_1__Utils_DataValidation__["a" /* DataValidation */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["ActionSheetController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["AlertController"]])
    ], MaterialIssuePage);
    return MaterialIssuePage;
}());

//# sourceMappingURL=material-issue.js.map

/***/ })

});
//# sourceMappingURL=9.js.map