webpackJsonp([3],{

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardsPageModule", function() { return RewardsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_components_module__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rewards__ = __webpack_require__(484);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var RewardsPageModule = /** @class */ (function () {
    function RewardsPageModule() {
    }
    RewardsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__rewards__["a" /* RewardsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_4__rewards__["a" /* RewardsPage */]),
                __WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar__["RoundProgressModule"],
                __WEBPACK_IMPORTED_MODULE_1__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], RewardsPageModule);
    return RewardsPageModule;
}());

//# sourceMappingURL=rewards.module.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RewardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_message_helper__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils_DataValidation__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Utils_Codes__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(341);
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








var RewardsPage = /** @class */ (function () {
    function RewardsPage(navCtrl, navParams, modalCtrl, httpCall, codes, dataValidation, msgHelper, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.httpCall = httpCall;
        this.codes = codes;
        this.dataValidation = dataValidation;
        this.msgHelper = msgHelper;
        this.alertController = alertController;
        this.rewardCount = null;
    }
    RewardsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad RewardsPage');
        var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));
        console.error(JSON.stringify(currentUserInfo));
        if (this.dataValidation.isEmptyJson(currentUserInfo)) {
            this.msgHelper.showToast('Could not fetch user id');
            return;
        }
        var requestJson = {
            "AssignedUserId": currentUserInfo[0]['UserId'],
            "ProjectYear": new Date().getFullYear(),
            "AppType": "W"
        };
        this.httpCall.callApi(requestJson, this.codes.API_GET_USER_WISE_REWARD_COUNT).then(function (responseJson) {
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog('Error !!', 'Empty response received from server !!!');
                return;
            }
            _this.rewardCount = responseJson['resultData'];
            console.warn(JSON.stringify(_this.rewardCount));
        });
    };
    RewardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-rewards',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/rewards/rewards.html"*/'<ion-header style="padding-left:10px !important; padding-right:10px !important">\n  <!--header starts here-->\n  <ion-row>\n   <ion-col class="nopadding mt-16" (click)="goToProjectSelection()">\n     <round-progress [current]="75" [max]="100" [radius]="20" [stroke]="7" [color]="\'#00ff00\'"></round-progress>\n     <img src="../../assets/imgs/icon_video.png" style="width: 26px !important;\n     position: absolute;\n     top: 7px !important;\n     left: 7px !important;" />\n   </ion-col>\n\n   <ion-col class="nopadding mt-20">\n     <star-provider [coins]="50" [stars]="20" [videos]="150"></star-provider>\n   </ion-col>\n\n   <ion-col class="nopadding">\n    <user-info [messageNumber]="0" [notificationNumber]="0" (click)="goToUserMessages()" style="position: absolute;top: 0px !important;right: 0px !important;"></user-info>      \n   </ion-col>\n\n </ion-row>\n<!--header ends here-->\n</ion-header>\n\n<!--Body starts here-->\n<ion-content padding class="background-content mt-66" style="height: 80% !important; width: 95% !important; margin-left: 2.5% !important; text-align: center;">\n\n  <h2 style="color: dodgerblue !important;">Rewards</h2>\n  <ion-row>\n  <ion-col *ngIf="!dataValidation.isEmptyJson(rewardCount)" style="text-align:center !important">\n      <ion-card style="border: 2px solid dodgerblue !important; background-color: floralwhite !important ; min-width:138px !important">\n        <img src="../../assets/imgs/coin.png" style="margin-top:10px !important; width: 30px !important; height: 30px !important; margin-left:41% !important;"  />\n        <ion-card-content>\n          <h2 style="color: #919191 !important;  margin-top:10px !important">{{dataValidation.roundOff(rewardCount[0][\'TotalAchieveCoinRewardQuantity\'])}}</h2>\n        </ion-card-content>\n      </ion-card>    \n    </ion-col>\n  <ion-col *ngIf="!dataValidation.isEmptyJson(rewardCount)" style="text-align:center !important">\n      <ion-card style="border: 2px solid dodgerblue !important; background-color: floralwhite !important ; min-width:138px !important">\n        <img src="../../assets/imgs/coupon.png" style="margin-top:10px !important; width: 30px !important; height: 30px !important; margin-left:41% !important;"  />\n        <ion-card-content>\n          <h2 style="color: #919191 !important;  margin-top:10px !important">{{dataValidation.roundOff(rewardCount[0][\'TotalAchieveCouponRewardQuantity\'])}}</h2>\n        </ion-card-content>\n      </ion-card>    \n\n    </ion-col>\n</ion-row>\n<ion-row>\n  <ion-col *ngIf="!dataValidation.isEmptyJson(rewardCount)" style="text-align:center !important">\n    <ion-card style="border: 2px solid dodgerblue !important; background-color: floralwhite !important ;min-width:138px !important">\n      <img src="../../assets/imgs/diamond.svg" style="margin-top:10px !important; width: 30px !important; height: 30px !important; margin-left:41% !important;"  />\n      <ion-card-content>\n        <h2 style="color: #919191 !important; margin-top:10px !important">{{dataValidation.roundOff(rewardCount[0][\'TotalAchieveDiamondRewardQuantity\'])}}</h2>\n      </ion-card-content>\n    </ion-card>    \n  </ion-col>\n\n  <ion-col *ngIf="!dataValidation.isEmptyJson(rewardCount)" style="text-align:center !important">\n    <ion-card style="border: 2px solid dodgerblue !important; background-color: floralwhite !important ;min-width:138px !important">\n      <img src="../../assets/imgs/trophy.svg" style="margin-top:10px !important; width: 30px !important; height: 30px !important; margin-left:41% !important;"  />\n      <ion-card-content>\n        <h2 style="color: #919191 !important;  margin-top:10px !important">{{dataValidation.roundOff(rewardCount[0][\'TotalAchieveTrophyRewardQuantity\'])}}</h2>\n      </ion-card-content>\n    </ion-card>    \n  </ion-col>\n</ion-row>\n</ion-content>\n<!--Body ends here-->\n\n<!--Footer starts here-->\n<ion-footer style="background-color: #efefef; text-align: center;">\n  <button ion-button clear (click)="navCtrl.setRoot(\'ProjectHomePage\')" *ngIf="dataValidation.doesContainMenu(\'Projects\')"><img src="../../assets/imgs/menu_proyectos_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear (click)="navCtrl.setRoot(\'RecognitionsPage\')" *ngIf="dataValidation.doesContainMenu(\'Recognition\')"><img src="../../assets/imgs/menu_reconocimientos_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear (click)="navCtrl.setRoot(\'RewardsPage\')" *ngIf="dataValidation.doesContainMenu(\'Rewards\')"><img src="../../assets/imgs/menu_recompensas_on.png" style="width: 15px !important;"/></button>\n  <button ion-button clear *ngIf="dataValidation.doesContainMenu(\'Talents\')" [disabled]=true><img src="../../assets/imgs/menu_talentos_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear (click)="navCtrl.setRoot(\'CollaboratorPage\')" *ngIf="dataValidation.doesContainMenu(\'Collaborators\')"><img src="../../assets/imgs/menu_colaboradores_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear (click)="navCtrl.setRoot(\'PermissionsPage\')" *ngIf="dataValidation.doesContainMenu(\'Permissions\')"><img src="../../assets/imgs/menu_permisos_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear *ngIf="dataValidation.doesContainMenu(\'Calendar\')" (click)="navCtrl.setRoot(\'EventListPage\')"><img src="../../assets/imgs/menu_calendario_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear *ngIf="dataValidation.doesContainMenu(\'Configuration\')" (click)="navCtrl.setRoot(\'GeneralSettingsPage\')"><img src="../../assets/imgs/menu_configuracion_off.png" style="width: 15px !important;"/></button>\n</ion-footer>\n\n<!--Footer ends here-->'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/rewards/rewards.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__Utils_Codes__["a" /* Codes */], __WEBPACK_IMPORTED_MODULE_2__Utils_DataValidation__["a" /* DataValidation */],
            __WEBPACK_IMPORTED_MODULE_1__providers_message_helper__["a" /* MessageHelper */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["AlertController"]])
    ], RewardsPage);
    return RewardsPage;
}());

//# sourceMappingURL=rewards.js.map

/***/ })

});
//# sourceMappingURL=3.js.map