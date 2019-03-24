(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <app-listcolor (outChangColor)=\"outGetChangeColor($event)\" [colors]=\"colors\"></app-listcolor>\n  </div>\n  <div class=\"col-md-6\">\n      <app-action (outGetReset)=\"outReset()\" (outGetChange)=\"outChangeSize($event)\" [size]=\"size\"></app-action>\n  </div>\n</div>\n<app-content  [color]=\"color\" [size]=\"size\"></app-content>\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "learningangular";
        this.color = "black";
        this.size = 16;
        this.colors = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.colors = [
            "red",
            "black",
            "thistle",
            "lavender",
            "plum",
            "violet",
            "mediumorchid",
            "darkorchid",
            "indigo",
            "purple",
            "maroon",
            "gray",
            "green",
            "blue"
        ];
    };
    AppComponent.prototype.outChangeSize = function (size) {
        this.size = size;
    };
    AppComponent.prototype.outReset = function () {
        this.color = "black";
        this.size = 16;
    };
    AppComponent.prototype.outGetChangeColor = function (color) {
        this.color = color;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _becomponent_list_list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./becomponent/list/list/list.component */ "./src/app/becomponent/list/list/list.component.ts");
/* harmony import */ var _becomponent_listcolor_listcolor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./becomponent/listcolor/listcolor.component */ "./src/app/becomponent/listcolor/listcolor.component.ts");
/* harmony import */ var _becomponent_content_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./becomponent/content/content.component */ "./src/app/becomponent/content/content.component.ts");
/* harmony import */ var _becomponent_action_action_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./becomponent/action/action.component */ "./src/app/becomponent/action/action.component.ts");
/* harmony import */ var _todolist_todolist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./todolist/todolist.component */ "./src/app/todolist/todolist.component.ts");
/* harmony import */ var _todolist_item_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./todolist/item/item.component */ "./src/app/todolist/item/item.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _becomponent_list_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
                _becomponent_listcolor_listcolor_component__WEBPACK_IMPORTED_MODULE_6__["ListcolorComponent"],
                _becomponent_content_content_component__WEBPACK_IMPORTED_MODULE_7__["ContentComponent"],
                _becomponent_action_action_component__WEBPACK_IMPORTED_MODULE_8__["ActionComponent"],
                _todolist_todolist_component__WEBPACK_IMPORTED_MODULE_9__["TodolistComponent"],
                _todolist_item_item_component__WEBPACK_IMPORTED_MODULE_10__["ItemComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/becomponent/action/action.component.css":
/*!*********************************************************!*\
  !*** ./src/app/becomponent/action/action.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlY29tcG9uZW50L2FjdGlvbi9hY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/becomponent/action/action.component.html":
/*!**********************************************************!*\
  !*** ./src/app/becomponent/action/action.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Size : {{size}}px</h3>\n<span>\n    <button type=\"button\" (click)=\"onChangeSize(-2)\" class=\"btn btn-primary\">Giảm</button>\n    <button type=\"button\" (click)=\"onChangeSize(2)\"   class=\"btn btn-danger\">Tăng</button>\n</span>\n<div><button type=\"button\" (click)=\"onReset()\" class=\"btn btn-warning\">Reset</button></div>\n\n"

/***/ }),

/***/ "./src/app/becomponent/action/action.component.ts":
/*!********************************************************!*\
  !*** ./src/app/becomponent/action/action.component.ts ***!
  \********************************************************/
/*! exports provided: ActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionComponent", function() { return ActionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ActionComponent = /** @class */ (function () {
    function ActionComponent() {
        this.size = 16;
        this.outChangeSize = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.outReset = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ActionComponent.prototype.ngOnInit = function () { };
    ActionComponent.prototype.onChangeSize = function (value) {
        this.outChangeSize.emit(this.size + value);
    };
    ActionComponent.prototype.onReset = function () {
        this.outReset.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("size"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ActionComponent.prototype, "size", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("outGetChange"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ActionComponent.prototype, "outChangeSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("outGetReset"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ActionComponent.prototype, "outReset", void 0);
    ActionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-action",
            template: __webpack_require__(/*! ./action.component.html */ "./src/app/becomponent/action/action.component.html"),
            styles: [__webpack_require__(/*! ./action.component.css */ "./src/app/becomponent/action/action.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ActionComponent);
    return ActionComponent;
}());



/***/ }),

/***/ "./src/app/becomponent/content/content.component.css":
/*!***********************************************************!*\
  !*** ./src/app/becomponent/content/content.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlY29tcG9uZW50L2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/becomponent/content/content.component.html":
/*!************************************************************!*\
  !*** ./src/app/becomponent/content/content.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top:20px\">\n  <h2 [ngStyle]=\"{'color': color}\">Màu đang chọn : {{color}}</h2>\n<p class=\"col-md-6\" [ngStyle]=\"{'border-color': color,'font-size.px':size,'color': color}\" style=\"border:solid 1px\">\n  cai này phải đổi màu nè\n</p>\n</div>\n"

/***/ }),

/***/ "./src/app/becomponent/content/content.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/becomponent/content/content.component.ts ***!
  \**********************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("color"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ContentComponent.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("size"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ContentComponent.prototype, "size", void 0);
    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/becomponent/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/becomponent/content/content.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/becomponent/list/list/list.component.css":
/*!**********************************************************!*\
  !*** ./src/app/becomponent/list/list/list.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlY29tcG9uZW50L2xpc3QvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/becomponent/list/list/list.component.html":
/*!***********************************************************!*\
  !*** ./src/app/becomponent/list/list/list.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  list works!\n</p>\n"

/***/ }),

/***/ "./src/app/becomponent/list/list/list.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/becomponent/list/list/list.component.ts ***!
  \*********************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListComponent = /** @class */ (function () {
    function ListComponent() {
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/becomponent/list/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/becomponent/list/list/list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/becomponent/listcolor/listcolor.component.css":
/*!***************************************************************!*\
  !*** ./src/app/becomponent/listcolor/listcolor.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item{\r\n  height: 40px;width: 40px;margin:auto;\r\n}\r\n.parent{\r\n  height: 50px;width: 50px;border: solid 1px;margin:5px 0px 0px 5px;display: flex\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVjb21wb25lbnQvbGlzdGNvbG9yL2xpc3Rjb2xvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWSxDQUFDLFdBQVcsQ0FBQyxXQUFXO0FBQ3RDO0FBQ0E7RUFDRSxZQUFZLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQixDQUFDO0FBQ3BFIiwiZmlsZSI6InNyYy9hcHAvYmVjb21wb25lbnQvbGlzdGNvbG9yL2xpc3Rjb2xvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW17XHJcbiAgaGVpZ2h0OiA0MHB4O3dpZHRoOiA0MHB4O21hcmdpbjphdXRvO1xyXG59XHJcbi5wYXJlbnR7XHJcbiAgaGVpZ2h0OiA1MHB4O3dpZHRoOiA1MHB4O2JvcmRlcjogc29saWQgMXB4O21hcmdpbjo1cHggMHB4IDBweCA1cHg7ZGlzcGxheTogZmxleFxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/becomponent/listcolor/listcolor.component.html":
/*!****************************************************************!*\
  !*** ./src/app/becomponent/listcolor/listcolor.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">Select Color</h3>\n  </div>\n  <div class=\"panel-body\" style=\"display:flex;flex-wrap: wrap;\">\n    <div *ngFor=\"let item of colors\" [ngStyle]=\"{'border-color': item}\"  (click)=\"onSetColor(item)\" class=\"parent\">\n      <div  [ngStyle]=\"{'background-color': item}\" class=\"item\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/becomponent/listcolor/listcolor.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/becomponent/listcolor/listcolor.component.ts ***!
  \**************************************************************/
/*! exports provided: ListcolorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListcolorComponent", function() { return ListcolorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListcolorComponent = /** @class */ (function () {
    function ListcolorComponent() {
        this.outChangColor = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ListcolorComponent.prototype.ngOnInit = function () { };
    ListcolorComponent.prototype.onSetColor = function (color) {
        this.outChangColor.emit(color);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("colors"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListcolorComponent.prototype, "colors", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("outChangColor"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListcolorComponent.prototype, "outChangColor", void 0);
    ListcolorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-listcolor",
            template: __webpack_require__(/*! ./listcolor.component.html */ "./src/app/becomponent/listcolor/listcolor.component.html"),
            styles: [__webpack_require__(/*! ./listcolor.component.css */ "./src/app/becomponent/listcolor/listcolor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListcolorComponent);
    return ListcolorComponent;
}());



/***/ }),

/***/ "./src/app/todolist/item/item.component.css":
/*!**************************************************!*\
  !*** ./src/app/todolist/item/item.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG9saXN0L2l0ZW0vaXRlbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/todolist/item/item.component.html":
/*!***************************************************!*\
  !*** ./src/app/todolist/item/item.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  item works!\n</p>\n"

/***/ }),

/***/ "./src/app/todolist/item/item.component.ts":
/*!*************************************************!*\
  !*** ./src/app/todolist/item/item.component.ts ***!
  \*************************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ItemComponent = /** @class */ (function () {
    function ItemComponent() {
    }
    ItemComponent.prototype.ngOnInit = function () {
    };
    ItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/todolist/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.css */ "./src/app/todolist/item/item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/todolist/todolist.component.css":
/*!*************************************************!*\
  !*** ./src/app/todolist/todolist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\r\n  min-height: 100%;\r\n  -webkit-text-size-adjust: 100%;\r\n  -ms-text-size-adjust: 100%;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-size: 16px;\r\n  cursor: default;\r\n  background-color: #222;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: \"aktiv-grotesk-std\", Helvetica Neue, Arial, sans-serif;\r\n  font-size: 1.125rem;\r\n  line-height: 1.33333333;\r\n  background-color: #222;\r\n  color: #999;\r\n}\r\n\r\n.header {\r\n  padding: 10px 0;\r\n  height: 100px;\r\n  overflow: hidden;\r\n  line-height: 100px;\r\n}\r\n\r\n.g-col h1{\r\n  margin-top: 5px;\r\n  margin-bottom: 15px;\r\n  text-align: center;\r\n}\r\n\r\n.main {\r\npadding-bottom: 90px;\r\n}\r\n\r\n.g-row {\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  max-width: 810px;\r\n}\r\n\r\n.g-row:before, .g-row:after {\r\n  content: '';\r\n  display: table;\r\n}\r\n\r\n.g-col {\r\n  float: left;\r\n  position: relative;\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n  width: 100%;\r\n}\r\n\r\n@media screen and (min-width: 33.75em)\r\n.task-form {\r\n  margin: 80px 0 20px;\r\n}\r\n\r\n.task-form {\r\n  /*margin: 40px 0 10px;*/\r\n}\r\n\r\n@media screen and (min-width: 33.75em)\r\n.task-form__input {\r\n  height: 61px;\r\n  font-size: 2rem;\r\n}\r\n\r\n.task-form__input {\r\n  outline: none;\r\n  border: 0;\r\n  border-bottom: 1px dotted #666;\r\n  border-radius: 0;\r\n  padding: 0 0 5px 0;\r\n  width: 100%;\r\n  height: 50px;\r\n  font-family: inherit;\r\n  font-size: 1.5rem;\r\n  font-weight: 300;\r\n  color: #fff;\r\n  background: transparent;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n@media screen and (min-width: 33.75em)\r\n.task-filters {\r\n  margin-bottom: 55px;\r\n}\r\n\r\n.task-filters {\r\n  margin-bottom: 45px;\r\n  padding-left: 1px;\r\n  font-size: 1rem;\r\n  line-height: 24px;\r\n  list-style-type: none;\r\n}\r\n\r\n.task-filters li {\r\n  float: left;\r\n}\r\n\r\n.task-filters a.active {\r\n  color: #fff;\r\n}\r\n\r\n.task-filters a {\r\n  color: #999;\r\n  text-decoration: none;\r\n}\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n.task-filters li:not(:first-child) {\r\n  margin-left: 12px;\r\n}\r\n\r\n.task-filters li:not(:first-child):before {\r\n  padding-right: 12px;\r\n  content: '/';\r\n  font-weight: 300;\r\n}\r\n\r\n.task-filters li:not(:first-child):before {\r\n  padding-right: 12px;\r\n  content: '/';\r\n  font-weight: 300;\r\n}\r\n\r\n.task-filters:after {\r\n  clear: both;\r\n  content: '';\r\n  display: table;\r\n}\r\n\r\n.task-list{\r\n  border-top: 1px dotted #666;\r\n}\r\n\r\n@media screen and (min-width: 33.75em)\r\n.task-item[_ngcontent-c4] {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.task-item{\r\n  display: flex;\r\n  outline: none;\r\n  border-bottom: 1px dotted #666;\r\n  height: 60px;\r\n  overflow: hidden;\r\n  color: #fff;\r\n  font-size: 1.125rem;\r\n  font-weight: 300;\r\n}\r\n\r\n.cell:first-child {\r\n  padding-right: 20px;\r\n}\r\n\r\n.cell:first-child, .cell:last-child {\r\n  display: flex;\r\n  flex: 0 0 auto;\r\n  align-items: center;\r\n}\r\n\r\n.task-item__button:first-child {\r\n  margin: 0;\r\n}\r\n\r\n.task-item__button {\r\n  display: inline-block;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  margin-left: 5px;\r\n  outline: none;\r\n  border: 0;\r\n  border-radius: 100px;\r\n  padding: 0;\r\n  width: 40px;\r\n  height: 40px;\r\n  overflow: hidden;\r\n  background: #2a2a2a;\r\n  -webkit-transform: translate(0, 0);\r\n          transform: translate(0, 0);\r\n}\r\n\r\n.material-icons {\r\n  font-family: 'Material Icons';\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-size: 24px;\r\n  line-height: 1;\r\n  letter-spacing: normal;\r\n  text-transform: none;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  word-wrap: normal;\r\n  direction: ltr;\r\n  -webkit-font-feature-settings: 'liga';\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n.cell:nth-child(2) {\r\n  flex: 1;\r\n  padding-right: 30px;\r\n  overflow: hidden;\r\n}\r\n\r\n.task-item__title {\r\n  display: inline-block;\r\n  position: relative;\r\n  max-width: 100%;\r\n  line-height: 60px;\r\n  outline: none;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n\r\n.task-item__title:after {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  border-top: 2px solid #85bf6b;\r\n  width: 0;\r\n  height: 52%;\r\n  content: '';\r\n}\r\n\r\n.cell:last-child {\r\n  display: flex;\r\n  flex: 0 0 auto;\r\n  align-items: center;\r\n}\r\n\r\n.icon {\r\n  line-height: 40px !important;\r\n  color: #555;\r\n}\r\n\r\n.icon--active, .task-item__button:hover .icon--active {\r\n  color: #85bf6b;\r\n}\r\n\r\n.task-item--completed .task-item__title {\r\n  color: #666;\r\n}\r\n\r\n.task-item--completed .task-item__title {\r\n  color: #666;\r\n}\r\n\r\n.task-item--completed .task-item__title:after {\r\n  width: 100%;\r\n}\r\n\r\n.header__title:before {\r\n  padding-right: 15px;\r\n  color: #fff;\r\n  font-family: 'FontAwesome';\r\n  line-height: 20px;\r\n  content: \"\\F10C\";\r\n}\r\n\r\n/* Item */\r\n\r\n.cell:nth-child(2) {\r\n  flex: 1;\r\n  padding-right: 30px;\r\n  overflow: hidden;\r\n}\r\n\r\n.task-item__input {\r\n  outline: none;\r\n  border: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: 60px;\r\n  color: inherit;\r\n  font: inherit;\r\n  background: transparent;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb2xpc3QvdG9kb2xpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBQzFCLGtDQUFrQztFQUNsQyxtQ0FBbUM7RUFDbkMsZUFBZTtFQUNmLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUVBQW1FO0VBQ25FLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsbUNBQW1DO0FBQ3JDOztBQUVBOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQ0FBMEI7VUFBMUIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxxQ0FBcUM7RUFDckMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsT0FBTztFQUNQLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLFFBQVE7RUFDUixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUEsU0FBUzs7QUFFVDtFQUNFLE9BQU87RUFDUCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsYUFBYTtFQUNiLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3RvZG9saXN0L3RvZG9saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcclxuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogXCJha3Rpdi1ncm90ZXNrLXN0ZFwiLCBIZWx2ZXRpY2EgTmV1ZSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICBsaW5lLWhlaWdodDogMS4zMzMzMzMzMztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGxpbmUtaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmctY29sIGgxe1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1haW4ge1xyXG5wYWRkaW5nLWJvdHRvbTogOTBweDtcclxufVxyXG5cclxuLmctcm93IHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDgxMHB4O1xyXG59XHJcblxyXG4uZy1yb3c6YmVmb3JlLCAuZy1yb3c6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4uZy1jb2wge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzMuNzVlbSlcclxuLnRhc2stZm9ybSB7XHJcbiAgbWFyZ2luOiA4MHB4IDAgMjBweDtcclxufVxyXG5cclxuLnRhc2stZm9ybSB7XHJcbiAgLyptYXJnaW46IDQwcHggMCAxMHB4OyovXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMzLjc1ZW0pXHJcbi50YXNrLWZvcm1fX2lucHV0IHtcclxuICBoZWlnaHQ6IDYxcHg7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4udGFzay1mb3JtX19pbnB1dCB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjNjY2O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgcGFkZGluZzogMCAwIDVweCAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMy43NWVtKVxyXG4udGFzay1maWx0ZXJzIHtcclxuICBtYXJnaW4tYm90dG9tOiA1NXB4O1xyXG59XHJcblxyXG4udGFzay1maWx0ZXJzIHtcclxuICBtYXJnaW4tYm90dG9tOiA0NXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMXB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi50YXNrLWZpbHRlcnMgbGkge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4udGFzay1maWx0ZXJzIGEuYWN0aXZlIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnRhc2stZmlsdGVycyBhIHtcclxuICBjb2xvcjogIzk5OTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4udGFzay1maWx0ZXJzIGxpOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICBtYXJnaW4tbGVmdDogMTJweDtcclxufVxyXG5cclxuLnRhc2stZmlsdGVycyBsaTpub3QoOmZpcnN0LWNoaWxkKTpiZWZvcmUge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgY29udGVudDogJy8nO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi50YXNrLWZpbHRlcnMgbGk6bm90KDpmaXJzdC1jaGlsZCk6YmVmb3JlIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gIGNvbnRlbnQ6ICcvJztcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4udGFzay1maWx0ZXJzOmFmdGVyIHtcclxuICBjbGVhcjogYm90aDtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuLnRhc2stbGlzdHtcclxuICBib3JkZXItdG9wOiAxcHggZG90dGVkICM2NjY7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMzLjc1ZW0pXHJcbi50YXNrLWl0ZW1bX25nY29udGVudC1jNF0ge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4udGFzay1pdGVte1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICM2NjY7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uY2VsbDpmaXJzdC1jaGlsZCB7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmNlbGw6Zmlyc3QtY2hpbGQsIC5jZWxsOmxhc3QtY2hpbGQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRhc2staXRlbV9fYnV0dG9uOmZpcnN0LWNoaWxkIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi50YXNrLWl0ZW1fX2J1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQ6ICMyYTJhMmE7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbn1cclxuXHJcbi5tYXRlcmlhbC1pY29ucyB7XHJcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd29yZC13cmFwOiBub3JtYWw7XHJcbiAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgLXdlYmtpdC1mb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxufVxyXG5cclxuLmNlbGw6bnRoLWNoaWxkKDIpIHtcclxuICBmbGV4OiAxO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnRhc2staXRlbV9fdGl0bGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4udGFzay1pdGVtX190aXRsZTphZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjODViZjZiO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogNTIlO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG59XHJcblxyXG4uY2VsbDpsYXN0LWNoaWxkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBsaW5lLWhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjNTU1O1xyXG59XHJcblxyXG4uaWNvbi0tYWN0aXZlLCAudGFzay1pdGVtX19idXR0b246aG92ZXIgLmljb24tLWFjdGl2ZSB7XHJcbiAgY29sb3I6ICM4NWJmNmI7XHJcbn1cclxuXHJcbi50YXNrLWl0ZW0tLWNvbXBsZXRlZCAudGFzay1pdGVtX190aXRsZSB7XHJcbiAgY29sb3I6ICM2NjY7XHJcbn1cclxuXHJcbi50YXNrLWl0ZW0tLWNvbXBsZXRlZCAudGFzay1pdGVtX190aXRsZSB7XHJcbiAgY29sb3I6ICM2NjY7XHJcbn1cclxuXHJcbi50YXNrLWl0ZW0tLWNvbXBsZXRlZCAudGFzay1pdGVtX190aXRsZTphZnRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFkZXJfX3RpdGxlOmJlZm9yZSB7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LWZhbWlseTogJ0ZvbnRBd2Vzb21lJztcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBjb250ZW50OiBcIlxcRjEwQ1wiO1xyXG59XHJcblxyXG4vKiBJdGVtICovXHJcblxyXG4uY2VsbDpudGgtY2hpbGQoMikge1xyXG4gIGZsZXg6IDE7XHJcbiAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udGFzay1pdGVtX19pbnB1dCB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgZm9udDogaW5oZXJpdDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/todolist/todolist.component.html":
/*!**************************************************!*\
  !*** ./src/app/todolist/todolist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div class=\"g-row\">\n    <div class=\"g-col\">\n      <h1 class=\"header__title\">Todo Angular</h1>\n    </div>\n  </div>\n</header>\n<main class=\"main\">\n  <div class=\"g-row\">\n    <div class=\"g-col\">\n      <!-- Form Add -->\n      <form class=\"task-form\" novalidate>\n        <input autocomplete=\"off\" class=\"task-form__input\" name=\"title\" placeholder=\"Enter your task?\" required type=\"text\" />\n      </form>\n    </div>\n    <div class=\"g-col\">\n          <!-- List -->\n      <ul class=\"task-filters\">\n        <li><a class=\"active\">View All</a></li>\n        <li><a>In Progress</a></li>\n        <li><a>Completed</a></li>\n      </ul>\n\n      <div class=\"task-list\">\n        <!-- Item -->\n        <div class=\"task-item\" tabindex=\"0\">\n            <div class=\"cell\">\n                <button aria-label=\"Mark task as completed\" class=\"task-item__button\" type=\"button\">\n                    <span class=\"icon material-icons\">done</span>\n                </button>\n            </div>\n            <div class=\"cell\">\n                <div class=\"task-item__title\" tabindex=\"0\">\n                    Học Lập Trình Angular 4\n                </div>\n            </div>\n            <div class=\"cell\">\n                <button aria-label=\"Edit task title\" class=\"task-item__button\" type=\"button\">\n                    <span class=\"icon material-icons\">edit</span>\n                </button>\n                <button aria-label=\"Delete task\" class=\"task-item__button\" type=\"button\">\n                    <span class=\"icon material-icons\">delete</span>\n                </button>\n            </div>\n        </div>\n        <!-- Complete -->\n        <div class=\"task-item task-item--completed\" tabindex=\"0\">\n            <div class=\"cell\">\n                <button aria-label=\"Mark task as completed\" class=\"task-item__button\" type=\"button\">\n                    <span class=\"icon material-icons icon--active\">done</span>\n                </button>\n            </div>\n            <div class=\"cell\">\n                <div class=\"task-item__title\" tabindex=\"0\">\n                    Học Lập Trình Angular 4\n                </div>\n            </div>\n            <div class=\"cell\">\n                <button aria-label=\"Edit task title\" class=\"task-item__button\" type=\"button\">\n                    <span class=\"icon material-icons\">edit</span>\n                </button>\n                <button aria-label=\"Delete task\" class=\"task-item__button\" type=\"button\">\n                    <span class=\"icon material-icons\">delete</span>\n                </button>\n            </div>\n        </div>\n        <!-- Editing -->\n        <div class=\"task-item task-item--editing\" tabindex=\"0\">\n            <div class=\"cell\">\n\n            </div>\n            <div class=\"cell\">\n                <div class=\"task-item__title\" tabindex=\"0\">\n                    Học React.JS\n                </div>\n                <form class=\"task-form\" novalidate>\n                    <input autocomplete=\"off\" autoFocus class=\"task-item__input\" name=\"title\" type=\"text\">\n                </form>\n            </div>\n            <div class=\"cell\">\n                <button aria-label=\"Cancel editing\" class=\"task-item__button\" type=\"button\">\n                    <span class=\"icon material-icons\">&#xe14c;</span>\n                </button>\n            </div>\n        </div>\n        <!-- More -->\n        <div class=\"task-item\" tabindex=\"0\">\n            <div class=\"cell\">\n                <button aria-label=\"Mark task as completed\" class=\"task-item__button\" type=\"button\">\n                    <span class=\"icon material-icons\">done</span>\n                </button>\n            </div>\n            <div class=\"cell\">\n                <div class=\"task-item__title\" tabindex=\"0\">\n                    Học android\n                </div>\n            </div>\n            <div class=\"cell\">\n                <button aria-label=\"Edit task title\" class=\"task-item__button\" type=\"button\">\n                    <span class=\"icon material-icons\">edit</span>\n                </button>\n                <button aria-label=\"Delete task\" class=\"task-item__button\" type=\"button\">\n                    <span class=\"icon material-icons\">delete</span>\n                </button>\n            </div>\n        </div>\n\n        <div class=\"task-item\" tabindex=\"0\">\n            <div class=\"cell\">\n                <button aria-label=\"Mark task as completed\" class=\"task-item__button\" type=\"button\">\n                    <span class=\"icon material-icons\">done</span>\n                </button>\n            </div>\n            <div class=\"cell\">\n                <div class=\"task-item__title\" tabindex=\"0\">\n                    Học IOS\n                </div>\n            </div>\n            <div class=\"cell\">\n                <button aria-label=\"Edit task title\" class=\"task-item__button\" type=\"button\">\n                    <span class=\"icon material-icons\">edit</span>\n                </button>\n                <button aria-label=\"Delete task\" class=\"task-item__button\" type=\"button\">\n                    <span class=\"icon material-icons\">delete</span>\n                </button>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/todolist/todolist.component.ts":
/*!************************************************!*\
  !*** ./src/app/todolist/todolist.component.ts ***!
  \************************************************/
/*! exports provided: TodolistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodolistComponent", function() { return TodolistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TodolistComponent = /** @class */ (function () {
    function TodolistComponent() {
    }
    TodolistComponent.prototype.ngOnInit = function () {
    };
    TodolistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todolist',
            template: __webpack_require__(/*! ./todolist.component.html */ "./src/app/todolist/todolist.component.html"),
            styles: [__webpack_require__(/*! ./todolist.component.css */ "./src/app/todolist/todolist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TodolistComponent);
    return TodolistComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\user\changecolor\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map