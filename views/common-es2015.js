(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/modules/product-management/components/mobiles/models/ng-dropdown-option.model.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/product-management/components/mobiles/models/ng-dropdown-option.model.ts ***!
  \**************************************************************************************************/
/*! exports provided: NgDropDownOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgDropDownOption", function() { return NgDropDownOption; });
class NgDropDownOption {
    constructor(label, value) {
        this.label = label;
        this.value = value;
        this.label = label;
        this.value = label;
    }
}


/***/ }),

/***/ "./src/app/modules/product-management/components/mobiles/models/table.columns.model.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/product-management/components/mobiles/models/table.columns.model.ts ***!
  \*********************************************************************************************/
/*! exports provided: TableColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableColumn", function() { return TableColumn; });
class TableColumn {
    constructor(field, header) {
        this.field = field;
        this.header = header;
    }
}


/***/ }),

/***/ "./src/app/modules/product-management/components/mobiles/services/mobile-api.service.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/product-management/components/mobiles/services/mobile-api.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: MobileApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileApiService", function() { return MobileApiService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




class MobileApiService {
    constructor(http) {
        this.http = http;
        this.prefix = 'MobilePhone';
    }
    getRamOptions() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api}/MobileRam`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
            return res['data'];
        }));
    }
    getStorageOptions() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api}/MobileStorage`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
            return res['data'];
        }));
    }
    getSimCardOptions() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api}/MobileSimCard`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
            return res['data'];
        }));
    }
    getDeviceBrand() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api}/MobileBrand`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
            return res['data'];
        }));
    }
    getConnectivityOptions() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api}/MobileConnectivity`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
            return res['data'];
        }));
    }
    getColorOptions() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api}/MobileColor`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
            return res['data'];
        }));
    }
    getMobileModel() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api}/MobileModel`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
            return res['data'];
        }));
    }
    getAllMobilePhones() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api}/${this.prefix}`).pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((mobiles) => {
            return mobiles;
        })));
    }
    mapObjectToString(value) {
        return JSON.stringify(value);
    }
    addMobile(mobile) {
        mobile['versions'] = JSON.stringify(mobile['versions']);
        console.log(mobile);
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api}/${this.prefix}`, mobile).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
            return res;
        }));
    }
    editMobile(mobileId, newData) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api}/${this.prefix}/${mobileId}`, newData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
            return res;
        }));
    }
    deleteMobile(mobileId) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api}/${this.prefix}/${mobileId}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
            return res;
        }));
    }
    /**             Version              */
    addVersion(version) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api}/MobilePhoneVersion`, version).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
            return res;
        }));
    }
    updateVersion(version) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api}/MobilePhoneVersion/${version.id}`, version).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
            return res;
        }));
    }
    deleteversion(versionId) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api}/MobilePhoneVersion/${versionId}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
            return res;
        }));
    }
}
MobileApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ factory: function MobileApiService_Factory() { return new MobileApiService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); }, token: MobileApiService, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map