webpackJsonp([2],{

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBusinessUnitPageModule", function() { return UpdateBusinessUnitPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_business_unit__ = __webpack_require__(460);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UpdateBusinessUnitPageModule = /** @class */ (function () {
    function UpdateBusinessUnitPageModule() {
    }
    UpdateBusinessUnitPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__update_business_unit__["a" /* UpdateBusinessUnitPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__update_business_unit__["a" /* UpdateBusinessUnitPage */]),
            ],
        })
    ], UpdateBusinessUnitPageModule);
    return UpdateBusinessUnitPageModule;
}());

//# sourceMappingURL=update-business-unit.module.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateBusinessUnitPage; });
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







var UpdateBusinessUnitPage = /** @class */ (function () {
    function UpdateBusinessUnitPage(navCtrl, navParams, msgHelper, httpCall, codes, dataValidation, actionSheet, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.msgHelper = msgHelper;
        this.httpCall = httpCall;
        this.codes = codes;
        this.dataValidation = dataValidation;
        this.actionSheet = actionSheet;
        this.alertController = alertController;
        this.businessUnit = null;
        this.userList = null;
        this.businessUnit = this.navParams.get('businessUnit');
        this.userList = this.navParams.get('userList');
    }
    UpdateBusinessUnitPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdateBusinessUnitPage');
    };
    UpdateBusinessUnitPage.prototype.check = function (id) {
    };
    UpdateBusinessUnitPage.prototype.updateBusinessUnit = function () {
        var _this = this;
        var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));
        if (this.dataValidation.isEmptyJson(currentUserInfo)) {
            this.msgHelper.showToast('Could not fetch user id');
            return;
        }
        this.businessUnit['ModifiedByID'] =
            this.businessUnit['AppType'] = 'W';
        console.error(JSON.stringify(this.businessUnit));
        var loading = this.msgHelper.showWorkingDialog('Updating Business Unit ...');
        this.httpCall.callApi(this.businessUnit, this.codes.API_UPDATE_BUSINESS_UNIT).then(function (responseJson) {
            loading.dismiss();
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showAlert('Error !!', 'Empty response received');
                return;
            }
            if (responseJson['status'] == '1') {
                _this.msgHelper.showToast('Business Unit Updated !!!');
                _this.navCtrl.pop();
                return;
            }
        });
    };
    UpdateBusinessUnitPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    UpdateBusinessUnitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-update-business-unit',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/update-business-unit/update-business-unit.html"*/'<ion-content padding class="custom-popup">\n\n  <h1 style="color: wheat;">Business Unit</h1>\n\n  <!--User information to be present here-->\n  <ion-list style="text-align: center !important;">\n\n    \n  <ion-item class="no-underline">\n    <ion-label color="primary">Business Unit Name</ion-label>\n    <ion-input [(ngModel)]="businessUnit[\'BusinessUnitName\']">\n    </ion-input>\n  </ion-item>\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">Business Unit Alias</ion-label>\n    <ion-input [(ngModel)]="businessUnit[\'BusinessUnitAlias\']">\n    </ion-input>\n  </ion-item>\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">Phone</ion-label>\n    <ion-input [(ngModel)]="businessUnit[\'Phone\']">\n    </ion-input>\n  </ion-item>\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">Address Line 1</ion-label>\n    <ion-input [(ngModel)]="businessUnit[\'Address1\']">\n    </ion-input>\n  </ion-item>\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">Address Line 2</ion-label>\n    <ion-input [(ngModel)]="businessUnit[\'Address2\']">\n    </ion-input>\n  </ion-item>\n\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">City</ion-label>\n    <ion-input [(ngModel)]="businessUnit[\'City\']">\n    </ion-input>\n  </ion-item>\n\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">State</ion-label>\n    <ion-input [(ngModel)]="businessUnit[\'State\']">\n    </ion-input>\n  </ion-item>\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">Zipcode</ion-label>\n    <ion-input [(ngModel)]="businessUnit[\'Zip\']">\n    </ion-input>\n  </ion-item>\n\n\n\n  <ion-item class="no-underline">\n    <ion-label color="primary" floating>Business Owner</ion-label>\n    <ion-select [(ngModel)]="businessUnit[\'BusinessUnitOwnerID\']" (ionChange)="check(businessUnit[\'BusinessUnitOwnerID\'])" interface="popover" [selectOptions]="{ mode: \'ios\' }">\n      <p *ngFor=\'let user of userList\'>\n    <ion-option [value]="user[\'UserId\']">{{user[\'FirstName\']+\' \'+user[\'LastName\']}}</ion-option>\n    </p>\n    </ion-select>\n\n  </ion-item>\n\n\n  <p style="text-align: center;">\n  <button ion-button clear class="capitalize" (click)="updateBusinessUnit()">Update Business Unit &nbsp; &nbsp;<ion-icon name="create"></ion-icon></button>\n  </p>  \n\n\n\n</ion-list> \n\n\n<ion-footer>\n  <button ion-button clear full (click)="closeModal()" color="light">\n    <ion-icon name="close-circle" color="white"></ion-icon>\n  </button>\n</ion-footer>'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/update-business-unit/update-business-unit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4__providers_message_helper__["a" /* MessageHelper */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_2__Utils_Codes__["a" /* Codes */], __WEBPACK_IMPORTED_MODULE_1__Utils_DataValidation__["a" /* DataValidation */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["ActionSheetController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["AlertController"]])
    ], UpdateBusinessUnitPage);
    return UpdateBusinessUnitPage;
}());

//# sourceMappingURL=update-business-unit.js.map

/***/ })

});
//# sourceMappingURL=2.js.map