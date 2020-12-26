(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-product-management-product-management-module-ngfactory"],{

/***/ "./src/app/modules/product-management/product-management-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/product-management/product-management-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ProductManagementRoutingModule, ɵ0, ɵ1, ɵ2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductManagementRoutingModule", function() { return ProductManagementRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ2", function() { return ɵ2; });
const ɵ0 = () => Promise.all(/*! import() | components-mobiles-mobiles-module-ngfactory */[__webpack_require__.e("default~components-accessories-accessories-module-ngfactory~components-hardware-parts-hardware-parts~3dcefb12"), __webpack_require__.e("default~components-accessories-accessories-module-ngfactory~components-hardware-parts-hardware-parts~9098d0cd"), __webpack_require__.e("common"), __webpack_require__.e("components-mobiles-mobiles-module-ngfactory")]).then(__webpack_require__.bind(null, /*! ./components/mobiles/mobiles.module.ngfactory */ "./src/app/modules/product-management/components/mobiles/mobiles.module.ngfactory.js")).then(m => m.MobilesModuleNgFactory), ɵ1 = () => Promise.all(/*! import() | components-accessories-accessories-module-ngfactory */[__webpack_require__.e("default~components-accessories-accessories-module-ngfactory~components-hardware-parts-hardware-parts~3dcefb12"), __webpack_require__.e("default~components-accessories-accessories-module-ngfactory~components-hardware-parts-hardware-parts~9098d0cd"), __webpack_require__.e("common"), __webpack_require__.e("components-accessories-accessories-module-ngfactory")]).then(__webpack_require__.bind(null, /*! ./components/accessories/accessories.module.ngfactory */ "./src/app/modules/product-management/components/accessories/accessories.module.ngfactory.js")).then(m => m.AccessoriesModuleNgFactory), ɵ2 = () => Promise.all(/*! import() | components-hardware-parts-hardware-parts-module-ngfactory */[__webpack_require__.e("default~components-accessories-accessories-module-ngfactory~components-hardware-parts-hardware-parts~3dcefb12"), __webpack_require__.e("default~components-accessories-accessories-module-ngfactory~components-hardware-parts-hardware-parts~9098d0cd"), __webpack_require__.e("common"), __webpack_require__.e("components-hardware-parts-hardware-parts-module-ngfactory")]).then(__webpack_require__.bind(null, /*! ./components/hardware-parts/hardware-parts.module.ngfactory */ "./src/app/modules/product-management/components/hardware-parts/hardware-parts.module.ngfactory.js")).then(m => m.HardwarePartsModuleNgFactory);
const routes = [
    { path: 'mobiles', loadChildren: ɵ0 },
    { path: 'accessories', loadChildren: ɵ1 },
    { path: 'hardware-parts', loadChildren: ɵ2 },
];
class ProductManagementRoutingModule {
}



/***/ }),

/***/ "./src/app/modules/product-management/product-management.module.ngfactory.js":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/product-management/product-management.module.ngfactory.js ***!
  \***********************************************************************************/
/*! exports provided: ProductManagementModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductManagementModuleNgFactory", function() { return ProductManagementModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _product_management_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-management.module */ "./src/app/modules/product-management/product-management.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product_management_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-management-routing.module */ "./src/app/modules/product-management/product-management-routing.module.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 






var ProductManagementModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_product_management_module__WEBPACK_IMPORTED_MODULE_1__["ProductManagementModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _product_management_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductManagementRoutingModule"], _product_management_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductManagementRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _product_management_module__WEBPACK_IMPORTED_MODULE_1__["ProductManagementModule"], _product_management_module__WEBPACK_IMPORTED_MODULE_1__["ProductManagementModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_4__["ROUTES"], function () { return [[{ path: "mobiles", loadChildren: _product_management_routing_module__WEBPACK_IMPORTED_MODULE_5__["ɵ0"] }, { path: "accessories", loadChildren: _product_management_routing_module__WEBPACK_IMPORTED_MODULE_5__["ɵ1"] }, { path: "hardware-parts", loadChildren: _product_management_routing_module__WEBPACK_IMPORTED_MODULE_5__["ɵ2"] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/modules/product-management/product-management.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/product-management/product-management.module.ts ***!
  \*************************************************************************/
/*! exports provided: ProductManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductManagementModule", function() { return ProductManagementModule; });
class ProductManagementModule {
}


/***/ })

}]);
//# sourceMappingURL=modules-product-management-product-management-module-ngfactory-es2015.js.map