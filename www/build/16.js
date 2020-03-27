webpackJsonp([16],{

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListPageModule", function() { return EventListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_components_module__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_list__ = __webpack_require__(465);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EventListPageModule = /** @class */ (function () {
    function EventListPageModule() {
    }
    EventListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__event_list__["a" /* EventListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_4__event_list__["a" /* EventListPage */]),
                __WEBPACK_IMPORTED_MODULE_0_angular_svg_round_progressbar__["RoundProgressModule"],
                __WEBPACK_IMPORTED_MODULE_1__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], EventListPageModule);
    return EventListPageModule;
}());

//# sourceMappingURL=event-list.module.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_message_helper__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils_DataValidation__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Utils_Codes__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ion2_calendar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ion2_calendar__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EventListPage = /** @class */ (function () {
    function EventListPage(navCtrl, navParams, modalCtrl, httpCall, codes, dataValidation, msgHelper, alertController, datePipe) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.httpCall = httpCall;
        this.codes = codes;
        this.dataValidation = dataValidation;
        this.msgHelper = msgHelper;
        this.alertController = alertController;
        this.datePipe = datePipe;
        this.events = null;
        this.segment = 'events';
        this.leaves = null;
        this.appliedLeaves = null;
        this.rejectedLeaves = null;
    }
    EventListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad EventListPage');
        var requestJson = {
            "AppType": "W"
        };
        //Fetch the events
        this.httpCall.callApi(requestJson, this.codes.API_GET_EVENTS_LIST).then(function (responseJson) {
            if (_this.dataValidation.isEmptyJson(requestJson)) {
                _this.msgHelper.showErrorDialog("Error !!!", 'Empty response received from Get Event list API');
                return;
            }
            _this.events = responseJson['resultData'];
            _this.httpCall.callApi(requestJson, _this.codes.API_GET_COLOUR_LIST).then(function (coloursResponseJson) {
                if (_this.dataValidation.isEmptyJson(coloursResponseJson)) {
                    _this.msgHelper.showErrorDialog("Error !!!", 'Empty response received from Get Colours List API');
                    return;
                }
                //Set the colours
                for (var i = 0; i < _this.events.length; i++) {
                    _this.events[i]['ColourName'] = _this.getColourByColourId(_this.events[i]['ColourId'], coloursResponseJson['resultData']);
                }
                //Fetch the User Informations
                _this.httpCall.callApi(requestJson, _this.codes.API_GET_USER_DETAILS).then(function (responseJsonUserDetails) {
                    if (_this.dataValidation.isEmptyJson(responseJsonUserDetails)) {
                        _this.msgHelper.showErrorDialog("Error !!!", 'Empty response received from Get User Details List API');
                        return;
                    }
                    //Set the user images
                    for (var i = 0; i < _this.events.length; i++) {
                        //Split the user ids
                        var splittedUserIds = _this.events[i]['UserIds'].split(",");
                        var userImages = [];
                        for (var j = 0; j < splittedUserIds.length; j++) {
                            userImages[j] = _this.getImageByUserId(splittedUserIds[j], responseJsonUserDetails['resultData']);
                        }
                        _this.events[i]['UserImages'] = userImages;
                    }
                    console.warn(JSON.stringify(_this.events));
                });
            });
        });
        var requestJson = {
            "AppType": "W"
        };
        this.httpCall.callApi(requestJson, this.codes.API_GET_LEAVE_TYPE).then(function (responseJson) {
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
        //Get the current year
        var reqJson = {
            "UserId": currentUserInfo[0]['UserId'],
            "YearValue": String(new Date().getFullYear()),
            "LeaveStatus": "A",
            "AppType": "W"
        };
        this.httpCall.callApi(reqJson, this.codes.API_GET_USER_LEAVE_BALANCE_INFORMATION).then(function (responseJson) {
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog('Error !!!', 'Empty response received from Get Leave Type API');
                return;
            }
            if (_this.dataValidation.isEmptyJson(responseJson['resultData'])) {
                _this.msgHelper.showToast('No Accepted Leaves !!!');
                return;
            }
            _this.appliedLeaves = responseJson['resultData'];
            // for(let i=0;i<this.appliedLeaves.length;i++){
            //   if(this.dataValidation.isEmptyJson(this.appliedLeaves[i]['ApprovedOrRejectedBy'])){
            //     continue;
            //   }
            //   //Call the user information for each of the user ids
            //   var reqJsonUser = {
            //       "UserId": this.appliedLeaves[i]['ApprovedOrRejectedBy'],
            //       "AppType": "W"
            //   };
            //   this.http.callApi(reqJsonUser,this.codes.API_GET_PARTICULAR_USER_INFORMATION).then(resJson => {
            //     if(this.dataValidation.isEmptyJson(resJson)){
            //       this.msgHelper.showErrorDialog('Error !!!','Empty response received from Get Particular User Information API');
            //       return;
            //     }
            //     if(this.dataValidation.isEmptyJson(resJson['resultData'])){
            //       this.msgHelper.showErrorDialog('Error !!!',resJson['resMessage']);
            //       return;
            //     }
            //     console.error(resJson['resultData']);
            //     this.appliedLeaves[i]['ApprovedByUser'] = resJson['resultData'][0]['FirstName']+" "+resJson['resultData'][0]['LastName'];
            //   });
            // }
        });
        //Rejected
        var reqJson = {
            "UserId": currentUserInfo[0]['UserId'],
            "YearValue": String(new Date().getFullYear()),
            "LeaveStatus": "R",
            "AppType": "W"
        };
        this.httpCall.callApi(reqJson, this.codes.API_GET_USER_LEAVE_BALANCE_INFORMATION).then(function (responseJson) {
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog('Error !!!', 'Empty response received from Get Leave Type API');
                return;
            }
            if (_this.dataValidation.isEmptyJson(responseJson['resultData'])) {
                _this.msgHelper.showToast('No Rejected Leaves !!!');
                return;
            }
            _this.rejectedLeaves = responseJson['resultData'];
            // for(let i=0;i<this.rejectedLeaves.length;i++){
            //   if(this.dataValidation.isEmptyJson(this.rejectedLeaves[i]['ApprovedOrRejectedBy'])){
            //     continue;
            //   }
            //   //Call the user information for each of the user ids
            //   var reqJsonUser = {
            //       "UserId": this.rejectedLeaves[i]['ApprovedOrRejectedBy'],
            //       "AppType": "W"
            //   };
            //   this.http.callApi(reqJsonUser,this.codes.API_GET_PARTICULAR_USER_INFORMATION).then(resJson => {
            //     if(this.dataValidation.isEmptyJson(resJson)){
            //       this.msgHelper.showErrorDialog('Error !!!','Empty response received from Get Particular User Information API');
            //       return;
            //     }
            //     if(this.dataValidation.isEmptyJson(resJson['resultData'])){
            //       this.msgHelper.showErrorDialog('Error !!!',resJson['resMessage']);
            //       return;
            //     }
            //     console.error(resJson['resultData']);
            //     this.rejectedLeaves[i]['ApprovedByUser'] = resJson['resultData'][0]['FirstName']+" "+resJson['resultData'][0]['LastName'];
            //   });
            // }
        });
    };
    EventListPage.prototype.getImageByUserId = function (userId, userList) {
        for (var i = 0; i < userList.length; i++) {
            if (userList[i]['UserId'] == userId)
                return userList[i]['UserImagePath'];
        }
    };
    EventListPage.prototype.getColourByColourId = function (colourId, colours) {
        for (var i = 0; i < colours.length; i++) {
            console.error(colours[i]['ColorId'] + "\t" + colourId);
            if (colours[i]['ColorId'] == colourId)
                return colours[i]['ColorName'];
        }
    };
    EventListPage.prototype.getInformation = function (leaveTypeId, leave) {
        var _this = this;
        var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));
        if (this.dataValidation.isEmptyJson(currentUserInfo)) {
            this.msgHelper.showToast('Could not fetch user id');
            return;
        }
        var requestJson = {
            "UserId": currentUserInfo[0]['UserId'],
            "LeaveTypeId": leaveTypeId,
            "YearValue": String(new Date().getFullYear()),
            "AppType": "W"
        };
        this.httpCall.callApi(requestJson, this.codes.API_GET_LEAVE_INFORMATION_COUNT).then(function (responseJson) {
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
    EventListPage.prototype.goToUserMessages = function () {
        var userModal = this.modalCtrl.create('UserMessageNotificationListPage');
        userModal.present();
    };
    EventListPage.prototype.openCalendar = function (leave) {
        var _this = this;
        var options = {
            pickMode: 'range',
            title: 'Select Leave Dates',
            color: 'dark'
        };
        var myCalendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7_ion2_calendar__["CalendarModal"], {
            options: options
        });
        myCalendar.present();
        myCalendar.onDidDismiss(function (date, type) {
            console.log(date.from['time']);
            //Show an alert if the person wants to really apply
            //Check if the user will be able to apply for the leave
            //Calculate the difference
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
            var applyModal = _this.modalCtrl.create('LeaveApplyPage', { "RequestJson": requestJson });
            applyModal.present();
        });
    };
    EventListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-event-list',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/event-list/event-list.html"*/'<ion-header style="padding-left:10px !important; padding-right:10px !important">\n  <!--header starts here-->\n  <ion-row>\n    <!-- (click)="goToProjectSelection()" -->\n    <ion-col class="nopadding mt-16" >\n      <round-progress [current]="75" [max]="100" [radius]="20" [stroke]="7" [color]="\'#00ff00\'"></round-progress>\n      <img src="../../assets/imgs/icon_video.png" style="width: 26px !important;\n     position: absolute;\n     top: 7px !important;\n     left: 7px !important;" />\n    </ion-col>\n\n    <ion-col class="nopadding mt-20">\n      <star-provider [coins]="50" [stars]="20" [videos]="150"></star-provider>\n    </ion-col>\n\n    <ion-col class="nopadding">\n      <user-info [messageNumber]="0" [notificationNumber]="0" (click)="goToUserMessages()"\n        style="position: absolute;top: 0px !important;right: 0px !important;"></user-info>\n    </ion-col>\n\n  </ion-row>\n  <!--header ends here-->\n\n\n  <ion-segment [(ngModel)]="segment" mode="ios" style="margin-top: 13px !important;background: white !important; padding-left: 14px !important;\npadding-right: 14px !important;\npadding-top: 10px !important;">\n\n    <ion-segment-button value="events">\n      Events\n    </ion-segment-button>\n    <ion-segment-button value="leaves">\n      Leaves\n    </ion-segment-button>\n\n  </ion-segment>\n\n\n\n\n</ion-header>\n\n<!--Body starts here-->\n<ion-content padding class="background-content mt-66"\n  style="height: 80% !important; width: 95% !important; margin-left: 2.5% !important; text-align: center;">\n\n\n\n  <div [(ngSwitch)]="segment" style="margin-top: 33px !important;">\n    <p *ngSwitchCase="\'events\'">\n      <ion-item *ngFor="let event of events">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-1>\n              <p class="green-circle" *ngIf="event[\'ColourName\']==\'Green\'"></p>\n              <p class="red-circle" *ngIf="event[\'ColourName\']==\'Red\'"></p>\n              <p class="black-circle" *ngIf="event[\'ColourName\']==\'Black\'"></p>\n              <p class="blue-circle" *ngIf="event[\'ColourName\']==\'Blue\'"></p>\n            </ion-col>\n            <ion-col col-10>\n              <ion-grid>\n                <ion-row>\n                  <p style="color: #919191 !important; font-size: 12px !important;">{{event[\'EventSubject\']}}\n                    <span *ngIf="event[\'EventIsFullDay\']==true">\n                      <ion-badge>Full day</ion-badge>\n                    </span>\n                    <span *ngIf="event[\'EventIsFullDay\']==false">\n                      <ion-badge>Half day</ion-badge>\n                    </span>\n                  </p>\n                </ion-row>\n                <ion-row>\n                  <p style="color: dodgerblue !important; font-size: 15px !important;">{{event[\'EventDescription\']}}</p>\n                </ion-row>\n                <ion-row>\n                  <span style="font-size: 12px !important; font-weight: 600 !important;">\n                    {{datePipe.transform(event[\'EventStartDate\'],\'d, MMM\')}} </span>\n                  &nbsp; - &nbsp;\n                  <span style="font-size: 12px !important; font-weight: 600 !important;">\n                    {{datePipe.transform(event[\'EventEndDate\'],\'d, MMM\')}} </span>\n                </ion-row>\n                <ion-row style="padding-top: 10px !important;">\n                  <span *ngFor="let image of event[\'UserImages\']">\n                    <img [src]="image" class="camera-img-wrapper" />\n                  </span>\n                </ion-row>\n              </ion-grid>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </p>\n\n\n\n\n    <p *ngSwitchCase="\'leaves\'">\n\n      <ion-list *ngFor="let leave of leaves">\n        <ion-card style="width: 100% !important; max-width: none !important; min-width: none !important;">\n          <ion-row>\n            <ion-col col-5 class="pt-15 ta-left">\n              <span>\n                <ion-icon name="information-circle" style="color: rgb(12, 80, 107) !important;"\n                  *ngIf="dataValidation.isEmptyJson(leave[\'TakenLeave\']) || dataValidation.isEmptyJson(leave[\'RemainingLeave\'])"\n                  (click)="getInformation(leave[\'LeaveTypeId\'],leave)"></ion-icon>\n                &nbsp;\n                <span style="color: rgb(12, 80, 107) !important;">{{leave[\'LeaveTypeName\']}} Leave</span>\n              </span>\n            </ion-col>\n            <ion-col col-2 class="pt-15"\n              *ngIf="!dataValidation.isEmptyJson(leave[\'TakenLeave\']) || leave[\'TakenLeave\'] == \'0\'">\n              <ion-badge color="danger">Taken : {{leave[\'TakenLeave\']}}</ion-badge>\n            </ion-col>\n            <ion-col col-2 class="pt-15"\n              *ngIf="!dataValidation.isEmptyJson(leave[\'RemaningLeave\']) || leave[\'RemaningLeave\'] == \'0\'">\n              <ion-badge color="secondary">Left : {{leave[\'RemaningLeave\']}}</ion-badge>\n            </ion-col>\n            <ion-col col-3>\n              <button ion-button clear (click)="openCalendar(leave)">Apply</button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-list>\n\n      <!-- <ion-title class="color-header">Applied leaves</ion-title> -->\n      <ion-list *ngFor="let apLeave of appliedLeaves">\n        <p class="" style="padding-bottom: 5px !important; border-bottom: 1px solid #ddd !important">\n          <ion-row>\n            <ion-col col-2 *ngIf="!dataValidation.isEmptyJson(apLeave[\'UserImagePath\'])">\n              <img [src]="apLeave[\'UserImagePath\']" class="camera-img-wrapper" />\n            </ion-col>\n            <ion-col col-8>\n              <ion-row>\n                <ion-col class="subtitle-1 ta-left" col-4>\n                  <strong>{{apLeave[\'LeaveTypeName\']}} Leave</strong>\n                </ion-col>\n                <ion-col class="subtitle-2" col-3>\n                  <strong>{{datePipe.transform(apLeave[\'LeaveFromDate\'],\'d-MMM\')}}</strong></ion-col>\n                <ion-col class="subtitle-1" col-2> to </ion-col>\n                <ion-col class="subtitle-2" col-3>\n                  <strong>{{datePipe.transform(apLeave[\'LeaveToDate\'],\'d-MMM\')}}</strong></ion-col>\n              </ion-row>\n              <ion-row class="subtitle-1" style="padding-left: 2% !important;margin-top:4px !important">\n                <ion-icon name="checkmark-circle" mode="ios">&nbsp;</ion-icon>Approved by &nbsp;\n                <strong>{{apLeave[\'ApprovedOrRejectedByName\']}}</strong>\n              </ion-row>\n              <ion-row class="subtitle-1" style="padding-left: 2% !important;margin-top:4px !important"\n                *ngIf="!dataValidation.isEmptyJson(apLeave[\'ApprovedOrRejectedLeaveComments\'])">\n                <strong>{{apLeave[\'ApprovedOrRejectedByName\']}} : </strong> &nbsp;\n                {{apLeave[\'ApprovedOrRejectedLeaveComments\']}}\n              </ion-row>\n            </ion-col>\n            <ion-col col-2 *ngIf="!dataValidation.isEmptyJson(apLeave[\'ApprovedOrRejectedByImagePath\'])">\n              <img [src]="apLeave[\'ApprovedOrRejectedByImagePath\']" class="camera-img-wrapper" />\n            </ion-col>\n          </ion-row>\n        </p>\n      </ion-list>\n\n\n\n      <ion-list *ngFor="let apLeave of rejectedLeaves">\n        <p class="" style="padding-bottom: 5px !important; border-bottom: 1px solid #ddd !important">\n          <ion-row>\n            <ion-col col-2 *ngIf="!dataValidation.isEmptyJson(apLeave[\'UserImagePath\'])">\n              <img [src]="apLeave[\'UserImagePath\']" class="camera-img-wrapper" />\n            </ion-col>\n            <ion-col col-8>\n              <ion-row>\n                <ion-col class="subtitle-1 ta-left" col-4>\n                  <strong>{{apLeave[\'LeaveTypeName\']}} Leave</strong>\n                </ion-col>\n                <ion-col class="subtitle-2" col-3>\n                  <strong>{{datePipe.transform(apLeave[\'LeaveFromDate\'],\'d-MMM\')}}</strong></ion-col>\n                <ion-col class="subtitle-1" col-2> to </ion-col>\n                <ion-col class="subtitle-2" col-3>\n                  <strong>{{datePipe.transform(apLeave[\'LeaveToDate\'],\'d-MMM\')}}</strong></ion-col>\n              </ion-row>\n              <ion-row class="subtitle-1" style="padding-left: 2% !important;margin-top:4px !important">\n                <ion-icon name="close-circle" mode="ios">&nbsp;</ion-icon>Rejected by &nbsp;\n                <strong>{{apLeave[\'ApprovedOrRejectedByName\']}}</strong>\n              </ion-row>\n            </ion-col>\n            <ion-col col-2 *ngIf="!dataValidation.isEmptyJson(apLeave[\'ApprovedOrRejectedByImagePath\'])">\n              <img [src]="apLeave[\'ApprovedOrRejectedByImagePath\']" class="camera-img-wrapper" />\n            </ion-col>\n          </ion-row>\n        </p>\n      </ion-list>\n\n\n\n\n\n\n\n\n\n    </p>\n  </div>\n\n\n  <ion-fab bottom right *ngIf="segment==\'leaves\'">\n    <button ion-fab (click)="navCtrl.setRoot(\'LeaveApprovalPage\')">\n      <ion-icon name="checkmark-circle"></ion-icon>\n    </button>\n  </ion-fab>\n\n\n</ion-content>\n<!--Body ends here-->\n\n<!--Footer starts here-->\n<ion-footer style="background-color: #efefef; text-align: center;">\n  <button ion-button clear (click)="navCtrl.setRoot(\'ProjectHomePage\')" *ngIf="dataValidation.doesContainMenu(\'Projects\')"><img src="../../assets/imgs/menu_proyectos_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear (click)="navCtrl.setRoot(\'RecognitionsPage\')" *ngIf="dataValidation.doesContainMenu(\'Recognition\')"><img src="../../assets/imgs/menu_reconocimientos_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear (click)="navCtrl.setRoot(\'RewardsPage\')" *ngIf="dataValidation.doesContainMenu(\'Rewards\')"><img src="../../assets/imgs/menu_recompensas_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear *ngIf="dataValidation.doesContainMenu(\'Talents\')" [disabled]=true><img src="../../assets/imgs/menu_talentos_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear *ngIf="dataValidation.doesContainMenu(\'Collaborators\')" [disabled]=true><img src="../../assets/imgs/menu_colaboradores_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear (click)="navCtrl.setRoot(\'PermissionsPage\')" *ngIf="dataValidation.doesContainMenu(\'Permissions\')"><img src="../../assets/imgs/menu_permisos_off.png" style="width: 15px !important;"/></button>\n  <button ion-button clear *ngIf="dataValidation.doesContainMenu(\'Calendar\')" (click)="navCtrl.setRoot(\'EventListPage\')"><img src="../../assets/imgs/menu_calendario_on.png" style="width: 15px !important;"/></button>\n  <button ion-button clear *ngIf="dataValidation.doesContainMenu(\'Configuration\')" (click)="navCtrl.setRoot(\'GeneralSettingsPage\')"><img src="../../assets/imgs/menu_configuracion_off.png" style="width: 15px !important;"/></button>\n</ion-footer>\n\n<!--Footer ends here-->'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/event-list/event-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__Utils_Codes__["a" /* Codes */], __WEBPACK_IMPORTED_MODULE_2__Utils_DataValidation__["a" /* DataValidation */],
            __WEBPACK_IMPORTED_MODULE_1__providers_message_helper__["a" /* MessageHelper */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_6__angular_common__["DatePipe"]])
    ], EventListPage);
    return EventListPage;
}());

//# sourceMappingURL=event-list.js.map

/***/ })

});
//# sourceMappingURL=16.js.map