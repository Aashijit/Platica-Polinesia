webpackJsonp([36],{

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsPageModule", function() { return PermissionsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_components_module__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__permissions__ = __webpack_require__(478);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PermissionsPageModule = /** @class */ (function () {
    function PermissionsPageModule() {
    }
    PermissionsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__permissions__["a" /* PermissionsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_4__permissions__["a" /* PermissionsPage */]),
                __WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar__["RoundProgressModule"],
                __WEBPACK_IMPORTED_MODULE_1__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], PermissionsPageModule);
    return PermissionsPageModule;
}());

//# sourceMappingURL=permissions.module.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionsPage; });
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








var PermissionsPage = /** @class */ (function () {
    function PermissionsPage(navCtrl, navParams, modalCtrl, httpCall, codes, dataValidation, msgHelper, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.httpCall = httpCall;
        this.codes = codes;
        this.dataValidation = dataValidation;
        this.msgHelper = msgHelper;
        this.alertController = alertController;
        this.permissionList = null;
        this.userTypes = null;
        this.selectedUserTypeId = 1; //Default
    }
    PermissionsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad PermissionsPage');
        //Get the User Types
        var requestJson = {
            "AppType": "W"
        };
        this.httpCall.callApi(requestJson, this.codes.API_GET_USER_TYPE_LIST).then(function (responseJson) {
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog("Error !!!", "Empty response reeceived from Get user type list");
                return;
            }
            if (responseJson['status'] != 1) {
                _this.msgHelper.showErrorDialog('Error !!!', responseJson['resMessage']);
                return;
            }
            _this.userTypes = responseJson['resultData'];
        });
        var permissionRequestJson = {
            "UserTypeId": this.selectedUserTypeId,
            "AppType": "W"
        };
        this.httpCall.callApi(permissionRequestJson, this.codes.API_GET_PERMISSION_INFORMATION).then(function (responseJson) {
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog("Error !!!", "Empty response reeceived from Get Permission Information");
                return;
            }
            _this.permissionList = responseJson['resultData'];
            console.warn("Permission List : " + JSON.stringify(_this.permissionList));
        });
    };
    PermissionsPage.prototype.change = function (k, string) {
        if (this.permissionList[k][string] == false)
            this.permissionList[k][string] = true;
        else
            this.permissionList[k][string] = false;
    };
    PermissionsPage.prototype.recallPermission = function () {
        var _this = this;
        var permissionRequestJson = {
            "UserTypeId": this.selectedUserTypeId,
            "AppType": "W"
        };
        this.httpCall.callApi(permissionRequestJson, this.codes.API_GET_PERMISSION_INFORMATION).then(function (responseJson) {
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog("Error !!!", "Empty response reeceived from Get Permission Information");
                return;
            }
            _this.permissionList = responseJson['resultData'];
            // console.warn("Permission List : "+JSON.stringify(this.permissionList));
        });
    };
    PermissionsPage.prototype.updatePermission = function () {
        var _this = this;
        var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));
        if (this.dataValidation.isEmptyJson(currentUserInfo)) {
            this.msgHelper.showToast('Could not fetch user id');
            return;
        }
        //Udpate all the persmissions one by one
        var loading = this.msgHelper.showWorkingDialog('Started Updating Permission ...');
        for (var i = 0; i < this.permissionList.length; i++) {
            var requestJson = {
                "MenuId": this.permissionList[i]['MenuId'],
                "MenuPermissionId": this.permissionList[i]['MenuPermissionId'],
                "UserTypeId": this.selectedUserTypeId,
                "CanAdd": this.permissionList[i]['CanAdd'],
                "CanModify": this.permissionList[i]['CanModify'],
                "CanDelete": this.permissionList[i]['CanDelete'],
                "CanView": this.permissionList[i]['CanView'],
                "CanOnlyHisUser": this.permissionList[i]['CanOnlyHisUser'],
                "ModifiedByID": currentUserInfo[0]['UserId'],
                "AppType": "W"
            };
            this.httpCall.callApi(requestJson, this.codes.API_UPDATE_PERMISSION).then(function (responseJson) {
                if (_this.dataValidation.isEmptyJson(responseJson)) {
                    _this.msgHelper.showErrorDialog("Error !!!", "Empty response reeceived from Get Permission Information");
                    return;
                }
            });
        }
        loading.dismiss();
    };
    PermissionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-permissions',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/permissions/permissions.html"*/'<ion-header style="padding-left:10px !important; padding-right:10px !important">\n  <!--header starts here-->\n  <ion-row>\n   <ion-col class="nopadding mt-16" (click)="goToProjectSelection()">\n     <round-progress [current]="75" [max]="100" [radius]="20" [stroke]="7" [color]="\'#00ff00\'"></round-progress>\n     <img src="../../assets/imgs/icon_video.png" style="width: 26px !important;\n     position: absolute;\n     top: 7px !important;\n     left: 7px !important;" />\n   </ion-col>\n\n   <ion-col class="nopadding mt-20">\n     <star-provider [coins]="50" [stars]="20" [videos]="150"></star-provider>\n   </ion-col>\n\n   <ion-col class="nopadding">\n    <user-info [messageNumber]="0" [notificationNumber]="0" (click)="goToUserMessages()" style="position: absolute;top: 0px !important;right: 0px !important;"></user-info>      \n   </ion-col>\n\n </ion-row>\n<!--header ends here-->\n</ion-header>\n\n<!--Body starts here-->\n<ion-content padding class="background-content mt-66" style="height: 80% !important; width: 95% !important; margin-left: 2.5% !important; text-align: center;">\n\n  <ion-item>\n    <ion-label floating>Select user type</ion-label>\n    <ion-select interface="popover" [(ngModel)]="selectedUserTypeId" (ionChange)="recallPermission()">\n      <p *ngFor="let userType of userTypes">\n      <ion-option value="{{userType[\'UserTypeId\']}}">{{userType[\'UserTypeName\']}}</ion-option>\n      </p>\n    </ion-select>\n  </ion-item>\n\n\n\n  <ion-list style="margin-top: 10% !important;" *ngIf="!dataValidation.isEmptyJson(permissionList)">\n\n    <ion-item>\n      <ion-row >\n        <ion-col col-6><strong style="color: rgb(3, 93, 116) !important;">Projects</strong></ion-col>\n\n        <ion-col col-1  (click)="change(0,\'CanAdd\')"  [ngClass]="permissionList[0][\'CanAdd\']==true ? \'selected\' : \'unselected\'"><ion-icon name="add"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(0,\'CanModify\')" [ngClass]="permissionList[0][\'CanModify\']==true ? \'selected\' : \'unselected\'"><ion-icon name="create"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(0,\'CanDelete\')" [ngClass]="permissionList[0][\'CanDelete\']==true ? \'selected\' : \'unselected\'"><ion-icon name="trash"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(0,\'CanView\')" [ngClass]="permissionList[0][\'CanView\']==true ? \'selected\' : \'unselected\'"><ion-icon name="eye"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(0,\'CanOnlyHisUser\')" [ngClass]="permissionList[0][\'CanOnlyHisUser\']==true ? \'selected\' : \'unselected\'"><ion-icon name="contact"></ion-icon></ion-col>\n      </ion-row>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-row>\n        <ion-col col-6><strong style="color: rgb(3, 93, 116) !important;">Recognition</strong></ion-col>\n\n        <ion-col col-1  (click)="change(1,\'CanAdd\')"  [ngClass]="permissionList[1][\'CanAdd\']==true ? \'selected\' : \'unselected\'"><ion-icon name="add"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(1,\'CanModify\')" [ngClass]="permissionList[1][\'CanModify\']==true ? \'selected\' : \'unselected\'"><ion-icon name="create"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(1,\'CanDelete\')" [ngClass]="permissionList[1][\'CanDelete\']==true ? \'selected\' : \'unselected\'"><ion-icon name="trash"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(1,\'CanView\')" [ngClass]="permissionList[1][\'CanView\']==true ? \'selected\' : \'unselected\'"><ion-icon name="eye"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(1,\'CanOnlyHisUser\')" [ngClass]="permissionList[1][\'CanOnlyHisUser\']==true ? \'selected\' : \'unselected\'"><ion-icon name="contact"></ion-icon></ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <ion-row>\n        <ion-col col-6><strong style="color: rgb(3, 93, 116) !important;">Rewards</strong></ion-col>\n\n        <ion-col col-1  (click)="change(2,\'CanAdd\')"  [ngClass]="permissionList[2][\'CanAdd\']==true ? \'selected\' : \'unselected\'"><ion-icon name="add"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(2,\'CanModify\')" [ngClass]="permissionList[2][\'CanModify\']==true ? \'selected\' : \'unselected\'"><ion-icon name="create"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(2,\'CanDelete\')" [ngClass]="permissionList[2][\'CanDelete\']==true ? \'selected\' : \'unselected\'"><ion-icon name="trash"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(2,\'CanView\')" [ngClass]="permissionList[2][\'CanView\']==true ? \'selected\' : \'unselected\'"><ion-icon name="eye"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(2,\'CanOnlyHisUser\')" [ngClass]="permissionList[2][\'CanOnlyHisUser\']==true ? \'selected\' : \'unselected\'"><ion-icon name="contact"></ion-icon></ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <ion-row>\n        <ion-col col-6><strong style="color: rgb(3, 93, 116) !important;">Talents</strong></ion-col>\n\n        <ion-col col-1  (click)="change(3,\'CanAdd\')"  [ngClass]="permissionList[3][\'CanAdd\']==true ? \'selected\' : \'unselected\'"><ion-icon name="add"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(3,\'CanModify\')" [ngClass]="permissionList[3][\'CanModify\']==true ? \'selected\' : \'unselected\'"><ion-icon name="create"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(3,\'CanDelete\')" [ngClass]="permissionList[3][\'CanDelete\']==true ? \'selected\' : \'unselected\'"><ion-icon name="trash"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(3,\'CanView\')" [ngClass]="permissionList[3][\'CanView\']==true ? \'selected\' : \'unselected\'"><ion-icon name="eye"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(3,\'CanOnlyHisUser\')" [ngClass]="permissionList[3][\'CanOnlyHisUser\']==true ? \'selected\' : \'unselected\'"><ion-icon name="contact"></ion-icon></ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <ion-row>\n        <ion-col col-6><strong style="color: rgb(3, 93, 116) !important;">Collaborator</strong></ion-col>\n\n        <ion-col col-1  (click)="change(4,\'CanAdd\')"  [ngClass]="permissionList[4][\'CanAdd\']==true ? \'selected\' : \'unselected\'"><ion-icon name="add"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(4,\'CanModify\')" [ngClass]="permissionList[4][\'CanModify\']==true ? \'selected\' : \'unselected\'"><ion-icon name="create"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(4,\'CanDelete\')" [ngClass]="permissionList[4][\'CanDelete\']==true ? \'selected\' : \'unselected\'"><ion-icon name="trash"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(4,\'CanView\')" [ngClass]="permissionList[4][\'CanView\']==true ? \'selected\' : \'unselected\'"><ion-icon name="eye"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(4,\'CanOnlyHisUser\')" [ngClass]="permissionList[4][\'CanOnlyHisUser\']==true ? \'selected\' : \'unselected\'"><ion-icon name="contact"></ion-icon></ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <ion-row>\n        <ion-col col-6><strong style="color: rgb(3, 93, 116) !important;">Permissions</strong></ion-col>\n\n        <ion-col col-1  (click)="change(5,\'CanAdd\')"  [ngClass]="permissionList[5][\'CanAdd\']==true ? \'selected\' : \'unselected\'"><ion-icon name="add"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(5,\'CanModify\')" [ngClass]="permissionList[5][\'CanModify\']==true ? \'selected\' : \'unselected\'"><ion-icon name="create"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(5,\'CanDelete\')" [ngClass]="permissionList[5][\'CanDelete\']==true ? \'selected\' : \'unselected\'"><ion-icon name="trash"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(5,\'CanView\')" [ngClass]="permissionList[5][\'CanView\']==true ? \'selected\' : \'unselected\'"><ion-icon name="eye"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(5,\'CanOnlyHisUser\')" [ngClass]="permissionList[5][\'CanOnlyHisUser\']==true ? \'selected\' : \'unselected\'"><ion-icon name="contact"></ion-icon></ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <ion-row>\n        <ion-col col-6><strong style="color: rgb(3, 93, 116) !important;">Calendar</strong></ion-col>\n\n        <ion-col col-1  (click)="change(6,\'CanAdd\')"  [ngClass]="permissionList[6][\'CanAdd\']==true ? \'selected\' : \'unselected\'"><ion-icon name="add"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(6,\'CanModify\')" [ngClass]="permissionList[6][\'CanModify\']==true ? \'selected\' : \'unselected\'"><ion-icon name="create"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(6,\'CanDelete\')" [ngClass]="permissionList[6][\'CanDelete\']==true ? \'selected\' : \'unselected\'"><ion-icon name="trash"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(6,\'CanView\')" [ngClass]="permissionList[6][\'CanView\']==true ? \'selected\' : \'unselected\'"><ion-icon name="eye"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(6,\'CanOnlyHisUser\')" [ngClass]="permissionList[6][\'CanOnlyHisUser\']==true ? \'selected\' : \'unselected\'"><ion-icon name="contact"></ion-icon></ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <ion-row>\n        <ion-col col-6><strong style="color: rgb(3, 93, 116) !important;">Configuration</strong></ion-col>\n\n        <ion-col col-1  (click)="change(7,\'CanAdd\')"  [ngClass]="permissionList[7][\'CanAdd\']==true ? \'selected\' : \'unselected\'"><ion-icon name="add"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(7,\'CanModify\')" [ngClass]="permissionList[7][\'CanModify\']==true ? \'selected\' : \'unselected\'"><ion-icon name="create"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(7,\'CanDelete\')" [ngClass]="permissionList[7][\'CanDelete\']==true ? \'selected\' : \'unselected\'"><ion-icon name="trash"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(7,\'CanView\')" [ngClass]="permissionList[7][\'CanView\']==true ? \'selected\' : \'unselected\'"><ion-icon name="eye"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(7,\'CanOnlyHisUser\')" [ngClass]="permissionList[7][\'CanOnlyHisUser\']==true ? \'selected\' : \'unselected\'"><ion-icon name="contact"></ion-icon></ion-col>\n      </ion-row>\n    </ion-item>\n\n  </ion-list>\n\n\n  <button ion-button outline (click)="updatePermission()">Update Permission</button>\n\n\n</ion-content>\n<!--Body ends here-->\n\n<!--Footer starts here-->\n<ion-footer style="background-color: #efefef; text-align: center;">\n  <button ion-button clear (click)="navCtrl.setRoot(\'ProjectHomePage\')" *ngIf="dataValidation.doesContainMenu(\'Projects\')"><img src="../../assets/imgs/menu_proyectos_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear (click)="navCtrl.setRoot(\'RecognitionsPage\')" *ngIf="dataValidation.doesContainMenu(\'Recognition\')"><img src="../../assets/imgs/menu_reconocimientos_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear (click)="navCtrl.setRoot(\'RewardsPage\')" *ngIf="dataValidation.doesContainMenu(\'Rewards\')"><img src="../../assets/imgs/menu_recompensas_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear *ngIf="dataValidation.doesContainMenu(\'Talents\')" [disabled]=true><img src="../../assets/imgs/menu_talentos_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear *ngIf="dataValidation.doesContainMenu(\'Collaborators\')" [disabled]=true><img src="../../assets/imgs/menu_colaboradores_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear (click)="navCtrl.setRoot(\'PermissionsPage\')" *ngIf="dataValidation.doesContainMenu(\'Permissions\')"><img src="../../assets/imgs/menu_permisos_on.png" style="width: 15px !important;"/></button>\n  <button ion-button clear *ngIf="dataValidation.doesContainMenu(\'Calendar\')" (click)="navCtrl.setRoot(\'EventListPage\')"><img src="../../assets/imgs/menu_calendario_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear *ngIf="dataValidation.doesContainMenu(\'Configuration\')" (click)="navCtrl.setRoot(\'GeneralSettingsPage\')"><img src="../../assets/imgs/menu_configuracion_off.png" style="width: 15px !important;"/></button>\n</ion-footer>\n\n<!--Footer ends here-->'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/permissions/permissions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__Utils_Codes__["a" /* Codes */], __WEBPACK_IMPORTED_MODULE_2__Utils_DataValidation__["a" /* DataValidation */],
            __WEBPACK_IMPORTED_MODULE_1__providers_message_helper__["a" /* MessageHelper */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["AlertController"]])
    ], PermissionsPage);
    return PermissionsPage;
}());

//# sourceMappingURL=permissions.js.map

/***/ })

});
//# sourceMappingURL=36.js.map