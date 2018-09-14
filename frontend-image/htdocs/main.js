(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/amnesia/amnesia.module": [
		"./src/app/auth/amnesia/amnesia.module.ts",
		"auth-amnesia-amnesia-module~auth-login-login-module~auth-register-register-module~entidades-entidade~436fe9b4",
		"auth-amnesia-amnesia-module"
	],
	"./auth/login/login.module": [
		"./src/app/auth/login/login.module.ts",
		"auth-amnesia-amnesia-module~auth-login-login-module~auth-register-register-module~entidades-entidade~436fe9b4",
		"auth-login-login-module"
	],
	"./auth/register/register.module": [
		"./src/app/auth/register/register.module.ts",
		"auth-amnesia-amnesia-module~auth-login-login-module~auth-register-register-module~entidades-entidade~436fe9b4",
		"auth-register-register-module"
	],
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"dashboard-dashboard-module"
	],
	"./entidades/entidades.module": [
		"./src/app/entidades/entidades.module.ts",
		"auth-amnesia-amnesia-module~auth-login-login-module~auth-register-register-module~entidades-entidade~436fe9b4",
		"entidades-entidades-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_layout_containers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/layout/containers */ "./src/app/shared/layout/containers/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Import Containers

var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: _shared_layout_containers__WEBPACK_IMPORTED_MODULE_2__["FullLayout"],
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'entidades',
                loadChildren: './entidades/entidades.module#EntidadesModule',
                data: {
                    title: 'Entidades',
                    showInSidebar: true,
                    icon: 'icon-diamond'
                }
            },
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule',
                data: {
                    title: 'Dashboard',
                    showInSidebar: true,
                    icon: 'icon-speedometer'
                },
            }
        ]
    },
    {
        path: '',
        component: _shared_layout_containers__WEBPACK_IMPORTED_MODULE_2__["SimpleLayout"],
        data: {
            title: 'Pages'
        },
        children: [
            {
                path: 'login',
                loadChildren: './auth/login/login.module#LoginModule',
            },
            {
                path: 'amnesia',
                loadChildren: './auth/amnesia/amnesia.module#AmnesiaModule',
            },
            {
                path: 'register',
                loadChildren: './auth/register/register.module#RegisterModule',
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_websocket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/websocket.service */ "./src/app/core/websocket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { ToastsManager } from 'ng2-toastr/ng2-toastr';

var AppComponent = /** @class */ (function () {
    function AppComponent(webSocketService) {
        this.webSocketService = webSocketService;
        this.title = 'app';
        console.debug('[WS] connectando...');
        this.webSocketService.connect()
            .then(function (wsConnection) {
            console.info('[WS] conectado.');
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line
            selector: 'body',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_core_websocket_service__WEBPACK_IMPORTED_MODULE_1__["WebSocketService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"].forRoot(),
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('/sw-app.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production })
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/credentials.service.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/credentials.service.ts ***!
  \*********************************************/
/*! exports provided: CredentialManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CredentialManagementService", function() { return CredentialManagementService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ERROR_CREDENTIAL_NOT_AVAILABLE = new Error('Credentials is not available');
var CredentialManagementService = /** @class */ (function () {
    function CredentialManagementService() {
    }
    CredentialManagementService.prototype.isCredentialsAvailable = function () {
        if (navigator['credentials'] && navigator['credentials'].preventSilentAccess) {
            return Promise.resolve(true);
        }
        return Promise.reject(ERROR_CREDENTIAL_NOT_AVAILABLE);
    };
    CredentialManagementService.prototype.store = function (payload) {
        return this.isCredentialsAvailable().then(function () {
            var credential = {
                id: payload.username,
                idName: 'username',
                password: payload.password
            };
            var passwordCredential = new window['PasswordCredential'](credential);
            return navigator['credentials'].store(passwordCredential);
        });
    };
    CredentialManagementService.prototype.getCredential = function (silent) {
        return this.isCredentialsAvailable().then(function () {
            return navigator['credentials'].get({
                password: true,
                mediation: silent ? 'silent' : 'optional'
            });
        });
    };
    CredentialManagementService.prototype.autoSignin = function () {
        var silent = false;
        return this.getCredential(silent).then(function (credentials) {
            if (!credentials) {
                return Promise.reject('Nenhum credencial armazenada ainda.');
            }
            return credentials;
        });
    };
    CredentialManagementService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CredentialManagementService);
    return CredentialManagementService;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: getAuthServiceConfigs, MyAuthOptions, CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAuthOptions", function() { return MyAuthOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sw_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sw.service */ "./src/app/core/sw.service.ts");
/* harmony import */ var _auth_credentials_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/credentials.service */ "./src/app/auth/credentials.service.ts");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./websocket.service */ "./src/app/core/websocket.service.ts");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notification.service */ "./src/app/core/notification.service.ts");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util.service */ "./src/app/core/util.service.ts");
/* harmony import */ var _demoiselle_security__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @demoiselle/security */ "./node_modules/@demoiselle/security/dist/index.js");
/* harmony import */ var _demoiselle_security__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_demoiselle_security__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _demoiselle_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @demoiselle/http */ "./node_modules/@demoiselle/http/dist/index.js");
/* harmony import */ var _demoiselle_http__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_demoiselle_http__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _demoiselle_security_dist_auth_options__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @demoiselle/security/dist/auth-options */ "./node_modules/@demoiselle/security/dist/auth-options.js");
/* harmony import */ var _demoiselle_security_dist_auth_options__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_demoiselle_security_dist_auth_options__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-progressbar */ "./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var _shared_layout_containers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../shared/layout/containers */ "./src/app/shared/layout/containers/index.ts");
/* harmony import */ var _shared_layout_components__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shared/layout/components */ "./src/app/shared/layout/components/index.ts");
/* harmony import */ var _shared_layout_directives__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../shared/layout/directives */ "./src/app/shared/layout/directives/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};














// Import 3rd party components





function getAuthServiceConfigs() {
    var config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_18__["AuthServiceConfig"]([
        {
            id: angularx_social_login__WEBPACK_IMPORTED_MODULE_18__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_18__["FacebookLoginProvider"](_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].facebookId)
        },
        {
            id: angularx_social_login__WEBPACK_IMPORTED_MODULE_18__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_18__["GoogleLoginProvider"](_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].googleId)
        },
    ]);
    return config;
}
// Demoiselle AuthOptions, using default values except api endpoint
var MyAuthOptions = /** @class */ (function (_super) {
    __extends(MyAuthOptions, _super);
    function MyAuthOptions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.authEndpointUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].apiUrl;
        return _this;
    }
    return MyAuthOptions;
}(_demoiselle_security_dist_auth_options__WEBPACK_IMPORTED_MODULE_13__["AuthOptions"]));

// Toastr Custom configs (defined at forRoot() providers below)
var customToastrOptions = {
    animate: 'flyRight',
    positionClass: 'toast-bottom-right',
    showCloseButton: true,
    dismiss: 'auto',
    toastLife: 7000
};
// Import containers

var APP_CONTAINERS = [
    _shared_layout_containers__WEBPACK_IMPORTED_MODULE_19__["FullLayout"],
    _shared_layout_containers__WEBPACK_IMPORTED_MODULE_19__["SimpleLayout"]
];
// Import components

var APP_COMPONENTS = [
    _shared_layout_components__WEBPACK_IMPORTED_MODULE_20__["AppAside"],
    _shared_layout_components__WEBPACK_IMPORTED_MODULE_20__["AppBreadcrumbs"],
    _shared_layout_components__WEBPACK_IMPORTED_MODULE_20__["AppFooter"],
    _shared_layout_components__WEBPACK_IMPORTED_MODULE_20__["AppHeader"],
    _shared_layout_components__WEBPACK_IMPORTED_MODULE_20__["AppSidebar"],
    _shared_layout_components__WEBPACK_IMPORTED_MODULE_20__["AppSidebarFooter"],
    _shared_layout_components__WEBPACK_IMPORTED_MODULE_20__["AppSidebarForm"],
    _shared_layout_components__WEBPACK_IMPORTED_MODULE_20__["AppSidebarHeader"],
    _shared_layout_components__WEBPACK_IMPORTED_MODULE_20__["AppSidebarMinimizer"]
];
// Import directives

var APP_DIRECTIVES = [
    _shared_layout_directives__WEBPACK_IMPORTED_MODULE_21__["AsideToggleDirective"],
    _shared_layout_directives__WEBPACK_IMPORTED_MODULE_21__["NAV_DROPDOWN_DIRECTIVES"],
    _shared_layout_directives__WEBPACK_IMPORTED_MODULE_21__["SIDEBAR_TOGGLE_DIRECTIVES"]
];
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: [
                // put here your global or singleton services to be available for all modules
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _demoiselle_http__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptor"],
                    multi: true,
                },
                {
                    provide: _demoiselle_security_dist_auth_options__WEBPACK_IMPORTED_MODULE_13__["AuthOptions"],
                    useClass: MyAuthOptions
                },
                _demoiselle_http__WEBPACK_IMPORTED_MODULE_12__["ExceptionService"],
                _sw_service__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerService"],
                _auth_credentials_service__WEBPACK_IMPORTED_MODULE_7__["CredentialManagementService"],
                _websocket_service__WEBPACK_IMPORTED_MODULE_8__["WebSocketService"],
                _notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"],
                _util_service__WEBPACK_IMPORTED_MODULE_10__["UtilService"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["HashLocationStrategy"] },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: ngx_progressbar__WEBPACK_IMPORTED_MODULE_16__["NgProgressInterceptor"], multi: true }
            ]
        };
    };
    CoreModule = CoreModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                ngx_progressbar__WEBPACK_IMPORTED_MODULE_16__["NgProgressModule"],
                angularx_social_login__WEBPACK_IMPORTED_MODULE_18__["SocialLoginModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                // HttpModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _demoiselle_security__WEBPACK_IMPORTED_MODULE_11__["SecurityModule"].forRoot(),
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__["BsDropdownModule"].forRoot(),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"].forRoot(customToastrOptions)
            ],
            declarations: APP_CONTAINERS.concat(APP_COMPONENTS, APP_DIRECTIVES),
            exports: [],
            providers: [{
                    provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_18__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs
                }]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
    var CoreModule_1;
}());



/***/ }),

/***/ "./src/app/core/notification.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/notification.service.ts ***!
  \**********************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _demoiselle_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demoiselle/http */ "./node_modules/@demoiselle/http/dist/index.js");
/* harmony import */ var _demoiselle_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_demoiselle_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotificationService = /** @class */ (function () {
    function NotificationService(toastr, exceptionService, router) {
        var _this = this;
        this.toastr = toastr;
        this.exceptionService = exceptionService;
        this.router = router;
        this.errorsSubscription = this.exceptionService.errors$.subscribe(function (error) { return _this.handleError(error); });
    }
    NotificationService.prototype.notification = function (title, message) {
        var options = {
            body: message,
            icon: 'assets/logo.png'
        };
        // Let's check if the browser supports notifications
        if (!('Notification' in window)) {
            console.log('This browser does not support system notifications');
        }
        else if (Notification['permission'] === 'granted') {
            // If it's okay let's create a notification
            navigator.serviceWorker.ready.then(function (reg) {
                return reg.showNotification(title, options);
            });
        }
        else if (Notification['permission'] !== 'denied') {
            Notification.requestPermission(function (permission) {
                // If the user accepts, let's create a notification
                if (permission === 'granted') {
                    navigator.serviceWorker.ready.then(function (reg) {
                        return reg.showNotification(title, options);
                    });
                }
            });
        }
    };
    NotificationService.prototype.success = function (text) {
        this.toastr.success(text);
    };
    NotificationService.prototype.error = function (text) {
        this.toastr.error(text);
    };
    NotificationService.prototype.info = function (text) {
        this.toastr.info(text);
    };
    NotificationService.prototype.warning = function (text) {
        this.toastr.warning(text);
    };
    NotificationService.prototype.handleError = function (httpError) {
        if (httpError == null) {
            return;
        }
        if (httpError.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            this.error("An error occurred: " + httpError.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            switch (httpError.status) {
                case 401:
                case 403:
                    this.router.navigate(['/login']);
                    break;
                case 412:
                    for (var _i = 0, _a = httpError.error; _i < _a.length; _i++) {
                        var err = _a[_i];
                        var parts = err.error.split('.');
                        err.error_method = parts[0] || null;
                        err.error_entity = parts[1] || null;
                        err.error_field = parts[2] || null;
                        this.error('Erro de validação! Campo: ' + err.error_field + ' , Descrição: ' + err.error_description);
                    }
                    break;
                default:
                    for (var _b = 0, _c = httpError.error; _b < _c.length; _b++) {
                        var error = _c[_b];
                        var description = '';
                        if (typeof error.error_description === 'string') {
                            description = error.error_description;
                        }
                        else if (typeof error.error_description === 'object' && error.error_description.error_code) {
                            description = 'Código de erro: ' + error.error_description.error_code;
                        }
                        this.error('Erro: ' + error.error + ' ' + description);
                    }
                    break;
            }
        }
    };
    NotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _demoiselle_http__WEBPACK_IMPORTED_MODULE_2__["ExceptionService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/core/sw.service.ts":
/*!************************************!*\
  !*** ./src/app/core/sw.service.ts ***!
  \************************************/
/*! exports provided: ServiceWorkerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceWorkerService", function() { return ServiceWorkerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.service */ "./src/app/core/notification.service.ts");
/* harmony import */ var _demoiselle_security__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @demoiselle/security */ "./node_modules/@demoiselle/security/dist/index.js");
/* harmony import */ var _demoiselle_security__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_demoiselle_security__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ServiceWorkerService = /** @class */ (function () {
    function ServiceWorkerService(swPush, swUpdate, http, 
    // private subscriptionService: SubscriptionService,
    notificationService, router, authService) {
        this.swPush = swPush;
        this.swUpdate = swUpdate;
        this.http = http;
        this.notificationService = notificationService;
        this.router = router;
        this.authService = authService;
        // tslint:disable-next-line:max-line-length
        this.VAPID_PUBLIC_KEY = new Uint8Array([]);
        this.subscribeToUpdates();
    }
    ServiceWorkerService.prototype.startWebPush = function () {
        this.askPermission();
    };
    ServiceWorkerService.prototype.askPermission = function () {
        var _this = this;
        if ('Notification' in window && this.swPush.isEnabled) {
            var promiseChain = new Promise(function (resolve, reject) {
                var permissionPromise = Notification.requestPermission(function (result) {
                    resolve(result);
                });
                if (permissionPromise) {
                    permissionPromise.then(resolve);
                }
            })
                .then(function (result) {
                if (result === 'granted') {
                    _this.subscribeToPush();
                }
                else {
                    console.warn('Permission for notifications was denied');
                }
            });
        }
        // if ('Notification' in window && this.swPush.isEnabled) {
        //       Notification.requestPermission(permission => {
        //           // If the user accepts, let's create a notification
        //           // console.debug({ permission });
        //           this.permission = permission;
        //           if (permission === 'denied') {
        //               console.warn('Permission for notifications was denied');
        //           }
        //           return permission;
        //       });
        //   } else {
        //     console.warn('Browser do not support Service Worker or it is not enabled');
        //   }
    };
    ServiceWorkerService.prototype.subscribeToPush = function () {
        var _this = this;
        console.log('going to subscribe to push service....');
        navigator.serviceWorker.ready.then(function (serviceWorkerRegistration) {
            serviceWorkerRegistration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: _this.VAPID_PUBLIC_KEY
            })
                .then(function (pushSubscription) {
                console.log('successfully registered', pushSubscription);
                // this.askPermission();
                // this.subscribeToPushMessages();
                // send subscription to backend
                // this.subscriptionService.saveSubscription(pushSubscription).subscribe(
                //   res => {
                //     console.log('subscription successfully saved in backend');
                //   }
                // );
            });
        });
    };
    ServiceWorkerService.prototype.doLogout = function () {
        this.authService.logout();
        this.router.navigateByUrl('/login');
    };
    ServiceWorkerService.prototype.unsubscribeFromPushAndDoLogout = function () {
        var _this = this;
        // if SW not enabled or supported
        if (!this.swPush.isEnabled) {
            // tslint:disable-next-line:no-console
            console.debug('SW not enabled or supported');
            this.doLogout();
            return;
        }
        // if we do not have one registration
        // NOTE: using getRegistration() because ready not firing when using ng serve
        navigator.serviceWorker.getRegistration().then(function (reg) {
            console.log('[App] testing getRegistration: ', reg);
            if (!reg) {
                _this.doLogout();
                return;
            }
        });
        navigator.serviceWorker.ready.then(function (reg) {
            if (!reg) {
                _this.doLogout();
                return;
            }
            reg.pushManager.getSubscription().then(function (pushSubscription) {
                console.log('[App] pushSubscription', pushSubscription);
                // Se não tivermos uma subscrição, fazemos logout
                if (!pushSubscription) {
                    _this.doLogout();
                    return;
                }
                // Delete the subscription from the backend
                // this.subscriptionService.removeSubscription(pushSubscription).subscribe(
                //   res => {
                //     console.log('[App] Subscription removed from backend!', res);
                //     // Unsubscribe current client (browser)
                //     pushSubscription.unsubscribe().then(success => {
                //         console.log('[App] Unsubscription successful', success);
                //     }).catch(err => {
                //         console.log('[App] Unsubscription failed', err);
                //     });
                //     this.doLogout();
                //   },
                //   err => {
                //     console.log('[App] Error removing subscription from backend', err);
                //     this.doLogout();
                //   }
                // );
            }).catch(function (err) {
                console.log('Error during getSubscription()', err);
                _this.doLogout();
            });
        });
    };
    ServiceWorkerService.prototype.subscribeToUpdates = function () {
        var _this = this;
        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe(function () {
                // if (confirm('Nova versão disponível. Carregar?')) {
                _this.swUpdate.activateUpdate().then(function () {
                    console.log('[App] SwUpdate: Loading new app version');
                    window.location.reload();
                });
                // }
            });
        }
    };
    /**
     * Subscreve para ouvir mensagens web 'push'
     * Utilize apenas se deseja tratar/exibir as mensagens na aplicação. Ex: Barra de notificações.
     * Obs: Recebe mensagens de web push apenas com a aplicação aberta
     *      Para exibir notificações mesmo com a app fechada, ver service worker sw-push.js
     */
    ServiceWorkerService.prototype.subscribeToPushMessages = function () {
        var _this = this;
        if (this.swPush.isEnabled) {
            this.swPush.messages.subscribe(function (message) {
                console.log({ message: message });
                _this.notificationService.notification('Demanda alterada!', 'Demanda ' + message['workItemId'] + ' - Situação alterada de ' + message['beforeState'] + ' para ' + message['afterState']);
                // TODO: call notify with message details
                // this.notify(notification['title'], options);
            }, function (error) {
                console.log('Erro ao receber notificação!', error);
            });
        }
        else {
            console.warn('Browser do not support Service Worker or it is not enabled');
        }
    };
    ServiceWorkerService.prototype.notify = function (title, options) {
        if (options === void 0) { options = {}; }
        if (!('Notification' in window)) {
            throw new Error('This browser does not support system notifications');
        }
        if (this.permission === 'granted') {
            // If it's okay let's create a notification
            return new Notification(title, options);
        }
    };
    ServiceWorkerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwPush"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _demoiselle_security__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ServiceWorkerService);
    return ServiceWorkerService;
}());



/***/ }),

/***/ "./src/app/core/util.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/util.service.ts ***!
  \**************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UtilService = /** @class */ (function () {
    function UtilService(http) {
        this.http = http;
    }
    UtilService.prototype.loadEntityListAsPromise = function (entityName) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + ("v1/" + entityName + "?fields=id,description");
        return new Promise(function (resolve, reject) {
            _this.http.get(url).subscribe(function (value) {
                resolve(value);
            });
        });
    };
    UtilService.prototype.loadAllEntityListAsPromise = function (entityList) {
        var _this = this;
        var promises = entityList.map(function (e) { return _this.loadEntityListAsPromise(e); });
        return Promise.all(promises);
    };
    UtilService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UtilService);
    return UtilService;
}());



/***/ }),

/***/ "./src/app/core/websocket.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/websocket.service.ts ***!
  \*******************************************/
/*! exports provided: WebSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketService", function() { return WebSocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WebSocketService = /** @class */ (function () {
    function WebSocketService() {
        this.wsSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.events = this.wsSource.asObservable();
        this.wsConnection = null;
    }
    WebSocketService.prototype.connect = function (socketUrl) {
        var _this = this;
        if (socketUrl === void 0) { socketUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].socketUrl; }
        return new Promise(function (resolve, reject) {
            // check if the browser support WebSocket
            var support = window && 'WebSocket' in window;
            if (!support) {
                return reject(new Error('Not support for WebSocket.'));
            }
            if (_this.wsConnection && _this.ws.readyState === _this.ws.OPEN) {
                return resolve(_this.wsConnection);
            }
            // create ws
            if (!_this.ws) {
                _this.ws = new WebSocket(socketUrl);
                // this.ws.onopen = this.onOpen.bind(this);
                _this.ws.onclose = _this.onClose.bind(_this);
                _this.ws.onmessage = _this.onMessage.bind(_this);
                _this.ws.onerror = _this.onError.bind(_this);
            }
            // create result instance
            _this.wsConnection = {
                send: function (data) {
                    return _this.ws.send(JSON.stringify(data));
                },
            };
            _this.ws.onopen = function () {
                // console.debug('[WS] onopened.')
                resolve(_this.wsConnection);
            };
        });
    };
    WebSocketService.prototype.onClose = function (event) {
        // console.debug('[WS] onclose:', event);
        this.wsSource.next(event);
    };
    WebSocketService.prototype.onMessage = function (event) {
        // console.debug('[WS] onmessage:', event);
        this.wsSource.next(event);
    };
    WebSocketService.prototype.onError = function (event) {
        // console.debug('[WS] onerror:', event);
        this.wsSource.next(event);
    };
    WebSocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], WebSocketService);
    return WebSocketService;
}());



/***/ }),

/***/ "./src/app/shared/layout/components/app-aside/app-aside.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/layout/components/app-aside/app-aside.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"aside-menu\">\n  \n</aside>\n"

/***/ }),

/***/ "./src/app/shared/layout/components/app-aside/app-aside.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/layout/components/app-aside/app-aside.component.ts ***!
  \***************************************************************************/
/*! exports provided: AppAside */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppAside", function() { return AppAside; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppAside = /** @class */ (function () {
    function AppAside(el) {
        this.el = el;
    }
    //wait for the component to render completely
    AppAside.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement, parentElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    };
    AppAside = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aside',
            template: __webpack_require__(/*! ./app-aside.component.html */ "./src/app/shared/layout/components/app-aside/app-aside.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AppAside);
    return AppAside;
}());



/***/ }),

/***/ "./src/app/shared/layout/components/app-aside/index.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/layout/components/app-aside/index.ts ***!
  \*************************************************************/
/*! exports provided: AppAside */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_aside_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-aside.component */ "./src/app/shared/layout/components/app-aside/app-aside.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppAside", function() { return _app_aside_component__WEBPACK_IMPORTED_MODULE_0__["AppAside"]; });




/***/ }),

/***/ "./src/app/shared/layout/components/app-breadcrumbs/app-breadcrumbs.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/shared/layout/components/app-breadcrumbs/app-breadcrumbs.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AppBreadcrumbs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBreadcrumbs", function() { return AppBreadcrumbs; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppBreadcrumbs = /** @class */ (function () {
    function AppBreadcrumbs(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            _this.breadcrumbs = [];
            var currentRoute = _this.route.root, url = '';
            do {
                var childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(function (route) {
                    if (route.outlet === 'primary') {
                        var routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map(function (segment) { return segment.path; }).join('/');
                        _this.breadcrumbs.push({
                            label: route.snapshot.data,
                            url: url
                        });
                        currentRoute = route;
                    }
                });
            } while (currentRoute);
        });
    }
    AppBreadcrumbs = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumbs',
            template: "\n  <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs\" let-last = last>\n    <li class=\"breadcrumb-item\"\n        *ngIf=\"breadcrumb.label.title&&breadcrumb.url.substring(breadcrumb.url.length-1) == '/'||breadcrumb.label.title&&last\"\n        [ngClass]=\"{active: last}\">\n      <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</a>\n      <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</span>\n    </li>\n  </ng-template>"
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AppBreadcrumbs);
    return AppBreadcrumbs;
}());



/***/ }),

/***/ "./src/app/shared/layout/components/app-breadcrumbs/index.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/layout/components/app-breadcrumbs/index.ts ***!
  \*******************************************************************/
/*! exports provided: AppBreadcrumbs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-breadcrumbs.component */ "./src/app/shared/layout/components/app-breadcrumbs/app-breadcrumbs.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppBreadcrumbs", function() { return _app_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__["AppBreadcrumbs"]; });




/***/ }),

/***/ "./src/app/shared/layout/components/app-footer/app-footer.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/layout/components/app-footer/app-footer.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"app-footer\">\n  \n</footer>\n"

/***/ }),

/***/ "./src/app/shared/layout/components/app-footer/app-footer.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/layout/components/app-footer/app-footer.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AppFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFooter", function() { return AppFooter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppFooter = /** @class */ (function () {
    function AppFooter(el) {
        this.el = el;
    }
    //wait for the component to render completely
    AppFooter.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement, parentElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    };
    AppFooter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./app-footer.component.html */ "./src/app/shared/layout/components/app-footer/app-footer.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AppFooter);
    return AppFooter;
}());



/***/ }),

/***/ "./src/app/shared/layout/components/app-footer/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/layout/components/app-footer/index.ts ***!
  \**************************************************************/
/*! exports provided: AppFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-footer.component */ "./src/app/shared/layout/components/app-footer/app-footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppFooter", function() { return _app_footer_component__WEBPACK_IMPORTED_MODULE_0__["AppFooter"]; });




/***/ }),

/***/ "./src/app/shared/layout/components/app-header/app-header.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/layout/components/app-header/app-header.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar\">\n  <button class=\"navbar-toggler d-lg-none\" type=\"button\" appMobileSidebarToggler>&#9776;</button>\n  <a class=\"navbar-brand\" href=\"#\"></a>\n  <button class=\"navbar-toggler d-md-down-none mr-auto\" type=\"button\" appSidebarToggler>&#9776;</button>\n\n  <ul class=\"nav navbar-nav ml-auto\">\n    <!--<li class=\"nav-item dropdown d-md-down-none\" dropdown placement=\"bottom right\">\n      <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle (click)=\"false\">\n        <i class=\"icon-bell\"></i><span class=\"badge badge-pill badge-danger\">5</span>\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-lg\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\n        <div class=\"dropdown-header text-center\"><strong>You have 5 notifications</strong></div>\n        <a href=\"#\" class=\"dropdown-item\">\n          <i class=\"icon-user-follow text-success\"></i> New user registered\n        </a>\n        <a href=\"#\" class=\"dropdown-item\">\n          <i class=\"icon-user-unfollow text-danger\"></i> User deleted\n        </a>\n        <a href=\"#\" class=\"dropdown-item\">\n          <i class=\"icon-chart text-info\"></i> Sales report is ready\n        </a>\n        <a href=\"#\" class=\"dropdown-item\">\n          <i class=\"icon-basket-loaded text-primary\"></i> New client\n        </a>\n        <a href=\"#\" class=\"dropdown-item\">\n          <i class=\"icon-speedometer text-warning\"></i> Server overloaded\n        </a>\n        <div class=\"dropdown-header text-center\"><strong>Server</strong></div>\n        <a href=\"#\" class=\"dropdown-item\">\n          <div class=\"text-uppercase mb-1\"><small><b>CPU Usage</b></small></div>\n          <span class=\"progress progress-xs\">\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </span>\n          <small class=\"text-muted\">348 Processes. 1/4 Cores.</small>\n        </a>\n        <a href=\"#\" class=\"dropdown-item\">\n          <div class=\"text-uppercase mb-1\"><small><b>Memory Usage</b></small></div>\n          <span class=\"progress progress-xs\">\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 70%\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </span>\n          <small class=\"text-muted\">11444GB/16384MB</small>\n        </a>\n        <a href=\"#\" class=\"dropdown-item\">\n          <div class=\"text-uppercase mb-1\"><small><b>SSD 1 Usage</b></small></div>\n          <span class=\"progress progress-xs\">\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 95%\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </span>\n          <small class=\"text-muted\">243GB/256GB</small>\n        </a>\n      </div>\n    </li>\n    -->\n\n\n    <!-- FOR EXAMPLE OF NOTIFICATIONS LOOK THE ABOVE COMMENTED CODE -->\n    <li class=\"nav-item dropdown d-md-down-none\" dropdown placement=\"bottom right\">\n      <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle (click)=\"false\">\n        <i class=\"icon-bell\"></i>\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-lg animated anim-fast fadeIn\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\n        <div class=\"dropdown-header text-center\"><strong>Notificações</strong></div>\n        <a href=\"#\" class=\"dropdown-item\">\n          <i class=\"icon-check text-success\"></i> Não há novas notificações\n        </a>\n      </div>\n    </li>\n\n\n    <li class=\"nav-item dropdown d-md-down-none\" dropdown placement=\"bottom right\">\n      <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle (click)=\"false\">\n        <i class=\"icon-people\">\n          <span class=\"badge badge-pill badge-info\">{{totalUsers}}</span>\n        </i>\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-lg animated anim-fast fadeIn\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\n        <div class=\"dropdown-header text-center\"><strong>Usuários ({{connectedUsers.length}}/{{totalUsers}})</strong></div>\n        <a class=\"dropdown-item\" href=\"#\" *ngFor=\"let user of connectedUsers\">\n          <div class=\"message\">\n            <div class=\"py-3 mr-3 float-left\">\n              <div class=\"avatar\">\n                <img alt=\"avatar\" class=\"img-avatar\" src=\"assets/img/avatars/9.jpg\">\n                <span class=\"avatar-status badge-success\"></span>\n              </div>\n            </div>\n            <div class=\"text-truncate font-weight-bold\">{{user.name}}</div>\n            <div class=\"small text-muted text-truncate\">{{user.role}}</div>\n            <div class=\"small text-muted text-truncate\">{{user.email}}</div>\n          </div>\n        </a>\n      </div>\n    </li>\n\n\n    <li class=\"nav-item d-md-down-none\">\n      <a class=\"nav-link\" href=\"#\"><i class=\"icon-location-pin\"></i></a>\n    </li>\n    <li class=\"nav-item dropdown\" dropdown placement=\"bottom right\">\n      <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle (click)=\"false\">\n        <img src=\"assets/img/avatars/9.jpg\" class=\"img-avatar\" alt=\"admin@demoiselle.org\"/>\n        <span class=\"d-md-down-none\"><!--User name --></span>\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right animated anim-fast fadeIn\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\n        <div class=\"dropdown-header text-center\">\n          <strong *ngIf=\"!user\">Conta</strong>\n          <div *ngIf=\"user\">\n            <strong>{{ user.name }}</strong>\n            <br>\n            <small>{{ user.id }}</small>\n          </div>\n        </div>\n        <!--\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user\"></i> Profile</a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-wrench\"></i> Setting</a>\n        -->\n        <button role=\"button\" *ngIf=\"isLoggedIn()\" class=\"dropdown-item\" (click)=\"logout()\"><i class=\"fa fa-sign-out\"></i> Sair</button>\n        <a role=\"button\" *ngIf=\"!isLoggedIn()\" class=\"dropdown-item\" href=\"/#/login\"><i class=\"fa fa-sign-in\"></i> Entrar</a>\n      </div>\n    </li>\n    <button class=\"navbar-toggler d-md-down-none\" type=\"button\" appAsideMenuToggler>&#9776;</button>\n  </ul>\n</header>\n"

/***/ }),

/***/ "./src/app/shared/layout/components/app-header/app-header.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/layout/components/app-header/app-header.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AppHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeader", function() { return AppHeader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _demoiselle_security__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demoiselle/security */ "./node_modules/@demoiselle/security/dist/index.js");
/* harmony import */ var _demoiselle_security__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_demoiselle_security__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/websocket.service */ "./src/app/core/websocket.service.ts");
/* harmony import */ var _core_sw_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/sw.service */ "./src/app/core/sw.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppHeader = /** @class */ (function () {
    function AppHeader(el, router, authService, tokenService, webSocketService, serviceWorkerService) {
        this.el = el;
        this.router = router;
        this.authService = authService;
        this.tokenService = tokenService;
        this.webSocketService = webSocketService;
        this.serviceWorkerService = serviceWorkerService;
        this.connectedUsers = [];
        this.totalUsers = 0;
    }
    AppHeader.prototype.ngOnInit = function () {
        var _this = this;
        // wait for the component to render completely
        var nativeElement = this.el.nativeElement;
        var parentElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
        this.webSocketService.events.subscribe(function (wsEvent) {
            var result = JSON.parse(wsEvent.data || '{}');
            var event = result.event;
            var data = result.data;
            switch (event) {
                case 'count':
                    _this.handleCountEvent(data);
                    break;
                case 'list':
                    _this.handleListEvent(data);
                    break;
                default:
                    console.warn('Not implemented yet. "event" == ', event);
                    break;
            }
        });
        if (this.isLoggedIn()) {
            this.webSocketService.connect()
                .then(function (wsConnection) {
                // console.debug('[WS] conectado.');
                _this.user = {
                    id: _this.tokenService.getIdentityFromToken(),
                    name: _this.tokenService.getNameFromToken(),
                    roles: _this.tokenService.getRolesFromToken()
                };
                wsConnection.send({
                    event: 'login',
                    data: _this.user.id
                });
            })
                .catch(function (error) { return console.error('Erro ao conectar com WebSocket.', error); });
        }
    };
    AppHeader.prototype.isLoggedIn = function () {
        return this.authService.isAuthenticated();
    };
    AppHeader.prototype.logout = function () {
        this.serviceWorkerService.unsubscribeFromPushAndDoLogout();
    };
    AppHeader.prototype.handleCountEvent = function (data) {
        this.totalUsers = data;
    };
    AppHeader.prototype.handleListEvent = function (data) {
        var users = JSON.parse(data).map(function (user) {
            var obj = user.split(':');
            var index = 0;
            return {
                name: obj[index++],
                email: obj[index++],
                role: obj[index++],
            };
        });
        this.connectedUsers = users;
        // console.debug({ users });
    };
    AppHeader = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./app-header.component.html */ "./src/app/shared/layout/components/app-header/app-header.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _demoiselle_security__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _demoiselle_security__WEBPACK_IMPORTED_MODULE_2__["TokenService"],
            _core_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebSocketService"],
            _core_sw_service__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerService"]])
    ], AppHeader);
    return AppHeader;
}());



/***/ }),

/***/ "./src/app/shared/layout/components/app-header/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/layout/components/app-header/index.ts ***!
  \**************************************************************/
/*! exports provided: AppHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-header.component */ "./src/app/shared/layout/components/app-header/app-header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppHeader", function() { return _app_header_component__WEBPACK_IMPORTED_MODULE_0__["AppHeader"]; });




/***/ }),

/***/ "./src/app/shared/layout/components/app-sidebar-footer/app-sidebar-footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/layout/components/app-sidebar-footer/app-sidebar-footer.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"sidebar-footer\"></div> -->\n"

/***/ }),

/***/ "./src/app/shared/layout/components/app-sidebar-footer/app-sidebar-footer.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/shared/layout/components/app-sidebar-footer/app-sidebar-footer.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AppSidebarFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarFooter", function() { return AppSidebarFooter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppSidebarFooter = /** @class */ (function () {
    function AppSidebarFooter(el) {
        this.el = el;
    }
    //wait for the component to render completely
    AppSidebarFooter.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement, parentElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    };
    AppSidebarFooter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar-footer',
            template: __webpack_require__(/*! ./app-sidebar-footer.component.html */ "./src/app/shared/layout/components/app-sidebar-footer/app-sidebar-footer.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AppSidebarFooter);
    return AppSidebarFooter;
}());



/***/ }),

/***/ "./src/app/shared/layout/components/app-sidebar-footer/index.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/layout/components/app-sidebar-footer/index.ts ***!
  \**********************************************************************/
/*! exports provided: AppSidebarFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_sidebar_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-sidebar-footer.component */ "./src/app/shared/layout/components/app-sidebar-footer/app-sidebar-footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebarFooter", function() { return _app_sidebar_footer_component__WEBPACK_IMPORTED_MODULE_0__["AppSidebarFooter"]; });




/***/ }),

/***/ "./src/app/shared/layout/components/app-sidebar-form/app-sidebar-form.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/layout/components/app-sidebar-form/app-sidebar-form.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <form class=\"sidebar-form\"></form> -->\n"

/***/ }),

/***/ "./src/app/shared/layout/components/app-sidebar-form/app-sidebar-form.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/layout/components/app-sidebar-form/app-sidebar-form.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AppSidebarForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarForm", function() { return AppSidebarForm; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppSidebarForm = /** @class */ (function () {
    function AppSidebarForm(el) {
        this.el = el;
    }
    //wait for the component to render completely
    AppSidebarForm.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement, parentElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    };
    AppSidebarForm = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar-form',
            template: __webpack_require__(/*! ./app-sidebar-form.component.html */ "./src/app/shared/layout/components/app-sidebar-form/app-sidebar-form.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AppSidebarForm);
    return AppSidebarForm;
}());



/***/ }),

/***/ "./src/app/shared/layout/components/app-sidebar-form/index.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/layout/components/app-sidebar-form/index.ts ***!
  \********************************************************************/
/*! exports provided: AppSidebarForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_sidebar_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-sidebar-form.component */ "./src/app/shared/layout/components/app-sidebar-form/app-sidebar-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebarForm", function() { return _app_sidebar_form_component__WEBPACK_IMPORTED_MODULE_0__["AppSidebarForm"]; });




/***/ }),

/***/ "./src/app/shared/layout/components/app-sidebar-header/app-sidebar-header.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/layout/components/app-sidebar-header/app-sidebar-header.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"sidebar-header\"></div> -->\n"

/***/ }),

/***/ "./src/app/shared/layout/components/app-sidebar-header/app-sidebar-header.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/shared/layout/components/app-sidebar-header/app-sidebar-header.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AppSidebarHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarHeader", function() { return AppSidebarHeader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppSidebarHeader = /** @class */ (function () {
    function AppSidebarHeader(el) {
        this.el = el;
    }
    //wait for the component to render completely
    AppSidebarHeader.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement, parentElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    };
    AppSidebarHeader = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar-header',
            template: __webpack_require__(/*! ./app-sidebar-header.component.html */ "./src/app/shared/layout/components/app-sidebar-header/app-sidebar-header.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AppSidebarHeader);
    return AppSidebarHeader;
}());



/***/ }),

/***/ "./src/app/shared/layout/components/app-sidebar-header/index.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/layout/components/app-sidebar-header/index.ts ***!
  \**********************************************************************/
/*! exports provided: AppSidebarHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_sidebar_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-sidebar-header.component */ "./src/app/shared/layout/components/app-sidebar-header/app-sidebar-header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebarHeader", function() { return _app_sidebar_header_component__WEBPACK_IMPORTED_MODULE_0__["AppSidebarHeader"]; });




/***/ }),

/***/ "./src/app/shared/layout/components/app-sidebar-minimizer/app-sidebar-minimizer.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/shared/layout/components/app-sidebar-minimizer/app-sidebar-minimizer.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"sidebar-minimizer\" type=\"button\" appSidebarMinimizer appBrandMinimizer></button>\n"

/***/ }),

/***/ "./src/app/shared/layout/components/app-sidebar-minimizer/app-sidebar-minimizer.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/shared/layout/components/app-sidebar-minimizer/app-sidebar-minimizer.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AppSidebarMinimizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarMinimizer", function() { return AppSidebarMinimizer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppSidebarMinimizer = /** @class */ (function () {
    function AppSidebarMinimizer(el) {
        this.el = el;
    }
    //wait for the component to render completely
    AppSidebarMinimizer.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement, parentElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    };
    AppSidebarMinimizer = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar-minimizer',
            template: __webpack_require__(/*! ./app-sidebar-minimizer.component.html */ "./src/app/shared/layout/components/app-sidebar-minimizer/app-sidebar-minimizer.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AppSidebarMinimizer);
    return AppSidebarMinimizer;
}());



/***/ }),

/***/ "./src/app/shared/layout/components/app-sidebar-minimizer/index.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/layout/components/app-sidebar-minimizer/index.ts ***!
  \*************************************************************************/
/*! exports provided: AppSidebarMinimizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_sidebar_minimizer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-sidebar-minimizer.component */ "./src/app/shared/layout/components/app-sidebar-minimizer/app-sidebar-minimizer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebarMinimizer", function() { return _app_sidebar_minimizer_component__WEBPACK_IMPORTED_MODULE_0__["AppSidebarMinimizer"]; });




/***/ }),

/***/ "./src/app/shared/layout/components/app-sidebar/app-sidebar.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/layout/components/app-sidebar/app-sidebar.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\n  <app-sidebar-header></app-sidebar-header>\n  <app-sidebar-form></app-sidebar-form>\n  <nav class=\"sidebar-nav\">\n    <ul class=\"nav\">\n      <li class=\"nav-title\">\n        Navegação\n      </li>\n\n<!-- ROUTES FROM APP.ROUTING MODULE CHILDREN ARE AUTOMATICALLY ADDED  -->\n      <li class=\"nav-item\" *ngFor=\"let route of routes\">\n        <a routerLinkActive=\"active\" [routerLink]=\"['/' + route.path]\" class=\"nav-link\">\n          <i class=\"{{route.data.icon}}\"></i> {{route.data.title}}\n        </a>\n      </li>\n\n<!-- IF YOU WANT TO ADD EXTRA/FIXED NAVIGATION ENTRIES, PUT THEM LIKE BELOW -->\n\n      <!--<li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\"><i class=\"icon-speedometer\"></i> Dashboard <span class=\"badge badge-info\">NEW</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/user']\">\n          <i class=\"icon-speedometer\"></i> Usuários\n        </a>\n      </li> -->\n\n\n    </ul>\n\n    \n\n  </nav>\n  <app-sidebar-footer></app-sidebar-footer>\n  <app-sidebar-minimizer></app-sidebar-minimizer>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/layout/components/app-sidebar/app-sidebar.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/layout/components/app-sidebar/app-sidebar.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AppSidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebar", function() { return AppSidebar; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _demoiselle_security__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demoiselle/security */ "./node_modules/@demoiselle/security/dist/index.js");
/* harmony import */ var _demoiselle_security__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_demoiselle_security__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppSidebar = /** @class */ (function () {
    function AppSidebar(el, router, authService) {
        this.el = el;
        this.router = router;
        this.authService = authService;
        /**
         * app-routing.module children routes for automatic addition to the navigation
         */
        this.routes = [];
        for (var i = 0; i < this.router.config.length; i++) {
            var rootRoute = this.router.config[i];
            // add root routes (not lazy loaded module)
            if (rootRoute.data && rootRoute.data.showInSidebar) {
                var roles = rootRoute.data.roles || null;
                if (roles == null || authService.isAuthorized(roles)) {
                    this.routes.push(rootRoute);
                }
            }
            // add children routes (lazy loaded module)
            if (rootRoute.children && rootRoute.children.length) {
                for (var j = 0; j < rootRoute.children.length; j++) {
                    var childRoute = rootRoute.children[j];
                    if (childRoute.data && childRoute.data.showInSidebar) {
                        var roles = childRoute.data.roles || null;
                        if (roles == null || authService.isAuthorized(roles)) {
                            this.routes.push(childRoute);
                        }
                    }
                }
            }
        }
    }
    //wait for the component to render completely
    AppSidebar.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement, parentElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    };
    AppSidebar = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./app-sidebar.component.html */ "./src/app/shared/layout/components/app-sidebar/app-sidebar.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _demoiselle_security__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppSidebar);
    return AppSidebar;
}());



/***/ }),

/***/ "./src/app/shared/layout/components/app-sidebar/index.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/layout/components/app-sidebar/index.ts ***!
  \***************************************************************/
/*! exports provided: AppSidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-sidebar.component */ "./src/app/shared/layout/components/app-sidebar/app-sidebar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebar", function() { return _app_sidebar_component__WEBPACK_IMPORTED_MODULE_0__["AppSidebar"]; });




/***/ }),

/***/ "./src/app/shared/layout/components/index.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/layout/components/index.ts ***!
  \***************************************************/
/*! exports provided: AppAside, AppBreadcrumbs, AppFooter, AppHeader, AppSidebar, AppSidebarFooter, AppSidebarForm, AppSidebarHeader, AppSidebarMinimizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_aside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-aside */ "./src/app/shared/layout/components/app-aside/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppAside", function() { return _app_aside__WEBPACK_IMPORTED_MODULE_0__["AppAside"]; });

/* harmony import */ var _app_breadcrumbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-breadcrumbs */ "./src/app/shared/layout/components/app-breadcrumbs/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppBreadcrumbs", function() { return _app_breadcrumbs__WEBPACK_IMPORTED_MODULE_1__["AppBreadcrumbs"]; });

/* harmony import */ var _app_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-footer */ "./src/app/shared/layout/components/app-footer/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppFooter", function() { return _app_footer__WEBPACK_IMPORTED_MODULE_2__["AppFooter"]; });

/* harmony import */ var _app_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-header */ "./src/app/shared/layout/components/app-header/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppHeader", function() { return _app_header__WEBPACK_IMPORTED_MODULE_3__["AppHeader"]; });

/* harmony import */ var _app_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-sidebar */ "./src/app/shared/layout/components/app-sidebar/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebar", function() { return _app_sidebar__WEBPACK_IMPORTED_MODULE_4__["AppSidebar"]; });

/* harmony import */ var _app_sidebar_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-sidebar-footer */ "./src/app/shared/layout/components/app-sidebar-footer/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebarFooter", function() { return _app_sidebar_footer__WEBPACK_IMPORTED_MODULE_5__["AppSidebarFooter"]; });

/* harmony import */ var _app_sidebar_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-sidebar-form */ "./src/app/shared/layout/components/app-sidebar-form/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebarForm", function() { return _app_sidebar_form__WEBPACK_IMPORTED_MODULE_6__["AppSidebarForm"]; });

/* harmony import */ var _app_sidebar_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-sidebar-header */ "./src/app/shared/layout/components/app-sidebar-header/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebarHeader", function() { return _app_sidebar_header__WEBPACK_IMPORTED_MODULE_7__["AppSidebarHeader"]; });

/* harmony import */ var _app_sidebar_minimizer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-sidebar-minimizer */ "./src/app/shared/layout/components/app-sidebar-minimizer/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebarMinimizer", function() { return _app_sidebar_minimizer__WEBPACK_IMPORTED_MODULE_8__["AppSidebarMinimizer"]; });












/***/ }),

/***/ "./src/app/shared/layout/containers/full-layout/full-layout.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/layout/containers/full-layout/full-layout.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-progress></ng-progress>\n<app-header></app-header>\n<div class=\"app-body\">\n  <app-sidebar></app-sidebar>\n  <!-- Main content -->\n  <main class=\"main\">\n    <!-- Breadcrumb -->\n    <ol class=\"breadcrumb\">\n      <app-breadcrumbs></app-breadcrumbs>\n    </ol>\n    <div class=\"container-fluid\">\n      <router-outlet></router-outlet>\n    </div><!-- /.conainer-fluid -->\n  </main>\n  <app-aside></app-aside>\n</div>\n<!--<app-footer></app-footer>-->\n"

/***/ }),

/***/ "./src/app/shared/layout/containers/full-layout/full-layout.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/layout/containers/full-layout/full-layout.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FullLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLayout", function() { return FullLayout; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FullLayout = /** @class */ (function () {
    function FullLayout() {
    }
    // public disabled = false;
    // public status: {isopen: boolean} = {isopen: false};
    //
    // public toggled(open: boolean): void {
    //   console.log('Dropdown is now: ', open);
    // }
    //
    // public toggleDropdown($event: MouseEvent): void {
    //   $event.preventDefault();
    //   $event.stopPropagation();
    //   this.status.isopen = !this.status.isopen;
    // }
    FullLayout.prototype.ngOnInit = function () { };
    FullLayout = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./full-layout.component.html */ "./src/app/shared/layout/containers/full-layout/full-layout.component.html")
        })
    ], FullLayout);
    return FullLayout;
}());



/***/ }),

/***/ "./src/app/shared/layout/containers/full-layout/index.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/layout/containers/full-layout/index.ts ***!
  \***************************************************************/
/*! exports provided: FullLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _full_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./full-layout.component */ "./src/app/shared/layout/containers/full-layout/full-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FullLayout", function() { return _full_layout_component__WEBPACK_IMPORTED_MODULE_0__["FullLayout"]; });




/***/ }),

/***/ "./src/app/shared/layout/containers/index.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/layout/containers/index.ts ***!
  \***************************************************/
/*! exports provided: FullLayout, SimpleLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _full_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./full-layout */ "./src/app/shared/layout/containers/full-layout/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FullLayout", function() { return _full_layout__WEBPACK_IMPORTED_MODULE_0__["FullLayout"]; });

/* harmony import */ var _simple_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple-layout */ "./src/app/shared/layout/containers/simple-layout/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleLayout", function() { return _simple_layout__WEBPACK_IMPORTED_MODULE_1__["SimpleLayout"]; });





/***/ }),

/***/ "./src/app/shared/layout/containers/simple-layout/index.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/layout/containers/simple-layout/index.ts ***!
  \*****************************************************************/
/*! exports provided: SimpleLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _simple_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simple-layout.component */ "./src/app/shared/layout/containers/simple-layout/simple-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleLayout", function() { return _simple_layout_component__WEBPACK_IMPORTED_MODULE_0__["SimpleLayout"]; });




/***/ }),

/***/ "./src/app/shared/layout/containers/simple-layout/simple-layout.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/layout/containers/simple-layout/simple-layout.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SimpleLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleLayout", function() { return SimpleLayout; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SimpleLayout = /** @class */ (function () {
    function SimpleLayout() {
    }
    SimpleLayout.prototype.ngOnInit = function () { };
    SimpleLayout = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: '<router-outlet></router-outlet>',
        }),
        __metadata("design:paramtypes", [])
    ], SimpleLayout);
    return SimpleLayout;
}());



/***/ }),

/***/ "./src/app/shared/layout/directives/aside/aside.directive.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/layout/directives/aside/aside.directive.ts ***!
  \*******************************************************************/
/*! exports provided: AsideToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideToggleDirective", function() { return AsideToggleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
* Allows the aside to be toggled via click.
*/
var AsideToggleDirective = /** @class */ (function () {
    function AsideToggleDirective() {
    }
    AsideToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('aside-menu-hidden');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AsideToggleDirective.prototype, "toggleOpen", null);
    AsideToggleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appAsideMenuToggler]',
        }),
        __metadata("design:paramtypes", [])
    ], AsideToggleDirective);
    return AsideToggleDirective;
}());



/***/ }),

/***/ "./src/app/shared/layout/directives/aside/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/layout/directives/aside/index.ts ***!
  \*********************************************************/
/*! exports provided: AsideToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aside_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aside.directive */ "./src/app/shared/layout/directives/aside/aside.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsideToggleDirective", function() { return _aside_directive__WEBPACK_IMPORTED_MODULE_0__["AsideToggleDirective"]; });




/***/ }),

/***/ "./src/app/shared/layout/directives/index.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/layout/directives/index.ts ***!
  \***************************************************/
/*! exports provided: AsideToggleDirective, NavDropdownDirective, NavDropdownToggleDirective, NAV_DROPDOWN_DIRECTIVES, SidebarToggleDirective, SidebarMinimizeDirective, BrandMinimizeDirective, MobileSidebarToggleDirective, SidebarOffCanvasCloseDirective, SIDEBAR_TOGGLE_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aside */ "./src/app/shared/layout/directives/aside/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsideToggleDirective", function() { return _aside__WEBPACK_IMPORTED_MODULE_0__["AsideToggleDirective"]; });

/* harmony import */ var _nav_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-dropdown */ "./src/app/shared/layout/directives/nav-dropdown/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavDropdownDirective", function() { return _nav_dropdown__WEBPACK_IMPORTED_MODULE_1__["NavDropdownDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavDropdownToggleDirective", function() { return _nav_dropdown__WEBPACK_IMPORTED_MODULE_1__["NavDropdownToggleDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NAV_DROPDOWN_DIRECTIVES", function() { return _nav_dropdown__WEBPACK_IMPORTED_MODULE_1__["NAV_DROPDOWN_DIRECTIVES"]; });

/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar */ "./src/app/shared/layout/directives/sidebar/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarToggleDirective", function() { return _sidebar__WEBPACK_IMPORTED_MODULE_2__["SidebarToggleDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarMinimizeDirective", function() { return _sidebar__WEBPACK_IMPORTED_MODULE_2__["SidebarMinimizeDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrandMinimizeDirective", function() { return _sidebar__WEBPACK_IMPORTED_MODULE_2__["BrandMinimizeDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MobileSidebarToggleDirective", function() { return _sidebar__WEBPACK_IMPORTED_MODULE_2__["MobileSidebarToggleDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarOffCanvasCloseDirective", function() { return _sidebar__WEBPACK_IMPORTED_MODULE_2__["SidebarOffCanvasCloseDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_TOGGLE_DIRECTIVES", function() { return _sidebar__WEBPACK_IMPORTED_MODULE_2__["SIDEBAR_TOGGLE_DIRECTIVES"]; });






/***/ }),

/***/ "./src/app/shared/layout/directives/nav-dropdown/index.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/layout/directives/nav-dropdown/index.ts ***!
  \****************************************************************/
/*! exports provided: NavDropdownDirective, NavDropdownToggleDirective, NAV_DROPDOWN_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_dropdown_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-dropdown.directive */ "./src/app/shared/layout/directives/nav-dropdown/nav-dropdown.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavDropdownDirective", function() { return _nav_dropdown_directive__WEBPACK_IMPORTED_MODULE_0__["NavDropdownDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavDropdownToggleDirective", function() { return _nav_dropdown_directive__WEBPACK_IMPORTED_MODULE_0__["NavDropdownToggleDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NAV_DROPDOWN_DIRECTIVES", function() { return _nav_dropdown_directive__WEBPACK_IMPORTED_MODULE_0__["NAV_DROPDOWN_DIRECTIVES"]; });




/***/ }),

/***/ "./src/app/shared/layout/directives/nav-dropdown/nav-dropdown.directive.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/layout/directives/nav-dropdown/nav-dropdown.directive.ts ***!
  \*********************************************************************************/
/*! exports provided: NavDropdownDirective, NavDropdownToggleDirective, NAV_DROPDOWN_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavDropdownDirective", function() { return NavDropdownDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavDropdownToggleDirective", function() { return NavDropdownToggleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_DROPDOWN_DIRECTIVES", function() { return NAV_DROPDOWN_DIRECTIVES; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavDropdownDirective = /** @class */ (function () {
    function NavDropdownDirective(el) {
        this.el = el;
    }
    NavDropdownDirective.prototype.toggle = function () {
        this.el.nativeElement.classList.toggle('open');
    };
    NavDropdownDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appNavDropdown]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NavDropdownDirective);
    return NavDropdownDirective;
}());

/**
* Allows the dropdown to be toggled via click.
*/
var NavDropdownToggleDirective = /** @class */ (function () {
    function NavDropdownToggleDirective(dropdown) {
        this.dropdown = dropdown;
    }
    NavDropdownToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        this.dropdown.toggle();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NavDropdownToggleDirective.prototype, "toggleOpen", null);
    NavDropdownToggleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appNavDropdownToggle]'
        }),
        __metadata("design:paramtypes", [NavDropdownDirective])
    ], NavDropdownToggleDirective);
    return NavDropdownToggleDirective;
}());

var NAV_DROPDOWN_DIRECTIVES = [NavDropdownDirective, NavDropdownToggleDirective];


/***/ }),

/***/ "./src/app/shared/layout/directives/sidebar/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/layout/directives/sidebar/index.ts ***!
  \***********************************************************/
/*! exports provided: SidebarToggleDirective, SidebarMinimizeDirective, BrandMinimizeDirective, MobileSidebarToggleDirective, SidebarOffCanvasCloseDirective, SIDEBAR_TOGGLE_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidebar_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.directive */ "./src/app/shared/layout/directives/sidebar/sidebar.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarToggleDirective", function() { return _sidebar_directive__WEBPACK_IMPORTED_MODULE_0__["SidebarToggleDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarMinimizeDirective", function() { return _sidebar_directive__WEBPACK_IMPORTED_MODULE_0__["SidebarMinimizeDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrandMinimizeDirective", function() { return _sidebar_directive__WEBPACK_IMPORTED_MODULE_0__["BrandMinimizeDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MobileSidebarToggleDirective", function() { return _sidebar_directive__WEBPACK_IMPORTED_MODULE_0__["MobileSidebarToggleDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarOffCanvasCloseDirective", function() { return _sidebar_directive__WEBPACK_IMPORTED_MODULE_0__["SidebarOffCanvasCloseDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_TOGGLE_DIRECTIVES", function() { return _sidebar_directive__WEBPACK_IMPORTED_MODULE_0__["SIDEBAR_TOGGLE_DIRECTIVES"]; });




/***/ }),

/***/ "./src/app/shared/layout/directives/sidebar/sidebar.directive.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/layout/directives/sidebar/sidebar.directive.ts ***!
  \***********************************************************************/
/*! exports provided: SidebarToggleDirective, SidebarMinimizeDirective, BrandMinimizeDirective, MobileSidebarToggleDirective, SidebarOffCanvasCloseDirective, SIDEBAR_TOGGLE_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarToggleDirective", function() { return SidebarToggleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarMinimizeDirective", function() { return SidebarMinimizeDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandMinimizeDirective", function() { return BrandMinimizeDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileSidebarToggleDirective", function() { return MobileSidebarToggleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarOffCanvasCloseDirective", function() { return SidebarOffCanvasCloseDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_TOGGLE_DIRECTIVES", function() { return SIDEBAR_TOGGLE_DIRECTIVES; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
* Allows the sidebar to be toggled via click.
*/
var SidebarToggleDirective = /** @class */ (function () {
    function SidebarToggleDirective() {
    }
    SidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-hidden');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarToggleDirective.prototype, "toggleOpen", null);
    SidebarToggleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appSidebarToggler]'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarToggleDirective);
    return SidebarToggleDirective;
}());

var SidebarMinimizeDirective = /** @class */ (function () {
    function SidebarMinimizeDirective() {
    }
    SidebarMinimizeDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-minimized');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarMinimizeDirective.prototype, "toggleOpen", null);
    SidebarMinimizeDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appSidebarMinimizer]'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarMinimizeDirective);
    return SidebarMinimizeDirective;
}());

var BrandMinimizeDirective = /** @class */ (function () {
    function BrandMinimizeDirective() {
    }
    BrandMinimizeDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('brand-minimized');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], BrandMinimizeDirective.prototype, "toggleOpen", null);
    BrandMinimizeDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appBrandMinimizer]'
        }),
        __metadata("design:paramtypes", [])
    ], BrandMinimizeDirective);
    return BrandMinimizeDirective;
}());

var MobileSidebarToggleDirective = /** @class */ (function () {
    function MobileSidebarToggleDirective() {
    }
    // Check if element has class
    MobileSidebarToggleDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    MobileSidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-mobile-show');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MobileSidebarToggleDirective.prototype, "toggleOpen", null);
    MobileSidebarToggleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appMobileSidebarToggler]'
        }),
        __metadata("design:paramtypes", [])
    ], MobileSidebarToggleDirective);
    return MobileSidebarToggleDirective;
}());

/**
* Allows the off-canvas sidebar to be closed via click.
*/
var SidebarOffCanvasCloseDirective = /** @class */ (function () {
    function SidebarOffCanvasCloseDirective() {
    }
    // Check if element has class
    SidebarOffCanvasCloseDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    // Toggle element class
    SidebarOffCanvasCloseDirective.prototype.toggleClass = function (elem, elementClassName) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (this.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0) {
                newClass = newClass.replace(' ' + elementClassName + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
        else {
            elem.className += ' ' + elementClassName;
        }
    };
    SidebarOffCanvasCloseDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        if (this.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
            this.toggleClass(document.querySelector('body'), 'sidebar-opened');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarOffCanvasCloseDirective.prototype, "toggleOpen", null);
    SidebarOffCanvasCloseDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appSidebarClose]'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarOffCanvasCloseDirective);
    return SidebarOffCanvasCloseDirective;
}());

var SIDEBAR_TOGGLE_DIRECTIVES = [
    SidebarToggleDirective,
    SidebarMinimizeDirective,
    BrandMinimizeDirective,
    SidebarOffCanvasCloseDirective,
    MobileSidebarToggleDirective
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: '/app/api/',
    socketUrl: 'wss://lucianojs-handson.estaleiro.serpro/app/push/meu-canal',
    googleId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    facebookId: 'xxxxxxxxxxxxxxxxxxxxxxxx'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/03989042602/handson/demoiselle3-app-sample/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map