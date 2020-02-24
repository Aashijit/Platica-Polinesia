webpackJsonp([4],{

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsPageModule", function() { return PermissionsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_components_module__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__permissions__ = __webpack_require__(458);
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

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_message_helper__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
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
    function PermissionsPage(navCtrl, navParams, msgHelper) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.msgHelper = msgHelper;
        this.permissionList = null;
        this.permissionList = [
            {
                "_MenuId": "0",
                "_CanView": "1",
                "_CanAdd": "1",
                "_CanDelete": "0",
                "_CanModify": "0",
                "_HisOnlyUser": "1"
            },
            {
                "_MenuId": "1",
                "_CanView": "1",
                "_CanAdd": "1",
                "_CanDelete": "1",
                "_CanModify": "1",
                "_HisOnlyUser": "1"
            },
            {
                "_MenuId": "2",
                "_CanView": "1",
                "_CanAdd": "1",
                "_CanDelete": "0",
                "_CanModify": "1",
                "_HisOnlyUser": "1"
            },
            {
                "_MenuId": "3",
                "_CanView": "0",
                "_CanAdd": "1",
                "_CanDelete": "1",
                "_CanModify": "1",
                "_HisOnlyUser": "1"
            },
            {
                "_MenuId": "5",
                "_CanView": "1",
                "_CanAdd": "1",
                "_CanDelete": "1",
                "_CanModify": "1",
                "_HisOnlyUser": "1"
            },
            {
                "_MenuId": "6",
                "_CanView": "1",
                "_CanAdd": "1",
                "_CanDelete": "1",
                "_CanModify": "1",
                "_HisOnlyUser": "1"
            },
            {
                "_MenuId": "7",
                "_CanView": "1",
                "_CanAdd": "1",
                "_CanDelete": "1",
                "_CanModify": "1",
                "_HisOnlyUser": "1"
            },
            {
                "_MenuId": "8",
                "_CanView": "1",
                "_CanAdd": "1",
                "_CanDelete": "1",
                "_CanModify": "1",
                "_HisOnlyUser": "1"
            }
        ];
        //Check if it is present in the local storage
        this.permissionList = JSON.parse(localStorage.getItem('Permission'));
    }
    PermissionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PermissionsPage');
    };
    PermissionsPage.prototype.change = function (k, string) {
        if (this.permissionList[k][string] == '1')
            this.permissionList[k][string] = '0';
        else
            this.permissionList[k][string] = '1';
    };
    PermissionsPage.prototype.updatePermission = function () {
        localStorage.setItem('Permission', JSON.stringify(this.permissionList));
        if (localStorage.getItem('Permission') != null) {
            var permissions = [
                {
                    "_MenuId": "1",
                    "_CanView": "1",
                },
                {
                    "_MenuId": "2",
                    "_CanView": "1",
                },
                {
                    "_MenuId": "3",
                    "_CanView": "1",
                },
                {
                    "_MenuId": "4",
                    "_CanView": "1",
                },
                {
                    "_MenuId": "5",
                    "_CanView": "1",
                },
                {
                    "_MenuId": "6",
                    "_CanView": "1",
                },
                {
                    "_MenuId": "7",
                    "_CanView": "1",
                },
                {
                    "_MenuId": "8",
                    "_CanView": "1",
                },
                {
                    "_MenuId": "9",
                    "_CanView": "1",
                }
            ];
            this.navCtrl.setRoot('PermissionsHomeTempPage', { 'Permissions': permissions });
            this.msgHelper.showToast('Permissions updated !!!');
        }
    };
    PermissionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-permissions',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/permissions/permissions.html"*/'<ion-header style="padding-left:10px !important; padding-right:10px !important">\n  <!--header starts here-->\n  <ion-row>\n   <ion-col class="nopadding mt-16" (click)="goToProjectSelection()">\n     <round-progress [current]="75" [max]="100" [radius]="20" [stroke]="7" [color]="\'#00ff00\'"></round-progress>\n     <img src="../../assets/imgs/icon_video.png" style="width: 26px !important;\n     position: absolute;\n     top: 7px !important;\n     left: 7px !important;" />\n   </ion-col>\n\n   <ion-col class="nopadding mt-20">\n     <star-provider [coins]="50" [stars]="20" [videos]="150"></star-provider>\n   </ion-col>\n\n   <ion-col class="nopadding">\n    <user-info [messageNumber]="0" [notificationNumber]="0" (click)="goToUserMessages()" style="position: absolute;top: 0px !important;right: 0px !important;"></user-info>      \n   </ion-col>\n\n </ion-row>\n<!--header ends here-->\n</ion-header>\n\n<!--Body starts here-->\n<ion-content padding class="background-content mt-66" style="height: 80% !important; width: 95% !important; margin-left: 2.5% !important; text-align: center;">\n\n  <ion-item>\n    <ion-label floating>Select user type</ion-label>\n    <ion-select interface="popover">\n      <ion-option value="sa">Super Admin</ion-option>\n      <ion-option value="a" selected>Admin</ion-option>\n      <ion-option value="gu">General User</ion-option>\n      <ion-option value="sra">SRA</ion-option>\n      <ion-option value="c">Collaborator</ion-option>\n      <ion-option value="es">Editor-Senior</ion-option>\n      <ion-option value="ej">Editor-Junior</ion-option>\n      <ion-option value="ei">Editor-Intern</ion-option>\n    </ion-select>\n  </ion-item>\n\n\n\n  <ion-list style="margin-top: 10% !important;">\n\n    <ion-item>\n      <ion-row>\n        <ion-col col-6><strong style="color: rgb(3, 93, 116) !important;">Projects</strong></ion-col>\n\n        <ion-col col-1 (click)="change(0,\'_CanAdd\')" [ngClass]="permissionList[0][\'_CanAdd\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="add"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(0,\'_CanModify\')" [ngClass]="permissionList[0][\'_CanModify\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="create"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(0,\'_CanDelete\')" [ngClass]="permissionList[0][\'_CanDelete\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="trash"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1  (click)="change(0,\'_CanView\')" [ngClass]="permissionList[0][\'_CanView\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="eye"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(0,\'_HisOnlyUser\')" [ngClass]="permissionList[0][\'_HisOnlyUser\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="contact"></ion-icon></ion-col>\n      </ion-row>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-row>\n        <ion-col col-6><strong style="color: rgb(3, 93, 116) !important;">Recognition</strong></ion-col>\n\n        <ion-col col-1 (click)="change(1,\'_CanAdd\')" [ngClass]="permissionList[1][\'_CanAdd\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="add"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(1,\'_CanModify\')" [ngClass]="permissionList[1][\'_CanModify\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="create"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(1,\'_CanDelete\')" [ngClass]="permissionList[1][\'_CanDelete\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="trash"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1  (click)="change(1,\'_CanView\')" [ngClass]="permissionList[1][\'_CanView\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="eye"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(1,\'_HisOnlyUser\')" [ngClass]="permissionList[1][\'_HisOnlyUser\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="contact"></ion-icon></ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <ion-row>\n        <ion-col col-6><strong style="color: rgb(3, 93, 116) !important;">Rewards</strong></ion-col>\n\n        <ion-col col-1 (click)="change(2,\'_CanAdd\')" [ngClass]="permissionList[2][\'_CanAdd\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="add"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(2,\'_CanModify\')" [ngClass]="permissionList[2][\'_CanModify\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="create"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(2,\'_CanDelete\')" [ngClass]="permissionList[2][\'_CanDelete\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="trash"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(2,\'_CanView\')" [ngClass]="permissionList[2][\'_CanView\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="eye"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1  (click)="change(2,\'_HisOnlyUser\')" [ngClass]="permissionList[2][\'_HisOnlyUser\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="contact"></ion-icon></ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <ion-row>\n        <ion-col col-6><strong style="color: rgb(3, 93, 116) !important;">Talents</strong></ion-col>\n\n        <ion-col col-1 (click)="change(3,\'_CanAdd\')" [ngClass]="permissionList[3][\'_CanAdd\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="add"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(3,\'_CanModify\')" [ngClass]="permissionList[3][\'_CanModify\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="create"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(3,\'_CanDelete\')" [ngClass]="permissionList[3][\'_CanDelete\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="trash"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(3,\'_CanView\')" [ngClass]="permissionList[3][\'_CanView\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="eye"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(3,\'_HisOnlyUser\')" [ngClass]="permissionList[3][\'_HisOnlyUser\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="contact"></ion-icon></ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <ion-row>\n        <ion-col col-6><strong style="color: rgb(3, 93, 116) !important;">Collaborator</strong></ion-col>\n\n        <ion-col col-1 (click)="change(4,\'_CanAdd\')" [ngClass]="permissionList[4][\'_CanAdd\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="add"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(4,\'_CanModify\')" [ngClass]="permissionList[4][\'_CanModify\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="create"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(4,\'_CanDelete\')"  [ngClass]="permissionList[4][\'_CanDelete\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="trash"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(4,\'_CanView\')" [ngClass]="permissionList[4][\'_CanView\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="eye"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(4,\'_HisOnlyUser\')" [ngClass]="permissionList[4][\'_HisOnlyUser\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="contact"></ion-icon></ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <ion-row>\n        <ion-col col-6><strong style="color: rgb(3, 93, 116) !important;">Permissions</strong></ion-col>\n\n        <ion-col col-1 (click)="change(5,\'_CanAdd\')"  [ngClass]="permissionList[5][\'_CanAdd\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="add"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(5,\'_CanModify\')"  [ngClass]="permissionList[5][\'_CanModify\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="create"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(5,\'_CanDelete\')" [ngClass]="permissionList[5][\'_CanDelete\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="trash"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(5,\'_CanView\')" [ngClass]="permissionList[5][\'_CanView\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="eye"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(5,\'_HisOnlyUser\')" [ngClass]="permissionList[5][\'_HisOnlyUser\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="contact"></ion-icon></ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <ion-row>\n        <ion-col col-6><strong style="color: rgb(3, 93, 116) !important;">Calendar</strong></ion-col>\n\n        <ion-col col-1  (click)="change(6,\'_CanAdd\')"  [ngClass]="permissionList[6][\'_CanAdd\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="add"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(6,\'_CanModify\')" [ngClass]="permissionList[6][\'_CanModify\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="create"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(6,\'_CanDelete\')" [ngClass]="permissionList[6][\'_CanDelete\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="trash"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1  (click)="change(6,\'_CanView\')" [ngClass]="permissionList[6][\'_CanView\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="eye"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(6,\'_HisOnlyUser\')" [ngClass]="permissionList[6][\'_HisOnlyUser\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="contact"></ion-icon></ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item>\n      <ion-row>\n        <ion-col col-6><strong style="color: rgb(3, 93, 116) !important;">Configuration</strong></ion-col>\n\n        <ion-col col-1  (click)="change(7,\'_CanAdd\')"  [ngClass]="permissionList[7][\'_CanAdd\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="add"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(7,\'_CanModify\')" [ngClass]="permissionList[7][\'_CanModify\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="create"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(7,\'_CanDelete\')" [ngClass]="permissionList[7][\'_CanDelete\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="trash"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(7,\'_CanView\')" [ngClass]="permissionList[7][\'_CanView\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="eye"></ion-icon></ion-col>\n        &nbsp;\n        <ion-col col-1 (click)="change(7,\'_HisOnlyUser\')" [ngClass]="permissionList[7][\'_HisOnlyUser\']==\'1\' ? \'selected\' : \'unselected\'"><ion-icon name="contact"></ion-icon></ion-col>\n      </ion-row>\n    </ion-item>\n\n  </ion-list>\n\n\n  <button ion-button outline (click)="updatePermission()">Update Permission</button>\n\n\n</ion-content>\n<!--Body ends here-->\n\n<!--Footer starts here-->\n<ion-footer style="background-color: #efefef; text-align: center;">\n <button ion-button clear ><img src="../../assets/imgs/menu_proyectos_off.png" style="width: 15px !important;"/></button>\n <button ion-button clear ><img src="../../assets/imgs/menu_reconocimientos_off.png" style="width: 15px !important;"/></button>\n <button ion-button clear ><img src="../../assets/imgs/menu_recompensas_off.png" style="width: 15px !important;"/></button>\n <button ion-button clear ><img src="../../assets/imgs/menu_talentos_off.png" style="width: 15px !important;"/></button>\n <button ion-button clear ><img src="../../assets/imgs/menu_colaboradores_off.png" style="width: 15px !important;"/></button>\n <button ion-button clear ><img src="../../assets/imgs/menu_permisos_on.png" style="width: 15px !important;"/></button>\n <button ion-button clear ><img src="../../assets/imgs/menu_calendario_off.png" style="width: 15px !important;"/></button>\n <button ion-button clear  (click)="navCtrl.setRoot(\'GeneralSettingsPage\')"><img src="../../assets/imgs/menu_configuracion_off.png" style="width: 15px !important;"/></button>\n</ion-footer>\n<!--Footer ends here-->'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/permissions/permissions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_0__providers_message_helper__["a" /* MessageHelper */]])
    ], PermissionsPage);
    return PermissionsPage;
}());

//# sourceMappingURL=permissions.js.map

/***/ })

});
//# sourceMappingURL=4.js.map