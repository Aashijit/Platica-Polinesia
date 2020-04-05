webpackJsonp([9],{

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialIssuePageModule", function() { return MaterialIssuePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_issue__ = __webpack_require__(478);
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

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialIssuePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
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
    function MaterialIssuePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.quantity = null;
        this.issueDate = null;
        this.refundDate = null;
    }
    MaterialIssuePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MaterialIssuePage');
    };
    MaterialIssuePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-material-issue',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/material-issue/material-issue.html"*/'<ion-content padding class="custom-popup">\n\n  <h1 style="color: wheat;">Issue Material</h1>\n\n\n  <ion-list style="text-align: center !important;">\n\n    <ion-item class="no-underline">\n      <ion-label color="primary">Quantity</ion-label>\n      <ion-input [(ngModel)]="quantity">\n      </ion-input>\n    </ion-item>\n    \n\n    <ion-item class="no-underline">\n      <ion-label color="primary">Issue Date</ion-label>\n      <ion-datetime [(ngModel)]="issueDate" picker-format="yyy-MM-dd">\n      </ion-datetime>\n    </ion-item>\n\n    <ion-item class="no-underline">\n      <ion-label color="primary">Refund Date</ion-label>\n      <ion-datetime [(ngModel)]="refundDate" picker-format="yyy-MM-dd">\n      </ion-datetime>\n    </ion-item>\n\n    <button ion-button clear (click)="issue()"> Issue Material &nbsp;<ion-icon name="create"></ion-icon> </button>\n\n    </ion-list>\n\n\n</ion-content>\n\n<ion-footer>\n  <button ion-button clear full (click)="closeModal()" color="light">\n    <ion-icon name="close-circle" color="white"></ion-icon>\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/material-issue/material-issue.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], MaterialIssuePage);
    return MaterialIssuePage;
}());

//# sourceMappingURL=material-issue.js.map

/***/ })

});
//# sourceMappingURL=9.js.map