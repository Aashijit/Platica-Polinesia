webpackJsonp([6],{

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectHomePageModule", function() { return ProjectHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_components_module__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__project_home__ = __webpack_require__(479);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProjectHomePageModule = /** @class */ (function () {
    function ProjectHomePageModule() {
    }
    ProjectHomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__project_home__["a" /* ProjectHomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_4__project_home__["a" /* ProjectHomePage */]),
                __WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar__["RoundProgressModule"],
                __WEBPACK_IMPORTED_MODULE_1__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ProjectHomePageModule);
    return ProjectHomePageModule;
}());

//# sourceMappingURL=project-home.module.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectHomePage; });
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









var ProjectHomePage = /** @class */ (function () {
    function ProjectHomePage(navCtrl, navParams, modalCtrl, httpCall, codes, dataValidation, msgHelper, alertController, datePipe) {
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
    }
    ProjectHomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ProjectHomePage');
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
            for (var i = 0; i < _this.projects.length; i++) {
                _this.projects[i]['imagePath'] = _this.getProjectTypeImage(_this.projects[i]['ProjectImage']);
            }
        });
    };
    ProjectHomePage.prototype.addProject = function () {
        var userModal = this.modalCtrl.create('AddProjectPage');
        userModal.present();
    };
    //TODO: Fix this
    ProjectHomePage.prototype.getProjectTypeImage = function (projectImage) {
        if (projectImage == "Icons/microphone.png") {
            return "../../assets/imgs/icon_mic.png";
        }
        return "../../assets/imgs/icon_image.png";
    };
    ProjectHomePage.prototype.goToUserMessages = function () {
        var userModal = this.modalCtrl.create('UserMessageNotificationListPage');
        userModal.present();
    };
    ProjectHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-project-home',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/project-home/project-home.html"*/'<ion-header style="padding-left:10px !important; padding-right:10px !important">\n  <!--header starts here-->\n  <ion-row>\n    <ion-col class="nopadding mt-16" (click)="goToProjectSelection()">\n      <round-progress [current]="75" [max]="100" [radius]="20" [stroke]="7" [color]="\'#00ff00\'"></round-progress>\n      <img src="../../assets/imgs/icon_video.png" style="width: 26px !important;\n     position: absolute;\n     top: 7px !important;\n     left: 7px !important;" />\n    </ion-col>\n\n    <ion-col class="nopadding mt-20">\n      <star-provider [coins]="50" [stars]="20" [videos]="150"></star-provider>\n    </ion-col>\n\n    <ion-col class="nopadding">\n      <user-info [messageNumber]="0" [notificationNumber]="0" (click)="goToUserMessages()"\n        style="position: absolute;top: 0px !important;right: 0px !important;"></user-info>\n    </ion-col>\n\n  </ion-row>\n  <!--header ends here-->\n</ion-header>\n\n<!--Body starts here-->\n<ion-content padding class="background-content mt-66"\n  style="height: 80% !important; width: 95% !important; margin-left: 2.5% !important; text-align: center;">\n\n  <ion-list *ngIf="!dataValidation.isEmptyJson(projects)">\n    <ion-item *ngFor="let project of projects">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-2 style="margin-top: 20px !important;">\n            <img [src]="project[\'imagePath\']" class="camera-img-wrapper" />\n          </ion-col>\n          <ion-col col-10>\n        <ion-row>\n          <ion-col style="text-align: left !important;">\n            <ion-badge color="light">{{project[\'ProjectOwnerName\']}}</ion-badge>\n          </ion-col>\n          <ion-col style="text-align: right !important;">\n            <ion-badge color="dark">{{project[\'PhaseName\']}}</ion-badge>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <h2 style="color: dodgerblue !important; font-weight: 600 !important;margin-top:-2px !important">\n            {{project[\'ProjectName\']}}</h2>\n        </ion-row>\n        <ion-row style="padding-top: 5px !important; padding-bottom: 5px !important;">\n          <ion-col>\n            <h3 style="color: #8f1f1f !important; font-weight: 800 !important;font-size: 12px !important;">\n              {{project[\'ActivityName\']}}</h3>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <span style="color: dodgerblue !important; font-size: 12px !important;">Project Date : </span> &nbsp;\n          &nbsp;&nbsp; &nbsp;<span\n            style="color: #919191 !important; font-weight: 600 !important; font-size: 12px !important;">{{datePipe.transform(project[\'ProjectExpectedStartDate\'],\'d,MMM\')}}</span>\n          &nbsp; &nbsp; <span\n            style="color: dodgerblue !important; margin-top: 2px !important; font-size: 10px !important;">to</span>\n          &nbsp; &nbsp;\n          <span\n            style="color: #919191 !important; font-weight: 600 !important; font-size: 12px !important;">{{datePipe.transform(project[\'ProjectExpectedEndDate\'],\'d,MMM\')}}</span>\n        </ion-row>\n      </ion-col>\n      </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab (click)="addProject()">\n      <ion-icon name="add" mode="ios"></ion-icon>\n    </button>\n  </ion-fab>\n\n\n</ion-content>\n<!--Body ends here-->\n\n<!--Footer starts here-->\n<ion-footer style="background-color: #efefef; text-align: center;">\n  <button ion-button clear (click)="navCtrl.setRoot(\'ProjectHomePage\')"\n    *ngIf="dataValidation.doesContainMenu(\'Projects\')"><img src="../../assets/imgs/menu_proyectos_on.png"\n      style="width: 15px !important;" /></button>\n  <button ion-button clear (click)="navCtrl.setRoot(\'RecognitionsPage\')"\n    *ngIf="dataValidation.doesContainMenu(\'Recognition\')"><img src="../../assets/imgs/menu_reconocimientos_off.png"\n      style="width: 15px !important;" /></button>\n  <button ion-button clear (click)="navCtrl.setRoot(\'RewardsPage\')"\n    *ngIf="dataValidation.doesContainMenu(\'Rewards\')"><img src="../../assets/imgs/menu_recompensas_off.png"\n      style="width: 15px !important;" /></button>\n  <button ion-button clear *ngIf="dataValidation.doesContainMenu(\'Talents\')" [disabled]=true><img\n      src="../../assets/imgs/menu_talentos_off.png" style="width: 15px !important;" /></button>\n  <button ion-button clear *ngIf="dataValidation.doesContainMenu(\'Collaborators\')" [disabled]=true><img\n      src="../../assets/imgs/menu_colaboradores_off.png" style="width: 15px !important;" /></button>\n  <button ion-button clear (click)="navCtrl.setRoot(\'PermissionsPage\')"\n    *ngIf="dataValidation.doesContainMenu(\'Permissions\')"><img src="../../assets/imgs/menu_permisos_off.png"\n      style="width: 15px !important;" /></button>\n  <button ion-button clear *ngIf="dataValidation.doesContainMenu(\'Calendar\')"\n    (click)="navCtrl.setRoot(\'EventListPage\')"><img src="../../assets/imgs/menu_calendario_off.png"\n      style="width: 15px !important;" /></button>\n  <button ion-button clear *ngIf="dataValidation.doesContainMenu(\'Configuration\')"\n    (click)="navCtrl.setRoot(\'GeneralSettingsPage\')"><img src="../../assets/imgs/menu_configuracion_off.png"\n      style="width: 15px !important;" /></button>\n</ion-footer>\n\n<!--Footer ends here-->'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/project-home/project-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__Utils_Codes__["a" /* Codes */], __WEBPACK_IMPORTED_MODULE_2__Utils_DataValidation__["a" /* DataValidation */],
            __WEBPACK_IMPORTED_MODULE_1__providers_message_helper__["a" /* MessageHelper */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_6__angular_common__["DatePipe"]])
    ], ProjectHomePage);
    return ProjectHomePage;
}());

//# sourceMappingURL=project-home.js.map

/***/ })

});
//# sourceMappingURL=6.js.map