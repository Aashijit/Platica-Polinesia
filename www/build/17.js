webpackJsonp([17],{

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditActivityPageModule", function() { return EditActivityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_activity__ = __webpack_require__(460);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditActivityPageModule = /** @class */ (function () {
    function EditActivityPageModule() {
    }
    EditActivityPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_activity__["a" /* EditActivityPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_activity__["a" /* EditActivityPage */]),
            ],
        })
    ], EditActivityPageModule);
    return EditActivityPageModule;
}());

//# sourceMappingURL=edit-activity.module.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditActivityPage; });
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







var EditActivityPage = /** @class */ (function () {
    function EditActivityPage(navCtrl, navParams, msgHelper, httpCall, codes, dataValidation, actionSheet, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.msgHelper = msgHelper;
        this.httpCall = httpCall;
        this.codes = codes;
        this.dataValidation = dataValidation;
        this.actionSheet = actionSheet;
        this.alertController = alertController;
        this.activityId = null;
        this.activityName = null;
        this.activityDescription = null;
        this.coinRewardQuantity = null;
        this.diamondRewardQuantity = null;
        this.couponRewardQuantity = null;
        this.trophyRewardQuantity = null;
        this.projectTypeId = null;
        this.phaseId = null;
        this.projectTypes = null;
        this.phases = null;
        this.activityId = this.navParams.get('activity')['ActivityId'];
        this.activityName = this.navParams.get('activity')['ActivityName'];
        this.activityDescription = this.navParams.get('activity')['ActivityDescription'];
        this.coinRewardQuantity = this.navParams.get('activity')['CoinRewardQuantity'];
        this.diamondRewardQuantity = this.navParams.get('activity')['DiamondRewardQuantity'];
        this.couponRewardQuantity = this.navParams.get('activity')['CouponRewardQuantity'];
        this.trophyRewardQuantity = this.navParams.get('activity')['TrophyRewardQuantity'];
        this.phaseId = this.navParams.get('activity')['PhaseId'];
        this.projectTypeId = this.navParams.get('activity')['ProjectTypeId'];
        this.projectTypes = JSON.parse(localStorage.getItem(this.codes.LSK_PROJECT_TYPE));
        this.phases = JSON.parse(localStorage.getItem(this.codes.LSK_PHASES));
    }
    EditActivityPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditActivityPage');
    };
    EditActivityPage.prototype.editActivity = function () {
        var _this = this;
        var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));
        if (this.dataValidation.isEmptyJson(currentUserInfo)) {
            this.msgHelper.showToast('Could not fetch user id');
            return;
        }
        var requestJson = {
            "ActivityId": this.activityId,
            "ActivityName": this.activityName,
            "ActivityDescription": this.activityDescription,
            "PhaseId": this.phaseId,
            "CoinRewardQuantity": Number(this.coinRewardQuantity),
            "DiamondRewardQuantity": Number(this.diamondRewardQuantity),
            "CouponRewardQuantity": Number(this.couponRewardQuantity),
            "TrophyRewardQuantity": Number(this.trophyRewardQuantity),
            "ModifiedByID": currentUserInfo[0]['UserId'],
            "AppType": "W",
            "ProjectTypeId": this.projectTypeId
        };
        var loading = this.msgHelper.showWorkingDialog('Updating Activity ...');
        this.httpCall.callApi(requestJson, this.codes.API_UPDATE_ACTIVITY).then(function (responseJson) {
            loading.dismiss();
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showAlert('Error !!', 'Empty response received');
                return;
            }
            if (responseJson['status'] != 1) {
                _this.msgHelper.showErrorDialog('Error !!!', responseJson['resMessage']);
                return;
            }
            _this.msgHelper.showToast('Updated activity !!!');
            _this.navCtrl.pop();
        });
    };
    EditActivityPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    EditActivityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-edit-activity',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/edit-activity/edit-activity.html"*/'<ion-content padding class="custom-popup">\n\n  <h1 style="color: wheat;">Update Activity</h1>\n\n  <ion-list style="text-align: center !important;">\n\n    \n  <ion-item class="no-underline">\n    <ion-label color="primary">Activity Name</ion-label>\n    <ion-input [(ngModel)]="activityName">\n    </ion-input>\n  </ion-item>\n\n  <ion-item class="no-underline">\n    <ion-label color="primary" stacked>Activity Description</ion-label>\n    <ion-textarea [(ngModel)]="activityDescription">\n    </ion-textarea>\n  </ion-item>\n\n  <ion-item class="no-underline">\n    <ion-label floating>Project Type</ion-label>\n    <ion-select [(ngModel)]="projectTypeId" interface="popover" [selectOptions]="{ mode: \'ios\' }">\n      <p *ngFor=\'let type of projectTypes\'>\n    <ion-option [value]="type[\'ProjectTypeId\']">{{type[\'ProjectTypeName\']}}</ion-option>\n    </p>\n    </ion-select>\n  </ion-item>\n\n  <ion-item class="no-underline">\n    <ion-label floating>Phase</ion-label>\n    <ion-select [(ngModel)]="phaseId" interface="popover" [selectOptions]="{ mode: \'ios\' }">\n      <p *ngFor=\'let type of phases\'>\n    <ion-option [value]="type[\'PhaseId\']">{{type[\'PhaseName\']}}</ion-option>\n    </p>\n    </ion-select>\n  </ion-item>\n\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">Coin Reward Quantity</ion-label>\n    <ion-input [(ngModel)]="coinRewardQuantity">\n    </ion-input>\n  </ion-item>\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">Diamond Reward Quantity</ion-label>\n    <ion-input [(ngModel)]="diamondRewardQuantity">\n    </ion-input>\n  </ion-item>\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">Coupon Reward Quantity</ion-label>\n    <ion-input [(ngModel)]="couponRewardQuantity">\n    </ion-input>\n  </ion-item>\n\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">Trophy Reward Quantity</ion-label>\n    <ion-input [(ngModel)]="trophyRewardQuantity">\n    </ion-input>\n  </ion-item>\n\n\n\n  <p style="text-align: center;">\n  <button ion-button clear class="capitalize" (click)="editActivity()">Update Activity &nbsp; &nbsp;<ion-icon name="create"></ion-icon></button>\n  </p>  \n\n\n\n</ion-list> \n\n\n<ion-footer>\n  <button ion-button clear full (click)="closeModal();" color="light">\n    <ion-icon name="close-circle" color="white"></ion-icon>\n  </button>\n</ion-footer>'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/edit-activity/edit-activity.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4__providers_message_helper__["a" /* MessageHelper */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_2__Utils_Codes__["a" /* Codes */], __WEBPACK_IMPORTED_MODULE_1__Utils_DataValidation__["a" /* DataValidation */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["ActionSheetController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["AlertController"]])
    ], EditActivityPage);
    return EditActivityPage;
}());

//# sourceMappingURL=edit-activity.js.map

/***/ })

});
//# sourceMappingURL=17.js.map