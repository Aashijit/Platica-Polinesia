webpackJsonp([20],{

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveLeaveCommentsPageModule", function() { return ApproveLeaveCommentsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__approve_leave_comments__ = __webpack_require__(461);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ApproveLeaveCommentsPageModule = /** @class */ (function () {
    function ApproveLeaveCommentsPageModule() {
    }
    ApproveLeaveCommentsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__approve_leave_comments__["a" /* ApproveLeaveCommentsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__approve_leave_comments__["a" /* ApproveLeaveCommentsPage */]),
            ],
        })
    ], ApproveLeaveCommentsPageModule);
    return ApproveLeaveCommentsPageModule;
}());

//# sourceMappingURL=approve-leave-comments.module.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApproveLeaveCommentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils_DataValidation__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils_Codes__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_message_helper__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ApproveLeaveCommentsPage = /** @class */ (function () {
    function ApproveLeaveCommentsPage(navCtrl, navParams, modalCtrl, http, msgHelper, codes, dataValidation, datePipe, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.msgHelper = msgHelper;
        this.codes = codes;
        this.dataValidation = dataValidation;
        this.datePipe = datePipe;
        this.alert = alert;
        this.comment = null;
        this.approveTitle = null;
        this.leave = null;
    }
    ApproveLeaveCommentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ApproveLeaveCommentsPage');
        this.leave = this.navParams.get('Leave');
        if (this.leave['Status'] == 'R') {
            this.approveTitle = "Reject ";
        }
        else {
            this.approveTitle = "Approve ";
        }
    };
    ApproveLeaveCommentsPage.prototype.approveOrReject = function () {
        var _this = this;
        var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));
        if (this.dataValidation.isEmptyJson(currentUserInfo)) {
            this.msgHelper.showToast('Could not fetch user id');
            return;
        }
        var requestJson = {
            "LeaveBalanceId": this.leave['LeaveBalanceId'],
            "LeaveStatus": this.leave['Status'],
            "ApprovedOrRejectedById": currentUserInfo[0]['UserId'],
            "ApprovedOrRejectedLeaveComments": this.comment,
            "AppType": "W"
        };
        console.error(requestJson);
        this.http.callApi(requestJson, this.codes.API_APPROVE_LEAVE).then(function (responseJson) {
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog('Error !!!', 'Empty response received from Get Leave Type API');
                return;
            }
            if (responseJson['status'] == 1) {
                _this.msgHelper.showToast('Leave have been approved !!!');
                _this.navCtrl.pop();
                return;
            }
        });
    };
    ApproveLeaveCommentsPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    ApproveLeaveCommentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-approve-leave-comments',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/approve-leave-comments/approve-leave-comments.html"*/'<ion-content padding class="custom-popup">\n\n  <ion-card>\n    <ion-card-header>{{approveTitle}} this leave?</ion-card-header>\n    <ion-item>\n      <ion-label stacked>{{approveTitle}} comments</ion-label>\n      <ion-textarea rows=3 columns=12 [(ngModel)]="comment" style="color: #000 !important;">   \n      </ion-textarea>\n    </ion-item>\n\n  <p style="text-align: right !important;">\n  <span>\n    <button ion-button clear (click)="goBack()">No</button>\n    <button ion-button clear (click)="approveOrReject()">Yes</button>\n  </span>\n  </p>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/approve-leave-comments/approve-leave-comments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_message_helper__["a" /* MessageHelper */], __WEBPACK_IMPORTED_MODULE_1__Utils_Codes__["a" /* Codes */], __WEBPACK_IMPORTED_MODULE_0__Utils_DataValidation__["a" /* DataValidation */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["DatePipe"], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["AlertController"]])
    ], ApproveLeaveCommentsPage);
    return ApproveLeaveCommentsPage;
}());

//# sourceMappingURL=approve-leave-comments.js.map

/***/ })

});
//# sourceMappingURL=20.js.map