(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-user-management-user-management-module-ngfactory"],{

/***/ "./src/app/modules/user-management/user-management-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/user-management/user-management-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: UserManagementRoutingModule, ɵ0, ɵ1, ɵ2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementRoutingModule", function() { return UserManagementRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ2", function() { return ɵ2; });
const ɵ0 = () => Promise.all(/*! import() | components-basic-basic-module-ngfactory */[__webpack_require__.e("default~components-accessories-accessories-module-ngfactory~components-admins-admins-module-ngfactor~7e4eec66"), __webpack_require__.e("default~components-admins-admins-module-ngfactory~components-basic-basic-module-ngfactory~components~d9705d40"), __webpack_require__.e("components-basic-basic-module-ngfactory")]).then(__webpack_require__.bind(null, /*! ./components/basic/basic.module.ngfactory */ "./src/app/modules/user-management/components/basic/basic.module.ngfactory.js")).then(m => m.BasicModuleNgFactory), ɵ1 = () => Promise.all(/*! import() | components-business-business-module-ngfactory */[__webpack_require__.e("default~components-accessories-accessories-module-ngfactory~components-admins-admins-module-ngfactor~7e4eec66"), __webpack_require__.e("default~components-admins-admins-module-ngfactory~components-basic-basic-module-ngfactory~components~d9705d40"), __webpack_require__.e("components-business-business-module-ngfactory")]).then(__webpack_require__.bind(null, /*! ./components/business/business.module.ngfactory */ "./src/app/modules/user-management/components/business/business.module.ngfactory.js")).then(m => m.BusinessModuleNgFactory), ɵ2 = () => Promise.all(/*! import() | components-admins-admins-module-ngfactory */[__webpack_require__.e("default~components-accessories-accessories-module-ngfactory~components-admins-admins-module-ngfactor~7e4eec66"), __webpack_require__.e("default~components-admins-admins-module-ngfactory~components-basic-basic-module-ngfactory~components~d9705d40"), __webpack_require__.e("components-admins-admins-module-ngfactory")]).then(__webpack_require__.bind(null, /*! ./components/admins/admins.module.ngfactory */ "./src/app/modules/user-management/components/admins/admins.module.ngfactory.js")).then(m => m.AdminsModuleNgFactory);
const routes = [
    {
        path: 'basic',
        loadChildren: ɵ0
    },
    {
        path: 'business',
        loadChildren: ɵ1
    },
    {
        path: ':type',
        loadChildren: ɵ2
    },
];
class UserManagementRoutingModule {
}



/***/ }),

/***/ "./src/app/modules/user-management/user-management.module.ngfactory.js":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/user-management/user-management.module.ngfactory.js ***!
  \*****************************************************************************/
/*! exports provided: UserManagementModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementModuleNgFactory", function() { return UserManagementModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_management_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-management.module */ "./src/app/modules/user-management/user-management.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_management_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-management-routing.module */ "./src/app/modules/user-management/user-management-routing.module.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 






var UserManagementModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_user_management_module__WEBPACK_IMPORTED_MODULE_1__["UserManagementModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _user_management_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserManagementRoutingModule"], _user_management_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserManagementRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _user_management_module__WEBPACK_IMPORTED_MODULE_1__["UserManagementModule"], _user_management_module__WEBPACK_IMPORTED_MODULE_1__["UserManagementModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_4__["ROUTES"], function () { return [[{ path: "basic", loadChildren: _user_management_routing_module__WEBPACK_IMPORTED_MODULE_5__["ɵ0"] }, { path: "business", loadChildren: _user_management_routing_module__WEBPACK_IMPORTED_MODULE_5__["ɵ1"] }, { path: ":type", loadChildren: _user_management_routing_module__WEBPACK_IMPORTED_MODULE_5__["ɵ2"] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/modules/user-management/user-management.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/user-management/user-management.module.ts ***!
  \*******************************************************************/
/*! exports provided: UserManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementModule", function() { return UserManagementModule; });
class UserManagementModule {
}


/***/ })

}]);
//# sourceMappingURL=modules-user-management-user-management-module-ngfactory-es2015.js.map