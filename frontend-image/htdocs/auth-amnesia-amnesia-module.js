(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-amnesia-amnesia-module"],{

/***/ "./src/app/auth/amnesia/amnesia-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/auth/amnesia/amnesia-routing.module.ts ***!
  \********************************************************/
/*! exports provided: AmnesiaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmnesiaRoutingModule", function() { return AmnesiaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _amnesia_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./amnesia.component */ "./src/app/auth/amnesia/amnesia.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AmnesiaRoutingModule = /** @class */ (function () {
    function AmnesiaRoutingModule() {
    }
    AmnesiaRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _amnesia_component__WEBPACK_IMPORTED_MODULE_2__["AmnesiaComponent"]
                    }
                ])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AmnesiaRoutingModule);
    return AmnesiaRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/amnesia/amnesia.component.html":
/*!*****************************************************!*\
  !*** ./src/app/auth/amnesia/amnesia.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-8\">\n        <div class=\"card-group mb-0\">\n          <div class=\"card p-4\">\n            <div class=\"card-body\">\n              <form name=\"loginForm\" (ngSubmit)=\"amnesia()\" novalidate>\n                <h1>Lembrar senha</h1>\n                <p class=\"text-muted\">Entre com seu email</p>\n                <div class=\"input-group mb-3\">\n                  <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Email\" name=\"username\" [(ngModel)]=\"user.username\" #username=\"ngModel\"\n                    required>\n                  <span id=\"username-message\" class=\"text-danger\"></span>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-6\">\n                    <button type=\"submit\" class=\"btn btn-primary px-4\">Enviar</button>\n                  </div>\n                  <div class=\"col-6 text-right\">\n                    <button routerLink=\"/login\" type=\"button\" class=\"btn btn-link px-0\">Voltar</button>\n                  </div>\n                </div>\n\n                <div id=\"message\" class=\"text-danger\"></div>\n                <!--<div>\n                  Email:admin@demoiselle.org Senha:123456\n                </div>-->\n              </form>\n            </div>\n          </div>\n          <!--<div class=\"card text-white bg-primary py-5 d-md-down-none\" style=\"width:44%\">\n            <div class=\"card-body text-center\">\n              <div>\n                <h2>Registre-se</h2>\n                <p>Crie uma conta e tenha acesso ao sistema.</p>\n                <button type=\"button\" [routerLink]=\"['/user/edit']\" class=\"btn btn-primary active mt-3\">Cadastrar!</button>-\n\n              </div>\n            </div>\n          </div>-->\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/amnesia/amnesia.component.ts":
/*!***************************************************!*\
  !*** ./src/app/auth/amnesia/amnesia.component.ts ***!
  \***************************************************/
/*! exports provided: AmnesiaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmnesiaComponent", function() { return AmnesiaComponent; });
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




var AmnesiaComponent = /** @class */ (function () {
    function AmnesiaComponent(authService, router, notificationService) {
        this.authService = authService;
        this.router = router;
        this.notificationService = notificationService;
        this.user = {
            username: ''
        };
    }
    AmnesiaComponent.prototype.ngOnInit = function () {
        console.log('[AmnesiaComponent] initialized.');
    };
    AmnesiaComponent.prototype.amnesia = function () {
        var _this = this;
        this.authService.amnesia(this.user)
            .subscribe(function (res) {
            _this.notificationService.success('Enviamos um email para você!');
        }, function (error) {
            if (error.status === 401 || error.status === 406) {
                var errors = error.error;
                for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
                    var err = errors_1[_i];
                    _this.notificationService.error(err.error);
                }
                _this.user.password = '';
            }
        });
    };
    AmnesiaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-amnesia',
            template: __webpack_require__(/*! ./amnesia.component.html */ "./src/app/auth/amnesia/amnesia.component.html")
        }),
        __metadata("design:paramtypes", [_demoiselle_security__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]])
    ], AmnesiaComponent);
    return AmnesiaComponent;
}());



/***/ }),

/***/ "./src/app/auth/amnesia/amnesia.module.ts":
/*!************************************************!*\
  !*** ./src/app/auth/amnesia/amnesia.module.ts ***!
  \************************************************/
/*! exports provided: AmnesiaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmnesiaModule", function() { return AmnesiaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _amnesia_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./amnesia.component */ "./src/app/auth/amnesia/amnesia.component.ts");
/* harmony import */ var _amnesia_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./amnesia-routing.module */ "./src/app/auth/amnesia/amnesia-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AmnesiaModule = /** @class */ (function () {
    function AmnesiaModule() {
    }
    AmnesiaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _amnesia_routing_module__WEBPACK_IMPORTED_MODULE_3__["AmnesiaRoutingModule"]
            ],
            declarations: [
                _amnesia_component__WEBPACK_IMPORTED_MODULE_2__["AmnesiaComponent"]
            ],
            providers: []
        })
    ], AmnesiaModule);
    return AmnesiaModule;
}());



/***/ })

}]);
//# sourceMappingURL=auth-amnesia-amnesia-module.js.map