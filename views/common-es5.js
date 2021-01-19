(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "./src/app/modules/product-management/components/mobiles/models/ng-dropdown-option.model.ts":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/product-management/components/mobiles/models/ng-dropdown-option.model.ts ***!
      \**************************************************************************************************/

    /*! exports provided: NgDropDownOption */

    /***/
    function srcAppModulesProductManagementComponentsMobilesModelsNgDropdownOptionModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgDropDownOption", function () {
        return NgDropDownOption;
      });

      var NgDropDownOption = function NgDropDownOption(label, value) {
        _classCallCheck(this, NgDropDownOption);

        this.label = label;
        this.value = value;
        this.label = label;
        this.value = label;
      };
      /***/

    },

    /***/
    "./src/app/modules/product-management/components/mobiles/models/table.columns.model.ts":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/product-management/components/mobiles/models/table.columns.model.ts ***!
      \*********************************************************************************************/

    /*! exports provided: TableColumn */

    /***/
    function srcAppModulesProductManagementComponentsMobilesModelsTableColumnsModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableColumn", function () {
        return TableColumn;
      });

      var TableColumn = function TableColumn(field, header) {
        _classCallCheck(this, TableColumn);

        this.field = field;
        this.header = header;
      };
      /***/

    },

    /***/
    "./src/app/modules/product-management/components/mobiles/services/mobile-api.service.ts":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/product-management/components/mobiles/services/mobile-api.service.ts ***!
      \**********************************************************************************************/

    /*! exports provided: MobileApiService */

    /***/
    function srcAppModulesProductManagementComponentsMobilesServicesMobileApiServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MobileApiService", function () {
        return MobileApiService;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");

      var MobileApiService = /*#__PURE__*/function () {
        function MobileApiService(http) {
          _classCallCheck(this, MobileApiService);

          this.http = http;
          this.prefix = 'MobilePhone';
        }

        _createClass(MobileApiService, [{
          key: "getRamOptions",
          value: function getRamOptions() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api, "/MobileRam")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
              return res['data'];
            }));
          }
        }, {
          key: "getStorageOptions",
          value: function getStorageOptions() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api, "/MobileStorage")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
              return res['data'];
            }));
          }
        }, {
          key: "getSimCardOptions",
          value: function getSimCardOptions() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api, "/MobileSimCard")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
              return res['data'];
            }));
          }
        }, {
          key: "getDeviceBrand",
          value: function getDeviceBrand() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api, "/MobileBrand")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
              return res['data'];
            }));
          }
        }, {
          key: "getConnectivityOptions",
          value: function getConnectivityOptions() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api, "/MobileConnectivity")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
              return res['data'];
            }));
          }
        }, {
          key: "getColorOptions",
          value: function getColorOptions() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api, "/MobileColor")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
              return res['data'];
            }));
          }
        }, {
          key: "getMobileModel",
          value: function getMobileModel() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api, "/MobileModel")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
              return res['data'];
            }));
          }
        }, {
          key: "getAllMobilePhones",
          value: function getAllMobilePhones() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api, "/").concat(this.prefix)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (mobiles) {
              return mobiles;
            }));
          }
        }, {
          key: "mapObjectToString",
          value: function mapObjectToString(value) {
            return JSON.stringify(value);
          }
        }, {
          key: "addMobile",
          value: function addMobile(mobile) {
            mobile['versions'] = JSON.stringify(mobile['versions']);
            console.log(mobile);
            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api, "/").concat(this.prefix), mobile).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "editMobile",
          value: function editMobile(mobileId, newData) {
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api, "/").concat(this.prefix, "/").concat(mobileId), newData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "deleteMobile",
          value: function deleteMobile(mobileId) {
            return this.http["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api, "/").concat(this.prefix, "/").concat(mobileId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
              return res;
            }));
          }
          /**             Version              */

        }, {
          key: "addVersion",
          value: function addVersion(version) {
            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api, "/MobilePhoneVersion"), version).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "updateVersion",
          value: function updateVersion(version) {
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api, "/MobilePhoneVersion/").concat(version.id), version).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "deleteversion",
          value: function deleteversion(versionId) {
            return this.http["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api, "/MobilePhoneVersion/").concat(versionId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
              return res;
            }));
          }
        }]);

        return MobileApiService;
      }();

      MobileApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        factory: function MobileApiService_Factory() {
          return new MobileApiService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
        },
        token: MobileApiService,
        providedIn: "root"
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map