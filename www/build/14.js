webpackJsonp([14],{

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_list__ = __webpack_require__(463);
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

/***/ 463:
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
    EventListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-event-list',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/event-list/event-list.html"*/'<ion-header style="padding-left:10px !important; padding-right:10px !important">\n  <!--header starts here-->\n  <ion-row>\n   <ion-col class="nopadding mt-16" (click)="goToProjectSelection()">\n     <round-progress [current]="75" [max]="100" [radius]="20" [stroke]="7" [color]="\'#00ff00\'"></round-progress>\n     <img src="../../assets/imgs/icon_video.png" style="width: 26px !important;\n     position: absolute;\n     top: 7px !important;\n     left: 7px !important;" />\n   </ion-col>\n\n   <ion-col class="nopadding mt-20">\n     <star-provider [coins]="50" [stars]="20" [videos]="150"></star-provider>\n   </ion-col>\n\n   <ion-col class="nopadding">\n    <user-info [messageNumber]="0" [notificationNumber]="0" (click)="goToUserMessages()" style="position: absolute;top: 0px !important;right: 0px !important;"></user-info>      \n   </ion-col>\n\n </ion-row>\n<!--header ends here-->\n</ion-header>\n\n<!--Body starts here-->\n<ion-content padding class="background-content mt-66" style="height: 80% !important; width: 95% !important; margin-left: 2.5% !important; text-align: center;">\n\n\n  <ion-list>\n\n    <ion-item *ngFor="let event of events">\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-1>\n            <p class="green-circle" *ngIf="event[\'ColourName\']==\'Green\'"></p>\n            <p class="red-circle" *ngIf="event[\'ColourName\']==\'Red\'"></p>\n            <p class="black-circle" *ngIf="event[\'ColourName\']==\'Black\'"></p>\n            <p class="blue-circle" *ngIf="event[\'ColourName\']==\'Blue\'"></p>\n          </ion-col>\n\n          <ion-col col-10>\n            <ion-grid>\n              <ion-row>\n                <p style="color: #919191 !important; font-size: 12px !important;">{{event[\'EventSubject\']}}\n                  <span *ngIf="event[\'EventIsFullDay\']==true"><ion-badge>Full day</ion-badge></span>\n                  <span *ngIf="event[\'EventIsFullDay\']==false"><ion-badge>Half day</ion-badge></span>\n                </p>\n              </ion-row>\n              <ion-row>\n                <p style="color: dodgerblue !important; font-size: 15px !important;">{{event[\'EventDescription\']}}</p>\n              </ion-row>\n              <ion-row>\n                <span style="font-size: 12px !important; font-weight: 600 !important;"> {{datePipe.transform(event[\'EventStartDate\'],\'d, MMM\')}} </span>\n                &nbsp; - &nbsp;\n                <span style="font-size: 12px !important; font-weight: 600 !important;">  {{datePipe.transform(event[\'EventEndDate\'],\'d, MMM\')}} </span> \n              </ion-row>\n              <ion-row style="padding-top: 10px !important;">\n                <span *ngFor="let image of event[\'UserImages\']">\n                  <img [src]="image" class="camera-img-wrapper" />\n                </span>\n              </ion-row>\n            </ion-grid>\n          </ion-col>\n\n        </ion-row>\n\n\n      </ion-grid>\n\n    </ion-item>\n\n\n  </ion-list>\n   \n\n\n</ion-content>\n<!--Body ends here-->\n\n<!--Footer starts here-->\n<ion-footer style="background-color: #efefef; text-align: center;">\n <button ion-button clear (click)="navCtrl.setRoot(\'ProjectHomePage\')" *ngIf="dataValidation.doesContainMenu(\'Projects\')"><img src="../../assets/imgs/menu_proyectos_off.png" style="width: 15px !important;"/></button>\n <button ion-button clear *ngIf="dataValidation.doesContainMenu(\'Recognition\')"><img src="../../assets/imgs/menu_reconocimientos_off.png" style="width: 15px !important;"/></button>\n <button ion-button clear *ngIf="dataValidation.doesContainMenu(\'Rewards\')"><img src="../../assets/imgs/menu_recompensas_off.png" style="width: 15px !important;"/></button>\n <button ion-button clear *ngIf="dataValidation.doesContainMenu(\'Talents\')"><img src="../../assets/imgs/menu_talentos_off.png" style="width: 15px !important;"/></button>\n <button ion-button clear *ngIf="dataValidation.doesContainMenu(\'Collaborators\')"><img src="../../assets/imgs/menu_colaboradores_off.png" style="width: 15px !important;"/></button>\n <button ion-button clear *ngIf="dataValidation.doesContainMenu(\'Permissions\')"><img src="../../assets/imgs/menu_permisos_off.png" style="width: 15px !important;"/></button>\n <button ion-button clear *ngIf="dataValidation.doesContainMenu(\'Calendar\')" (click)="navCtrl.setRoot(\'EventListPage\')"><img src="../../assets/imgs/menu_calendario_on.png" style="width: 15px !important;"/></button>\n <button ion-button clear *ngIf="dataValidation.doesContainMenu(\'Configuration\')" (click)="navCtrl.setRoot(\'GeneralSettingsPage\')"><img src="../../assets/imgs/menu_configuracion_off.png" style="width: 15px !important;"/></button>\n</ion-footer>\n\n<!--Footer ends here-->'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/event-list/event-list.html"*/,
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
//# sourceMappingURL=14.js.map