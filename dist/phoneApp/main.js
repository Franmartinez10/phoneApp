(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\franc\Desktop\phoneAppApp\phoneApp\src\main.ts */"zUnb");


/***/ }),

/***/ "4Iib":
/*!******************************************************************!*\
  !*** ./src/app/componentes/tlf-borrado/tlf-borrado.component.ts ***!
  \******************************************************************/
/*! exports provided: TlfBorradoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlfBorradoComponent", function() { return TlfBorradoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class TlfBorradoComponent {
    constructor() { }
    ngOnInit() {
    }
}
TlfBorradoComponent.ɵfac = function TlfBorradoComponent_Factory(t) { return new (t || TlfBorradoComponent)(); };
TlfBorradoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TlfBorradoComponent, selectors: [["app-tlf-borrado"]], decls: 3, vars: 0, consts: [["routerLink", "/app-listado-movil", 1, "mensaje-container"]], template: function TlfBorradoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " El telefono ha sido borrado correctamente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".mensaje-container[_ngcontent-%COMP%]{\r\n    width: 280px;\r\n    margin-top:30px;\r\n    margin-bottom: 30px;\r\n    padding-left: 10px;\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n    background-color: rgba(228, 228, 228, 0.199);\r\n    \r\n    border-radius: 20px;\r\n    border: 3px solid orangered   ;\r\n    margin-left: 5px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRsZi1ib3JyYWRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQiw0Q0FBNEM7SUFDNUMsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6InRsZi1ib3JyYWRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVuc2FqZS1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI4LCAyMjgsIDIyOCwgMC4xOTkpO1xyXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIG9yYW5nZXJlZCAgIDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CQ0i":
/*!*************************************!*\
  !*** ./src/app/pipes/price.pipe.ts ***!
  \*************************************/
/*! exports provided: PricePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricePipe", function() { return PricePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PricePipe {
    transform(value) {
        let result;
        result = value + " €";
        return result;
    }
}
PricePipe.ɵfac = function PricePipe_Factory(t) { return new (t || PricePipe)(); };
PricePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "price", type: PricePipe, pure: true });


/***/ }),

/***/ "FAvl":
/*!**********************************!*\
  !*** ./src/app/modelos/phone.ts ***!
  \**********************************/
/*! exports provided: Phone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Phone", function() { return Phone; });
class Phone {
    constructor(id, name, manufacturer, description, color, price, imgFileName, screen, processor, ram) {
        this.id = id;
        this.name = name;
        this.manufacturer = manufacturer;
        this.description = description;
        this.color = color;
        this.price = price;
        this.imageFileName = imgFileName;
        this.screen = screen;
        this.processor = processor;
        this.ram = ram;
    }
}


/***/ }),

/***/ "J8e6":
/*!********************************************************************!*\
  !*** ./src/app/componentes/anadir-phone/anadir-phone.component.ts ***!
  \********************************************************************/
/*! exports provided: AnadirPhoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnadirPhoneComponent", function() { return AnadirPhoneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_servicios_phones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicios/phones.service */ "Ow2Z");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pipes_price_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/price.pipe */ "CQ0i");
/* harmony import */ var _pipes_inch_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/inch.pipe */ "PX34");
/* harmony import */ var _pipes_gb_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/gb.pipe */ "S7eM");






class AnadirPhoneComponent {
    constructor(phoneService, router) {
        this.phoneService = phoneService;
        this.router = router;
        this.isModifing = false;
        this.phone = this.phoneService.phoneDetail;
    }
    ngOnInit() {
    }
    modificarPhone(imageFileName, manufacturer, color, name, price, screen, processor, ram, description) {
        this.isModifing = true;
        if (imageFileName.length > 0) {
            this.phoneService.phoneDetail.imageFileName = imageFileName;
        }
        if (name.length > 0) {
            this.phoneService.phoneDetail.name = name;
        }
        if (manufacturer.length > 0) {
            this.phoneService.phoneDetail.manufacturer = manufacturer;
        }
        if (description.length > 0) {
            this.phoneService.phoneDetail.description = description;
        }
        if (color.length > 0) {
            this.phoneService.phoneDetail.color = color;
        }
        if (price != null) {
            this.phoneService.phoneDetail.price = price;
        }
        if (screen != null) {
            this.phoneService.phoneDetail.screen = screen;
        }
        if (processor.length > 0) {
            this.phoneService.phoneDetail.processor = processor;
        }
        if (ram != null) {
            this.phoneService.phoneDetail.ram = ram;
        }
        this.phoneService.putPhone(this.phoneService.phoneDetail).subscribe((data) => {
            if (data.type === 1) {
                this.router.navigate(['app-vista-movil']);
            }
        });
    }
    eliminarPhone() {
        let i = 0;
        this.phoneService.delPhone(this.phoneService.phoneDetail.id).subscribe((data) => {
            if (data.type == 1) {
                this.router.navigate(['app-vista-movil/anadir-phone/tlf-borrado']);
            }
        });
    }
}
AnadirPhoneComponent.ɵfac = function AnadirPhoneComponent_Factory(t) { return new (t || AnadirPhoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicios_phones_service__WEBPACK_IMPORTED_MODULE_1__["PhonesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AnadirPhoneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnadirPhoneComponent, selectors: [["app-anadir-phone"]], decls: 67, vars: 17, consts: [[1, "banner", "relative"], [1, "col-center", "marginTop10"], [1, "image", 3, "src"], ["routerLink", "/app-listado-movil", 1, "circle-cruz"], ["src", "assets/close.svg", 1, "icon"], [1, "col-left", "menu-item", "relative"], [1, "col-right", 2, "width", "inherit"], [1, "botonModificar", "marginRight32", "marginTop10", 3, "disabled", "click"], [1, "row-left", "caracteristicas"], [1, "colorDetalle"], [1, "input", "marginLeft12", 3, "placeholder"], ["imageFileName", ""], ["manufacturer", ""], ["color", ""], [1, "row-left"], [1, "title", "col-left"], [1, "titleInput", "sizeTitle", 3, "placeholder"], ["name", ""], ["type", "number", 1, "titleInput", "absoluteRight", "sizePrice", 3, "placeholder"], ["price", ""], [1, "hr"], [1, "row-left", "paddingLeft20"], [1, "col-left", "menu-item"], [1, "row-center", "detalles"], [1, "row-center", "detallesItem"], ["type", "number", 3, "placeholder"], ["screen", ""], [3, "placeholder"], ["processor", ""], ["ram", ""], [1, "row-left", "description"], [1, "row-lef", "description"], ["description", ""], [1, "col-center"], [1, "botonEliminar", "marginRight32", "marginTop10", 3, "click"]], template: function AnadirPhoneComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnadirPhoneComponent_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](53); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](61); return ctx.modificarPhone(_r0.value, _r1.value, _r2.value, _r3.value, _r4.valueAsNumber, _r5.valueAsNumber, _r6.value, _r7.valueAsNumber, _r8.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Guardar cambios ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "photo url: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "manufacturer: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "color: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 10, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " SCREEN: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "inch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " PROCESSOR: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " RAM: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 25, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "gb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Descripcion: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "textarea", null, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnadirPhoneComponent_Template_button_click_64_listener() { return ctx.eliminarPhone(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Eliminar telefono ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "div", 20);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.phoneService.phoneDetail.imageFileName, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isModifing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.phoneService.phoneDetail.imageFileName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.phoneService.phoneDetail.manufacturer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.phoneService.phoneDetail.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.phoneService.phoneDetail.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 11, ctx.phoneService.phoneDetail.price));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 13, ctx.phoneService.phoneDetail.screen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.phoneService.phoneDetail.processor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](54, 15, ctx.phoneService.phoneDetail.ram));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.phoneService.phoneDetail.description);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], pipes: [_pipes_price_pipe__WEBPACK_IMPORTED_MODULE_3__["PricePipe"], _pipes_inch_pipe__WEBPACK_IMPORTED_MODULE_4__["InchPipe"], _pipes_gb_pipe__WEBPACK_IMPORTED_MODULE_5__["GbPipe"]], styles: [".banner[_ngcontent-%COMP%]{\r\n    width:375px;\r\n    min-height: 150px ;\r\n    overflow-y: hidden;\r\n   \r\n}\r\n\r\n\r\n\r\n.image[_ngcontent-%COMP%]{\r\n    align-items: center;\r\n    width: 200px;\r\n    height: auto;\r\n}\r\n\r\n\r\n\r\n.title[_ngcontent-%COMP%]{\r\nfont-size: 28px;\r\ncolor: #000000;\r\ntext-align: center;\r\nfont-family: dosis-bold;\r\ntext-transform: capitalize;\r\nmargin-top: 5px;\r\npadding-left: 30px;\r\n}\r\n\r\n\r\n\r\n.sizeTitle[_ngcontent-%COMP%]{\r\n    width: 200px;\r\n}\r\n\r\n\r\n\r\n.sizePrice[_ngcontent-%COMP%]{\r\n    width: 70px;\r\n}\r\n\r\n\r\n\r\n.titleInput[_ngcontent-%COMP%]{\r\n    font-size: 28px;\r\n    color: #000000;\r\n    text-align: left;\r\n    font-family: dosis-bold;\r\n    text-transform: capitalize;\r\n    margin-top: 5px;\r\n    border: 1px solid #00000086;\r\n    border-radius: 5px;\r\n    }\r\n\r\n\r\n\r\n.titleInput[_ngcontent-%COMP%]::placeholder{\r\n        font-size: 28px;\r\n        color: #000000;\r\n        text-align: left;\r\n        font-family: dosis-bold;\r\n        text-transform: capitalize;\r\n        }\r\n\r\n\r\n\r\n.caracteristicas[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n    color: #00000086;\r\n    text-align: center;\r\n    font-family: dosis-bold;\r\n    text-transform: uppercase;\r\n    \r\n    }\r\n\r\n\r\n\r\n.caracteristicas[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n        font-size: 13px;\r\n        color: #00000086;\r\n        text-align: left;\r\n        font-family: dosis-bold;\r\n        text-transform: uppercase;\r\n        border: 1px solid #00000086;\r\n        border-radius: 5px;\r\n        width: 100px;\r\n        }\r\n\r\n\r\n\r\n.detalles[_ngcontent-%COMP%]{\r\n        font-size: 14px;\r\n        color: #000000;\r\n        text-align: center;\r\n        font-family: dosis-bold;\r\n        text-transform: uppercase;\r\n        margin-top: 5px;\r\n        padding-left: 30px;  \r\n}\r\n\r\n\r\n\r\n.detallesItem[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    color: #00000086;\r\n    text-align: center;\r\n    font-family: dosis-bold;\r\n    text-transform: capitalize;\r\n    padding-left: 30px;  \r\n}\r\n\r\n\r\n\r\n.detallesItem[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 60px;\r\n    height: auto;\r\n    font-size: 14px;\r\n    color: #00000086;\r\n    font-family: dosis-bold;\r\n    text-transform: capitalize;\r\n    border: 1px solid #00000086;\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n\r\n.colorDetalle[_ngcontent-%COMP%]{\r\n\r\n        font-size: 13px;\r\n        color: #000000;\r\n        text-align: center;\r\n        font-family: dosis-bold;\r\n        text-transform: uppercase;\r\n        padding-left: 30px;\r\n}\r\n\r\n\r\n\r\n.color[_ngcontent-%COMP%]{\r\n    width: 70px;\r\n    height: 30px;\r\n    margin-left: 10px;\r\n    border-radius: 10px;\r\n    align-items:center;\r\n    font-family: dosis-bold;\r\n    text-transform: uppercase;\r\n    font-size: 12px;\r\n    color: white;\r\n\r\n}\r\n\r\n\r\n\r\n.colorWhite[_ngcontent-%COMP%]{\r\n    width: 70px;\r\n    height: 30px;\r\n    margin-left: 10px;\r\n    border-radius: 10px;\r\n    align-items:center;\r\n    font-family: dosis-bold;\r\n    text-transform: uppercase;\r\n    font-size: 12px;\r\n    color: rgb(0, 0, 0);\r\n    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.1);\r\n\r\n}\r\n\r\n\r\n\r\n.description[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{\r\n        font-size: 14px;\r\n        font-family: dosis-medium;\r\n        color: rgb(150, 150, 150);\r\n        margin-top: 5px;\r\n        width: 300px;\r\n        height: 200px;\r\n        border: 1px solid #00000086;\r\n        border-radius: 5px;\r\n    }\r\n\r\n\r\n\r\n.description[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n        font-family: dosis-bold;\r\n        color: rgb(0, 0, 0);\r\n        margin-top: 5px;\r\n        padding-left: 30px;\r\n        text-align: justify;\r\n        text-justify: inter-word;\r\n\r\n\r\n    }\r\n\r\n\r\n\r\n.relative[_ngcontent-%COMP%]{\r\n    position: relative;\r\n}\r\n\r\n\r\n\r\n.absoluteRight[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    right: 50px;\r\n}\r\n\r\n\r\n\r\n.circle-cruz[_ngcontent-%COMP%]{\r\n    width: 45px;\r\n    height: 45px;\r\n    border-radius: 50%;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    background-color:white;\r\n    border: none;\r\n    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.1);\r\n    cursor: pointer;\r\n    outline: none;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: absolute;\r\n    top: 15px;\r\n    left: 25px;\r\n    \r\n}\r\n\r\n\r\n\r\n.iphoneCard[_ngcontent-%COMP%]\r\n{\r\n    margin-top: 100px;\r\n    width: 100%;\r\n    border-radius: 30px;\r\n    background-color: white;\r\n    position: relative;\r\n}\r\n\r\n\r\n\r\n.menu-item[_ngcontent-%COMP%]\r\n{\r\n    width: 100%;\r\n    height: auto;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    \r\n    \r\n}\r\n\r\n\r\n\r\n.hr[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    height: 0;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n    border-bottom: 1px solid rgba(255, 255, 255, 0.3);\r\n    width: inherit;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n\r\n\r\n.custom-hr[_ngcontent-%COMP%]\r\n{\r\n    width: 97%;\r\n    border-bottom: solid 2px rgba(178, 193, 198, 0.185); \r\n    position: relative;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuYWRpci1waG9uZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjs7QUFFdEI7Ozs7QUFJQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7OztBQUlBO0FBQ0EsZUFBZTtBQUNmLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEIsdUJBQXVCO0FBQ3ZCLDBCQUEwQjtBQUMxQixlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCOzs7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOzs7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7Ozs7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEI7Ozs7QUFDSjtRQUNRLGVBQWU7UUFDZixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLHVCQUF1QjtRQUN2QiwwQkFBMEI7UUFDMUI7Ozs7QUFDUjtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qix5QkFBeUI7O0lBRXpCOzs7O0FBQ0E7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLDJCQUEyQjtRQUMzQixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaOzs7O0FBQ1I7UUFDUSxlQUFlO1FBQ2YsY0FBYztRQUNkLGtCQUFrQjtRQUNsQix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZixrQkFBa0I7QUFDMUI7Ozs7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsa0JBQWtCO0FBQ3RCOzs7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0FBQ3RCOzs7O0FBQ0E7O1FBRVEsZUFBZTtRQUNmLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLHlCQUF5QjtRQUN6QixrQkFBa0I7QUFDMUI7Ozs7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsWUFBWTs7QUFFaEI7Ozs7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLDJDQUEyQzs7QUFFL0M7Ozs7QUFFQTtRQUNRLGVBQWU7UUFDZix5QkFBeUI7UUFDekIseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZixZQUFZO1FBQ1osYUFBYTtRQUNiLDJCQUEyQjtRQUMzQixrQkFBa0I7SUFDdEI7Ozs7QUFFSjtRQUNRLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLHdCQUF3Qjs7O0lBRzVCOzs7O0FBSUo7SUFDSSxrQkFBa0I7QUFDdEI7Ozs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7Ozs7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWiwyQ0FBMkM7SUFDM0MsZUFBZTtJQUNmLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7O0FBRWQ7Ozs7QUFPQTs7SUFFSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOzs7O0FBR0E7O0lBRUksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1COztJQUVuQix3QkFBd0I7QUFDNUI7Ozs7QUFTQTtJQUNJLFNBQVM7SUFDVCxTQUFTO0lBQ1Qsd0NBQXdDO0lBQ3hDLGlEQUFpRDtJQUNqRCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7OztBQUlBOztJQUVJLFVBQVU7SUFDVixtREFBbUQ7SUFDbkQsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImFuYWRpci1waG9uZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuXHJcblxyXG4uYmFubmVye1xyXG4gICAgd2lkdGg6Mzc1cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxNTBweCA7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgIFxyXG59XHJcblxyXG5cclxuXHJcbi5pbWFnZXtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcblxyXG5cclxuLnRpdGxle1xyXG5mb250LXNpemU6IDI4cHg7XHJcbmNvbG9yOiAjMDAwMDAwO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmZvbnQtZmFtaWx5OiBkb3Npcy1ib2xkO1xyXG50ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxubWFyZ2luLXRvcDogNXB4O1xyXG5wYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbn1cclxuLnNpemVUaXRsZXtcclxuICAgIHdpZHRoOiAyMDBweDtcclxufVxyXG4uc2l6ZVByaWNle1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbn1cclxuLnRpdGxlSW5wdXR7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LWZhbWlseTogZG9zaXMtYm9sZDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDg2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG4udGl0bGVJbnB1dDo6cGxhY2Vob2xkZXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGRvc2lzLWJvbGQ7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgfVxyXG4uY2FyYWN0ZXJpc3RpY2Fze1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA4NjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBkb3Npcy1ib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgLmNhcmFjdGVyaXN0aWNhcyBpbnB1dHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA4NjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBkb3Npcy1ib2xkO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDg2O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4uZGV0YWxsZXN7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LWZhbWlseTogZG9zaXMtYm9sZDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7ICBcclxufVxyXG4uZGV0YWxsZXNJdGVte1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA4NjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBkb3Npcy1ib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7ICBcclxufVxyXG4uZGV0YWxsZXNJdGVtIGlucHV0e1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDg2O1xyXG4gICAgZm9udC1mYW1pbHk6IGRvc2lzLWJvbGQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA4NjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uY29sb3JEZXRhbGxle1xyXG5cclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBkb3Npcy1ib2xkO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG59XHJcbi5jb2xvcntcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IGRvc2lzLWJvbGQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG4uY29sb3JXaGl0ZXtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IGRvc2lzLWJvbGQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA2cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblxyXG59XHJcblxyXG4uZGVzY3JpcHRpb24gdGV4dGFyZWF7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBkb3Npcy1tZWRpdW07XHJcbiAgICAgICAgY29sb3I6IHJnYigxNTAsIDE1MCwgMTUwKTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDg2O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBkb3Npcy1ib2xkO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4ucmVsYXRpdmV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmFic29sdXRlUmlnaHR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNTBweDtcclxufVxyXG4uY2lyY2xlLWNydXp7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDZweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgbGVmdDogMjVweDtcclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5pcGhvbmVDYXJkXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG4ubWVudS1pdGVtXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBcclxuICAgIC8qIHBhZGRpbmctbGVmdDogMjBweDsgKi9cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5ociB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmN1c3RvbS1oclxyXG57XHJcbiAgICB3aWR0aDogOTclO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHJnYmEoMTc4LCAxOTMsIDE5OCwgMC4xODUpOyBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuXHJcbiAgXHJcblxyXG5cclxuICBcclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "OOk/":
/*!******************************************************************!*\
  !*** ./src/app/componentes/vista-movil/vista-movil.component.ts ***!
  \******************************************************************/
/*! exports provided: VistaMovilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VistaMovilComponent", function() { return VistaMovilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_servicios_phones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicios/phones.service */ "Ow2Z");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_price_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/price.pipe */ "CQ0i");
/* harmony import */ var _pipes_inch_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/inch.pipe */ "PX34");
/* harmony import */ var _pipes_gb_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/gb.pipe */ "S7eM");







const _c0 = function (a0) { return { "background-color": a0 }; };
class VistaMovilComponent {
    constructor(phoneService) {
        this.phoneService = phoneService;
        this.phone = this.phoneService.phoneDetail;
    }
    ngOnInit() {
    }
}
VistaMovilComponent.ɵfac = function VistaMovilComponent_Factory(t) { return new (t || VistaMovilComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicios_phones_service__WEBPACK_IMPORTED_MODULE_1__["PhonesService"])); };
VistaMovilComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VistaMovilComponent, selectors: [["app-vista-movil"]], decls: 50, vars: 19, consts: [[1, "banner", "relative"], [1, "col-center", "marginTop10"], [1, "image", 3, "src"], ["routerLink", "/app-listado-movil", 1, "circle-cruz"], ["src", "assets/close.svg", 1, "icon"], [1, "col-left", "menu-item", "relative"], [1, "col-right", 2, "width", "inherit"], ["routerLink", "anadir-phone", 1, "botonAnadir", "marginRight32", "marginTop10"], [1, "row-left", "caracteristicas", "marginTop10"], [1, "marginLeft32", "colorDetalle"], [1, "col-center", 3, "ngStyle", "ngClass"], [1, "row-left"], [1, "title"], [1, "title", "absoluteRight"], [1, "hr"], [1, "row-left", "paddingLeft20"], [1, "col-left", "menu-item"], [1, "row-center", "detalles"], [1, "row-center", "detallesItem"], [1, "row-left", "description"], [1, "row-lef", "description"]], template: function VistaMovilComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "editar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "color: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " SCREEN: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "inch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " PROCESSOR: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " RAM: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "gb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Descripcion: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 14);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.phone.imageFileName, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.phone.manufacturer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.phone.color))("ngClass", ctx.phone.color != "white" ? "color" : "colorWhite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.phone.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.phone.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 11, ctx.phone.price));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 13, ctx.phone.screen), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.phone.processor, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 15, ctx.phone.ram), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.phone.description);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], pipes: [_pipes_price_pipe__WEBPACK_IMPORTED_MODULE_4__["PricePipe"], _pipes_inch_pipe__WEBPACK_IMPORTED_MODULE_5__["InchPipe"], _pipes_gb_pipe__WEBPACK_IMPORTED_MODULE_6__["GbPipe"]], styles: [".banner[_ngcontent-%COMP%]{\r\n    width:375px;\r\n    min-height: 150px ;\r\n    overflow-y: hidden;\r\n   \r\n}\r\n\r\n\r\n\r\n.image[_ngcontent-%COMP%]{\r\n    align-items: center;\r\n    width: 200px;\r\n    height: auto;\r\n}\r\n\r\n\r\n\r\n.title[_ngcontent-%COMP%]{\r\nfont-size: 28px;\r\ncolor: #000000;\r\ntext-align: center;\r\nfont-family: dosis-bold;\r\ntext-transform: capitalize;\r\nmargin-top: 5px;\r\npadding-left: 30px;\r\n}\r\n\r\n\r\n\r\n.caracteristicas[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n    color: #00000086;\r\n    text-align: center;\r\n    font-family: dosis-bold;\r\n    text-transform: uppercase;\r\n    margin-top: 5px;\r\n    padding-left: 30px;\r\n    }\r\n\r\n\r\n\r\n.detalles[_ngcontent-%COMP%]{\r\n        font-size: 14px;\r\n        color: #000000;\r\n        text-align: center;\r\n        font-family: dosis-bold;\r\n        text-transform: uppercase;\r\n        margin-top: 5px;\r\n        padding-left: 30px;  \r\n}\r\n\r\n\r\n\r\n.detallesItem[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    color: #00000086;\r\n    text-align: center;\r\n    font-family: dosis-bold;\r\n    text-transform: capitalize;\r\n    margin-bottom: 5px;\r\n    padding-left: 30px;  \r\n}\r\n\r\n\r\n\r\n.colorDetalle[_ngcontent-%COMP%]{\r\n\r\n        font-size: 13px;\r\n        color: #000000;\r\n        text-align: center;\r\n        font-family: dosis-bold;\r\n        text-transform: uppercase;\r\n        padding-left: 30px;\r\n}\r\n\r\n\r\n\r\n.color[_ngcontent-%COMP%]{\r\n    width: 70px;\r\n    height: 30px;\r\n    margin-left: 10px;\r\n    border-radius: 10px;\r\n    align-items:center;\r\n    font-family: dosis-bold;\r\n    text-transform: uppercase;\r\n    font-size: 12px;\r\n    color: white;\r\n\r\n}\r\n\r\n\r\n\r\n.colorWhite[_ngcontent-%COMP%]{\r\n    width: 70px;\r\n    height: 30px;\r\n    margin-left: 10px;\r\n    border-radius: 10px;\r\n    align-items:center;\r\n    font-family: dosis-bold;\r\n    text-transform: uppercase;\r\n    font-size: 12px;\r\n    color: rgb(0, 0, 0);\r\n    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.1);\r\n\r\n}\r\n\r\n\r\n\r\n.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-size: 14px;\r\n        font-family: dosis-medium;\r\n        color: rgb(150, 150, 150);\r\n        margin-top: 5px;\r\n        width: 300px;\r\n    }\r\n\r\n\r\n\r\n.description[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n        font-family: dosis-bold;\r\n        color: rgb(0, 0, 0);\r\n        margin-top: 5px;\r\n        padding-left: 30px;\r\n        text-align: justify;\r\n        text-justify: inter-word;\r\n\r\n\r\n    }\r\n\r\n\r\n\r\n.relative[_ngcontent-%COMP%]{\r\n    position: relative;\r\n}\r\n\r\n\r\n\r\n.absoluteRight[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    right: 50px;\r\n}\r\n\r\n\r\n\r\n.circle-cruz[_ngcontent-%COMP%]{\r\n    width: 45px;\r\n    height: 45px;\r\n    border-radius: 50%;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    background-color:white;\r\n    border: none;\r\n    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.1);\r\n    cursor: pointer;\r\n    outline: none;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: absolute;\r\n    top: 15px;\r\n    left: 25px;\r\n    \r\n}\r\n\r\n\r\n\r\n.iphoneCard[_ngcontent-%COMP%]\r\n{\r\n    margin-top: 100px;\r\n    width: 100%;\r\n    border-radius: 30px;\r\n    background-color: white;\r\n    position: relative;\r\n}\r\n\r\n\r\n\r\n.menu-item[_ngcontent-%COMP%]\r\n{\r\n    width: 100%;\r\n    height: auto;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    \r\n    \r\n}\r\n\r\n\r\n\r\n.hr[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    height: 0;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n    border-bottom: 1px solid rgba(255, 255, 255, 0.3);\r\n    width: inherit;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n\r\n\r\n.custom-hr[_ngcontent-%COMP%]\r\n{\r\n    width: 97%;\r\n    border-bottom: solid 2px rgba(178, 193, 198, 0.185); \r\n    position: relative;\r\n}\r\n\r\n\r\n\r\n.iconSizeGray[_ngcontent-%COMP%]{\r\n    height: 20px;\r\n    color: #B2C1C6;\r\n    cursor: pointer;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpc3RhLW1vdmlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCOztBQUV0Qjs7OztBQUlBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0FBQ2hCOzs7O0FBSUE7QUFDQSxlQUFlO0FBQ2YsY0FBYztBQUNkLGtCQUFrQjtBQUNsQix1QkFBdUI7QUFDdkIsMEJBQTBCO0FBQzFCLGVBQWU7QUFDZixrQkFBa0I7QUFDbEI7Ozs7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQjs7OztBQUNKO1FBQ1EsZUFBZTtRQUNmLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLHlCQUF5QjtRQUN6QixlQUFlO1FBQ2Ysa0JBQWtCO0FBQzFCOzs7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7Ozs7QUFDQTs7UUFFUSxlQUFlO1FBQ2YsY0FBYztRQUNkLGtCQUFrQjtRQUNsQix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLGtCQUFrQjtBQUMxQjs7OztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixZQUFZOztBQUVoQjs7OztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsMkNBQTJDOztBQUUvQzs7OztBQUVBO1FBQ1EsZUFBZTtRQUNmLHlCQUF5QjtRQUN6Qix5QkFBeUI7UUFDekIsZUFBZTtRQUNmLFlBQVk7SUFDaEI7Ozs7QUFDSjtRQUNRLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLHdCQUF3Qjs7O0lBRzVCOzs7O0FBSUo7SUFDSSxrQkFBa0I7QUFDdEI7Ozs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7Ozs7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWiwyQ0FBMkM7SUFDM0MsZUFBZTtJQUNmLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7O0FBRWQ7Ozs7QUFPQTs7SUFFSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOzs7O0FBR0E7O0lBRUksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1COztJQUVuQix3QkFBd0I7QUFDNUI7Ozs7QUFTQTtJQUNJLFNBQVM7SUFDVCxTQUFTO0lBQ1Qsd0NBQXdDO0lBQ3hDLGlEQUFpRDtJQUNqRCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7OztBQUlBOztJQUVJLFVBQVU7SUFDVixtREFBbUQ7SUFDbkQsa0JBQWtCO0FBQ3RCOzs7O0FBS0U7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7RUFDakIiLCJmaWxlIjoidmlzdGEtbW92aWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcblxyXG5cclxuLmJhbm5lcntcclxuICAgIHdpZHRoOjM3NXB4O1xyXG4gICAgbWluLWhlaWdodDogMTUwcHggO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICBcclxufVxyXG5cclxuXHJcblxyXG4uaW1hZ2V7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5cclxuXHJcbi50aXRsZXtcclxuZm9udC1zaXplOiAyOHB4O1xyXG5jb2xvcjogIzAwMDAwMDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5mb250LWZhbWlseTogZG9zaXMtYm9sZDtcclxudGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbm1hcmdpbi10b3A6IDVweDtcclxucGFkZGluZy1sZWZ0OiAzMHB4O1xyXG59XHJcbi5jYXJhY3RlcmlzdGljYXN7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDg2O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IGRvc2lzLWJvbGQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgfVxyXG4uZGV0YWxsZXN7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LWZhbWlseTogZG9zaXMtYm9sZDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7ICBcclxufVxyXG4uZGV0YWxsZXNJdGVte1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA4NjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBkb3Npcy1ib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7ICBcclxufVxyXG4uY29sb3JEZXRhbGxle1xyXG5cclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBkb3Npcy1ib2xkO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG59XHJcbi5jb2xvcntcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IGRvc2lzLWJvbGQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG4uY29sb3JXaGl0ZXtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IGRvc2lzLWJvbGQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA2cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblxyXG59XHJcblxyXG4uZGVzY3JpcHRpb24gcHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGRvc2lzLW1lZGl1bTtcclxuICAgICAgICBjb2xvcjogcmdiKDE1MCwgMTUwLCAxNTApO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICB9XHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBkb3Npcy1ib2xkO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4ucmVsYXRpdmV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmFic29sdXRlUmlnaHR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNTBweDtcclxufVxyXG4uY2lyY2xlLWNydXp7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDZweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgbGVmdDogMjVweDtcclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5pcGhvbmVDYXJkXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG4ubWVudS1pdGVtXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBcclxuICAgIC8qIHBhZGRpbmctbGVmdDogMjBweDsgKi9cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5ociB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmN1c3RvbS1oclxyXG57XHJcbiAgICB3aWR0aDogOTclO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHJnYmEoMTc4LCAxOTMsIDE5OCwgMC4xODUpOyBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuXHJcbiAgXHJcblxyXG4gIC5pY29uU2l6ZUdyYXl7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogI0IyQzFDNjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIFxyXG5cclxuXHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "Ow2Z":
/*!*********************************************!*\
  !*** ./src/app/servicios/phones.service.ts ***!
  \*********************************************/
/*! exports provided: PhonesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonesService", function() { return PhonesService; });
/* harmony import */ var _modelos_phone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modelos/phone */ "FAvl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class PhonesService {
    constructor(http) {
        this.http = http;
        this.url = 'https://thephonelistapi.herokuapp.com/phones';
        /*   private url = 'http://localhost:300/phones'
         */ this.phoneDetail = new _modelos_phone__WEBPACK_IMPORTED_MODULE_0__["Phone"](0, "", "", "", "", 0, "", 0, "", 0);
        this.phones = [];
    }
    getPhones() {
        return this.http.get(this.url + "/");
    }
    postPhones(createdPhone) {
        return this.http.post(this.url, createdPhone);
    }
    putPhone(modifiedPhone) {
        return this.http.put(this.url, modifiedPhone);
    }
    delPhone(id) {
        return this.http.delete(this.url + '?id=' + id);
    }
}
PhonesService.ɵfac = function PhonesService_Factory(t) { return new (t || PhonesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PhonesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PhonesService, factory: PhonesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "PX34":
/*!************************************!*\
  !*** ./src/app/pipes/inch.pipe.ts ***!
  \************************************/
/*! exports provided: InchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InchPipe", function() { return InchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class InchPipe {
    transform(value) {
        let result;
        result = value + " inches";
        return result;
    }
}
InchPipe.ɵfac = function InchPipe_Factory(t) { return new (t || InchPipe)(); };
InchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "inch", type: InchPipe, pure: true });


/***/ }),

/***/ "R/2O":
/*!****************************************!*\
  !*** ./src/app/pipes/filtrado.pipe.ts ***!
  \****************************************/
/*! exports provided: FiltradoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltradoPipe", function() { return FiltradoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FiltradoPipe {
    transform(value, args) {
        while (args > 0) {
            return value.filter((phone) => {
                return phone.name = args;
            });
        }
        {
            return value;
        }
    }
}
FiltradoPipe.ɵfac = function FiltradoPipe_Factory(t) { return new (t || FiltradoPipe)(); };
FiltradoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filtrado", type: FiltradoPipe, pure: true });


/***/ }),

/***/ "S7eM":
/*!**********************************!*\
  !*** ./src/app/pipes/gb.pipe.ts ***!
  \**********************************/
/*! exports provided: GbPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GbPipe", function() { return GbPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class GbPipe {
    transform(value) {
        let result;
        result = value + " gb";
        return result;
    }
}
GbPipe.ɵfac = function GbPipe_Factory(t) { return new (t || GbPipe)(); };
GbPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "gb", type: GbPipe, pure: true });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_servicios_phones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicios/phones.service */ "Ow2Z");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function AppComponent_div_5_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
} }
function AppComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Los ultimos smartphones del mercado: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_5_img_4_Template, 1, 0, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_5_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.cargarTelefonos(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Buscar telefonos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isSpinner);
} }
class AppComponent {
    constructor(phonesService, router) {
        this.phonesService = phonesService;
        this.router = router;
        this.title = 'phoneApp';
        this.isSpinner = false;
        this.isIntro = true;
    }
    cargarTelefonos() {
        this.isSpinner = true;
        this.phonesService.getPhones().subscribe((data) => {
            if (data.type == 1) {
                this.phonesService.phones = data.message;
                this.isIntro = false;
                this.router.navigate(["app-listado-movil"]);
                this.isSpinner = false;
                console.log(this.phonesService.phones);
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicios_phones_service__WEBPACK_IMPORTED_MODULE_1__["PhonesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 1, consts: [[1, "col-center"], [1, "col-center", "iphoneCard"], ["src", "assets/logo.png", "routerLink", "app-listado-movil", 1, "logo"], [1, "busqueda", "col-center"], ["class", " col-center  colorWhite", 4, "ngIf"], [1, "col-center", "menu-item-expandible", "colorWhite"], [1, "row-left", "widthMenu"], [1, "col-center", "colorWhite"], [1, "col-center", "marginTop10"], [1, "spinner"], ["src", "assets/833.gif", 4, "ngIf"], ["src", "https://thumbs.dreamstime.com/b/historieta-feliz-smartphone-47782715.jpg", 1, "image"], [1, "marginBottom10"], [1, "button6", 3, "click"], ["src", "assets/833.gif"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_5_Template, 10, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isIntro);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".busqueda[_ngcontent-%COMP%]\r\n{\r\n    height: auto;\r\n    width: 340px;\r\n    margin-bottom: 100px;\r\n    border-radius: 30px;\r\n    background-color: white;\r\n\r\n    overflow-x: hidden;\r\n    overflow-y:auto;\r\n    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\r\n}\r\n\r\n\r\n\r\n.button6[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n        padding :0.9em 4.4em;\r\n        margin:0 0.3em 0.3em 0;\r\n        border-radius:0.15em;\r\n        box-sizing: border-box;\r\n        text-decoration:none;\r\n        text-transform:uppercase;\r\n        font-weight:400;\r\n        color: #FFFFFF;\r\n        background-color:coral;\r\n        box-sizing:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);\r\n        text-align:center;\r\n        position:relative;\r\n        }\r\n\r\n\r\n\r\n.button6[_ngcontent-%COMP%]:active{\r\n        top:0.1em;\r\n        }\r\n\r\n\r\n\r\n@media all and (max-width:30em){\r\n            \u2003.button6[_ngcontent-%COMP%]{\r\n            display:block;\r\n            margin:0.4em auto;\r\n            }\r\n        }\r\n\r\n\r\n\r\n.spinner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 80px;\r\n\r\n}\r\n\r\n\r\n\r\n.spinner[_ngcontent-%COMP%]{\r\n    margin-bottom: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFlBQVk7SUFDWixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQix1QkFBdUI7O0FBRTNCO0VBQ0UsS0FBSyxrQkFBa0I7SUFDckIsZUFBZTtJQUNmLHFEQUFxRDtBQUN6RDs7OztBQUlBO0lBQ0kscUJBQXFCO1FBQ2pCLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIsb0JBQW9CO1FBQ3BCLHNCQUFzQjtRQUN0QixvQkFBb0I7UUFDcEIsd0JBQXdCO1FBQ3hCLGVBQWU7UUFDZixjQUFjO1FBQ2Qsc0JBQXNCO1FBQ3RCLG9EQUFvRDtRQUNwRCxpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCOzs7O0FBQ0E7UUFDQSxTQUFTO1FBQ1Q7Ozs7QUFDQTtZQUNJO1lBQ0EsYUFBYTtZQUNiLGlCQUFpQjtZQUNqQjtRQUNKOzs7O0FBRVI7SUFDSSxXQUFXOztBQUVmOzs7O0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnVzcXVlZGFcclxue1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDM0MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4vKiAgICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYmEoMTc4LCAxOTMsIDE5OCwgMC4xODUpOztcclxuICovICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6YXV0bztcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAwcHggN3B4IDI5cHggMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5idXR0b242e1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmcgOjAuOWVtIDQuNGVtO1xyXG4gICAgICAgIG1hcmdpbjowIDAuM2VtIDAuM2VtIDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czowLjE1ZW07XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6Y29yYWw7XHJcbiAgICAgICAgYm94LXNpemluZzppbnNldCAwIC0wLjZlbSAwIC0wLjM1ZW0gcmdiYSgwLDAsMCwwLjE3KTtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ1dHRvbjY6YWN0aXZle1xyXG4gICAgICAgIHRvcDowLjFlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDozMGVtKXtcclxuICAgICAgICAgICAg4oCDLmJ1dHRvbjZ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjowLjRlbSBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuLnNwaW5uZXIgaW1ne1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcblxyXG59XHJcbi5zcGlubmVye1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "YBgn":
/*!********************************************************************!*\
  !*** ./src/app/componentes/cerrar-boton/cerrar-boton.component.ts ***!
  \********************************************************************/
/*! exports provided: CerrarBotonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CerrarBotonComponent", function() { return CerrarBotonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CerrarBotonComponent {
    constructor() { }
    ngOnInit() {
    }
}
CerrarBotonComponent.ɵfac = function CerrarBotonComponent_Factory(t) { return new (t || CerrarBotonComponent)(); };
CerrarBotonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CerrarBotonComponent, selectors: [["app-cerrar-boton"]], decls: 1, vars: 0, consts: [[1, "circle-cruz"]], template: function CerrarBotonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: [".circle-cruz[_ngcontent-%COMP%]{\r\n    width: 65px;\r\n    height: 65px;\r\n    border-radius: 50%;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    background-color:white;\r\n    border: none;\r\n    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.1);\r\n    cursor: pointer;\r\n    outline: none;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 15px;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNlcnJhci1ib3Rvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDJDQUEyQztJQUMzQyxlQUFlO0lBQ2YsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVzs7QUFFZiIsImZpbGUiOiJjZXJyYXItYm90b24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaXJjbGUtY3J1entcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNnB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIFxyXG59Il19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _componentes_vista_movil_vista_movil_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/vista-movil/vista-movil.component */ "OOk/");
/* harmony import */ var _componentes_listado_movil_listado_movil_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/listado-movil/listado-movil.component */ "xtd8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pipes_price_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/price.pipe */ "CQ0i");
/* harmony import */ var _componentes_cerrar_boton_cerrar_boton_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componentes/cerrar-boton/cerrar-boton.component */ "YBgn");
/* harmony import */ var _pipes_gb_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/gb.pipe */ "S7eM");
/* harmony import */ var _pipes_inch_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/inch.pipe */ "PX34");
/* harmony import */ var _componentes_anadir_phone_anadir_phone_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./componentes/anadir-phone/anadir-phone.component */ "J8e6");
/* harmony import */ var _componentes_nuevo_phone_nuevo_phone_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componentes/nuevo-phone/nuevo-phone.component */ "sIBF");
/* harmony import */ var _pipes_filtrado_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/filtrado.pipe */ "R/2O");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _componentes_tlf_anadido_tlf_anadido_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./componentes/tlf-anadido/tlf-anadido.component */ "cdXk");
/* harmony import */ var _componentes_tlf_borrado_tlf_borrado_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./componentes/tlf-borrado/tlf-borrado.component */ "4Iib");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");


















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _componentes_vista_movil_vista_movil_component__WEBPACK_IMPORTED_MODULE_4__["VistaMovilComponent"],
        _componentes_listado_movil_listado_movil_component__WEBPACK_IMPORTED_MODULE_5__["ListadoMovilComponent"],
        _pipes_price_pipe__WEBPACK_IMPORTED_MODULE_7__["PricePipe"],
        _componentes_cerrar_boton_cerrar_boton_component__WEBPACK_IMPORTED_MODULE_8__["CerrarBotonComponent"],
        _pipes_gb_pipe__WEBPACK_IMPORTED_MODULE_9__["GbPipe"],
        _pipes_inch_pipe__WEBPACK_IMPORTED_MODULE_10__["InchPipe"],
        _componentes_anadir_phone_anadir_phone_component__WEBPACK_IMPORTED_MODULE_11__["AnadirPhoneComponent"],
        _componentes_nuevo_phone_nuevo_phone_component__WEBPACK_IMPORTED_MODULE_12__["NuevoPhoneComponent"],
        _pipes_filtrado_pipe__WEBPACK_IMPORTED_MODULE_13__["FiltradoPipe"],
        _componentes_tlf_anadido_tlf_anadido_component__WEBPACK_IMPORTED_MODULE_15__["TlfAnadidoComponent"],
        _componentes_tlf_borrado_tlf_borrado_component__WEBPACK_IMPORTED_MODULE_16__["TlfBorradoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]] }); })();


/***/ }),

/***/ "cdXk":
/*!******************************************************************!*\
  !*** ./src/app/componentes/tlf-anadido/tlf-anadido.component.ts ***!
  \******************************************************************/
/*! exports provided: TlfAnadidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlfAnadidoComponent", function() { return TlfAnadidoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class TlfAnadidoComponent {
    constructor() { }
    ngOnInit() {
    }
}
TlfAnadidoComponent.ɵfac = function TlfAnadidoComponent_Factory(t) { return new (t || TlfAnadidoComponent)(); };
TlfAnadidoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TlfAnadidoComponent, selectors: [["app-tlf-anadido"]], decls: 3, vars: 0, consts: [["routerLink", "/app-listado-movil", 1, "mensaje-container"]], template: function TlfAnadidoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " El telefono ha sido a\u00F1adido correctamente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".mensaje-container[_ngcontent-%COMP%]{\r\n    width: 280px;\r\n    margin-top:30px;\r\n    margin-bottom: 30px;\r\n    padding-left: 10px;\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n    background-color: rgba(228, 228, 228, 0.199);\r\n    \r\n    border-radius: 20px;\r\n    border: 3px solid#4BB543   ;\r\n    margin-left: 5px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRsZi1hbmFkaWRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQiw0Q0FBNEM7SUFDNUMsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6InRsZi1hbmFkaWRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVuc2FqZS1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI4LCAyMjgsIDIyOCwgMC4xOTkpO1xyXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIzRCQjU0MyAgIDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "sIBF":
/*!******************************************************************!*\
  !*** ./src/app/componentes/nuevo-phone/nuevo-phone.component.ts ***!
  \******************************************************************/
/*! exports provided: NuevoPhoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoPhoneComponent", function() { return NuevoPhoneComponent; });
/* harmony import */ var src_app_modelos_phone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modelos/phone */ "FAvl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_servicios_phones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/phones.service */ "Ow2Z");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pipes_price_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/price.pipe */ "CQ0i");
/* harmony import */ var _pipes_inch_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/inch.pipe */ "PX34");
/* harmony import */ var _pipes_gb_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/gb.pipe */ "S7eM");







class NuevoPhoneComponent {
    constructor(phoneService, router) {
        this.phoneService = phoneService;
        this.router = router;
        this.nuevoPhone = new src_app_modelos_phone__WEBPACK_IMPORTED_MODULE_0__["Phone"](0, "", "", "", "", 0, "", 0, "", 0);
    }
    ngOnInit() {
    }
    anadirPhone(imageFileName, manufacturer, color, name, price, screen, processor, ram, description) {
        if (imageFileName.length > 0) {
            this.nuevoPhone.imageFileName = imageFileName;
        }
        if (name.length > 0) {
            this.nuevoPhone.name = name;
        }
        if (manufacturer.length > 0) {
            this.nuevoPhone.manufacturer = manufacturer;
        }
        if (description.length > 0) {
            this.nuevoPhone.description = description;
        }
        if (color.length > 0) {
            this.nuevoPhone.color = color;
        }
        if (price != null) {
            this.nuevoPhone.price = price;
        }
        if (screen != null) {
            this.nuevoPhone.screen = screen;
        }
        if (processor.length > 0) {
            this.nuevoPhone.processor = processor;
        }
        if (ram != null) {
            this.nuevoPhone.ram = ram;
        }
        this.phoneService.postPhones(this.nuevoPhone).subscribe((data) => {
            if (data.type === 1) {
                this.router.navigate(['app-vista-movil/anadir-phone/tlf-anadido']);
            }
        });
    }
}
NuevoPhoneComponent.ɵfac = function NuevoPhoneComponent_Factory(t) { return new (t || NuevoPhoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_servicios_phones_service__WEBPACK_IMPORTED_MODULE_2__["PhonesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
NuevoPhoneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NuevoPhoneComponent, selectors: [["app-nuevo-phone"]], decls: 64, vars: 15, consts: [[1, "banner", "relative"], [1, "col-center", "marginTop10"], ["src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7XKk9BSRIe3DcZHKqmR9tyVZq2xeNnEFGTj8GQfrKbwcabQbyldxUHlrrHbwT4H2jzZQ&usqp=CAU", 1, "image"], ["routerLink", "/app-listado-movil", 1, "circle-cruz"], ["src", "assets/close.svg", 1, "icon"], [1, "col-left", "menu-item", "relative"], [1, "col-right", 2, "width", "inherit"], [1, "botonModificar", "marginRight32", "marginTop10", 3, "click"], [1, "row-left", "caracteristicas"], [1, "colorDetalle"], [1, "input", "marginLeft12", 3, "placeholder"], ["imageFileName", ""], ["manufacturer", ""], ["color", ""], [1, "row-left"], [1, "title", "col-left"], [1, "titleInput", "sizeTitle", 3, "placeholder"], ["name", ""], ["type", "number", 1, "titleInput", "absoluteRight", "sizePrice", 3, "placeholder"], ["price", ""], [1, "hr"], [1, "row-left", "paddingLeft20"], [1, "col-left", "menu-item"], [1, "row-center", "detalles"], [1, "row-center", "detallesItem"], ["type", "number", 3, "placeholder"], ["screen", ""], [3, "placeholder"], ["processor", ""], ["ram", ""], [1, "row-left", "description"], [1, "row-lef", "description"], ["description", ""]], template: function NuevoPhoneComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NuevoPhoneComponent_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](23); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](28); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](31); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](40); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](47); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](53); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](61); return ctx.anadirPhone(_r0.value, _r1.value, _r2.value, _r3.value, _r4.valueAsNumber, _r5.valueAsNumber, _r6.value, _r7.valueAsNumber, _r8.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Guardar telefono ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "photo url: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "manufacturer: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 10, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "color: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 10, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " SCREEN: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](41, "inch");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " PROCESSOR: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " RAM: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 25, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](54, "gb");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " Descripcion: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "textarea", null, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "div", 20);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx.nuevoPhone.imageFileName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx.nuevoPhone.manufacturer);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx.nuevoPhone.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx.nuevoPhone.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 9, ctx.nuevoPhone.price));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](41, 11, ctx.nuevoPhone.screen));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx.nuevoPhone.processor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](54, 13, ctx.nuevoPhone.ram));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.nuevoPhone.description);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], pipes: [_pipes_price_pipe__WEBPACK_IMPORTED_MODULE_4__["PricePipe"], _pipes_inch_pipe__WEBPACK_IMPORTED_MODULE_5__["InchPipe"], _pipes_gb_pipe__WEBPACK_IMPORTED_MODULE_6__["GbPipe"]], styles: [".banner[_ngcontent-%COMP%]{\r\n    width:375px;\r\n    min-height: 150px ;\r\n    overflow-y: hidden;\r\n   \r\n}\r\n\r\n\r\n\r\n.image[_ngcontent-%COMP%]{\r\n    align-items: center;\r\n    width: 200px;\r\n    height: auto;\r\n}\r\n\r\n\r\n\r\n.title[_ngcontent-%COMP%]{\r\nfont-size: 28px;\r\ncolor: #000000;\r\ntext-align: center;\r\nfont-family: dosis-bold;\r\ntext-transform: capitalize;\r\nmargin-top: 5px;\r\npadding-left: 30px;\r\n}\r\n\r\n\r\n\r\n.sizeTitle[_ngcontent-%COMP%]{\r\n    width: 200px;\r\n}\r\n\r\n\r\n\r\n.sizePrice[_ngcontent-%COMP%]{\r\n    width: 70px;\r\n}\r\n\r\n\r\n\r\n.titleInput[_ngcontent-%COMP%]{\r\n    font-size: 28px;\r\n    color: #000000;\r\n    text-align: left;\r\n    font-family: dosis-bold;\r\n    text-transform: capitalize;\r\n    margin-top: 5px;\r\n    border: 1px solid #00000086;\r\n    border-radius: 5px;\r\n    }\r\n\r\n\r\n\r\n.titleInput[_ngcontent-%COMP%]::placeholder{\r\n        font-size: 28px;\r\n        color: #000000;\r\n        text-align: left;\r\n        font-family: dosis-bold;\r\n        text-transform: capitalize;\r\n        }\r\n\r\n\r\n\r\n.caracteristicas[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n    color: #00000086;\r\n    text-align: center;\r\n    font-family: dosis-bold;\r\n    text-transform: uppercase;\r\n    \r\n    }\r\n\r\n\r\n\r\n.caracteristicas[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n        font-size: 13px;\r\n        color: #00000086;\r\n        text-align: left;\r\n        font-family: dosis-bold;\r\n        text-transform: uppercase;\r\n        border: 1px solid #00000086;\r\n        border-radius: 5px;\r\n        width: 100px;\r\n        }\r\n\r\n\r\n\r\n.detalles[_ngcontent-%COMP%]{\r\n        font-size: 14px;\r\n        color: #000000;\r\n        text-align: center;\r\n        font-family: dosis-bold;\r\n        text-transform: uppercase;\r\n        margin-top: 5px;\r\n        padding-left: 30px;  \r\n}\r\n\r\n\r\n\r\n.detallesItem[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    color: #00000086;\r\n    text-align: center;\r\n    font-family: dosis-bold;\r\n    text-transform: capitalize;\r\n    padding-left: 30px;  \r\n}\r\n\r\n\r\n\r\n.detallesItem[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 60px;\r\n    height: auto;\r\n    font-size: 14px;\r\n    color: #00000086;\r\n    font-family: dosis-bold;\r\n    text-transform: capitalize;\r\n    border: 1px solid #00000086;\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n\r\n.colorDetalle[_ngcontent-%COMP%]{\r\n\r\n        font-size: 13px;\r\n        color: #000000;\r\n        text-align: center;\r\n        font-family: dosis-bold;\r\n        text-transform: uppercase;\r\n        padding-left: 30px;\r\n}\r\n\r\n\r\n\r\n.color[_ngcontent-%COMP%]{\r\n    width: 70px;\r\n    height: 30px;\r\n    margin-left: 10px;\r\n    border-radius: 10px;\r\n    align-items:center;\r\n    font-family: dosis-bold;\r\n    text-transform: uppercase;\r\n    font-size: 12px;\r\n    color: white;\r\n\r\n}\r\n\r\n\r\n\r\n.colorWhite[_ngcontent-%COMP%]{\r\n    width: 70px;\r\n    height: 30px;\r\n    margin-left: 10px;\r\n    border-radius: 10px;\r\n    align-items:center;\r\n    font-family: dosis-bold;\r\n    text-transform: uppercase;\r\n    font-size: 12px;\r\n    color: rgb(0, 0, 0);\r\n    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.1);\r\n\r\n}\r\n\r\n\r\n\r\n.description[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{\r\n        font-size: 14px;\r\n        font-family: dosis-medium;\r\n        color: rgb(150, 150, 150);\r\n        margin-top: 5px;\r\n        width: 300px;\r\n        height: 200px;\r\n        border: 1px solid #00000086;\r\n        border-radius: 5px;\r\n    }\r\n\r\n\r\n\r\n.description[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n        font-family: dosis-bold;\r\n        color: rgb(0, 0, 0);\r\n        margin-top: 5px;\r\n        padding-left: 30px;\r\n        text-align: justify;\r\n        text-justify: inter-word;\r\n\r\n\r\n    }\r\n\r\n\r\n\r\n.relative[_ngcontent-%COMP%]{\r\n    position: relative;\r\n}\r\n\r\n\r\n\r\n.absoluteRight[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    right: 50px;\r\n}\r\n\r\n\r\n\r\n.circle-cruz[_ngcontent-%COMP%]{\r\n    width: 45px;\r\n    height: 45px;\r\n    border-radius: 50%;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    background-color:white;\r\n    border: none;\r\n    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.1);\r\n    cursor: pointer;\r\n    outline: none;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: absolute;\r\n    top: 15px;\r\n    left: 25px;\r\n    \r\n}\r\n\r\n\r\n\r\n.iphoneCard[_ngcontent-%COMP%]\r\n{\r\n    margin-top: 100px;\r\n    width: 100%;\r\n    border-radius: 30px;\r\n    background-color: white;\r\n    position: relative;\r\n}\r\n\r\n\r\n\r\n.menu-item[_ngcontent-%COMP%]\r\n{\r\n    width: 100%;\r\n    height: auto;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    \r\n    \r\n}\r\n\r\n\r\n\r\n.hr[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    height: 0;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n    border-bottom: 1px solid rgba(255, 255, 255, 0.3);\r\n    width: inherit;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n\r\n\r\n.custom-hr[_ngcontent-%COMP%]\r\n{\r\n    width: 97%;\r\n    border-bottom: solid 2px rgba(178, 193, 198, 0.185); \r\n    position: relative;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51ZXZvLXBob25lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCOztBQUV0Qjs7OztBQUlBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0FBQ2hCOzs7O0FBSUE7QUFDQSxlQUFlO0FBQ2YsY0FBYztBQUNkLGtCQUFrQjtBQUNsQix1QkFBdUI7QUFDdkIsMEJBQTBCO0FBQzFCLGVBQWU7QUFDZixrQkFBa0I7QUFDbEI7Ozs7QUFDQTtJQUNJLFlBQVk7QUFDaEI7Ozs7QUFDQTtJQUNJLFdBQVc7QUFDZjs7OztBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQjs7OztBQUNKO1FBQ1EsZUFBZTtRQUNmLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsdUJBQXVCO1FBQ3ZCLDBCQUEwQjtRQUMxQjs7OztBQUNSO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHlCQUF5Qjs7SUFFekI7Ozs7QUFDQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLHVCQUF1QjtRQUN2Qix5QkFBeUI7UUFDekIsMkJBQTJCO1FBQzNCLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1o7Ozs7QUFDUjtRQUNRLGVBQWU7UUFDZixjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLHVCQUF1QjtRQUN2Qix5QkFBeUI7UUFDekIsZUFBZTtRQUNmLGtCQUFrQjtBQUMxQjs7OztBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixrQkFBa0I7QUFDdEI7Ozs7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEI7Ozs7QUFDQTs7UUFFUSxlQUFlO1FBQ2YsY0FBYztRQUNkLGtCQUFrQjtRQUNsQix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLGtCQUFrQjtBQUMxQjs7OztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixZQUFZOztBQUVoQjs7OztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsMkNBQTJDOztBQUUvQzs7OztBQUVBO1FBQ1EsZUFBZTtRQUNmLHlCQUF5QjtRQUN6Qix5QkFBeUI7UUFDekIsZUFBZTtRQUNmLFlBQVk7UUFDWixhQUFhO1FBQ2IsMkJBQTJCO1FBQzNCLGtCQUFrQjtJQUN0Qjs7OztBQUVKO1FBQ1EsZUFBZTtRQUNmLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsd0JBQXdCOzs7SUFHNUI7Ozs7QUFJSjtJQUNJLGtCQUFrQjtBQUN0Qjs7OztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7OztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDJDQUEyQztJQUMzQyxlQUFlO0lBQ2YsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTs7QUFFZDs7OztBQU9BOztJQUVJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7Ozs7QUFHQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7O0lBRW5CLHdCQUF3QjtBQUM1Qjs7OztBQVNBO0lBQ0ksU0FBUztJQUNULFNBQVM7SUFDVCx3Q0FBd0M7SUFDeEMsaURBQWlEO0lBQ2pELGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOzs7O0FBSUE7O0lBRUksVUFBVTtJQUNWLG1EQUFtRDtJQUNuRCxrQkFBa0I7QUFDdEIiLCJmaWxlIjoibnVldm8tcGhvbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcblxyXG5cclxuLmJhbm5lcntcclxuICAgIHdpZHRoOjM3NXB4O1xyXG4gICAgbWluLWhlaWdodDogMTUwcHggO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICBcclxufVxyXG5cclxuXHJcblxyXG4uaW1hZ2V7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5cclxuXHJcbi50aXRsZXtcclxuZm9udC1zaXplOiAyOHB4O1xyXG5jb2xvcjogIzAwMDAwMDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5mb250LWZhbWlseTogZG9zaXMtYm9sZDtcclxudGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbm1hcmdpbi10b3A6IDVweDtcclxucGFkZGluZy1sZWZ0OiAzMHB4O1xyXG59XHJcbi5zaXplVGl0bGV7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbn1cclxuLnNpemVQcmljZXtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG59XHJcbi50aXRsZUlucHV0e1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1mYW1pbHk6IGRvc2lzLWJvbGQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA4NjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuLnRpdGxlSW5wdXQ6OnBsYWNlaG9sZGVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBkb3Npcy1ib2xkO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIH1cclxuLmNhcmFjdGVyaXN0aWNhc3tcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwODY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogZG9zaXMtYm9sZDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBcclxuICAgIH1cclxuICAgIC5jYXJhY3RlcmlzdGljYXMgaW5wdXR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwODY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBmb250LWZhbWlseTogZG9zaXMtYm9sZDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA4NjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuLmRldGFsbGVze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGRvc2lzLWJvbGQ7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4OyAgXHJcbn1cclxuLmRldGFsbGVzSXRlbXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwODY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogZG9zaXMtYm9sZDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4OyAgXHJcbn1cclxuLmRldGFsbGVzSXRlbSBpbnB1dHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA4NjtcclxuICAgIGZvbnQtZmFtaWx5OiBkb3Npcy1ib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwODY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmNvbG9yRGV0YWxsZXtcclxuXHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LWZhbWlseTogZG9zaXMtYm9sZDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxufVxyXG4uY29sb3J7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBkb3Npcy1ib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuLmNvbG9yV2hpdGV7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBkb3Npcy1ib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNnB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHRleHRhcmVhe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LWZhbWlseTogZG9zaXMtbWVkaXVtO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA4NjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LWZhbWlseTogZG9zaXMtYm9sZDtcclxuICAgICAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICB0ZXh0LWp1c3RpZnk6IGludGVyLXdvcmQ7XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuLnJlbGF0aXZle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5hYnNvbHV0ZVJpZ2h0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDUwcHg7XHJcbn1cclxuLmNpcmNsZS1jcnV6e1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA2cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTVweDtcclxuICAgIGxlZnQ6IDI1cHg7XHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4uaXBob25lQ2FyZFxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5cclxuLm1lbnUtaXRlbVxyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgXHJcbiAgICAvKiBwYWRkaW5nLWxlZnQ6IDIwcHg7ICovXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4uaHIge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5jdXN0b20taHJcclxue1xyXG4gICAgd2lkdGg6IDk3JTtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCByZ2JhKDE3OCwgMTkzLCAxOTgsIDAuMTg1KTsgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG4gIFxyXG5cclxuXHJcbiAgXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _componentes_tlf_borrado_tlf_borrado_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componentes/tlf-borrado/tlf-borrado.component */ "4Iib");
/* harmony import */ var _componentes_tlf_anadido_tlf_anadido_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./componentes/tlf-anadido/tlf-anadido.component */ "cdXk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _componentes_vista_movil_vista_movil_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/vista-movil/vista-movil.component */ "OOk/");
/* harmony import */ var _componentes_listado_movil_listado_movil_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/listado-movil/listado-movil.component */ "xtd8");
/* harmony import */ var _componentes_anadir_phone_anadir_phone_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/anadir-phone/anadir-phone.component */ "J8e6");
/* harmony import */ var _componentes_nuevo_phone_nuevo_phone_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/nuevo-phone/nuevo-phone.component */ "sIBF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const routes = [
    {
        path: 'app-vista-movil',
        component: _componentes_vista_movil_vista_movil_component__WEBPACK_IMPORTED_MODULE_3__["VistaMovilComponent"],
    }, {
        path: 'app-listado-movil',
        component: _componentes_listado_movil_listado_movil_component__WEBPACK_IMPORTED_MODULE_4__["ListadoMovilComponent"],
    }, {
        path: 'app-vista-movil/anadir-phone',
        component: _componentes_anadir_phone_anadir_phone_component__WEBPACK_IMPORTED_MODULE_5__["AnadirPhoneComponent"],
    },
    {
        path: 'app-listado-movil/nuevo-phone',
        component: _componentes_nuevo_phone_nuevo_phone_component__WEBPACK_IMPORTED_MODULE_6__["NuevoPhoneComponent"],
    }, {
        path: 'app-vista-movil/anadir-phone/tlf-anadido',
        component: _componentes_tlf_anadido_tlf_anadido_component__WEBPACK_IMPORTED_MODULE_1__["TlfAnadidoComponent"],
    }, {
        path: 'app-vista-movil/anadir-phone/tlf-borrado',
        component: _componentes_tlf_borrado_tlf_borrado_component__WEBPACK_IMPORTED_MODULE_0__["TlfBorradoComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "xtd8":
/*!**********************************************************************!*\
  !*** ./src/app/componentes/listado-movil/listado-movil.component.ts ***!
  \**********************************************************************/
/*! exports provided: ListadoMovilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoMovilComponent", function() { return ListadoMovilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_servicios_phones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicios/phones.service */ "Ow2Z");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pipes_price_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/price.pipe */ "CQ0i");






function ListadoMovilComponent_div_0_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const phone_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", phone_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](phone_r3);
} }
function ListadoMovilComponent_div_0_div_16_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const phone_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, phone_r4.price), " ");
} }
function ListadoMovilComponent_div_0_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListadoMovilComponent_div_0_div_16_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const i_r5 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.cargarVista(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ListadoMovilComponent_div_0_div_16_div_7_Template, 3, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const phone_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", phone_r4.imageFileName || "https://image.freepik.com/vector-gratis/smartphone-vector-realista_66219-1479.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", phone_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", phone_r4.manufacturer, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", phone_r4.price);
} }
function ListadoMovilComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListadoMovilComponent_div_0_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.buscar = $event; })("input", function ListadoMovilComponent_div_0_Template_input_input_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.busqueda(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "A\u00F1adir Smartphone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListadoMovilComponent_div_0_Template_select_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.filteredManufacturer = $event; })("change", function ListadoMovilComponent_div_0_Template_select_change_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.filterManufacturer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Busca una marca");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ListadoMovilComponent_div_0_option_9_Template, 2, 2, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListadoMovilComponent_div_0_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r15.cargarTelefonos(); return ctx_r15.filteredManufacturer = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListadoMovilComponent_div_0_Template_div_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.sortDinero(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "precio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ListadoMovilComponent_div_0_div_16_Template, 9, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.buscar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.filteredManufacturer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.marcas);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.isPricing == true ? "arrowArriba" : "arrowAbajo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.phonesFiltered);
} }
class ListadoMovilComponent {
    constructor(phonesService, router) {
        this.phonesService = phonesService;
        this.router = router;
        this.isIntro = true;
        this.phonesFiltered = [];
        this.phonesPrice = [];
        this.isPricing = false;
        this.buscar = "";
        this.filteredManufacturer = "";
        this.marcas = [];
        this.cargarTelefonos();
    }
    ngOnInit() {
    }
    marcasUnicas() {
        for (let i = 0; i < this.phonesFiltered.length; i++) {
            this.marcas.push(this.phonesFiltered[i].manufacturer.toLowerCase());
            console.log(this.marcas);
        }
        this.marcas = this.marcas.filter((value, index) => this.marcas.indexOf(value) === index);
    }
    busqueda() {
        if (this.buscar != "") {
            this.phonesFiltered = this.phonesService.phones.filter(phone => {
                return phone.name.toLocaleLowerCase().match(this.buscar.toLocaleLowerCase());
            });
        }
        else if (this.buscar == "") {
            this.phonesFiltered = this.phonesService.phones;
        }
    }
    sortDinero() {
        if (!this.isPricing) {
            this.isPricing = true;
            this.phonesFiltered.sort((a, b) => { return (a.price - b.price); });
        }
        else {
            this.isPricing = false;
            this.phonesFiltered.sort((a, b) => { return (b.price - a.price); });
        }
    }
    filterManufacturer() {
        console.log(this.filteredManufacturer);
        this.phonesFiltered = this.phonesFiltered.filter(res => {
            return res.manufacturer.toLocaleLowerCase().match(this.filteredManufacturer.toLocaleLowerCase());
        });
    }
    cargarTelefonos() {
        this.phonesService.getPhones().subscribe((data) => {
            if (data.type == 1) {
                this.phonesService.phones = data.message;
                this.phonesFiltered = this.phonesService.phones;
                this.isIntro = false;
                console.log(this.phonesService.phones);
                this.marcasUnicas();
            }
        });
    }
    cargarVista(i) {
        this.phonesService.phoneDetail = this.phonesService.phones[i];
        this.router.navigate(["app-vista-movil"]);
    }
}
ListadoMovilComponent.ɵfac = function ListadoMovilComponent_Factory(t) { return new (t || ListadoMovilComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicios_phones_service__WEBPACK_IMPORTED_MODULE_1__["PhonesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ListadoMovilComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListadoMovilComponent, selectors: [["app-listado-movil"]], decls: 1, vars: 1, consts: [["class", "listado col-center", 4, "ngIf"], [1, "listado", "col-center"], [1, "row-left", "marginBottom10", "relative", 2, "width", "inherit"], ["placeholder", "buscar...", 1, "input", "marginRight12", 3, "ngModel", "ngModelChange", "input"], ["routerLink", "nuevo-phone", 1, "botonAnadir", "absoluteRight"], ["name", "filtroDinero", 1, "input", 3, "ngModel", "ngModelChange", "change"], ["disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "botonClose", 3, "click"], ["src", "assets/close.svg", 1, "icon"], [1, "filtroDinero", "absoluteRight", 3, "click"], ["src", "assets/right-arrow.svg", 1, "icon", "marginLeft12", 3, "ngClass"], [1, "lista", "col-left"], ["class", "listItem row-left widthInherit", 3, "click", 4, "ngFor", "ngForOf"], [3, "value"], [1, "listItem", "row-left", "widthInherit", 3, "click"], [1, "col-center"], [1, "thumbList", 3, "src"], [1, "col-center", "marginLeft12"], [1, "col-center", "marginLeft12", "textGrayRegular20"], ["class", "col-center marginLeft12   textGrayRegular20", 4, "ngIf"], [1, "custom-hr"]], template: function ListadoMovilComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListadoMovilComponent_div_0_Template, 17, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isIntro);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], pipes: [_pipes_price_pipe__WEBPACK_IMPORTED_MODULE_5__["PricePipe"]], styles: [".busqueda[_ngcontent-%COMP%]\r\n{\r\n    height: auto;\r\n    width: 340px;\r\n    margin-bottom: 100px;\r\n    border-radius: 30px;\r\n    background-color: white;\r\n\r\n    overflow-x: hidden;\r\n    overflow-y:auto;\r\n    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\r\n}\r\n\r\n.filtroDinero[_ngcontent-%COMP%]{\r\n    color: black;\r\n    font-size: 18px;\r\n    font-weight: 600px;\r\n}\r\n\r\n.button6[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n        padding :0.9em 4.4em;\r\n        margin:0 0.3em 0.3em 0;\r\n        border-radius:0.15em;\r\n        box-sizing: border-box;\r\n        text-decoration:none;\r\n        text-transform:uppercase;\r\n        font-weight:400;\r\n        color: #FFFFFF;\r\n        background-color:#3369ff;\r\n        box-sizing:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);\r\n        text-align:center;\r\n        position:relative;\r\n        }\r\n\r\n.button6[_ngcontent-%COMP%]:active{\r\n        top:0.1em;\r\n        }\r\n\r\n@media all and (max-width:30em){\r\n            \u2003.button6[_ngcontent-%COMP%]{\r\n            display:block;\r\n            margin:0.4em auto;\r\n            }\r\n        }\r\n\r\n.spinner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 80px;\r\n\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%]{\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.listItem[_ngcontent-%COMP%]{\r\n    height: 70px;\r\n    border-bottom: solid 2px rgba(178, 193, 198, 0.185); \r\n}\r\n\r\n.listItem[_ngcontent-%COMP%]:hover{\r\n    background-color: #cdffff;\r\n}\r\n\r\n.lista[_ngcontent-%COMP%]{\r\n    background-color: #F8FBFB;\r\n    width: inherit;\r\n    border-radius: 20px;\r\n\r\n}\r\n\r\n.listado[_ngcontent-%COMP%]{\r\n    margin-top:10px;\r\n    width: 300px;\r\n}\r\n\r\n.absoluteRight[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    right: 0px;\r\n}\r\n\r\n.relative[_ngcontent-%COMP%]{\r\n    position: relative;\r\n}\r\n\r\n.botonAnadir[_ngcontent-%COMP%]{\r\n    color: white;\r\n    width: auto;\r\n    height: 30px;\r\n    background-color:coral;\r\n    outline: none;\r\n    border: none;\r\n    cursor: pointer;\r\n    border-radius: 6px;\r\n    text-transform: uppercase;\r\n    font-weight: 400px;\r\n    font-family: dosis-bold;\r\n    \r\n}\r\n\r\n.thumbList[_ngcontent-%COMP%]{\r\n    width: 70px;\r\n    height: 72px;\r\n    object-fit: cover;\r\n    object-position: center center;\r\n}\r\n\r\n.widthInherit[_ngcontent-%COMP%]{\r\n    width: inherit;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhZG8tbW92aWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsdUJBQXVCOztBQUUzQjtFQUNFLEtBQUssa0JBQWtCO0lBQ3JCLGVBQWU7SUFDZixxREFBcUQ7QUFDekQ7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtRQUNqQixvQkFBb0I7UUFDcEIsc0JBQXNCO1FBQ3RCLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIsb0JBQW9CO1FBQ3BCLHdCQUF3QjtRQUN4QixlQUFlO1FBQ2YsY0FBYztRQUNkLHdCQUF3QjtRQUN4QixvREFBb0Q7UUFDcEQsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQjs7QUFDQTtRQUNBLFNBQVM7UUFDVDs7QUFDQTtZQUNJO1lBQ0EsYUFBYTtZQUNiLGlCQUFpQjtZQUNqQjtRQUNKOztBQUVSO0lBQ0ksV0FBVzs7QUFFZjs7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLFlBQVk7SUFDWixtREFBbUQ7QUFDdkQ7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLG1CQUFtQjs7QUFFdkI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsdUJBQXVCOztBQUUzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDhCQUE4QjtBQUNsQzs7QUFDQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoibGlzdGFkby1tb3ZpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1c3F1ZWRhXHJcbntcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAzNDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuLyogICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2JhKDE3OCwgMTkzLCAxOTgsIDAuMTg1KTs7XHJcbiAqLyAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OmF1dG87XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAyOXB4IDBweDtcclxufVxyXG5cclxuLmZpbHRyb0RpbmVyb3tcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDBweDtcclxufVxyXG5cclxuLmJ1dHRvbjZ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZyA6MC45ZW0gNC40ZW07XHJcbiAgICAgICAgbWFyZ2luOjAgMC4zZW0gMC4zZW0gMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjAuMTVlbTtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMzM2OWZmO1xyXG4gICAgICAgIGJveC1zaXppbmc6aW5zZXQgMCAtMC42ZW0gMCAtMC4zNWVtIHJnYmEoMCwwLDAsMC4xNyk7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idXR0b242OmFjdGl2ZXtcclxuICAgICAgICB0b3A6MC4xZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6MzBlbSl7XHJcbiAgICAgICAgICAgIOKAgy5idXR0b242e1xyXG4gICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46MC40ZW0gYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbi5zcGlubmVyIGltZ3tcclxuICAgIHdpZHRoOiA4MHB4O1xyXG5cclxufVxyXG4uc3Bpbm5lcntcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmxpc3RJdGVte1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHJnYmEoMTc4LCAxOTMsIDE5OCwgMC4xODUpOyBcclxufVxyXG4ubGlzdEl0ZW06aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RmZmZmO1xyXG59XHJcbi5saXN0YXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEZCRkI7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblxyXG59XHJcbi5saXN0YWRve1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG59XHJcbi5hYnNvbHV0ZVJpZ2h0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxufVxyXG4ucmVsYXRpdmV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmJvdG9uQW5hZGlye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmNvcmFsO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogNDAwcHg7XHJcbiAgICBmb250LWZhbWlseTogZG9zaXMtYm9sZDtcclxuICAgIFxyXG59XHJcblxyXG4udGh1bWJMaXN0e1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDcycHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxufVxyXG4ud2lkdGhJbmhlcml0e1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcbn1cclxuXHJcblxyXG4gICAgICAgICJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map