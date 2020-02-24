webpackJsonp([3],{

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectInformationPageModule", function() { return ProjectInformationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_information__ = __webpack_require__(459);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProjectInformationPageModule = /** @class */ (function () {
    function ProjectInformationPageModule() {
    }
    ProjectInformationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__project_information__["a" /* ProjectInformationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__project_information__["a" /* ProjectInformationPage */]),
                __WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar__["RoundProgressModule"]
            ],
        })
    ], ProjectInformationPageModule);
    return ProjectInformationPageModule;
}());

//# sourceMappingURL=project-information.module.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectInformationPage; });
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


/**
 * Generated class for the ProjectInformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProjectInformationPage = /** @class */ (function () {
    function ProjectInformationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProjectInformationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProjectInformationPage');
    };
    ProjectInformationPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    ProjectInformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-project-information',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/project-information/project-information.html"*/'<ion-header style="padding-left: 20px !important;">\n  <ion-row style="color: #fff !important;">\n    <ion-col col-1 style="margin-top: 13px !important;"><ion-icon name="search"></ion-icon>  </ion-col>\n    <ion-col col-1 style="margin-top: 13px !important;"><ion-icon name="share"></ion-icon></ion-col>\n    <ion-col col-1 style="margin-top: 13px !important;"><ion-icon name="funnel"></ion-icon></ion-col>\n    <ion-col col-9><button ion-button clear color="light" icon-end style="text-transform: capitalize;">Add New<ion-icon name="add-circle"></ion-icon></button></ion-col>\n  </ion-row>\n  <!--Test-->\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Project Selection</ion-label>\n      <ion-select [(ngModel)]="gaming">\n        <ion-option value="nes">NES</ion-option>\n        <ion-option value="n64">Video 1</ion-option>\n        <ion-option value="ps">Music</ion-option>\n        <ion-option value="genesis">Voiceover</ion-option>\n        <ion-option value="saturn">Sega Saturn</ion-option>\n        <ion-option value="snes">SNES</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <!--Test-->\n\n\n</ion-header>\n\n<ion-content padding class="custom-popup">\n\n  <ion-list>\n<ion-item class="nopadding mt-16" >\n      <round-progress [current]="95" [max]="100" [radius]="25" [stroke]="7" [color]="\'#00ff00\'"  \n      [animation]="\'easeInOutQuart\'"\n      [animationDelay]="500"></round-progress>\n      <img src="../../assets/imgs/icon_video.png" style="width: 37px !important;\n      position: absolute;\n      top: 19px !important;\n      left: 7px !important;" />\n\n      <span style="    position: absolute;\n      top: 17px !important;\n      background-color: white;\n      color: #000;\n      border-radius: 20px !important;\n      left: 20px !important;\n      z-index: -1;\n      padding-left: 33px !important;\n      padding-right: 11px !important;">  \n        <b style="font-size: 12px !important;">Videography Netscape</b>\n        <p style="font-size: 8px !important;">11/11/2019 - 01/01/2020</p>\n        <p style="font-size: 8px !important;">Owner: Allejandro</p>\n      </span>\n\n    </ion-item>\n\n\n\n    <ion-item class="nopadding mt-16" >\n      <round-progress [current]="90" [max]="100" [radius]="25" [stroke]="7" [color]="\'#00ff00\'" [animation]="\'easeInOutQuart\'"\n      [animationDelay]="500"></round-progress>\n      <img src="../../assets/imgs/icon_video.png" style="width: 37px !important;\n      position: absolute;\n      top: 19px !important;\n      left: 7px !important;" />\n\n      <span style="position: absolute;\n      top: 17px !important;\n      background-color: #000;\n      color: #fff;\n      border-radius: 20px !important;\n      left: 20px !important;\n      z-index: -1;\n      padding-left: 33px !important;\n      padding-right: 17px !important;">  \n        <b style="font-size: 12px !important;">Videography Chamba</b>\n        <p style="font-size: 8px !important;">11/11/2019 - 01/01/2020</p>\n        <p style="font-size: 8px !important;">Owner: Allejandro</p>\n      </span>\n\n    </ion-item>\n\n\n\n    <ion-item class="nopadding mt-16" >\n      <round-progress [current]="10" [max]="100" [radius]="25" [stroke]="7" [color]="\'#00ff00\'" [animation]="\'easeInOutQuart\'"\n      [animationDelay]="500"></round-progress>\n      <img src="../../assets/imgs/icon_music.png" style="width: 37px !important;\n      position: absolute;\n      top: 19px !important;\n      left: 7px !important;" />\n\n      <span style="position: absolute;\n      top: 17px !important;\n      background-color: #000;\n      color: #fff;\n      border-radius: 20px !important;\n      left: 20px !important;\n      z-index: -1;\n      padding-left: 33px !important;\n      padding-right: 17px !important;">  \n        <b style="font-size: 12px !important;">Videography Colocus</b>\n        <p style="font-size: 8px !important;">11/11/2019 - 01/01/2020</p>\n        <p style="font-size: 8px !important;">Owner: Allejandro</p>\n      </span>\n\n    </ion-item>\n\n\n\n    <ion-item class="nopadding mt-16" >\n      <round-progress [current]="30" [max]="100" [radius]="25" [stroke]="7" [color]="\'#00ff00\'" [animation]="\'easeInOutQuart\'"\n      [animationDelay]="500"></round-progress>\n      <img src="../../assets/imgs/icon_mic.png" style="width: 37px !important;\n      position: absolute;\n      top: 19px !important;\n      left: 7px !important;" />\n\n      <span style="position: absolute;\n      top: 17px !important;\n      background-color: #000;\n      color: #fff;\n      border-radius: 20px !important;\n      left: 20px !important;\n      z-index: -1;\n      padding-left: 33px !important;\n      padding-right: 17px !important;">  \n        <b style="font-size: 12px !important;">Photography Disney</b>\n        <p style="font-size: 8px !important;">11/11/2019 - 01/01/2020</p>\n        <p style="font-size: 8px !important;">Owner: Allejandro</p>\n      </span>\n\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n\n\n\n\n<ion-footer>\n  <button ion-button clear full (click)="closeModal();" color="light">\n    <ion-icon name="close-circle" color="white"></ion-icon>\n  </button>\n</ion-footer>\n\n'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/project-information/project-information.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ProjectInformationPage);
    return ProjectInformationPage;
}());

//# sourceMappingURL=project-information.js.map

/***/ })

});
//# sourceMappingURL=3.js.map