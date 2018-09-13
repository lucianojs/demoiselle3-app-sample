(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-register-register-module"],{

/***/ "./src/app/auth/register/register-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth/register/register-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: RegisterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterRoutingModule", function() { return RegisterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component */ "./src/app/auth/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterRoutingModule = /** @class */ (function () {
    function RegisterRoutingModule() {
    }
    RegisterRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
                    }
                ])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RegisterRoutingModule);
    return RegisterRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-md-6\">\n                <div class=\"card mx-4\">\n                    <div class=\"card-body p-4\">\n                        <h1>Registro</h1>\n                        <p class=\"text-muted\">Solicitar registro no sistema</p>\n\n                        <form name=\"loginForm\" (ngSubmit)=\"register()\" #form=\"ngForm\">\n\n                            <div class=\"input-group mb-3\">\n                                <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\n                                <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"credentials.firstName\" required minlength=\"5\" maxlength=\"20\"\n                                       #firstName=\"ngModel\">\n                            </div>\n\n                            <div *ngIf=\"firstName.invalid && (firstName.dirty || firstName.touched)\" class=\"alert alert-danger\">\n                                <div *ngIf=\"firstName.errors.required\">\n                                    Nome deve ser preenchido\n                                </div>\n                                <div *ngIf=\"firstName.errors.minlength\">\n                                    Nome deve conter mais de 5 letras\n                                </div>\n                            </div>\n\n                            <div class=\"input-group mb-3\">\n                                <span class=\"input-group-addon\">@</span>\n                                <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"credentials.username\" required #email=\"ngModel\" pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\">\n                            </div>\n\n                            <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">\n                                Email deve seguir o formato <i>admin@demoiselle.org</i>.\n                            </div>\n\n                            <div class=\"input-group mb-3\">\n                                <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n                                <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"credentials.password\" required validateEqual=\"repassword\"\n                                       reverse=\"true\" #password=\"ngModel\" required minlength=\"6\" maxlength=\"20\">\n                            </div>\n\n                            <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n                                <div *ngIf=\"password.errors.required\">\n                                    Senha deve ser preenchida\n                                </div>\n                                <div *ngIf=\"password.errors.minlength\">\n                                    Senha deve conter mais de 6 letras\n                                </div>\n                            </div>\n\n                            <button class=\"btn btn-block btn-success\" [disabled]=\"!form.valid\" type=\"submit\">Solicitar acesso</button>\n\n                        </form>\n                    </div>\n                    <div class=\"card-footer p-4\">\n                        <button routerLink=\"/login\" type=\"button\" class=\"btn btn-link px-0\">Voltar</button> \n                        <!-- <div class=\"row\">\n                          <div class=\"col-6\">\n                            <button class=\"btn btn-block btn-facebook\" type=\"button\"><span>facebook</span></button>\n                          </div>\n                          <div class=\"col-6\">\n                            <button class=\"btn btn-block btn-twitter\" type=\"button\"><span>twitter</span></button>\n                          </div>\n                        </div> -->\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _demoiselle_security__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demoiselle/security */ "./node_modules/@demoiselle/security/dist/index.js");
/* harmony import */ var _demoiselle_security__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_demoiselle_security__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/notification.service */ "./src/app/core/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router, notificationService) {
        this.authService = authService;
        this.router = router;
        this.notificationService = notificationService;
        this.credentials = {
            username: '',
            password: '',
            firstName: ''
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
        console.log('[RegisterComponent] initialized.');
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.authService.register(this.credentials)
            .subscribe(function (res) {
            _this.notificationService.success('Solicitação enviada com sucesso, enviaremos um email para você!');
        }, function (error) {
            if (error.status === 401 || error.status === 406) {
                var errors = error.error;
                for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
                    var err = errors_1[_i];
                    _this.notificationService.error(err.error);
                }
                _this.credentials.password = '';
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html")
        }),
        __metadata("design:paramtypes", [_demoiselle_security__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.module.ts":
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.module.ts ***!
  \**************************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/auth/register/register-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_3__["RegisterRoutingModule"]
            ],
            declarations: [
                _register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
            ],
            providers: []
        })
    ], RegisterModule);
    return RegisterModule;
}());



/***/ })

}]);
//# sourceMappingURL=auth-register-register-module.js.map