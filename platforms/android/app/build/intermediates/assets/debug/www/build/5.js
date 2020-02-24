webpackJsonp([5],{

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsHomeTempPageModule", function() { return PermissionsHomeTempPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_components_module__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__permissions_home_temp__ = __webpack_require__(457);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PermissionsHomeTempPageModule = /** @class */ (function () {
    function PermissionsHomeTempPageModule() {
    }
    PermissionsHomeTempPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__permissions_home_temp__["a" /* PermissionsHomeTempPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_4__permissions_home_temp__["a" /* PermissionsHomeTempPage */]),
                __WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar__["RoundProgressModule"],
                __WEBPACK_IMPORTED_MODULE_1__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], PermissionsHomeTempPageModule);
    return PermissionsHomeTempPageModule;
}());

//# sourceMappingURL=permissions-home-temp.module.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionsHomeTempPage; });
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


var PermissionsHomeTempPage = /** @class */ (function () {
    function PermissionsHomeTempPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.permission = null;
        this.permission = this.navParams.get('Permissions');
    }
    PermissionsHomeTempPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PermissionsHomeTempPage');
    };
    PermissionsHomeTempPage.prototype.goToUserMessages = function () {
        var userInfo = [
            {
                "FirstName": "Aashijit",
                "MiddleName": "",
                "LastName": "Mukhopadhyay",
                "Address1": "123, Sarat Chatterjee Road",
                "City": "Kolkata",
                "State": "West Bengal"
            }
        ];
        localStorage.setItem('userinfo', JSON.stringify(userInfo));
        var userModal = this.modalCtrl.create('UserMessageNotificationListPage');
        userModal.present();
    };
    PermissionsHomeTempPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-permissions-home-temp',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/permissions-home-temp/permissions-home-temp.html"*/'<ion-header style="padding-left:10px !important; padding-right:10px !important">\n  <!--header starts here-->\n  <ion-row>\n   <ion-col class="nopadding mt-16" (click)="goToProjectSelection()">\n     <round-progress [current]="75" [max]="100" [radius]="20" [stroke]="7" [color]="\'#00ff00\'"></round-progress>\n     <img src="../../assets/imgs/icon_video.png" style="width: 26px !important;\n     position: absolute;\n     top: 7px !important;\n     left: 7px !important;" />\n   </ion-col>\n\n   <ion-col class="nopadding mt-20">\n     <star-provider [coins]="50" [stars]="20" [videos]="150"></star-provider>\n   </ion-col>\n\n   <ion-col class="nopadding">\n    <user-info [messageNumber]="0" [notificationNumber]="0" (click)="goToUserMessages()" style="position: absolute;top: 0px !important;right: 0px !important;"></user-info>      \n   </ion-col>\n\n </ion-row>\n<!--header ends here-->\n</ion-header>\n\n<!--Body starts here-->\n<ion-content padding class="background-content mt-66" style="height: 80% !important; width: 95% !important; margin-left: 2.5% !important; text-align: center;">\n\n\n</ion-content>\n<!--Body ends here-->\n\n<!--Footer starts here-->\n<ion-footer style="background-color: #efefef; text-align: center;">\n <button ion-button clear *ngIf="permission[0][\'_CanView\']==\'1\'"><img src="../../assets/imgs/menu_proyectos_off.png" style="width: 15px !important;"/></button>\n <button ion-button clear *ngIf="permission[1][\'_CanView\']==\'1\'"><img src="../../assets/imgs/menu_reconocimientos_off.png" style="width: 15px !important;"/></button>\n <button ion-button clear *ngIf="permission[2][\'_CanView\']==\'1\'"><img src="../../assets/imgs/menu_recompensas_off.png" style="width: 15px !important;"/></button>\n <button ion-button clear *ngIf="permission[3][\'_CanView\']==\'1\'"><img src="../../assets/imgs/menu_talentos_off.png" style="width: 15px !important;"/></button>\n <button ion-button clear *ngIf="permission[4][\'_CanView\']==\'1\'"><img src="../../assets/imgs/menu_colaboradores_off.png" style="width: 15px !important;"/></button>\n <button ion-button clear *ngIf="permission[5][\'_CanView\']==\'1\'" (click)="navCtrl.setRoot(\'PermissionsPage\')"><img src="../../assets/imgs/menu_permisos_off.png" style="width: 15px !important;"/></button>\n <button ion-button clear *ngIf="permission[6][\'_CanView\']==\'1\'"><img src="../../assets/imgs/menu_calendario_off.png" style="width: 15px !important;"/></button>\n <button ion-button clear *ngIf="permission[7][\'_CanView\']==\'1\'" (click)="navCtrl.setRoot(\'GeneralSettingsPage\')"><img src="../../assets/imgs/menu_configuracion_off.png" style="width: 15px !important;"/></button>\n</ion-footer>\n<!--Footer ends here-->'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/permissions-home-temp/permissions-home-temp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], PermissionsHomeTempPage);
    return PermissionsHomeTempPage;
}());

//# sourceMappingURL=permissions-home-temp.js.map

/***/ })

});
//# sourceMappingURL=5.js.map