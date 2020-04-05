webpackJsonp([4],{

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecognitionsPageModule", function() { return RecognitionsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_progress_bar__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_svg_round_progressbar__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_svg_round_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_components_module__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recognitions__ = __webpack_require__(483);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RecognitionsPageModule = /** @class */ (function () {
    function RecognitionsPageModule() {
    }
    RecognitionsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__recognitions__["a" /* RecognitionsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_5__recognitions__["a" /* RecognitionsPage */]),
                __WEBPACK_IMPORTED_MODULE_1_angular_svg_round_progressbar__["RoundProgressModule"],
                __WEBPACK_IMPORTED_MODULE_2__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_0_angular_progress_bar__["a" /* ProgressBarModule */]
            ],
        })
    ], RecognitionsPageModule);
    return RecognitionsPageModule;
}());

//# sourceMappingURL=recognitions.module.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecognitionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_message_helper__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils_DataValidation__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Utils_Codes__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RecognitionsPage = /** @class */ (function () {
    function RecognitionsPage(navCtrl, navParams, modalCtrl, httpCall, codes, dataValidation, msgHelper, alertController, datePipe) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.httpCall = httpCall;
        this.codes = codes;
        this.dataValidation = dataValidation;
        this.msgHelper = msgHelper;
        this.alertController = alertController;
        this.datePipe = datePipe;
        this.projects = null;
        this.recognitions = null;
    }
    RecognitionsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad RecognitionsPage');
        //Call the change password API
        var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));
        console.error(JSON.stringify(currentUserInfo));
        if (this.dataValidation.isEmptyJson(currentUserInfo)) {
            this.msgHelper.showToast('Could not fetch user id');
            return;
        }
        //Get user wise project list
        var requestJson = {
            "AssignedUserId": currentUserInfo[0]['UserId'],
            "ProjectYear": new Date().getFullYear(),
            "AppType": "W"
        };
        this.httpCall.callApi(requestJson, this.codes.API_GET_USER_WISE_PROJECT_REPORT).then(function (responseJson) {
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog('Error !!', 'Empty response received from server !!!');
                return;
            }
            _this.projects = responseJson['resultData'];
            var _loop_1 = function (i) {
                _this.projects[i]['imagePath'] = _this.getProjectTypeImage(_this.projects[i]['ProjectImage']);
                reqJson = {
                    "ProjectId": _this.projects[i]['ProjectId'],
                    "AssignedUserId": currentUserInfo[0]['UserId'],
                    "ProjectYear": new Date().getFullYear(),
                    "AppType": "W"
                };
                _this.httpCall.callApi(reqJson, _this.codes.API_GET_USER_WISE_RECOGNITION).then(function (respJson) {
                    if (_this.dataValidation.isEmptyJson(respJson)) {
                        console.error("Empty Response ");
                        return;
                    }
                    _this.projects[i]['recognitions'] = respJson['resultData'];
                    for (var j = 0; j < _this.projects[i]['recognitions'].length; j++) {
                        _this.projects[i]['recognitions'][j]['progress'] = _this.getProgress(_this.projects[i]['recognitions'][j]['AchievePercentage'], _this.projects[i]['recognitions'][j]['ProgressionLevel']);
                    }
                });
            };
            var reqJson;
            //Call the recognitions for every projects
            for (var i = 0; i < _this.projects.length; i++) {
                _loop_1(i);
            }
        });
    };
    //TODO: Fix this
    RecognitionsPage.prototype.getProjectTypeImage = function (projectImage) {
        if (projectImage == "Icons/microphone.png") {
            return "../../assets/imgs/icon_mic.png";
        }
        return "../../assets/imgs/icon_image.png";
    };
    RecognitionsPage.prototype.goToUserMessages = function () {
        var userModal = this.modalCtrl.create('UserMessageNotificationListPage');
        userModal.present();
    };
    RecognitionsPage.prototype.getProgress = function (total, perUnit) {
        console.error('Get Progresss : ' + total + ", " + perUnit);
        var act = perUnit.split("/");
        var percentage = (Number(act[0]) / Number(act[1])) * Number(total);
        console.error('Progresss : ' + percentage);
        return percentage;
    };
    RecognitionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-recognitions',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/recognitions/recognitions.html"*/'<ion-header style="padding-left:10px !important; padding-right:10px !important">\n  <!--header starts here-->\n  <ion-row>\n   <ion-col class="nopadding mt-16" (click)="goToProjectSelection()">\n     <round-progress [current]="75" [max]="100" [radius]="20" [stroke]="7" [color]="\'#00ff00\'"></round-progress>\n     <img src="../../assets/imgs/icon_video.png" style="width: 26px !important;\n     position: absolute;\n     top: 7px !important;\n     left: 7px !important;" />\n   </ion-col>\n\n   <ion-col class="nopadding mt-20">\n     <star-provider [coins]="50" [stars]="20" [videos]="150"></star-provider>\n   </ion-col>\n\n   <ion-col class="nopadding">\n    <user-info [messageNumber]="0" [notificationNumber]="0" (click)="goToUserMessages()" style="position: absolute;top: 0px !important;right: 0px !important;"></user-info>      \n   </ion-col>\n\n </ion-row>\n<!--header ends here-->\n</ion-header>\n\n<!--Body starts here-->\n<ion-content padding class="background-content mt-66" style="height: 80% !important; width: 95% !important; margin-left: 2.5% !important; text-align: center;">\n\n\n\n  <ion-list *ngIf="!dataValidation.isEmptyJson(projects)">\n    <ion-item *ngFor="let project of projects">\n    <ion-grid>\n\n      <ion-row>\n        <ion-col col-2 style="margin-top: 20px !important;">\n          <img [src]="project[\'imagePath\']" class="camera-img-wrapper" />\n        </ion-col>\n        <ion-col col-10>\n\n      <ion-row>\n        <ion-col style="text-align: left !important;"><ion-badge color="light">{{project[\'ProjectOwnerName\']}}</ion-badge></ion-col>\n        <ion-col style="text-align: right !important;">\n        <ion-badge color="dark">{{project[\'PhaseName\']}}</ion-badge>\n      </ion-col>\n      </ion-row>\n      <ion-row>\n        <h2 style="color: dodgerblue !important; font-weight: 600 !important;margin-top:-2px !important">{{project[\'ProjectName\']}}</h2>\n      </ion-row>\n      <ion-row style="padding-top: 5px !important; padding-bottom: 5px !important;">\n        <ion-col><h3 style="color: #8f1f1f !important; font-weight: 800 !important;font-size: 12px !important;">{{project[\'ActivityName\']}}</h3></ion-col>\n      </ion-row>\n      <ion-row>\n        <span style="color: dodgerblue !important; font-size: 12px !important;"><ion-icon name="calendar"></ion-icon> </span>\n        &nbsp;\n        <span style="color: dodgerblue !important; font-size: 12px !important;">Project Date : </span> &nbsp;<span style="color: #919191 !important; font-weight: 600 !important; font-size: 12px !important;">{{datePipe.transform(project[\'ProjectExpectedStartDate\'],\'d,MMM\')}}</span>\n        &nbsp;<span style="color: dodgerblue !important; margin-top: 2px !important; font-size: 10px !important;">to</span> &nbsp;\n        <span style="color: #919191 !important; font-weight: 600 !important; font-size: 12px !important;">{{datePipe.transform(project[\'ProjectExpectedEndDate\'],\'d,MMM\')}}</span>\n      </ion-row>\n      </ion-col>\n      </ion-row>\n      \n   <p *ngIf="!dataValidation.isEmptyJson(project[\'recognitions\'])">\n      <ion-row *ngFor="let recognition of project[\'recognitions\']">\n        <ion-grid>\n          <ion-row>\n            <ion-col style="font-size:12px !important; font-weight: 500 !important ;">\n              <span><ion-icon name="calendar"></ion-icon> </span>\n              <span style="color: #919191 !important;">Completion Date:</span>\n              <span style="color: dodgerblue !important;"> {{datePipe.transform(recognition[\'ProjectCloserDate\'],\'d,MMM\')}}</span>\n            </ion-col>\n            <ion-col style="font-size: 12px !important;font-weight: 500 !important;">\n              <span><ion-icon name="calendar"></ion-icon> </span>\n              <span style="color: #919191 !important;">Finish Date:</span> \n              <span style="color: dodgerblue !important;">{{datePipe.transform(recognition[\'FinishedDate\'],\'d,MMM\')}}</span>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col style="text-align:center !important">\n              <div style="width:35px !important; height:35px !important; ">\n                <img src="../../assets/imgs/coupon.png" style="margin-top:2px !important; width: 15px !important; height: 15px !important; margin-left:20% !important;"  />\n                <div style="margin-top:2px !important; margin-left: 21% !important;">\n                  <h2 style="color: #919191 !important;  font-size:12px !important; font-weight:800 !important">{{dataValidation.roundOff(recognition[\'AchieveCouponRewardQuantity\'])}}</h2>\n                </div>\n              </div>    \n            </ion-col>\n            <ion-col style="text-align:center !important">\n              <div style="width:35px !important; height:35px !important; ">\n                <img src="../../assets/imgs/coin.png" style="margin-top:2px !important; width: 15px !important; height: 15px !important; margin-left:20% !important;"  />\n                <div style="margin-top:2px !important; margin-left: 21% !important;">\n                  <h2 style="color: #919191 !important;  font-size:12px !important; font-weight:800 !important">{{dataValidation.roundOff(recognition[\'AchieveCoinRewardQuantity\'])}}</h2>\n                </div>\n              </div>    \n            </ion-col>\n            <ion-col style="text-align:center !important">\n              <div style="width:35px !important; height:35px !important; ">\n                <img src="../../assets/imgs/diamond.svg" style="margin-top:2px !important; width: 15px !important; height: 15px !important; margin-left:20% !important;"  />\n                <div style="margin-top:2px !important; margin-left: 21% !important;">\n                  <h2 style="color: #919191 !important;  font-size:12px !important; font-weight:800 !important">{{dataValidation.roundOff(recognition[\'AchieveDiamondRewardQuantity\'])}}</h2>\n                </div>\n              </div>    \n            </ion-col>\n            <ion-col style="text-align:center !important">\n              <div style="width:35px !important; height:35px !important; ">\n                <img src="../../assets/imgs/trophy.svg" style="margin-top:2px !important; width: 15px !important; height: 15px !important; margin-left:20% !important;"  />\n                <div style="margin-top:2px !important; margin-left: 21% !important;">\n                  <h2 style="color: #919191 !important;  font-size:12px !important; font-weight:800 !important">{{dataValidation.roundOff(recognition[\'AchieveTrophyRewardQuantity\'])}}</h2>\n                </div>\n              </div>    \n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n            <progress-bar [progress]="recognition[\'progress\']" [color-degraded]="{\'0\': \'#fd4c4c\',  \'15\': \'#d87b24\', \'25\': \'#d89924\', \'50\' : \'#d8bd24\', \'75\' : \'#d3d022\', \'100\' : \'69d322\'}">\n            </progress-bar>\n          </ion-col>\n          </ion-row>\n\n        </ion-grid>\n      </ion-row>\n    </p>\n\n    </ion-grid>\n\n\n    </ion-item>\n\n  </ion-list>\n  \n \n\n\n</ion-content>\n<!--Body ends here-->\n\n<!--Footer starts here-->\n<ion-footer style="background-color: #efefef; text-align: center;">\n  <button ion-button clear (click)="navCtrl.setRoot(\'ProjectHomePage\')" *ngIf="dataValidation.doesContainMenu(\'Projects\')"><img src="../../assets/imgs/menu_proyectos_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear (click)="navCtrl.setRoot(\'RecognitionsPage\')" *ngIf="dataValidation.doesContainMenu(\'Recognition\')"><img src="../../assets/imgs/menu_reconocimientos_on.png" style="width: 15px !important;"/></button>\n  <button ion-button clear (click)="navCtrl.setRoot(\'RewardsPage\')" *ngIf="dataValidation.doesContainMenu(\'Rewards\')"><img src="../../assets/imgs/menu_recompensas_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear *ngIf="dataValidation.doesContainMenu(\'Talents\')" [disabled]=true><img src="../../assets/imgs/menu_talentos_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear (click)="navCtrl.setRoot(\'CollaboratorPage\')" *ngIf="dataValidation.doesContainMenu(\'Collaborators\')" ><img src="../../assets/imgs/menu_colaboradores_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear (click)="navCtrl.setRoot(\'PermissionsPage\')" *ngIf="dataValidation.doesContainMenu(\'Permissions\')"><img src="../../assets/imgs/menu_permisos_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear *ngIf="dataValidation.doesContainMenu(\'Calendar\')" (click)="navCtrl.setRoot(\'EventListPage\')"><img src="../../assets/imgs/menu_calendario_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear *ngIf="dataValidation.doesContainMenu(\'Configuration\')" (click)="navCtrl.setRoot(\'GeneralSettingsPage\')"><img src="../../assets/imgs/menu_configuracion_off.png" style="width: 15px !important;"/></button>\n</ion-footer>\n\n<!--Footer ends here-->'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/recognitions/recognitions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__Utils_Codes__["a" /* Codes */], __WEBPACK_IMPORTED_MODULE_2__Utils_DataValidation__["a" /* DataValidation */],
            __WEBPACK_IMPORTED_MODULE_1__providers_message_helper__["a" /* MessageHelper */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_6__angular_common__["DatePipe"]])
    ], RecognitionsPage);
    return RecognitionsPage;
}());

//# sourceMappingURL=recognitions.js.map

/***/ })

});
//# sourceMappingURL=4.js.map