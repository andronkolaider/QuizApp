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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXBhbmVsL2FkbWluLXBhbmVsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin-panel/admin-panel.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin-panel/admin-panel.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div style='width: 300px;float: right;'>\r\n    <ul>\r\n      <li> <input type='radio' name='adminSelection' [(ngModel)]='adminSelection' [value]='1'>CreateAnswer</li>\r\n      <li> <input type='radio' name='adminSelection' [(ngModel)]='adminSelection' [value]='2'>RemoveAnswer</li>\r\n      <li> <input type='radio' name='adminSelection' [(ngModel)]='adminSelection' [value]='3'>GetQuestionsByTest</li>\r\n      <li> <input type='radio' name='adminSelection' [(ngModel)]='adminSelection' [value]='4'>CreateQuestion</li>\r\n      <li> <input type='radio' name='adminSelection' [(ngModel)]='adminSelection' [value]='5'>RemoveQuestion</li>\r\n      <li> <input type='radio' name='adminSelection' [(ngModel)]='adminSelection' [value]='6'>UpdateQuestion</li>\r\n      <li> <input type='radio' name='adminSelection' [(ngModel)]='adminSelection' [value]='7'>CreateTest</li>\r\n      <li> <input type='radio' name='adminSelection' [(ngModel)]='adminSelection' [value]='8'>UpdateTest</li>\r\n      <li> <input type='radio' name='adminSelection' [(ngModel)]='adminSelection' [value]='9'>RemoveTest</li>\r\n      <li> <input type='radio' name='adminSelection' [(ngModel)]='adminSelection' [value]='10'>CreateTestingUrl</li>\r\n      <li> <input type='radio' name='adminSelection' [(ngModel)]='adminSelection' [value]='11'>RemoveTestingUrl</li>\r\n      <li> <input type='radio' name='adminSelection' [(ngModel)]='adminSelection' [value]='12'>RemoveTestingResult</li>\r\n    </ul>\r\n  </div>\r\n  <div *ngIf=\"adminSelection===1\">\r\n    <app-create-answer></app-create-answer>\r\n  </div>\r\n  <div *ngIf=\"adminSelection===2\">\r\n<app-remove-answer></app-remove-answer>\r\n  </div>\r\n  <div *ngIf=\"adminSelection===3\">\r\n<app-get-questions-by-test></app-get-questions-by-test>\r\n  </div>\r\n  <div *ngIf=\"adminSelection===4\">\r\n<app-create-question></app-create-question>\r\n  </div>\r\n  <div *ngIf=\"adminSelection===5\">\r\n\r\n  </div>\r\n  <div *ngIf=\"adminSelection===6\">\r\n\r\n  </div>\r\n  <div *ngIf=\"adminSelection===7\">\r\n\r\n  </div>\r\n  <div *ngIf=\"adminSelection===8\">\r\n\r\n  </div>\r\n  <div *ngIf=\"adminSelection===9\">\r\n\r\n  </div>\r\n  <div *ngIf=\"adminSelection===10\">\r\n\r\n  </div>\r\n  <div *ngIf=\"adminSelection===11\">\r\n\r\n  </div>\r\n  <div *ngIf=\"adminSelection===12\">\r\n\r\n  </div>\r\n</div>"

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
    AdminPanelComponent.prototype.GetAnswersByQuestionGuid = function (Guid) {
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

module.exports = ".HomePageHeader{\r\n margin: auto;\r\ntext-align: center;\r\n}\r\n.MainPageLoginDiv\r\n{\r\n    height: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0FBQ2QsbUJBQW1CO0NBQ2xCO0FBQ0Q7O0lBRUksYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkhvbWVQYWdlSGVhZGVye1xyXG4gbWFyZ2luOiBhdXRvO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLk1haW5QYWdlTG9naW5EaXZcclxue1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head></head>\n\n<body>\n    <div class='MainPageLoginDiv'>\n        <app-login (IsAdminEvent)='receiveIsAdmin($event)'></app-login>\n    </div>\n\n    <h1 class='HomePageHeader'>My QuizApp</h1>\n\n    <div *ngIf='isAdmin'>\n        <app-admin-panel ></app-admin-panel>\n    </div>\n\n\n</body>\n\n</html>"

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
    function AppComponent() {
    }
    AppComponent.prototype.receiveIsAdmin = function ($event) {
        this.isAdmin = $event;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
                _create_question_create_question_component__WEBPACK_IMPORTED_MODULE_11__["CreateQuestionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1hbnN3ZXIvY3JlYXRlLWFuc3dlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/create-answer/create-answer.component.html":
/*!************************************************************!*\
  !*** ./src/app/create-answer/create-answer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf='testsList'>\r\n  <div>\r\n    <ul *ngFor='let test of testsList'>\r\n      <li (click)='isShowTestQuestionsValueChange(test)'>\r\n        <span>{{test.Name}}<br></span>\r\n        <span>{{test.Description}}</span>\r\n        <div *ngIf='isShowTestQuestions'>\r\n          <ul *ngFor='let question of selectedTest.Questions'>\r\n            <li (click)='isShowAddAnswerDivValueChange()' (click)='selectedQuestionGetAnswers(question)'>{{question.Instance}}</li>\r\n\r\n          </ul>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div> -->\r\n<div *ngIf='isShowAddAnswerDiv'>\r\n  <h3>{{selectedQuestion.Instance}}</h3>\r\n  <div>\r\n    <label>Instance: </label>\r\n    <input type='text' [(ngModel)]='_instance'>\r\n  </div>\r\n  <div>\r\n    <label>Is correct:</label>\r\n    <input type='radio' [(ngModel)]='_isCorrect' value='true'>True\r\n    <input type='radio' [(ngModel)]='_isCorrect' value='false'> False\r\n  </div>\r\n</div>\r\n<button type='button' (click)='CreateAnswer()'>Confirm</button>\r\n<div>\r\n  <ul *ngFor='let answer of selectedQuestionAnswers'>\r\n    <li>\r\n      {{answer.Instance}}<button type='button' (click)='removeAnswer(answer.Guid)'>Remove</button>\r\n    </li>\r\n  </ul>\r\n</div>"

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





var CreateAnswerComponent = /** @class */ (function () {
    function CreateAnswerComponent(http, title) {
        this.http = http;
        this.title = title;
    }
    CreateAnswerComponent.prototype.isShowAddAnswerDivValueChange = function () {
        if (this.isShowAddAnswerDiv == false) {
            this.isShowAddAnswerDiv = true;
        }
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
                _this.selectedQuestionAnswers.push(_this.newAnswer);
                _this.selectedQuestion.Answers = _this.selectedQuestion.Answers;
                _this._instance = '';
                _this._isCorrect = null;
            }
        });
    };
    CreateAnswerComponent.prototype.removeAnswer = function (_answerGuid) {
        var _this = this;
        var result;
        this.http.removeAnswer(_answerGuid).subscribe(function (x) {
            result = x;
            if (result == true) {
                var deletedAnswer = _this.selectedQuestionAnswers.find(function (x) { return x.Guid === _answerGuid; });
                var deletedAnswerIndex = _this.selectedQuestionAnswers.indexOf(deletedAnswer);
                if (deletedAnswerIndex !== -1) {
                    _this.selectedQuestionAnswers.splice(deletedAnswerIndex, 1);
                }
            }
        });
    };
    CreateAnswerComponent.prototype.addAnswer = function () {
        this.newAnswer = new _assets_Models_Managing_AnswerViewModel__WEBPACK_IMPORTED_MODULE_2__["AnswerViewModel"]();
        this.isShowAddAnswerDiv = true;
    };
    CreateAnswerComponent.prototype.ngOnInit = function () {
        // this.GetAllTests();
        //  this.selectedQuestionAnswers = this.selectedQuestion.Answers;
    };
    CreateAnswerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.selectedQuestion) {
            this.selectedQuestion = changes.selectedQuestion.currentValue;
            this.selectedQuestionAnswers = changes.selectedQuestionAnswers.currentValue;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _assets_Models_Managing_QuestionViewModel__WEBPACK_IMPORTED_MODULE_1__["QuestionViewModel"])
    ], CreateAnswerComponent.prototype, "selectedQuestion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CreateAnswerComponent.prototype, "selectedQuestionAnswers", void 0);
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
        __metadata("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1xdWVzdGlvbi9jcmVhdGUtcXVlc3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/create-question/create-question.component.html":
/*!****************************************************************!*\
  !*** ./src/app/create-question/create-question.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='testsList'>\n  <div>\n    <ul *ngFor='let test of testsList'>\n      <li (click)='selectTest(test)'>{{test.Name}}</li>\n      <div *ngIf='selectedTest'>\n        <div>\n          <ul *ngFor='let question of selectedTest.Questions'>\n            <li (click)='selectQuestion(question)'>\n              <div>\n                {{question.Instance}}\n                <button type='button' (click)='removeQuestion(selectedTest.Guid,question.Guid)'>Remove</button>\n                <div>\n                  <!-- <label>Answers: {{question.Answers.length}}</label> -->\n                  <button [value]='question' type='button' \n                  (click)='selectQuestion(question)'\n                   (click)='isShowAddAnswerValueChange()'>Add</button>\n                </div>\n              </div>\n            </li>\n          </ul>\n          <div *ngIf='isShowAddAnswer'>\n            <!-- <div>\n                <label>Instance: </label>\n                <input type='text' [(ngModel)]='newAnswer.Instance'>\n              </div>\n              <div>\n                <label>Is correct:</label>\n                <input type='radio' value='true' [(ngModel)]='newAnswer.IsCorrect'>True\n                <input type='radio' value='false' [(ngModel)]='newAnswer.IsCorrect'>False\n              </div>\n              <button type='button' (click)='addAnswer(selectedQuestion.Guid)'>Confirm</button>-->\n            <div *ngIf='isShowAddAnswer'>\n              <app-create-answer [selectedQuestion]=selectedQuestion [selectedQuestionAnswers]=selectedQuestionAnswers\n                [isShowAddAnswerDiv]=isShowAddAnswer></app-create-answer>\n            </div>\n\n          </div>\n\n        </div>\n        <div *ngIf='isShowAddQuestionDiv'>\n          <div>\n            <label>Instance:</label>\n            <input type='text' [(ngModel)]='newQuestion.Instance'>\n          </div>\n          <div>\n            <label>Hint:</label>\n            <input type='text' [(ngModel)]='newQuestion.Hint'>\n          </div>\n          <div>\n            <button type='button' (click)='confirmAddQuestion(newQuestion)'>Confirm</button>\n          </div>\n        </div>\n        <div>\n          <button type='button' (click)='addQuestion()'>Add question</button>\n        </div>\n      </div>\n    </ul>\n  </div>\n</div>"

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
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _assets_Models_Managing_QuestionViewModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/Models/Managing/QuestionViewModel */ "./src/assets/Models/Managing/QuestionViewModel.ts");
/* harmony import */ var _assets_Models_Managing_AnswerViewModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/Models/Managing/AnswerViewModel */ "./src/assets/Models/Managing/AnswerViewModel.ts");
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





var CreateQuestionComponent = /** @class */ (function () {
    function CreateQuestionComponent(http, title) {
        this.http = http;
        this.title = title;
        this.isShowAddQuestionDiv = false;
        this.isShowAddAnswer = false;
        this.newAnswer = new _assets_Models_Managing_AnswerViewModel__WEBPACK_IMPORTED_MODULE_3__["AnswerViewModel"]();
    }
    CreateQuestionComponent.prototype.getAllTests = function () {
        var _this = this;
        this.http.GetAllTests().subscribe(function (x) { return _this.testsList = x; });
    };
    CreateQuestionComponent.prototype.selectQuestion = function (_question) {
        this.selectedQuestion = _question;
        this.selectedQuestionAnswers = this.selectedQuestion.Answers;
        // this.title.setTitle(this.selectedQuestion.Answers.length.toString());
    };
    CreateQuestionComponent.prototype.selectTest = function (_test) {
        this.selectedTest = _test;
    };
    CreateQuestionComponent.prototype.addQuestion = function () {
        this.isShowAddQuestionDiv = true;
        this.newQuestion = new _assets_Models_Managing_QuestionViewModel__WEBPACK_IMPORTED_MODULE_2__["QuestionViewModel"]();
        this.isShowAddAnswer = false;
    };
    CreateQuestionComponent.prototype.addAnswer = function () {
        this.isShowAddAnswer = true;
    };
    //   addAnswer(_questionGuid) {
    //     this.isShowAddAnswer = false;
    //     this.http.CreateAnswer(_questionGuid, this.newAnswer).subscribe((x: boolean)=>{
    //       if (x == true)
    //       {
    //         this.selectedQuestion.Answers.push(this.newAnswer);
    //         this.newAnswer = new AnswerViewModel();
    //         }
    //     });
    // }
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
        this.newQuestion = new _assets_Models_Managing_QuestionViewModel__WEBPACK_IMPORTED_MODULE_2__["QuestionViewModel"]();
        this.isShowAddAnswer = false;
    };
    CreateQuestionComponent.prototype.ngOnInit = function () {
        this.getAllTests();
    };
    CreateQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-question',
            template: __webpack_require__(/*! ./create-question.component.html */ "./src/app/create-question/create-question.component.html"),
            styles: [__webpack_require__(/*! ./create-question.component.css */ "./src/app/create-question/create-question.component.css")],
        }),
        __metadata("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
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

module.exports = ".CredInput{\r\n    float: right;\r\n  margin-right: 5px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7RUFDZixrQkFBa0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkNyZWRJbnB1dHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #loginForm='ngForm' *ngIf='!IsLoginSuccessfull'>\n  <div>\n    <div class='CredInput'>\n      <button [disabled]='!loginForm.form.valid'\n       type='submit'\n       (click)='Login(LoginInput,PasswordInput)' \n       tabindex='3'>Log in</button>\n\n    </div>\n\n    <div class='CredInput'>\n      <label>Password: </label>\n      <input required name='password' class='form-control' type='password' placeholder=\"Password\" [(ngModel)]='PasswordInput'\n        tabindex='2'>\n    </div>\n\n    <div class='CredInput'>\n      <label>Login: </label>\n      <input required name='login' type='text' class='form-control' placeholder=\"Login\" [(ngModel)]='LoginInput'\n        tabindex='1'>\n    </div>\n\n  </div>\n</form>\n<div *ngIf='IsLoginSuccessfull' class='CredInput'>\n  <label>Current user: {{CurrentUser.Username}}</label>\n  <button style='margin-left: 7px;' type='submit' (click)='Logout()'>Log out</button>\n  <button type='submit'>test</button>\n</div>"

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
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
    function LoginComponent(http, title) {
        this.http = http;
        this.title = title;
        this.CurrentUser = { Username: '', Password: '' };
        this.IsLoginSuccessfull = false;
        this.IsAdmin = false;
        this.IsAdminEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.Tests = [];
    }
    LoginComponent.prototype.sendIsAdmin = function () {
        this.IsAdminEvent.emit(this.IsAdmin);
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.Logout = function () {
        this.IsLoginSuccessfull = false;
        this.IsAdmin = false;
        this.CurrentUser.Username = '';
        this.CurrentUser.Password = '';
        this.LoginInput = '';
        this.PasswordInput = '';
    };
    LoginComponent.prototype.Login = function (LoginInput, PasswordInput) {
        var _this = this;
        this.http.Login(LoginInput, PasswordInput).subscribe(function (x) {
            _this.CurrentUser = x;
            _this.IsLoginSuccessfull = true;
            if (_this.CurrentUser.Username == 'admin') {
                _this.IsAdmin = true;
            }
            _this.sendIsAdmin();
        });
        this.LoginInput = '';
        this.PasswordInput = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "IsAdminEvent", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], LoginComponent);
    return LoginComponent;
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
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('string', questionGuid);
        return this.http.get('http://localhost:53029/Apilike/GetAnswersByQuestionGuid/', { params: params });
    };
    HttpService.prototype.CreateAnswer = function (_questionGuid, _answer) {
        var body = {
            questionGuid: _questionGuid, answer: {
                Instance: _answer.Instance,
                IsCorrect: _answer.IsCorrect,
                Guid: _answer.Guid //fix
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
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
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