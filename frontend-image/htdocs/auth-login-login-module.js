(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-login-login-module"],{

/***/ "./src/app/auth/login/login-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/auth/login/login-routing.module.ts ***!
  \****************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/auth/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
                    }
                ])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-md-8\">\n                <div class=\"card-group mb-0\">\n                    <div class=\"card p-4\">\n                        <div class=\"card-body\">\n                            <div *ngIf=\"showQuickAuth\">\n                                <form id=\"form-quick-login\" name=\"form-quick-login\" (ngSubmit)=\"autoLogin()\" novalidate>\n                                    <h1>Login</h1>\n                                    <div class=\"row\">\n                                        <div class=\"col-12\">\n                                            <button type=\"button\" class=\"btn btn-success\" (click)=\"autoLogin()\">Acessar</button>\n                                            <button type=\"button\" class=\"btn btn-link\" (click)=\"showQuickAuth = !showQuickAuth\">Outra conta</button>\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n                            <div *ngIf=\"!showQuickAuth\">\n                                <form id=\"form-login\" name=\"form-login\" (ngSubmit)=\"login()\" novalidate>\n                                    <h1>Login</h1>\n                                    <p class=\"text-muted\">Entre com sua conta</p>\n                                    <div class=\"input-group mb-3\">\n                                        <span class=\"input-group-addon\">\n                                            <i class=\"icon-user\"></i>\n                                        </span>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Email\" name=\"username\" autocomplete=\"username\" [(ngModel)]=\"user.username\" #username=\"ngModel\" required>\n                                        <span id=\"username-message\" class=\"text-danger\"></span>\n                                    </div>\n                                    <div class=\"input-group mb-4\">\n                                        <span class=\"input-group-addon\">\n                                            <i class=\"icon-lock\"></i>\n                                        </span>\n                                        <input type=\"password\" class=\"form-control\" placeholder=\"Senha\" name=\"password\" autocomplete=\"current-password\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required>\n                                        <span id=\"password-message\" class=\"text-danger\"></span>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-12\">\n                                            <button type=\"submit\" class=\"btn btn-primary px-3\">Acessar</button>\n                                            <a [routerLink]=\"'/register'\" class=\"btn btn-link mx-0 px-1\">Registrar</a>\n                                            <a [routerLink]=\"'/amnesia'\" class=\"btn btn-link mx-0 px-1\">Esqueceu a senha?</a>\n                                        </div>\n                                    </div>\n                                    <div id=\"message\" class=\"text-danger\"></div>\n                                    <!--<div>\n                                      Email:admin@demoiselle.org Senha:123456\n                                    </div>-->\n                                </form>\n                            </div>\n                            <br>\n                            <div class=\"row\">\n                                <div class=\"col-sm-6 col-lg-3\">\n                                    <button class=\"btn btn-facebook\" type=\"button\" (click)=\"socialSignIn('facebook')\">\n                                        <span>facebook</span>\n                                    </button>\n                                </div>\n                                <br>\n                                <div class=\"col-sm-6 col-lg-3\">\n                                    <button class=\"btn btn-google-plus\" type=\"button\" (click)=\"socialSignIn('google')\">\n                                        <span>google</span>\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!--<div class=\"card text-white bg-primary py-5 d-md-down-none\" style=\"width:44%\">\n                      <div class=\"card-body text-center\">\n                        <div>\n                          <h2>Registre-se</h2>\n                          <p>Crie uma conta e tenha acesso ao sistema.</p>\n                          <button type=\"button\" [routerLink]=\"['/user/edit']\" class=\"btn btn-primary active mt-3\">Cadastrar!</button>-\n                        </div>\n                      </div>\n                    </div>-->\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _demoiselle_security__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demoiselle/security */ "./node_modules/@demoiselle/security/dist/index.js");
/* harmony import */ var _demoiselle_security__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_demoiselle_security__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/notification.service */ "./src/app/core/notification.service.ts");
/* harmony import */ var _core_sw_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sw.service */ "./src/app/core/sw.service.ts");
/* harmony import */ var _credentials_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../credentials.service */ "./src/app/auth/credentials.service.ts");
/* harmony import */ var _core_websocket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/websocket.service */ "./src/app/core/websocket.service.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = /** @class */ (function () {
    function LoginComponent(socialAuthService, authService, router, notificationService, serviceWorkerService, tokenService, credentialManagementService, webSocketService) {
        this.socialAuthService = socialAuthService;
        this.authService = authService;
        this.router = router;
        this.notificationService = notificationService;
        this.serviceWorkerService = serviceWorkerService;
        this.tokenService = tokenService;
        this.credentialManagementService = credentialManagementService;
        this.webSocketService = webSocketService;
        this.user = {
            username: 'admin@demoiselle.org',
            password: '123456'
        };
        this.supportAutoLogin = false;
        this.showQuickAuth = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        // tslint:disable-next-line:no-console
        console.debug('[LoginComponent] initialized.');
        this.credentialManagementService
            .isCredentialsAvailable()
            .then(function (result) {
            if (result === true) {
                _this.supportAutoLogin = true;
                _this.showQuickAuth = true;
            }
        })
            .catch(function (err) {
            _this.supportAutoLogin = false;
            _this.showQuickAuth = false;
        });
    };
    LoginComponent.prototype.login = function () {
        var payload = {
            username: this.user.username,
            password: this.user.password
        };
        this.loginWithPayload(payload);
    };
    LoginComponent.prototype.autoLogin = function () {
        var _this = this;
        this.credentialManagementService
            .autoSignin()
            .then(function (credentials) {
            var payload = {
                username: credentials.id,
                password: credentials.password
            };
            _this.loginWithPayload(payload);
        })
            .catch(function (err) {
            console.warn(err);
            _this.showQuickAuth = false;
        });
    };
    LoginComponent.prototype.loginWithPayload = function (payload) {
        var _this = this;
        var subs = this.authService.login(payload).subscribe(function (result) {
            // tslint:disable-next-line:no-console
            console.debug('Login realizado com sucesso!', result);
            _this.notificationService.success('Login realizado com sucesso!');
            _this._sendLoginWebSocket();
            _this.serviceWorkerService.startWebPush();
            _this.credentialManagementService.store(payload);
        }, function (error) { return _this._showErrors(error); }, function () {
            subs.unsubscribe();
        });
    };
    LoginComponent.prototype.socialSignIn = function (socialPlatform) {
        var _this = this;
        var socialPlatformProvider;
        if (socialPlatform === 'facebook') {
            socialPlatformProvider = angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["FacebookLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform === 'google') {
            socialPlatformProvider = angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(function (social) {
            var subs = _this.authService.social(social).subscribe(function (result) {
                // tslint:disable-next-line:no-console
                console.debug('Login social realizado com sucesso!', result);
                _this.notificationService.success('Login social realizado com sucesso!');
                _this._sendLoginWebSocket();
                _this.serviceWorkerService.startWebPush();
            }, function (error) { return _this._showErrors(error); }, function () {
                subs.unsubscribe();
            });
        });
    };
    LoginComponent.prototype._showErrors = function (error) {
        if (error.status === 401 || error.status === 406) {
            var errors = error.error;
            for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
                var err = errors_1[_i];
                this.notificationService.error(err.error);
            }
            this.user.password = '';
        }
    };
    LoginComponent.prototype._sendLoginWebSocket = function () {
        var _this = this;
        this.webSocketService
            .connect()
            .then(function (wsConnection) {
            // console.debug('[WS] conectado.');
            var id = _this.tokenService.getIdentityFromToken();
            wsConnection.send({
                event: 'login',
                data: id
            });
        })
            .catch(function (error) { return console.error('Erro ao conectar com WebSocket.', error); });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html")
        }),
        __metadata("design:paramtypes", [angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _demoiselle_security__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"],
            _core_sw_service__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerService"],
            _demoiselle_security__WEBPACK_IMPORTED_MODULE_2__["TokenService"],
            _credentials_service__WEBPACK_IMPORTED_MODULE_5__["CredentialManagementService"],
            _core_websocket_service__WEBPACK_IMPORTED_MODULE_6__["WebSocketService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/login/login.module.ts":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.module.ts ***!
  \********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/auth/login/login-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"]
            ],
            declarations: [
                _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
            ],
            providers: []
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=auth-login-login-module.js.map