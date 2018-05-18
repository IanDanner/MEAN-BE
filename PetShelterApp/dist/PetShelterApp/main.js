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
		var e = new Error('Cannot find module "' + req + '".');
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _pet_create_pet_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pet-create/pet-create.component */ "./src/app/pet-create/pet-create.component.ts");
/* harmony import */ var _pet_info_pet_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pet-info/pet-info.component */ "./src/app/pet-info/pet-info.component.ts");
/* harmony import */ var _pet_edit_pet_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pet-edit/pet-edit.component */ "./src/app/pet-edit/pet-edit.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], children: [] },
    { path: 'new', component: _pet_create_pet_create_component__WEBPACK_IMPORTED_MODULE_3__["PetCreateComponent"], children: [] },
    { path: ':id', component: _pet_info_pet_info_component__WEBPACK_IMPORTED_MODULE_4__["PetInfoComponent"], children: [] },
    { path: ':id/edit', component: _pet_edit_pet_edit_component__WEBPACK_IMPORTED_MODULE_5__["PetEditComponent"], children: [] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] }
];
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <h1>Pet Shelter</h1>\n  <router-outlet></router-outlet>\n</div>"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _pet_create_pet_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pet-create/pet-create.component */ "./src/app/pet-create/pet-create.component.ts");
/* harmony import */ var _pet_info_pet_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pet-info/pet-info.component */ "./src/app/pet-info/pet-info.component.ts");
/* harmony import */ var _pet_edit_pet_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pet-edit/pet-edit.component */ "./src/app/pet-edit/pet-edit.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _pet_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pet.service */ "./src/app/pet.service.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _pet_create_pet_create_component__WEBPACK_IMPORTED_MODULE_8__["PetCreateComponent"],
                _pet_info_pet_info_component__WEBPACK_IMPORTED_MODULE_9__["PetInfoComponent"],
                _pet_edit_pet_edit_component__WEBPACK_IMPORTED_MODULE_10__["PetEditComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
            ],
            providers: [_pet_service__WEBPACK_IMPORTED_MODULE_12__["PetService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 50%;\r\n    border-collapse: collapse;\r\n    margin-top: 10px;\r\n    text-align: left;\r\n}\r\ntable, th, td {\r\n    border: 1px solid black;\r\n    vertical-align: top;\r\n}\r\nth, td {\r\n    padding: 10px;\r\n    line-height: 20px;\r\n    height: 20px;\r\n}\r\nth{\r\n    background-color: #D3D3D3;\r\n}\r\ntr:nth-child(even) {background-color:#D3D3D3}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3>These pets are looking for a home!</h3>\n  <h3><a [routerLink]=\"['','new']\">Add a pet to the shelter</a></h3>\n  <table>\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Actions</th>\n      </tr>\n    </thead>\n    <tbody *ngFor=\"let pet of pets\">\n      <tr *ngIf=\"pet.name\">\n        <td>{{pet.name}}</td>\n        <td>{{pet.type}}</td>\n        <td><button class=\"details\" [routerLink]=\"['', pet._id]\">Details</button> <button class=\"edit\" [routerLink]=\"['', pet._id,'edit']\">Edit</button></td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pet.service */ "./src/app/pet.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_route, petservice) {
        this._route = _route;
        this.petservice = petservice;
        this.pets = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.ShowAll();
    };
    HomeComponent.prototype.ShowAll = function () {
        var _this = this;
        var observable = this.petservice.getPets();
        observable.subscribe(function (data) {
            ;
            _this.pets = Object.values(data);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _pet_service__WEBPACK_IMPORTED_MODULE_1__["PetService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pet-create/pet-create.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pet-create/pet-create.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pet-create/pet-create.component.html":
/*!******************************************************!*\
  !*** ./src/app/pet-create/pet-create.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3>Know of a pet needing a home?</h3>\n  <div class=\"error\" *ngIf=\"name.errors\">\n      <p *ngIf=\"name.errors.minlength\">The pet name must be longer than 3 characters</p>\n      <p *ngIf=\"name.errors.required\">The pet must have a name</p>\n  </div>\n  <div class=\"error\" *ngIf=\"type.errors\">\n      <p *ngIf=\"type.errors.minlength\">The pet type must be longer than 3 characters</p>\n      <p *ngIf=\"type.errors.required\">The pet must have a type</p>\n  </div>\n  <div class=\"error\" *ngIf=\"description.errors\">\n      <p *ngIf=\"description.errors.minlength\">The pet description must be longer than 3 characters</p>\n      <p *ngIf=\"description.errors.required\">The pet must have a description</p>\n  </div>\n  \n  <p class=\"error\" *ngIf=\"errors.name\">{{errors.name.message}}</p>   \n  <p class=\"error\" *ngIf=\"errors.type\">{{errors.type.message}}</p>   \n  <p class=\"error\" *ngIf=\"errors.description\">{{errors.description.message}}</p>\n  <p class=\"error\" *ngIf=\"duplicate.errmsg\">A pet already has this name choose another</p>\n\n  <form (submit)=\"onCreate()\" #formData='ngForm'>\n    <p>Pet name:</p>\n    <input type=\"text\" name=\"name\" [(ngModel)]=\"newPet.name\" required #name='ngModel' minlength=\"3\">\n\n    <p>Pet type:</p>\n    <input type=\"text\" name=\"type\" [(ngModel)]=\"newPet.type\" required #type='ngModel' minlength=\"3\">\n\n    <p>Description:</p>\n    <input type=\"text\" name=\"description\" [(ngModel)]=\"newPet.description\" required #description='ngModel' minlength=\"3\">\n\n    <p>Skills (optional):</p>\n    <ul>\n      <li>\n        <p>Skill 1: <input type=\"text\" name=\"skill1\" [(ngModel)]=\"newPet.skill1\"></p>\n      </li>\n      <li>\n        <p>Skill 2: <input type=\"text\" name=\"skill2\" [(ngModel)]=\"newPet.skill2\"></p>\n      </li>\n      <li>\n        <p>Skill 3: <input type=\"text\" name=\"skill3\" [(ngModel)]=\"newPet.skill3\"></p>\n      </li>\n    </ul>\n\n    <input class=\"formButton\" type=\"submit\" value=\"Add pet\" [disabled]=\"formData.invalid\">\n    <input class=\"formButton\" type=\"submit\" value=\"Cancel\" [routerLink]=\"['']\">   \n  </form>\n</div>"

/***/ }),

/***/ "./src/app/pet-create/pet-create.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pet-create/pet-create.component.ts ***!
  \****************************************************/
/*! exports provided: PetCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetCreateComponent", function() { return PetCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pet.service */ "./src/app/pet.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PetCreateComponent = /** @class */ (function () {
    function PetCreateComponent(route, petservice) {
        this.route = route;
        this.petservice = petservice;
        this.errors = [];
        this.duplicate = {};
    }
    PetCreateComponent.prototype.ngOnInit = function () {
        this.newPet = { name: "", type: "", description: "", skill1: "", skill2: "", skill3: "", likes: 0 };
    };
    PetCreateComponent.prototype.onCreate = function () {
        var _this = this;
        this.errors = [];
        var observable = this.petservice.newPet(this.newPet);
        observable.subscribe(function (data) {
            if (data["errors"]) {
                _this.errors = data["errors"];
            }
            if (data["errmsg"]) {
                _this.duplicate = data;
            }
            else {
                _this.route.navigateByUrl('/');
            }
        });
    };
    PetCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pet-create',
            template: __webpack_require__(/*! ./pet-create.component.html */ "./src/app/pet-create/pet-create.component.html"),
            styles: [__webpack_require__(/*! ./pet-create.component.css */ "./src/app/pet-create/pet-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _pet_service__WEBPACK_IMPORTED_MODULE_2__["PetService"]])
    ], PetCreateComponent);
    return PetCreateComponent;
}());



/***/ }),

/***/ "./src/app/pet-edit/pet-edit.component.css":
/*!*************************************************!*\
  !*** ./src/app/pet-edit/pet-edit.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pet-edit/pet-edit.component.html":
/*!**************************************************!*\
  !*** ./src/app/pet-edit/pet-edit.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h3>Edit this pet</h3>\n    <div class=\"error\" *ngIf=\"name.errors\">\n        <p *ngIf=\"name.errors.minlength\">The pet name must be longer than 3 characters</p>\n        <p *ngIf=\"name.errors.required\">The pet must have a name</p>\n    </div>\n    <div class=\"error\" *ngIf=\"type.errors\">\n        <p *ngIf=\"type.errors.minlength\">The pet type must be longer than 3 characters</p>\n        <p *ngIf=\"type.errors.required\">The pet must have a type</p>\n    </div>\n    <div class=\"error\" *ngIf=\"description.errors\">\n        <p *ngIf=\"description.errors.minlength\">The pet description must be longer than 3 characters</p>\n        <p *ngIf=\"description.errors.required\">The pet must have a description</p>\n    </div>\n    \n    <p class=\"error\" *ngIf=\"errors.name\">{{errors.name.message}}</p>   \n    <p class=\"error\" *ngIf=\"errors.type\">{{errors.type.message}}</p>   \n    <p class=\"error\" *ngIf=\"errors.description\">{{errors.description.message}}</p>\n    <p class=\"error\" *ngIf=\"duplicate.errmsg\">A pet already has this name choose another</p>\n  \n    <form (submit)=\"onEdit(pet)\" #formData='ngForm'>\n      <p>Pet name:</p>\n      <input value=\"pet.name\" type=\"text\" name=\"name\" [(ngModel)]=\"pet.name\" required #name='ngModel' minlength=\"3\">\n  \n      <p>Pet type:</p>\n      <input value=\"pet.type\" type=\"text\" name=\"type\" [(ngModel)]=\"pet.type\" required #type='ngModel' minlength=\"3\">\n  \n      <p>Description:</p>\n      <input value=\"pet.description\" type=\"text\" name=\"description\" [(ngModel)]=\"pet.description\" required #description='ngModel' minlength=\"3\">\n  \n      <p>Skills (optional):</p>\n      <ul>\n        <li>\n          <p>Skill 1: <input value=\"pet.skill1\" type=\"text\" name=\"skill1\" [(ngModel)]=\"pet.skill1\"></p>\n        </li>\n        <li>\n          <p>Skill 2: <input value=\"pet.skill2\" type=\"text\" name=\"skill2\" [(ngModel)]=\"pet.skill2\"></p>\n        </li>\n        <li>\n          <p>Skill 3: <input value=\"pet.skill3\" type=\"text\" name=\"skill3\" [(ngModel)]=\"pet.skill3\"></p>\n        </li>\n      </ul>\n  \n      <input class=\"formButton\" type=\"submit\" value=\"Edit pet\" [disabled]=\"formData.invalid\">\n      <input class=\"formButton\" type=\"submit\" value=\"Cancel\" [routerLink]=\"['', pet._id]\">   \n    </form>\n  </div>"

/***/ }),

/***/ "./src/app/pet-edit/pet-edit.component.ts":
/*!************************************************!*\
  !*** ./src/app/pet-edit/pet-edit.component.ts ***!
  \************************************************/
/*! exports provided: PetEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetEditComponent", function() { return PetEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pet.service */ "./src/app/pet.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PetEditComponent = /** @class */ (function () {
    function PetEditComponent(route, _route, petservice) {
        this.route = route;
        this._route = _route;
        this.petservice = petservice;
        this.duplicate = {};
        this.pet = {};
        this.editPet = {};
        this.errors = {};
    }
    PetEditComponent.prototype.ngOnInit = function () {
        this.ShowOne();
    };
    PetEditComponent.prototype.ShowOne = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) {
            var observable = _this.petservice.getPet(params.get('id'));
            observable.subscribe(function (data) {
                _this.pet = data;
            });
        });
    };
    PetEditComponent.prototype.onEdit = function (editPet) {
        var _this = this;
        var observable = this.petservice.editPet(editPet);
        observable.subscribe(function (data) {
            if (data["errors"]) {
                _this.errors = data["errors"];
            }
            if (data["errmsg"]) {
                _this.duplicate = data;
            }
            else {
                _this.route.navigateByUrl('/' + _this.pet['_id']);
            }
        });
    };
    PetEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pet-edit',
            template: __webpack_require__(/*! ./pet-edit.component.html */ "./src/app/pet-edit/pet-edit.component.html"),
            styles: [__webpack_require__(/*! ./pet-edit.component.css */ "./src/app/pet-edit/pet-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _pet_service__WEBPACK_IMPORTED_MODULE_2__["PetService"]])
    ], PetEditComponent);
    return PetEditComponent;
}());



/***/ }),

/***/ "./src/app/pet-info/pet-info.component.css":
/*!*************************************************!*\
  !*** ./src/app/pet-info/pet-info.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    border-collapse: collapse;\r\n    margin-top: 10px;\r\n    text-align: left;\r\n}\r\ntable, th, td {\r\n    vertical-align: top;\r\n}\r\nth, td {\r\n    padding: 10px 10px 0px 10px;\r\n    line-height: 20px;\r\n}\r\nh4{\r\n    font-weight: normal;\r\n}"

/***/ }),

/***/ "./src/app/pet-info/pet-info.component.html":
/*!**************************************************!*\
  !*** ./src/app/pet-info/pet-info.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"pet.name\">\n  <h3><a [routerLink]=\"['']\">Home</a></h3>\n  <h3>Details about {{pet.name}}</h3>\n  <table>\n    <tbody>\n      <tr>\n        <td><h3>Pet type:</h3></td>\n        <td><h4>{{pet.type}}</h4></td>\n      </tr>\n      <tr>\n        <td><h3>Pet Description:</h3></td>\n        <td><h4>{{pet.description}}</h4></td>\n      </tr>\n      <tr>\n        <td><h3>Pet Skills:</h3></td>\n        <td><h4>{{pet.skill1}}</h4>\n        <h4>{{pet.skill2}}</h4>\n        <h4>{{pet.skill3}}</h4></td>\n      </tr>\n      <tr>\n        <td><h3>Likes:</h3></td>\n        <td><h4>{{pet.likes}}</h4></td>\n      </tr>\n      <tr>\n        <td><button class=\"likeBtn\" (click)=\"onLike(pet._id)\" [disabled]=\"liked === true\">Like this pet</button></td>\n        <td><button class=\"adoptBtn\" (click)=\"onDelete(pet._id)\">Adopt this pet!</button></td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/pet-info/pet-info.component.ts":
/*!************************************************!*\
  !*** ./src/app/pet-info/pet-info.component.ts ***!
  \************************************************/
/*! exports provided: PetInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetInfoComponent", function() { return PetInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pet.service */ "./src/app/pet.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PetInfoComponent = /** @class */ (function () {
    function PetInfoComponent(route, _route, petservice) {
        this.route = route;
        this._route = _route;
        this.petservice = petservice;
        this.pet = {};
        this.editPet = {};
        this.errors = {};
        this.liked = false;
    }
    PetInfoComponent.prototype.ngOnInit = function () {
        this.ShowOne();
    };
    PetInfoComponent.prototype.ShowOne = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) {
            var observable = _this.petservice.getPet(params.get('id'));
            observable.subscribe(function (data) {
                _this.pet = data;
                console.log(_this.pet);
            });
        });
    };
    PetInfoComponent.prototype.onLike = function (id) {
        var _this = this;
        if (this.pet['_id'] == id) {
            this.pet['likes'] += 1;
            var observable = this.petservice.editPet(this.pet);
            observable.subscribe(function (data) {
                if (data["errors"]) {
                }
                else {
                    _this.liked = true;
                    //dissable like button
                }
            });
        }
    };
    PetInfoComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.petservice.deletePet(id).subscribe(function (data) {
            _this.route.navigateByUrl('/');
        });
    };
    PetInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pet-info',
            template: __webpack_require__(/*! ./pet-info.component.html */ "./src/app/pet-info/pet-info.component.html"),
            styles: [__webpack_require__(/*! ./pet-info.component.css */ "./src/app/pet-info/pet-info.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _pet_service__WEBPACK_IMPORTED_MODULE_2__["PetService"]])
    ], PetInfoComponent);
    return PetInfoComponent;
}());



/***/ }),

/***/ "./src/app/pet.service.ts":
/*!********************************!*\
  !*** ./src/app/pet.service.ts ***!
  \********************************/
/*! exports provided: PetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetService", function() { return PetService; });
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


var PetService = /** @class */ (function () {
    function PetService(_http) {
        this._http = _http;
    }
    PetService.prototype.getPets = function () {
        return this._http.get('/Pets');
    };
    PetService.prototype.getPet = function (id) {
        return this._http.get('/Pets/' + id);
    };
    PetService.prototype.newPet = function (newPet) {
        return this._http.post('/Pets', newPet);
    };
    PetService.prototype.editPet = function (editPet) {
        return this._http.put('/Pets/' + editPet._id, editPet);
    };
    PetService.prototype.deletePet = function (id) {
        return this._http.delete('/Pets/' + id);
    };
    PetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PetService);
    return PetService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\NORSEMAN\Desktop\DojoAssignments\MEAN\BeltExam\MEANbelt\PetShelterApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map