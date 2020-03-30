webpackJsonp([24],{

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectPageModule", function() { return AddProjectPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_project__ = __webpack_require__(463);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddProjectPageModule = /** @class */ (function () {
    function AddProjectPageModule() {
    }
    AddProjectPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_project__["a" /* AddProjectPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__add_project__["a" /* AddProjectPage */]),
            ],
        })
    ], AddProjectPageModule);
    return AddProjectPageModule;
}());

//# sourceMappingURL=add-project.module.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProjectPage; });
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








var AddProjectPage = /** @class */ (function () {
    function AddProjectPage(navCtrl, navParams, modalCtrl, httpCall, codes, dataValidation, msgHelper, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.httpCall = httpCall;
        this.codes = codes;
        this.dataValidation = dataValidation;
        this.msgHelper = msgHelper;
        this.alertController = alertController;
        this.projectName = null;
        this.projectAlias = null;
        this.projectDescription = null;
        this.businessUnitId = null;
        this.brandId = null;
        this.projectTypeId = null;
        this.nVideos = null;
        this.nPhotos = null;
        this.nWallpapers = null;
        this.nOthers = null;
        this.eStartDate = '2020-03-30';
        this.eEndDate = '2020-03-30';
        this.aStartDate = '2020-03-30';
        this.aEndDate = '2020-03-30';
        this.projectTypes = null;
        this.businessUnits = null;
        this.brands = null;
        this.users = null;
        this.areas = null;
        this.materials = null;
        this.activites = null;
        this.roles = null;
        this.areaIds = null;
    }
    AddProjectPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad AddProjectPage');
        //Load the project phases
        var requestJson = {
            "ProjectStatus": 4,
            "AppType": "W"
        };
        this.httpCall.callApi(requestJson, this.codes.API_GET_PROJECT_INFO).then(function (responseJson) {
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog('Error !!!', 'Empty response received from Server !!!');
                return;
            }
            _this.users = responseJson['resultData']['ProjectUserLookup'];
            _this.businessUnits = responseJson['resultData']['BULookup'];
            _this.areas = responseJson['resultData']['AreaLookup'];
            _this.brands = responseJson['resultData']['BrandLookup'];
            _this.projectTypes = responseJson['resultData']['ProjectTypeLookup'];
            _this.materials = responseJson['resultData']['MaterialLookup'];
            _this.roles = responseJson['resultData']['RoleLookup'];
        });
        var reqJson = {
            "AppType": "W"
        };
        this.httpCall.callApi(reqJson, this.codes.API_GET_ACTIVITY).then(function (respJson) {
            if (_this.dataValidation.isEmptyJson(respJson)) {
                _this.msgHelper.showErrorDialog('Error !!!', 'Empty response received from Server !!!');
                return;
            }
            _this.activites = respJson['resultData'];
            for (var i = 0; i < _this.activites.length; i++) {
                _this.activites[i]['PhaseName'] = _this.getPhaseNameByPhaseId(_this.activites[i]['PhaseId']);
                _this.activites[i]['userIds'] = [];
                _this.activites[i]['materialId'] = 1;
                _this.activites[i]['roleId'] = 1;
                _this.activites[i]['eStartDate'] = '2020-03-30';
                _this.activites[i]['aStartDate'] = '2020-03-30';
                _this.activites[i]['eEndDate'] = '2020-03-30';
                _this.activites[i]['aEndDate'] = '2020-03-30';
            }
        });
    };
    AddProjectPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    //TODO: Make this server driven
    AddProjectPage.prototype.getPhaseNameByPhaseId = function (phaseId) {
        if (phaseId == 1)
            return "Pre Production";
        if (phaseId == 2)
            return "Production";
        if (phaseId == 3)
            return "Post Production";
        if (phaseId == 4)
            return "Analysis";
    };
    AddProjectPage.prototype.addProject = function () {
        var _this = this;
        var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));
        if (this.dataValidation.isEmptyJson(currentUserInfo)) {
            this.msgHelper.showToast('Could not fetch user id');
            return;
        }
        //Create the json for activity
        var projectPhases = [];
        for (var i = 0; i < this.activites.length; i++) {
            projectPhases[i] = this.getActivityInPostFormat(this.activites[i]);
        }
        var requestData = {
            "ProjectMode": 1,
            "SelectedArea": this.areaIds,
            "ProjectName": this.projectName,
            "ProjectAlias": this.projectAlias,
            "ProjectDescription": this.projectDescription,
            "BusinessUnitID": this.businessUnitId,
            "ProjectTypeID": this.projectTypeId,
            "ExpectedStartDate": this.eStartDate,
            "ActualStartDate": this.aStartDate,
            "ExpectedEndDate": this.eEndDate,
            "ActualEndDate": this.aEndDate,
            "IsBranded": false,
            "BrandID": this.brandId,
            "ProjectIcon": null,
            "ProjectStatus": 0,
            "CompletePer": 0.0,
            "ProjectOwner": currentUserInfo[0]['UserId'],
            "ProjectOwnerName": null,
            "NoOfVideos": this.nVideos,
            "NoOfWallPapers": this.nWallpapers,
            "NoOfPhotos": this.nPhotos,
            "NoOfOthers": this.nOthers,
            "CreatedByID": currentUserInfo[0]['UserId'],
            "BrandImagePath": null,
            "CreatedOn": '2020-03-30',
            "CreatedBy": currentUserInfo[0]['UserId'],
            "CreatedByUserName": null,
            "ModifiedOn": '2020-03-30',
            "LastModifiedBy": 0,
            "LastModifiedByUserName": null,
            "ProjectPhases": projectPhases
        };
        console.warn('To Post this data : ' + JSON.stringify(requestData));
        var loading = this.msgHelper.showWorkingDialog('Adding Project ...');
        this.httpCall.callApi(requestData, this.codes.API_ADD_PROJECT).then(function (responseJson) {
            loading.dismiss();
            if (_this.dataValidation.isEmptyJson(requestData)) {
                _this.msgHelper.showErrorDialog('Error !!!', 'Empty response received !!!');
                return;
            }
            if (responseJson['status'] == 1) {
                _this.msgHelper.showToast('Added Project Successfully !!!!');
                _this.navCtrl.pop();
            }
        });
    };
    AddProjectPage.prototype.getActivityInPostFormat = function (activity) {
        var json = {
            "Activity": {
                "AssignedUserID": activity['userIds'],
                "ProjectID": 0,
                "ProjectTypeID": this.projectTypeId,
                "PhaseID": activity['PhaseId'],
                "ActivityID": activity['ActivityId'],
                "EndDate": activity['aEndDate'],
                "AssignedMaterialID": activity['materialId'],
                "ActivityRoleID": activity['roleId'],
                "CoinRewardQuantity": activity['CoinRewardQuantity'],
                "DiamondRewardQuantity": activity['DiamondRewardQuantity'],
                "CouponRewardQuantity": activity['CouponRewardQuantity'],
                "TrophyRewardQuantity": activity['TrophyRewardQuantity'],
                "IsFinished": false
            },
            "ProjectID": 0,
            "PhaseID": activity['PhaseId'],
            "PhaseName": activity['PhaseName'],
            "PhaseDescription": activity['PhaseName'],
            "ExpectedStartDate": activity['eStartDate'],
            "ActualStartDate": activity['aStartDate'],
            "ExpectedEndDate": activity['eEndDate'],
            "ActualEndDate": activity['aEndDate']
        };
        return json;
    };
    AddProjectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-add-project',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/add-project/add-project.html"*/'<ion-content padding class="custom-popup">\n\n  <h1 style="color: wheat;">Add Project</h1>\n\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Project Name</ion-label>\n      <ion-input [(ngModel)]="projectName"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Project Alias</ion-label>\n      <ion-input [(ngModel)]="projectAlias"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Project Description</ion-label>\n      <ion-textarea [(ngModel)]="projectDescription" rows="3"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Number of Videos</ion-label>\n      <ion-input [(ngModel)]="nVideos"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Number of Wallpapers</ion-label>\n      <ion-input [(ngModel)]="nWallpapers"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Number of Photos</ion-label>\n      <ion-input [(ngModel)]="nPhotos"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Others</ion-label>\n      <ion-input [(ngModel)]="nOthers"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Expectected Start Date</ion-label>\n      <ion-datetime displayFormat="YYYY-MM-DD" [(ngModel)]="eStartDate" mode="ios"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Actual Start Date</ion-label>\n      <ion-datetime displayFormat="YYYY-MM-DD" [(ngModel)]="aStartDate" mode="ios"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Expectected End Date</ion-label>\n      <ion-datetime displayFormat="YYYY-MM-DD" [(ngModel)]="eEndDate" mode="ios"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Actual Start Date</ion-label>\n      <ion-datetime displayFormat="YYYY-MM-DD" [(ngModel)]="aEndDate" mode="ios"></ion-datetime>\n    </ion-item>\n\n\n\n    <ion-item class="no-underline">\n      <ion-label color="primary" floating>Project Type</ion-label>\n      <ion-select [(ngModel)]="projectTypeId" interface="popover">\n        <p *ngFor=\'let pt of projectTypes\'>\n          <ion-option [value]="pt[\'ID\']">{{pt[\'TypeName\']}}</ion-option>\n        </p>\n      </ion-select>\n    </ion-item>\n\n    <ion-item class="no-underline">\n      <ion-label color="primary" floating>Business Units</ion-label>\n      <ion-select [(ngModel)]="businessUnitId" interface="popover">\n        <p *ngFor=\'let bu of businessUnits\'>\n          <ion-option [value]="bu[\'BUID\']">{{bu[\'BUName\']}}</ion-option>\n        </p>\n      </ion-select>\n    </ion-item>\n\n\n\n    <ion-item class="no-underline">\n      <ion-label color="primary" floating>Brands</ion-label>\n      <ion-select [(ngModel)]="brandId" interface="popover">\n        <p *ngFor=\'let br of brands\'>\n          <ion-option [value]="br[\'BrandId\']">{{br[\'BrandName\']}}</ion-option>\n        </p>\n      </ion-select>\n    </ion-item>\n\n\n    <ion-item class="no-underline">\n      <ion-label color="primary" floating>Areas</ion-label>\n      <ion-select [(ngModel)]="areaIds" interface="popover" multiple="true">\n        <p *ngFor=\'let ar of areas\'>\n          <ion-option [value]="ar[\'AreaID\']">{{ar[\'AreaName\']}}</ion-option>\n        </p>\n      </ion-select>\n    </ion-item>\n\n\n\n    <p *ngFor="let activity of activites">\n      <ion-grid style="border: 1px solid #ddd !important; border-radius: 5px !important; padding: 5px !important;">\n        <ion-row>\n          <ion-col style="color: dodgerblue !important; font-size: 15px !important;" col-7>{{activity[\'ActivityName\']}}\n          </ion-col>\n          <ion-col col-5>\n            <ion-badge color="light">{{activity[\'PhaseName\']}}</ion-badge>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col style="font-size: 10px !important; color: #919191 !important;">{{activity[\'ActivityDescription\']}}\n          </ion-col>\n        </ion-row>\n\n        <ion-item class="no-underline">\n          <ion-label color="primary" floating>Users</ion-label>\n          <ion-select [(ngModel)]="activity[\'userIds\']" multiple="true">\n            <p *ngFor=\'let user of users\'>\n              <ion-option [value]="user[\'UserID\']">{{user[\'UserName\']}}</ion-option>\n            </p>\n          </ion-select>\n        </ion-item>\n\n\n        <ion-item class="no-underline">\n          <ion-label color="primary" floating>Materials</ion-label>\n          <ion-select [(ngModel)]="activity[\'materialId\']" interface="popover">\n            <p *ngFor=\'let material of materials\'>\n              <ion-option [value]="material[\'MaterialID\']">{{material[\'MaterialName\']}}</ion-option>\n            </p>\n          </ion-select>\n        </ion-item>\n\n        <ion-item class="no-underline">\n          <ion-label color="primary" floating>Roles</ion-label>\n          <ion-select [(ngModel)]="activity[\'roleId\']" interface="popover">\n            <p *ngFor=\'let role of roles\'>\n              <ion-option [value]="role[\'RoleID\']">{{role[\'RoleName\']}}</ion-option>\n            </p>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Expectected Start Date</ion-label>\n          <ion-datetime displayFormat="YYYY-MM-DD" [(ngModel)]="activity[\'eStartDate\']" mode="ios"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Actual Start Date</ion-label>\n          <ion-datetime displayFormat="YYYY-MM-DD" [(ngModel)]="activity[\'aStartDate\']" mode="ios"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Expectected End Date</ion-label>\n          <ion-datetime displayFormat="YYYY-MM-DD" [(ngModel)]="activity[\'eEndDate\']" mode="ios"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Actual Start Date</ion-label>\n          <ion-datetime displayFormat="YYYY-MM-DD" [(ngModel)]="activity[\'aEndDate\']" mode="ios"></ion-datetime>\n        </ion-item>\n\n\n      </ion-grid>\n    </p>\n\n  </ion-list>\n\n  <p style="text-align: center !important;">\n    <button ion-button outline (click)="addProject()"> Add Project &nbsp;<ion-icon name="create"></ion-icon></button>\n  </p>\n\n\n  <button ion-button clear full (click)="closeModal();" color="light">\n    <ion-icon name="close-circle" color="white"></ion-icon>\n  </button>\n</ion-content>\n\n<ion-footer>\n\n</ion-footer>'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/add-project/add-project.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__Utils_Codes__["a" /* Codes */], __WEBPACK_IMPORTED_MODULE_2__Utils_DataValidation__["a" /* DataValidation */],
            __WEBPACK_IMPORTED_MODULE_1__providers_message_helper__["a" /* MessageHelper */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["AlertController"]])
    ], AddProjectPage);
    return AddProjectPage;
}());

//# sourceMappingURL=add-project.js.map

/***/ })

});
//# sourceMappingURL=24.js.map