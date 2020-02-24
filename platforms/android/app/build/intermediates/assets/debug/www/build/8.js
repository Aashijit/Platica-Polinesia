webpackJsonp([8],{

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveApprovalPageModule", function() { return LeaveApprovalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_components_module__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_svg_round_progressbar__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_svg_round_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__leave_approval__ = __webpack_require__(454);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LeaveApprovalPageModule = /** @class */ (function () {
    function LeaveApprovalPageModule() {
    }
    LeaveApprovalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__leave_approval__["a" /* LeaveApprovalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_4__leave_approval__["a" /* LeaveApprovalPage */]),
                __WEBPACK_IMPORTED_MODULE_1_angular_svg_round_progressbar__["RoundProgressModule"],
                __WEBPACK_IMPORTED_MODULE_0__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], LeaveApprovalPageModule);
    return LeaveApprovalPageModule;
}());

//# sourceMappingURL=leave-approval.module.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaveApprovalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils_DataValidation__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils_Codes__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_message_helper__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LeaveApprovalPage = /** @class */ (function () {
    function LeaveApprovalPage(navCtrl, navParams, modalCtrl, http, msgHelper, codes, dataValidation, datePipe, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.msgHelper = msgHelper;
        this.codes = codes;
        this.dataValidation = dataValidation;
        this.datePipe = datePipe;
        this.alert = alert;
        this.leaves = null;
        this.appleaves = null;
        this.rejleaves = null;
    }
    LeaveApprovalPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad LeaveApprovalPage');
        var requestJson = {
            "FinancialYearId": 1,
            "LeaveStatus": "P",
            "AppType": "W"
        };
        this.http.callApi(requestJson, this.codes.API_GET_LEAVE_BALANCE_INFORMATION).then(function (responseJson) {
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog('Error !!!', 'Empty response received from Get Leave Type API');
                return;
            }
            if (_this.dataValidation.isEmptyJson(responseJson['resultData'])) {
                _this.msgHelper.showErrorDialog('Error !!!', responseJson['resMessage']);
                return;
            }
            _this.leaves = responseJson['resultData'];
            var _loop_1 = function (i) {
                if (_this.dataValidation.isEmptyJson(_this.leaves[i]['UserId'])) {
                    return "continue";
                }
                //Call the user information for each of the user ids
                reqJsonUser = {
                    "UserId": _this.leaves[i]['UserId'],
                    "AppType": "W"
                };
                _this.http.callApi(reqJsonUser, _this.codes.API_GET_PARTICULAR_USER_INFORMATION).then(function (resJson) {
                    if (_this.dataValidation.isEmptyJson(resJson)) {
                        _this.msgHelper.showErrorDialog('Error !!!', 'Empty response received from Get Particular User Information API');
                        return;
                    }
                    if (_this.dataValidation.isEmptyJson(resJson['resultData'])) {
                        _this.msgHelper.showErrorDialog('Error !!!', resJson['resMessage']);
                        return;
                    }
                    console.error(resJson['resultData']);
                    _this.leaves[i]['UserName'] = resJson['resultData'][0]['FirstName'] + " " + resJson['resultData'][0]['LastName'];
                    _this.leaves[i]['UserImagePath'] = resJson['resultData'][0]['UserImagePath'];
                });
            };
            var reqJsonUser;
            for (var i = 0; i < _this.leaves.length; i++) {
                _loop_1(i);
            }
        });
        var requestJson = {
            "FinancialYearId": 1,
            "LeaveStatus": "A",
            "AppType": "W"
        };
        this.http.callApi(requestJson, this.codes.API_GET_LEAVE_BALANCE_INFORMATION).then(function (responseJson) {
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog('Error !!!', 'Empty response received from Get Leave Type API');
                return;
            }
            if (_this.dataValidation.isEmptyJson(responseJson['resultData'])) {
                _this.msgHelper.showErrorDialog('Error !!!', responseJson['resMessage']);
                return;
            }
            _this.appleaves = responseJson['resultData'];
            var _loop_2 = function (i) {
                if (_this.dataValidation.isEmptyJson(_this.appleaves[i]['UserId'])) {
                    return "continue";
                }
                //Call the user information for each of the user ids
                reqJsonUser = {
                    "UserId": _this.appleaves[i]['UserId'],
                    "AppType": "W"
                };
                _this.http.callApi(reqJsonUser, _this.codes.API_GET_PARTICULAR_USER_INFORMATION).then(function (resJson) {
                    if (_this.dataValidation.isEmptyJson(resJson)) {
                        _this.msgHelper.showErrorDialog('Error !!!', 'Empty response received from Get Particular User Information API');
                        return;
                    }
                    if (_this.dataValidation.isEmptyJson(resJson['resultData'])) {
                        _this.msgHelper.showErrorDialog('Error !!!', resJson['resMessage']);
                        return;
                    }
                    console.error(resJson['resultData']);
                    _this.appleaves[i]['UserName'] = resJson['resultData'][0]['FirstName'] + " " + resJson['resultData'][0]['LastName'];
                    _this.appleaves[i]['UserImagePath'] = resJson['resultData'][0]['UserImagePath'];
                });
            };
            var reqJsonUser;
            for (var i = 0; i < _this.appleaves.length; i++) {
                _loop_2(i);
            }
        });
        var requestJson = {
            "FinancialYearId": 1,
            "LeaveStatus": "A",
            "AppType": "W"
        };
        this.http.callApi(requestJson, this.codes.API_GET_LEAVE_BALANCE_INFORMATION).then(function (responseJson) {
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog('Error !!!', 'Empty response received from Get Leave Type API');
                return;
            }
            if (_this.dataValidation.isEmptyJson(responseJson['resultData'])) {
                _this.msgHelper.showErrorDialog('Error !!!', responseJson['resMessage']);
                return;
            }
            _this.rejleaves = responseJson['resultData'];
            var _loop_3 = function (i) {
                if (_this.dataValidation.isEmptyJson(_this.rejleaves[i]['UserId'])) {
                    return "continue";
                }
                //Call the user information for each of the user ids
                reqJsonUser = {
                    "UserId": _this.rejleaves[i]['UserId'],
                    "AppType": "W"
                };
                _this.http.callApi(reqJsonUser, _this.codes.API_GET_PARTICULAR_USER_INFORMATION).then(function (resJson) {
                    if (_this.dataValidation.isEmptyJson(resJson)) {
                        _this.msgHelper.showErrorDialog('Error !!!', 'Empty response received from Get Particular User Information API');
                        return;
                    }
                    if (_this.dataValidation.isEmptyJson(resJson['resultData'])) {
                        _this.msgHelper.showErrorDialog('Error !!!', resJson['resMessage']);
                        return;
                    }
                    console.error(resJson['resultData']);
                    _this.rejleaves[i]['UserName'] = resJson['resultData'][0]['FirstName'] + " " + resJson['resultData'][0]['LastName'];
                    _this.rejleaves[i]['UserImagePath'] = resJson['resultData'][0]['UserImagePath'];
                });
            };
            var reqJsonUser;
            for (var i = 0; i < _this.rejleaves.length; i++) {
                _loop_3(i);
            }
        });
    };
    LeaveApprovalPage.prototype.approve = function (leave) {
        var _this = this;
        var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));
        if (this.dataValidation.isEmptyJson(currentUserInfo)) {
            this.msgHelper.showToast('Could not fetch user id');
            return;
        }
        var alt = this.alert.create({
            title: 'Approve Leave',
            message: 'Do you want to approve this leave?',
            buttons: [
                {
                    text: 'No',
                    role: 'no',
                    handler: function () {
                    }
                }, {
                    text: 'Yes',
                    handler: function () {
                        var requestJson = {
                            "LeaveBalanceId": leave['LeaveBalanceId'],
                            "LeaveStatus": "A",
                            "ApprovedBy": currentUserInfo[0]['UserId'],
                            "AppType": "W"
                        };
                        console.error(requestJson);
                        _this.http.callApi(requestJson, _this.codes.API_APPROVE_LEAVE).then(function (responseJson) {
                            if (_this.dataValidation.isEmptyJson(responseJson)) {
                                _this.msgHelper.showErrorDialog('Error !!!', 'Empty response received from Get Leave Type API');
                                return;
                            }
                            if (responseJson['status'] == 1) {
                                _this.msgHelper.showToast('Leave have been approved !!!');
                                _this.ionViewDidLoad();
                                return;
                            }
                        });
                    }
                }
            ]
        });
        alt.present();
    };
    LeaveApprovalPage.prototype.reject = function (leave) {
        var _this = this;
        var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));
        if (this.dataValidation.isEmptyJson(currentUserInfo)) {
            this.msgHelper.showToast('Could not fetch user id');
            return;
        }
        var alt = this.alert.create({
            title: 'Reject Leave',
            message: 'Do you want to reject this leave?',
            buttons: [
                {
                    text: 'No',
                    role: 'no',
                    handler: function () {
                    }
                }, {
                    text: 'Yes',
                    handler: function () {
                        var requestJson = {
                            "LeaveBalanceId": leave['LeaveBalanceId'],
                            "LeaveStatus": "R",
                            "ApprovedBy": currentUserInfo[0]['UserId'],
                            "AppType": "W"
                        };
                        console.error(requestJson);
                        _this.http.callApi(requestJson, _this.codes.API_APPROVE_LEAVE).then(function (responseJson) {
                            if (_this.dataValidation.isEmptyJson(responseJson)) {
                                _this.msgHelper.showErrorDialog('Error !!!', 'Empty response received from Get Leave Type API');
                                return;
                            }
                            if (responseJson['status'] == 1) {
                                _this.msgHelper.showToast('Leave have been rejected !!!');
                                _this.ionViewDidLoad();
                                return;
                            }
                        });
                    }
                }
            ]
        });
        alt.present();
    };
    LeaveApprovalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-leave-approval',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/leave-approval/leave-approval.html"*/'<ion-header style="padding-left:10px !important; padding-right:10px !important">\n  <!--header starts here-->\n  <ion-row>\n   <ion-col class="nopadding mt-16" (click)="goToProjectSelection()">\n     <round-progress [current]="75" [max]="100" [radius]="20" [stroke]="7" [color]="\'#00ff00\'"></round-progress>\n     <img src="../../assets/imgs/icon_video.png" style="width: 26px !important;\n     position: absolute;\n     top: 7px !important;\n     left: 7px !important;" />\n   </ion-col>\n\n   <ion-col class="nopadding mt-20">\n     <star-provider [coins]="50" [stars]="20" [videos]="150"></star-provider>\n   </ion-col>\n\n   <ion-col class="nopadding">\n    <user-info [messageNumber]="0" [notificationNumber]="0" (click)="goToUserMessages()" style="position: absolute;top: 0px !important;right: 0px !important;"></user-info>      \n   </ion-col>\n\n </ion-row>\n<!--header ends here-->\n</ion-header>\n\n<!--Body starts here-->\n<ion-content padding class="background-content mt-66" style="height: 80% !important; width: 95% !important; margin-left: 2.5% !important; text-align: center;">\n\n  <ion-list *ngFor="let leave of leaves">\n    <ion-row >\n    <ion-col col-2 style="margin-top: 2% !important;" class="nopadding"> \n      <img [src]="leave[\'UserImagePath\']" class="camera-img-wrapper" />\n    </ion-col>\n    <ion-col col-10 class="underline ta-left nopadding"> \n    <p style="color: dodgerblue !important; font-size: 16px !important;" class="nomargin">{{leave[\'UserName\']}}</p>\n    <p style="font-size:12px !important; color: #888 !important; font-weight: 800 !important;" class="nomargin">{{datePipe.transform(leave[\'LeaveFromDate\'],\'d-MMM,yyyy\')}}&nbsp;to&nbsp;{{datePipe.transform(leave[\'LeaveToDate\'],\'d-MMM,yyyy\')}}</p>\n    <p *ngIf="leave[\'LeaveStatus\'] == \'A\' && !dataValidation.isEmptyJson(leave[\'ApproveOrRejectedBy\'])"><ion-badge color="secondary">Approved</ion-badge></p>\n    <span *ngIf="dataValidation.isEmptyJson(leave[\'ApproveOrRejectedBy\'])">\n    <button ion-button clear class="nomargin" style="padding: 0px !important;" (click)="approve(leave)">Approve</button>\n    &nbsp;\n    <button ion-button clear color="danger" class="nomargin" style="padding: 0px !important;" (click)="reject(leave)">Reject</button>\n  </span>\n    </ion-col>\n  </ion-row>\n  </ion-list>\n\n\n\n<!-- <strong style="margin-bottom: 2% !important; color: #aaa !important;">Approved Leaves</strong> -->\n  <ion-list *ngFor="let leave of appleaves">\n    <ion-row >\n    <ion-col col-2 style="margin-top: 2% !important;" class="nopadding"> \n      <img [src]="leave[\'UserImagePath\']" class="camera-img-wrapper" />\n    </ion-col>\n    <ion-col col-10 class="underline ta-left nopadding"> \n    <p style="color: dodgerblue !important; font-size: 16px !important;" class="nomargin">{{leave[\'UserName\']}}</p>\n    <p style="font-size:12px !important; color: #aaa !important; font-weight: 800 !important;" class="nomargin">{{datePipe.transform(leave[\'LeaveFromDate\'],\'d-MMM,yyyy\')}}&nbsp;to&nbsp;{{datePipe.transform(leave[\'LeaveToDate\'],\'d-MMM,yyyy\')}}</p>\n    <p class="nomargin" style="margin-bottom: 2% !important;"><ion-badge color="secondary">Approved</ion-badge></p>\n    <!-- <span *ngIf="dataValidation.isEmptyJson(leave[\'ApproveOrRejectedBy\'])">\n    <button ion-button clear class="nomargin" style="padding: 0px !important;" (click)="approve(leave)">Approve</button>\n    &nbsp;\n    <button ion-button clear color="danger" class="nomargin" style="padding: 0px !important;" (click)="reject(leave)">Reject</button>\n  </span> -->\n    </ion-col>\n  </ion-row>\n  </ion-list>\n\n\n\n\n  <!-- <strong style="margin-bottom: 2% !important; color: #aaa !important">Rejected Leaves</strong> -->\n  <ion-list *ngFor="let leave of rejleaves">\n    <ion-row >\n    <ion-col col-2 style="margin-top: 2% !important;" class="nopadding"> \n      <img [src]="leave[\'UserImagePath\']" class="camera-img-wrapper" />\n    </ion-col>\n    <ion-col col-10 class="underline ta-left nopadding"> \n    <p style="color: dodgerblue !important; font-size: 16px !important;" class="nomargin">{{leave[\'UserName\']}}</p>\n    <p style="font-size:12px !important; color: #aaa !important; font-weight: 800 !important;" class="nomargin">{{datePipe.transform(leave[\'LeaveFromDate\'],\'d-MMM,yyyy\')}}&nbsp;to&nbsp;{{datePipe.transform(leave[\'LeaveToDate\'],\'d-MMM,yyyy\')}}</p>\n    <p class="nomargin" style="margin-bottom: 2% !important;"><ion-badge color="danger">Rejected</ion-badge></p>\n    <!-- <span *ngIf="dataValidation.isEmptyJson(leave[\'ApproveOrRejectedBy\'])">\n    <button ion-button clear class="nomargin" style="padding: 0px !important;" (click)="approve(leave)">Approve</button>\n    &nbsp;\n    <button ion-button clear color="danger" class="nomargin" style="padding: 0px !important;" (click)="reject(leave)">Reject</button>\n  </span> -->\n    </ion-col>\n  </ion-row>\n  </ion-list>\n</ion-content>\n<!--Body ends here-->\n\n<!--Footer starts here-->\n<ion-footer style="background-color: #efefef; text-align: center;">\n <button ion-button clear><img src="../../assets/imgs/menu_proyectos_off.png" style="width: 15px !important;"/></button>\n <button ion-button clear><img src="../../assets/imgs/menu_reconocimientos_off.png" style="width: 15px !important;"/></button>\n <button ion-button clear><img src="../../assets/imgs/menu_recompensas_off.png" style="width: 15px !important;"/></button>\n <button ion-button clear><img src="../../assets/imgs/menu_talentos_off.png" style="width: 15px !important;"/></button>\n <button ion-button clear><img src="../../assets/imgs/menu_colaboradores_off.png" style="width: 15px !important;"/></button>\n <button ion-button clear><img src="../../assets/imgs/menu_permisos_off.png" style="width: 15px !important;"/></button>\n <button ion-button clear (click)="navCtrl.setRoot(\'LeaveSelectionPage\')"><img src="../../assets/imgs/menu_calendario_off.png" style="width: 15px !important;"/></button>\n <button ion-button clear (click)="navCtrl.setRoot(\'GeneralSettingsPage\')"><img src="../../assets/imgs/menu_configuracion_off.png" style="width: 15px !important;"/></button>\n</ion-footer>\n<!--Footer ends here-->'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/leave-approval/leave-approval.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_message_helper__["a" /* MessageHelper */], __WEBPACK_IMPORTED_MODULE_1__Utils_Codes__["a" /* Codes */], __WEBPACK_IMPORTED_MODULE_0__Utils_DataValidation__["a" /* DataValidation */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["DatePipe"], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["AlertController"]])
    ], LeaveApprovalPage);
    return LeaveApprovalPage;
}());

//# sourceMappingURL=leave-approval.js.map

/***/ })

});
//# sourceMappingURL=8.js.map