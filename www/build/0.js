webpackJsonp([0],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_star_provider_star_provider__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_svg_round_progressbar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_svg_round_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_project_module_project_module__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_info_user_info__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_3__components_user_info_user_info__["a" /* UserInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_2__components_project_module_project_module__["a" /* ProjectModuleComponent */],
                __WEBPACK_IMPORTED_MODULE_0__components_star_provider_star_provider__["a" /* StarProviderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_1_angular_svg_round_progressbar__["RoundProgressModule"]
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarProviderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarProviderComponent = /** @class */ (function () {
    function StarProviderComponent() {
        this.coins = "10";
        this.stars = "20";
        this.videos = "45";
        console.log('Hello StarProviderComponent Component');
        this.text = 'Hello World';
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], StarProviderComponent.prototype, "coins", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], StarProviderComponent.prototype, "stars", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], StarProviderComponent.prototype, "videos", void 0);
    StarProviderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'star-provider',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/components/star-provider/star-provider.html"*/'<div class="background">\n    <span>\n      <img src="../../assets/imgs/coin.png" style="width: 15px !important;  margin-left:2px !important"/> <sup style="font-size: 7px !important;">{{coins}}</sup>\n      <img src="../../assets/imgs/star.png" style="width: 15px !important;  margin-left:2px !important"/> <sup style="font-size: 7px !important; ">{{stars}}</sup>\n      <img src="../../assets/imgs/movie-symbol-of-video-camera.png" style="width: 15px !important; margin-left:2px !important"/> <sup style="font-size: 7px !important;">{{videos}}</sup>\n    </span>\n</div>\n'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/components/star-provider/star-provider.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], StarProviderComponent);
    return StarProviderComponent;
}());

//# sourceMappingURL=star-provider.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectModuleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectModuleComponent = /** @class */ (function () {
    function ProjectModuleComponent() {
        console.log('Hello ProjectModuleComponent Component');
        this.text = 'Hello World';
    }
    ProjectModuleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'project-module',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/components/project-module/project-module.html"*/'<div style="width: 200px !important;">\n  <span>\n  <round-progress [current]="50" [max]="100" [radius]="30" [stroke]="8"></round-progress>\n  <img src="../../assets/imgs/icon_video.png" style="    width: 30px !important;\n  height: 30px !important;\n  top: 125px !important;\n  position: absolute;\n  left: 31px !important;"\n  />\n  <span style="font-size: 8px !important;\n  position: absolute;\n  top: 117px !important;\n  left: 66px !important;\n  background: white;\n  border: 1px solid #ddd;\n  padding: 9px !important;\n  padding-left: 15px !important;\n  z-index: -1 !important;\n  border-radius: 14px !important;">\n    <p class="nomargin">Allejandro wants something</p>\n    <p class="nomargin">2019/12/21 - 2019/12/22</p>\n    <p class="nomargin">Owner : Allejandro</p>\n  </span>\n</span>\n</div>'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/components/project-module/project-module.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProjectModuleComponent);
    return ProjectModuleComponent;
}());

//# sourceMappingURL=project-module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent() {
        console.log('Hello UserInfoComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], UserInfoComponent.prototype, "messageNumber", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], UserInfoComponent.prototype, "notificationNumber", void 0);
    UserInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-info',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/components/user-info/user-info.html"*/'<div>\n\n  <span>\n    \n  <button ion-button clear><img src="../../assets/imgs/profile_ballon1.png" class="noti-image-size"/>\n    <span style="position: absolute;\n    left: 13px !important;\n    font-size: 9px !important;\n    top: 13px !important;\n    color: white;">{{messageNumber}}</span>\n  </button>\n  <p style="margin-left: 26px !important; margin-top: -27px !important;">\n    <img src="../../assets/imgs/user.png" class="user-image-size" />\n  </p>\n  <p style="margin-top: -43px !important;margin-left: 8px !important;">\n  <button ion-button clear>\n    <img src="../../assets/imgs/profile_ballon2.png" class="noti-image-size"/>\n    <span style="position: absolute;\n    left: 13px !important;\n    top: 15px !important;\n    font-size: 8px !important;\n    color: white;">{{notificationNumber}}</span>\n  </button>\n</p>\n  </span>\n  <!-- {{text}} -->\n</div>'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/components/user-info/user-info.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], UserInfoComponent);
    return UserInfoComponent;
}());

//# sourceMappingURL=user-info.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
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
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.goToUserMessages = function () {
        var userModal = this.modalCtrl.create('UserMessageNotificationListPage');
        userModal.present();
    };
    HomePage.prototype.goToProjectSelection = function () {
        var projectSelectionModal = this.modalCtrl.create('ProjectInformationPage');
        projectSelectionModal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/home/home.html"*/'<ion-header style="padding-left:10px !important; padding-right:10px !important">\n   <!--header starts here-->\n   <ion-row>\n    <ion-col class="nopadding mt-16" (click)="goToProjectSelection()">\n      <round-progress [current]="70" [max]="100" [radius]="20" [stroke]="7" [color]="\'#00ff00\'"></round-progress>\n      <img src="../../assets/imgs/icon_video.png" style="width: 26px !important;\n      position: absolute;\n      top: 7px !important;\n      left: 7px !important;" />\n    </ion-col>\n\n    <ion-col class="nopadding mt-20">\n      <star-provider [coins]="10" [stars]="15" [videos]="20"></star-provider>\n    </ion-col>\n\n    <ion-col class="nopadding">\n      \n     <user-info [messageNumber]="15" [notificationNumber]="20" (click)="goToUserMessages()" style="position: absolute;top: 0px !important;right: 0px !important;"></user-info>      \n    </ion-col>\n  </ion-row>\n<!--header ends here-->\n</ion-header>\n\n<!--Body starts here-->\n<ion-content class="background-content mt-66" style="height: 80% !important; width: 95% !important; margin-left: 2% !important;">\n\n<ion-row style="position: absolute; right: 0px ; padding:3px !important">\n  <img src="../../assets/imgs/globe.png" style="width: 12px !important; margin-left:2px !important" /><span style="font-size:10px !important;  margin-left:2px !important"> 99.99%</span>\n  <img src="../../assets/imgs/calendar.png" style="width: 12px !important;  margin-left:4px !important" /><span style="font-size:10px !important;  margin-left:2px !important"> 99.99%</span>\n</ion-row>\n\n  \n  <button ion-button clear style="text-transform: capitalize;" ><ion-title>Phase 1</ion-title>\n  </button>\n  <p style=" border-bottom: 1px solid #ddd; padding:0px !important; margin:0px !important; margin-left:4px !important; margin-right:4px !important"></p>\n\n <ion-row>\n  <ion-col>\n    <ion-card>\n      <ion-card-content>\n        <ion-row class="nopadding">\n          <ion-col col-2>\n          <p class="circle-image"><img src="../../assets/imgs/video-camera.png" style="width: 30px !important;"/></p>\n        </ion-col>\n        <ion-col col-10 class="nopadding">\n          <p style="text-align: center;"><ion-badge color="badge-complete">Complete</ion-badge></p>\n          <p class="phase-title"><b>Activity Name</b></p>\n        </ion-col>\n        </ion-row>\n        <ion-row class="nopadding">\n          <ion-col class="nopadding">\n          <button ion-button round color="light" color="light" class="button-info">Details</button>\n        </ion-col>\n        <ion-col class="nopadding">\n          <img src="../../assets/imgs/profile_ballon1.png" style="width: 15px !important; margin-top: 8px;" />\n        </ion-col>\n        </ion-row>\n        <ion-row class="nopadding">\n          <ion-col col-3 class="nopadding" ><button ion-button clear style="padding:0px !important;" class="circle-image-buttom"><img src="../../assets/imgs/file.svg" style="height:20px;"/></button></ion-col>\n          <ion-col col-3 class="nopadding" ><button ion-button clear style="padding:0px !important;" class="circle-image-buttom"><img src="../../assets/imgs/folder.svg" style="height:20px;"/></button></ion-col>\n          <ion-col col-3 class="nopadding" ><button ion-button clear style="padding:0px !important;" class="circle-image-buttom"><img src="../../assets/imgs/check-mark.svg" style="height:20px;"/></button></ion-col>\n          <ion-col col-3 class="nopadding" ><button ion-button clear style="padding:0px !important;" class="circle-image-buttom"><img src="../../assets/imgs/download.svg" style="height:20px;"/></button></ion-col>\n        </ion-row>\n        <ion-row class="nopadding">\n          <button ion-button full round color="light" class="button-info ml-20 mr-20">+ Ask for material</button>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ion-col>\n\n  <ion-col>\n    <ion-card>\n      <ion-card-content>\n        <ion-row class="nopadding">\n          <ion-col col-2>\n          <p class="circle-image"><img src="../../assets/imgs/video-camera.png" style="width: 30px !important;"/></p>\n        </ion-col>\n        <ion-col col-10 class="nopadding">\n          <p style="text-align: center;"><ion-badge color="badge-complete">Complete</ion-badge></p>\n          <p class="phase-title"><b>Activity Name</b></p>\n        </ion-col>\n        </ion-row>\n        <ion-row class="nopadding">\n          <ion-col class="nopadding">\n          <button ion-button round color="light" color="light" class="button-info">Details</button>\n        </ion-col>\n        <ion-col class="nopadding">\n          <img src="../../assets/imgs/profile_ballon1.png" style="width: 15px !important; margin-top: 8px;" />\n        </ion-col>\n        </ion-row>\n        <ion-row class="nopadding">\n          <ion-col col-3 class="nopadding" ><button ion-button clear style="padding:0px !important;" class="circle-image-buttom"><img src="../../assets/imgs/file.svg" style="height:20px;"/></button></ion-col>\n          <ion-col col-3 class="nopadding" ><button ion-button clear style="padding:0px !important;" class="circle-image-buttom"><img src="../../assets/imgs/folder.svg" style="height:20px;"/></button></ion-col>\n          <ion-col col-3 class="nopadding" ><button ion-button clear style="padding:0px !important;" class="circle-image-buttom"><img src="../../assets/imgs/check-mark.svg" style="height:20px;"/></button></ion-col>\n          <ion-col col-3 class="nopadding" ><button ion-button clear style="padding:0px !important;" class="circle-image-buttom"><img src="../../assets/imgs/download.svg" style="height:20px;"/></button></ion-col>\n        </ion-row>\n        <ion-row class="nopadding">\n          <button ion-button full round color="light" class="button-info ml-20 mr-20">+ Ask for material</button>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ion-col>\n\n\n  <ion-col>\n    <ion-card>\n      <ion-card-content>\n        <ion-row class="nopadding">\n          <ion-col col-2>\n          <p class="circle-image"><img src="../../assets/imgs/video-camera.png" style="width: 30px !important;"/></p>\n        </ion-col>\n        <ion-col col-10 class="nopadding">\n          <p style="text-align: center;"><ion-badge color="badge-complete">Complete</ion-badge></p>\n          <p class="phase-title"><b>Activity Name</b></p>\n        </ion-col>\n        </ion-row>\n        <ion-row class="nopadding">\n          <ion-col class="nopadding">\n          <button ion-button round color="light" color="light" class="button-info">Details</button>\n        </ion-col>\n        <ion-col class="nopadding">\n          <img src="../../assets/imgs/profile_ballon1.png" style="width: 15px !important; margin-top: 8px;" />\n        </ion-col>\n        </ion-row>\n        <ion-row class="nopadding">\n          <ion-col col-3 class="nopadding" ><button ion-button clear style="padding:0px !important;" class="circle-image-buttom"><img src="../../assets/imgs/file.svg" style="height:20px;"/></button></ion-col>\n          <ion-col col-3 class="nopadding" ><button ion-button clear style="padding:0px !important;" class="circle-image-buttom"><img src="../../assets/imgs/folder.svg" style="height:20px;"/></button></ion-col>\n          <ion-col col-3 class="nopadding" ><button ion-button clear style="padding:0px !important;" class="circle-image-buttom"><img src="../../assets/imgs/check-mark.svg" style="height:20px;"/></button></ion-col>\n          <ion-col col-3 class="nopadding" ><button ion-button clear style="padding:0px !important;" class="circle-image-buttom"><img src="../../assets/imgs/download.svg" style="height:20px;"/></button></ion-col>\n        </ion-row>\n        <ion-row class="nopadding">\n          <button ion-button full round color="light" class="button-info ml-20 mr-20">+ Ask for material</button>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ion-col>\n\n\n\n \n </ion-row>\n\n\n\n\n\n\n\n\n\n <button ion-button clear style="text-transform: capitalize;"><ion-title>Phase 2</ion-title>\n </button>\n <p style=" border-bottom: 1px solid #ddd; padding:0px !important; margin:0px !important; margin-left:4px !important; margin-right:4px !important"></p>\n\n\n<ion-row>\n  <ion-col>\n    <ion-card>\n      <ion-card-content>\n        <ion-row class="nopadding">\n          <ion-col col-2>\n          <p class="circle-image"><img src="../../assets/imgs/video-camera.png" style="width: 30px !important;"/></p>\n        </ion-col>\n        <ion-col col-10 class="nopadding">\n          <p style="text-align: center;"><ion-badge class="badge-progress">In Progress</ion-badge></p>\n          <p class="phase-title"><b>Activity Name</b></p>\n        </ion-col>\n        </ion-row>\n        <ion-row class="nopadding">\n          <ion-col class="nopadding">\n          <button ion-button round color="light" color="light" class="button-info">Details</button>\n        </ion-col>\n        <ion-col class="nopadding">\n          <img src="../../assets/imgs/profile_ballon1.png" style="width: 15px !important; margin-top: 8px;" />\n        </ion-col>\n        </ion-row>\n        <ion-row class="nopadding">\n          <ion-col col-3 class="nopadding" ><button ion-button clear style="padding:0px !important;" class="circle-image-buttom"><img src="../../assets/imgs/file.svg" style="height:20px;"/></button></ion-col>\n          <ion-col col-3 class="nopadding" ><button ion-button clear style="padding:0px !important;" class="circle-image-buttom"><img src="../../assets/imgs/folder.svg" style="height:20px;"/></button></ion-col>\n          <ion-col col-3 class="nopadding" ><button ion-button clear style="padding:0px !important;" class="circle-image-buttom-incomplete"><img src="../../assets/imgs/check-mark.svg" style="height:20px;"/></button></ion-col>\n          <ion-col col-3 class="nopadding" ><button ion-button clear style="padding:0px !important;" class="circle-image-buttom-incomplete"><img src="../../assets/imgs/download.svg" style="height:20px;"/></button></ion-col>\n        </ion-row>\n        <ion-row class="nopadding">\n          <button ion-button full round color="light" class="button-info ml-20 mr-20">+ Ask for material</button>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ion-col>\n\n\n  <ion-col>\n    <ion-card>\n      <ion-card-content>\n        <ion-row class="nopadding">\n          <ion-col col-2>\n          <p class="circle-image"><img src="../../assets/imgs/video-camera.png" style="width: 30px !important;"/></p>\n        </ion-col>\n        <ion-col col-10 class="nopadding">\n          <p style="text-align: center;"><ion-badge color="badge-complete">Complete</ion-badge></p>\n          <p class="phase-title"><b>Activity Name</b></p>\n        </ion-col>\n        </ion-row>\n        <ion-row class="nopadding">\n          <ion-col class="nopadding">\n          <button ion-button round color="light" color="light" class="button-info">Details</button>\n        </ion-col>\n        <ion-col class="nopadding">\n          <img src="../../assets/imgs/profile_ballon1.png" style="width: 15px !important; margin-top: 8px;" />\n        </ion-col>\n        </ion-row>\n        <ion-row class="nopadding">\n          <ion-col col-3 class="nopadding" ><button ion-button clear style="padding:0px !important;" class="circle-image-buttom"><img src="../../assets/imgs/file.svg" style="height:20px;"/></button></ion-col>\n          <ion-col col-3 class="nopadding" ><button ion-button clear style="padding:0px !important;" class="circle-image-buttom"><img src="../../assets/imgs/folder.svg" style="height:20px;"/></button></ion-col>\n          <ion-col col-3 class="nopadding" ><button ion-button clear style="padding:0px !important;" class="circle-image-buttom"><img src="../../assets/imgs/check-mark.svg" style="height:20px;"/></button></ion-col>\n          <ion-col col-3 class="nopadding" ><button ion-button clear style="padding:0px !important;" class="circle-image-buttom"><img src="../../assets/imgs/download.svg" style="height:20px;"/></button></ion-col>\n        </ion-row>\n        <ion-row class="nopadding">\n          <button ion-button full round color="light" class="button-info ml-20 mr-20">+ Ask for material</button>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ion-col>\n\n  <ion-col>\n    <ion-card>\n      <ion-card-content>\n        <ion-row class="nopadding">\n          <ion-col col-2>\n          <p class="circle-image"><img src="../../assets/imgs/video-camera.png" style="width: 30px !important;"/></p>\n        </ion-col>\n        <ion-col col-10 class="nopadding">\n          <p style="text-align: center;"><ion-badge color="badge-complete">Complete</ion-badge></p>\n          <p class="phase-title"><b>Activity Name</b></p>\n        </ion-col>\n        </ion-row>\n        <ion-row class="nopadding">\n          <ion-col class="nopadding">\n          <button ion-button round color="light" color="light" class="button-info">Details</button>\n        </ion-col>\n        <ion-col class="nopadding">\n          <img src="../../assets/imgs/profile_ballon1.png" style="width: 15px !important; margin-top: 8px;" />\n        </ion-col>\n        </ion-row>\n        <ion-row class="nopadding">\n          <ion-col col-3 class="nopadding" ><button ion-button clear style="padding:0px !important;" class="circle-image-buttom"><img src="../../assets/imgs/file.svg" style="height:20px;"/></button></ion-col>\n          <ion-col col-3 class="nopadding" ><button ion-button clear style="padding:0px !important;" class="circle-image-buttom"><img src="../../assets/imgs/folder.svg" style="height:20px;"/></button></ion-col>\n          <ion-col col-3 class="nopadding" ><button ion-button clear style="padding:0px !important;" class="circle-image-buttom"><img src="../../assets/imgs/check-mark.svg" style="height:20px;"/></button></ion-col>\n          <ion-col col-3 class="nopadding" ><button ion-button clear style="padding:0px !important;" class="circle-image-buttom"><img src="../../assets/imgs/download.svg" style="height:20px;"/></button></ion-col>\n        </ion-row>\n        <ion-row class="nopadding">\n          <button ion-button full round color="light" class="button-info ml-20 mr-20">+ Ask for material</button>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ion-col>\n\n\n  <ion-col>\n    <ion-card>\n      <ion-card-content>\n        <ion-row class="nopadding">\n          <ion-col col-2>\n          <p class="circle-image"><img src="../../assets/imgs/video-camera.png" style="width: 30px !important;"/></p>\n        </ion-col>\n        <ion-col col-10 class="nopadding">\n          <p style="text-align: center;"><ion-badge color="badge-complete">Complete</ion-badge></p>\n          <p class="phase-title"><b>Activity Name</b></p>\n        </ion-col>\n        </ion-row>\n        <ion-row class="nopadding">\n          <ion-col class="nopadding">\n          <button ion-button round color="light" color="light" class="button-info">Details</button>\n        </ion-col>\n        <ion-col class="nopadding">\n          <img src="../../assets/imgs/profile_ballon1.png" style="width: 15px !important; margin-top: 8px;" />\n        </ion-col>\n        </ion-row>\n        <ion-row class="nopadding">\n          <ion-col col-3 class="nopadding" ><button ion-button clear style="padding:0px !important;" class="circle-image-buttom"><img src="../../assets/imgs/file.svg" style="height:20px;"/></button></ion-col>\n          <ion-col col-3 class="nopadding" ><button ion-button clear style="padding:0px !important;" class="circle-image-buttom"><img src="../../assets/imgs/folder.svg" style="height:20px;"/></button></ion-col>\n          <ion-col col-3 class="nopadding" ><button ion-button clear style="padding:0px !important;" class="circle-image-buttom"><img src="../../assets/imgs/check-mark.svg" style="height:20px;"/></button></ion-col>\n          <ion-col col-3 class="nopadding" ><button ion-button clear style="padding:0px !important;" class="circle-image-buttom"><img src="../../assets/imgs/download.svg" style="height:20px;"/></button></ion-col>\n        </ion-row>\n        <ion-row class="nopadding">\n          <button ion-button full round color="light" class="button-info ml-20 mr-20">+ Ask for material</button>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ion-col>\n\n\n\n\n</ion-row>\n\n\n\n\n\n</ion-content>\n<!--Body ends here-->\n\n<!--Footer starts here-->\n<ion-footer style="background-color: #919191;">\n  <button ion-button clear><img src="../../assets/imgs/menu_proyectos_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear><img src="../../assets/imgs/menu_reconocimientos_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear><img src="../../assets/imgs/menu_recompensas_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear><img src="../../assets/imgs/menu_talentos_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear><img src="../../assets/imgs/menu_colaboradores_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear><img src="../../assets/imgs/menu_permisos_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear><img src="../../assets/imgs/menu_calendario_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear><img src="../../assets/imgs/menu_configuracion_off.png" style="width: 15px !important;"/></button>\n</ion-footer>\n<!--Footer ends here-->'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=0.js.map