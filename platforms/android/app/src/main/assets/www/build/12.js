webpackJsonp([12],{

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveApplyPageModule", function() { return LeaveApplyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leave_apply__ = __webpack_require__(487);
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

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaveApplyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils_DataValidation__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils_Codes__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_message_helper__ = __webpack_require__(342);
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
        this.documentImage1Blob = null;
        this.documentImage2Blob = null;
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
                            _this.documentImage1Blob = _this.convertBase64ToBlob(_this.documentImage1);
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
                            _this.documentImage1Blob = _this.convertBase64ToBlob(_this.documentImage1);
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
                            _this.documentImage2Blob = _this.convertBase64ToBlob(_this.documentImage2);
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
                            _this.documentImage2Blob = _this.convertBase64ToBlob(_this.documentImage2);
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
        var _this = this;
        //Check if the images are present
        if (this.dataValidation.isEmptyJson(this.documentImage1) && this.dataValidation.isEmptyJson(this.documentImage2)) {
            var requestAPI = "Leave/LeaveApply?" +
                "leavetypeyearlycountid=1" +
                "&leavetakencount=" + this.requestJson['LeaveTakeCount'] +
                "&leavefromdate=" + this.requestJson['LeaveFromDate'] +
                "&leavetodate=" + this.requestJson['LeaveToDate'] +
                "&leavecomments=" + this.removeNull(this.comment) +
                "&AppType=W" +
                "&insertwithimagestatus=N";
            var formData = new FormData();
            var loading = this.msgHelper.showWorkingDialog('Applying for leave ...');
            this.httpCall.uploadFile(formData, requestAPI).then(function (responseJson) {
                //Dismiss the loader
                loading.dismiss();
                //Validate
                if (_this.dataValidation.isEmptyJson(responseJson)) {
                    _this.msgHelper.showErrorDialog('Error !!', 'Empty response received from server !!!');
                    return;
                }
                // if(responseJson['status'] == 1){
                _this.msgHelper.showToast('Leave Applied');
                _this.navCtrl.pop();
                // }
            });
        }
        else {
            var requestAPI = "Leave/LeaveApply?" +
                "leavetypeyearlycountid=1" +
                "&leavetakencount=" + this.requestJson['LeaveTakeCount'] +
                "&leavefromdate=" + this.requestJson['LeaveFromDate'] +
                "&leavetodate=" + this.requestJson['LeaveToDate'] +
                "&leavecomments=" + this.removeNull(this.comment) +
                "&AppType=W" +
                "&insertwithimagestatus=Y";
            //Convert the images to blob objects from base64 to upload them
            var loading = this.msgHelper.showWorkingDialog('Applying for leave ...');
            var formData = new FormData();
            formData.append("", this.documentImage1Blob);
            formData.append("", this.documentImage2Blob);
            this.httpCall.uploadFile(formData, requestAPI).then(function (responseJson) {
                //Dismiss the loader
                loading.dismiss();
                //Validate
                if (_this.dataValidation.isEmptyJson(responseJson)) {
                    _this.msgHelper.showErrorDialog('Error !!', 'Empty response received from server !!!');
                    return;
                }
                // if(responseJson['status'] == 1){
                _this.msgHelper.showToast('Leave Applied');
                _this.navCtrl.pop();
                // }
            });
        }
    };
    LeaveApplyPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    LeaveApplyPage.prototype.convertBase64ToBlob = function (base64) {
        var info = this.getInfoFromBase64(base64);
        var sliceSize = 512;
        var byteCharacters = window.atob(info.rawBase64);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            byteArrays.push(new Uint8Array(byteNumbers));
        }
        return new Blob(byteArrays, { type: info.mime });
    };
    LeaveApplyPage.prototype.getInfoFromBase64 = function (base64) {
        var meta = base64.split(',')[0];
        var rawBase64 = base64.split(',')[1].replace(/\s/g, '');
        var mime = /:([^;]+);/.exec(meta)[1];
        var extension = /\/([^;]+);/.exec(meta)[1];
        return {
            mime: mime,
            extension: extension,
            meta: meta,
            rawBase64: rawBase64
        };
    };
    LeaveApplyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-leave-apply',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/leave-apply/leave-apply.html"*/'<ion-content padding class="custom-popup">\n\n  <ion-card *ngIf="!dataValidation.isEmptyJson(requestJson)">\n    <ion-card-header>Apply leave</ion-card-header>\n    <ion-row>\n      <ion-col style="text-align: center !important; font-weight: 800 !important;" col-5>{{requestJson[\'LeaveFromDate\']}}</ion-col>\n      <ion-col style="text-align: center !important; font-weight: 800 !important;" col-2> to </ion-col>\n      <ion-col style="text-align: center !important; font-weight: 800 !important;" col-5>{{requestJson[\'LeaveToDate\']}}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col style="margin-top: 13px !important" col-6> Upload Document 1 : </ion-col>\n      <ion-col col-3> <button ion-button outline (click)="getImage1()">\n        <ion-icon name="camera"></ion-icon></button>\n      </ion-col>\n      <ion-col col-3>\n        <img [src]="documentImage1" style="width: 40px !important; height: 40px !important; border: 1px #ddd solid !important;" *ngIf="!dataValidation.isEmptyJson(documentImage1)"/>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col style="margin-top: 13px !important" col-6> Upload Document 2 : </ion-col>\n      <ion-col col-3>  \n        <button ion-button outline (click)="getImage2()"><ion-icon name="camera"></ion-icon></button>\n      </ion-col>\n        <ion-col col-3>\n        <img [src]="documentImage2" style="width: 40px !important; height: 40px !important; border: 1px #ddd solid !important;" *ngIf="!dataValidation.isEmptyJson(documentImage2)"/>\n      </ion-col>\n    </ion-row>\n\n    <ion-item>\n      <ion-label floating>Comments</ion-label>\n      <ion-textarea rows=4 columns=10 [(ngModel)]="comment" style="color: #666 !important;"></ion-textarea>\n    </ion-item>\n\n    <p style="text-align:center !important;">\n    <button ion-button clear (click)="applyForLeave()">Apply for leave</button>\n    </p>\n  </ion-card> \n\n\n</ion-content>\n\n<ion-footer>\n  <button ion-button clear full (click)="closeModal();" color="light">\n    <ion-icon name="close-circle" color="white"></ion-icon>\n  </button>\n</ion-footer>'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/leave-apply/leave-apply.html"*/,
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
//# sourceMappingURL=12.js.map