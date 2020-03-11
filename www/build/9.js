webpackJsonp([9],{

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveApplyPageModule", function() { return LeaveApplyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leave_apply__ = __webpack_require__(465);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LeaveApplyPageModule = /** @class */ (function () {
    function LeaveApplyPageModule() {
    }
    LeaveApplyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__leave_apply__["a" /* LeaveApplyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__leave_apply__["a" /* LeaveApplyPage */]),
            ],
        })
    ], LeaveApplyPageModule);
    return LeaveApplyPageModule;
}());

//# sourceMappingURL=leave-apply.module.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaveApplyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils_DataValidation__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils_Codes__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_message_helper__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LeaveApplyPage = /** @class */ (function () {
    function LeaveApplyPage(navCtrl, navParams, msgHelper, httpCall, codes, dataValidation, actionSheet, alertController, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.msgHelper = msgHelper;
        this.httpCall = httpCall;
        this.codes = codes;
        this.dataValidation = dataValidation;
        this.actionSheet = actionSheet;
        this.alertController = alertController;
        this.camera = camera;
        this.requestJson = null;
        this.documentImage1 = null;
        this.documentImage2 = null;
        this.comment = null;
    }
    LeaveApplyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LeaveApplyPage');
        this.requestJson = this.navParams.get('RequestJson');
    };
    LeaveApplyPage.prototype.getImage1 = function () {
        var _this = this;
        var actionSheet = this.actionSheet.create({
            title: 'Update your document',
            buttons: [
                {
                    text: 'Capture an image',
                    role: 'camera',
                    icon: 'camera',
                    handler: function () {
                        var options = {
                            quality: 100,
                            sourceType: _this.camera.PictureSourceType.CAMERA,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            // imageData is either a base64 encoded string or a file URI
                            // If it's base64 (DATA_URL):             
                            console.error(imageData);
                            _this.documentImage1 = 'data:image/jpeg;base64,' + imageData;
                            //  this.brandImage  = base64Image;
                            //  this.brandImageBlob = this.convertBase64ToBlob(base64Image);
                        }, function (err) {
                            // Handle error
                        });
                    }
                },
                {
                    text: 'Select from gallery',
                    role: 'gallery',
                    icon: 'image',
                    handler: function () {
                        var options = {
                            quality: 100,
                            sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            // imageData is either a base64 encoded string or a file URI
                            // If it's base64 (DATA_URL):
                            console.error(imageData);
                            _this.documentImage1 = 'data:image/jpeg;base64,' + imageData;
                            //  this.brandImage  = base64Image;
                            //  this.brandImageBlob = this.convertBase64ToBlob(base64Image);
                        }, function (err) {
                            // Handle error
                        });
                    }
                },
                {
                    text: 'Close',
                    role: 'close',
                    icon: 'close',
                    handler: function () {
                        actionSheet.dismiss();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    LeaveApplyPage.prototype.getImage2 = function () {
        var _this = this;
        var actionSheet = this.actionSheet.create({
            title: 'Update your document',
            buttons: [
                {
                    text: 'Capture an image',
                    role: 'camera',
                    icon: 'camera',
                    handler: function () {
                        var options = {
                            quality: 100,
                            sourceType: _this.camera.PictureSourceType.CAMERA,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            // imageData is either a base64 encoded string or a file URI
                            // If it's base64 (DATA_URL):             
                            console.error(imageData);
                            _this.documentImage2 = 'data:image/jpeg;base64,' + imageData;
                            //  this.brandImage  = base64Image;
                            //  this.brandImageBlob = this.convertBase64ToBlob(base64Image);
                        }, function (err) {
                            // Handle error
                        });
                    }
                },
                {
                    text: 'Select from gallery',
                    role: 'gallery',
                    icon: 'image',
                    handler: function () {
                        var options = {
                            quality: 100,
                            sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            // imageData is either a base64 encoded string or a file URI
                            // If it's base64 (DATA_URL):
                            console.error(imageData);
                            _this.documentImage2 = 'data:image/jpeg;base64,' + imageData;
                            //  this.brandImage  = base64Image;
                            //  this.brandImageBlob = this.convertBase64ToBlob(base64Image);
                        }, function (err) {
                            // Handle error
                        });
                    }
                },
                {
                    text: 'Close',
                    role: 'close',
                    icon: 'close',
                    handler: function () {
                        actionSheet.dismiss();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    LeaveApplyPage.prototype.removeNull = function (string) {
        if (string == null || string == undefined)
            return "";
    };
    LeaveApplyPage.prototype.applyForLeave = function () {
        var requestAPI = "Leave/LeaveApply?" +
            "leavetypeyearlycountid=1" +
            "&leavetakencount=" + this.requestJson['LeaveTakeCount'] +
            "&leavefromdate=" + this.requestJson['LeaveFromDate'] +
            "&leavetodate=" + this.requestJson['LeaveToDate'] +
            "&leavecomments=" + this.removeNull(this.comment) +
            "&AppType=W" +
            "&insertwithimagestatus=N";
        this.httpCall.callApi("", requestAPI).then(function (responseJson) {
            console.error(responseJson);
        }, function (error) {
            console.error(error);
        });
    };
    LeaveApplyPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    LeaveApplyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-leave-apply',template:/*ion-inline-start:"C:\Users\edot3\Documents\Platica-Polinesia\src\pages\leave-apply\leave-apply.html"*/'<ion-content padding class="custom-popup">\n\n\n\n  <ion-card *ngIf="!dataValidation.isEmptyJson(requestJson)">\n\n    <ion-card-header>Apply leave</ion-card-header>\n\n    <ion-row>\n\n      <ion-col style="text-align: center !important; font-weight: 800 !important;" col-5>{{requestJson[\'LeaveFromDate\']}}</ion-col>\n\n      <ion-col style="text-align: center !important; font-weight: 800 !important;" col-2> to </ion-col>\n\n      <ion-col style="text-align: center !important; font-weight: 800 !important;" col-5>{{requestJson[\'LeaveToDate\']}}</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col style="margin-top: 13px !important" col-6> Upload Document 1 : </ion-col>\n\n      <ion-col col-3> <button ion-button outline (click)="getImage1()">\n\n        <ion-icon name="camera"></ion-icon></button>\n\n      </ion-col>\n\n      <ion-col col-3>\n\n        <img [src]="documentImage1" style="width: 40px !important; height: 40px !important; border: 1px #ddd solid !important;" *ngIf="!dataValidation.isEmptyJson(documentImage1)"/>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col style="margin-top: 13px !important" col-6> Upload Document 2 : </ion-col>\n\n      <ion-col col-3>  \n\n        <button ion-button outline (click)="getImage2()"><ion-icon name="camera"></ion-icon></button>\n\n      </ion-col>\n\n        <ion-col col-3>\n\n        <img [src]="documentImage2" style="width: 40px !important; height: 40px !important; border: 1px #ddd solid !important;" *ngIf="!dataValidation.isEmptyJson(documentImage2)"/>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Comments</ion-label>\n\n      <ion-textarea rows=4 columns=10 [(ngModel)]="comment" style="color: #666 !important;"></ion-textarea>\n\n    </ion-item>\n\n\n\n    <p style="text-align:center !important;">\n\n    <button ion-button clear (click)="applyForLeave()">Apply for leave</button>\n\n    </p>\n\n  </ion-card> \n\n\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <button ion-button clear full (click)="closeModal();" color="light">\n\n    <ion-icon name="close-circle" color="white"></ion-icon>\n\n  </button>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\edot3\Documents\Platica-Polinesia\src\pages\leave-apply\leave-apply.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4__providers_message_helper__["a" /* MessageHelper */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_2__Utils_Codes__["a" /* Codes */], __WEBPACK_IMPORTED_MODULE_1__Utils_DataValidation__["a" /* DataValidation */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["ActionSheetController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]])
    ], LeaveApplyPage);
    return LeaveApplyPage;
}());

//# sourceMappingURL=leave-apply.js.map

/***/ })

});
//# sourceMappingURL=9.js.map