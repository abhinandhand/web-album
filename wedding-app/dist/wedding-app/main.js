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

module.exports = ".container-fluid-nomax {\n\twidth: 100%;\n    margin-right: auto;\n    margin-left: auto;\n}\n\n.sample-flipbook{\n\twidth:400px;\n\theight:200px;\n\ttransition:margin-left 0.2s;\n}\n\n.sample-flipbook .page{\n\twidth:200px;\n\theight:200px;\n\tbackground-color:white;\n\tline-height:300px;\n\tfont-size:20px;\n}\n\n.sample-flipbook .page-wrapper{\n\t-webkit-perspective:2000px;\n\t-ms-perspective:2000px;\n\t-o-perspective:2000px;\n\tperspective:2000px;\n}\n\n.sample-flipbook .hard{\n\tbackground:#ccc !important;\n\tcolor:#333;\n\t-o-box-shadow:inset 0 0 5px #666;\n\t-ms-box-shadow:inset 0 0 5px #666;\n\tbox-shadow:inset 0 0 5px #666;\n\tfont-weight:bold;\n}\n\n.sample-flipbook .odd{\n\tbackground:-webkit-gradient(linear, right top, left top, color-stop(0.95, #FFF), color-stop(1, #DADADA));\n\tbackground-image:linear-gradient(right, #FFF 95%, #C4C4C4 100%);\n\t-o-box-shadow:inset 0 0 5px #666;\n\t-ms-box-shadow:inset 0 0 5px #666;\n\tbox-shadow:inset 0 0 5px #666;\n\t\n}\n\n.sample-flipbook .even{\n\tbackground:-webkit-gradient(linear, left top, right top, color-stop(0.95, #fff), color-stop(1, #dadada));\n\tbackground-image:linear-gradient(left, #fff 95%, #dadada 100%);\n\t-o-box-shadow:inset 0 0 5px #666;\n\t-ms-box-shadow:inset 0 0 5px #666;\n\tbox-shadow:inset 0 0 5px #666;\n}\n\n/****app*/\n\n.fit-top-container {\n    width: 1000px;\n    height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0lBQ1QsbUJBQW1CO0lBQ25CLGtCQUFrQjtDQUNyQjs7QUFFRDtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBS2IsNEJBQTRCO0NBQzVCOztBQUVEO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZjs7QUFFRDtDQUNDLDJCQUEyQjtDQUUzQix1QkFBdUI7Q0FDdkIsc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQjs7QUFFRDtDQUNDLDJCQUEyQjtDQUMzQixXQUFXO0NBR1gsaUNBQWlDO0NBQ2pDLGtDQUFrQztDQUNsQyw4QkFBOEI7Q0FDOUIsaUJBQWlCO0NBQ2pCOztBQUVEO0NBQ0MseUdBQXlHO0NBS3pHLGdFQUFnRTtDQUdoRSxpQ0FBaUM7Q0FDakMsa0NBQWtDO0NBQ2xDLDhCQUE4Qjs7Q0FFOUI7O0FBRUQ7Q0FDQyx5R0FBeUc7Q0FLekcsK0RBQStEO0NBRy9ELGlDQUFpQztDQUNqQyxrQ0FBa0M7Q0FDbEMsOEJBQThCO0NBQzlCOztBQUVELFVBQVU7O0FBQ1Y7SUFDSSxjQUFjO0lBQ2QsY0FBYztDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZC1ub21heCB7XG5cdHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnNhbXBsZS1mbGlwYm9va3tcblx0d2lkdGg6NDAwcHg7XG5cdGhlaWdodDoyMDBweDtcblx0LXdlYmtpdC10cmFuc2l0aW9uOm1hcmdpbi1sZWZ0IDAuMnM7XG5cdC1tb3otdHJhbnNpdGlvbjptYXJnaW4tbGVmdCAwLjJzO1xuXHQtbXMtdHJhbnNpdGlvbjptYXJnaW4tbGVmdCAwLjJzO1xuXHQtby10cmFuc2l0aW9uOm1hcmdpbi1sZWZ0IDAuMnM7XG5cdHRyYW5zaXRpb246bWFyZ2luLWxlZnQgMC4ycztcbn1cblxuLnNhbXBsZS1mbGlwYm9vayAucGFnZXtcblx0d2lkdGg6MjAwcHg7XG5cdGhlaWdodDoyMDBweDtcblx0YmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcblx0bGluZS1oZWlnaHQ6MzAwcHg7XG5cdGZvbnQtc2l6ZToyMHB4O1xufVxuXG4uc2FtcGxlLWZsaXBib29rIC5wYWdlLXdyYXBwZXJ7XG5cdC13ZWJraXQtcGVyc3BlY3RpdmU6MjAwMHB4O1xuXHQtbW96LXBlcnNwZWN0aXZlOjIwMDBweDtcblx0LW1zLXBlcnNwZWN0aXZlOjIwMDBweDtcblx0LW8tcGVyc3BlY3RpdmU6MjAwMHB4O1xuXHRwZXJzcGVjdGl2ZToyMDAwcHg7XG59XG5cbi5zYW1wbGUtZmxpcGJvb2sgLmhhcmR7XG5cdGJhY2tncm91bmQ6I2NjYyAhaW1wb3J0YW50O1xuXHRjb2xvcjojMzMzO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xuXHQtbW96LWJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xuXHQtby1ib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2Njtcblx0LW1zLWJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xuXHRib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2Njtcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcbn1cblxuLnNhbXBsZS1mbGlwYm9vayAub2Rke1xuXHRiYWNrZ3JvdW5kOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAuOTUsICNGRkYpLCBjb2xvci1zdG9wKDEsICNEQURBREEpKTtcblx0YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudChyaWdodCwgI0ZGRiA5NSUsICNDNEM0QzQgMTAwJSk7XG5cdGJhY2tncm91bmQtaW1hZ2U6LW1vei1saW5lYXItZ3JhZGllbnQocmlnaHQsICNGRkYgOTUlLCAjQzRDNEM0IDEwMCUpO1xuXHRiYWNrZ3JvdW5kLWltYWdlOi1tcy1saW5lYXItZ3JhZGllbnQocmlnaHQsICNGRkYgOTUlLCAjQzRDNEM0IDEwMCUpO1xuXHRiYWNrZ3JvdW5kLWltYWdlOi1vLWxpbmVhci1ncmFkaWVudChyaWdodCwgI0ZGRiA5NSUsICNDNEM0QzQgMTAwJSk7XG5cdGJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHJpZ2h0LCAjRkZGIDk1JSwgI0M0QzRDNCAxMDAlKTtcblx0LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2Njtcblx0LW1vei1ib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2Njtcblx0LW8tYm94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XG5cdC1tcy1ib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2Njtcblx0Ym94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XG5cdFxufVxuXG4uc2FtcGxlLWZsaXBib29rIC5ldmVue1xuXHRiYWNrZ3JvdW5kOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAuOTUsICNmZmYpLCBjb2xvci1zdG9wKDEsICNkYWRhZGEpKTtcblx0YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmIDk1JSwgI2RhZGFkYSAxMDAlKTtcblx0YmFja2dyb3VuZC1pbWFnZTotbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmIDk1JSwgI2RhZGFkYSAxMDAlKTtcblx0YmFja2dyb3VuZC1pbWFnZTotbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsICNmZmYgOTUlLCAjZGFkYWRhIDEwMCUpO1xuXHRiYWNrZ3JvdW5kLWltYWdlOi1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmIDk1JSwgI2RhZGFkYSAxMDAlKTtcblx0YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQobGVmdCwgI2ZmZiA5NSUsICNkYWRhZGEgMTAwJSk7XG5cdC13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XG5cdC1tb3otYm94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XG5cdC1vLWJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xuXHQtbXMtYm94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XG5cdGJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xufVxuXG4vKioqKmFwcCovXG4uZml0LXRvcC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAwcHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div>\n      <!-- <div class=\"fit-top-container\" [ngStyle]=\"{'background':'url(' +wedddingOverviewData.data1.coupleStory.backgroundImage+ ')'}\">\n       !-->\n      <div class=\"container-fluid-nomax\">  \n        <router-outlet></router-outlet> \n      </div>\n    </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n<!--The content below is only a placeholder and can be replaced.-->\n<!-- \n<div id=\"flipbook\" class=\"sample-flipbook\">\n    <div class=\"hard\"> Turn.js </div>\n    <div class=\"hard\"></div>\n    <div> Page 1 </div>\n    <div> Page 2 </div>\n    <div> Page 3 </div>\n    <div> Page 4 </div>\n    <div class=\"hard\"></div>\n    <div class=\"hard\"></div>\n  </div> -->\n\n  <!-- <div id=\"flipbook\" class=\"sample-flipbook\">\n    <div style=\"background-image:url(assets/pages/1.jpg)\"></div>\n\t\t\t<div (mousedown)=\"sendPhotoClickEvent()\" style=\"background-image:url(assets/pages/2.jpg)\"></div>\n\t\t\t<div style=\"background-image:url(assets/pages/3.jpg)\"></div>\n\t\t\t<div style=\"background-image:url(assets/pages/4.jpg)\"></div>\n\t\t\t<div style=\"background-image:url(assets/pages/5.jpg)\"></div>\n  </div> -->\n\n"

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
        this.endpoint = 'https://gist.githubusercontent.com/SachinBharadwaj/18001dbea2aaacb97ac6ec23b3585d43/raw/af9015cbb33636b5830bf2e4dff7d339793839b8/index.json';
    }
    WeddingOverviewService.prototype.getWeddingOverview = function () {
        console.log(this.http.get(this.endpoint));
        return this.http.get(this.endpoint);
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

module.exports = ".sample-flipbook{\n\twidth:400px;\n\theight:200px;\n\ttransition:margin-left 0.2s;\n}\n\n.sample-flipbook .page{\n\twidth:200px;\n\theight:200px;\n\tbackground-color:white;\n\tline-height:300px;\n\tfont-size:20px;\n}\n\n.sample-flipbook .page-wrapper{\n\t-webkit-perspective:2000px;\n\t-ms-perspective:2000px;\n\t-o-perspective:2000px;\n\tperspective:2000px;\n}\n\n.sample-flipbook .hard{\n\tbackground:#ccc !important;\n\tcolor:#333;\n\t-o-box-shadow:inset 0 0 5px #666;\n\t-ms-box-shadow:inset 0 0 5px #666;\n\tbox-shadow:inset 0 0 5px #666;\n\tfont-weight:bold;\n}\n\n.sample-flipbook .odd{\n\tbackground:-webkit-gradient(linear, right top, left top, color-stop(0.95, #FFF), color-stop(1, #DADADA));\n\tbackground-image:linear-gradient(right, #FFF 95%, #C4C4C4 100%);\n\t-o-box-shadow:inset 0 0 5px #666;\n\t-ms-box-shadow:inset 0 0 5px #666;\n\tbox-shadow:inset 0 0 5px #666;\n\t\n}\n\n.sample-flipbook .even{\n\tbackground:-webkit-gradient(linear, left top, right top, color-stop(0.95, #fff), color-stop(1, #dadada));\n\tbackground-image:linear-gradient(left, #fff 95%, #dadada 100%);\n\t-o-box-shadow:inset 0 0 5px #666;\n\t-ms-box-shadow:inset 0 0 5px #666;\n\tbox-shadow:inset 0 0 5px #666;\n}\n\n/****app*/\n\n.fit-top-container {\n    width: 1000px;\n    height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvYWxidW1zL2FsYnVtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FLYiw0QkFBNEI7Q0FDNUI7O0FBRUQ7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmOztBQUVEO0NBQ0MsMkJBQTJCO0NBRTNCLHVCQUF1QjtDQUN2QixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25COztBQUVEO0NBQ0MsMkJBQTJCO0NBQzNCLFdBQVc7Q0FHWCxpQ0FBaUM7Q0FDakMsa0NBQWtDO0NBQ2xDLDhCQUE4QjtDQUM5QixpQkFBaUI7Q0FDakI7O0FBRUQ7Q0FDQyx5R0FBeUc7Q0FLekcsZ0VBQWdFO0NBR2hFLGlDQUFpQztDQUNqQyxrQ0FBa0M7Q0FDbEMsOEJBQThCOztDQUU5Qjs7QUFFRDtDQUNDLHlHQUF5RztDQUt6RywrREFBK0Q7Q0FHL0QsaUNBQWlDO0NBQ2pDLGtDQUFrQztDQUNsQyw4QkFBOEI7Q0FDOUI7O0FBRUQsVUFBVTs7QUFDVjtJQUNJLGNBQWM7SUFDZCxjQUFjO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvYWxidW1zL2FsYnVtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNhbXBsZS1mbGlwYm9va3tcblx0d2lkdGg6NDAwcHg7XG5cdGhlaWdodDoyMDBweDtcblx0LXdlYmtpdC10cmFuc2l0aW9uOm1hcmdpbi1sZWZ0IDAuMnM7XG5cdC1tb3otdHJhbnNpdGlvbjptYXJnaW4tbGVmdCAwLjJzO1xuXHQtbXMtdHJhbnNpdGlvbjptYXJnaW4tbGVmdCAwLjJzO1xuXHQtby10cmFuc2l0aW9uOm1hcmdpbi1sZWZ0IDAuMnM7XG5cdHRyYW5zaXRpb246bWFyZ2luLWxlZnQgMC4ycztcbn1cblxuLnNhbXBsZS1mbGlwYm9vayAucGFnZXtcblx0d2lkdGg6MjAwcHg7XG5cdGhlaWdodDoyMDBweDtcblx0YmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcblx0bGluZS1oZWlnaHQ6MzAwcHg7XG5cdGZvbnQtc2l6ZToyMHB4O1xufVxuXG4uc2FtcGxlLWZsaXBib29rIC5wYWdlLXdyYXBwZXJ7XG5cdC13ZWJraXQtcGVyc3BlY3RpdmU6MjAwMHB4O1xuXHQtbW96LXBlcnNwZWN0aXZlOjIwMDBweDtcblx0LW1zLXBlcnNwZWN0aXZlOjIwMDBweDtcblx0LW8tcGVyc3BlY3RpdmU6MjAwMHB4O1xuXHRwZXJzcGVjdGl2ZToyMDAwcHg7XG59XG5cbi5zYW1wbGUtZmxpcGJvb2sgLmhhcmR7XG5cdGJhY2tncm91bmQ6I2NjYyAhaW1wb3J0YW50O1xuXHRjb2xvcjojMzMzO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xuXHQtbW96LWJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xuXHQtby1ib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2Njtcblx0LW1zLWJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xuXHRib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2Njtcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcbn1cblxuLnNhbXBsZS1mbGlwYm9vayAub2Rke1xuXHRiYWNrZ3JvdW5kOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAuOTUsICNGRkYpLCBjb2xvci1zdG9wKDEsICNEQURBREEpKTtcblx0YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudChyaWdodCwgI0ZGRiA5NSUsICNDNEM0QzQgMTAwJSk7XG5cdGJhY2tncm91bmQtaW1hZ2U6LW1vei1saW5lYXItZ3JhZGllbnQocmlnaHQsICNGRkYgOTUlLCAjQzRDNEM0IDEwMCUpO1xuXHRiYWNrZ3JvdW5kLWltYWdlOi1tcy1saW5lYXItZ3JhZGllbnQocmlnaHQsICNGRkYgOTUlLCAjQzRDNEM0IDEwMCUpO1xuXHRiYWNrZ3JvdW5kLWltYWdlOi1vLWxpbmVhci1ncmFkaWVudChyaWdodCwgI0ZGRiA5NSUsICNDNEM0QzQgMTAwJSk7XG5cdGJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHJpZ2h0LCAjRkZGIDk1JSwgI0M0QzRDNCAxMDAlKTtcblx0LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2Njtcblx0LW1vei1ib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2Njtcblx0LW8tYm94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XG5cdC1tcy1ib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2Njtcblx0Ym94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XG5cdFxufVxuXG4uc2FtcGxlLWZsaXBib29rIC5ldmVue1xuXHRiYWNrZ3JvdW5kOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAuOTUsICNmZmYpLCBjb2xvci1zdG9wKDEsICNkYWRhZGEpKTtcblx0YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmIDk1JSwgI2RhZGFkYSAxMDAlKTtcblx0YmFja2dyb3VuZC1pbWFnZTotbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmIDk1JSwgI2RhZGFkYSAxMDAlKTtcblx0YmFja2dyb3VuZC1pbWFnZTotbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsICNmZmYgOTUlLCAjZGFkYWRhIDEwMCUpO1xuXHRiYWNrZ3JvdW5kLWltYWdlOi1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmIDk1JSwgI2RhZGFkYSAxMDAlKTtcblx0YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQobGVmdCwgI2ZmZiA5NSUsICNkYWRhZGEgMTAwJSk7XG5cdC13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XG5cdC1tb3otYm94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XG5cdC1vLWJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xuXHQtbXMtYm94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XG5cdGJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xufVxuXG4vKioqKmFwcCovXG4uZml0LXRvcC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAwcHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/widget-modules/albums/albums.component.html":
/*!*************************************************************!*\
  !*** ./src/app/widget-modules/albums/albums.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>\n        <div id=\"flipbook\" class=\"sample-flipbook\"  >\n          <div *ngFor=\"let image of albumArray\" [ngStyle]=\"{'background':'url(' +image?.albumArt+ ')'}\"></div>\n        </div>\n    </div>\n</div>\n\n<!-- <div id=\"flipbook\" class=\"sample-flipbook\">\n    <div style=\"background-image:url(assets/pages/1.jpg)\"></div>\n\t\t\t<div (mousedown)=\"sendPhotoClickEvent()\" style=\"background-image:url(assets/pages/2.jpg)\"></div>\n\t\t\t<div style=\"background-image:url(assets/pages/3.jpg)\"></div>\n\t\t\t<div style=\"background-image:url(assets/pages/4.jpg)\"></div>\n\t\t\t<div style=\"background-image:url(assets/pages/5.jpg)\"></div>\n  </div> -->\n"

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

module.exports = ".j{\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvY29tbWVudHMvY29tbWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQyIsImZpbGUiOiJzcmMvYXBwL3dpZGdldC1tb2R1bGVzL2NvbW1lbnRzL2NvbW1lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuantcbiAgICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/widget-modules/comments/comments.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/widget-modules/comments/comments.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  comments works!\n</p>\n"

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

module.exports = ".img-mandala{\n    width: 18vw;\n    height: 609.75px;\n    opacity: .81;\n}\n.top-left-mandala {\n    top: 0px;\n    position: absolute;\n    left: 0px;\n}\n.top-right-mandala {\n    top: 0%;\n    position: absolute;\n    right: 13px;\n    -webkit-transform: scaleX(-1);\n    transform: scaleX(-1);\n}\n.middle-left-mandala {\n    top: 50%;\n    position: absolute;\n    left: 0px;\n}\n.middle-right-mandala {\n    top: 50%;\n    position: absolute;\n    right: 13px;\n    -webkit-transform: scaleX(-1);\n    transform: scaleX(-1);\n}\n.bottom-img-mandala{\n    width: 335px;\n    height: 960px;\n    opacity: .81;\n}\n.bottom-middle-mandala {\n    bottom: 0px;\n    position: absolute;\n    left: auto;\n    right: auto;\n    -webkit-transform: scaleX(-1);\n    transform: rotate(-90deg);\n}\n#con-marriage-info{\n    height: 420PX;\n    width: 100%;\n    /* background-color: rgba(0,0,0, 0.4); */\n    position: absolute;\n    opacity: 0.8;\n    /* padding: 41px 0px 41px 0; */\n}\n#con-event-info {\n    height: 385PX;\n    background-color: #FFFF;\n    background-color: rgba(0,0,0, 0.4);\n    position: absolute;\n    left: 23%;\n    right: 23%;\n    top: -188px;\n    opacity: 0.8;\n\n}\n.middle-container {\n    position: absolute;\n    left: 21.6666%;\n    right: 21.666%;\n    top: -217px;\n}\n#con-album-label {\n    font-family: layfair Display, Regular;\n    font-size: 3.4895vw;\n    text-align: center;\n    word-spacing: 10;\n    line-height: 67px;\n    color: #445563;\n    opacity: 1;\n    position: absolute;\n    top: 500px;\n    width: 100%;\n}\n.con-event-conatiner {\n    position: absolute;\n    top: 600px;\n    width: 100%;\n    /* min-height: 200px; */\n}\n/* .bottom-img-mandala{\n    width: 59vw;\n    height: 216px;\n    opacity: .81;\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLFVBQVU7Q0FDYjtBQUNEO0lBQ0ksUUFBUTtJQUNSLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLHNCQUFzQjtDQUN6QjtBQUNEO0lBQ0ksU0FBUztJQUNULG1CQUFtQjtJQUNuQixVQUFVO0NBQ2I7QUFDRDtJQUNJLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixzQkFBc0I7Q0FDekI7QUFDRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QiwwQkFBMEI7Q0FDN0I7QUFDRDtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1oseUNBQXlDO0lBQ3pDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsK0JBQStCO0NBQ2xDO0FBQ0Q7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLG1DQUFtQztJQUNuQyxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTs7Q0FFaEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtJQUNmLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksc0NBQXNDO0lBQ3RDLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWix3QkFBd0I7Q0FDM0I7QUFDRDs7OztJQUlJIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1tYW5kYWxhe1xuICAgIHdpZHRoOiAxOHZ3O1xuICAgIGhlaWdodDogNjA5Ljc1cHg7XG4gICAgb3BhY2l0eTogLjgxO1xufVxuLnRvcC1sZWZ0LW1hbmRhbGEge1xuICAgIHRvcDogMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwcHg7XG59XG4udG9wLXJpZ2h0LW1hbmRhbGEge1xuICAgIHRvcDogMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxM3B4O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbn1cbi5taWRkbGUtbGVmdC1tYW5kYWxhIHtcbiAgICB0b3A6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMHB4O1xufVxuLm1pZGRsZS1yaWdodC1tYW5kYWxhIHtcbiAgICB0b3A6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEzcHg7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xufVxuLmJvdHRvbS1pbWctbWFuZGFsYXtcbiAgICB3aWR0aDogMzM1cHg7XG4gICAgaGVpZ2h0OiA5NjBweDtcbiAgICBvcGFjaXR5OiAuODE7XG59XG4uYm90dG9tLW1pZGRsZS1tYW5kYWxhIHtcbiAgICBib3R0b206IDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogYXV0bztcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xufVxuI2Nvbi1tYXJyaWFnZS1pbmZve1xuICAgIGhlaWdodDogNDIwUFg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwgMC40KTsgKi9cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIC8qIHBhZGRpbmc6IDQxcHggMHB4IDQxcHggMDsgKi9cbn1cbiNjb24tZXZlbnQtaW5mbyB7XG4gICAgaGVpZ2h0OiAzODVQWDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAwLjQpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAyMyU7XG4gICAgcmlnaHQ6IDIzJTtcbiAgICB0b3A6IC0xODhweDtcbiAgICBvcGFjaXR5OiAwLjg7XG5cbn1cbi5taWRkbGUtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMjEuNjY2NiU7XG4gICAgcmlnaHQ6IDIxLjY2NiU7XG4gICAgdG9wOiAtMjE3cHg7XG59XG4jY29uLWFsYnVtLWxhYmVsIHtcbiAgICBmb250LWZhbWlseTogbGF5ZmFpciBEaXNwbGF5LCBSZWd1bGFyO1xuICAgIGZvbnQtc2l6ZTogMy40ODk1dnc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdvcmQtc3BhY2luZzogMTA7XG4gICAgbGluZS1oZWlnaHQ6IDY3cHg7XG4gICAgY29sb3I6ICM0NDU1NjM7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5jb24tZXZlbnQtY29uYXRpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBtaW4taGVpZ2h0OiAyMDBweDsgKi9cbn1cbi8qIC5ib3R0b20taW1nLW1hbmRhbGF7XG4gICAgd2lkdGg6IDU5dnc7XG4gICAgaGVpZ2h0OiAyMTZweDtcbiAgICBvcGFjaXR5OiAuODE7XG59ICovIl19 */"

/***/ }),

/***/ "./src/app/widget-modules/container/container.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/widget-modules/container/container.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<div style=\"padding-left: 0%;padding-right: 0%;\" class=\"middle-container\">\n  <div id=\"con-marriage-info\">\n      <app-couplestory [imageUrl]=\"weddingData?.data?.welcome\"></app-couplestory>\n  </div>\n\n  <div id=\"con-album-label\">\n      <img src=\"assets/rectangle.svg\">\n      <span id=\"album\" style=\"padding-left: 20px;padding-right: 17px;\">ALBUMS</span>\n      <img style=\"transform: scale(-1);\" src=\"assets/rectangle.svg\">\n   \n  </div>\n\n  <div class=\"con-event-conatiner\">\n    <app-wedding-events [weddingEventList] = \"weddingData?.data?.album\"></app-wedding-events>\n  </div>\n\n \n\n<!-- <div style=\"position: absolute\">\n  <h1>Yooooo</h1>\n\n</div>\n\n  <div id=\"event-info\">\n    <app-wedding-events [weddingEventList] = \"weddingData?.data?.eventList\"></app-wedding-events>\n  </div> -->\n  \n\n</div>\n  <div class=\"top-left-mandala\">\n    <img class=\"img-mandala\" src=\"assets/mandala.png\"/>\n  </div>\n  <div class=\"top-right-mandala\">\n      <img class=\"img-mandala\" src=\"assets/mandala.png\"/>\n    </div>\n    <div class=\"middle-left-mandala\">\n        <img class=\"img-mandala\" src=\"assets/mandala.png\"/>\n      </div>\n      <div class=\"middle-right-mandala\">\n          <img class=\"img-mandala\" src=\"assets/mandala.png\"/>\n        </div>\n        \n  \n  \n\n\n\n\n\n<!-- \n<div class=\"bottom-middle-mandala\">\n      <img class=\"mandala\" src=\"assets/mandala.png\"/>\n    </div> -->\n</div>\n"

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

module.exports = "#couple-name{\n    text-align: center;\n    font-family: Great Vibes, Regular;\n    /* font-size: 142px; */\n    font-size: 8.395vw;\n    line-height: 178px;\n    color: #D0CECA;\n    margin-top: 32px;\n    z-index: 200;\n\n}\n#marriage-date {\n    text-align: center;\n    font-family: Playfair Display, Regular;\n    font-size: 60px;\n    line-height: 80px;\n    color: #303B44;\n}\n#marriage-date-summary{\n    text-align: center;\n    font-family: Playfair Display, Regular;\n    font-size: 30px;\n    line-height: 40px;\n    word-spacing: 10;\n    color: #303B44;\n    margin-top: 8px;\n\n}\n.couple-name-div{\n    align-items: center;\n    height: 210px;\n    display: flex;\n    justify-content: center;\n    position: relative;\n}\n.couple-name-bg{\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: #ffff;\n    position: absolute;\n    /* background: url('http://localhost:8600/assets/key-photo.png'); */\n    background-position: bottom;\n    z-index: -1;\n    -webkit-filter: blur(26px);\n            filter: blur(26px);\n}\n.couple-name-bg:before{\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvY291cGxlc3RvcnkvY291cGxlc3RvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhOztDQUVoQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLHVDQUF1QztJQUN2QyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQix1Q0FBdUM7SUFDdkMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjs7Q0FFbkI7QUFDRDtJQUNJLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLFFBQVE7SUFDUixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0VBQW9FO0lBQ3BFLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osMkJBQW1CO1lBQW5CLG1CQUFtQjtDQUN0QjtBQUNEOztDQUVDIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvY291cGxlc3RvcnkvY291cGxlc3RvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb3VwbGUtbmFtZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IEdyZWF0IFZpYmVzLCBSZWd1bGFyO1xuICAgIC8qIGZvbnQtc2l6ZTogMTQycHg7ICovXG4gICAgZm9udC1zaXplOiA4LjM5NXZ3O1xuICAgIGxpbmUtaGVpZ2h0OiAxNzhweDtcbiAgICBjb2xvcjogI0QwQ0VDQTtcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIHotaW5kZXg6IDIwMDtcblxufVxuI21hcnJpYWdlLWRhdGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogUGxheWZhaXIgRGlzcGxheSwgUmVndWxhcjtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDgwcHg7XG4gICAgY29sb3I6ICMzMDNCNDQ7XG59XG4jbWFycmlhZ2UtZGF0ZS1zdW1tYXJ5e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogUGxheWZhaXIgRGlzcGxheSwgUmVndWxhcjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgd29yZC1zcGFjaW5nOiAxMDtcbiAgICBjb2xvcjogIzMwM0I0NDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG5cbn1cbi5jb3VwbGUtbmFtZS1kaXZ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDIxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvdXBsZS1uYW1lLWJne1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODYwMC9hc3NldHMva2V5LXBob3RvLnBuZycpOyAqL1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBmaWx0ZXI6IGJsdXIoMjZweCk7XG59XG4uY291cGxlLW5hbWUtYmc6YmVmb3Jle1xuICAgIFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/widget-modules/couplestory/couplestory.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/widget-modules/couplestory/couplestory.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"couple-name-div\">\n            \n                <!-- <div class=\"couple-name-bg\"  [ngStyle]=\"{'background':'url('+ imageUrl +')'}\" >\n                               \n                </div>  -->\n                <div class=\"couple-name-bg\" style=\"    background: grey;\"  >\n                               \n                        </div> \n                <h1 id=\"couple-name\">{{'Aron & Diya'}}</h1> \n            <!-- <h1 id=\"couple-name\">{{'Arun & Diya'}}</h1> -->\n    </div>\n        \n    <div style=\"height: 210px;\">\n            <div id=\"marriage-date-summary\">\n\n                    <!-- <img src=\"assets/rectangle.svg\"> -->\n                    <span style=\"padding-left: 20px;padding-right: 17px;\">celebrating <b *ngIf=\"togetherMonth>=0\" style=\"font-size: 34px;\">{{togetherMonth}} month</b> <b *ngIf=\"togetherYear>=0\" style=\"font-size: 34px;\">{{togetherYear}} year</b> of togetherness\n                    </span>\n                    <!-- <img style=\"transform: scale(-1);\" src=\"assets/rectangle.svg\"> -->\n                \n                 <div>since</div>\n            </div>\n            \n            <h1 id=\"marriage-date\">10th February, 2019</h1>\n    </div>\n\n</div>\n\n\n"

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
        if (months >= 12) {
            this.togetherYear = Math.floor(months / 12);
        }
        else {
            this.togetherMonth = months <= 0 ? 0 : months;
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

module.exports = ".footer {\n    height: 68px;\n    background-color: #E4E0DD;\n    width: 100%;\n}\n.with-love {\n    height: 68px;\n    background-color: #E4E0DD;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    font-family: Great Vibes, Regular;\n    font-size: 30px;\n    align-items: center;\n    justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixZQUFZO0NBQ2Y7QUFDRDtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsd0JBQXdCO0NBQzNCIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gICAgaGVpZ2h0OiA2OHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNEUwREQ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ud2l0aC1sb3ZlIHtcbiAgICBoZWlnaHQ6IDY4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U0RTBERDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBHcmVhdCBWaWJlcywgUmVndWxhcjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/widget-modules/footer/footer.component.html":
/*!*************************************************************!*\
  !*** ./src/app/widget-modules/footer/footer.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-lg-12 col-xl-12\">\n    <div class=\"footer with-love\">\n        <span>with <img src=\"assets/heart.svg\"/> from Jason</span>\n      </div>\n\n</div>\n\n"

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

module.exports = ".guest-view {\n    height: 200px;\n    color: #707070;\n}\n.guest-book-label {\n    color: #1D1D1D;\n    font-family: Playfair Display, Regular;\n    font-size: 50px;\n    line-height: 67px;\n    text-transform: uppercase;\n    margin-top: 100px;\n    text-align: center;\n\n}\n.wish-style{\n    color: #707070;\n    font-family: Great Vibes, Regular;\n    font-size: 44px;\n    line-height: 83px;\n    text-align: center;\n}\ninput {\n    background-color: inherit;\n    height: 60px;\n    width: 100%;\n    border: 0;\n    outline: 0;\n    background: transparent;\n    border-bottom: 2px solid #75726e7a;\n    font-size: 44px;\n    font-family: Great Vibes, Regular;\n    line-height: 83px;\n    color:#707070;\n    padding-left: 20px;\n}\ntextarea {\n    background-color: inherit;\n    width: 100%;\n    border: 0;\n    outline: 0;\n    background: transparent;\n    border-bottom: 2px solid #75726e7a;\n    font-size: 44px;\n    font-family: Great Vibes, Regular;\n    line-height: 83px;\n    color:#707070;\n    padding-left: 20px;\n}\n#wish-button{\n    width: 536px;\n    height: 125px;\n    font-size: 30px;\n    line-height: 80px;\n    font-family: Playfair Display, Regular;\n    background-color: #445563;\n    color: #FFFFFF;\n    border-radius: 10px;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvZ3Vlc3QtYm9vay9ndWVzdC1ib29rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksZUFBZTtJQUNmLHVDQUF1QztJQUN2QyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsbUJBQW1COztDQUV0QjtBQUNEO0lBQ0ksZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsbUNBQW1DO0lBQ25DLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7Q0FDdEI7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsbUNBQW1DO0lBQ25DLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixvQkFBb0I7O0NBRXZCIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvZ3Vlc3QtYm9vay9ndWVzdC1ib29rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3Vlc3QtdmlldyB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBjb2xvcjogIzcwNzA3MDtcbn1cbi5ndWVzdC1ib29rLWxhYmVsIHtcbiAgICBjb2xvcjogIzFEMUQxRDtcbiAgICBmb250LWZhbWlseTogUGxheWZhaXIgRGlzcGxheSwgUmVndWxhcjtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDY3cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cbi53aXNoLXN0eWxle1xuICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgIGZvbnQtZmFtaWx5OiBHcmVhdCBWaWJlcywgUmVndWxhcjtcbiAgICBmb250LXNpemU6IDQ0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDgzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNzU3MjZlN2E7XG4gICAgZm9udC1zaXplOiA0NHB4O1xuICAgIGZvbnQtZmFtaWx5OiBHcmVhdCBWaWJlcywgUmVndWxhcjtcbiAgICBsaW5lLWhlaWdodDogODNweDtcbiAgICBjb2xvcjojNzA3MDcwO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxudGV4dGFyZWEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAwO1xuICAgIG91dGxpbmU6IDA7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM3NTcyNmU3YTtcbiAgICBmb250LXNpemU6IDQ0cHg7XG4gICAgZm9udC1mYW1pbHk6IEdyZWF0IFZpYmVzLCBSZWd1bGFyO1xuICAgIGxpbmUtaGVpZ2h0OiA4M3B4O1xuICAgIGNvbG9yOiM3MDcwNzA7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuI3dpc2gtYnV0dG9ue1xuICAgIHdpZHRoOiA1MzZweDtcbiAgICBoZWlnaHQ6IDEyNXB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBsaW5lLWhlaWdodDogODBweDtcbiAgICBmb250LWZhbWlseTogUGxheWZhaXIgRGlzcGxheSwgUmVndWxhcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ1NTYzO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/widget-modules/guest-book/guest-book.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/widget-modules/guest-book/guest-book.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"guestbook\" >\n  <div class=\"guest-book-label\">\n    <img src=\"assets/rectangle.svg\">\n    <span style=\"padding-left: 20px;padding-right: 17px;\">Guest Book</span>\n    <img style=\"transform: scale(-1);\" src=\"assets/rectangle.svg\">\n  </div>\n     <div style=\"margin-top: 63px;\" >\n        <div class=\"offset-md-4 offset-lg-4 offset-xl-4 col-md-8 col-lg-8 col-xl-8 offset-lg-4 offset-md-4 offset-xl-4\" class=\"guest-view\">\n          <h1 class=\"wish-style\" id=\"word\"></h1>\n        </div>\n      </div>\n\n      <div *ngIf=\"showForm\" style=\"margin-left: 25%; margin-right: 25%;\" >\n        <form (ngSubmit)=\"guestForm.form.valid && onSubmit()\" #guestForm=\"ngForm\">\n          <div>\n            <input name=\"name\" [(ngModel)]=\"wishObj.name\" placeholder=\"Your Name\" required/>\n          </div>\n          <div style=\"margin-top: 75px;\">\n              <input name=\"message\" [(ngModel)]=\"wishObj.location\" placeholder=\"Your Location\" required/>\n          </div>\n          <div style=\"margin-top: 75px;\">\n              <input name=\"email\" [(ngModel)]=\"wishObj.email\" placeholder=\"Your Email\"/>\n          </div>\n          <div style=\"margin-top: 75px;\">\n              <textarea name=\"message\" [(ngModel)]=\"wishObj.message\" placeholder=\"Your Message\" required></textarea>\n            </div>\n\n            <div style=\"margin-top: 75px; text-align: center;    padding-bottom: 25%;\">\n              <button type=\"submit\" id=\"wish-button\">Wish the lovely couple</button>\n            </div>\n            \n        </form>\n\n      </div>\n      <div  *ngIf=\"!showForm && showConfirmMsg\" style=\"margin-left: 25%; margin-right: 25%;\">\n          <h1 class=\"wish-style\" id=\"word\">Thank you for writing in Aaron and Diya's wedding guest book! If you would like to make some changes, tap on <a (click)=\"showForm=true;\">Edit</a></h1>\n      </div>\n    \n       <!--  \n      <div >\n          <div class=\"container\">\n              <h1></h1>\n              <form (ngSubmit)=\"guestForm.form.valid && onSubmit()\" #guestForm=\"ngForm\">\n                <div class=\"form-group\">\n                  <label for=\"name\">Name</label>\n                  <input name=\"name\" [(ngModel)]=\"wishObj.name\" type=\"text\" class=\"form-control\" id=\"name\" required #name=\"ngModel\">\n                  \n                </div>\n                <div class=\"form-group\">\n                  <label for=\"alterEgo\">Message</label>\n                  <input name=\"message\" [(ngModel)]=\"wishObj.Message\" type=\"text\" class=\"form-control\" id=\"alterEgo\">\n                </div>\n          \n                <button type=\"submit\" class=\"btn btn-success\">post</button>\n          \n              </form>\n          </div>\n    \n      </div>\n      -->\n\n</div>\n\n  "

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


var GuestBookComponent = /** @class */ (function () {
    function GuestBookComponent() {
        this.showForm = true;
        this.showConfirmMsg = false;
        this.wishObj = {};
    }
    GuestBookComponent.prototype.ngOnInit = function () {
    };
    GuestBookComponent.prototype.onSubmit = function () {
        var _this = this;
        this.showForm = false;
        this.showConfirmMsg = true;
        setTimeout(function () {
            _this.showForm = false;
            _this.showConfirmMsg = false;
            $("#word").text(_this.wishObj.message);
        }, 30000);
    };
    GuestBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-guest-book',
            template: __webpack_require__(/*! ./guest-book.component.html */ "./src/app/widget-modules/guest-book/guest-book.component.html"),
            styles: [__webpack_require__(/*! ./guest-book.component.css */ "./src/app/widget-modules/guest-book/guest-book.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = ".blurry {\n    background: none;\n    color: white;\n    border: none;\n}\n.blurrer {\n    height: 68px;\n    top: -10px;\n    left: -10px;\n    right: -10px;\n    position: absolute;\n    overflow: hidden;\n    -webkit-filter: blur(28px);\n    -moz-filter: blur(10px);\n    -o-filter: blur(10px);\n    -ms-filter: blur(10px);\n    background-size: cover;\n}\n.nav-container {\n    height: 68px;\n    width: 100%;\n    -webkit-filter: blur(50px);\n            filter: blur(50px);\n    background-position: top;\n    position: fixed;\n}\n.nav-flex {\n  width: 100%;\n  display: -webkit-flex; /* Safari */\n  -webkit-justify-content: center; /* Safari 6.1+ */\n  display: flex;\n  justify-content: center;\n}\n.nav-items-flex {\n    font-family: Playfair Display, Regular;\n    font-size: 20px;\n    line-height: 27px;\n    color: #1D1D1D;\n    padding: 0px 3.083vw;\n    cursor: pointer;\n    z-index: 1000;\n}\n.nav-items-flex-active {\n    font-family: Playfair Display, Bold;\n    font-weight: bold;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvbmF2aWdhdGlvbi9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtDQUMxQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWiwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQkFBZ0I7Q0FDbkI7QUFDRDtFQUNFLFlBQVk7RUFDWixzQkFBc0IsQ0FBQyxZQUFZO0VBQ25DLGdDQUFnQyxDQUFDLGlCQUFpQjtFQUNsRCxjQUFjO0VBQ2Qsd0JBQXdCO0NBQ3pCO0FBQ0Q7SUFDSSx1Q0FBdUM7SUFDdkMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCOztDQUVyQiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldC1tb2R1bGVzL25hdmlnYXRpb24vbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmx1cnJ5IHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4uYmx1cnJlciB7XG4gICAgaGVpZ2h0OiA2OHB4O1xuICAgIHRvcDogLTEwcHg7XG4gICAgbGVmdDogLTEwcHg7XG4gICAgcmlnaHQ6IC0xMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDI4cHgpO1xuICAgIC1tb3otZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgIC1vLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAtbXMtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ubmF2LWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA2OHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZpbHRlcjogYmx1cig1MHB4KTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG4gICAgcG9zaXRpb246IGZpeGVkO1xufVxuLm5hdi1mbGV4IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDsgLyogU2FmYXJpICovXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIFNhZmFyaSA2LjErICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm5hdi1pdGVtcy1mbGV4IHtcbiAgICBmb250LWZhbWlseTogUGxheWZhaXIgRGlzcGxheSwgUmVndWxhcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgY29sb3I6ICMxRDFEMUQ7XG4gICAgcGFkZGluZzogMHB4IDMuMDgzdnc7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHotaW5kZXg6IDEwMDA7XG59XG4ubmF2LWl0ZW1zLWZsZXgtYWN0aXZlIHtcbiAgICBmb250LWZhbWlseTogUGxheWZhaXIgRGlzcGxheSwgQm9sZDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/widget-modules/navigation/nav-bar/nav-bar.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/widget-modules/navigation/nav-bar/nav-bar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n <nav style=\"height:68px\"  class=\"navbar fixed-top bg-white\">\n        <div [ngStyle]=\"{'background-image':'url(' +imageUrl+ ')'}\" class=\"nav-container\"></div>\n\n       <!-- <a class=\"navbar-item\" >SOUND ON</a> -->\n       <div class=\"nav-flex\">  \n           <div class=\"nav-items-flex nav-items-flex-active\" ><a style=\"color: inherit;text-decoration: none\"  [routerLinkActiveOptions]=\"{ exact: true }\"  routerLink=\"/home\" routerLinkActive=\"active\">HOME</a></div>\n           <div class=\"nav-items-flex\"><a href=\"#album\" (click)=\"sendGA()\" style=\"color: inherit;text-decoration: none\" routerLink=\"/home\"  [routerLinkActiveOptions]=\"{ exact: true }\" [fragment]=\"'album'\" routerLinkActive=\"active\" >ALBUMS</a></div>\n           <div class=\"nav-items-flex\"><a href=\"#guestbook\" (click)=\"sendGA()\" style=\"color: inherit;text-decoration: none\"  routerLink=\"/home\" [routerLinkActiveOptions]=\"{ exact: true }\"   [fragment]=\"'guestbook'\" routerLinkActive=\"active\">GUEST BOOK</a></div>\n           <div class=\"nav-items-flex\"><a  (click)=\"sendGA()\" style=\"color: inherit;text-decoration: none\" >SHARE</a></div>\n            \n       </div>\n        <!-- <ul class=\"navbar-nav\">\n            <li class=\"nav-item\">\n                <a routerLink=\"/home\" routerLinkActive=\"active\" class=\"nav-item \">HOME</a>\n            </li>\n            <!-- <li class=\"nav-item\">\n                    <a routerLink=\"/home\"  [fragment]=\"'guestbook'\" routerLinkActive=\"active\"  class=\"nav-item \">Guest book</a>\n            </li> -->\n            <!-- <li routerLink=\"/guest-book\" class=\"nav-item\">\n                <a class=\"nav-item \">DIGITAL GUEST BOOK</a>\n            </li> -->\n            <!-- <li class=\"nav-item\">\n                <a class=\"nav-item \">PHOTOS</a>\n            </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-item \">CONTACT US</a>\n          </li> \n        </ul> -->\n    </nav>\n     \n\n</div>\n\n\n\n"

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

module.exports = "<div >\n         <div *ngFor=\"let event of weddingEventList;index as i\" [ngClass]=\"event.type === 'large' ? 'event-big-card-conatiner' : 'event-small-card-conatiner'\" (click)=\"fetchAlbum(event.action)\">\n                                    <div  *ngIf=\"event.type === 'large'\" class=\"event-large-card\">\n                                             <img style=\"max-height: inherit;width: 100%\" [src]=\"event.background\"/>\n                                            <div class=\"event-label\">{{event.title}}</div>\n                                              \n                                    </div>\n                                    <div *ngIf=\"event.type !== 'large'\" class=\"event-small-card\" [ngClass]=\"(i+1) % 2 !== 0 ? 'small-card-left-padding' : 'small-card-right-padding'\">\n                                            <img style=\"max-height: inherit;width: 100%\" [src]=\"event.background\"/>\n                                                    <div class=\"event-label\">{{event.title}}</div>\n                                     </div>\n        </div>\n\n\n\n                        \n        <div id=\"bottom-mandala\" class=\"\">\n                        <img style=\"width:68vw\" src=\"assets/mandala-bottom.png\"/>\n         </div>\n  <!-- <div *ngFor=\"let eventList of weddingEventList;index as i\">\n            <div [ngClass]=\"i === 0 ? 'event-big-card-conatiner' : 'event-small-card-conatiner'\" (click)=\"fetchAlbum(event.action)\" *ngFor=\"let event of eventList.row;index as j\">\n                <div  *ngIf=\"i === 0\" class=\"event-large-card\">\n                         <img style=\"max-height: inherit;width: 100%\" [src]=\"event.backgroundImage\"/>\n                        <div class=\"event-label\">{{event.name}}</div>\n                          \n                </div>\n                <div *ngIf=\"i === 1\" class=\"event-small-card\" [ngClass]=\"(j+1) % 2 !== 0 ? 'small-card-right-padding' : 'small-card-left-padding'\">\n                        <img style=\"max-height: inherit;width: 100%\" [src]=\"event.backgroundImage\"/>\n                                <div class=\"event-label\">{{event.name}}</div>\n                 </div>\n            </div>\n    </div> -->\n    \n    <!-- <div *ngIf=\"albumOverviewData?.data?.albumItems?.length>0\">\n        <app-albums [albumArray] =\"albumOverviewData?.data?.albumItems\"></app-albums>\n    </div>\n    <div *ngIf=\"albumOverviewData?.data?.albumItems?.length>0\">\n            <app-albums [albumArray] =\"albumOverviewData?.data?.albumItems\"></app-albums>\n        </div> -->\n</div>"

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

module.exports = ".key-photo {\n    width: 100%;\n    height: 100%;\n    background-repeat: no-repeat;\n    position: fixed;\n    background-size: cover;\n    z-index: -10;\n}\n#bg-image{\n   width: 100%\n}\n.parent-container {\n    position: relative;\n    top:900px;\n}\n.couple-container {\n    /* min-height: 2100px; */\n    background-color: #E4E0DD;\n    width: 100%;\n    height:1000px;\n}\n.container-fluid-nomax {\n\twidth: 100%;\n    margin-right: auto;\n    margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUloQix1QkFBdUI7SUFDdkIsYUFBYTtDQUNoQjtBQUNEO0dBQ0csV0FBVztDQUNiO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtDQUNiO0FBQ0Q7SUFDSSx5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixjQUFjO0NBQ2pCO0FBQ0Q7Q0FDQyxZQUFZO0lBQ1QsbUJBQW1CO0lBQ25CLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIua2V5LXBob3RvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgei1pbmRleDogLTEwO1xufVxuI2JnLWltYWdle1xuICAgd2lkdGg6IDEwMCVcbn1cbi5wYXJlbnQtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOjkwMHB4O1xufVxuLmNvdXBsZS1jb250YWluZXIge1xuICAgIC8qIG1pbi1oZWlnaHQ6IDIxMDBweDsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRFMEREO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDoxMDAwcHg7XG59XG4uY29udGFpbmVyLWZsdWlkLW5vbWF4IHtcblx0d2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/widgets/home/home.component.html":
/*!**************************************************!*\
  !*** ./src/app/widgets/home/home.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n    <div style=\"height: 68px\" class=\"col col-md-12 col-lg-12\">\n            <app-nav-bar  [imageUrl]=\"wedddingOverviewData?.data?.welcome\"></app-nav-bar>\n    </div>\n   <div  class=\"col-sm-12 col-xs-12 col-12 col-md-12 col-lg-12 col-xl-12\" style=\"width: 100%;\">\n        <!-- <div  [ngStyle]=\"{'background-image':'url(' +wedddingOverviewData.data.welcome+ ')'}\" class=\"key-photo\"> </div> -->\n        <div class=\"key-photo\">\n                <!-- <div  [ngStyle]=\"{'background-image':'url(' +wedddingOverviewData.data.welcome+ ')'}\" class=\"key-photo\"> </div>  -->\n                <!-- <img style=\"width: 100%\" class=\"img-fluid\" src=\"assets/key-photo.png\"> -->\n            <img id=\"bg-image\"  class=\"img-fluid\" [src]=\"wedddingOverviewData?.data?.welcome\">\n        </div>\n      <div class=\"parent-container\"  >\n                <div  class=\"row\">\n                    <div class=\"col-md-12 col-lg-12 col-xl-12\" >\n                        <div   class=\"couple-container\">\n                                <app-container [weddingData]=\"wedddingOverviewData\"></app-container>\n                        </div>\n                                \n                        </div>\n                       \n                </div>\n                 <div class=\"row\">\n                  \n                            <div style=\"min-height: 1000px;background-color: #F6F2EF;width: 100%;position: relative;\">\n                            <app-guest-book></app-guest-book>\n                            <app-footer></app-footer>\n                    </div>\n                        \n                </div> \n            </div>  \n    </div> \n   \n \n<div>\n     \n</div>\n      <!-- <div style=\"min-height: 1000px;background-color: #F6F2EF;width: 100%;position: relative;top: 2900px\">  -->\n      <!-- <app-nav-bar></app-nav-bar>\n            <app-couplestory [couplestory] = \"wedddingOverviewData?.data?.coupleStory\"></app-couplestory>\n            <app-wedding-events [weddingDate] = \"wedddingOverviewData?.data?.dateOfWedding\" \n            [weddingEventList] = \"wedddingOverviewData?.data?.eventList\"></app-wedding-events>\n            <app-guest-book></app-guest-book>\n           -->\n"

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
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.fetchWedOverview();
        window.onload = (function () {
            /*parent container deciding top position*/
            $('.parent-container[_ngcontent-c1]').css({ 'top': $('#bg-image').height() });
            /*couple container deciding height*/
            $('.couple-container[_ngcontent-c1]').height($('.con-event-conatiner[_ngcontent-c3]').height() +
                $('#marriage-date-summary[_ngcontent-c6]').height() + $('#con-album-label[_ngcontent-c3]').height() +
                $('#bottom-mandala[_ngcontent-c7]').height() - 95);
        });
        $(window).resize(function () {
            /*parent container deciding top position*/
            $('.parent-container[_ngcontent-c1]').css({ 'top': $('#bg-image').height() });
            /*couple container deciding height*/
            $('.couple-container[_ngcontent-c1]').height($('.con-event-conatiner[_ngcontent-c3]').height() +
                $('#marriage-date-summary[_ngcontent-c6]').height() + $('#con-album-label[_ngcontent-c3]').height() +
                $('#bottom-mandala[_ngcontent-c7]').height() - 95);
        });
    };
    HomeComponent.prototype.fetchWedOverview = function () {
        var _this = this;
        this.wedOverviewService.getWeddingOverview().subscribe(function (data) {
            _this.wedddingOverviewData = data;
            _this.setGuestBookWishes(data);
        });
    };
    HomeComponent.prototype.setGuestBookWishes = function (data) {
        var count = 0;
        $("#word").text(data.data.guestWishes[0].message);
        setInterval(function () {
            count++;
            $("#word").fadeOut(400, function () {
                $(this).text(data.data.guestWishes[count % data.data.guestWishes.length].message).fadeIn(400);
            });
        }, 5000);
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

module.exports = __webpack_require__(/*! /Users/abhi/Documents/Workspace/Project/DA/DA-F/wedding-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map