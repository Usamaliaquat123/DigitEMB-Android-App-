webpackJsonp([0],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DigitEmpApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the DigitEmpApiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var DigitEmpApiProvider = (function () {
    function DigitEmpApiProvider(afAuth, afDatabase, http) {
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.http = http;
        console.log('Hello DigitEmpApiProvider Provider');
    }
    DigitEmpApiProvider.prototype.index = function (id) {
    };
    DigitEmpApiProvider.prototype.category = function (page) {
        return this.http.get("https://www.digitemb.com/wp-json/wp/v2/posts?_embed&categories=221&filter[order]=DESC&filter[posts_per_page]=5&page=" + page)
            .map(function (data) { return data.json(); });
    };
    DigitEmpApiProvider.prototype.categorieVector = function (page) {
        return this.http.get("https://www.digitemb.com/wp-json/wp/v2/posts?_embed&categories=222&filter[order]=DESC&filter[posts_per_page]=5&page=" + page)
            .map(function (data) { return data.json(); });
    };
    DigitEmpApiProvider.prototype.facebookApi = function (token) {
        return this.http.get("https://graph.facebook.com/v2.10/me?fields=id%2Cname%2Cemail%2Cfirst_name%2Cpicture.width(720).height(720).as(picture_large)%2Ccover&access_token=" + token)
            .map(function (data) { return data.json(); });
    };
    DigitEmpApiProvider.prototype.search = function (keyword, id) {
        return this.http.get("https://www.digitemb.com/wp-json/wp/v2/posts?_embed&filter[order]=DESC&filter[posts_per_page]=5&search=" + keyword + "&page=" + id)
            .map(function (data) { return data.json(); });
    };
    return DigitEmpApiProvider;
}());
DigitEmpApiProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], DigitEmpApiProvider);

//# sourceMappingURL=digit-emp-api.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPopupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalPopupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ModalPopupPage = (function () {
    function ModalPopupPage(navCtrl, view, navParams) {
        this.navCtrl = navCtrl;
        this.view = view;
        this.navParams = navParams;
    }
    ModalPopupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPopupPage');
    };
    ModalPopupPage.prototype.ionViewWillLoad = function () {
        var data = this.navParams.data;
        this.data = data;
    };
    ModalPopupPage.prototype.close = function () {
        this.navCtrl.pop();
    };
    return ModalPopupPage;
}());
ModalPopupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modal-popup',template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Digiters\src\pages\modal-popup\modal-popup.html"*/'\n\n<ion-content style=" background-color:#222222;">\n\n  <ion-buttons end style="background-color:#222222; ">\n    <button ion-button color="danger" small (click)="close()"><ion-icon style="color:aliceblue; font-size:20px;" name="ios-close-outline"></ion-icon></button>\n  </ion-buttons>\n    <div id="dataContent"><p [innerHtml] = "data.content.rendered"></p></div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Digiters\src\pages\modal-popup\modal-popup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ModalPopupPage);

//# sourceMappingURL=modal-popup.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VectorPageCustomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VectorPageCustomPage = (function () {
    function VectorPageCustomPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return VectorPageCustomPage;
}());
VectorPageCustomPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-vector-page-custom',template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Digiters\src\pages\vector-page-custom\vector-page-custom.html"*/'\n<ion-header>\n    \n      <ion-navbar color="dark">\n        <ion-title>Vector Order Form</ion-title>\n      </ion-navbar>\n    \n    </ion-header>\n<ion-content style="background-color:#121315;">\n    <vector-form></vector-form> \n</ion-content>\n'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Digiters\src\pages\vector-page-custom\vector-page-custom.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], VectorPageCustomPage);

//# sourceMappingURL=vector-page-custom.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomFormShowerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomFormShowerPage = (function () {
    function CustomFormShowerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.CustomPage = this.navParams.data;
        console.log(this.CustomPage);
    }
    return CustomFormShowerPage;
}());
CustomFormShowerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-custom-form-shower',template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Digiters\src\pages\custom-form-shower\custom-form-shower.html"*/'\n<ion-header>\n    \n      <ion-navbar color="dark">\n        <ion-title>Digitizing Order Form</ion-title>\n      </ion-navbar>\n    \n    </ion-header>\n<ion-content style="background-color:#121315;">\n    <digitizing-form></digitizing-form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Digiters\src\pages\custom-form-shower\custom-form-shower.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], CustomFormShowerPage);

//# sourceMappingURL=custom-form-shower.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reset_password_reset_password__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_digit_emp_api_digit_emp_api__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_menu_user_menu__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_native__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// Firebase Authentication



var LoginPage = (function () {
    function LoginPage(zone, DigitEMBapi, afAuth, afDatabase, facebook, toast, network, alrt, navCtrl, navParams) {
        this.zone = zone;
        this.DigitEMBapi = DigitEMBapi;
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.facebook = facebook;
        this.toast = toast;
        this.network = network;
        this.alrt = alrt;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // Getting Interface data
        this.user = {};
        // Adjusting Background images
        this.backgrounds = [
            'assets/img/backgrounds/1.png',
            'assets/img/backgrounds/2.png',
            'assets/img/backgrounds/3.png',
            'assets/img/backgrounds/4.png'
        ];
        // Getting components data
        this.email = '';
        this.password = '';
        this.name = '';
        this.CoverImage = '';
        __WEBPACK_IMPORTED_MODULE_11_ionic_native__["b" /* Keyboard */].disableScroll(true);
    }
    LoginPage.prototype.displayNetworkUpdate = function (ConnectionState) {
        var networkType = this.network.type;
        this.toast.create({
            message: "You are now connected " + ConnectionState + " via " + networkType,
            duration: 5000
        }).present();
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        var that = this;
        __WEBPACK_IMPORTED_MODULE_10_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user == null) {
            }
            else {
                that.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__user_menu_user_menu__["a" /* UserMenuPage */]);
            }
        });
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_11_ionic_native__["b" /* Keyboard */].disableScroll(true);
        this.network.onConnect().subscribe(function (data) {
            _this.displayNetworkUpdate(data.type);
        }), function (error) { return console.log(error); };
        this.network.onDisconnect().subscribe(function (data) {
            _this.displayNetworkUpdate(data.type);
        }), function (error) { return console.log(error); };
    };
    LoginPage.prototype.SignUp = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    // ==========================SHOWING ALERT POPUPS=======================================//
    // Creating function that have a parameter of message which is string
    LoginPage.prototype.alert = function (message) {
        // create a variable that create an alert popup
        var alert = this.alrt.create({
            // this popup have title
            title: "Info!",
            // this popup have some subtitle which is message
            subTitle: message,
            // this popup have a button which is OK
            buttons: ['OK']
            // This popup is present
        }).present();
    };
    //======================================================================================//
    // =======================USER AUTHENTICATION FIREBASE==================================//
    // User Login Authentication
    LoginPage.prototype.login = function (user) {
        var _this = this;
        // SIGN in in firebase using typed email and password
        __WEBPACK_IMPORTED_MODULE_10_firebase___default.a.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(function (data) {
            // user also see alert popup message Success you are login
            _this.alert('Welcome Back !');
            // then send user to the root Homepage
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__user_menu_user_menu__["a" /* UserMenuPage */]);
        })
            .catch(function (error) {
            // This error print the log
            console.log('got an error', error);
            // and have a alert popup
            _this.alert(error.message);
        });
    };
    // ==========================================================================================// 
    LoginPage.prototype.ResetPasswordPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__reset_password_reset_password__["a" /* ResetPasswordPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Digiters\src\pages\login\login.html"*/'\n<ion-content >\n<!-- Setting Background Sliders -->\n  <ion-slides style="position: fixed;" pager="false" autoplay="2000"  loop="true" speed="1500" effect="fade">\n    <ion-slide class="swiper-no-swiping" style=" height: auto; background-size: cover;background-position: center;background-repeat: no-repeat; width:100%;" *ngFor="let background of backgrounds" [ngStyle]="{\'background-image\': \'url(\' + background +\')\'}"></ion-slide>\n</ion-slides>\n<!-- Overlay Login Components -->\n<div style="   color: white;\nposition: absolute;\ntop: 0;\npadding: 10vw;\ntext-align: center;\nwidth: 100%;\nmargin: 0 auto;\nz-index: 2;">\n<!--Logo here  -->\n<div style="text-align:center;\n            margin-top:20%;">\n<img src="assets/img/logo.png" width="180px" height="180px">\n</div>\n<br>\n<!--Email input here  -->\n<div style="border-radius: 25px;\nborder: 2px solid #FFFFFF;\npadding: 0.5px; \nwidth: 80%;\nmargin-left:10%;\n">\n    <ion-input style="color:#FFFFFF;" placeholder="Enter Your email here" name="email" type="text" value=""  [(ngModel)] = "user.email"></ion-input>\n</div>\n<br>\n<!-->\n//Password  input here -->\n<div style="border-radius: 25px;\nborder: 2px solid #FFFFFF;\npadding: 0.5px; \nwidth: 80%;\ntext-align:center;\nmargin-left:10%;\n">\n\n<ion-input style="color:#FFFFFF;" placeholder="Enter Your password here" name="password" type="password" value="" [(ngModel)] = "user.password"></ion-input>\n\n</div>\n\n<br>\n\n\n<div (click)="login(user)" style="border-radius: 25px;\nborder: 2px solid #FFFFFF;\npadding: 12px; \nwidth: 80%;\ntext-align:center;\nmargin-left:10%;\n">\nLogin\n</div>\n\n<ion-grid>\n<ion-row>\n    <ion-col><div style="margin-left:8%;" >\n                  <button style="color:#FFFFFF;" (click)="ResetPasswordPage()" ion-button clear >Forgot password</button>\n             </div>\n    </ion-col>\n   \n    <ion-col>\n            <div style="text-align:center;">\n                <button style="color:#FFFFFF;" (click)="SignUp()" ion-button clear >Sign up</button>    \n            </div>    \n    </ion-col>\n</ion-row>\n</ion-grid>\n\n<br>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Digiters\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_core__["P" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_core__["P" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__providers_digit_emp_api_digit_emp_api__["a" /* DigitEmpApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_digit_emp_api_digit_emp_api__["a" /* DigitEmpApiProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["j" /* ToastController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* AlertController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["g" /* NavController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["h" /* NavParams */]) === "function" && _k || Object])
], LoginPage);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 199:
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
webpackEmptyAsyncContext.id = 199;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackUsersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedbackUsersPage = (function () {
    function FeedbackUsersPage(afAuth, toast, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FeedbackUsersPage.prototype.SendFeedBack = function () {
        var _this = this;
        if (this.FeedBackOfUser == null) {
        }
        else {
            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().onAuthStateChanged(function (data) {
                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref("feedback" + data.uid).set({
                    Sender_Email: data.email,
                    Sender_Message: _this.FeedBackOfUser,
                });
                _this.toast.create({
                    message: 'Thanks for your feedback...',
                    duration: 5000,
                    position: 'top'
                }).present();
            });
        }
    };
    return FeedbackUsersPage;
}());
FeedbackUsersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-feedback-users',template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Digiters\src\pages\feedback-users\feedback-users.html"*/'\n<ion-header color="dark">\n\n  <ion-navbar color="dark">\n    <ion-title>FeedBack</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background-color:#121315;">\n  <br>\n    <div style="text-align:center;">\n      <p style="color:aliceblue; font-size:20px; letter-spacing:2px;">Give Us feed back ! </p>\n    </div>\n    <br>\n      <div style="margin-left:3%; margin-right:3%;"><textarea [(ngModel)]="FeedBackOfUser" style="background-color:#1E1F2B; border-style:none; color:#FFFFFF; font-size:13px;padding: 5%; opacity:.8; " id="" placeholder="Your FeedBack" cols="48" rows="25"></textarea></div>\n\n      <div style="text-align:center; margin-top:5%;">\n      <button (click)="SendFeedBack()" style="text-transform:none; border: 2px solid #FFFFFF; opacity:.8; color:#FFFFFF; background-color:transparent; "  ion-button  round >Send FeedBack</button>\n      </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Digiters\src\pages\feedback-users\feedback-users.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _d || Object])
], FeedbackUsersPage);

var _a, _b, _c, _d;
//# sourceMappingURL=feedback-users.js.map

/***/ }),

/***/ 242:
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
webpackEmptyAsyncContext.id = 242;

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationProcessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VerificationProcessPage = (function () {
    function VerificationProcessPage(renderer, toast, afAuth, afAuthDatabase, navCtrl, navParams) {
        this.renderer = renderer;
        this.toast = toast;
        this.afAuth = afAuth;
        this.afAuthDatabase = afAuthDatabase;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.accordianExpanded = false;
    }
    VerificationProcessPage.prototype.ngOnInit = function () {
    };
    VerificationProcessPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.UserProfile = firebase.database().ref('profile');
        firebase.auth().onAuthStateChanged(function (data) {
            if (firebase.auth().currentUser.emailVerified == false) {
                _this.CheckVerification = 'Not Verified';
                _this.renderer.setElementStyle(_this.email.nativeElement, "color", "#FF4741");
            }
            else {
                _this.CheckVerification = 'Verified';
                _this.renderer.setElementStyle(_this.email.nativeElement, "color", "#32DB64");
                _this.renderer.setElementStyle(_this.SignEmail.nativeElement, "color", "#32DB64");
            }
            if (data.email && data.uid) {
                _this.profileData = _this.afAuthDatabase.object("profile/" + data.uid);
            }
            else {
            }
            _this.emailOfDtabase = data.email;
        });
    };
    return VerificationProcessPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('VerifyEmail'),
    __metadata("design:type", Object)
], VerificationProcessPage.prototype, "email", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('SignEmail'),
    __metadata("design:type", Object)
], VerificationProcessPage.prototype, "SignEmail", void 0);
VerificationProcessPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-verification-process',template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Digiters\src\pages\verification-process\verification-process.html"*/'\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Verifications Process</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background-color:#222222;">\n  <br>\n  <div style="text-align:center;">\n      <label style="color:aliceblue;letter-spacing:2px; letter-spacing:2px; opacity:.6; font-size:15px;">Check Your Verification Process</label>\n  </div>\n  <br><br><br><br>\n\n  <ion-card>\n    <ion-card-header style="background-color:#252526">\n        <label style="color:aliceblue;font-size:14px;"> Email Verifications</label>\n    </ion-card-header>\n    <ion-card-content style="background-color:#2D2D2D;">\n        <br>\n        <br>\n        <div style="text-align:center;">\n          <label style="color:aliceblue; letter-spacing:1px;">{{ emailOfDtabase }}</label>\n        </div>\n        <ion-grid>\n          <ion-row>\n            <ion-col><div style="text-align:center;">\n                <label #VerifyEmail style="color:#32DB64; font-size:13px;">{{ CheckVerification }}</label>\n              </div></ion-col>\n              <ion-col>\n                <ion-icon #SignEmail style="color:#32DB64; font-size:20px;" name="ios-checkmark-outline"></ion-icon>\n              </ion-col>\n          </ion-row>\n        </ion-grid>\n      \n    </ion-card-content>\n  </ion-card>\n<br>\n<br>\n\n\n<!-- Updating Pocess in version 10 -->\n  <!-- <ion-card>\n      <ion-card-header style="background-color:#252526">\n          <label style="color:aliceblue;font-size:14px;"> Phone Verifications</label>\n      </ion-card-header>\n      <ion-card-content style="background-color:#2D2D2D;">\n          <br>\n          <br>\n          <div style="text-align:center;">\n            <label style="color:aliceblue; letter-spacing:1px;">{{(profileData | async)?.PhoneNumber }}</label>\n          </div>\n          <ion-grid>\n            <ion-row>\n              <ion-col><div style="text-align:center;">\n                  <label style="color:#32DB64; font-size:13px;">Verified</label>\n                </div></ion-col>\n                <ion-col>\n                  <ion-icon style="color:#32DB64; font-size:20px;" name="ios-checkmark-outline"></ion-icon>\n                </ion-col>\n            </ion-row>\n          </ion-grid>\n        \n      </ion-card-content>\n    </ion-card> -->\n  \n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Digiters\src\pages\verification-process\verification-process.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _f || Object])
], VerificationProcessPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=verification-process.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FreeVectorDesignsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_popup_modal_popup__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_digit_emp_api_digit_emp_api__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the FreeVectorDesignsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var FreeVectorDesignsPage = (function () {
    function FreeVectorDesignsPage(navCtrl, modal, LoadingController, DigitEmbProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modal = modal;
        this.LoadingController = LoadingController;
        this.DigitEmbProvider = DigitEmbProvider;
        this.pagination = 1;
        this.searchKeyword = "";
        this.searchType = false;
        this.title = '';
        this.presentLoading();
        this.DigitEmbProvider.categorieVector(1).subscribe(function (data) {
            _this.loader.dismiss();
            _this.data = data;
        });
    }
    FreeVectorDesignsPage.prototype.catcontent = function ($event, datas) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__modal_popup_modal_popup__["a" /* ModalPopupPage */], datas);
    };
    FreeVectorDesignsPage.prototype.presentLoading = function () {
        this.loader = this.LoadingController.create({
            content: "Loading...",
            showBackdrop: true
        });
        this.loader.present();
    };
    FreeVectorDesignsPage.prototype.onCencel = function (ev) {
        var _this = this;
        if (!ev.target.value) {
            this.DigitEmbProvider.categorieVector(1).subscribe(function (data) {
                _this.data = data;
                _this.searchType = false;
            });
        }
    };
    FreeVectorDesignsPage.prototype.doInfinite = function (ev) {
        var _this = this;
        this.pagination++;
        try {
            this.DigitEmbProvider.categorieVector(this.pagination).subscribe(function (data) {
                ev.complete();
                if (data.length !== 0) {
                    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                        var i = data_1[_i];
                        _this.data.push(i);
                    }
                }
                else {
                    console.log('posts are ended');
                }
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    return FreeVectorDesignsPage;
}());
FreeVectorDesignsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-free-vector-designs',template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Digiters\src\pages\free-vector-designs\free-vector-designs.html"*/'\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Free Vector Designs</ion-title>\n  </ion-navbar>\n  \n\n  <ion-searchbar [(ngModel)]="searchKeyword" \n                 (keyup.enter)="search(searchKeyword, $event)"\n                 (ionInput)="onCencel($event)">\n\n  </ion-searchbar>\n\n</ion-header>\n\n\n<ion-content style="background-color:#121315">\n   \n  <ion-card  *ngFor="let datas of data">\n    <div  *ngFor="let thumbnail of datas._embedded[\'wp:featuredmedia\']">\n            <img *ngIf="thumbnail.source_url" [src]="thumbnail.source_url" />\n    </div>\n    <ion-card-header style="text-align:center;"><p style="font-weight:bold; font-size:15px;padding:10px;" #acr [innerHTML]="datas.title.rendered "></p></ion-card-header>\n    <ion-card-content style="text-align:center;">\n      <div id="continuereading" [innerHTML]= "datas.excerpt.rendered"></div>\n      \n      \n    </ion-card-content>\n    \n\n\n    <div style="text-align:center;" (click)="catcontent($event, datas)">\n      <button class="button box" href="#popup1"  ion-button   color="dark" style="letter-spacing: 2px; width:80%;" >\n        Get Design File Here\n        <ion-icon style="margin-left:2%;" name="ios-arrow-dropright-outline"></ion-icon>\n      </button>\n    </div>\n    <br>\n  </ion-card>\n\n <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll> \n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Digiters\src\pages\free-vector-designs\free-vector-designs.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__providers_digit_emp_api_digit_emp_api__["a" /* DigitEmpApiProvider */]])
], FreeVectorDesignsPage);

//# sourceMappingURL=free-vector-designs.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_native__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetPasswordPage = (function () {
    function ResetPasswordPage(keyboard, navCtrl, toast, navParams, afAuth) {
        this.keyboard = keyboard;
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.backgrounds = [
            'assets/img/backgrounds/1.png',
            'assets/img/backgrounds/2.png',
            'assets/img/backgrounds/3.png',
            'assets/img/backgrounds/4.png'
        ];
        this.user = {};
        __WEBPACK_IMPORTED_MODULE_0_ionic_native__["b" /* Keyboard */].disableScroll(true);
    }
    ResetPasswordPage.prototype.RecoverEmail = function () {
        var _this = this;
        if (this.user.email == '') {
            this.toast.create({
                message: 'Please enter valid email',
                duration: 3000
            }).present();
        }
        else {
            firebase.auth().sendPasswordResetEmail(this.user.email).then(function (data) {
                _this.toast.create({
                    message: 'Your Password link has been send to your email',
                    duration: 3000,
                    position: 'top'
                }).present();
            }).catch(function (err) {
                _this.toast.create({
                    message: err.message,
                    duration: 3000,
                    position: 'top'
                }).present();
            });
        }
    };
    return ResetPasswordPage;
}());
ResetPasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Digiters\src\pages\reset-password\reset-password.html"*/'\n<ion-header>\n  <ion-navbar style="text-align:center;" color="dark">\n    <title style="color:#FFFFFF;">Back to Home</title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-slides style="position: fixed;" pager="false" autoplay="2000"  loop="true" speed="1500" effect="fade">\n        <ion-slide class="swiper-no-swiping" style=" background-size: cover;background-position: center;background-repeat: no-repeat; width:100%;" *ngFor="let background of backgrounds" [ngStyle]="{\'background-image\': \'url(\' + background +\')\'}">\n</ion-slide>\n</ion-slides>\n<div style=" color: white;\nposition: absolute;\ntop: 0;\npadding: 10vw;\ntext-align: center;\nwidth: 100%;\nmargin: 0 auto;\nz-index: 2;">\n  <div style="text-align: center;">\n  <ion-icon style="color:#FFFFFF; margin-top:20%;  font-size:200px; opacity: .7;" name="ios-refresh-outline"></ion-icon>\n  </div>\n<div style="text-align:center;">\n  <label style="color:#FFFFFF; font-size: 20px;"> Reset Password !</label>\n</div>\n<br>\n<br>\n   <div style="border-radius: 25px;\n    border: 2px solid #FFFFFF;\n  padding: 0.5px;\n    width: 80%;\n    text-align:center;\n    margin-left:10%;\n    ">\n    <ion-input style="color:#FFFFFF;" placeholder="Enter Your email here" name="password" type="email" value="" [(ngModel)] = "user.email"></ion-input>\n </div>\n  <br>\n   <div style="text-align:center;">\n<button style="border: 2px solid #FFFFFF;  color:#FFFFFF;     background-color:transparent; width:80%;" ion-button  round (click)="RecoverEmail()">Recover Email</button><br>\n </div>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Digiters\src\pages\reset-password\reset-password.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_native__["b" /* Keyboard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_native__["b" /* Keyboard */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _e || Object])
], ResetPasswordPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=reset-password.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailVerificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_native__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmailVerificationPage = (function () {
    function EmailVerificationPage(navCtrl, alrt, toast, navParams, afAuth) {
        this.navCtrl = navCtrl;
        this.alrt = alrt;
        this.toast = toast;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.backgrounds = [
            'assets/img/backgrounds/1.png',
            'assets/img/backgrounds/2.png',
            'assets/img/backgrounds/3.png',
            'assets/img/backgrounds/4.png'
        ];
        this.Email = this.navParams.data;
        __WEBPACK_IMPORTED_MODULE_3_ionic_native__["b" /* Keyboard */].disableScroll(true);
    }
    // Extra Features
    EmailVerificationPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    return EmailVerificationPage;
}());
EmailVerificationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Digiters\src\pages\email-verification\email-verification.html"*/'\n<ion-header>\n  <ion-navbar color="dark">\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-slides style="position: fixed;" pager="false" autoplay="2000"  loop="true" speed="1500" effect="fade">\n        <ion-slide class="swiper-no-swiping" style=" background-size: cover;background-position: center;background-repeat: no-repeat; width:100%;" *ngFor="let background of backgrounds" [ngStyle]="{\'background-image\': \'url(\' + background +\')\'}">\n    </ion-slide>\n    </ion-slides>\n\n    <div style="   color: white;\n    position: absolute;\n    top: 0;\n    padding: 10vw;\n    text-align: center;\n    width: 100%;\n    margin: 0 auto;\n    z-index: 2;">\n<!--Setting a logo of email verification  -->\n  <div style="text-align:center;">   \n  <ion-icon style="color:#FFFFFF; margin-top:-10%;  font-size:200px; opacity: .7;" name="ios-checkmark-outline"></ion-icon>\n  </div>\n\n<!--   -->\n<div style="text-align:center;">\n  <label style="color:#FFFFFF; font-size: 20px;">Verify Your Email !</label>\n</div><br>\n<div style="text-align:center;">\n  <label style="color:#FFFFFF;">One more step to go , Verify your email this will<br>\n          take some time to setup your profile and then you can continue...\n         check your email we will send email verification link into your account !</label>\n</div>\n  <div style="text-align:center;">   \n  <ion-icon style="color:#FFFFFF;  font-size:120px; opacity: .7;" name="ios-more-outline"></ion-icon>\n  </div>\n\n   <div style="text-align:center;">\n<button style="border: 2px solid #FFFFFF;  color:#FFFFFF;     background-color:transparent; width:80%;" ion-button  round (click)="back()">Want go back ...</button><br>\n </div>\n    </div>\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Digiters\src\pages\email-verification\email-verification.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
], EmailVerificationPage);

//# sourceMappingURL=email-verification.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_native__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccountSettingsPage = (function () {
    function AccountSettingsPage(zone, ToastController, renderer, AlertController, afAuth, afDatabase, navCtrl, navParams) {
        var _this = this;
        this.zone = zone;
        this.ToastController = ToastController;
        this.renderer = renderer;
        this.AlertController = AlertController;
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.StorageRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.storage().ref();
        this.myPhotosRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.storage().ref('/UsersCoverPhoto/');
        this.myPhotosRefProfile = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.storage().ref('/ProfilePhotos/');
        // This Method should run in running process
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().onAuthStateChanged(function (data) {
            //  Getting Cover Photo in firebase;
            _this.StorageRef.child("UsersCoverPhoto/" + data.uid + "/UserCover.png").getDownloadURL().then(function (url) {
                _this.zone.run(function () {
                    console.log(url);
                    _this.UpdatedCoverImage = url;
                });
            });
            // Getting Profile picture If available
            _this.StorageRef.child("ProfilePhotos/" + data.uid + "/UserProfile.png").getDownloadURL().then(function (url) {
                _this.zone.run(function () {
                    console.log(url);
                    _this.UpdateProfileImage = url;
                });
            });
        });
    }
    AccountSettingsPage.prototype.ngOnInit = function () {
    };
    AccountSettingsPage.prototype.takePhoto = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Camera */].getPicture({
            quality: 100,
            destinationType: __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Camera */].DestinationType.DATA_URL,
            sourceType: __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Camera */].PictureSourceType.CAMERA,
            encodingType: __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Camera */].EncodingType.PNG,
            targetHeight: 370,
            targetWidth: 600,
            saveToPhotoAlbum: true
        }).then(function (imageData) {
            _this.myPhoto = imageData;
            _this.uploadPhoto();
        }, function (error) {
            console.log("ERROR -> " + JSON.stringify(error));
        });
    };
    AccountSettingsPage.prototype.selectPhoto = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Camera */].getPicture({
            sourceType: __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Camera */].PictureSourceType.PHOTOLIBRARY,
            destinationType: __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Camera */].DestinationType.DATA_URL,
            quality: 100,
            targetHeight: 370,
            targetWidth: 600,
        }).then(function (imageData) {
            _this.myPhoto = imageData;
            _this.uploadPhoto();
        }, function (error) {
            console.log("ERROR -> " + JSON.stringify(error));
        });
    };
    AccountSettingsPage.prototype.uploadPhoto = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().onAuthStateChanged(function (data) {
            _this.myPhotosRef.child(data.uid).child('UserCover.png')
                .putString(_this.myPhoto, 'base64', { contentType: 'image/png' })
                .then(function (savedPicture) {
                _this.myPhotoURL = savedPicture.downloadURL;
            });
        });
    };
    AccountSettingsPage.prototype.takePhotoProfile = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Camera */].getPicture({
            quality: 100,
            destinationType: __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Camera */].DestinationType.DATA_URL,
            sourceType: __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Camera */].PictureSourceType.CAMERA,
            encodingType: __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Camera */].EncodingType.PNG,
            saveToPhotoAlbum: true,
            targetHeight: 600,
            targetWidth: 600,
        }).then(function (imageData) {
            _this.myPhotoProfile = imageData;
            _this.uploadPhotoProfile();
        }, function (error) {
            console.log("ERROR -> " + JSON.stringify(error));
        });
    };
    AccountSettingsPage.prototype.selectPhotoProfile = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Camera */].getPicture({
            sourceType: __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Camera */].PictureSourceType.PHOTOLIBRARY,
            destinationType: __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Camera */].DestinationType.DATA_URL,
            quality: 100,
            targetHeight: 600,
            targetWidth: 600,
        }).then(function (imageData) {
            _this.myPhotoProfile = imageData;
            _this.uploadPhotoProfile();
        }, function (error) {
            console.log("ERROR -> " + JSON.stringify(error));
        });
    };
    AccountSettingsPage.prototype.uploadPhotoProfile = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().onAuthStateChanged(function (data) {
            _this.myPhotosRefProfile.child(data.uid).child('UserProfile.png')
                .putString(_this.myPhotoProfile, 'base64', { contentType: 'image/png' })
                .then(function (savedPicture) {
                _this.myPhotoURLProfile = savedPicture.downloadURL;
            });
        });
    };
    // #####################################################################################
    // #####################################################################################
    // #####################################################################################
    // #####################################################################################
    // #####################################################################################
    // #####################################################################################
    // #####################################################################################
    // #####################################################################################
    // #####################################################################################
    // #####################################################################################
    // #####################################################################################
    // #####################################################################################
    // #####################################################################################
    // #####################################################################################
    // #####################################################################################
    // #####################################################################################
    // #####################################################################################
    // #####################################################################################
    // Methods of Calling alert
    AccountSettingsPage.prototype.SelectYourMethodToUploadCover = function () {
        var _this = this;
        this.AlertController.create({
            title: 'Upload Methods',
            buttons: [
                {
                    text: 'Take Photo',
                    handler: function () {
                        _this.takePhoto();
                    }
                }, {
                    text: 'Gallery',
                    handler: function () {
                        _this.selectPhoto();
                    }
                }
            ]
        }).present();
    };
    AccountSettingsPage.prototype.SelectYourMethodToUploadProfile = function () {
        var _this = this;
        this.AlertController.create({
            title: 'Upload Methods',
            buttons: [
                {
                    text: 'Take Photo',
                    handler: function () {
                        _this.takePhotoProfile();
                    }
                }, {
                    text: 'Gallery',
                    handler: function () {
                        _this.selectPhotoProfile();
                    }
                }
            ]
        }).present();
    };
    AccountSettingsPage.prototype.VerifyEmail = function (Email) {
        // if(this.UpdateEmail == ''){
        //   console.log('Hello Wordl');
        //   }
        var _this = this;
        if (this.UpdateEmail == '') {
            var alert = this.AlertController.create({
                title: 'Please fill credientials  ',
                message: 'Please fill credientials than we can continue'
            }).present();
        }
        else {
            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().onAuthStateChanged(function (data) {
                _this.CurrentEmail = data.email;
                var alert = _this.AlertController.create({
                    title: 'Enter Your password',
                    message: 'Type your current password',
                    inputs: [
                        {
                            name: 'Password',
                            placeholder: 'Enter your current password',
                            type: 'password',
                        }
                    ],
                    buttons: [
                        {
                            text: 'Update Your Email ',
                            handler: function (dataa) {
                                _this.Password = dataa.Password;
                                __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().signInWithEmailAndPassword(_this.CurrentEmail, _this.Password).then(function (data) {
                                    __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().onAuthStateChanged(function (data) {
                                        data.updateEmail(_this.UpdateEmail);
                                        var that = _this;
                                        data.sendEmailVerification().then(function () {
                                            //  that.navCtrl.push(EmailVerificationPage);
                                        });
                                    });
                                });
                            }
                        }
                    ]
                }).present();
            });
        }
    };
    AccountSettingsPage.prototype.UpdatePassword = function () {
        var _this = this;
        if (this.UpdatePass == '') {
            var alert = this.AlertController.create({
                title: 'Please fill credientials  ',
                message: 'Please fill credientials than we can continue'
            }).present();
        }
        else {
            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().onAuthStateChanged(function (data) {
                _this.CurrentEmail = data.email;
                var alert = _this.AlertController.create({
                    title: 'Enter Your current password',
                    inputs: [
                        {
                            name: 'Password',
                            placeholder: 'Enter your current password',
                            type: 'password',
                        }
                    ],
                    buttons: [
                        { text: 'Update Your Email ',
                            handler: function (dataa) {
                                _this.Password = dataa.Password;
                                __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().signInWithEmailAndPassword(_this.CurrentEmail, _this.Password).then(function (data) {
                                    __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().onAuthStateChanged(function (data) {
                                        data.updatePassword(_this.UpdatePass);
                                        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('');
                                        _this.ToastController.create({
                                            message: 'Success! Password Successfully Updated',
                                            duration: 3000,
                                            position: 'top',
                                        }).present();
                                    });
                                });
                            }
                        }
                    ]
                }).present();
            });
        }
    };
    AccountSettingsPage.prototype.UpdateContactNumber = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().onAuthStateChanged(function (data) {
            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('profile/' + data.uid).update({
                PhoneNumber: _this.UpdatePhoneNumber,
            }).then(function (info) {
                _this.ToastController.create({
                    message: info,
                    duration: 3000,
                    position: 'top',
                });
            });
        });
    };
    AccountSettingsPage.prototype.UpdateFullName = function (FirstName) {
        var _this = this;
        if (this.UpdatedName == '') {
            var alert = this.AlertController.create({
                title: 'Enter Valid Name',
                message: 'Type valid name then save'
            }).present();
        }
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().onAuthStateChanged(function (data) {
            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('profile/' + data.uid).update({
                FirstName: _this.UpdatedName,
            });
            _this.popMessage = 'Success! Your Name Succesfully Updated..';
            _this.renderer.setElementStyle(_this.PopOver.nativeElement, "opacity", "1");
            _this.renderer.setElementStyle(_this.PopOver.nativeElement, "transition", "opacity 2s linear");
            _this.renderer.setElementStyle(_this.PopOver.nativeElement, "visibility", "visible");
        });
    };
    AccountSettingsPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.UserProfile = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('profile');
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().onAuthStateChanged(function (data) {
            _this.data = data;
            if (data.email && data.uid) {
                _this.profileData = _this.afDatabase.object("profile/" + data.uid);
            }
            else { }
        });
    };
    return AccountSettingsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('hideSaveEmail'),
    __metadata("design:type", Object)
], AccountSettingsPage.prototype, "hideEmail", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('popOver'),
    __metadata("design:type", Object)
], AccountSettingsPage.prototype, "PopOver", void 0);
AccountSettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Digiters\src\pages\account-settings\account-settings.html"*/'\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>User Account Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background-color:#222222;" >\n    <div style="width:1000; height:170;">\n    \n      <div *ngIf="myPhotoURL">\n        <div class="box-shadow-cover-img" (click)="SelectYourMethodToUploadCover()">\n          <img (click)="SelectYourMethodToUploadCover()" style="width:100%; height: 210px; " [src]="myPhotoURL" onerror="src=\'assets/img/background.jpg\'">\n        </div>\n        </div>\n        <div *ngIf="UpdatedCoverImage">\n          <div class="box-shadow-cover-img" (click)="SelectYourMethodToUploadCover()">\n            <img (click)="SelectYourMethodToUploadCover()" [src]="UpdatedCoverImage" height="210" onerror="src=\'assets/img/background.jpg\'">\n            </div>\n          </div>\n          <div *ngIf="!UpdatedCoverImage && !myPhotoURL">\n          <div class="box-shadow-cover-img" (click)="SelectYourMethodToUploadCover()">\n            <img (click)="SelectYourMethodToUploadCover()" src="assets/img/background.jpg" height="210">\n            </div>\n         \n      </div>\n      <br><br><br><br><br>\n      <br> \n      <ion-grid>\n          <ion-row>\n            <ion-col col-4> <div style="\n              position: relative;\n              width: 100px;\n              height: 100px;\n              overflow: hidden;\n              border-radius: 50%;\n              border: 2px solid #FFFFFF;">\n             <!-- <div style="position:absolute; margin-left:35%; margin-top:30%;">\n              <ion-icon (click)="SelectYourMethodToUploadProfile()" name="ios-camera-outline" style=" color:aliceblue; font-size:40px;"></ion-icon>\n               </div> -->\n                    \n              <div *ngIf="myPhotoURLProfile">\n                  <img  (click)="SelectYourMethodToUploadProfile()" style=" width: 100%;\n                  height: auto;" [src]="myPhotoURLProfile">\n              </div>\n             <div *ngIf="UpdateProfileImage">\n                <img  (click)="SelectYourMethodToUploadProfile()" style=" width: 100%;\n                height: auto;" [src]="UpdateProfileImage" onerror="src=\'assets/img/user.jpg\'"> \n             </div>\n             <div *ngIf="!myPhotoURLProfile && !UpdateProfileImage">\n                <img (click)="SelectYourMethodToUploadProfile()" style=" width: 100%; height: auto;" src="assets/img/user.jpg">\n             </div>\n              </div></ion-col>\n         <ion-col><ion-label style="color:#FFFFFF; font-size:20px; margin-top:40%;">{{(profileData | async)?.FirstName }}</ion-label></ion-col>\n          <ion-col>  <div style="margin-left:70%; margin-top:50%; opacity:.7;">\n            <ion-icon   (click)="SelectYourMethodToUploadCover()" name="ios-camera-outline" style=" color:aliceblue; font-size:40px;"></ion-icon>\n             </div>\n          </ion-col>\n        </ion-row>\n        \n        </ion-grid>\n        \n    </div>\n    <br><br>\n    <div style="text-align:center; padding-left: 50px; padding-right:50px;">\n        <p style="color:#FFFFFF; letter-spacing:2px; font-size:12px;"><b>Note : </b> Change your cover photo by clicking a cover.Cover size must be is 600 x 370. Otherwise cover will be strech. Profile picture size must be 200 x 200</p>\n    </div>\n    <br>\n    <div style=" text-align:center;">\n    <label style="color:antiquewhite; letter-spacing:2px; opacity:.6; font-size:18px;">Change Your Profile Settings</label>\n    </div>\n\n<br>\n<div #popOver style="visibility: visible; opacity: 1; transition: visibility 0s 2s, opacity 2s linear;color: #32DB64;margin-left:10%; letter-spacing: 1px; font-size:12px;">{{ popMessage }}</div>\n<br>\n    <!-- <div style="text-align:center;">\n        <label style="color:aliceblue; font-size:12px; ">Note: Edit and save your general settings.When you edit<br> your name in personal settings.Must save these settings otherwise<br>your information will be old.</label>\n      </div> -->\n      <div style="border-radius: 25px;\n      border: 2px solid #FFFFFF;\n      padding: 0.5px; \n      width: 80%;\n      opacity:.5;\n      margin-left:10%;\n      ">\n          <ion-input [(ngModel)]="UpdatedName" style="color:#FFFFFF;" placeholder="Edit Your Full Name" name="text" type="text" value="" ></ion-input>\n\n      </div><br>\n\n\n      <div style="text-align:center;">\n        <button (click)="UpdateFullName(FirstName)" outline color="light"  style=" width:80%; " ion-button   round >Save</button><br>\n         </div><br>\n\n\n      <div style="text-align:center;">\n        <label style="color:#909090; letter-spacing:2px; ">Login Credientals</label>\n      </div>\n    \n    <br>\n     \n      <div style="border-radius: 25px;\n      border: 2px solid #FFFFFF;\n      padding: 0.5px; \n      width: 80%;\n      opacity:.5;\n      margin-left:10%;\n      ">\n          <ion-input [(ngModel)]="UpdateEmail" style="color:#FFFFFF;" placeholder="Edit Your Previous Email"  type="email" value="" ></ion-input>\n      </div><br>\n\n\n      <ion-grid>\n        <ion-row>\n          <ion-col>  <div style="text-align:center;">\n            <button style="width:80%;"  outline color="light" (click)="VerifyEmail(Email)"  ion-button   round >Save and Verify Email</button><br>\n             </div><br></ion-col>\n            \n        </ion-row>\n      </ion-grid>\n\n      <div style="border-radius: 25px;\n      border: 2px solid #FFFFFF;\n      padding: 0.5px; \n      width: 80%;\n      opacity:.5;\n      margin-left:10%;\n      ">\n          <ion-input [(ngModel)]="UpdatePass" style="color:#FFFFFF;" placeholder="Change Your Password"  type="password" value="" ></ion-input>\n      </div>\n      <ion-grid>\n        <ion-row>\n          \n             <ion-col>\n              <div style="text-align:center; ">\n                <button style="width:80%;" (click)="UpdatePassword()" outline color="light"   #hideSaveEmail ion-button   round >Save</button><br>\n                 </div><br>\n             </ion-col>\n        </ion-row>\n      </ion-grid>\n      <div style="text-align:center;">\n        <label style="color:#909090; letter-spacing:2px; font-size:12px;">Change Phone Number</label>\n      </div><br>\n      <div style="border-radius: 25px;\n      border: 2px solid #FFFFFF;\n      padding: 0.5px; \n      width: 80%;\n      opacity:.5;\n      margin-left:10%;\n      ">\n          <ion-input style="color:#FFFFFF;" [(ngModel)]="UpdatePhoneNumber" placeholder="Edit Your Phone Number"  type="number" value="" ></ion-input>\n      </div>\n      <ion-grid>\n        <ion-row>\n          \n             <ion-col>\n              <div  style="text-align:center;">\n                <button style="width:80%;" (click)="UpdateContactNumber()" ion-button outline color="light"  round >Save</button><br>\n                 </div><br>\n             </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n         \n    \n</ion-content>\n'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Digiters\src\pages\account-settings\account-settings.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _h || Object])
], AccountSettingsPage);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=account-settings.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VectorFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_email_composer__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the VectorFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var VectorFormComponent = (function () {
    function VectorFormComponent(EmailComposer, toast) {
        this.EmailComposer = EmailComposer;
        this.toast = toast;
        console.log('Hello VectorFormComponent Component');
    }
    VectorFormComponent.prototype.GetFormats = function () {
    };
    VectorFormComponent.prototype.SendEmailVectorForm = function () {
        var _this = this;
        var NameDesign = this.DesignName;
        var Format = this.FormatsValue;
        var Message = this.UserVectorMessage;
        var email = {
            to: 'Digitize@digitemb.com',
            cc: 'marketing@digitemb.com',
            attachments: [],
            subject: 'Congratulations You Recieved New Vector Order!',
            body: '<b>I want to vectorize agreeable design(s) as per my own requirements!</b><br> <br>' + '<b>1. Design Name :</b> ' + NameDesign + '<br><b>2. File Type :</b> ' + Format + '<br><b>3. Message : </b>' + Message + '<br><br>' + '<br><br>This email was sent from DigitEMB Free Designs App<br>',
            isHtml: true
        };
        this.EmailComposer.open(email).then(function (data) {
            _this.toast.create({
                message: 'Your Request has been successfully sent, we will conatct you soon!',
                position: 'top',
                duration: 3000,
            }).present();
        });
    };
    return VectorFormComponent;
}());
VectorFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'vector-form',template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Digiters\src\components\vector-form\vector-form.html"*/'<!-- Generated template for the VectorFormComponent component -->\n\n\n<ion-card>\n  <ion-card-header  style="background-color:#161616; text-align:center;"><label  style="color:aliceblue; letter-spacing: 2px; font-size: 14px;" >Enter Your Order Requirements</label></ion-card-header>\n  <ion-card-content  style="background-color:#222222;">\n    <ion-grid>\n      <br>\n   \n      <ion-row><ion-col style="text-align:center;"><div style=" opacity: .8; border-radius:10px; border: 1px solid #FFFFFF; width: 100%;"><ion-input id="DesignName" name="DesignName" style="letter-spacing:2px; font-size:12px;color:#FFFFFF;" placeholder="Your Design Name" [(ngModel)]="DesignName" type="text" value= \'\' ></ion-input></div></ion-col></ion-row>\n      <!-- <ion-row *ngIf="DesignName.errors && (DesignName.dirty || DesignName.touched)"><ion-col><div class="my-notify-info">This is info text</div>\n        <div class="my-notify-success">This is success text</div>\n        <div class="my-notify-warning">This is warning text</div>\n        <div class="my-notify-error">This is error text</div>\n      </ion-col></ion-row> -->\n      <br>\n      <ion-row><ion-col style="text-align:center;"><div style=" opacity: .8; border-radius:10px; border: 1px solid #FFFFFF; width: 100%;"><ion-input  style="letter-spacing:2px; font-size:12px;color:#FFFFFF;" placeholder="Your Contact Number" [(ngModel)]="UserContactNumber" type="number" value= \'\' ></ion-input></div></ion-col></ion-row>\n\n\n      <ion-row>\n          <ion-col ><ion-select [(ngModel)]="FormatsValue" (ionChange)="GetFormats();"  style=" max-width: 100% !important;background-color:#121315; color:#FFFFFF;" interface="action-sheet" placeholder="Require Format"  cancelText="Default">\n              <ion-option  value="RF">Require Format</ion-option>\n              <ion-option value=".CDR">.CDR</ion-option>\n              <ion-option value=".AI">.AI</ion-option>\n              <ion-option value=".EPS">.EPS</ion-option>\n              <ion-option value=".PDF">.PDF</ion-option>\n           </ion-select></ion-col>\n      </ion-row>\n      <br>\n     \n          <label style="color:aliceblue;font-size:13px; margin-left:2%; " >Additional Details :</label><br>\n      \n          <ion-row style="width:100%;">\n            <textarea [(ngModel)]="UserVectorMessage" style="background-color:#121315; border-style:none; color:#FFFFFF; font-size:13px;padding: 5%; opacity:.8; " id="" placeholder="Please provide us all the necessary information like size, required file format and any other instructions" cols="60" rows="10"></textarea>\n          </ion-row>\n          <br>\n          <ion-row>\n              <ion-col>\n                  <div style="text-align:center;">\n                      <button style=" text-transform:none; border: 1px solid #FFFFFF; opacity:.8; color:#FFFFFF; background-color:transparent; "  (click)="SendEmailVectorForm()" ion-button  round >Send Request</button><br>\n                       </div>\n              </ion-col>\n            </ion-row>\n    </ion-grid>\n  </ion-card-content>\n</ion-card>\n<!-- \n<ion-grid>\n    \n  <ion-row>\n    <ion-col><ion-col><div style=" opacity: .8; border-radius: 10px;border: 2px solid #FFFFFF; padding: 0.5px;width: 80%;margin-left:10%;"><ion-input style="color:#FFFFFF;" placeholder="Your Design Name" type="text" value="" ></ion-input></div></ion-col></ion-col>\n  </ion-row>\n  <br>\n  <ion-row>\n    <ion-col col-4 style="margin-left: 10%;margin-top:2%;"><label style="color:aliceblue; font-size:15px; opacity: .8">Required Format</label></ion-col>\n    <ion-col col-6 style="margin-left:3%;">\n      <ion-select  style="background-color:#121315; color:#FFFFFF;" interface="popover" >\n      <ion-option >.CDR</ion-option>\n      <ion-option >.AI</ion-option>\n      <ion-option>.EPS</ion-option>\n      <ion-option>.PDF</ion-option>\n     </ion-select></ion-col>\n  </ion-row>\n  <br>\n  <label style="color:aliceblue; opacity: .8; font-size:15px; margin-left:10%;" >Additional Details :</label><br>\n  <ion-row style="width:80%; margin-left:10%;">\n    <textarea style="background-color:#252526; border-style:none; color:#FFFFFF; font-size:13px;padding: 5%; opacity:.8; " id="" placeholder="Please provide us all the necessary information like size, required file format and any other instructions" cols="60" rows="10"></textarea>\n  </ion-row>\n  <br>\n  <ion-row>\n    <ion-col>\n        <div style="text-align:center;">\n            <button style="border: 2px solid #FFFFFF; opacity:.8; color:#FFFFFF; background-color:transparent; "  (click)="SubmitUserForm()" ion-button  round >Send Request</button><br>\n             </div>\n    </ion-col>\n  </ion-row>\n</ion-grid> -->\n'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Digiters\src\components\vector-form\vector-form.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ToastController */]])
], VectorFormComponent);

//# sourceMappingURL=vector-form.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feedback_users_feedback_users__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_form_shower_custom_form_shower__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verification_process_verification_process__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__free_vector_designs_free_vector_designs__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vector_page_custom_vector_page_custom__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__account_settings_account_settings__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__homepage_homepage__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var UserMenuPage = (function () {
    function UserMenuPage(afDatabase, afAuth, zone, load, AlertController, renderer, navCtrl, navParams) {
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.zone = zone;
        this.load = load;
        this.AlertController = AlertController;
        this.renderer = renderer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.accordianExpanded = false;
        this.StorageRef = __WEBPACK_IMPORTED_MODULE_10_firebase___default.a.storage().ref();
        this.rootPage = __WEBPACK_IMPORTED_MODULE_9__homepage_homepage__["a" /* HomepagePage */];
    }
    UserMenuPage.prototype.ngOnInit = function () {
        console.log(this.cardContent.nativeElement);
        this.renderer.setElementStyle(this.cardContent.nativeElement, 'webkitTransition', 'max-height 500ms, padding 500ms');
        this.renderer.setElementStyle(this.freeDesigns.nativeElement, 'webkitTransition', 'max-height 500ms, padding 500ms');
        this.renderer.setElementStyle(this.order.nativeElement, 'webkitTransition', 'max-height 500ms, padding 500ms');
    };
    UserMenuPage.prototype.toggleAccordian = function () {
        if (this.accordianExpanded) {
            this.renderer.setElementStyle(this.cardContent.nativeElement, "visibility", "hidden");
            this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
            this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 16px");
        }
        else {
            this.renderer.setElementStyle(this.cardContent.nativeElement, "visibility", "visible");
            this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "500px");
            this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "13px 16px");
        }
        this.accordianExpanded = !this.accordianExpanded;
    };
    UserMenuPage.prototype.FreeDesigns = function () {
        if (this.accordianExpanded) {
            this.renderer.setElementStyle(this.freeDesigns.nativeElement, "visibility", "hidden");
            this.renderer.setElementStyle(this.freeDesigns.nativeElement, "max-height", "0px");
            this.renderer.setElementStyle(this.freeDesigns.nativeElement, "padding", "0px 16px");
        }
        else {
            this.renderer.setElementStyle(this.freeDesigns.nativeElement, "visibility", "visible");
            this.renderer.setElementStyle(this.freeDesigns.nativeElement, "max-height", "500px");
            this.renderer.setElementStyle(this.freeDesigns.nativeElement, "padding", "13px 16px");
        }
        this.accordianExpanded = !this.accordianExpanded;
    };
    UserMenuPage.prototype.Orders = function () {
        if (this.accordianExpanded) {
            this.renderer.setElementStyle(this.order.nativeElement, "visibility", "hidden");
            this.renderer.setElementStyle(this.order.nativeElement, "max-height", "0px");
            this.renderer.setElementStyle(this.order.nativeElement, "padding", "0px 16px");
        }
        else {
            this.renderer.setElementStyle(this.order.nativeElement, "visibility", "visible");
            this.renderer.setElementStyle(this.order.nativeElement, "max-height", "500px");
            this.renderer.setElementStyle(this.order.nativeElement, "padding", "13px 16px");
        }
        this.accordianExpanded = !this.accordianExpanded;
    };
    UserMenuPage.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_10_firebase___default.a.auth().signOut();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    UserMenuPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_10_firebase___default.a.auth().onAuthStateChanged(function (data) {
            if (_this.StorageRef.child("UsersCoverPhoto/" + data.uid) || _this.StorageRef.child("ProfilePhotos/" + data.uid)) {
                _this.StorageRef.child("UsersCoverPhoto/" + data.uid + "/UserCover.png").getDownloadURL().then(function (url) {
                    _this.zone.run(function () {
                        console.log(url);
                        _this.UpdatedLocalUserCoverImage = url;
                    });
                });
                // Getting Profile picture If available
                _this.StorageRef.child("ProfilePhotos/" + data.uid + "/UserProfile.png").getDownloadURL().then(function (url) {
                    _this.zone.run(function () {
                        console.log(url);
                        _this.UpdateProfileImage = url;
                    });
                });
            }
            else {
                //  Getting Cover Photo in firebase;
            }
        });
    };
    UserMenuPage.prototype.ionViewWillLoad = function () {
        // let user = this.afAuth.auth.currentUser;
        var _this = this;
        // if (user) {
        // } else {
        //   // No user is signed in.
        // }
        // this.afAuth.authState.subscribe(data => {
        //   this.afDatabase.database.ref(`/profile/${data.uid}`).set({
        //    FirstName : data.displayName,
        //    email : data.email,
        //    Profile : data.photoURL,
        //   });
        // })
        this.UserProfile = __WEBPACK_IMPORTED_MODULE_10_firebase___default.a.database().ref('profile');
        __WEBPACK_IMPORTED_MODULE_10_firebase___default.a.auth().onAuthStateChanged(function (data) {
            _this.profileData = _this.afDatabase.object("profile/" + data.uid);
        });
    };
    // External links
    UserMenuPage.prototype.FreeEmbroideryDesigns = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__homepage_homepage__["a" /* HomepagePage */]);
    };
    UserMenuPage.prototype.freeVectorDesigns = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__free_vector_designs_free_vector_designs__["a" /* FreeVectorDesignsPage */]);
    };
    UserMenuPage.prototype.AccountSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__account_settings_account_settings__["a" /* AccountSettingsPage */]);
    };
    UserMenuPage.prototype.VerificationProcess = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__verification_process_verification_process__["a" /* VerificationProcessPage */]);
    };
    UserMenuPage.prototype.VectorForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__vector_page_custom_vector_page_custom__["a" /* VectorPageCustomPage */]);
    };
    UserMenuPage.prototype.DigitizeOrder = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__custom_form_shower_custom_form_shower__["a" /* CustomFormShowerPage */]);
    };
    UserMenuPage.prototype.FeedBackUser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__feedback_users_feedback_users__["a" /* FeedbackUsersPage */]);
    };
    return UserMenuPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_11__angular_core__["_13" /* ViewChild */])("cc"),
    __metadata("design:type", Object)
], UserMenuPage.prototype, "cardContent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_11__angular_core__["_13" /* ViewChild */])("freeDesigns"),
    __metadata("design:type", Object)
], UserMenuPage.prototype, "freeDesigns", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_11__angular_core__["_13" /* ViewChild */])('CustomOrders'),
    __metadata("design:type", Object)
], UserMenuPage.prototype, "order", void 0);
UserMenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_11__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Digiters\src\pages\user-menu\user-menu.html"*/'<!-- Default:  style="max-width: 250px!important;" -->\n<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="dark">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content style="background-color:#222222;">\n    <div style="width:1000; height:170;">\n<!-- Getting data from facebook images otherwise it shows Default images -->\n      <div *ngIf="CoverImage">\n          <div class="box-shadow-cover-img-UserMenu">\n              <img style=" position:absolute;width:100%; height:150px;"  [src]="UpdatedLocalUserCoverImage" onerror="src=\'assets/img/UserMenuBackDefault.jpg\'">\n          </div>\n      </div>\n      <!-- Getting images from firebase storage  otherwise it shows Default images-->\n      <div *ngIf="UpdatedLocalUserCoverImage">\n          <div class="box-shadow-cover-img-UserMenu">\n              <img style=" position:absolute;width:100%; height:150px;"  [src]="UpdatedLocalUserCoverImage" onerror="src=\'assets/img/UserMenuBackDefault.jpg\'">\n          </div>\n      </div>\n      <div *ngIf="!CoverImage && !UpdatedLocalUserCoverImage">\n            <div class="box-shadow-cover-img-UserMenu">\n            <img style=" position:absolute;width:100%; height:150px;"  src="assets/img/UserMenuBackDefault.jpg" >\n            </div>\n        </div>\n   \n         <br>\n         <br>\n         <br>\n         <br>\n         <ion-grid>\n           <ion-row>\n             <ion-col col-4> <div style=" position: relative;\n              width: 70px;\n              height: 70px;\n              overflow: hidden;\n              border-radius: 50%;\n              border: 2px solid #FFFFFF;">\n                <!-- Facebook Image src == UserDataPicture -->\n                <div *ngIf="UserDataPicture">\n                  <img style=" width: 100%;height: auto;" [src]="UserDataPicture"   onerror="src=\'assets/img/user.jpg\'"  >             \n                </div>\n                <div *ngIf="UpdateProfileImage">\n                  <img style="width:100%; height:auto;" [src]="UpdateProfileImage"  onerror="src=\'assets/img/user.jpg\'">\n                </div>\n                <div *ngIf="!UserDataPicture && !UpdateProfileImage">\n                    <img style="width:100%; height:auto;" src="assets/img/user.jpg"  >\n                </div>\n                <div>\n\n                </div>\n      \n                    </div></ion-col>\n                    <!-- Getting User info {{(profileData | async)?.FirstName }} -->\n             <ion-col><ion-label style="color:#FFFFFF; font-size:15px; margin-top:20%;">{{(profileData | async)?.FirstName }}</ion-label></ion-col>\n           </ion-row>\n         </ion-grid>\n      \n<!--      \n    </div> -->\n    </div>\n<br>\n<br>\n\n\n<ion-grid>\n\n\n\n<div  style=" margin-top:-10%; background-color:#222222; ">\n  <div (click)="toggleAccordian()">\n     <ion-row>\n         <ion-col col-2><ion-icon style="color:aliceblue; font-size:30px;" name="ios-contact-outline">  </ion-icon></ion-col>\n         <ion-col><button (click)="toggleAccordian()" style="background-color:#222222; color:aliceblue; margin-top: 4%;font-size:12px;">Account Information</button></ion-col>\n         <ion-col col-2 ><ion-icon style="opacity:.5;  margin-left:10%; margin-top:5%;color:aliceblue; font-size:15px;" name="ios-arrow-down-outline"></ion-icon></ion-col>\n     </ion-row>\n    </div>\n  \n  <div #cc style="background-color:#222222;color:aliceblue; padding:0px 16px; max-height:0px;  visibility: hidden">\n      <button (click)="AccountSettings()"ion-button clear icon-start style=" opacity: .7;text-transform: none; background-color:#222222; color:aliceblue; font-size:12px;"><ion-icon style="color:aliceblue; font-size:30px;" name="ios-person-outline"></ion-icon>Change your Name</button>\n      <button (click)="AccountSettings()" ion-button clear icon-start style=" opacity: .7;text-transform: none; background-color:#222222; color:aliceblue; font-size:12px;"><ion-icon style="color:aliceblue; font-size:25px;" name="ios-key-outline"></ion-icon>Change your Password</button>\n      <button (click)="VerificationProcess()" ion-button clear icon-start style=" opacity: .7;text-transform: none; background-color:#222222; color:aliceblue; font-size:12px;"><ion-icon style="color:aliceblue; font-size:40px;" name="ios-checkmark-outline"></ion-icon>Check Verification Status</button>\n      <button (click)="AccountSettings()"ion-button clear icon-start style=" opacity: .7;text-transform: none; background-color:#222222; color:aliceblue; font-size:12px;"><ion-icon style="color:aliceblue; font-size:25px;" name="ios-build-outline"></ion-icon>Account Settings</button>\n  </div>\n</div>\n<br>\n\n<div  style="background-color:#222222; ">\n      <div (click)="FreeDesigns()">\n            <ion-row>\n              <ion-col col-2><ion-icon style="color:aliceblue; font-size:30px;" name="ios-brush-outline">  </ion-icon></ion-col>\n              <ion-col><button  (click)="FreeDesigns()"style="background-color:#222222; color:aliceblue; margin-top: 4%;font-size:12px;">Free Designs</button></ion-col>\n              <ion-col col-2 ><ion-icon style="opacity:.5; margin-left:10%; margin-top:5%;color:antiquewhite; font-size:15px;" name="ios-arrow-down-outline"></ion-icon></ion-col>\n            </ion-row>\n      </div>\n      <div #freeDesigns style="background-color:#222222;color:aliceblue; padding:0px 16px; max-height:0px;  visibility: hidden">\n          <ion-row>\n              <ion-col col-2><img src="assets/img/icons/custom digitizing.png" width="25" height="25"></ion-col>\n              <ion-col><button  (click)="FreeEmbroideryDesigns()"style="background-color:#222222;margin-top: 4%; color:aliceblue; opacity: .7;font-size:12px;">Free Embroidery Designs</button></ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-2><img src="assets/img/icons/FreeVector.png" width="25" height="25"></ion-col>\n                <ion-col><button  (click)="freeVectorDesigns()"style="background-color:#222222;margin-top: 4%; color:aliceblue; opacity: .7;font-size:12px;">Free Vector Designs</button></ion-col>\n              </ion-row>\n           \n           \n        </div>\n  </div>\n  <br>\n  <div style="background-color:#222222; ">\n      <div (click)="Orders()">\n          <ion-row>\n              <ion-col col-2><ion-icon style="color:aliceblue; font-size:30px;" name="ios-cart-outline">  </ion-icon></ion-col>\n              <ion-col><button style="background-color:#222222; color:aliceblue; margin-top: 4%;font-size:12px;" menuClose  (click)="login()">Custom Design Services</button></ion-col>\n              <ion-col col-2 ><ion-icon style="opacity:.5; margin-left:10%; margin-top:5%;color:antiquewhite; font-size:15px;" name="ios-arrow-down-outline"></ion-icon></ion-col>\n        </ion-row>\n        </div>\n      <div #CustomOrders style="background-color:#222222;color:aliceblue; padding:0px 16px; max-height:0px;  visibility: hidden">\n          <button (click)="DigitizeOrder()" menu-close ion-button clear icon-start style=" opacity: .7;text-transform: none; background-color:#222222; color:aliceblue; font-size:12px;"><ion-icon style="color:aliceblue; font-size:30px;" name="ios-clipboard-outline"></ion-icon>Custom Digitizing Service</button>\n          <button (click)="VectorForm()" menu-close ion-button clear icon-start style=" opacity: .7;text-transform: none; background-color:#222222; color:aliceblue; font-size:12px;"><ion-icon style="color:aliceblue; font-size:30px;" name="ios-clipboard-outline"></ion-icon>Raster to Vector Service</button>\n         \n      </div>\n    </div>\n    <br>\n    <ion-row >\n            <ion-col col-2><ion-icon style="color:aliceblue; font-size:30px;" name="ios-star-half-outline">  </ion-icon></ion-col>\n            <ion-col><button (click)="FeedBackUser()"  style="background-color:#222222; color:aliceblue; margin-top: 4%;font-size:12px;">FeedBack</button></ion-col>\n        </ion-row>\n<br>\n  <ion-row>\n    <ion-col col-2><ion-icon style="color:aliceblue; font-size:30px;" name="ios-arrow-back-outline">  </ion-icon></ion-col>\n    <ion-col><button style="background-color:#222222; color:aliceblue; margin-top: 4%;font-size:12px;" menuClose  (click)="logout()">Logout</button></ion-col>\n  </ion-row>\n </ion-grid>\n     \n     \n    \n   \n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Digiters\src\pages\user-menu\user-menu.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_11__angular_core__["P" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__angular_core__["P" /* NgZone */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["e" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_11__angular_core__["_0" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__angular_core__["_0" /* Renderer */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["g" /* NavController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["h" /* NavParams */]) === "function" && _h || Object])
], UserMenuPage);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=user-menu.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_native__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// //Firebase Cloud


// import { profile } from '../../models/profile';
//Ionic Cloud
// import { Auth, IDetailedError, UserDetails } from '@ionic/cloud-angular';
var RegisterPage = (function () {
    //====================================================================================//
    function RegisterPage(afAuth, afDatabase, toast, navCtrl, loadingCtrl, alertCtrl, navParams) {
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        // =============================BACKGROUND IMAGES =====================================//
        this.backgrounds = [
            'assets/img/backgrounds/1.png',
            'assets/img/backgrounds/2.png',
            'assets/img/backgrounds/3.png',
            'assets/img/backgrounds/4.png'
        ];
        //  ===================================================================================//
        // =============================SETTING USER MODEL ===================================//
        this.user = {};
        __WEBPACK_IMPORTED_MODULE_1_ionic_native__["b" /* Keyboard */].disableScroll(true);
    }
    // ==============================LOGIN PAGE DIRECTORY===================================//
    RegisterPage.prototype.login = function () {
        // This navCtrl have a root og loginPage
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    // =====================================================================================//
    // ==========================SHOWING ALERT POPUPS=======================================//
    // Creating function that have a parameter of message which is string
    RegisterPage.prototype.alert = function (message) {
        // create a variable that create an alert popup
        var alert = this.alertCtrl.create({
            // this popup have title
            title: "Info!",
            // this popup have some subtitle which is message
            subTitle: message,
            // this popup have a button which is OK
            buttons: ['OK']
            // This popup is present
        }).present();
    };
    //======================================================================================//
    RegisterPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Loading...",
            showBackdrop: true
        });
        this.loader.present();
    };
    RegisterPage.prototype.CreateProfile = function (user) {
        //Creating a User in Firebase Authentication
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(function (auth) {
            _this.presentLoading();
            // Saving profile in Firebase Database
            _this.afDatabase.object("profile/" + auth.uid).set(_this.user);
            _this.loader.dismiss();
            // If the user is created then show alert message "You account has been created"; 
        })
            .catch(function (error) {
            // Showing alert message! this message have an error 
            _this.alert(error.message);
        });
    };
    RegisterPage.prototype.Gender = function () {
    };
    RegisterPage.prototype.ionViewWillLoad = function () {
        __WEBPACK_IMPORTED_MODULE_1_ionic_native__["b" /* Keyboard */].disableScroll(true);
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Digiters\src\pages\register\register.html"*/'\n\n<ion-content >\n  <ion-slides style="position: fixed;" pager="false" autoplay="2000"  loop="true" speed="1500" effect="fade">\n        <ion-slide class="swiper-no-swiping" style=" background-size: cover;background-position: center;background-repeat: no-repeat; width:100%;" *ngFor="let background of backgrounds" [ngStyle]="{\'background-image\': \'url(\' + background +\')\'}">\n</ion-slide>\n</ion-slides>\n<div style="   color: white;\nposition: absolute;\ntop: 0;\npadding: 10vw;\ntext-align: center;\nwidth: 100%;\nmargin: 0 auto;\nz-index: 2;">\n<div style=" margin-top:-20%;text-align:center;">\n  <br>\n  <br>\n <img src="assets/img/logo.png" width="180" height="180">\n <!--Your name input  -->\n \n      <div style="border-radius: 25px;\n    border: 2px solid #FFFFFF;\n    padding: 0.5px; \n    width: 80%;\n    text-align:center;\n    margin-left:10%;\n    ">\n    <ion-input style="color:#FFFFFF;" placeholder="Your FullName here" name="FirstName" type="text" value="" [(ngModel)] = "user.FirstName"></ion-input>\n </div><br>\n  <!--Your email input  -->\n  <div style="border-radius: 25px;\n    border: 2px solid #FFFFFF;\n    padding: 0.5px; \n    width: 80%;\n    text-align:center;\n    margin-left:10%;\n    ">\n    <ion-input style="color:#FFFFFF;" pattern="[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})" placeholder="Your Email here" name="email" type="email" value="" [(ngModel)] = "user.email"></ion-input>\n </div><br>\n  <!--Your Phone Number here  -->\n  <div style="border-radius: 25px;\n    border: 2px solid #FFFFFF;\n    padding: 0.5px; \n    width: 80%;\n    text-align:center;\n    margin-left:10%;\n    ">\n    <ion-input style="color:#FFFFFF;" placeholder="Your Phone Number" name="PhoneNumber" type="number" value="" [(ngModel)] = "user.PhoneNumber"></ion-input>\n </div><br>\n  <!--yOUR PASSWORD HERE  -->\n  <div style="border-radius: 25px;\n    border: 2px solid #FFFFFF;\n    padding: 0.5px; \n    width: 80%;\n    text-align:center;\n    margin-left:10%;\n    ">\n    <ion-input style="color:#FFFFFF;" placeholder="Your Password here" name="Password" type="password" value="" [(ngModel)] = "user.password"></ion-input>\n </div><br>\n\n     <ion-list> \n\n   \n        <div id="GenderSelecteorRegisterPage"><ion-select [(ngModel)]="UserGender" (ionChange)="Gender()"  style="max-width:100%; background-color:transparent; color:#FFFFFF;" interface="action-sheet" placeholder="Select Your Gender">\n              <ion-option value="Male">Male</ion-option>\n              <ion-option value="Female">Female</ion-option>\n              <ion-option value="Other">Other</ion-option>\n            \n             </ion-select></div>\n\n\n\n  </ion-list>\n  <div style="text-align:center;">\n      <button style="border: 2px solid #FFFFFF;  color:#FFFFFF; background-color:transparent; width:80%;" ion-button  round (click)="CreateProfile(user)">Register Your account</button><br>\n       </div>\n      <br>\n      <br> \n     <div style="text-align:center">\n        <div style="color:#FFFFFF;">If you already have an account please </div><br>\n       <button style="border: 2px solid #FFFFFF;  color:#FFFFFF; background-color:transparent; width:80%;" ion-button  round (click)="login()">Log in</button><br>\n       \n      </div>\n</div>\n  \n\n\n  \n</div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Digiters\src\pages\register\register.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavParams */]) === "function" && _g || Object])
], RegisterPage);

var _a, _b, _c, _d, _e, _f, _g;
//=======================================================================================//
//Etra ionic cloud cooding
//  email: string;
//   password: string;
//   name: string;
//Connecting with Google Cloud
//  register() {
//   this.fire.auth.createUserWithEmailAndPassword(this.UserEmail.value, this.UserPassword.value)
//   .then(data =>{
//       console.log('Got data' , data);
//   })
//   .catch(error =>{
//       console.log('Got an error ', error);
//     });
//     console.log('Would register with user ', this.UserEmail.value , this.UserPassword.value);
// }
// Connrcting with ionic cloud
//   ShowAlert(){
//     let alrt = this.alertCtrl.create({
//       title:"Alert",
//       subTitle: "Already have an account please register!",
//       buttons : ['OK']
//     });
//     alrt.present();
//   }
//   register() {
//     let loader = this.loadingCtrl.create({
//       content: "Signing you up..."
//     });
//     loader.present();
//     setTimeout(() => {
//       loader.dismiss();
//     }, 5000);
//     let details : UserDetails = {
//         'email': this.email,
//         'password': this.password
//         ,'name': this.name
//     }
//     this.auth.signup(details).then((res)=>{
//       loader.dismiss();
//  //toast notifier
//       let toast = this.toast.create({
//           message: "Creating User Account...",
//           duration: 1000,
//       });
//         toast.present();
//       let alert = this.alertCtrl.create({
//         title: 'Congragulations',
//         subTitle: 'You have Successfully SignUp please login you account!',
//         buttons:['OK']
//       });
//       alert.present();
//     },(err: IDetailedError<string[]>)=>{
//         loader.dismiss();
//         var error_message = '';
//         for(let e of err.details){
//           if(e === 'conflict email'){
//           error_message += 'Email already exists. <br>';
//         } else {
//           error_message += 'Invalid credientals. <br>';
//         }
//       }
//       let alert = this.alertCtrl.create({
//         title : error_message,
//         subTitle: 'Please try again',
//         buttons : ['OK']
//       });
//         alert.present();
//     })
//   } 
//# sourceMappingURL=register.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__email_verification_email_verification__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_designs_custom_designs__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__free_embroidery_free_embroidery__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomepagePage = (function () {
    function HomepagePage(InAppBrowser, AlertController, toast, afDatabase, afAuth, navCtrl, navParams) {
        this.InAppBrowser = InAppBrowser;
        this.AlertController = AlertController;
        this.toast = toast;
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomepagePage.prototype.ionViewWillLoad = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_8_firebase___default.a.auth().currentUser.emailVerified == false) {
            // then goes to verification page
            var that = this;
            // creating a variable that have a current authenticated user
            var users = __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.auth().currentUser;
            // this user have a send email verification link then this function
            users.sendEmailVerification().then(function () {
                // this function push the email Verification page
                that.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__email_verification_email_verification__["a" /* EmailVerificationPage */]);
                // catching an error if is't working
            }).catch(function (error) {
                // printing an error in console log
                console.log(error);
            });
        }
        this.UserProfile = __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.database().ref('profile');
        __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.auth().onAuthStateChanged(function (data) {
            _this.profileData = _this.afDatabase.object("profile/" + data.uid);
        });
    };
    HomepagePage.prototype.FreeEmbroidry = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__free_embroidery_free_embroidery__["a" /* FreeEmbroideryPage */]);
    };
    HomepagePage.prototype.CustomDesigns = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__custom_designs_custom_designs__["a" /* CustomDesignsPage */]);
    };
    return HomepagePage;
}());
HomepagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-homepage',template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Digiters\src\pages\homepage\homepage.html"*/'\n<ion-header color="dark" swipeEnabled="True">\n  <ion-navbar color="dark">\n    <ion-buttons left>\n      <button color="dark" ion-button menuToggle>\n        <ion-icon color="light" name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title style="color:aliceblue;">Welcome {{(profileData | async)?.FirstName }}</ion-title>\n  </ion-navbar>\n</ion-header>\n  \n  \n<ion-content style="background-color:#121315">\n  <br>\n  <div style="width:80%; margin-left:5%"> \n    <ion-input  style="color:#FFFFFF; width:80%;" placeholder="Search Categorie" name="search" type="text" value=""></ion-input>\n  </div>\n<div style=" margin-left:5%; border: 1px solid #FFFFFF; width:80%; opacity: .2;" ></div>\n\n<ion-grid style="position:fixed;" >\n  <ion-row >\n    <ion-col (click)="FreeEmbroidry()"><img src="assets/img/UserContents/Shirt.png"></ion-col>\n    <ion-col (click)="FreeEmbroidry()"><img src="assets/img/UserContents/cap.png"></ion-col>\n</ion-row>\n  <ion-row >\n    <ion-col (click)="FreeEmbroidry()"><img src="assets/img/UserContents/3d puff.png"></ion-col>\n    <ion-col (click)="FreeEmbroidry()"><img src="assets/img/UserContents/jacketback.png"></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col (click)="FreeEmbroidry()"><img src="assets/img/UserContents/towel.png"></ion-col>\n    <ion-col (click)="CustomDesigns()"><img src="assets/img/UserContents/Custom.png"></ion-col>\n  </ion-row>\n</ion-grid>\n\n<!-- After Update versions -->\n\n<!-- <ion-fab center middle>\n  <button ion-fab color="danger"><ion-icon name="md-share"></ion-icon></button>\n  <ion-fab-list side="top">\n    <button ion-fab color="primary"><ion-icon name="logo-vimeo"></ion-icon></button>\n  </ion-fab-list>\n  <ion-fab-list side="bottom">\n    <button style="background-color: #4862A3;" ion-fab color="secondary"><ion-icon name="logo-facebook"></ion-icon></button>\n  </ion-fab-list>\n  <ion-fab-list side="left">\n    <button style="background-color: #CE4539;"  ion-fab color="light"><ion-icon name="logo-googleplus"></ion-icon></button>\n  </ion-fab-list>\n  <ion-fab-list side="right">\n    <button (click)="shareWithSocials(\'https://twitter.com/intent/tweet?text=Share%20our%20new%20mobile%20app%20to%20explore%20our%20embroidery%20digitized%20designs%20you%20can%20find%20it%20on%20our%20website%20https://www.digitemb.com/\')" style="background-color: #1DA1F2;"ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n  </ion-fab-list>\n</ion-fab> -->\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Digiters\src\pages\homepage\homepage.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavParams */]) === "function" && _g || Object])
], HomepagePage);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=homepage.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDesignsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vector_page_custom_vector_page_custom__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_form_shower_custom_form_shower__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sms__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomDesignsPage = (function () {
    // @ViewChild("cc") cardContent: any;
    // @ViewChild("DigitizingForm") DigitizingForm: any;
    // @ViewChild('VectorForm') VectorForm: any;
    // accordianExpanded = false;
    function CustomDesignsPage(renderer, alrt, sms, navCtrl, navParams) {
        this.renderer = renderer;
        this.alrt = alrt;
        this.sms = sms;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CustomDesignsPage.prototype.ngOnInit = function () {
        //   console.log(this.cardContent.nativeElement);
        //   this.renderer.setElementStyle(this.cardContent.nativeElement,'webkitTransition','max-height 500ms, padding 500ms');
        // }
    };
    //   toggleAccordian(){
    //     if(this.accordianExpanded ){
    //       this.renderer.setElementStyle(this.cardContent.nativeElement,"visibility", "hidden");
    //       this.renderer.setElementStyle(this.cardContent.nativeElement,"max-height", "0px");
    //       this.renderer.setElementStyle(this.cardContent.nativeElement,"padding", "0px 16px");
    //     }else{
    //       this.renderer.setElementStyle(this.cardContent.nativeElement,"visibility", "visible");
    //       this.renderer.setElementStyle(this.cardContent.nativeElement,"max-height", "500px");
    //       this.renderer.setElementStyle(this.cardContent.nativeElement,"padding", "13px 16px");
    //     }
    //     this.accordianExpanded = !this.accordianExpanded;
    //   }
    // // Setting up Show and off Forms
    //   value: any;
    //   ShowDigitizing(){
    //     this.value = 1;
    //   }
    //   ShowVector(){
    //       this.value = 0;
    //   }
    CustomDesignsPage.prototype.DigitizingDesigns = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__custom_form_shower_custom_form_shower__["a" /* CustomFormShowerPage */]);
    };
    CustomDesignsPage.prototype.VectorFormDesigns = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__vector_page_custom_vector_page_custom__["a" /* VectorPageCustomPage */]);
    };
    return CustomDesignsPage;
}());
CustomDesignsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-custom-designs',template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Digiters\src\pages\custom-designs\custom-designs.html"*/'\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Custom Designs</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background-color:#121315;">\n<br>\n<div style="color:aliceblue; text-align:center; ">\n<p style="font-size:18px; letter-spacing:2px;">Select Your Order Type</p>\n</div>\n\n<div style="margin-top:10%;" >\n  <div >\n  <div class="UpperImage"(click)="DigitizingDesigns()">\n  <div style="height:auto; width:100%;">\n    <img src="assets/img/DigitizingSection.jpg" > \n  </div>\n  </div>\n <div style="text-align:center;">\n  <img style=" margin-top:6%;" src="assets/img/icons/cap.png" width="80" height="80">\n  <img style=" margin-left:10%;" src="assets/img/icons/shirt.png" width="65" height="65">\n  <img style="margin-left:10%; " src="assets/img/icons/Puff.png" width="70" height="55">\n  <br>\n  <br>\n  <div style="text-align:center; color:aliceblue; letter-spacing:2px;" >\n    <p>Custom Digitizing Order</p>\n  </div>\n </div>\n  </div>\n</div>\n<!-- This section cover allow you to create Vector process -->\n<br>\n<br>\n<div style="margin-top:2%;">\n    <div class="UpperImage" (click)="VectorFormDesigns()">\n    <div style="height:50px; width:100%;">\n      <img src="assets/img/VectorSection.jpg" (click)="VectorFormDesigns()"> \n    </div>\n    </div>\n   <div style="text-align:center;" (click)="VectorFormDesigns()">\n    <img style=" margin-top:10%;" src="assets/img/icons/FreeVector.png" width="65" height="65">\n    <img style=" margin-left:10%;" src="assets/img/icons/custom-digitizing1.png" width="65" height="65">\n    <img style="margin-left:10%; " src="assets/img/icons/towel.png" width="65" height="65">\n    <br>\n    <br>\n    <div style="text-align:center; color:aliceblue; letter-spacing:2px;">\n      <p>Raster to Vector Order</p>\n    </div>\n   </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Digiters\src\pages\custom-designs\custom-designs.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_core__["_0" /* Renderer */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sms__["a" /* SMS */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavParams */]])
], CustomDesignsPage);

//# sourceMappingURL=custom-designs.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FreeEmbroideryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_popup_modal_popup__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_digit_emp_api_digit_emp_api__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FreeEmbroideryPage = (function () {
    function FreeEmbroideryPage(navCtrl, load, modal, http, DigitEmbApi) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.load = load;
        this.modal = modal;
        this.http = http;
        this.DigitEmbApi = DigitEmbApi;
        this.pagination = 1;
        this.searchKeyword = "";
        this.searchType = false;
        this.title = '';
        this.presentLoading();
        this.DigitEmbApi.category(1).subscribe(function (data) {
            _this.loader.dismiss();
            _this.data = data;
        });
    }
    FreeEmbroideryPage.prototype.presentLoading = function () {
        this.loader = this.load.create({
            content: "Loading...",
            showBackdrop: true
        });
        this.loader.present();
    };
    FreeEmbroideryPage.prototype.catcontent = function ($event, datas) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__modal_popup_modal_popup__["a" /* ModalPopupPage */], datas);
    };
    FreeEmbroideryPage.prototype.search = function (keyword) {
        var _this = this;
        this.searchType = true;
        this.DigitEmbApi.search(keyword, 1).subscribe(function (data) {
            _this.data = data;
        });
    };
    FreeEmbroideryPage.prototype.onCencel = function (ev) {
        var _this = this;
        if (!ev.target.value) {
            this.DigitEmbApi.category(1).subscribe(function (data) {
                _this.data = data;
                _this.searchType = false;
            });
        }
    };
    FreeEmbroideryPage.prototype.doInfinite = function (ev) {
        var _this = this;
        this.pagination++;
        try {
            this.DigitEmbApi.category(this.pagination).subscribe(function (data) {
                ev.complete();
                if (data.length !== 0) {
                    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                        var i = data_1[_i];
                        _this.data.push(i);
                    }
                }
                else {
                    console.log('posts are ended');
                }
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    return FreeEmbroideryPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_13" /* ViewChild */])('overlayContent'),
    __metadata("design:type", Object)
], FreeEmbroideryPage.prototype, "overlayContent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_13" /* ViewChild */])('close'),
    __metadata("design:type", Object)
], FreeEmbroideryPage.prototype, "close", void 0);
FreeEmbroideryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-free-embroidery',template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Digiters\src\pages\free-embroidery\free-embroidery.html"*/'\n<ion-header>\n  \n    <ion-navbar color="dark">\n      <ion-title>Free Embroidery Designs</ion-title>\n    </ion-navbar>\n    \n  \n    <ion-searchbar [(ngModel)]="searchKeyword" \n                   (keyup.enter)="search(searchKeyword, $event)"\n                   (ionInput)="onCencel($event)">\n  \n    </ion-searchbar>\n  \n  </ion-header>\n  \n  \n  \n  <ion-content style="background-color:#121315">\n  \n  \n    \n  \n    <ion-card  *ngFor="let datas of data">\n      <div  *ngFor="let thumbnail of datas._embedded[\'wp:featuredmedia\']">\n              <img *ngIf="thumbnail.source_url" [src]="thumbnail.source_url" />\n      </div>\n      <ion-card-header style="text-align:center;"><p style="font-weight:bold; font-size:15px;padding:10px;" #acr [innerHTML]="datas.title.rendered "></p></ion-card-header>\n      <ion-card-content style="text-align:center;">\n        <div id="continuereading" [innerHTML]= "datas.excerpt.rendered"></div>\n        \n        \n      </ion-card-content>\n      \n  \n  \n      <div style="text-align:center;" (click)="catcontent($event, datas)">\n      <button class="button box" href="#popup1"  ion-button   color="dark" style="letter-spacing: 2px; width:80%;" >\n        Get Design File Here\n        <ion-icon style="margin-left:2%;" name="ios-arrow-dropright-outline"></ion-icon>\n      </button>\n      </div>\n      <br>\n    </ion-card>\n  \n  \n  \n  \n  \n   <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll> \n    </ion-content>'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Digiters\src\pages\free-embroidery\free-embroidery.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1__providers_digit_emp_api_digit_emp_api__["a" /* DigitEmpApiProvider */]])
], FreeEmbroideryPage);

//# sourceMappingURL=free-embroidery.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(499);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_feedback_users_feedback_users__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_verification_process_verification_process__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_free_vector_designs_free_vector_designs__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_reset_password_reset_password__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_vector_page_custom_vector_page_custom__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_custom_form_shower_custom_form_shower__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_modal_popup_modal_popup__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_email_verification_email_verification__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_email_composer__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_digit_emp_api_digit_emp_api__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_account_settings_account_settings__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_network__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_vector_form_vector_form__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_digitizing_form_digitizing_form__ = __webpack_require__(892);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_user_menu_user_menu__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_custom_designs_custom_designs__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_free_embroidery_free_embroidery__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_homepage_homepage__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_register_register__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_login_login__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__app_component__ = __webpack_require__(893);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_sms__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angularfire2__ = __webpack_require__(894);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_firebase__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_ionic_native__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































// import { AngularFireAuthModule } from 'angularfire2/auth';
//Google Cloud Database module firebase
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// Importing firebase Objects


__WEBPACK_IMPORTED_MODULE_31_firebase___default.a.initializeApp({
    apiKey: "AIzaSyCw0FBDXAh3ntNTWq5WR616NQaJJqvVbZs",
    authDomain: "digitemb-51405.firebaseapp.com",
    databaseURL: "https://digitemb-51405.firebaseio.com",
    projectId: "digitemb-51405",
    storageBucket: "digitemb-51405.appspot.com",
    messagingSenderId: "163504200147"
});
var FIREBASE_CONFIGe = {
    apiKey: "AIzaSyCw0FBDXAh3ntNTWq5WR616NQaJJqvVbZs",
    authDomain: "digitemb-51405.firebaseapp.com",
    databaseURL: "https://digitemb-51405.firebaseio.com",
    projectId: "digitemb-51405",
    storageBucket: "digitemb-51405.appspot.com",
    messagingSenderId: "163504200147"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_23__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_28__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_homepage_homepage__["a" /* HomepagePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_free_embroidery_free_embroidery__["a" /* FreeEmbroideryPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_custom_designs_custom_designs__["a" /* CustomDesignsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_user_menu_user_menu__["a" /* UserMenuPage */],
            __WEBPACK_IMPORTED_MODULE_15__components_digitizing_form_digitizing_form__["a" /* DigitizingFormComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_vector_form_vector_form__["a" /* VectorFormComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pages_account_settings_account_settings__["a" /* AccountSettingsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_email_verification_email_verification__["a" /* EmailVerificationPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_custom_form_shower_custom_form_shower__["a" /* CustomFormShowerPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_vector_page_custom_vector_page_custom__["a" /* VectorPageCustomPage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
            __WEBPACK_IMPORTED_MODULE_2__pages_free_vector_designs_free_vector_designs__["a" /* FreeVectorDesignsPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_verification_process_verification_process__["a" /* VerificationProcessPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_modal_popup_modal_popup__["a" /* ModalPopupPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_feedback_users_feedback_users__["a" /* FeedbackUsersPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_24_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_28__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_30_angularfire2__["a" /* AngularFireModule */].initializeApp(FIREBASE_CONFIGe),
            __WEBPACK_IMPORTED_MODULE_27__angular_http__["b" /* HttpModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_24_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_28__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_homepage_homepage__["a" /* HomepagePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_free_embroidery_free_embroidery__["a" /* FreeEmbroideryPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_custom_designs_custom_designs__["a" /* CustomDesignsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_user_menu_user_menu__["a" /* UserMenuPage */],
            __WEBPACK_IMPORTED_MODULE_15__components_digitizing_form_digitizing_form__["a" /* DigitizingFormComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_vector_form_vector_form__["a" /* VectorFormComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pages_account_settings_account_settings__["a" /* AccountSettingsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_email_verification_email_verification__["a" /* EmailVerificationPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_custom_form_shower_custom_form_shower__["a" /* CustomFormShowerPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_vector_page_custom_vector_page_custom__["a" /* VectorPageCustomPage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
            __WEBPACK_IMPORTED_MODULE_2__pages_free_vector_designs_free_vector_designs__["a" /* FreeVectorDesignsPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_verification_process_verification_process__["a" /* VerificationProcessPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_modal_popup_modal_popup__["a" /* ModalPopupPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_feedback_users_feedback_users__["a" /* FeedbackUsersPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_23__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_24_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_29__ionic_native_sms__["a" /* SMS */],
            __WEBPACK_IMPORTED_MODULE_32_ionic_native__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_11__providers_digit_emp_api_digit_emp_api__["a" /* DigitEmpApiProvider */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_email_composer__["a" /* EmailComposer */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_32_ionic_native__["b" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 892:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DigitizingFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__ = __webpack_require__(187);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DigitizingFormComponent = (function () {
    function DigitizingFormComponent(toast, alrt, renderer, network, EmailComposer) {
        this.toast = toast;
        this.alrt = alrt;
        this.renderer = renderer;
        this.network = network;
        this.EmailComposer = EmailComposer;
        this.accordianExpanded = false;
    }
    DigitizingFormComponent.prototype.ngOnInit = function () {
        console.log(this.cardContent.nativeElement);
        this.renderer.setElementStyle(this.cardContent.nativeElement, 'webkitTransition', 'max-height 500ms, padding 500ms');
        this.renderer.setElementStyle(this.OtherFormatTextBox.nativeElement, 'webkitTransition', 'max-height 500ms, padding 500ms');
    };
    // If User Selected Format Size Options
    DigitizingFormComponent.prototype.optionsFn = function () {
        if (this.UserSelectedformat == 'cm' || this.UserSelectedformat == 'Inch' || this.UserSelectedformat == 'HoopSize') {
            this.renderer.setElementStyle(this.cardContent.nativeElement, "visibility", "visible");
            this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "300px");
            this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "13px 16px");
        }
        else {
            this.renderer.setElementStyle(this.cardContent.nativeElement, "visibility", "hidden");
            this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
            this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 16px");
        }
        this.accordianExpanded = !this.accordianExpanded;
    };
    // If User Selected Other Format
    DigitizingFormComponent.prototype.OtherFormat = function () {
        if (this.UserSelectedOtherFormat == 'OtherFormat') {
            this.renderer.setElementStyle(this.OtherFormatTextBox.nativeElement, "visibility", "visible");
            this.renderer.setElementStyle(this.OtherFormatTextBox.nativeElement, "max-height", "300px");
            this.renderer.setElementStyle(this.OtherFormatTextBox.nativeElement, "padding", "13px 16px");
        }
        else {
            this.renderer.setElementStyle(this.OtherFormatTextBox.nativeElement, "visibility", "hidden");
            this.renderer.setElementStyle(this.OtherFormatTextBox.nativeElement, "max-height", "0px");
            this.renderer.setElementStyle(this.OtherFormatTextBox.nativeElement, "padding", "0px 16px");
        }
    };
    DigitizingFormComponent.prototype.SendEmailInDigitizingForm = function () {
        var _this = this;
        var NameDesign = this.DesignName;
        var Sizeformat = this.UserSelectedformat;
        var height = this.HeightOfFormat;
        var Width = this.WidthOfFormat;
        var Message = this.UsersDigitizingMessage;
        var FileTypeFormat = this.UserSelectedOtherFormat;
        var OtherFormatTextValue = this.OtherFormatTextBoxValues;
        console.log(this.UserSelectedOtherFormat);
        var email = {
            to: 'Digitize@digitemb.com',
            cc: 'marketing@digitemb.com',
            attachments: [],
            subject: 'Congratulations You Recieved New Digitizing Order!',
            body: '<p class="EmailComposerOfDigitizing">I want to digitize agreeable design(s) as per my own requirements!</p> <br>' + '<b>1. Design Name :</b> ' + NameDesign + '<br><b>2. Size : </b>' + Sizeformat + '<b><br>3. Width :</b> ' + Width + '<b> Heght :</b> ' + height + '<br><b>4. File Type :</b> ' + FileTypeFormat + '<br><b>User Typed Other Format :  </b></br>' + OtherFormatTextValue + '<br><b>5. Message :</b> ' + Message + '<br><br>This email was sent from DigitEMB Free Designs App<br>',
            isHtml: true
        };
        this.EmailComposer.open(email).then(function (data) {
            _this.toast.create({
                message: 'Your Request has been successfully sent, we will conatct you soon!',
                position: 'top',
                duration: 3000,
                cssClass: "EmailComposerOfDigitizingtoast",
            }).present();
        });
    };
    return DigitizingFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* ViewChild */])('HideElementsOfFormatSize'),
    __metadata("design:type", Object)
], DigitizingFormComponent.prototype, "cardContent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* ViewChild */])('ShowOtherFormatTextBox'),
    __metadata("design:type", Object)
], DigitizingFormComponent.prototype, "OtherFormatTextBox", void 0);
DigitizingFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'digitizing-form',template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Digiters\src\components\digitizing-form\digitizing-form.html"*/'<!-- Generated template for the DigitizingFormComponent component -->\n<ion-card>\n  <ion-card-header style="background-color:#161616; text-align:center;">\n    <!-- Label Of Digitizing Form -->\n      <label  style="color:aliceblue; letter-spacing: 2px; font-size: 14px;" >Enter Your Order Requirements</label>\n  </ion-card-header>\n  <ion-card-content style="background-color:#222222">\n    <ion-grid>\n    <ion-row>\n      <ion-col style="text-align:center;"><div style=" opacity: .8; border-radius:10px; border: 1px solid #FFFFFF; width: 100%;"><ion-input  style="letter-spacing:2px; font-size:12px;color:#FFFFFF;" placeholder="Your Design Name" [(ngModel)]="DesignName" type="text" value= \'\' ></ion-input></div></ion-col>\n    </ion-row>\n    <br>\n    <ion-row><ion-col style="text-align:center;"><div style=" opacity: .8; border-radius:10px; border: 1px solid #FFFFFF; width: 100%;"><ion-input  style="letter-spacing:2px; font-size:12px;color:#FFFFFF;" placeholder="Your Contact Number" [(ngModel)]="UserContactNumber" type="number" value= \'\' ></ion-input></div></ion-col></ion-row>\n\n<br>\n<!-- Select Your Desired Formats -->\n    <ion-row>\n        <ion-col ><ion-select  [(ngModel)]="UserSelectedformat" (ionChange)="optionsFn();" style=" max-width: 100% !important;background-color:#121315; color:#FFFFFF;" interface="action-sheet" placeholder="Select Measurements format"  cancelText="Close">\n          <ion-option  value="Default">Select Measurements format</ion-option>\n          <ion-option  value="cm"  >Centimeters</ion-option>\n          <ion-option  value="Inch" >Inches</ion-option>\n          <ion-option  value="HoopSize" >Hoop Size</ion-option>\n          \n         </ion-select></ion-col>\n      </ion-row>\n    <br>\n   <!-- Show and Height Formats -->\n   <div  #HideElementsOfFormatSize style="visibility:hidden; max-height:0px;">\n  <ion-row>\n     <ion-col><label style=" margin-left:15px;font-size: 14px; color:aliceblue; letter-spacing:2px;">Width</label></ion-col>\n     <ion-col ><div style=" opacity: .8; margin-top:-10px; border-radius: 10px;border: 1px solid #FFFFFF; padding: 0.5px;width: 100%; height: 45px;"><ion-input style="color:#FFFFFF;" placeholder="Value" [(ngModel)]="WidthOfFormat" type="number" value="" ></ion-input></div></ion-col>\n    </ion-row>\n    <br>\n    <ion-row>\n        <ion-col><label style=" margin-left:15px;font-size: 14px; color:aliceblue; letter-spacing:2px;">Height</label></ion-col>\n        <ion-col ><div style=" opacity: .8; margin-top:-10px; border-radius: 10px;border: 1px solid #FFFFFF; padding: 0.5px;width: 100%; height: 45px;"><ion-input style="color:#FFFFFF;" placeholder="Value" [(ngModel)]="HeightOfFormat" type="number" value="" ></ion-input></div></ion-col>\n    </ion-row>\n   </div>\n    \n<!-- Select Your Format Options -->\n\n    <ion-row>\n      <ion-col ><ion-select [(ngModel)]="UserSelectedOtherFormat" (ionChange)="OtherFormat();"  style="max-width:100%; background-color:#121315; color:#FFFFFF;" interface="action-sheet" placeholder="Select file format">\n        <ion-option value="opt">Select file format</ion-option>\n        <ion-option value="Dst">.Dst</ion-option>\n        <ion-option value="EMB">.EMB</ion-option>\n        <ion-option value="Exp">.Exp</ion-option>\n        <ion-option value="JEF">.JEF</ion-option>\n        <ion-option value="OtherFormat">Other Format</ion-option>\n        <!-- text field other -->\n       </ion-select></ion-col>\n    </ion-row>\n   <br>\n    <!-- Visible If select Other Format -->\n    <div #ShowOtherFormatTextBox style="visibility:hidden; max-height:0px;">\n    <ion-row>\n      <ion-col style="text-align:center;"><div style=" opacity: .8; border-radius:10px; border: 1px solid #FFFFFF; width: 100%;"><ion-input  [(ngModel)]="OtherFormatTextBoxValues" style="letter-spacing:2px; font-size:12px;color:#FFFFFF;" placeholder="Other Format" type="text"></ion-input></div></ion-col>\n    </ion-row>\n    </div>\n    <!-- Additional Detail Label -->\n    <br>\n\n    <label style="color:aliceblue;font-size:13px; margin-left:2%;">Additional Details :</label><br>\n\n\n  <!-- Textarea User want to design contents -->\n    <ion-row style="width:100%;">\n      <textarea  [(ngModel)] = "UsersDigitizingMessage"  style="background-color:#121315; border-style:none; color:#FFFFFF; font-size:13px;padding: 5%; opacity:.8; " id="" placeholder="Please provide us all the necessary information like size, required file format and any other instructions" cols="60" rows="10"></textarea>\n    </ion-row>\n    <br>\n    <!-- Send Email To Owner -->\n    <ion-row>\n      <ion-col>\n        <div style="text-align:center;">\n            <button (click)="SendEmailInDigitizingForm()" style="text-transform:none; border: 2px solid #FFFFFF; opacity:.8; color:#FFFFFF; background-color:transparent; "  ion-button  round >Send Request</button><br>\n             </div>\n      </ion-col>\n    </ion-row>\n    </ion-grid>\n  </ion-card-content>\n</ion-card>\n\n'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Digiters\src\components\digitizing-form\digitizing-form.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_0" /* Renderer */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__["a" /* EmailComposer */]])
], DigitizingFormComponent);

//# sourceMappingURL=digitizing-form.js.map

/***/ }),

/***/ 893:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_login_login__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_native__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(alert, platform, statusBar, splashScreen) {
        this.alert = alert;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            __WEBPACK_IMPORTED_MODULE_5_ionic_native__["b" /* Keyboard */].disableScroll(true);
            var notificationOpenedCallback = function (jsonData) {
                console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
            };
            window["plugins"].OneSignal
                .startInit("9c96babb-0e84-4223-8884-aee638cf1870", "163504200147")
                .handleNotificationOpened(notificationOpenedCallback)
                .endInit();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Digiters\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Digiters\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object])
], MyApp);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ })

},[494]);
//# sourceMappingURL=main.js.map