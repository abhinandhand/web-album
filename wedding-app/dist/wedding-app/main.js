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
/* harmony import */ var _widgets_albums_albums_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widgets/albums/albums.component */ "./src/app/widgets/albums/albums.component.ts");





var routes = [{ path: '', component: _widgets_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        children: [
            { path: 'albums', component: _widgets_albums_albums_component__WEBPACK_IMPORTED_MODULE_4__["AlbumsComponent"], data: { url: '', name: '', c: '', id: '' } },
        ] }, { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', component: _widgets_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
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

module.exports = ".container-fluid-nomax {\n\tpadding: 0;\n    margin-right: auto;\n    margin-left: auto;\n}\n\n.sample-flipbook{\n\twidth:400px;\n\theight:200px;\n\ttransition:margin-left 0.2s;\n}\n\n.sample-flipbook .page{\n\twidth:200px;\n\theight:200px;\n\tbackground-color:white;\n\tline-height:300px;\n\tfont-size:20px;\n}\n\n.sample-flipbook .page-wrapper{\n\t-webkit-perspective:2000px;\n\t-ms-perspective:2000px;\n\t-o-perspective:2000px;\n\tperspective:2000px;\n}\n\n.sample-flipbook .hard{\n\tbackground:#ccc !important;\n\tcolor:#333;\n\t-o-box-shadow:inset 0 0 5px #666;\n\t-ms-box-shadow:inset 0 0 5px #666;\n\tbox-shadow:inset 0 0 5px #666;\n\tfont-weight:bold;\n}\n\n.sample-flipbook .odd{\n\tbackground:-webkit-gradient(linear, right top, left top, color-stop(0.95, #FFF), color-stop(1, #DADADA));\n\tbackground-image:linear-gradient(right, #FFF 95%, #C4C4C4 100%);\n\t-o-box-shadow:inset 0 0 5px #666;\n\t-ms-box-shadow:inset 0 0 5px #666;\n\tbox-shadow:inset 0 0 5px #666;\n\t\n}\n\n.sample-flipbook .even{\n\tbackground:-webkit-gradient(linear, left top, right top, color-stop(0.95, #fff), color-stop(1, #dadada));\n\tbackground-image:linear-gradient(left, #fff 95%, #dadada 100%);\n\t-o-box-shadow:inset 0 0 5px #666;\n\t-ms-box-shadow:inset 0 0 5px #666;\n\tbox-shadow:inset 0 0 5px #666;\n}\n\n/****app*/\n\n.fit-top-container {\n    width: 1000px;\n    height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxXQUFXO0lBQ1IsbUJBQW1CO0lBQ25CLGtCQUFrQjtDQUNyQjs7QUFFRDtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBS2IsNEJBQTRCO0NBQzVCOztBQUVEO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZjs7QUFFRDtDQUNDLDJCQUEyQjtDQUUzQix1QkFBdUI7Q0FDdkIsc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQjs7QUFFRDtDQUNDLDJCQUEyQjtDQUMzQixXQUFXO0NBR1gsaUNBQWlDO0NBQ2pDLGtDQUFrQztDQUNsQyw4QkFBOEI7Q0FDOUIsaUJBQWlCO0NBQ2pCOztBQUVEO0NBQ0MseUdBQXlHO0NBS3pHLGdFQUFnRTtDQUdoRSxpQ0FBaUM7Q0FDakMsa0NBQWtDO0NBQ2xDLDhCQUE4Qjs7Q0FFOUI7O0FBRUQ7Q0FDQyx5R0FBeUc7Q0FLekcsK0RBQStEO0NBRy9ELGlDQUFpQztDQUNqQyxrQ0FBa0M7Q0FDbEMsOEJBQThCO0NBQzlCOztBQUVELFVBQVU7O0FBQ1Y7SUFDSSxjQUFjO0lBQ2QsY0FBYztDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZC1ub21heCB7XG5cdHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uc2FtcGxlLWZsaXBib29re1xuXHR3aWR0aDo0MDBweDtcblx0aGVpZ2h0OjIwMHB4O1xuXHQtd2Via2l0LXRyYW5zaXRpb246bWFyZ2luLWxlZnQgMC4ycztcblx0LW1vei10cmFuc2l0aW9uOm1hcmdpbi1sZWZ0IDAuMnM7XG5cdC1tcy10cmFuc2l0aW9uOm1hcmdpbi1sZWZ0IDAuMnM7XG5cdC1vLXRyYW5zaXRpb246bWFyZ2luLWxlZnQgMC4ycztcblx0dHJhbnNpdGlvbjptYXJnaW4tbGVmdCAwLjJzO1xufVxuXG4uc2FtcGxlLWZsaXBib29rIC5wYWdle1xuXHR3aWR0aDoyMDBweDtcblx0aGVpZ2h0OjIwMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuXHRsaW5lLWhlaWdodDozMDBweDtcblx0Zm9udC1zaXplOjIwcHg7XG59XG5cbi5zYW1wbGUtZmxpcGJvb2sgLnBhZ2Utd3JhcHBlcntcblx0LXdlYmtpdC1wZXJzcGVjdGl2ZToyMDAwcHg7XG5cdC1tb3otcGVyc3BlY3RpdmU6MjAwMHB4O1xuXHQtbXMtcGVyc3BlY3RpdmU6MjAwMHB4O1xuXHQtby1wZXJzcGVjdGl2ZToyMDAwcHg7XG5cdHBlcnNwZWN0aXZlOjIwMDBweDtcbn1cblxuLnNhbXBsZS1mbGlwYm9vayAuaGFyZHtcblx0YmFja2dyb3VuZDojY2NjICFpbXBvcnRhbnQ7XG5cdGNvbG9yOiMzMzM7XG5cdC13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XG5cdC1tb3otYm94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XG5cdC1vLWJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xuXHQtbXMtYm94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XG5cdGJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xuXHRmb250LXdlaWdodDpib2xkO1xufVxuXG4uc2FtcGxlLWZsaXBib29rIC5vZGR7XG5cdGJhY2tncm91bmQ6LXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMC45NSwgI0ZGRiksIGNvbG9yLXN0b3AoMSwgI0RBREFEQSkpO1xuXHRiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJpZ2h0LCAjRkZGIDk1JSwgI0M0QzRDNCAxMDAlKTtcblx0YmFja2dyb3VuZC1pbWFnZTotbW96LWxpbmVhci1ncmFkaWVudChyaWdodCwgI0ZGRiA5NSUsICNDNEM0QzQgMTAwJSk7XG5cdGJhY2tncm91bmQtaW1hZ2U6LW1zLWxpbmVhci1ncmFkaWVudChyaWdodCwgI0ZGRiA5NSUsICNDNEM0QzQgMTAwJSk7XG5cdGJhY2tncm91bmQtaW1hZ2U6LW8tbGluZWFyLWdyYWRpZW50KHJpZ2h0LCAjRkZGIDk1JSwgI0M0QzRDNCAxMDAlKTtcblx0YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQocmlnaHQsICNGRkYgOTUlLCAjQzRDNEM0IDEwMCUpO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xuXHQtbW96LWJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xuXHQtby1ib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2Njtcblx0LW1zLWJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xuXHRib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2Njtcblx0XG59XG5cbi5zYW1wbGUtZmxpcGJvb2sgLmV2ZW57XG5cdGJhY2tncm91bmQ6LXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMC45NSwgI2ZmZiksIGNvbG9yLXN0b3AoMSwgI2RhZGFkYSkpO1xuXHRiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICNmZmYgOTUlLCAjZGFkYWRhIDEwMCUpO1xuXHRiYWNrZ3JvdW5kLWltYWdlOi1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICNmZmYgOTUlLCAjZGFkYWRhIDEwMCUpO1xuXHRiYWNrZ3JvdW5kLWltYWdlOi1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgI2ZmZiA5NSUsICNkYWRhZGEgMTAwJSk7XG5cdGJhY2tncm91bmQtaW1hZ2U6LW8tbGluZWFyLWdyYWRpZW50KGxlZnQsICNmZmYgOTUlLCAjZGFkYWRhIDEwMCUpO1xuXHRiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmIDk1JSwgI2RhZGFkYSAxMDAlKTtcblx0LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2Njtcblx0LW1vei1ib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2Njtcblx0LW8tYm94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XG5cdC1tcy1ib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2Njtcblx0Ym94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XG59XG5cbi8qKioqYXBwKi9cbi5maXQtdG9wLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMDBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div>\n      <!-- <div class=\"fit-top-container\" [ngStyle]=\"{'background':'url(' +wedddingOverviewData.data1.coupleStory.backgroundImage+ ')'}\">\n       !-->\n      <div id=\"home\" class=\"target\">  \n        <router-outlet></router-outlet> \n      </div>\n    </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n<!--The content below is only a placeholder and can be replaced.-->\n<!-- \n<div id=\"flipbook\" class=\"sample-flipbook\">\n    <div class=\"hard\"> Turn.js </div>\n    <div class=\"hard\"></div>\n    <div> Page 1 </div>\n    <div> Page 2 </div>\n    <div> Page 3 </div>\n    <div> Page 4 </div>\n    <div class=\"hard\"></div>\n    <div class=\"hard\"></div>\n  </div> -->\n\n  <!-- <div id=\"flipbook\" class=\"sample-flipbook\">\n    <div style=\"background-image:url(assets/pages/1.jpg)\"></div>\n\t\t\t<div (mousedown)=\"sendPhotoClickEvent()\" style=\"background-image:url(assets/pages/2.jpg)\"></div>\n\t\t\t<div style=\"background-image:url(assets/pages/3.jpg)\"></div>\n\t\t\t<div style=\"background-image:url(assets/pages/4.jpg)\"></div>\n\t\t\t<div style=\"background-image:url(assets/pages/5.jpg)\"></div>\n  </div> -->\n\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _widgets_albums_albums_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./widgets/albums/albums.component */ "./src/app/widgets/albums/albums.component.ts");
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
                _widgets_albums_albums_component__WEBPACK_IMPORTED_MODULE_11__["AlbumsComponent"],
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
        // endpoint = 'https://gist.githubusercontent.com/SachinBharadwaj/18001dbea2aaacb97ac6ec23b3585d43/raw/af9015cbb33636b5830bf2e4dff7d339793839b8/index.json';
        this.endpoint = 'http://ec2-52-66-182-119.ap-south-1.compute.amazonaws.com:8080/';
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
        // return this.http.get(this.endpoint);
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

/***/ "./src/app/widget-modules/comments/comments.component.css":
/*!****************************************************************!*\
  !*** ./src/app/widget-modules/comments/comments.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".j{\n   color: aliceblue; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvY29tbWVudHMvY29tbWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLGlCQUFpQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldC1tb2R1bGVzL2NvbW1lbnRzL2NvbW1lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuantcbiAgIGNvbG9yOiBhbGljZWJsdWU7IFxufSJdfQ== */"

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

module.exports = ".img-mandala{\n    width: 18vw;\n    height: 609.75px;\n    opacity: .81;\n}\n.top-left-mandala {\n    top: 0px;\n    position: absolute;\n    left: 0%;\n}\n.top-right-mandala {\n    top: 0%;\n    position: absolute;\n    right: 0px;\n    -webkit-transform: scaleX(-1);\n    transform: scaleX(-1);\n}\n.middle-left-mandala {\n    top: 15%;\n    position: absolute;\n    left: 0;\n}\n.middle-right-mandala {\n    top: 15%;\n    position: absolute;\n    right: 0px;\n    -webkit-transform: scaleX(-1);\n    transform: scaleX(-1);\n}\n.middle-left2-mandala {\n    top: 30%;\n    position: absolute;\n    left: 0;\n}\n.middle-right2-mandala {\n    top: 30%;\n    position: absolute;\n    right: 0px;\n    -webkit-transform: scaleX(-1);\n    transform: scaleX(-1);\n}\n.middle-left3-mandala {\n    top: 45%;\n    position: absolute;\n    left: 0;\n}\n.middle-right3-mandala {\n    top: 45%;\n    position: absolute;\n    right: 0px;\n    -webkit-transform: scaleX(-1);\n    transform: scaleX(-1);\n}\n.bottom-img-mandala{\n    width: 335px;\n    height: 960px;\n    opacity: .81;\n}\n.bottom-middle-mandala {\n    bottom: 0px;\n    position: absolute;\n    left: auto;\n    right: auto;\n    -webkit-transform: scaleX(-1);\n    transform: rotate(-90deg);\n}\n#con-marriage-info{\n    width: 100%;\n    /* background-color: rgba(0,0,0, 0.4); */\n    /* position: absolute; */\n    opacity: 0.8;\n    /* padding: 41px 0px 41px 0; */\n}\n#con-event-info {\n    height: 385PX;\n    background-color: #FFFF;\n    background-color: rgba(0,0,0, 0.4);\n    position: absolute;\n    left: 23%;\n    right: 23%;\n    top: -188px;\n    opacity: 0.8;\n\n}\n.middle-container {\n    margin-left: 21.666%;\n    margin-right: 21.666%;\n}\n#con-album-label {\n    font-family: Playfair Display, Regular;\n    font-size: 3.4895vw;\n    text-align: center;\n    word-spacing: 10;\n    line-height: 67px;\n    color: #445563;\n    opacity: 1;\n    margin-top: 20px;\n}\n.con-event-container {\n    top: 600px;\n    width: 100%;\n    /* min-height: 200px; */\n}\n.hr-text {\n    line-height: 1em;\n    position: relative;\n    outline: 0;\n    border: 0;\n    text-align: center;\n    height: 1.5em;\n    font-family: Playfair Display, Regular;\n    font-size: 3vw;\n    text-align: center;\n    color: #445563;\n    letter-spacing: 4px;\n  }\n.hr-text::before{\n    content: '';\n    background: linear-gradient(to right, transparent, #818078, transparent);\n    position: absolute;\n    left: 0;\n    top : 50%;\n    width: 100%;\n    height: 2px;\n\n  }\n.hr-text::after{\n    content: attr(data-content);\n    position: relative;\n    display: inline-block;\n    padding: 0 .5em;\n    line-height: 1.5em;\n    background-color: #e4e0dc;\n}\n/* .bottom-img-mandala{\n    width: 59vw;\n    height: 216px;\n    opacity: .81;\n} */\n/* \n  ##Device = Low Resolution Tablets, Mobiles (Landscape)\n  ##Screen = B/w 481px to 767px\n*/\n@media (min-width: 481px) and (max-width: 812px) {\n  \n    .middle-container {\n        width: 100%;\n        top: -116px;\n        margin-left: 0%;\n        margin-right: 0%;\n        \n    }\n    #con-marriage-info{\n        left: 10.6666%;\n        right: 10.666%;\n        width: auto;\n    }\n    #con-album-label {\n        top: 282px;\n    }\n    .hr-text{\n        font-size: 5.4895vw;\n        letter-spacing: 3px;\n    }\n    \n    .con-album-label-hr{\n        width: 0%;\n    }\n    .con-event-container {\n        top: 383px;\n        background-color: #E4E0DD;\n    }\n  }\n/*Portrait Mobile */\n@media (min-width: 320px) and (max-width: 480px) {\n    .middle-container {\n        top: -88px;\n        width: 100%;\n        margin-left: 0%;\n        margin-right: 0%;\n    }\n    #con-marriage-info{\n        left: 10.6666%;\n        right: 10.666%;\n        width: auto;\n    }\n\n    #con-album-label {\n        top: 222px;\n    }\n    .hr-text{\n        font-size: 5.4895vw;\n        letter-spacing: 3px;\n    }\n\n    .con-album-label-hr{\n        width: 0%;\n    }\n    .con-event-container {\n        top: 300px;\n        background-color: #E4E0DD;\n    }\n  }\n\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLFNBQVM7Q0FDWjtBQUNEO0lBQ0ksUUFBUTtJQUNSLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLHNCQUFzQjtDQUN6QjtBQUNEO0lBQ0ksU0FBUztJQUNULG1CQUFtQjtJQUNuQixRQUFRO0NBQ1g7QUFDRDtJQUNJLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixzQkFBc0I7Q0FDekI7QUFDRDtJQUNJLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsUUFBUTtDQUNYO0FBQ0Q7SUFDSSxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsc0JBQXNCO0NBQ3pCO0FBQ0Q7SUFDSSxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLFFBQVE7Q0FDWDtBQUNEO0lBQ0ksU0FBUztJQUNULG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLHNCQUFzQjtDQUN6QjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLDBCQUEwQjtDQUM3QjtBQUNEO0lBQ0ksWUFBWTtJQUNaLHlDQUF5QztJQUN6Qyx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLCtCQUErQjtDQUNsQztBQUNEO0lBQ0ksY0FBYztJQUNkLHdCQUF3QjtJQUN4QixtQ0FBbUM7SUFDbkMsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7O0NBRWhCO0FBQ0Q7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0NBQ3pCO0FBQ0Q7SUFDSSx1Q0FBdUM7SUFDdkMsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHdCQUF3QjtDQUMzQjtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsdUNBQXVDO0lBQ3ZDLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG9CQUFvQjtHQUNyQjtBQUNEO0lBQ0UsWUFBWTtJQUNaLHlFQUF5RTtJQUN6RSxtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTs7R0FFYjtBQUNEO0lBQ0UsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQiwwQkFBMEI7Q0FDN0I7QUFDRDs7OztJQUlJO0FBR0Y7OztFQUdBO0FBRUY7O0lBRUk7UUFDSSxZQUFZO1FBQ1osWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixpQkFBaUI7O0tBRXBCO0lBQ0Q7UUFDSSxlQUFlO1FBQ2YsZUFBZTtRQUNmLFlBQVk7S0FDZjtJQUNEO1FBQ0ksV0FBVztLQUNkO0lBQ0Q7UUFDSSxvQkFBb0I7UUFDcEIsb0JBQW9CO0tBQ3ZCOztJQUVEO1FBQ0ksVUFBVTtLQUNiO0lBQ0Q7UUFDSSxXQUFXO1FBQ1gsMEJBQTBCO0tBQzdCO0dBQ0Y7QUFFSCxvQkFBb0I7QUFDcEI7SUFDSTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGlCQUFpQjtLQUNwQjtJQUNEO1FBQ0ksZUFBZTtRQUNmLGVBQWU7UUFDZixZQUFZO0tBQ2Y7O0lBRUQ7UUFDSSxXQUFXO0tBQ2Q7SUFDRDtRQUNJLG9CQUFvQjtRQUNwQixvQkFBb0I7S0FDdkI7O0lBRUQ7UUFDSSxVQUFVO0tBQ2I7SUFDRDtRQUNJLFdBQVc7UUFDWCwwQkFBMEI7S0FDN0I7R0FDRiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldC1tb2R1bGVzL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctbWFuZGFsYXtcbiAgICB3aWR0aDogMTh2dztcbiAgICBoZWlnaHQ6IDYwOS43NXB4O1xuICAgIG9wYWNpdHk6IC44MTtcbn1cbi50b3AtbGVmdC1tYW5kYWxhIHtcbiAgICB0b3A6IDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMCU7XG59XG4udG9wLXJpZ2h0LW1hbmRhbGEge1xuICAgIHRvcDogMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xufVxuLm1pZGRsZS1sZWZ0LW1hbmRhbGEge1xuICAgIHRvcDogMTUlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xufVxuLm1pZGRsZS1yaWdodC1tYW5kYWxhIHtcbiAgICB0b3A6IDE1JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDBweDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG59XG4ubWlkZGxlLWxlZnQyLW1hbmRhbGEge1xuICAgIHRvcDogMzAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xufVxuLm1pZGRsZS1yaWdodDItbWFuZGFsYSB7XG4gICAgdG9wOiAzMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xufVxuLm1pZGRsZS1sZWZ0My1tYW5kYWxhIHtcbiAgICB0b3A6IDQ1JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbn1cbi5taWRkbGUtcmlnaHQzLW1hbmRhbGEge1xuICAgIHRvcDogNDUlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMHB4O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbn1cbi5ib3R0b20taW1nLW1hbmRhbGF7XG4gICAgd2lkdGg6IDMzNXB4O1xuICAgIGhlaWdodDogOTYwcHg7XG4gICAgb3BhY2l0eTogLjgxO1xufVxuLmJvdHRvbS1taWRkbGUtbWFuZGFsYSB7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbn1cbiNjb24tbWFycmlhZ2UtaW5mb3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAwLjQpOyAqL1xuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgLyogcGFkZGluZzogNDFweCAwcHggNDFweCAwOyAqL1xufVxuI2Nvbi1ldmVudC1pbmZvIHtcbiAgICBoZWlnaHQ6IDM4NVBYO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsIDAuNCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDIzJTtcbiAgICByaWdodDogMjMlO1xuICAgIHRvcDogLTE4OHB4O1xuICAgIG9wYWNpdHk6IDAuODtcblxufVxuLm1pZGRsZS1jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAyMS42NjYlO1xuICAgIG1hcmdpbi1yaWdodDogMjEuNjY2JTtcbn1cbiNjb24tYWxidW0tbGFiZWwge1xuICAgIGZvbnQtZmFtaWx5OiBQbGF5ZmFpciBEaXNwbGF5LCBSZWd1bGFyO1xuICAgIGZvbnQtc2l6ZTogMy40ODk1dnc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdvcmQtc3BhY2luZzogMTA7XG4gICAgbGluZS1oZWlnaHQ6IDY3cHg7XG4gICAgY29sb3I6ICM0NDU1NjM7XG4gICAgb3BhY2l0eTogMTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmNvbi1ldmVudC1jb250YWluZXIge1xuICAgIHRvcDogNjAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogbWluLWhlaWdodDogMjAwcHg7ICovXG59XG4uaHItdGV4dCB7XG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgZm9udC1mYW1pbHk6IFBsYXlmYWlyIERpc3BsYXksIFJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiAzdnc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjNDQ1NTYzO1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIH1cbiAgLmhyLXRleHQ6OmJlZm9yZXtcbiAgICBjb250ZW50OiAnJztcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50LCAjODE4MDc4LCB0cmFuc3BhcmVudCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wIDogNTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMnB4O1xuXG4gIH1cbiAgLmhyLXRleHQ6OmFmdGVye1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1jb250ZW50KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDAgLjVlbTtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTBkYztcbn1cbi8qIC5ib3R0b20taW1nLW1hbmRhbGF7XG4gICAgd2lkdGg6IDU5dnc7XG4gICAgaGVpZ2h0OiAyMTZweDtcbiAgICBvcGFjaXR5OiAuODE7XG59ICovXG5cblxuICAvKiBcbiAgIyNEZXZpY2UgPSBMb3cgUmVzb2x1dGlvbiBUYWJsZXRzLCBNb2JpbGVzIChMYW5kc2NhcGUpXG4gICMjU2NyZWVuID0gQi93IDQ4MXB4IHRvIDc2N3B4XG4qL1xuXG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA4MTJweCkge1xuICBcbiAgICAubWlkZGxlLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0b3A6IC0xMTZweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAlO1xuICAgICAgICBcbiAgICB9XG4gICAgI2Nvbi1tYXJyaWFnZS1pbmZve1xuICAgICAgICBsZWZ0OiAxMC42NjY2JTtcbiAgICAgICAgcmlnaHQ6IDEwLjY2NiU7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgIH1cbiAgICAjY29uLWFsYnVtLWxhYmVsIHtcbiAgICAgICAgdG9wOiAyODJweDtcbiAgICB9XG4gICAgLmhyLXRleHR7XG4gICAgICAgIGZvbnQtc2l6ZTogNS40ODk1dnc7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgfVxuICAgIFxuICAgIC5jb24tYWxidW0tbGFiZWwtaHJ7XG4gICAgICAgIHdpZHRoOiAwJTtcbiAgICB9XG4gICAgLmNvbi1ldmVudC1jb250YWluZXIge1xuICAgICAgICB0b3A6IDM4M3B4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRFMEREO1xuICAgIH1cbiAgfVxuXG4vKlBvcnRyYWl0IE1vYmlsZSAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAubWlkZGxlLWNvbnRhaW5lciB7XG4gICAgICAgIHRvcDogLTg4cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMCU7XG4gICAgfVxuICAgICNjb24tbWFycmlhZ2UtaW5mb3tcbiAgICAgICAgbGVmdDogMTAuNjY2NiU7XG4gICAgICAgIHJpZ2h0OiAxMC42NjYlO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICB9XG5cbiAgICAjY29uLWFsYnVtLWxhYmVsIHtcbiAgICAgICAgdG9wOiAyMjJweDtcbiAgICB9XG4gICAgLmhyLXRleHR7XG4gICAgICAgIGZvbnQtc2l6ZTogNS40ODk1dnc7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgfVxuXG4gICAgLmNvbi1hbGJ1bS1sYWJlbC1ocntcbiAgICAgICAgd2lkdGg6IDAlO1xuICAgIH1cbiAgICAuY29uLWV2ZW50LWNvbnRhaW5lciB7XG4gICAgICAgIHRvcDogMzAwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFNEUwREQ7XG4gICAgfVxuICB9XG5cbiAgIl19 */"

/***/ }),

/***/ "./src/app/widget-modules/container/container.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/widget-modules/container/container.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div style=\"padding-left: 0%;padding-right: 0%;\" class=\"middle-container\">\n    <div id=\"con-marriage-info\">\n      <app-couplestory [imageUrl]=\"weddingData?.data?.welcome\"></app-couplestory>\n    </div>\n    \n      <div id=\"con-album-label\">\n          <hr  class=\"hr-text\" data-content=\"ALBUMS\">\n        <!-- <img class=\"con-album-label-hr\" src=\"assets/rectangle.svg\" />\n        <span id=\"album\" style=\"padding-left: 20px;padding-right: 17px;\"\n          >ALBUMS</span>\n        <img\n          class=\"con-album-label-hr\"\n          style=\"transform: scale(-1);\"\n          src=\"assets/rectangle.svg\" /> -->\n      </div>\n    <div class=\"con-event-container\">\n        <app-wedding-events\n          [weddingEventList]=\"weddingData?.data?.album\"\n        ></app-wedding-events>\n      </div>\n   <div class=\"d-none d-sm-none d-md-none d-lg-block\">\n    <div class=\"top-left-mandala\">\n      <img class=\"img-mandala\" src=\"assets/mandala.png\" />\n    </div>\n    <div class=\"top-right-mandala\">\n      <img class=\"img-mandala\" src=\"assets/mandala.png\" />\n    </div>\n    <div class=\"middle-left-mandala\">\n      <img class=\"img-mandala\" src=\"assets/mandala.png\" />\n    </div>\n    <div class=\"middle-right-mandala\">\n      <img class=\"img-mandala\" src=\"assets/mandala.png\" />\n    </div>\n    <div class=\"middle-left2-mandala\">\n        <img class=\"img-mandala\" src=\"assets/mandala.png\" />\n      </div>\n      <div class=\"middle-right2-mandala\">\n        <img class=\"img-mandala\" src=\"assets/mandala.png\" />\n      </div>\n      <div class=\"middle-left3-mandala\">\n          <img class=\"img-mandala\" src=\"assets/mandala.png\" />\n        </div>\n        <div class=\"middle-right3-mandala\">\n          <img class=\"img-mandala\" src=\"assets/mandala.png\" />\n        </div>\n  </div>\n</div>\n\n\n"

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

module.exports = "#couple-name{\n    text-align: center;\n    font-family: Great Vibes, Regular;\n    /* font-size: 142px; */\n    font-size: 8.395vw;\n    line-height: 178px;\n    color: #9d4527c4;\n    /* color: #D0CECA; */\n    margin-top: 32px;\n    z-index: 200;\n    \n\n}\n.cp-bg{\n    width: 100%;\n    position: absolute;\n    height: 101%;\n    left: 0;\n}\n.cp-bg::before{\n    content: \"\";\n\tposition: absolute;\n\tbackground: inherit;\n\tz-index: 0;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbox-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);\n\t-webkit-filter: blur(27px);\n\t        filter: blur(27px);\n}\n#marriage-date {\n    text-align: center;\n    font-family: Playfair Display, Regular;\n    font-size: 60px;\n    line-height: 80px;\n    color: #303B44;\n}\n#marriage-date-summary{\n    text-align: center;\n    font-family: Great Vibes;\n    font-size: 52px;\n    line-height: 52px;\n    word-spacing: 10;\n    color: #303B44;\n\n}\n.couple-name-div{\n    align-items: center;\n    height: 210px;\n    display: flex;\n    justify-content: center;\n    position: relative;\n    position: absolute;\n    top: -210px;\n    left: 21.6666%;\n    right: 21.666%;\n}\n.couple-name-bg{\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: #526b53de;\n    position: absolute;\n    background-position: bottom;\n    z-index: -1;\n    /* -webkit-filter: blur(26px); */\n    /* filter: blur(26px); */\n}\n.duration{\n    font-size: inherit;\n}\n.couple-name-bg:before{\n    \n}\n.duration-summary {\n    height:210px;\n}\n/* \n  ##Device = Low Resolution Tablets, Mobiles (Landscape)\n  ##Screen = B/w 481px to 767px\n*/\n@media (min-width: 481px) and (max-width: 812px) {\n\n     #couple-name{\n        font-size: 13.395vw;\n        line-height: 0;\n        color: #9d45278a;\n        margin-top: 17px;\n       }\n       .couple-name-div{\n        position: relative;\n        top: 0px;\n        height: 106px;\n        left: 0px;\n        right: 0px;\n       }\n    \n\n       #marriage-date-summary{\n        font-size: 7vw;\n        line-height: 30px;\n       }\n       \n      #marriage-date {\n        font-size: 6.5vw;\n        line-height: 35px;\n      }\n      .duration-summary {\n        height: 116px;\n      }\n    \n    \n  }\n/* \n    ##Device = Most of the Smartphones Mobiles (Portrait)\n    ##Screen = B/w 320px to 479px\n  */\n@media (min-width: 320px) and (max-width: 480px) {\n    \n   #couple-name{\n    font-size: 13.395vw;\n    line-height: 0;\n    color: #9d45278a;\n    margin-top: 17px;\n   }\n   .couple-name-div{\n    position: relative;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    height: 106px;\n   }\n  \n\n   #marriage-date-summary{\n           font-size: 7vw;\n           line-height: 30px;\n       }\n    \n    #marriage-date {\n        font-size: 6vw;\n        line-height: 28px;\n      }\n\n      .duration-summary{\n        height: 89px;\n      }\n  }\n\n\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvY291cGxlc3RvcnkvY291cGxlc3RvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsYUFBYTs7O0NBR2hCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixRQUFRO0NBQ1g7QUFDRDtJQUNJLFlBQVk7Q0FDZixtQkFBbUI7Q0FDbkIsb0JBQW9CO0NBQ3BCLFdBQVc7Q0FDWCxPQUFPO0NBQ1AsUUFBUTtDQUNSLFNBQVM7Q0FDVCxVQUFVO0NBQ1YscURBQXFEO0NBQ3JELDJCQUFtQjtTQUFuQixtQkFBbUI7Q0FDbkI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQix1Q0FBdUM7SUFDdkMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7O0NBRWxCO0FBQ0Q7SUFDSSxvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLFFBQVE7SUFDUixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMseUJBQXlCO0NBQzVCO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDs7Q0FFQztBQUNEO0lBQ0ksYUFBYTtDQUNoQjtBQUVEOzs7RUFHRTtBQUVGOztLQUVLO1FBQ0csb0JBQW9CO1FBQ3BCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCO09BQ0Q7UUFDQyxtQkFBbUI7UUFDbkIsU0FBUztRQUNULGNBQWM7UUFDZCxVQUFVO1FBQ1YsV0FBVztRQUNYOzs7T0FHRDtRQUNDLGVBQWU7UUFDZixrQkFBa0I7UUFDbEI7O01BRUY7UUFDRSxpQkFBaUI7UUFDakIsa0JBQWtCO09BQ25CO01BQ0Q7UUFDRSxjQUFjO09BQ2Y7OztHQUdKO0FBRUQ7OztJQUdFO0FBRUY7O0dBRUM7SUFDQyxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakI7R0FDRDtJQUNDLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxjQUFjO0lBQ2Q7OztHQUdEO1dBQ1EsZUFBZTtXQUNmLGtCQUFrQjtRQUNyQjs7SUFFSjtRQUNJLGVBQWU7UUFDZixrQkFBa0I7T0FDbkI7O01BRUQ7UUFDRSxhQUFhO09BQ2Q7R0FDSiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldC1tb2R1bGVzL2NvdXBsZXN0b3J5L2NvdXBsZXN0b3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY291cGxlLW5hbWV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBHcmVhdCBWaWJlcywgUmVndWxhcjtcbiAgICAvKiBmb250LXNpemU6IDE0MnB4OyAqL1xuICAgIGZvbnQtc2l6ZTogOC4zOTV2dztcbiAgICBsaW5lLWhlaWdodDogMTc4cHg7XG4gICAgY29sb3I6ICM5ZDQ1MjdjNDtcbiAgICAvKiBjb2xvcjogI0QwQ0VDQTsgKi9cbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIHotaW5kZXg6IDIwMDtcbiAgICBcblxufVxuLmNwLWJne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMSU7XG4gICAgbGVmdDogMDtcbn1cbi5jcC1iZzo6YmVmb3Jle1xuICAgIGNvbnRlbnQ6IFwiXCI7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0YmFja2dyb3VuZDogaW5oZXJpdDtcblx0ei1pbmRleDogMDtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcblx0Ym90dG9tOiAwO1xuXHRib3gtc2hhZG93OiBpbnNldCAwIDAgMjAwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xuXHRmaWx0ZXI6IGJsdXIoMjdweCk7XG59XG4jbWFycmlhZ2UtZGF0ZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBQbGF5ZmFpciBEaXNwbGF5LCBSZWd1bGFyO1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBsaW5lLWhlaWdodDogODBweDtcbiAgICBjb2xvcjogIzMwM0I0NDtcbn1cbiNtYXJyaWFnZS1kYXRlLXN1bW1hcnl7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBHcmVhdCBWaWJlcztcbiAgICBmb250LXNpemU6IDUycHg7XG4gICAgbGluZS1oZWlnaHQ6IDUycHg7XG4gICAgd29yZC1zcGFjaW5nOiAxMDtcbiAgICBjb2xvcjogIzMwM0I0NDtcblxufVxuLmNvdXBsZS1uYW1lLWRpdntcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMjEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTIxMHB4O1xuICAgIGxlZnQ6IDIxLjY2NjYlO1xuICAgIHJpZ2h0OiAyMS42NjYlO1xufVxuLmNvdXBsZS1uYW1lLWJne1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICM1MjZiNTNkZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIC8qIC13ZWJraXQtZmlsdGVyOiBibHVyKDI2cHgpOyAqL1xuICAgIC8qIGZpbHRlcjogYmx1cigyNnB4KTsgKi9cbn1cbi5kdXJhdGlvbntcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG59XG4uY291cGxlLW5hbWUtYmc6YmVmb3Jle1xuICAgIFxufVxuLmR1cmF0aW9uLXN1bW1hcnkge1xuICAgIGhlaWdodDoyMTBweDtcbn1cblxuLyogXG4gICMjRGV2aWNlID0gTG93IFJlc29sdXRpb24gVGFibGV0cywgTW9iaWxlcyAoTGFuZHNjYXBlKVxuICAjI1NjcmVlbiA9IEIvdyA0ODFweCB0byA3NjdweFxuKi9cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogODEycHgpIHtcblxuICAgICAjY291cGxlLW5hbWV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTMuMzk1dnc7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgICBjb2xvcjogIzlkNDUyNzhhO1xuICAgICAgICBtYXJnaW4tdG9wOiAxN3B4O1xuICAgICAgIH1cbiAgICAgICAuY291cGxlLW5hbWUtZGl2e1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwNnB4O1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgfVxuICAgIFxuXG4gICAgICAgI21hcnJpYWdlLWRhdGUtc3VtbWFyeXtcbiAgICAgICAgZm9udC1zaXplOiA3dnc7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgIH1cbiAgICAgICBcbiAgICAgICNtYXJyaWFnZS1kYXRlIHtcbiAgICAgICAgZm9udC1zaXplOiA2LjV2dztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgICB9XG4gICAgICAuZHVyYXRpb24tc3VtbWFyeSB7XG4gICAgICAgIGhlaWdodDogMTE2cHg7XG4gICAgICB9XG4gICAgXG4gICAgXG4gIH1cbiAgXG4gIC8qIFxuICAgICMjRGV2aWNlID0gTW9zdCBvZiB0aGUgU21hcnRwaG9uZXMgTW9iaWxlcyAoUG9ydHJhaXQpXG4gICAgIyNTY3JlZW4gPSBCL3cgMzIwcHggdG8gNDc5cHhcbiAgKi9cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgXG4gICAjY291cGxlLW5hbWV7XG4gICAgZm9udC1zaXplOiAxMy4zOTV2dztcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICBjb2xvcjogIzlkNDUyNzhhO1xuICAgIG1hcmdpbi10b3A6IDE3cHg7XG4gICB9XG4gICAuY291cGxlLW5hbWUtZGl2e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBoZWlnaHQ6IDEwNnB4O1xuICAgfVxuICBcblxuICAgI21hcnJpYWdlLWRhdGUtc3VtbWFyeXtcbiAgICAgICAgICAgZm9udC1zaXplOiA3dnc7XG4gICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgIH1cbiAgICBcbiAgICAjbWFycmlhZ2UtZGF0ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNnZ3O1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgIH1cblxuICAgICAgLmR1cmF0aW9uLXN1bW1hcnl7XG4gICAgICAgIGhlaWdodDogODlweDtcbiAgICAgIH1cbiAgfVxuXG5cbiAgICAiXX0= */"

/***/ }),

/***/ "./src/app/widget-modules/couplestory/couplestory.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/widget-modules/couplestory/couplestory.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"couple-name-div\"  >\n            <!-- <div class=\"couple-name-bg\"  [ngStyle]=\"{'background':'url('+ imageUrl +')'}\" ></div>  -->\n                <!-- <div class=\"couple-name-bg\"   ></div>  -->\n                <div  class=\"cp-bg d-none d-sm-none d-md-none d-lg-block\" [ngStyle]=\"{'background':'url('+ imageUrl +')'}\" ></div>\n                \n                <h1 id=\"couple-name\">{{'Aaron & Diya'}}</h1> \n    </div>\n    <div class=\"duration-summary\">\n         <div  class=\"nav-container\"></div>\n            <div id=\"marriage-date-summary\">\n                    <span style=\"padding-left: 20px;padding-right: 17px;\">celebrating <span *ngIf=\"togetherMonth>=0\" class=\"duration\">{{togetherMonth}} month</span> <span *ngIf=\"togetherYear>=0\" class=\"duration\">{{togetherYear}} year</span> of togetherness\n                    </span>\n                 <div>since</div>\n            </div>\n            <div id=\"album\" class=\"target\"></div> \n            <h1 id=\"marriage-date\">10 February 2019</h1>\n    </div>\n</div>\n\n\n"

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
        var timeDiff = d2 - d1;
        // yourOldDate may be is coming from DB, for example, but it should be in the correct format ("MM/dd/yyyy hh:mm:ss:fff tt")
        var years = Math.floor((timeDiff) / (1000 * 60 * 60 * 24 * 365));
        timeDiff = Math.floor((timeDiff) % (1000 * 60 * 60 * 24 * 365));
        months = Math.floor((timeDiff) / (1000 * 60 * 60 * 24 * 30));
        timeDiff = Math.floor((timeDiff) % (1000 * 60 * 60 * 24 * 30));
        var days = Math.floor((timeDiff) / (1000 * 60 * 60 * 24));
        console.log(days);
        // months = (d2.getFullYear() - d1.getFullYear()) * 12;
        // months -= d1.getMonth() + 1;
        // months += d2.getMonth();
        if (years) {
            this.togetherYear = years;
        }
        else {
            if (days === 29) {
                this.togetherMonth = months + 1;
            }
            else {
                this.togetherMonth = months;
            }
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

module.exports = ".footer {\n    height: 68px;\n    background-color: #E4E0DD;\n    width: 100%;\n}\n.with-love {\n    display: flex;\n    justify-content: center;\n    font-family: Great Vibes, Regular;\n    font-size: 30px;\n    align-items: center;\n    justify-content: center;\n}\n#share {\n    display: flex;\n    height: 68px;\n    background-color: #E4E0DD;\n    width: 100%;\n}\n#social-icons {\n    position: absolute;\n    right: 8%;\n    bottom: 19px;\n}\n.share-label{\n    font-family: Playfair Display, Regular;\n    font-size: 15px;\n    color: #445563;\n    padding: 0px 9px;\n}\n@media (min-width: 481px) and (max-width: 812px) {\n    .with-love {\n       font-size: 24px;\n       letter-spacing: 0.5px;\n    }\n}\n/*Portrait Mobile */\n@media (min-width: 320px) and (max-width: 480px) {\n    .with-love {\n        font-size: 24px;\n        letter-spacing: 0.5px;\n     }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixZQUFZO0NBQ2Y7QUFDRDtJQUNJLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsd0JBQXdCO0NBQzNCO0FBQ0Q7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixZQUFZO0NBQ2Y7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksdUNBQXVDO0lBQ3ZDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSTtPQUNHLGdCQUFnQjtPQUNoQixzQkFBc0I7S0FDeEI7Q0FDSjtBQUVELG9CQUFvQjtBQUNwQjtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLHNCQUFzQjtNQUN4QjtDQUNMIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gICAgaGVpZ2h0OiA2OHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNEUwREQ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ud2l0aC1sb3ZlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBHcmVhdCBWaWJlcywgUmVndWxhcjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiNzaGFyZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDY4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U0RTBERDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiNzb2NpYWwtaWNvbnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogOCU7XG4gICAgYm90dG9tOiAxOXB4O1xufVxuLnNoYXJlLWxhYmVse1xuICAgIGZvbnQtZmFtaWx5OiBQbGF5ZmFpciBEaXNwbGF5LCBSZWd1bGFyO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzQ0NTU2MztcbiAgICBwYWRkaW5nOiAwcHggOXB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogODEycHgpIHtcbiAgICAud2l0aC1sb3ZlIHtcbiAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIH1cbn1cblxuLypQb3J0cmFpdCBNb2JpbGUgKi9cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgLndpdGgtbG92ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/widget-modules/footer/footer.component.html":
/*!*************************************************************!*\
  !*** ./src/app/widget-modules/footer/footer.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"share\" class=\"target\">\n    <div class=\"footer with-love\">\n        <span>handcrafted with \n            <img src=\"assets/heart.svg\" /> by <a style=\"text-decoration: none;    color: #5b93c2;\" href=\"http://www.foreverCelebrations.com\" target=\"_blank\">foreverCelebrations.com</a></span>\n    </div>\n\n    <div class=\"d-none d-sm-none d-md-none d-lg-block\">\n        <div id=\"social-icons\">\n            <span class=\"share-label\">Share this wedding website on:</span>\n            <a href=\"http://www.facebook.com/sharer/sharer.php?u=diya-aron.s3-website.ap-south-1.amazonaws.com\" target=\"_blank\">\n                <img style=\"padding: 0 9px;\" src=\"assets/fb.svg\" />\n            </a>\n            <a href=\"https://twitter.com/intent/tweet?text=AaronDiyaWedding&url=http://diya-aron.s3-website.ap-south-1.amazonaws.com\"\n                target=\"_blank\">\n                <img style=\"padding: 0 9px;\" src=\"assets/twitter.svg\" />\n            </a>\n            <!-- <img style=\"padding: 0 9px;\" src=\"assets/insta.svg\" /> -->\n        </div>\n    </div>\n</div>\n<!-- <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n    Launch demo modal\n</button> -->\n"

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

module.exports = ".guest-view {\n    color: #707070;\n}\n.guest-book-sec-padding{\n    padding-top: 93px;\n}\n.guest-book-label {\n    color: #1D1D1D;\n    font-family: Playfair Display, Regular;\n    font-size: 50px;\n    line-height: 67px;\n    text-transform: uppercase;\n    text-align: center;\n    margin-left: 7%;\n    margin-right: 7%;\n\n}\n#guest-book-turn .page {\n    background-color:#e6e6e6;\n}\n.guest-book-wish-text {\n    position: absolute;\n    left: 27%;\n    width: 61%;\n    top: 10%;\n    overflow-y: scroll;\n    height: 54%;\n    justify-content: center;\n    align-items: center;\n    display: flex;\n}\n#guest-book-cont {\n    margin-top: 63px;\n    display: flex;\n    justify-content: center;\n    width: 85%;\n    height: 604px;\n}\n.wish-style{\n    color: #707070;\n    font-family: Great Vibes, Regular;\n    font-size: 44px;\n    line-height: 65px;\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n    max-height: 100%;\n}\n.loc-date{\n    text-align: center;\n    font-family: Playfair Display;\n    font-style: italic;\n    font-size: 18px;\n    color: #707070;\n    margin-bottom: 2px;\n}\n.hr-text {\n    line-height: 1em;\n    position: relative;\n    outline: 0;\n    border: 0;\n    text-align: center;\n    height: 1.5em;\n    font-family: Playfair Display, Regular;\n    font-size: 3.4895vw;\n    text-align: center;\n    color: #1D1D1D;\n    letter-spacing: 4px;\n  }\n.hr-text::before{\n    content: '';\n    background: linear-gradient(to right, transparent, #818078, transparent);\n    position: absolute;\n    left: 0;\n    top : 50%;\n    width: 100%;\n    height: 2px;\n\n  }\n.hr-text::after{\n    content: attr(data-content);\n    position: relative;\n    display: inline-block;\n    padding: 0 .5em;\n    line-height: 1.5em;\n    background-color: #f6f2ee;\n}\n/* span.wish-style:before{\n    content:\"''\";\n    font-size: 322px;\n    color: #FF418A;\n    transform: rotate(180deg);\n    opacity: .32;\n\n}\nspan.wish-style:after{\n    content:\"''\";\n    font-size: 322px;\n    color: #FF418A;\n    opacity: .32;\n\n} */\ninput {\n    background-color: inherit;\n    height: 60px;\n    width: 100%;\n    border: 0;\n    outline: 0;\n    background: transparent;\n    border-bottom: 2px solid #75726e7a;\n    font-size: 44px;\n    font-family: Great Vibes, Regular;\n    line-height: 83px;\n    color:#707070;\n    padding-left: 20px;\n    text-indent: 8px;\n}\ntextarea {\n    background-color: inherit;\n    width: 100%;\n    border: 0;\n    outline: 0;\n    background: transparent;\n    border-bottom: 2px solid #75726e7a;\n    font-size: 44px;\n    font-family: Great Vibes, Regular;\n    line-height: 64px;\n    color:#707070;\n    padding-left: 20px;\n    text-indent: 8px;\n    height: 200px;\n}\n#wish-button{\n    width: 536px;\n    height: 125px;\n    font-size: 30px;\n    line-height: 80px;\n    font-family: Playfair Display, Regular;\n    background-color: #445563;\n    color: #FFFFFF;\n    border-radius: 10px;\n\n}\n.form-width {\n    margin-left: 21%;\n    margin-right: 21%;\n    margin-top: 8%;\n    min-height: 600px;\n}\n.btn-div{\n    margin-top: 75px; \n    text-align: center;   \n    padding-bottom: 25%;\n}\n.tq{\n    font-family: Great Vibes, Regular;\n    font-size: 90px;\n    color: #FF418A;\n    opacity: .81;\n}\n.tq-msg{\n    font-family: Playfair Display, Regular;\n    font-size: 30px;\n    line-height: 83px;\n    color: #707070;\n\n}\n#tq-div{\n    width: 60vw;\n    padding: 50px;\n    border-radius: 15px;\n    background: #E4E0DD;\n    text-align: center;\n}\n.btn-gotit{\n    background-color: #445563;\n    border-radius: 10px;\n    width: 177px;\n    height: 73px;\n    font-family: Playfair Display,Regular;\n    color: #FFFFFF;\n    font-size: 30px;\n}\n.guest-wisher-info {\n    width: -webkit-max-content;\n    width: -moz-max-content;\n    width: max-content;\n    position: absolute;\n    right: 13%;\n    position: absolute; \n    bottom: 14%;\n}\n.tq-wish{\n    margin-right: inherit;\n    position: absolute;\n    margin-top: 10%;\n}\n.guest-info{\n    font-family: Playfair Display, Bold;\n    font-size: 25px;\n    text-align: center;\n    color: #707070;\n    margin-bottom: 0px;\n}\n.left-arrow{\n    bottom: 46%;\n    left: 0;\n    position: absolute;\n    font-size: 30px;\n    color: #9e9e9ea3;\n}\n.right-arrow {\n    bottom: 46%;\n    right: 0;\n    position: absolute;\n    font-size: 30px;\n    color: #2e2d2c5e;\n}\n/* \n  ##Device = Low Resolution Tablets, Mobiles (Landscape)\n  ##Screen = B/w 481px to 767px\n*/\n@media (min-width: 481px) and (max-width: 812px) {\n    .con-album-label-hr{\n        width: 0%;\n    }\n    .guest-book-label{\n        margin-left: 0%;\n    margin-right: 0%;\n    }\n    .guest-book-sec-padding{\n        padding-top: 55px;\n    }\n    #wish-button {\n    width: 100%;\n    height: 87px;\n    font-size: 22px;\n    line-height: 71px;\n    }\n    .form-width {\n        margin-left: 8%;\n        margin-right: 8%;\n    }\n\n    .btn-div{\n        margin-top: 61px;\n    }\n    #guest-book-cont {\n        width: 100%;\n        height: 400px;\n    }\n    .wish-style {\n     font-size: 32px;\n     line-height: 45px;\n    }\n    .guest-book-wish-text {\n        height: 63%;\n       text-indent: 3px;\n        left: 18%;\n        width: 66%;\n    }\n    .guest-wisher-info {\n        bottom: 5%;\n        right: 16%;\n    }\n    .hr-text {\n        font-size: 36px;\n        letter-spacing: 3px;\n    }\n    input{\n        font-size: 28px;\n    }\n    textarea{\n        font-size: 28px;\n        line-height: 41px;\n        height: 126px;\n    }\n    .tq-wish{\n        margin-top: 9%;\n    }\n    .guest-info{\n        font-size: 20px;\n    }\n    .right-arrow {\n        font-size: 20px;\n        right: 3px;\n    }\n    .left-arrow {\n        font-size: 20px;;\n    }\n}\n/*Portrait Mobile */\n@media (min-width: 320px) and (max-width: 480px) {\n    .con-album-label-hr{\n        width: 0%;\n    }\n    .guest-book-label{\n        margin-left: 0%;\n    margin-right: 0%;\n    }\n    .guest-book-sec-padding{\n        padding-top: 55px;\n    }\n\n    .form-width {\n        margin-left: 8%;\n        margin-right: 8%;\n    }\n    #wish-button {\n    width: 100%;\n    height: 87px;\n    font-size: 22px;\n    line-height: 71px;\n    }\n    .btn-div{\n        margin-top: 61px;\n    }\n    #guest-book-cont {\n        width: 100%;\n        height: 400px;\n    }\n    .guest-book-wish-text {\n        left: 18%;\n        width: 66%;\n        height: 63%;\n    text-indent: 3px;\n    }\n    .wish-style {\n        font-size: 32px;\n        line-height: 45px;\n    }\n    .guest-wisher-info {\n        bottom: 5%;\n        right: 16%;\n    }\n    .hr-text {\n        font-size: 36px;\n        letter-spacing: 3px;\n    }\n    input{\n        font-size: 28px;\n    }\n    textarea{\n        font-size: 28px;\n        line-height: 41px;\n        height: 126px;\n    }\n    .tq-wish{\n        margin-top: 9%;\n    }\n    .guest-info{\n        font-size: 20px;\n    }\n    .right-arrow {\n        font-size: 20px;\n        right: 3px;\n    }\n    .left-arrow {\n        font-size: 20px;;\n    }\n    \n}\n@media screen and (min-color-index:0) and(-webkit-min-device-pixel-ratio:0) { \n    @media {\n        input { \n            height: 80px;\n        }\n    }\n}\n@media not all and (min-resolution:.001dpcm) { \n    @media {\n        input { \n            height: 80px; \n        }\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvZ3Vlc3QtYm9vay9ndWVzdC1ib29rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLGVBQWU7SUFDZix1Q0FBdUM7SUFDdkMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7O0NBRXBCO0FBQ0Q7SUFDSSx5QkFBeUI7Q0FDNUI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsV0FBVztJQUNYLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsY0FBYztDQUNqQjtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCx1Q0FBdUM7SUFDdkMsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysb0JBQW9CO0dBQ3JCO0FBQ0Q7SUFDRSxZQUFZO0lBQ1oseUVBQXlFO0lBQ3pFLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZOztHQUViO0FBQ0Q7SUFDRSw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDBCQUEwQjtDQUM3QjtBQUNEOzs7Ozs7Ozs7Ozs7OztJQWNJO0FBQ0o7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixtQ0FBbUM7SUFDbkMsZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixpQkFBaUI7Q0FDcEI7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsbUNBQW1DO0lBQ25DLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixvQkFBb0I7O0NBRXZCO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsb0JBQW9CO0NBQ3ZCO0FBRUQ7SUFDSSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSx1Q0FBdUM7SUFDdkMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlOztDQUVsQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxlQUFlO0lBQ2YsZ0JBQWdCO0NBQ25CO0FBRUQ7SUFDSSwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixZQUFZO0NBQ2Y7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0NBQ25CO0FBRUQ7SUFDSSxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsbUJBQW1CO0NBQ3RCO0FBRUQ7SUFDSSxZQUFZO0lBQ1osUUFBUTtJQUNSLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osU0FBUztJQUNULG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0NBQ3BCO0FBQ0Q7OztFQUdFO0FBRUY7SUFDSTtRQUNJLFVBQVU7S0FDYjtJQUNEO1FBQ0ksZ0JBQWdCO0lBQ3BCLGlCQUFpQjtLQUNoQjtJQUNEO1FBQ0ksa0JBQWtCO0tBQ3JCO0lBQ0Q7SUFDQSxZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7S0FDakI7SUFDRDtRQUNJLGdCQUFnQjtRQUNoQixpQkFBaUI7S0FDcEI7O0lBRUQ7UUFDSSxpQkFBaUI7S0FDcEI7SUFDRDtRQUNJLFlBQVk7UUFDWixjQUFjO0tBQ2pCO0lBQ0Q7S0FDQyxnQkFBZ0I7S0FDaEIsa0JBQWtCO0tBQ2xCO0lBQ0Q7UUFDSSxZQUFZO09BQ2IsaUJBQWlCO1FBQ2hCLFVBQVU7UUFDVixXQUFXO0tBQ2Q7SUFDRDtRQUNJLFdBQVc7UUFDWCxXQUFXO0tBQ2Q7SUFDRDtRQUNJLGdCQUFnQjtRQUNoQixvQkFBb0I7S0FDdkI7SUFDRDtRQUNJLGdCQUFnQjtLQUNuQjtJQUNEO1FBQ0ksZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixjQUFjO0tBQ2pCO0lBQ0Q7UUFDSSxlQUFlO0tBQ2xCO0lBQ0Q7UUFDSSxnQkFBZ0I7S0FDbkI7SUFDRDtRQUNJLGdCQUFnQjtRQUNoQixXQUFXO0tBQ2Q7SUFDRDtRQUNJLGdCQUFnQjtLQUNuQjtDQUNKO0FBRUQsb0JBQW9CO0FBQ3BCO0lBQ0k7UUFDSSxVQUFVO0tBQ2I7SUFDRDtRQUNJLGdCQUFnQjtJQUNwQixpQkFBaUI7S0FDaEI7SUFDRDtRQUNJLGtCQUFrQjtLQUNyQjs7SUFFRDtRQUNJLGdCQUFnQjtRQUNoQixpQkFBaUI7S0FDcEI7SUFDRDtJQUNBLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtLQUNqQjtJQUNEO1FBQ0ksaUJBQWlCO0tBQ3BCO0lBQ0Q7UUFDSSxZQUFZO1FBQ1osY0FBYztLQUNqQjtJQUNEO1FBQ0ksVUFBVTtRQUNWLFdBQVc7UUFDWCxZQUFZO0lBQ2hCLGlCQUFpQjtLQUNoQjtJQUNEO1FBQ0ksZ0JBQWdCO1FBQ2hCLGtCQUFrQjtLQUNyQjtJQUNEO1FBQ0ksV0FBVztRQUNYLFdBQVc7S0FDZDtJQUNEO1FBQ0ksZ0JBQWdCO1FBQ2hCLG9CQUFvQjtLQUN2QjtJQUNEO1FBQ0ksZ0JBQWdCO0tBQ25CO0lBQ0Q7UUFDSSxnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGNBQWM7S0FDakI7SUFDRDtRQUNJLGVBQWU7S0FDbEI7SUFDRDtRQUNJLGdCQUFnQjtLQUNuQjtJQUNEO1FBQ0ksZ0JBQWdCO1FBQ2hCLFdBQVc7S0FDZDtJQUNEO1FBQ0ksZ0JBQWdCO0tBQ25COztDQUVKO0FBQ0Q7SUFDSTtRQUNJO1lBQ0ksYUFBYTtTQUNoQjtLQUNKO0NBQ0o7QUFFRDtJQUNJO1FBQ0k7WUFDSSxhQUFhO1NBQ2hCO0tBQ0o7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldC1tb2R1bGVzL2d1ZXN0LWJvb2svZ3Vlc3QtYm9vay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmd1ZXN0LXZpZXcge1xuICAgIGNvbG9yOiAjNzA3MDcwO1xufVxuLmd1ZXN0LWJvb2stc2VjLXBhZGRpbmd7XG4gICAgcGFkZGluZy10b3A6IDkzcHg7XG59XG4uZ3Vlc3QtYm9vay1sYWJlbCB7XG4gICAgY29sb3I6ICMxRDFEMUQ7XG4gICAgZm9udC1mYW1pbHk6IFBsYXlmYWlyIERpc3BsYXksIFJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA2N3B4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiA3JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDclO1xuXG59XG4jZ3Vlc3QtYm9vay10dXJuIC5wYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlNmU2ZTY7XG59XG4uZ3Vlc3QtYm9vay13aXNoLXRleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAyNyU7XG4gICAgd2lkdGg6IDYxJTtcbiAgICB0b3A6IDEwJTtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgaGVpZ2h0OiA1NCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuI2d1ZXN0LWJvb2stY29udCB7XG4gICAgbWFyZ2luLXRvcDogNjNweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA4NSU7XG4gICAgaGVpZ2h0OiA2MDRweDtcbn1cbi53aXNoLXN0eWxle1xuICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgIGZvbnQtZmFtaWx5OiBHcmVhdCBWaWJlcywgUmVndWxhcjtcbiAgICBmb250LXNpemU6IDQ0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDY1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbn1cbi5sb2MtZGF0ZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFBsYXlmYWlyIERpc3BsYXk7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzcwNzA3MDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG4uaHItdGV4dCB7XG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgZm9udC1mYW1pbHk6IFBsYXlmYWlyIERpc3BsYXksIFJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiAzLjQ4OTV2dztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMxRDFEMUQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgfVxuICAuaHItdGV4dDo6YmVmb3Jle1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdHJhbnNwYXJlbnQsICM4MTgwNzgsIHRyYW5zcGFyZW50KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3AgOiA1MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAycHg7XG5cbiAgfVxuICAuaHItdGV4dDo6YWZ0ZXJ7XG4gICAgY29udGVudDogYXR0cihkYXRhLWNvbnRlbnQpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMCAuNWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmMmVlO1xufVxuLyogc3Bhbi53aXNoLXN0eWxlOmJlZm9yZXtcbiAgICBjb250ZW50OlwiJydcIjtcbiAgICBmb250LXNpemU6IDMyMnB4O1xuICAgIGNvbG9yOiAjRkY0MThBO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgb3BhY2l0eTogLjMyO1xuXG59XG5zcGFuLndpc2gtc3R5bGU6YWZ0ZXJ7XG4gICAgY29udGVudDpcIicnXCI7XG4gICAgZm9udC1zaXplOiAzMjJweDtcbiAgICBjb2xvcjogI0ZGNDE4QTtcbiAgICBvcGFjaXR5OiAuMzI7XG5cbn0gKi9cbmlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIGhlaWdodDogNjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDA7XG4gICAgb3V0bGluZTogMDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzc1NzI2ZTdhO1xuICAgIGZvbnQtc2l6ZTogNDRweDtcbiAgICBmb250LWZhbWlseTogR3JlYXQgVmliZXMsIFJlZ3VsYXI7XG4gICAgbGluZS1oZWlnaHQ6IDgzcHg7XG4gICAgY29sb3I6IzcwNzA3MDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgdGV4dC1pbmRlbnQ6IDhweDtcbn1cblxudGV4dGFyZWEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAwO1xuICAgIG91dGxpbmU6IDA7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM3NTcyNmU3YTtcbiAgICBmb250LXNpemU6IDQ0cHg7XG4gICAgZm9udC1mYW1pbHk6IEdyZWF0IFZpYmVzLCBSZWd1bGFyO1xuICAgIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICAgIGNvbG9yOiM3MDcwNzA7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHRleHQtaW5kZW50OiA4cHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cbiN3aXNoLWJ1dHRvbntcbiAgICB3aWR0aDogNTM2cHg7XG4gICAgaGVpZ2h0OiAxMjVweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDgwcHg7XG4gICAgZm9udC1mYW1pbHk6IFBsYXlmYWlyIERpc3BsYXksIFJlZ3VsYXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NTU2MztcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG59XG4uZm9ybS13aWR0aCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIxJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIxJTtcbiAgICBtYXJnaW4tdG9wOiA4JTtcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcbn1cbi5idG4tZGl2e1xuICAgIG1hcmdpbi10b3A6IDc1cHg7IFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICBcbiAgICBwYWRkaW5nLWJvdHRvbTogMjUlO1xufVxuXG4udHF7XG4gICAgZm9udC1mYW1pbHk6IEdyZWF0IFZpYmVzLCBSZWd1bGFyO1xuICAgIGZvbnQtc2l6ZTogOTBweDtcbiAgICBjb2xvcjogI0ZGNDE4QTtcbiAgICBvcGFjaXR5OiAuODE7XG59XG4udHEtbXNne1xuICAgIGZvbnQtZmFtaWx5OiBQbGF5ZmFpciBEaXNwbGF5LCBSZWd1bGFyO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBsaW5lLWhlaWdodDogODNweDtcbiAgICBjb2xvcjogIzcwNzA3MDtcblxufVxuI3RxLWRpdntcbiAgICB3aWR0aDogNjB2dztcbiAgICBwYWRkaW5nOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI0U0RTBERDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYnRuLWdvdGl0e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDU1NjM7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB3aWR0aDogMTc3cHg7XG4gICAgaGVpZ2h0OiA3M3B4O1xuICAgIGZvbnQtZmFtaWx5OiBQbGF5ZmFpciBEaXNwbGF5LFJlZ3VsYXI7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uZ3Vlc3Qtd2lzaGVyLWluZm8ge1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEzJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgIGJvdHRvbTogMTQlO1xufVxuXG4udHEtd2lzaHtcbiAgICBtYXJnaW4tcmlnaHQ6IGluaGVyaXQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuLmd1ZXN0LWluZm97XG4gICAgZm9udC1mYW1pbHk6IFBsYXlmYWlyIERpc3BsYXksIEJvbGQ7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzcwNzA3MDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5sZWZ0LWFycm93e1xuICAgIGJvdHRvbTogNDYlO1xuICAgIGxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogIzllOWU5ZWEzO1xufVxuLnJpZ2h0LWFycm93IHtcbiAgICBib3R0b206IDQ2JTtcbiAgICByaWdodDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiAjMmUyZDJjNWU7XG59XG4vKiBcbiAgIyNEZXZpY2UgPSBMb3cgUmVzb2x1dGlvbiBUYWJsZXRzLCBNb2JpbGVzIChMYW5kc2NhcGUpXG4gICMjU2NyZWVuID0gQi93IDQ4MXB4IHRvIDc2N3B4XG4qL1xuXG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA4MTJweCkge1xuICAgIC5jb24tYWxidW0tbGFiZWwtaHJ7XG4gICAgICAgIHdpZHRoOiAwJTtcbiAgICB9XG4gICAgLmd1ZXN0LWJvb2stbGFiZWx7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAlO1xuICAgIH1cbiAgICAuZ3Vlc3QtYm9vay1zZWMtcGFkZGluZ3tcbiAgICAgICAgcGFkZGluZy10b3A6IDU1cHg7XG4gICAgfVxuICAgICN3aXNoLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4N3B4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBsaW5lLWhlaWdodDogNzFweDtcbiAgICB9XG4gICAgLmZvcm0td2lkdGgge1xuICAgICAgICBtYXJnaW4tbGVmdDogOCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOCU7XG4gICAgfVxuXG4gICAgLmJ0bi1kaXZ7XG4gICAgICAgIG1hcmdpbi10b3A6IDYxcHg7XG4gICAgfVxuICAgICNndWVzdC1ib29rLWNvbnQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICB9XG4gICAgLndpc2gtc3R5bGUge1xuICAgICBmb250LXNpemU6IDMycHg7XG4gICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgIH1cbiAgICAuZ3Vlc3QtYm9vay13aXNoLXRleHQge1xuICAgICAgICBoZWlnaHQ6IDYzJTtcbiAgICAgICB0ZXh0LWluZGVudDogM3B4O1xuICAgICAgICBsZWZ0OiAxOCU7XG4gICAgICAgIHdpZHRoOiA2NiU7XG4gICAgfVxuICAgIC5ndWVzdC13aXNoZXItaW5mbyB7XG4gICAgICAgIGJvdHRvbTogNSU7XG4gICAgICAgIHJpZ2h0OiAxNiU7XG4gICAgfVxuICAgIC5oci10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgIH1cbiAgICBpbnB1dHtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgIH1cbiAgICB0ZXh0YXJlYXtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDFweDtcbiAgICAgICAgaGVpZ2h0OiAxMjZweDtcbiAgICB9XG4gICAgLnRxLXdpc2h7XG4gICAgICAgIG1hcmdpbi10b3A6IDklO1xuICAgIH1cbiAgICAuZ3Vlc3QtaW5mb3tcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICAucmlnaHQtYXJyb3cge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHJpZ2h0OiAzcHg7XG4gICAgfVxuICAgIC5sZWZ0LWFycm93IHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4OztcbiAgICB9XG59XG5cbi8qUG9ydHJhaXQgTW9iaWxlICovXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC5jb24tYWxidW0tbGFiZWwtaHJ7XG4gICAgICAgIHdpZHRoOiAwJTtcbiAgICB9XG4gICAgLmd1ZXN0LWJvb2stbGFiZWx7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAlO1xuICAgIH1cbiAgICAuZ3Vlc3QtYm9vay1zZWMtcGFkZGluZ3tcbiAgICAgICAgcGFkZGluZy10b3A6IDU1cHg7XG4gICAgfVxuXG4gICAgLmZvcm0td2lkdGgge1xuICAgICAgICBtYXJnaW4tbGVmdDogOCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOCU7XG4gICAgfVxuICAgICN3aXNoLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4N3B4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBsaW5lLWhlaWdodDogNzFweDtcbiAgICB9XG4gICAgLmJ0bi1kaXZ7XG4gICAgICAgIG1hcmdpbi10b3A6IDYxcHg7XG4gICAgfVxuICAgICNndWVzdC1ib29rLWNvbnQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICB9XG4gICAgLmd1ZXN0LWJvb2std2lzaC10ZXh0IHtcbiAgICAgICAgbGVmdDogMTglO1xuICAgICAgICB3aWR0aDogNjYlO1xuICAgICAgICBoZWlnaHQ6IDYzJTtcbiAgICB0ZXh0LWluZGVudDogM3B4O1xuICAgIH1cbiAgICAud2lzaC1zdHlsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gICAgfVxuICAgIC5ndWVzdC13aXNoZXItaW5mbyB7XG4gICAgICAgIGJvdHRvbTogNSU7XG4gICAgICAgIHJpZ2h0OiAxNiU7XG4gICAgfVxuICAgIC5oci10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgIH1cbiAgICBpbnB1dHtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgIH1cbiAgICB0ZXh0YXJlYXtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDFweDtcbiAgICAgICAgaGVpZ2h0OiAxMjZweDtcbiAgICB9XG4gICAgLnRxLXdpc2h7XG4gICAgICAgIG1hcmdpbi10b3A6IDklO1xuICAgIH1cbiAgICAuZ3Vlc3QtaW5mb3tcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICAucmlnaHQtYXJyb3cge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHJpZ2h0OiAzcHg7XG4gICAgfVxuICAgIC5sZWZ0LWFycm93IHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4OztcbiAgICB9XG4gICAgXG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWNvbG9yLWluZGV4OjApIGFuZCgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86MCkgeyBcbiAgICBAbWVkaWEge1xuICAgICAgICBpbnB1dCB7IFxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgbm90IGFsbCBhbmQgKG1pbi1yZXNvbHV0aW9uOi4wMDFkcGNtKSB7IFxuICAgIEBtZWRpYSB7XG4gICAgICAgIGlucHV0IHsgXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7IFxuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/widget-modules/guest-book/guest-book.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/widget-modules/guest-book/guest-book.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"guest-book-sec-padding\" >\n  <div  class=\"guest-book-label\">\n      <hr    class=\"hr-text \" data-content=\"GUEST BOOK\">\n    <!-- <img class=\"con-album-label-hr\" src=\"assets/rectangle.svg\" />\n    <span id=\"album\" style=\"padding-left: 20px;padding-right: 17px;\">Guest Book</span>\n    <img class=\"con-album-label-hr\" style=\"transform: scale(-1);\" src=\"assets/rectangle.svg\" /> -->\n  </div>\n\n  <div id=\"guest-book-cont\">\n    <div class=\"guest-view\" style=\"position: relative;width: 100%\">\n      <div  id=\"guest-book-turn\">\n        <div  (swipe)=\"clearTimer()\" (tap)=\"clearTimer()\" (press)=\"clearTimer()\"  *ngFor=\"let wish of wishes.data.wishList;index as i\">\n          <img style=\"position: absolute;height: 100%;width: 100%\" class=\"img-fluid gb-img d-none d-sm-one d-md-block\" src=\"assets/dtop.png\">\n          <img style=\"position: absolute;height: 100%;width: 100%\" class=\"img-fluid gb-img d-block d-sm-block d-md-none\" src=\"assets/mobile.png\">\n          <div style=\"height: 100%;padding: 0px 98px;\">\n              <div  (mouseover)=\"clearTimer()\" (tap)=\"clearTimer()\"  (click)=\"goPrevious()\" class=\"left-arrow\" *ngIf=\"i!=0\" (click)=\"clearTimer()\" >\n                  <i class=\"fa fa-chevron-circle-left\" style=\"cursor: pointer;\"></i>\n              </div>\n            <div  class=\"guest-book-wish-text\">\n              <h1 class=\"wish-style\">{{wish.message}}</h1>\n            </div>\n            <div class=\"guest-wisher-info\">\n              <p class=\"guest-info\">- {{wish.name}}</p>\n              <p class=\"loc-date\">{{wish.location}}</p>\n              <p class=\"loc-date\">{{wish.modifiedDate | date }}</p>\n            </div>\n            <div (mouseover)=\"clearTimer()\" (tap)=\"clearTimer()\"  (click)=\"goNext()\" class=\"right-arrow\" *ngIf=\"i != wishes.data.wishList.length-1\" (click)=\"clearTimer()\">\n                <i class=\"fa fa-chevron-circle-right\" style=\"cursor: pointer;\"></i>\n        </div>\n          </div>\n        </div>\n\n        <!-- <div style=\"background: url('assets/page-right.png')\">hello</div> -->\n\n        <!-- <div style=\"background: url('assets/page-right.png')\">hhh</div> -->\n      </div>\n    </div>\n  </div>\n\n\n  <!-- <div class=\"modal\" id=\"confirmModal\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\" style=\"justify-content: center;align-items: center;background-color: none\">\n       \n          <div class=\"modal-body\" id=\"tq-div\">\n            <h1 class=\"tq\">Thank you</h1>\n            <p class=\"tq-msg\">...for writing in Aaron and Diya's wedding guest book! If you would like to make some changes, tap on the edit button.</p>\n            <div style=\"text-align: right\">\n                <button data-dismiss=\"modal\" class=\"btn-gotit\" (click)=\"iAgree(wishes.data.wishList)\">Got it</button>\n            </div>\n           </div>\n         \n        </div>\n      </div>\n    </div> -->\n\n  <!-- <div ng-repeat=\"item in wishes.data.wishList\" style=\"background: url('assets/page.png')\">Hello</div>\n           -->\n  <!-- <h1 class=\"wish-style\" id=\"word\"></h1> -->\n  <div   class=\"form-width\">\n    <form [hidden]=\"!showForm\" (ngSubmit)=\"guestForm.form.valid && onSubmit()\" #guestForm=\"ngForm\" novalidate>\n      <div>\n        <input name=\"name\" [(ngModel)]=\"wishObj.name\" #name=\"ngModel\" placeholder=\"Your name and family?\" required/>\n      </div>\n      <div *ngIf=\"guestForm.submitted && name.invalid\">\n        <span style=\"color: #ff000091;\" *ngIf=\"name.errors.required\">Name is required</span>\n      </div>\n      <div   style=\"margin-top: 75px;\">\n        <input name=\"location\" [(ngModel)]=\"wishObj.location\" #location=\"ngModel\" placeholder=\"Where are you from?\" required/>\n      </div>\n      <div *ngIf=\"guestForm.submitted && location.invalid\">\n          <span style=\"color: #ff000091;\" *ngIf=\"location.errors.required\">Location is required</span>\n        </div>\n      <div  style=\"margin-top: 75px;\">\n        <input name=\"email\" [(ngModel)]=\"wishObj.email\" placeholder=\"Your email address?\" />\n      </div>\n      <div   style=\"margin-top: 75px;\">\n        <textarea name=\"message\" [(ngModel)]=\"wishObj.message\" #message=\"ngModel\"  placeholder=\"Write your thoughts and wishes for the newly wedded couple.\" required></textarea>\n      </div>\n      <div *ngIf=\"guestForm.submitted && message.invalid\">\n          <span style=\"color: #ff000091;\" *ngIf=\"message.errors.required\">Message is required</span>\n        </div>\n\n      <div  class=\"btn-div\">\n        <button  type=\"submit\" id=\"wish-button\">Post</button>\n      </div>\n\n    </form>\n    <div  *ngIf=\"!showForm && showConfirmMsg\" class=\"tq-wish\">\n      <div class=\"wish-style\" id=\"word\">\n          <h1 >Thank you for writing in Aaron and Diya's wedding guest book!</h1>\n          <h1> If you would like to make some changes, tap on <a style=\"    font-weight: bold;\n            color: #ff5722a3;cursor: pointer;\" (click)=\"showForm=true;\" >Edit</a></h1>\n\n      </div>\n        \n    </div>\n\n  </div>\n  \n</div>\n\n<!--  \n      <div >\n          <div class=\"container\">\n              <h1></h1>\n              <form (ngSubmit)=\"guestForm.form.valid && onSubmit()\" #guestForm=\"ngForm\">\n                <div class=\"form-group\">\n                  <label for=\"name\">Name</label>\n                  <input name=\"name\" [(ngModel)]=\"wishObj.name\" type=\"text\" class=\"form-control\" id=\"name\" required #name=\"ngModel\">\n                  \n                </div>\n                <div class=\"form-group\">\n                  <label for=\"alterEgo\">Message</label>\n                  <input name=\"message\" [(ngModel)]=\"wishObj.Message\" type=\"text\" class=\"form-control\" id=\"alterEgo\">\n                </div>\n          \n                <button type=\"submit\" class=\"btn btn-success\">post</button>\n          \n              </form>\n          </div>\n    \n      </div>\n      -->"

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



var isPrevious = false;
var defaultInterval;
var submitInterval;
var GuestBookComponent = /** @class */ (function () {
    function GuestBookComponent(wedOverviewService) {
        this.wedOverviewService = wedOverviewService;
        this.sendWishEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.wishes = [{}];
        this.showForm = true;
        this.showConfirmMsg = false;
        this.wishObj = {};
    }
    GuestBookComponent.prototype.ngOnInit = function () {
        this.setGuestBookWishes();
    };
    GuestBookComponent.prototype.setGuestBookWishes = function () {
        var _this = this;
        this.wedOverviewService.getWishes().subscribe(function (data) {
            _this.wishes = data;
            _this.initialiseGuestBookTurn(data);
        });
    };
    GuestBookComponent.prototype.sizeFlipBook = function () {
    };
    GuestBookComponent.prototype.clearTimer = function () {
        clearInterval(defaultInterval);
        clearInterval(submitInterval);
    };
    GuestBookComponent.prototype.initialiseGuestBookTurn = function (wishArray) {
        setTimeout(function () {
            $('#guest-book-turn').turn({
                display: 'single',
                width: $('#guest-book-cont').width() - 20,
                height: $('#guest-book-cont').height(),
                autoCenter: true,
                duration: 1400,
                when: {
                    turned: function (e, page, pageObj) {
                        if (wishArray.data.wishList.length === page) {
                            clearInterval(defaultInterval);
                        }
                    }
                }
            });
        }, 100);
        $(window).resize(function () {
            $('#guest-book-turn').turn('size', $('#guest-book-cont').width() - 20, $('#guest-book-cont').height() - 20);
            $('#guest-book-turn').turn('resize');
        });
        defaultInterval = setInterval(function () {
            $('#guest-book-turn').turn('next');
            // if(isPrevious){
            //   $('#guest-book-turn').turn('previous');
            // }else {
            //   $('#guest-book-turn').turn('next');
            // }
        }, 5000);
    };
    ;
    GuestBookComponent.prototype.goNext = function () {
        $('#guest-book-turn').turn('next');
        this.clearTimer();
    };
    GuestBookComponent.prototype.goPrevious = function () {
        $('#guest-book-turn').turn('previous');
        this.clearTimer();
    };
    GuestBookComponent.prototype.refreshWishes = function () {
        this.sendWishEvent.emit('true');
    };
    GuestBookComponent.prototype.onSubmit = function () {
        this.showForm = false;
        this.showConfirmMsg = true;
        setTimeout(function () {
            $('#confirmModal').modal('show');
        }, 500);
        this.postWish();
    };
    GuestBookComponent.prototype.postWish = function () {
        this.iAgree(this.wishes.data.wishList);
        return this.wedOverviewService.sendWishes(this.wishObj).subscribe(function (data) {
            console.log(data);
            setTimeout(function () {
            }, 5000);
        }, function (error) {
            console.log(error);
        });
    };
    GuestBookComponent.prototype.iAgree = function (wishes) {
        var _this = this;
        clearInterval(defaultInterval);
        var element = $("<div>\n    <img style=\"position: absolute;height: 100%;width: 100%\" class=\"img-fluid gb-img d-none d-sm-one d-md-block\" src=\"assets/book.jpg\">\n    <img style=\"position: absolute;height: 100%;width: 100%\" class=\"img-fluid gb-img d-block d-sm-block d-md-none\" src=\"assets/mobile.png\">\n    <div style=\"height: 100%;padding: 0px 98px;\">\n      <div class=\"guest-book-wish-text\">\n        <h1 class=\"wish-style\">" + this.wishObj.message + "</h1></div>\n        <div style=\"width: max-content;position: absolute;right: 13%;position: absolute; bottom: 14%;\">\n          <p style=\"font-family: Playfair Display, Bold;font-size: 25px;text-align: center;color: #707070;margin-bottom: 2px;\">" +
            this.wishObj.name + "</p>\n          <p style=\"text-align: center; font-family: Playfair Display;font-style: italic;font-size: 18px;: #707070;margin-bottom: 2px;\">"
            + this.wishObj.location + "</p>\n          </div>\n        </div>\n        <div>");
        $('#guest-book-turn').turn('resize');
        $('#guest-book-turn').turn('addPage', element);
        $('#guest-book-turn').turn('page', wishes.length + 1);
        setTimeout(function () {
            isPrevious = true;
            _this.showForm = false;
            submitInterval = setInterval(function () {
                if ($('#guest-book-turn').turn('page') === 1) {
                    clearInterval(submitInterval);
                }
                $('#guest-book-turn').turn('resize');
                $('#guest-book-turn').turn('previous');
            }, 6000);
        }, 3000);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GuestBookComponent.prototype, "sendWishEvent", void 0);
    GuestBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-guest-book',
            template: __webpack_require__(/*! ./guest-book.component.html */ "./src/app/widget-modules/guest-book/guest-book.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
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

module.exports = ".header-cont{\n    height: inherit;\n    width: 100%;\n    position: fixed;\n\tbackground: inherit;\n\toverflow: hidden;\n}\n.header-cont::before{\n    content: \"\";\n\tposition: absolute;\n\tbackground: inherit;\n\tz-index: 0;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbox-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);\n\t-webkit-filter: blur(8px);\n\t        filter: blur(8px);\n}\n.nav-container {\n    height: 60px;\n    width: 100%;\n    -webkit-filter: blur(50px);\n            filter: blur(50px);\n    background-position: top;\n    position: fixed;\n}\n.music-bg{\n    position: absolute;\n    width: 151px;\n    height: 37.17px;\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    border-radius: 10px;\n    left: 100px;\n    background-image: linear-gradient(#7c736961, #a8a29499);\n    \n}\n.music-bg::before {\n    content: \"\";\n\tposition: absolute;\n\tbackground-image: inherit;\n\tz-index: 0;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbox-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);\n\t-webkit-filter: blur(8px);\n\t        filter: blur(8px);\n\n}\n.mg-img{\n    margin-top: -3px;\n    width: 12px;\n    width: 9px;\n}\n.mg-txt-con{\n    position: absolute;\n            cursor: pointer;\n            width: 100%;\n            height: inherit;\n            left: 0;\n}\n.mg-txt-ico {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n     height: inherit;\n}\n.music-txt{\n    font-family: Playfair Display;\n    font-size: 17px;\n    padding-left: 9px;\n    color: #FFFFFF;\n}\n.nav-flex {\n  width: 100%;\n  display: -webkit-flex; /* Safari */\n  -webkit-justify-content: center; /* Safari 6.1+ */\n  display: flex;\n  justify-content: center;\n}\n.nav-items-flex {\n    font-family: Playfair Display, Regular;\n    font-size: 20px;\n    line-height: 27px;\n    color: #1D1D1D;\n    padding: 0px 3.083vw;\n    cursor: pointer;\n    z-index: 1000;\n}\n.nav-active{\n    font-weight: bold;\n    /* letter-spacing: 0.2px; */\n}\n.nav-items-flex-active {\n    font-family: Playfair Display, Bold;\n    font-weight: bold;\n\n}\n.nav-height{\n    height: inherit;\n    padding-left: 0px;\n    padding-right: 0px;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n.nav-transcluent{\n    content: \"\";\n    position: fixed;\n    left: 0px;\n    right: 0px;\n    top: 0px;\n    bottom: 0px;\n    box-shadow: rgba(255, 255, 255, 0.3) 0px 0px 0px 3000px inset;\n    -webkit-filter: blur(10px);\n            filter: blur(10px);\n    background: inherit;\n    margin-left: -9px;\n    width: 106%;\n}\n.navbar-toggler {\n    padding: 0.1rem .25rem;\n    font-size: 1.21rem;\n    line-height: 1;\n    background-color: transparent;\n    border:1px solid #80808061;\n    border-radius: .25rem;\n}\n/*Landscape Mobile*/\n@media (min-width: 481px) and (max-width: 812px) {\n\n    .nav-height{\n    background-size: unset;\n    }\n  \n    .nav-items-flex {\n        font-size: 0.950rem;\n    }\n    ul li{\n        z-index: 3;\n        padding:13px;\n        font-family: Playfair Display, Regular;\n    }\n    .music-bg{\n        right: 20px;\n        left: unset;\n        width: 130px;\n    height: 33.17px;\n    }\n    .mg-img{\n        width: 9px;\n    }\n  }\n/*Portrait Mobile */\n@media (min-width: 320px) and (max-width: 480px) {\n\n    .nav-height{\n        background-size: unset;\n        }\n    \n    .nav-items-flex {\n        font-size: 0.950rem;\n    }\n    ul li{\n        z-index: 3;\n        padding:13px;\n        font-family: Playfair Display, Regular;\n    }\n    .music-bg{\n        right: 20px;\n        left: unset;\n        width: 130px;\n    height: 33.17px;\n    }\n    .mg-img{\n        width: 8px;\n    }\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvbmF2aWdhdGlvbi9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0NBQ25CLG9CQUFvQjtDQUNwQixpQkFBaUI7Q0FDakI7QUFDRDtJQUNJLFlBQVk7Q0FDZixtQkFBbUI7Q0FDbkIsb0JBQW9CO0NBQ3BCLFdBQVc7Q0FDWCxPQUFPO0NBQ1AsUUFBUTtDQUNSLFNBQVM7Q0FDVCxVQUFVO0NBQ1YscURBQXFEO0NBQ3JELDBCQUFrQjtTQUFsQixrQkFBa0I7Q0FDbEI7QUFFRDtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osMkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWix3REFBd0Q7O0NBRTNEO0FBQ0Q7SUFDSSxZQUFZO0NBQ2YsbUJBQW1CO0NBQ25CLDBCQUEwQjtDQUMxQixXQUFXO0NBQ1gsT0FBTztDQUNQLFFBQVE7Q0FDUixTQUFTO0NBQ1QsVUFBVTtDQUNWLHFEQUFxRDtDQUNyRCwwQkFBa0I7U0FBbEIsa0JBQWtCOztDQUVsQjtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0NBQ2Q7QUFDRDtJQUNJLG1CQUFtQjtZQUNYLGdCQUFnQjtZQUNoQixZQUFZO1lBQ1osZ0JBQWdCO1lBQ2hCLFFBQVE7Q0FDbkI7QUFDRDtJQUNJLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsb0JBQW9CO0tBQ25CLGdCQUFnQjtDQUNwQjtBQUNEO0lBQ0ksOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtDQUNsQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQixDQUFDLFlBQVk7RUFDbkMsZ0NBQWdDLENBQUMsaUJBQWlCO0VBQ2xELGNBQWM7RUFDZCx3QkFBd0I7Q0FDekI7QUFDRDtJQUNJLHVDQUF1QztJQUN2QyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQiw0QkFBNEI7Q0FDL0I7QUFDRDtJQUNJLG9DQUFvQztJQUNwQyxrQkFBa0I7O0NBRXJCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsdUJBQXVCO0NBQzFCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixXQUFXO0lBQ1gsU0FBUztJQUNULFlBQVk7SUFDWiw4REFBOEQ7SUFDOUQsMkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixzQkFBc0I7Q0FDekI7QUFFRCxvQkFBb0I7QUFDcEI7O0lBRUk7SUFDQSx1QkFBdUI7S0FDdEI7O0lBRUQ7UUFDSSxvQkFBb0I7S0FDdkI7SUFDRDtRQUNJLFdBQVc7UUFDWCxhQUFhO1FBQ2IsdUNBQXVDO0tBQzFDO0lBQ0Q7UUFDSSxZQUFZO1FBQ1osWUFBWTtRQUNaLGFBQWE7SUFDakIsZ0JBQWdCO0tBQ2Y7SUFDRDtRQUNJLFdBQVc7S0FDZDtHQUNGO0FBQ0gsb0JBQW9CO0FBQ2xCOztJQUVFO1FBQ0ksdUJBQXVCO1NBQ3RCOztJQUVMO1FBQ0ksb0JBQW9CO0tBQ3ZCO0lBQ0Q7UUFDSSxXQUFXO1FBQ1gsYUFBYTtRQUNiLHVDQUF1QztLQUMxQztJQUNEO1FBQ0ksWUFBWTtRQUNaLFlBQVk7UUFDWixhQUFhO0lBQ2pCLGdCQUFnQjtLQUNmO0lBQ0Q7UUFDSSxXQUFXO0tBQ2Q7R0FDRiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldC1tb2R1bGVzL25hdmlnYXRpb24vbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWNvbnR7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcblx0YmFja2dyb3VuZDogaW5oZXJpdDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5oZWFkZXItY29udDo6YmVmb3Jle1xuICAgIGNvbnRlbnQ6IFwiXCI7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0YmFja2dyb3VuZDogaW5oZXJpdDtcblx0ei1pbmRleDogMDtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcblx0Ym90dG9tOiAwO1xuXHRib3gtc2hhZG93OiBpbnNldCAwIDAgMjAwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xuXHRmaWx0ZXI6IGJsdXIoOHB4KTtcbn1cblxuLm5hdi1jb250YWluZXIge1xuICAgIGhlaWdodDogNjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmaWx0ZXI6IGJsdXIoNTBweCk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbn1cbi5tdXNpYy1iZ3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDE1MXB4O1xuICAgIGhlaWdodDogMzcuMTdweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbGVmdDogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCM3YzczNjk2MSwgI2E4YTI5NDk5KTtcbiAgICBcbn1cbi5tdXNpYy1iZzo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJhY2tncm91bmQtaW1hZ2U6IGluaGVyaXQ7XG5cdHotaW5kZXg6IDA7XG5cdHRvcDogMDtcblx0bGVmdDogMDtcblx0cmlnaHQ6IDA7XG5cdGJvdHRvbTogMDtcblx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDIwMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcblx0ZmlsdGVyOiBibHVyKDhweCk7XG5cbn1cbi5tZy1pbWd7XG4gICAgbWFyZ2luLXRvcDogLTNweDtcbiAgICB3aWR0aDogMTJweDtcbiAgICB3aWR0aDogOXB4O1xufVxuLm1nLXR4dC1jb257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgICBsZWZ0OiAwO1xufVxuLm1nLXR4dC1pY28ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgaGVpZ2h0OiBpbmhlcml0O1xufVxuLm11c2ljLXR4dHtcbiAgICBmb250LWZhbWlseTogUGxheWZhaXIgRGlzcGxheTtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA5cHg7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG4ubmF2LWZsZXgge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4OyAvKiBTYWZhcmkgKi9cbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogU2FmYXJpIDYuMSsgKi9cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubmF2LWl0ZW1zLWZsZXgge1xuICAgIGZvbnQtZmFtaWx5OiBQbGF5ZmFpciBEaXNwbGF5LCBSZWd1bGFyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICBjb2xvcjogIzFEMUQxRDtcbiAgICBwYWRkaW5nOiAwcHggMy4wODN2dztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgei1pbmRleDogMTAwMDtcbn1cbi5uYXYtYWN0aXZle1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC8qIGxldHRlci1zcGFjaW5nOiAwLjJweDsgKi9cbn1cbi5uYXYtaXRlbXMtZmxleC1hY3RpdmUge1xuICAgIGZvbnQtZmFtaWx5OiBQbGF5ZmFpciBEaXNwbGF5LCBCb2xkO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG59XG4ubmF2LWhlaWdodHtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5uYXYtdHJhbnNjbHVlbnR7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgdG9wOiAwcHg7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgYm94LXNoYWRvdzogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIDBweCAwcHggMHB4IDMwMDBweCBpbnNldDtcbiAgICBmaWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICBtYXJnaW4tbGVmdDogLTlweDtcbiAgICB3aWR0aDogMTA2JTtcbn1cbi5uYXZiYXItdG9nZ2xlciB7XG4gICAgcGFkZGluZzogMC4xcmVtIC4yNXJlbTtcbiAgICBmb250LXNpemU6IDEuMjFyZW07XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjODA4MDgwNjE7XG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xufVxuXG4vKkxhbmRzY2FwZSBNb2JpbGUqL1xuQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogODEycHgpIHtcblxuICAgIC5uYXYtaGVpZ2h0e1xuICAgIGJhY2tncm91bmQtc2l6ZTogdW5zZXQ7XG4gICAgfVxuICBcbiAgICAubmF2LWl0ZW1zLWZsZXgge1xuICAgICAgICBmb250LXNpemU6IDAuOTUwcmVtO1xuICAgIH1cbiAgICB1bCBsaXtcbiAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgcGFkZGluZzoxM3B4O1xuICAgICAgICBmb250LWZhbWlseTogUGxheWZhaXIgRGlzcGxheSwgUmVndWxhcjtcbiAgICB9XG4gICAgLm11c2ljLWJne1xuICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgbGVmdDogdW5zZXQ7XG4gICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6IDMzLjE3cHg7XG4gICAgfVxuICAgIC5tZy1pbWd7XG4gICAgICAgIHdpZHRoOiA5cHg7XG4gICAgfVxuICB9XG4vKlBvcnRyYWl0IE1vYmlsZSAqL1xuICBAbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuXG4gICAgLm5hdi1oZWlnaHR7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogdW5zZXQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAubmF2LWl0ZW1zLWZsZXgge1xuICAgICAgICBmb250LXNpemU6IDAuOTUwcmVtO1xuICAgIH1cbiAgICB1bCBsaXtcbiAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgcGFkZGluZzoxM3B4O1xuICAgICAgICBmb250LWZhbWlseTogUGxheWZhaXIgRGlzcGxheSwgUmVndWxhcjtcbiAgICB9XG4gICAgLm11c2ljLWJne1xuICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgbGVmdDogdW5zZXQ7XG4gICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6IDMzLjE3cHg7XG4gICAgfVxuICAgIC5tZy1pbWd7XG4gICAgICAgIHdpZHRoOiA4cHg7XG4gICAgfVxuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/widget-modules/navigation/nav-bar/nav-bar.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/widget-modules/navigation/nav-bar/nav-bar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-cont\">\n    <nav class=\"navbar navbar-expand-md fixed-top nav-height\" role=\"navigation\">\n        <!-- <div [ngStyle]=\"!isCollapsed ? {'height':'300px'}:{'height':'45px'}\" class=\"nav-container nav-transcluent\"></div>  -->\n        <div class=\"navbar-light\" style=\"z-index: 3;\">\n           \n            <button style=\" margin-left: 15px;\n            margin-top: -2px;\" class=\"navbar-toggler\" type=\"button\" role=\"button\" data-toggle=\"collapse\" href=\"#navbarTogglerDemo02\"  aria-expanded=\"false\"\n                aria-label=\"Toggle navigation\" (click)=\"onChange()\"  aria-controls=\"navbarTogglerDemo02\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n        </div>\n        <div (click)=\"toggleMusic()\" class=\"music-bg\">\n            <div class=\"mg-txt-con\">\n                <div class=\"mg-txt-ico\">\n                    <img [src]=\"!playMusic ? 'assets/play-button.svg':'assets/pause-button.svg'\" class=\"mg-img\" />\n                    <span *ngIf=\"playMusic\" class=\"music-txt\">Pause Music</span>\n                    <span *ngIf=\"!playMusic\" class=\"music-txt\">Play Music</span>\n                </div>\n            </div>\n        </div>\n        <div  class=\"navbar-collapse collapse\" id=\"navbarTogglerDemo02\" >\n            <div class=\"d-none d-sm-none d-md-block d-lg-block\" style=\"width: 100%\">\n                <div class=\"nav-flex\">\n                    <div  class=\"nav-items-flex nav-scroll\">\n                        <a href=\"#home\" i=\"home\" (click)=\"sendGA('home');\" class=\"nav-active\"  style=\"color: inherit;text-decoration: none\"  >HOME</a>\n                    </div>\n                    <div class=\"nav-items-flex nav-scroll\">\n                        <a href=\"#album\" i=\"album\" (click)=\"sendGA('album');\" style=\"color: inherit;text-decoration: none\" >ALBUMS</a>\n                    </div>\n                    <div  class=\"nav-items-flex nav-scroll\">\n                        <a href=\"#guestbook\" (click)=\"sendGA('guestbook');\" style=\"color: inherit;text-decoration: none\" >GUEST BOOK</a>\n                    </div>\n                    <div  class=\"nav-items-flex nav-scroll\">\n                        <a (click)=\"sendGA('share');\" href=\"#share\"  style=\"color: inherit;text-decoration: none\">SHARE</a>\n                    </div>\n\n                </div>\n            </div>\n            <div class=\"d-block d-sm-block d-md-none\">\n                <ul class=\"navbar-nav mr-auto\" style=\"padding-top: 13px;font-size: 1.25rem;\">\n                    <li  class=\"nav-item nav-scroll\">\n                        <a href=\"#home\"    style=\"color: inherit;text-decoration: none\" \n                             (click)=\"onChange();sendGA('home')\" class=\"nav-active\" routerLinkActive=\"active\">HOME</a>\n                    </li>\n                    <li class=\"nav-item nav-scroll\">\n                        <a href=\"#album\" (click)=\"sendGA('album');onChange()\" style=\"color: inherit;text-decoration: none\" \n                            >ALBUMS</a>\n                    </li>\n                    <li class=\"nav-item nav-scroll\">\n                        <a href=\"#guestbook\" (click)=\"sendGA('guestbook');onChange()\" style=\"color: inherit;text-decoration: none\" >GUEST BOOK</a>\n                    </li>\n                    <li class=\"nav-item nav-scroll\">\n                        <a href=\"#share\" (click)=\"sendGA('share');onChange()\"  style=\"color: inherit;text-decoration: none\">SHARE</a>\n                    </li>\n                </ul>\n\n            </div>\n\n\n        </div>\n    </nav>\n</div>"

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
        this.playMusic = true;
        this.isCollapsedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NavBarComponent.prototype.ngOnInit = function () {
        $(".nav-scroll a").on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: ($(hash).offset().top + 50)
                }, 800, function () {
                });
            }
        });
    };
    NavBarComponent.prototype.sendGA = function (position) {
        window.ga('send', 'pageview', { 'page': location.pathname + location.search + position });
        $('.nav-scroll a').removeClass('nav-active');
        $('.nav-scroll a[href=#' + position + ']').addClass('nav-active');
    };
    NavBarComponent.prototype.onChange = function () {
        this.isCollapsed = !this.isCollapsed;
        this.isCollapsedChange.emit(this.isCollapsed);
        $('.navbar-collapse').collapse('hide');
    };
    NavBarComponent.prototype.toggleMusic = function () {
        this.playMusic = !this.playMusic;
        if (this.playMusic) {
            $('#player').get(0).play();
        }
        else {
            $('#player').get(0).pause();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NavBarComponent.prototype, "audioUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NavBarComponent.prototype, "imageUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NavBarComponent.prototype, "isCollapsed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NavBarComponent.prototype, "isCollapsedChange", void 0);
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

module.exports = ".event-big-card-conatiner {\r\n    width: 100%;\r\n    padding-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n#events {\r\n    padding-top: 10px;\r\n}\r\n.event-small-card-conatiner {\r\n    width: 50%;\r\n    display: inline-block;\r\n    padding-top: 10px;\r\n    \r\n}\r\n.event-large-card {\r\n    padding-top: 5pxpx;\r\n    margin-bottom: 5pxpx;\r\n    max-height: inherit;\r\n    position: relative;\r\n    cursor: pointer;\r\n}\r\n.event-small-card {\r\n    padding-top: 5pxpx;\r\n    padding-bottom: 5pxpx;\r\n    max-height: inherit;\r\n    position: relative;\r\n    cursor: pointer;\r\n}\r\n.event-label{\r\n    color: #FFFFFF;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    font-family: Playfair Display, Regular;\r\n    font-size: 1.7vw;\r\n    line-height: 40px;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n}\r\n.small-card-left-padding {\r\n    padding-left: 5px;\r\n}\r\n.small-card-right-padding {\r\n    padding-right: 5px;\r\n}\r\n#bottom-mandala{\r\n    opacity: .81;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n/* \r\n  ##Device = Low Resolution Tablets, Mobiles (Landscape)\r\n  ##Screen = B/w 481px to 767px\r\n*/\r\n@media (min-width: 481px) and (max-width: 812px) {\r\n  \r\n    .event-small-card-conatiner {\r\n        width: 100%;\r\n        padding-bottom: 2px;\r\n        padding-top: 2px;\r\n    }\r\n    .small-card-right-padding{\r\n        padding-right: 0px;\r\n    }\r\n    .small-card-left-padding{\r\n        padding-left: 0px;\r\n    }\r\n    .event-label{\r\n        font-size: 5.2vw;\r\n    }\r\n    .event-big-card-conatiner {\r\n        margin-bottom: 4px;\r\n        padding-bottom: 4px;\r\n        padding-top: 2px;\r\n    }\r\n    \r\n  }\r\n/* \r\n    ##Device = Most of the Smartphones Mobiles (Portrait)\r\n    ##Screen = B/w 320px to 479px\r\n  */\r\n@media (min-width: 320px) and (max-width: 480px) {\r\n    .event-big-card-conatiner {\r\n        margin-bottom: 4px;\r\n        padding-bottom: 4px;\r\n        padding-top: 2px;\r\n    }\r\n    \r\n    .event-small-card-conatiner {\r\n        width: 100%;\r\n        padding-bottom: 2px;\r\n        padding-top: 2px;\r\n    }\r\n\r\n   .small-card-right-padding{\r\n       padding-right: 0px;\r\n   }\r\n   .small-card-left-padding{\r\n    padding-left: 0px;\r\n}\r\n.event-label{\r\n    font-size: 5vw;\r\n}\r\n    \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvd2VkZGluZy1ldmVudHMvd2VkZGluZy1ldmVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCOztDQUVyQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtJQUNWLHlDQUFpQztZQUFqQyxpQ0FBaUM7SUFDakMsdUNBQXVDO0lBQ3ZDLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2Qsd0JBQXdCO0NBQzNCO0FBRUQ7OztFQUdFO0FBRUY7O0lBRUk7UUFDSSxZQUFZO1FBQ1osb0JBQW9CO1FBQ3BCLGlCQUFpQjtLQUNwQjtJQUNEO1FBQ0ksbUJBQW1CO0tBQ3RCO0lBQ0Q7UUFDSSxrQkFBa0I7S0FDckI7SUFDRDtRQUNJLGlCQUFpQjtLQUNwQjtJQUNEO1FBQ0ksbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUNwQixpQkFBaUI7S0FDcEI7O0dBRUY7QUFFRDs7O0lBR0U7QUFFRjtJQUNFO1FBQ0ksbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUNwQixpQkFBaUI7S0FDcEI7O0lBRUQ7UUFDSSxZQUFZO1FBQ1osb0JBQW9CO1FBQ3BCLGlCQUFpQjtLQUNwQjs7R0FFRjtPQUNJLG1CQUFtQjtJQUN0QjtHQUNEO0lBQ0Msa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxlQUFlO0NBQ2xCOztHQUVFIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvd2VkZGluZy1ldmVudHMvd2VkZGluZy1ldmVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ldmVudC1iaWctY2FyZC1jb25hdGluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuI2V2ZW50cyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG4uZXZlbnQtc21hbGwtY2FyZC1jb25hdGluZXIge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgXHJcbn1cclxuLmV2ZW50LWxhcmdlLWNhcmQge1xyXG4gICAgcGFkZGluZy10b3A6IDVweHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5ldmVudC1zbWFsbC1jYXJkIHtcclxuICAgIHBhZGRpbmctdG9wOiA1cHhweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHhweDtcclxuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmV2ZW50LWxhYmVse1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgZm9udC1mYW1pbHk6IFBsYXlmYWlyIERpc3BsYXksIFJlZ3VsYXI7XHJcbiAgICBmb250LXNpemU6IDEuN3Z3O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zbWFsbC1jYXJkLWxlZnQtcGFkZGluZyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG4uc21hbGwtY2FyZC1yaWdodC1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG4jYm90dG9tLW1hbmRhbGF7XHJcbiAgICBvcGFjaXR5OiAuODE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIFxyXG4gICMjRGV2aWNlID0gTG93IFJlc29sdXRpb24gVGFibGV0cywgTW9iaWxlcyAoTGFuZHNjYXBlKVxyXG4gICMjU2NyZWVuID0gQi93IDQ4MXB4IHRvIDc2N3B4XHJcbiovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA4MTJweCkge1xyXG4gIFxyXG4gICAgLmV2ZW50LXNtYWxsLWNhcmQtY29uYXRpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICB9XHJcbiAgICAuc21hbGwtY2FyZC1yaWdodC1wYWRkaW5ne1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgIH1cclxuICAgIC5zbWFsbC1jYXJkLWxlZnQtcGFkZGluZ3tcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIH1cclxuICAgIC5ldmVudC1sYWJlbHtcclxuICAgICAgICBmb250LXNpemU6IDUuMnZ3O1xyXG4gICAgfVxyXG4gICAgLmV2ZW50LWJpZy1jYXJkLWNvbmF0aW5lciB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuICBcclxuICAvKiBcclxuICAgICMjRGV2aWNlID0gTW9zdCBvZiB0aGUgU21hcnRwaG9uZXMgTW9iaWxlcyAoUG9ydHJhaXQpXHJcbiAgICAjI1NjcmVlbiA9IEIvdyAzMjBweCB0byA0NzlweFxyXG4gICovXHJcbiAgXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5ldmVudC1iaWctY2FyZC1jb25hdGluZXIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ldmVudC1zbWFsbC1jYXJkLWNvbmF0aW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgfVxyXG5cclxuICAgLnNtYWxsLWNhcmQtcmlnaHQtcGFkZGluZ3tcclxuICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgfVxyXG4gICAuc21hbGwtY2FyZC1sZWZ0LXBhZGRpbmd7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG4uZXZlbnQtbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDV2dztcclxufVxyXG4gICAgXHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/widget-modules/wedding-events/wedding-events.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/widget-modules/wedding-events/wedding-events.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"events\">\n                \n                                \n                <!-- [routerLink]=\"['/albums',event.title,event.background,true]\" -->\n\n         <div *ngFor=\"let event of weddingEventList;index as i\" [ngClass]=\"event.type === 'large' ? 'event-big-card-conatiner' : 'event-small-card-conatiner'\" (click)=\"fetchAlbum(event.action)\">\n                                    <div  (click)=\"goToPage(event.title,event.background)\"  *ngIf=\"event.type === 'large'\" class=\"event-large-card\">\n                                                <a  class=\"tilter tilter--1\">\n                                                                <figure class=\"tilter__figure\">\n                                                                        <img class=\"tilter__image\" [src]=\"event.background\" alt=\"img02\" />\n                                                                        <div class=\"tilter__deco tilter__deco--shine\"><div></div></div>\n                                                                        <div class=\"event-label\">{{event.title}}</div>\n                                                                </figure>\n                                                        </a>\n                                            <!-- <img style=\"max-height: inherit;width: 100%\" [src]=\"event.background\"/>\n                                            <div class=\"event-label\">{{event.title}}</div> -->\n                                              \n                                    </div>\n                                    <div (click)=\"goToPage(event.title,event.background)\"  *ngIf=\"event.type !== 'large'\" class=\"event-small-card\" [ngClass]=\"(i+1) % 2 !== 0 ? 'small-card-left-padding' : 'small-card-right-padding'\">\n                                                <a  class=\"tilter tilter--1\">\n                                                                <figure class=\"tilter__figure\">\n                                                                        <img class=\"tilter__image\" [src]=\"event.background\" alt=\"img02\" />\n                                                                        <div class=\"tilter__deco tilter__deco--shine\"><div></div></div>\n                                                                        <div class=\"event-label\">{{event.title}}</div>\n                                                                </figure>\n                                                        </a>   \n                                        <!-- <img style=\"max-height: inherit;width: 100%\" [src]=\"event.background\"/>\n                                                    <div class=\"event-label\">{{event.title}}</div> -->\n                                     </div>\n        </div>\n\n\n\n           <div class=\"d-none d-sm-none d-md-none d-lg-block\">\n                <div id=\"bottom-mandala\" >\n                        <img style=\"width:68vw\" src=\"assets/mandala-bottom.png\"/>\n                </div>\n           </div> \n           <div id=\"guestbook\" class=\"target\">\n\n           </div>            \n        \n  <!-- <div *ngFor=\"let eventList of weddingEventList;index as i\">\n            <div [ngClass]=\"i === 0 ? 'event-big-card-conatiner' : 'event-small-card-conatiner'\" (click)=\"fetchAlbum(event.action)\" *ngFor=\"let event of eventList.row;index as j\">\n                <div  *ngIf=\"i === 0\" class=\"event-large-card\">\n                         <img style=\"max-height: inherit;width: 100%\" [src]=\"event.backgroundImage\"/>\n                        <div class=\"event-label\">{{event.name}}</div>\n                          \n                </div>\n                <div *ngIf=\"i === 1\" class=\"event-small-card\" [ngClass]=\"(j+1) % 2 !== 0 ? 'small-card-right-padding' : 'small-card-left-padding'\">\n                        <img style=\"max-height: inherit;width: 100%\" [src]=\"event.backgroundImage\"/>\n                                <div class=\"event-label\">{{event.name}}</div>\n                 </div>\n            </div>\n    </div> -->\n    \n    <!-- <div *ngIf=\"albumOverviewData?.data?.albumItems?.length>0\">\n        <app-albums [albumArray] =\"albumOverviewData?.data?.albumItems\"></app-albums>\n    </div>\n    <div *ngIf=\"albumOverviewData?.data?.albumItems?.length>0\">\n            <app-albums [albumArray] =\"albumOverviewData?.data?.albumItems\"></app-albums>\n        </div> -->\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WeddingEventsComponent = /** @class */ (function () {
    function WeddingEventsComponent(albumOverviewService, route) {
        this.albumOverviewService = albumOverviewService;
        this.route = route;
    }
    WeddingEventsComponent.prototype.fetchAlbum = function (albumUrl) {
        var _this = this;
        this.albumOverviewService.getAlbumOverview(albumUrl).subscribe(function (data) {
            _this.albumOverviewData = data;
        });
    };
    WeddingEventsComponent.prototype.goToPage = function (event, url) {
        this.route.navigate(['/albums'], { queryParams: { name: event, c: true } });
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_access_album_overview_album_overview_service__WEBPACK_IMPORTED_MODULE_2__["AlbumOverviewService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WeddingEventsComponent);
    return WeddingEventsComponent;
}());



/***/ }),

/***/ "./src/app/widgets/albums/albums.component.css":
/*!*****************************************************!*\
  !*** ./src/app/widgets/albums/albums.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\n\tposition: absolute;\n\theight: 85px;\n    width: 100%;\n    /* border: 1px solid blue; */\n}\n.header .row{\n\theight: inherit;\n}\n.header .row div{\n\theight: inherit;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.content-block{\n\tposition: absolute;\n\ttop: 85px;\n\twidth: 100%;\n\t/* position: relative; */\n\t/* margin-top: 20px; */\n}\n.content-block div{\n\tpadding: 0;\n}\n.img-container{\n\theight: inherit;\n}\n.event-text{\n\tfont-family: Playfair Display, Regular;\n\tfont-size: 2.4895vw;\n\ttext-align: center; \n}\n.back-icon{\n\twidth: 40px;\n\tcursor: pointer;\n}\n.page-right{\n\tposition: absolute;\n    top: 48%;\n\tright: 53px;\n\tfont-size: 35px;\n    color: #80808091;\n}\n.page-left{\n\tposition: absolute;\n    top: 48%;\n\tleft: 53px;\n\tfont-size: 35px;\n    color: #80808091;\n}\n/* \n  ##Device = Low Resolution Tablets, Mobiles (Landscape)\n  ##Screen = B/w 481px to 767px\n*/\n@media (min-width: 481px) and (max-width: 812px) {\n\n\t.event-text{\n\t\tfont-size: 4.4895vw;\n\t\tmargin-top: 14px;\n\t}\n\t.back-icon{\n\t\twidth: 30px;\n\t}\n\t.content-block{\n\t\ttop: 25%;\n\t}\n\t.img-container{\n\t\theight: unset;\n\t}\n\t.page-left{\n\ttop: 45%;\n    left: 12px;\n    color: #8080805c;\n\tfont-size: 26px;\n\t}\n\t.page-right{\n\t\ttop: 45%;\n\t\tright: 12px;\n\t\tcolor: #8080805c;\n\t\tfont-size: 26px;\n\t}\n}\n/*Portrait Mobile */\n@media (min-width: 320px) and (max-width: 480px) {\n\t\n\t.event-text{\n\t\tfont-size: 4.4895vw;\n\t\tmargin-top: 14px;\n\t}\n\t.back-icon{\n\t\twidth: 28px;\n\t}\n\t.content-block{\n\t\ttop: 25%;\n\t}\n\t.img-container{\n\t\theight: unset;\n\t}\n\t.page-left{\n\t\ttop: 117px;\n\t\tleft: 12px;\n\t\tcolor: #8080805c;\n\t\tfont-size: 26px;\n\t\t}\n\t\t.page-right{\n\t\t\ttop: 117px;\n\t\t\tright: 12px;\n\t\t\tcolor: #8080805c;\n\t\t\tfont-size: 26px;\n\t}\n}\n/* @media screen and (orientation:landscape) {\n\t.img-container-album {\n\t\tmargin: 0%;\n\t}\n } */\n.sample-flipbook{\n\twidth:400px;\n\theight:200px;\n\ttransition:margin-left 0.2s;\n}\n.sample-flipbook .page{\n\twidth:200px;\n\theight:200px;\n\tbackground-color:white;\n\tline-height:300px;\n\tfont-size:20px;\n}\n.sample-flipbook .page-wrapper{\n\t-webkit-perspective:2000px;\n\t-ms-perspective:2000px;\n\t-o-perspective:2000px;\n\tperspective:2000px;\n}\n.sample-flipbook .hard{\n\tbackground:#ccc !important;\n\tcolor:#333;\n\t-o-box-shadow:inset 0 0 5px #666;\n\t-ms-box-shadow:inset 0 0 5px #666;\n\tbox-shadow:inset 0 0 5px #666;\n\tfont-weight:bold;\n}\n.sample-flipbook .odd{\n\tbackground:-webkit-gradient(linear, right top, left top, color-stop(0.95, #FFF), color-stop(1, #DADADA));\n\tbackground-image:linear-gradient(right, #FFF 95%, #C4C4C4 100%);\n\t-o-box-shadow:inset 0 0 5px #666;\n\t-ms-box-shadow:inset 0 0 5px #666;\n\tbox-shadow:inset 0 0 5px #666;\n\t\n}\n.sample-flipbook .even{\n\tbackground:-webkit-gradient(linear, left top, right top, color-stop(0.95, #fff), color-stop(1, #dadada));\n\tbackground-image:linear-gradient(left, #fff 95%, #dadada 100%);\n\t-o-box-shadow:inset 0 0 5px #666;\n\t-ms-box-shadow:inset 0 0 5px #666;\n\tbox-shadow:inset 0 0 5px #666;\n}\n/****app*/\n.fit-top-container {\n    width: 1000px;\n    height: 500px;\n}\n.share-photo {\n\tfont-family: Playfair Display, Regular;\n    font-size: 1vw;\n}\n@media (min-width : 0px) and (max-width : 980px) and (orientation : landscape) { \n\t.land{\n\t\tdisplay: none !important;\n\t}\n\t.img-container{\n\t\theight: inherit;\n\t}\n\t.page-right{\n\t\tright: 25px;\n}\n.page-left{\n\tleft: 25px;\n}\n\t/* #land-0{\n\t\tdisplay: none !important;\n\t} */\n\t/* #land-1{\n\t\tdisplay: none !important;\n\t} */\n\t.content-block{\n\t\ttop: 0;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy9hbGJ1bXMvYWxidW1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxtQkFBbUI7Q0FDbkIsYUFBYTtJQUNWLFlBQVk7SUFDWiw2QkFBNkI7Q0FDaEM7QUFDRDtDQUNDLGdCQUFnQjtDQUNoQjtBQUNEO0NBQ0MsZ0JBQWdCO0lBQ2IsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixvQkFBb0I7Q0FDdkI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixVQUFVO0NBQ1YsWUFBWTtDQUNaLHlCQUF5QjtDQUN6Qix1QkFBdUI7Q0FDdkI7QUFDRDtDQUNDLFdBQVc7Q0FDWDtBQUNEO0NBQ0MsZ0JBQWdCO0NBQ2hCO0FBQ0Q7Q0FDQyx1Q0FBdUM7Q0FDdkMsb0JBQW9CO0NBQ3BCLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQjtBQUNEO0NBQ0MsbUJBQW1CO0lBQ2hCLFNBQVM7Q0FDWixZQUFZO0NBQ1osZ0JBQWdCO0lBQ2IsaUJBQWlCO0NBQ3BCO0FBQ0Q7Q0FDQyxtQkFBbUI7SUFDaEIsU0FBUztDQUNaLFdBQVc7Q0FDWCxnQkFBZ0I7SUFDYixpQkFBaUI7Q0FDcEI7QUFDQTs7O0VBR0M7QUFFRjs7Q0FFQztFQUNDLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakI7Q0FDRDtFQUNDLFlBQVk7RUFDWjtDQUNEO0VBQ0MsU0FBUztFQUNUO0NBQ0Q7RUFDQyxjQUFjO0VBQ2Q7Q0FDRDtDQUNBLFNBQVM7SUFDTixXQUFXO0lBQ1gsaUJBQWlCO0NBQ3BCLGdCQUFnQjtFQUNmO0NBQ0Q7RUFDQyxTQUFTO0VBQ1QsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEI7Q0FDRDtBQUVELG9CQUFvQjtBQUNwQjs7Q0FFQztFQUNDLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakI7Q0FDRDtFQUNDLFlBQVk7RUFDWjtDQUNEO0VBQ0MsU0FBUztFQUNUO0NBQ0Q7RUFDQyxjQUFjO0VBQ2Q7Q0FDRDtFQUNDLFdBQVc7RUFDWCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtHQUNmO0VBQ0Q7R0FDQyxXQUFXO0dBQ1gsWUFBWTtHQUNaLGlCQUFpQjtHQUNqQixnQkFBZ0I7RUFDakI7Q0FDRDtBQUVEOzs7O0tBSUs7QUFFTDtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBS2IsNEJBQTRCO0NBQzVCO0FBRUQ7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmO0FBRUQ7Q0FDQywyQkFBMkI7Q0FFM0IsdUJBQXVCO0NBQ3ZCLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkI7QUFFRDtDQUNDLDJCQUEyQjtDQUMzQixXQUFXO0NBR1gsaUNBQWlDO0NBQ2pDLGtDQUFrQztDQUNsQyw4QkFBOEI7Q0FDOUIsaUJBQWlCO0NBQ2pCO0FBRUQ7Q0FDQyx5R0FBeUc7Q0FLekcsZ0VBQWdFO0NBR2hFLGlDQUFpQztDQUNqQyxrQ0FBa0M7Q0FDbEMsOEJBQThCOztDQUU5QjtBQUVEO0NBQ0MseUdBQXlHO0NBS3pHLCtEQUErRDtDQUcvRCxpQ0FBaUM7Q0FDakMsa0NBQWtDO0NBQ2xDLDhCQUE4QjtDQUM5QjtBQUVELFVBQVU7QUFDVjtJQUNJLGNBQWM7SUFDZCxjQUFjO0NBQ2pCO0FBQ0Q7Q0FDQyx1Q0FBdUM7SUFDcEMsZUFBZTtDQUNsQjtBQUVEO0NBQ0M7RUFDQyx5QkFBeUI7RUFDekI7Q0FDRDtFQUNDLGdCQUFnQjtFQUNoQjtDQUNEO0VBQ0MsWUFBWTtDQUNiO0FBQ0Q7Q0FDQyxXQUFXO0NBQ1g7Q0FDQTs7S0FFSTtDQUNKOztLQUVJO0NBQ0o7RUFDQyxPQUFPO0VBQ1A7Q0FDRCIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvYWxidW1zL2FsYnVtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRoZWlnaHQ6IDg1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cbn1cbi5oZWFkZXIgLnJvd3tcblx0aGVpZ2h0OiBpbmhlcml0O1xufVxuLmhlYWRlciAucm93IGRpdntcblx0aGVpZ2h0OiBpbmhlcml0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250ZW50LWJsb2Nre1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogODVweDtcblx0d2lkdGg6IDEwMCU7XG5cdC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cblx0LyogbWFyZ2luLXRvcDogMjBweDsgKi9cbn1cbi5jb250ZW50LWJsb2NrIGRpdntcblx0cGFkZGluZzogMDtcbn1cbi5pbWctY29udGFpbmVye1xuXHRoZWlnaHQ6IGluaGVyaXQ7XG59XG4uZXZlbnQtdGV4dHtcblx0Zm9udC1mYW1pbHk6IFBsYXlmYWlyIERpc3BsYXksIFJlZ3VsYXI7XG5cdGZvbnQtc2l6ZTogMi40ODk1dnc7XG5cdHRleHQtYWxpZ246IGNlbnRlcjsgXG59XG4uYmFjay1pY29ue1xuXHR3aWR0aDogNDBweDtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuLnBhZ2UtcmlnaHR7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQ4JTtcblx0cmlnaHQ6IDUzcHg7XG5cdGZvbnQtc2l6ZTogMzVweDtcbiAgICBjb2xvcjogIzgwODA4MDkxO1xufVxuLnBhZ2UtbGVmdHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDglO1xuXHRsZWZ0OiA1M3B4O1xuXHRmb250LXNpemU6IDM1cHg7XG4gICAgY29sb3I6ICM4MDgwODA5MTtcbn1cbiAvKiBcbiAgIyNEZXZpY2UgPSBMb3cgUmVzb2x1dGlvbiBUYWJsZXRzLCBNb2JpbGVzIChMYW5kc2NhcGUpXG4gICMjU2NyZWVuID0gQi93IDQ4MXB4IHRvIDc2N3B4XG4qL1xuXG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA4MTJweCkge1xuXG5cdC5ldmVudC10ZXh0e1xuXHRcdGZvbnQtc2l6ZTogNC40ODk1dnc7XG5cdFx0bWFyZ2luLXRvcDogMTRweDtcblx0fVxuXHQuYmFjay1pY29ue1xuXHRcdHdpZHRoOiAzMHB4O1xuXHR9XG5cdC5jb250ZW50LWJsb2Nre1xuXHRcdHRvcDogMjUlO1xuXHR9XG5cdC5pbWctY29udGFpbmVye1xuXHRcdGhlaWdodDogdW5zZXQ7XG5cdH1cblx0LnBhZ2UtbGVmdHtcblx0dG9wOiA0NSU7XG4gICAgbGVmdDogMTJweDtcbiAgICBjb2xvcjogIzgwODA4MDVjO1xuXHRmb250LXNpemU6IDI2cHg7XG5cdH1cblx0LnBhZ2UtcmlnaHR7XG5cdFx0dG9wOiA0NSU7XG5cdFx0cmlnaHQ6IDEycHg7XG5cdFx0Y29sb3I6ICM4MDgwODA1Yztcblx0XHRmb250LXNpemU6IDI2cHg7XG5cdH1cbn1cblxuLypQb3J0cmFpdCBNb2JpbGUgKi9cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG5cdFxuXHQuZXZlbnQtdGV4dHtcblx0XHRmb250LXNpemU6IDQuNDg5NXZ3O1xuXHRcdG1hcmdpbi10b3A6IDE0cHg7XG5cdH1cblx0LmJhY2staWNvbntcblx0XHR3aWR0aDogMjhweDtcblx0fVxuXHQuY29udGVudC1ibG9ja3tcblx0XHR0b3A6IDI1JTtcblx0fVxuXHQuaW1nLWNvbnRhaW5lcntcblx0XHRoZWlnaHQ6IHVuc2V0O1xuXHR9XG5cdC5wYWdlLWxlZnR7XG5cdFx0dG9wOiAxMTdweDtcblx0XHRsZWZ0OiAxMnB4O1xuXHRcdGNvbG9yOiAjODA4MDgwNWM7XG5cdFx0Zm9udC1zaXplOiAyNnB4O1xuXHRcdH1cblx0XHQucGFnZS1yaWdodHtcblx0XHRcdHRvcDogMTE3cHg7XG5cdFx0XHRyaWdodDogMTJweDtcblx0XHRcdGNvbG9yOiAjODA4MDgwNWM7XG5cdFx0XHRmb250LXNpemU6IDI2cHg7XG5cdH1cbn1cblxuLyogQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOmxhbmRzY2FwZSkge1xuXHQuaW1nLWNvbnRhaW5lci1hbGJ1bSB7XG5cdFx0bWFyZ2luOiAwJTtcblx0fVxuIH0gKi9cblxuLnNhbXBsZS1mbGlwYm9va3tcblx0d2lkdGg6NDAwcHg7XG5cdGhlaWdodDoyMDBweDtcblx0LXdlYmtpdC10cmFuc2l0aW9uOm1hcmdpbi1sZWZ0IDAuMnM7XG5cdC1tb3otdHJhbnNpdGlvbjptYXJnaW4tbGVmdCAwLjJzO1xuXHQtbXMtdHJhbnNpdGlvbjptYXJnaW4tbGVmdCAwLjJzO1xuXHQtby10cmFuc2l0aW9uOm1hcmdpbi1sZWZ0IDAuMnM7XG5cdHRyYW5zaXRpb246bWFyZ2luLWxlZnQgMC4ycztcbn1cblxuLnNhbXBsZS1mbGlwYm9vayAucGFnZXtcblx0d2lkdGg6MjAwcHg7XG5cdGhlaWdodDoyMDBweDtcblx0YmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcblx0bGluZS1oZWlnaHQ6MzAwcHg7XG5cdGZvbnQtc2l6ZToyMHB4O1xufVxuXG4uc2FtcGxlLWZsaXBib29rIC5wYWdlLXdyYXBwZXJ7XG5cdC13ZWJraXQtcGVyc3BlY3RpdmU6MjAwMHB4O1xuXHQtbW96LXBlcnNwZWN0aXZlOjIwMDBweDtcblx0LW1zLXBlcnNwZWN0aXZlOjIwMDBweDtcblx0LW8tcGVyc3BlY3RpdmU6MjAwMHB4O1xuXHRwZXJzcGVjdGl2ZToyMDAwcHg7XG59XG5cbi5zYW1wbGUtZmxpcGJvb2sgLmhhcmR7XG5cdGJhY2tncm91bmQ6I2NjYyAhaW1wb3J0YW50O1xuXHRjb2xvcjojMzMzO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xuXHQtbW96LWJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xuXHQtby1ib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2Njtcblx0LW1zLWJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xuXHRib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2Njtcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcbn1cblxuLnNhbXBsZS1mbGlwYm9vayAub2Rke1xuXHRiYWNrZ3JvdW5kOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAuOTUsICNGRkYpLCBjb2xvci1zdG9wKDEsICNEQURBREEpKTtcblx0YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudChyaWdodCwgI0ZGRiA5NSUsICNDNEM0QzQgMTAwJSk7XG5cdGJhY2tncm91bmQtaW1hZ2U6LW1vei1saW5lYXItZ3JhZGllbnQocmlnaHQsICNGRkYgOTUlLCAjQzRDNEM0IDEwMCUpO1xuXHRiYWNrZ3JvdW5kLWltYWdlOi1tcy1saW5lYXItZ3JhZGllbnQocmlnaHQsICNGRkYgOTUlLCAjQzRDNEM0IDEwMCUpO1xuXHRiYWNrZ3JvdW5kLWltYWdlOi1vLWxpbmVhci1ncmFkaWVudChyaWdodCwgI0ZGRiA5NSUsICNDNEM0QzQgMTAwJSk7XG5cdGJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHJpZ2h0LCAjRkZGIDk1JSwgI0M0QzRDNCAxMDAlKTtcblx0LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2Njtcblx0LW1vei1ib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2Njtcblx0LW8tYm94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XG5cdC1tcy1ib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2Njtcblx0Ym94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XG5cdFxufVxuXG4uc2FtcGxlLWZsaXBib29rIC5ldmVue1xuXHRiYWNrZ3JvdW5kOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAuOTUsICNmZmYpLCBjb2xvci1zdG9wKDEsICNkYWRhZGEpKTtcblx0YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmIDk1JSwgI2RhZGFkYSAxMDAlKTtcblx0YmFja2dyb3VuZC1pbWFnZTotbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmIDk1JSwgI2RhZGFkYSAxMDAlKTtcblx0YmFja2dyb3VuZC1pbWFnZTotbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsICNmZmYgOTUlLCAjZGFkYWRhIDEwMCUpO1xuXHRiYWNrZ3JvdW5kLWltYWdlOi1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmIDk1JSwgI2RhZGFkYSAxMDAlKTtcblx0YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQobGVmdCwgI2ZmZiA5NSUsICNkYWRhZGEgMTAwJSk7XG5cdC13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XG5cdC1tb3otYm94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XG5cdC1vLWJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xuXHQtbXMtYm94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XG5cdGJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xufVxuXG4vKioqKmFwcCovXG4uZml0LXRvcC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAwcHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbn1cbi5zaGFyZS1waG90byB7XG5cdGZvbnQtZmFtaWx5OiBQbGF5ZmFpciBEaXNwbGF5LCBSZWd1bGFyO1xuICAgIGZvbnQtc2l6ZTogMXZ3O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aCA6IDBweCkgYW5kIChtYXgtd2lkdGggOiA5ODBweCkgYW5kIChvcmllbnRhdGlvbiA6IGxhbmRzY2FwZSkgeyBcblx0LmxhbmR7XG5cdFx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuXHR9XG5cdC5pbWctY29udGFpbmVye1xuXHRcdGhlaWdodDogaW5oZXJpdDtcblx0fVxuXHQucGFnZS1yaWdodHtcblx0XHRyaWdodDogMjVweDtcbn1cbi5wYWdlLWxlZnR7XG5cdGxlZnQ6IDI1cHg7XG59XG5cdC8qICNsYW5kLTB7XG5cdFx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuXHR9ICovXG5cdC8qICNsYW5kLTF7XG5cdFx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuXHR9ICovXG5cdC5jb250ZW50LWJsb2Nre1xuXHRcdHRvcDogMDtcblx0fVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/widgets/albums/albums.component.html":
/*!******************************************************!*\
  !*** ./src/app/widgets/albums/albums.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade show\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"false\"\n    style=\"display: block\">\n    <div style=\"max-width: 100%;height: 100%;margin: 0;\" role=\"document\">\n        <div style=\"height: 100%;border:0;border-radius: 0;display: block;position: relative;\" class=\"modal-content\">\n            <div class=\"land header\">\n                <div class=\"row\">\n                    <div class=\"col-4\">\n                        <div data-dismiss=\"modal\" routerLink=\"/\" aria-label=\"Close\">\n                            <img class=\"back-icon\" src=\"assets/left-arrow.svg\">\n                        </div>\n                    </div>\n                    <div class=\"col-4\">\n                        <div>\n                            <h2 class=\"event-text\">{{eventName}}</h2>\n                        </div>\n                    </div>\n                    <div class=\"col-4\">\n                        <div id=\"social-icons\">\n                            <span class=\"share-label d-none d-sm-none d-md-block\">Share Photo:</span>\n                            <a href=\"http://www.facebook.com/sharer/sharer.php?u={{pageUrl}}\" target=\"_blank\">\n                                <img style=\"padding: 0 9px;\" src=\"assets/fb.svg\" />\n                            </a>\n                            <a href=\"https://twitter.com/intent/tweet?text=AaronDiyaWedding&url={{pageUrl}}\"\n                                target=\"_blank\">\n                                <img style=\"padding: 0 9px;\" src=\"assets/twitter.svg\" />\n                            </a>\n                            <img style=\"padding: 0 9px;\" src=\"assets/insta.svg\" />\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"content-block\">\n                           \n                            <div class=\"img-container\">\n                               <div  style=\"height: 400px\">\n                                   <img data-elem=\"pinchzoomer\" class=\"img-fluid media\"  style=\"display: block;margin: auto;height: inherit;\"\n                                    onload=\"this.style.display = 'block'\" [ngClass]=\"'img1'+index\" [src]=\"currentImg\"\n                                    onError=\"this.src='https://images.pixieset.com/96161171/314b55aa49b513a8398b824eaaf0b44f-xxlarge.jpg'\" />\n                             \n\n                               </div>\n                                \n                                    <div class=\"page-right\"  id=\"land-1\" *ngIf=\"albumData.data.length > index+1\" (click)=\"nextImage()\">\n                                            <i class=\"fa fa-chevron-circle-right\" style=\"cursor: pointer;\"></i>\n                                    </div>\n                                    <div id=\"land-0\" class=\"page-left\" *ngIf=\"index >= 1\" (click)=\"prevImage()\" >\n                                            <i class=\"fa fa-chevron-circle-left\" style=\"cursor: pointer;\"></i>\n                                 </div>\n                                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<img class=\"preload\" onload=\"this.style.display = 'block'\"  [src]=\"albumData.data[this.index+1].url\" style=\"width: 1px;height: 1px;\">\n<!-- <div>\n  <div>\n        <div id=\"flipbook\" class=\"sample-flipbook\"  >\n          <div *ngFor=\"let image of albumArray\" [ngStyle]=\"{'background':'url(' +image?.albumArt+ ')'}\"></div>\n        </div>\n    </div>\n</div> -->\n\n<!-- <div id=\"flipbook\" class=\"sample-flipbook\">\n    <div style=\"background-image:url(assets/pages/1.jpg)\"></div>\n\t\t\t<div (mousedown)=\"sendPhotoClickEvent()\" style=\"background-image:url(assets/pages/2.jpg)\"></div>\n\t\t\t<div style=\"background-image:url(assets/pages/3.jpg)\"></div>\n\t\t\t<div style=\"background-image:url(assets/pages/4.jpg)\"></div>\n\t\t\t<div style=\"background-image:url(assets/pages/5.jpg)\"></div>\n  </div> -->\n<!-- <img    class=\"img1\"  src=\"https://images.pixieset.com/96161171/8369170047efc5f7ba20ee9d0231c4cb-xlarge.jpg\"/>\n                                 -->\n<!-- <img  style=\"height: auto;width: 100%;\"  class=\"img1 img-fluid\"  src=\"https://images.pixieset.com/96161171/8f4f58a3c99cb0ec69338b4f6528205e-large.jpg\"/>\n                        -->\n<!-- <img  style=\"height: auto;max-width: 100%;\"  class=\"img1 img-fluid\"  src=\"https://images.pixieset.com/96161171/41fd204323654ca997802b24f30a3783-xxlarge.jpg\"/>\n                                 -->\n<!-- <img   class=\"img1\"  src=\"https://images.pixieset.com/96161171/086a155aa26902daa83cabd32a97ea9b-xlarge.jpg\"/>\n                     -->\n<!-- <div id=\"flipbook\" class=\"sample-flipbook\" style=\"    border-radius: 17px;\" >\n                                    <div class=\"hard shadow\" >\n                                        <img style=\"width: 100%;height: 100%;\" [src]=\"imgUrl\"/>\n                                    </div>\n                                    <div class=\"own size shadow\" style=\"width: 100%;height: 100%;\" *ngFor=\"let image of albumData?.data?.albumItems\">\n                                            <img style=\"width: 100%;height: 100%;\" [src]=\"image?.albumArt\"/>\n                                    </div>\n                                </div> -->\n"

/***/ }),

/***/ "./src/app/widgets/albums/albums.component.ts":
/*!****************************************************!*\
  !*** ./src/app/widgets/albums/albums.component.ts ***!
  \****************************************************/
/*! exports provided: AlbumsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsComponent", function() { return AlbumsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_access_album_overview_album_overview_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data-access/album-overview/album-overview.service */ "./src/app/data-access/album-overview/album-overview.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var AlbumsComponent = /** @class */ (function () {
    function AlbumsComponent(route, albumService, routes, location) {
        this.route = route;
        this.albumService = albumService;
        this.routes = routes;
        this.location = location;
        this.click = false;
        this.albumUrl = 'http://ec2-52-66-182-119.ap-south-1.compute.amazonaws.com:8080/album?eventName=';
    }
    AlbumsComponent.prototype.handleWheelEvent = function (event) {
        event.preventDefault();
    };
    AlbumsComponent.prototype.ngOnInit = function () {
        var _this = this;
        $('body').addClass('modal-open');
        this.route.queryParamMap
            .subscribe(function (params) {
            // this.currentImg = params.get('url') ? params.get('url') : undefined;
            _this.eventName = params.get('name');
            _this.click = params.get('c') ? true : false;
            _this.imgId = params.get('id') ? params.get('id') : undefined;
            _this.fetchAlbumData();
        });
        $(window).resize(function () {
            _this.reSizeImgCont();
        });
        this.pageUrl = location.href;
        this.reSizeImgCont();
    };
    AlbumsComponent.prototype.fetchAlbumData = function () {
        var _this = this;
        this.albumService.getAlbumOverview(this.albumUrl + this.eventName).subscribe(function (data) {
            if (_this.click) {
                _this.albumData = data;
                _this.currentImg = _this.albumData.data[0].url;
                _this.index = 0;
                _this.imgId = _this.albumData.data[_this.index]._id;
                _this.location.replaceState('/albums?name=' + _this.eventName + '&url=' + _this.albumData.data[_this.index].url + '&id=' + _this.albumData.data[_this.index]._id);
                _this.pageUrl = location.href;
                $('.preload').attr('src', _this.albumData.data[1].url);
            }
            else {
                _this.intialiseImageIndex(data);
            }
            //$('.img1' + this.index).pinchzoomer();
        });
    };
    AlbumsComponent.prototype.reSizeImgCont = function () {
        var offset = window.innerWidth > 980 ? 85 : 0;
        $('.content-block').height(window.innerHeight - offset);
    };
    AlbumsComponent.prototype.intialiseImageIndex = function (data) {
        for (var index in data.data) {
            if (data.data[index]._id === this.imgId) {
                this.albumData = data;
                console.log(index);
                this.index = parseInt(index);
            }
        }
        this.albumData = data;
        this.currentImg = this.albumData.data[this.index].url;
        $('.preload').attr('src', this.albumData.data[this.index + 1].url);
    };
    AlbumsComponent.prototype.nextImage = function () {
        var _this = this;
        if (this.albumData.data.length > (this.index + 1)) {
            this.imgId = this.albumData.data[this.index + 1]._id;
            this.location.replaceState('/albums?name=' + this.eventName + '&url=' + this.albumData.data[this.index + 1].url + '&id=' + this.albumData.data[this.index + 1]._id);
            this.pageUrl = location.href;
            $('.img1' + this.index).fadeOut(550, function () {
                $('.img1' + _this.index).attr('src', _this.albumData.data[_this.index + 1].url);
                _this.index = _this.index + 1;
            }).fadeIn(800);
        }
    };
    AlbumsComponent.prototype.prevImage = function () {
        var _this = this;
        if (this.index >= 1) {
            this.location.replaceState('/albums?name=' + this.eventName + '&url=' + this.albumData.data[this.index - 1].url + '&id=' + this.albumData.data[this.index - 1]._id);
            this.pageUrl = location.href;
            $('.img1' + this.index).fadeOut(550, function () {
                $('.img1' + _this.index).attr('src', _this.albumData.data[_this.index - 1].url);
                _this.index = _this.index - 1;
            }).fadeIn(1000);
        }
    };
    AlbumsComponent.prototype.ngOnDestroy = function () {
        $('body').removeClass('modal-open');
    };
    // IMAGE MANIPULATION and MAINTAIN ASPECT RATIO
    AlbumsComponent.prototype.resizeImageWithAspectRatio = function () {
        var maxWidth = $('.img-container-album').width(); // Max width for the image
        var maxHeight = $('.img-container-album').height(); // Max height for the image
        var ratio = 0; // Used for aspect ratio
        var width = $('.img1').width(); // Current image width
        var height = $('.img1').height(); // Current image height
        // Check if the current width is larger than the max
        if (width >= maxWidth) {
            ratio = maxWidth / width; // get ratio for scaling image
            $('.img1').css('width', maxWidth); // Set new width
            $('.img1').css("height", height * ratio); // Scale height based on ratio
            height = height * ratio; // Reset height to match scaled image
            width = width * ratio; // Reset width to match scaled image
        }
        // Check if current height is larger than max
        if (height >= maxHeight) {
            ratio = maxHeight / height; // get ratio for scaling image
            //$('.img1').css("height", );   // Set new height
            $('.img1').css("width", width * ratio); // Scale width based on ratio
            width = width * ratio; // Reset width to match scaled image
        }
    };
    AlbumsComponent.prototype.zoomImg = function () {
        // zoom();
        // /* @-<zoom ********************************************************************/
        // /******************************************************************************/
        // function zoom(classNames = {}, settings = {}) {
        //     /* Settings */
        //     var C_scaleDefault = settings["scaleDefault"] || 2; // Used on doubleclick, doubletap and resize
        //     var C_scaleDifference = settings["scaleDifference"] || 0.5; // Used on wheel zoom
        //     var C_scaleMax = settings["scaleMax"] || 10;
        //     var C_scaleMin = settings["scaleMin"] || 1;
        //     /* Selectors */
        //     var _active = classNames["active"] || "active";
        //     var _dataScale = "data-scale";
        //     var _dataTranslateX = "data-translate-x";
        //     var _dataTranslateY = "data-translate-y";
        //     var _transition = classNames["transition"] || "transition";
        //     var _visible = classNames["visible"] || "visible";
        //     var $container;
        //     var $element;
        //     var $zoom = document.getElementsByClassName(classNames["zoom"] || "zoom");
        //     /* Helpers */
        //     var capture = false;
        //     var doubleClickMonitor = [null];
        //     var containerHeight;
        //     var containerWidth;
        //     var containerOffsetX;
        //     var containerOffsetY;
        //     var initialScale;
        //     var elementHeight;
        //     var elementWidth;
        //     var heightDifference;
        //     var initialOffsetX;
        //     var initialOffsetY;
        //     var initialPinchDistance;
        //     var initialPointerOffsetX;
        //     var initialPointerOffsetX2;
        //     var initialPointerOffsetY;
        //     var initialPointerOffsetY2;
        //     var limitOffsetX;
        //     var limitOffsetY;
        //     var mousemoveCount = 0;
        //     var offset;
        //     var pinchOffsetX;
        //     var pinchOffsetY;
        //     var pointerOffsetX;
        //     var pointerOffsetX2;
        //     var pointerOffsetY;
        //     var pointerOffsetY2;
        //     var scaleDirection;
        //     var scaleDifference;
        //     var targetOffsetX;
        //     var targetOffsetY;
        //     var targetPinchDistance;
        //     var targetScale;
        //     var touchable = false;
        //     var touchCount;
        //     var touchmoveCount = 0;
        //     var doubleTapMonitor = [null];
        //     var widthDifference;
        //     /* EVENT - DOM ready ********************************************************/
        //     /****************************************************************************/
        //     for (var i = 0; i < $zoom.length; i++) {
        //         /* Initialize selectors */
        //         $container = $zoom[i];
        //         $element = $container.children[0];
        //         /* Set attributes */
        //         $element.setAttribute(_dataScale, 1);
        //         $element.setAttribute(_dataTranslateX, 0);
        //         $element.setAttribute(_dataTranslateY, 0);
        //     }
        //     /* EVENT - load - window ****************************************************/
        //     /****************************************************************************/
        //     window.addEventListener("load", function() {
        //         /* Wait for images to be loaded */
        //         for (var i = 0; i < $zoom.length; i++) {
        //             /* Initialize selectors */
        //             $container = $zoom[i];
        //             $element = $container.children[0];
        //             addClass($element, _visible);
        //         }
        //         /* EVENT - resize - window ************************************************/
        //         /**************************************************************************/
        //         window.addEventListener("resize", function() {
        //             for (var i = 0; i < $zoom.length; i++) {
        //                 /* Initialize selectors */
        //                 $container = $zoom[i];
        //                 $element = $container.children[0];
        //                 if (hasClass($container, _active) === false) {
        //                     continue;
        //                 }
        //                 /* Initialize helpers */
        //                 containerHeight = $container.clientHeight;
        //                 containerWidth = $container.clientWidth;
        //                 elementHeight = $element.clientHeight;
        //                 elementWidth = $element.clientWidth;
        //                 initialOffsetX = parseFloat($element.getAttribute(_dataTranslateX));
        //                 initialOffsetY = parseFloat($element.getAttribute(_dataTranslateY));
        //                 targetScale = C_scaleDefault;
        //                 limitOffsetX = ((elementWidth * targetScale) - containerWidth) / 2;
        //                 limitOffsetY = ((elementHeight * targetScale) - containerHeight) / 2;
        //                 targetOffsetX = (elementWidth * targetScale) > containerWidth ? minMax(initialOffsetX, limitOffsetX * (-1), limitOffsetX) : 0;
        //                 targetOffsetY = (elementHeight * targetScale) > containerHeight ? minMax(initialOffsetY, limitOffsetY * (-1), limitOffsetY) : 0;
        //                 if (targetScale === 1) {
        //                     removeClass($container, _active);
        //                 }
        //                 /* Set attributes */
        //                 $element.setAttribute(_dataScale, targetScale);
        //                 $element.setAttribute(_dataTranslateX, targetOffsetX);
        //                 $element.setAttribute(_dataTranslateY, targetOffsetY);
        //                 /* @->moveScaleElement */
        //                 moveScaleElement($element, targetOffsetX + "px", targetOffsetY + "px", targetScale);
        //             }
        //         });
        //     });
        //     /* EVENT - mousedown - $zoom ************************************************/
        //     /* **************************************************************************/
        //     massAddEventListener($zoom, "mousedown", mouseDown);
        //     /* EVENT - mouseenter - $zoom ***********************************************/
        //     /* **************************************************************************/
        //     massAddEventListener($zoom, "mouseenter", mouseEnter);
        //     /* EVENT - mouseleave - $zoom ***********************************************/
        //     /* **************************************************************************/
        //     massAddEventListener($zoom, "mouseleave", mouseLeave);
        //     /* EVENT - mousemove - document *********************************************/
        //     /****************************************************************************/
        //     document.addEventListener("mousemove", mouseMove);
        //     /* EVENT - mouseup - document ***********************************************/
        //     /****************************************************************************/
        //     document.addEventListener("mouseup", mouseUp);
        //     /* EVENT - touchstart - document ********************************************/
        //     /****************************************************************************/
        //     document.addEventListener("touchstart", function() {
        //         touchable = true;
        //     });
        //     /* EVENT - touchstart - $zoom ***********************************************/
        //     /* **************************************************************************/
        //     massAddEventListener($zoom, "touchstart", touchStart);
        //     /* EVENT - touchmove - document *********************************************/
        //     /****************************************************************************/
        //     document.addEventListener("touchmove", touchMove);
        //     /* EVENT - touchend - document **********************************************/
        //     /****************************************************************************/
        //     document.addEventListener("touchend", touchEnd);
        //     /* EVENT - wheel - $zoom ****************************************************/
        //     /****************************************************************************/
        //     massAddEventListener($zoom, "wheel", wheel);
        //     /* @-<mouseEnter ************************************************************/
        //     /****************************************************************************/
        //     function mouseEnter() {
        //         disableScroll();
        //     }
        //     /* @-<mouseLeave ************************************************************/
        //     /****************************************************************************/
        //     function mouseLeave() {
        //         enableScroll();
        //     }
        //     /* @-<mouseDown *************************************************************/
        //     /****************************************************************************/
        //     function mouseDown(e) {
        //         e.preventDefault();
        //         if (touchable === true || e.which !== 1) {
        //             return false;
        //         }
        //         /* Initialize selectors */
        //         $container = this;
        //         $element = this.children[0];
        //         /* Initialize helpers */
        //         initialPointerOffsetX = e.clientX;
        //         initialPointerOffsetY = e.clientY;
        //         /* Doubleclick */
        //         if (doubleClickMonitor[0] === null) {
        //             doubleClickMonitor[0] = e.target;
        //             doubleClickMonitor[1] = initialPointerOffsetX;
        //             doubleClickMonitor[2] = initialPointerOffsetY;
        //             setTimeout(function() {
        //                 doubleClickMonitor = [null];
        //             }, 300);
        //         } else if (doubleClickMonitor[0] === e.target && mousemoveCount <= 5 && isWithinRange(initialPointerOffsetX, doubleClickMonitor[1] - 10, doubleClickMonitor[1] + 10) === true && isWithinRange(initialPointerOffsetY, doubleClickMonitor[2] - 10, doubleClickMonitor[2] + 10) === true) {
        //             addClass($element, _transition);
        //             if (hasClass($container, _active) === true) {
        //                 /* Set attributes */
        //                 $element.setAttribute(_dataScale, 1);
        //                 $element.setAttribute(_dataTranslateX, 0);
        //                 $element.setAttribute(_dataTranslateY, 0);
        //                 removeClass($container, _active);
        //                 /* @->moveScaleElement */
        //                 moveScaleElement($element, 0, 0, 1);
        //             } else {
        //                 /* Set attributes */
        //                 $element.setAttribute(_dataScale, C_scaleDefault);
        //                 $element.setAttribute(_dataTranslateX, 0);
        //                 $element.setAttribute(_dataTranslateY, 0);
        //                 addClass($container, _active);
        //                 /* @->moveScaleElement */
        //                 moveScaleElement($element, 0, 0, C_scaleDefault);
        //             }
        //             setTimeout(function()
        //             {
        //                 removeClass($element, _transition);
        //             }, 200);
        //             doubleClickMonitor = [null];
        //             return false;
        //         }
        //         /* Initialize helpers */
        //         offset = $container.getBoundingClientRect();
        //         containerOffsetX = offset.left;
        //         containerOffsetY = offset.top;
        //         containerHeight = $container.clientHeight;
        //         containerWidth = $container.clientWidth
        //         elementHeight = $element.clientHeight;
        //         elementWidth = $element.clientWidth;
        //         initialOffsetX = parseFloat($element.getAttribute(_dataTranslateX));
        //         initialOffsetY = parseFloat($element.getAttribute(_dataTranslateY));
        //         initialScale = minMax(parseFloat($element.getAttribute(_dataScale)), C_scaleMin, C_scaleMax);
        //         mousemoveCount = 0;
        //         /* Set capture */
        //         capture = true;
        //     }
        //     /* @-<mouseMove *************************************************************/
        //     /****************************************************************************/
        //     function mouseMove(e) {
        //         if (touchable === true || capture === false) {
        //             return false;
        //         }
        //         /* Initialize helpers */
        //         pointerOffsetX = e.clientX;
        //         pointerOffsetY = e.clientY;
        //         targetScale = initialScale;
        //         limitOffsetX = ((elementWidth * targetScale) - containerWidth) / 2;
        //         limitOffsetY = ((elementHeight * targetScale) - containerHeight) / 2;
        //         targetOffsetX = (elementWidth * targetScale) <= containerWidth ? 0 : minMax(pointerOffsetX - (initialPointerOffsetX - initialOffsetX), limitOffsetX * (-1), limitOffsetX);
        //         targetOffsetY = (elementHeight * targetScale) <= containerHeight ? 0 : minMax(pointerOffsetY - (initialPointerOffsetY - initialOffsetY), limitOffsetY * (-1), limitOffsetY);
        //         mousemoveCount++;
        //         if (Math.abs(targetOffsetX) === Math.abs(limitOffsetX)) {
        //             initialOffsetX = targetOffsetX;
        //             initialPointerOffsetX = pointerOffsetX;
        //         }
        //         if (Math.abs(targetOffsetY) === Math.abs(limitOffsetY)) {
        //             initialOffsetY = targetOffsetY;
        //             initialPointerOffsetY = pointerOffsetY;
        //         }
        //         /* Set attributes */
        //         $element.setAttribute(_dataScale, targetScale);
        //         $element.setAttribute(_dataTranslateX, targetOffsetX);
        //         $element.setAttribute(_dataTranslateY, targetOffsetY);
        //         /* @->moveScaleElement */
        //         moveScaleElement($element, targetOffsetX + "px", targetOffsetY + "px", targetScale);
        //     }
        //     /* @-<mouseUp ***************************************************************/
        //     /****************************************************************************/
        //     function mouseUp() {
        //         if (touchable === true || capture === false) {
        //             return false;
        //         }
        //         /* Unset capture */
        //         capture = false;
        //     }
        //     /* @-<touchStart ************************************************************/
        //     /****************************************************************************/
        //     function touchStart(e) {
        //         e.preventDefault();
        //         if (e.touches.length > 2) {
        //             return false;
        //         }
        //         /* Initialize selectors */
        //         $container = this;
        //         $element = this.children[0];
        //         /* Initialize helpers */
        //         offset = $container.getBoundingClientRect();
        //         containerOffsetX = offset.left;
        //         containerOffsetY = offset.top;
        //         containerHeight = $container.clientHeight;
        //         containerWidth = $container.clientWidth;
        //         elementHeight = $element.clientHeight;
        //         elementWidth = $element.clientWidth;
        //         initialPointerOffsetX = e.touches[0].clientX;
        //         initialPointerOffsetY = e.touches[0].clientY;
        //         initialScale = minMax(parseFloat($element.getAttribute(_dataScale)), C_scaleMin, C_scaleMax);
        //         touchCount = e.touches.length;
        //         if (touchCount === 1) /* Single touch */ {
        //             /* Doubletap */
        //             if (doubleTapMonitor[0] === null) {
        //                 doubleTapMonitor[0] = e.target;
        //                 doubleTapMonitor[1] = initialPointerOffsetX;
        //                 doubleTapMonitor[2] = initialPointerOffsetY;
        //                 setTimeout(function() {
        //                     doubleTapMonitor = [null];
        //                 }, 300);
        //             } else if (doubleTapMonitor[0] === e.target && touchmoveCount <= 1 && isWithinRange(initialPointerOffsetX, doubleTapMonitor[1] - 10, doubleTapMonitor[1] + 10) === true && isWithinRange(initialPointerOffsetY, doubleTapMonitor[2] - 10, doubleTapMonitor[2] + 10) === true) {
        //                 addClass($element, _transition);
        //                 if (hasClass($container, _active) === true) {
        //                     /* Set attributes */
        //                     $element.setAttribute(_dataScale, 1);
        //                     $element.setAttribute(_dataTranslateX, 0);
        //                     $element.setAttribute(_dataTranslateY, 0);
        //                     removeClass($container, _active);
        //                     /* @->moveScaleElement */
        //                     moveScaleElement($element, 0, 0, 1);
        //                 } else {
        //                     /* Set attributes */
        //                     $element.setAttribute(_dataScale, C_scaleDefault);
        //                     $element.setAttribute(_dataTranslateX, 0);
        //                     $element.setAttribute(_dataTranslateY, 0);
        //                     addClass($container, _active);
        //                     /* @->moveScaleElement */
        //                     moveScaleElement($element, 0, 0, C_scaleDefault);
        //                 }
        //                 setTimeout(function()
        //                 {
        //                     removeClass($element, _transition);
        //                 }, 200);
        //                 doubleTapMonitor = [null];
        //                 return false;
        //             }
        //             /* Initialize helpers */
        //             initialOffsetX = parseFloat($element.getAttribute(_dataTranslateX));
        //             initialOffsetY = parseFloat($element.getAttribute(_dataTranslateY));
        //         } else if (touchCount === 2) /* Pinch */ {
        //             /* Initialize helpers */
        //             initialOffsetX = parseFloat($element.getAttribute(_dataTranslateX));
        //             initialOffsetY = parseFloat($element.getAttribute(_dataTranslateY));
        //             initialPointerOffsetX2 = e.touches[1].clientX;
        //             initialPointerOffsetY2 = e.touches[1].clientY;
        //             pinchOffsetX = (initialPointerOffsetX + initialPointerOffsetX2) / 2;
        //             pinchOffsetY = (initialPointerOffsetY + initialPointerOffsetY2) / 2;
        //             initialPinchDistance = Math.sqrt(((initialPointerOffsetX - initialPointerOffsetX2) * (initialPointerOffsetX - initialPointerOffsetX2)) + ((initialPointerOffsetY - initialPointerOffsetY2) * (initialPointerOffsetY - initialPointerOffsetY2)));
        //         }
        //         touchmoveCount = 0;
        //         /* Set capture */
        //         capture = true;
        //     }
        //     /* @-<touchMove *************************************************************/
        //     /****************************************************************************/
        //     function touchMove(e) {
        //         e.preventDefault();
        //         if (capture === false) {
        //             return false;
        //         }
        //         /* Initialize helpers */
        //         pointerOffsetX = e.touches[0].clientX;
        //         pointerOffsetY = e.touches[0].clientY;
        //         touchCount = e.touches.length;
        //         touchmoveCount++;
        //         if (touchCount > 1) /* Pinch */ {
        //             pointerOffsetX2 = e.touches[1].clientX;
        //             pointerOffsetY2 = e.touches[1].clientY;
        //             targetPinchDistance = Math.sqrt(((pointerOffsetX - pointerOffsetX2) * (pointerOffsetX - pointerOffsetX2)) + ((pointerOffsetY - pointerOffsetY2) * (pointerOffsetY - pointerOffsetY2)));
        //             if (initialPinchDistance === null) {
        //                 initialPinchDistance = targetPinchDistance;
        //             }
        //             if (Math.abs(initialPinchDistance - targetPinchDistance) >= 1) {
        //                 /* Initialize helpers */
        //                 targetScale = minMax(targetPinchDistance / initialPinchDistance * initialScale, C_scaleMin, C_scaleMax);
        //                 limitOffsetX = ((elementWidth * targetScale) - containerWidth) / 2;
        //                 limitOffsetY = ((elementHeight * targetScale) - containerHeight) / 2;
        //                 scaleDifference = targetScale - initialScale;
        //                 targetOffsetX = (elementWidth * targetScale) <= containerWidth ? 0 : minMax(initialOffsetX - ((((((pinchOffsetX - containerOffsetX) - (containerWidth / 2)) - initialOffsetX) / (targetScale - scaleDifference))) * scaleDifference), limitOffsetX * (-1), limitOffsetX);
        //                 targetOffsetY = (elementHeight * targetScale) <= containerHeight ? 0 : minMax(initialOffsetY - ((((((pinchOffsetY - containerOffsetY) - (containerHeight / 2)) - initialOffsetY) / (targetScale - scaleDifference))) * scaleDifference), limitOffsetY * (-1), limitOffsetY);
        //                 if (targetScale > 1) {
        //                     addClass($container, _active);
        //                 } else {
        //                     removeClass($container, _active);
        //                 }
        //                 /* @->moveScaleElement */
        //                 moveScaleElement($element, targetOffsetX + "px", targetOffsetY + "px", targetScale);
        //                 /* Initialize helpers */
        //                 initialPinchDistance = targetPinchDistance;
        //                 initialScale = targetScale;
        //                 initialOffsetX = targetOffsetX;
        //                 initialOffsetY = targetOffsetY;
        //             }
        //         } else /* Single touch */ {
        //             /* Initialize helpers */
        //             targetScale = initialScale;
        //             limitOffsetX = ((elementWidth * targetScale) - containerWidth) / 2;
        //             limitOffsetY = ((elementHeight * targetScale) - containerHeight) / 2;
        //             targetOffsetX = (elementWidth * targetScale) <= containerWidth ? 0 : minMax(pointerOffsetX - (initialPointerOffsetX - initialOffsetX), limitOffsetX * (-1), limitOffsetX);
        //             targetOffsetY = (elementHeight * targetScale) <= containerHeight ? 0 : minMax(pointerOffsetY - (initialPointerOffsetY - initialOffsetY), limitOffsetY * (-1), limitOffsetY);
        //             if (Math.abs(targetOffsetX) === Math.abs(limitOffsetX)) {
        //                 initialOffsetX = targetOffsetX;
        //                 initialPointerOffsetX = pointerOffsetX;
        //             }
        //             if (Math.abs(targetOffsetY) === Math.abs(limitOffsetY)) {
        //                 initialOffsetY = targetOffsetY;
        //                 initialPointerOffsetY = pointerOffsetY;
        //             }
        //             /* Set attributes */
        //             $element.setAttribute(_dataScale, initialScale);
        //             $element.setAttribute(_dataTranslateX, targetOffsetX);
        //             $element.setAttribute(_dataTranslateY, targetOffsetY);
        //             /* @->moveScaleElement */
        //             moveScaleElement($element, targetOffsetX + "px", targetOffsetY + "px", targetScale);
        //         }
        //     }
        //     /* @-<touchEnd **************************************************************/
        //     /****************************************************************************/
        //     function touchEnd(e) {
        //         touchCount = e.touches.length;
        //         if (capture === false) {
        //             return false;
        //         }
        //         if (touchCount === 0) /* No touch */ {
        //             /* Set attributes */
        //             $element.setAttribute(_dataScale, initialScale);
        //             $element.setAttribute(_dataTranslateX, targetOffsetX);
        //             $element.setAttribute(_dataTranslateY, targetOffsetY);
        //             initialPinchDistance = null;
        //             capture = false;
        //         } else if (touchCount === 1) /* Single touch */ {
        //             initialPointerOffsetX = e.touches[0].clientX;
        //             initialPointerOffsetY = e.touches[0].clientY;
        //         } else if (touchCount > 1) /* Pinch */ {
        //             initialPinchDistance = null;
        //         }
        //     }
        //     /* @-<wheel *****************************************************************/
        //     /****************************************************************************/
        //     function wheel(e) {
        //         /* Initialize selectors */
        //         $container = this;
        //         $element = this.children[0];
        //         /* Initialize helpers */
        //         offset = $container.getBoundingClientRect();
        //         containerHeight = $container.clientHeight;
        //         containerWidth = $container.clientWidth;
        //         elementHeight = $element.clientHeight;
        //         elementWidth = $element.clientWidth;
        //         containerOffsetX = offset.left;
        //         containerOffsetY = offset.top;
        //         initialScale = minMax(parseFloat($element.getAttribute(_dataScale), C_scaleMin, C_scaleMax));
        //         initialOffsetX = parseFloat($element.getAttribute(_dataTranslateX));
        //         initialOffsetY = parseFloat($element.getAttribute(_dataTranslateY));
        //         pointerOffsetX = e.clientX;
        //         pointerOffsetY = e.clientY;
        //         scaleDirection = e.deltaY < 0 ? 1 : -1;
        //         scaleDifference = C_scaleDifference * scaleDirection;
        //         targetScale = initialScale + scaleDifference;
        //         /* Prevent scale overflow */
        //         if (targetScale < C_scaleMin || targetScale > C_scaleMax) {
        //             return false;
        //         }
        //         /* Set offset limits */
        //         limitOffsetX = ((elementWidth * targetScale) - containerWidth) / 2;
        //         limitOffsetY = ((elementHeight * targetScale) - containerHeight) / 2;
        //         if (targetScale <= 1) {
        //             targetOffsetX = 0;
        //             targetOffsetY = 0;
        //         } else {
        //             /* Set target offsets */
        //             targetOffsetX = (elementWidth * targetScale) <= containerWidth ? 0 : minMax(initialOffsetX - ((((((pointerOffsetX - containerOffsetX) - (containerWidth / 2)) - initialOffsetX) / (targetScale - scaleDifference))) * scaleDifference), limitOffsetX * (-1), limitOffsetX);
        //             targetOffsetY = (elementHeight * targetScale) <= containerHeight ? 0 : minMax(initialOffsetY - ((((((pointerOffsetY - containerOffsetY) - (containerHeight / 2)) - initialOffsetY) / (targetScale - scaleDifference))) * scaleDifference), limitOffsetY * (-1), limitOffsetY);
        //         }
        //         if (targetScale > 1) {
        //             addClass($container, _active);
        //         } else {
        //             removeClass($container, _active);
        //         }
        //         /* Set attributes */
        //         $element.setAttribute(_dataScale, targetScale);
        //         $element.setAttribute(_dataTranslateX, targetOffsetX);
        //         $element.setAttribute(_dataTranslateY, targetOffsetY);
        //         /* @->moveScaleElement */
        //         moveScaleElement($element, targetOffsetX + "px", targetOffsetY + "px", targetScale);
        //     }
        // }
        // /* Library ********************************************************************/
        // /******************************************************************************/
        // /* @-<addClass ****************************************************************/
        // /******************************************************************************/
        // function addClass($element, targetClass) {
        //     if (hasClass($element, targetClass) === false) {
        //         $element.className += " " + targetClass;
        //     }
        // }
        // /* @-<disableScroll ***********************************************************/
        // /******************************************************************************/
        // function disableScroll() {
        //     if (window.addEventListener) // older FF
        //     {
        //         window.addEventListener('DOMMouseScroll', preventDefault, false);
        //     }
        //     window.onwheel = preventDefault; // modern standard
        //     window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
        //     window.ontouchmove = preventDefault; // mobile
        //     document.onkeydown = preventDefaultForScrollKeys;
        // }
        // /* @-<enableScroll ************************************************************/
        // /******************************************************************************/
        // function enableScroll() {
        //     if (window.removeEventListener) {
        //         window.removeEventListener('DOMMouseScroll', preventDefault, false);
        //     }
        //     window.onmousewheel = document.onmousewheel = null;
        //     window.onwheel = null;
        //     window.ontouchmove = null;
        //     document.onkeydown = null;
        // }
        // /* @isWithinRange *************************************************************/
        // /******************************************************************************/
        // function isWithinRange(value, min, max) {
        //     if (value >= min && value <= max) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }
        // /* @hasClass ******************************************************************/
        // /******************************************************************************/
        // function hasClass($element, targetClass) {
        //     var rgx = new RegExp("(?:^|\\s)" + targetClass + "(?!\\S)", "g");
        //     if ($element.className.match(rgx)) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }
        // /* @-<massAddEventListener ****************************************************/
        // /******************************************************************************/
        // function massAddEventListener($elements, event, customFunction) {
        //     var useCapture = useCapture || false;
        //     for (var i = 0; i < $elements.length; i++) {
        //         $elements[i].addEventListener(event, customFunction, useCapture);
        //     }
        // }
        // /* @-<minMax ******************************************************************/
        // /******************************************************************************/
        // function minMax(value, min, max) {
        //     if (value < min) {
        //         value = min;
        //     } else if (value > max) {
        //         value = max;
        //     }
        //     return value;
        // }
        // /* @-<moveScaleElement ********************************************************/
        // /******************************************************************************/
        // function moveScaleElement($element, targetOffsetX, targetOffsetY, targetScale) {
        //     $element.style.cssText = "-moz-transform : translate(" + targetOffsetX + ", " + targetOffsetY + ") scale(" + targetScale + "); -ms-transform : translate(" + targetOffsetX + ", " + targetOffsetY + ") scale(" + targetScale + "); -o-transform : translate(" + targetOffsetX + ", " + targetOffsetY + ") scale(" + targetScale + "); -webkit-transform : translate(" + targetOffsetX + ", " + targetOffsetY + ") scale(" + targetScale + "); transform : translate3d(" + targetOffsetX + ", " + targetOffsetY + ", 0) scale3d(" + targetScale + ", " + targetScale + ", 1);";
        // }
        // /* @-<preventDefault **********************************************************/
        // /******************************************************************************/
        // function preventDefault(e) {
        //     e = e || window.event;
        //     if (e.preventDefault) {
        //         e.preventDefault();
        //     }
        //     e.returnValue = false;
        // }
        // /* @preventDefaultForScrollKeys ***********************************************/
        // /******************************************************************************/
        // function preventDefaultForScrollKeys(e) {
        //     var keys = {
        //         37: 1,
        //         38: 1,
        //         39: 1,
        //         40: 1
        //     };
        //     if (keys[e.keyCode]) {
        //         preventDefault(e);
        //         return false;
        //     }
        // }
        // /* @removeClass ***************************************************************/
        // /******************************************************************************/
        // function removeClass($element, targetClass) {
        //     var rgx = new RegExp("(?:^|\\s)" + targetClass + "(?!\\S)", "g");
        //     $element.className = $element.className.replace(rgx, "");
        // }
        //   }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('wheel', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AlbumsComponent.prototype, "handleWheelEvent", null);
    AlbumsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-albums',
            template: __webpack_require__(/*! ./albums.component.html */ "./src/app/widgets/albums/albums.component.html"),
            styles: [__webpack_require__(/*! ./albums.component.css */ "./src/app/widgets/albums/albums.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _data_access_album_overview_album_overview_service__WEBPACK_IMPORTED_MODULE_3__["AlbumOverviewService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], AlbumsComponent);
    return AlbumsComponent;
}());



/***/ }),

/***/ "./src/app/widgets/home/home.component.css":
/*!*************************************************!*\
  !*** ./src/app/widgets/home/home.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-cont{\n    height: 60px;\n    width: 100%;\n    position: fixed;\n\tbackground: inherit;\n    overflow: hidden;\n    z-index: 1030;\n}\n.header-cont::before{\n    content: \"\";\n\tposition: absolute;\n\tbackground: inherit;\n\tz-index: 0;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbox-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);\n\t-webkit-filter: blur(8px);\n\t        filter: blur(8px);\n}\n.solid-nav {\n    background-color: rgba(223, 209, 198, 0.5);\n    background-image: unset;\n    transition: background 0.5s ease-in;\n  }\n.key-photo {\n    /* height: 1000px; */\n    background-repeat: no-repeat;\n    position: fixed;\n    background-size: cover;\n    z-index: -10;\n    width: 100%;\n    margin-top: -125px;\n}\n.key-bg{\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: 100%;\n    width: 100%;\n    padding-left: 0;\n    padding-right: 0;\n    background-position-y: -250px;\n}\n.hidden-img{\n    margin-top: -250px;\n}\n#bg-image{\n   width: 100%;\n   margin-top: -125px;\n}\n.parent-container {\n    position: relative;\n}\n.couple-container {\n    min-height: 1000px;\n    background-color: #E4E0DD;\n    width: 100%;\n}\n.container-fluid-nomax {\n\tpadding: 0;\n    margin-right: auto;\n    margin-left: auto;\n}\n@media (min-width: 812px) and (max-width: 1100px) {\n    .key-photo {\n        margin-top: 0px;\n    }\n    #bg-image{\n        margin-top: 0px;\n    }\n    .header-cont{\n        height: 45px;\n        background-position-y: 0px;\n    }\n    .key-bg{\n        background-position-y: unset;\n    }\n    .hidden-img{\n        margin-top: unset;\n    }\n}\n/* \n  ##Device = Low Resolution Tablets, Mobiles (Landscape)\n  ##Screen = B/w 481px to 767px\n*/\n@media (min-width: 481px) and (max-width: 812px) {\n    .couple-container {\n        padding-bottom: 30px;\n    }\n    .key-photo {\n        margin-top: 0px;\n    }\n    #bg-image{\n        margin-top: 0px;\n    }\n    .header-cont{\n        height: 45px;\n       \n    }\n    .key-bg{\n        background-position-y: 0px;\n    }\n    .hidden-img{\n        margin-top: unset;\n    }\n}\n/* \n  ##Device = Most of the Smartphones Mobiles (Portrait)\n  ##Screen = B/w 320px to 479px\n*/\n@media (min-width: 320px) and (max-width: 480px) {\n  \n    .couple-container {\n        padding-bottom: 30px;\n    }\n    .key-photo {\n        margin-top: 0px;\n    }\n    #bg-image{\n        margin-top: 0px;\n    }\n    .key-bg{\n        background-position-y: 0px;\n    }\n    .hidden-img{\n        margin-top: unset;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0NBQ25CLG9CQUFvQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztDQUNqQjtBQUNEO0lBQ0ksWUFBWTtDQUNmLG1CQUFtQjtDQUNuQixvQkFBb0I7Q0FDcEIsV0FBVztDQUNYLE9BQU87Q0FDUCxRQUFRO0NBQ1IsU0FBUztDQUNULFVBQVU7Q0FDVixxREFBcUQ7Q0FDckQsMEJBQWtCO1NBQWxCLGtCQUFrQjtDQUNsQjtBQUNEO0lBQ0ksMkNBQTJDO0lBQzNDLHdCQUF3QjtJQUN4QixvQ0FBb0M7R0FDckM7QUFDSDtJQUNJLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBSWhCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsOEJBQThCO0NBQ2pDO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtHQUNHLFlBQVk7R0FDWixtQkFBbUI7Q0FDckI7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixZQUFZO0NBQ2Y7QUFDRDtDQUNDLFdBQVc7SUFDUixtQkFBbUI7SUFDbkIsa0JBQWtCO0NBQ3JCO0FBRUQ7SUFDSTtRQUNJLGdCQUFnQjtLQUNuQjtJQUNEO1FBQ0ksZ0JBQWdCO0tBQ25CO0lBQ0Q7UUFDSSxhQUFhO1FBQ2IsMkJBQTJCO0tBQzlCO0lBQ0Q7UUFDSSw2QkFBNkI7S0FDaEM7SUFDRDtRQUNJLGtCQUFrQjtLQUNyQjtDQUNKO0FBRUQ7OztFQUdFO0FBRUY7SUFDSTtRQUNJLHFCQUFxQjtLQUN4QjtJQUNEO1FBQ0ksZ0JBQWdCO0tBQ25CO0lBQ0Q7UUFDSSxnQkFBZ0I7S0FDbkI7SUFDRDtRQUNJLGFBQWE7O0tBRWhCO0lBQ0Q7UUFDSSwyQkFBMkI7S0FDOUI7SUFDRDtRQUNJLGtCQUFrQjtLQUNyQjtDQUNKO0FBRUQ7OztFQUdFO0FBRUY7O0lBRUk7UUFDSSxxQkFBcUI7S0FDeEI7SUFDRDtRQUNJLGdCQUFnQjtLQUNuQjtJQUNEO1FBQ0ksZ0JBQWdCO0tBQ25CO0lBQ0Q7UUFDSSwyQkFBMkI7S0FDOUI7SUFDRDtRQUNJLGtCQUFrQjtLQUNyQjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItY29udHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuXHRiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgei1pbmRleDogMTAzMDtcbn1cbi5oZWFkZXItY29udDo6YmVmb3Jle1xuICAgIGNvbnRlbnQ6IFwiXCI7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0YmFja2dyb3VuZDogaW5oZXJpdDtcblx0ei1pbmRleDogMDtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcblx0Ym90dG9tOiAwO1xuXHRib3gtc2hhZG93OiBpbnNldCAwIDAgMjAwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xuXHRmaWx0ZXI6IGJsdXIoOHB4KTtcbn1cbi5zb2xpZC1uYXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIzLCAyMDksIDE5OCwgMC41KTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1bnNldDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXMgZWFzZS1pbjtcbiAgfVxuLmtleS1waG90byB7XG4gICAgLyogaGVpZ2h0OiAxMDAwcHg7ICovXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgei1pbmRleDogLTEwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IC0xMjVweDtcbn1cbi5rZXktYmd7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC0yNTBweDtcbn1cbi5oaWRkZW4taW1ne1xuICAgIG1hcmdpbi10b3A6IC0yNTBweDtcbn1cbiNiZy1pbWFnZXtcbiAgIHdpZHRoOiAxMDAlO1xuICAgbWFyZ2luLXRvcDogLTEyNXB4O1xufVxuLnBhcmVudC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb3VwbGUtY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiAxMDAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U0RTBERDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXItZmx1aWQtbm9tYXgge1xuXHRwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDgxMnB4KSBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gICAgLmtleS1waG90byB7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICB9XG4gICAgI2JnLWltYWdle1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgfVxuICAgIC5oZWFkZXItY29udHtcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDBweDtcbiAgICB9XG4gICAgLmtleS1iZ3tcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiB1bnNldDtcbiAgICB9XG4gICAgLmhpZGRlbi1pbWd7XG4gICAgICAgIG1hcmdpbi10b3A6IHVuc2V0O1xuICAgIH1cbn1cblxuLyogXG4gICMjRGV2aWNlID0gTG93IFJlc29sdXRpb24gVGFibGV0cywgTW9iaWxlcyAoTGFuZHNjYXBlKVxuICAjI1NjcmVlbiA9IEIvdyA0ODFweCB0byA3NjdweFxuKi9cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogODEycHgpIHtcbiAgICAuY291cGxlLWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIH1cbiAgICAua2V5LXBob3RvIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIH1cbiAgICAjYmctaW1hZ2V7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICB9XG4gICAgLmhlYWRlci1jb250e1xuICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgXG4gICAgfVxuICAgIC5rZXktYmd7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogMHB4O1xuICAgIH1cbiAgICAuaGlkZGVuLWltZ3tcbiAgICAgICAgbWFyZ2luLXRvcDogdW5zZXQ7XG4gICAgfVxufVxuXG4vKiBcbiAgIyNEZXZpY2UgPSBNb3N0IG9mIHRoZSBTbWFydHBob25lcyBNb2JpbGVzIChQb3J0cmFpdClcbiAgIyNTY3JlZW4gPSBCL3cgMzIwcHggdG8gNDc5cHhcbiovXG5cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIFxuICAgIC5jb3VwbGUtY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgfVxuICAgIC5rZXktcGhvdG8ge1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgfVxuICAgICNiZy1pbWFnZXtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIH1cbiAgICAua2V5LWJne1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDBweDtcbiAgICB9XG4gICAgLmhpZGRlbi1pbWd7XG4gICAgICAgIG1hcmdpbi10b3A6IHVuc2V0O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/widgets/home/home.component.html":
/*!**************************************************!*\
  !*** ./src/app/widgets/home/home.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <router-outlet></router-outlet>\n  <div class=\"key-bg col-md-12 col-sm-12 col-xs-12\" [ngStyle]=\"{'background-image':'url(' +wedddingOverviewData?.data?.welcome+ ')'}\">\n    <div class=\"header-cont  d-none d-sm-none d-md-block\">\n            <app-nav-bar  [audioUrl]=\"wedddingOverviewData?.data?.bg_music\" style=\"height: inherit;\"\n              [imageUrl]=\"wedddingOverviewData?.data?.welcome\" [(isCollapsed)]=\"isCollapsed\"\n            ></app-nav-bar>\n            <audio id=\"player\"[src]=\"wedddingOverviewData?.data?.bg_music\"  loop preload=\"none\"></audio>\n\n          </div>\n          <div class=\"header-cont d-block d-sm-block d-md-none\" [ngStyle]=\"!isCollapsed ? {'height':'300px','transition': 'height 0.35s ease'}:{'height':'45px', 'transition': 'height 0.35s ease'}\">\n              <app-nav-bar [audioUrl]=\"wedddingOverviewData?.data?.bg_music\" style=\"height: inherit;\"\n                [imageUrl]=\"wedddingOverviewData?.data?.welcome\" [(isCollapsed)]=\"isCollapsed\"\n              ></app-nav-bar>\n  \n            </div>\n            <img  class=\"img-fluid hidden-img\" [src]=\"wedddingOverviewData?.data?.welcome\" style=\"visibility: hidden;\" /> \n    </div>\n  <div class=\"container-fluid-nomax\">\n        <div class=\"parent-container\">\n          <div>\n              <div style=\"padding-left: 0px;padding-right: 0px\" >\n              <div class=\"couple-container\">\n                <app-container [weddingData]=\"wedddingOverviewData\" ></app-container>\n              </div>\n            </div>\n            <div style=\"padding-left: 0px;padding-right: 0px\">\n                <div style=\"min-height: 1000px;background-color: #F6F2EF;width: 100%;position: relative;\">\n                    <app-guest-book (sendWishEvent)=\"setGuestBookWishes($event)\"></app-guest-book>\n                </div>\n            </div>\n            <div style=\"padding-left: 0px;padding-right: 0px;\">\n                <app-footer></app-footer>\n\n            </div>\n          </div>\n          </div>\n        </div>\n    </div>\n\n    \n\n\n<!-- <div style=\"min-height: 1000px;background-color: #F6F2EF;width: 100%;position: relative;top: 2900px\">  -->\n<!-- <app-nav-bar></app-nav-bar>\n            <app-couplestory [couplestory] = \"wedddingOverviewData?.data?.coupleStory\"></app-couplestory>\n            <app-wedding-events [weddingDate] = \"wedddingOverviewData?.data?.dateOfWedding\" \n            [weddingEventList] = \"wedddingOverviewData?.data?.eventList\"></app-wedding-events>\n            <app-guest-book></app-guest-book>\n           -->\n<!-- <div  [ngStyle]=\"{'background-image':'url(' +wedddingOverviewData.data.welcome+ ')'}\" class=\"key-photo\"> </div> -->\n<!--   <div class=\"key-photo\" >\n                      <div  [ngStyle]=\"{'background-image':'url(' +wedddingOverviewData.data.welcome+ ')'}\" class=\"key-photo\"> </div> \n                        <img style=\"width: 100%\" class=\"img-fluid\" src=\"assets/key-photo.png\">\n                    <img style='display: none' onload=\"this.style.display = 'block'\" id=\"bg-image\"  class=\"img-fluid\" [src]=\"wedddingOverviewData?.data?.welcome\">\n        </div> -->\n"

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
        this.isCollapsed = true;
        this.fetchWedOverview();
        $(window).scroll(function () {
            var height = $('.key-bg').height();
            console.log($('.key-bg').height());
            var scrollTop = $(window).scrollTop();
            if (scrollTop >= height - 210) {
                $('.header-cont').addClass('solid-nav');
            }
            else {
                $('.header-cont').removeClass('solid-nav');
            }
            setTimeout(function () {
                $('.target').each(function () {
                    if ($(window).scrollTop() >= $(this).offset().top) {
                        var id = $(this).attr('id');
                        var currentId = $('.nav-active').attr('i');
                        if (id !== currentId) {
                            $('.nav-scroll a').removeClass('nav-active');
                        }
                        $('.nav-scroll a[href=#' + id + ']').addClass('nav-active');
                    }
                });
            }, 900);
        });
    };
    HomeComponent.prototype.fetchWedOverview = function () {
        var _this = this;
        this.wedOverviewService.getWeddingOverview().subscribe(function (data) {
            _this.wedddingOverviewData = data;
            setTimeout(function () {
                $('#player').get(0).play().catch(function () { });
                // $('#player').get(0).play().catch(function() {
                // });
                _this.initialiseAnime();
            }, 5000);
        });
    };
    ;
    HomeComponent.prototype.initialiseAnime = function () {
        var tiltSettings = [{},
            {
                movement: {
                    imgWrapper: {
                        translation: { x: 10, y: 10, z: 30 },
                        rotation: { x: 0, y: -10, z: 0 },
                        reverseAnimation: { duration: 200, easing: 'easeOutQuad' }
                    },
                    lines: {
                        translation: { x: 10, y: 10, z: [0, 70] },
                        rotation: { x: 0, y: 0, z: -2 },
                        reverseAnimation: { duration: 2000, easing: 'easeOutExpo' }
                    },
                    caption: {
                        rotation: { x: 0, y: 0, z: 2 },
                        reverseAnimation: { duration: 200, easing: 'easeOutQuad' }
                    },
                    overlay: {
                        translation: { x: 10, y: -10, z: 0 },
                        rotation: { x: 0, y: 0, z: 2 },
                        reverseAnimation: { duration: 2000, easing: 'easeOutExpo' }
                    },
                    shine: {
                        translation: { x: 100, y: 100, z: 0 },
                        reverseAnimation: { duration: 200, easing: 'easeOutQuad' }
                    }
                }
            },
            {
                movement: {
                    imgWrapper: {
                        rotation: { x: -5, y: 10, z: 0 },
                        reverseAnimation: { duration: 900, easing: 'easeOutCubic' }
                    },
                    caption: {
                        translation: { x: 30, y: 30, z: [0, 40] },
                        rotation: { x: [0, 15], y: 0, z: 0 },
                        reverseAnimation: { duration: 1200, easing: 'easeOutExpo' }
                    },
                    overlay: {
                        translation: { x: 10, y: 10, z: [0, 20] },
                        reverseAnimation: { duration: 1000, easing: 'easeOutExpo' }
                    },
                    shine: {
                        translation: { x: 100, y: 100, z: 0 },
                        reverseAnimation: { duration: 900, easing: 'easeOutCubic' }
                    }
                }
            },
            {
                movement: {
                    imgWrapper: {
                        rotation: { x: -5, y: 10, z: 0 },
                        reverseAnimation: { duration: 50, easing: 'easeOutQuad' }
                    },
                    caption: {
                        translation: { x: 20, y: 20, z: 0 },
                        reverseAnimation: { duration: 200, easing: 'easeOutQuad' }
                    },
                    overlay: {
                        translation: { x: 5, y: -5, z: 0 },
                        rotation: { x: 0, y: 0, z: 6 },
                        reverseAnimation: { duration: 1000, easing: 'easeOutQuad' }
                    },
                    shine: {
                        translation: { x: 50, y: 50, z: 0 },
                        reverseAnimation: { duration: 50, easing: 'easeOutQuad' }
                    }
                }
            },
            {
                movement: {
                    imgWrapper: {
                        translation: { x: 0, y: -8, z: 0 },
                        rotation: { x: 3, y: 3, z: 0 },
                        reverseAnimation: { duration: 1200, easing: 'easeOutExpo' }
                    },
                    lines: {
                        translation: { x: 15, y: 15, z: [0, 15] },
                        reverseAnimation: { duration: 1200, easing: 'easeOutExpo' }
                    },
                    overlay: {
                        translation: { x: 0, y: 8, z: 0 },
                        reverseAnimation: { duration: 600, easing: 'easeOutExpo' }
                    },
                    caption: {
                        translation: { x: 10, y: -15, z: 0 },
                        reverseAnimation: { duration: 900, easing: 'easeOutExpo' }
                    },
                    shine: {
                        translation: { x: 50, y: 50, z: 0 },
                        reverseAnimation: { duration: 1200, easing: 'easeOutExpo' }
                    }
                }
            },
            {
                movement: {
                    lines: {
                        translation: { x: -5, y: 5, z: 0 },
                        reverseAnimation: { duration: 1000, easing: 'easeOutExpo' }
                    },
                    caption: {
                        translation: { x: 15, y: 15, z: 0 },
                        rotation: { x: 0, y: 0, z: 3 },
                        reverseAnimation: { duration: 1500, easing: 'easeOutElastic', elasticity: 700 }
                    },
                    overlay: {
                        translation: { x: 15, y: -15, z: 0 },
                        reverseAnimation: { duration: 500, easing: 'easeOutExpo' }
                    },
                    shine: {
                        translation: { x: 50, y: 50, z: 0 },
                        reverseAnimation: { duration: 500, easing: 'easeOutExpo' }
                    }
                }
            },
            {
                movement: {
                    imgWrapper: {
                        translation: { x: 5, y: 5, z: 0 },
                        reverseAnimation: { duration: 800, easing: 'easeOutQuart' }
                    },
                    caption: {
                        translation: { x: 10, y: 10, z: [0, 50] },
                        reverseAnimation: { duration: 1000, easing: 'easeOutQuart' }
                    },
                    shine: {
                        translation: { x: 50, y: 50, z: 0 },
                        reverseAnimation: { duration: 800, easing: 'easeOutQuart' }
                    }
                }
            },
            {
                movement: {
                    lines: {
                        translation: { x: 40, y: 40, z: 0 },
                        reverseAnimation: { duration: 1500, easing: 'easeOutElastic' }
                    },
                    caption: {
                        translation: { x: 20, y: 20, z: 0 },
                        rotation: { x: 0, y: 0, z: -5 },
                        reverseAnimation: { duration: 1000, easing: 'easeOutExpo' }
                    },
                    overlay: {
                        translation: { x: -30, y: -30, z: 0 },
                        rotation: { x: 0, y: 0, z: 3 },
                        reverseAnimation: { duration: 750, easing: 'easeOutExpo' }
                    },
                    shine: {
                        translation: { x: 100, y: 100, z: 0 },
                        reverseAnimation: { duration: 750, easing: 'easeOutExpo' }
                    }
                }
            }];
        var idx = 0;
        [].slice.call(document.querySelectorAll('a.tilter')).forEach(function (el, pos) {
            idx = pos % 2 === 0 ? idx + 1 : idx;
            new TiltFx(el, tiltSettings[idx - 1]);
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





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

module.exports = __webpack_require__(/*! /Users/abhi/Documents/Workspace/Project/development/DA-F/wedding-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map