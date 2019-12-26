webpackJsonp([1],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMessageNotificationListPageModule", function() { return UserMessageNotificationListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_message_notification_list__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserMessageNotificationListPageModule = /** @class */ (function () {
    function UserMessageNotificationListPageModule() {
    }
    UserMessageNotificationListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__user_message_notification_list__["a" /* UserMessageNotificationListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__user_message_notification_list__["a" /* UserMessageNotificationListPage */]),
                __WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar__["RoundProgressModule"]
            ],
        })
    ], UserMessageNotificationListPageModule);
    return UserMessageNotificationListPageModule;
}());

//# sourceMappingURL=user-message-notification-list.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMessageNotificationListPage; });
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


/**
 * Generated class for the UserMessageNotificationListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserMessageNotificationListPage = /** @class */ (function () {
    function UserMessageNotificationListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UserMessageNotificationListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserMessageNotificationListPage');
    };
    UserMessageNotificationListPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    UserMessageNotificationListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user-message-notification-list',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/user-message-notification-list/user-message-notification-list.html"*/'<ion-header style="padding-top: 10px !important;">\n  <!--Header-->\n  <ion-row>\n    <ion-col col-10 style="text-align: right !important;">\n      <p style="color: white;" class="nomargin">\n        Welcome <strong>Stella</strong>\n      </p>\n      <p style="color: white;" class="nomargin">\n        Log Out <ion-icon name="log-out"></ion-icon>\n      </p>\n    </ion-col>\n    <ion-col col-2>\n      <img src="../../assets/imgs/user.png" style="width: 35px !important; height: 35px !important;" />\n    </ion-col>\n  </ion-row>\n  <!--Header-->\n\n  \n</ion-header>\n\n\n<ion-content padding class="custom-popup">\n\n  \n<!--Message, Notification number-->\n<ion-row class="list-underline">\n  <ion-col col-2 style="text-align: right;"> <img src="../../assets/imgs/profile_ballon1.png" style="width: 25px !important;" /> <span style="color: #fff;\n    position: absolute;\n    font-size: 11px !important;\n    top: 7px !important;\n    left: 27px !important;">15</span></ion-col>\n  <ion-col col-2> <img src="../../assets/imgs/profile_ballon2.png" style="width: 25px !important;" /> <span style="color: #fff;\n    position: absolute;\n    font-size: 11px !important;\n    top: 9px !important;\n    left: 10px !important;">20</span></ion-col>\n</ion-row>\n<!--Message, Notification number-->\n\n <ion-list>\n  <ion-item >\n    <ion-row>\n      <ion-col col-10>\n    <b style="font-size: 14px !important;">Allejando wanted something</b>\n    <p style="color: #fff;font-size: 11px !important;">Project Photography Sample</p>\n    <p style="color: #fff;font-size: 11px !important;">Activity : Upload Thumbnail</p>\n    </ion-col>\n    <ion-col col-2>\n      <round-progress [current]="45" [max]="100" [radius]="20" [stroke]="4" [color]="\'#00ff00\'" [background]="\'#eaeaea\'"  [animation]="\'easeInOutQuart\'"\n      [animationDelay]="500" ></round-progress>\n      <img src="../../assets/imgs/icon_video.png" style="    width: 32px !important;\n      position: absolute;\n      top: 9px !important;\n      left: 9px !important;" />\n    </ion-col>\n    </ion-row>\n  </ion-item>\n\n\n  <ion-item >\n    <ion-row>\n      <ion-col col-10>\n    <b style="font-size: 14px !important;">Allejando updated something</b>\n    <p style="color: #fff;font-size: 11px !important;">Project Photography Sample</p>\n    <p style="color: #fff;font-size: 11px !important;">Activity : Upload Thumbnail</p>\n    </ion-col>\n    <ion-col col-2>\n      <round-progress [current]="50" [max]="100" [radius]="20" [stroke]="4" [color]="\'#00ff00\'" [background]="\'#eaeaea\'"  [animation]="\'easeInOutQuart\'"\n      [animationDelay]="500" ></round-progress>\n      <img src="../../assets/imgs/icon_video.png" style="    width: 32px !important;\n      position: absolute;\n      top: 9px !important;\n      left: 9px !important;" />\n    </ion-col>\n    </ion-row>\n  </ion-item>\n\n\n\n  <ion-item >\n    <ion-row>\n      <ion-col col-10>\n    <b style="font-size: 14px !important;">Allejando brought something</b>\n    <p style="color: #fff;font-size: 11px !important;">Brought item name</p>\n    <p style="color: #fff;font-size: 11px !important;">from rewardsl</p>\n    </ion-col>\n    <!-- <ion-col col-2>\n      <round-progress [current]="30" [max]="100" [radius]="20" [stroke]="4" [color]="\'#00ff00\'" [background]="\'#eaeaea\'" ></round-progress>\n      <img src="../../assets/imgs/icon_video.png" style="    width: 30px !important;\n      position: absolute;\n      top: 10px !important;\n      left: 10px !important;" />\n    </ion-col> -->\n    </ion-row>\n  </ion-item>\n\n\n\n  <ion-item >\n    <ion-row>\n      <ion-col col-10>\n    <b style="font-size: 14px !important;">Allejando uploaded something</b>\n    <p style="color: #fff;font-size: 11px !important;">Project Photography Sample</p>\n    <p style="color: #fff;font-size: 11px !important;">Activity : Upload Thumbnail</p>\n    </ion-col>\n    <ion-col col-2>\n      <round-progress [current]="80" [max]="100" [radius]="20" [stroke]="4" [color]="\'#00ff00\'" [background]="\'#eaeaea\'"  [animation]="\'easeInOutQuart\'"\n      [animationDelay]="500" ></round-progress>\n      <img src="../../assets/imgs/icon_video.png" style="    width: 32px !important;\n      position: absolute;\n      top: 9px !important;\n      left: 9px !important;" />\n    </ion-col>\n    </ion-row>\n  </ion-item>\n\n\n\n  <ion-item >\n    <ion-row>\n      <ion-col col-10>\n    <b style="font-size: 14px !important;">Allejando wanted something</b>\n    <p style="color: #fff;font-size: 11px !important;">Project Photography Sample</p>\n    <p style="color: #fff;font-size: 11px !important;">Activity : Upload Thumbnail</p>\n    </ion-col>\n    <ion-col col-2>\n      <round-progress [current]="10" [max]="100" [radius]="20" [stroke]="4" [color]="\'#00ff00\'" [background]="\'#eaeaea\'"  [animation]="\'easeInOutQuart\'"\n      [animationDelay]="500" ></round-progress>\n      <img src="../../assets/imgs/icon_video.png" style="    width: 32px !important;\n      position: absolute;\n      top: 9px !important;\n      left: 9px !important;" />\n    </ion-col>\n    </ion-row>\n  </ion-item>\n\n\n\n  <ion-item >\n    <ion-row>\n      <ion-col col-10>\n    <b style="font-size: 14px !important;">Allejando wanted something</b>\n    <p style="color: #fff;font-size: 11px !important;">Project Photography Sample</p>\n    <p style="color: #fff;font-size: 11px !important;">Activity : Upload Thumbnail</p>\n    </ion-col>\n    <ion-col col-2>\n      <round-progress [current]="90" [max]="100" [radius]="20" [stroke]="4" [color]="\'#00ff00\'" [background]="\'#eaeaea\'"  [animation]="\'easeInOutQuart\'"\n      [animationDelay]="500" ></round-progress>\n      <img src="../../assets/imgs/icon_video.png" style="    width: 32px !important;\n      position: absolute;\n      top: 9px !important;\n      left: 9px !important;" />\n    </ion-col>\n    </ion-row>\n  </ion-item>\n  \n\n\n\n  <ion-item >\n    <ion-row>\n      <ion-col col-10>\n    <b style="font-size: 14px !important;">Allejando wanted something</b>\n    <p style="color: #fff;font-size: 11px !important;">Project Photography Sample</p>\n    <p style="color: #fff;font-size: 11px !important;">Activity : Upload Thumbnail</p>\n    </ion-col>\n    <ion-col col-2>\n      <round-progress [current]="20" [max]="100" [radius]="20" [stroke]="4" [color]="\'#00ff00\'" [background]="\'#eaeaea\'"  [animation]="\'easeInOutQuart\'"\n      [animationDelay]="500" ></round-progress>\n      <img src="../../assets/imgs/icon_video.png" style="    width: 32px !important;\n      position: absolute;\n      top: 9px !important;\n      left: 9px !important;" />\n    </ion-col>\n    </ion-row>\n  </ion-item>\n  \n\n\n  <ion-item >\n    <ion-row>\n      <ion-col col-10>\n    <b style="font-size: 14px !important;">Allejando wanted something</b>\n    <p style="color: #fff;font-size: 11px !important;">Project Photography Sample</p>\n    <p style="color: #fff;font-size: 11px !important;">Activity : Upload Thumbnail</p>\n    </ion-col>\n    <ion-col col-2>\n      <round-progress [current]="30" [max]="100" [radius]="20" [stroke]="4" [color]="\'#00ff00\'" [background]="\'#eaeaea\'"  [animation]="\'easeInOutQuart\'"\n      [animationDelay]="500" ></round-progress>\n      <img src="../../assets/imgs/icon_video.png" style="    width: 32px !important;\n      position: absolute;\n      top: 9px !important;\n      left: 9px !important;" />\n    </ion-col>\n    </ion-row>\n  </ion-item>\n  \n\n\n </ion-list>\n\n\n</ion-content>\n\n\n<ion-footer>\n  <button ion-button clear full (click)="closeModal();" color="light">\n    <ion-icon name="close-circle" color="white"></ion-icon>\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/user-message-notification-list/user-message-notification-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], UserMessageNotificationListPage);
    return UserMessageNotificationListPage;
}());

//# sourceMappingURL=user-message-notification-list.js.map

/***/ })

});
//# sourceMappingURL=1.js.map