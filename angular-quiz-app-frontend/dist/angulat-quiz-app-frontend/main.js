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

/***/ "./src/app/admin-panel/admin-panel.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin-panel/admin-panel.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXBhbmVsL2FkbWluLXBhbmVsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin-panel/admin-panel.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin-panel/admin-panel.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n\r\n  <div >\r\n      <router-outlet></router-outlet>\r\n  </div>\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/admin-panel/admin-panel.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin-panel/admin-panel.component.ts ***!
  \******************************************************/
/*! exports provided: AdminPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelComponent", function() { return AdminPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/http/http.service */ "./src/app/services/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminPanelComponent = /** @class */ (function () {
    function AdminPanelComponent(http) {
        this.http = http;
    }
    AdminPanelComponent.prototype.ngOnInit = function () {
    };
    AdminPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-panel',
            template: __webpack_require__(/*! ./admin-panel.component.html */ "./src/app/admin-panel/admin-panel.component.html"),
            styles: [__webpack_require__(/*! ./admin-panel.component.css */ "./src/app/admin-panel/admin-panel.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], AdminPanelComponent);
    return AdminPanelComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = ".HomePageHeader{\r\ntext-align: center;\r\ncolor:white;\r\n-webkit-text-stroke-color: black;\r\n-webkit-text-stroke-width: 1px;\r\nmargin-top: 10px;\r\n}\r\n.MainPageLoginDiv\r\n{\r\n    width:100%;\r\n    height: 50px;\r\n    margin-top: 15px;\r\n    padding-right: 30px;\r\n\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxtQkFBbUI7QUFDbkIsWUFBWTtBQUNaLGlDQUFpQztBQUNqQywrQkFBK0I7QUFDL0IsaUJBQWlCO0NBQ2hCO0FBQ0Q7O0lBRUksV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsb0JBQW9COztDQUV2QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkhvbWVQYWdlSGVhZGVye1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmNvbG9yOndoaXRlO1xyXG4td2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiBibGFjaztcclxuLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMXB4O1xyXG5tYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5NYWluUGFnZUxvZ2luRGl2XHJcbntcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuXHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head></head>\n\n<body>\n    <div class='MainPageLoginDiv'>\n        <app-login (IsAdminEvent)='receiveIsAdmin($event)' (isUserEvent)='receiveIsUser($event)' style=\"    float: right;\"></app-login>\n        <div style='width:100%;'>\n            <nav class='nav' *ngIf='isAdmin' style='margin-left: 30px;'>\n                <a class=\"nav-link active\" routerLink='./admin-panel/manage-tests'>Manage Tests</a>\n                <a class=\"nav-link active\" routerLink='./admin-panel/manage-testing-urls'>Manage URLs</a>\n                <a class=\"nav-link active\" routerLink='./admin-panel/testing-results'>Testing results</a>\n                <!-- <button type='button'>RemoveTest</button>\n                <button type='button'>CreateTestingUrl</button>\n                <button type='button'>RemoveTestingUrl</button>\n                <button type='button'>RemoveTestingResult</button> -->\n            </nav>\n        </div>\n    </div>\n  \n    <div>\n        <h1 class='HomePageHeader'>My QuizApp</h1>\n    </div>\n\n    <div>\n        <router-outlet></router-outlet>\n    </div>\n</body>\n\n</html>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(location) {
        this.location = location;
        this.isAdmin = false;
        this.isUser = false;
    }
    AppComponent.prototype.receiveIsAdmin = function ($event) {
        this.isAdmin = $event;
    };
    AppComponent.prototype.receiveCurrentUser = function ($event) {
        this.currentUser = $event;
    };
    AppComponent.prototype.receiveIsUser = function ($event) {
        this.isUser = $event;
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-panel/admin-panel.component */ "./src/app/admin-panel/admin-panel.component.ts");
/* harmony import */ var _create_answer_create_answer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-answer/create-answer.component */ "./src/app/create-answer/create-answer.component.ts");
/* harmony import */ var _remove_answer_remove_answer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./remove-answer/remove-answer.component */ "./src/app/remove-answer/remove-answer.component.ts");
/* harmony import */ var _get_questions_by_test_get_questions_by_test_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./get-questions-by-test/get-questions-by-test.component */ "./src/app/get-questions-by-test/get-questions-by-test.component.ts");
/* harmony import */ var _create_question_create_question_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create-question/create-question.component */ "./src/app/create-question/create-question.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-panel/user-panel.component */ "./src/app/user-panel/user-panel.component.ts");
/* harmony import */ var _passing_test_passing_test_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./passing-test/passing-test.component */ "./src/app/passing-test/passing-test.component.ts");
/* harmony import */ var _update_question_update_question_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./update-question/update-question.component */ "./src/app/update-question/update-question.component.ts");
/* harmony import */ var _manage_tests_manage_tests_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./manage-tests/manage-tests.component */ "./src/app/manage-tests/manage-tests.component.ts");
/* harmony import */ var _update_test_update_test_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./update-test/update-test.component */ "./src/app/update-test/update-test.component.ts");
/* harmony import */ var _manage_testing_url_manage_testing_url_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./manage-testing-url/manage-testing-url.component */ "./src/app/manage-testing-url/manage-testing-url.component.ts");
/* harmony import */ var _testing_results_testing_results_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./testing-results/testing-results.component */ "./src/app/testing-results/testing-results.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_7__["AdminPanelComponent"],
                _create_answer_create_answer_component__WEBPACK_IMPORTED_MODULE_8__["CreateAnswerComponent"],
                _remove_answer_remove_answer_component__WEBPACK_IMPORTED_MODULE_9__["RemoveAnswerComponent"],
                _get_questions_by_test_get_questions_by_test_component__WEBPACK_IMPORTED_MODULE_10__["GetQuestionsByTestComponent"],
                _create_question_create_question_component__WEBPACK_IMPORTED_MODULE_11__["CreateQuestionComponent"],
                _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_13__["UserPanelComponent"],
                _passing_test_passing_test_component__WEBPACK_IMPORTED_MODULE_14__["PassingTestComponent"],
                _update_question_update_question_component__WEBPACK_IMPORTED_MODULE_15__["UpdateQuestionComponent"],
                _manage_tests_manage_tests_component__WEBPACK_IMPORTED_MODULE_16__["ManageTestsComponent"],
                _update_test_update_test_component__WEBPACK_IMPORTED_MODULE_17__["UpdateTestComponent"],
                _manage_testing_url_manage_testing_url_component__WEBPACK_IMPORTED_MODULE_18__["ManageTestingUrlComponent"],
                _testing_results_testing_results_component__WEBPACK_IMPORTED_MODULE_19__["TestingResultsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot([
                    { path: 'admin-panel', component: _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_7__["AdminPanelComponent"], children: [
                            { path: '', redirectTo: 'manage-tests', pathMatch: 'full' },
                            { path: 'testing-results', component: _testing_results_testing_results_component__WEBPACK_IMPORTED_MODULE_19__["TestingResultsComponent"] },
                            { path: 'manage-tests', component: _manage_tests_manage_tests_component__WEBPACK_IMPORTED_MODULE_16__["ManageTestsComponent"] },
                            { path: 'manage-testing-urls', component: _manage_testing_url_manage_testing_url_component__WEBPACK_IMPORTED_MODULE_18__["ManageTestingUrlComponent"] },
                            { path: 'edit-test/:guid', component: _update_test_update_test_component__WEBPACK_IMPORTED_MODULE_17__["UpdateTestComponent"] },
                            { path: 'edit-answers/:testGuid/:questionGuid', component: _create_answer_create_answer_component__WEBPACK_IMPORTED_MODULE_8__["CreateAnswerComponent"] }
                        ]
                    },
                    // { path: 'user-panel', component: UserPanelComponent },
                    // { path: 'test-passing', component: PassingTestComponent },
                    { path: 'test-passing/:testingUrlGuid', component: _passing_test_passing_test_component__WEBPACK_IMPORTED_MODULE_14__["PassingTestComponent"] },
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/create-answer/create-answer.component.css":
/*!***********************************************************!*\
  !*** ./src/app/create-answer/create-answer.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tableNewAnswer{\r\n    /* table-layout: fixed;\r\n    width: 75%;\r\n    border-collapse: collapse;\r\n    border: 2px solid black; */\r\n    table-layout: fixed;\r\n    margin: auto;\r\n    padding: 10px;\r\n    border-collapse: collapse;\r\n    width: 75%;\r\n    margin-top: 30px;\r\n    \r\n  }\r\n\r\n .tableRow{\r\n    border-collapse: collapse; \r\n    width: 500px;\r\n    border-style: solid;\r\n    border-width: 2px;\r\n    border-color: black;\r\n    border-collapse: collapse; \r\n}\r\n\r\n .tableAnswers{\r\n    table-layout: fixed;\r\n    margin: auto;\r\n    padding: 10px;\r\n    border-collapse: collapse;\r\n    width: 50%;\r\n    margin-top: 30px;\r\n}\r\n\r\n .tableRowAnswers{\r\n    border-collapse: collapse; \r\n    width: 500px;\r\n    border-style: solid;\r\n    border-width: 2px;\r\n    border-color: black;\r\n    border-collapse: collapse; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWFuc3dlci9jcmVhdGUtYW5zd2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTs7OytCQUcyQjtJQUMzQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLGlCQUFpQjs7R0FFbEI7O0NBRUY7SUFDRywwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLDBCQUEwQjtDQUM3Qjs7Q0FFRDtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsY0FBYztJQUNkLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsaUJBQWlCO0NBQ3BCOztDQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQiwwQkFBMEI7Q0FDN0IiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtYW5zd2VyL2NyZWF0ZS1hbnN3ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZU5ld0Fuc3dlcntcclxuICAgIC8qIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyAqL1xyXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBcclxuICB9XHJcblxyXG4gLnRhYmxlUm93e1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgXHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgXHJcbn1cclxuXHJcbi50YWJsZUFuc3dlcnN7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLnRhYmxlUm93QW5zd2Vyc3tcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IFxyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/create-answer/create-answer.component.html":
/*!************************************************************!*\
  !*** ./src/app/create-answer/create-answer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='selectedQuestion'>\r\n  <form #createAnswerForm='ngForm'>\r\n    <table *ngIf='isShowAddAnswerDiv' class='tableNewAnswer'>\r\n        <h3 style='text-align: center;margin: auto;'>{{selectedQuestion.Instance}}</h3>\r\n      <tr class='tableRow'>\r\n        <td><label>Instance</label></td>\r\n        <td><label>True</label></td>\r\n        <td><label>False</label></td>\r\n      </tr>\r\n      <tr class='tableRow'>\r\n        <td><input style='width: 300px;' type='text' name='answerInstanceInput' [(ngModel)]='_instance' required></td>\r\n        <td><input type='radio'  name='isCorrectAnswerRadio'  [(ngModel)]='_isCorrect' value='true' required></td>\r\n        <td> <input type='radio' name='isCorrectAnswerRadio' [(ngModel)]='_isCorrect' value='false' required></td>\r\n      </tr>\r\n  \r\n      <tr class='tableRow'> \r\n        <td>\r\n            <button name='confirmCreateAnswerButton' [disabled]='!createAnswerForm.form.valid' type='button' (click)='CreateAnswer()'>Confirm</button>\r\n        </td>\r\n        <td></td>\r\n        <td></td>\r\n      </tr>\r\n    </table>\r\n  </form>\r\n  <h1 style='text-align: center;'>{{selectedQuestion.Instance}}</h1>\r\n  <h2 style='text-align: center'>Answers</h2>\r\n  <table class='tableAnswers'>\r\n    <tr>\r\n      <button (click)='isShowAddAnswerDivValueChange()'>Add answer</button>\r\n    </tr>\r\n    <tr *ngFor='let answer of selectedQuestion.Answers' class='tableRowAnswers'>\r\n      <td>\r\n        <label>{{answer.Instance}}</label>\r\n      </td>\r\n      <td>\r\n        <button type='button' (click)='removeAnswer(answer.Guid)' style='float: right;'>Remove</button>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n  <!-- <div>\r\n    \r\n    <div>\r\n      <label>Instance: </label>\r\n      <input type='text' [(ngModel)]='_instance'>\r\n    </div>\r\n    <div>\r\n      <label>Is correct:</label>\r\n      <input type='radio' [(ngModel)]='_isCorrect' value='true'>True\r\n      <input type='radio' [(ngModel)]='_isCorrect' value='false'> False\r\n    </div>\r\n  </div>\r\n  <button type='button' (click)='CreateAnswer()'>Confirm</button>\r\n  <div>\r\n    <div *ngFor='let answer of selectedQuestion.Answers'>\r\n      <label>{{answer.Instance}}</label>\r\n      <button type='button' (click)='removeAnswer(answer.Guid)'>Remove</button>\r\n\r\n    </div>\r\n  </div> -->\r\n</div>"

/***/ }),

/***/ "./src/app/create-answer/create-answer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/create-answer/create-answer.component.ts ***!
  \**********************************************************/
/*! exports provided: CreateAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAnswerComponent", function() { return CreateAnswerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_Models_Managing_QuestionViewModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/Models/Managing/QuestionViewModel */ "./src/assets/Models/Managing/QuestionViewModel.ts");
/* harmony import */ var _assets_Models_Managing_AnswerViewModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/Models/Managing/AnswerViewModel */ "./src/assets/Models/Managing/AnswerViewModel.ts");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateAnswerComponent = /** @class */ (function () {
    function CreateAnswerComponent(http, route) {
        this.http = http;
        this.route = route;
    }
    CreateAnswerComponent.prototype.isShowAddAnswerDivValueChange = function () {
        this.isShowAddAnswerDiv = true;
    };
    // isShowTestQuestionsValueChange(test:TestViewModel)
    // {
    //   if (this.isShowTestQuestions == false)
    //   {
    //     this.isShowTestQuestions = true;
    //   }
    //   this.selectedTest = test;
    // }
    // selectedQuestionGetAnswers(question: QuestionViewModel)
    // {
    //   this.selectedQuestion = question;
    //   this.selectedQuestionAnswers = question.Answers;
    // }
    // GetAllTests()
    // {
    //   this.http.GetAllTests().subscribe((x: TestViewModel[]) => this.testsList = x);
    // }
    CreateAnswerComponent.prototype.CreateAnswer = function () {
        var _this = this;
        this.newAnswer = new _assets_Models_Managing_AnswerViewModel__WEBPACK_IMPORTED_MODULE_2__["AnswerViewModel"]();
        var actionResult;
        this.newAnswer.Instance = this._instance;
        this.newAnswer.IsCorrect = this._isCorrect;
        this.http.CreateAnswer(this.selectedQuestion.Guid, this.newAnswer).subscribe(function (x) {
            actionResult = x;
            if (actionResult == true) {
                _this.selectedQuestion.Answers.push(_this.newAnswer);
                _this._instance = '';
                _this._isCorrect = null;
            }
        });
    };
    CreateAnswerComponent.prototype.removeAnswer = function (_answerGuid) {
        var _this = this;
        this.http.removeAnswer(_answerGuid).subscribe(function (x) {
            if (x == true) {
                var deletedAnswer = _this.selectedQuestion.Answers.find(function (z) { return z.Guid === _answerGuid; });
                var deletedAnswerIndex = _this.selectedQuestion.Answers.indexOf(deletedAnswer);
                if (deletedAnswerIndex !== -1) {
                    _this.selectedQuestion.Answers.splice(deletedAnswerIndex, 1);
                }
            }
        });
    };
    CreateAnswerComponent.prototype.addAnswer = function () {
        this.newAnswer = new _assets_Models_Managing_AnswerViewModel__WEBPACK_IMPORTED_MODULE_2__["AnswerViewModel"]();
        this.isShowAddAnswerDiv = true;
    };
    CreateAnswerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.GetAllTests();
        //  this.selectedQuestionAnswers = this.selectedQuestion.Answers;
        this.route.params.subscribe(function (params) {
            _this.testGuid = params['testGuid'];
            _this.questionGuid = params['questionGuid'];
            _this.http.getQuestionsByTestGuid(_this.testGuid).subscribe(function (x) {
                for (var i = 0; i < x.length; i++) {
                    if (x[i].Guid === _this.questionGuid) {
                        _this.selectedQuestion = x[i];
                    }
                }
                _this.http.GetAnswersByQuestionGuid(_this.selectedQuestion.Guid).subscribe(function (x) {
                    _this.selectedQuestion.Answers = x;
                });
            });
        });
    };
    CreateAnswerComponent.prototype.ngOnChanges = function (changes) {
        // if (changes.selectedQuestion) {
        //   this.selectedQuestion = changes.selectedQuestion.currentValue;
        //   this.selectedQuestionAnswers = changes.selectedQuestionAnswers.currentValue;
        // }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _assets_Models_Managing_QuestionViewModel__WEBPACK_IMPORTED_MODULE_1__["QuestionViewModel"])
    ], CreateAnswerComponent.prototype, "selectedQuestion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CreateAnswerComponent.prototype, "isShowAddAnswerDiv", void 0);
    CreateAnswerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-answer',
            template: __webpack_require__(/*! ./create-answer.component.html */ "./src/app/create-answer/create-answer.component.html"),
            styles: [__webpack_require__(/*! ./create-answer.component.css */ "./src/app/create-answer/create-answer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], CreateAnswerComponent);
    return CreateAnswerComponent;
}());



/***/ }),

/***/ "./src/app/create-question/create-question.component.css":
/*!***************************************************************!*\
  !*** ./src/app/create-question/create-question.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n    /* table-layout: fixed;\r\n    width: 75%;\r\n    border-collapse: collapse;\r\n    border: 2px solid black; */\r\n    table-layout: fixed;\r\n    margin: auto;\r\n    padding: 10px;\r\n    border-collapse: collapse;\r\n    width: 75%;\r\n    margin-top: 30px;\r\n  }\r\n\r\n\r\n.tableRow{\r\n    border-collapse: collapse; \r\n    width: 500px;\r\n    border-style: solid;\r\n    border-width: 2px;\r\n    border-color: black;\r\n    border-collapse: collapse; \r\n}\r\n\r\n\r\ninput:placeholder-shown{\r\n    border-color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXF1ZXN0aW9uL2NyZWF0ZS1xdWVzdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7OzsrQkFHMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLFdBQVc7SUFDWCxpQkFBaUI7R0FDbEI7OztBQUdIO0lBQ0ksMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQiwwQkFBMEI7Q0FDN0I7OztBQUVEO0lBQ0ksa0JBQWtCO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlLXF1ZXN0aW9uL2NyZWF0ZS1xdWVzdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGV7XHJcbiAgICAvKiB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgKi9cclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuXHJcblxyXG4udGFibGVSb3d7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyBcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyBcclxufVxyXG5cclxuaW5wdXQ6cGxhY2Vob2xkZXItc2hvd257XHJcbiAgICBib3JkZXItY29sb3I6IHJlZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/create-question/create-question.component.html":
/*!****************************************************************!*\
  !*** ./src/app/create-question/create-question.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='selectedTest'>\n  <div>\n    <div *ngIf='selectedTest'>\n      <div *ngIf='selectedTest.Questions'>\n        <form #createQuestionForm='ngForm'>\n        <table class='table'>\n          <tr>\n            <td>\n              <button (click)='isShowAddQuestionValueChange()'>Add question</button>\n            </td>\n            <td></td>\n            <td></td>\n          </tr>\n\n          <tr class='tableRow'>\n            <th>Instance</th>\n            <th></th>\n            <th></th>\n          </tr>\n          <tr *ngIf='isShowAddQuestionDiv' class='tableRow'>\n            <td><input class='form-control' type='text' name='questionInstance' [(ngModel)]='newQuestion.Instance' placeholder=\"Instance\" required></td>\n            <td><input class='form-control' type='text'name='questionHint' [(ngModel)]='newQuestion.Hint' placeholder=\"Hint\" required></td>\n            <td><button class='btn' type='button' (click)='confirmAddQuestion(newQuestion)' style='float: right;' name='createQuestionConfirm' [disabled]='!createQuestionForm.form.valid'>Confirm</button></td>\n          </tr>\n          <tr *ngFor='let question of selectedTest.Questions' class='tableRow'>\n            <td>{{question.Instance}}</td>\n            <td><button class='btn' style='float: right;' type='button' (click)='editAnswers(selectedTest.Guid,question.Guid)'>Edit answers</button></td>\n            <td><button class='btn' style='float: right;' type='button' (click)='removeQuestion(selectedTest.Guid,question.Guid)'>Remove question</button></td>\n          </tr>\n        </table>\n      </form>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/create-question/create-question.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/create-question/create-question.component.ts ***!
  \**************************************************************/
/*! exports provided: CreateQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateQuestionComponent", function() { return CreateQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_Models_Managing_TestViewModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/Models/Managing/TestViewModel */ "./src/assets/Models/Managing/TestViewModel.ts");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _assets_Models_Managing_QuestionViewModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/Models/Managing/QuestionViewModel */ "./src/assets/Models/Managing/QuestionViewModel.ts");
/* harmony import */ var _assets_Models_Managing_AnswerViewModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/Models/Managing/AnswerViewModel */ "./src/assets/Models/Managing/AnswerViewModel.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateQuestionComponent = /** @class */ (function () {
    function CreateQuestionComponent(http, router) {
        this.http = http;
        this.router = router;
        this.isShowAddQuestionDiv = false;
        this.isShowAddAnswer = false;
        this.newAnswer = new _assets_Models_Managing_AnswerViewModel__WEBPACK_IMPORTED_MODULE_4__["AnswerViewModel"]();
    }
    CreateQuestionComponent.prototype.selectQuestion = function (_question) {
        this.selectedQuestion = _question;
        this.selectedQuestionAnswers = this.selectedQuestion.Answers;
        // this.title.setTitle(this.selectedQuestion.Answers.length.toString());
    };
    CreateQuestionComponent.prototype.editAnswers = function (_testGuid, _questionGuid) {
        this.router.navigate(['admin-panel/edit-answers/' + _testGuid + '/' + _questionGuid]);
    };
    CreateQuestionComponent.prototype.isShowAddQuestionValueChange = function () {
        this.isShowAddQuestionDiv = true;
        this.newQuestion = new _assets_Models_Managing_QuestionViewModel__WEBPACK_IMPORTED_MODULE_3__["QuestionViewModel"]();
        this.isShowAddAnswer = false;
    };
    CreateQuestionComponent.prototype.isShowAddAnswerValueChange = function () {
        var _this = this;
        this.isShowAddAnswer = true;
        this.http.GetAnswersByQuestionGuid(this.selectedQuestion.Guid).subscribe(function (x) { return _this.selectedQuestion.Answers = x; });
    };
    CreateQuestionComponent.prototype.removeQuestion = function (_testGuid, _questionGuid) {
        var _this = this;
        var result;
        this.http.removeQuestion(_testGuid, _questionGuid).subscribe(function (x) {
            result = x;
            if (result == true) {
                var index = _this.selectedTest.Questions.findIndex(function (z) { return z.Guid == _questionGuid; });
                _this.selectedTest.Questions.splice(index, 1);
            }
        });
        this.isShowAddAnswer = false;
    };
    CreateQuestionComponent.prototype.confirmAddQuestion = function (_question) {
        var _this = this;
        this.http.createQuestion(this.selectedTest.Guid, _question).
            subscribe(function (x) {
            _this.selectedTest.Questions.push(x);
        });
        this.isShowAddQuestionDiv = false;
        this.newQuestion = new _assets_Models_Managing_QuestionViewModel__WEBPACK_IMPORTED_MODULE_3__["QuestionViewModel"]();
        this.isShowAddAnswer = false;
    };
    CreateQuestionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _assets_Models_Managing_TestViewModel__WEBPACK_IMPORTED_MODULE_1__["TestViewModel"])
    ], CreateQuestionComponent.prototype, "selectedTest", void 0);
    CreateQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-question',
            template: __webpack_require__(/*! ./create-question.component.html */ "./src/app/create-question/create-question.component.html"),
            styles: [__webpack_require__(/*! ./create-question.component.css */ "./src/app/create-question/create-question.component.css")],
        }),
        __metadata("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], CreateQuestionComponent);
    return CreateQuestionComponent;
}());



/***/ }),

/***/ "./src/app/get-questions-by-test/get-questions-by-test.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/get-questions-by-test/get-questions-by-test.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dldC1xdWVzdGlvbnMtYnktdGVzdC9nZXQtcXVlc3Rpb25zLWJ5LXRlc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/get-questions-by-test/get-questions-by-test.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/get-questions-by-test/get-questions-by-test.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='testsList'>\n  <div>\n    <ul *ngFor='let test of testsList'>\n      <li (click)='isShowTestAnswersValueChange(test)'>{{test.Name}}</li>\n    </ul>\n  </div>\n  <div *ngIf='isShowTestAnswers'>\n<ul *ngFor='let question of selectedTest.Questions'>\n  <li>\n    {{question.Instance}}\n  </li>\n</ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/get-questions-by-test/get-questions-by-test.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/get-questions-by-test/get-questions-by-test.component.ts ***!
  \**************************************************************************/
/*! exports provided: GetQuestionsByTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetQuestionsByTestComponent", function() { return GetQuestionsByTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/http/http.service */ "./src/app/services/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetQuestionsByTestComponent = /** @class */ (function () {
    function GetQuestionsByTestComponent(http) {
        this.http = http;
        this.isShowTestAnswers = false;
    }
    GetQuestionsByTestComponent.prototype.isShowTestAnswersValueChange = function (test) {
        if (this.isShowTestAnswers == true) {
            this.isShowTestAnswers = false;
        }
        else {
            this.selectedTest = test;
            this.isShowTestAnswers = true;
        }
    };
    GetQuestionsByTestComponent.prototype.getAllTests = function () {
        var _this = this;
        this.http.GetAllTests().subscribe(function (x) { return _this.testsList = x; });
    };
    GetQuestionsByTestComponent.prototype.ngOnInit = function () {
        this.getAllTests();
    };
    GetQuestionsByTestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-questions-by-test',
            template: __webpack_require__(/*! ./get-questions-by-test.component.html */ "./src/app/get-questions-by-test/get-questions-by-test.component.html"),
            styles: [__webpack_require__(/*! ./get-questions-by-test.component.css */ "./src/app/get-questions-by-test/get-questions-by-test.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], GetQuestionsByTestComponent);
    return GetQuestionsByTestComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".CredInput{\r\n    float: right;\r\n  margin-right: 5px;\r\n}\r\n/* button{\r\n  border-radius: 5px;\r\n  margin-left: 5px;\r\n  height: 30px;\r\n  width: 100px;\r\n} */\r\ninput:placeholder-shown{\r\n  border-color: red;\r\n}\r\n.currentUserDiv{\r\n  margin-right: 20px;\r\n  float: right;\r\n}\r\n.currentUserLabel{\r\n  font-size: 23px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7RUFDZixrQkFBa0I7Q0FDbkI7QUFDRDs7Ozs7SUFLSTtBQUlKO0VBQ0Usa0JBQWtCO0NBQ25CO0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtDQUNkO0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkNyZWRJbnB1dHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4vKiBidXR0b257XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxufSAqL1xyXG5cclxuXHJcblxyXG5pbnB1dDpwbGFjZWhvbGRlci1zaG93bntcclxuICBib3JkZXItY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmN1cnJlbnRVc2VyRGl2e1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5jdXJyZW50VXNlckxhYmVse1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #loginForm='ngForm' *ngIf='!IsLoginSuccessfull'>\n  <div class='input-group input-group-sm'>\n    <div class=\"input-group-prepend\" style='margin-left: 5px;'>\n      <span class='input-group-text'>Login: </span>\n    </div>\n   \n      <input required name='login' type='text' class='form-control' placeholder=\"Login\" [(ngModel)]='LoginInput'\n        tabindex='1'>\n   \n    <div class=\"input-group-prepend\" style='margin-left: 5px;'>\n        <span class='input-group-text'>Password: </span>\n    </div>\n\n  \n      <input name='password' class='form-control' type='password' placeholder=\"Password\" [(ngModel)]='PasswordInput'\n        tabindex='2' required>\n\n\n      <input style='margin-left: 5px; margin-right: 5px;' [disabled]='!loginForm.form.valid' type='button' (click)='Login(LoginInput,PasswordInput)' tabindex='3' id='loginButton'\n        [ngClass]=\"loginForm.form.valid ? 'btn btn-sm btn-success ' : 'btn btn-sm btn-default '\" value='Log in'>\n\n  </div>\n</form>\n<div *ngIf='IsLoginSuccessfull' class='input-group input-group-sm'>\n  <div class=\"input-group-prepend\">\n<span class='input-group-text'>Current user: </span>\n  </div>\n  <input type='text' style='text-align: right;' [(ngModel)]='CurrentUser.Username' disabled=true>\n  <button class='btn btn-warning btn-sm' style='margin-left:5px;' type='submit' (click)='Logout()' [routerLink]=\"['../']\">Log out</button>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, router, location, title) {
        this.http = http;
        this.router = router;
        this.location = location;
        this.title = title;
        this.CurrentUser = { Username: '', Password: '' };
        this.IsLoginSuccessfull = false;
        this.IsAdmin = false;
        this.isUser = false;
        this.IsAdminEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isUserEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currentUserEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.Tests = [];
    }
    LoginComponent.prototype.sendIsAdmin = function () {
        this.IsAdminEvent.emit(this.IsAdmin);
    };
    LoginComponent.prototype.sendIsUser = function () {
        this.isUserEvent.emit(this.isUser);
    };
    LoginComponent.prototype.sendUser = function () {
        this.currentUserEvent.emit(this.CurrentUser);
    };
    LoginComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem('login')) {
            var user = sessionStorage.getItem('login');
            this.CurrentUser.Username = user;
            this.IsLoginSuccessfull = true;
            if (user === 'admin') {
                this.IsAdmin = true;
                this.sendIsAdmin();
                if (this.IsAdmin == true) {
                    this.router.navigate(['admin-panel']);
                }
            }
            else {
                this.sendUser();
                this.router.navigate(['user-panel/']);
            }
        }
    };
    LoginComponent.prototype.Logout = function () {
        this.IsLoginSuccessfull = false;
        this.IsAdmin = false;
        this.CurrentUser.Username = '';
        this.CurrentUser.Password = '';
        this.LoginInput = '';
        this.PasswordInput = '';
        this.sendIsAdmin();
        this.isUser = false;
        this.sendIsUser();
        sessionStorage.clear();
        this.location.go('');
    };
    LoginComponent.prototype.Login = function (LoginInput, PasswordInput) {
        var _this = this;
        this.http.Login(LoginInput, PasswordInput).subscribe(function (x) {
            _this.CurrentUser = x;
            if (_this.CurrentUser.Username == 'admin') {
                _this.IsAdmin = true;
                _this.IsLoginSuccessfull = true;
                _this.sendIsAdmin();
                if (_this.IsAdmin == true) {
                    _this.router.navigate(['admin-panel']);
                }
                // else if (this.isUser == true) {
                //   this.sendUser();
                //   this.router.navigate(['user-panel/']);
                // }
            }
            // else {
            //   this.isUser = true;
            //   this.sendUser();
            //   this.sendIsUser();
            //   this.router.navigate(['user-panel']);
            // }
            //   sessionStorage.setItem('login', this.CurrentUser.Username);
        });
        this.LoginInput = '';
        this.PasswordInput = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "IsAdminEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "isUserEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "currentUserEvent", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/manage-testing-url/manage-testing-url.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/manage-testing-url/manage-testing-url.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n    /* border-style: solid;\r\n    border-color: black;\r\n    border-collapse: collapse;\r\n       \r\n     \r\n   */\r\n   table-layout: auto;\r\n    margin: auto;\r\n    padding: 10px;\r\n    border-collapse: collapse;\r\n    width:80%;\r\n}\r\n\r\n.bigColumns{\r\n    border-style: solid;\r\n    border-color: black;\r\n    border-width: 2px;\r\n    border-collapse: collapse; \r\n    width: 500px;\r\n}\r\n\r\nspan {\r\n    cursor:pointer;\r\n    color:blue;\r\n    text-decoration:underline;\r\n}\r\n\r\n.smallColumns{\r\n    border-style: solid;\r\n    border-color: black;\r\n    border-width: 2px;\r\n    border-collapse: collapse; \r\n    width: 150px;\r\n}\r\n\r\n/* .testingUrlTableHeaders th{\r\n    border-style: solid;\r\n    border-color: black;\r\n    border-width: 2px;\r\n    border-collapse: collapse; \r\n    width: 160px;\r\n}*/\r\n\r\n.testingUrlTableData td{\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    border-color: black;\r\n    border-collapse: collapse; \r\n}\r\n\r\ninput[type=time]{\r\n    width: 90px;\r\nmargin-top: 5px;\r\n}\r\n\r\ninput[type=date]{\r\n    width: 170px;\r\n}\r\n\r\n.smallHeaders{\r\n    width: 20px;\r\n}\r\n\r\n.testListDiv{\r\n    width: auto;\r\n    height: 50px;\r\nwidth: auto;\r\n    margin: auto;\r\n    margin-bottom: 30px;\r\n    align-self:center;\r\n}\r\n\r\n.testListSelect{\r\n    margin: auto;\r\n    width: 245px;\r\n    height: 30px;\r\n    margin:3 auto 0 auto;\r\n}\r\n\r\nh1{\r\n    text-align: center;\r\n    color: #856404;\r\n    background-color: #fff3cd;\r\n    border-color: #ffeeba;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLXRlc3RpbmctdXJsL21hbmFnZS10ZXN0aW5nLXVybC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7Ozs7O0tBS0M7R0FDRixtQkFBbUI7SUFDbEIsYUFBYTtJQUNiLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsVUFBVTtDQUNiOztBQUVEO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixhQUFhO0NBQ2hCOztBQUVEOzs7Ozs7R0FNRzs7QUFFSDtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLFlBQVk7QUFDaEIsZ0JBQWdCO0NBQ2Y7O0FBQ0Q7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksWUFBWTtDQUNmOztBQUVEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakIsWUFBWTtJQUNSLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBQ2IscUJBQXFCO0NBQ3hCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsc0JBQXNCO0NBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbWFuYWdlLXRlc3RpbmctdXJsL21hbmFnZS10ZXN0aW5nLXVybC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGV7XHJcbiAgICAvKiBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgICBcclxuICAgICBcclxuICAgKi9cclxuICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDo4MCU7XHJcbn1cclxuXHJcbi5iaWdDb2x1bW5ze1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IFxyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgY29sb3I6Ymx1ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5zbWFsbENvbHVtbnN7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgXHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi8qIC50ZXN0aW5nVXJsVGFibGVIZWFkZXJzIHRoe1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IFxyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG59Ki9cclxuXHJcbi50ZXN0aW5nVXJsVGFibGVEYXRhIHRke1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IFxyXG59IFxyXG5cclxuaW5wdXRbdHlwZT10aW1lXXtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG5tYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuaW5wdXRbdHlwZT1kYXRlXXtcclxuICAgIHdpZHRoOiAxNzBweDtcclxufVxyXG5cclxuLnNtYWxsSGVhZGVyc3tcclxuICAgIHdpZHRoOiAyMHB4O1xyXG59XHJcblxyXG4udGVzdExpc3REaXZ7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogNTBweDtcclxud2lkdGg6IGF1dG87XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgYWxpZ24tc2VsZjpjZW50ZXI7XHJcbn1cclxuXHJcbi50ZXN0TGlzdFNlbGVjdHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAyNDVweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbjozIGF1dG8gMCBhdXRvO1xyXG59XHJcblxyXG5oMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjODU2NDA0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjNjZDtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZWViYTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/manage-testing-url/manage-testing-url.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/manage-testing-url/manage-testing-url.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <form #createTestUrlForm='ngForm'>\n    <div *ngIf='isShowTests' class='testListDiv'>\n      <h1>Please select test</h1>\n\n    </div>\n    <div class='table-responsive'>\n      <table *ngIf='testingUrlList' class=\"table\">\n        <thead>\n          <tr>\n            <td>\n              <button class='btn btn-success' (click)='addTestUrl()'>Create testing URL</button>\n            </td>\n            <td *ngIf='isShowTests'>\n              <select (ngModelChange)='selectTest($event)' [ngModel]='selectedTest' name='testListSelect' class='form-control'\n                [required]=\"true\">\n                <option value='' disabled></option>\n                <option *ngFor='let test of testsList' [ngValue]='test' name='selectTestButton'>{{test.Name}}</option>\n              </select>\n            </td>\n          </tr>\n          <tr>\n            <th class='smallColumns'><label>URL</label></th>\n            <th class='bigColumns'><label>Test name</label></th>\n            <th class='bigColumns'><label>Interviewee</label></th>\n            <th class='smallColumns'><label>Number of runs</label></th>\n            <th class='bigColumns'><label>Allowed start date</label></th>\n            <th class='bigColumns'><label>Allowed end date</label></th>\n            <th class='smallColumns'></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngIf='isShowAddTestUrl' class='testingUrlTableData'>\n            <td></td>\n            <td>{{selectedTest.Name}}</td>\n            <td></td>\n            <td></td>\n            <td>\n              <div class='input-group'>\n                <input name='startDateInput' type=\"date\" [(ngModel)]='allowedStartDate' required class='form-control'>\n                <input name='startTimeInput' type='time' class='form-control  input-sm' [(ngModel)]='allowedStartTime'\n                  required>\n              </div>\n            </td>\n            <td>\n              <div class='input-group'>\n                <input name='endDateInput' min=\"{{allowedStartDate}}\" class='form-control  input-sm' type=\"date\" [(ngModel)]='allowedEndDate'\n                  required='required'>\n                <input type='time' name='endTimeInput' class='form-control  input-sm' [(ngModel)]='allowedEndTime'\n                  required>\n\n              </div>\n            </td>\n            <td><button [disabled]='!createTestUrlForm.form.valid' name='createTestUrlButtonConfirm' (click)='createTestUrl()'>Confirm</button></td>\n          </tr>\n\n          <tr *ngFor='let testingUrl of testingUrlList' class='testingUrlTableData'>\n            <td><span (click)=\"copyLink(testingUrl)\">Copy link</span></td>\n            <td><label>{{testingUrl.TestName}}</label></td>\n            <td><label>{{testingUrl.Interviewee}}</label></td>\n            <td><label>{{testingUrl.NumberOfRuns}}</label></td>\n            <td><label>{{testingUrl.AllowedStartDate}}</label></td>\n            <td><label>{{testingUrl.AllowedEndDate}}</label></td>\n            <td><button type='button' (click)='removeTestingUrl(testingUrl.Guid)'>Delete</button></td>\n          </tr>\n        </tbody>\n\n      </table>\n    </div>\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/manage-testing-url/manage-testing-url.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/manage-testing-url/manage-testing-url.component.ts ***!
  \********************************************************************/
/*! exports provided: ManageTestingUrlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageTestingUrlComponent", function() { return ManageTestingUrlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_assets_Models_Managing_TestingUrlViewModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/Models/Managing/TestingUrlViewModel */ "./src/assets/Models/Managing/TestingUrlViewModel.ts");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var src_assets_Models_Managing_TestViewModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/Models/Managing/TestViewModel */ "./src/assets/Models/Managing/TestViewModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageTestingUrlComponent = /** @class */ (function () {
    function ManageTestingUrlComponent(http) {
        this.http = http;
        this.newTestingUrl = new src_assets_Models_Managing_TestingUrlViewModel__WEBPACK_IMPORTED_MODULE_1__["TestingUrlViewModel"]();
        this.selectedTest = new src_assets_Models_Managing_TestViewModel__WEBPACK_IMPORTED_MODULE_3__["TestViewModel"]();
        this.allowedStartTime = '00:00';
        this.allowedEndTime = '00:00';
        this.isShowAddTestUrl = false;
        this.newTestingUrl.TestName = '';
        this.newTestingUrl.NumberOfRuns = 0;
        this.selectedTest.Name = '';
    }
    ;
    ManageTestingUrlComponent.prototype.createTestUrl = function () {
        var _this = this;
        this.newTestingUrl = new src_assets_Models_Managing_TestingUrlViewModel__WEBPACK_IMPORTED_MODULE_1__["TestingUrlViewModel"]();
        this.newTestingUrl.TestName = '';
        this.newTestingUrl.NumberOfRuns = 0;
        this.newTestingUrl.AllowedStartDate = this.allowedStartDate + ' ' + this.allowedStartTime;
        this.newTestingUrl.AllowedEndDate = this.allowedEndDate + ' ' + this.allowedEndTime;
        this.newTestingUrl.TestGuid = this.selectedTest.Guid;
        this.newTestingUrl.TestName = this.selectedTest.Name;
        this.http.createTestingUrl(this.newTestingUrl).subscribe(function () {
            _this.http.getAllTestingUrls().subscribe(function (z) { return _this.testingUrlList = z; });
            _this.selectedTest = new src_assets_Models_Managing_TestViewModel__WEBPACK_IMPORTED_MODULE_3__["TestViewModel"]();
            _this.selectedTest.Name = '';
            _this.isShowAddTestUrl = false;
            _this.isShowTests = false;
            _this.http.getAllTestingUrls().subscribe(function (x) {
                _this.testingUrlList = x;
                for (var i = 0; i < _this.testingUrlList.length; i++) {
                    _this.testingUrlList[i].UrlInstance = 'http://localhost:4200/test-passing/' + _this.testingUrlList[i].Guid;
                }
            });
            _this.http.GetAllTests().subscribe(function (x) { return _this.testsList = x; });
        });
    };
    ManageTestingUrlComponent.prototype.addTestUrl = function () {
        this.isShowAddTestUrl = true;
        this.isShowTests = true;
        this.selectedTest = new src_assets_Models_Managing_TestViewModel__WEBPACK_IMPORTED_MODULE_3__["TestViewModel"]();
    };
    ManageTestingUrlComponent.prototype.removeTestingUrl = function (_testingUrlGuid) {
        var _this = this;
        this.http.removeTestingUrl(_testingUrlGuid).subscribe(function () {
            _this.http.getAllTestingUrls().subscribe(function (z) { return _this.testingUrlList = z; });
        });
    };
    ManageTestingUrlComponent.prototype.selectTest = function (_test) {
        this.selectedTest = _test;
    };
    ManageTestingUrlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.getAllTestingUrls().subscribe(function (x) {
            _this.testingUrlList = x;
            for (var i = 0; i < _this.testingUrlList.length; i++) {
                _this.testingUrlList[i].UrlInstance = 'localhost:4200/test-passing/' + _this.testingUrlList[i].Guid;
            }
        });
        this.http.GetAllTests().subscribe(function (x) { return _this.testsList = x; });
    };
    ManageTestingUrlComponent.prototype.copyLink = function (_testingUrl) {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = document.domain + ":4200" + "/test-passing/" + _testingUrl.Guid;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    };
    ManageTestingUrlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-testing-url',
            template: __webpack_require__(/*! ./manage-testing-url.component.html */ "./src/app/manage-testing-url/manage-testing-url.component.html"),
            styles: [__webpack_require__(/*! ./manage-testing-url.component.css */ "./src/app/manage-testing-url/manage-testing-url.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], ManageTestingUrlComponent);
    return ManageTestingUrlComponent;
}());



/***/ }),

/***/ "./src/app/manage-tests/manage-tests.component.css":
/*!*********************************************************!*\
  !*** ./src/app/manage-tests/manage-tests.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n    /* table-layout: fixed;\r\n    width: 75%;\r\n    border-collapse: collapse;\r\n    border: 2px solid black; */\r\n    table-layout: fixed;\r\n    margin: auto;\r\n    padding: 10px;\r\n    border-collapse: collapse;\r\n  }\r\n\r\ntr.tableRowHeaders th{\r\n    border-collapse: collapse;\r\n    border: 2px solid black;\r\n}\r\n\r\ntr.tableRowData td{\r\n    width: 220px;\r\n    border-collapse: collapse;\r\n    border: 1px solid black;\r\n}\r\n\r\ninput:placeholder-shown{\r\n    border-color: red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLXRlc3RzL21hbmFnZS10ZXN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7OzsrQkFHMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixjQUFjO0lBQ2QsMEJBQTBCO0dBQzNCOztBQUVIO0lBQ0ksMEJBQTBCO0lBQzFCLHdCQUF3QjtDQUMzQjs7QUFFRDtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsd0JBQXdCO0NBQzNCOztBQUVEO0lBQ0ksa0JBQWtCO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbWFuYWdlLXRlc3RzL21hbmFnZS10ZXN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGV7XHJcbiAgICAvKiB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgKi9cclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB9XHJcblxyXG50ci50YWJsZVJvd0hlYWRlcnMgdGh7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbnRyLnRhYmxlUm93RGF0YSB0ZHtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuaW5wdXQ6cGxhY2Vob2xkZXItc2hvd257XHJcbiAgICBib3JkZXItY29sb3I6IHJlZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/manage-tests/manage-tests.component.html":
/*!**********************************************************!*\
  !*** ./src/app/manage-tests/manage-tests.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>\n    <form #createTestForm='ngForm' >\n\n      <table class='table' style='width: 75%;'>\n        <tr>\n            <button style=\"margin-bottom:7px;\" (click)='showAddTestValueChange()' class='btn btn-success' type='submit'>Add test</button>\n        </tr>\n        <tr class='tableRowHeaders'>\n          <th>Test name</th>\n          <th>Description</th>\n          <th>Test length</th>\n          <th>Time per question</th>\n          <th></th>\n          <th></th>\n        </tr>\n        <tr *ngIf='isShowAddTest' class='tableRowData'>\n          \n            <td><input type='text' class='form-control' [(ngModel)]='newTest.Name' name='testNameInput' placeholder=\"Test name\" required></td>\n            <td><input type='text' class='form-control' [(ngModel)]='newTest.Description' placeholder=\"Description\" name='testDescriptionInput' required></td>\n            <td><input type='time' class='form-control' [(ngModel)]='newTest.TestTimeLimit' name='testTime' step=\"30\" required></td>\n            <td><input type='time' class='form-control' [(ngModel)]='newTest.QuestionTimeLimit' step=\"30\" name='questiontime' required></td>\n            <td><button (click)='confirmAddTest()' class='tableRowData' type='button' [disabled]='!createTestForm.form.valid'>Confirm</button></td>\n            <td><button type='button' (click)='cancelNewTest()' class='tableRowData'>Cancel</button></td>\n          </tr>\n        <tr *ngFor='let test of testsList' class='tableRowData'>\n          <td>{{test.Name}}</td>\n          <td>{{test.Description}}</td>\n          <td>{{test.TestTimeLimit}}</td>\n          <td>{{test.QuestionTimeLimit}}</td>\n          <td><a routerLink='../edit-test/{{test.Guid}}'>Update test</a></td>\n          <td><button type='button' (click)='removeTest(test)'>Delete</button></td>\n        </tr>\n        \n      </table>\n    </form>\n    \n    <!-- <div *ngIf='showAddTest'>\n      <div>\n        <label>Name: </label>\n        <input type='text' [(ngModel)]='newTest.Name'>\n      </div>\n      <div>\n        <label>Description: </label>\n        <input type='text' [(ngModel)]='newTest.Description'>\n      </div>\n      <div>\n        <label>Test Time Limit: </label>\n        <input type='time' [(ngModel)]='newTest.TestTimeLimit'>\n      </div>\n      <div>\n        <label>Question Time Limit: </label>\n        <input type='time' [(ngModel)]='newTest.QuestionTimeLimit'>\n      </div>\n      <button (click)='confirmAddTest()'>Comfirm</button>\n    </div>\n  </div> -->\n  </div>"

/***/ }),

/***/ "./src/app/manage-tests/manage-tests.component.ts":
/*!********************************************************!*\
  !*** ./src/app/manage-tests/manage-tests.component.ts ***!
  \********************************************************/
/*! exports provided: ManageTestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageTestsComponent", function() { return ManageTestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_assets_Models_Managing_TestViewModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/Models/Managing/TestViewModel */ "./src/assets/Models/Managing/TestViewModel.ts");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageTestsComponent = /** @class */ (function () {
    function ManageTestsComponent(http, title) {
        this.http = http;
        this.title = title;
        this.newTest = new src_assets_Models_Managing_TestViewModel__WEBPACK_IMPORTED_MODULE_1__["TestViewModel"]();
        this.dateTime = new Date();
    }
    ManageTestsComponent.prototype.showAddTestValueChange = function () {
        this.newTest = new src_assets_Models_Managing_TestViewModel__WEBPACK_IMPORTED_MODULE_1__["TestViewModel"]();
        this.newTest.QuestionTimeLimit = '00:00';
        this.newTest.TestTimeLimit = '00:00';
        this.isShowAddTest = true;
    };
    ManageTestsComponent.prototype.removeTest = function (_test) {
        var _this = this;
        this.http.removeTest(_test.Guid).subscribe(function (x) {
            if (x === true) {
                _this.http.GetAllTests().subscribe(function (x) { return _this.testsList = x; });
            }
        });
    };
    ManageTestsComponent.prototype.confirmAddTest = function () {
        var _this = this;
        this.http.createTest(this.newTest).subscribe(function (x) {
            if (x !== undefined) {
                _this.testsList.push(x);
                _this.isShowAddTest = false;
            }
        });
    };
    ManageTestsComponent.prototype.addNewTest = function () {
        this.newTest = new src_assets_Models_Managing_TestViewModel__WEBPACK_IMPORTED_MODULE_1__["TestViewModel"]();
        this.newTest.QuestionTimeLimit = '00:00';
        this.newTest.TestTimeLimit = '00:00';
        this.isShowAddTest = true;
    };
    ManageTestsComponent.prototype.cancelNewTest = function () {
        this.newTest = new src_assets_Models_Managing_TestViewModel__WEBPACK_IMPORTED_MODULE_1__["TestViewModel"]();
        this.newTest.QuestionTimeLimit = '00:00';
        this.newTest.TestTimeLimit = '00:00';
        this.isShowAddTest = false;
    };
    ManageTestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.GetAllTests().subscribe(function (x) { return _this.testsList = x; });
    };
    ManageTestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-tests',
            template: __webpack_require__(/*! ./manage-tests.component.html */ "./src/app/manage-tests/manage-tests.component.html"),
            styles: [__webpack_require__(/*! ./manage-tests.component.css */ "./src/app/manage-tests/manage-tests.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], ManageTestsComponent);
    return ManageTestsComponent;
}());



/***/ }),

/***/ "./src/app/passing-test/passing-test.component.css":
/*!*********************************************************!*\
  !*** ./src/app/passing-test/passing-test.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n    margin: auto;\r\n    padding: 10px;\r\n    width: 60%;\r\n   \r\n}\r\n\r\n.infoTableRow td{\r\n    border: 1px black solid;\r\ntext-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFzc2luZy10ZXN0L3Bhc3NpbmctdGVzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxXQUFXOztDQUVkOztBQUVEO0lBQ0ksd0JBQXdCO0FBQzVCLG1CQUFtQjtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL3Bhc3NpbmctdGVzdC9wYXNzaW5nLXRlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxle1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgIFxyXG59XHJcblxyXG4uaW5mb1RhYmxlUm93IHRke1xyXG4gICAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/passing-test/passing-test.component.html":
/*!**********************************************************!*\
  !*** ./src/app/passing-test/passing-test.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1 *ngIf='currentTest' style='text-align: center;'>{{currentTest.Name}}</h1>\n  <div *ngIf='isShowWelcome'>\n    <table *ngIf='currentTest'>\n      <tr class='infoTableRow'>\n        <td><label>Description: {{currentTest.Description}}</label></td>\n        <td><label>Time for test: {{currentTest.TestTimeLimit}}</label></td>\n        <td><label>Time per question: {{currentTest.QuestionTimeLimit}}</label></td>\n      </tr>\n      <tr style='text-align: center;'>\n        <td></td>\n        <td><button (click)='startTest()'>Start test</button></td>\n        <td></td>\n      </tr>\n    </table>\n  </div>\n  <div *ngIf='isShowTest'>\n    <div>\n      <label>Time left: {{timeLeft}}</label>\n    </div>\n    <h1 style='text-align: center;'>{{currentQuestion.Instance}}</h1>\n    <table class='table table-hover'>\n      <tr *ngFor='let answer of currentQuestion.Answers'>\n        <td><input type='radio' (click)='selectAnswer(answer)' name='isAnswerSelecter'></td>\n        <td>{{answer.Instance}}</td>\n      </tr>\n    </table>\n    <button style='margin-left: 50%;' (click)='nextQuestion()'>Next</button>\n  </div>\n  <div *ngIf='isShowResult'>\n      <table>\n        <tr>\n          <th>Total questions: {{testPassingResult.QuestionTried}} </th>\n          <th>Correct answers: {{testPassingResult.Score}}</th>\n          <th>Result: {{(testPassingResult.Score/testPassingResult.QuestionTried)*100}}%</th>\n        </tr>\n      </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/passing-test/passing-test.component.ts":
/*!********************************************************!*\
  !*** ./src/app/passing-test/passing-test.component.ts ***!
  \********************************************************/
/*! exports provided: PassingTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassingTestComponent", function() { return PassingTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_assets_Models_QuizPassing_TestPassingViewModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/Models/QuizPassing/TestPassingViewModel */ "./src/assets/Models/QuizPassing/TestPassingViewModel.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_assets_Models_QuizPassing_ChoicePassingViewModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/Models/QuizPassing/ChoicePassingViewModel */ "./src/assets/Models/QuizPassing/ChoicePassingViewModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PassingTestComponent = /** @class */ (function () {
    function PassingTestComponent(route, http, title) {
        this.route = route;
        this.http = http;
        this.title = title;
        this.isShowWelcome = true;
        this.isShowTest = false;
        this.isShowResult = false;
        this.testPassingResult = new src_assets_Models_QuizPassing_TestPassingViewModel__WEBPACK_IMPORTED_MODULE_4__["TestPassingViewModel"]();
        this.duration = 0;
    }
    PassingTestComponent.prototype.startTest = function () {
        var _this = this;
        if (this.testingUrlGuid) {
            this.http.getInfoAndStartTest(this.testingUrlGuid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
                _this.isShowWelcome = false;
                _this.isShowTest = true;
                _this.testPassingResult.Guid = result['AttemptGuid'];
                _this.testPassingResult.Score = 0;
                _this.testPassingResult.QuestionTried = 0;
                _this.testPassingResult.TestingStartDateTime = new Date().toISOString();
                _this.currentQuestionIndex = 0;
                _this.testPassingResult.Questions = [];
                _this.testPassingResult.TestingGuid = _this.testingUrlGuid;
                _this.currentQuestion = _this.currentTest.Questions[_this.currentQuestionIndex];
                _this.http.GetAnswersByQuestionGuid(_this.currentQuestion.Guid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (answers) {
                    _this.currentQuestion.Answers = answers;
                    _this.timeLeft = Number.parseInt(_this.currentTest.QuestionTimeLimit.split(':')[0]) * 3600 +
                        Number.parseInt(_this.currentTest.QuestionTimeLimit.split(':')[1]) * 60 +
                        Number.parseInt(_this.currentTest.QuestionTimeLimit.split(':')[2]);
                    _this.timePerQuestion = _this.timeLeft;
                    _this.interval = setInterval(function () {
                        if (_this.timeLeft > 0) {
                            _this.timeLeft--;
                        }
                        else {
                            _this.nextQuestion();
                        }
                    }, 1000);
                })).subscribe();
            })).subscribe();
        }
        // } else {
        //   this.isShowWelcome = false;
        //   this.isShowTest = true;
        //   this.testPassingResult.Interviewee = sessionStorage.getItem('username');
        //   this.testPassingResult.Score = 0;
        //   this.testPassingResult.TestingStartDateTime = new Date().toDateString();
        //   this.testPassingResult.QuestionTried = 0;
        //   this.testPassingResult.TestingGuid = this.currentTest.Guid;
        //   this.testPassingResult.Questions = [];
        //   this.currentQuestionIndex = 0;
        //   this.currentQuestion = this.currentTest.Questions[this.currentQuestionIndex];
        //   this.http.GetAnswersByQuestionGuid(this.currentQuestion.Guid).pipe(map((answers: AnswerViewModel[]) => {
        //     this.currentQuestion.Answers = answers;
        //   })).subscribe();
        // }
    };
    PassingTestComponent.prototype.selectAnswer = function (answer) {
        this.selectedAnswer = answer;
    };
    PassingTestComponent.prototype.nextQuestion = function () {
        var _this = this;
        if (this.currentQuestionIndex < (this.currentTest.Questions.length - 1)) {
            this.duration += this.timePerQuestion - this.timeLeft;
            var choise = new src_assets_Models_QuizPassing_ChoicePassingViewModel__WEBPACK_IMPORTED_MODULE_6__["ChoicePassingViewModel"]();
            choise.QuestionGuid = this.currentTest.Questions[this.currentQuestionIndex].Guid;
            choise.AnswersSelected = [];
            if (this.selectedAnswer) {
                choise.AnswersSelected.push(this.selectedAnswer.Guid);
            }
            this.testPassingResult.Questions.push(choise);
            this.currentQuestionIndex++;
            this.currentQuestion = this.currentTest.Questions[this.currentQuestionIndex];
            this.testPassingResult.QuestionTried += 1;
            clearInterval(this.interval);
            this.interval = setInterval(function () {
                if (_this.timeLeft > 0) {
                    _this.timeLeft--;
                }
                else {
                    _this.nextQuestion();
                }
            }, 1000);
            this.timeLeft = Number.parseInt(this.currentTest.QuestionTimeLimit.split(':')[0]) * 3600 +
                Number.parseInt(this.currentTest.QuestionTimeLimit.split(':')[1]) * 60 +
                Number.parseInt(this.currentTest.QuestionTimeLimit.split(':')[2]);
            if (this.selectedAnswer !== null) {
                if (this.selectedAnswer.IsCorrect) {
                    this.testPassingResult.Score++;
                    this.selectedAnswer = null;
                }
            }
        }
        else {
            clearInterval(this.interval);
            this.testPassingResult.QuestionTried += 1;
            var choise = new src_assets_Models_QuizPassing_ChoicePassingViewModel__WEBPACK_IMPORTED_MODULE_6__["ChoicePassingViewModel"]();
            choise.QuestionGuid = this.currentTest.Questions[this.currentQuestionIndex].Guid;
            choise.AnswersSelected = [];
            if (this.selectedAnswer) {
                choise.AnswersSelected.push(this.selectedAnswer.Guid);
            }
            this.testPassingResult.Questions.push(choise);
            this.duration += this.timePerQuestion - this.timeLeft;
            if (this.duration < 60) {
                var stringDuration = "00:00:" + this.duration.toString();
            }
            else if (this.duration < 3600) {
                var stringDuration = "00:" + (this.duration / 60).toString().split('.')[0] + (this.duration % 60).toString();
            }
            this.testPassingResult.Duration = stringDuration;
            this.isShowTest = false;
            this.isShowResult = true;
            this.testPassingResult.TestingEndDateTime = new Date().toISOString();
            this.http.finishTest(this.testPassingResult).subscribe();
        }
    };
    PassingTestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (params) {
            _this.testingUrlGuid = params['testingUrlGuid'];
            if (_this.testingUrlGuid) {
                _this.http.getTestByTestingUrlGuid(_this.testingUrlGuid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) {
                    _this.currentTest = x;
                })).subscribe();
            }
            // else {
            //   this.testGuid = sessionStorage.getItem('testGuid');
            //   if (sessionStorage.getItem('username') !== undefined) {
            //     this.username = sessionStorage.getItem('username');
            //   }
            //   this.http.GetAllTests().pipe(map((x: TestViewModel[]) => {
            //     for (var i = 0; i < x.length; i++) {
            //       if (x[i].Guid === this.testGuid) {
            //         this.currentTest = x[i];
            //       }
            //     }
            //   })).subscribe();
            // }
        })).subscribe();
    };
    PassingTestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-passing-test',
            template: __webpack_require__(/*! ./passing-test.component.html */ "./src/app/passing-test/passing-test.component.html"),
            styles: [__webpack_require__(/*! ./passing-test.component.css */ "./src/app/passing-test/passing-test.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], PassingTestComponent);
    return PassingTestComponent;
}());



/***/ }),

/***/ "./src/app/remove-answer/remove-answer.component.css":
/*!***********************************************************!*\
  !*** ./src/app/remove-answer/remove-answer.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbW92ZS1hbnN3ZXIvcmVtb3ZlLWFuc3dlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/remove-answer/remove-answer.component.html":
/*!************************************************************!*\
  !*** ./src/app/remove-answer/remove-answer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>\n    <ul *ngFor='let test of testsList'>\n      <li (click)='isShowTestQuestionsValueChange(test)'>\n        <span>{{test.Name}}</span>{{test.Description}}\n      </li>\n    </ul>\n  </div>\n  <div *ngIf='isShowTestQuestions'>\n    <ul *ngFor='let question of selectedTest.Questions' (click)='selectedQuestionGetAnswers(question)'>\n      <li>{{question.Instance}}</li>\n    </ul>\n  </div>\n  <div *ngIf='selectedQuestionAnswers'>\n    <ul *ngFor='let answer of selectedQuestionAnswers'>\n      <li>\n        <button (click)='removeAnswer(answer.Guid)'>Remove</button> {{answer.Instance}}\n      </li>\n    </ul>\n  </div>"

/***/ }),

/***/ "./src/app/remove-answer/remove-answer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/remove-answer/remove-answer.component.ts ***!
  \**********************************************************/
/*! exports provided: RemoveAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveAnswerComponent", function() { return RemoveAnswerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/http/http.service */ "./src/app/services/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemoveAnswerComponent = /** @class */ (function () {
    function RemoveAnswerComponent(http) {
        this.http = http;
        this.isShowTestQuestions = false;
    }
    RemoveAnswerComponent.prototype.selectedQuestionGetAnswers = function (question) {
        this.selectedQuestion = question;
        this.selectedQuestionAnswers = question.Answers;
    };
    RemoveAnswerComponent.prototype.isShowTestQuestionsValueChange = function (test) {
        if (this.isShowTestQuestions == true) {
            this.isShowTestQuestions = false;
        }
        else {
            this.isShowTestQuestions = true;
        }
        this.selectedTest = test;
    };
    RemoveAnswerComponent.prototype.GetAllTests = function () {
        var _this = this;
        this.http.GetAllTests().subscribe(function (x) { return _this.testsList = x; });
    };
    RemoveAnswerComponent.prototype.removeAnswer = function (_answerGuid) {
        var _this = this;
        var result;
        this.http.removeAnswer(_answerGuid).subscribe(function (x) {
            result = x;
            if (result == true) {
                var deletedAnswer = _this.selectedQuestion.Answers.find(function (x) { return x.Guid === _answerGuid; });
                var deletedAnswerIndex = _this.selectedQuestion.Answers.indexOf(deletedAnswer);
                if (deletedAnswerIndex !== -1) {
                    _this.selectedQuestion.Answers.splice(deletedAnswerIndex);
                }
            }
        });
    };
    RemoveAnswerComponent.prototype.ngOnInit = function () {
        this.GetAllTests();
    };
    RemoveAnswerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-remove-answer',
            template: __webpack_require__(/*! ./remove-answer.component.html */ "./src/app/remove-answer/remove-answer.component.html"),
            styles: [__webpack_require__(/*! ./remove-answer.component.css */ "./src/app/remove-answer/remove-answer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], RemoveAnswerComponent);
    return RemoveAnswerComponent;
}());



/***/ }),

/***/ "./src/app/services/http/http.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/http/http.service.ts ***!
  \***********************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    //Login Page methods
    HttpService.prototype.Login = function (Login, Password) {
        var body = { Username: Login, Password: Password };
        return this.http.post('http://localhost:53029/Account/Login/', body);
    };
    //Admin page methods
    HttpService.prototype.GetAllTests = function () {
        return this.http.get('http://localhost:53029/Admin/GetAllTests/');
    };
    HttpService.prototype.GetAnswersByQuestionGuid = function (questionGuid) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('questionGuid', questionGuid);
        return this.http.get('http://localhost:53029/Apilike/GetAnswersByQuestionGuid/', { params: params });
    };
    HttpService.prototype.CreateAnswer = function (_questionGuid, _answer) {
        var body = {
            questionGuid: _questionGuid, answer: {
                Instance: _answer.Instance,
                IsCorrect: _answer.IsCorrect,
                Guid: null
            }
        };
        return this.http.post('http://localhost:53029/Apilike/CreateAnswer/', body);
    };
    HttpService.prototype.createQuestion = function (_testGuid, _question) {
        var body = {
            testGuid: _testGuid,
            question: {
                Instance: _question.Instance,
                Hint: _question.Hint,
                Answers: null,
                IsValid: false
            }
        };
        return this.http.post('http://localhost:53029/Apilike/CreateQuestion/', body);
    };
    HttpService.prototype.removeQuestion = function (_testGuid, _questionGuid) {
        return this.http.post('http://localhost:53029/Apilike/RemoveQuestion/', { testGuid: _testGuid, questionGuid: _questionGuid });
    };
    HttpService.prototype.removeAnswer = function (_answerGuid) {
        return this.http.post('http://localhost:53029/Apilike/RemoveAnswer', { answerGuid: _answerGuid });
    };
    HttpService.prototype.updateQuestion = function (_question) {
        var body = {
            questionGuid: _question.Guid,
            question: {
                Instance: _question.Instance,
                Hint: _question.Hint,
                IsValid: _question.IsValid,
                Guid: _question.Guid
            }
        };
        return this.http.post('http://localhost:53029/Apilike/UpdateQuestion/', body);
    };
    HttpService.prototype.getTestByTestingUrlGuid = function (_testingUrlGuid) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('testingUrlGuid', _testingUrlGuid);
        return this.http.get('http://localhost:53029/Apilike/GetTestByTestingUrlGuid/', { params: params });
    };
    HttpService.prototype.createTest = function (_test) {
        var body = {
            test: {
                Name: _test.Name,
                Description: _test.Description,
                TestTimeLimit: _test.TestTimeLimit,
                QuestionTimeLimit: _test.QuestionTimeLimit,
                Questions: null,
                Guid: null,
                IsValid: null
            }
        };
        return this.http.post('http://localhost:53029/Apilike/CreateTest/', body);
    };
    HttpService.prototype.removeTest = function (_testGuid) {
        return this.http.post('http://localhost:53029/Apilike/RemoveTest/', {
            testGuid: _testGuid
        });
    };
    HttpService.prototype.getAllTestingUrls = function () {
        return this.http.get('http://localhost:53029/Admin/GetAllTestingUrls/');
    };
    HttpService.prototype.updateTest = function (_testGuid, _test) {
        var body = {
            testGuid: _testGuid,
            test: {
                Name: _test.Name,
                Description: _test.Description,
                TestTimeLimit: _test.TestTimeLimit,
                QuestionTimeLimit: _test.QuestionTimeLimit,
                Questions: null,
                Guid: null,
                IsValid: null
            }
        };
        return this.http.post('http://localhost:53029/Apilike/UpdateTest/', body);
    };
    HttpService.prototype.createTestingUrl = function (_testingUrl) {
        var body = {
            testingUrl: {
                UrlInstance: _testingUrl.UrlInstance,
                Guid: null,
                TestGuid: _testingUrl.TestGuid,
                TestName: _testingUrl.TestName,
                Interviewee: null,
                NumberOfRuns: 0,
                AllowedStartDate: _testingUrl.AllowedStartDate,
                AllowedEndDate: _testingUrl.AllowedEndDate
            }
        };
        return this.http.post('http://localhost:53029/Apilike/CreateTestingUrl/', body);
    };
    HttpService.prototype.removeTestingUrl = function (_testingUrlGuid) {
        return this.http.post('http://localhost:53029/Apilike/RemoveTestingUrl/', { testingUrlGuid: _testingUrlGuid });
    };
    HttpService.prototype.getQuestionsByTestGuid = function (testGuid) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('testGuid', testGuid);
        return this.http.get('http://localhost:53029/Apilike/GetQuestionsByTestGuid/', { params: params });
    };
    HttpService.prototype.getInfoAndStartTest = function (testingUrlGuid) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('testingUrlGuid', testingUrlGuid);
        return this.http.get('http://localhost:53029/Quiz/GetInfoAndStartTest', { params: params });
    };
    HttpService.prototype.getAllTestResults = function () {
        return this.http.get("http://localhost:53029/Admin/GetAllTestingResults");
    };
    HttpService.prototype.finishTest = function (result) {
        var body = {
            testPassing: {
                Guid: result.Guid,
                TestingGuid: result.TestingGuid,
                Interviewee: result.Interviewee,
                TestingStartDateTime: result.TestingStartDateTime,
                TestingEndDateTime: result.TestingEndDateTime,
                Duration: result.Duration,
                QuestionsTried: result.QuestionTried.toString(),
                Score: result.Score,
                AttemptGuid: result.AttemptGuid,
                Questions: JSON.stringify(result.Questions)
            }
        };
        return this.http.post('http://localhost:53029/Quiz/FinishTest', body);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/testing-results/testing-results.component.css":
/*!***************************************************************!*\
  !*** ./src/app/testing-results/testing-results.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RpbmctcmVzdWx0cy90ZXN0aW5nLXJlc3VsdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/testing-results/testing-results.component.html":
/*!****************************************************************!*\
  !*** ./src/app/testing-results/testing-results.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <table class='table'>\n<thead>\n  <th>Test name</th>\n  <th>Interviewee</th>\n  <th>Duration</th>\n  <th>Score</th>\n</thead>\n<tbody>\n  <tr *ngFor='let result of testingResults'>\n<td>{{result.TestName}}</td>\n<td>{{result.Interviewee}}</td>\n<td>{{result.Duration}}</td>\n<td>{{result.Score}}</td>\n  </tr>\n</tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/testing-results/testing-results.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/testing-results/testing-results.component.ts ***!
  \**************************************************************/
/*! exports provided: TestingResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestingResultsComponent", function() { return TestingResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/http/http.service */ "./src/app/services/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestingResultsComponent = /** @class */ (function () {
    function TestingResultsComponent(http) {
        this.http = http;
    }
    TestingResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.getAllTestResults().subscribe(function (x) { return _this.testingResults = x; });
    };
    TestingResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testing-results',
            template: __webpack_require__(/*! ./testing-results.component.html */ "./src/app/testing-results/testing-results.component.html"),
            styles: [__webpack_require__(/*! ./testing-results.component.css */ "./src/app/testing-results/testing-results.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], TestingResultsComponent);
    return TestingResultsComponent;
}());



/***/ }),

/***/ "./src/app/update-question/update-question.component.css":
/*!***************************************************************!*\
  !*** ./src/app/update-question/update-question.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1xdWVzdGlvbi91cGRhdGUtcXVlc3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/update-question/update-question.component.html":
/*!****************************************************************!*\
  !*** ./src/app/update-question/update-question.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #editQuestionForm=\"ngForm\">\n  <div>\n    <div>\n      <div *ngFor='let test of testsList'>\n        <span (click)='selectTest(test)'>{{test.Name}}</span>\n        <!-- <ul >\n        <li (click)='selectQuestion(question)' *ngFor='let question of questionsList' *ngIf='selectedTest===test'>{{question.Instance}}</li>\n      </ul> -->\n        <div *ngFor='let question of questionsList'>\n          <label (click)='selectQuestion(question)' *ngIf='selectedTest===test'>{{question.Instance}}</label>\n        </div>\n      </div>\n    </div>\n    <div *ngIf='selectedQuestion'>\n      <div>\n        <label>Instance: </label>\n        <input type='text' name='instanceInput' [(ngModel)]='selectedQuestion.Instance' class='form-control' required>\n      </div>\n      <div>\n        <label>Hint: </label>\n        <input type='text' class='form-control' name='hintInput' [(ngModel)]='selectedQuestion.Hint' required>\n      </div>\n      <button [disabled]='!editQuestionForm.form.valid' (click)='confirmEdit()'>Confirm</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/update-question/update-question.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/update-question/update-question.component.ts ***!
  \**************************************************************/
/*! exports provided: UpdateQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateQuestionComponent", function() { return UpdateQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/http/http.service */ "./src/app/services/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UpdateQuestionComponent = /** @class */ (function () {
    function UpdateQuestionComponent(http) {
        this.http = http;
    }
    UpdateQuestionComponent.prototype.selectTest = function (_test) {
        this.selectedTest = _test;
        this.questionsList = this.selectedTest.Questions;
    };
    UpdateQuestionComponent.prototype.selectQuestion = function (_question) {
        this.selectedQuestion = _question;
    };
    UpdateQuestionComponent.prototype.getAllTests = function () {
        var _this = this;
        this.http.GetAllTests().subscribe(function (x) { return _this.testsList = x; });
    };
    UpdateQuestionComponent.prototype.confirmEdit = function () {
        this.http.updateQuestion(this.selectedQuestion).subscribe();
        this.selectedQuestion = null;
    };
    UpdateQuestionComponent.prototype.ngOnInit = function () {
        this.getAllTests();
    };
    UpdateQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-question',
            template: __webpack_require__(/*! ./update-question.component.html */ "./src/app/update-question/update-question.component.html"),
            styles: [__webpack_require__(/*! ./update-question.component.css */ "./src/app/update-question/update-question.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], UpdateQuestionComponent);
    return UpdateQuestionComponent;
}());



/***/ }),

/***/ "./src/app/update-test/update-test.component.css":
/*!*******************************************************!*\
  !*** ./src/app/update-test/update-test.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n    /* table-layout: fixed;\r\n    width: 75%;\r\n    border-collapse: collapse;\r\n    border: 2px solid black; */\r\n    table-layout: fixed;\r\n    margin: auto;\r\n    padding: 10px;\r\n    border-collapse: collapse;\r\n\r\n    width: 75%;\r\n  }\r\n\r\n  table td,th{\r\n    border-style: solid;\r\n    border-width: 2px;\r\n    border-color: black;\r\n    border-collapse: collapse; \r\n}\r\n\r\n  input:placeholder-shown{\r\n  border-color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlLXRlc3QvdXBkYXRlLXRlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJOzs7K0JBRzJCO0lBQzNCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsY0FBYztJQUNkLDBCQUEwQjs7SUFFMUIsV0FBVztHQUNaOztFQUVEO0lBQ0Usb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsMEJBQTBCO0NBQzdCOztFQUVEO0VBQ0Usa0JBQWtCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvdXBkYXRlLXRlc3QvdXBkYXRlLXRlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxle1xyXG4gICAgLyogdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXHJcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcblxyXG4gICAgd2lkdGg6IDc1JTtcclxuICB9XHJcblxyXG4gIHRhYmxlIHRkLHRoe1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IFxyXG59IFxyXG5cclxuaW5wdXQ6cGxhY2Vob2xkZXItc2hvd257XHJcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/update-test/update-test.component.html":
/*!********************************************************!*\
  !*** ./src/app/update-test/update-test.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='selectedTest'>\n  <div>\n    <form #editTestForm='ngForm'>\n      <table class='table'>\n        <tr>\n          <button [ngClass]=\"editTestForm.form.valid ? 'btn btn-success' : 'btn btn-default'\" (click)='confirmUpdateTest()'\n            [disabled]='!editTestForm.form.valid'>Save changes</button>\n        </tr>\n        <tr>\n          <th>Test Name</th>\n          <th>Description</th>\n          <th>Test time limit</th>\n          <th>Question time limit</th>\n          <th>Questions</th>\n        </tr>\n        <tr>\n          <td><input class='form-control' type='text' name='testName' [(ngModel)]='selectedTest.Name' placeholder=\"Test name\"\n              required></td>\n          <td><input class='form-control' type='text' name='testDescription' [(ngModel)]='selectedTest.Description'\n              placeholder=\"Test description\" required></td>\n          <td><input class='form-control' type='time' step=\"1\" name='timeforTest' [(ngModel)]='selectedTest.TestTimeLimit'\n              required></td>\n          <td><input class='form-control' type='time' step=\"1\" name='timePerQuestion' [(ngModel)]='selectedTest.QuestionTimeLimit'\n              required></td>\n          <td><button class=\"btn\" (click)='isShowTestEditDivValueChange()' style='float: right;'>Edit</button></td>\n        </tr>\n\n      </table>\n    </form>\n  </div>\n  <div *ngIf='isShowTestEditDiv'>\n    <div>\n      <app-create-question [selectedTest]='selectedTest'></app-create-question>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/update-test/update-test.component.ts":
/*!******************************************************!*\
  !*** ./src/app/update-test/update-test.component.ts ***!
  \******************************************************/
/*! exports provided: UpdateTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTestComponent", function() { return UpdateTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_assets_Models_Managing_TestViewModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/Models/Managing/TestViewModel */ "./src/assets/Models/Managing/TestViewModel.ts");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UpdateTestComponent = /** @class */ (function () {
    function UpdateTestComponent(http, route, router) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.router = router;
        this.route.params.subscribe(function (params) { return _this.testGuid = params['guid']; });
    }
    UpdateTestComponent.prototype.selectTest = function (_test) {
        this.selectedTest = _test;
    };
    UpdateTestComponent.prototype.isShowTestEditDivValueChange = function () {
        this.isShowTestEditDiv = true;
    };
    UpdateTestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.GetAllTests().subscribe(function (x) {
            _this.testsList = x;
            for (var i = 0; i < _this.testsList.length; i++) {
                if (_this.testsList[i].Guid === _this.testGuid) {
                    _this.selectedTest = _this.testsList[i];
                }
            }
        });
    };
    UpdateTestComponent.prototype.confirmUpdateTest = function () {
        var _this = this;
        this.isShowTestEditDiv = false;
        this.http.updateTest(this.testGuid, this.selectedTest).subscribe(function () {
            return _this.router.navigate(['admin-panel/manage-tests']);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_assets_Models_Managing_TestViewModel__WEBPACK_IMPORTED_MODULE_1__["TestViewModel"])
    ], UpdateTestComponent.prototype, "selectedTest", void 0);
    UpdateTestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-test',
            template: __webpack_require__(/*! ./update-test.component.html */ "./src/app/update-test/update-test.component.html"),
            styles: [__webpack_require__(/*! ./update-test.component.css */ "./src/app/update-test/update-test.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UpdateTestComponent);
    return UpdateTestComponent;
}());



/***/ }),

/***/ "./src/app/user-panel/user-panel.component.css":
/*!*****************************************************!*\
  !*** ./src/app/user-panel/user-panel.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tr:hover{\r\n    background-color: blanchedalmond;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wYW5lbC91c2VyLXBhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7SUFDakMsZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvdXNlci1wYW5lbC91c2VyLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0cjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYW5jaGVkYWxtb25kO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user-panel/user-panel.component.html":
/*!******************************************************!*\
  !*** ./src/app/user-panel/user-panel.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div *ngIf='testsList'>\n    <table class='table' style='margin: auto; width:80%; margin-top: 50px;'>\n      <thead>\n        <th>Test name</th>\n        <th>Test description</th>\n        <th>Time for test</th>\n        <th>Time per question</th>\n      </thead>\n      <tbody *ngIf='testsList'>\n        <tr *ngFor='let test of testsList' data-toggle=\"tooltip\"  title=\"Click to start test\" (click)='startTest(test)'>\n          <td>{{test.Name}}</td>\n          <td>{{test.Description}}</td>\n          <td>{{test.TestTimeLimit}}</td>\n          <td>{{test.QuestionTimeLimit}}</td>\n        </tr>\n      </tbody>\n    </table>\n  <div>\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user-panel/user-panel.component.ts":
/*!****************************************************!*\
  !*** ./src/app/user-panel/user-panel.component.ts ***!
  \****************************************************/
/*! exports provided: UserPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPanelComponent", function() { return UserPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserPanelComponent = /** @class */ (function () {
    function UserPanelComponent(http, router, route, location) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.location = location;
        this.isTestStarted = false;
    }
    UserPanelComponent.prototype.ngOnInit = function () {
        this.getAllTests();
        this.currentUserName = sessionStorage.getItem('username');
    };
    UserPanelComponent.prototype.startTest = function (_test) {
        this.selectedTest = _test;
        sessionStorage.setItem('testGuid', this.selectedTest.Guid);
        sessionStorage.setItem('username', this.currentUserName);
        this.router.navigate(['test-passing']);
        //  console.log(this.router.events);
        // this.location.replaceState('UserPanel/TestPassing');
    };
    // selectTest(_test: TestViewModel) {
    //   this.selectedTest = _test;
    // }
    UserPanelComponent.prototype.getAllTests = function () {
        var _this = this;
        this.http.GetAllTests().subscribe(function (x) { return _this.testsList = x; });
    };
    UserPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-panel',
            template: __webpack_require__(/*! ./user-panel.component.html */ "./src/app/user-panel/user-panel.component.html"),
            styles: [__webpack_require__(/*! ./user-panel.component.css */ "./src/app/user-panel/user-panel.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], UserPanelComponent);
    return UserPanelComponent;
}());



/***/ }),

/***/ "./src/assets/Models/Managing/AnswerViewModel.ts":
/*!*******************************************************!*\
  !*** ./src/assets/Models/Managing/AnswerViewModel.ts ***!
  \*******************************************************/
/*! exports provided: AnswerViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerViewModel", function() { return AnswerViewModel; });
var AnswerViewModel = /** @class */ (function () {
    function AnswerViewModel() {
    }
    return AnswerViewModel;
}());



/***/ }),

/***/ "./src/assets/Models/Managing/QuestionViewModel.ts":
/*!*********************************************************!*\
  !*** ./src/assets/Models/Managing/QuestionViewModel.ts ***!
  \*********************************************************/
/*! exports provided: QuestionViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionViewModel", function() { return QuestionViewModel; });
var QuestionViewModel = /** @class */ (function () {
    function QuestionViewModel() {
    }
    return QuestionViewModel;
}());



/***/ }),

/***/ "./src/assets/Models/Managing/TestViewModel.ts":
/*!*****************************************************!*\
  !*** ./src/assets/Models/Managing/TestViewModel.ts ***!
  \*****************************************************/
/*! exports provided: TestViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestViewModel", function() { return TestViewModel; });
var TestViewModel = /** @class */ (function () {
    function TestViewModel() {
    }
    return TestViewModel;
}());



/***/ }),

/***/ "./src/assets/Models/Managing/TestingUrlViewModel.ts":
/*!***********************************************************!*\
  !*** ./src/assets/Models/Managing/TestingUrlViewModel.ts ***!
  \***********************************************************/
/*! exports provided: TestingUrlViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestingUrlViewModel", function() { return TestingUrlViewModel; });
var TestingUrlViewModel = /** @class */ (function () {
    function TestingUrlViewModel() {
    }
    return TestingUrlViewModel;
}());



/***/ }),

/***/ "./src/assets/Models/QuizPassing/ChoicePassingViewModel.ts":
/*!*****************************************************************!*\
  !*** ./src/assets/Models/QuizPassing/ChoicePassingViewModel.ts ***!
  \*****************************************************************/
/*! exports provided: ChoicePassingViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoicePassingViewModel", function() { return ChoicePassingViewModel; });
var ChoicePassingViewModel = /** @class */ (function () {
    function ChoicePassingViewModel() {
    }
    return ChoicePassingViewModel;
}());



/***/ }),

/***/ "./src/assets/Models/QuizPassing/TestPassingViewModel.ts":
/*!***************************************************************!*\
  !*** ./src/assets/Models/QuizPassing/TestPassingViewModel.ts ***!
  \***************************************************************/
/*! exports provided: TestPassingViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPassingViewModel", function() { return TestPassingViewModel; });
var TestPassingViewModel = /** @class */ (function () {
    function TestPassingViewModel() {
    }
    return TestPassingViewModel;
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

module.exports = __webpack_require__(/*! C:\Users\Leobit user\stuff\quiz\angular-quiz-app-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map