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
/* harmony import */ var _widgets_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widgets/home/home.component */ "./src/app/widgets/home/home.component.ts");




var routes = [{ path: 'home', component: _widgets_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _widgets_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    scrollPositionRestoration: 'enabled',
                    anchorScrolling: 'enabled', scrollOffset: [0, 68]
                })],
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

module.exports = ".container-fluid-nomax {\r\n\twidth: 100%;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}\r\n\r\n.sample-flipbook{\r\n\twidth:400px;\r\n\theight:200px;\r\n\ttransition:margin-left 0.2s;\r\n}\r\n\r\n.sample-flipbook .page{\r\n\twidth:200px;\r\n\theight:200px;\r\n\tbackground-color:white;\r\n\tline-height:300px;\r\n\tfont-size:20px;\r\n}\r\n\r\n.sample-flipbook .page-wrapper{\r\n\t-webkit-perspective:2000px;\r\n\t-ms-perspective:2000px;\r\n\t-o-perspective:2000px;\r\n\tperspective:2000px;\r\n}\r\n\r\n.sample-flipbook .hard{\r\n\tbackground:#ccc !important;\r\n\tcolor:#333;\r\n\t-o-box-shadow:inset 0 0 5px #666;\r\n\t-ms-box-shadow:inset 0 0 5px #666;\r\n\tbox-shadow:inset 0 0 5px #666;\r\n\tfont-weight:bold;\r\n}\r\n\r\n.sample-flipbook .odd{\r\n\tbackground:-webkit-gradient(linear, right top, left top, color-stop(0.95, #FFF), color-stop(1, #DADADA));\r\n\tbackground-image:linear-gradient(right, #FFF 95%, #C4C4C4 100%);\r\n\t-o-box-shadow:inset 0 0 5px #666;\r\n\t-ms-box-shadow:inset 0 0 5px #666;\r\n\tbox-shadow:inset 0 0 5px #666;\r\n\t\r\n}\r\n\r\n.sample-flipbook .even{\r\n\tbackground:-webkit-gradient(linear, left top, right top, color-stop(0.95, #fff), color-stop(1, #dadada));\r\n\tbackground-image:linear-gradient(left, #fff 95%, #dadada 100%);\r\n\t-o-box-shadow:inset 0 0 5px #666;\r\n\t-ms-box-shadow:inset 0 0 5px #666;\r\n\tbox-shadow:inset 0 0 5px #666;\r\n}\r\n\r\n/****app*/\r\n\r\n.fit-top-container {\r\n    width: 1000px;\r\n    height: 500px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0lBQ1QsbUJBQW1CO0lBQ25CLGtCQUFrQjtDQUNyQjs7QUFFRDtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBS2IsNEJBQTRCO0NBQzVCOztBQUVEO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZjs7QUFFRDtDQUNDLDJCQUEyQjtDQUUzQix1QkFBdUI7Q0FDdkIsc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQjs7QUFFRDtDQUNDLDJCQUEyQjtDQUMzQixXQUFXO0NBR1gsaUNBQWlDO0NBQ2pDLGtDQUFrQztDQUNsQyw4QkFBOEI7Q0FDOUIsaUJBQWlCO0NBQ2pCOztBQUVEO0NBQ0MseUdBQXlHO0NBS3pHLGdFQUFnRTtDQUdoRSxpQ0FBaUM7Q0FDakMsa0NBQWtDO0NBQ2xDLDhCQUE4Qjs7Q0FFOUI7O0FBRUQ7Q0FDQyx5R0FBeUc7Q0FLekcsK0RBQStEO0NBRy9ELGlDQUFpQztDQUNqQyxrQ0FBa0M7Q0FDbEMsOEJBQThCO0NBQzlCOztBQUVELFVBQVU7O0FBQ1Y7SUFDSSxjQUFjO0lBQ2QsY0FBYztDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZC1ub21heCB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLnNhbXBsZS1mbGlwYm9va3tcclxuXHR3aWR0aDo0MDBweDtcclxuXHRoZWlnaHQ6MjAwcHg7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOm1hcmdpbi1sZWZ0IDAuMnM7XHJcblx0LW1vei10cmFuc2l0aW9uOm1hcmdpbi1sZWZ0IDAuMnM7XHJcblx0LW1zLXRyYW5zaXRpb246bWFyZ2luLWxlZnQgMC4ycztcclxuXHQtby10cmFuc2l0aW9uOm1hcmdpbi1sZWZ0IDAuMnM7XHJcblx0dHJhbnNpdGlvbjptYXJnaW4tbGVmdCAwLjJzO1xyXG59XHJcblxyXG4uc2FtcGxlLWZsaXBib29rIC5wYWdle1xyXG5cdHdpZHRoOjIwMHB4O1xyXG5cdGhlaWdodDoyMDBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5cdGxpbmUtaGVpZ2h0OjMwMHB4O1xyXG5cdGZvbnQtc2l6ZToyMHB4O1xyXG59XHJcblxyXG4uc2FtcGxlLWZsaXBib29rIC5wYWdlLXdyYXBwZXJ7XHJcblx0LXdlYmtpdC1wZXJzcGVjdGl2ZToyMDAwcHg7XHJcblx0LW1vei1wZXJzcGVjdGl2ZToyMDAwcHg7XHJcblx0LW1zLXBlcnNwZWN0aXZlOjIwMDBweDtcclxuXHQtby1wZXJzcGVjdGl2ZToyMDAwcHg7XHJcblx0cGVyc3BlY3RpdmU6MjAwMHB4O1xyXG59XHJcblxyXG4uc2FtcGxlLWZsaXBib29rIC5oYXJke1xyXG5cdGJhY2tncm91bmQ6I2NjYyAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiMzMzM7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2NjtcclxuXHQtbW96LWJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xyXG5cdC1vLWJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xyXG5cdC1tcy1ib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2NjtcclxuXHRib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2NjtcclxuXHRmb250LXdlaWdodDpib2xkO1xyXG59XHJcblxyXG4uc2FtcGxlLWZsaXBib29rIC5vZGR7XHJcblx0YmFja2dyb3VuZDotd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCBsZWZ0IHRvcCwgY29sb3Itc3RvcCgwLjk1LCAjRkZGKSwgY29sb3Itc3RvcCgxLCAjREFEQURBKSk7XHJcblx0YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudChyaWdodCwgI0ZGRiA5NSUsICNDNEM0QzQgMTAwJSk7XHJcblx0YmFja2dyb3VuZC1pbWFnZTotbW96LWxpbmVhci1ncmFkaWVudChyaWdodCwgI0ZGRiA5NSUsICNDNEM0QzQgMTAwJSk7XHJcblx0YmFja2dyb3VuZC1pbWFnZTotbXMtbGluZWFyLWdyYWRpZW50KHJpZ2h0LCAjRkZGIDk1JSwgI0M0QzRDNCAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOi1vLWxpbmVhci1ncmFkaWVudChyaWdodCwgI0ZGRiA5NSUsICNDNEM0QzQgMTAwJSk7XHJcblx0YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQocmlnaHQsICNGRkYgOTUlLCAjQzRDNEM0IDEwMCUpO1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XHJcblx0LW1vei1ib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2NjtcclxuXHQtby1ib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2NjtcclxuXHQtbXMtYm94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XHJcblx0Ym94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XHJcblx0XHJcbn1cclxuXHJcbi5zYW1wbGUtZmxpcGJvb2sgLmV2ZW57XHJcblx0YmFja2dyb3VuZDotd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwLjk1LCAjZmZmKSwgY29sb3Itc3RvcCgxLCAjZGFkYWRhKSk7XHJcblx0YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmIDk1JSwgI2RhZGFkYSAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOi1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICNmZmYgOTUlLCAjZGFkYWRhIDEwMCUpO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6LW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmIDk1JSwgI2RhZGFkYSAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOi1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmIDk1JSwgI2RhZGFkYSAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmIDk1JSwgI2RhZGFkYSAxMDAlKTtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xyXG5cdC1tb3otYm94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XHJcblx0LW8tYm94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XHJcblx0LW1zLWJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xyXG5cdGJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xyXG59XHJcblxyXG4vKioqKmFwcCovXHJcbi5maXQtdG9wLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div>\r\n      <!-- <div class=\"fit-top-container\" [ngStyle]=\"{'background':'url(' +wedddingOverviewData.data1.coupleStory.backgroundImage+ ')'}\">\r\n       !-->\r\n      <div class=\"container-fluid-nomax\">  \r\n        <router-outlet></router-outlet> \r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!--The content below is only a placeholder and can be replaced.-->\r\n<!-- \r\n<div id=\"flipbook\" class=\"sample-flipbook\">\r\n    <div class=\"hard\"> Turn.js </div>\r\n    <div class=\"hard\"></div>\r\n    <div> Page 1 </div>\r\n    <div> Page 2 </div>\r\n    <div> Page 3 </div>\r\n    <div> Page 4 </div>\r\n    <div class=\"hard\"></div>\r\n    <div class=\"hard\"></div>\r\n  </div> -->\r\n\r\n  <!-- <div id=\"flipbook\" class=\"sample-flipbook\">\r\n    <div style=\"background-image:url(assets/pages/1.jpg)\"></div>\r\n\t\t\t<div (mousedown)=\"sendPhotoClickEvent()\" style=\"background-image:url(assets/pages/2.jpg)\"></div>\r\n\t\t\t<div style=\"background-image:url(assets/pages/3.jpg)\"></div>\r\n\t\t\t<div style=\"background-image:url(assets/pages/4.jpg)\"></div>\r\n\t\t\t<div style=\"background-image:url(assets/pages/5.jpg)\"></div>\r\n  </div> -->\r\n\r\n"

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
        this.sendEvent = function () {
            window.ga('send', 'event', {
                eventCategory: 'Album view',
                eventLabel: 'Rose Album View ',
                eventAction: 'Opening',
                eventValue: 7
            });
        };
        this.sendPhotoClickEvent = function () {
            window.ga('send', 'event', {
                eventCategory: 'Photo view',
                eventLabel: 'Rose Photo',
                eventAction: 'Fliped book',
                eventValue: 8
            });
        };
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _widget_modules_couplestory_couplestory_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./widget-modules/couplestory/couplestory.component */ "./src/app/widget-modules/couplestory/couplestory.component.ts");
/* harmony import */ var _widget_modules_wedding_events_wedding_events_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./widget-modules/wedding-events/wedding-events.component */ "./src/app/widget-modules/wedding-events/wedding-events.component.ts");
/* harmony import */ var _widget_modules_comments_comments_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./widget-modules/comments/comments.component */ "./src/app/widget-modules/comments/comments.component.ts");
/* harmony import */ var _widget_modules_albums_albums_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./widget-modules/albums/albums.component */ "./src/app/widget-modules/albums/albums.component.ts");
/* harmony import */ var _widget_modules_navigation_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./widget-modules/navigation/nav-bar/nav-bar.component */ "./src/app/widget-modules/navigation/nav-bar/nav-bar.component.ts");
/* harmony import */ var _widgets_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./widgets/home/home.component */ "./src/app/widgets/home/home.component.ts");
/* harmony import */ var _widget_modules_guest_book_guest_book_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./widget-modules/guest-book/guest-book.component */ "./src/app/widget-modules/guest-book/guest-book.component.ts");
/* harmony import */ var _widget_modules_container_container_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./widget-modules/container/container.component */ "./src/app/widget-modules/container/container.component.ts");
/* harmony import */ var _widget_modules_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./widget-modules/footer/footer.component */ "./src/app/widget-modules/footer/footer.component.ts");

















var appRoutes = [];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _widget_modules_couplestory_couplestory_component__WEBPACK_IMPORTED_MODULE_8__["CouplestoryComponent"],
                _widget_modules_wedding_events_wedding_events_component__WEBPACK_IMPORTED_MODULE_9__["WeddingEventsComponent"],
                _widget_modules_comments_comments_component__WEBPACK_IMPORTED_MODULE_10__["CommentsComponent"],
                _widget_modules_albums_albums_component__WEBPACK_IMPORTED_MODULE_11__["AlbumsComponent"],
                _widget_modules_navigation_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_12__["NavBarComponent"],
                _widgets_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _widget_modules_guest_book_guest_book_component__WEBPACK_IMPORTED_MODULE_14__["GuestBookComponent"],
                _widget_modules_container_container_component__WEBPACK_IMPORTED_MODULE_15__["ContainerComponent"],
                _widget_modules_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data-access/album-overview/album-overview.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/data-access/album-overview/album-overview.service.ts ***!
  \**********************************************************************/
/*! exports provided: AlbumOverviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumOverviewService", function() { return AlbumOverviewService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AlbumOverviewService = /** @class */ (function () {
    function AlbumOverviewService(http) {
        this.http = http;
    }
    AlbumOverviewService.prototype.getAlbumOverview = function (url) {
        return this.http.get(url);
    };
    AlbumOverviewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AlbumOverviewService);
    return AlbumOverviewService;
}());



/***/ }),

/***/ "./src/app/data-access/wedding-overview/wedding-overview.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/data-access/wedding-overview/wedding-overview.service.ts ***!
  \**************************************************************************/
/*! exports provided: WeddingOverviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeddingOverviewService", function() { return WeddingOverviewService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var WeddingOverviewService = /** @class */ (function () {
    function WeddingOverviewService(http) {
        this.http = http;
        this.endpoint = 'http://ec2-54-191-183-21.us-west-2.compute.amazonaws.com:8080/';
    }
    WeddingOverviewService.prototype.getWeddingOverview = function () {
        console.log(this.http.get(this.endpoint));
        return this.http.get(this.endpoint);
    };
    WeddingOverviewService.prototype.sendWishes = function (data) {
        return this.http.post(this.endpoint + 'guestbook', data);
    };
    WeddingOverviewService.prototype.getWishes = function () {
        return this.http.get(this.endpoint + 'guestbook');
    };
    WeddingOverviewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WeddingOverviewService);
    return WeddingOverviewService;
}());



/***/ }),

/***/ "./src/app/widget-modules/albums/albums.component.css":
/*!************************************************************!*\
  !*** ./src/app/widget-modules/albums/albums.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sample-flipbook{\r\n\twidth:400px;\r\n\theight:200px;\r\n\ttransition:margin-left 0.2s;\r\n}\r\n\r\n.sample-flipbook .page{\r\n\twidth:200px;\r\n\theight:200px;\r\n\tbackground-color:white;\r\n\tline-height:300px;\r\n\tfont-size:20px;\r\n}\r\n\r\n.sample-flipbook .page-wrapper{\r\n\t-webkit-perspective:2000px;\r\n\t-ms-perspective:2000px;\r\n\t-o-perspective:2000px;\r\n\tperspective:2000px;\r\n}\r\n\r\n.sample-flipbook .hard{\r\n\tbackground:#ccc !important;\r\n\tcolor:#333;\r\n\t-o-box-shadow:inset 0 0 5px #666;\r\n\t-ms-box-shadow:inset 0 0 5px #666;\r\n\tbox-shadow:inset 0 0 5px #666;\r\n\tfont-weight:bold;\r\n}\r\n\r\n.sample-flipbook .odd{\r\n\tbackground:-webkit-gradient(linear, right top, left top, color-stop(0.95, #FFF), color-stop(1, #DADADA));\r\n\tbackground-image:linear-gradient(right, #FFF 95%, #C4C4C4 100%);\r\n\t-o-box-shadow:inset 0 0 5px #666;\r\n\t-ms-box-shadow:inset 0 0 5px #666;\r\n\tbox-shadow:inset 0 0 5px #666;\r\n\t\r\n}\r\n\r\n.sample-flipbook .even{\r\n\tbackground:-webkit-gradient(linear, left top, right top, color-stop(0.95, #fff), color-stop(1, #dadada));\r\n\tbackground-image:linear-gradient(left, #fff 95%, #dadada 100%);\r\n\t-o-box-shadow:inset 0 0 5px #666;\r\n\t-ms-box-shadow:inset 0 0 5px #666;\r\n\tbox-shadow:inset 0 0 5px #666;\r\n}\r\n\r\n/****app*/\r\n\r\n.fit-top-container {\r\n    width: 1000px;\r\n    height: 500px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvYWxidW1zL2FsYnVtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FLYiw0QkFBNEI7Q0FDNUI7O0FBRUQ7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmOztBQUVEO0NBQ0MsMkJBQTJCO0NBRTNCLHVCQUF1QjtDQUN2QixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25COztBQUVEO0NBQ0MsMkJBQTJCO0NBQzNCLFdBQVc7Q0FHWCxpQ0FBaUM7Q0FDakMsa0NBQWtDO0NBQ2xDLDhCQUE4QjtDQUM5QixpQkFBaUI7Q0FDakI7O0FBRUQ7Q0FDQyx5R0FBeUc7Q0FLekcsZ0VBQWdFO0NBR2hFLGlDQUFpQztDQUNqQyxrQ0FBa0M7Q0FDbEMsOEJBQThCOztDQUU5Qjs7QUFFRDtDQUNDLHlHQUF5RztDQUt6RywrREFBK0Q7Q0FHL0QsaUNBQWlDO0NBQ2pDLGtDQUFrQztDQUNsQyw4QkFBOEI7Q0FDOUI7O0FBRUQsVUFBVTs7QUFDVjtJQUNJLGNBQWM7SUFDZCxjQUFjO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvYWxidW1zL2FsYnVtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNhbXBsZS1mbGlwYm9va3tcclxuXHR3aWR0aDo0MDBweDtcclxuXHRoZWlnaHQ6MjAwcHg7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOm1hcmdpbi1sZWZ0IDAuMnM7XHJcblx0LW1vei10cmFuc2l0aW9uOm1hcmdpbi1sZWZ0IDAuMnM7XHJcblx0LW1zLXRyYW5zaXRpb246bWFyZ2luLWxlZnQgMC4ycztcclxuXHQtby10cmFuc2l0aW9uOm1hcmdpbi1sZWZ0IDAuMnM7XHJcblx0dHJhbnNpdGlvbjptYXJnaW4tbGVmdCAwLjJzO1xyXG59XHJcblxyXG4uc2FtcGxlLWZsaXBib29rIC5wYWdle1xyXG5cdHdpZHRoOjIwMHB4O1xyXG5cdGhlaWdodDoyMDBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5cdGxpbmUtaGVpZ2h0OjMwMHB4O1xyXG5cdGZvbnQtc2l6ZToyMHB4O1xyXG59XHJcblxyXG4uc2FtcGxlLWZsaXBib29rIC5wYWdlLXdyYXBwZXJ7XHJcblx0LXdlYmtpdC1wZXJzcGVjdGl2ZToyMDAwcHg7XHJcblx0LW1vei1wZXJzcGVjdGl2ZToyMDAwcHg7XHJcblx0LW1zLXBlcnNwZWN0aXZlOjIwMDBweDtcclxuXHQtby1wZXJzcGVjdGl2ZToyMDAwcHg7XHJcblx0cGVyc3BlY3RpdmU6MjAwMHB4O1xyXG59XHJcblxyXG4uc2FtcGxlLWZsaXBib29rIC5oYXJke1xyXG5cdGJhY2tncm91bmQ6I2NjYyAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiMzMzM7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2NjtcclxuXHQtbW96LWJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xyXG5cdC1vLWJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xyXG5cdC1tcy1ib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2NjtcclxuXHRib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2NjtcclxuXHRmb250LXdlaWdodDpib2xkO1xyXG59XHJcblxyXG4uc2FtcGxlLWZsaXBib29rIC5vZGR7XHJcblx0YmFja2dyb3VuZDotd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCBsZWZ0IHRvcCwgY29sb3Itc3RvcCgwLjk1LCAjRkZGKSwgY29sb3Itc3RvcCgxLCAjREFEQURBKSk7XHJcblx0YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudChyaWdodCwgI0ZGRiA5NSUsICNDNEM0QzQgMTAwJSk7XHJcblx0YmFja2dyb3VuZC1pbWFnZTotbW96LWxpbmVhci1ncmFkaWVudChyaWdodCwgI0ZGRiA5NSUsICNDNEM0QzQgMTAwJSk7XHJcblx0YmFja2dyb3VuZC1pbWFnZTotbXMtbGluZWFyLWdyYWRpZW50KHJpZ2h0LCAjRkZGIDk1JSwgI0M0QzRDNCAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOi1vLWxpbmVhci1ncmFkaWVudChyaWdodCwgI0ZGRiA5NSUsICNDNEM0QzQgMTAwJSk7XHJcblx0YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQocmlnaHQsICNGRkYgOTUlLCAjQzRDNEM0IDEwMCUpO1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XHJcblx0LW1vei1ib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2NjtcclxuXHQtby1ib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2NjtcclxuXHQtbXMtYm94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XHJcblx0Ym94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XHJcblx0XHJcbn1cclxuXHJcbi5zYW1wbGUtZmxpcGJvb2sgLmV2ZW57XHJcblx0YmFja2dyb3VuZDotd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwLjk1LCAjZmZmKSwgY29sb3Itc3RvcCgxLCAjZGFkYWRhKSk7XHJcblx0YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmIDk1JSwgI2RhZGFkYSAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOi1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICNmZmYgOTUlLCAjZGFkYWRhIDEwMCUpO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6LW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmIDk1JSwgI2RhZGFkYSAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOi1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmIDk1JSwgI2RhZGFkYSAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmIDk1JSwgI2RhZGFkYSAxMDAlKTtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xyXG5cdC1tb3otYm94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XHJcblx0LW8tYm94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XHJcblx0LW1zLWJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xyXG5cdGJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xyXG59XHJcblxyXG4vKioqKmFwcCovXHJcbi5maXQtdG9wLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/widget-modules/albums/albums.component.html":
/*!*************************************************************!*\
  !*** ./src/app/widget-modules/albums/albums.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div>\r\n        <div id=\"flipbook\" class=\"sample-flipbook\"  >\r\n          <div *ngFor=\"let image of albumArray\" [ngStyle]=\"{'background':'url(' +image?.albumArt+ ')'}\"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- <div id=\"flipbook\" class=\"sample-flipbook\">\r\n    <div style=\"background-image:url(assets/pages/1.jpg)\"></div>\r\n\t\t\t<div (mousedown)=\"sendPhotoClickEvent()\" style=\"background-image:url(assets/pages/2.jpg)\"></div>\r\n\t\t\t<div style=\"background-image:url(assets/pages/3.jpg)\"></div>\r\n\t\t\t<div style=\"background-image:url(assets/pages/4.jpg)\"></div>\r\n\t\t\t<div style=\"background-image:url(assets/pages/5.jpg)\"></div>\r\n  </div> -->\r\n"

/***/ }),

/***/ "./src/app/widget-modules/albums/albums.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/widget-modules/albums/albums.component.ts ***!
  \***********************************************************/
/*! exports provided: AlbumsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsComponent", function() { return AlbumsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlbumsComponent = /** @class */ (function () {
    function AlbumsComponent() {
    }
    AlbumsComponent.prototype.ngOnInit = function () {
        //   $(document).ready(function() {
        //     $('#flipbook').turn({
        //       width: 1000,
        //       height: 600,
        //       autoCenter: true
        //     });
        // });
    };
    AlbumsComponent.prototype.ngAfterViewInit = function () {
        // $('#flipbook').turn({
        //   width: 1400,
        //   height: 600,
        //   autoCenter: true
        // });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], AlbumsComponent.prototype, "albumArray", void 0);
    AlbumsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-albums',
            template: __webpack_require__(/*! ./albums.component.html */ "./src/app/widget-modules/albums/albums.component.html"),
            styles: [__webpack_require__(/*! ./albums.component.css */ "./src/app/widget-modules/albums/albums.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlbumsComponent);
    return AlbumsComponent;
}());



/***/ }),

/***/ "./src/app/widget-modules/comments/comments.component.css":
/*!****************************************************************!*\
  !*** ./src/app/widget-modules/comments/comments.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".j{\r\n   color: aliceblue; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvY29tbWVudHMvY29tbWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLGlCQUFpQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldC1tb2R1bGVzL2NvbW1lbnRzL2NvbW1lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuantcclxuICAgY29sb3I6IGFsaWNlYmx1ZTsgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/widget-modules/comments/comments.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/widget-modules/comments/comments.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  comments works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/widget-modules/comments/comments.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/widget-modules/comments/comments.component.ts ***!
  \***************************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommentsComponent = /** @class */ (function () {
    function CommentsComponent() {
    }
    CommentsComponent.prototype.ngOnInit = function () {
    };
    CommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comments',
            template: __webpack_require__(/*! ./comments.component.html */ "./src/app/widget-modules/comments/comments.component.html"),
            styles: [__webpack_require__(/*! ./comments.component.css */ "./src/app/widget-modules/comments/comments.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "./src/app/widget-modules/container/container.component.css":
/*!******************************************************************!*\
  !*** ./src/app/widget-modules/container/container.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-mandala{\r\n    width: 18vw;\r\n    height: 609.75px;\r\n    opacity: .81;\r\n}\r\n.top-left-mandala {\r\n    top: 0px;\r\n    position: absolute;\r\n    left: 1%;\r\n}\r\n.top-right-mandala {\r\n    top: 0%;\r\n    position: absolute;\r\n    right: 0px;\r\n    -webkit-transform: scaleX(-1);\r\n    transform: scaleX(-1);\r\n}\r\n.middle-left-mandala {\r\n    top: 50%;\r\n    position: absolute;\r\n    left: 1%;\r\n}\r\n.middle-right-mandala {\r\n    top: 50%;\r\n    position: absolute;\r\n    right: 0px;\r\n    -webkit-transform: scaleX(-1);\r\n    transform: scaleX(-1);\r\n}\r\n.bottom-img-mandala{\r\n    width: 335px;\r\n    height: 960px;\r\n    opacity: .81;\r\n}\r\n.bottom-middle-mandala {\r\n    bottom: 0px;\r\n    position: absolute;\r\n    left: auto;\r\n    right: auto;\r\n    -webkit-transform: scaleX(-1);\r\n    transform: rotate(-90deg);\r\n}\r\n#con-marriage-info{\r\n    height: 420PX;\r\n    width: 100%;\r\n    /* background-color: rgba(0,0,0, 0.4); */\r\n    position: absolute;\r\n    opacity: 0.8;\r\n    /* padding: 41px 0px 41px 0; */\r\n}\r\n#con-event-info {\r\n    height: 385PX;\r\n    background-color: #FFFF;\r\n    background-color: rgba(0,0,0, 0.4);\r\n    position: absolute;\r\n    left: 23%;\r\n    right: 23%;\r\n    top: -188px;\r\n    opacity: 0.8;\r\n\r\n}\r\n.middle-container {\r\n    position: absolute;\r\n    left: 21.6666%;\r\n    right: 21.666%;\r\n    top: -217px;\r\n}\r\n#con-album-label {\r\n    font-family: layfair Display, Regular;\r\n    font-size: 3.4895vw;\r\n    text-align: center;\r\n    word-spacing: 10;\r\n    line-height: 67px;\r\n    color: #445563;\r\n    opacity: 1;\r\n    position: absolute;\r\n    top: 500px;\r\n    width: 100%;\r\n}\r\n.con-event-conatiner {\r\n    position: absolute;\r\n    top: 600px;\r\n    width: 100%;\r\n    /* min-height: 200px; */\r\n}\r\n/* .bottom-img-mandala{\r\n    width: 59vw;\r\n    height: 216px;\r\n    opacity: .81;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLFNBQVM7Q0FDWjtBQUNEO0lBQ0ksUUFBUTtJQUNSLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLHNCQUFzQjtDQUN6QjtBQUNEO0lBQ0ksU0FBUztJQUNULG1CQUFtQjtJQUNuQixTQUFTO0NBQ1o7QUFDRDtJQUNJLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixzQkFBc0I7Q0FDekI7QUFDRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QiwwQkFBMEI7Q0FDN0I7QUFDRDtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1oseUNBQXlDO0lBQ3pDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsK0JBQStCO0NBQ2xDO0FBQ0Q7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLG1DQUFtQztJQUNuQyxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTs7Q0FFaEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtJQUNmLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksc0NBQXNDO0lBQ3RDLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWix3QkFBd0I7Q0FDM0I7QUFDRDs7OztJQUlJIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1tYW5kYWxhe1xyXG4gICAgd2lkdGg6IDE4dnc7XHJcbiAgICBoZWlnaHQ6IDYwOS43NXB4O1xyXG4gICAgb3BhY2l0eTogLjgxO1xyXG59XHJcbi50b3AtbGVmdC1tYW5kYWxhIHtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMSU7XHJcbn1cclxuLnRvcC1yaWdodC1tYW5kYWxhIHtcclxuICAgIHRvcDogMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XHJcbn1cclxuLm1pZGRsZS1sZWZ0LW1hbmRhbGEge1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxJTtcclxufVxyXG4ubWlkZGxlLXJpZ2h0LW1hbmRhbGEge1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XHJcbn1cclxuLmJvdHRvbS1pbWctbWFuZGFsYXtcclxuICAgIHdpZHRoOiAzMzVweDtcclxuICAgIGhlaWdodDogOTYwcHg7XHJcbiAgICBvcGFjaXR5OiAuODE7XHJcbn1cclxuLmJvdHRvbS1taWRkbGUtbWFuZGFsYSB7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICByaWdodDogYXV0bztcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxufVxyXG4jY29uLW1hcnJpYWdlLWluZm97XHJcbiAgICBoZWlnaHQ6IDQyMFBYO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAwLjQpOyAqL1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgLyogcGFkZGluZzogNDFweCAwcHggNDFweCAwOyAqL1xyXG59XHJcbiNjb24tZXZlbnQtaW5mbyB7XHJcbiAgICBoZWlnaHQ6IDM4NVBYO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAwLjQpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMjMlO1xyXG4gICAgcmlnaHQ6IDIzJTtcclxuICAgIHRvcDogLTE4OHB4O1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG5cclxufVxyXG4ubWlkZGxlLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyMS42NjY2JTtcclxuICAgIHJpZ2h0OiAyMS42NjYlO1xyXG4gICAgdG9wOiAtMjE3cHg7XHJcbn1cclxuI2Nvbi1hbGJ1bS1sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogbGF5ZmFpciBEaXNwbGF5LCBSZWd1bGFyO1xyXG4gICAgZm9udC1zaXplOiAzLjQ4OTV2dztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdvcmQtc3BhY2luZzogMTA7XHJcbiAgICBsaW5lLWhlaWdodDogNjdweDtcclxuICAgIGNvbG9yOiAjNDQ1NTYzO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uY29uLWV2ZW50LWNvbmF0aW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDYwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBtaW4taGVpZ2h0OiAyMDBweDsgKi9cclxufVxyXG4vKiAuYm90dG9tLWltZy1tYW5kYWxhe1xyXG4gICAgd2lkdGg6IDU5dnc7XHJcbiAgICBoZWlnaHQ6IDIxNnB4O1xyXG4gICAgb3BhY2l0eTogLjgxO1xyXG59ICovIl19 */"

/***/ }),

/***/ "./src/app/widget-modules/container/container.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/widget-modules/container/container.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n<div style=\"padding-left: 0%;padding-right: 0%;\" class=\"middle-container\">\r\n  <div id=\"con-marriage-info\">\r\n      <app-couplestory  [imageUrl]=\"weddingData?.data?.welcome\"></app-couplestory>\r\n  </div>\r\n\r\n  <div id=\"con-album-label\">\r\n      <img src=\"assets/rectangle.svg\">\r\n      <span id=\"album\" style=\"padding-left: 20px;padding-right: 17px;\">ALBUMS</span>\r\n      <img style=\"transform: scale(-1);\" src=\"assets/rectangle.svg\">\r\n   \r\n  </div>\r\n\r\n  <div class=\"con-event-conatiner\">\r\n    <app-wedding-events [weddingEventList] = \"weddingData?.data?.album\"></app-wedding-events>\r\n  </div>\r\n\r\n \r\n\r\n<!-- <div style=\"position: absolute\">\r\n  <h1>Yooooo</h1>\r\n\r\n</div>\r\n\r\n  <div id=\"event-info\">\r\n    <app-wedding-events [weddingEventList] = \"weddingData?.data?.eventList\"></app-wedding-events>\r\n  </div> -->\r\n  \r\n\r\n</div>\r\n  <div class=\"top-left-mandala\">\r\n    <img class=\"img-mandala\" src=\"assets/mandala.png\"/>\r\n  </div>\r\n  <div class=\"top-right-mandala\">\r\n      <img class=\"img-mandala\" src=\"assets/mandala.png\"/>\r\n    </div>\r\n    <div class=\"middle-left-mandala\">\r\n        <img class=\"img-mandala\" src=\"assets/mandala.png\"/>\r\n      </div>\r\n      <div class=\"middle-right-mandala\">\r\n          <img class=\"img-mandala\" src=\"assets/mandala.png\"/>\r\n        </div>\r\n        \r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n<!-- \r\n<div class=\"bottom-middle-mandala\">\r\n      <img class=\"mandala\" src=\"assets/mandala.png\"/>\r\n    </div> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/widget-modules/container/container.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/widget-modules/container/container.component.ts ***!
  \*****************************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContainerComponent = /** @class */ (function () {
    function ContainerComponent() {
    }
    ContainerComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ContainerComponent.prototype, "weddingData", void 0);
    ContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-container',
            template: __webpack_require__(/*! ./container.component.html */ "./src/app/widget-modules/container/container.component.html"),
            styles: [__webpack_require__(/*! ./container.component.css */ "./src/app/widget-modules/container/container.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContainerComponent);
    return ContainerComponent;
}());



/***/ }),

/***/ "./src/app/widget-modules/couplestory/couplestory.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/widget-modules/couplestory/couplestory.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#couple-name{\r\n    text-align: center;\r\n    font-family: Great Vibes, Regular;\r\n    /* font-size: 142px; */\r\n    font-size: 8.395vw;\r\n    line-height: 178px;\r\n    color: #D0CECA;\r\n    margin-top: 32px;\r\n    z-index: 200;\r\n\r\n}\r\n#marriage-date {\r\n    text-align: center;\r\n    font-family: Playfair Display, Regular;\r\n    font-size: 60px;\r\n    line-height: 80px;\r\n    color: #303B44;\r\n}\r\n#marriage-date-summary{\r\n    text-align: center;\r\n    font-family: Playfair Display, Regular;\r\n    font-size: 30px;\r\n    line-height: 40px;\r\n    word-spacing: 10;\r\n    color: #303B44;\r\n    margin-top: 8px;\r\n\r\n}\r\n.couple-name-div{\r\n    align-items: center;\r\n    height: 210px;\r\n    display: flex;\r\n    justify-content: center;\r\n    position: relative;\r\n}\r\n.couple-name-bg{\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #ffffff52;\r\n    position: absolute;\r\n    /* background: url('http://localhost:8600/assets/key-photo.png'); */\r\n    background-position: bottom;\r\n    z-index: -1;\r\n    -webkit-filter: blur(26px);\r\n            filter: blur(26px);\r\n}\r\n.couple-name-bg:before{\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvY291cGxlc3RvcnkvY291cGxlc3RvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhOztDQUVoQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLHVDQUF1QztJQUN2QyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQix1Q0FBdUM7SUFDdkMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjs7Q0FFbkI7QUFDRDtJQUNJLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLFFBQVE7SUFDUixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsb0VBQW9FO0lBQ3BFLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osMkJBQW1CO1lBQW5CLG1CQUFtQjtDQUN0QjtBQUNEOztDQUVDIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvY291cGxlc3RvcnkvY291cGxlc3RvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb3VwbGUtbmFtZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBHcmVhdCBWaWJlcywgUmVndWxhcjtcclxuICAgIC8qIGZvbnQtc2l6ZTogMTQycHg7ICovXHJcbiAgICBmb250LXNpemU6IDguMzk1dnc7XHJcbiAgICBsaW5lLWhlaWdodDogMTc4cHg7XHJcbiAgICBjb2xvcjogI0QwQ0VDQTtcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgICB6LWluZGV4OiAyMDA7XHJcblxyXG59XHJcbiNtYXJyaWFnZS1kYXRlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBQbGF5ZmFpciBEaXNwbGF5LCBSZWd1bGFyO1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDgwcHg7XHJcbiAgICBjb2xvcjogIzMwM0I0NDtcclxufVxyXG4jbWFycmlhZ2UtZGF0ZS1zdW1tYXJ5e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFBsYXlmYWlyIERpc3BsYXksIFJlZ3VsYXI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIHdvcmQtc3BhY2luZzogMTA7XHJcbiAgICBjb2xvcjogIzMwM0I0NDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuXHJcbn1cclxuLmNvdXBsZS1uYW1lLWRpdntcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDIxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jb3VwbGUtbmFtZS1iZ3tcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY1MjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnaHR0cDovL2xvY2FsaG9zdDo4NjAwL2Fzc2V0cy9rZXktcGhvdG8ucG5nJyk7ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGZpbHRlcjogYmx1cigyNnB4KTtcclxufVxyXG4uY291cGxlLW5hbWUtYmc6YmVmb3Jle1xyXG4gICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/widget-modules/couplestory/couplestory.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/widget-modules/couplestory/couplestory.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"couple-name-div\">\r\n            \r\n                <!-- <div class=\"couple-name-bg\"  [ngStyle]=\"{'background':'url('+ imageUrl +')'}\" >\r\n                               \r\n                </div>  -->\r\n                <div class=\"couple-name-bg\"   >\r\n                               \r\n                        </div> \r\n                <h1 id=\"couple-name\">{{'Aron & Diya'}}</h1> \r\n            <!-- <h1 id=\"couple-name\">{{'Arun & Diya'}}</h1> -->\r\n    </div>\r\n        \r\n    <div style=\"height: 210px;\">\r\n            <div id=\"marriage-date-summary\">\r\n\r\n                    <!-- <img src=\"assets/rectangle.svg\"> -->\r\n                    <span style=\"padding-left: 20px;padding-right: 17px;\">celebrating <b *ngIf=\"togetherMonth>=0\" style=\"font-size: 34px;\">{{togetherMonth}} month</b> <b *ngIf=\"togetherYear>=0\" style=\"font-size: 34px;\">{{togetherYear}} year</b> of togetherness\r\n                    </span>\r\n                    <!-- <img style=\"transform: scale(-1);\" src=\"assets/rectangle.svg\"> -->\r\n                \r\n                 <div>since</div>\r\n            </div>\r\n            \r\n            <h1 id=\"marriage-date\">10th February, 2019</h1>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/widget-modules/couplestory/couplestory.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/widget-modules/couplestory/couplestory.component.ts ***!
  \*********************************************************************/
/*! exports provided: CouplestoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouplestoryComponent", function() { return CouplestoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CouplestoryComponent = /** @class */ (function () {
    function CouplestoryComponent() {
    }
    CouplestoryComponent.prototype.ngOnInit = function () {
        this.monthDiff(new Date(2019, 1, 10), new Date());
    };
    CouplestoryComponent.prototype.monthDiff = function (d1, d2) {
        var months;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth() + 1;
        months += d2.getMonth();
        if (months >= 11) {
            this.togetherYear = Math.floor(months / 11);
        }
        else {
            this.togetherMonth = months < 0 ? 0 : (months + 1);
        }
        // if (months <= 0){
        //   const timeDiff = Math.abs(d2.getTime() - d1.getTime());
        //   const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        //   console.log(diffDays);
        // } else {
        //   console.log(months <= 0 ? 0 : months);
        // }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CouplestoryComponent.prototype, "imageUrl", void 0);
    CouplestoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-couplestory',
            template: __webpack_require__(/*! ./couplestory.component.html */ "./src/app/widget-modules/couplestory/couplestory.component.html"),
            styles: [__webpack_require__(/*! ./couplestory.component.css */ "./src/app/widget-modules/couplestory/couplestory.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CouplestoryComponent);
    return CouplestoryComponent;
}());



/***/ }),

/***/ "./src/app/widget-modules/footer/footer.component.css":
/*!************************************************************!*\
  !*** ./src/app/widget-modules/footer/footer.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    height: 68px;\r\n    background-color: #E4E0DD;\r\n    width: 100%;\r\n}\r\n.with-love {\r\n    height: 68px;\r\n    background-color: #E4E0DD;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    font-family: Great Vibes, Regular;\r\n    font-size: 30px;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixZQUFZO0NBQ2Y7QUFDRDtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsd0JBQXdCO0NBQzNCIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgICBoZWlnaHQ6IDY4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRFMEREO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLndpdGgtbG92ZSB7XHJcbiAgICBoZWlnaHQ6IDY4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRFMEREO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogR3JlYXQgVmliZXMsIFJlZ3VsYXI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/widget-modules/footer/footer.component.html":
/*!*************************************************************!*\
  !*** ./src/app/widget-modules/footer/footer.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"share\" class=\"col-md-12 col-lg-12 col-xl-12\">\r\n    <div class=\"footer with-love\">\r\n        <span>with <img src=\"assets/heart.svg\"/> from Jason</span>\r\n      </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/widget-modules/footer/footer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/widget-modules/footer/footer.component.ts ***!
  \***********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/widget-modules/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/widget-modules/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/widget-modules/guest-book/guest-book.component.css":
/*!********************************************************************!*\
  !*** ./src/app/widget-modules/guest-book/guest-book.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".guest-view {\r\n    height: 200px;\r\n    color: #707070;\r\n}\r\n.guest-book-label {\r\n    color: #1D1D1D;\r\n    font-family: Playfair Display, Regular;\r\n    font-size: 50px;\r\n    line-height: 67px;\r\n    text-transform: uppercase;\r\n    margin-top: 100px;\r\n    text-align: center;\r\n\r\n}\r\n.wish-style{\r\n    color: #707070;\r\n    font-family: Great Vibes, Regular;\r\n    font-size: 44px;\r\n    line-height: 83px;\r\n    text-align: center;\r\n}\r\ninput {\r\n    background-color: inherit;\r\n    height: 60px;\r\n    width: 100%;\r\n    border: 0;\r\n    outline: 0;\r\n    background: transparent;\r\n    border-bottom: 2px solid #75726e7a;\r\n    font-size: 44px;\r\n    font-family: Great Vibes, Regular;\r\n    line-height: 83px;\r\n    color:#707070;\r\n    padding-left: 20px;\r\n}\r\ntextarea {\r\n    background-color: inherit;\r\n    width: 100%;\r\n    border: 0;\r\n    outline: 0;\r\n    background: transparent;\r\n    border-bottom: 2px solid #75726e7a;\r\n    font-size: 44px;\r\n    font-family: Great Vibes, Regular;\r\n    line-height: 83px;\r\n    color:#707070;\r\n    padding-left: 20px;\r\n}\r\n#wish-button{\r\n    width: 536px;\r\n    height: 125px;\r\n    font-size: 30px;\r\n    line-height: 80px;\r\n    font-family: Playfair Display, Regular;\r\n    background-color: #445563;\r\n    color: #FFFFFF;\r\n    border-radius: 10px;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvZ3Vlc3QtYm9vay9ndWVzdC1ib29rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksZUFBZTtJQUNmLHVDQUF1QztJQUN2QyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsbUJBQW1COztDQUV0QjtBQUNEO0lBQ0ksZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsbUNBQW1DO0lBQ25DLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7Q0FDdEI7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsbUNBQW1DO0lBQ25DLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixvQkFBb0I7O0NBRXZCIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvZ3Vlc3QtYm9vay9ndWVzdC1ib29rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3Vlc3QtdmlldyB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbn1cclxuLmd1ZXN0LWJvb2stbGFiZWwge1xyXG4gICAgY29sb3I6ICMxRDFEMUQ7XHJcbiAgICBmb250LWZhbWlseTogUGxheWZhaXIgRGlzcGxheSwgUmVndWxhcjtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2N3B4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG4ud2lzaC1zdHlsZXtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgZm9udC1mYW1pbHk6IEdyZWF0IFZpYmVzLCBSZWd1bGFyO1xyXG4gICAgZm9udC1zaXplOiA0NHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDgzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM3NTcyNmU3YTtcclxuICAgIGZvbnQtc2l6ZTogNDRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBHcmVhdCBWaWJlcywgUmVndWxhcjtcclxuICAgIGxpbmUtaGVpZ2h0OiA4M3B4O1xyXG4gICAgY29sb3I6IzcwNzA3MDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM3NTcyNmU3YTtcclxuICAgIGZvbnQtc2l6ZTogNDRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBHcmVhdCBWaWJlcywgUmVndWxhcjtcclxuICAgIGxpbmUtaGVpZ2h0OiA4M3B4O1xyXG4gICAgY29sb3I6IzcwNzA3MDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG4jd2lzaC1idXR0b257XHJcbiAgICB3aWR0aDogNTM2cHg7XHJcbiAgICBoZWlnaHQ6IDEyNXB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDgwcHg7XHJcbiAgICBmb250LWZhbWlseTogUGxheWZhaXIgRGlzcGxheSwgUmVndWxhcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDU1NjM7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/widget-modules/guest-book/guest-book.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/widget-modules/guest-book/guest-book.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"guestbook\" >\r\n  <div class=\"guest-book-label\">\r\n    <img src=\"assets/rectangle.svg\">\r\n    <span style=\"padding-left: 20px;padding-right: 17px;\">Guest Book</span>\r\n    <img style=\"transform: scale(-1);\" src=\"assets/rectangle.svg\">\r\n  </div>\r\n     <div style=\"margin-top: 63px;\" >\r\n        <div class=\"offset-md-4 offset-lg-4 offset-xl-4 col-md-8 col-lg-8 col-xl-8 offset-lg-4 offset-md-4 offset-xl-4\" class=\"guest-view\">\r\n          <h1 class=\"wish-style\" id=\"word\"></h1>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"showForm\" style=\"margin-left: 25%; margin-right: 25%;\" >\r\n        <form (ngSubmit)=\"guestForm.form.valid && onSubmit()\" #guestForm=\"ngForm\">\r\n          <div>\r\n            <input name=\"name\" [(ngModel)]=\"wishObj.name\" placeholder=\"Your Name\" required/>\r\n          </div>\r\n          <div style=\"margin-top: 75px;\">\r\n              <input name=\"message\" [(ngModel)]=\"wishObj.location\" placeholder=\"Your Location\" required/>\r\n          </div>\r\n          <div style=\"margin-top: 75px;\">\r\n              <input name=\"email\" [(ngModel)]=\"wishObj.email\" placeholder=\"Your Email\"/>\r\n          </div>\r\n          <div style=\"margin-top: 75px;\">\r\n              <textarea name=\"message\" [(ngModel)]=\"wishObj.message\" placeholder=\"Your Message\" required></textarea>\r\n            </div>\r\n\r\n            <div style=\"margin-top: 75px; text-align: center;    padding-bottom: 25%;\">\r\n              <button type=\"submit\" id=\"wish-button\">Wish the lovely couple</button>\r\n            </div>\r\n            \r\n        </form>\r\n\r\n      </div>\r\n      <div  *ngIf=\"!showForm && showConfirmMsg\" style=\"margin-left: 25%; margin-right: 25%;\">\r\n          <h1 class=\"wish-style\" id=\"word\">Thank you for writing in Aaron and Diya's wedding guest book! If you would like to make some changes, tap on <a (click)=\"showForm=true;\">Edit</a></h1>\r\n      </div>\r\n    \r\n       <!--  \r\n      <div >\r\n          <div class=\"container\">\r\n              <h1></h1>\r\n              <form (ngSubmit)=\"guestForm.form.valid && onSubmit()\" #guestForm=\"ngForm\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"name\">Name</label>\r\n                  <input name=\"name\" [(ngModel)]=\"wishObj.name\" type=\"text\" class=\"form-control\" id=\"name\" required #name=\"ngModel\">\r\n                  \r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"alterEgo\">Message</label>\r\n                  <input name=\"message\" [(ngModel)]=\"wishObj.Message\" type=\"text\" class=\"form-control\" id=\"alterEgo\">\r\n                </div>\r\n          \r\n                <button type=\"submit\" class=\"btn btn-success\">post</button>\r\n          \r\n              </form>\r\n          </div>\r\n    \r\n      </div>\r\n      -->\r\n\r\n</div>\r\n\r\n  "

/***/ }),

/***/ "./src/app/widget-modules/guest-book/guest-book.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/widget-modules/guest-book/guest-book.component.ts ***!
  \*******************************************************************/
/*! exports provided: GuestBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestBookComponent", function() { return GuestBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_access_wedding_overview_wedding_overview_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data-access/wedding-overview/wedding-overview.service */ "./src/app/data-access/wedding-overview/wedding-overview.service.ts");



var GuestBookComponent = /** @class */ (function () {
    function GuestBookComponent(wedOverviewService) {
        this.wedOverviewService = wedOverviewService;
        this.sendWishEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showForm = true;
        this.showConfirmMsg = false;
        this.wishObj = {};
    }
    GuestBookComponent.prototype.ngOnInit = function () {
    };
    GuestBookComponent.prototype.refreshWishes = function () {
        this.sendWishEvent.emit('true');
    };
    GuestBookComponent.prototype.onSubmit = function () {
        var _this = this;
        this.showForm = false;
        this.showConfirmMsg = true;
        $('#word').text(this.wishObj.message);
        this.postWish();
        setTimeout(function () {
            _this.showForm = false;
            _this.showConfirmMsg = false;
        }, 10000);
    };
    GuestBookComponent.prototype.postWish = function () {
        var _this = this;
        return this.wedOverviewService.sendWishes(this.wishObj).subscribe(function (data) {
            console.log(data);
            setTimeout(function () {
                _this.refreshWishes();
            }, 5000);
        }, function (error) {
            console.log(error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GuestBookComponent.prototype, "sendWishEvent", void 0);
    GuestBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-guest-book',
            template: __webpack_require__(/*! ./guest-book.component.html */ "./src/app/widget-modules/guest-book/guest-book.component.html"),
            styles: [__webpack_require__(/*! ./guest-book.component.css */ "./src/app/widget-modules/guest-book/guest-book.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_access_wedding_overview_wedding_overview_service__WEBPACK_IMPORTED_MODULE_2__["WeddingOverviewService"]])
    ], GuestBookComponent);
    return GuestBookComponent;
}());



/***/ }),

/***/ "./src/app/widget-modules/navigation/nav-bar/nav-bar.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/widget-modules/navigation/nav-bar/nav-bar.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blurry {\r\n    background: none;\r\n    color: white;\r\n    border: none;\r\n}\r\n.blurrer {\r\n    height: 68px;\r\n    top: -10px;\r\n    left: -10px;\r\n    right: -10px;\r\n    position: absolute;\r\n    overflow: hidden;\r\n    -webkit-filter: blur(28px);\r\n    -moz-filter: blur(10px);\r\n    -o-filter: blur(10px);\r\n    -ms-filter: blur(10px);\r\n    background-size: cover;\r\n}\r\n.nav-container {\r\n    height: 68px;\r\n    width: 100%;\r\n    -webkit-filter: blur(50px);\r\n            filter: blur(50px);\r\n    background-position: top;\r\n    position: fixed;\r\n}\r\n.nav-flex {\r\n  width: 100%;\r\n  display: -webkit-flex; /* Safari */\r\n  -webkit-justify-content: center; /* Safari 6.1+ */\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.nav-items-flex {\r\n    font-family: Playfair Display, Regular;\r\n    font-size: 20px;\r\n    line-height: 27px;\r\n    color: #1D1D1D;\r\n    padding: 0px 3.083vw;\r\n    cursor: pointer;\r\n    z-index: 1000;\r\n}\r\n.nav-items-flex-active {\r\n    font-family: Playfair Display, Bold;\r\n    font-weight: bold;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvbmF2aWdhdGlvbi9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtDQUMxQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWiwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQkFBZ0I7Q0FDbkI7QUFDRDtFQUNFLFlBQVk7RUFDWixzQkFBc0IsQ0FBQyxZQUFZO0VBQ25DLGdDQUFnQyxDQUFDLGlCQUFpQjtFQUNsRCxjQUFjO0VBQ2Qsd0JBQXdCO0NBQ3pCO0FBQ0Q7SUFDSSx1Q0FBdUM7SUFDdkMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCOztDQUVyQiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldC1tb2R1bGVzL25hdmlnYXRpb24vbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmx1cnJ5IHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmJsdXJyZXIge1xyXG4gICAgaGVpZ2h0OiA2OHB4O1xyXG4gICAgdG9wOiAtMTBweDtcclxuICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDI4cHgpO1xyXG4gICAgLW1vei1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgICAtby1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgICAtbXMtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4ubmF2LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDY4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZpbHRlcjogYmx1cig1MHB4KTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG4ubmF2LWZsZXgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDsgLyogU2FmYXJpICovXHJcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogU2FmYXJpIDYuMSsgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5uYXYtaXRlbXMtZmxleCB7XHJcbiAgICBmb250LWZhbWlseTogUGxheWZhaXIgRGlzcGxheSwgUmVndWxhcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gICAgY29sb3I6ICMxRDFEMUQ7XHJcbiAgICBwYWRkaW5nOiAwcHggMy4wODN2dztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuLm5hdi1pdGVtcy1mbGV4LWFjdGl2ZSB7XHJcbiAgICBmb250LWZhbWlseTogUGxheWZhaXIgRGlzcGxheSwgQm9sZDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/widget-modules/navigation/nav-bar/nav-bar.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/widget-modules/navigation/nav-bar/nav-bar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n <nav style=\"height:68px\"  class=\"navbar fixed-top bg-white\">\r\n        <div [ngStyle]=\"{'background-image':'url(' +imageUrl+ ')'}\" class=\"nav-container\"></div>\r\n\r\n       <!-- <a class=\"navbar-item\" >SOUND ON</a> -->\r\n       <div class=\"nav-flex\">  \r\n           <div class=\"nav-items-flex nav-items-flex-active\" ><a style=\"color: inherit;text-decoration: none\"  [routerLinkActiveOptions]=\"{ exact: true }\"  routerLink=\"/home\" routerLinkActive=\"active\">HOME</a></div>\r\n           <div class=\"nav-items-flex\"><a href=\"#album\"  (click)=\"sendGA();\" style=\"color: inherit;text-decoration: none\" routerLink=\"/home\"  [routerLinkActiveOptions]=\"{ exact: true }\" [fragment]=\"'album'\" routerLinkActive=\"active\" >ALBUMS</a></div>\r\n           <div class=\"nav-items-flex\"><a href=\"#guestbook\" (click)=\"sendGA()\" style=\"color: inherit;text-decoration: none\"  routerLink=\"/home\" [routerLinkActiveOptions]=\"{ exact: true }\"   [fragment]=\"'guestbook'\" routerLinkActive=\"active\">GUEST BOOK</a></div>\r\n           <div class=\"nav-items-flex\"><a  (click)=\"sendGA()\" style=\"color: inherit;text-decoration: none\" >SHARE</a></div>\r\n            \r\n       </div>\r\n        <!-- <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item\">\r\n                <a routerLink=\"/home\" routerLinkActive=\"active\" class=\"nav-item \">HOME</a>\r\n            </li>\r\n            <!-- <li class=\"nav-item\">\r\n                    <a routerLink=\"/home\"  [fragment]=\"'guestbook'\" routerLinkActive=\"active\"  class=\"nav-item \">Guest book</a>\r\n            </li> -->\r\n            <!-- <li routerLink=\"/guest-book\" class=\"nav-item\">\r\n                <a class=\"nav-item \">DIGITAL GUEST BOOK</a>\r\n            </li> -->\r\n            <!-- <li class=\"nav-item\">\r\n                <a class=\"nav-item \">PHOTOS</a>\r\n            </li>\r\n          <li class=\"nav-item\">\r\n              <a class=\"nav-item \">CONTACT US</a>\r\n          </li> \r\n        </ul> -->\r\n    </nav>\r\n     \r\n\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/widget-modules/navigation/nav-bar/nav-bar.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/widget-modules/navigation/nav-bar/nav-bar.component.ts ***!
  \************************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
        $('guestlink').click(function () {
            // $( '#guestbook' ).scroll();
            $('html, body').animate({
                scrollTop: $('#guestbook').offset().top
            }, 1000);
        });
    };
    NavBarComponent.prototype.sendGA = function () {
        setTimeout(function () {
            window.ga('send', 'pageview', { 'page': location.pathname + location.search + location.hash });
        }, 500);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NavBarComponent.prototype, "imageUrl", void 0);
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/widget-modules/navigation/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/widget-modules/navigation/nav-bar/nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/widget-modules/wedding-events/wedding-events.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/widget-modules/wedding-events/wedding-events.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".event-big-card-conatiner {\r\n    width: 100%;\r\n    padding-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n.event-small-card-conatiner {\r\n    width: 50%;\r\n    display: inline-block;\r\n    padding-top: 10px;\r\n}\r\n.event-large-card {\r\n    padding-top: 5pxpx;\r\n    margin-bottom: 5pxpx;\r\n    max-height: inherit;\r\n    position: relative;\r\n}\r\n.event-small-card {\r\n    padding-top: 5pxpx;\r\n    padding-bottom: 5pxpx;\r\n    max-height: inherit;\r\n    position: relative;\r\n}\r\n.event-label{\r\n    color: #FFFFFF;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    font-family: Playfair Display, Regular;\r\n    font-size: 1.7vw;\r\n    line-height: 40px;\r\n    text-transform: uppercase;\r\n}\r\n.small-card-left-padding {\r\n    padding-left: 5px;\r\n}\r\n.small-card-right-padding {\r\n    padding-right: 5px;\r\n}\r\n#bottom-mandala{\r\n    opacity: .81;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvd2VkZGluZy1ldmVudHMvd2VkZGluZy1ldmVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFVBQVU7SUFDVix5Q0FBaUM7WUFBakMsaUNBQWlDO0lBQ2pDLHVDQUF1QztJQUN2QyxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtDQUM3QjtBQUNEO0lBQ0ksa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2Qsd0JBQXdCO0NBQzNCIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvd2VkZGluZy1ldmVudHMvd2VkZGluZy1ldmVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ldmVudC1iaWctY2FyZC1jb25hdGluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmV2ZW50LXNtYWxsLWNhcmQtY29uYXRpbmVyIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG4uZXZlbnQtbGFyZ2UtY2FyZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHhweDtcclxuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmV2ZW50LXNtYWxsLWNhcmQge1xyXG4gICAgcGFkZGluZy10b3A6IDVweHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweHB4O1xyXG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZXZlbnQtbGFiZWx7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBmb250LWZhbWlseTogUGxheWZhaXIgRGlzcGxheSwgUmVndWxhcjtcclxuICAgIGZvbnQtc2l6ZTogMS43dnc7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLnNtYWxsLWNhcmQtbGVmdC1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcbi5zbWFsbC1jYXJkLXJpZ2h0LXBhZGRpbmcge1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcbiNib3R0b20tbWFuZGFsYXtcclxuICAgIG9wYWNpdHk6IC44MTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/widget-modules/wedding-events/wedding-events.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/widget-modules/wedding-events/wedding-events.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"events\">\r\n         <div *ngFor=\"let event of weddingEventList;index as i\" [ngClass]=\"event.type === 'large' ? 'event-big-card-conatiner' : 'event-small-card-conatiner'\" (click)=\"fetchAlbum(event.action)\">\r\n                                    <div  *ngIf=\"event.type === 'large'\" class=\"event-large-card\">\r\n                                             <img style=\"max-height: inherit;width: 100%\" [src]=\"event.background\"/>\r\n                                            <div class=\"event-label\">{{event.title}}</div>\r\n                                              \r\n                                    </div>\r\n                                    <div *ngIf=\"event.type !== 'large'\" class=\"event-small-card\" [ngClass]=\"(i+1) % 2 !== 0 ? 'small-card-left-padding' : 'small-card-right-padding'\">\r\n                                            <img style=\"max-height: inherit;width: 100%\" [src]=\"event.background\"/>\r\n                                                    <div class=\"event-label\">{{event.title}}</div>\r\n                                     </div>\r\n        </div>\r\n\r\n\r\n\r\n                        \r\n        <div id=\"bottom-mandala\" class=\"\">\r\n                        <img style=\"width:68vw\" src=\"assets/mandala-bottom.png\"/>\r\n         </div>\r\n  <!-- <div *ngFor=\"let eventList of weddingEventList;index as i\">\r\n            <div [ngClass]=\"i === 0 ? 'event-big-card-conatiner' : 'event-small-card-conatiner'\" (click)=\"fetchAlbum(event.action)\" *ngFor=\"let event of eventList.row;index as j\">\r\n                <div  *ngIf=\"i === 0\" class=\"event-large-card\">\r\n                         <img style=\"max-height: inherit;width: 100%\" [src]=\"event.backgroundImage\"/>\r\n                        <div class=\"event-label\">{{event.name}}</div>\r\n                          \r\n                </div>\r\n                <div *ngIf=\"i === 1\" class=\"event-small-card\" [ngClass]=\"(j+1) % 2 !== 0 ? 'small-card-right-padding' : 'small-card-left-padding'\">\r\n                        <img style=\"max-height: inherit;width: 100%\" [src]=\"event.backgroundImage\"/>\r\n                                <div class=\"event-label\">{{event.name}}</div>\r\n                 </div>\r\n            </div>\r\n    </div> -->\r\n    \r\n    <!-- <div *ngIf=\"albumOverviewData?.data?.albumItems?.length>0\">\r\n        <app-albums [albumArray] =\"albumOverviewData?.data?.albumItems\"></app-albums>\r\n    </div>\r\n    <div *ngIf=\"albumOverviewData?.data?.albumItems?.length>0\">\r\n            <app-albums [albumArray] =\"albumOverviewData?.data?.albumItems\"></app-albums>\r\n        </div> -->\r\n</div>"

/***/ }),

/***/ "./src/app/widget-modules/wedding-events/wedding-events.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/widget-modules/wedding-events/wedding-events.component.ts ***!
  \***************************************************************************/
/*! exports provided: WeddingEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeddingEventsComponent", function() { return WeddingEventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_access_album_overview_album_overview_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data-access/album-overview/album-overview.service */ "./src/app/data-access/album-overview/album-overview.service.ts");



var WeddingEventsComponent = /** @class */ (function () {
    function WeddingEventsComponent(albumOverviewService) {
        this.albumOverviewService = albumOverviewService;
    }
    WeddingEventsComponent.prototype.ngOnInit = function () {
    };
    WeddingEventsComponent.prototype.fetchAlbum = function (albumUrl) {
        var _this = this;
        this.albumOverviewService.getAlbumOverview(albumUrl).subscribe(function (data) {
            _this.albumOverviewData = data;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], WeddingEventsComponent.prototype, "weddingEventList", void 0);
    WeddingEventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wedding-events',
            template: __webpack_require__(/*! ./wedding-events.component.html */ "./src/app/widget-modules/wedding-events/wedding-events.component.html"),
            styles: [__webpack_require__(/*! ./wedding-events.component.css */ "./src/app/widget-modules/wedding-events/wedding-events.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_access_album_overview_album_overview_service__WEBPACK_IMPORTED_MODULE_2__["AlbumOverviewService"]])
    ], WeddingEventsComponent);
    return WeddingEventsComponent;
}());



/***/ }),

/***/ "./src/app/widgets/home/home.component.css":
/*!*************************************************!*\
  !*** ./src/app/widgets/home/home.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".key-photo {\r\n    width: 100%;\r\n    height: 1000px;\r\n    background-repeat: no-repeat;\r\n    position: fixed;\r\n    background-size: cover;\r\n    z-index: -10;\r\n}\r\n#bg-image{\r\n   width: 100%\r\n}\r\n.parent-container {\r\n    position: relative;\r\n    top:900px;\r\n}\r\n.couple-container {\r\n    /* min-height: 2100px; */\r\n    background-color: #E4E0DD;\r\n    width: 100%;\r\n    height:1000px;\r\n}\r\n.container-fluid-nomax {\r\n\twidth: 100%;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUloQix1QkFBdUI7SUFDdkIsYUFBYTtDQUNoQjtBQUNEO0dBQ0csV0FBVztDQUNiO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtDQUNiO0FBQ0Q7SUFDSSx5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixjQUFjO0NBQ2pCO0FBQ0Q7Q0FDQyxZQUFZO0lBQ1QsbUJBQW1CO0lBQ25CLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIua2V5LXBob3RvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB6LWluZGV4OiAtMTA7XHJcbn1cclxuI2JnLWltYWdle1xyXG4gICB3aWR0aDogMTAwJVxyXG59XHJcbi5wYXJlbnQtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDo5MDBweDtcclxufVxyXG4uY291cGxlLWNvbnRhaW5lciB7XHJcbiAgICAvKiBtaW4taGVpZ2h0OiAyMTAwcHg7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRFMEREO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwMHB4O1xyXG59XHJcbi5jb250YWluZXItZmx1aWQtbm9tYXgge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/widgets/home/home.component.html":
/*!**************************************************!*\
  !*** ./src/app/widgets/home/home.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n    <div style=\"height: 68px\" class=\"col col-md-12 col-lg-12\">\r\n            <app-nav-bar  [imageUrl]=\"wedddingOverviewData?.data?.welcome\"></app-nav-bar>\r\n    </div>\r\n   <div  class=\"col-sm-12 col-xs-12 col-12 col-md-12 col-lg-12 col-xl-12\" style=\"width: 100%;\">\r\n        <!-- <div  [ngStyle]=\"{'background-image':'url(' +wedddingOverviewData.data.welcome+ ')'}\" class=\"key-photo\"> </div> -->\r\n        <div class=\"key-photo\">\r\n                <!-- <div  [ngStyle]=\"{'background-image':'url(' +wedddingOverviewData.data.welcome+ ')'}\" class=\"key-photo\"> </div>  -->\r\n                <!-- <img style=\"width: 100%\" class=\"img-fluid\" src=\"assets/key-photo.png\"> -->\r\n            <img id=\"bg-image\"  class=\"img-fluid\" [src]=\"wedddingOverviewData?.data?.welcome\">\r\n        </div>\r\n      <div class=\"parent-container\"  >\r\n                <div  class=\"row\">\r\n                    <div class=\"col-md-12 col-lg-12 col-xl-12\" style=\"padding-left: 0px;padding-right: 0px\" >\r\n                        <div   class=\"couple-container\">\r\n                                <app-container   [weddingData]=\"wedddingOverviewData\" ></app-container>\r\n                        </div>\r\n                                \r\n                        </div>\r\n                       \r\n                </div>\r\n                 <div class=\"row\">\r\n                  \r\n                            <div style=\"min-height: 1000px;background-color: #F6F2EF;width: 100%;position: relative;\">\r\n                            <app-guest-book (sendWishEvent)=\"setGuestBookWishes($event)\"></app-guest-book>\r\n                            <app-footer></app-footer>\r\n                    </div>\r\n                        \r\n                </div> \r\n            </div>  \r\n    </div> \r\n   \r\n \r\n<div>\r\n     \r\n</div>\r\n      <!-- <div style=\"min-height: 1000px;background-color: #F6F2EF;width: 100%;position: relative;top: 2900px\">  -->\r\n      <!-- <app-nav-bar></app-nav-bar>\r\n            <app-couplestory [couplestory] = \"wedddingOverviewData?.data?.coupleStory\"></app-couplestory>\r\n            <app-wedding-events [weddingDate] = \"wedddingOverviewData?.data?.dateOfWedding\" \r\n            [weddingEventList] = \"wedddingOverviewData?.data?.eventList\"></app-wedding-events>\r\n            <app-guest-book></app-guest-book>\r\n           -->\r\n"

/***/ }),

/***/ "./src/app/widgets/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/widgets/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_access_wedding_overview_wedding_overview_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data-access/wedding-overview/wedding-overview.service */ "./src/app/data-access/wedding-overview/wedding-overview.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(wedOverviewService) {
        this.wedOverviewService = wedOverviewService;
        this.isSetBoolean = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        window.onload = (function () {
            /*parent container deciding top position*/
            $('.parent-container[_ngcontent-c1]').css({ 'top': $('#bg-image').height() });
            /*couple container deciding height*/
            $('.couple-container[_ngcontent-c1]').height($('.con-event-conatiner[_ngcontent-c3]').height() +
                $('#marriage-date-summary[_ngcontent-c6]').height() + $('#con-album-label[_ngcontent-c3]').height() +
                $('#bottom-mandala[_ngcontent-c7]').height() - 95);
            setTimeout(function () {
                /*parent container deciding top position*/
                $('.parent-container[_ngcontent-c1]').css({ 'top': $('#bg-image').height() });
                /*couple container deciding height*/
                $('.couple-container[_ngcontent-c1]').height($('.con-event-conatiner[_ngcontent-c3]').height() +
                    $('#marriage-date-summary[_ngcontent-c6]').height() + $('#con-album-label[_ngcontent-c3]').height() +
                    $('#bottom-mandala[_ngcontent-c7]').height() - 95);
            }, 1000);
        });
        $(window).resize(function () {
            setContainer();
        });
        this.fetchWedOverview();
        function setContainer() {
            /*parent container deciding top position*/
            $('.parent-container[_ngcontent-c1]').css({ 'top': $('#bg-image').height() });
            /*couple container deciding height*/
            $('.couple-container[_ngcontent-c1]').height($('.con-event-conatiner[_ngcontent-c3]').height() +
                $('#marriage-date-summary[_ngcontent-c6]').height() + $('#con-album-label[_ngcontent-c3]').height() +
                $('#bottom-mandala[_ngcontent-c7]').height() - 95);
        }
    };
    HomeComponent.prototype.fetchWedOverview = function () {
        var _this = this;
        this.wedOverviewService.getWeddingOverview().subscribe(function (data) {
            _this.wedddingOverviewData = data;
            _this.setGuestBookWishes(Event);
        });
    };
    ;
    HomeComponent.prototype.setGuestBookWishes = function ($event) {
        var _this = this;
        console.log('called');
        var wishData = {};
        var count = 0;
        this.wedOverviewService.getWishes().subscribe(function (data) {
            wishData = data;
            if (_this.isSetBoolean) {
                $('#word').text(wishData.data.wishList[0].message);
                _this.isSetBoolean = false;
                setInterval(function () {
                    count++;
                    $('#word').fadeOut(400, function () {
                        $(this).text(wishData.data.wishList[count % wishData.data.wishList.length].message).fadeIn(400);
                    });
                }, 5000);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HomeComponent.prototype, "weddingObj", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/widgets/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/widgets/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_access_wedding_overview_wedding_overview_service__WEBPACK_IMPORTED_MODULE_2__["WeddingOverviewService"]])
    ], HomeComponent);
    return HomeComponent;
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
    production: true
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

module.exports = __webpack_require__(/*! d:\AngularRespository\DA-F\wedding-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map