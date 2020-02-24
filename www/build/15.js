webpackJsonp([15],{

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBrandPageModule", function() { return AddBrandPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_brand__ = __webpack_require__(447);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddBrandPageModule = /** @class */ (function () {
    function AddBrandPageModule() {
    }
    AddBrandPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_brand__["a" /* AddBrandPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__add_brand__["a" /* AddBrandPage */]),
            ],
        })
    ], AddBrandPageModule);
    return AddBrandPageModule;
}());

//# sourceMappingURL=add-brand.module.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBrandPage; });
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








var AddBrandPage = /** @class */ (function () {
    function AddBrandPage(navCtrl, navParams, msgHelper, httpCall, codes, dataValidation, actionSheet, alertController, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.msgHelper = msgHelper;
        this.httpCall = httpCall;
        this.codes = codes;
        this.dataValidation = dataValidation;
        this.actionSheet = actionSheet;
        this.alertController = alertController;
        this.camera = camera;
        this.brandImage = '../../assets/imgs/user.png';
        this.brandImageBlob = null;
        this.UserList = '';
        this.UserList = this.navParams.get('userList');
    }
    AddBrandPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddBrandPage');
    };
    AddBrandPage.prototype.addBrand = function () {
        var _this = this;
        //Call the change password API
        var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));
        console.error(JSON.stringify(currentUserInfo));
        if (this.dataValidation.isEmptyJson(currentUserInfo)) {
            this.msgHelper.showToast('Could not fetch user id');
            return;
        }
        //Inserting a new user profile
        var loading = this.msgHelper.showWorkingDialog('Creating your brand ...');
        var apiUpdateString = this.codes.API_INSERT_BRAND +
            '?brname=' + this.removeNull(this.brandName) +
            '&brdesc=' + this.removeNull(this.brandDescription) +
            '&brownerid=' + this.removeNull(this.brandOwnerId) +
            '&brcreatebyid=' + currentUserInfo[0]['UserId'] +
            '&AppType=W';
        //TODO: Fix this
        if (this.brandImageBlob == null) {
            this.msgHelper.showErrorDialog('Error !!!', 'Brand Image is mandatory');
            return;
        }
        var formData = new FormData();
        formData.append("file", this.brandImageBlob);
        console.error(apiUpdateString);
        this.httpCall.uploadFile(formData, apiUpdateString).then(function (responseJson) {
            //Dismiss the loader
            loading.dismiss();
            //Validate
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog('Error !!', 'Empty response received from server !!!');
                return;
            }
            if (responseJson['status'] == 1) {
                _this.msgHelper.showToast('Brand Added !!!');
                _this.navCtrl.pop();
            }
        });
    };
    AddBrandPage.prototype.removeNull = function (variable) {
        if (variable == null || variable == undefined || variable == 0)
            return '';
        return variable;
    };
    AddBrandPage.prototype.presentActionSheetToUpdateImage = function () {
        var _this = this;
        var actionSheet = this.actionSheet.create({
            title: 'Update your brand picture',
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
                            var base64Image = 'data:image/jpeg;base64,' + imageData;
                            _this.brandImage = base64Image;
                            _this.brandImageBlob = _this.convertBase64ToBlob(base64Image);
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
                            var base64Image = 'data:image/jpeg;base64,' + imageData;
                            _this.brandImage = base64Image;
                            _this.brandImageBlob = _this.convertBase64ToBlob(base64Image);
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
    AddBrandPage.prototype.convertBase64ToBlob = function (base64) {
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
    AddBrandPage.prototype.getInfoFromBase64 = function (base64) {
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
    AddBrandPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    AddBrandPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-add-brand',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/add-brand/add-brand.html"*/'<ion-content padding class="custom-popup">\n\n  <h1 style="color: wheat;">Brand</h1>\n\n  <ion-list style="text-align: center !important;">\n    \n    <ion-col col-2 (click)="presentActionSheetToUpdateImage()">\n      <img [src]="brandImage" class="camera-img-wrapper" />\n    </ion-col>\n  \n    <ion-item class="no-underline">\n      <ion-label color="primary">Brand Name</ion-label>\n      <ion-input [(ngModel)]="brandName">\n      </ion-input>\n    </ion-item>\n\n    <ion-item class="no-underline">\n      <ion-label color="primary">Brand Description</ion-label>\n      <ion-textarea [(ngModel)]="brandDescription">\n      </ion-textarea>\n    </ion-item>\n\n    <ion-item class="no-underline">\n      <ion-label color="primary" floating>Brand Owner</ion-label>\n      <ion-select [(ngModel)]="brandOwnerId" interface="popover" [selectOptions]="{ mode: \'ios\' }">\n        <p *ngFor=\'let user of UserList\'>\n      <ion-option [value]="user[\'UserId\']">{{user[\'FirstName\']+\' \'+user[\'LastName\']}}</ion-option>\n      </p>\n      </ion-select>\n  \n    </ion-item>\n    \n    <p style="text-align: center;">\n      <button ion-button clear class="capitalize" (click)="addBrand()">Add Brand &nbsp; &nbsp;<ion-icon name="create"></ion-icon></button>\n    </p>  \n  \n  </ion-list>\n\n</ion-content>\n\n\n\n<ion-footer>\n  <button ion-button clear full (click)="closeModal();" color="light">\n    <ion-icon name="close-circle" color="white"></ion-icon>\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/add-brand/add-brand.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4__providers_message_helper__["a" /* MessageHelper */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_2__Utils_Codes__["a" /* Codes */], __WEBPACK_IMPORTED_MODULE_1__Utils_DataValidation__["a" /* DataValidation */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["ActionSheetController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]])
    ], AddBrandPage);
    return AddBrandPage;
}());

//# sourceMappingURL=add-brand.js.map

/***/ })

});
//# sourceMappingURL=15.js.map