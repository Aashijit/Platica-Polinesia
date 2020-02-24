webpackJsonp([13],{

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserPageModule", function() { return AddUserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_user__ = __webpack_require__(449);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddUserPageModule = /** @class */ (function () {
    function AddUserPageModule() {
    }
    AddUserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_user__["a" /* AddUserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__add_user__["a" /* AddUserPage */]),
            ],
        })
    ], AddUserPageModule);
    return AddUserPageModule;
}());

//# sourceMappingURL=add-user.module.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserPage; });
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








var AddUserPage = /** @class */ (function () {
    function AddUserPage(navCtrl, navParams, msgHelper, httpCall, codes, dataValidation, actionSheet, alertController, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.msgHelper = msgHelper;
        this.httpCall = httpCall;
        this.codes = codes;
        this.dataValidation = dataValidation;
        this.actionSheet = actionSheet;
        this.alertController = alertController;
        this.camera = camera;
        this.profileImage = '../../assets/imgs/user.png';
        this.profileImageBlob = null;
    }
    AddUserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddUserPage');
    };
    AddUserPage.prototype.update = function () {
        this.msgHelper.showToast('Creating your user ...');
        this.navCtrl.pop();
    };
    AddUserPage.prototype.createUserInformation = function () {
        var _this = this;
        //Call the change password API
        var currentUserInfo = JSON.parse(localStorage.getItem(this.codes.LSK_USER_INFORMATION_JSON));
        console.error(JSON.stringify(currentUserInfo));
        if (this.dataValidation.isEmptyJson(currentUserInfo)) {
            this.msgHelper.showToast('Could not fetch user id');
            return;
        }
        //Inserting a new user profile
        var loading = this.msgHelper.showWorkingDialog('Creating your profile');
        /*
        &ucreatebyid=10007&uparentbyid=10007&upwd=123&AppType=W
        */
        var apiUpdateString = this.codes.API_INSERT_USER +
            '?ufname=' + this.removeNull(this.firstName) +
            '&umname=' + this.removeNull(this.middleName) +
            '&ulname=' + this.removeNull(this.lastName) +
            '&uemail=' + this.removeNull(this.email) +
            '&umobile=' + this.removeNull(this.phone) +
            '&uadd1=' + this.removeNull(this.address1) +
            '&uadd2=' + this.removeNull(this.address2) +
            '&ucity=' + this.removeNull(this.city) +
            '&ustate=' + this.removeNull(this.state) +
            '&uzip=' + this.removeNull(this.pincode) +
            '&ucreatebyid=' + currentUserInfo[0]['UserId'] +
            '&uparentbyid=0' +
            '&upwd=' + this.removeNull(this.password) +
            '&AppType=W';
        //TODO: Fix this
        if (this.profileImageBlob == null) {
            this.msgHelper.showErrorDialog('Error !!!', 'Profile Image is mandatory');
            return;
        }
        var formData = new FormData();
        formData.append("file", this.profileImageBlob);
        this.httpCall.uploadFile(formData, apiUpdateString).then(function (responseJson) {
            //Dismiss the loader
            loading.dismiss();
            //Validate
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog('Error !!', 'Empty response received from server !!!');
                return;
            }
            if (responseJson['status'] == 1) {
                _this.msgHelper.showToast('Profile Added !!!');
                localStorage.removeItem(_this.codes.LSK_USER_INFORMATION_JSON);
                localStorage.setItem(_this.codes.LSK_USER_INFORMATION_JSON, JSON.stringify(_this.userInformation));
                _this.navCtrl.pop();
            }
        });
    };
    AddUserPage.prototype.removeNull = function (variable) {
        if (variable == null || variable == undefined || variable == 0)
            return '';
        return variable;
    };
    AddUserPage.prototype.presentActionSheetToUpdateImage = function () {
        var _this = this;
        var actionSheet = this.actionSheet.create({
            title: 'Update your profile picture',
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
                            _this.profileImage = base64Image;
                            _this.profileImageBlob = _this.convertBase64ToBlob(base64Image);
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
                            _this.profileImage = base64Image;
                            _this.profileImageBlob = _this.convertBase64ToBlob(base64Image);
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
    AddUserPage.prototype.convertBase64ToBlob = function (base64) {
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
    AddUserPage.prototype.getInfoFromBase64 = function (base64) {
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
    AddUserPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    AddUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-add-user',template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/pages/add-user/add-user.html"*/'\n<ion-content padding class="custom-popup">\n\n  <!--User information to be present here-->\n  <ion-list style="text-align: center !important;">\n\n    <ion-col col-2 (click)="presentActionSheetToUpdateImage()">\n      <img [src]="profileImage" class="camera-img-wrapper" />\n    </ion-col>\n\n    <ion-item class="no-underline">\n      <ion-label color="primary">Email</ion-label>\n      <ion-input [(ngModel)]="email">\n      </ion-input>\n    </ion-item>\n\n    <ion-item class="no-underline">\n      <ion-label color="primary">Phone</ion-label>\n      <ion-input [(ngModel)]="phone">\n      </ion-input>\n    </ion-item>\n\n    <ion-item class="no-underline">\n      <ion-label color="primary">Password</ion-label>\n      <ion-input type="password" [(ngModel)]="password">\n      </ion-input>\n    </ion-item>\n    \n  <ion-item class="no-underline">\n    <ion-label color="primary">First Name</ion-label>\n    <ion-input [(ngModel)]="firstName">\n    </ion-input>\n  </ion-item>\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">Middle Name</ion-label>\n    <ion-input [(ngModel)]="middleName">\n    </ion-input>\n  </ion-item>\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">Last Name</ion-label>\n    <ion-input [(ngModel)]="lastName">\n    </ion-input>\n  </ion-item>\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">Address Line 1</ion-label>\n    <ion-input [(ngModel)]="address1">\n    </ion-input>\n  </ion-item>\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">Address Line 2</ion-label>\n    <ion-input [(ngModel)]="address2">\n    </ion-input>\n  </ion-item>\n\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">City</ion-label>\n    <ion-input [(ngModel)]="city">\n    </ion-input>\n  </ion-item>\n\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">State</ion-label>\n    <ion-input [(ngModel)]="state">\n    </ion-input>\n  </ion-item>\n\n  <ion-item class="no-underline">\n    <ion-label color="primary">Zipcode</ion-label>\n    <ion-input [(ngModel)]="pincode">\n    </ion-input>\n  </ion-item>\n\n\n  <p style="text-align: center;">\n    <button ion-button clear class="capitalize" (click)="createUserInformation()">Create User &nbsp; &nbsp;<ion-icon name="create"></ion-icon></button>\n  </p>  \n\n</ion-list> \n\n\n</ion-content>\n\n\n<ion-footer>\n  <button ion-button clear full (click)="closeModal();" color="light">\n    <ion-icon name="close-circle" color="white"></ion-icon>\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/pages/add-user/add-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4__providers_message_helper__["a" /* MessageHelper */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_2__Utils_Codes__["a" /* Codes */], __WEBPACK_IMPORTED_MODULE_1__Utils_DataValidation__["a" /* DataValidation */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["ActionSheetController"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]])
    ], AddUserPage);
    return AddUserPage;
}());

//# sourceMappingURL=add-user.js.map

/***/ })

});
//# sourceMappingURL=13.js.map