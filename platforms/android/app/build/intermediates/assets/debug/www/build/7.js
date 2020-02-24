webpackJsonp([7],{

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveSelectionPageModule", function() { return LeaveSelectionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_components_module__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_svg_round_progressbar__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_svg_round_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__leave_selection__ = __webpack_require__(456);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LeaveSelectionPageModule = /** @class */ (function () {
    function LeaveSelectionPageModule() {
    }
    LeaveSelectionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__leave_selection__["a" /* LeaveSelectionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_4__leave_selection__["a" /* LeaveSelectionPage */]),
                __WEBPACK_IMPORTED_MODULE_1_angular_svg_round_progressbar__["RoundProgressModule"],
                __WEBPACK_IMPORTED_MODULE_0__components_components_module__["a" /* ComponentsModule */],
            ],
        })
    ], LeaveSelectionPageModule);
    return LeaveSelectionPageModule;
}());

//# sourceMappingURL=leave-selection.module.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaveSelectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils_DataValidation__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils_Codes__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_message_helper__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ion2_calendar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LeaveSelectionPage = /** @class */ (function () {
    function LeaveSelectionPage(navCtrl, navParams, modalCtrl, http, msgHelper, codes, dataValidation, datePipe, alert) {
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
        this.appliedLeaves = null;
        this.rejectedLeaves = null;
    }
    LeaveSelectionPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad LeaveSelectionPage');
        //Fetch the leave types
        var requestJson = {
            "AppType": "W"
        };
        this.http.callApi(requestJson, this.codes.API_GET_LEAVE_TYPE).then(function (responseJson) {
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog('Error !!!', 'Empty response received from Get Leave Type API');
                return;
            }
            if (_this.dataValidation.isEmptyJson(responseJson['resultData'])) {
                _this.msgHelper.showErrorDialog('Error !!!', responseJson['resMessage']);
                return;
            }
            _this.leaves = responseJson['resultData'];
        });
        var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));
        if (this.dataValidation.isEmptyJson(currentUserInfo)) {
            this.msgHelper.showToast('Could not fetch user id');
            return;
        }
        //Call the get leave information
        var reqJson = {
            "UserId": currentUserInfo[0]['UserId'],
            "FinancialYearId": 1,
            "LeaveStatus": "A",
            "AppType": "W"
        };
        this.http.callApi(reqJson, this.codes.API_GET_USER_LEAVE_BALANCE_INFORMATION).then(function (responseJson) {
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog('Error !!!', 'Empty response received from Get Leave Type API');
                return;
            }
            if (_this.dataValidation.isEmptyJson(responseJson['resultData'])) {
                _this.msgHelper.showErrorDialog('Error !!!', responseJson['resMessage']);
                return;
            }
            _this.appliedLeaves = responseJson['resultData'];
            var _loop_1 = function (i) {
                if (_this.dataValidation.isEmptyJson(_this.appliedLeaves[i]['ApprovedOrRejectedBy'])) {
                    return "continue";
                }
                //Call the user information for each of the user ids
                reqJsonUser = {
                    "UserId": _this.appliedLeaves[i]['ApprovedOrRejectedBy'],
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
                    _this.appliedLeaves[i]['ApprovedByUser'] = resJson['resultData'][0]['FirstName'] + " " + resJson['resultData'][0]['LastName'];
                });
            };
            var reqJsonUser;
            for (var i = 0; i < _this.appliedLeaves.length; i++) {
                _loop_1(i);
            }
        });
        //Rejected
        var reqJson = {
            "UserId": currentUserInfo[0]['UserId'],
            "FinancialYearId": 1,
            "LeaveStatus": "R",
            "AppType": "W"
        };
        this.http.callApi(reqJson, this.codes.API_GET_USER_LEAVE_BALANCE_INFORMATION).then(function (responseJson) {
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog('Error !!!', 'Empty response received from Get Leave Type API');
                return;
            }
            if (_this.dataValidation.isEmptyJson(responseJson['resultData'])) {
                _this.msgHelper.showErrorDialog('Error !!!', responseJson['resMessage']);
                return;
            }
            _this.rejectedLeaves = responseJson['resultData'];
            var _loop_2 = function (i) {
                if (_this.dataValidation.isEmptyJson(_this.rejectedLeaves[i]['ApprovedOrRejectedBy'])) {
                    return "continue";
                }
                //Call the user information for each of the user ids
                reqJsonUser = {
                    "UserId": _this.rejectedLeaves[i]['ApprovedOrRejectedBy'],
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
                    _this.rejectedLeaves[i]['ApprovedByUser'] = resJson['resultData'][0]['FirstName'] + " " + resJson['resultData'][0]['LastName'];
                });
            };
            var reqJsonUser;
            for (var i = 0; i < _this.rejectedLeaves.length; i++) {
                _loop_2(i);
            }
        });
    };
    LeaveSelectionPage.prototype.getInformation = function (leaveTypeId, leave) {
        var _this = this;
        var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));
        if (this.dataValidation.isEmptyJson(currentUserInfo)) {
            this.msgHelper.showToast('Could not fetch user id');
            return;
        }
        var requestJson = {
            "UserId": currentUserInfo[0]['UserId'],
            "LeaveTypeId": leaveTypeId,
            "FinancialYearId": 1,
            "AppType": "W"
        };
        this.http.callApi(requestJson, this.codes.API_GET_LEAVE_INFORMATION_COUNT).then(function (responseJson) {
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog('Error !!!', 'Empty response received from Get Leave Type API');
                return;
            }
            if (_this.dataValidation.isEmptyJson(responseJson['resultData'])) {
                _this.msgHelper.showErrorDialog('Error !!!', responseJson['resMessage']);
                return;
            }
            leave['TakenLeave'] = responseJson['resultData'][0]['TakenLeave'];
            leave['RemaningLeave'] = responseJson['resultData'][0]['RemaningLeave'];
        });
    };
    LeaveSelectionPage.prototype.goToUserMessages = function () {
        var userModal = this.modalCtrl.create('UserMessageNotificationListPage');
        userModal.present();
    };
    LeaveSelectionPage.prototype.openCalendar = function (leave) {
        var _this = this;
        var options = {
            pickMode: 'range',
            title: 'Select Leave Dates',
            color: 'dark'
        };
        var myCalendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6_ion2_calendar__["CalendarModal"], {
            options: options
        });
        myCalendar.present();
        myCalendar.onDidDismiss(function (date, type) {
            console.log(date.from['time']);
            //Show an alert if the person wants to really apply
            //Check if the user will be able to apply for the leave
            //Calculate the difference
            var alt = _this.alert.create({
                title: 'Apply Leave',
                message: 'Do you really want to apply leave from <strong>' + _this.datePipe.transform(date.from["string"], 'd-MMM yyyy') + '</strong> to <strong>' + _this.datePipe.transform(date.to["string"], 'd-MMM yyyy') + '</strong> ?',
                buttons: [
                    {
                        text: 'No',
                        role: 'no',
                        handler: function () {
                        }
                    }, {
                        text: 'Yes',
                        handler: function () {
                            var differenceInDays = (date.to['time'] - date.from['time']) / (1000 * 60 * 60 * 24);
                            if (_this.dataValidation.isEmptyJson(leave['RemaningLeave'])) {
                                _this.getInformation(leave['LeaveTypeId'], leave);
                                _this.msgHelper.showToast('Please select the dates again !!!', false);
                                return;
                            }
                            if (differenceInDays > Number(leave['RemaningLeave'])) {
                                _this.msgHelper.showToast('You have only ' + leave['RemaningLeave'] + ' ' + leave['LeaveTypeName'] + ' leaves left !!!', false);
                                return;
                            }
                            var currentUserInfo = JSON.parse(localStorage.getItem(_this.codes.LSK_USER_INFORMATION_JSON));
                            if (_this.dataValidation.isEmptyJson(currentUserInfo)) {
                                _this.msgHelper.showToast('Could not fetch user id');
                                return;
                            }
                            //Apply for leaves
                            var requestJson = {
                                "UserId": currentUserInfo[0]['UserId'],
                                "LeaveTypeId": leave['LeaveTypeId'],
                                "FinancialYearId": 1,
                                "LeaveTakeCount": differenceInDays,
                                "LeaveApplyDate": _this.datePipe.transform(new Date(), 'YYYY-MM-DD'),
                                "LeaveFromDate": date.from['string'],
                                "LeaveToDate": date.to['string'],
                                "AppType": "W"
                            };
                            console.error(requestJson);
                            _this.http.callApi(requestJson, _this.codes.API_LEAVE_APPLY).then(function (responseJson) {
                                if (_this.dataValidation.isEmptyJson(responseJson)) {
                                    _this.msgHelper.showErrorDialog('Error !!!', 'Empty response received from Get Leave Type API');
                                    return;
                                }
                                _this.msgHelper.showToast(responseJson['resMessage'], false);
                                _this.ionViewDidLoad();
                            });
                        }
                    }
                ]
            });
            alt.present();
        });
    };
    LeaveSelectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-leave-selection',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/leave-selection/leave-selection.html"*/'<ion-header style="padding-left:10px !important; padding-right:10px !important">\n  <!--header starts here-->\n  <ion-row>\n   <ion-col class="nopadding mt-16" (click)="goToProjectSelection()">\n     <round-progress [current]="75" [max]="100" [radius]="20" [stroke]="7" [color]="\'#00ff00\'"></round-progress>\n     <img src="../../assets/imgs/icon_video.png" style="width: 26px !important;\n     position: absolute;\n     top: 7px !important;\n     left: 7px !important;" />\n   </ion-col>\n\n   <ion-col class="nopadding mt-20">\n     <star-provider [coins]="50" [stars]="20" [videos]="150"></star-provider>\n   </ion-col>\n\n   <ion-col class="nopadding">\n    <user-info [messageNumber]="0" [notificationNumber]="0" (click)="goToUserMessages()" style="position: absolute;top: 0px !important;right: 0px !important;"></user-info>      \n   </ion-col>\n\n </ion-row>\n<!--header ends here-->\n</ion-header>\n\n<!--Body starts here-->\n<ion-content padding class="background-content mt-66" style="height: 80% !important; width: 95% !important; margin-left: 2.5% !important; text-align: center;">\n  \n  <ion-list *ngFor="let leave of leaves">\n      <ion-card style="width: 100% !important; max-width: none !important; min-width: none !important;">\n        <ion-row>\n        <ion-col col-5 class="pt-15 ta-left">\n          <span>\n          <ion-icon name="information-circle" style="color: rgb(12, 80, 107) !important;" *ngIf="dataValidation.isEmptyJson(leave[\'TakenLeave\']) || dataValidation.isEmptyJson(leave[\'RemainingLeave\'])" (click)="getInformation(leave[\'LeaveTypeId\'],leave)"></ion-icon>\n          &nbsp;\n          <span style="color: rgb(12, 80, 107) !important;">{{leave[\'LeaveTypeName\']}} Leave</span>\n        </span>\n        </ion-col>\n        <ion-col col-2 class="pt-15" *ngIf="!dataValidation.isEmptyJson(leave[\'TakenLeave\']) || leave[\'TakenLeave\'] == \'0\'" >\n          <ion-badge color="danger">Taken : {{leave[\'TakenLeave\']}}</ion-badge>\n        </ion-col>\n        <ion-col col-2 class="pt-15" *ngIf="!dataValidation.isEmptyJson(leave[\'RemaningLeave\']) || leave[\'RemaningLeave\'] == \'0\'">\n          <ion-badge color="secondary">Left : {{leave[\'RemaningLeave\']}}</ion-badge>\n        </ion-col>\n        <ion-col col-3>\n          <button ion-button clear (click)="openCalendar(leave)">Apply</button>\n        </ion-col>\n      </ion-row>\n        </ion-card>    \n  </ion-list>\n\n  <!-- <ion-title class="color-header">Applied leaves</ion-title> -->\n  <ion-list *ngFor="let apLeave of appliedLeaves">\n    <p  class="" style="padding-bottom: 5px !important;">\n    <ion-row>\n      <ion-col class="subtitle-1 ta-left" col-7>\n        <strong>{{apLeave[\'LeaveTypeName\']}} Leave</strong>\n      </ion-col>\n      <ion-col class="subtitle-2" col-2><strong>{{datePipe.transform(apLeave[\'LeaveFromDate\'],\'d-MMM\')}}</strong></ion-col>\n      <ion-col class="subtitle-1" col-1> to </ion-col>\n      <ion-col class="subtitle-2" col-2><strong>{{datePipe.transform(apLeave[\'LeaveToDate\'],\'d-MMM\')}}</strong></ion-col>\n    </ion-row>\n    <ion-row class="subtitle-1" style="padding-left: 2% !important;margin-top:4px !important">\n      <ion-icon name="checkmark-circle" mode="ios">&nbsp;</ion-icon>Approved by &nbsp; <strong>{{apLeave[\'ApprovedByUser\']}}</strong>\n    </ion-row>\n  </p>\n  </ion-list>\n\n\n\n  <ion-list *ngFor="let apLeave of rejectedLeaves">\n    <p  class="underline" style="padding-bottom: 5px !important; background-color: #eee !important;">\n    <ion-row>\n      <ion-col class="subtitle-1 ta-left" col-7>\n        <strong>{{apLeave[\'LeaveTypeName\']}} Leave</strong>\n      </ion-col>\n      <ion-col class="subtitle-2" col-2><strong>{{datePipe.transform(apLeave[\'LeaveFromDate\'],\'d-MMM\')}}</strong></ion-col>\n      <ion-col class="subtitle-1" col-1> to </ion-col>\n      <ion-col class="subtitle-2" col-2><strong>{{datePipe.transform(apLeave[\'LeaveToDate\'],\'d-MMM\')}}</strong></ion-col>\n    </ion-row>\n    <ion-row class="subtitle-1" style="padding-left: 2% !important;margin-top:4px !important">\n      <ion-icon name="close-circle"> &nbsp;</ion-icon>Rejected by &nbsp; <strong>{{apLeave[\'ApprovedByUser\']}}</strong>\n    </ion-row>\n  </p>\n  </ion-list>\n\n\n  <ion-fab bottom right>\n    <button ion-fab (click)="navCtrl.setRoot(\'LeaveApprovalPage\')"><ion-icon name="checkmark-circle"></ion-icon></button>\n  </ion-fab>\n\n\n  \n</ion-content>\n<!--Body ends here-->\n\n<!--Footer starts here-->\n<ion-footer style="background-color: #efefef; text-align: center;">\n <button ion-button clear><img src="../../assets/imgs/menu_proyectos_off.png" style="width: 15px !important;"/></button>\n <button ion-button clear><img src="../../assets/imgs/menu_reconocimientos_off.png" style="width: 15px !important;"/></button>\n <button ion-button clear><img src="../../assets/imgs/menu_recompensas_off.png" style="width: 15px !important;"/></button>\n <button ion-button clear><img src="../../assets/imgs/menu_talentos_off.png" style="width: 15px !important;"/></button>\n <button ion-button clear><img src="../../assets/imgs/menu_colaboradores_off.png" style="width: 15px !important;"/></button>\n <button ion-button clear><img src="../../assets/imgs/menu_permisos_off.png" style="width: 15px !important;"/></button>\n <button ion-button clear><img src="../../assets/imgs/menu_calendario_on.png" style="width: 15px !important;"/></button>\n <button ion-button clear (click)="navCtrl.setRoot(\'GeneralSettingsPage\')"><img src="../../assets/imgs/menu_configuracion_off.png" style="width: 15px !important;"/></button>\n</ion-footer>\n<!--Footer ends here-->'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/leave-selection/leave-selection.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_message_helper__["a" /* MessageHelper */], __WEBPACK_IMPORTED_MODULE_1__Utils_Codes__["a" /* Codes */], __WEBPACK_IMPORTED_MODULE_0__Utils_DataValidation__["a" /* DataValidation */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common__["DatePipe"], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["AlertController"]])
    ], LeaveSelectionPage);
    return LeaveSelectionPage;
}());

//# sourceMappingURL=leave-selection.js.map

/***/ })

});
//# sourceMappingURL=7.js.map