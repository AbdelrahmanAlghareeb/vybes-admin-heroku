(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-accessories-accessories-module-ngfactory"], {
    /***/
    "./src/app/modules/product-management/components/accessories/accessories-add/accessories-add.component.ngfactory.js":
    /*!**************************************************************************************************************************!*\
      !*** ./src/app/modules/product-management/components/accessories/accessories-add/accessories-add.component.ngfactory.js ***!
      \**************************************************************************************************************************/

    /*! exports provided: RenderType_AccessoriesAddComponent, View_AccessoriesAddComponent_0, View_AccessoriesAddComponent_Host_0, AccessoriesAddComponentNgFactory */

    /***/
    function srcAppModulesProductManagementComponentsAccessoriesAccessoriesAddAccessoriesAddComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_AccessoriesAddComponent", function () {
        return RenderType_AccessoriesAddComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_AccessoriesAddComponent_0", function () {
        return View_AccessoriesAddComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_AccessoriesAddComponent_Host_0", function () {
        return View_AccessoriesAddComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccessoriesAddComponentNgFactory", function () {
        return AccessoriesAddComponentNgFactory;
      });
      /* harmony import */


      var _accessories_add_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./accessories-add.component.scss.shim.ngstyle */
      "./src/app/modules/product-management/components/accessories/accessories-add/accessories-add.component.scss.shim.ngstyle.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! primeng/button */
      "./node_modules/primeng/fesm2015/primeng-button.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! primeng/inputtext */
      "./node_modules/primeng/fesm2015/primeng-inputtext.js");
      /* harmony import */


      var _node_modules_primeng_fileupload_primeng_fileupload_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../../node_modules/primeng/fileupload/primeng-fileupload.ngfactory */
      "./node_modules/primeng/fileupload/primeng-fileupload.ngfactory.js");
      /* harmony import */


      var primeng_fileupload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/fileupload */
      "./node_modules/primeng/fesm2015/primeng-fileupload.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var _node_modules_primeng_dropdown_primeng_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../../../node_modules/primeng/dropdown/primeng-dropdown.ngfactory */
      "./node_modules/primeng/dropdown/primeng-dropdown.ngfactory.js");
      /* harmony import */


      var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! primeng/dropdown */
      "./node_modules/primeng/fesm2015/primeng-dropdown.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _node_modules_primeng_toast_primeng_toast_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../../../../node_modules/primeng/toast/primeng-toast.ngfactory */
      "./node_modules/primeng/toast/primeng-toast.ngfactory.js");
      /* harmony import */


      var primeng_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! primeng/toast */
      "./node_modules/primeng/fesm2015/primeng-toast.js");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! primeng/api */
      "./node_modules/primeng/fesm2015/primeng-api.js");
      /* harmony import */


      var _accessories_add_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./accessories-add.component */
      "./src/app/modules/product-management/components/accessories/accessories-add/accessories-add.component.ts");
      /* harmony import */


      var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! primeng/dynamicdialog */
      "./node_modules/primeng/fesm2015/primeng-dynamicdialog.js");
      /* harmony import */


      var _services_accessories_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../services/accessories.service */
      "./src/app/modules/product-management/components/accessories/services/accessories.service.ts");
      /* harmony import */


      var _mobiles_services_mobile_api_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../mobiles/services/mobile-api.service */
      "./src/app/modules/product-management/components/mobiles/services/mobile-api.service.ts");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_AccessoriesAddComponent = [_accessories_add_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_AccessoriesAddComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_AccessoriesAddComponent,
        data: {}
      });

      function View_AccessoriesAddComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "container p-col-12"], ["style", "text-align: center;font-size: 20px;;padding: .5rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Versions"]))], null, null);
      }

      function View_AccessoriesAddComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["label", "Remove"], ["pButton", ""], ["style", "width: 30%; margin: 10px;"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.deleteVersion(_v.parent.context.index) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4341760, null, 0, primeng_button__WEBPACK_IMPORTED_MODULE_2__["ButtonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          label: [0, "label"]
        }, null)], function (_ck, _v) {
          var currVal_0 = "Remove";

          _ck(_v, 1, 0, currVal_0);
        }, null);
      }

      function View_AccessoriesAddComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 76, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 73, "div", [], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 212992, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 69, "div", [["class", "p-fluid p-formgrid p-grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 10, "div", [["class", "p-field p-col-12 p-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "label", [["class", "p-col-12 "], ["for", "Vprice"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Price"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 7, "input", [["formControlName", "price"], ["inputId", "price"], ["pInputText", ""], ["placeholder", "price"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "p-inputtext", null], [2, "p-component", null], [2, "p-filled", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("input" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onChange($event.target.value) !== false;
            ad = pd_4 && ad;
          }

          if ("blur" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onTouched() !== false;
            ad = pd_5 && ad;
          }

          if ("input" === en) {
            var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onInput($event) !== false;
            ad = pd_6 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) {
          return [p0_0, p1_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 278528, null, 0, primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputText"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 10, "div", [["class", "p-field p-col-12 p-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "label", [["class", "p-col-12 "], ["for", "discountPrice"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["discountPrice"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 7, "input", [["formControlName", "discountPrice"], ["inputId", "discountPrice"], ["pInputText", ""], ["placeholder", "discountPrice"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "p-inputtext", null], [2, "p-component", null], [2, "p-filled", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("input" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).onChange($event.target.value) !== false;
            ad = pd_4 && ad;
          }

          if ("blur" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).onTouched() !== false;
            ad = pd_5 && ad;
          }

          if ("input" === en) {
            var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).onInput($event) !== false;
            ad = pd_6 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) {
          return [p0_0, p1_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 278528, null, 0, primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputText"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 5, "div", [["class", "p-field p-col-12 p-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 1, "label", [["class", "p-col-12 "], ["for", "image"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Product Image"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 2, "p-fileUpload", [["accept", "image/*"], ["id", "image"], ["maxFileSize", "1000000"], ["name", "image"]], null, [[null, "onSelect"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("onSelect" === en) {
            var pd_0 = _co.selectImage($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_primeng_fileupload_primeng_fileupload_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_FileUpload_0"], _node_modules_primeng_fileupload_primeng_fileupload_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_FileUpload"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 5423104, null, 1, primeng_fileupload__WEBPACK_IMPORTED_MODULE_6__["FileUpload"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          name: [0, "name"],
          accept: [1, "accept"],
          maxFileSize: [2, "maxFileSize"],
          showUploadButton: [3, "showUploadButton"]
        }, {
          onSelect: "onSelect"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
          templates: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 10, "div", [["class", "p-field p-col-12 p-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 1, "label", [["class", "p-col-12 "], ["for", "quantity"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Quantity"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 7, "input", [["formControlName", "quantity"], ["inputId", "quantity"], ["pInputText", ""], ["placeholder", "quantity"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "p-inputtext", null], [2, "p-component", null], [2, "p-filled", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("input" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).onChange($event.target.value) !== false;
            ad = pd_4 && ad;
          }

          if ("blur" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).onTouched() !== false;
            ad = pd_5 && ad;
          }

          if ("input" === en) {
            var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).onInput($event) !== false;
            ad = pd_6 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) {
          return [p0_0, p1_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 278528, null, 0, primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputText"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 9, "div", [["class", "p-field p-col-12 p-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 1, "label", [["class", "p-col-12 "], ["for", "style"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Style"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 6, "input", [["formControlName", "style"], ["inputId", "style"], ["pInputText", ""], ["placeholder", "style"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "p-inputtext", null], [2, "p-component", null], [2, "p-filled", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("input" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).onInput($event) !== false;
            ad = pd_4 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 278528, null, 0, primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputText"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 9, "div", [["class", "p-field p-col-12 p-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 1, "label", [["class", "p-col-12 "], ["for", "highlight"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Highlight"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 6, "p-dropdown", [["formControlName", "highlight"], ["id", "highlight"]], [[2, "p-inputwrapper-filled", null], [2, "p-inputwrapper-focus", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, _node_modules_primeng_dropdown_primeng_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_Dropdown_0"], _node_modules_primeng_dropdown_primeng_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_Dropdown"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 13877248, null, 1, primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          placeholder: [0, "placeholder"],
          options: [1, "options"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
          templates: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__["Dropdown"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 9, "div", [["class", "p-field p-col-12 p-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 1, "label", [["class", "p-col-12 "], ["for", "hotDeal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["hotDeal"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 6, "p-dropdown", [["formControlName", "hotDeal"], ["id", "hotDeal"]], [[2, "p-inputwrapper-filled", null], [2, "p-inputwrapper-focus", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, _node_modules_primeng_dropdown_primeng_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_Dropdown_0"], _node_modules_primeng_dropdown_primeng_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_Dropdown"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 13877248, null, 1, primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          placeholder: [0, "placeholder"],
          options: [1, "options"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
          templates: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__["Dropdown"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](72, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](74, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AccessoriesAddComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](76, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_7 = _v.context.index;

          _ck(_v, 2, 0, currVal_7);

          var currVal_18 = "price";

          _ck(_v, 13, 0, currVal_18);

          _ck(_v, 16, 0);

          var currVal_29 = "discountPrice";

          _ck(_v, 24, 0, currVal_29);

          _ck(_v, 27, 0);

          var currVal_30 = "image";
          var currVal_31 = "image/*";
          var currVal_32 = "1000000";
          var currVal_33 = false;

          _ck(_v, 32, 0, currVal_30, currVal_31, currVal_32, currVal_33);

          var currVal_44 = "quantity";

          _ck(_v, 41, 0, currVal_44);

          _ck(_v, 44, 0);

          var currVal_55 = "style";

          _ck(_v, 51, 0, currVal_55);

          _ck(_v, 54, 0);

          var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.data ? _co.data["highlight"] : "highlight", "");

          var currVal_66 = _co.highlightOptions;

          _ck(_v, 59, 0, currVal_65, currVal_66);

          var currVal_67 = "highlight";

          _ck(_v, 62, 0, currVal_67);

          var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.data ? _co.data["hotDeal"] : "hotDeal", "");

          var currVal_78 = _co.hotDealOptions;

          _ck(_v, 69, 0, currVal_77, currVal_78);

          var currVal_79 = "hotDeal";

          _ck(_v, 72, 0, currVal_79);

          var currVal_80 = _co.Versions.length > 1;

          _ck(_v, 76, 0, currVal_80);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassUntouched;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassTouched;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassPristine;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassDirty;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassValid;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassInvalid;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassPending;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassUntouched;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassTouched;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPristine;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassDirty;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassValid;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassInvalid;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPending;

          var currVal_15 = true;
          var currVal_16 = true;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).filled;

          _ck(_v, 9, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17);

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassUntouched;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassTouched;

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassPristine;

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassDirty;

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassValid;

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassInvalid;

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassPending;

          var currVal_26 = true;
          var currVal_27 = true;

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).filled;

          _ck(_v, 20, 0, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28);

          var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassUntouched;

          var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassTouched;

          var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassPristine;

          var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassDirty;

          var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassValid;

          var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassInvalid;

          var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassPending;

          var currVal_41 = true;
          var currVal_42 = true;

          var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).filled;

          _ck(_v, 37, 0, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43);

          var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).ngClassUntouched;

          var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).ngClassTouched;

          var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).ngClassPristine;

          var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).ngClassDirty;

          var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).ngClassValid;

          var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).ngClassInvalid;

          var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).ngClassPending;

          var currVal_52 = true;
          var currVal_53 = true;

          var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).filled;

          _ck(_v, 48, 0, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54);

          var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).filled;

          var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).focused;

          var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).ngClassUntouched;

          var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).ngClassTouched;

          var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).ngClassPristine;

          var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).ngClassDirty;

          var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).ngClassValid;

          var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).ngClassInvalid;

          var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).ngClassPending;

          _ck(_v, 58, 0, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64);

          var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).filled;

          var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).focused;

          var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).ngClassUntouched;

          var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).ngClassTouched;

          var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).ngClassPristine;

          var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).ngClassDirty;

          var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).ngClassValid;

          var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).ngClassInvalid;

          var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).ngClassPending;

          _ck(_v, 68, 0, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76);
        });
      }

      function View_AccessoriesAddComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "container"], ["style", "margin: auto;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "div", [["formArrayName", "versions"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 212992, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArrayName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArrayName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AccessoriesAddComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "button", [["label", "Add Version"], ["pButton", ""], ["style", "width: 30%; margin: 10px;"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.addNewVesion() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 4341760, null, 0, primeng_button__WEBPACK_IMPORTED_MODULE_2__["ButtonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          label: [0, "label"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_7 = "versions";

          _ck(_v, 2, 0, currVal_7);

          var currVal_8 = _co.Versions.controls;

          _ck(_v, 6, 0, currVal_8);

          var currVal_9 = "Add Version";

          _ck(_v, 8, 0, currVal_9);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassUntouched;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassTouched;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassPristine;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassDirty;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassValid;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassInvalid;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassPending;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        });
      }

      function View_AccessoriesAddComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "p-toast", [], null, null, null, _node_modules_primeng_toast_primeng_toast_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_Toast_0"], _node_modules_primeng_toast_primeng_toast_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_Toast"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1294336, null, 1, primeng_toast__WEBPACK_IMPORTED_MODULE_13__["Toast"], [primeng_api__WEBPACK_IMPORTED_MODULE_14__["MessageService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          templates: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 70, "form", [["class", "p-fluid"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("submit" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onSubmit($event) !== false;
            ad = pd_0 && ad;
          }

          if ("reset" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onReset() !== false;
            ad = pd_1 && ad;
          }

          if ("ngSubmit" === en) {
            var pd_2 = _co.handleAccessory() !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], [[8, null], [8, null]], {
          form: [0, "form"]
        }, {
          ngSubmit: "ngSubmit"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 65, "div", [["class", "p-fluid p-formgrid p-grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 9, "div", [["class", "p-field p-col-12 p-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "label", [["class", "p-col-12"], ["for", "name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 6, "input", [["formControlName", "name"], ["id", "name"], ["pInputText", ""], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "p-inputtext", null], [2, "p-component", null], [2, "p-filled", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("input" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).onInput($event) !== false;
            ad = pd_4 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 278528, null, 0, primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputText"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 9, "div", [["class", "p-field p-col-12 p-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "label", [["class", "p-col-12 "], ["for", "video"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Video Url"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 6, "input", [["formControlName", "videoUrl"], ["id", "video"], ["pInputText", ""], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "p-inputtext", null], [2, "p-component", null], [2, "p-filled", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("input" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).onInput($event) !== false;
            ad = pd_4 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 278528, null, 0, primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputText"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 8, "div", [["class", "p-field p-col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 1, "label", [["class", "p-col-12 "], ["for", "des"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Description"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 5, "textarea", [["class", "p-col-12"], ["formControlName", "description"], ["id", "des"], ["pInputTextarea", ""], ["rows", "6"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 9, "div", [["class", "p-field p-col-12 p-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 1, "label", [["class", "p-col-12 "], ["for", "brand"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Accessory Type"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 6, "p-dropdown", [["formControlName", "accessoryTypeId"], ["id", "AccessoryType"]], [[2, "p-inputwrapper-filled", null], [2, "p-inputwrapper-focus", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, _node_modules_primeng_dropdown_primeng_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_Dropdown_0"], _node_modules_primeng_dropdown_primeng_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_Dropdown"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 13877248, null, 1, primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          placeholder: [0, "placeholder"],
          options: [1, "options"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
          templates: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__["Dropdown"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 9, "div", [["class", "p-field p-col-12 p-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 1, "label", [["class", "p-col-12 "], ["for", "brand"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Device Brand"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 6, "p-dropdown", [["formControlName", "mobileBrandId"], ["id", "brand"]], [[2, "p-inputwrapper-filled", null], [2, "p-inputwrapper-focus", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, _node_modules_primeng_dropdown_primeng_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_Dropdown_0"], _node_modules_primeng_dropdown_primeng_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_Dropdown"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 13877248, null, 1, primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          placeholder: [0, "placeholder"],
          options: [1, "options"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
          templates: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__["Dropdown"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 9, "div", [["class", "p-field p-col-12 p-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 1, "label", [["class", "p-col-12 "], ["for", "ram"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Model"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 6, "p-dropdown", [["formControlName", "mobileModelId"], ["id", "Model"]], [[2, "p-inputwrapper-filled", null], [2, "p-inputwrapper-focus", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, _node_modules_primeng_dropdown_primeng_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_Dropdown_0"], _node_modules_primeng_dropdown_primeng_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_Dropdown"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 13877248, null, 1, primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          placeholder: [0, "placeholder"],
          options: [1, "options"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
          templates: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__["Dropdown"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](65, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](67, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AccessoriesAddComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AccessoriesAddComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](71, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 1, "button", [["pButton", ""], ["type", "submit"]], [[8, "disabled", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](73, 4341760, null, 0, primeng_button__WEBPACK_IMPORTED_MODULE_2__["ButtonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          label: [0, "label"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 1, 0);

          var currVal_7 = _co.accessoryForm;

          _ck(_v, 5, 0, currVal_7);

          var currVal_18 = "name";

          _ck(_v, 15, 0, currVal_18);

          _ck(_v, 18, 0);

          var currVal_29 = "videoUrl";

          _ck(_v, 25, 0, currVal_29);

          _ck(_v, 28, 0);

          var currVal_37 = "description";

          _ck(_v, 35, 0, currVal_37);

          var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.data ? _co.data["accessoryTypeName"] : "Accessory Type", "");

          var currVal_48 = _co.AccessoryTypeOptions;

          _ck(_v, 42, 0, currVal_47, currVal_48);

          var currVal_49 = "accessoryTypeId";

          _ck(_v, 45, 0, currVal_49);

          var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.data ? _co.data["mobileBrandName"] : "select Device Brand", "");

          var currVal_60 = _co.deviceBrandOptions;

          _ck(_v, 52, 0, currVal_59, currVal_60);

          var currVal_61 = "mobileBrandId";

          _ck(_v, 55, 0, currVal_61);

          var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.data ? _co.data["mobileModelName"] : "select Model", "");

          var currVal_72 = _co.ModelsOptions;

          _ck(_v, 62, 0, currVal_71, currVal_72);

          var currVal_73 = "mobileModelId";

          _ck(_v, 65, 0, currVal_73);

          var currVal_74 = _co.mode === "Add";

          _ck(_v, 69, 0, currVal_74);

          var currVal_75 = _co.mode === "Add";

          _ck(_v, 71, 0, currVal_75);

          var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.mode, " accessory");

          _ck(_v, 73, 0, currVal_77);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassUntouched;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassTouched;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassPristine;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassDirty;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassValid;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassInvalid;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassPending;

          _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassUntouched;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassTouched;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassPristine;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassDirty;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassValid;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassInvalid;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassPending;

          var currVal_15 = true;
          var currVal_16 = true;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).filled;

          _ck(_v, 12, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17);

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassUntouched;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassTouched;

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassPristine;

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassDirty;

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassValid;

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassInvalid;

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassPending;

          var currVal_26 = true;
          var currVal_27 = true;

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).filled;

          _ck(_v, 22, 0, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28);

          var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassUntouched;

          var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassTouched;

          var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassPristine;

          var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassDirty;

          var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassValid;

          var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassInvalid;

          var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassPending;

          _ck(_v, 32, 0, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36);

          var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).filled;

          var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).focused;

          var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).ngClassUntouched;

          var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).ngClassTouched;

          var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).ngClassPristine;

          var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).ngClassDirty;

          var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).ngClassValid;

          var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).ngClassInvalid;

          var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).ngClassPending;

          _ck(_v, 41, 0, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46);

          var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).filled;

          var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).focused;

          var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).ngClassUntouched;

          var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).ngClassTouched;

          var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).ngClassPristine;

          var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).ngClassDirty;

          var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).ngClassValid;

          var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).ngClassInvalid;

          var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).ngClassPending;

          _ck(_v, 51, 0, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58);

          var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).filled;

          var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).focused;

          var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).ngClassUntouched;

          var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).ngClassTouched;

          var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).ngClassPristine;

          var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).ngClassDirty;

          var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).ngClassValid;

          var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).ngClassInvalid;

          var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).ngClassPending;

          _ck(_v, 61, 0, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70);

          var currVal_76 = !_co.accessoryForm.valid;

          _ck(_v, 72, 0, currVal_76);
        });
      }

      function View_AccessoriesAddComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-accessories-add", [], null, null, null, View_AccessoriesAddComponent_0, RenderType_AccessoriesAddComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _accessories_add_component__WEBPACK_IMPORTED_MODULE_15__["AccessoriesAddComponent"], [primeng_api__WEBPACK_IMPORTED_MODULE_14__["MessageService"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_16__["DynamicDialogRef"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_16__["DynamicDialogConfig"], _services_accessories_service__WEBPACK_IMPORTED_MODULE_17__["AccessoriesService"], _mobiles_services_mobile_api_service__WEBPACK_IMPORTED_MODULE_18__["MobileApiService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var AccessoriesAddComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-accessories-add", _accessories_add_component__WEBPACK_IMPORTED_MODULE_15__["AccessoriesAddComponent"], View_AccessoriesAddComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "./src/app/modules/product-management/components/accessories/accessories-add/accessories-add.component.scss.shim.ngstyle.js":
    /*!**********************************************************************************************************************************!*\
      !*** ./src/app/modules/product-management/components/accessories/accessories-add/accessories-add.component.scss.shim.ngstyle.js ***!
      \**********************************************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function srcAppModulesProductManagementComponentsAccessoriesAccessoriesAddAccessoriesAddComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZHVjdC1tYW5hZ2VtZW50L2NvbXBvbmVudHMvYWNjZXNzb3JpZXMvYWNjZXNzb3JpZXMtYWRkL2FjY2Vzc29yaWVzLWFkZC5jb21wb25lbnQuc2NzcyJ9 */"];
      /***/
    },

    /***/
    "./src/app/modules/product-management/components/accessories/accessories-add/accessories-add.component.ts":
    /*!****************************************************************************************************************!*\
      !*** ./src/app/modules/product-management/components/accessories/accessories-add/accessories-add.component.ts ***!
      \****************************************************************************************************************/

    /*! exports provided: AccessoriesAddComponent */

    /***/
    function srcAppModulesProductManagementComponentsAccessoriesAccessoriesAddAccessoriesAddComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccessoriesAddComponent", function () {
        return AccessoriesAddComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");

      var AccessoriesAddComponent = /*#__PURE__*/function () {
        function AccessoriesAddComponent(messageService, ref, config, AccessoriesService, MobileApiService) {
          _classCallCheck(this, AccessoriesAddComponent);

          this.messageService = messageService;
          this.ref = ref;
          this.config = config;
          this.AccessoriesService = AccessoriesService;
          this.MobileApiService = MobileApiService;
          this.deviceBrandOptions = [];
          this.AccessoryTypeOptions = [];
          this.ModelsOptions = [];
          this.highlightOptions = [];
          this.hotDealOptions = [];
        }

        _createClass(AccessoriesAddComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.mode = this.config.data.mode;
                      this.createAccessoryForm();
                      _context.next = 4;
                      return this.getDeviceBrand();

                    case 4:
                      _context.next = 6;
                      return this.getAccessoryType();

                    case 6:
                      _context.next = 8;
                      return this.getMobileMode();

                    case 8:
                      this.getHighlight();
                      this.gethotDeal();
                      this.data = this.config.data.data ? this.config.data.data : null;

                      if (this.data) {
                        console.log(this.data);
                        this.accessoryForm.patchValue(this.data); // this.accessoryForm.patchValue({
                        //   name: this.data['name'],
                        //   videoUrl: this.data['videoUrl'],
                        //   description: this.data['description'],
                        //   mobileBrandId: this.data['mobileBrandId'],
                        //   accessoryTypeId: this.data['accessoryTypeId'],
                        //   mobileModelId: this.data['mobileModelId']
                        // })
                      }

                    case 12:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "createAccessoryForm",
          value: function createAccessoryForm() {
            this.accessoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
              description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
              videoUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
              accessoryTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
              mobileBrandId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
              mobileModelId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [])
            });

            if (this.mode === "Add") {
              this.accessoryForm.addControl("versions", new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([this.createVersion()], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
            } // versions: new FormArray([this.createVersion()], [Validators.required])

          }
        }, {
          key: "getDeviceBrand",
          value: function getDeviceBrand() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              var deviceBrands;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      deviceBrands = [];
                      _context2.next = 3;
                      return this.MobileApiService.getDeviceBrand().toPromise().then(function (data) {
                        deviceBrands = data;
                        deviceBrands.forEach(function (deviceBrand, index) {
                          return _this.deviceBrandOptions.push({
                            label: deviceBrand['name'],
                            value: deviceBrand['id']
                          });
                        });
                      });

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getAccessoryType",
          value: function getAccessoryType() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              var accessoryTypes;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      accessoryTypes = [];
                      _context3.next = 3;
                      return this.AccessoriesService.getAccessoryType().toPromise().then(function (data) {
                        accessoryTypes = data;
                        accessoryTypes.forEach(function (accessoryType, index) {
                          return _this2.AccessoryTypeOptions.push({
                            label: accessoryType['name'],
                            value: accessoryType['id']
                          });
                        });
                      });

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "getMobileMode",
          value: function getMobileMode() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this3 = this;

              var mobileModes;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      mobileModes = [];
                      _context4.next = 3;
                      return this.MobileApiService.getMobileModel().toPromise().then(function (data) {
                        mobileModes = data;
                        mobileModes.forEach(function (mobileMode, index) {
                          return _this3.ModelsOptions.push({
                            label: mobileMode['name'],
                            value: mobileMode['id']
                          });
                        });
                      });

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "getHighlight",
          value: function getHighlight() {
            this.highlightOptions.push({
              label: 'True',
              value: true
            });
            this.highlightOptions.push({
              label: 'False',
              value: false
            });
          }
        }, {
          key: "gethotDeal",
          value: function gethotDeal() {
            this.hotDealOptions.push({
              label: 'True',
              value: true
            });
            this.hotDealOptions.push({
              label: 'False',
              value: false
            });
          }
        }, {
          key: "selectImage",
          value: function selectImage(event) {
            var _this4 = this;

            var reader = new FileReader();
            reader.readAsDataURL(event.currentFiles[0]);

            reader.onload = function () {
              _this4.ImageBaseData = reader.result;
              _this4.ImageBaseData = _this4.ImageBaseData.split(',')[1];

              _this4.Versions.patchValue([{
                productImage: _this4.ImageBaseData
              }]);
            };

            reader.onerror = function (error) {
              console.log('Error: ', error);
            };
          }
        }, {
          key: "createVersion",
          value: function createVersion(data) {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              productImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data ? data.productImage : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
              discountPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data ? data.discountPrice : '', []),
              price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data ? data.price : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
              quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data ? data.quantity : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
              style: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data ? data.style : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
              highlight: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
              hotDeal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
            });
          }
        }, {
          key: "addNewVesion",
          value: function addNewVesion() {
            this.Versions.push(this.createVersion());
          }
        }, {
          key: "deleteVersion",
          value: function deleteVersion(i) {
            this.Versions.removeAt(i);
          }
        }, {
          key: "handleAccessory",
          value: function handleAccessory() {
            var _this5 = this;

            if (!this.accessoryForm.valid) {
              this.accessoryForm.markAllAsTouched();
              return this.messageService.add({
                severity: 'Error',
                summary: 'Required Field',
                detail: 'Required Input',
                life: 3000
              });
            }

            if (this.mode === "Add") {
              this.AccessoriesService.addAccessory(this.accessoryForm.value).subscribe(function (data) {
                _this5.ref.close('Accessory Added');
              });
            } else if (this.mode === "Edit") {
              var accessoryEdited = this.accessoryForm.value;
              accessoryEdited['id'] = this.data['id'];
              this.AccessoriesService.editAccessory(this.data['id'], this.accessoryForm.value).subscribe(function (data) {
                _this5.ref.close('Accessory Edited');
              });
            }
          }
        }, {
          key: "Versions",
          get: function get() {
            var items = this.accessoryForm.get('versions');
            return this.accessoryForm.get('versions');
          }
        }]);

        return AccessoriesAddComponent;
      }();
      /***/

    },

    /***/
    "./src/app/modules/product-management/components/accessories/accessories-list/accessories-list.component.ngfactory.js":
    /*!****************************************************************************************************************************!*\
      !*** ./src/app/modules/product-management/components/accessories/accessories-list/accessories-list.component.ngfactory.js ***!
      \****************************************************************************************************************************/

    /*! exports provided: RenderType_AccessoriesListComponent, View_AccessoriesListComponent_0, View_AccessoriesListComponent_Host_0, AccessoriesListComponentNgFactory */

    /***/
    function srcAppModulesProductManagementComponentsAccessoriesAccessoriesListAccessoriesListComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_AccessoriesListComponent", function () {
        return RenderType_AccessoriesListComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_AccessoriesListComponent_0", function () {
        return View_AccessoriesListComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_AccessoriesListComponent_Host_0", function () {
        return View_AccessoriesListComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccessoriesListComponentNgFactory", function () {
        return AccessoriesListComponentNgFactory;
      });
      /* harmony import */


      var _accessories_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./accessories-list.component.scss.shim.ngstyle */
      "./src/app/modules/product-management/components/accessories/accessories-list/accessories-list.component.scss.shim.ngstyle.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var primeng_inputtext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! primeng/inputtext */
      "./node_modules/primeng/fesm2015/primeng-inputtext.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../../node_modules/primeng/table/primeng-table.ngfactory */
      "./node_modules/primeng/table/primeng-table.ngfactory.js");
      /* harmony import */


      var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! primeng/table */
      "./node_modules/primeng/fesm2015/primeng-table.js");
      /* harmony import */


      var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/button */
      "./node_modules/primeng/fesm2015/primeng-button.js");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! primeng/api */
      "./node_modules/primeng/fesm2015/primeng-api.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _node_modules_primeng_toast_primeng_toast_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../../../node_modules/primeng/toast/primeng-toast.ngfactory */
      "./node_modules/primeng/toast/primeng-toast.ngfactory.js");
      /* harmony import */


      var primeng_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! primeng/toast */
      "./node_modules/primeng/fesm2015/primeng-toast.js");
      /* harmony import */


      var _node_modules_primeng_toolbar_primeng_toolbar_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../../../../node_modules/primeng/toolbar/primeng-toolbar.ngfactory */
      "./node_modules/primeng/toolbar/primeng-toolbar.ngfactory.js");
      /* harmony import */


      var primeng_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! primeng/toolbar */
      "./node_modules/primeng/fesm2015/primeng-toolbar.js");
      /* harmony import */


      var _node_modules_primeng_confirmdialog_primeng_confirmdialog_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../../../../node_modules/primeng/confirmdialog/primeng-confirmdialog.ngfactory */
      "./node_modules/primeng/confirmdialog/primeng-confirmdialog.ngfactory.js");
      /* harmony import */


      var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! primeng/confirmdialog */
      "./node_modules/primeng/fesm2015/primeng-confirmdialog.js");
      /* harmony import */


      var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! primeng/dynamicdialog */
      "./node_modules/primeng/fesm2015/primeng-dynamicdialog.js");
      /* harmony import */


      var _accessories_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./accessories-list.component */
      "./src/app/modules/product-management/components/accessories/accessories-list/accessories-list.component.ts");
      /* harmony import */


      var _mobiles_services_mobile_api_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../mobiles/services/mobile-api.service */
      "./src/app/modules/product-management/components/mobiles/services/mobile-api.service.ts");
      /* harmony import */


      var _services_accessories_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../services/accessories.service */
      "./src/app/modules/product-management/components/accessories/services/accessories.service.ts");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_AccessoriesListComponent = [_accessories_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_AccessoriesListComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_AccessoriesListComponent,
        data: {}
      });

      function View_AccessoriesListComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "p-text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Global Search"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "div", [["class", " ui-column-filter p-text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "input", [["pInputText", ""], ["placeholder", "Global Filter"], ["size", "50"], ["style", "width:250px;padding: 10px;"], ["type", "text"]], [[2, "p-inputtext", null], [2, "p-component", null], [2, "p-filled", null]], [[null, "input"]], function (_v, en, $event) {
          var ad = true;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onInput($event) !== false;
            ad = pd_0 && ad;
          }

          if ("input" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 17).filterGlobal($event.target.value, "contains") !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, primeng_inputtext__WEBPACK_IMPORTED_MODULE_2__["InputText"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]], null, null)], function (_ck, _v) {
          _ck(_v, 4, 0);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = true;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).filled;

          _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2);
        });
      }

      function View_AccessoriesListComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 36, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "th", [["style", "width: 3rem"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "p-tableHeaderCheckbox", [], null, null, null, _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_TableHeaderCheckbox_0"], _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_TableHeaderCheckbox"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 245760, null, 0, primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableHeaderCheckbox"], [primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"], primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "th", [["style", "width: 3rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 4, "th", [["pSortableColumn", "name"]], [[2, "p-sortable-column", null], [2, "p-highlight", null], [1, "tabindex", 0], [1, "role", 0], [1, "aria-sort", 0]], [[null, "click"], [null, "keydown.enter"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onClick($event) !== false;
            ad = pd_0 && ad;
          }

          if ("keydown.enter" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onEnterKey($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 212992, null, 0, primeng_table__WEBPACK_IMPORTED_MODULE_5__["SortableColumn"], [primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"]], {
          field: [0, "field"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Name "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "p-sortIcon", [["field", "name"]], null, null, null, _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_SortIcon_0"], _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_SortIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 245760, null, 0, primeng_table__WEBPACK_IMPORTED_MODULE_5__["SortIcon"], [primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          field: [0, "field"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 4, "th", [["pSortableColumn", "description"]], [[2, "p-sortable-column", null], [2, "p-highlight", null], [1, "tabindex", 0], [1, "role", 0], [1, "aria-sort", 0]], [[null, "click"], [null, "keydown.enter"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onClick($event) !== false;
            ad = pd_0 && ad;
          }

          if ("keydown.enter" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onEnterKey($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 212992, null, 0, primeng_table__WEBPACK_IMPORTED_MODULE_5__["SortableColumn"], [primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"]], {
          field: [0, "field"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Description "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "p-sortIcon", [["field", "description"]], null, null, null, _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_SortIcon_0"], _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_SortIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 245760, null, 0, primeng_table__WEBPACK_IMPORTED_MODULE_5__["SortIcon"], [primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          field: [0, "field"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 4, "th", [["pSortableColumn", "videoUrl"]], [[2, "p-sortable-column", null], [2, "p-highlight", null], [1, "tabindex", 0], [1, "role", 0], [1, "aria-sort", 0]], [[null, "click"], [null, "keydown.enter"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onClick($event) !== false;
            ad = pd_0 && ad;
          }

          if ("keydown.enter" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onEnterKey($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 212992, null, 0, primeng_table__WEBPACK_IMPORTED_MODULE_5__["SortableColumn"], [primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"]], {
          field: [0, "field"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["videoUrl "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "p-sortIcon", [["field", "videoUrl"]], null, null, null, _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_SortIcon_0"], _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_SortIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 245760, null, 0, primeng_table__WEBPACK_IMPORTED_MODULE_5__["SortIcon"], [primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          field: [0, "field"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 4, "th", [["pSortableColumn", "mobileBrandName"]], [[2, "p-sortable-column", null], [2, "p-highlight", null], [1, "tabindex", 0], [1, "role", 0], [1, "aria-sort", 0]], [[null, "click"], [null, "keydown.enter"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).onClick($event) !== false;
            ad = pd_0 && ad;
          }

          if ("keydown.enter" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).onEnterKey($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 212992, null, 0, primeng_table__WEBPACK_IMPORTED_MODULE_5__["SortableColumn"], [primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"]], {
          field: [0, "field"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Brand "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "p-sortIcon", [["field", "mobileBrandName"]], null, null, null, _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_SortIcon_0"], _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_SortIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 245760, null, 0, primeng_table__WEBPACK_IMPORTED_MODULE_5__["SortIcon"], [primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          field: [0, "field"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 4, "th", [["pSortableColumn", "mobileModelName"]], [[2, "p-sortable-column", null], [2, "p-highlight", null], [1, "tabindex", 0], [1, "role", 0], [1, "aria-sort", 0]], [[null, "click"], [null, "keydown.enter"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).onClick($event) !== false;
            ad = pd_0 && ad;
          }

          if ("keydown.enter" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).onEnterKey($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 212992, null, 0, primeng_table__WEBPACK_IMPORTED_MODULE_5__["SortableColumn"], [primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"]], {
          field: [0, "field"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["mobileModelName "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "p-sortIcon", [["field", "mobileModelName"]], null, null, null, _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_SortIcon_0"], _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_SortIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 245760, null, 0, primeng_table__WEBPACK_IMPORTED_MODULE_5__["SortIcon"], [primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          field: [0, "field"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 4, "th", [["pSortableColumn", "accessoryTypeName"]], [[2, "p-sortable-column", null], [2, "p-highlight", null], [1, "tabindex", 0], [1, "role", 0], [1, "aria-sort", 0]], [[null, "click"], [null, "keydown.enter"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).onClick($event) !== false;
            ad = pd_0 && ad;
          }

          if ("keydown.enter" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).onEnterKey($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 212992, null, 0, primeng_table__WEBPACK_IMPORTED_MODULE_5__["SortableColumn"], [primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"]], {
          field: [0, "field"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["accessoryTypeName "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 1, "p-sortIcon", [["field", "accessoryTypeName"]], null, null, null, _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_SortIcon_0"], _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_SortIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 245760, null, 0, primeng_table__WEBPACK_IMPORTED_MODULE_5__["SortIcon"], [primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          field: [0, "field"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Actions"]))], function (_ck, _v) {
          _ck(_v, 3, 0);

          var currVal_5 = "name";

          _ck(_v, 6, 0, currVal_5);

          var currVal_6 = "name";

          _ck(_v, 9, 0, currVal_6);

          var currVal_12 = "description";

          _ck(_v, 11, 0, currVal_12);

          var currVal_13 = "description";

          _ck(_v, 14, 0, currVal_13);

          var currVal_19 = "videoUrl";

          _ck(_v, 16, 0, currVal_19);

          var currVal_20 = "videoUrl";

          _ck(_v, 19, 0, currVal_20);

          var currVal_26 = "mobileBrandName";

          _ck(_v, 21, 0, currVal_26);

          var currVal_27 = "mobileBrandName";

          _ck(_v, 24, 0, currVal_27);

          var currVal_33 = "mobileModelName";

          _ck(_v, 26, 0, currVal_33);

          var currVal_34 = "mobileModelName";

          _ck(_v, 29, 0, currVal_34);

          var currVal_40 = "accessoryTypeName";

          _ck(_v, 31, 0, currVal_40);

          var currVal_41 = "accessoryTypeName";

          _ck(_v, 34, 0, currVal_41);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).isEnabled();

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).sorted;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).isEnabled() ? "0" : null;
          var currVal_3 = "columnheader";

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).sortOrder;

          _ck(_v, 5, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).isEnabled();

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).sorted;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).isEnabled() ? "0" : null;
          var currVal_10 = "columnheader";

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).sortOrder;

          _ck(_v, 10, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11);

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).isEnabled();

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).sorted;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).isEnabled() ? "0" : null;
          var currVal_17 = "columnheader";

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).sortOrder;

          _ck(_v, 15, 0, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18);

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).isEnabled();

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).sorted;

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).isEnabled() ? "0" : null;
          var currVal_24 = "columnheader";

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).sortOrder;

          _ck(_v, 20, 0, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25);

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).isEnabled();

          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).sorted;

          var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).isEnabled() ? "0" : null;
          var currVal_31 = "columnheader";

          var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).sortOrder;

          _ck(_v, 25, 0, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32);

          var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).isEnabled();

          var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).sorted;

          var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).isEnabled() ? "0" : null;
          var currVal_38 = "columnheader";

          var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).sortOrder;

          _ck(_v, 30, 0, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39);
        });
      }

      function View_AccessoriesListComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 24, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "p-tableCheckbox", [], null, null, null, _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_TableCheckbox_0"], _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_TableCheckbox"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 245760, null, 0, primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableCheckbox"], [primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"], primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          value: [0, "value"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "button", [["class", "p-button-text p-button-rounded p-button-plain"], ["pButton", ""], ["pRipple", ""], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onClick($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, primeng_table__WEBPACK_IMPORTED_MODULE_5__["RowToggler"], [primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"]], {
          data: [0, "data"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 4341760, null, 0, primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          icon: [0, "icon"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 4, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "button", [["class", "p-button p-button-success p-mr-2"], ["icon", "pi pi-pencil"], ["pButton", ""]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.openNew("Edit", _v.context.$implicit) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 4341760, null, 0, primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          icon: [0, "icon"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "button", [["class", "p-button p-button-warning  p-mr-2"], ["icon", "pi pi-trash"], ["pButton", ""]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.deleteAccessory(_v.context.$implicit) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 4341760, null, 0, primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          icon: [0, "icon"]
        }, null)], function (_ck, _v) {
          var currVal_0 = _v.context.$implicit;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _v.context.$implicit;

          _ck(_v, 6, 0, currVal_1);

          var currVal_2 = _v.context.expanded ? "pi pi-chevron-down" : "pi pi-chevron-right";

          _ck(_v, 7, 0, currVal_2);

          var currVal_9 = "pi pi-pencil";

          _ck(_v, 22, 0, currVal_9);

          var currVal_10 = "pi pi-trash";

          _ck(_v, 24, 0, currVal_10);
        }, function (_ck, _v) {
          var currVal_3 = _v.context.$implicit.name;

          _ck(_v, 9, 0, currVal_3);

          var currVal_4 = _v.context.$implicit.description;

          _ck(_v, 11, 0, currVal_4);

          var currVal_5 = _v.context.$implicit.videoUrl ? _v.context.$implicit.videoUrl : "not Found Url";

          _ck(_v, 13, 0, currVal_5);

          var currVal_6 = _v.context.$implicit.mobileBrandName;

          _ck(_v, 15, 0, currVal_6);

          var currVal_7 = _v.context.$implicit.mobileModelName;

          _ck(_v, 17, 0, currVal_7);

          var currVal_8 = _v.context.$implicit.accessoryTypeName;

          _ck(_v, 19, 0, currVal_8);
        });
      }

      function View_AccessoriesListComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 42, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "th", [["pSortableColumn", "id"]], [[2, "p-sortable-column", null], [2, "p-highlight", null], [1, "tabindex", 0], [1, "role", 0], [1, "aria-sort", 0]], [[null, "click"], [null, "keydown.enter"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event) !== false;
            ad = pd_0 && ad;
          }

          if ("keydown.enter" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onEnterKey($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 212992, null, 0, primeng_table__WEBPACK_IMPORTED_MODULE_5__["SortableColumn"], [primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"]], {
          field: [0, "field"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["id "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "p-sortIcon", [["field", "id"]], null, null, null, _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_SortIcon_0"], _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_SortIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 245760, null, 0, primeng_table__WEBPACK_IMPORTED_MODULE_5__["SortIcon"], [primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          field: [0, "field"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Product image"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 4, "th", [["pSortableColumn", "price"]], [[2, "p-sortable-column", null], [2, "p-highlight", null], [1, "tabindex", 0], [1, "role", 0], [1, "aria-sort", 0]], [[null, "click"], [null, "keydown.enter"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onClick($event) !== false;
            ad = pd_0 && ad;
          }

          if ("keydown.enter" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onEnterKey($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 212992, null, 0, primeng_table__WEBPACK_IMPORTED_MODULE_5__["SortableColumn"], [primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"]], {
          field: [0, "field"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Price "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "p-sortIcon", [["field", "price"]], null, null, null, _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_SortIcon_0"], _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_SortIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 245760, null, 0, primeng_table__WEBPACK_IMPORTED_MODULE_5__["SortIcon"], [primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          field: [0, "field"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 4, "th", [["pSortableColumn", "discountPrice"]], [[2, "p-sortable-column", null], [2, "p-highlight", null], [1, "tabindex", 0], [1, "role", 0], [1, "aria-sort", 0]], [[null, "click"], [null, "keydown.enter"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).onClick($event) !== false;
            ad = pd_0 && ad;
          }

          if ("keydown.enter" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).onEnterKey($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 212992, null, 0, primeng_table__WEBPACK_IMPORTED_MODULE_5__["SortableColumn"], [primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"]], {
          field: [0, "field"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["DiscountPrice "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "p-sortIcon", [["field", "discountPrice"]], null, null, null, _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_SortIcon_0"], _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_SortIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 245760, null, 0, primeng_table__WEBPACK_IMPORTED_MODULE_5__["SortIcon"], [primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          field: [0, "field"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 4, "th", [["pSortableColumn", "quantity"]], [[2, "p-sortable-column", null], [2, "p-highlight", null], [1, "tabindex", 0], [1, "role", 0], [1, "aria-sort", 0]], [[null, "click"], [null, "keydown.enter"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onClick($event) !== false;
            ad = pd_0 && ad;
          }

          if ("keydown.enter" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onEnterKey($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 212992, null, 0, primeng_table__WEBPACK_IMPORTED_MODULE_5__["SortableColumn"], [primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"]], {
          field: [0, "field"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Quantity "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "p-sortIcon", [["field", "quantity"]], null, null, null, _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_SortIcon_0"], _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_SortIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 245760, null, 0, primeng_table__WEBPACK_IMPORTED_MODULE_5__["SortIcon"], [primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          field: [0, "field"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 4, "th", [["pSortableColumn", "style"]], [[2, "p-sortable-column", null], [2, "p-highlight", null], [1, "tabindex", 0], [1, "role", 0], [1, "aria-sort", 0]], [[null, "click"], [null, "keydown.enter"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).onClick($event) !== false;
            ad = pd_0 && ad;
          }

          if ("keydown.enter" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).onEnterKey($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 212992, null, 0, primeng_table__WEBPACK_IMPORTED_MODULE_5__["SortableColumn"], [primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"]], {
          field: [0, "field"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Style "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, "p-sortIcon", [["field", "style"]], null, null, null, _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_SortIcon_0"], _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_SortIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 245760, null, 0, primeng_table__WEBPACK_IMPORTED_MODULE_5__["SortIcon"], [primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          field: [0, "field"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 4, "th", [["pSortableColumn", "highlight"]], [[2, "p-sortable-column", null], [2, "p-highlight", null], [1, "tabindex", 0], [1, "role", 0], [1, "aria-sort", 0]], [[null, "click"], [null, "keydown.enter"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).onClick($event) !== false;
            ad = pd_0 && ad;
          }

          if ("keydown.enter" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).onEnterKey($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 212992, null, 0, primeng_table__WEBPACK_IMPORTED_MODULE_5__["SortableColumn"], [primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"]], {
          field: [0, "field"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["highlight "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 1, "p-sortIcon", [["field", "highlight"]], null, null, null, _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_SortIcon_0"], _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_SortIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 245760, null, 0, primeng_table__WEBPACK_IMPORTED_MODULE_5__["SortIcon"], [primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          field: [0, "field"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 4, "th", [["pSortableColumn", "hotDeal"]], [[2, "p-sortable-column", null], [2, "p-highlight", null], [1, "tabindex", 0], [1, "role", 0], [1, "aria-sort", 0]], [[null, "click"], [null, "keydown.enter"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).onClick($event) !== false;
            ad = pd_0 && ad;
          }

          if ("keydown.enter" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).onEnterKey($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 212992, null, 0, primeng_table__WEBPACK_IMPORTED_MODULE_5__["SortableColumn"], [primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"]], {
          field: [0, "field"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["hot deal "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 1, "p-sortIcon", [["field", "hotDeal"]], null, null, null, _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_SortIcon_0"], _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_SortIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 245760, null, 0, primeng_table__WEBPACK_IMPORTED_MODULE_5__["SortIcon"], [primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          field: [0, "field"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Actions"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 1, "button", [["class", "p-button p-button-success p-mr-2"], ["icon", "pi pi-plus-circle"], ["pButton", ""], ["style", "width: 40px;"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.manageVersion("Add", _v.parent.context.$implicit.id) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 4341760, null, 0, primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          icon: [0, "icon"]
        }, null)], function (_ck, _v) {
          var currVal_5 = "id";

          _ck(_v, 2, 0, currVal_5);

          var currVal_6 = "id";

          _ck(_v, 5, 0, currVal_6);

          var currVal_12 = "price";

          _ck(_v, 9, 0, currVal_12);

          var currVal_13 = "price";

          _ck(_v, 12, 0, currVal_13);

          var currVal_19 = "discountPrice";

          _ck(_v, 14, 0, currVal_19);

          var currVal_20 = "discountPrice";

          _ck(_v, 17, 0, currVal_20);

          var currVal_26 = "quantity";

          _ck(_v, 19, 0, currVal_26);

          var currVal_27 = "quantity";

          _ck(_v, 22, 0, currVal_27);

          var currVal_33 = "style";

          _ck(_v, 24, 0, currVal_33);

          var currVal_34 = "style";

          _ck(_v, 27, 0, currVal_34);

          var currVal_40 = "highlight";

          _ck(_v, 29, 0, currVal_40);

          var currVal_41 = "highlight";

          _ck(_v, 32, 0, currVal_41);

          var currVal_47 = "hotDeal";

          _ck(_v, 34, 0, currVal_47);

          var currVal_48 = "hotDeal";

          _ck(_v, 37, 0, currVal_48);

          var currVal_49 = "pi pi-plus-circle";

          _ck(_v, 42, 0, currVal_49);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).isEnabled();

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).sorted;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).isEnabled() ? "0" : null;
          var currVal_3 = "columnheader";

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).sortOrder;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).isEnabled();

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).sorted;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).isEnabled() ? "0" : null;
          var currVal_10 = "columnheader";

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).sortOrder;

          _ck(_v, 8, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11);

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).isEnabled();

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).sorted;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).isEnabled() ? "0" : null;
          var currVal_17 = "columnheader";

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).sortOrder;

          _ck(_v, 13, 0, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18);

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).isEnabled();

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).sorted;

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).isEnabled() ? "0" : null;
          var currVal_24 = "columnheader";

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).sortOrder;

          _ck(_v, 18, 0, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25);

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).isEnabled();

          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).sorted;

          var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).isEnabled() ? "0" : null;
          var currVal_31 = "columnheader";

          var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).sortOrder;

          _ck(_v, 23, 0, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32);

          var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).isEnabled();

          var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).sorted;

          var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).isEnabled() ? "0" : null;
          var currVal_38 = "columnheader";

          var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).sortOrder;

          _ck(_v, 28, 0, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39);

          var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).isEnabled();

          var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).sorted;

          var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).isEnabled() ? "0" : null;
          var currVal_45 = "columnheader";

          var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).sortOrder;

          _ck(_v, 33, 0, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46);
        });
      }

      function View_AccessoriesListComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 23, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "img", [["class", "p-shadow-4 image-place"], ["width", "100"]], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](7, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](10, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](18, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 4, "td", [["style", "display: flex !important; width: fit-content;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "button", [["class", "p-button p-button-success p-mr-2"], ["icon", "pi pi-pencil"], ["pButton", ""], ["style", "width: 40px;"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.manageVersion("Edit", _v.parent.context.$implicit.id, _v.context.$implicit) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 4341760, null, 0, primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          icon: [0, "icon"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "button", [["class", "p-button p-button-warning  p-mr-2"], ["icon", "pi pi-trash"], ["pButton", ""], ["style", "width: 40px;"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.deleteVersion(_v.context.$implicit) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 4341760, null, 0, primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          icon: [0, "icon"]
        }, null)], function (_ck, _v) {
          var currVal_9 = "pi pi-pencil";

          _ck(_v, 21, 0, currVal_9);

          var currVal_10 = "pi pi-trash";

          _ck(_v, 23, 0, currVal_10);
        }, function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.Id;

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = _v.context.$implicit.productImage ? "data:image/PNG;base64," + _v.context.$implicit.productImage : "../../../../../../assets/not-found.png";
          var currVal_2 = _v.context.$implicit.style;

          _ck(_v, 4, 0, currVal_1, currVal_2);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.price, "EUR"));

          _ck(_v, 6, 0, currVal_3);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 9, 0, _ck(_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.discountPrice, "EUR"));

          _ck(_v, 9, 0, currVal_4);

          var currVal_5 = _v.context.$implicit.quantity;

          _ck(_v, 12, 0, currVal_5);

          var currVal_6 = _v.context.$implicit.style;

          _ck(_v, 14, 0, currVal_6);

          var currVal_7 = _v.context.$implicit.highlight;

          _ck(_v, 16, 0, currVal_7);

          var currVal_8 = _v.context.$implicit.hotDeal;

          _ck(_v, 18, 0, currVal_8);
        });
      }

      function View_AccessoriesListComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [["colspan", "6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["There are no versions for this Accessory yet."]))], null, null);
      }

      function View_AccessoriesListComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 11, "td", [["colspan", "8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 10, "div", [["class", "p-p-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 9, "p-table", [["dataKey", "Id"]], null, null, null, _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_Table_0"], _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_Table"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableService"], primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 6012928, null, 1, primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          dataKey: [0, "dataKey"],
          value: [1, "value"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
          templates: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_AccessoriesListComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, [[4, 4]], 0, primeng_api__WEBPACK_IMPORTED_MODULE_7__["PrimeTemplate"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          name: [0, "name"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_AccessoriesListComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, [[4, 4]], 0, primeng_api__WEBPACK_IMPORTED_MODULE_7__["PrimeTemplate"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          name: [0, "name"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_AccessoriesListComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, [[4, 4]], 0, primeng_api__WEBPACK_IMPORTED_MODULE_7__["PrimeTemplate"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          name: [0, "name"]
        }, null)], function (_ck, _v) {
          var currVal_0 = "Id";
          var currVal_1 = _v.context.$implicit.accessoryVersions;

          _ck(_v, 5, 0, currVal_0, currVal_1);

          var currVal_2 = "header";

          _ck(_v, 8, 0, currVal_2);

          var currVal_3 = "body";

          _ck(_v, 10, 0, currVal_3);

          var currVal_4 = "emptymessage";

          _ck(_v, 12, 0, currVal_4);
        }, null);
      }

      function View_AccessoriesListComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_CURRENCY_CODE"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "p-toast", [], null, null, null, _node_modules_primeng_toast_primeng_toast_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_Toast_0"], _node_modules_primeng_toast_primeng_toast_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_Toast"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 1294336, null, 1, primeng_toast__WEBPACK_IMPORTED_MODULE_10__["Toast"], [primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          templates: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 27, "div", [["class", "ui-g"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 21, "div", [["class", "ui-g-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 20, "div", [["class", "card card-w-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Accessory"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 5, "p-toolbar", [["styleClass", "p-mb-4"]], null, null, null, _node_modules_primeng_toolbar_primeng_toolbar_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_Toolbar_0"], _node_modules_primeng_toolbar_primeng_toolbar_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_Toolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 1097728, null, 1, primeng_toolbar__WEBPACK_IMPORTED_MODULE_12__["Toolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          styleClass: [0, "styleClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
          templates: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 2, "div", [["class", "ui-toolbar-group-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "button", [["class", "p-button-success p-mr-2"], ["icon", "pi pi-plus"], ["label", "New"], ["pButton", ""]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.openNew("Add") !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 4341760, null, 0, primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          label: [0, "label"],
          icon: [1, "icon"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 11, "p-table", [["dataKey", "id"], ["selectionMode", "multiple"]], null, [[null, "selectionChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("selectionChange" === en) {
            var pd_0 = (_co.selecteAccessory = $event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_Table_0"], _node_modules_primeng_table_primeng_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_Table"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableService"], primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 6012928, [["dt", 4]], 1, primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          selectionMode: [0, "selectionMode"],
          dataKey: [1, "dataKey"],
          value: [2, "value"],
          selection: [3, "selection"]
        }, {
          selectionChange: "selectionChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
          templates: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_AccessoriesListComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, [[3, 4]], 0, primeng_api__WEBPACK_IMPORTED_MODULE_7__["PrimeTemplate"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          name: [0, "name"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_AccessoriesListComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, [[3, 4]], 0, primeng_api__WEBPACK_IMPORTED_MODULE_7__["PrimeTemplate"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          name: [0, "name"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_AccessoriesListComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, [[3, 4]], 0, primeng_api__WEBPACK_IMPORTED_MODULE_7__["PrimeTemplate"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          name: [0, "name"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_AccessoriesListComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, [[3, 4]], 0, primeng_api__WEBPACK_IMPORTED_MODULE_7__["PrimeTemplate"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          name: [0, "name"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 4, "p-confirmDialog", [], null, null, null, _node_modules_primeng_confirmdialog_primeng_confirmdialog_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_ConfirmDialog_0"], _node_modules_primeng_confirmdialog_primeng_confirmdialog_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_ConfirmDialog"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 1228800, null, 2, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__["ConfirmDialog"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], primeng_api__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          style: [0, "style"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
          footer: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
          templates: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](31, {
          width: 0
        })], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 2, 0);

          var currVal_0 = "p-mb-4";

          _ck(_v, 10, 0, currVal_0);

          var currVal_1 = "New";
          var currVal_2 = "pi pi-plus";

          _ck(_v, 14, 0, currVal_1, currVal_2);

          var currVal_3 = "multiple";
          var currVal_4 = "id";
          var currVal_5 = _co.Accessories;
          var currVal_6 = _co.selecteAccessory;

          _ck(_v, 17, 0, currVal_3, currVal_4, currVal_5, currVal_6);

          var currVal_7 = "caption";

          _ck(_v, 20, 0, currVal_7);

          var currVal_8 = "header";

          _ck(_v, 22, 0, currVal_8);

          var currVal_9 = "body";

          _ck(_v, 24, 0, currVal_9);

          var currVal_10 = "rowexpansion";

          _ck(_v, 26, 0, currVal_10);

          var currVal_11 = _ck(_v, 31, 0, "450px");

          _ck(_v, 28, 0, currVal_11);
        }, null);
      }

      function View_AccessoriesListComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "app-accessories-list", [], null, null, null, View_AccessoriesListComponent_0, RenderType_AccessoriesListComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_15__["DialogService"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_15__["DialogService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"], primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, primeng_api__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"], primeng_api__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 0, _accessories_list_component__WEBPACK_IMPORTED_MODULE_16__["AccessoriesListComponent"], [primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_15__["DialogService"], primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"], primeng_api__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"], _mobiles_services_mobile_api_service__WEBPACK_IMPORTED_MODULE_17__["MobileApiService"], _services_accessories_service__WEBPACK_IMPORTED_MODULE_18__["AccessoriesService"]], null, null)], function (_ck, _v) {
          _ck(_v, 4, 0);
        }, null);
      }

      var AccessoriesListComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-accessories-list", _accessories_list_component__WEBPACK_IMPORTED_MODULE_16__["AccessoriesListComponent"], View_AccessoriesListComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "./src/app/modules/product-management/components/accessories/accessories-list/accessories-list.component.scss.shim.ngstyle.js":
    /*!************************************************************************************************************************************!*\
      !*** ./src/app/modules/product-management/components/accessories/accessories-list/accessories-list.component.scss.shim.ngstyle.js ***!
      \************************************************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function srcAppModulesProductManagementComponentsAccessoriesAccessoriesListAccessoriesListComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZHVjdC1tYW5hZ2VtZW50L2NvbXBvbmVudHMvYWNjZXNzb3JpZXMvYWNjZXNzb3JpZXMtbGlzdC9hY2Nlc3Nvcmllcy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"];
      /***/
    },

    /***/
    "./src/app/modules/product-management/components/accessories/accessories-list/accessories-list.component.ts":
    /*!******************************************************************************************************************!*\
      !*** ./src/app/modules/product-management/components/accessories/accessories-list/accessories-list.component.ts ***!
      \******************************************************************************************************************/

    /*! exports provided: AccessoriesListComponent */

    /***/
    function srcAppModulesProductManagementComponentsAccessoriesAccessoriesListAccessoriesListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccessoriesListComponent", function () {
        return AccessoriesListComponent;
      });
      /* harmony import */


      var _mobiles_models_ng_dropdown_option_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../mobiles/models/ng-dropdown-option.model */
      "./src/app/modules/product-management/components/mobiles/models/ng-dropdown-option.model.ts");
      /* harmony import */


      var _mobiles_models_table_columns_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../mobiles/models/table.columns.model */
      "./src/app/modules/product-management/components/mobiles/models/table.columns.model.ts");
      /* harmony import */


      var _accessories_add_accessories_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../accessories-add/accessories-add.component */
      "./src/app/modules/product-management/components/accessories/accessories-add/accessories-add.component.ts");
      /* harmony import */


      var _accessories_version_add_accessories_version_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../accessories-version-add/accessories-version-add.component */
      "./src/app/modules/product-management/components/accessories/accessories-version-add/accessories-version-add.component.ts");

      var AccessoriesListComponent = /*#__PURE__*/function () {
        function AccessoriesListComponent(dialogService, messageService, confirmationService, mobileApiSrvc, AccessoriesServices) {
          _classCallCheck(this, AccessoriesListComponent);

          this.dialogService = dialogService;
          this.messageService = messageService;
          this.confirmationService = confirmationService;
          this.mobileApiSrvc = mobileApiSrvc;
          this.AccessoriesServices = AccessoriesServices;
          this.mobileModelOptions = [];
          this.accessoryType = [];
          this.deviceBrandOptions = [];
          this.cols = [];
          this.Accessories = [];
        }

        _createClass(AccessoriesListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getTableColumns();
            this.getAllAccessoriesData();
          }
        }, {
          key: "getTableColumns",
          value: function getTableColumns() {
            var _this6 = this;

            var columns = ["Name", "Description", "VideoUrl", "Brand", 'Model'];
            columns.forEach(function (column) {
              return _this6.cols.push(new _mobiles_models_table_columns_model__WEBPACK_IMPORTED_MODULE_1__["TableColumn"](column, column));
            });
          }
        }, {
          key: "getDeviceBrand",
          value: function getDeviceBrand() {
            var _this7 = this;

            var deviceBrands = [];
            this.mobileApiSrvc.getDeviceBrand().subscribe(function (data) {
              deviceBrands = data;
              deviceBrands.forEach(function (deviceBrand) {
                return _this7.deviceBrandOptions.push(new _mobiles_models_ng_dropdown_option_model__WEBPACK_IMPORTED_MODULE_0__["NgDropDownOption"](deviceBrand['id'], deviceBrand['name']));
              });
            });
          }
        }, {
          key: "getAllAccessoriesData",
          value: function getAllAccessoriesData() {
            var _this8 = this;

            this.AccessoriesServices.getAllAccessories().subscribe(function (res) {
              _this8.Accessories = res.data;
            });
          }
        }, {
          key: "openNew",
          value: function openNew(mode, data) {
            var _this9 = this;

            var ref = this.dialogService.open(_accessories_add_accessories_add_component__WEBPACK_IMPORTED_MODULE_2__["AccessoriesAddComponent"], {
              data: {
                data: data,
                mode: mode
              },
              header: "".concat(mode, " Accessories"),
              width: '50%',
              contentStyle: {
                "max-height": "500px",
                "overflow": "auto"
              }
            });
            ref.onClose.subscribe(function (data) {
              if (data) {
                _this9.messageService.add({
                  severity: 'Success',
                  summary: 'Accessories Action',
                  detail: data,
                  life: 3000
                });

                _this9.getAllAccessoriesData();
              }
            });
          }
        }, {
          key: "deleteAccessory",
          value: function deleteAccessory(Accessory) {
            var _this10 = this;

            this.confirmationService.confirm({
              message: 'Are you sure you want to delete ' + Accessory.name + '?',
              header: 'Confirm',
              icon: 'pi pi-exclamation-triangle',
              accept: function accept() {
                _this10.Accessories = _this10.Accessories.filter(function (Acce) {
                  return Acce.id !== Accessory.id;
                });

                _this10.AccessoriesServices.deleteAccessory(Accessory.id).subscribe(function (data) {
                  _this10.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Accessory Deleted',
                    life: 3000
                  });
                });
              }
            });
          }
        }, {
          key: "manageVersion",
          value: function manageVersion(mode, accessoryId, data) {
            var _this11 = this;

            var ref = this.dialogService.open(_accessories_version_add_accessories_version_add_component__WEBPACK_IMPORTED_MODULE_3__["AccessoriesVersionAddComponent"], {
              data: {
                data: data,
                mode: mode,
                accessoryId: accessoryId
              },
              header: "".concat(mode, " Version"),
              width: '50%',
              contentStyle: {
                "max-height": "500px",
                "overflow": "auto"
              }
            });
            ref.onClose.subscribe(function (data) {
              if (data) {
                _this11.getAllAccessoriesData();

                _this11.messageService.add({
                  severity: 'Success',
                  summary: 'Version Action',
                  detail: data,
                  life: 3000
                });
              }
            });
          }
        }, {
          key: "deleteVersion",
          value: function deleteVersion(version) {
            var _this12 = this;

            this.confirmationService.confirm({
              message: 'Are you sure you want to delete this item ?',
              header: 'Confirm',
              icon: 'pi pi-exclamation-triangle',
              accept: function accept() {
                _this12.AccessoriesServices.deleteversion(version.id).subscribe(function (data) {
                  _this12.getAllAccessoriesData();

                  _this12.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Version Deleted',
                    life: 3000
                  });
                });
              }
            });
          }
        }]);

        return AccessoriesListComponent;
      }();
      /***/

    },

    /***/
    "./src/app/modules/product-management/components/accessories/accessories-routing.module.ts":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/product-management/components/accessories/accessories-routing.module.ts ***!
      \*************************************************************************************************/

    /*! exports provided: AccessoriesRoutingModule */

    /***/
    function srcAppModulesProductManagementComponentsAccessoriesAccessoriesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccessoriesRoutingModule", function () {
        return AccessoriesRoutingModule;
      });
      /* harmony import */


      var _accessories_list_accessories_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./accessories-list/accessories-list.component */
      "./src/app/modules/product-management/components/accessories/accessories-list/accessories-list.component.ts");
      /* harmony import */


      var _accessories_add_accessories_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./accessories-add/accessories-add.component */
      "./src/app/modules/product-management/components/accessories/accessories-add/accessories-add.component.ts");

      var routes = [{
        path: 'list',
        component: _accessories_list_accessories_list_component__WEBPACK_IMPORTED_MODULE_0__["AccessoriesListComponent"]
      }, {
        path: 'add',
        component: _accessories_add_accessories_add_component__WEBPACK_IMPORTED_MODULE_1__["AccessoriesAddComponent"]
      }, {
        path: 'edit:id',
        component: _accessories_add_accessories_add_component__WEBPACK_IMPORTED_MODULE_1__["AccessoriesAddComponent"]
      }];

      var AccessoriesRoutingModule = function AccessoriesRoutingModule() {
        _classCallCheck(this, AccessoriesRoutingModule);
      };
      /***/

    },

    /***/
    "./src/app/modules/product-management/components/accessories/accessories-version-add/accessories-version-add.component.ngfactory.js":
    /*!******************************************************************************************************************************************!*\
      !*** ./src/app/modules/product-management/components/accessories/accessories-version-add/accessories-version-add.component.ngfactory.js ***!
      \******************************************************************************************************************************************/

    /*! exports provided: RenderType_AccessoriesVersionAddComponent, View_AccessoriesVersionAddComponent_0, View_AccessoriesVersionAddComponent_Host_0, AccessoriesVersionAddComponentNgFactory */

    /***/
    function srcAppModulesProductManagementComponentsAccessoriesAccessoriesVersionAddAccessoriesVersionAddComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_AccessoriesVersionAddComponent", function () {
        return RenderType_AccessoriesVersionAddComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_AccessoriesVersionAddComponent_0", function () {
        return View_AccessoriesVersionAddComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_AccessoriesVersionAddComponent_Host_0", function () {
        return View_AccessoriesVersionAddComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccessoriesVersionAddComponentNgFactory", function () {
        return AccessoriesVersionAddComponentNgFactory;
      });
      /* harmony import */


      var _accessories_version_add_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./accessories-version-add.component.scss.shim.ngstyle */
      "./src/app/modules/product-management/components/accessories/accessories-version-add/accessories-version-add.component.scss.shim.ngstyle.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _node_modules_primeng_toast_primeng_toast_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../../node_modules/primeng/toast/primeng-toast.ngfactory */
      "./node_modules/primeng/toast/primeng-toast.ngfactory.js");
      /* harmony import */


      var primeng_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! primeng/toast */
      "./node_modules/primeng/fesm2015/primeng-toast.js");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! primeng/api */
      "./node_modules/primeng/fesm2015/primeng-api.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/inputtext */
      "./node_modules/primeng/fesm2015/primeng-inputtext.js");
      /* harmony import */


      var _node_modules_primeng_fileupload_primeng_fileupload_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../../node_modules/primeng/fileupload/primeng-fileupload.ngfactory */
      "./node_modules/primeng/fileupload/primeng-fileupload.ngfactory.js");
      /* harmony import */


      var primeng_fileupload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! primeng/fileupload */
      "./node_modules/primeng/fesm2015/primeng-fileupload.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var _node_modules_primeng_dropdown_primeng_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../../../../node_modules/primeng/dropdown/primeng-dropdown.ngfactory */
      "./node_modules/primeng/dropdown/primeng-dropdown.ngfactory.js");
      /* harmony import */


      var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! primeng/dropdown */
      "./node_modules/primeng/fesm2015/primeng-dropdown.js");
      /* harmony import */


      var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! primeng/button */
      "./node_modules/primeng/fesm2015/primeng-button.js");
      /* harmony import */


      var _accessories_version_add_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./accessories-version-add.component */
      "./src/app/modules/product-management/components/accessories/accessories-version-add/accessories-version-add.component.ts");
      /* harmony import */


      var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! primeng/dynamicdialog */
      "./node_modules/primeng/fesm2015/primeng-dynamicdialog.js");
      /* harmony import */


      var _services_accessories_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../services/accessories.service */
      "./src/app/modules/product-management/components/accessories/services/accessories.service.ts");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_AccessoriesVersionAddComponent = [_accessories_version_add_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_AccessoriesVersionAddComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_AccessoriesVersionAddComponent,
        data: {}
      });

      function View_AccessoriesVersionAddComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["accessories-version-add works!"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "p-toast", [], null, null, null, _node_modules_primeng_toast_primeng_toast_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_Toast_0"], _node_modules_primeng_toast_primeng_toast_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_Toast"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 1294336, null, 1, primeng_toast__WEBPACK_IMPORTED_MODULE_3__["Toast"], [primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          templates: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 76, "form", [["class", "p-fluid"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("submit" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onSubmit($event) !== false;
            ad = pd_0 && ad;
          }

          if ("reset" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onReset() !== false;
            ad = pd_1 && ad;
          }

          if ("ngSubmit" === en) {
            var pd_2 = _co.handleVersion() !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], [[8, null], [8, null]], {
          form: [0, "form"]
        }, {
          ngSubmit: "ngSubmit"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 69, "div", [["class", "p-fluid p-formgrid p-grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 10, "div", [["class", "p-field p-col-12 p-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "label", [["class", "p-col-12 "], ["for", "Vprice"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Price"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 7, "input", [["formControlName", "price"], ["inputId", "price"], ["pInputText", ""], ["placeholder", "price"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "p-inputtext", null], [2, "p-component", null], [2, "p-filled", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("input" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onChange($event.target.value) !== false;
            ad = pd_4 && ad;
          }

          if ("blur" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onTouched() !== false;
            ad = pd_5 && ad;
          }

          if ("input" === en) {
            var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).onInput($event) !== false;
            ad = pd_6 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) {
          return [p0_0, p1_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 278528, null, 0, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputText"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 10, "div", [["class", "p-field p-col-12 p-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "label", [["class", "p-col-12 "], ["for", "discountPrice"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["discountPrice"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 7, "input", [["formControlName", "discountPrice"], ["inputId", "discountPrice"], ["pInputText", ""], ["placeholder", "discountPrice"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "p-inputtext", null], [2, "p-component", null], [2, "p-filled", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("input" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).onChange($event.target.value) !== false;
            ad = pd_4 && ad;
          }

          if ("blur" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).onTouched() !== false;
            ad = pd_5 && ad;
          }

          if ("input" === en) {
            var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).onInput($event) !== false;
            ad = pd_6 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) {
          return [p0_0, p1_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 278528, null, 0, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputText"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 5, "div", [["class", "p-field p-col-12 p-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 1, "label", [["class", "p-col-12 "], ["for", "image"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Product Image"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 2, "p-fileUpload", [["accept", "image/*"], ["id", "image"], ["maxFileSize", "1000000"], ["name", "image"]], null, [[null, "onSelect"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("onSelect" === en) {
            var pd_0 = _co.selectImage($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_primeng_fileupload_primeng_fileupload_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_FileUpload_0"], _node_modules_primeng_fileupload_primeng_fileupload_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_FileUpload"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 5423104, null, 1, primeng_fileupload__WEBPACK_IMPORTED_MODULE_8__["FileUpload"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          name: [0, "name"],
          accept: [1, "accept"],
          maxFileSize: [2, "maxFileSize"],
          showUploadButton: [3, "showUploadButton"]
        }, {
          onSelect: "onSelect"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
          templates: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 10, "div", [["class", "p-field p-col-12 p-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 1, "label", [["class", "p-col-12 "], ["for", "quantity"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Quantity"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 7, "input", [["formControlName", "quantity"], ["inputId", "quantity"], ["pInputText", ""], ["placeholder", "quantity"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "p-inputtext", null], [2, "p-component", null], [2, "p-filled", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("input" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).onChange($event.target.value) !== false;
            ad = pd_4 && ad;
          }

          if ("blur" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).onTouched() !== false;
            ad = pd_5 && ad;
          }

          if ("input" === en) {
            var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).onInput($event) !== false;
            ad = pd_6 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) {
          return [p0_0, p1_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 278528, null, 0, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputText"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 9, "div", [["class", "p-field p-col-12 p-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 1, "label", [["class", "p-col-12 "], ["for", "style"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Style"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 6, "input", [["formControlName", "style"], ["inputId", "style"], ["pInputText", ""], ["placeholder", "style"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "p-inputtext", null], [2, "p-component", null], [2, "p-filled", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("input" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).onInput($event) !== false;
            ad = pd_4 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 278528, null, 0, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputText"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 9, "div", [["class", "p-field p-col-12 p-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 1, "label", [["class", "p-col-12 "], ["for", "highlight"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Highlight"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 6, "p-dropdown", [["formControlName", "highlight"], ["id", "highlight"]], [[2, "p-inputwrapper-filled", null], [2, "p-inputwrapper-focus", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, _node_modules_primeng_dropdown_primeng_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_Dropdown_0"], _node_modules_primeng_dropdown_primeng_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_Dropdown"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 13877248, null, 1, primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__["Dropdown"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          placeholder: [0, "placeholder"],
          options: [1, "options"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
          templates: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__["Dropdown"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](67, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 9, "div", [["class", "p-field p-col-12 p-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 1, "label", [["class", "p-col-12 "], ["for", "hotDeal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["hotDeal"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 6, "p-dropdown", [["formControlName", "hotDeal"], ["id", "hotDeal"]], [[2, "p-inputwrapper-filled", null], [2, "p-inputwrapper-focus", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, _node_modules_primeng_dropdown_primeng_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_Dropdown_0"], _node_modules_primeng_dropdown_primeng_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_Dropdown"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](74, 13877248, null, 1, primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__["Dropdown"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          placeholder: [0, "placeholder"],
          options: [1, "options"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
          templates: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__["Dropdown"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](77, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](79, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 1, "button", [["pButton", ""], ["type", "submit"]], [[8, "disabled", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](81, 4341760, null, 0, primeng_button__WEBPACK_IMPORTED_MODULE_13__["ButtonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          label: [0, "label"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 3, 0);

          var currVal_7 = _co.versionForm;

          _ck(_v, 7, 0, currVal_7);

          var currVal_18 = "price";

          _ck(_v, 18, 0, currVal_18);

          _ck(_v, 21, 0);

          var currVal_29 = "discountPrice";

          _ck(_v, 29, 0, currVal_29);

          _ck(_v, 32, 0);

          var currVal_30 = "image";
          var currVal_31 = "image/*";
          var currVal_32 = "1000000";
          var currVal_33 = false;

          _ck(_v, 37, 0, currVal_30, currVal_31, currVal_32, currVal_33);

          var currVal_44 = "quantity";

          _ck(_v, 46, 0, currVal_44);

          _ck(_v, 49, 0);

          var currVal_55 = "style";

          _ck(_v, 56, 0, currVal_55);

          _ck(_v, 59, 0);

          var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.data ? _co.data["highlight"] : "highlight", "");

          var currVal_66 = _co.highlightOptions;

          _ck(_v, 64, 0, currVal_65, currVal_66);

          var currVal_67 = "highlight";

          _ck(_v, 67, 0, currVal_67);

          var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.data ? _co.data["hotDeal"] : "hotDeal", "");

          var currVal_78 = _co.hotDealOptions;

          _ck(_v, 74, 0, currVal_77, currVal_78);

          var currVal_79 = "hotDeal";

          _ck(_v, 77, 0, currVal_79);

          var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.mode, " Version");

          _ck(_v, 81, 0, currVal_81);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassUntouched;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassTouched;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPristine;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassDirty;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassValid;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassInvalid;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPending;

          _ck(_v, 5, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassUntouched;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassTouched;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassPristine;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassDirty;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassValid;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassInvalid;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassPending;

          var currVal_15 = true;
          var currVal_16 = true;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).filled;

          _ck(_v, 14, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17);

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassUntouched;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassTouched;

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassPristine;

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassDirty;

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassValid;

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassInvalid;

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassPending;

          var currVal_26 = true;
          var currVal_27 = true;

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).filled;

          _ck(_v, 25, 0, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28);

          var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassUntouched;

          var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassTouched;

          var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassPristine;

          var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassDirty;

          var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassValid;

          var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassInvalid;

          var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassPending;

          var currVal_41 = true;
          var currVal_42 = true;

          var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).filled;

          _ck(_v, 42, 0, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43);

          var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassUntouched;

          var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassTouched;

          var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassPristine;

          var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassDirty;

          var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassValid;

          var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassInvalid;

          var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassPending;

          var currVal_52 = true;
          var currVal_53 = true;

          var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).filled;

          _ck(_v, 53, 0, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54);

          var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).filled;

          var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).focused;

          var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).ngClassUntouched;

          var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).ngClassTouched;

          var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).ngClassPristine;

          var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).ngClassDirty;

          var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).ngClassValid;

          var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).ngClassInvalid;

          var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).ngClassPending;

          _ck(_v, 63, 0, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64);

          var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).filled;

          var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).focused;

          var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).ngClassUntouched;

          var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).ngClassTouched;

          var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).ngClassPristine;

          var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).ngClassDirty;

          var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).ngClassValid;

          var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).ngClassInvalid;

          var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).ngClassPending;

          _ck(_v, 73, 0, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76);

          var currVal_80 = !_co.versionForm.valid;

          _ck(_v, 80, 0, currVal_80);
        });
      }

      function View_AccessoriesVersionAddComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-accessories-version-add", [], null, null, null, View_AccessoriesVersionAddComponent_0, RenderType_AccessoriesVersionAddComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _accessories_version_add_component__WEBPACK_IMPORTED_MODULE_14__["AccessoriesVersionAddComponent"], [primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_15__["DynamicDialogRef"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_15__["DynamicDialogConfig"], _services_accessories_service__WEBPACK_IMPORTED_MODULE_16__["AccessoriesService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var AccessoriesVersionAddComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-accessories-version-add", _accessories_version_add_component__WEBPACK_IMPORTED_MODULE_14__["AccessoriesVersionAddComponent"], View_AccessoriesVersionAddComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "./src/app/modules/product-management/components/accessories/accessories-version-add/accessories-version-add.component.scss.shim.ngstyle.js":
    /*!**************************************************************************************************************************************************!*\
      !*** ./src/app/modules/product-management/components/accessories/accessories-version-add/accessories-version-add.component.scss.shim.ngstyle.js ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function srcAppModulesProductManagementComponentsAccessoriesAccessoriesVersionAddAccessoriesVersionAddComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZHVjdC1tYW5hZ2VtZW50L2NvbXBvbmVudHMvYWNjZXNzb3JpZXMvYWNjZXNzb3JpZXMtdmVyc2lvbi1hZGQvYWNjZXNzb3JpZXMtdmVyc2lvbi1hZGQuY29tcG9uZW50LnNjc3MifQ== */"];
      /***/
    },

    /***/
    "./src/app/modules/product-management/components/accessories/accessories-version-add/accessories-version-add.component.ts":
    /*!********************************************************************************************************************************!*\
      !*** ./src/app/modules/product-management/components/accessories/accessories-version-add/accessories-version-add.component.ts ***!
      \********************************************************************************************************************************/

    /*! exports provided: AccessoriesVersionAddComponent */

    /***/
    function srcAppModulesProductManagementComponentsAccessoriesAccessoriesVersionAddAccessoriesVersionAddComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccessoriesVersionAddComponent", function () {
        return AccessoriesVersionAddComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");

      var AccessoriesVersionAddComponent = /*#__PURE__*/function () {
        function AccessoriesVersionAddComponent(ref, config, AccessoriesService) {
          _classCallCheck(this, AccessoriesVersionAddComponent);

          this.ref = ref;
          this.config = config;
          this.AccessoriesService = AccessoriesService;
          this.highlightOptions = [];
          this.hotDealOptions = [];
          this.accessoryId = 0;
        }

        _createClass(AccessoriesVersionAddComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createVersionForm();
            this.getHighlight();
            this.gethotDeal();
            this.mode = this.config.data.mode;
            this.accessoryId = this.config.data.accessoryId;
            this.data = this.config.data.data;

            if (this.mode !== "Add" && this.data) {
              this.versionForm.patchValue(this.data);
            }
          }
        }, {
          key: "createVersionForm",
          value: function createVersionForm() {
            this.versionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
              productImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
              discountPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', []),
              price: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
              quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
              style: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
              highlight: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
              hotDeal: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
            });
          }
        }, {
          key: "getHighlight",
          value: function getHighlight() {
            this.highlightOptions.push({
              label: 'True',
              value: true
            });
            this.highlightOptions.push({
              label: 'False',
              value: false
            });
          }
        }, {
          key: "gethotDeal",
          value: function gethotDeal() {
            this.hotDealOptions.push({
              label: 'True',
              value: true
            });
            this.hotDealOptions.push({
              label: 'False',
              value: false
            });
          }
        }, {
          key: "selectImage",
          value: function selectImage(event) {
            var _this13 = this;

            var reader = new FileReader();
            reader.readAsDataURL(event.currentFiles[0]);

            reader.onload = function () {
              _this13.ImageBaseData = reader.result;
              _this13.ImageBaseData = _this13.ImageBaseData.split(',')[1];

              _this13.versionForm.patchValue({
                productImage: _this13.ImageBaseData
              });
            };

            reader.onerror = function (error) {
              console.log('Error: ', error);
            };
          }
        }, {
          key: "handleVersion",
          value: function handleVersion() {
            if (!this.versionForm.valid) {
              return this.versionForm.markAllAsTouched();
            }

            if (this.mode === "Add") {
              this.addVersion(this.accessoryId, this.versionForm.value);
            } else {
              this.editVersion(this.accessoryId, this.versionForm.value);
            }
          }
        }, {
          key: "addVersion",
          value: function addVersion(accessoryId, version) {
            var _this14 = this;

            version['accessoryId'] = accessoryId;
            console.log(version, 'version');
            this.AccessoriesService.addVersion(version).subscribe(function (data) {
              _this14.ref.close('Version Added');
            });
          }
        }, {
          key: "editVersion",
          value: function editVersion(accessoryId, version) {
            var _this15 = this;

            version['accessoryId'] = accessoryId;
            version['id'] = this.data['id'];
            this.AccessoriesService.updateVersion(version).subscribe(function (data) {
              _this15.ref.close('Version Edited ');
            });
          }
        }]);

        return AccessoriesVersionAddComponent;
      }();
      /***/

    },

    /***/
    "./src/app/modules/product-management/components/accessories/accessories.module.ngfactory.js":
    /*!***************************************************************************************************!*\
      !*** ./src/app/modules/product-management/components/accessories/accessories.module.ngfactory.js ***!
      \***************************************************************************************************/

    /*! exports provided: AccessoriesModuleNgFactory */

    /***/
    function srcAppModulesProductManagementComponentsAccessoriesAccessoriesModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccessoriesModuleNgFactory", function () {
        return AccessoriesModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _accessories_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./accessories.module */
      "./src/app/modules/product-management/components/accessories/accessories.module.ts");
      /* harmony import */


      var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../node_modules/@angular/router/router.ngfactory */
      "./node_modules/@angular/router/router.ngfactory.js");
      /* harmony import */


      var _accessories_list_accessories_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./accessories-list/accessories-list.component.ngfactory */
      "./src/app/modules/product-management/components/accessories/accessories-list/accessories-list.component.ngfactory.js");
      /* harmony import */


      var _accessories_add_accessories_add_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./accessories-add/accessories-add.component.ngfactory */
      "./src/app/modules/product-management/components/accessories/accessories-add/accessories-add.component.ngfactory.js");
      /* harmony import */


      var _node_modules_primeng_dynamicdialog_primeng_dynamicdialog_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../node_modules/primeng/dynamicdialog/primeng-dynamicdialog.ngfactory */
      "./node_modules/primeng/dynamicdialog/primeng-dynamicdialog.ngfactory.js");
      /* harmony import */


      var _accessories_version_add_accessories_version_add_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./accessories-version-add/accessories-version-add.component.ngfactory */
      "./src/app/modules/product-management/components/accessories/accessories-version-add/accessories-version-add.component.ngfactory.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _accessories_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./accessories-routing.module */
      "./src/app/modules/product-management/components/accessories/accessories-routing.module.ts");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! primeng/api */
      "./node_modules/primeng/fesm2015/primeng-api.js");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "./node_modules/@angular/cdk/fesm2015/bidi.js");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "./node_modules/@angular/cdk/fesm2015/platform.js");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "./node_modules/@angular/cdk/fesm2015/scrolling.js");
      /* harmony import */


      var primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! primeng/tooltip */
      "./node_modules/primeng/fesm2015/primeng-tooltip.js");
      /* harmony import */


      var primeng_ripple__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! primeng/ripple */
      "./node_modules/primeng/fesm2015/primeng-ripple.js");
      /* harmony import */


      var primeng_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! primeng/dropdown */
      "./node_modules/primeng/fesm2015/primeng-dropdown.js");
      /* harmony import */


      var primeng_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! primeng/paginator */
      "./node_modules/primeng/fesm2015/primeng-paginator.js");
      /* harmony import */


      var primeng_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! primeng/table */
      "./node_modules/primeng/fesm2015/primeng-table.js");
      /* harmony import */


      var primeng_multiselect__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! primeng/multiselect */
      "./node_modules/primeng/fesm2015/primeng-multiselect.js");
      /* harmony import */


      var primeng_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! primeng/button */
      "./node_modules/primeng/fesm2015/primeng-button.js");
      /* harmony import */


      var primeng_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! primeng/toolbar */
      "./node_modules/primeng/fesm2015/primeng-toolbar.js");
      /* harmony import */


      var primeng_progressbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! primeng/progressbar */
      "./node_modules/primeng/fesm2015/primeng-progressbar.js");
      /* harmony import */


      var primeng_messages__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! primeng/messages */
      "./node_modules/primeng/fesm2015/primeng-messages.js");
      /* harmony import */


      var primeng_fileupload__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! primeng/fileupload */
      "./node_modules/primeng/fesm2015/primeng-fileupload.js");
      /* harmony import */


      var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! primeng/dynamicdialog */
      "./node_modules/primeng/fesm2015/primeng-dynamicdialog.js");
      /* harmony import */


      var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! primeng/contextmenu */
      "./node_modules/primeng/fesm2015/primeng-contextmenu.js");
      /* harmony import */


      var primeng_toast__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! primeng/toast */
      "./node_modules/primeng/fesm2015/primeng-toast.js");
      /* harmony import */


      var primeng_inputtext__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! primeng/inputtext */
      "./node_modules/primeng/fesm2015/primeng-inputtext.js");
      /* harmony import */


      var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! primeng/inputnumber */
      "./node_modules/primeng/fesm2015/primeng-inputnumber.js");
      /* harmony import */


      var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! primeng/confirmdialog */
      "./node_modules/primeng/fesm2015/primeng-confirmdialog.js");
      /* harmony import */


      var _accessories_list_accessories_list_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./accessories-list/accessories-list.component */
      "./src/app/modules/product-management/components/accessories/accessories-list/accessories-list.component.ts");
      /* harmony import */


      var _accessories_add_accessories_add_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./accessories-add/accessories-add.component */
      "./src/app/modules/product-management/components/accessories/accessories-add/accessories-add.component.ts");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var AccessoriesModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_accessories_module__WEBPACK_IMPORTED_MODULE_1__["AccessoriesModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _accessories_list_accessories_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["AccessoriesListComponentNgFactory"], _accessories_add_accessories_add_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["AccessoriesAddComponentNgFactory"], _node_modules_primeng_dynamicdialog_primeng_dynamicdialog_ngfactory__WEBPACK_IMPORTED_MODULE_5__["DynamicDialogComponentNgFactory"], _accessories_version_add_accessories_version_add_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["AccessoriesVersionAddComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _accessories_routing_module__WEBPACK_IMPORTED_MODULE_10__["AccessoriesRoutingModule"], _accessories_routing_module__WEBPACK_IMPORTED_MODULE_10__["AccessoriesRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_api__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], primeng_api__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__["TooltipModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__["TooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_ripple__WEBPACK_IMPORTED_MODULE_16__["RippleModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_16__["RippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_dropdown__WEBPACK_IMPORTED_MODULE_17__["DropdownModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_17__["DropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_paginator__WEBPACK_IMPORTED_MODULE_18__["PaginatorModule"], primeng_paginator__WEBPACK_IMPORTED_MODULE_18__["PaginatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_table__WEBPACK_IMPORTED_MODULE_19__["TableModule"], primeng_table__WEBPACK_IMPORTED_MODULE_19__["TableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_multiselect__WEBPACK_IMPORTED_MODULE_20__["MultiSelectModule"], primeng_multiselect__WEBPACK_IMPORTED_MODULE_20__["MultiSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_button__WEBPACK_IMPORTED_MODULE_21__["ButtonModule"], primeng_button__WEBPACK_IMPORTED_MODULE_21__["ButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_toolbar__WEBPACK_IMPORTED_MODULE_22__["ToolbarModule"], primeng_toolbar__WEBPACK_IMPORTED_MODULE_22__["ToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_progressbar__WEBPACK_IMPORTED_MODULE_23__["ProgressBarModule"], primeng_progressbar__WEBPACK_IMPORTED_MODULE_23__["ProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_messages__WEBPACK_IMPORTED_MODULE_24__["MessagesModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_24__["MessagesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_fileupload__WEBPACK_IMPORTED_MODULE_25__["FileUploadModule"], primeng_fileupload__WEBPACK_IMPORTED_MODULE_25__["FileUploadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_26__["DynamicDialogModule"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_26__["DynamicDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_contextmenu__WEBPACK_IMPORTED_MODULE_27__["ContextMenuModule"], primeng_contextmenu__WEBPACK_IMPORTED_MODULE_27__["ContextMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_toast__WEBPACK_IMPORTED_MODULE_28__["ToastModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_28__["ToastModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_inputtext__WEBPACK_IMPORTED_MODULE_29__["InputTextModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_29__["InputTextModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_30__["InputNumberModule"], primeng_inputnumber__WEBPACK_IMPORTED_MODULE_30__["InputNumberModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_31__["ConfirmDialogModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_31__["ConfirmDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _accessories_module__WEBPACK_IMPORTED_MODULE_1__["AccessoriesModule"], _accessories_module__WEBPACK_IMPORTED_MODULE_1__["AccessoriesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTES"], function () {
          return [[{
            path: "list",
            component: _accessories_list_accessories_list_component__WEBPACK_IMPORTED_MODULE_32__["AccessoriesListComponent"]
          }, {
            path: "add",
            component: _accessories_add_accessories_add_component__WEBPACK_IMPORTED_MODULE_33__["AccessoriesAddComponent"]
          }, {
            path: "edit:id",
            component: _accessories_add_accessories_add_component__WEBPACK_IMPORTED_MODULE_33__["AccessoriesAddComponent"]
          }]];
        }, [])]);
      });
      /***/

    },

    /***/
    "./src/app/modules/product-management/components/accessories/accessories.module.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/product-management/components/accessories/accessories.module.ts ***!
      \*****************************************************************************************/

    /*! exports provided: AccessoriesModule */

    /***/
    function srcAppModulesProductManagementComponentsAccessoriesAccessoriesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccessoriesModule", function () {
        return AccessoriesModule;
      });

      var AccessoriesModule = function AccessoriesModule() {
        _classCallCheck(this, AccessoriesModule);
      };
      /***/

    },

    /***/
    "./src/app/modules/product-management/components/accessories/services/accessories.service.ts":
    /*!***************************************************************************************************!*\
      !*** ./src/app/modules/product-management/components/accessories/services/accessories.service.ts ***!
      \***************************************************************************************************/

    /*! exports provided: AccessoriesService */

    /***/
    function srcAppModulesProductManagementComponentsAccessoriesServicesAccessoriesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccessoriesService", function () {
        return AccessoriesService;
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

      var AccessoriesService = /*#__PURE__*/function () {
        function AccessoriesService(http) {
          _classCallCheck(this, AccessoriesService);

          this.http = http;
          this.prefix = '/Accessory';
        }

        _createClass(AccessoriesService, [{
          key: "getAccessoryType",
          value: function getAccessoryType() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api, "/AccessoryType")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
              return res['data'];
            }));
          }
        }, {
          key: "getAllAccessories",
          value: function getAllAccessories() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api, "/").concat(this.prefix)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (Accessories) {
              return Accessories;
            }));
          }
        }, {
          key: "addAccessory",
          value: function addAccessory(Accessory) {
            Accessory['versions'] = JSON.stringify(Accessory['versions']);
            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api, "/").concat(this.prefix), Accessory).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "editAccessory",
          value: function editAccessory(AccessoryId, newData) {
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api, "/").concat(this.prefix, "/").concat(AccessoryId), newData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "deleteAccessory",
          value: function deleteAccessory(AccessoryId) {
            return this.http["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api, "/").concat(this.prefix, "/").concat(AccessoryId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
              return res;
            }));
          }
          /**             Version              */

        }, {
          key: "addVersion",
          value: function addVersion(version) {
            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api, "/AccessoryVersion"), version).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "updateVersion",
          value: function updateVersion(version) {
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api, "/AccessoryVersion/").concat(version.id), version).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "deleteversion",
          value: function deleteversion(versionId) {
            return this.http["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api, "/AccessoryVersion/").concat(versionId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
              return res;
            }));
          }
        }]);

        return AccessoriesService;
      }();

      AccessoriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        factory: function AccessoriesService_Factory() {
          return new AccessoriesService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
        },
        token: AccessoriesService,
        providedIn: "root"
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=components-accessories-accessories-module-ngfactory-es5.js.map