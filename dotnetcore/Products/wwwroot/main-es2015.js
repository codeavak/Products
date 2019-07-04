(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n  .navbar-brand {\r\n    font-size: x-large;\r\n  }\r\n</style>\r\n<nav class=\"navbar navbar-expand-md bg-dark navbar-dark sticky-top\">\r\n  <a class=\"navbar-brand\" href=\"#\" [routerLink]=\"['']\"\r\n    ><div>\r\n      <span style=\"color:#F9D342;\">P</span><span style=\"color:#FFF;\">R</span\r\n      ><span style=\"color:#F9D342;\">O</span><span style=\"color:#fff;\">D</span\r\n      ><span style=\"color:#F9D342;\">U</span><span style=\"color:#fff;\">C</span\r\n      ><span style=\"color:#F9D342;\">T</span><span style=\"color:#fff;\">S</span>\r\n    </div></a\r\n  >\r\n  <button\r\n    class=\"navbar-toggler navbar-toggler-right\"\r\n    type=\"button\"\r\n    data-toggle=\"collapse\"\r\n    data-target=\"#navb\"\r\n    aria-expanded=\"true\"\r\n  >\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div id=\"navb\" class=\"navbar-collapse collapse hide\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" href=\"#\" [routerLink]=\"['']\"><i class=\"fa fa-list mr-2\"></i>Product List</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/not-found/not-found.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/not-found/not-found.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<figure>\r\n  <div class=\"sad-mac\"></div>\r\n  <figcaption>\r\n    <span class=\"sr-text\">Error 404: Not Found</span>\r\n    <span class=\"e\"></span>\r\n    <span class=\"r\"></span>\r\n    <span class=\"r\"></span>\r\n    <span class=\"o\"></span>\r\n    <span class=\"r\"></span>\r\n    <span class=\"_4\"></span>\r\n    <span class=\"_0\"></span>\r\n    <span class=\"_4\"></span>\r\n    <span class=\"n\"></span>\r\n    <span class=\"o\"></span>\r\n    <span class=\"t\"></span>\r\n    <span class=\"f\"></span>\r\n    <span class=\"o\"></span>\r\n    <span class=\"u\"></span>\r\n    <span class=\"n\"></span>\r\n    <span class=\"d\"></span>\r\n  </figcaption>\r\n</figure>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/product-detail/product-detail.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/product-detail/product-detail.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1 *ngIf=\"!productLoaded && !producErrored\">Loading</h1>\r\n  <h1 *ngIf=\"producErrored\">Error Loading Product</h1>\r\n\r\n  <div *ngIf=\"productLoaded\">\r\n    <h1 class=\"mt-4 mb-5\"><i class=\"fa fa-info-circle mr-2\"></i> Displaying Product Details</h1>\r\n\r\n    <h3>Product ID:</h3>\r\n    <p>{{ product.id }}</p>\r\n    <h3>Product Name:</h3>\r\n    <p>{{ product.name }}</p>\r\n    <h3>Product Description:</h3>\r\n    <p>{{ product.description }}</p>\r\n    <h3>Available Quantity:</h3>\r\n    <p>{{ product.quantity }}</p>\r\n\r\n    <button class=\"btn btn-warning btn-block\" (click)=\"navigateToList()\">\r\n      <i class=\"fa fa-arrow-left mr-2\"></i> Return to list\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/product/product.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/product/product.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">{{ name }}</div>\r\n      <div class=\"col-md-6\">\r\n        <span class=\"badge badge-pill badge-info\"\r\n          >{{ quantity }} Available</span\r\n        >\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    {{ description }}\r\n  </div>\r\n  <button (click)=\"navigateToDetailsPage(product.id)\">\r\n    <i class=\"fa fa-search mr-2\"></i>View Product Page\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/products/products.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/products/products.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h3 class=\"mt-2 mb-5 text-center\">\r\n    <i class=\"fa fa-list mr-2\"></i> Products List\r\n    <button class=\"btn btn-success btn-block mt-5\" (click)=\"open(content)\">\r\n      <i class=\"fa fa-plus mr-2\"></i> Add New\r\n    </button>\r\n  </h3>\r\n  <div *ngIf=\"!products || products.length == 0\">\r\n    <div class=\"row\">\r\n      <h1>There are currently no products to display.</h1>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"products.length > 0\">\r\n    <div class=\"row\">\r\n      <app-product\r\n        *ngFor=\"let product of products\"\r\n        [product]=\"product\"\r\n        class=\"col-md-3 mb-4\"\r\n      ></app-product>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #content let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Add New Product</h4>\r\n    <button\r\n      type=\"button\"\r\n      class=\"close\"\r\n      aria-label=\"Close\"\r\n      (click)=\"modal.dismiss('Cross click')\"\r\n    >\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form ngForm #newForm=\"ngForm\" (ngSubmit)=\"submitForm(newForm, modal)\">\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">Product Name:</label>\r\n        <input\r\n          class=\"form-control\"\r\n          type=\"text\"\r\n          required\r\n          name=\"name\"\r\n          id=\"name\"\r\n          ngModel\r\n          #name=\"ngModel\"\r\n        />\r\n        <div *ngIf=\"name.invalid\">\r\n          <div\r\n            class=\"text-danger bg-warning\"\r\n            *ngIf=\"name.touched && name.errors.required\"\r\n          >\r\n            Name is required.\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"description\">Brief Deacription:</label>\r\n        <input\r\n          class=\"form-control\"\r\n          type=\"text\"\r\n          name=\"description\"\r\n          id=\"description\"\r\n          ngModel\r\n          #description=\"ngModel\"\r\n        />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"quantity\">Available Quantity:</label>\r\n        <input\r\n          class=\"form-control\"\r\n          type=\"number\"\r\n          required\r\n          min=\"0\"\r\n          name=\"quantity\"\r\n          id=\"quantity\"\r\n          ngModel\r\n          #quantity=\"ngModel\"\r\n        />\r\n        <div *ngIf=\"quantity.invalid\">\r\n          <div\r\n            class=\"text-danger bg-warning\"\r\n            *ngIf=\"quantity.touched && quantity.errors.required\"\r\n          >\r\n            Quantity is required.\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"p-3 text-danger\" *ngIf=\"errorMessage\">{{ errorMessage }}</div>\r\n      <button\r\n        class=\"btn btn-outline-dark\"\r\n        [disabled]=\"!newForm.valid\"\r\n        [style.cursor]=\"!newForm.valid ? 'no-drop' : 'pointer'\"\r\n      >\r\n        <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i> Save\r\n      </button>\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-dark\"\r\n        (click)=\"modal.close('Cancel click')\"\r\n      >\r\n        <i class=\"fa fa-cross\" aria-hidden=\"true\"></i> Cancel\r\n      </button>\r\n    </form>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/product-detail/product-detail.component */ "./src/app/components/product-detail/product-detail.component.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");






const routes = [{ path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"] },
    { path: 'products/:id', component: _components_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_1__["ProductDetailComponent"] },
    { path: '**', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angular8';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/product/product.component */ "./src/app/components/product/product.component.ts");
/* harmony import */ var _components_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/product-detail/product-detail.component */ "./src/app/components/product-detail/product-detail.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
            _components_products_products_component__WEBPACK_IMPORTED_MODULE_9__["ProductsComponent"],
            _components_product_product_component__WEBPACK_IMPORTED_MODULE_10__["ProductComponent"],
            _components_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_11__["ProductDetailComponent"],
            _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  border: 0;\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\nbody {\r\n  background: currentColor;\r\n}\r\n/* I. Containers */\r\nfigure {\r\n  font-size: 6px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  width: 64em;\r\n}\r\nfigcaption {\r\n  color: #000;\r\n  display: flex;\r\n  align-content: space-between;\r\n  flex-wrap: wrap;\r\n  height: 17em;\r\n}\r\nfigcaption span:before,\r\n.sad-mac:before {\r\n  content: \"\";\r\n  display: block;\r\n  width: 1em;\r\n  height: 1em;\r\n  -webkit-transform: translate(-1em, -1em);\r\n          transform: translate(-1em, -1em);\r\n}\r\nfigcaption span {\r\n  display: inline-block;\r\n  margin: 0 2em;\r\n  width: 4em;\r\n  height: 6em;\r\n}\r\n.sr-text {\r\n  overflow: hidden;\r\n  position: absolute;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n/* II. Sprites */\r\n/* 1. Sad Mac */\r\n.sad-mac {\r\n  background: #fff;\r\n  margin: 0 auto 7em auto;\r\n  width: 23em;\r\n  height: 30em;\r\n}\r\n.sad-mac:before {\r\n  box-shadow: 1em 1em, 23em 1em, 4em 3em, 5em 3em, 6em 3em, 7em 3em, 8em 3em,\r\n    9em 3em, 10em 3em, 11em 3em, 12em 3em, 13em 3em, 14em 3em, 15em 3em,\r\n    16em 3em, 17em 3em, 18em 3em, 19em 3em, 20em 3em, 3em 4em, 21em 4em, 3em 5em,\r\n    21em 5em, 3em 6em, 7em 6em, 9em 6em, 15em 6em, 17em 6em, 21em 6em, 3em 7em,\r\n    8em 7em, 16em 7em, 21em 7em, 3em 8em, 7em 8em, 9em 8em, 15em 8em, 17em 8em,\r\n    21em 8em, 3em 9em, 21em 9em, 3em 10em, 10em 10em, 13em 10em, 21em 10em,\r\n    3em 11em, 11em 11em, 12em 11em, 21em 11em, 3em 12em, 21em 12em, 3em 13em,\r\n    10em 13em, 11em 13em, 12em 13em, 13em 13em, 14em 13em, 21em 13em, 3em 14em,\r\n    9em 14em, 15em 14em, 16em 14em, 21em 14em, 3em 15em, 17em 15em, 21em 15em,\r\n    3em 16em, 21em 16em, 4em 17em, 5em 17em, 6em 17em, 7em 17em, 8em 17em,\r\n    9em 17em, 10em 17em, 11em 17em, 12em 17em, 13em 17em, 14em 17em, 15em 17em,\r\n    16em 17em, 17em 17em, 18em 17em, 19em 17em, 20em 17em, 3em 22em, 4em 22em,\r\n    5em 22em, 14em 22em, 15em 22em, 16em 22em, 17em 22em, 18em 22em, 19em 22em,\r\n    20em 22em, 1em 27em, 2em 27em, 3em 27em, 4em 27em, 5em 27em, 6em 27em,\r\n    7em 27em, 8em 27em, 9em 27em, 10em 27em, 11em 27em, 12em 27em, 13em 27em,\r\n    14em 27em, 15em 27em, 16em 27em, 17em 27em, 18em 27em, 19em 27em, 20em 27em,\r\n    21em 27em, 22em 27em, 23em 27em, 1em 28em, 23em 28em, 1em 29em, 23em 29em,\r\n    1em 30em, 23em 30em;\r\n}\r\n/* 2. Letters */\r\n._0:before {\r\n  box-shadow: 2em 1em, 3em 1em, 1em 2em, 1em 3em, 1em 4em, 1em 5em, 4em 2em,\r\n    4em 3em, 4em 4em, 4em 5em, 2em 4em, 3em 3em, 2em 6em, 3em 6em;\r\n}\r\n._4:before {\r\n  box-shadow: 1em 1em, 1em 2em, 1em 3em, 1em 4em, 4em 1em, 4em 2em, 4em 3em,\r\n    4em 4em, 2em 4em, 3em 4em, 4em 5em, 4em 6em;\r\n}\r\n.d:before {\r\n  box-shadow: 1em 1em, 2em 1em, 3em 1em, 1em 2em, 4em 2em, 1em 3em, 4em 3em,\r\n    1em 4em, 4em 4em, 1em 5em, 4em 5em, 1em 6em, 2em 6em, 3em 6em;\r\n}\r\n.e:before {\r\n  box-shadow: 1em 1em, 2em 1em, 3em 1em, 4em 1em, 1em 2em, 1em 3em, 2em 3em,\r\n    3em 3em, 1em 4em, 1em 5em, 1em 6em, 2em 6em, 3em 6em, 4em 6em;\r\n}\r\n.f:before {\r\n  box-shadow: 1em 1em, 2em 1em, 3em 1em, 4em 1em, 1em 2em, 1em 3em, 2em 3em,\r\n    3em 3em, 1em 4em, 1em 5em, 1em 6em;\r\n}\r\n.n:before {\r\n  box-shadow: 1em 1em, 1em 2em, 1em 3em, 1em 4em, 1em 5em, 1em 6em, 4em 1em,\r\n    4em 2em, 4em 3em, 4em 4em, 4em 5em, 4em 6em, 2em 3em, 3em 4em;\r\n}\r\n.o:before {\r\n  box-shadow: 2em 1em, 3em 1em, 1em 2em, 1em 3em, 1em 4em, 1em 5em, 4em 2em,\r\n    4em 3em, 4em 4em, 4em 5em, 2em 6em, 3em 6em;\r\n}\r\n.r:before {\r\n  box-shadow: 1em 1em, 2em 1em, 3em 1em, 4em 2em, 1em 2em, 1em 3em, 1em 4em,\r\n    2em 3em, 3em 3em, 1em 5em, 1em 6em, 4em 4em, 4em 5em, 4em 6em;\r\n}\r\n.t:before {\r\n  box-shadow: 1em 1em, 2em 1em, 3em 1em, 2em 2em, 2em 3em, 2em 4em, 2em 5em,\r\n    2em 6em;\r\n}\r\n.u:before {\r\n  box-shadow: 1em 1em, 1em 2em, 1em 3em, 1em 4em, 1em 5em, 4em 1em, 4em 2em,\r\n    4em 3em, 4em 4em, 4em 5em, 2em 6em, 3em 6em;\r\n}\r\n/* III. Responsiveness */\r\n/* This cannot be smoothly done using viewport units; sprite pixels will look divided when font size is a floating point. */\r\n@media screen and (min-width: 720px) {\r\n  figure {\r\n    font-size: 7px;\r\n  }\r\n}\r\n@media screen and (min-width: 1440px) {\r\n  figure {\r\n    font-size: 8px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBLGtCQUFrQjtBQUNsQjtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0VBQ2hDLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBOztFQUVFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVc7RUFDWCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7QUFDWDtBQUNBLGdCQUFnQjtBQUNoQixlQUFlO0FBQ2Y7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFpQnFCO0FBQ3ZCO0FBQ0EsZUFBZTtBQUNmO0VBQ0U7aUVBQytEO0FBQ2pFO0FBQ0E7RUFDRTsrQ0FDNkM7QUFDL0M7QUFDQTtFQUNFO2lFQUMrRDtBQUNqRTtBQUNBO0VBQ0U7aUVBQytEO0FBQ2pFO0FBQ0E7RUFDRTtzQ0FDb0M7QUFDdEM7QUFDQTtFQUNFO2lFQUMrRDtBQUNqRTtBQUNBO0VBQ0U7K0NBQzZDO0FBQy9DO0FBQ0E7RUFDRTtpRUFDK0Q7QUFDakU7QUFDQTtFQUNFO1dBQ1M7QUFDWDtBQUNBO0VBQ0U7K0NBQzZDO0FBQy9DO0FBQ0Esd0JBQXdCO0FBQ3hCLDJIQUEySDtBQUMzSDtFQUNFO0lBQ0UsY0FBYztFQUNoQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGNBQWM7RUFDaEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xyXG59XHJcbi8qIEkuIENvbnRhaW5lcnMgKi9cclxuZmlndXJlIHtcclxuICBmb250LXNpemU6IDZweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHdpZHRoOiA2NGVtO1xyXG59XHJcbmZpZ2NhcHRpb24ge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgaGVpZ2h0OiAxN2VtO1xyXG59XHJcbmZpZ2NhcHRpb24gc3BhbjpiZWZvcmUsXHJcbi5zYWQtbWFjOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMWVtO1xyXG4gIGhlaWdodDogMWVtO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xZW0sIC0xZW0pO1xyXG59XHJcbmZpZ2NhcHRpb24gc3BhbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMCAyZW07XHJcbiAgd2lkdGg6IDRlbTtcclxuICBoZWlnaHQ6IDZlbTtcclxufVxyXG4uc3ItdGV4dCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcbi8qIElJLiBTcHJpdGVzICovXHJcbi8qIDEuIFNhZCBNYWMgKi9cclxuLnNhZC1tYWMge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgbWFyZ2luOiAwIGF1dG8gN2VtIGF1dG87XHJcbiAgd2lkdGg6IDIzZW07XHJcbiAgaGVpZ2h0OiAzMGVtO1xyXG59XHJcbi5zYWQtbWFjOmJlZm9yZSB7XHJcbiAgYm94LXNoYWRvdzogMWVtIDFlbSwgMjNlbSAxZW0sIDRlbSAzZW0sIDVlbSAzZW0sIDZlbSAzZW0sIDdlbSAzZW0sIDhlbSAzZW0sXHJcbiAgICA5ZW0gM2VtLCAxMGVtIDNlbSwgMTFlbSAzZW0sIDEyZW0gM2VtLCAxM2VtIDNlbSwgMTRlbSAzZW0sIDE1ZW0gM2VtLFxyXG4gICAgMTZlbSAzZW0sIDE3ZW0gM2VtLCAxOGVtIDNlbSwgMTllbSAzZW0sIDIwZW0gM2VtLCAzZW0gNGVtLCAyMWVtIDRlbSwgM2VtIDVlbSxcclxuICAgIDIxZW0gNWVtLCAzZW0gNmVtLCA3ZW0gNmVtLCA5ZW0gNmVtLCAxNWVtIDZlbSwgMTdlbSA2ZW0sIDIxZW0gNmVtLCAzZW0gN2VtLFxyXG4gICAgOGVtIDdlbSwgMTZlbSA3ZW0sIDIxZW0gN2VtLCAzZW0gOGVtLCA3ZW0gOGVtLCA5ZW0gOGVtLCAxNWVtIDhlbSwgMTdlbSA4ZW0sXHJcbiAgICAyMWVtIDhlbSwgM2VtIDllbSwgMjFlbSA5ZW0sIDNlbSAxMGVtLCAxMGVtIDEwZW0sIDEzZW0gMTBlbSwgMjFlbSAxMGVtLFxyXG4gICAgM2VtIDExZW0sIDExZW0gMTFlbSwgMTJlbSAxMWVtLCAyMWVtIDExZW0sIDNlbSAxMmVtLCAyMWVtIDEyZW0sIDNlbSAxM2VtLFxyXG4gICAgMTBlbSAxM2VtLCAxMWVtIDEzZW0sIDEyZW0gMTNlbSwgMTNlbSAxM2VtLCAxNGVtIDEzZW0sIDIxZW0gMTNlbSwgM2VtIDE0ZW0sXHJcbiAgICA5ZW0gMTRlbSwgMTVlbSAxNGVtLCAxNmVtIDE0ZW0sIDIxZW0gMTRlbSwgM2VtIDE1ZW0sIDE3ZW0gMTVlbSwgMjFlbSAxNWVtLFxyXG4gICAgM2VtIDE2ZW0sIDIxZW0gMTZlbSwgNGVtIDE3ZW0sIDVlbSAxN2VtLCA2ZW0gMTdlbSwgN2VtIDE3ZW0sIDhlbSAxN2VtLFxyXG4gICAgOWVtIDE3ZW0sIDEwZW0gMTdlbSwgMTFlbSAxN2VtLCAxMmVtIDE3ZW0sIDEzZW0gMTdlbSwgMTRlbSAxN2VtLCAxNWVtIDE3ZW0sXHJcbiAgICAxNmVtIDE3ZW0sIDE3ZW0gMTdlbSwgMThlbSAxN2VtLCAxOWVtIDE3ZW0sIDIwZW0gMTdlbSwgM2VtIDIyZW0sIDRlbSAyMmVtLFxyXG4gICAgNWVtIDIyZW0sIDE0ZW0gMjJlbSwgMTVlbSAyMmVtLCAxNmVtIDIyZW0sIDE3ZW0gMjJlbSwgMThlbSAyMmVtLCAxOWVtIDIyZW0sXHJcbiAgICAyMGVtIDIyZW0sIDFlbSAyN2VtLCAyZW0gMjdlbSwgM2VtIDI3ZW0sIDRlbSAyN2VtLCA1ZW0gMjdlbSwgNmVtIDI3ZW0sXHJcbiAgICA3ZW0gMjdlbSwgOGVtIDI3ZW0sIDllbSAyN2VtLCAxMGVtIDI3ZW0sIDExZW0gMjdlbSwgMTJlbSAyN2VtLCAxM2VtIDI3ZW0sXHJcbiAgICAxNGVtIDI3ZW0sIDE1ZW0gMjdlbSwgMTZlbSAyN2VtLCAxN2VtIDI3ZW0sIDE4ZW0gMjdlbSwgMTllbSAyN2VtLCAyMGVtIDI3ZW0sXHJcbiAgICAyMWVtIDI3ZW0sIDIyZW0gMjdlbSwgMjNlbSAyN2VtLCAxZW0gMjhlbSwgMjNlbSAyOGVtLCAxZW0gMjllbSwgMjNlbSAyOWVtLFxyXG4gICAgMWVtIDMwZW0sIDIzZW0gMzBlbTtcclxufVxyXG4vKiAyLiBMZXR0ZXJzICovXHJcbi5fMDpiZWZvcmUge1xyXG4gIGJveC1zaGFkb3c6IDJlbSAxZW0sIDNlbSAxZW0sIDFlbSAyZW0sIDFlbSAzZW0sIDFlbSA0ZW0sIDFlbSA1ZW0sIDRlbSAyZW0sXHJcbiAgICA0ZW0gM2VtLCA0ZW0gNGVtLCA0ZW0gNWVtLCAyZW0gNGVtLCAzZW0gM2VtLCAyZW0gNmVtLCAzZW0gNmVtO1xyXG59XHJcbi5fNDpiZWZvcmUge1xyXG4gIGJveC1zaGFkb3c6IDFlbSAxZW0sIDFlbSAyZW0sIDFlbSAzZW0sIDFlbSA0ZW0sIDRlbSAxZW0sIDRlbSAyZW0sIDRlbSAzZW0sXHJcbiAgICA0ZW0gNGVtLCAyZW0gNGVtLCAzZW0gNGVtLCA0ZW0gNWVtLCA0ZW0gNmVtO1xyXG59XHJcbi5kOmJlZm9yZSB7XHJcbiAgYm94LXNoYWRvdzogMWVtIDFlbSwgMmVtIDFlbSwgM2VtIDFlbSwgMWVtIDJlbSwgNGVtIDJlbSwgMWVtIDNlbSwgNGVtIDNlbSxcclxuICAgIDFlbSA0ZW0sIDRlbSA0ZW0sIDFlbSA1ZW0sIDRlbSA1ZW0sIDFlbSA2ZW0sIDJlbSA2ZW0sIDNlbSA2ZW07XHJcbn1cclxuLmU6YmVmb3JlIHtcclxuICBib3gtc2hhZG93OiAxZW0gMWVtLCAyZW0gMWVtLCAzZW0gMWVtLCA0ZW0gMWVtLCAxZW0gMmVtLCAxZW0gM2VtLCAyZW0gM2VtLFxyXG4gICAgM2VtIDNlbSwgMWVtIDRlbSwgMWVtIDVlbSwgMWVtIDZlbSwgMmVtIDZlbSwgM2VtIDZlbSwgNGVtIDZlbTtcclxufVxyXG4uZjpiZWZvcmUge1xyXG4gIGJveC1zaGFkb3c6IDFlbSAxZW0sIDJlbSAxZW0sIDNlbSAxZW0sIDRlbSAxZW0sIDFlbSAyZW0sIDFlbSAzZW0sIDJlbSAzZW0sXHJcbiAgICAzZW0gM2VtLCAxZW0gNGVtLCAxZW0gNWVtLCAxZW0gNmVtO1xyXG59XHJcbi5uOmJlZm9yZSB7XHJcbiAgYm94LXNoYWRvdzogMWVtIDFlbSwgMWVtIDJlbSwgMWVtIDNlbSwgMWVtIDRlbSwgMWVtIDVlbSwgMWVtIDZlbSwgNGVtIDFlbSxcclxuICAgIDRlbSAyZW0sIDRlbSAzZW0sIDRlbSA0ZW0sIDRlbSA1ZW0sIDRlbSA2ZW0sIDJlbSAzZW0sIDNlbSA0ZW07XHJcbn1cclxuLm86YmVmb3JlIHtcclxuICBib3gtc2hhZG93OiAyZW0gMWVtLCAzZW0gMWVtLCAxZW0gMmVtLCAxZW0gM2VtLCAxZW0gNGVtLCAxZW0gNWVtLCA0ZW0gMmVtLFxyXG4gICAgNGVtIDNlbSwgNGVtIDRlbSwgNGVtIDVlbSwgMmVtIDZlbSwgM2VtIDZlbTtcclxufVxyXG4ucjpiZWZvcmUge1xyXG4gIGJveC1zaGFkb3c6IDFlbSAxZW0sIDJlbSAxZW0sIDNlbSAxZW0sIDRlbSAyZW0sIDFlbSAyZW0sIDFlbSAzZW0sIDFlbSA0ZW0sXHJcbiAgICAyZW0gM2VtLCAzZW0gM2VtLCAxZW0gNWVtLCAxZW0gNmVtLCA0ZW0gNGVtLCA0ZW0gNWVtLCA0ZW0gNmVtO1xyXG59XHJcbi50OmJlZm9yZSB7XHJcbiAgYm94LXNoYWRvdzogMWVtIDFlbSwgMmVtIDFlbSwgM2VtIDFlbSwgMmVtIDJlbSwgMmVtIDNlbSwgMmVtIDRlbSwgMmVtIDVlbSxcclxuICAgIDJlbSA2ZW07XHJcbn1cclxuLnU6YmVmb3JlIHtcclxuICBib3gtc2hhZG93OiAxZW0gMWVtLCAxZW0gMmVtLCAxZW0gM2VtLCAxZW0gNGVtLCAxZW0gNWVtLCA0ZW0gMWVtLCA0ZW0gMmVtLFxyXG4gICAgNGVtIDNlbSwgNGVtIDRlbSwgNGVtIDVlbSwgMmVtIDZlbSwgM2VtIDZlbTtcclxufVxyXG4vKiBJSUkuIFJlc3BvbnNpdmVuZXNzICovXHJcbi8qIFRoaXMgY2Fubm90IGJlIHNtb290aGx5IGRvbmUgdXNpbmcgdmlld3BvcnQgdW5pdHM7IHNwcml0ZSBwaXhlbHMgd2lsbCBsb29rIGRpdmlkZWQgd2hlbiBmb250IHNpemUgaXMgYSBmbG9hdGluZyBwb2ludC4gKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzIwcHgpIHtcclxuICBmaWd1cmUge1xyXG4gICAgZm9udC1zaXplOiA3cHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xyXG4gIGZpZ3VyZSB7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/not-found/not-found.component.html"),
        styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/components/not-found/not-found.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NotFoundComponent);



/***/ }),

/***/ "./src/app/components/product-detail/product-detail.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/product-detail/product-detail.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/product-detail/product-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/product-detail/product-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_prodcut_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/prodcut.service */ "./src/app/services/prodcut.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let ProductDetailComponent = class ProductDetailComponent {
    constructor(router, route, service) {
        this.router = router;
        this.route = route;
        this.service = service;
        this.productLoaded = false;
        this.producErrored = false;
        this.navigateToList = () => {
            this.router.navigateByUrl("");
        };
    }
    ngOnInit() {
        this.routeParamId = this.route.snapshot.paramMap.get("id");
        console.log(this.routeParamId);
        this.product = this.service.getProduct(this.routeParamId).subscribe(succ => {
            this.product = succ;
            this.productLoaded = true;
            console.log(succ);
        }, err => {
            this.producErrored = true;
            console.log(err);
        });
    }
};
ProductDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_prodcut_service__WEBPACK_IMPORTED_MODULE_1__["ProdcutService"] }
];
ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-product-detail",
        template: __webpack_require__(/*! raw-loader!./product-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/product-detail/product-detail.component.html"),
        styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/components/product-detail/product-detail.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_prodcut_service__WEBPACK_IMPORTED_MODULE_1__["ProdcutService"]])
], ProductDetailComponent);



/***/ }),

/***/ "./src/app/components/product/product.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/product/product.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/product/product.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/product/product.component.ts ***!
  \*********************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ProductComponent = class ProductComponent {
    constructor(router) {
        this.router = router;
        this.navigateToDetailsPage = id => this.router.navigate(["/products/" + id]);
    }
    ngOnInit() {
        this.name = this.product.name;
        this.description = this.product.description;
        this.quantity = this.product.quantity;
    }
};
ProductComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ProductComponent.prototype, "product", void 0);
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-product",
        template: __webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/product/product.component.html"),
        styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/components/product/product.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ProductComponent);



/***/ }),

/***/ "./src/app/components/products/products.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/products/products.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/products/products.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_prodcut_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/prodcut.service */ "./src/app/services/prodcut.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");




let ProductsComponent = class ProductsComponent {
    constructor(service, modalService) {
        this.service = service;
        this.modalService = modalService;
        this.products = [];
        this.errorMessage = "";
        this.submitForm = (form, content) => {
            console.log(form.value);
            this.service.postProduct(form.value).subscribe(succ => {
                this.products.push(succ);
                console.log(succ);
                content.dismiss();
            }, err => {
                console.log(err.error);
                this.errorMessage = err.error;
            });
        };
    }
    ngOnInit() {
        this.service.getProducts().subscribe(succ => {
            console.log(succ);
            this.products = succ;
        }, err => console.log(err));
    }
    open(content) {
        this.modalRef = this.modalService.open(content, {
            size: "lg",
            ariaLabelledBy: "modal-basic-title"
        });
    }
    close() {
        this.modalRef.close();
    }
};
ProductsComponent.ctorParameters = () => [
    { type: _services_prodcut_service__WEBPACK_IMPORTED_MODULE_1__["ProdcutService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-products",
        template: __webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/products/products.component.html"),
        styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/components/products/products.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_prodcut_service__WEBPACK_IMPORTED_MODULE_1__["ProdcutService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
], ProductsComponent);



/***/ }),

/***/ "./src/app/services/prodcut.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/prodcut.service.ts ***!
  \*********************************************/
/*! exports provided: ProdcutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdcutService", function() { return ProdcutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ProdcutService = class ProdcutService {
    constructor(http) {
        this.http = http;
        this.prodBaseUrl = "https://johnnyproducts.azurewebsites.net/api/products";
        this.baseUrl = "https://localhost:44325/api/products";
        this.getProducts = () => this.http.get(this.baseUrl);
        this.getProduct = id => this.http.get(this.baseUrl + "/" + id);
        this.postProduct = newProduct => this.http.post(this.baseUrl, newProduct);
    }
};
ProdcutService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProdcutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ProdcutService);



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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\javak\Desktop\products\angular8\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map