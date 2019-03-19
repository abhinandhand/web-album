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
            { path: 'albums/:name/:url', component: _widgets_albums_albums_component__WEBPACK_IMPORTED_MODULE_4__["AlbumsComponent"], data: { url: '' } },
        ] }, { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', component: _widgets_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
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

module.exports = ".container-fluid-nomax {\n\tpadding: 0;\n    margin-right: auto;\n    margin-left: auto;\n}\n\n.sample-flipbook{\n\twidth:400px;\n\theight:200px;\n\ttransition:margin-left 0.2s;\n}\n\n.sample-flipbook .page{\n\twidth:200px;\n\theight:200px;\n\tbackground-color:white;\n\tline-height:300px;\n\tfont-size:20px;\n}\n\n.sample-flipbook .page-wrapper{\n\t-webkit-perspective:2000px;\n\t-ms-perspective:2000px;\n\t-o-perspective:2000px;\n\tperspective:2000px;\n}\n\n.sample-flipbook .hard{\n\tbackground:#ccc !important;\n\tcolor:#333;\n\t-o-box-shadow:inset 0 0 5px #666;\n\t-ms-box-shadow:inset 0 0 5px #666;\n\tbox-shadow:inset 0 0 5px #666;\n\tfont-weight:bold;\n}\n\n.sample-flipbook .odd{\n\tbackground:-webkit-gradient(linear, right top, left top, color-stop(0.95, #FFF), color-stop(1, #DADADA));\n\tbackground-image:linear-gradient(right, #FFF 95%, #C4C4C4 100%);\n\t-o-box-shadow:inset 0 0 5px #666;\n\t-ms-box-shadow:inset 0 0 5px #666;\n\tbox-shadow:inset 0 0 5px #666;\n\t\n}\n\n.sample-flipbook .even{\n\tbackground:-webkit-gradient(linear, left top, right top, color-stop(0.95, #fff), color-stop(1, #dadada));\n\tbackground-image:linear-gradient(left, #fff 95%, #dadada 100%);\n\t-o-box-shadow:inset 0 0 5px #666;\n\t-ms-box-shadow:inset 0 0 5px #666;\n\tbox-shadow:inset 0 0 5px #666;\n}\n\n/****app*/\n\n.fit-top-container {\n    width: 1000px;\n    height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxXQUFXO0lBQ1IsbUJBQW1CO0lBQ25CLGtCQUFrQjtDQUNyQjs7QUFFRDtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBS2IsNEJBQTRCO0NBQzVCOztBQUVEO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZjs7QUFFRDtDQUNDLDJCQUEyQjtDQUUzQix1QkFBdUI7Q0FDdkIsc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQjs7QUFFRDtDQUNDLDJCQUEyQjtDQUMzQixXQUFXO0NBR1gsaUNBQWlDO0NBQ2pDLGtDQUFrQztDQUNsQyw4QkFBOEI7Q0FDOUIsaUJBQWlCO0NBQ2pCOztBQUVEO0NBQ0MseUdBQXlHO0NBS3pHLGdFQUFnRTtDQUdoRSxpQ0FBaUM7Q0FDakMsa0NBQWtDO0NBQ2xDLDhCQUE4Qjs7Q0FFOUI7O0FBRUQ7Q0FDQyx5R0FBeUc7Q0FLekcsK0RBQStEO0NBRy9ELGlDQUFpQztDQUNqQyxrQ0FBa0M7Q0FDbEMsOEJBQThCO0NBQzlCOztBQUVELFVBQVU7O0FBQ1Y7SUFDSSxjQUFjO0lBQ2QsY0FBYztDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZC1ub21heCB7XG5cdHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uc2FtcGxlLWZsaXBib29re1xuXHR3aWR0aDo0MDBweDtcblx0aGVpZ2h0OjIwMHB4O1xuXHQtd2Via2l0LXRyYW5zaXRpb246bWFyZ2luLWxlZnQgMC4ycztcblx0LW1vei10cmFuc2l0aW9uOm1hcmdpbi1sZWZ0IDAuMnM7XG5cdC1tcy10cmFuc2l0aW9uOm1hcmdpbi1sZWZ0IDAuMnM7XG5cdC1vLXRyYW5zaXRpb246bWFyZ2luLWxlZnQgMC4ycztcblx0dHJhbnNpdGlvbjptYXJnaW4tbGVmdCAwLjJzO1xufVxuXG4uc2FtcGxlLWZsaXBib29rIC5wYWdle1xuXHR3aWR0aDoyMDBweDtcblx0aGVpZ2h0OjIwMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuXHRsaW5lLWhlaWdodDozMDBweDtcblx0Zm9udC1zaXplOjIwcHg7XG59XG5cbi5zYW1wbGUtZmxpcGJvb2sgLnBhZ2Utd3JhcHBlcntcblx0LXdlYmtpdC1wZXJzcGVjdGl2ZToyMDAwcHg7XG5cdC1tb3otcGVyc3BlY3RpdmU6MjAwMHB4O1xuXHQtbXMtcGVyc3BlY3RpdmU6MjAwMHB4O1xuXHQtby1wZXJzcGVjdGl2ZToyMDAwcHg7XG5cdHBlcnNwZWN0aXZlOjIwMDBweDtcbn1cblxuLnNhbXBsZS1mbGlwYm9vayAuaGFyZHtcblx0YmFja2dyb3VuZDojY2NjICFpbXBvcnRhbnQ7XG5cdGNvbG9yOiMzMzM7XG5cdC13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XG5cdC1tb3otYm94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XG5cdC1vLWJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xuXHQtbXMtYm94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XG5cdGJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xuXHRmb250LXdlaWdodDpib2xkO1xufVxuXG4uc2FtcGxlLWZsaXBib29rIC5vZGR7XG5cdGJhY2tncm91bmQ6LXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMC45NSwgI0ZGRiksIGNvbG9yLXN0b3AoMSwgI0RBREFEQSkpO1xuXHRiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJpZ2h0LCAjRkZGIDk1JSwgI0M0QzRDNCAxMDAlKTtcblx0YmFja2dyb3VuZC1pbWFnZTotbW96LWxpbmVhci1ncmFkaWVudChyaWdodCwgI0ZGRiA5NSUsICNDNEM0QzQgMTAwJSk7XG5cdGJhY2tncm91bmQtaW1hZ2U6LW1zLWxpbmVhci1ncmFkaWVudChyaWdodCwgI0ZGRiA5NSUsICNDNEM0QzQgMTAwJSk7XG5cdGJhY2tncm91bmQtaW1hZ2U6LW8tbGluZWFyLWdyYWRpZW50KHJpZ2h0LCAjRkZGIDk1JSwgI0M0QzRDNCAxMDAlKTtcblx0YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQocmlnaHQsICNGRkYgOTUlLCAjQzRDNEM0IDEwMCUpO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xuXHQtbW96LWJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xuXHQtby1ib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2Njtcblx0LW1zLWJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xuXHRib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2Njtcblx0XG59XG5cbi5zYW1wbGUtZmxpcGJvb2sgLmV2ZW57XG5cdGJhY2tncm91bmQ6LXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMC45NSwgI2ZmZiksIGNvbG9yLXN0b3AoMSwgI2RhZGFkYSkpO1xuXHRiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICNmZmYgOTUlLCAjZGFkYWRhIDEwMCUpO1xuXHRiYWNrZ3JvdW5kLWltYWdlOi1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICNmZmYgOTUlLCAjZGFkYWRhIDEwMCUpO1xuXHRiYWNrZ3JvdW5kLWltYWdlOi1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgI2ZmZiA5NSUsICNkYWRhZGEgMTAwJSk7XG5cdGJhY2tncm91bmQtaW1hZ2U6LW8tbGluZWFyLWdyYWRpZW50KGxlZnQsICNmZmYgOTUlLCAjZGFkYWRhIDEwMCUpO1xuXHRiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmIDk1JSwgI2RhZGFkYSAxMDAlKTtcblx0LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2Njtcblx0LW1vei1ib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2Njtcblx0LW8tYm94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XG5cdC1tcy1ib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2Njtcblx0Ym94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XG59XG5cbi8qKioqYXBwKi9cbi5maXQtdG9wLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMDBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div>\n      <!-- <div class=\"fit-top-container\" [ngStyle]=\"{'background':'url(' +wedddingOverviewData.data1.coupleStory.backgroundImage+ ')'}\">\n       !-->\n      <div>  \n        <router-outlet></router-outlet> \n      </div>\n    </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n<!--The content below is only a placeholder and can be replaced.-->\n<!-- \n<div id=\"flipbook\" class=\"sample-flipbook\">\n    <div class=\"hard\"> Turn.js </div>\n    <div class=\"hard\"></div>\n    <div> Page 1 </div>\n    <div> Page 2 </div>\n    <div> Page 3 </div>\n    <div> Page 4 </div>\n    <div class=\"hard\"></div>\n    <div class=\"hard\"></div>\n  </div> -->\n\n  <!-- <div id=\"flipbook\" class=\"sample-flipbook\">\n    <div style=\"background-image:url(assets/pages/1.jpg)\"></div>\n\t\t\t<div (mousedown)=\"sendPhotoClickEvent()\" style=\"background-image:url(assets/pages/2.jpg)\"></div>\n\t\t\t<div style=\"background-image:url(assets/pages/3.jpg)\"></div>\n\t\t\t<div style=\"background-image:url(assets/pages/4.jpg)\"></div>\n\t\t\t<div style=\"background-image:url(assets/pages/5.jpg)\"></div>\n  </div> -->\n\n"

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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _widget_modules_couplestory_couplestory_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./widget-modules/couplestory/couplestory.component */ "./src/app/widget-modules/couplestory/couplestory.component.ts");
/* harmony import */ var _widget_modules_wedding_events_wedding_events_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./widget-modules/wedding-events/wedding-events.component */ "./src/app/widget-modules/wedding-events/wedding-events.component.ts");
/* harmony import */ var _widget_modules_comments_comments_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./widget-modules/comments/comments.component */ "./src/app/widget-modules/comments/comments.component.ts");
/* harmony import */ var _widgets_albums_albums_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./widgets/albums/albums.component */ "./src/app/widgets/albums/albums.component.ts");
/* harmony import */ var _widget_modules_navigation_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./widget-modules/navigation/nav-bar/nav-bar.component */ "./src/app/widget-modules/navigation/nav-bar/nav-bar.component.ts");
/* harmony import */ var _widgets_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./widgets/home/home.component */ "./src/app/widgets/home/home.component.ts");
/* harmony import */ var _widget_modules_guest_book_guest_book_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./widget-modules/guest-book/guest-book.component */ "./src/app/widget-modules/guest-book/guest-book.component.ts");
/* harmony import */ var _widget_modules_container_container_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./widget-modules/container/container.component */ "./src/app/widget-modules/container/container.component.ts");
/* harmony import */ var _widget_modules_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./widget-modules/footer/footer.component */ "./src/app/widget-modules/footer/footer.component.ts");


















var appRoutes = [];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _widget_modules_couplestory_couplestory_component__WEBPACK_IMPORTED_MODULE_9__["CouplestoryComponent"],
                _widget_modules_wedding_events_wedding_events_component__WEBPACK_IMPORTED_MODULE_10__["WeddingEventsComponent"],
                _widget_modules_comments_comments_component__WEBPACK_IMPORTED_MODULE_11__["CommentsComponent"],
                _widgets_albums_albums_component__WEBPACK_IMPORTED_MODULE_12__["AlbumsComponent"],
                _widget_modules_navigation_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__["NavBarComponent"],
                _widgets_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _widget_modules_guest_book_guest_book_component__WEBPACK_IMPORTED_MODULE_15__["GuestBookComponent"],
                _widget_modules_container_container_component__WEBPACK_IMPORTED_MODULE_16__["ContainerComponent"],
                _widget_modules_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
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

module.exports = ".img-mandala{\n    width: 18vw;\n    height: 609.75px;\n    opacity: .81;\n}\n.top-left-mandala {\n    top: 0px;\n    position: absolute;\n    left: 0%;\n}\n.top-right-mandala {\n    top: 0%;\n    position: absolute;\n    right: 0px;\n    -webkit-transform: scaleX(-1);\n    transform: scaleX(-1);\n}\n.middle-left-mandala {\n    top: 50%;\n    position: absolute;\n    left: 0;\n}\n.middle-right-mandala {\n    top: 50%;\n    position: absolute;\n    right: 0px;\n    -webkit-transform: scaleX(-1);\n    transform: scaleX(-1);\n}\n.bottom-img-mandala{\n    width: 335px;\n    height: 960px;\n    opacity: .81;\n}\n.bottom-middle-mandala {\n    bottom: 0px;\n    position: absolute;\n    left: auto;\n    right: auto;\n    -webkit-transform: scaleX(-1);\n    transform: rotate(-90deg);\n}\n#con-marriage-info{\n    width: 100%;\n    /* background-color: rgba(0,0,0, 0.4); */\n    /* position: absolute; */\n    opacity: 0.8;\n    /* padding: 41px 0px 41px 0; */\n}\n#con-event-info {\n    height: 385PX;\n    background-color: #FFFF;\n    background-color: rgba(0,0,0, 0.4);\n    position: absolute;\n    left: 23%;\n    right: 23%;\n    top: -188px;\n    opacity: 0.8;\n\n}\n.middle-container {\n    margin-left: 21.666%;\n    margin-right: 21.666%;\n}\n#con-album-label {\n    font-family: Playfair Display, Regular;\n    font-size: 3.4895vw;\n    text-align: center;\n    word-spacing: 10;\n    line-height: 67px;\n    color: #445563;\n    opacity: 1;\n    margin-top: 20px;\n}\n.con-event-container {\n    top: 600px;\n    width: 100%;\n    /* min-height: 200px; */\n}\n/* .bottom-img-mandala{\n    width: 59vw;\n    height: 216px;\n    opacity: .81;\n} */\n/* \n  ##Device = Low Resolution Tablets, Mobiles (Landscape)\n  ##Screen = B/w 481px to 767px\n*/\n@media (min-width: 481px) and (max-width: 812px) {\n  \n    .middle-container {\n        width: 100%;\n        top: -116px;\n        margin-left: 0%;\n        margin-right: 0%;\n        \n    }\n    #con-marriage-info{\n        height: 116px;\n        left: 10.6666%;\n        right: 10.666%;\n        width: auto;\n    }\n    #con-album-label {\n        top: 282px;\n        font-size: 5.4895vw;\n    }\n    \n    .con-album-label-hr{\n        width: 18%;\n    }\n    .con-event-container {\n        top: 383px;\n        background-color: #E4E0DD;\n    }\n  }\n/*Portrait Mobile */\n@media (min-width: 320px) and (max-width: 480px) {\n    .middle-container {\n        top: -88px;\n        width: 100%;\n        margin-left: 0%;\n        margin-right: 0%;\n    }\n    #con-marriage-info{\n        height: 89px;\n        left: 10.6666%;\n        right: 10.666%;\n        width: auto;\n    }\n\n    #con-album-label {\n        top: 222px;\n        font-size: 5.4895vw;\n    }\n\n    .con-album-label-hr{\n        width: 0%;\n    }\n    .con-event-container {\n        top: 300px;\n        background-color: #E4E0DD;\n    }\n  }\n\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLFNBQVM7Q0FDWjtBQUNEO0lBQ0ksUUFBUTtJQUNSLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLHNCQUFzQjtDQUN6QjtBQUNEO0lBQ0ksU0FBUztJQUNULG1CQUFtQjtJQUNuQixRQUFRO0NBQ1g7QUFDRDtJQUNJLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixzQkFBc0I7Q0FDekI7QUFDRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QiwwQkFBMEI7Q0FDN0I7QUFDRDtJQUNJLFlBQVk7SUFDWix5Q0FBeUM7SUFDekMseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiwrQkFBK0I7Q0FDbEM7QUFDRDtJQUNJLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhOztDQUVoQjtBQUNEO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtDQUN6QjtBQUNEO0lBQ0ksdUNBQXVDO0lBQ3ZDLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix3QkFBd0I7Q0FDM0I7QUFDRDs7OztJQUlJO0FBR0Y7OztFQUdBO0FBRUY7O0lBRUk7UUFDSSxZQUFZO1FBQ1osWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixpQkFBaUI7O0tBRXBCO0lBQ0Q7UUFDSSxjQUFjO1FBQ2QsZUFBZTtRQUNmLGVBQWU7UUFDZixZQUFZO0tBQ2Y7SUFDRDtRQUNJLFdBQVc7UUFDWCxvQkFBb0I7S0FDdkI7O0lBRUQ7UUFDSSxXQUFXO0tBQ2Q7SUFDRDtRQUNJLFdBQVc7UUFDWCwwQkFBMEI7S0FDN0I7R0FDRjtBQUVILG9CQUFvQjtBQUNwQjtJQUNJO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsaUJBQWlCO0tBQ3BCO0lBQ0Q7UUFDSSxhQUFhO1FBQ2IsZUFBZTtRQUNmLGVBQWU7UUFDZixZQUFZO0tBQ2Y7O0lBRUQ7UUFDSSxXQUFXO1FBQ1gsb0JBQW9CO0tBQ3ZCOztJQUVEO1FBQ0ksVUFBVTtLQUNiO0lBQ0Q7UUFDSSxXQUFXO1FBQ1gsMEJBQTBCO0tBQzdCO0dBQ0YiLCJmaWxlIjoic3JjL2FwcC93aWRnZXQtbW9kdWxlcy9jb250YWluZXIvY29udGFpbmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLW1hbmRhbGF7XG4gICAgd2lkdGg6IDE4dnc7XG4gICAgaGVpZ2h0OiA2MDkuNzVweDtcbiAgICBvcGFjaXR5OiAuODE7XG59XG4udG9wLWxlZnQtbWFuZGFsYSB7XG4gICAgdG9wOiAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDAlO1xufVxuLnRvcC1yaWdodC1tYW5kYWxhIHtcbiAgICB0b3A6IDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMHB4O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbn1cbi5taWRkbGUtbGVmdC1tYW5kYWxhIHtcbiAgICB0b3A6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbn1cbi5taWRkbGUtcmlnaHQtbWFuZGFsYSB7XG4gICAgdG9wOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xufVxuLmJvdHRvbS1pbWctbWFuZGFsYXtcbiAgICB3aWR0aDogMzM1cHg7XG4gICAgaGVpZ2h0OiA5NjBweDtcbiAgICBvcGFjaXR5OiAuODE7XG59XG4uYm90dG9tLW1pZGRsZS1tYW5kYWxhIHtcbiAgICBib3R0b206IDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogYXV0bztcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xufVxuI2Nvbi1tYXJyaWFnZS1pbmZve1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsIDAuNCk7ICovXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICAvKiBwYWRkaW5nOiA0MXB4IDBweCA0MXB4IDA7ICovXG59XG4jY29uLWV2ZW50LWluZm8ge1xuICAgIGhlaWdodDogMzg1UFg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwgMC40KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMjMlO1xuICAgIHJpZ2h0OiAyMyU7XG4gICAgdG9wOiAtMTg4cHg7XG4gICAgb3BhY2l0eTogMC44O1xuXG59XG4ubWlkZGxlLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IDIxLjY2NiU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMS42NjYlO1xufVxuI2Nvbi1hbGJ1bS1sYWJlbCB7XG4gICAgZm9udC1mYW1pbHk6IFBsYXlmYWlyIERpc3BsYXksIFJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiAzLjQ4OTV2dztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd29yZC1zcGFjaW5nOiAxMDtcbiAgICBsaW5lLWhlaWdodDogNjdweDtcbiAgICBjb2xvcjogIzQ0NTU2MztcbiAgICBvcGFjaXR5OiAxO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uY29uLWV2ZW50LWNvbnRhaW5lciB7XG4gICAgdG9wOiA2MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBtaW4taGVpZ2h0OiAyMDBweDsgKi9cbn1cbi8qIC5ib3R0b20taW1nLW1hbmRhbGF7XG4gICAgd2lkdGg6IDU5dnc7XG4gICAgaGVpZ2h0OiAyMTZweDtcbiAgICBvcGFjaXR5OiAuODE7XG59ICovXG5cblxuICAvKiBcbiAgIyNEZXZpY2UgPSBMb3cgUmVzb2x1dGlvbiBUYWJsZXRzLCBNb2JpbGVzIChMYW5kc2NhcGUpXG4gICMjU2NyZWVuID0gQi93IDQ4MXB4IHRvIDc2N3B4XG4qL1xuXG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA4MTJweCkge1xuICBcbiAgICAubWlkZGxlLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0b3A6IC0xMTZweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAlO1xuICAgICAgICBcbiAgICB9XG4gICAgI2Nvbi1tYXJyaWFnZS1pbmZve1xuICAgICAgICBoZWlnaHQ6IDExNnB4O1xuICAgICAgICBsZWZ0OiAxMC42NjY2JTtcbiAgICAgICAgcmlnaHQ6IDEwLjY2NiU7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgIH1cbiAgICAjY29uLWFsYnVtLWxhYmVsIHtcbiAgICAgICAgdG9wOiAyODJweDtcbiAgICAgICAgZm9udC1zaXplOiA1LjQ4OTV2dztcbiAgICB9XG4gICAgXG4gICAgLmNvbi1hbGJ1bS1sYWJlbC1ocntcbiAgICAgICAgd2lkdGg6IDE4JTtcbiAgICB9XG4gICAgLmNvbi1ldmVudC1jb250YWluZXIge1xuICAgICAgICB0b3A6IDM4M3B4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRFMEREO1xuICAgIH1cbiAgfVxuXG4vKlBvcnRyYWl0IE1vYmlsZSAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAubWlkZGxlLWNvbnRhaW5lciB7XG4gICAgICAgIHRvcDogLTg4cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMCU7XG4gICAgfVxuICAgICNjb24tbWFycmlhZ2UtaW5mb3tcbiAgICAgICAgaGVpZ2h0OiA4OXB4O1xuICAgICAgICBsZWZ0OiAxMC42NjY2JTtcbiAgICAgICAgcmlnaHQ6IDEwLjY2NiU7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgIH1cblxuICAgICNjb24tYWxidW0tbGFiZWwge1xuICAgICAgICB0b3A6IDIyMnB4O1xuICAgICAgICBmb250LXNpemU6IDUuNDg5NXZ3O1xuICAgIH1cblxuICAgIC5jb24tYWxidW0tbGFiZWwtaHJ7XG4gICAgICAgIHdpZHRoOiAwJTtcbiAgICB9XG4gICAgLmNvbi1ldmVudC1jb250YWluZXIge1xuICAgICAgICB0b3A6IDMwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRFMEREO1xuICAgIH1cbiAgfVxuXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/widget-modules/container/container.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/widget-modules/container/container.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div style=\"padding-left: 0%;padding-right: 0%;\" class=\"middle-container\">\n    <div id=\"con-marriage-info\">\n      <app-couplestory [imageUrl]=\"weddingData?.data?.welcome\"></app-couplestory>\n    </div>\n\n      <div id=\"con-album-label\">\n        <img class=\"con-album-label-hr\" src=\"assets/rectangle.svg\" />\n        <span id=\"album\" style=\"padding-left: 20px;padding-right: 17px;\"\n          >ALBUMS</span>\n        <img\n          class=\"con-album-label-hr\"\n          style=\"transform: scale(-1);\"\n          src=\"assets/rectangle.svg\" />\n      </div>\n    <div class=\"con-event-container\">\n        <app-wedding-events\n          [weddingEventList]=\"weddingData?.data?.album\"\n        ></app-wedding-events>\n      </div>\n   <div class=\"d-none d-sm-none d-md-none d-lg-block\">\n    <div class=\"top-left-mandala\">\n      <img class=\"img-mandala\" src=\"assets/mandala.png\" />\n    </div>\n    <div class=\"top-right-mandala\">\n      <img class=\"img-mandala\" src=\"assets/mandala.png\" />\n    </div>\n    <div class=\"middle-left-mandala\">\n      <img class=\"img-mandala\" src=\"assets/mandala.png\" />\n    </div>\n    <div class=\"middle-right-mandala\">\n      <img class=\"img-mandala\" src=\"assets/mandala.png\" />\n    </div>\n  </div>\n</div>\n\n\n"

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

module.exports = "#couple-name{\n    text-align: center;\n    font-family: Great Vibes, Regular;\n    /* font-size: 142px; */\n    font-size: 8.395vw;\n    line-height: 178px;\n    color: #9d45278a;\n    /* color: #D0CECA; */\n    margin-top: 32px;\n    z-index: 200;\n    \n\n}\n.cp-bg{\n    color: #f1f1f1;\n    -webkit-filter: blur(6px);\n            filter: blur(6px);\n    background-color: #ffff;\n    opacity: 0.6;\n    width: 100%;\n    position: absolute;\n    height: 107%;\n}\n#marriage-date {\n    text-align: center;\n    font-family: Playfair Display, Regular;\n    font-size: 60px;\n    line-height: 80px;\n    color: #303B44;\n}\n#marriage-date-summary{\n    text-align: center;\n    font-family: Playfair Display, Regular;\n    font-size: 30px;\n    line-height: 40px;\n    word-spacing: 10;\n    color: #303B44;\n\n}\n.couple-name-div{\n    align-items: center;\n    height: 210px;\n    display: flex;\n    justify-content: center;\n    position: relative;\n    position: absolute;\n    top: -210px;\n    left: 21.6666%;\n    right: 21.666%;\n}\n.couple-name-bg{\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: #526b53de;\n    position: absolute;\n    background-position: bottom;\n    z-index: -1;\n    /* -webkit-filter: blur(26px); */\n    /* filter: blur(26px); */\n}\n.duration{\n    font-size: 34px;\n}\n.couple-name-bg:before{\n    \n}\n.duration-summary {\n    height:210px;\n}\n/* \n  ##Device = Low Resolution Tablets, Mobiles (Landscape)\n  ##Screen = B/w 481px to 767px\n*/\n@media (min-width: 481px) and (max-width: 812px) {\n\n     #couple-name{\n        font-size: 13.395vw;\n        line-height: 0;\n        color: #9d45278a;\n        margin-top: 17px;\n       }\n       .couple-name-div{\n        height: 116px;\n        left: 7%;\n        right: 7%;\n        top: -116px;\n       }\n\n       #marriage-date-summary{\n        font-size: 4vw;\n        line-height: 30px;\n       }\n       .duration{\n        font-size: 4vw;\n      }\n      #marriage-date {\n        font-size: 6.5vw;\n        line-height: 35px;\n      }\n      .duration-summary {\n        height: 116px;\n      }\n    \n    \n  }\n/* \n    ##Device = Most of the Smartphones Mobiles (Portrait)\n    ##Screen = B/w 320px to 479px\n  */\n@media (min-width: 320px) and (max-width: 480px) {\n    \n   #couple-name{\n    font-size: 13.395vw;\n    line-height: 0;\n    color: #9d45278a;\n    margin-top: 17px;\n   }\n   .couple-name-div{\n    height: 89px;\n    left: 7%;\n    right: 7%;\n    top: -89px;\n   }\n\n   #marriage-date-summary{\n           font-size: 4vw;\n           line-height: 30px;\n       }\n    .duration{\n        font-size: 4vw;\n      }\n    #marriage-date {\n        font-size: 6vw;\n        line-height: 28px;\n      }\n\n      .duration-summary{\n        height: 89px;\n      }\n  }\n\n\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvY291cGxlc3RvcnkvY291cGxlc3RvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsYUFBYTs7O0NBR2hCO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsMEJBQWtCO1lBQWxCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLHVDQUF1QztJQUN2QyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQix1Q0FBdUM7SUFDdkMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTs7Q0FFbEI7QUFDRDtJQUNJLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksUUFBUTtJQUNSLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyx5QkFBeUI7Q0FDNUI7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUNEOztDQUVDO0FBQ0Q7SUFDSSxhQUFhO0NBQ2hCO0FBRUQ7OztFQUdFO0FBRUY7O0tBRUs7UUFDRyxvQkFBb0I7UUFDcEIsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakI7T0FDRDtRQUNDLGNBQWM7UUFDZCxTQUFTO1FBQ1QsVUFBVTtRQUNWLFlBQVk7UUFDWjs7T0FFRDtRQUNDLGVBQWU7UUFDZixrQkFBa0I7UUFDbEI7T0FDRDtRQUNDLGVBQWU7T0FDaEI7TUFDRDtRQUNFLGlCQUFpQjtRQUNqQixrQkFBa0I7T0FDbkI7TUFDRDtRQUNFLGNBQWM7T0FDZjs7O0dBR0o7QUFFRDs7O0lBR0U7QUFFRjs7R0FFQztJQUNDLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQjtHQUNEO0lBQ0MsYUFBYTtJQUNiLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYOztHQUVEO1dBQ1EsZUFBZTtXQUNmLGtCQUFrQjtRQUNyQjtJQUNKO1FBQ0ksZUFBZTtPQUNoQjtJQUNIO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtPQUNuQjs7TUFFRDtRQUNFLGFBQWE7T0FDZDtHQUNKIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvY291cGxlc3RvcnkvY291cGxlc3RvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb3VwbGUtbmFtZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IEdyZWF0IFZpYmVzLCBSZWd1bGFyO1xuICAgIC8qIGZvbnQtc2l6ZTogMTQycHg7ICovXG4gICAgZm9udC1zaXplOiA4LjM5NXZ3O1xuICAgIGxpbmUtaGVpZ2h0OiAxNzhweDtcbiAgICBjb2xvcjogIzlkNDUyNzhhO1xuICAgIC8qIGNvbG9yOiAjRDBDRUNBOyAqL1xuICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgei1pbmRleDogMjAwO1xuICAgIFxuXG59XG4uY3AtYmd7XG4gICAgY29sb3I6ICNmMWYxZjE7XG4gICAgZmlsdGVyOiBibHVyKDZweCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwNyU7XG59XG4jbWFycmlhZ2UtZGF0ZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBQbGF5ZmFpciBEaXNwbGF5LCBSZWd1bGFyO1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBsaW5lLWhlaWdodDogODBweDtcbiAgICBjb2xvcjogIzMwM0I0NDtcbn1cbiNtYXJyaWFnZS1kYXRlLXN1bW1hcnl7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBQbGF5ZmFpciBEaXNwbGF5LCBSZWd1bGFyO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICB3b3JkLXNwYWNpbmc6IDEwO1xuICAgIGNvbG9yOiAjMzAzQjQ0O1xuXG59XG4uY291cGxlLW5hbWUtZGl2e1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAyMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMjEwcHg7XG4gICAgbGVmdDogMjEuNjY2NiU7XG4gICAgcmlnaHQ6IDIxLjY2NiU7XG59XG4uY291cGxlLW5hbWUtYmd7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogIzUyNmI1M2RlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG4gICAgei1pbmRleDogLTE7XG4gICAgLyogLXdlYmtpdC1maWx0ZXI6IGJsdXIoMjZweCk7ICovXG4gICAgLyogZmlsdGVyOiBibHVyKDI2cHgpOyAqL1xufVxuLmR1cmF0aW9ue1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbn1cbi5jb3VwbGUtbmFtZS1iZzpiZWZvcmV7XG4gICAgXG59XG4uZHVyYXRpb24tc3VtbWFyeSB7XG4gICAgaGVpZ2h0OjIxMHB4O1xufVxuXG4vKiBcbiAgIyNEZXZpY2UgPSBMb3cgUmVzb2x1dGlvbiBUYWJsZXRzLCBNb2JpbGVzIChMYW5kc2NhcGUpXG4gICMjU2NyZWVuID0gQi93IDQ4MXB4IHRvIDc2N3B4XG4qL1xuXG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA4MTJweCkge1xuXG4gICAgICNjb3VwbGUtbmFtZXtcbiAgICAgICAgZm9udC1zaXplOiAxMy4zOTV2dztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICAgIGNvbG9yOiAjOWQ0NTI3OGE7XG4gICAgICAgIG1hcmdpbi10b3A6IDE3cHg7XG4gICAgICAgfVxuICAgICAgIC5jb3VwbGUtbmFtZS1kaXZ7XG4gICAgICAgIGhlaWdodDogMTE2cHg7XG4gICAgICAgIGxlZnQ6IDclO1xuICAgICAgICByaWdodDogNyU7XG4gICAgICAgIHRvcDogLTExNnB4O1xuICAgICAgIH1cblxuICAgICAgICNtYXJyaWFnZS1kYXRlLXN1bW1hcnl7XG4gICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICB9XG4gICAgICAgLmR1cmF0aW9ue1xuICAgICAgICBmb250LXNpemU6IDR2dztcbiAgICAgIH1cbiAgICAgICNtYXJyaWFnZS1kYXRlIHtcbiAgICAgICAgZm9udC1zaXplOiA2LjV2dztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgICB9XG4gICAgICAuZHVyYXRpb24tc3VtbWFyeSB7XG4gICAgICAgIGhlaWdodDogMTE2cHg7XG4gICAgICB9XG4gICAgXG4gICAgXG4gIH1cbiAgXG4gIC8qIFxuICAgICMjRGV2aWNlID0gTW9zdCBvZiB0aGUgU21hcnRwaG9uZXMgTW9iaWxlcyAoUG9ydHJhaXQpXG4gICAgIyNTY3JlZW4gPSBCL3cgMzIwcHggdG8gNDc5cHhcbiAgKi9cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgXG4gICAjY291cGxlLW5hbWV7XG4gICAgZm9udC1zaXplOiAxMy4zOTV2dztcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICBjb2xvcjogIzlkNDUyNzhhO1xuICAgIG1hcmdpbi10b3A6IDE3cHg7XG4gICB9XG4gICAuY291cGxlLW5hbWUtZGl2e1xuICAgIGhlaWdodDogODlweDtcbiAgICBsZWZ0OiA3JTtcbiAgICByaWdodDogNyU7XG4gICAgdG9wOiAtODlweDtcbiAgIH1cblxuICAgI21hcnJpYWdlLWRhdGUtc3VtbWFyeXtcbiAgICAgICAgICAgZm9udC1zaXplOiA0dnc7XG4gICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgIH1cbiAgICAuZHVyYXRpb257XG4gICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgICAgfVxuICAgICNtYXJyaWFnZS1kYXRlIHtcbiAgICAgICAgZm9udC1zaXplOiA2dnc7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgfVxuXG4gICAgICAuZHVyYXRpb24tc3VtbWFyeXtcbiAgICAgICAgaGVpZ2h0OiA4OXB4O1xuICAgICAgfVxuICB9XG5cblxuICAgICJdfQ== */"

/***/ }),

/***/ "./src/app/widget-modules/couplestory/couplestory.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/widget-modules/couplestory/couplestory.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"couple-name-div\">\n            <!-- <div class=\"couple-name-bg\"  [ngStyle]=\"{'background':'url('+ imageUrl +')'}\" ></div>  -->\n                <!-- <div class=\"couple-name-bg\"   ></div>  -->\n                <div  class=\"nav-container cp-bg\"></div>\n                <h1 id=\"couple-name\">{{'Aaron & Diya'}}</h1> \n    </div>\n    <div class=\"duration-summary\">\n         <div  class=\"nav-container\"></div>\n            <div id=\"marriage-date-summary\">\n                    <span style=\"padding-left: 20px;padding-right: 17px;\">celebrating <b *ngIf=\"togetherMonth>=0\" class=\"duration\">{{togetherMonth}} month</b> <b *ngIf=\"togetherYear>=0\" class=\"duration\">{{togetherYear}} year</b> of togetherness\n                    </span>\n                 <div>since</div>\n            </div>\n            <h1 id=\"marriage-date\">10th February, 2019</h1>\n    </div>\n</div>\n\n\n"

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

module.exports = ".footer {\n    height: 68px;\n    background-color: #E4E0DD;\n    width: 100%;\n}\n.with-love {\n    display: flex;\n    justify-content: center;\n    font-family: Great Vibes, Regular;\n    font-size: 30px;\n    align-items: center;\n    justify-content: center;\n}\n#share {\n    display: flex;\n    height: 68px;\n    background-color: #E4E0DD;\n    width: 100%;\n}\n#social-icons {\n    position: absolute;\n    right: 8%;\n    bottom: 19px;\n}\n.share-label{\n    font-family: Playfair Display, Regular;\n    font-size: 15px;\n    color: #445563;\n    padding: 0px 9px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixZQUFZO0NBQ2Y7QUFDRDtJQUNJLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsd0JBQXdCO0NBQzNCO0FBQ0Q7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixZQUFZO0NBQ2Y7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksdUNBQXVDO0lBQ3ZDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gICAgaGVpZ2h0OiA2OHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNEUwREQ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ud2l0aC1sb3ZlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBHcmVhdCBWaWJlcywgUmVndWxhcjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiNzaGFyZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDY4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U0RTBERDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiNzb2NpYWwtaWNvbnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogOCU7XG4gICAgYm90dG9tOiAxOXB4O1xufVxuLnNoYXJlLWxhYmVse1xuICAgIGZvbnQtZmFtaWx5OiBQbGF5ZmFpciBEaXNwbGF5LCBSZWd1bGFyO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzQ0NTU2MztcbiAgICBwYWRkaW5nOiAwcHggOXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/widget-modules/footer/footer.component.html":
/*!*************************************************************!*\
  !*** ./src/app/widget-modules/footer/footer.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"share\">\n    <div class=\"footer with-love\">\n        <span>with\n            <img src=\"assets/heart.svg\" /> from Jason</span>\n    </div>\n\n    <div class=\"d-none d-sm-none d-md-block\">\n        <div id=\"social-icons\">\n            <span class=\"share-label\">Share:</span>\n            <a href=\"http://www.facebook.com/sharer/sharer.php?u=diya-aron.s3-website.ap-south-1.amazonaws.com\" target=\"_blank\">\n                <img style=\"padding: 0 9px;\" src=\"assets/fb.svg\" />\n            </a>\n            <a href=\"https://twitter.com/intent/tweet?text=AaronDiyaWedding&url=http://diya-aron.s3-website.ap-south-1.amazonaws.com\"\n                target=\"_blank\">\n                <img style=\"padding: 0 9px;\" src=\"assets/twitter.svg\" />\n            </a>\n            <img style=\"padding: 0 9px;\" src=\"assets/insta.svg\" />\n        </div>\n    </div>\n</div>\n<!-- <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n    Launch demo modal\n</button> -->\n"

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

module.exports = ".guest-view {\n    height: 200px;\n    color: #707070;\n}\n.guest-book-label {\n    padding-top: 93px;\n    color: #1D1D1D;\n    font-family: Playfair Display, Regular;\n    font-size: 50px;\n    line-height: 67px;\n    text-transform: uppercase;\n    text-align: center;\n\n}\n.wish-style{\n    color: #707070;\n    font-family: Great Vibes, Regular;\n    font-size: 44px;\n    line-height: 83px;\n    text-align: center;\n}\n.loc-date{\n    text-align: center;\n    font-family: Playfair Display;\n    font-style: italic;\n    font-size: 18px;\n    color: #707070;\n    margin-bottom: 2px;\n}\n/* span.wish-style:before{\n    content:\"''\";\n    font-size: 322px;\n    color: #FF418A;\n    transform: rotate(180deg);\n    opacity: .32;\n\n}\nspan.wish-style:after{\n    content:\"''\";\n    font-size: 322px;\n    color: #FF418A;\n    opacity: .32;\n\n} */\ninput {\n    background-color: inherit;\n    height: 60px;\n    width: 100%;\n    border: 0;\n    outline: 0;\n    background: transparent;\n    border-bottom: 2px solid #75726e7a;\n    font-size: 44px;\n    font-family: Great Vibes, Regular;\n    line-height: 83px;\n    color:#707070;\n    padding-left: 20px;\n}\ntextarea {\n    background-color: inherit;\n    width: 100%;\n    border: 0;\n    outline: 0;\n    background: transparent;\n    border-bottom: 2px solid #75726e7a;\n    font-size: 44px;\n    font-family: Great Vibes, Regular;\n    line-height: 83px;\n    color:#707070;\n    padding-left: 20px;\n}\n#wish-button{\n    width: 536px;\n    height: 125px;\n    font-size: 30px;\n    line-height: 80px;\n    font-family: Playfair Display, Regular;\n    background-color: #445563;\n    color: #FFFFFF;\n    border-radius: 10px;\n\n}\n.form-width {\n    margin-left: 22%;\n    margin-right: 22%;\n    margin-top: 8%\n}\n.btn-div{\n    margin-top: 75px; \n    text-align: center;   \n    padding-bottom: 25%;\n}\n.tq{\n    font-family: Great Vibes, Regular;\n    font-size: 90px;\n    color: #FF418A;\n    opacity: .81;\n}\n.tq-msg{\n    font-family: Playfair Display, Regular;\n    font-size: 30px;\n    line-height: 83px;\n    color: #707070;\n\n}\n#tq-div{\n    width: 60vw;\n    padding: 50px;\n    border-radius: 15px;\n    background: #E4E0DD;\n    text-align: center;\n}\n.btn-gotit{\n    background-color: #445563;\n    border-radius: 10px;\n    width: 177px;\n    height: 73px;\n    font-family: Playfair Display,Regular;\n    color: #FFFFFF;\n    font-size: 30px;\n}\n/* \n  ##Device = Low Resolution Tablets, Mobiles (Landscape)\n  ##Screen = B/w 481px to 767px\n*/\n@media (min-width: 481px) and (max-width: 812px) {\n    .con-album-label-hr{\n        width: 0%;\n    }\n    .guest-book-label{\n        padding-top: 55px;\n        font-size: 36px;\n    }\n    #wish-button {\n        width: 100%;\n    height: 87px;\n    font-size: 22px;\n    line-height: 71px;\n    }\n    .form-width {\n        margin-left: 12%;\n        margin-right: 12%;\n    }\n\n    .btn-div{\n        margin-top: 61px;\n    }\n}\n/*Portrait Mobile */\n@media (min-width: 320px) and (max-width: 480px) {\n    .con-album-label-hr{\n        width: 0%;\n    }\n    .guest-book-label{\n        padding-top: 55px;\n        font-size: 34px;\n    }\n\n    .form-width {\n        margin-left: 12%;\n        margin-right: 12%;\n    }\n    #wish-button {\n        width: 100%;\n    height: 87px;\n    font-size: 22px;\n    line-height: 71px;\n    }\n    .btn-div{\n        margin-top: 61px;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvZ3Vlc3QtYm9vay9ndWVzdC1ib29rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix1Q0FBdUM7SUFDdkMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsbUJBQW1COztDQUV0QjtBQUNEO0lBQ0ksZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7Q0FDdEI7QUFDRDs7Ozs7Ozs7Ozs7Ozs7SUFjSTtBQUNKO0lBQ0ksMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsbUNBQW1DO0lBQ25DLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7Q0FDdEI7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsbUNBQW1DO0lBQ25DLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixvQkFBb0I7O0NBRXZCO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsb0JBQW9CO0NBQ3ZCO0FBRUQ7SUFDSSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSx1Q0FBdUM7SUFDdkMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlOztDQUVsQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxlQUFlO0lBQ2YsZ0JBQWdCO0NBQ25CO0FBQ0Q7OztFQUdFO0FBRUY7SUFDSTtRQUNJLFVBQVU7S0FDYjtJQUNEO1FBQ0ksa0JBQWtCO1FBQ2xCLGdCQUFnQjtLQUNuQjtJQUNEO1FBQ0ksWUFBWTtJQUNoQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtLQUNqQjtJQUNEO1FBQ0ksaUJBQWlCO1FBQ2pCLGtCQUFrQjtLQUNyQjs7SUFFRDtRQUNJLGlCQUFpQjtLQUNwQjtDQUNKO0FBRUQsb0JBQW9CO0FBQ3BCO0lBQ0k7UUFDSSxVQUFVO0tBQ2I7SUFDRDtRQUNJLGtCQUFrQjtRQUNsQixnQkFBZ0I7S0FDbkI7O0lBRUQ7UUFDSSxpQkFBaUI7UUFDakIsa0JBQWtCO0tBQ3JCO0lBQ0Q7UUFDSSxZQUFZO0lBQ2hCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0tBQ2pCO0lBQ0Q7UUFDSSxpQkFBaUI7S0FDcEI7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldC1tb2R1bGVzL2d1ZXN0LWJvb2svZ3Vlc3QtYm9vay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmd1ZXN0LXZpZXcge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgY29sb3I6ICM3MDcwNzA7XG59XG4uZ3Vlc3QtYm9vay1sYWJlbCB7XG4gICAgcGFkZGluZy10b3A6IDkzcHg7XG4gICAgY29sb3I6ICMxRDFEMUQ7XG4gICAgZm9udC1mYW1pbHk6IFBsYXlmYWlyIERpc3BsYXksIFJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA2N3B4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG4ud2lzaC1zdHlsZXtcbiAgICBjb2xvcjogIzcwNzA3MDtcbiAgICBmb250LWZhbWlseTogR3JlYXQgVmliZXMsIFJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiA0NHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA4M3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2MtZGF0ZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFBsYXlmYWlyIERpc3BsYXk7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzcwNzA3MDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG4vKiBzcGFuLndpc2gtc3R5bGU6YmVmb3Jle1xuICAgIGNvbnRlbnQ6XCInJ1wiO1xuICAgIGZvbnQtc2l6ZTogMzIycHg7XG4gICAgY29sb3I6ICNGRjQxOEE7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICBvcGFjaXR5OiAuMzI7XG5cbn1cbnNwYW4ud2lzaC1zdHlsZTphZnRlcntcbiAgICBjb250ZW50OlwiJydcIjtcbiAgICBmb250LXNpemU6IDMyMnB4O1xuICAgIGNvbG9yOiAjRkY0MThBO1xuICAgIG9wYWNpdHk6IC4zMjtcblxufSAqL1xuaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNzU3MjZlN2E7XG4gICAgZm9udC1zaXplOiA0NHB4O1xuICAgIGZvbnQtZmFtaWx5OiBHcmVhdCBWaWJlcywgUmVndWxhcjtcbiAgICBsaW5lLWhlaWdodDogODNweDtcbiAgICBjb2xvcjojNzA3MDcwO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxudGV4dGFyZWEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAwO1xuICAgIG91dGxpbmU6IDA7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM3NTcyNmU3YTtcbiAgICBmb250LXNpemU6IDQ0cHg7XG4gICAgZm9udC1mYW1pbHk6IEdyZWF0IFZpYmVzLCBSZWd1bGFyO1xuICAgIGxpbmUtaGVpZ2h0OiA4M3B4O1xuICAgIGNvbG9yOiM3MDcwNzA7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuI3dpc2gtYnV0dG9ue1xuICAgIHdpZHRoOiA1MzZweDtcbiAgICBoZWlnaHQ6IDEyNXB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBsaW5lLWhlaWdodDogODBweDtcbiAgICBmb250LWZhbWlseTogUGxheWZhaXIgRGlzcGxheSwgUmVndWxhcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ1NTYzO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbn1cbi5mb3JtLXdpZHRoIHtcbiAgICBtYXJnaW4tbGVmdDogMjIlO1xuICAgIG1hcmdpbi1yaWdodDogMjIlO1xuICAgIG1hcmdpbi10b3A6IDglXG59XG4uYnRuLWRpdntcbiAgICBtYXJnaW4tdG9wOiA3NXB4OyBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgXG4gICAgcGFkZGluZy1ib3R0b206IDI1JTtcbn1cblxuLnRxe1xuICAgIGZvbnQtZmFtaWx5OiBHcmVhdCBWaWJlcywgUmVndWxhcjtcbiAgICBmb250LXNpemU6IDkwcHg7XG4gICAgY29sb3I6ICNGRjQxOEE7XG4gICAgb3BhY2l0eTogLjgxO1xufVxuLnRxLW1zZ3tcbiAgICBmb250LWZhbWlseTogUGxheWZhaXIgRGlzcGxheSwgUmVndWxhcjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDgzcHg7XG4gICAgY29sb3I6ICM3MDcwNzA7XG5cbn1cbiN0cS1kaXZ7XG4gICAgd2lkdGg6IDYwdnc7XG4gICAgcGFkZGluZzogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNFNEUwREQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJ0bi1nb3RpdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ1NTYzO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDE3N3B4O1xuICAgIGhlaWdodDogNzNweDtcbiAgICBmb250LWZhbWlseTogUGxheWZhaXIgRGlzcGxheSxSZWd1bGFyO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cbi8qIFxuICAjI0RldmljZSA9IExvdyBSZXNvbHV0aW9uIFRhYmxldHMsIE1vYmlsZXMgKExhbmRzY2FwZSlcbiAgIyNTY3JlZW4gPSBCL3cgNDgxcHggdG8gNzY3cHhcbiovXG5cbkBtZWRpYSAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDgxMnB4KSB7XG4gICAgLmNvbi1hbGJ1bS1sYWJlbC1ocntcbiAgICAgICAgd2lkdGg6IDAlO1xuICAgIH1cbiAgICAuZ3Vlc3QtYm9vay1sYWJlbHtcbiAgICAgICAgcGFkZGluZy10b3A6IDU1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICB9XG4gICAgI3dpc2gtYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4N3B4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBsaW5lLWhlaWdodDogNzFweDtcbiAgICB9XG4gICAgLmZvcm0td2lkdGgge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTIlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEyJTtcbiAgICB9XG5cbiAgICAuYnRuLWRpdntcbiAgICAgICAgbWFyZ2luLXRvcDogNjFweDtcbiAgICB9XG59XG5cbi8qUG9ydHJhaXQgTW9iaWxlICovXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC5jb24tYWxidW0tbGFiZWwtaHJ7XG4gICAgICAgIHdpZHRoOiAwJTtcbiAgICB9XG4gICAgLmd1ZXN0LWJvb2stbGFiZWx7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1NXB4O1xuICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgfVxuXG4gICAgLmZvcm0td2lkdGgge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTIlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEyJTtcbiAgICB9XG4gICAgI3dpc2gtYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4N3B4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBsaW5lLWhlaWdodDogNzFweDtcbiAgICB9XG4gICAgLmJ0bi1kaXZ7XG4gICAgICAgIG1hcmdpbi10b3A6IDYxcHg7XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/widget-modules/guest-book/guest-book.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/widget-modules/guest-book/guest-book.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"guestbook\">\n  <div class=\"guest-book-label\">\n    <img class=\"con-album-label-hr\" src=\"assets/rectangle.svg\" />\n    <span id=\"album\" style=\"padding-left: 20px;padding-right: 17px;\">Guest Book</span>\n    <img class=\"con-album-label-hr\" style=\"transform: scale(-1);\" src=\"assets/rectangle.svg\" />\n  </div>\n\n  <div style=\"margin-top: 63px;     display: flex;\n  justify-content: center;height: 604px;\">\n    <div class=\"guest-view\" style=\"position: relative;width: 100%\">\n      <div id=\"guest-book-turn\">\n        <div *ngFor=\"let wish of wishes.data.wishList\" style=\"    background: url(assets/book.jpg); background-repeat: no-repeat;\">\n          <div style=\"height: 100%;padding: 0px 98px;\">\n            <div style=\"position: absolute;left: 27%;width: 61%;top: 10%;overflow-y: scroll;height: 54%;justify-content: center;align-items: center;display: flex;\">\n              <h1 class=\"wish-style\">{{wish.message}}</h1>\n            </div>\n            <div style=\"width: max-content;position: absolute;right: 13%;position: absolute; bottom: 14%;\">\n              <p style=\"font-family: Playfair Display, Bold;font-size: 25px;text-align: center;color: #707070;margin-bottom: 2px;\">- {{wish.name}}</p>\n              <p class=\"loc-date\">{{wish.location}}</p>\n              <p class=\"loc-date\">{{wish.modifiedDate | date }}</p>\n            </div>\n          </div>\n        </div>\n\n        <!-- <div style=\"background: url('assets/page-right.png')\">hello</div> -->\n\n        <!-- <div style=\"background: url('assets/page-right.png')\">hhh</div> -->\n      </div>\n    </div>\n  </div>\n  <div class=\"modal\" id=\"confirmModal\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\" style=\"justify-content: center;align-items: center;background-color: none\">\n       \n          <div class=\"modal-body\" id=\"tq-div\">\n            <h1 class=\"tq\">Thank you</h1>\n            <p class=\"tq-msg\">...for writing in Aaron and Diya's wedding guest book! If you would like to make some changes, tap on the edit button.</p>\n            <div style=\"text-align: right\">\n                <button data-dismiss=\"modal\" class=\"btn-gotit\" (click)=\"iAgree(wishes.data.wishList)\">Got it</button>\n            </div>\n           </div>\n         \n        </div>\n      </div>\n    </div>\n\n  <!-- <div ng-repeat=\"item in wishes.data.wishList\" style=\"background: url('assets/page.png')\">Hello</div>\n           -->\n  <!-- <h1 class=\"wish-style\" id=\"word\"></h1> -->\n  <div *ngIf=\"showForm\" class=\"form-width\">\n    <form (ngSubmit)=\"guestForm.form.valid && onSubmit()\" #guestForm=\"ngForm\" novalidate>\n      <div>\n        <input name=\"name\" [(ngModel)]=\"wishObj.name\" #name=\"ngModel\" placeholder=\"Your Name\" required/>\n      </div>\n      <div *ngIf=\"guestForm.submitted && name.invalid\">\n        <span style=\"color: #ff000091;\" *ngIf=\"name.errors.required\">Name is required</span>\n      </div>\n      <div style=\"margin-top: 75px;\">\n        <input name=\"location\" [(ngModel)]=\"wishObj.location\" #location=\"ngModel\" placeholder=\"Your Location\" required/>\n      </div>\n      <div *ngIf=\"guestForm.submitted && location.invalid\">\n          <span style=\"color: #ff000091;\" *ngIf=\"location.errors.required\">Location is required</span>\n        </div>\n      <div style=\"margin-top: 75px;\">\n        <input name=\"email\" [(ngModel)]=\"wishObj.email\" placeholder=\"Your Email\" />\n      </div>\n      <div style=\"margin-top: 75px;\">\n        <textarea name=\"message\" [(ngModel)]=\"wishObj.message\" #message=\"ngModel\"  placeholder=\"Your Message\" required></textarea>\n      </div>\n      <div *ngIf=\"guestForm.submitted && message.invalid\">\n          <span style=\"color: #ff000091;\" *ngIf=\"message.errors.required\">Message is required</span>\n        </div>\n\n      <div class=\"btn-div\">\n        <button  type=\"submit\" id=\"wish-button\">Wish the lovely couple</button>\n      </div>\n\n    </form>\n\n  </div>\n  <!-- <div  *ngIf=\"!showForm && showConfirmMsg\" style=\"margin-left: 25%; margin-right: 25%;\">\n          <h1 class=\"wish-style\" id=\"word\">Thank you for writing in Aaron and Diya's wedding guest book! If you would like to make some changes, tap on <a (click)=\"showForm=true;\">Edit</a></h1>\n      </div> -->\n</div>\n\n<!--  \n      <div >\n          <div class=\"container\">\n              <h1></h1>\n              <form (ngSubmit)=\"guestForm.form.valid && onSubmit()\" #guestForm=\"ngForm\">\n                <div class=\"form-group\">\n                  <label for=\"name\">Name</label>\n                  <input name=\"name\" [(ngModel)]=\"wishObj.name\" type=\"text\" class=\"form-control\" id=\"name\" required #name=\"ngModel\">\n                  \n                </div>\n                <div class=\"form-group\">\n                  <label for=\"alterEgo\">Message</label>\n                  <input name=\"message\" [(ngModel)]=\"wishObj.Message\" type=\"text\" class=\"form-control\" id=\"alterEgo\">\n                </div>\n          \n                <button type=\"submit\" class=\"btn btn-success\">post</button>\n          \n              </form>\n          </div>\n    \n      </div>\n      -->"

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
    GuestBookComponent.prototype.initialiseGuestBookTurn = function (wishArray) {
        setTimeout(function () {
            $('#guest-book-turn').turn({
                display: 'single',
                width: '90%',
                height: 604,
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
    GuestBookComponent.prototype.iAgree = function (wishes) {
        var _this = this;
        clearInterval(defaultInterval);
        var element = $("<div style=\"background: url(assets/book.jpg); background-repeat: no-repeat;\">\n    <div style=\"height: 100%;padding: 0px 98px;\">\n    <div style=\"position: absolute;left: 27%;width: 61%;top: 10%;overflow-y:\n    scroll;height: 54%;justify-content: center;align-items: center;display: flex;\">\n          <h1 style=\"color: #707070; font-family: Great Vibes, Regular; font-size: 44px; line-height: 83px; text-align: center;\">"
            + this.wishObj.message + "</h1>\n      </div>\n      <div style=\"width: max-content;position: absolute;right: 13%;position: absolute; bottom: 14%;\">\n        <p style=\"font-family: Playfair Display, Bold;font-size: 25px;text-align: center;color: #707070;margin-bottom: 2px;\">"
            + this.wishObj.name + "</p>\n      <p style=\"text-align: center; font-family: Playfair Display;font-style: italic;font-size: 18px;: #707070;margin-bottom: 2px;\">"
            + this.wishObj.location + "</p>\n      </div>\n    </div>\n    <div>\n    </div>\n  </div>");
        $('#guest-book-turn').turn('addPage', element);
        $('#guest-book-turn').turn('page', wishes.length);
        setTimeout(function () {
            isPrevious = true;
            _this.showForm = false;
            _this.showConfirmMsg = false;
            var submitInterval = setInterval(function () {
                if ($('#guest-book-turn').turn('page') === 1) {
                    clearInterval(submitInterval);
                }
                $('#guest-book-turn').turn('previous');
            }, 5000);
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

module.exports = ".blurry {\n    background: none;\n    color: white;\n    border: none;\n}\n.blurrer {\n    height: 68px;\n    top: -10px;\n    left: -10px;\n    right: -10px;\n    position: absolute;\n    overflow: hidden;\n    -webkit-filter: blur(28px);\n    -moz-filter: blur(10px);\n    -o-filter: blur(10px);\n    -ms-filter: blur(10px);\n    background-size: cover;\n}\n.nav-container {\n    height: 68px;\n    width: 100%;\n    -webkit-filter: blur(50px);\n            filter: blur(50px);\n    background-position: top;\n    position: fixed;\n}\n.nav-flex {\n  width: 100%;\n  display: -webkit-flex; /* Safari */\n  -webkit-justify-content: center; /* Safari 6.1+ */\n  display: flex;\n  justify-content: center;\n}\n.nav-items-flex {\n    font-family: Playfair Display, Regular;\n    font-size: 20px;\n    line-height: 27px;\n    color: #1D1D1D;\n    padding: 0px 3.083vw;\n    cursor: pointer;\n    z-index: 1000;\n}\n.nav-items-flex-active {\n    font-family: Playfair Display, Bold;\n    font-weight: bold;\n\n}\n.nav-height{\n    height: 68px;\n    padding-left: 0px;\n    padding-right: 0px;\n}\n.nav-transcluent{\n    color: #f1f1f1;\n    -webkit-filter: blur(6px);\n            filter: blur(6px);\n    background-color: #ffff;\n     opacity: 0.6;\n}\n/*Landscape Mobile*/\n@media (min-width: 481px) and (max-width: 812px) {\n\n    .nav-height{\n       height: unset;\n    }\n  \n    .nav-items-flex {\n        font-size: 0.950rem;\n    }\n    ul li{\n        z-index: 3;\n        padding:13px;\n        font-family: Playfair Display, Regular;\n    }\n  }\n/*Portrait Mobile */\n@media (min-width: 320px) and (max-width: 480px) {\n\n    .nav-height{\n       height: unset;\n    }\n    .nav-items-flex {\n        font-size: 0.950rem;\n    }\n    ul li{\n        z-index: 3;\n        padding:13px;\n        font-family: Playfair Display, Regular;\n    }\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvbmF2aWdhdGlvbi9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtDQUMxQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWiwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQkFBZ0I7Q0FDbkI7QUFDRDtFQUNFLFlBQVk7RUFDWixzQkFBc0IsQ0FBQyxZQUFZO0VBQ25DLGdDQUFnQyxDQUFDLGlCQUFpQjtFQUNsRCxjQUFjO0VBQ2Qsd0JBQXdCO0NBQ3pCO0FBQ0Q7SUFDSSx1Q0FBdUM7SUFDdkMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCOztDQUVyQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGVBQWU7SUFDZiwwQkFBa0I7WUFBbEIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtLQUN2QixhQUFhO0NBQ2pCO0FBQ0Qsb0JBQW9CO0FBQ3BCOztJQUVJO09BQ0csY0FBYztLQUNoQjs7SUFFRDtRQUNJLG9CQUFvQjtLQUN2QjtJQUNEO1FBQ0ksV0FBVztRQUNYLGFBQWE7UUFDYix1Q0FBdUM7S0FDMUM7R0FDRjtBQUNILG9CQUFvQjtBQUNsQjs7SUFFRTtPQUNHLGNBQWM7S0FDaEI7SUFDRDtRQUNJLG9CQUFvQjtLQUN2QjtJQUNEO1FBQ0ksV0FBVztRQUNYLGFBQWE7UUFDYix1Q0FBdUM7S0FDMUM7R0FDRiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldC1tb2R1bGVzL25hdmlnYXRpb24vbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmx1cnJ5IHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4uYmx1cnJlciB7XG4gICAgaGVpZ2h0OiA2OHB4O1xuICAgIHRvcDogLTEwcHg7XG4gICAgbGVmdDogLTEwcHg7XG4gICAgcmlnaHQ6IC0xMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDI4cHgpO1xuICAgIC1tb3otZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgIC1vLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAtbXMtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ubmF2LWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA2OHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZpbHRlcjogYmx1cig1MHB4KTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG4gICAgcG9zaXRpb246IGZpeGVkO1xufVxuLm5hdi1mbGV4IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDsgLyogU2FmYXJpICovXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIFNhZmFyaSA2LjErICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm5hdi1pdGVtcy1mbGV4IHtcbiAgICBmb250LWZhbWlseTogUGxheWZhaXIgRGlzcGxheSwgUmVndWxhcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgY29sb3I6ICMxRDFEMUQ7XG4gICAgcGFkZGluZzogMHB4IDMuMDgzdnc7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHotaW5kZXg6IDEwMDA7XG59XG4ubmF2LWl0ZW1zLWZsZXgtYWN0aXZlIHtcbiAgICBmb250LWZhbWlseTogUGxheWZhaXIgRGlzcGxheSwgQm9sZDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxufVxuLm5hdi1oZWlnaHR7XG4gICAgaGVpZ2h0OiA2OHB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cbi5uYXYtdHJhbnNjbHVlbnR7XG4gICAgY29sb3I6ICNmMWYxZjE7XG4gICAgZmlsdGVyOiBibHVyKDZweCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY7XG4gICAgIG9wYWNpdHk6IDAuNjtcbn1cbi8qTGFuZHNjYXBlIE1vYmlsZSovXG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA4MTJweCkge1xuXG4gICAgLm5hdi1oZWlnaHR7XG4gICAgICAgaGVpZ2h0OiB1bnNldDtcbiAgICB9XG4gIFxuICAgIC5uYXYtaXRlbXMtZmxleCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45NTByZW07XG4gICAgfVxuICAgIHVsIGxpe1xuICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgICBwYWRkaW5nOjEzcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBQbGF5ZmFpciBEaXNwbGF5LCBSZWd1bGFyO1xuICAgIH1cbiAgfVxuLypQb3J0cmFpdCBNb2JpbGUgKi9cbiAgQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcblxuICAgIC5uYXYtaGVpZ2h0e1xuICAgICAgIGhlaWdodDogdW5zZXQ7XG4gICAgfVxuICAgIC5uYXYtaXRlbXMtZmxleCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45NTByZW07XG4gICAgfVxuICAgIHVsIGxpe1xuICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgICBwYWRkaW5nOjEzcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBQbGF5ZmFpciBEaXNwbGF5LCBSZWd1bGFyO1xuICAgIH1cbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/widget-modules/navigation/nav-bar/nav-bar.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/widget-modules/navigation/nav-bar/nav-bar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <nav class=\"navbar navbar-expand-md fixed-top nav-height\" role=\"navigation\">\n        <div  class=\"nav-container nav-transcluent\"></div>\n        <!-- <div [ngStyle]=\"{'background-image':'url(' +imageUrl+ ')'}\" class=\"nav-container\"></div> -->\n        <div class=\"navbar-light\" style=\"z-index: 3;\">\n            <!-- <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"onCollapse()\">\n                        <span class=\"navbar-toggler-icon\"></span>\n                </button> -->\n            <button style=\"    margin-left: 15px;\" class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-expanded=\"false\"\n                aria-label=\"Toggle navigation\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbarTogglerDemo02\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n        </div>\n\n        <!-- <a class=\"navbar-item\" >SOUND ON</a> -->\n        <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\" [ngbCollapse]=\"isCollapsed\">\n            <div class=\"d-none d-sm-none d-md-block d-lg-block\" style=\"width: 100%\">\n                <div class=\"nav-flex\">\n                    <div class=\"nav-items-flex\">\n                        <a style=\"color: inherit;text-decoration: none\" [routerLinkActiveOptions]=\"{ exact: true }\" routerLink=\"/\" routerLinkActive=\"active\">HOME</a>\n                    </div>\n                    <div class=\"nav-items-flex\">\n                        <a href=\"#album\" (click)=\"sendGA();\" style=\"color: inherit;text-decoration: none\" routerLink=\"/\" [routerLinkActiveOptions]=\"{ exact: true }\"\n                            [fragment]=\"'album'\" routerLinkActive=\"active\">ALBUMS</a>\n                    </div>\n                    <div class=\"nav-items-flex\">\n                        <a href=\"#guestbook\" (click)=\"sendGA();\" style=\"color: inherit;text-decoration: none\" routerLink=\"/\" [routerLinkActiveOptions]=\"{ exact: true }\"\n                            [fragment]=\"'guestbook'\" routerLinkActive=\"active\">GUEST BOOK</a>\n                    </div>\n                    <div class=\"nav-items-flex\">\n                        <a (click)=\"sendGA();\" style=\"color: inherit;text-decoration: none\">SHARE</a>\n                    </div>\n\n                </div>\n            </div>\n            <div class=\"d-block d-sm-block d-md-none\">\n                <ul class=\"navbar-nav mr-auto\" style=\"padding-top: 13px;font-size: 1.25rem;\">\n                    <li class=\"nav-item\">\n                        <a (click)=\"isCollapsed = !isCollapsed\" style=\"color: inherit;text-decoration: none\" [routerLinkActiveOptions]=\"{ exact: true }\"\n                            routerLink=\"/\" routerLinkActive=\"active\">HOME</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a href=\"#album\" (click)=\"sendGA();isCollapsed = !isCollapsed\" style=\"color: inherit;text-decoration: none\" routerLink=\"/\"\n                            [routerLinkActiveOptions]=\"{ exact: true }\" [fragment]=\"'album'\" routerLinkActive=\"active\">ALBUMS</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a href=\"#guestbook\" (click)=\"sendGA();isCollapsed = !isCollapsed\" style=\"color: inherit;text-decoration: none\" routerLink=\"/\"\n                            [routerLinkActiveOptions]=\"{ exact: true }\" [fragment]=\"'guestbook'\" routerLinkActive=\"active\">GUEST BOOK</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a (click)=\"sendGA();isCollapsed = !isCollapsed\" style=\"color: inherit;text-decoration: none\">SHARE</a>\n                    </li>\n                </ul>\n\n            </div>\n\n\n        </div>\n\n\n        <!-- <ul class=\"navbar-nav\">\n            <li class=\"nav-item\">\n                <a routerLink=\"/home\" routerLinkActive=\"active\" class=\"nav-item \">HOME</a>\n            </li>\n            <!-- <li class=\"nav-item\">\n                    <a routerLink=\"/home\"  [fragment]=\"'guestbook'\" routerLinkActive=\"active\"  class=\"nav-item \">Guest book</a>\n            </li> -->\n        <!-- <li routerLink=\"/guest-book\" class=\"nav-item\">\n                <a class=\"nav-item \">DIGITAL GUEST BOOK</a>\n            </li> -->\n        <!-- <li class=\"nav-item\">\n                <a class=\"nav-item \">PHOTOS</a>\n            </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-item \">CONTACT US</a>\n          </li> \n        </ul> -->\n    </nav>\n\n\n</div>"

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
        this.isCollapsed = true;
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
    NavBarComponent.prototype.onCollapse = function () {
        alert('jj');
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

module.exports = ".event-big-card-conatiner {\r\n    width: 100%;\r\n    padding-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n.event-small-card-conatiner {\r\n    width: 50%;\r\n    display: inline-block;\r\n    padding-top: 10px;\r\n}\r\n.event-large-card {\r\n    padding-top: 5pxpx;\r\n    margin-bottom: 5pxpx;\r\n    max-height: inherit;\r\n    position: relative;\r\n}\r\n.event-small-card {\r\n    padding-top: 5pxpx;\r\n    padding-bottom: 5pxpx;\r\n    max-height: inherit;\r\n    position: relative;\r\n}\r\n.event-label{\r\n    color: #FFFFFF;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    font-family: Playfair Display, Regular;\r\n    font-size: 1.7vw;\r\n    line-height: 40px;\r\n    text-transform: uppercase;\r\n}\r\n.small-card-left-padding {\r\n    padding-left: 5px;\r\n}\r\n.small-card-right-padding {\r\n    padding-right: 5px;\r\n}\r\n#bottom-mandala{\r\n    opacity: .81;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n/* \r\n  ##Device = Low Resolution Tablets, Mobiles (Landscape)\r\n  ##Screen = B/w 481px to 767px\r\n*/\r\n@media (min-width: 481px) and (max-width: 812px) {\r\n  \r\n    .event-small-card-conatiner {\r\n        width: 100%;\r\n        padding-bottom: 30px;\r\n    }\r\n    .small-card-right-padding{\r\n        padding-right: 0px;\r\n    }\r\n    .small-card-left-padding{\r\n        padding-left: 0px;\r\n    }\r\n    .event-label{\r\n        font-size: 5.2vw;\r\n    }\r\n    .event-big-card-conatiner {\r\n        margin-bottom: 30px;\r\n    }\r\n    \r\n  }\r\n/* \r\n    ##Device = Most of the Smartphones Mobiles (Portrait)\r\n    ##Screen = B/w 320px to 479px\r\n  */\r\n@media (min-width: 320px) and (max-width: 480px) {\r\n    .event-big-card-conatiner {\r\n        margin-bottom: 30px;\r\n    }\r\n    \r\n    .event-small-card-conatiner {\r\n        width: 100%;\r\n        padding-bottom: 30px;\r\n    }\r\n\r\n   .small-card-right-padding{\r\n       padding-right: 0px;\r\n   }\r\n   .small-card-left-padding{\r\n    padding-left: 0px;\r\n}\r\n.event-label{\r\n    font-size: 5vw;\r\n}\r\n    \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvd2VkZGluZy1ldmVudHMvd2VkZGluZy1ldmVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFVBQVU7SUFDVix5Q0FBaUM7WUFBakMsaUNBQWlDO0lBQ2pDLHVDQUF1QztJQUN2QyxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtDQUM3QjtBQUNEO0lBQ0ksa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2Qsd0JBQXdCO0NBQzNCO0FBRUQ7OztFQUdFO0FBRUY7O0lBRUk7UUFDSSxZQUFZO1FBQ1oscUJBQXFCO0tBQ3hCO0lBQ0Q7UUFDSSxtQkFBbUI7S0FDdEI7SUFDRDtRQUNJLGtCQUFrQjtLQUNyQjtJQUNEO1FBQ0ksaUJBQWlCO0tBQ3BCO0lBQ0Q7UUFDSSxvQkFBb0I7S0FDdkI7O0dBRUY7QUFFRDs7O0lBR0U7QUFFRjtJQUNFO1FBQ0ksb0JBQW9CO0tBQ3ZCOztJQUVEO1FBQ0ksWUFBWTtRQUNaLHFCQUFxQjtLQUN4Qjs7R0FFRjtPQUNJLG1CQUFtQjtJQUN0QjtHQUNEO0lBQ0Msa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxlQUFlO0NBQ2xCOztHQUVFIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0LW1vZHVsZXMvd2VkZGluZy1ldmVudHMvd2VkZGluZy1ldmVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ldmVudC1iaWctY2FyZC1jb25hdGluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmV2ZW50LXNtYWxsLWNhcmQtY29uYXRpbmVyIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG4uZXZlbnQtbGFyZ2UtY2FyZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHhweDtcclxuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmV2ZW50LXNtYWxsLWNhcmQge1xyXG4gICAgcGFkZGluZy10b3A6IDVweHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweHB4O1xyXG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZXZlbnQtbGFiZWx7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBmb250LWZhbWlseTogUGxheWZhaXIgRGlzcGxheSwgUmVndWxhcjtcclxuICAgIGZvbnQtc2l6ZTogMS43dnc7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLnNtYWxsLWNhcmQtbGVmdC1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcbi5zbWFsbC1jYXJkLXJpZ2h0LXBhZGRpbmcge1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcbiNib3R0b20tbWFuZGFsYXtcclxuICAgIG9wYWNpdHk6IC44MTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLyogXHJcbiAgIyNEZXZpY2UgPSBMb3cgUmVzb2x1dGlvbiBUYWJsZXRzLCBNb2JpbGVzIChMYW5kc2NhcGUpXHJcbiAgIyNTY3JlZW4gPSBCL3cgNDgxcHggdG8gNzY3cHhcclxuKi9cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDgxMnB4KSB7XHJcbiAgXHJcbiAgICAuZXZlbnQtc21hbGwtY2FyZC1jb25hdGluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLnNtYWxsLWNhcmQtcmlnaHQtcGFkZGluZ3tcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICB9XHJcbiAgICAuc21hbGwtY2FyZC1sZWZ0LXBhZGRpbmd7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICB9XHJcbiAgICAuZXZlbnQtbGFiZWx7XHJcbiAgICAgICAgZm9udC1zaXplOiA1LjJ2dztcclxuICAgIH1cclxuICAgIC5ldmVudC1iaWctY2FyZC1jb25hdGluZXIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLyogXHJcbiAgICAjI0RldmljZSA9IE1vc3Qgb2YgdGhlIFNtYXJ0cGhvbmVzIE1vYmlsZXMgKFBvcnRyYWl0KVxyXG4gICAgIyNTY3JlZW4gPSBCL3cgMzIwcHggdG8gNDc5cHhcclxuICAqL1xyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuZXZlbnQtYmlnLWNhcmQtY29uYXRpbmVyIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZXZlbnQtc21hbGwtY2FyZC1jb25hdGluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgLnNtYWxsLWNhcmQtcmlnaHQtcGFkZGluZ3tcclxuICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgfVxyXG4gICAuc21hbGwtY2FyZC1sZWZ0LXBhZGRpbmd7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG4uZXZlbnQtbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDV2dztcclxufVxyXG4gICAgXHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/widget-modules/wedding-events/wedding-events.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/widget-modules/wedding-events/wedding-events.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"events\">\n                \n                                \n               \n\n         <div *ngFor=\"let event of weddingEventList;index as i\" [ngClass]=\"event.type === 'large' ? 'event-big-card-conatiner' : 'event-small-card-conatiner'\" (click)=\"fetchAlbum(event.action)\">\n                                    <div [routerLink]=\"['/albums',event.title,event.background]\"  *ngIf=\"event.type === 'large'\" class=\"event-large-card\">\n                                                <a  class=\"tilter tilter--1\">\n                                                                <figure class=\"tilter__figure\">\n                                                                        <img class=\"tilter__image\" [src]=\"event.background\" alt=\"img02\" />\n                                                                        <div class=\"tilter__deco tilter__deco--shine\"><div></div></div>\n                                                                        <div class=\"event-label\">{{event.title}}</div>\n                                                                </figure>\n                                                        </a>\n                                            <!-- <img style=\"max-height: inherit;width: 100%\" [src]=\"event.background\"/>\n                                            <div class=\"event-label\">{{event.title}}</div> -->\n                                              \n                                    </div>\n                                    <div [routerLink]=\"['/albums',event.title,event.background]\"  *ngIf=\"event.type !== 'large'\" class=\"event-small-card\" [ngClass]=\"(i+1) % 2 !== 0 ? 'small-card-left-padding' : 'small-card-right-padding'\">\n                                                <a  class=\"tilter tilter--1\">\n                                                                <figure class=\"tilter__figure\">\n                                                                        <img class=\"tilter__image\" [src]=\"event.background\" alt=\"img02\" />\n                                                                        <div class=\"tilter__deco tilter__deco--shine\"><div></div></div>\n                                                                        <div class=\"event-label\">{{event.title}}</div>\n                                                                </figure>\n                                                        </a>   \n                                        <!-- <img style=\"max-height: inherit;width: 100%\" [src]=\"event.background\"/>\n                                                    <div class=\"event-label\">{{event.title}}</div> -->\n                                     </div>\n        </div>\n\n\n\n           <div class=\"d-none d-sm-none d-md-none d-lg-block\">\n                <div id=\"bottom-mandala\" >\n                        <img style=\"width:68vw\" src=\"assets/mandala-bottom.png\"/>\n                </div>\n           </div>             \n        \n  <!-- <div *ngFor=\"let eventList of weddingEventList;index as i\">\n            <div [ngClass]=\"i === 0 ? 'event-big-card-conatiner' : 'event-small-card-conatiner'\" (click)=\"fetchAlbum(event.action)\" *ngFor=\"let event of eventList.row;index as j\">\n                <div  *ngIf=\"i === 0\" class=\"event-large-card\">\n                         <img style=\"max-height: inherit;width: 100%\" [src]=\"event.backgroundImage\"/>\n                        <div class=\"event-label\">{{event.name}}</div>\n                          \n                </div>\n                <div *ngIf=\"i === 1\" class=\"event-small-card\" [ngClass]=\"(j+1) % 2 !== 0 ? 'small-card-right-padding' : 'small-card-left-padding'\">\n                        <img style=\"max-height: inherit;width: 100%\" [src]=\"event.backgroundImage\"/>\n                                <div class=\"event-label\">{{event.name}}</div>\n                 </div>\n            </div>\n    </div> -->\n    \n    <!-- <div *ngIf=\"albumOverviewData?.data?.albumItems?.length>0\">\n        <app-albums [albumArray] =\"albumOverviewData?.data?.albumItems\"></app-albums>\n    </div>\n    <div *ngIf=\"albumOverviewData?.data?.albumItems?.length>0\">\n            <app-albums [albumArray] =\"albumOverviewData?.data?.albumItems\"></app-albums>\n        </div> -->\n</div>"

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

/***/ "./src/app/widgets/albums/albums.component.css":
/*!*****************************************************!*\
  !*** ./src/app/widgets/albums/albums.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sample-flipbook{\n\twidth:400px;\n\theight:200px;\n\ttransition:margin-left 0.2s;\n}\n\n.sample-flipbook .page{\n\twidth:200px;\n\theight:200px;\n\tbackground-color:white;\n\tline-height:300px;\n\tfont-size:20px;\n}\n\n.sample-flipbook .page-wrapper{\n\t-webkit-perspective:2000px;\n\t-ms-perspective:2000px;\n\t-o-perspective:2000px;\n\tperspective:2000px;\n}\n\n.sample-flipbook .hard{\n\tbackground:#ccc !important;\n\tcolor:#333;\n\t-o-box-shadow:inset 0 0 5px #666;\n\t-ms-box-shadow:inset 0 0 5px #666;\n\tbox-shadow:inset 0 0 5px #666;\n\tfont-weight:bold;\n}\n\n.sample-flipbook .odd{\n\tbackground:-webkit-gradient(linear, right top, left top, color-stop(0.95, #FFF), color-stop(1, #DADADA));\n\tbackground-image:linear-gradient(right, #FFF 95%, #C4C4C4 100%);\n\t-o-box-shadow:inset 0 0 5px #666;\n\t-ms-box-shadow:inset 0 0 5px #666;\n\tbox-shadow:inset 0 0 5px #666;\n\t\n}\n\n.sample-flipbook .even{\n\tbackground:-webkit-gradient(linear, left top, right top, color-stop(0.95, #fff), color-stop(1, #dadada));\n\tbackground-image:linear-gradient(left, #fff 95%, #dadada 100%);\n\t-o-box-shadow:inset 0 0 5px #666;\n\t-ms-box-shadow:inset 0 0 5px #666;\n\tbox-shadow:inset 0 0 5px #666;\n}\n\n/****app*/\n\n.fit-top-container {\n    width: 1000px;\n    height: 500px;\n}\n\n.share-photo {\n\tfont-family: Playfair Display, Regular;\n    font-size: 1vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy9hbGJ1bXMvYWxidW1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUtiLDRCQUE0QjtDQUM1Qjs7QUFFRDtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2Y7O0FBRUQ7Q0FDQywyQkFBMkI7Q0FFM0IsdUJBQXVCO0NBQ3ZCLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkI7O0FBRUQ7Q0FDQywyQkFBMkI7Q0FDM0IsV0FBVztDQUdYLGlDQUFpQztDQUNqQyxrQ0FBa0M7Q0FDbEMsOEJBQThCO0NBQzlCLGlCQUFpQjtDQUNqQjs7QUFFRDtDQUNDLHlHQUF5RztDQUt6RyxnRUFBZ0U7Q0FHaEUsaUNBQWlDO0NBQ2pDLGtDQUFrQztDQUNsQyw4QkFBOEI7O0NBRTlCOztBQUVEO0NBQ0MseUdBQXlHO0NBS3pHLCtEQUErRDtDQUcvRCxpQ0FBaUM7Q0FDakMsa0NBQWtDO0NBQ2xDLDhCQUE4QjtDQUM5Qjs7QUFFRCxVQUFVOztBQUNWO0lBQ0ksY0FBYztJQUNkLGNBQWM7Q0FDakI7O0FBQ0Q7Q0FDQyx1Q0FBdUM7SUFDcEMsZUFBZTtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvYWxidW1zL2FsYnVtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNhbXBsZS1mbGlwYm9va3tcblx0d2lkdGg6NDAwcHg7XG5cdGhlaWdodDoyMDBweDtcblx0LXdlYmtpdC10cmFuc2l0aW9uOm1hcmdpbi1sZWZ0IDAuMnM7XG5cdC1tb3otdHJhbnNpdGlvbjptYXJnaW4tbGVmdCAwLjJzO1xuXHQtbXMtdHJhbnNpdGlvbjptYXJnaW4tbGVmdCAwLjJzO1xuXHQtby10cmFuc2l0aW9uOm1hcmdpbi1sZWZ0IDAuMnM7XG5cdHRyYW5zaXRpb246bWFyZ2luLWxlZnQgMC4ycztcbn1cblxuLnNhbXBsZS1mbGlwYm9vayAucGFnZXtcblx0d2lkdGg6MjAwcHg7XG5cdGhlaWdodDoyMDBweDtcblx0YmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcblx0bGluZS1oZWlnaHQ6MzAwcHg7XG5cdGZvbnQtc2l6ZToyMHB4O1xufVxuXG4uc2FtcGxlLWZsaXBib29rIC5wYWdlLXdyYXBwZXJ7XG5cdC13ZWJraXQtcGVyc3BlY3RpdmU6MjAwMHB4O1xuXHQtbW96LXBlcnNwZWN0aXZlOjIwMDBweDtcblx0LW1zLXBlcnNwZWN0aXZlOjIwMDBweDtcblx0LW8tcGVyc3BlY3RpdmU6MjAwMHB4O1xuXHRwZXJzcGVjdGl2ZToyMDAwcHg7XG59XG5cbi5zYW1wbGUtZmxpcGJvb2sgLmhhcmR7XG5cdGJhY2tncm91bmQ6I2NjYyAhaW1wb3J0YW50O1xuXHRjb2xvcjojMzMzO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xuXHQtbW96LWJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xuXHQtby1ib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2Njtcblx0LW1zLWJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xuXHRib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2Njtcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcbn1cblxuLnNhbXBsZS1mbGlwYm9vayAub2Rke1xuXHRiYWNrZ3JvdW5kOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAuOTUsICNGRkYpLCBjb2xvci1zdG9wKDEsICNEQURBREEpKTtcblx0YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudChyaWdodCwgI0ZGRiA5NSUsICNDNEM0QzQgMTAwJSk7XG5cdGJhY2tncm91bmQtaW1hZ2U6LW1vei1saW5lYXItZ3JhZGllbnQocmlnaHQsICNGRkYgOTUlLCAjQzRDNEM0IDEwMCUpO1xuXHRiYWNrZ3JvdW5kLWltYWdlOi1tcy1saW5lYXItZ3JhZGllbnQocmlnaHQsICNGRkYgOTUlLCAjQzRDNEM0IDEwMCUpO1xuXHRiYWNrZ3JvdW5kLWltYWdlOi1vLWxpbmVhci1ncmFkaWVudChyaWdodCwgI0ZGRiA5NSUsICNDNEM0QzQgMTAwJSk7XG5cdGJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHJpZ2h0LCAjRkZGIDk1JSwgI0M0QzRDNCAxMDAlKTtcblx0LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2Njtcblx0LW1vei1ib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2Njtcblx0LW8tYm94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XG5cdC1tcy1ib3gtc2hhZG93Omluc2V0IDAgMCA1cHggIzY2Njtcblx0Ym94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XG5cdFxufVxuXG4uc2FtcGxlLWZsaXBib29rIC5ldmVue1xuXHRiYWNrZ3JvdW5kOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAuOTUsICNmZmYpLCBjb2xvci1zdG9wKDEsICNkYWRhZGEpKTtcblx0YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmIDk1JSwgI2RhZGFkYSAxMDAlKTtcblx0YmFja2dyb3VuZC1pbWFnZTotbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmIDk1JSwgI2RhZGFkYSAxMDAlKTtcblx0YmFja2dyb3VuZC1pbWFnZTotbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsICNmZmYgOTUlLCAjZGFkYWRhIDEwMCUpO1xuXHRiYWNrZ3JvdW5kLWltYWdlOi1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmIDk1JSwgI2RhZGFkYSAxMDAlKTtcblx0YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQobGVmdCwgI2ZmZiA5NSUsICNkYWRhZGEgMTAwJSk7XG5cdC13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XG5cdC1tb3otYm94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XG5cdC1vLWJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xuXHQtbXMtYm94LXNoYWRvdzppbnNldCAwIDAgNXB4ICM2NjY7XG5cdGJveC1zaGFkb3c6aW5zZXQgMCAwIDVweCAjNjY2O1xufVxuXG4vKioqKmFwcCovXG4uZml0LXRvcC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAwcHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbn1cbi5zaGFyZS1waG90byB7XG5cdGZvbnQtZmFtaWx5OiBQbGF5ZmFpciBEaXNwbGF5LCBSZWd1bGFyO1xuICAgIGZvbnQtc2l6ZTogMXZ3O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/widgets/albums/albums.component.html":
/*!******************************************************!*\
  !*** ./src/app/widgets/albums/albums.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade show\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"false\"\n    style=\"display: block\">\n    <div style=\"max-width: 100%;height: 100%;margin: 0;\" class=\"modal-dialog\" role=\"document\">\n        <div style=\"height: 100%;border:0;    border-radius: 0;\" class=\"modal-content\">\n            <div class=\"modal-header\" style=\"border-bottom: none;\">\n                <!-- <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5> -->\n                <!-- <button type=\"button\" class=\"close\" data-dismiss=\"modal\" routerLink=\"/\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button> -->\n\n                <div class=\"close\" data-dismiss=\"modal\" routerLink=\"/\" aria-label=\"Close\" style=\"margin: 20px 0px 0px 6vw;    width: 211px;\">\n                    <img style=\"width: 40px;\" src=\"assets/left-arrow.svg\">\n                </div>\n                <div class=\"d-none d-sm-none d-md-block\">\n                    <h2 style=\"    font-family: Playfair Display, Regular;\n                        font-size: 2.4895vw;\">{{eventName}}</h2>\n                </div>\n                <div class=\"d-none d-sm-none d-md-block\" style=\"margin: 20px 6vw 0px 0px;\" id=\"social-icons\">\n                    <span class=\"share-label\">Share Photo:</span>\n                    <a href=\"http://www.facebook.com/sharer/sharer.php?u=diya-aron.s3-website.ap-south-1.amazonaws.com\" target=\"_blank\">\n                        <img style=\"padding: 0 9px;\" src=\"assets/fb.svg\" />\n                    </a>\n                    <a href=\"https://twitter.com/intent/tweet?text=AaronDiyaWedding&url=http://diya-aron.s3-website.ap-south-1.amazonaws.com\"\n                        target=\"_blank\">\n                        <img style=\"padding: 0 9px;\" src=\"assets/twitter.svg\" />\n                    </a>\n                    <img style=\"padding: 0 9px;\" src=\"assets/insta.svg\" />\n                </div>\n\n            </div>\n            <div class=\"modal-body\">\n                <div style=\"margin: 0px 6.5%;height: 83%;\">\n                        <div id=\"flipbook\" class=\"sample-flipbook\" style=\"    border-radius: 17px;\" >\n                            <div class=\"hard shadow\" >\n                                <img style=\"width: 100%;height: 100%;\" [src]=\"imgUrl\"/>\n                            </div>\n                            <div class=\"own size shadow\" style=\"width: 100%;height: 100%;\" *ngFor=\"let image of albumData?.data?.albumItems\">\n                                    <img style=\"width: 100%;height: 100%;\" [src]=\"image?.albumArt\"/>\n                            </div>\n                        </div>\n                </div>\n\n            </div>\n            <!-- <div class=\"modal-footer\">\n                \n               \n            </div> -->\n        </div>\n    </div>\n</div>\n<!-- <div>\n  <div>\n        <div id=\"flipbook\" class=\"sample-flipbook\"  >\n          <div *ngFor=\"let image of albumArray\" [ngStyle]=\"{'background':'url(' +image?.albumArt+ ')'}\"></div>\n        </div>\n    </div>\n</div> -->\n\n<!-- <div id=\"flipbook\" class=\"sample-flipbook\">\n    <div style=\"background-image:url(assets/pages/1.jpg)\"></div>\n\t\t\t<div (mousedown)=\"sendPhotoClickEvent()\" style=\"background-image:url(assets/pages/2.jpg)\"></div>\n\t\t\t<div style=\"background-image:url(assets/pages/3.jpg)\"></div>\n\t\t\t<div style=\"background-image:url(assets/pages/4.jpg)\"></div>\n\t\t\t<div style=\"background-image:url(assets/pages/5.jpg)\"></div>\n  </div> -->"

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




var AlbumsComponent = /** @class */ (function () {
    function AlbumsComponent(route, albumService) {
        this.route = route;
        this.albumService = albumService;
        this.albumUrl = 'http://ec2-52-66-182-119.ap-south-1.compute.amazonaws.com:8080';
    }
    AlbumsComponent.prototype.handleWheelEvent = function (event) {
        event.preventDefault();
    };
    AlbumsComponent.prototype.fetchAlbumData = function () {
        var _this = this;
        this.albumService.getAlbumOverview(this.albumUrl).subscribe(function (data) {
            _this.albumData = data;
            _this.intialiseFlip();
            //console.log(this.al);
        });
    };
    AlbumsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.imgUrl = params.url;
            _this.eventName = params.name;
        });
        // this.route.data.subscribe(v => this.imgUrl = v);
        this.fetchAlbumData();
    };
    // ngAfterViewInit() {
    // $('#flipbook').turn({
    //   width: 1400,
    //   height: 600,
    //   autoCenter: true
    // });
    //}
    AlbumsComponent.prototype.intialiseFlip = function () {
        $(document).ready(function () {
            $('#flipbook').turn({
                display: 'single',
                width: '100%',
                height: 600,
                autoCenter: true,
                duration: 1000,
                inclination: 90,
                gradients: true
            });
        });
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _data_access_album_overview_album_overview_service__WEBPACK_IMPORTED_MODULE_3__["AlbumOverviewService"]])
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

module.exports = ".key-photo {\n    height: 1000px;\n    background-repeat: no-repeat;\n    position: fixed;\n    background-size: cover;\n    z-index: -10;\n    width: 100%\n}\n#bg-image{\n   width: 100%\n}\n.parent-container {\n    position: relative;\n    top:900px;\n}\n.couple-container {\n    min-height: 1000px;\n    background-color: #E4E0DD;\n    width: 100%;\n}\n.container-fluid-nomax {\n\tpadding: 0;\n    margin-right: auto;\n    margin-left: auto;\n}\n/* \n  ##Device = Low Resolution Tablets, Mobiles (Landscape)\n  ##Screen = B/w 481px to 767px\n*/\n@media (min-width: 481px) and (max-width: 812px) {\n    .couple-container {\n        padding-bottom: 30px;\n    }\n    \n}\n/* \n  ##Device = Most of the Smartphones Mobiles (Portrait)\n  ##Screen = B/w 320px to 479px\n*/\n@media (min-width: 320px) and (max-width: 480px) {\n  \n    .couple-container {\n        padding-bottom: 30px;\n    }\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBSWhCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsV0FBVztDQUNkO0FBQ0Q7R0FDRyxXQUFXO0NBQ2I7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0NBQ2I7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsWUFBWTtDQUNmO0FBQ0Q7Q0FDQyxXQUFXO0lBQ1IsbUJBQW1CO0lBQ25CLGtCQUFrQjtDQUNyQjtBQUdEOzs7RUFHRTtBQUVGO0lBQ0k7UUFDSSxxQkFBcUI7S0FDeEI7O0NBRUo7QUFFRDs7O0VBR0U7QUFFRjs7SUFFSTtRQUNJLHFCQUFxQjtLQUN4Qjs7Q0FFSiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIua2V5LXBob3RvIHtcbiAgICBoZWlnaHQ6IDEwMDBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB6LWluZGV4OiAtMTA7XG4gICAgd2lkdGg6IDEwMCVcbn1cbiNiZy1pbWFnZXtcbiAgIHdpZHRoOiAxMDAlXG59XG4ucGFyZW50LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDo5MDBweDtcbn1cbi5jb3VwbGUtY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiAxMDAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U0RTBERDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXItZmx1aWQtbm9tYXgge1xuXHRwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuXG4vKiBcbiAgIyNEZXZpY2UgPSBMb3cgUmVzb2x1dGlvbiBUYWJsZXRzLCBNb2JpbGVzIChMYW5kc2NhcGUpXG4gICMjU2NyZWVuID0gQi93IDQ4MXB4IHRvIDc2N3B4XG4qL1xuXG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA4MTJweCkge1xuICAgIC5jb3VwbGUtY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgfVxuICAgIFxufVxuXG4vKiBcbiAgIyNEZXZpY2UgPSBNb3N0IG9mIHRoZSBTbWFydHBob25lcyBNb2JpbGVzIChQb3J0cmFpdClcbiAgIyNTY3JlZW4gPSBCL3cgMzIwcHggdG8gNDc5cHhcbiovXG5cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIFxuICAgIC5jb3VwbGUtY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgfVxuICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/widgets/home/home.component.html":
/*!**************************************************!*\
  !*** ./src/app/widgets/home/home.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <router-outlet></router-outlet>\n  <div class=\"key-photo\">\n    <img\n      style=\"display: none\"\n      onload=\"this.style.display = 'block'\"\n      id=\"bg-image\"\n      class=\"img-fluid\"\n      [src]=\"wedddingOverviewData?.data?.welcome\"\n    />\n  </div>\n  <div class=\"row\">\n      <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\n        <app-nav-bar\n          [imageUrl]=\"wedddingOverviewData?.data?.welcome\"\n        ></app-nav-bar>\n      </div>\n    </div>\n  <div class=\"container-fluid-nomax\">\n        <div class=\"parent-container\">\n          <div>\n              <div style=\"padding-left: 0px;padding-right: 0px\" >\n              <div class=\"couple-container\">\n                <app-container [weddingData]=\"wedddingOverviewData\" ></app-container>\n              </div>\n            </div>\n            <div style=\"padding-left: 0px;padding-right: 0px\">\n                <div style=\"min-height: 1000px;background-color: #F6F2EF;width: 100%;position: relative;\">\n                    <app-guest-book (sendWishEvent)=\"setGuestBookWishes($event)\"></app-guest-book>\n                </div>\n            </div>\n            <div style=\"padding-left: 0px;padding-right: 0px;\">\n                <app-footer></app-footer>\n\n            </div>\n                \n          </div>\n          </div>\n        </div>\n\n    </div>\n\n    \n\n\n<!-- <div style=\"min-height: 1000px;background-color: #F6F2EF;width: 100%;position: relative;top: 2900px\">  -->\n<!-- <app-nav-bar></app-nav-bar>\n            <app-couplestory [couplestory] = \"wedddingOverviewData?.data?.coupleStory\"></app-couplestory>\n            <app-wedding-events [weddingDate] = \"wedddingOverviewData?.data?.dateOfWedding\" \n            [weddingEventList] = \"wedddingOverviewData?.data?.eventList\"></app-wedding-events>\n            <app-guest-book></app-guest-book>\n           -->\n<!-- <div  [ngStyle]=\"{'background-image':'url(' +wedddingOverviewData.data.welcome+ ')'}\" class=\"key-photo\"> </div> -->\n<!--   <div class=\"key-photo\" >\n                      <div  [ngStyle]=\"{'background-image':'url(' +wedddingOverviewData.data.welcome+ ')'}\" class=\"key-photo\"> </div> \n                        <img style=\"width: 100%\" class=\"img-fluid\" src=\"assets/key-photo.png\">\n                    <img style='display: none' onload=\"this.style.display = 'block'\" id=\"bg-image\"  class=\"img-fluid\" [src]=\"wedddingOverviewData?.data?.welcome\">\n        </div> -->\n"

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
        this.fetchWedOverview();
        $('#bg-image').on('load', function () {
            $('.parent-container').css({ 'top': $('#bg-image').height() });
        });
        $(window).on('load', (function () {
            $('.parent-container').css({ 'top': $('#bg-image').height() });
        }));
        $(window).resize(function () {
            $('.parent-container').css({ 'top': $('#bg-image').height() });
        });
        // function setContainer () {
        //   /*parent container deciding top position*/
        //   $('.parent-container').css({'top' : $('#bg-image').height()});
        //   /*couple container deciding height*/
        //   $('.couple-container').height($('.con-event-container').height() +
        //   $('.duration-summary').height() + $('#con-album-label').height() -95);
        // }
    };
    HomeComponent.prototype.fetchWedOverview = function () {
        var _this = this;
        this.wedOverviewService.getWeddingOverview().subscribe(function (data) {
            _this.wedddingOverviewData = data;
            setTimeout(function () {
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