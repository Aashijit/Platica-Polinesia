webpackJsonp([3],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authenticationSent = false;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.verify = function () {
        this.navCtrl.setRoot('HomePage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/login/login.html"*/'<ion-content padding class="background">\n\n  <p class="image-middle-card nomargin">\n    \n  </p>\n  <ion-card id="content">\n    <ion-avatar id="user-info">\n      <img id="user-image" src="../../assets/imgs/user.png" />\n    </ion-avatar>\n    <!-- <ion-card-header class="primary-header">Authentication Gate</ion-card-header> -->\n    <ion-card-content>\n          <ion-item class="mt-10">\n            <ion-label color="primary" stacked>Phone Number</ion-label>\n            <ion-input type="tel" maxlength=10 placeholder="Your registered mobile number" class="input-underline">\n            </ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label color="primary" stacked>Email Id</ion-label>\n            <ion-input type="tel" maxlength=10 placeholder="Your registered email id" class="input-underline">\n            </ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label color="primary" stacked>Password</ion-label>\n            <ion-input type="password" placeholder="Your password" class="input-underline"></ion-input>\n          </ion-item>\n          <p style="text-align: right !important;" *ngIf=\'authenticationSent\'>\n            <ion-item>\n              <ion-label color="primary" stacked>Verification Code</ion-label>\n              <ion-input type="tel" maxlength=6 placeholder="Enter verfication code" class="input-underline"></ion-input>\n            </ion-item>\n            <ion-spinner name="dots"\n              style="z-index: 10 !important; bottom: 32px !important;margin-right: 10px !important;"></ion-spinner>\n          </p>\n        \n    </ion-card-content>\n    <p style="text-align: right !important; margin-right: 20px !important;">\n      <button ion-button clear *ngIf=\'!authenticationSent\'\n        (click)="authenticationSent = !authenticationSent">Login</button>\n      <button ion-button clear *ngIf=\'authenticationSent\' (click)="verify()">Verify</button>\n    </p>\n  </ion-card>\n\n\n  <p class="small-text mt-10">\n    Platica Polinesia\n  </p>\n</ion-content>'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=3.js.map