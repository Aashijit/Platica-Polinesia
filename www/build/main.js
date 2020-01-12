webpackJsonp([6],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Codes; });
var Codes = /** @class */ (function () {
    function Codes() {
        this.EM_INVALID_MOBILE_NUMBER = "Invalid mobile number";
        this.EM_INVALID_EMAILID = "Invalid email id";
        this.EM_INVALID_PASSWORD = "Invalid password";
        this.EM_INVALID_VERIFICATION_ID = "Invalid verification id";
        this.API_ERROR = "500";
        this.LSK_USER_PASSWORD = "userpassword";
        this.LSK_USER_INFORMATION_JSON = "userinfo";
        this.API_GET_TOKEN = "Login/GetToken";
        this.API_GET_LOGIN_DETAILS = "Login/GetLoginDetails";
        this.API_GET_USER_DETAILS = "User/GetUserList";
        this.API_INSERT_USER = "User/InsertUser";
        this.API_UPDATE_USER = "User/UpdateUser";
        this.API_DELETE_USER = "User/DeleteUser";
        this.API_GET_PARTICULAR_USER_INFORMATION = "User/GetUserInformation";
        this.API_CHANGE_USER_PASSWORD = "User/ChangeUserPassword";
        this.API_FORGOT_PASSWORD = "Login/ForgotPassword";
        this.API_GET_USER_GROUP = "UserGroup/GetUserGroup";
        this.API_GET_USER_MAP_LIST = "UserMap/GetUserMapList";
        this.API_ENDPOINT = "http://101.53.145.231:8053/";
    }
    return Codes;
}());

//# sourceMappingURL=Codes.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-user/add-user.module": [
		278,
		5
	],
	"../pages/home/home.module": [
		279,
		0
	],
	"../pages/login/login.module": [
		280,
		4
	],
	"../pages/project-information/project-information.module": [
		281,
		3
	],
	"../pages/update-user/update-user.module": [
		282,
		2
	],
	"../pages/user-message-notification-list/user-message-notification-list.module": [
		283,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils_Codes__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpProvider = /** @class */ (function () {
    function HttpProvider(http, codes) {
        this.http = http;
        this.codes = codes;
    }
    /**
     *
     * @param data  the json data
     * @param apiName the api name
     */
    HttpProvider.prototype.callApi = function (data, apiName) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            //data['action'] = action;
            //data['Auth_Token'] = (tokenId == null) ? 1 : tokenId;
            //data['U_Type'] = 'D';
            console.log(JSON.stringify(data));
            _this.http.post(_this.codes.API_ENDPOINT + apiName, JSON.stringify(data), { headers: headers }).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve({ status: _this.codes.API_ERROR });
            });
        });
    };
    HttpProvider.prototype.isNullOrEmpty = function (str) {
        return typeof str === 'undefined' || str === null || (typeof str === 'string' && str.length <= 0);
    };
    HttpProvider.prototype.convertToArray = function (object) {
        if (this.isArray(object))
            return object;
        else
            return [object];
    };
    HttpProvider.prototype.isArray = function (object) {
        if (typeof object === 'undefined')
            return false;
        return Object.prototype.toString.call(object).slice(8, -1) === 'Array';
    };
    HttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_0__Utils_Codes__["a" /* Codes */]])
    ], HttpProvider);
    return HttpProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageHelper = /** @class */ (function () {
    function MessageHelper(alertCtrl, loadingCtrl, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    MessageHelper.prototype.showWorkingDialog = function (message) {
        if (message === void 0) { message = "Please wait..."; }
        //Working, please wait...
        var l = this.loadingCtrl.create({
            content: message
        });
        l.present();
        return l;
    };
    MessageHelper.prototype.showToast = function (message, autoClose) {
        if (autoClose === void 0) { autoClose = true; }
        if (autoClose) {
            this.toastCtrl.create({
                message: message,
                duration: 3000
            }).present();
        }
        else {
            this.toastCtrl.create({
                message: message,
                showCloseButton: true,
                closeButtonText: 'Ok'
            }).present();
        }
    };
    MessageHelper.prototype.showAlert = function (title, msg, button) {
        if (button === void 0) { button = 'Close'; }
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: msg,
            buttons: [button]
        });
        alert.present();
        return alert;
    };
    MessageHelper.prototype.showConnectionErrorDialog = function () {
        this.alertCtrl.create({
            title: "Connection Error!",
            subTitle: "Failed to connect with server. Please try again.",
            buttons: ['Close']
        }).present();
    };
    MessageHelper.prototype.showErrorDialog = function (title, message) {
        this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['Close']
        }).present();
    };
    MessageHelper.prototype.showNoProductDialog = function () {
        this.alertCtrl.create({
            title: "Not Available!",
            subTitle: "No products found. Please try again.",
            buttons: ['Close']
        }).present();
    };
    MessageHelper.prototype.showNoModelDialog = function () {
        this.alertCtrl.create({
            title: "Not Available!",
            subTitle: "No Car Model found. Please try again.",
            buttons: ['Close']
        }).present();
    };
    MessageHelper.prototype.showNoOrderDialog = function () {
        this.alertCtrl.create({
            title: "Not Available!",
            subTitle: "No Order found.",
            buttons: ['Close']
        }).present();
    };
    MessageHelper.prototype.showNoProductDialogPRODUCTOUTOFSTOCK = function () {
        this.alertCtrl.create({
            title: "Not Available!",
            subTitle: "PRODUCT OUT OF STOCK",
            buttons: ['Close']
        }).present();
    };
    MessageHelper.prototype.showNoProductDialogINSUFFICIENTSTOCK = function () {
        this.alertCtrl.create({
            title: "Not Available!",
            subTitle: "INSUFFICIENT STOCK",
            buttons: ['Close']
        }).present();
    };
    MessageHelper.prototype.showNoProductDialogINVALIDUSER = function () {
        this.alertCtrl.create({
            title: "Error!",
            subTitle: "INVALID USER",
            buttons: ['Close']
        }).present();
    };
    MessageHelper.prototype.showNoProductDialogFAILURE = function () {
        this.alertCtrl.create({
            title: "Error!",
            subTitle: "FAILURE",
            buttons: ['Close']
        }).present();
    };
    MessageHelper.prototype.showNoProductDialogSYSTEMERROR = function () {
        this.alertCtrl.create({
            title: "Error!",
            subTitle: "SYSTEM ERROR",
            buttons: ['Close']
        }).present();
    };
    MessageHelper.prototype.showDialogChangePassword = function () {
        this.alertCtrl.create({
            title: "Error!",
            subTitle: "Your old password does not match.",
            buttons: ['Close']
        }).present();
    };
    MessageHelper = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* ToastController */]])
    ], MessageHelper);
    return MessageHelper;
}());

//# sourceMappingURL=message-helper.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataValidation; });
var DataValidation = /** @class */ (function () {
    function DataValidation() {
    }
    DataValidation.prototype.isValidMobileNumber = function (mobileNumber) {
        if (mobileNumber == undefined || mobileNumber == null || mobileNumber == "")
            return false;
        var mobileNumberRegex = new RegExp("^[0-9]{10}$");
        if (mobileNumberRegex.test(mobileNumber))
            return true;
        return false;
    };
    DataValidation.prototype.isValidEmailId = function (emailId) {
        if (emailId == undefined || emailId == null || emailId == "")
            return false;
        if (emailId != undefined && emailId != null && emailId != "") {
            var mobileNumberRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
            if (mobileNumberRegex.test(emailId))
                return true;
            return false;
        }
        return true;
    };
    DataValidation.prototype.stringToBoolean = function (string) {
        if (string == null || string == undefined || string == '')
            return false;
        switch (string) {
            case 'true':
            case 'True':
                return true;
            case 'false':
            case 'False':
                return false;
        }
        return string;
    };
    DataValidation.prototype.commaSeperator = function (string) {
        //Check if string is null
        if (this.isEmpty(string))
            return null;
        //Check if commas are present
        if (string.includes(","))
            return string;
        //Insert the commas
        return string.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    };
    DataValidation.prototype.isValidPinCode = function (pinCode) {
        if (pinCode != undefined && pinCode != null && pinCode != "") {
            var pinCodeRegex = new RegExp("^[0-9]{6}$");
            if (pinCodeRegex.test(pinCode))
                return true;
            return false;
        }
    };
    DataValidation.prototype.isValidAmount = function (amount) {
        var strongRegex = new RegExp("[0-9]{0,8}.[0-9]{0,2}");
        return (strongRegex.test(amount));
    };
    DataValidation.prototype.isValidIfsc = function (code) {
        var strongRegex = new RegExp("[A-Za-z]{4}[0-9]{7}$");
        return (strongRegex.test(code));
    };
    DataValidation.prototype.doValidateName = function (name) {
    };
    DataValidation.prototype.isValidPassword = function (password) {
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        return (strongRegex.test(password));
    };
    DataValidation.prototype.doCheckForUndefinedVariable = function (fieldToCheck, returnMessageTab, fieldName) {
        if (fieldToCheck == undefined || fieldToCheck == "")
            returnMessageTab = fieldName + " not present !!!";
        return fieldToCheck;
    };
    DataValidation.prototype.isNull = function (value) {
        if (value == null)
            return true;
        return false;
    };
    DataValidation.prototype.isEmptyJson = function (value) {
        if (value == undefined)
            return true;
        if (value == null)
            return true;
        if (value == "")
            return true;
        return false;
    };
    DataValidation.prototype.isEmpty = function (value) {
        if (value == undefined)
            return true;
        if (value == null)
            return true;
        if (value.trim() == "")
            return true;
        return false;
    };
    DataValidation.prototype.isUndefined = function (value) {
        if (value == undefined) {
            return true;
        }
    };
    DataValidation.prototype.isValidNumber = function (number) {
        if (number != null || number != undefined || number != "") {
            var nameRegex = new RegExp("[0-9]+");
            if (nameRegex.test(number))
                return true;
            return false;
        }
        return false;
    };
    DataValidation.prototype.isValidName = function (name) {
        if (name != undefined && name != null && name != "") {
            var nameRegex = new RegExp("^[a-zA-Z ]");
            if (nameRegex.test(name))
                return true;
            return false;
        }
    };
    DataValidation.prototype.addErrorMessage = function (eid, errorMessage) {
        /*STEP : 1  node variable for adding child element for error message*/
        var node = document.createElement("ion-note");
        /*STEP : 2 Add classes of this node */
        node.setAttribute("class", "validation-error");
        /*STEP : 2 Add id of this node */
        node.setAttribute("id", eid + "Err");
        /*STEP : 3 Add text content of this node */
        var textnode = document.createTextNode(errorMessage);
        node.appendChild(textnode);
        /*STEP : 4 Add this node to under the text field */
        document.getElementById(eid).parentElement.appendChild(node);
    };
    DataValidation.prototype.removeErrorMessage = function (eid) {
        if (document.getElementById(eid + "Err") != null)
            document.getElementById(eid + "Err").remove();
    };
    DataValidation.prototype.removeErrorMessageForMultipleElement = function (eClass, index) {
        if (document.getElementsByClassName("validation-error" + " " + eClass + "Err")[index] != null)
            document.getElementsByClassName("validation-error" + " " + eClass + "Err")[index].remove();
    };
    DataValidation.prototype.addErrorMessageForMultipleElement = function (eid, errorMessage, index) {
        /*STEP : 1  node variable for adding child element for error message*/
        var node = document.createElement("ion-note");
        /*STEP : 2 Add classes of this node */
        node.setAttribute("class", "validation-error" + " " + eid + "Err");
        /*STEP : 3 Add text content of this node */
        var textnode = document.createTextNode(errorMessage);
        node.appendChild(textnode);
        /*STEP : 4 Add this node to under the text field */
        document.getElementsByClassName(eid)[index].parentElement.appendChild(node);
    };
    return DataValidation;
}());

//# sourceMappingURL=DataValidation.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_data_data__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils_Codes__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_message_helper__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Utils_DataValidation__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_svg_round_progressbar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular_svg_round_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-user/add-user.module#AddUserPageModule', name: 'AddUserPage', segment: 'add-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/project-information/project-information.module#ProjectInformationPageModule', name: 'ProjectInformationPage', segment: 'project-information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update-user/update-user.module#UpdateUserPageModule', name: 'UpdateUserPage', segment: 'update-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-message-notification-list/user-message-notification-list.module#UserMessageNotificationListPageModule', name: 'UserMessageNotificationListPage', segment: 'user-message-notification-list', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10_angular_svg_round_progressbar__["RoundProgressModule"],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__Utils_DataValidation__["a" /* DataValidation */],
                __WEBPACK_IMPORTED_MODULE_2__providers_message_helper__["a" /* MessageHelper */],
                __WEBPACK_IMPORTED_MODULE_1__Utils_Codes__["a" /* Codes */],
                __WEBPACK_IMPORTED_MODULE_0__providers_data_data__["a" /* HttpProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = 'LoginPage';
        this.initializeApp();
        // used for an example of ngFor and navigation
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/aashijit/Platica-Polinesia/src/app/app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    \n  </ion-content>\n\n</ion-menu>\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/aashijit/Platica-Polinesia/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map