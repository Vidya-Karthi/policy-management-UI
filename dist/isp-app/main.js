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

/***/ "./src/app/about-us/about-us.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about-us works!\n</p>\n"

/***/ }),

/***/ "./src/app/about-us/about-us.component.scss":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.scss */ "./src/app/about-us/about-us.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _vin_summary_details_vin_summary_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vin-summary-details/vin-summary-details.component */ "./src/app/vin-summary-details/vin-summary-details.component.ts");
/* harmony import */ var _vin_summary_vin_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vin-summary/vin-summary.component */ "./src/app/vin-summary/vin-summary.component.ts");
/* harmony import */ var _payment_by_incentive_payment_by_incentive_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-by-incentive/payment-by-incentive.component */ "./src/app/payment-by-incentive/payment-by-incentive.component.ts");
/* harmony import */ var _challenges_challenges_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./challenges/challenges.component */ "./src/app/challenges/challenges.component.ts");
/* harmony import */ var _deal_reviews_deal_reviews_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deal-reviews/deal-reviews.component */ "./src/app/deal-reviews/deal-reviews.component.ts");
/* harmony import */ var _payment_by_payment_payment_by_payment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./payment-by-payment/payment-by-payment.component */ "./src/app/payment-by-payment/payment-by-payment.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_login_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.guard */ "./src/app/login/login.guard.ts");
/* harmony import */ var _vin_summary_vin_summary_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vin-summary/vin-summary.guard */ "./src/app/vin-summary/vin-summary.guard.ts");
/* harmony import */ var _payment_by_payment_payment_by_payment_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./payment-by-payment/payment-by-payment.guard */ "./src/app/payment-by-payment/payment-by-payment.guard.ts");
/* harmony import */ var _payment_by_incentive_payment_by_incentive_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./payment-by-incentive/payment-by-incentive.guard */ "./src/app/payment-by-incentive/payment-by-incentive.guard.ts");
/* harmony import */ var _challenges_challenges_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./challenges/challenges.guard */ "./src/app/challenges/challenges.guard.ts");
/* harmony import */ var _deal_reviews_deal_reviews_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./deal-reviews/deal-reviews.guard */ "./src/app/deal-reviews/deal-reviews.guard.ts");
/* harmony import */ var _vin_summary_details_vin_summary_details_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./vin-summary-details/vin-summary-details.guard */ "./src/app/vin-summary-details/vin-summary-details.guard.ts");
/* harmony import */ var _payment_details_payment_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./payment-details/payment-details.component */ "./src/app/payment-details/payment-details.component.ts");
/* harmony import */ var _incentive_details_incentive_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./incentive-details/incentive-details.component */ "./src/app/incentive-details/incentive-details.component.ts");
/* harmony import */ var _payment_details_payment_details_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./payment-details/payment-details.guard */ "./src/app/payment-details/payment-details.guard.ts");
/* harmony import */ var _incentive_details_incentive_details_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./incentive-details/incentive-details.guard */ "./src/app/incentive-details/incentive-details.guard.ts");
/* harmony import */ var _challenges_detail_challenges_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./challenges-detail/challenges-detail.component */ "./src/app/challenges-detail/challenges-detail.component.ts");
/* harmony import */ var _challenges_detail_challenges_detail_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./challenges-detail/challenges-detail.guard */ "./src/app/challenges-detail/challenges-detail.guard.ts");
/* harmony import */ var _deal_review_details_deal_review_details_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./deal-review-details/deal-review-details.component */ "./src/app/deal-review-details/deal-review-details.component.ts");
/* harmony import */ var _deal_review_details_deal_review_details_guard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./deal-review-details/deal-review-details.guard */ "./src/app/deal-review-details/deal-review-details.guard.ts");
/* harmony import */ var _help_help_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./help/help.guard */ "./src/app/help/help.guard.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");



























var routes = [
    {
        path: 'login',
        canActivate: [_login_login_guard__WEBPACK_IMPORTED_MODULE_10__["LoginGuard"]],
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
    },
    {
        path: 'vinSummary',
        canActivate: [_vin_summary_vin_summary_guard__WEBPACK_IMPORTED_MODULE_11__["VinSummaryGuard"]],
        component: _vin_summary_vin_summary_component__WEBPACK_IMPORTED_MODULE_4__["VinSummaryComponent"]
    },
    {
        path: 'paymentByPayment',
        canActivate: [_payment_by_payment_payment_by_payment_guard__WEBPACK_IMPORTED_MODULE_12__["PaymentByPaymentGuard"]],
        component: _payment_by_payment_payment_by_payment_component__WEBPACK_IMPORTED_MODULE_8__["PaymentByPaymentComponent"]
    },
    {
        path: 'paymentByPayment/paymentDetails/:paymentReferenceNo',
        canActivate: [_payment_details_payment_details_guard__WEBPACK_IMPORTED_MODULE_19__["PaymentDetailsGuard"]],
        component: _payment_details_payment_details_component__WEBPACK_IMPORTED_MODULE_17__["PaymentDetailsComponent"],
        data: {
            // data will be fetched from the respective paraMap and appended at the appropiate place
            breadcrumbs: [
                { title: 'Payments by Payment Method', route: '/paymentByPayment', append: '', urlParam: '' },
                { title: '', route: '', append: '', urlParam: 'paymentReferenceNo' }
            ]
        }
    },
    {
        path: 'paymentByPayment/vinSummaryDetails/:vin/:paymentReferenceNo/:user/:rDate',
        canActivate: [_vin_summary_details_vin_summary_details_guard__WEBPACK_IMPORTED_MODULE_16__["VinSummaryDetailsGuard"]],
        component: _vin_summary_details_vin_summary_details_component__WEBPACK_IMPORTED_MODULE_3__["VinSummaryDetailsComponent"],
        data: {
            // data will be fetched from the respective paraMap and appended at the appropiate place
            breadcrumbs: [
                { title: 'Payments by Payment Method', route: '/paymentByPayment', append: '', urlParam: '' },
                { title: '', route: 'paymentByPayment/paymentDetails/:paymentReferenceNo', append: '', urlParam: 'paymentReferenceNo' },
                { title: '', route: '', append: '', urlParam: 'vin' }
            ]
        }
    },
    {
        path: 'paymentByIncentive',
        canActivate: [_payment_by_incentive_payment_by_incentive_guard__WEBPACK_IMPORTED_MODULE_13__["PaymentByIncentiveGuard"]],
        component: _payment_by_incentive_payment_by_incentive_component__WEBPACK_IMPORTED_MODULE_5__["PaymentByIncentiveComponent"]
    },
    {
        path: 'paymentByIncentive/incentiveDetails/:incentiveTypeName/:incentiveTypeNo',
        canActivate: [_incentive_details_incentive_details_guard__WEBPACK_IMPORTED_MODULE_20__["IncentiveDetailsGuard"]],
        component: _incentive_details_incentive_details_component__WEBPACK_IMPORTED_MODULE_18__["IncentiveDetailsComponent"],
        data: {
            // data will be fetched from the respective paraMap and appended at the appropiate place
            breadcrumbs: [
                { title: 'Payments by Incentive Type', route: '/paymentByIncentive', append: '', urlParam: '' },
                { title: '', route: '', append: '', urlParam: 'incentiveTypeName' }
            ]
        }
    },
    {
        path: 'paymentByIncentive/vinSummaryDetails/:vin/:incentiveTypeName/:incentiveTypeNo/:user/:rDate',
        canActivate: [_vin_summary_details_vin_summary_details_guard__WEBPACK_IMPORTED_MODULE_16__["VinSummaryDetailsGuard"]],
        component: _vin_summary_details_vin_summary_details_component__WEBPACK_IMPORTED_MODULE_3__["VinSummaryDetailsComponent"],
        data: {
            // data will be fetched from the respective paraMap and appended at the appropiate place
            breadcrumbs: [
                { title: 'Payments by Incentive Type', route: '/paymentByIncentive', append: '', urlParam: '' },
                { title: '', route: 'paymentByIncentive/incentiveDetails/:incentiveTypeName/:incentiveTypeNo', append: '', urlParam: 'incentiveTypeName' },
                { title: '', route: '', append: '', urlParam: 'vin' }
            ]
        }
    },
    {
        path: 'challenges',
        canActivate: [_challenges_challenges_guard__WEBPACK_IMPORTED_MODULE_14__["ChallengesGuard"]],
        component: _challenges_challenges_component__WEBPACK_IMPORTED_MODULE_6__["ChallengesComponent"]
    },
    {
        path: 'challenges/detail/:vin/:challengeNo',
        canActivate: [_challenges_detail_challenges_detail_guard__WEBPACK_IMPORTED_MODULE_22__["ChallengesDetailGuard"]],
        component: _challenges_detail_challenges_detail_component__WEBPACK_IMPORTED_MODULE_21__["ChallengesDetailComponent"],
        data: {
            // data will be fetched from the respective paraMap and appended at the appropiate place
            breadcrumbs: [
                { title: 'Challenges', route: '/challenges', append: '', urlParam: '' },
                { title: 'VIN ', route: '', append: '', urlParam: 'vin' }
            ]
        }
    },
    {
        path: 'vin-summary/vinSummaryChallenge/:vin/Challenge/:user/:incentiveTypeNo/:optionType/:iaId/:rDate',
        canActivate: [_challenges_detail_challenges_detail_guard__WEBPACK_IMPORTED_MODULE_22__["ChallengesDetailGuard"]],
        component: _challenges_detail_challenges_detail_component__WEBPACK_IMPORTED_MODULE_21__["ChallengesDetailComponent"],
        data: {
            // data will be fetched from the respective paraMap and appended at the appropiate place
            breadcrumbs: [
                { title: 'VIN Summary', route: '/vinSummary', append: '', urlParam: '' },
                { title: 'Details for ', route: 'vinSummary/vinSummaryDetails/:vin/:user/:rDate', append: '', urlParam: 'vin' },
                { title: 'Challenge', route: '', append: '', urlParam: '' }
            ]
        }
    },
    {
        path: 'paymentbypayment/paymentChallenge/:vin/:paymentReferenceNo/Challenge/:user/:incentiveTypeNo/:optionType/:iaId/:rDate',
        canActivate: [_challenges_detail_challenges_detail_guard__WEBPACK_IMPORTED_MODULE_22__["ChallengesDetailGuard"]],
        component: _challenges_detail_challenges_detail_component__WEBPACK_IMPORTED_MODULE_21__["ChallengesDetailComponent"],
        data: {
            // data will be fetched from the respective paraMap and appended at the appropiate place
            breadcrumbs: [
                { title: 'Payments by Payment Method', route: '/paymentByPayment', append: '', urlParam: '' },
                { title: '', route: 'paymentByPayment/paymentDetails/:paymentReferenceNo', append: '', urlParam: 'paymentReferenceNo' },
                { title: '', route: 'paymentByPayment/vinSummaryDetails/:vin/:paymentReferenceNo/:user/:rDate', append: '', urlParam: 'vin' },
                { title: 'Challenge', route: '', append: '', urlParam: '' }
            ]
        }
    },
    {
        path: 'paymentbyincentive/incentiveChallenge/:vin/:incentiveTypeName/:incentiveTypeNo/Challenge/:user/:incentiveTypeNo/:optionType/:iaId/:rDate',
        canActivate: [_challenges_detail_challenges_detail_guard__WEBPACK_IMPORTED_MODULE_22__["ChallengesDetailGuard"]],
        component: _challenges_detail_challenges_detail_component__WEBPACK_IMPORTED_MODULE_21__["ChallengesDetailComponent"],
        data: {
            // data will be fetched from the respective paraMap and appended at the appropiate place
            breadcrumbs: [
                { title: 'Payments by Incentive Type', route: '/paymentByIncentive', append: '', urlParam: '' },
                { title: '', route: 'paymentByIncentive/incentiveDetails/:incentiveTypeName/:incentiveTypeNo', append: '', urlParam: 'incentiveTypeName' },
                { title: '', route: 'paymentByIncentive/vinSummaryDetails/:vin/:incentiveTypeName/:incentiveTypeNo/:user/:rDate', append: '', urlParam: 'vin' },
                { title: 'Challenge', route: '', append: '', urlParam: '' }
            ]
        }
    },
    {
        path: 'dealReviews',
        canActivate: [_deal_reviews_deal_reviews_guard__WEBPACK_IMPORTED_MODULE_15__["DealReviewsGuard"]],
        component: _deal_reviews_deal_reviews_component__WEBPACK_IMPORTED_MODULE_7__["DealReviewsComponent"]
    },
    {
        path: 'dealReviews/detail/:vin/:dealReviewNo',
        canActivate: [_deal_review_details_deal_review_details_guard__WEBPACK_IMPORTED_MODULE_24__["DealReviewDetailsGuard"]],
        component: _deal_review_details_deal_review_details_component__WEBPACK_IMPORTED_MODULE_23__["DealReviewDetailsComponent"],
        data: {
            // data will be fetched from the respective paraMap and appended at the appropiate place
            breadcrumbs: [
                { title: 'Deal Reviews', route: '/dealReviews', append: '', urlParam: '' },
                { title: 'VIN ', route: '', append: '', urlParam: 'vin' }
            ]
        }
    },
    {
        path: 'vinSummary/vinSummaryDetails/:vin/:user/:rDate',
        canActivate: [_vin_summary_details_vin_summary_details_guard__WEBPACK_IMPORTED_MODULE_16__["VinSummaryDetailsGuard"]],
        component: _vin_summary_details_vin_summary_details_component__WEBPACK_IMPORTED_MODULE_3__["VinSummaryDetailsComponent"],
        data: {
            // data will be fetched from the respective paraMap and appended at the appropiate place
            breadcrumbs: [
                { title: 'VIN Summary', route: '/vinSummary', append: '', urlParam: '' },
                { title: "Details for VIN ", route: '', append: '', urlParam: 'vin' }
            ]
        }
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'help',
        canActivate: [_help_help_guard__WEBPACK_IMPORTED_MODULE_25__["HelpGuard"]],
        component: _help_help_component__WEBPACK_IMPORTED_MODULE_26__["HelpComponent"]
    }
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card-package mat-elevation-z8 padder-v-none\">\r\n  <app-header></app-header>\r\n  <router-outlet></router-outlet>\r\n </mat-card>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-package {\n  height: 100%; }\n\na {\n  text-decoration: none; }\n\n.menu-alert-icon {\n  height: 16px;\n  width: 16px;\n  font-size: 16px;\n  margin-top: -5px;\n  margin-left: 5px; }\n\na.help {\n  margin-left: 485px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXEZTRFxccG9saWN5LW1hbmFnZW1lbnQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1wYWNrYWdle1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbmF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLm1lbnUtYWxlcnQtaWNvbiB7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbmEuaGVscCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNDg1cHg7XHJcbn0iXX0= */"

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _isp_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isp-app.service */ "./src/app/isp-app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_isp_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/isp-app-config.service */ "./src/app/shared/services/isp-app-config.service.ts");






var AppComponent = /** @class */ (function () {
    function AppComponent(ispAppConfigService, ispService, renderer, router) {
        this.ispAppConfigService = ispAppConfigService;
        this.ispService = ispService;
        this.renderer = renderer;
        this.router = router;
        this.title = 'isp-app';
        this.selection = 1;
        this.showChlngeIcon = false;
        this.showDealIcon = false;
        this.toogleMenuCondition = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // initial load of header information.
        this.getHeaderDetails();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(60000).subscribe(function (res) {
            _this.ispAppConfigService.load();
            // load of header information on regular interval.
            _this.getHeaderDetails();
        });
        this.router.events.subscribe(function (event) {
            // retains the appropriate nav link highlight on page refresh in any page based on the current route
            var path = window.location.pathname.split('/')[1];
            if (window.location.hostname != 'localhost') {
                path = window.location.pathname.split('/')[2];
            }
            if (path == 'vinSummary' || path == 'login') {
                _this.selection = 1;
            }
            else if (path.includes('paymentBy')) {
                _this.selection = 2;
            }
            else if (path == 'challenges') {
                _this.selection = 3;
            }
            else if (path == 'dealReviews') {
                _this.selection = 4;
            }
            else if (path == 'help') {
                _this.selection = 5;
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]) {
                if (_this.previousUrl) {
                    _this.previousUrl.forEach(function (bodyClass) {
                        _this.renderer.removeClass(document.body, bodyClass);
                    });
                }
                var currentUrlSlug = event.url.slice(1).split('/');
                if (currentUrlSlug) {
                    currentUrlSlug.slice(0, 2).forEach(function (bodyClass) {
                        if (bodyClass !== "") {
                            _this.renderer.addClass(document.body, bodyClass);
                        }
                    });
                }
                _this.previousUrl = currentUrlSlug.slice(0, 2);
            }
        });
    };
    AppComponent.prototype.getHeaderDetails = function () {
        this.headerObj = this.ispAppConfigService.getHeaderDetails();
        // this.showChlngeIcon = this.headerObj.challengeNew > 0 ? true : false;
        if (this.headerObj.challengeNew > 0) {
            this.showChlngeIcon = true;
        }
        else {
            this.showChlngeIcon = false;
        }
        // this.showDealIcon = this.headerObj.dealReviewNew > 0 ? true : false;
        if (this.headerObj.dealReviewNew > 0) {
            this.showDealIcon = true;
        }
        else {
            this.showDealIcon = false;
        }
    };
    AppComponent.prototype.resetPreloader = function (option) {
        switch (option) {
            // 1 corrosponds to VIN Summary Tab
            case 1:
                this.ispService.setVSSelectedData(null);
                this.ispService.setselectedVIN(null);
                break;
            // 2 corrosponds to Payments By Payment Tab
            case 2:
                this.ispService.setPaymentSelectedData(null);
                this.ispService.setselectedPayRefNo(null);
                break;
            // 3 corrosponds to Payments By Incentive Tab
            case 3:
                this.ispService.setIncentiveSelectedData(null);
                break;
            // 4 corrosponds to Challenges Tab
            case 4:
                this.ispService.setChallengeSelectedData(null);
                this.ispService.setChallengeSelectedVIN(null);
                break;
            // 5 corrosponds to Deal Reviews Tab
            case 5:
                this.ispService.setDealReviewSelectedData(null);
                this.ispService.setDealReviewSelectedVIN(null);
                break;
        }
        // reset constrains from the data grids
        this.ispService.setFilterSortModel(null, null);
    };
    AppComponent.prototype.selectMenu = function (option) {
        this.selection = option;
    };
    AppComponent.prototype.toogleMenu = function () {
        if (this.toogleMenuCondition) {
            this.toogleMenuCondition = false;
        }
        else {
            this.toogleMenuCondition = true;
        }
    };
    AppComponent.prototype.ngOnDestroy = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_isp_app_config_service__WEBPACK_IMPORTED_MODULE_5__["ISPAppConfigService"], _isp_app_service__WEBPACK_IMPORTED_MODULE_3__["IspAppService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, configServiceFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configServiceFactory", function() { return configServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_services_isp_app_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/isp-app-config.service */ "./src/app/shared/services/isp-app-config.service.ts");
/* harmony import */ var _shared_services_isp_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/services/isp-http.service */ "./src/app/shared/services/isp-http.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _shared_message_handler_message_handler_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/message-handler/message-handler.component */ "./src/app/shared/message-handler/message-handler.component.ts");
/* harmony import */ var _shared_message_handler_message_handler_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/message-handler/message-handler.service */ "./src/app/shared/message-handler/message-handler.service.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _shared_grid_filter_custom_text_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/grid/filter/custom-text-filter.component */ "./src/app/shared/grid/filter/custom-text-filter.component.ts");
/* harmony import */ var _shared_loader_ip_loader_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/loader/ip-loader.component */ "./src/app/shared/loader/ip-loader.component.ts");
/* harmony import */ var _shared_loader_ip_loader_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/loader/ip-loader.service */ "./src/app/shared/loader/ip-loader.service.ts");
/* harmony import */ var _shared_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/services/data-sharing.service */ "./src/app/shared/services/data-sharing.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _vin_summary_vin_summary_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./vin-summary/vin-summary.component */ "./src/app/vin-summary/vin-summary.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _payment_by_payment_payment_by_payment_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./payment-by-payment/payment-by-payment.component */ "./src/app/payment-by-payment/payment-by-payment.component.ts");
/* harmony import */ var _payment_by_incentive_payment_by_incentive_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./payment-by-incentive/payment-by-incentive.component */ "./src/app/payment-by-incentive/payment-by-incentive.component.ts");
/* harmony import */ var _challenges_challenges_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./challenges/challenges.component */ "./src/app/challenges/challenges.component.ts");
/* harmony import */ var _deal_reviews_deal_reviews_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./deal-reviews/deal-reviews.component */ "./src/app/deal-reviews/deal-reviews.component.ts");
/* harmony import */ var _vin_summary_details_vin_summary_details_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./vin-summary-details/vin-summary-details.component */ "./src/app/vin-summary-details/vin-summary-details.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./shared/breadcrumb/breadcrumb.component */ "./src/app/shared/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _shared_grid_filter_custom_drop_down_filter_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./shared/grid/filter/custom-drop-down-filter.component */ "./src/app/shared/grid/filter/custom-drop-down-filter.component.ts");
/* harmony import */ var _shared_grid_filter_custom_date_filter_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./shared/grid/filter/custom-date-filter.component */ "./src/app/shared/grid/filter/custom-date-filter.component.ts");
/* harmony import */ var _shared_grid_page_navigate_cell_renderer_page_navigate_cell_renderer_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./shared/grid/page-navigate-cell-renderer/page-navigate-cell-renderer.component */ "./src/app/shared/grid/page-navigate-cell-renderer/page-navigate-cell-renderer.component.ts");
/* harmony import */ var _shared_services_print_data_grid_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./shared/services/print-data-grid.service */ "./src/app/shared/services/print-data-grid.service.ts");
/* harmony import */ var _payment_details_payment_details_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./payment-details/payment-details.component */ "./src/app/payment-details/payment-details.component.ts");
/* harmony import */ var _incentive_details_incentive_details_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./incentive-details/incentive-details.component */ "./src/app/incentive-details/incentive-details.component.ts");
/* harmony import */ var _challenges_detail_challenges_detail_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./challenges-detail/challenges-detail.component */ "./src/app/challenges-detail/challenges-detail.component.ts");
/* harmony import */ var _deal_review_details_deal_review_details_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./deal-review-details/deal-review-details.component */ "./src/app/deal-review-details/deal-review-details.component.ts");
/* harmony import */ var _shared_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./shared/confirm-modal/confirm-modal.component */ "./src/app/shared/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _shared_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./shared/confirm-modal/confirm-modal.service */ "./src/app/shared/confirm-modal/confirm-modal.service.ts");
/* harmony import */ var _shared_grid_replace_zero_with_empty_cell_renderer_replace_zero_with_empty_cell_renderer_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./shared/grid/replace-zero-with-empty-cell-renderer/replace-zero-with-empty-cell-renderer.component */ "./src/app/shared/grid/replace-zero-with-empty-cell-renderer/replace-zero-with-empty-cell-renderer.component.ts");
/* harmony import */ var _material_extended_mde__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @material-extended/mde */ "./node_modules/@material-extended/mde/fesm5/material-extended-mde.js");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");


























































function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
function configServiceFactory(ispAppConfig, loader) {
    return function () { return ispAppConfig.load(); };
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_41__["LoginComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_35__["FooterComponent"],
                _shared_loader_ip_loader_component__WEBPACK_IMPORTED_MODULE_16__["ipLoaderComponent"],
                _shared_message_handler_message_handler_component__WEBPACK_IMPORTED_MODULE_12__["MessageHandlerComponent"],
                _shared_grid_filter_custom_text_filter_component__WEBPACK_IMPORTED_MODULE_15__["CustomTextFilterComponent"],
                _vin_summary_vin_summary_component__WEBPACK_IMPORTED_MODULE_34__["VinSummaryComponent"],
                _payment_by_payment_payment_by_payment_component__WEBPACK_IMPORTED_MODULE_36__["PaymentByPaymentComponent"],
                _payment_by_incentive_payment_by_incentive_component__WEBPACK_IMPORTED_MODULE_37__["PaymentByIncentiveComponent"],
                _challenges_challenges_component__WEBPACK_IMPORTED_MODULE_38__["ChallengesComponent"],
                _challenges_detail_challenges_detail_component__WEBPACK_IMPORTED_MODULE_49__["ChallengesDetailComponent"],
                _deal_reviews_deal_reviews_component__WEBPACK_IMPORTED_MODULE_39__["DealReviewsComponent"],
                _vin_summary_details_vin_summary_details_component__WEBPACK_IMPORTED_MODULE_40__["VinSummaryDetailsComponent"],
                _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_42__["BreadcrumbComponent"],
                _shared_grid_filter_custom_drop_down_filter_component__WEBPACK_IMPORTED_MODULE_43__["CustomDropDownFilterComponent"],
                _shared_grid_filter_custom_date_filter_component__WEBPACK_IMPORTED_MODULE_44__["CustomDateFilterComponent"],
                _shared_grid_page_navigate_cell_renderer_page_navigate_cell_renderer_component__WEBPACK_IMPORTED_MODULE_45__["PageNavigateCellRendererComponent"],
                _payment_details_payment_details_component__WEBPACK_IMPORTED_MODULE_47__["PaymentDetailsComponent"],
                _incentive_details_incentive_details_component__WEBPACK_IMPORTED_MODULE_48__["IncentiveDetailsComponent"],
                _deal_review_details_deal_review_details_component__WEBPACK_IMPORTED_MODULE_50__["DealReviewDetailsComponent"],
                _shared_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_51__["ConfirmModalComponent"],
                _shared_grid_replace_zero_with_empty_cell_renderer_replace_zero_with_empty_cell_renderer_component__WEBPACK_IMPORTED_MODULE_53__["ReplaceZeroWithEmptyCellRendererComponent"],
                _help_help_component__WEBPACK_IMPORTED_MODULE_55__["HelpComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_56__["AboutUsComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_57__["ContactUsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_14__["AgGridModule"].withComponents([_shared_grid_filter_custom_text_filter_component__WEBPACK_IMPORTED_MODULE_15__["CustomTextFilterComponent"], _shared_grid_filter_custom_drop_down_filter_component__WEBPACK_IMPORTED_MODULE_43__["CustomDropDownFilterComponent"], _shared_grid_filter_custom_date_filter_component__WEBPACK_IMPORTED_MODULE_44__["CustomDateFilterComponent"], _shared_grid_page_navigate_cell_renderer_page_navigate_cell_renderer_component__WEBPACK_IMPORTED_MODULE_45__["PageNavigateCellRendererComponent"], _shared_grid_replace_zero_with_empty_cell_renderer_replace_zero_with_empty_cell_renderer_component__WEBPACK_IMPORTED_MODULE_53__["ReplaceZeroWithEmptyCellRendererComponent"]]),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__["MatRadioModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatNativeDateModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__["MatDividerModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_29__["MatButtonModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__["MatTooltipModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_33__["MatDialogModule"],
                _material_extended_mde__WEBPACK_IMPORTED_MODULE_54__["MdePopoverModule"]
            ],
            providers: [
                _shared_services_isp_app_config_service__WEBPACK_IMPORTED_MODULE_8__["ISPAppConfigService"],
                _shared_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_18__["DataSharingService"],
                _shared_services_isp_http_service__WEBPACK_IMPORTED_MODULE_9__["IspHttpService"],
                _shared_loader_ip_loader_service__WEBPACK_IMPORTED_MODULE_17__["LoaderService"],
                _shared_services_print_data_grid_service__WEBPACK_IMPORTED_MODULE_46__["PrintDataGridService"],
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"], useFactory: configServiceFactory, deps: [_shared_services_isp_app_config_service__WEBPACK_IMPORTED_MODULE_8__["ISPAppConfigService"], _shared_loader_ip_loader_service__WEBPACK_IMPORTED_MODULE_17__["LoaderService"]], multi: true },
                _shared_message_handler_message_handler_service__WEBPACK_IMPORTED_MODULE_13__["MessageService"], _shared_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_52__["ConfirmModalService"]
            ],
            entryComponents: [
                _shared_grid_filter_custom_text_filter_component__WEBPACK_IMPORTED_MODULE_15__["CustomTextFilterComponent"], _shared_grid_filter_custom_drop_down_filter_component__WEBPACK_IMPORTED_MODULE_43__["CustomDropDownFilterComponent"], _shared_grid_filter_custom_date_filter_component__WEBPACK_IMPORTED_MODULE_44__["CustomDateFilterComponent"], _shared_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_51__["ConfirmModalComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/challenges-detail/challenges-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/challenges-detail/challenges-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-message-handler></app-message-handler>\r\n<app-breadcrumb></app-breadcrumb>\r\n<div class=\"container-fluid mt-2 details-page\">\r\n  <mat-card style=\"background-color:#f5f5f5;\">\r\n    <mat-card-header>\r\n      <mat-card-title>\r\n        <label class=\"font-weight-bold\">{{'labels.Challenge_No'|translate}} {{challengeDetails.challengeNo}}</label>\r\n      </mat-card-title>\r\n      <span class=\"space-away\"></span>\r\n      <mat-icon matTooltip=\"Print\" class=\"ip-mat-icon\" (click)=\"printDetails()\">local_printshop</mat-icon>\r\n    </mat-card-header>\r\n    <mat-divider></mat-divider>\r\n    <mat-card-content>\r\n      <div class=\"row mt-2 mx-0\">\r\n        <div class=\"col-lg-2 col-md-6 col-sm-12 px-1 col-print-6\">\r\n          <div class=\"row ml-1 mx-0\">\r\n            <div class=\"col-6 my-1 px-1\"><strong>{{'labels.Model_No'|translate}} </strong></div>\r\n            <div class=\"col-6 my-1 px-1\">{{challengeDetails.modelNo}}</div>\r\n            <div class=\"col-6 my-1 px-1\"><strong>{{'labels.Serial_No'|translate}}.</strong></div>\r\n            <div class=\"col-6 my-1 px-1\">{{challengeDetails.seriealNo}}</div>\r\n            <div class=\"col-6 my-1 px-1\"><strong>{{'labels.Model_Year'|translate}}.</strong></div>\r\n            <div class=\"col-6 my-1 px-1\">{{challengeDetails.modelyear}}</div>\r\n            <div class=\"col-6 my-1 px-1\"><strong>{{'labels.Series'|translate}} </strong></div>\r\n            <div class=\"col-6 my-1 px-1\">{{challengeDetails.series}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-2 col-md-6 col-sm-12 px-1 col-print-6\">\r\n          <div class=\"row ml-1 mx-0\">\r\n            <div class=\"col-6 my-1 px-1\"><strong>{{'labels.Customer_Name'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1 px-1\">{{challengeDetails.customerName}}</div>\r\n            <div class=\"col-6 my-1 px-1\"><strong>{{'labels.Retail_Date'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1 px-1\">{{challengeDetails.retailDate}}</div>\r\n            <div class=\"col-6 my-1 px-1\"><strong>{{'labels.RDR_Date'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1 px-1\">{{challengeDetails.rdrDate}}</div>\r\n            <div class=\"col-6 my-1 px-1\"><strong>{{'labels.Type_Sales_Code'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1 px-1\">{{challengeDetails.typeSalesCode}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-2 col-md-6 col-sm-12 px-1 col-print-6\">\r\n          <div class=\"row ml-1 mx-0\">\r\n            <div class=\"col-6 my-1 px-1\"><strong>{{'labels.Incentive_Category'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1 px-1\">{{challengeDetails.incentiveCategory}}</div>\r\n            <div class=\"col-6 my-1 px-1\"><strong>{{'labels.Incentive_Type'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1 px-1\">{{challengeDetails.optionType}}</div>\r\n            <div class=\"col-6 my-1 px-1\"><strong>{{'labels.Incentive_Type_Name'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1 px-1\">{{challengeDetails.incentiveTypeName}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-6 col-sm-12 px-1 col-print-6\">\r\n          <div class=\"row ml-1 mx-0\">\r\n            <div class=\"col-6 my-1 px-1\"><strong>{{'labels.Incentive_Type_Amt'|translate}}</strong></div>\r\n            <section class=\"col-6 my-1 px-1\"><span *ngIf=\"challengeDetails.incentiveTypeAmount\">$</span>\r\n              <div style=\"display: inline\">\r\n                {{challengeDetails.incentiveTypeAmount}}\r\n              </div>\r\n            </section>\r\n            <div class=\"col-6 my-1 px-1\"><strong>{{'labels.Challenge_Status'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1 px-1\">{{challengeDetails.challengeStatus}}</div>\r\n            <div class=\"col-6 my-1 px-1\"><strong>{{'labels.Challenge_Submit_Date'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1 px-1\">{{chlgSubmitDate | date : 'MM/dd/yyyy HH:mm' }}</div>\r\n            <div class=\"col-6 my-1 px-1\"><strong>{{'labels.Challenge_Last_Update_Date'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1 px-1\">{{ chlglastUpdateDate | date : 'MM/dd/yyyy HH:mm' }}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-6 col-sm-12 px-1 col-print-6\">\r\n          <div class=\"row ml-1 mx-0\">\r\n            <div class=\"col-6 my-1 px-1\"><strong>{{'labels.Challenge_Disposition_Date'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1 px-1\">{{ chlgDisPosDate | date : 'MM/dd/yyyy HH:mm' }}</div>\r\n            <ng-container *ngIf=\"showDisposition\">\r\n              <div class=\"col-6 my-1 px-1\"><strong>{{'labels.Challenge_Disposition_Reason'|translate}}</strong></div>\r\n              <div class=\"col-6 my-1 px-1\">{{challengeDetails.dispositionReason}}</div>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <mat-divider></mat-divider>\r\n      <hr class=\"d-none d-print-block my-0\">\r\n      <form [formGroup]=\"challengeDetForm\" class=\"bg-white pt-1 rounded-bottom\">\r\n        <div class=\"row mt-3\">\r\n          <div class=\"col-lg-4 col-md-12 col-sm-12 col-print-12\">\r\n            <div class=\"row ml-1\">\r\n              <div class=\"col-4 my-1 px-2\"><strong>{{'labels.Contact_Name'|translate}}<span\r\n                    style=\"color:red;padding-left:4px;\">*</span>\r\n                </strong></div>\r\n              <div class=\"col-6 d-none d-print-block\">{{challengeDetForm.controls['contactname'].value}}</div>\r\n              <mat-form-field appearance=\"outline\" class=\"col-6\">\r\n                <input matInput id=\"contactname\" maxlength=\"50\" formControlName=\"contactname\" autocomplete=\"off\"\r\n                  [readonly]=\"!isSubmitPending\">\r\n                <mat-error *ngIf=\"challengeDetForm.controls['contactname'].errors?.required\">\r\n                  {{'errormsg.Mandatory'|translate}}\r\n                </mat-error>\r\n              </mat-form-field>\r\n              <div class=\"col-4 my-1 px-2\"><strong>{{'labels.Contact_E-mail'|translate}}<span\r\n                    style=\"color:red;padding-left:4px;\">*</span>\r\n                </strong></div>\r\n              <div class=\"col-6 d-none d-print-block\">{{challengeDetForm.controls['contactmail'].value}}</div>\r\n              <mat-form-field appearance=\"outline\" class=\"col-6\">\r\n                <input matInput id=\"contactmail\" maxlength=\"50\" formControlName=\"contactmail\" autocomplete=\"off\"\r\n                  [readonly]=\"!isSubmitPending\">\r\n                <mat-error\r\n                  *ngIf=\"challengeDetForm.controls['contactmail'].errors?.required && !challengeDetForm.controls['contactmail'].errors?.email\">\r\n                  {{'errormsg.Mandatory'|translate}}\r\n                </mat-error>\r\n                <mat-error *ngIf=\"challengeDetForm.controls['contactmail'].errors?.email\">\r\n                  {{'errormsg.E-mail_validation'|translate}}\r\n                </mat-error>\r\n              </mat-form-field>\r\n              <div class=\"col-4 my-1 px-2\"><strong>{{'labels.Contact_Phone_No'|translate}}<span\r\n                    style=\"color:red;padding-left:4px;\">*</span>\r\n                </strong></div>\r\n              <div class=\"col-4 d-none d-print-block\">{{challengeDetForm.controls['contactphone'].value}}</div>\r\n              <mat-form-field appearance=\"outline\" class=\"col-6\">\r\n                <input matInput id=\"challengeDetForm\" maxlength=\"12\" (keypress)=\"addHyphen($event)\"\r\n                  formControlName=\"contactphone\" autocomplete=\"off\" [readonly]=\"!isSubmitPending\">\r\n                <mat-error\r\n                  *ngIf=\"challengeDetForm.controls['contactphone'].errors?.required && !challengeDetForm.controls['contactphone'].errors?.pattern\">\r\n                  {{'errormsg.Mandatory'|translate}}\r\n                </mat-error>\r\n                <mat-error *ngIf=\"challengeDetForm.controls['contactphone'].errors?.pattern\">\r\n                  {{'errormsg.Phone_No_Validation'|translate}}\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4 col-md-12 col-sm-12\">\r\n            <div class=\"row ml-1\">\r\n              <div class=\"col-4 my-1 px-2\"><strong>{{'labels.Challenge_Amount'|translate}}</strong></div>\r\n              <div class=\"col-6 d-none d-print-block pt-1\" *ngIf=\"challengeDetails.challengeDto\">$\r\n                {{challengeDetails.challengeDto.chlngAmt}}</div>\r\n              <div class=\"col-6 my-1 px-1 d-print-none\">\r\n                <input\r\n                  *ngIf=\"challengeDetails.challengeDto ? challengeDetails.challengeDto.chlngAmt ? true : false : false\"\r\n                  class=\"space1\" [value]=\"'$ '+challengeDetails.challengeDto.chlngAmt\" readonly>\r\n                <input\r\n                  *ngIf=\"challengeDetails.challengeDto ? challengeDetails.challengeDto.chlngAmt ? false : true : true\"\r\n                  class=\"space1\" value=\"$\" readonly>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n<div>\r\n  <div class=\"row mt-3\">\r\n    <div class=\"col-md-7 col-print-12\">\r\n      <mat-card style=\"height:360px;overflow-y: auto;\">\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            <label class=\"font-weight-bold\">{{'labels.Documents_Required'|translate}}</label>\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n        <table>\r\n          <tr>\r\n            <th>{{'labels.Document_Description'|translate}}</th>\r\n            <th>{{'labels.File_Name'|translate}}</th>\r\n            <th>{{'labels.Uploaded_On'|translate}}</th>\r\n            <th>{{'labels.File_Actions'|translate}}</th>\r\n          </tr>\r\n          <ng-container *ngFor=\"let doc of challengeDetails.requierdDocumentsDtoList ; index as i; \">\r\n            <tr>\r\n              <td>{{doc.documentDescription}} </td>\r\n              <td> <a href=\"JavaScript:void(0);\"\r\n                  (click)=\"getDocument(doc?.fileName, doc?.attatchmentId)\">{{doc.fileName}}</a></td>\r\n              <td>{{doc.uploadedOn | date : 'MM/dd/yyyy HH:mm'}}\r\n              </td>\r\n              <td *ngIf='doc?.fileName === null'>\r\n                <input #attachmentList (click)=\"attachmentList.value = null\" type=\"file\"\r\n                  (change)=\"uploadDocument($event, i)\" value=\"\" id=\"attachmentList\" name=\"attachmentList\"\r\n                  style=\"width: 300px;display:none;\">\r\n                <span (click)=\"attachmentList.click()\" class=\"fileUpload\" style=\"cursor: pointer;\">\r\n                  <mat-icon matTooltip=\"Add\" class=\"ip-mat-icon\">add</mat-icon><span\r\n                    style=\"vertical-align: 5px;\">{{'labels.Attach_File'|translate}}</span>\r\n                </span>\r\n              </td>\r\n              <td *ngIf='doc?.fileName !== null && isSubmitPending'>\r\n                <span (click)=\"deleteFile(i)\" class=\"fileUpload\" style=\"cursor: pointer;\">\r\n                  <mat-icon matTooltip=\"Delete\" class=\"ip-mat-icon\">delete</mat-icon> <span\r\n                    style=\"vertical-align: 5px;\">{{'labels.Delete_Attachment'|translate}}</span>\r\n                </span>\r\n              </td>\r\n              <td *ngIf='doc?.fileName !== null && !isSubmitPending'>\r\n                <mat-icon matTooltip=\"Delete\" class=\"ip-mat-icon\" style=\"cursor:context-menu !important;\">delete\r\n                </mat-icon>\r\n                <span\r\n                  style=\"vertical-align: 5px; opacity: 0.5; cursor:context-menu !important;\">{{'labels.Delete_Attachment'|translate}}</span>\r\n              </td>\r\n            </tr>\r\n          </ng-container>\r\n\r\n        </table>\r\n        <!-- IPLUS-9053-->\r\n        <span *ngIf=isSubmitPending (click)=\"addOtherDocument()\" style=\"cursor: pointer;\"><img style= \"width:25px;\" src=\"assets/images/open-upload-other-button.png\" alt=\"Open upload Add Button\" class=\"\"><strong> Add additional documentation</strong></span>\r\n        <span *ngIf=!isSubmitPending style=\"opacity: 0.5; cursor:context-menu !important;\"><img style= \"width:25px;\" src=\"assets/images/open-upload-other-button.png\" alt=\"Open upload Add Button\" class=\"\"><strong> Add additional documentation</strong></span>\r\n        <!-- IPLUS-9053-->\r\n        <p style=\"padding: 5px 0px;margin: 0;\">\r\n          <span style=\"color:#ff0000;padding-left:4px;\">*</span><span\r\n            style=\"padding-left: 2px;\">{{'labels.Mandatory_Documents'|translate}}</span>\r\n        </p>\r\n        <p style=\"padding: 5px 0px;margin: 0;\">\r\n          <span style=\"color:#ff0000;padding-left:4px;\">*</span><span\r\n            style=\"padding-left: 2px;\">{{'labels.Valid_Documents_Type'|translate}}</span>\r\n        </p>\r\n        <p style=\"padding: 5px 0px;margin: 0;\" *ngIf=\"militaryFlag\">\r\n          <span style=\"color:#ff0000;padding-left:4px;\">**</span>\r\n          <span style=\"color: #C40A0A;padding-left: 2px;\">{{'errormsg.Upload_File_Validation'|translate}}</span>\r\n        </p>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-md-5 col-print-12\">\r\n      <mat-card style=\"height:360px;\">\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            <label class=\"font-weight-bold\">{{'labels.Comment_Log'|translate}}</label>\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n        <mat-divider></mat-divider>\r\n        <mat-card-content>\r\n          <span style=\"float: left;\" class=\"mt-2 ml-2 print-hide\"\r\n            name=\"commentsTxt\">{{'labels.Enter_Comments'|translate}}</span>\r\n          <span style=\"float: right;\" class=\"mt-2 mr-2 print-hide\">{{'labels.Max_Char_Length'|translate}}</span>\r\n          <textarea maxlength=\"1000\" class=\"text mt-2 ml-2 print-hide\" [disabled]=\"!isSubmitPending\"\r\n            [(ngModel)]=\"challengeDetails.challengeDto.comments\"></textarea>\r\n          <table class=\"mt-2\">\r\n            <tr>\r\n              <th>{{'labels.Date'|translate}}</th>\r\n              <th>{{'labels.Prior_Comments'|translate}}</th>\r\n              <th>{{'labels.Status'|translate}}</th>\r\n              <th>{{'labels.Username'|translate}}</th>\r\n            </tr>\r\n            <ng-container *ngFor=\"let cmt of challengeDetails.challengeCommentDtoList\">\r\n              <tr>\r\n                <td>{{cmt.createDt}}</td>\r\n                <td>{{cmt.commentsTxt}}</td>\r\n                <td>{{cmt.chalngStatus}}</td>\r\n                <td>{{cmt.createUserId}}</td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<mat-toolbar class=\"buttons-panel print-hide\">\r\n  <mat-toolbar-row>\r\n    <span class=\"space-away\"></span>\r\n    <button id=\"saveBtn\" mat-raised-button matTooltip=\"Save Record\" [disabled]=\"!isSubmitPending\" (click)=\"Onsave()\">\r\n      <span class=\"d-none d-md-inline\">{{'button.Save'|translate}}</span>\r\n    </button>\r\n    <button id=\"deleteBtn\" class=\"ml-2 text-danger\" mat-raised-button matTooltip=\"Delete Record\"\r\n      [disabled]=\"!isSubmitPending || returnedDisable\" (click)=\"getDeleteConfirmation()\">\r\n      <span class=\"d-none d-md-inline\">{{'button.Delete'|translate}}</span>\r\n    </button>\r\n    <button id=\"submitBtn\" class=\"iplus_Btn_Primary ml-2\" mat-raised-button matTooltip=\"Submit Record\"\r\n      [disabled]=\"!isSubmitPending\" (click)=\"submitRecords()\">\r\n      <span class=\"d-none d-md-inline\">{{'button.Submit'|translate}}</span>\r\n    </button>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/challenges-detail/challenges-detail.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/challenges-detail/challenges-detail.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  padding: 0;\n  border-radius: 4px; }\n\n.mat-card {\n  padding: 0px; }\n\n.mat-card * {\n  font-size: 12px; }\n\n.mat-card-header {\n  padding: 10px;\n  background-color: #efefef;\n  background-image: linear-gradient(to bottom, #efefef, #ffffff); }\n\n.mat-card-header .mat-card-title {\n  font-size: 12px;\n  margin: 0px; }\n\n.mat-card-header-text {\n  margin: 0px; }\n\n.text {\n  height: 62px;\n  width: 98%; }\n\nth {\n  border: 1px solid #dddddd;\n  padding: 5px; }\n\ntd {\n  border: 1px solid #dddddd;\n  padding: 2px; }\n\ntable {\n  border-collapse: collapse;\n  width: 100% !important;\n  border-bottom: 2px solid #ddd; }\n\n.space {\n  width: 207px;\n  padding: 3px; }\n\n.space1 {\n  width: 65px !important; }\n\n.move {\n  position: relative;\n  left: 300px; }\n\n::ng-deep.details-page .mat-form-field {\n  padding: 0px; }\n\n::ng-deep.details-page .mat-form-field-flex {\n  height: 30px !important; }\n\n::ng-deep.details-page .mat-form-field-appearance-outline .mat-form-field-infix {\n  padding: 0 5px 0 5px; }\n\n::ng-deep.mat-card-header-text {\n  margin-left: 0px !important; }\n\n::ng-deep.mat-card-header-text label {\n  margin-bottom: 0px !important; }\n\nmat-card {\n  border: 1px solid #c2c2c2 !important; }\n\n@media print {\n  @page {\n    size: portrait !important; }\n  ::ng-deep body.print-details {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    margin: auto;\n    zoom: 100%; }\n  .col-print-6 {\n    flex: 0 0 50% !important;\n    max-width: 50% !important; }\n  .col-print-12 {\n    flex: 0 0 100% !important;\n    max-width: 100% !important; }\n  mat-form-field,\n  .ip-mat-icon.mat-icon,\n  .print-hide {\n    display: none !important; }\n  mat-card {\n    margin-bottom: 10px; } }\n\n::ng-deep.print-details .mat-toolbar.buttons-panel {\n  bottom: 36px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbGxlbmdlcy1kZXRhaWwvQzpcXEZTRFxccG9saWN5LW1hbmFnZW1lbnQvc3JjXFxhcHBcXGNoYWxsZW5nZXMtZGV0YWlsXFxjaGFsbGVuZ2VzLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUt6Qiw4REFBOEQsRUFBQTs7QUFFaEU7RUFDRSxlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUViO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0UsWUFBWTtFQUNaLFVBQVUsRUFBQTs7QUFFWjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7O0FBRWQ7RUFDRSx5QkFBeUI7RUFDekIsWUFBWSxFQUFBOztBQUVkO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0Qiw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSxZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUVkO0VBQ0Usc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFFYjtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLG9CQUFvQixFQUFBOztBQUV0QjtFQUNFLDJCQUEyQixFQUFBOztBQUU3QjtFQUNFLDZCQUE2QixFQUFBOztBQUUvQjtFQUNFLG9DQUFvQyxFQUFBOztBQUV0QztFQUNFO0lBQ0UseUJBQXlCLEVBQUE7RUFFM0I7SUFDRSwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixVQUFVLEVBQUE7RUFFWjtJQUNFLHdCQUF3QjtJQUN4Qix5QkFBeUIsRUFBQTtFQUUzQjtJQUNFLHlCQUF5QjtJQUN6QiwwQkFBMEIsRUFBQTtFQUU1Qjs7O0lBR0Usd0JBQXdCLEVBQUE7RUFFMUI7SUFDRSxtQkFBbUIsRUFBQSxFQUNwQjs7QUFFSDtFQUNFLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2hhbGxlbmdlcy1kZXRhaWwvY2hhbGxlbmdlcy1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4ubWF0LWNhcmQge1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG4ubWF0LWNhcmQgKiB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5tYXQtY2FyZC1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNlZmVmZWYsICNmZmZmZmYpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2VmZWZlZiwgI2ZmZmZmZik7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgI2VmZWZlZiksIGNvbG9yLXN0b3AoMTAwJSwgI2ZmZmZmZikpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICNlZmVmZWYsICNmZmZmZmYpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNlZmVmZWYsICNmZmZmZmYpO1xyXG59XHJcbi5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG4udGV4dCB7XHJcbiAgaGVpZ2h0OiA2MnB4O1xyXG4gIHdpZHRoOiA5OCU7XHJcbn1cclxudGgge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbnRkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gIHBhZGRpbmc6IDJweDtcclxufVxyXG50YWJsZSB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4uc3BhY2Uge1xyXG4gIHdpZHRoOiAyMDdweDtcclxuICBwYWRkaW5nOiAzcHg7XHJcbn1cclxuLnNwYWNlMSB7XHJcbiAgd2lkdGg6IDY1cHggIWltcG9ydGFudDtcclxufVxyXG4ubW92ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDMwMHB4O1xyXG59XHJcbjo6bmctZGVlcC5kZXRhaWxzLXBhZ2UgLm1hdC1mb3JtLWZpZWxke1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG46Om5nLWRlZXAuZGV0YWlscy1wYWdlIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcclxuICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAuZGV0YWlscy1wYWdlIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICBwYWRkaW5nOiAwIDVweCAwIDVweDtcclxufVxyXG46Om5nLWRlZXAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAubWF0LWNhcmQtaGVhZGVyLXRleHQgbGFiZWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbm1hdC1jYXJkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYzJjMmMyICFpbXBvcnRhbnQ7XHJcbn1cclxuQG1lZGlhIHByaW50IHtcclxuICBAcGFnZSB7XHJcbiAgICBzaXplOiBwb3J0cmFpdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6Om5nLWRlZXAgYm9keS5wcmludC1kZXRhaWxzIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB6b29tOiAxMDAlO1xyXG4gIH1cclxuICAuY29sLXByaW50LTYge1xyXG4gICAgZmxleDogMCAwIDUwJSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNvbC1wcmludC0xMiB7XHJcbiAgICBmbGV4OiAwIDAgMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIG1hdC1mb3JtLWZpZWxkLFxyXG4gIC5pcC1tYXQtaWNvbi5tYXQtaWNvbixcclxuICAucHJpbnQtaGlkZSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIG1hdC1jYXJkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG59XHJcbjo6bmctZGVlcC5wcmludC1kZXRhaWxzIC5tYXQtdG9vbGJhci5idXR0b25zLXBhbmVsIHtcclxuICBib3R0b206IDM2cHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/challenges-detail/challenges-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/challenges-detail/challenges-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: ChallengesDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesDetailComponent", function() { return ChallengesDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_dataModels_challengeDetailsResponseHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dataModels/challengeDetailsResponseHeader */ "./src/app/shared/dataModels/challengeDetailsResponseHeader.ts");
/* harmony import */ var _isp_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../isp-app.service */ "./src/app/isp-app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_dataModels_challengeDetailsRequest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/dataModels/challengeDetailsRequest */ "./src/app/shared/dataModels/challengeDetailsRequest.ts");
/* harmony import */ var _shared_services_isp_app_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/isp-app-config.service */ "./src/app/shared/services/isp-app-config.service.ts");
/* harmony import */ var _shared_dataModels_createChallengeRequest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/dataModels/createChallengeRequest */ "./src/app/shared/dataModels/createChallengeRequest.ts");
/* harmony import */ var _shared_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/confirm-modal/confirm-modal.service */ "./src/app/shared/confirm-modal/confirm-modal.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_message_handler_message_handler_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/message-handler/message-handler.service */ "./src/app/shared/message-handler/message-handler.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _shared_services_print_data_grid_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/services/print-data-grid.service */ "./src/app/shared/services/print-data-grid.service.ts");
/* harmony import */ var _shared_services_user_info_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/services/user-info.service */ "./src/app/shared/services/user-info.service.ts");














var ChallengesDetailComponent = /** @class */ (function () {
    function ChallengesDetailComponent(fb, ispService, ispAppConfigService, route, confirmModalService, messageService, router, renderer, printService, userInfoService) {
        this.fb = fb;
        this.ispService = ispService;
        this.ispAppConfigService = ispAppConfigService;
        this.route = route;
        this.confirmModalService = confirmModalService;
        this.messageService = messageService;
        this.router = router;
        this.renderer = renderer;
        this.printService = printService;
        this.userInfoService = userInfoService;
        this.currentUrl = '';
        this.isSubmitPending = false;
        this.isReadOnly = false;
        this.docList = [];
        this.btnDisable = false;
        this.militaryFlag = true;
        this.headerObj = this.ispAppConfigService.getHeaderDetails();
        this.challengeDetails = new _shared_dataModels_challengeDetailsResponseHeader__WEBPACK_IMPORTED_MODULE_2__["ChallengeDetaisResultHeader"]();
        this.requestObject1 = new _shared_dataModels_challengeDetailsRequest__WEBPACK_IMPORTED_MODULE_5__["ChallengesDetailSearchRequest"]();
        this.createChlgRequest = new _shared_dataModels_createChallengeRequest__WEBPACK_IMPORTED_MODULE_7__["CreateChallengeDetailsRequest"]();
        this.emptyFile = new Blob([''], { type: 'application/octet-stream' });
    }
    ChallengesDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userInfoService.editAccess();
        this.renderer.addClass(document.body, 'print-details');
        this.viewForm();
        this.currentUrl = this.route.snapshot.url[0].path;
        this.setRequestchlg();
        this.setCreateChlgDetailRequest();
        if (this.currentUrl === 'vin-summary' || this.currentUrl === 'paymentbypayment' || this.currentUrl === 'paymentbyincentive') {
            this.Headersubscription = this.ispService.createChallengeDetails(this.createChlgRequest).subscribe(function (success) {
                _this.challengeDetails = success;
                _this.challengeDetails.challengeDto.chlngAmt = success.incentiveTypeAmount;
                _this.showDisposition = false;
                _this.returnedDisable = false;
                _this.isSubmitPending = !_this.isReadOnly ? (success.challengeStatus === '' || success.challengeStatus === null) : false;
                if (success.challengeSubmitDate !== null) {
                    _this.chlgSubmitDate = new Date(_this.challengeDetails.challengeSubmitDate);
                }
                if (success.lastUpdateDate !== null) {
                    _this.chlglastUpdateDate = new Date(_this.challengeDetails.lastUpdateDate);
                }
                if (success.dispositionDate !== null) {
                    _this.chlgDisPosDate = new Date(_this.challengeDetails.dispositionDate);
                }
                if (_this.militaryFlag = success.incentiveTypeName.toUpperCase() === 'MILITARY') {
                    _this.militaryFlag = true;
                }
                else {
                    _this.militaryFlag = false;
                }
                _this.setChallengeDto();
                // this.militaryFlag = success.incentiveTypeName.toUpperCase() === 'MILITARY' ? true : false;
                for (var i = 0; i < success.requierdDocumentsDtoList.length; i++) {
                    _this.docList[i] = _this.emptyFile;
                    _this.uploadedDate = new Date(success.requierdDocumentsDtoList[i].uploadedOn);
                }
            });
        }
        else {
            this.Headersubscription = this.ispService.chlgdetailsSearchForm(this.requestObject1).subscribe(function (success) {
                //success.requierdDocumentsDtoList = JSON.parse('[{"id":1,"dealRvwId":null,"optionId":null,"attatchmentId":null,"fileName":null,"optionTypes":null,"uploadedOn":null,"documentDescription":"Conusmer Cash Back Form","documentName":"Conusmer Cash Back Form","challengeId":null},{"id":3,"dealRvwId":null,"optionId":null,"attatchmentId":null,"fileName":null,"optionTypes":null,"uploadedOn":null,"documentDescription":"Application for Registration/MCO","documentName":"Application for Registration/MCO","challengeId":null},{"id":5,"dealRvwId":null,"optionId":null,"attatchmentId":null,"fileName":null,"optionTypes":null,"uploadedOn":null,"documentDescription":"Sales Agreement","documentName":"Sales Agreement","challengeId":null},{"id":2,"dealRvwId":null,"optionId":null,"attatchmentId":null,"fileName":null,"optionTypes":null,"uploadedOn":null,"documentDescription":"Lease Contract","documentName":"Lease Contract","challengeId":null},{"id":4,"dealRvwId":null,"optionId":null,"attatchmentId":null,"fileName":null,"optionTypes":null,"uploadedOn":null,"documentDescription":"Proof Of Prior Ownership","documentName":"Proof Of Prior Ownership","challengeId":null},{"id":6,"dealRvwId":null,"optionId":null,"attatchmentId":null,"fileName":null,"optionTypes":null,"uploadedOn":null,"documentDescription":"Proof of Insurance","documentName":"Proof of Insurance","challengeId":null},{"id":7,"dealRvwId":null,"optionId":null,"attatchmentId":null,"fileName":null,"optionTypes":null,"uploadedOn":null,"documentDescription":"Open","documentName":"Open","challengeId":null}]');
                _this.challengeDetails = success;
                _this.viewForm();
                if (_this.showDisposition = (success.challengeStatus.toUpperCase() === 'DENIED' || success.challengeStatus.toUpperCase() === 'RETURNED')) {
                    _this.showDisposition = true;
                }
                else {
                    _this.showDisposition = false;
                }
                _this.returnedDisable = (success.challengeStatus === 'Returned') ? true : false;
                // this.showDisposition = (success.challengeStatus.toUpperCase() === 'DENIED' || success.challengeStatus.toUpperCase() === 'RETURNED') ? true : false;
                _this.isSubmitPending = !_this.isReadOnly ? (success.challengeStatus === 'Returned' || success.challengeStatus === 'Pending Submit' || success.challengeStatus === 'new' || success.challengeStatus === '' || success.challengeStatus === null) : false;
                if (success.challengeSubmitDate !== null) {
                    _this.chlgSubmitDate = new Date(_this.challengeDetails.challengeSubmitDate);
                }
                if (success.lastUpdateDate !== null) {
                    _this.chlglastUpdateDate = new Date(_this.challengeDetails.lastUpdateDate);
                }
                if (success.dispositionDate !== null) {
                    _this.chlgDisPosDate = new Date(_this.challengeDetails.dispositionDate);
                }
                if (_this.militaryFlag = success.incentiveTypeName.toUpperCase() === 'MILITARY') {
                    _this.militaryFlag = true;
                }
                else {
                    _this.militaryFlag = false;
                }
                _this.setChallengeDto();
                // this.militaryFlag = success.incentiveTypeName.toUpperCase() === 'MILITARY' ? true : false;
                for (var i = 0; i < success.requierdDocumentsDtoList.length; i++) {
                    _this.docList[i] = _this.emptyFile;
                    _this.uploadedDate = new Date(success.requierdDocumentsDtoList[i].uploadedOn);
                }
            });
        }
    };
    ChallengesDetailComponent.prototype.setChallengeDto = function () {
        if (this.challengeDetails.challengeDto === null) {
            this.challengeDetails.challengeDto = new _shared_dataModels_challengeDetailsResponseHeader__WEBPACK_IMPORTED_MODULE_2__["ChallengeDto"]();
        }
    };
    ChallengesDetailComponent.prototype.viewForm = function () {
        if (this.challengeDetails.challengeDto) {
            var formatted = void 0;
            if (this.challengeDetails.challengeDto.chlngPhoneNo) {
                var temp = this.challengeDetails.challengeDto.chlngPhoneNo.toString();
                formatted = temp.substr(0, 3) + '-' + temp.substr(3, 3) + '-' + temp.substr(6);
            }
            this.challengeDetForm = this.fb.group({
                contactname: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.challengeDetails.challengeDto.chlngContactNm ? this.challengeDetails.challengeDto.chlngContactNm : '', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required])),
                contactmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.challengeDetails.challengeDto.chlngContactEmailId ? this.challengeDetails.challengeDto.chlngContactEmailId : '', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].email])),
                contactphone: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.challengeDetails.challengeDto.chlngPhoneNo ? formatted : '', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern('^[0-9]{3}-[0-9]{3}-[0-9]{4}$')]))
            });
        }
    };
    ChallengesDetailComponent.prototype.addHyphen = function (event) {
        var val = event.target.value.replace(/\D/g, '');
        var newVal = '', actualLength = val.length;
        while (val.length > 3) {
            if (actualLength < 7) {
                newVal += val.substr(0, 3) + '-';
                val = val.substr(3);
            }
            else {
                newVal += val.substr(0, 3) + '-' + val.substr(3, 3) + '-';
                val = val.substr(6);
                if (val.length === 4) {
                    break;
                }
            }
        }
        newVal += val;
        event.target.value = newVal;
    };
    ChallengesDetailComponent.prototype.setRequestchlg = function () {
        this.requestObject1 = new _shared_dataModels_challengeDetailsRequest__WEBPACK_IMPORTED_MODULE_5__["ChallengesDetailSearchRequest"]();
        this.requestObject1.queryParams.dealerCode = this.headerObj.dealerCode;
        this.requestObject1.queryParams.challengeNo = this.route.snapshot.paramMap.get('challengeNo');
    };
    ChallengesDetailComponent.prototype.setCreateChlgDetailRequest = function () {
        this.createChlgRequest = new _shared_dataModels_createChallengeRequest__WEBPACK_IMPORTED_MODULE_7__["CreateChallengeDetailsRequest"]();
        this.createChlgRequest.queryParams.dealerCode = this.headerObj.dealerCode;
        this.createChlgRequest.queryParams.incentiveTypeNo = this.route.snapshot.paramMap.get('incentiveTypeNo');
        this.createChlgRequest.queryParams.optionType = this.route.snapshot.paramMap.get('optionType');
        this.createChlgRequest.queryParams.vin = this.route.snapshot.paramMap.get('vin');
        this.createChlgRequest.queryParams.iaId = this.route.snapshot.paramMap.get('iaId');
    };
    ChallengesDetailComponent.prototype.getDeleteConfirmation = function () {
        var _this = this;
        this.messageService.hideMessage();
        if (this.challengeDetails.challengeStatus === "Pending Submit") {
            this.confirmModalService.showConfirm('Do you want delete the challenge?').afterClosed().subscribe(function (result) {
                if (result) {
                    _this.deleteChlgRequest = new _shared_dataModels_createChallengeRequest__WEBPACK_IMPORTED_MODULE_7__["DeleteChallengeDetailsRequest"]();
                    _this.deleteChlgRequest.queryParams.challengeNo = Number(_this.route.snapshot.paramMap.get('challengeNo'));
                    _this.ispService.deleteChallengeDetails(_this.deleteChlgRequest).subscribe(function (success) {
                        _this.router.navigate(['challenges']);
                    }, function (error) {
                        console.log(error);
                    });
                }
            });
        }
        else {
            this.messageService.showMessage('You can not delete this challenge As Challenge Status is not Pending Submit.', 'error');
        }
    };
    ChallengesDetailComponent.prototype.uploadDocument = function (event, index) {
        var files = event.target.files;
        var file = files[0];
        var allowedFiles = ['.doc', '.docx', '.ppt', '.pptx', '.pptm', '.xls', '.xlsx', 'xlsm', '.pdf', '.zip', '.zipx', '.rar'];
        var regex = new RegExp("(" + allowedFiles.join('|') + ")$");
        if (files.length > 0) {
            if (!regex.test(file.name)) {
                this.messageService.showMessage('Please upload correct format file', 'error');
                setTimeout(function () {
                    window.scrollTo(0, 0);
                }, 100);
            }
            else {
                if (file.size > 5242880) { // IPLUS-9729 - Increased file upload size to 5MB -5242880 bytes
                    this.messageService.showMessage('Please upload file size less than 5MB', 'error');
                    setTimeout(function () {
                        window.scrollTo(0, 0);
                    }, 100);
                }
                else {
                    // Suppressing the error message when there's no error
                    this.messageService.hideMessage();
                    this.challengeDetails.requierdDocumentsDtoList[index].fileName = file.name;
                    this.challengeDetails.requierdDocumentsDtoList[index].uploadedOn = new Date().getTime();
                    this.docList[index] = (files[0]);
                }
            }
        }
    };
    ChallengesDetailComponent.prototype.formRequestObject = function () {
        var _this = this;
        this.challengeDetails.challengeDto.inctvOptionId = this.challengeDetails['incentiveTypeNo'];
        this.challengeDetails.challengeDto.inctvAppId = this.challengeDetails['iaId'];
        if (this.challengeDetForm.controls['contactname'].value || this.challengeDetForm.controls['contactmail'].value || this.challengeDetForm.controls['contactphone'].value || this.challengeDetails.challengeDto.comments) {
            this.challengeDetails.challengeDto.chlngContactNm = this.challengeDetForm.controls['contactname'].value;
            this.challengeDetails.challengeDto.chlngContactEmailId = this.challengeDetForm.controls['contactmail'].value;
            this.challengeDetails.challengeDto.chlngPhoneNo = this.challengeDetForm.controls['contactphone'].value.replace(/-/g, "");
            this.challengeDetails.challengeDto.comments = this.challengeDetails.challengeDto['comments'];
        }
        // Open Upload IPLUS-9054
        this.challengeDetails.requierdDocumentsDtoList.forEach(function (doc, index) {
            if (doc.documentDescription === "Other" && doc.challengeId == null && doc.fileName == null) {
                _this.challengeDetails.requierdDocumentsDtoList.splice(index, 1);
                _this.docList.splice(index, 1);
            }
        });
        //IPLUS-9054
        var formData = new FormData();
        formData.append('dealerCode', this.headerObj.dealerCode);
        formData.append('challengeNo', this.challengeDetails['challengeNo']);
        formData.append('docReqStr', JSON.stringify(this.challengeDetails.requierdDocumentsDtoList));
        formData.append('challengeDto', JSON.stringify(this.challengeDetails.challengeDto));
        formData.append('excel', '');
        formData.append('contactName', this.challengeDetForm.controls['contactname'].value);
        formData.append('contactEmail', this.challengeDetForm.controls['contactmail'].value);
        formData.append('contactPhoneNo', this.challengeDetForm.controls['contactphone'].value);
        formData.append('challengeAmount', this.challengeDetails.challengeDto.chlngAmt != null ? this.challengeDetails.challengeDto.chlngAmt : '');
        formData.append('comment', this.challengeDetails.challengeDto['comments'] != null ? this.challengeDetails.challengeDto['comments'] : '');
        if (this.docList && this.docList.length) {
            this.docList.forEach(function (obj) {
                if (obj.size === 0 && obj.type === 'application/octet-stream') {
                    formData.append('file', obj, '');
                }
                else {
                    formData.append('file', obj);
                }
            });
        }
        return formData;
    };
    ChallengesDetailComponent.prototype.Onsave = function () {
        var _this = this;
        this.formRequestObject();
        this.Headersubscription = this.ispService.getsaveDetails(this.formRequestObject()).subscribe(function (success) {
            if (success.responseMessage === '1') {
                _this.messageService.showMessage(success.error.errMessage, 'error');
            }
            else {
                _this.challengeDetails = success;
                _this.setChallengeDto();
                _this.messageService.showMessage('Your updates have been saved', 'success');
            }
        });
    };
    ChallengesDetailComponent.prototype.submitRecords = function () {
        var _this = this;
        var proceedFlag = true;
        // check all mandatory fields have value
        if (proceedFlag && !(this.challengeDetForm.controls['contactname'].value && this.challengeDetForm.controls['contactphone'].value && this.challengeDetForm.controls['contactmail'].value)) {
            proceedFlag = false;
            this.messageService.showMessage('Please enter all mandatory fields.', 'error');
        }
        else if (proceedFlag && this.challengeDetForm.controls['contactmail'].errors) {
            proceedFlag = false;
            this.messageService.showMessage('Please enter valid email address.', 'error');
        }
        else if (proceedFlag && this.challengeDetForm.controls['contactphone'].errors) {
            proceedFlag = false;
            this.messageService.showMessage('Please enter valid phone number.', 'error');
        }
        // Open Upload IPLUS-9054
        this.challengeDetails.requierdDocumentsDtoList.forEach(function (doc, index) {
            if (doc.documentDescription === "Other" && doc.challengeId == null && doc.fileName == null) {
                _this.challengeDetails.requierdDocumentsDtoList.splice(index, 1);
                _this.docList.splice(index, 1);
            }
        });
        //IPLUS-9054
        // check if at least one document has been uploaded and it's extension is proper
        if (proceedFlag && this.challengeDetails.requierdDocumentsDtoList) {
            var uploadCounter_1 = 0;
            this.challengeDetails.requierdDocumentsDtoList.forEach(function (element) {
                if (element.uploadedOn == null) {
                    uploadCounter_1++;
                }
            });
            if (uploadCounter_1) {
                proceedFlag = false;
                this.messageService.showMessage('Please upload the mandatory documents.', 'error');
            }
        }
        // show confirmation pop-up
        if (proceedFlag) {
            this.messageService.hideMessage();
            this.confirmModalService.showConfirm('No further changes will be allowed once submitted').afterClosed().subscribe(function (result) {
                if (result) {
                    // perform submit service call
                    _this.ispService.submitChallengeDetails(_this.formRequestObject()).subscribe(function (success) {
                        _this.challengeDetails = success;
                        _this.router.navigate(['challenges']);
                    });
                }
            });
        }
    };
    ChallengesDetailComponent.prototype.deleteFile = function (index) {
        this.docList[index] = this.emptyFile;
        this.challengeDetails.requierdDocumentsDtoList[index].fileName = null;
        this.challengeDetails.requierdDocumentsDtoList[index].uploadedOn = null;
    };
    ChallengesDetailComponent.prototype.getDocument = function (fName, id) {
        var _this = this;
        var formData = new FormData();
        formData.append('attachmentId', id);
        var name = [];
        name.push(fName.substring(0, fName.lastIndexOf('.')));
        name.push(fName.substring(fName.lastIndexOf('.') + 1));
        // const name = fName.split('.');
        var fileName = name[0] + '.' + name[1];
        this.ispService.getDocument(formData).subscribe(function (success) {
            if (success.responseMessage === '1') {
                _this.messageService.showMessage(success.error.errMessage, 'error');
            }
            else {
                Object(file_saver__WEBPACK_IMPORTED_MODULE_11__["saveAs"])(success, fileName);
            }
        });
    };
    //Open Upload IPLUS-9053
    ChallengesDetailComponent.prototype.addOtherDocument = function () {
        var challengeOtherDocDetails = new _shared_dataModels_challengeDetailsResponseHeader__WEBPACK_IMPORTED_MODULE_2__["RequiredDocumentsDtoList"]();
        challengeOtherDocDetails = { attatchmentId: null, challengeId: null, dealRvwId: null, documentDescription: 'Other', documentName: null, fileName: null, id: null, optionId: null, optionTypes: null, uploadedOn: null };
        this.challengeDetails.requierdDocumentsDtoList.push(challengeOtherDocDetails);
        var currDocLength = this.docList.length;
        this.docList[currDocLength] = this.emptyFile;
    };
    //Open Upload IPLUS-9053
    ChallengesDetailComponent.prototype.ngOnDestroy = function () {
        this.Headersubscription.unsubscribe();
        this.renderer.removeClass(document.body, 'print-details');
    };
    ChallengesDetailComponent.prototype.printDetails = function () {
        this.printService.printDetails('portrait');
    };
    ChallengesDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-challenges-detail',
            template: __webpack_require__(/*! ./challenges-detail.component.html */ "./src/app/challenges-detail/challenges-detail.component.html"),
            styles: [__webpack_require__(/*! ./challenges-detail.component.scss */ "./src/app/challenges-detail/challenges-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], _isp_app_service__WEBPACK_IMPORTED_MODULE_3__["IspAppService"], _shared_services_isp_app_config_service__WEBPACK_IMPORTED_MODULE_6__["ISPAppConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _shared_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalService"], _shared_message_handler_message_handler_service__WEBPACK_IMPORTED_MODULE_10__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _shared_services_print_data_grid_service__WEBPACK_IMPORTED_MODULE_12__["PrintDataGridService"], _shared_services_user_info_service__WEBPACK_IMPORTED_MODULE_13__["UserInfoService"]])
    ], ChallengesDetailComponent);
    return ChallengesDetailComponent;
}());



/***/ }),

/***/ "./src/app/challenges-detail/challenges-detail.guard.ts":
/*!**************************************************************!*\
  !*** ./src/app/challenges-detail/challenges-detail.guard.ts ***!
  \**************************************************************/
/*! exports provided: ChallengesDetailGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesDetailGuard", function() { return ChallengesDetailGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_user_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/user-info.service */ "./src/app/shared/services/user-info.service.ts");




var ChallengesDetailGuard = /** @class */ (function () {
    function ChallengesDetailGuard(router, userInfoService) {
        this.router = router;
        this.userInfoService = userInfoService;
    }
    ChallengesDetailGuard.prototype.canActivate = function (route, state) {
        return this.userInfoService.checkRole() && this.userInfoService.editAccess();
    };
    ChallengesDetailGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_user_info_service__WEBPACK_IMPORTED_MODULE_3__["UserInfoService"]])
    ], ChallengesDetailGuard);
    return ChallengesDetailGuard;
}());



/***/ }),

/***/ "./src/app/challenges/challenges.component.html":
/*!******************************************************!*\
  !*** ./src/app/challenges/challenges.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-message-handler></app-message-handler>\r\n\r\n<mat-toolbar style=\"width: auto;\">\r\n  <mat-toolbar-row>\r\n    <span><strong class=\"bold_text\">{{'title.Challenges'|translate}}</strong></span>\r\n    <span class=\"space-away\"></span>\r\n    <mat-icon matTooltip=\"Print\" class=\"ip-mat-icon\" (click)=\"printGrid()\">local_printshop</mat-icon>\r\n    <span style=\"padding-left: 20px\"></span>\r\n    <i class=\"fa fa-file-excel-o fa-lg fa-16px\" matTooltip=\"Export to Excel\" (click)=\"excelExportForm()\"\r\n      style=\"cursor: Pointer;\"></i>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<div class=\"row mt-2 ml-1 search-form\">\r\n  <div class=\"col-lg-2 col-md-6 col-sm-12\">\r\n    <label><strong>{{'labels.Search_by'|translate}}</strong></label>\r\n    <mat-radio-group aria-labelledby=\"radio-group-label\" name=\"chlgSummaryGroup\" [(ngModel)]=\"searchOption\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <mat-radio-button checked style='display: block' value=\"1\" (change)=\"disableInput($event.value)\">\r\n            <strong>{{'labels.New_Updates'|translate}}</strong></mat-radio-button>\r\n        </div>\r\n      </div>\r\n    </mat-radio-group>\r\n  </div>\r\n  <div class=\"col-lg-4 col-md-6 col-sm-12\">\r\n    <label><strong>{{'labels.Search_by'|translate}} {{'labels.Status'|translate}}</strong></label>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <mat-radio-group aria-labelledby=\"radio-group-label\" name=\"chlgSummaryGroup\" [(ngModel)]=\"searchOption\">\r\n          <mat-radio-button style='display: block' value=\"2\" (change)=\"disableInput($event.value)\">\r\n            {{'labels.All' | translate}}</mat-radio-button>\r\n          <mat-radio-button style='display: block' value=\"3\" (change)=\"disableInput($event.value)\">\r\n            {{'labels.Submitted' | translate}}</mat-radio-button>\r\n          <mat-radio-button style='display: block' value=\"4\" (change)=\"disableInput($event.value)\">\r\n            {{'labels.Returned' | translate}}</mat-radio-button>\r\n        </mat-radio-group>\r\n      </div>\r\n      <div class=\"col\">\r\n        <mat-radio-group aria-labelledby=\"radio-group-label\" name=\"chlgSummaryGroup\" [(ngModel)]=\"searchOption\">\r\n          <mat-radio-button style='display: block' value=\"5\" (change)=\"disableInput($event.value)\">\r\n            {{'labels.Pending_Submit' | translate}}</mat-radio-button>\r\n          <mat-radio-button style='display: block' value=\"6\" (change)=\"disableInput($event.value)\">\r\n            {{'labels.Denied' | translate}}</mat-radio-button>\r\n        </mat-radio-group>\r\n      </div>\r\n      <div class=\"col\">\r\n        <mat-radio-group aria-labelledby=\"radio-group-label\" name=\"chlgSummaryGroup\" [(ngModel)]=\"searchOption\">\r\n          <mat-radio-button style='display: block' value=\"7\" (change)=\"disableInput($event.value)\">\r\n            {{'labels.Approved' | translate}}</mat-radio-button>\r\n          <mat-radio-button style='display: block' value=\"8\" (change)=\"disableInput($event.value)\">\r\n            {{'labels.Paid' | translate}}</mat-radio-button>\r\n        </mat-radio-group>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-lg-3 col-md-6 col-sm-12\">\r\n    <label><strong>{{'labels.Search_by' | translate}}</strong></label>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <mat-radio-group aria-labelledby=\"radio-group-label\" [(ngModel)]=\"searchOption\" name=\"chlgSummaryGroup\">\r\n          <mat-radio-button style='display: block' value=\"9\" (change)=\"enableInput($event.value)\"><strong>{{'labels.VIN' |\r\n              translate}}</strong></mat-radio-button>\r\n          <mat-radio-button style='display: block' value=\"10\" (change)=\"enableInput($event.value)\"><strong>{{'labels.Serial_No'\r\n              | translate}}</strong></mat-radio-button>\r\n        </mat-radio-group>\r\n      </div>\r\n      <div class=\"col-md-8\">\r\n        <form [formGroup]=\"challengeSearchForm\">\r\n          <mat-form-field appearance=\"outline\">\r\n            <mat-label>{{selectedInpField}}</mat-label>\r\n            <input matInput [placeholder]=\"selectedInpField\" id=\"challengeSerialNo\" formControlName=\"challengeSerialNo\"\r\n              autocomplete=\"off\" (input)=\"removeSpace()\">\r\n            <mat-error *ngIf=\"challengeSearchForm.controls['challengeSerialNo'].errors?.required\">\r\n              {{'errormsg.Mandatory'|translate}}\r\n            </mat-error>\r\n            <mat-error\r\n              *ngIf=\"challengeSearchForm.controls['challengeSerialNo'].errors?.minlength && !challengeSearchForm.controls['challengeSerialNo'].errors?.pattern\">\r\n              {{'errormsg.Vin_Message'|translate}} {{selectedInpField}}\r\n            </mat-error>\r\n            <mat-error *ngIf=\"challengeSearchForm.controls['challengeSerialNo'].errors?.pattern\">\r\n              {{'errormsg.Invalid'|translate}} {{selectedInpField}}(s)\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-3 col-md-6 col-sm-12\">\r\n    <div class=\"btn-container\">\r\n      <button class=\"iplus_Btn_Primary mr-2\" id=\"searchBtn\" mat-raised-button matTooltip=\"Search records\"\r\n        matTooltipPosition='below' (click)=\"searchRecords()\">{{'button.Search'| translate}}</button>\r\n      <button class='resetBtn' mat-raised-button matTooltip=\"Reset all data\" matTooltipPosition='below'\r\n        (click)=\"resetForm()\">{{'button.Reset'\r\n        | translate}}</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<mat-toolbar class=\"buttons-panel\">\r\n  <mat-toolbar-row>\r\n    <button class=\"iplus_Btn_Primary m-r\" mat-raised-button [disabled]=\"editAccess ? routeButtonState : true\"\r\n      (click)=\"routeChallengeStatus()\">Challenge Details</button>\r\n    <span class=\"space-away\"></span>\r\n    <button class=\"mr-2\" mat-raised-button (click)=\"submitForm()\">\r\n      <span class=\"d-none d-md-inline\">{{'button.Refresh_Data'|translate}}</span>\r\n      <mat-icon class=\"ip-mat-icon m-l-xs\">cached</mat-icon>\r\n    </button>\r\n    <button mat-raised-button (click)=\"clearFilters()\">\r\n      <span class=\"d-none d-md-inline\">{{'button.Clear_Filter'|translate}}</span>\r\n      <mat-icon class=\"ip-mat-icon m-l-xs\">replay</mat-icon>\r\n    </button>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<mat-divider></mat-divider>\r\n\r\n<div class=\"col-sm-12\" style=\"padding: 0px;\" id=\"vinGridcontainer\" class=\"gridcontainer\">\r\n\r\n  <ag-grid-angular #agGrid id=\"vinSummaryGrid\" style=\"width: 100%; height: 448px;\" class=\"ag-theme-material\"\r\n    [gridOptions]=\"gridOptions\" [columnDefs]=\"chlgColumnDefs\" [rowData]=\"chlgRowData\" [rowModelType]=\"rowModelType\"\r\n    [maxBlocksInCache]=\"200\" [cacheBlockSize]=\"200\" [pagination]=\"true\" [paginationPageSize]=\"paginationPageSize\"\r\n    [suppressPaginationPanel]=\"true\" (paginationChanged)=\"onPaginationChanged($event)\"\r\n    [suppressRowClickSelection]=\"true\" [isFullWidthCell]=\"isFullWidthCell\" [animateRows]=\"true\"\r\n    (gridReady)=\"onReady($event)\" [overlayNoRowsTemplate]=\"overlayNoRowsTemplate\" (rowSelected)=\"routeButtonToggle()\"\r\n    (sortChanged)=\"onSortChanged($event)\" (filterChanged)=\"onFilterChanged($event)\">\r\n  </ag-grid-angular>\r\n\r\n  <br>\r\n\r\n\r\n  <mat-toolbar-row>\r\n    <div class=\"ag-paging-panel ag-font-style\" style=\"margin-bottom:5px\">\r\n      <span class=\"ag-paging-page-summary-panel\">\r\n        <button class=\"ag-paging-button\" ref=\"btFirst\"\r\n          [ngStyle]=\"{'opacity' : buttonDisabled.firstButton ? '0.65' : '1'}\"\r\n          [disabled]=\"this.buttonDisabled.firstButton\" (click)=\"onBtFirst()\">\r\n          <div class=\"pagination-previous-icon\">\r\n            <div class=\"pagination-previous-bar\"></div>\r\n          </div>\r\n        </button>\r\n        <button class=\"ag-paging-button\" ref=\"btPrevious\"\r\n          [ngStyle]=\"{'opacity' : buttonDisabled.previousButton ? '0.65' : '1'}\"\r\n          [disabled]=\"this.buttonDisabled.previousButton\" (click)=\"onBtPrevious()\">\r\n          <div class=\"pagination-previous-icon\"></div>\r\n        </button>\r\n        <input type=\"number\" class=\"pagination-input\" [(ngModel)]=\"pageInputValue\"\r\n          (keyup.enter)=\"onCustomPageChange(pageInputValue)\" (blur)=\"onCustomPageChange(pageInputValue)\"\r\n          autocomplete=\"off\" /> {{'labels.of' | translate}}\r\n        <span ref=\"lbTotal\">{{totalPageCount}}</span>\r\n        <button class=\"ag-paging-button\" ref=\"btNext\" [ngStyle]=\"{'opacity' : buttonDisabled.nextButton ? '0.65' : '1'}\"\r\n          [disabled]=\"this.buttonDisabled.nextButton\" (click)=\"onBtNext()\">\r\n          <div class='pagination-next-icon'></div>\r\n        </button>\r\n        <button class=\"ag-paging-button\" ref=\"btLast\" [ngStyle]=\"{'opacity' : buttonDisabled.lastButton ? '0.65' : '1'}\"\r\n          [disabled]=\"buttonDisabled.lastButton\" (click)=\"onBtLast()\">\r\n          <div class='pagination-next-icon'>\r\n            <div class='pagination-last-bar'></div>\r\n          </div>\r\n        </button>\r\n      </span>\r\n    </div>\r\n\r\n    <span _ngcontent-ljs-c8=\"\" class=\"space-away\"></span>\r\n\r\n    <div style=\"margin:8px 9px 0 0;\">\r\n      <span ref=\"eSummaryPanel\" class=\"ag-paging-row-summary-panel\">\r\n        <span ref=\"lbFirstRowOnPage\">{{currentPageSet.start}}</span> {{'labels.to' | translate}}\r\n        <span ref=\"lbLastRowOnPage\">{{currentPageSet.end}}</span> {{'labels.of' | translate}}\r\n        <span ref=\"lbRecordCount\">{{totalRowCount}}</span>\r\n        <span style=\"margin-left:3px;\"> {{'labels.items' | translate}}</span>\r\n      </span>\r\n    </div>\r\n\r\n  </mat-toolbar-row>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/challenges/challenges.component.scss":
/*!******************************************************!*\
  !*** ./src/app/challenges/challenges.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".referenceTextBox {\n  height: 32px;\n  margin-right: 10px; }\n\n.vinTextBox {\n  width: 250px;\n  padding-left: 2px; }\n\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n\n.column-flex {\n  display: flex;\n  flex-direction: column; }\n\n.row-flex {\n  display: flex;\n  flex-direction: row; }\n\n.block-display {\n  display: block; }\n\n.bold_text {\n  font-size: 18px; }\n\nb {\n  font-size: 13px; }\n\n.pack {\n  margin-left: -7px; }\n\n.error-panel {\n  color: #fe0000;\n  border-radius: 5px;\n  border: 1px solid #fe0000;\n  background-color: #f3d09e;\n  margin: 10px;\n  width: auto; }\n\n.buttons-panel {\n  margin: 10px;\n  width: auto; }\n\n::ng-deep ag-grid-angular .ag-header-row:first-child .ag-header-cell {\n  background-color: #757575 !important;\n  text-align: center !important;\n  color: #fff;\n  font-weight: 700; }\n\n::ng-deep ag-grid-angular .ag-header-cell {\n  font-weight: 900 !important;\n  font-size: 15px !important;\n  background-color: #ffffff; }\n\n::ng-deep ag-grid-angular .ag-row-odd {\n  background-color: #f6f6f6 !important; }\n\n::ng-deep ag-grid-angular .ag-row-even {\n  background: white !important; }\n\n::ng-deep ag-grid-angular .ag-horizontal-left-spacer {\n  visibility: hidden; }\n\n::ng-deep ag-grid-angular .ag-header-cell-label .ag-header-cell-text {\n  margin-top: -8px; }\n\n@media print {\n  @page {\n    size: A4 landscape; }\n  ::ng-deep body.challenges {\n    -webkit-transform: scale(0.66);\n            transform: scale(0.66);\n    margin: auto -18%;\n    zoom: 79%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbGxlbmdlcy9DOlxcRlNEXFxwb2xpY3ktbWFuYWdlbWVudC9zcmNcXGFwcFxcY2hhbGxlbmdlc1xcY2hhbGxlbmdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdiO0VBQ0UsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjtFQUVJLG9DQUFvQztFQUNwQyw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQUxwQjtFQVFJLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIseUJBQXlCLEVBQUE7O0FBVjdCO0VBY0ksb0NBQW9DLEVBQUE7O0FBZHhDO0VBaUJJLDRCQUE0QixFQUFBOztBQWpCaEM7RUFvQkksa0JBQWtCLEVBQUE7O0FBcEJ0QjtFQXVCSSxnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDRTtJQUNFLGtCQUFrQixFQUFBO0VBRXBCO0lBQ0UsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsU0FBUyxFQUFBLEVBQ1YiLCJmaWxlIjoic3JjL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVmZXJlbmNlVGV4dEJveCB7XHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgI2M4YzhjODtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi52aW5UZXh0Qm94IHtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbn1cclxuLmZsZXgtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY29sdW1uLWZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnJvdy1mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5ibG9jay1kaXNwbGF5IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uYm9sZF90ZXh0IHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuYiB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5wYWNrIHtcclxuICBtYXJnaW4tbGVmdDogLTdweDtcclxufVxyXG4uZXJyb3ItcGFuZWwge1xyXG4gIGNvbG9yOiAjZmUwMDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmUwMDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2QwOWU7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4uYnV0dG9ucy1wYW5lbCB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG46Om5nLWRlZXAgYWctZ3JpZC1hbmd1bGFyIHtcclxuICAuYWctaGVhZGVyLXJvdzpmaXJzdC1jaGlsZCAuYWctaGVhZGVyLWNlbGwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc1NzU3NSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIC5hZy1oZWFkZXItY2VsbCB7XHJcbiAgICBmb250LXdlaWdodDogOTAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAvL2JhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI0ZGRkZGRiwgI0Q5RDlEOSA1MCUsICNGRkZGRkYpO1xyXG4gIH1cclxuICAuYWctcm93LW9kZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5hZy1yb3ctZXZlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYWctaG9yaXpvbnRhbC1sZWZ0LXNwYWNlciB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5hZy1oZWFkZXItY2VsbC1sYWJlbCAuYWctaGVhZGVyLWNlbGwtdGV4dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHByaW50IHtcclxuICBAcGFnZSB7XHJcbiAgICBzaXplOiBBNCBsYW5kc2NhcGU7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCBib2R5LmNoYWxsZW5nZXMge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjY2KTtcclxuICAgIG1hcmdpbjogYXV0byAtMTglO1xyXG4gICAgem9vbTogNzklO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/challenges/challenges.component.ts":
/*!****************************************************!*\
  !*** ./src/app/challenges/challenges.component.ts ***!
  \****************************************************/
/*! exports provided: ChallengesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesComponent", function() { return ChallengesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_grid_filter_custom_text_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/grid/filter/custom-text-filter.component */ "./src/app/shared/grid/filter/custom-text-filter.component.ts");
/* harmony import */ var _shared_dataModels_challengeSearchRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/dataModels/challengeSearchRequest */ "./src/app/shared/dataModels/challengeSearchRequest.ts");
/* harmony import */ var _shared_services_isp_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/isp-app-config.service */ "./src/app/shared/services/isp-app-config.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _isp_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../isp-app.service */ "./src/app/isp-app.service.ts");
/* harmony import */ var _shared_grid_grid_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/grid/grid-common.service */ "./src/app/shared/grid/grid-common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_grid_page_navigate_cell_renderer_page_navigate_cell_renderer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/grid/page-navigate-cell-renderer/page-navigate-cell-renderer.component */ "./src/app/shared/grid/page-navigate-cell-renderer/page-navigate-cell-renderer.component.ts");
/* harmony import */ var _shared_grid_filter_custom_date_filter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/grid/filter/custom-date-filter.component */ "./src/app/shared/grid/filter/custom-date-filter.component.ts");
/* harmony import */ var _shared_services_print_data_grid_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/services/print-data-grid.service */ "./src/app/shared/services/print-data-grid.service.ts");
/* harmony import */ var _shared_services_isp_excel_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/services/isp-excel-service */ "./src/app/shared/services/isp-excel-service.ts");
/* harmony import */ var _shared_dataModels_excelChallengeSearchResponse__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/dataModels/excelChallengeSearchResponse */ "./src/app/shared/dataModels/excelChallengeSearchResponse.ts");
/* harmony import */ var _shared_message_handler_message_handler_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/message-handler/message-handler.service */ "./src/app/shared/message-handler/message-handler.service.ts");
/* harmony import */ var _shared_services_user_info_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/services/user-info.service */ "./src/app/shared/services/user-info.service.ts");
/* harmony import */ var _shared_grid_replace_zero_with_empty_cell_renderer_replace_zero_with_empty_cell_renderer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/grid/replace-zero-with-empty-cell-renderer/replace-zero-with-empty-cell-renderer.component */ "./src/app/shared/grid/replace-zero-with-empty-cell-renderer/replace-zero-with-empty-cell-renderer.component.ts");

















var ChallengesComponent = /** @class */ (function () {
    function ChallengesComponent(fb, ispService, ispAppConfigService, router, gridCommonService, printService, excelService, messageService, userInfoService) {
        this.fb = fb;
        this.ispService = ispService;
        this.ispAppConfigService = ispAppConfigService;
        this.router = router;
        this.gridCommonService = gridCommonService;
        this.printService = printService;
        this.excelService = excelService;
        this.messageService = messageService;
        this.userInfoService = userInfoService;
        this.searchOption = '1';
        this.filterOption = '1';
        this.routeButtonState = true;
        // is true if user has valid role and can edit in Challenge and Deal Review page
        this.editAccess = false;
        this.pageIndex = 1;
        this.inputValue = 1;
        this.pageInputValue = 1;
        this.totalPageCount = 1;
        this.totalRowCount = 0;
        this.isRegulatoryUser = false;
        this.currentPageSet = {
            start: 1,
            end: this.paginationPageSize
        };
        this.buttonDisabled = {
            firstButton: true,
            previousButton: true,
            nextButton: false,
            lastButton: false
        };
        this.isBtnLastClicked = false;
        /** Grid Properties - END */
        this.currentPageRoutePath = 'challenges/detail/';
        this.headerObj = this.ispAppConfigService.getHeaderDetails();
        this.challengeSearchRequest = new _shared_dataModels_challengeSearchRequest__WEBPACK_IMPORTED_MODULE_3__["ChallengesSearchRequest"]();
        /** Grid Properties initialize - START */
        this.overlayNoRowsTemplate = '<span class="grid-noOverlay"> There are no results for the entered criterion. Please refine your search parameter </span>';
        this.frameworkComponents = {
            'pageNavigateCellRendererComponent': _shared_grid_page_navigate_cell_renderer_page_navigate_cell_renderer_component__WEBPACK_IMPORTED_MODULE_9__["PageNavigateCellRendererComponent"],
            'customTextFilter': _shared_grid_filter_custom_text_filter_component__WEBPACK_IMPORTED_MODULE_2__["CustomTextFilterComponent"],
            'customDateFilter': _shared_grid_filter_custom_date_filter_component__WEBPACK_IMPORTED_MODULE_10__["CustomDateFilterComponent"],
            'replaceZeroWithEmptyCellRendererComponent': _shared_grid_replace_zero_with_empty_cell_renderer_replace_zero_with_empty_cell_renderer_component__WEBPACK_IMPORTED_MODULE_16__["ReplaceZeroWithEmptyCellRendererComponent"]
        };
        this.paginationPageSize = 200;
        this.rowModelType = 'infinite';
        /** Grid Properties initialize - END */
        this.editAccess = this.userInfoService.editAccess();
    }
    ChallengesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gridSetUp();
        this.createForm();
        if (this.ispService.challengeSelectedData) {
            this.preLoadChallengePage(this.ispService.challengeSelectedData);
            setTimeout(function () {
                _this.submitForm();
            }, 500);
        }
        else {
            setTimeout(function () {
                _this.submitForm();
            }, 500);
        }
    };
    ChallengesComponent.prototype.preLoadChallengePage = function (data) {
        if (data.queryParams.searchByRadio == "newUpdates") {
            this.searchOption = '1';
        }
        else if (data.queryParams.searchByRadio == "All") {
            this.searchOption = '2';
        }
        else if (data.queryParams.searchByRadio == "Submitted") {
            this.searchOption = '3';
        }
        else if (data.queryParams.searchByRadio == "Returned") {
            this.searchOption = '4';
        }
        else if (data.queryParams.searchByRadio == "Pending Submit") {
            this.searchOption = '5';
        }
        else if (data.queryParams.searchByRadio == "Denied") {
            this.searchOption = '6';
        }
        else if (data.queryParams.searchByRadio == "Approved") {
            this.searchOption = '7';
        }
        else if (data.queryParams.searchByRadio == "Paid") {
            this.searchOption = '8';
        }
        else if (data.queryParams.searchByRadio == "vinNo") {
            this.searchOption = '9';
            this.challengeSearchForm = this.fb.group({
                challengeSerialNo: [{ value: data.queryParams.vin, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z0-9 ]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(17)])]
            });
        }
        else if (data.queryParams.searchByRadio == "serialNo") {
            this.searchOption = '10';
            this.challengeSearchForm = this.fb.group({
                challengeSerialNo: [{ value: data.queryParams.serialNo, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z0-9 ]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(8)])]
            });
        }
    };
    ChallengesComponent.prototype.createForm = function () {
        var len = this.selectedInpField == 'VIN' ? 17 : 8;
        this.challengeSearchForm = this.fb.group({
            challengeSerialNo: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z0-9 ]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(len)])]
        });
    };
    // removes all the space from the input field on focus out
    ChallengesComponent.prototype.removeSpace = function () {
        this.challengeSearchForm.controls['challengeSerialNo'].reset({ value: this.challengeSearchForm.controls['challengeSerialNo'].value.replace(/ /g, ''), disabled: false });
    };
    ChallengesComponent.prototype.enableInput = function (value) {
        this.searchOption = value;
        /* 3 and 4 corrosponds to VIN and serial number radio buttons respectively, the label name is toggled.  */
        this.selectedInpField = this.searchOption == '9' ? 'VIN' : this.searchOption == '10' ? 'Serial Number' : this.selectedInpField;
        this.createForm();
        this.challengeSearchForm.controls['challengeSerialNo'].reset({ value: '', disabled: false });
    };
    // toggles the datepicker and date dropdown fields
    ChallengesComponent.prototype.disableInput = function (value) {
        /* setting the value from event instead of using ngModel because ngModel is causing the value binding to be delayed, using delay resolves the issue.
         might optimize later. mb */
        this.searchOption = value;
        this.challengeSearchForm.controls['challengeSerialNo'].reset({ value: '', disabled: true });
        // handles the VIN/Serial name tag for the combined input field
        this.selectedInpField = '';
    };
    ChallengesComponent.prototype.setSearchRequest = function () {
        // some default properties in the request object are set in the constructor itself
        this.challengeSearchRequest = new _shared_dataModels_challengeSearchRequest__WEBPACK_IMPORTED_MODULE_3__["ChallengesSearchRequest"]();
        this.challengeSearchRequest.queryParams.dealerCode = this.headerObj.dealerCode;
        this.challengeSearchRequest.queryParams.searchByRadio = this.challengeSearchRequest.taskToDo;
        switch (this.searchOption) {
            // 1 refers to New Updates radio button
            case '1':
                this.challengeSearchRequest.taskToDo = "searchByUpdates";
                this.challengeSearchRequest.queryParams.searchByRadio = "newUpdates";
                break;
            // 2 refers to All radio button
            case '2':
                this.challengeSearchRequest.taskToDo = "searchByStatus";
                this.challengeSearchRequest.queryParams.searchByRadio = "All";
                this.challengeSearchRequest.queryParams.status = "All";
                break;
            // 3 corrosponds to Submitted radio button
            case '3':
                this.challengeSearchRequest.taskToDo = "searchByStatus";
                this.challengeSearchRequest.queryParams.searchByRadio = "Submitted";
                this.challengeSearchRequest.queryParams.status = "Submitted";
                break;
            // 4 corrosponds to Returned radio button
            case '4':
                this.challengeSearchRequest.taskToDo = "searchByStatus";
                this.challengeSearchRequest.queryParams.searchByRadio = "Returned";
                this.challengeSearchRequest.queryParams.status = "Returned";
                break;
            // 5 corrosponds to Pending Submit radio button
            case '5':
                this.challengeSearchRequest.taskToDo = "searchByStatus";
                this.challengeSearchRequest.queryParams.searchByRadio = "Pending Submit";
                this.challengeSearchRequest.queryParams.status = "Pending Submit";
                break;
            // 6 corrosponds to Denied radio button
            case '6':
                this.challengeSearchRequest.taskToDo = "searchByStatus";
                this.challengeSearchRequest.queryParams.searchByRadio = "Denied";
                this.challengeSearchRequest.queryParams.status = "Denied";
                break;
            // 7 corrosponds to Approved radio button
            case '7':
                this.challengeSearchRequest.taskToDo = "searchByStatus";
                this.challengeSearchRequest.queryParams.searchByRadio = "Approved";
                this.challengeSearchRequest.queryParams.status = "Approved";
                break;
            // 8 corrosponds to Paid radio button
            case '8':
                this.challengeSearchRequest.taskToDo = "searchByStatus";
                this.challengeSearchRequest.queryParams.searchByRadio = "Paid";
                this.challengeSearchRequest.queryParams.status = "Paid";
                break;
            // 9 corrosponds to VIN radio button
            case '9':
                this.challengeSearchRequest.taskToDo = "searchByVin";
                this.challengeSearchRequest.queryParams.searchByRadio = "vinNo";
                this.challengeSearchRequest.queryParams.vin = this.challengeSearchForm.controls['challengeSerialNo'].value.toUpperCase();
                this.challengeSearchRequest.queryParams.vinSerial = this.challengeSearchForm.controls['challengeSerialNo'].value.toUpperCase();
                break;
            // 10 corrosponds to Serail Number radio button
            case '10':
                this.challengeSearchRequest.taskToDo = "searchBySerial";
                this.challengeSearchRequest.queryParams.searchByRadio = "serialNo";
                this.challengeSearchRequest.queryParams.serialNo = this.challengeSearchForm.controls['challengeSerialNo'].value.toUpperCase();
                this.challengeSearchRequest.queryParams.vinSerial = this.challengeSearchForm.controls['challengeSerialNo'].value.toUpperCase();
                break;
        }
    };
    ChallengesComponent.prototype.searchRecords = function () {
        // reset all parameters
        // filter and sorting retain
        this.readyParam.api.setDatasource({});
        this.api.setFilterModel(null);
        this.api.setSortModel(null);
        this.submitForm();
    };
    ChallengesComponent.prototype.submitForm = function () {
        this.setSearchRequest();
        this.loadGrid(this.challengeSearchRequest);
    };
    ChallengesComponent.prototype.resetForm = function () {
        this.createForm();
        // reset default selected radio buttons
        this.searchOption = '1';
        // reset placeholder
        this.selectedInpField = '';
        // filter and sorting retain
        this.readyParam.api.setDatasource({});
        this.api.setFilterModel(null);
        this.api.setSortModel(null);
        this.submitForm();
    };
    ChallengesComponent.prototype.refreshData = function () {
        this.loadGrid(this.challengeSearchRequest);
    };
    ChallengesComponent.prototype.routeButtonToggle = function () {
        var temp = this.api.getSelectedRows()[0];
        // this.routeButtonState = temp == null ? true : false;
        if (temp == null) {
            this.routeButtonState = true;
        }
        else {
            this.routeButtonState = false;
        }
    };
    ChallengesComponent.prototype.routeChallengeStatus = function () {
        var temp = this.api.getSelectedRows()[0];
        if (temp) {
            // stores the search request, later this is used to prepopulate the page
            this.ispService.setChallengeSelectedData(this.challengeSearchRequest);
            this.ispService.setChallengeSelectedVIN(temp.vin);
            this.ispService.setFilterSortModel(this.api.getFilterModel(), this.api.getSortModel());
            var url = temp.vin + '/' + temp.challengeNo;
            this.router.navigate([this.currentPageRoutePath + url]);
        }
    };
    /** Grid Methods - START */
    ChallengesComponent.prototype.gridSetUp = function () {
        var _this = this;
        this.gridOptions = {
            context: {
                componentParent: this
            },
            onGridReady: function (params) {
                _this.api = params.api;
                //this.api.sizeColumnsToFit();
                _this.api.refreshCells();
                _this.api.setFilterModel(_this.ispService.selectedFilterModel);
                _this.api.setSortModel(_this.ispService.selectedSortModel);
            },
            enableColResize: false,
            enableFilter: true,
            pagination: true,
            enableServerSideSorting: true,
            sortingOrder: ["asc", "desc"],
            headerHeight: 48,
            floatingFiltersHeight: 40,
            rowHeight: 35,
            rowSelection: 'single',
            filter: true,
            frameworkComponents: this.frameworkComponents,
            floatingFilter: true,
            suppressContextMenu: false,
            suppressMenuMainPanel: false,
            suppressMenuColumnPanel: false,
            suppressTabbing: true,
            suppressPaginationPanel: true,
            suppressMovableColumns: true,
            suppressMenu: true,
            suppressDragLeaveHidesColumns: true,
            suppressColumnVirtualisation: true,
            enableCellTextSelection: true
        };
        this.chlgColumnDefs = [
            {
                headerCheckboxSelection: false,
                checkboxSelection: true,
                suppressFilter: true,
                suppressSorting: true,
                width: 50
            },
            {
                headerName: 'VIN',
                headerTooltip: 'VIN',
                tooltipField: 'vin',
                field: 'vin',
                width: 150,
                suppressMenu: true,
                cellRenderer: "pageNavigateCellRendererComponent",
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Model No.',
                field: 'modelNo',
                width: 80,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true },
                cellRenderer: function (params) {
                    if (_this.ispService.challengeSelectedVIN && params.node.data && params.node.data.vin === _this.ispService.challengeSelectedVIN) {
                        params.node.setSelected(true);
                    }
                    return params.value;
                },
            },
            {
                headerName: 'Serial No.',
                field: 'serialNo',
                width: 100,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Series',
                field: 'series',
                width: 100,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Model Year',
                field: 'modelYear',
                width: 70,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Brand',
                field: 'brand',
                width: 100,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Customer Name',
                field: 'customerName',
                width: 180,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Retail Date',
                field: 'retailDate',
                width: 120,
                suppressMenu: true,
                floatingFilterComponent: 'customDateFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Incentive Category',
                field: 'category',
                width: 130,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Incentive Type',
                field: 'optionType',
                width: 100,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Incentive Type Name',
                field: 'incentiveTypeName',
                width: 150,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Challenge No',
                field: 'challengeNo',
                width: 100,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Challenge Submit Date',
                field: 'challengeSubmitDate',
                width: 120,
                suppressMenu: true,
                floatingFilterComponent: 'customDateFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Challenge Last Update Date',
                field: 'challengeLastUpdateDate',
                width: 120,
                suppressMenu: true,
                floatingFilterComponent: 'customDateFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Challenge Amt Total',
                field: 'challengeAmt',
                width: 100,
                suppressMenu: true,
                cellRenderer: "replaceZeroWithEmptyCellRendererComponent",
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Challenge Status',
                field: 'challengeStatus',
                width: 150,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Challenge Disposition Reason',
                field: 'dispositionReason',
                width: 150,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
        ];
    };
    ChallengesComponent.prototype.onReady = function (params) {
        this.api = params.api;
        this.readyParam = params;
        setTimeout(function () {
            // this.api.sizeColumnsToFit();
        }, 100);
    };
    /**
      @name loadGrid trigger on vin summary search.
      @param formDetails Search Request
    */
    ChallengesComponent.prototype.loadGrid = function (formDetails) {
        var _this = this;
        var rowData, rowcount, totalRows;
        var dataSource = {
            rowCount: totalRows,
            getRows: function (params) {
                _this.chlgRowData = [];
                _this.ispService.searchChallengeForm(formDetails)
                    .subscribe(function (data) {
                    if (data.responseMessage === '0' && data.result.results) {
                        rowcount = data.result.totalResults;
                        rowData = data['result']['results'];
                    }
                    else {
                        _this.messageService.showMessage(data.error.errMessage, 'error');
                    }
                    _this.totalRowCount = rowcount;
                    totalRows = _this.totalRowCount;
                    _this.totalPageCount = _this.gridCommonService.calculateTotalPages(rowcount, _this.paginationPageSize);
                    _this.chlgRowData = rowData;
                    if (_this.chlgRowData && _this.chlgRowData.length) {
                        _this.api.hideOverlay();
                    }
                    else {
                        _this.api.showNoRowsOverlay();
                    }
                    setTimeout(function () {
                        var rowsThisPage = rowData;
                        var lastRow = totalRows;
                        params.successCallback(rowsThisPage, lastRow);
                    }, 500);
                }, function (error) {
                    _this.chlgRowData = [];
                    _this.api.showNoRowsOverlay();
                    _this.totalPageCount = 0;
                    _this.totalRowCount = 0;
                    _this.buttonDisabled = {
                        firstButton: true,
                        previousButton: true,
                        nextButton: true,
                        lastButton: true
                    };
                });
            }
        };
        this.readyParam.api.setDatasource(dataSource);
    };
    /**
    @name onPaginationChanged trigger on pagination changes.
    */
    ChallengesComponent.prototype.onPaginationChanged = function (params) {
        if (this.api) {
            this.buttonDisabled = {
                firstButton: false,
                previousButton: false,
                nextButton: false,
                lastButton: false
            };
            if (this.api.paginationGetCurrentPage() + 1 === 1) {
                this.pageInputValue = this.api.paginationGetCurrentPage() + 1;
                this.buttonDisabled.firstButton = true;
                this.buttonDisabled.previousButton = true;
                // Disable first and previous buttons
            }
            else {
                this.pageInputValue = this.api.paginationGetCurrentPage() + 1;
                this.buttonDisabled.firstButton = false;
                this.buttonDisabled.previousButton = false;
                // enable first and previous buttons
                // check if the page number ast page
                if (this.pageInputValue === this.totalPageCount) {
                    this.buttonDisabled.lastButton = true;
                    this.buttonDisabled.nextButton = true;
                }
                this.challengeSearchRequest.pageNumber = this.api.paginationGetCurrentPage() + 1;
            }
            this.currentPageSet = this.gridCommonService.calculateCurrentPageSetValues(this.api.paginationGetCurrentPage(), this.paginationPageSize);
            if (this.totalRowCount <= this.paginationPageSize) {
                this.currentPageSet.end = this.totalRowCount;
                if (this.totalRowCount < 1) {
                    this.currentPageSet.start = 0;
                }
                this.buttonDisabled.lastButton = true;
                this.buttonDisabled.nextButton = true;
            }
        }
    };
    /**
       @name clearFilters- triggers on refresh icon clicked.
    */
    ChallengesComponent.prototype.clearFilters = function () {
        var _this = this;
        setTimeout(function () {
            _this.api.setFilterModel(null);
        }, 100);
        // perform service call to reset the grid data with the criteria in the form currently
        this.submitForm();
    };
    /**
       @name onBtFirst- triggers on pagination toFirst icon clicked.
    */
    ChallengesComponent.prototype.onBtFirst = function () {
        this.api.paginationGoToFirstPage();
    };
    /**
      @name onBtLast- triggers on pagination toLast icon clicked.
    */
    ChallengesComponent.prototype.onBtLast = function () {
        this.api.paginationGoToLastPage();
        this.isBtnLastClicked = true;
    };
    /**
      @name onBtLast- triggers on pagination next icon clicked.
    */
    ChallengesComponent.prototype.onBtNext = function () {
        this.api.paginationGoToNextPage();
    };
    /**
      @name onBtPrevious- triggers on pagination previous icon clicked.
    */
    ChallengesComponent.prototype.onBtPrevious = function () {
        this.api.paginationGoToPreviousPage();
    };
    /**
      @name onCustomPageChange- triggers on pagination text field changed and focused out.
      @param fieldValue - requested page number.
    */
    ChallengesComponent.prototype.onCustomPageChange = function (fieldValue) {
        this.pageInputValue = fieldValue;
        this.api.paginationGoToPage(this.pageInputValue - 1);
    };
    /** Grid Methods - END */
    /**
        @name onSortChanged - on sort model changes.
        @param event - sort event parameters.
        */
    ChallengesComponent.prototype.onSortChanged = function (event) {
        var sortModel = event.api.getSortModel();
        var sortPresent = sortModel && sortModel.length > 0;
        this.resetPageIndex();
        if (sortPresent) {
            this.challengeSearchRequest.sortData = [];
            this.challengeSearchRequest.sortData.push({ colName: sortModel[0].colId, order: sortModel[0].sort });
        }
        else {
            this.challengeSearchRequest.sortData = [];
        }
        // reset routing buttons to disabled state
        this.routeButtonState = true;
    };
    /**
      @name onFilterChanged - on filter model changes.
      @param event - filter event parameters.
      */
    ChallengesComponent.prototype.onFilterChanged = function (event) {
        var filterModel = event.api.getFilterModel();
        var filterPresent = filterModel && Object.keys(filterModel).length > 0;
        this.resetPageIndex();
        if (filterPresent) {
            this.challengeSearchRequest.filterData = [];
            for (var key in filterModel) {
                this.challengeSearchRequest.filterData.push({ 'filterName': key, 'filterValue': filterModel[key]['filter'] });
            }
        }
        else {
            this.challengeSearchRequest.filterData = [];
        }
        // reset routing buttons to disabled state
        this.routeButtonState = true;
    };
    ChallengesComponent.prototype.resetPageIndex = function () {
        this.challengeSearchRequest.pageNumber = 1;
    };
    /**
     @name printGrid trigger the service to print grid table
     */
    ChallengesComponent.prototype.printGrid = function () {
        var gridEle = document.getElementById('vinSummaryGrid');
        this.printService.printGrid(gridEle, this.gridOptions, this.api);
    };
    //exports to excel based on search criteria 
    ChallengesComponent.prototype.excelExportForm = function () {
        this.challengeSearchRequest.showAll = true;
        this.challengeSearchRequest.pageNumber = 1;
        // setting the max count of data based on any previous search service calls
        this.challengeSearchRequest.totalResults = this.totalRowCount;
        this.excelConfig(this.challengeSearchRequest);
        // IPLUS-11093 Excel download feature not working in subsequent pages
        this.challengeSearchRequest.showAll = false;
    };
    /**
    @name excel export trigger on Challenge Summary .
    @param request Search Request query param
    */
    ChallengesComponent.prototype.excelConfig = function (request) {
        var _this = this;
        var rowData, excelChallengeData;
        var excelHeader = [];
        var emptyHeader = [];
        var challengeStatus = (this.challengeSearchRequest.queryParams.status == '') ? 'NA' : this.challengeSearchRequest.queryParams.status;
        var reportHeading = ["CHALLENGE SUMMARY", this.excelService.getCurrentDate()];
        var reporSubHeading = ['Challenge Status', challengeStatus.toUpperCase()];
        excelHeader.push(emptyHeader);
        excelHeader.push(emptyHeader);
        excelHeader.push(emptyHeader);
        excelHeader.push(reportHeading);
        excelHeader.push(emptyHeader);
        excelHeader.push(reporSubHeading);
        excelHeader.push(emptyHeader);
        this.ispService.searchChallengeForm(request)
            .subscribe(function (data) {
            rowData = data['result']['results'];
            excelChallengeData = _this.setChallengeExcelResponse(rowData);
            _this.excelService.generateExcel(excelHeader, excelChallengeData, 'searchChlngSummary', 'ChallengeSummary');
        });
    };
    ChallengesComponent.prototype.setChallengeExcelResponse = function (rowData) {
        var excelList = new Array();
        rowData.forEach(function (element) {
            var excelResp = new _shared_dataModels_excelChallengeSearchResponse__WEBPACK_IMPORTED_MODULE_13__["ExcelResponseChallengeSearch"]();
            excelResp.setVin(element.vin);
            excelResp.setModelNo(element.modelNo);
            excelResp.setSerialNo(element.serialNo);
            excelResp.setSeries(element.series);
            excelResp.setModelYear(element.modelYear);
            excelResp.setBrand(element.brand);
            excelResp.setCustomerName(element.customerName);
            excelResp.setRetailDate(element.retailDate);
            excelResp.setOptionType(element.optionType);
            excelResp.setIncentiveTypeNo(element.incentiveTypeNo);
            excelResp.setIncentiveTypeName(element.incentiveTypeName);
            excelResp.setChallengeNo(element.challengeNo);
            excelResp.setChallengeStatus(element.challengeStatus);
            excelResp.setChallengeSubmitDate(element.challengeSubmitDate);
            excelResp.setChallengeLastUpdateDate(element.challengeLastUpdateDate);
            excelResp.setChallengeAmt(element.challengeAmt);
            excelList.push(excelResp);
        });
        return excelList;
    };
    ChallengesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-challenges',
            template: __webpack_require__(/*! ./challenges.component.html */ "./src/app/challenges/challenges.component.html"),
            styles: [__webpack_require__(/*! ./challenges.component.scss */ "./src/app/challenges/challenges.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _isp_app_service__WEBPACK_IMPORTED_MODULE_6__["IspAppService"], _shared_services_isp_app_config_service__WEBPACK_IMPORTED_MODULE_4__["ISPAppConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _shared_grid_grid_common_service__WEBPACK_IMPORTED_MODULE_7__["GridCommonService"], _shared_services_print_data_grid_service__WEBPACK_IMPORTED_MODULE_11__["PrintDataGridService"], _shared_services_isp_excel_service__WEBPACK_IMPORTED_MODULE_12__["ExcelExportService"], _shared_message_handler_message_handler_service__WEBPACK_IMPORTED_MODULE_14__["MessageService"],
            _shared_services_user_info_service__WEBPACK_IMPORTED_MODULE_15__["UserInfoService"]])
    ], ChallengesComponent);
    return ChallengesComponent;
}());



/***/ }),

/***/ "./src/app/challenges/challenges.guard.ts":
/*!************************************************!*\
  !*** ./src/app/challenges/challenges.guard.ts ***!
  \************************************************/
/*! exports provided: ChallengesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesGuard", function() { return ChallengesGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_user_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/user-info.service */ "./src/app/shared/services/user-info.service.ts");




var ChallengesGuard = /** @class */ (function () {
    function ChallengesGuard(router, userInfoService) {
        this.router = router;
        this.userInfoService = userInfoService;
    }
    ChallengesGuard.prototype.canActivate = function (route, state) {
        return this.userInfoService.checkRole();
    };
    ChallengesGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_user_info_service__WEBPACK_IMPORTED_MODULE_3__["UserInfoService"]])
    ], ChallengesGuard);
    return ChallengesGuard;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.html":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contact-us works!\n</p>\n"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.scss":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.scss */ "./src/app/contact-us/contact-us.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/deal-review-details/deal-review-details.component.html":
/*!************************************************************************!*\
  !*** ./src/app/deal-review-details/deal-review-details.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-message-handler></app-message-handler>\r\n<app-breadcrumb></app-breadcrumb>\r\n<div class=\"container-fluid mt-2\">\r\n  <mat-card style=\"background-color:#f5f5f5;\">\r\n    <mat-card-header>\r\n      <mat-card-title>\r\n        <label class=\"font-weight-bold\">{{'labels.Deal_Review_No'|translate}} {{drDetails.vehicleDetail.id}}</label>\r\n      </mat-card-title>\r\n      <span class=\"space-away\"></span>\r\n      <mat-icon matTooltip=\"Print\" class=\"ip-mat-icon\" (click)=\"printDetails()\">local_printshop</mat-icon>\r\n    </mat-card-header>\r\n    <mat-divider></mat-divider>\r\n    <mat-card-content>\r\n      <div class=\"row mt-2 mx-0\">\r\n        <div class=\"col-md-4 col-sm-12 px-1 col-print-6\">\r\n          <div class=\"row ml-2\">\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Model_No'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{drDetails.vehicleDetail.modelNo}}</div>\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Serial_No'|translate}}.</strong></div>\r\n            <div class=\"col-6 my-1\">{{drDetails.vehicleDetail.serialNo}}</div>\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Model_Year'|translate}}.</strong></div>\r\n            <div class=\"col-6 my-1\">{{drDetails.vehicleDetail.modelYear}}</div>\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Series'|translate}} </strong></div>\r\n            <div class=\"col-6 my-1\">{{drDetails.vehicleDetail.series}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-12 px-1 col-print-6\">\r\n          <div class=\"row ml-1\">\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Customer_Name'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{drDetails.vehicleDetail.customerName}}</div>\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Retail_Date'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{drDetails.vehicleDetail.retailDt}}</div>\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.RDR_Date'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{drDetails.vehicleDetail.rdrDate}}</div>\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Deal_Review_Status'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{drDetails.vehicleDetail.dealreviewStatus}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-12 px-1 col-print-6\">\r\n          <div class=\"row ml-1\">\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Deal_Review_Created_On'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{drCreatedDate | date:'MM/dd/yyyy hh:mm'}}</div>\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Deal_Review_Dealer_Submit_Date'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{drSubmitDate | date:'MM/dd/yyyy hh:mm'}}</div>\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Deal_Review_Last_Update_Date'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{drLastUpdateDate | date:'MM/dd/yyyy hh:mm' }}</div>\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Deal_Review_Disposition_Date'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{drDispositionDate | date:'MM/dd/yyyy hh:mm'}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br>\r\n    </mat-card-content>\r\n  </mat-card>\r\n  <mat-card class=\" card-color \" [style.overflow]=\"'auto'\" [style.height.px]=\"'110'\">\r\n    <table class=\"incentiveTable\">\r\n      <tr>\r\n        <th>{{'labels.Incentive_Category'|translate}} </th>\r\n        <th>{{'labels.Incentive_Type'|translate}}</th>\r\n        <th>{{'labels.Incentive_Type_Name'|translate}}</th>\r\n        <th>{{'labels.Incentive_Type_No'|translate}}</th>\r\n        <th>{{'labels.Incentive_Status'|translate}}</th>\r\n      </tr>\r\n      <tr *ngFor=\"let data of drDetails.optionType; let i=index; let o= odd; let e=even;\" [ngClass]=\"{ odd: e, even: o }\">\r\n        <td>{{data.incentiveCategory}}</td>\r\n        <td>{{data.optionType}}</td>\r\n        <td>{{data.incentiveTypeName}}</td>\r\n        <td>{{data.incentiveTypeNo}}</td>\r\n        <td>{{data.incentiveStatus}}</td>\r\n      </tr>\r\n    </table>\r\n\r\n  </mat-card>\r\n\r\n</div>\r\n<div>\r\n  <div class=\"row mt-3\">\r\n    <div class=\"col-lg-7 col-print-12 mb-4\">\r\n      <mat-card style=\"height:360px;\">\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            <label class=\"font-weight-bold\">{{'labels.Documents_Required'|translate}}</label>\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <div class=\"document-table-container\">\r\n            <table>\r\n              <tr>\r\n                <th>{{'labels.Document_Description'|translate}}</th>\r\n                <th>{{'labels.Incentive_Types'|translate}}</th>\r\n                <th>{{'labels.File_Name'|translate}}</th>\r\n                <th>{{'labels.Uploaded_On'|translate}}</th>\r\n                <th>{{'labels.File_Actions'|translate}}</th>\r\n              </tr>\r\n              <ng-container *ngFor=\"let doc of drDetails.requierdDocumentsDto ; index as i; \">\r\n                <tr>\r\n                  <td>{{doc.documentDescription}} </td>\r\n                  <td>{{doc.optionTypes}} </td>\r\n                  <td> <a href=\"JavaScript:void(0);\" (click)=\"getDocument(doc?.fileName, doc?.attatchmentId)\">{{doc.fileName}}</a></td>\r\n                  <td>{{doc.uploadedOn | date : 'MM/dd/yyyy hh:mm'}}\r\n                  </td>\r\n                  <td *ngIf='doc?.fileName === null'>\r\n                    <input #attachmentList (click)=\"attachmentList.value = null\" type=\"file\" (change)=\"uploadDocument($event, i)\"\r\n                      value=\"\" id=\"attachmentList\" name=\"attachmentList\" style=\"width: 300px;display:none;\">\r\n                    <span (click)=\"attachmentList.click()\" class=\"fileUpload\" style=\"cursor: pointer;\">\r\n                      <mat-icon matTooltip=\"Add\" class=\"ip-mat-icon\">add</mat-icon><span style=\"vertical-align: 5px;\">{{'labels.Attach_File'|translate}}</span>\r\n                    </span>\r\n                  </td>\r\n                  <td *ngIf='doc?.fileName !== null && isPendingSubmit'>\r\n                    <span (click)=\"deleteFile(i)\" class=\"fileUpload\" style=\"cursor: pointer;\">\r\n                      <mat-icon matTooltip=\"Delete\" class=\"ip-mat-icon\">delete</mat-icon> <span style=\"vertical-align: 5px;\">{{'labels.Delete_Attachment'|translate}}</span>\r\n                    </span>\r\n                  </td>\r\n                  <td *ngIf='doc?.fileName !== null && !isPendingSubmit'>\r\n                    <mat-icon matTooltip=\"Delete\" class=\"ip-mat-icon\" style=\"cursor:context-menu !important;\">delete</mat-icon>\r\n                    <span style=\"vertical-align: 5px; opacity: 0.5; cursor:context-menu !important;\">{{'labels.Delete_Attachment'|translate}}</span>\r\n                  </td>\r\n                </tr>\r\n              </ng-container>\r\n            </table>\r\n          </div>\r\n          <label><span style=\"color:red;padding-left:4px;\">* </span><span>{{'labels.Mandatory_Documents'|translate}}</span>\r\n          </label><br>\r\n          <label><span style=\"color:red;padding-left:4px;\">* </span><span>{{'labels.Valid_Documents_Type'|translate}}</span>\r\n          </label><br>\r\n          <label><span style=\"color:red;padding-left:4px;\">* </span> <span class=\"mandatory\">{{'labels.Deal_Review_Upload'|translate}}\r\n            </span> </label>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-lg-5 col-print-12 mb-4\">\r\n      <mat-card style=\"height:360px;\">\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            <label class=\"font-weight-bold\">{{'labels.Comment_Log'|translate}}</label>\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n        <mat-divider></mat-divider>\r\n        <mat-card-content>\r\n          <span style=\"float: left;\" class=\"mt-2 ml-2 print-hide\">{{'labels.Enter_Comments'|translate}}</span>\r\n          <span style=\"float: right;\" class=\"mt-2 mr-2 print-hide\">{{'labels.Max_Char_Length'|translate}}</span>\r\n          <textarea maxlength=\"1000\" class=\"text mt-2 ml-2 print-hide\" [(ngModel)]=\"drDetails.comments\" [disabled]=\"!isPendingSubmit\"></textarea>\r\n          <table class=\"mt-2\">\r\n            <tr>\r\n              <th>{{'labels.Date'|translate}}</th>\r\n              <th>{{'labels.Prior_Comments'|translate}}</th>\r\n              <th>{{'labels.Status'|translate}}</th>\r\n              <th>{{'labels.Username'|translate}}</th>\r\n            </tr>\r\n            <ng-container *ngFor=\"let cmt of drDetails.commentLog\">\r\n              <tr>\r\n                <td>{{cmt.date}}</td>\r\n                <td>{{cmt.priorComments}}</td>\r\n                <td>{{cmt.dealStatus}}</td>\r\n                <td>{{cmt.emplioyeeId}}</td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n<mat-toolbar class=\"buttons-panel print-hide\">\r\n  <mat-toolbar-row>\r\n    <span class=\"space-away\"></span>\r\n    <button id=\"saveBtn\" mat-raised-button matTooltip=\"Save Records\" (click)=\"saveClick()\" [disabled]=\"!isPendingSubmit\">\r\n      {{'button.Save'|translate}}\r\n    </button>\r\n    <button id=\"submitBtn\" class=\"iplus_Btn_Primary ml-2\" mat-raised-button matTooltip=\"Submit Records\" (click)=\"submitClick()\"\r\n      [disabled]=\"!isPendingSubmit\">\r\n     {{'button.Submit'|translate}}\r\n    </button>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/deal-review-details/deal-review-details.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/deal-review-details/deal-review-details.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  border: 1px solid #c2c2c2;\n  padding: 0;\n  border-radius: 4px; }\n\n.mat-card {\n  padding: 0px; }\n\n.mat-card * {\n  font-size: 12px; }\n\n.mat-card-header {\n  padding: 10px;\n  background-color: #efefef;\n  background-image: linear-gradient(to bottom, #efefef, #ffffff); }\n\n.mat-card-header .mat-card-title {\n  font-size: 12px;\n  margin: 0px; }\n\n.mat-card-header-text {\n  margin: 0px; }\n\n.text {\n  height: 62px;\n  width: 98%; }\n\n.incentiveTable th {\n  background-color: #efefef;\n  background-image: linear-gradient(to bottom, #efefef, #ffffff); }\n\nth {\n  border: 1px solid #dddddd;\n  padding: 5px; }\n\ntd {\n  border: 1px solid #dddddd;\n  padding: 2px; }\n\ntable {\n  border-collapse: collapse;\n  width: 100% !important;\n  border-bottom: 2px solid #ddd; }\n\n.even {\n  background-color: #f3f3f3; }\n\n.odd {\n  background-color: #ffffff; }\n\n.space {\n  width: 207px;\n  padding: 3px; }\n\n.space1 {\n  width: 65px !important; }\n\n.move {\n  position: relative;\n  left: 300px; }\n\n.document-table-container {\n  max-height: 230px;\n  min-height: 50px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  margin-bottom: 10px;\n  border-bottom: 1px solid #c2c2c2; }\n\n::ng-deep body.print-details .mat-form-field-flex {\n  height: 30px !important; }\n\n::ng-deep body.print-details .mat-form-field-appearance-outline .mat-form-field-infix {\n  padding: 0 5px 0 5px; }\n\n::ng-deep.mat-card-header-text {\n  margin-left: 0px !important; }\n\n::ng-deep.mat-card-header-text label {\n  margin-bottom: 0px !important; }\n\n.mandatory {\n  color: #c40a0a; }\n\nmat-card {\n  border: 1px solid #c2c2c2 !important; }\n\n@media print {\n  @page {\n    size: portrait !important; }\n  ::ng-deep body.print-details {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    margin: auto;\n    zoom: 100%; }\n  .col-print-6 {\n    flex: 0 0 50% !important;\n    max-width: 50% !important; }\n  .col-print-12 {\n    flex: 0 0 100% !important;\n    max-width: 100% !important; }\n  mat-form-field,\n  .ip-mat-icon.mat-icon,\n  .print-hide {\n    display: none !important; }\n  mat-card {\n    margin-bottom: 10px; }\n  .card-color.mat-card {\n    height: auto !important;\n    overflow: initial !important; }\n  .container-fluid.mt-2 {\n    border: 0px; }\n  .document-table-container {\n    max-height: auto;\n    overflow-y: visible;\n    overflow-x: visible; } }\n\n::ng-deep.print-details .mat-toolbar.buttons-panel {\n  bottom: 8% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVhbC1yZXZpZXctZGV0YWlscy9DOlxcRlNEXFxwb2xpY3ktbWFuYWdlbWVudC9zcmNcXGFwcFxcZGVhbC1yZXZpZXctZGV0YWlsc1xcZGVhbC1yZXZpZXctZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1Ysa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFLekIsOERBQThELEVBQUE7O0FBRWhFO0VBQ0UsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFFYjtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLFlBQVk7RUFDWixVQUFVLEVBQUE7O0FBRVo7RUFDRSx5QkFBeUI7RUFDekIsOERBQThELEVBQUE7O0FBR2hFO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVksRUFBQTs7QUFFZDtFQUNFLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7O0FBRWQ7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLDZCQUE2QixFQUFBOztBQUUvQjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLFlBQVk7RUFDWixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUViO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQ0FBZ0MsRUFBQTs7QUFFbEM7RUFDRSx1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSxvQkFBb0IsRUFBQTs7QUFFdEI7RUFDRSwyQkFBMkIsRUFBQTs7QUFFN0I7RUFDRSw2QkFBNkIsRUFBQTs7QUFFL0I7RUFDRSxjQUFjLEVBQUE7O0FBRWhCO0VBQ0Usb0NBQW9DLEVBQUE7O0FBRXRDO0VBQ0U7SUFDRSx5QkFBeUIsRUFBQTtFQUUzQjtJQUNFLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFVBQVUsRUFBQTtFQUVaO0lBQ0Usd0JBQXdCO0lBQ3hCLHlCQUF5QixFQUFBO0VBRTNCO0lBQ0UseUJBQXlCO0lBQ3pCLDBCQUEwQixFQUFBO0VBRTVCOzs7SUFHRSx3QkFBd0IsRUFBQTtFQUUxQjtJQUNFLG1CQUFtQixFQUFBO0VBRXJCO0lBQ0UsdUJBQXVCO0lBQ3ZCLDRCQUE0QixFQUFBO0VBRTlCO0lBQ0UsV0FBVyxFQUFBO0VBRWI7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1CQUFtQixFQUFBLEVBQ3BCOztBQUdIO0VBQ0UscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZWFsLXJldmlldy1kZXRhaWxzL2RlYWwtcmV2aWV3LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYzJjMmMyO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5tYXQtY2FyZCB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5tYXQtY2FyZCAqIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLm1hdC1jYXJkLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2VmZWZlZiwgI2ZmZmZmZik7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZWZlZmVmLCAjZmZmZmZmKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCAjZWZlZmVmKSwgY29sb3Itc3RvcCgxMDAlLCAjZmZmZmZmKSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgI2VmZWZlZiwgI2ZmZmZmZik7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2VmZWZlZiwgI2ZmZmZmZik7XHJcbn1cclxuLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG4ubWF0LWNhcmQtaGVhZGVyLXRleHQge1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcbi50ZXh0IHtcclxuICBoZWlnaHQ6IDYycHg7XHJcbiAgd2lkdGg6IDk4JTtcclxufVxyXG4uaW5jZW50aXZlVGFibGUgdGgge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2VmZWZlZiwgI2ZmZmZmZik7XHJcbn1cclxuXHJcbnRoIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG50ZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxudGFibGUge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZDtcclxufVxyXG4uZXZlbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcclxufVxyXG4ub2RkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5zcGFjZSB7XHJcbiAgd2lkdGg6IDIwN3B4O1xyXG4gIHBhZGRpbmc6IDNweDtcclxufVxyXG4uc3BhY2UxIHtcclxuICB3aWR0aDogNjVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tb3ZlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogMzAwcHg7XHJcbn1cclxuLmRvY3VtZW50LXRhYmxlLWNvbnRhaW5lciB7XHJcbiAgbWF4LWhlaWdodDogMjMwcHg7XHJcbiAgbWluLWhlaWdodDogNTBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzJjMmMyO1xyXG59XHJcbjo6bmctZGVlcCBib2R5LnByaW50LWRldGFpbHMgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xyXG4gIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCBib2R5LnByaW50LWRldGFpbHMgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gIHBhZGRpbmc6IDAgNXB4IDAgNXB4O1xyXG59XHJcbjo6bmctZGVlcC5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcC5tYXQtY2FyZC1oZWFkZXItdGV4dCBsYWJlbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hbmRhdG9yeSB7XHJcbiAgY29sb3I6ICNjNDBhMGE7XHJcbn1cclxubWF0LWNhcmQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMmMyYzIgIWltcG9ydGFudDtcclxufVxyXG5AbWVkaWEgcHJpbnQge1xyXG4gIEBwYWdlIHtcclxuICAgIHNpemU6IHBvcnRyYWl0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCBib2R5LnByaW50LWRldGFpbHMge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHpvb206IDEwMCU7XHJcbiAgfVxyXG4gIC5jb2wtcHJpbnQtNiB7XHJcbiAgICBmbGV4OiAwIDAgNTAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY29sLXByaW50LTEyIHtcclxuICAgIGZsZXg6IDAgMCAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgbWF0LWZvcm0tZmllbGQsXHJcbiAgLmlwLW1hdC1pY29uLm1hdC1pY29uLFxyXG4gIC5wcmludC1oaWRlIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgbWF0LWNhcmQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgLmNhcmQtY29sb3IubWF0LWNhcmQge1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY29udGFpbmVyLWZsdWlkLm10LTIge1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgfVxyXG4gIC5kb2N1bWVudC10YWJsZS1jb250YWluZXIge1xyXG4gICAgbWF4LWhlaWdodDogYXV0bztcclxuICAgIG92ZXJmbG93LXk6IHZpc2libGU7XHJcbiAgICBvdmVyZmxvdy14OiB2aXNpYmxlO1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwLnByaW50LWRldGFpbHMgLm1hdC10b29sYmFyLmJ1dHRvbnMtcGFuZWwge1xyXG4gIGJvdHRvbTogOCUgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/deal-review-details/deal-review-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/deal-review-details/deal-review-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: DealReviewDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealReviewDetailsComponent", function() { return DealReviewDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_dataModels_dealReviewDetailsRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dataModels/dealReviewDetailsRequest */ "./src/app/shared/dataModels/dealReviewDetailsRequest.ts");
/* harmony import */ var _shared_dataModels_dealReviewDetailsResponseHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/dataModels/dealReviewDetailsResponseHeader */ "./src/app/shared/dataModels/dealReviewDetailsResponseHeader.ts");
/* harmony import */ var _isp_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isp-app.service */ "./src/app/isp-app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_isp_app_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/isp-app-config.service */ "./src/app/shared/services/isp-app-config.service.ts");
/* harmony import */ var _shared_services_print_data_grid_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/print-data-grid.service */ "./src/app/shared/services/print-data-grid.service.ts");
/* harmony import */ var _shared_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/confirm-modal/confirm-modal.service */ "./src/app/shared/confirm-modal/confirm-modal.service.ts");
/* harmony import */ var _shared_message_handler_message_handler_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/message-handler/message-handler.service */ "./src/app/shared/message-handler/message-handler.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_10__);











var DealReviewDetailsComponent = /** @class */ (function () {
    function DealReviewDetailsComponent(printService, ispService, renderer, router, route, ispAppConfigService, confirmModalServ, messageService) {
        this.printService = printService;
        this.ispService = ispService;
        this.renderer = renderer;
        this.router = router;
        this.route = route;
        this.ispAppConfigService = ispAppConfigService;
        this.confirmModalServ = confirmModalServ;
        this.messageService = messageService;
        this.errorBar = true;
        this.savemessage = false;
        this.dealReviewSaved = false;
        this.isPendingSubmit = false;
        this.isReadOnly = false;
        this.docList = [];
        this.headerObj = this.ispAppConfigService.getHeaderDetails();
        this.drDetails = new _shared_dataModels_dealReviewDetailsResponseHeader__WEBPACK_IMPORTED_MODULE_3__["DRDetailsResultHeader"]();
        this.emptyFile = new Blob([''], { type: 'application/octet-stream' });
    }
    DealReviewDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.renderer.addClass(document.body, 'print-details');
        this.setRequestObjectdr();
        this.Headersubscription = this.ispService.getDRPaymentDetails(this.requestObjectdr).subscribe(function (success) {
            _this.drDetails = success;
            _this.isPendingSubmit = !_this.isReadOnly ? (_this.drDetails.vehicleDetail.dealreviewStatus.toUpperCase() === 'RETURNED' || _this.drDetails.vehicleDetail.dealreviewStatus.toUpperCase() === 'PENDING SUBMIT') : false;
            if (success.dealreviewRequestDate !== null) {
                _this.drCreatedDate = new Date(success.dealreviewRequestDate);
            }
            if (success.dealreviewSubmitDate !== null) {
                _this.drSubmitDate = new Date(success.dealreviewSubmitDate);
            }
            if (success.iagDealReviewLastUpdateDate !== null) {
                _this.drLastUpdateDate = new Date(success.iagDealReviewLastUpdateDate);
            }
            if (success.dealReviewDispositionDate !== null) {
                _this.drDispositionDate = new Date(success.dealReviewDispositionDate);
            }
            if (success.vehicleDetail.retailDate !== null) {
                _this.drDetails.vehicleDetail.retailDt = success.vehicleDetail.retailDate;
            }
            for (var i = 0; i < success.requierdDocumentsDto.length; i++) {
                _this.docList[i] = _this.emptyFile;
                _this.uploadedDate = success.requierdDocumentsDto[i].uploadedOn;
            }
        });
    };
    DealReviewDetailsComponent.prototype.setRequestObjectdr = function () {
        this.requestObjectdr = new _shared_dataModels_dealReviewDetailsRequest__WEBPACK_IMPORTED_MODULE_2__["DRDetailsRequest"]();
        this.requestObjectdr.queryParams.dealerCode = this.headerObj.dealerCode;
        this.requestObjectdr.queryParams.dealReviewNo = this.route.snapshot.paramMap.get('dealReviewNo');
    };
    DealReviewDetailsComponent.prototype.formRequest = function () {
        var formData = new FormData();
        formData.append('dealerCode', this.headerObj.dealerCode);
        formData.append('dealReviewNo', this.route.snapshot.paramMap.get('dealReviewNo'));
        formData.append('docReqStr', JSON.stringify(this.drDetails.requierdDocumentsDto));
        formData.append('commentLog', JSON.stringify(this.drDetails.commentLog));
        formData.append('excel', '');
        formData.append('comment', this.drDetails.comments ? this.drDetails.comments : '');
        if (this.docList && this.docList.length) {
            this.docList.forEach(function (obj) {
                if (obj.size === 0 && obj.type === 'application/octet-stream') {
                    formData.append('file', obj, '');
                }
                else {
                    formData.append('file', obj);
                }
            });
        }
        return formData;
    };
    DealReviewDetailsComponent.prototype.saveClick = function () {
        var _this = this;
        this.formRequest();
        this.ispService.saveDealReview(this.formRequest()).subscribe(function (success) {
            if (success.responseMessage === '1') {
                _this.messageService.showMessage(success.error.errMessage, 'error');
            }
            else {
                _this.drDetails = success;
                _this.messageService.showMessage('Your updates have been saved', 'success');
            }
        });
    };
    DealReviewDetailsComponent.prototype.submitClick = function () {
        var _this = this;
        var proceedFlag = true;
        // check if at least one document has been uploaded and it's extension is proper
        if (proceedFlag && this.drDetails.requierdDocumentsDto) {
            var uploadCounter_1 = 0;
            this.drDetails.requierdDocumentsDto.forEach(function (element) {
                if (element.uploadedOn == null) {
                    uploadCounter_1++;
                }
            });
            if (uploadCounter_1) {
                proceedFlag = false;
                this.messageService.showMessage('Must provide documents', 'error');
            }
        }
        if (proceedFlag) {
            this.messageService.hideMessage();
            this.confirmModalServ.showConfirm('No further changes will be allowed once submitted').afterClosed().subscribe(function (result) {
                if (result) {
                    _this.ispService.submitDealReview(_this.formRequest()).subscribe(function (success) {
                        _this.drDetails = success;
                        _this.router.navigate(['/dealReviews']);
                    });
                }
            });
        }
    };
    DealReviewDetailsComponent.prototype.printDetails = function () {
        this.printService.printDetails('portrait');
    };
    DealReviewDetailsComponent.prototype.uploadDocument = function (event, index) {
        var files = event.target.files;
        var file = files[0];
        var allowedFiles = ['.doc', '.docx', '.ppt', '.pptx', '.pptm', '.xls', '.xlsx', 'xlsm', '.pdf', '.zip', '.zipx', '.rar'];
        var regex = new RegExp("(" + allowedFiles.join('|') + ")$");
        if (files.length > 0) {
            if (!regex.test(file.name)) {
                this.messageService.showMessage('Please upload correct format file', 'error');
                setTimeout(function () {
                    window.scrollTo(0, 0);
                }, 100);
            }
            else {
                if (file.size > 5242880) { // IPLUS-9729 - Increased file upload size to 5MB -5242880 bytes
                    this.messageService.showMessage('Please upload file size less than 5MB', 'error');
                    setTimeout(function () {
                        window.scrollTo(0, 0);
                    }, 100);
                }
                else {
                    // Suppressing the error message when there's no error
                    this.messageService.hideMessage();
                    this.drDetails.requierdDocumentsDto[index].fileName = file.name;
                    this.drDetails.requierdDocumentsDto[index].uploadedOn = new Date().getTime();
                    this.docList[index] = (files[0]);
                }
            }
        }
    };
    DealReviewDetailsComponent.prototype.getDocument = function (fName, id) {
        var _this = this;
        var formData = new FormData();
        formData.append('attachmentId', id);
        var name = [];
        name.push(fName.substring(0, fName.lastIndexOf('.')));
        name.push(fName.substring(fName.lastIndexOf('.') + 1));
        // const name = fName.split('.');
        var fileName = name[0] + '.' + name[1];
        this.ispService.getDealDocument(formData).subscribe(function (success) {
            if (success.responseMessage === '1') {
                _this.messageService.showMessage(success.error.errMessage, 'error');
            }
            else {
                Object(file_saver__WEBPACK_IMPORTED_MODULE_10__["saveAs"])(success, fileName);
            }
        });
    };
    DealReviewDetailsComponent.prototype.deleteFile = function (index) {
        this.docList[index] = this.emptyFile;
        this.drDetails.requierdDocumentsDto[index].fileName = null;
        this.drDetails.requierdDocumentsDto[index].uploadedOn = null;
    };
    DealReviewDetailsComponent.prototype.ngOnDestroy = function () {
        this.Headersubscription.unsubscribe();
        this.renderer.removeClass(document.body, 'print-details');
    };
    DealReviewDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deal-review-details',
            template: __webpack_require__(/*! ./deal-review-details.component.html */ "./src/app/deal-review-details/deal-review-details.component.html"),
            styles: [__webpack_require__(/*! ./deal-review-details.component.scss */ "./src/app/deal-review-details/deal-review-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_print_data_grid_service__WEBPACK_IMPORTED_MODULE_7__["PrintDataGridService"], _isp_app_service__WEBPACK_IMPORTED_MODULE_4__["IspAppService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _shared_services_isp_app_config_service__WEBPACK_IMPORTED_MODULE_6__["ISPAppConfigService"], _shared_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalService"], _shared_message_handler_message_handler_service__WEBPACK_IMPORTED_MODULE_9__["MessageService"]])
    ], DealReviewDetailsComponent);
    return DealReviewDetailsComponent;
}());



/***/ }),

/***/ "./src/app/deal-review-details/deal-review-details.guard.ts":
/*!******************************************************************!*\
  !*** ./src/app/deal-review-details/deal-review-details.guard.ts ***!
  \******************************************************************/
/*! exports provided: DealReviewDetailsGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealReviewDetailsGuard", function() { return DealReviewDetailsGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_user_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/user-info.service */ "./src/app/shared/services/user-info.service.ts");




var DealReviewDetailsGuard = /** @class */ (function () {
    function DealReviewDetailsGuard(router, userInfoService) {
        this.router = router;
        this.userInfoService = userInfoService;
    }
    DealReviewDetailsGuard.prototype.canActivate = function (route, state) {
        return this.userInfoService.checkRole() && this.userInfoService.editAccess();
    };
    DealReviewDetailsGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_user_info_service__WEBPACK_IMPORTED_MODULE_3__["UserInfoService"]])
    ], DealReviewDetailsGuard);
    return DealReviewDetailsGuard;
}());



/***/ }),

/***/ "./src/app/deal-reviews/deal-reviews.component.html":
/*!**********************************************************!*\
  !*** ./src/app/deal-reviews/deal-reviews.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-message-handler></app-message-handler>\r\n\r\n<mat-toolbar style=\"width: auto;\">\r\n  <mat-toolbar-row>\r\n    <span><strong class=\"bold_text\">{{'title.Deal_Reviews' | translate}}</strong></span>\r\n    <span class=\"space-away\"></span>\r\n    <mat-icon matTooltip=\"Print\" class=\"ip-mat-icon\" (click)=\"printGrid()\">local_printshop</mat-icon>\r\n    <span style=\"padding-left: 20px\"></span>\r\n    <i class=\"fa fa-file-excel-o fa-lg\" matTooltip=\"Export to Excel\" style=\"font-size: 16px;\"\r\n      (click)=\"excelExportForm()\"></i>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<div class=\"row mt-2 ml-1 search-form\">\r\n  <div class=\"col-lg-2 col-md-6 col-sm-12\">\r\n    <label><strong>{{'labels.Search_by'|translate}}</strong></label>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <mat-radio-group aria-labelledby=\"radio-group-label\" [(ngModel)]=\"searchOption\">\r\n          <mat-radio-button checked style='display: block' value=\"1\" (change)=\"disableInput($event.value)\">\r\n            {{'labels.New_Updates'|translate}}</mat-radio-button>\r\n        </mat-radio-group>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-4 col-md-6 col-sm-12\">\r\n    <label><strong>Search by Status</strong></label>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <mat-radio-group aria-labelledby=\"radio-group-label\" [(ngModel)]=\"searchOption\">\r\n          <mat-radio-button style='display: block' value=\"2\" (change)=\"disableInput($event.value)\">\r\n            {{'labels.All' | translate}}</mat-radio-button>\r\n          <mat-radio-button style='display: block' value=\"3\" (change)=\"disableInput($event.value)\">\r\n            {{'labels.Approved' | translate}}</mat-radio-button>\r\n          <mat-radio-button style='display: block' value=\"4\" (change)=\"disableInput($event.value)\">\r\n            {{'labels.Returned' | translate}}</mat-radio-button>\r\n        </mat-radio-group>\r\n      </div>\r\n      <div class=\"col\">\r\n        <mat-radio-group aria-labelledby=\"radio-group-label\" [(ngModel)]=\"searchOption\">\r\n          <mat-radio-button style='display: block' value=\"5\" (change)=\"disableInput($event.value)\">\r\n            {{'labels.Partial_Approved' | translate}}</mat-radio-button>\r\n          <mat-radio-button style='display: block' value=\"6\" (change)=\"disableInput($event.value)\">\r\n            {{'labels.Submitted' | translate}}</mat-radio-button>\r\n        </mat-radio-group>\r\n      </div>\r\n      <div class=\"col\">\r\n        <mat-radio-group aria-labelledby=\"radio-group-label\" [(ngModel)]=\"searchOption\">\r\n          <mat-radio-button style='display: block' value=\"7\" (change)=\"disableInput($event.value)\">\r\n            {{'labels.Pending_Submit' | translate}}</mat-radio-button>\r\n          <mat-radio-button style='display: block' value=\"8\" (change)=\"disableInput($event.value)\">\r\n            {{'labels.Denied' | translate}}</mat-radio-button>\r\n        </mat-radio-group>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-3 col-md-6 col-sm-12\">\r\n    <label><strong>{{'labels.Search_by' | translate}}</strong></label>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <mat-radio-group aria-labelledby=\"radio-group-label\" [(ngModel)]=\"searchOption\">\r\n          <mat-radio-button style='display: block' value=\"9\" (change)=\"enableInput($event.value)\">\r\n            <strong>{{'labels.VIN' | translate}}</strong>\r\n          </mat-radio-button>\r\n          <mat-radio-button style='display: block' value=\"10\" (change)=\"enableInput($event.value)\">\r\n            <strong>{{'labels.Serial_No' | translate}}</strong>\r\n          </mat-radio-button>\r\n        </mat-radio-group>\r\n      </div>\r\n      <div class=\"col-md-8\">\r\n        <form [formGroup]=\"dealRevSearchForm\">\r\n          <mat-form-field appearance=\"outline\">\r\n            <mat-label>{{selectedInpField}}</mat-label>\r\n            <input matInput [placeholder]=\"selectedInpField\" id=\"vinAndSerailNo\" formControlName=\"vinAndSerailNo\" autocomplete=\"off\" (input)=\"removeSpace()\">\r\n            <mat-error \r\n              *ngIf=\"dealRevSearchForm.controls['vinAndSerailNo'].errors?.required\">\r\n              {{'errormsg.Mandatory'|translate}}\r\n            </mat-error>\r\n            <mat-error \r\n              *ngIf=\"dealRevSearchForm.controls['vinAndSerailNo'].errors?.minlength && !dealRevSearchForm.controls['vinAndSerailNo'].errors?.pattern\">\r\n              {{'errormsg.Vin_Message'|translate}} {{selectedInpField}}.\r\n            </mat-error>\r\n            <mat-error \r\n              *ngIf=\"dealRevSearchForm.controls['vinAndSerailNo'].errors?.pattern\">\r\n              {{'errormsg.Invalid'|translate}} {{selectedInpField}}(s)\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-3 col-md-6 col-sm-12\">\r\n    <div class=\"btn-container\">\r\n      <button class=\"iplus_Btn_Primary  mr-2\" mat-raised-button matTooltip=\"Search records\" matTooltipPosition='below'\r\n        (click)=\"searchRecords()\">{{'button.Search'| translate}}</button>\r\n      <button class='resetBtn' mat-raised-button matTooltip=\"Reset all data\" matTooltipPosition='below'\r\n        (click)=\"resetForm()\">{{'button.Reset'|\r\n        translate}}</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<mat-toolbar class=\"buttons-panel\">\r\n  <mat-toolbar-row>\r\n    <button class=\"iplus_Btn_Primary m-r\" mat-raised-button [disabled]=\"editAccess ? drBtnState : true\"\r\n      (click)=\"routedrDetails()\">{{'button.Deal_Review_Details'| translate}}</button>\r\n    <span class=\"space-away\"></span>\r\n    <button class=\"mr-2\" mat-raised-button (click)=\"searchData()\">\r\n      <span class=\"d-none d-md-inline\">{{'button.Refresh_Data'|translate}}</span>\r\n      <mat-icon class=\"ip-mat-icon m-l-xs\">cached</mat-icon>\r\n    </button>\r\n    <button mat-raised-button (click)=\"clearFilters()\">\r\n      <span class=\"d-none d-md-inline\">{{'button.Clear_Filter'|translate}}</span>\r\n      <mat-icon class=\"ip-mat-icon m-l-xs\">replay</mat-icon>\r\n    </button>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<mat-divider></mat-divider>\r\n<div class=\"col-sm-12\" style=\"padding: 0px;\" id=\"vinGridcontainer\" class=\"gridcontainer\">\r\n\r\n  <ag-grid-angular #agGrid id=\"vinSummaryGrid\" style=\"width: 100%; height: 448px;\" class=\"ag-theme-material isp-grid\"\r\n    [gridOptions]=\"gridOptions\" [columnDefs]=\"drColumnDefs\" [rowData]=\"drRowData\" [rowModelType]=\"rowModelType\"\r\n    [maxBlocksInCache]=\"200\" [cacheBlockSize]=\"200\" [pagination]=\"true\" [paginationPageSize]=\"paginationPageSize\"\r\n    [suppressPaginationPanel]=\"true\" (paginationChanged)=\"onPaginationChanged($event)\"\r\n    [suppressRowClickSelection]=\"true\" [animateRows]=\"true\" (gridReady)=\"onReady($event)\"\r\n    [overlayNoRowsTemplate]=\"overlayNoRowsTemplate\" (sortChanged)=\"onSortChanged($event)\"\r\n    (filterChanged)=\"onFilterChanged($event)\" (rowSelected)=\"drButtonToggle()\">\r\n  </ag-grid-angular>\r\n\r\n  <br>\r\n\r\n  <mat-toolbar-row>\r\n    <div class=\"ag-paging-panel ag-font-style\" style=\"margin-bottom:5px\">\r\n      <span class=\"ag-paging-page-summary-panel\">\r\n        <button class=\"ag-paging-button\" ref=\"btFirst\"\r\n          [ngStyle]=\"{'opacity' : buttonDisabled.firstButton ? '0.65' : '1'}\"\r\n          [disabled]=\"this.buttonDisabled.firstButton\" (click)=\"onBtFirst()\">\r\n          <div class=\"pagination-previous-icon\">\r\n            <div class=\"pagination-previous-bar\"></div>\r\n          </div>\r\n        </button>\r\n        <button class=\"ag-paging-button\" ref=\"btPrevious\"\r\n          [ngStyle]=\"{'opacity' : buttonDisabled.previousButton ? '0.65' : '1'}\"\r\n          [disabled]=\"this.buttonDisabled.previousButton\" (click)=\"onBtPrevious()\">\r\n          <div class=\"pagination-previous-icon\"></div>\r\n        </button>\r\n        <input type=\"number\" class=\"pagination-input\" [(ngModel)]=\"pageInputValue\"\r\n          (keyup.enter)=\"onCustomPageChange(pageInputValue)\" (blur)=\"onCustomPageChange(pageInputValue)\"\r\n          autocomplete=\"off\" /> {{'labels.of' | translate}}\r\n        <span ref=\"lbTotal\">{{totalPageCount}}</span>\r\n        <button class=\"ag-paging-button\" ref=\"btNext\" [ngStyle]=\"{'opacity' : buttonDisabled.nextButton ? '0.65' : '1'}\"\r\n          [disabled]=\"this.buttonDisabled.nextButton\" (click)=\"onBtNext()\">\r\n          <div class='pagination-next-icon'></div>\r\n        </button>\r\n        <button class=\"ag-paging-button\" ref=\"btLast\" [ngStyle]=\"{'opacity' : buttonDisabled.lastButton ? '0.65' : '1'}\"\r\n          [disabled]=\"buttonDisabled.lastButton\" (click)=\"onBtLast()\">\r\n          <div class='pagination-next-icon'>\r\n            <div class='pagination-last-bar'></div>\r\n          </div>\r\n        </button>\r\n      </span>\r\n    </div>\r\n\r\n    <span _ngcontent-ljs-c8=\"\" class=\"space-away\"></span>\r\n\r\n    <div style=\"margin:8px 9px 0 0;\">\r\n      <span ref=\"eSummaryPanel\" class=\"ag-paging-row-summary-panel\">\r\n        <span ref=\"lbFirstRowOnPage\">{{currentPageSet.start}}</span> {{'labels.to' | translate}}\r\n        <span ref=\"lbLastRowOnPage\">{{currentPageSet.end}}</span> {{'labels.of' | translate}}\r\n        <span ref=\"lbRecordCount\">{{totalRowCount}}</span>\r\n        <span style=\"margin-left:3px;\"> {{'labels.items' | translate}}</span>\r\n      </span>\r\n    </div>\r\n  </mat-toolbar-row>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/deal-reviews/deal-reviews.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/deal-reviews/deal-reviews.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".referenceTextBox {\n  height: 32px;\n  margin-right: 10px; }\n\n.vinTextBox {\n  width: 250px;\n  padding-left: 2px; }\n\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n\n.column-flex {\n  display: flex;\n  flex-direction: column; }\n\n.row-flex {\n  display: flex;\n  flex-direction: row; }\n\n.block-display {\n  display: block; }\n\n.bold_text {\n  font-size: 18px; }\n\nb {\n  font-size: 13px; }\n\n.pack {\n  margin-left: -7px; }\n\n.buttons-panel {\n  margin: 10px;\n  width: auto; }\n\n::ng-deep ag-grid-angular .ag-header-row:first-child .ag-header-cell {\n  background-color: #757575 !important;\n  text-align: center !important;\n  color: #fff;\n  font-weight: 700; }\n\n::ng-deep ag-grid-angular .ag-header-cell {\n  font-weight: 900 !important;\n  font-size: 15px !important;\n  background-color: #ffffff; }\n\n::ng-deep ag-grid-angular .ag-row-odd {\n  background-color: #f6f6f6 !important; }\n\n::ng-deep ag-grid-angular .ag-row-even {\n  background: white !important; }\n\n::ng-deep ag-grid-angular .ag-horizontal-left-spacer {\n  visibility: hidden; }\n\n::ng-deep ag-grid-angular .ag-header-cell-label .ag-header-cell-text {\n  margin-top: -8px; }\n\n@media print {\n  @page {\n    size: A4 landscape; }\n  ::ng-deep body {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7);\n    margin: auto -20%;\n    zoom: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVhbC1yZXZpZXdzL0M6XFxGU0RcXHBvbGljeS1tYW5hZ2VtZW50L3NyY1xcYXBwXFxkZWFsLXJldmlld3NcXGRlYWwtcmV2aWV3cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2I7RUFFSSxvQ0FBb0M7RUFDcEMsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFMcEI7RUFRSSwyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLHlCQUF5QixFQUFBOztBQVY3QjtFQWNJLG9DQUFvQyxFQUFBOztBQWR4QztFQWlCSSw0QkFBNEIsRUFBQTs7QUFqQmhDO0VBb0JJLGtCQUFrQixFQUFBOztBQXBCdEI7RUF1QkksZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0U7SUFDRSxrQkFBa0IsRUFBQTtFQUVwQjtJQUNFLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFVBQVUsRUFBQSxFQUNYIiwiZmlsZSI6InNyYy9hcHAvZGVhbC1yZXZpZXdzL2RlYWwtcmV2aWV3cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWZlcmVuY2VUZXh0Qm94IHtcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjYzhjOGM4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLnZpblRleHRCb3gge1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDJweDtcclxufVxyXG4uZmxleC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jb2x1bW4tZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ucm93LWZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmJsb2NrLWRpc3BsYXkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5ib2xkX3RleHQge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5iIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLnBhY2sge1xyXG4gIG1hcmdpbi1sZWZ0OiAtN3B4O1xyXG59XHJcblxyXG4uYnV0dG9ucy1wYW5lbCB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG46Om5nLWRlZXAgYWctZ3JpZC1hbmd1bGFyIHtcclxuICAuYWctaGVhZGVyLXJvdzpmaXJzdC1jaGlsZCAuYWctaGVhZGVyLWNlbGwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc1NzU3NSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIC5hZy1oZWFkZXItY2VsbCB7XHJcbiAgICBmb250LXdlaWdodDogOTAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAvL2JhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI0ZGRkZGRiwgI0Q5RDlEOSA1MCUsICNGRkZGRkYpO1xyXG4gIH1cclxuICAuYWctcm93LW9kZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5hZy1yb3ctZXZlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYWctaG9yaXpvbnRhbC1sZWZ0LXNwYWNlciB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5hZy1oZWFkZXItY2VsbC1sYWJlbCAuYWctaGVhZGVyLWNlbGwtdGV4dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHByaW50IHtcclxuICBAcGFnZSB7XHJcbiAgICBzaXplOiBBNCBsYW5kc2NhcGU7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCBib2R5IHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcclxuICAgIG1hcmdpbjogYXV0byAtMjAlO1xyXG4gICAgem9vbTogMTAwJTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/deal-reviews/deal-reviews.component.ts":
/*!********************************************************!*\
  !*** ./src/app/deal-reviews/deal-reviews.component.ts ***!
  \********************************************************/
/*! exports provided: DealReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealReviewsComponent", function() { return DealReviewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_grid_filter_custom_text_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/grid/filter/custom-text-filter.component */ "./src/app/shared/grid/filter/custom-text-filter.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_dataModels_dealReviewSearchRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/dataModels/dealReviewSearchRequest */ "./src/app/shared/dataModels/dealReviewSearchRequest.ts");
/* harmony import */ var _shared_services_isp_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/isp-app-config.service */ "./src/app/shared/services/isp-app-config.service.ts");
/* harmony import */ var _isp_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../isp-app.service */ "./src/app/isp-app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_grid_grid_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/grid/grid-common.service */ "./src/app/shared/grid/grid-common.service.ts");
/* harmony import */ var _shared_grid_page_navigate_cell_renderer_page_navigate_cell_renderer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/grid/page-navigate-cell-renderer/page-navigate-cell-renderer.component */ "./src/app/shared/grid/page-navigate-cell-renderer/page-navigate-cell-renderer.component.ts");
/* harmony import */ var _shared_grid_filter_custom_date_filter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/grid/filter/custom-date-filter.component */ "./src/app/shared/grid/filter/custom-date-filter.component.ts");
/* harmony import */ var _shared_message_handler_message_handler_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/message-handler/message-handler.service */ "./src/app/shared/message-handler/message-handler.service.ts");
/* harmony import */ var _shared_services_print_data_grid_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/services/print-data-grid.service */ "./src/app/shared/services/print-data-grid.service.ts");
/* harmony import */ var _shared_services_isp_excel_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/services/isp-excel-service */ "./src/app/shared/services/isp-excel-service.ts");
/* harmony import */ var _shared_dataModels_excelDealReviewSearchResponse__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/dataModels/excelDealReviewSearchResponse */ "./src/app/shared/dataModels/excelDealReviewSearchResponse.ts");
/* harmony import */ var _shared_services_user_info_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/services/user-info.service */ "./src/app/shared/services/user-info.service.ts");
















var DealReviewsComponent = /** @class */ (function () {
    function DealReviewsComponent(fb, ispService, printService, excelService, ispAppConfigService, router, gridCommonService, messageService, userInfoService) {
        this.fb = fb;
        this.ispService = ispService;
        this.printService = printService;
        this.excelService = excelService;
        this.ispAppConfigService = ispAppConfigService;
        this.router = router;
        this.gridCommonService = gridCommonService;
        this.messageService = messageService;
        this.userInfoService = userInfoService;
        this.drBtnState = true;
        this.searchOption = '1';
        this.errorBar = true;
        // is true if user has valid role and can edit in Challenge and Deal Review page
        this.editAccess = false;
        // toggles the state of Incentive/Payment buttons
        this.routeButtonState = true;
        this.pageIndex = 1;
        this.inputValue = 1;
        this.pageInputValue = 1;
        this.totalPageCount = 1;
        this.totalRowCount = 0;
        this.isRegulatoryUser = false;
        this.currentPageSet = {
            start: 1,
            end: this.paginationPageSize
        };
        this.buttonDisabled = {
            firstButton: true,
            previousButton: true,
            nextButton: false,
            lastButton: false
        };
        this.isBtnLastClicked = false;
        /** Grid Properties - END */
        this.currentPageRoutePath = 'dealReviews/detail/';
        this.headerObj = this.ispAppConfigService.getHeaderDetails();
        this.dealReviewSearchRequest = new _shared_dataModels_dealReviewSearchRequest__WEBPACK_IMPORTED_MODULE_4__["DealReviewSearchRequest"]();
        /** Grid Properties initialize - START */
        this.overlayNoRowsTemplate = '<span class="grid-noOverlay"> There are no results for the entered criterion. Please refine your search parameter </span>';
        this.frameworkComponents = {
            'customTextFilter': _shared_grid_filter_custom_text_filter_component__WEBPACK_IMPORTED_MODULE_2__["CustomTextFilterComponent"],
            'customDateFilter': _shared_grid_filter_custom_date_filter_component__WEBPACK_IMPORTED_MODULE_10__["CustomDateFilterComponent"],
            'pageNavigateCellRendererComponent': _shared_grid_page_navigate_cell_renderer_page_navigate_cell_renderer_component__WEBPACK_IMPORTED_MODULE_9__["PageNavigateCellRendererComponent"],
        };
        this.paginationPageSize = 200;
        this.rowModelType = 'infinite';
        /** Grid Properties initialize - END */
        this.editAccess = this.userInfoService.editAccess();
    }
    DealReviewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        this.gridSetUp(); // initial grid Call
        // subscribes the pre-selected search request and preloads the page if required
        if (this.ispService.dealReviewSelectedData !== null) {
            this.preLoadDRPage(this.ispService.dealReviewSelectedData);
            setTimeout(function () {
                _this.searchData();
            }, 500);
        }
        else {
            // will work when there's nothing to preLoad, i.e. first time Deal Review component is loaded. Will fetch the data with the default values in the form
            setTimeout(function () {
                _this.searchData();
            }, 500);
        }
    };
    DealReviewsComponent.prototype.preLoadDRPage = function (request) {
        if (request.queryParams.searchByRadio == "newUpdates") {
            this.searchOption = '1';
        }
        else if (request.queryParams.searchByRadio == "All") {
            this.searchOption = '2';
        }
        else if (request.queryParams.searchByRadio == "Approved") {
            this.searchOption = '3';
        }
        else if (request.queryParams.searchByRadio == "Returned") {
            this.searchOption = '4';
        }
        else if (request.queryParams.searchByRadio == "Partially Approved") {
            this.searchOption = '5';
        }
        else if (request.queryParams.searchByRadio == "Submitted") {
            this.searchOption = '6';
        }
        else if (request.queryParams.searchByRadio == "Pending Submit") {
            this.searchOption = '7';
        }
        else if (request.queryParams.searchByRadio == "Denied") {
            this.searchOption = '8';
        }
        else if (request.queryParams.searchByRadio == "vinNo") {
            this.searchOption = '9';
            this.dealRevSearchForm = this.fb.group({
                vinAndSerailNo: [{ value: request.queryParams.vin, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9 ]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(17)])]
            });
        }
        else if (request.queryParams.searchByRadio == "serialNo") {
            this.searchOption = '10';
            this.dealRevSearchForm = this.fb.group({
                vinAndSerailNo: [{ value: request.queryParams.serialNo, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9 ]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)])]
            });
        }
    };
    DealReviewsComponent.prototype.createForm = function () {
        var len = this.selectedInpField == 'VIN' ? 17 : 8;
        this.dealRevSearchForm = this.fb.group({
            vinAndSerailNo: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9 ]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(len)])]
        });
    };
    // removes all the space from the input field on focus out
    DealReviewsComponent.prototype.removeSpace = function () {
        this.dealRevSearchForm.controls['vinAndSerailNo'].reset({ value: this.dealRevSearchForm.controls['vinAndSerailNo'].value.replace(/ /g, ''), disabled: false });
    };
    // toggles the datepicker and date dropdown fields, also sets the label for VIN/Serial input field
    DealReviewsComponent.prototype.enableInput = function (value) {
        this.searchOption = value;
        /* 9 and 10 corrosponds to VIN and serial number radio buttons respectively the label name is toggled. */
        this.selectedInpField = this.searchOption == '9' ? 'VIN' : this.searchOption == '10' ? 'Serial Number' : this.selectedInpField;
        this.createForm();
        this.dealRevSearchForm.controls['vinAndSerailNo'].reset({ value: '', disabled: false });
    };
    // toggles the datepicker and date dropdown fields
    DealReviewsComponent.prototype.disableInput = function (value) {
        this.searchOption = value;
        this.dealRevSearchForm.controls['vinAndSerailNo'].reset({ value: '', disabled: true });
        // handles the VIN/Serial name tag for the combined input field
        this.selectedInpField = '';
    };
    // Called on Search button
    DealReviewsComponent.prototype.searchRecords = function () {
        // reset all parameters
        this.readyParam.api.setDatasource({});
        this.api.setFilterModel(null);
        this.api.setSortModel(null);
        this.searchData();
    };
    // Called on refresh button
    DealReviewsComponent.prototype.searchData = function () {
        // reste the state of Deal review details flag
        this.drBtnState = true;
        this.setSearchRequest();
        this.loadGrid(this.dealReviewSearchRequest);
    };
    /* formulates the request object with all relevant data.
    would help in reloading data while navigating with close button from bredacrumb. */
    DealReviewsComponent.prototype.setSearchRequest = function () {
        // some default properties in the request object are set in the constructor itself
        this.dealReviewSearchRequest = new _shared_dataModels_dealReviewSearchRequest__WEBPACK_IMPORTED_MODULE_4__["DealReviewSearchRequest"]();
        this.dealReviewSearchRequest.queryParams.dealerCode = this.headerObj.dealerCode;
        this.dealReviewSearchRequest.queryParams.searchByRadio = this.dealReviewSearchRequest.taskToDo;
        // the appropriate parameters are being set here
        switch (this.searchOption) {
            // 1 refers to New Updates radio button
            case '1':
                this.dealReviewSearchRequest.taskToDo = "searchByUpdates";
                this.dealReviewSearchRequest.queryParams.searchByRadio = "newUpdates";
                this.dealReviewSearchRequest.queryParams.status = "All";
                break;
            // 2 refers to All radio button
            case '2':
                this.dealReviewSearchRequest.taskToDo = "searchByStatus";
                this.dealReviewSearchRequest.queryParams.searchByRadio = "All";
                this.dealReviewSearchRequest.queryParams.status = "All";
                break;
            // 3 corrosponds to Submitted radio button
            case '3':
                this.dealReviewSearchRequest.taskToDo = "searchByStatus";
                this.dealReviewSearchRequest.queryParams.searchByRadio = "Approved";
                this.dealReviewSearchRequest.queryParams.status = "Approved";
                break;
            // 4 corrosponds to Returned radio button
            case '4':
                this.dealReviewSearchRequest.taskToDo = "searchByStatus";
                this.dealReviewSearchRequest.queryParams.searchByRadio = "Returned";
                this.dealReviewSearchRequest.queryParams.status = "Returned";
                break;
            // 5 corrosponds to Partially Approved radio button
            case '5':
                this.dealReviewSearchRequest.taskToDo = "searchByStatus";
                this.dealReviewSearchRequest.queryParams.searchByRadio = "Partially Approved";
                this.dealReviewSearchRequest.queryParams.status = "Partially Approved";
                break;
            // 6 corrosponds to Submitted radio button
            case '6':
                this.dealReviewSearchRequest.taskToDo = "searchByStatus";
                this.dealReviewSearchRequest.queryParams.searchByRadio = "Submitted";
                this.dealReviewSearchRequest.queryParams.status = "Submitted";
                break;
            // 7 corrosponds to Pending Submit radio button
            case '7':
                this.dealReviewSearchRequest.taskToDo = "searchByStatus";
                this.dealReviewSearchRequest.queryParams.searchByRadio = "Pending Submit";
                this.dealReviewSearchRequest.queryParams.status = "Pending Submit";
                break;
            // 8 corrosponds to Denied radio button
            case '8':
                this.dealReviewSearchRequest.taskToDo = "searchByStatus";
                this.dealReviewSearchRequest.queryParams.searchByRadio = "Denied";
                this.dealReviewSearchRequest.queryParams.status = "Denied";
                break;
            // 9 corrosponds to VIN radio button
            case '9':
                this.dealReviewSearchRequest.taskToDo = "searchByVin";
                this.dealReviewSearchRequest.queryParams.searchByRadio = "vinNo";
                this.dealReviewSearchRequest.queryParams.vin = this.dealRevSearchForm.controls['vinAndSerailNo'].value.toUpperCase();
                this.dealReviewSearchRequest.queryParams.vinSerial = this.dealRevSearchForm.controls['vinAndSerailNo'].value.toUpperCase();
                break;
            // 10 corrosponds to Serial Number radio button
            case '10':
                this.dealReviewSearchRequest.taskToDo = "searchBySerial";
                this.dealReviewSearchRequest.queryParams.searchByRadio = "serialNo";
                this.dealReviewSearchRequest.queryParams.serialNo = this.dealRevSearchForm.controls['vinAndSerailNo'].value.toUpperCase();
                this.dealReviewSearchRequest.queryParams.vinSerial = this.dealRevSearchForm.controls['vinAndSerailNo'].value.toUpperCase();
                break;
        }
    };
    /**
     @name printGrid trigger the service to print grid table
     */
    DealReviewsComponent.prototype.printGrid = function () {
        var gridEle = document.getElementById('vinSummaryGrid');
        this.printService.printGrid(gridEle, this.gridOptions, this.api);
    };
    //exports to excel based on search criteria 
    DealReviewsComponent.prototype.excelExportForm = function () {
        this.dealReviewSearchRequest.showAll = true;
        this.dealReviewSearchRequest.pageNumber = 1;
        // setting the max count of data based on any previous search service calls
        this.dealReviewSearchRequest.totalResults = this.totalRowCount;
        this.excelConfig(this.dealReviewSearchRequest);
        // IPLUS-11093 Excel download feature not working in subsequent pages
        this.dealReviewSearchRequest.showAll = false;
    };
    /**
    @name excel export trigger on Challenge Summary .
    @param request Search Request query param
    */
    DealReviewsComponent.prototype.excelConfig = function (request) {
        var _this = this;
        var rowData, excelDealReviewData;
        var excelHeader = [];
        var emptyHeader = [];
        var dealReviewStatus = (this.dealReviewSearchRequest.queryParams.status == '') ? 'NA' : this.dealReviewSearchRequest.queryParams.status;
        var reportHeading = ["DEAL REVIEW SUMMARY", this.excelService.getCurrentDate()];
        var reporSubHeading = ['Deal Review Status', dealReviewStatus.toUpperCase()];
        excelHeader.push(emptyHeader);
        excelHeader.push(emptyHeader);
        excelHeader.push(emptyHeader);
        excelHeader.push(reportHeading);
        excelHeader.push(emptyHeader);
        excelHeader.push(reporSubHeading);
        excelHeader.push(emptyHeader);
        this.ispService.fetchDealReviewData(request)
            .subscribe(function (data) {
            rowData = data['result']['results'];
            excelDealReviewData = _this.setDealExcelResponse(rowData);
            _this.excelService.generateExcel(excelHeader, excelDealReviewData, 'searchdealRvwSummary', 'DealReviewSummary');
        });
    };
    DealReviewsComponent.prototype.setDealExcelResponse = function (rowData) {
        var excelList = new Array();
        rowData.forEach(function (element) {
            var excelResp = new _shared_dataModels_excelDealReviewSearchResponse__WEBPACK_IMPORTED_MODULE_14__["ExcelResponseDealReviewSearch"]();
            excelResp.setVin(element.vin);
            excelResp.setModelNo(element.modelNo);
            excelResp.setSerialNo(element.serialNo);
            excelResp.setSeries(element.series);
            excelResp.setModelYear(element.modelYear);
            excelResp.setBrand(element.brand);
            excelResp.setCustomerName(element.customerName);
            excelResp.setretailDt(element.retailDate);
            excelResp.setdealReviewNo(element.dealReviewNo);
            excelResp.setdealReviewStatus(element.dealreviewStatus);
            excelResp.setdealreviewRequestDate(element.dealreviewRequestDate);
            excelResp.setdealreviewSubmitDate(element.dealreviewSubmitDate);
            excelResp.setiagDealReviewLastUpdateDate(element.iagDealReviewLastUpdateDate);
            excelList.push(excelResp);
        });
        return excelList;
    };
    DealReviewsComponent.prototype.resetForm = function () {
        this.createForm();
        // reset default selected radio buttons
        this.searchOption = '1';
        // reset placeholder
        this.selectedInpField = '';
        // filter and sorting retain
        this.readyParam.api.setDatasource({});
        this.api.setFilterModel(null);
        this.api.setSortModel(null);
        this.searchData();
    };
    DealReviewsComponent.prototype.routedrDetails = function () {
        var temp = this.api.getSelectedRows()[0];
        if (temp) {
            // stores the search request, later this is used to prepopulate the page
            this.ispService.setDealReviewSelectedData(this.dealReviewSearchRequest);
            this.ispService.setDealReviewSelectedVIN(temp.vin);
            this.ispService.setFilterSortModel(this.api.getFilterModel(), this.api.getSortModel());
            var url = temp.vin + '/' + temp.dealReviewNo;
            this.router.navigate([this.currentPageRoutePath + url]);
        }
    };
    DealReviewsComponent.prototype.drButtonToggle = function () {
        var temp = this.api.getSelectedRows()[0];
        // this.drBtnState = temp == null ? true : false;
        if (temp == null) {
            this.drBtnState = true;
        }
        else {
            this.drBtnState = false;
        }
    };
    DealReviewsComponent.prototype.gridSetUp = function () {
        var _this = this;
        this.gridOptions = {
            context: {
                componentParent: this
            },
            onGridReady: function (params) {
                _this.api = params.api;
                _this.api.refreshCells();
                _this.api.setFilterModel(_this.ispService.selectedFilterModel);
                _this.api.setSortModel(_this.ispService.selectedSortModel);
            },
            enableColResize: false,
            enableFilter: true,
            pagination: true,
            headerHeight: 48,
            floatingFiltersHeight: 40,
            rowHeight: 35,
            rowSelection: 'single',
            enableServerSideSorting: true,
            sortingOrder: ["asc", "desc"],
            enableServerSideFilter: true,
            frameworkComponents: this.frameworkComponents,
            floatingFilter: true,
            suppressContextMenu: false,
            suppressMenuMainPanel: false,
            suppressMenuColumnPanel: false,
            suppressTabbing: true,
            suppressPaginationPanel: false,
            suppressMovableColumns: true,
            suppressMenu: true,
            suppressDragLeaveHidesColumns: true,
            suppressColumnVirtualisation: true
        };
        this.drColumnDefs = [
            {
                headerCheckboxSelection: false,
                checkboxSelection: true,
                suppressFilter: true,
                suppressSorting: true,
                width: 50
            },
            {
                headerName: 'VIN',
                headerTooltip: 'VIN',
                tooltipField: 'vin',
                field: 'vin',
                width: 150,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                cellRenderer: "pageNavigateCellRendererComponent",
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Model No.',
                field: 'modelNo',
                width: 80,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                cellRenderer: function (params) {
                    // sets the previously selected node while preLoading the data table
                    if (_this.ispService.dealReviewSelectedVIN && params.node.data && params.node.data.vin === _this.ispService.dealReviewSelectedVIN) {
                        params.node.setSelected(true);
                    }
                    return params.value;
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Serial No.',
                field: 'serialNo',
                width: 100,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Series',
                field: 'series',
                width: 100,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Model Year',
                field: 'modelYear',
                width: 70,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Brand',
                field: 'brand',
                width: 100,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Customer Name',
                field: 'customerName',
                width: 180,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Retail Date',
                field: 'retailDate',
                width: 130,
                suppressMenu: true,
                floatingFilterComponent: 'customDateFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Deal Review No.',
                field: 'dealReviewNo',
                width: 100,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Deal Review Status',
                field: 'dealreviewStatus',
                width: 130,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Deal Review Create Date',
                field: 'dealreviewRequestDate',
                width: 130,
                suppressMenu: true,
                floatingFilterComponent: 'customDateFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Deal Review Dealer Submit Date',
                field: 'dealreviewSubmitDate',
                width: 145,
                suppressMenu: true,
                floatingFilterComponent: 'customDateFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Deal Review Last Update Date',
                field: 'iagDealReviewLastUpdateDate',
                width: 140,
                suppressMenu: true,
                floatingFilterComponent: 'customDateFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
        ];
    };
    DealReviewsComponent.prototype.onReady = function (params) {
        this.api = params.api;
        this.readyParam = params;
    };
    /**
        @name loadGrid trigger on vin summary search.
        @param formDetails Search Request
      */
    DealReviewsComponent.prototype.loadGrid = function (formDetails) {
        var _this = this;
        var rowData, rowcount, totalRows;
        var dataSource = {
            rowCount: totalRows,
            getRows: function (params) {
                _this.drRowData = [];
                _this.ispService.fetchDealReviewData(formDetails)
                    .subscribe(function (data) {
                    if (data.responseMessage === '0' && data.result.results) {
                        rowcount = data.result.totalResults;
                        rowData = data['result']['results'];
                    }
                    else {
                        _this.messageService.showMessage(data.error.errMessage, 'error');
                    }
                    _this.totalRowCount = rowcount;
                    totalRows = _this.totalRowCount;
                    _this.totalPageCount = _this.gridCommonService.calculateTotalPages(rowcount, _this.paginationPageSize);
                    _this.drRowData = rowData;
                    if (_this.drRowData && _this.drRowData.length) {
                        _this.api.hideOverlay();
                    }
                    else {
                        _this.api.showNoRowsOverlay();
                    }
                    setTimeout(function () {
                        var rowsThisPage = rowData;
                        var lastRow = totalRows;
                        params.successCallback(rowsThisPage, lastRow);
                    }, 500);
                }, function (error) {
                    _this.drRowData = [];
                    _this.api.showNoRowsOverlay();
                    _this.totalPageCount = 0;
                    _this.totalRowCount = 0;
                    _this.buttonDisabled = {
                        firstButton: true,
                        previousButton: true,
                        nextButton: true,
                        lastButton: true
                    };
                });
            }
        };
        this.readyParam.api.setDatasource(dataSource);
    };
    /**
    @name onPaginationChanged trigger on pagination changes.
    */
    DealReviewsComponent.prototype.onPaginationChanged = function (params) {
        if (this.api) {
            this.buttonDisabled = {
                firstButton: false,
                previousButton: false,
                nextButton: false,
                lastButton: false
            };
            if (this.api.paginationGetCurrentPage() + 1 === 1) {
                this.pageInputValue = this.api.paginationGetCurrentPage() + 1;
                this.buttonDisabled.firstButton = true;
                this.buttonDisabled.previousButton = true;
                // Disable first and previous buttons
            }
            else {
                this.pageInputValue = this.api.paginationGetCurrentPage() + 1;
                this.buttonDisabled.firstButton = false;
                this.buttonDisabled.previousButton = false;
                // enable first and previous buttons
                // check if the page number ast page
                if (this.pageInputValue === this.totalPageCount) {
                    this.buttonDisabled.lastButton = true;
                    this.buttonDisabled.nextButton = true;
                }
                this.dealReviewSearchRequest.pageNumber = (this.api.paginationGetCurrentPage() + 1);
            }
            this.currentPageSet = this.gridCommonService.calculateCurrentPageSetValues(this.api.paginationGetCurrentPage(), this.paginationPageSize);
            if (this.totalRowCount <= this.paginationPageSize) {
                this.currentPageSet.end = this.totalRowCount;
                if (this.totalRowCount < 1) {
                    this.currentPageSet.start = 0;
                }
                this.buttonDisabled.lastButton = true;
                this.buttonDisabled.nextButton = true;
            }
        }
    };
    /**
         @name clearFilters- triggers on clear filter icon clicked.
      */
    DealReviewsComponent.prototype.clearFilters = function () {
        var _this = this;
        setTimeout(function () {
            _this.api.setFilterModel(null);
        }, 100);
        // perform service call to reset the grid data with the criteria in the form currently
        this.searchData();
    };
    /**
       @name onBtFirst- triggers on pagination toFirst icon clicked.
    */
    DealReviewsComponent.prototype.onBtFirst = function () {
        this.api.paginationGoToFirstPage();
    };
    /**
      @name onBtLast- triggers on pagination toLast icon clicked.
    */
    DealReviewsComponent.prototype.onBtLast = function () {
        this.api.paginationGoToLastPage();
        this.isBtnLastClicked = true;
    };
    /**
      @name onBtLast- triggers on pagination next icon clicked.
    */
    DealReviewsComponent.prototype.onBtNext = function () {
        this.api.paginationGoToNextPage();
    };
    /**
      @name onBtPrevious- triggers on pagination previous icon clicked.
    */
    DealReviewsComponent.prototype.onBtPrevious = function () {
        this.api.paginationGoToPreviousPage();
    };
    /**
      @name onCustomPageChange- triggers on pagination text field changed and focused out.
      @param fieldValue - requested page number.
    */
    DealReviewsComponent.prototype.onCustomPageChange = function (fieldValue) {
        this.pageInputValue = fieldValue;
        this.api.paginationGoToPage(this.pageInputValue - 1);
    };
    /**
    @name onSortChanged - on sort model changes.
    @param event - sort event parameters.
    */
    DealReviewsComponent.prototype.onSortChanged = function (event) {
        var sortModel = event.api.getSortModel();
        var sortPresent = sortModel && sortModel.length > 0;
        this.resetPageIndex();
        if (sortPresent) {
            this.dealReviewSearchRequest.sortData = [];
            this.dealReviewSearchRequest.sortData.push({ colName: sortModel[0].colId, order: sortModel[0].sort });
        }
        else {
            this.dealReviewSearchRequest.sortData = [];
        }
        // reset routing buttons to disabled state
        this.drBtnState = true;
    };
    /**
      @name onFilterChanged - on filter model changes.
      @param event - filter event parameters.
      */
    DealReviewsComponent.prototype.onFilterChanged = function (event) {
        var filterModel = event.api.getFilterModel();
        var filterPresent = filterModel && Object.keys(filterModel).length > 0;
        this.resetPageIndex();
        Object.keys(filterModel);
        if (filterPresent) {
            this.dealReviewSearchRequest.filterData = [];
            for (var key in filterModel) {
                this.dealReviewSearchRequest.filterData.push({ 'filterName': key, 'filterValue': filterModel[key]['filter'] });
            }
        }
        else {
            this.dealReviewSearchRequest.filterData = [];
        }
        // reset routing buttons to disabled state
        this.drBtnState = true;
    };
    /**
       @name resetPageIndex reset page index to 1.
       */
    DealReviewsComponent.prototype.resetPageIndex = function () {
        this.dealReviewSearchRequest.pageNumber = 1;
    };
    DealReviewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deal-reviews',
            template: __webpack_require__(/*! ./deal-reviews.component.html */ "./src/app/deal-reviews/deal-reviews.component.html"),
            styles: [__webpack_require__(/*! ./deal-reviews.component.scss */ "./src/app/deal-reviews/deal-reviews.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _isp_app_service__WEBPACK_IMPORTED_MODULE_6__["IspAppService"], _shared_services_print_data_grid_service__WEBPACK_IMPORTED_MODULE_12__["PrintDataGridService"], _shared_services_isp_excel_service__WEBPACK_IMPORTED_MODULE_13__["ExcelExportService"], _shared_services_isp_app_config_service__WEBPACK_IMPORTED_MODULE_5__["ISPAppConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _shared_grid_grid_common_service__WEBPACK_IMPORTED_MODULE_8__["GridCommonService"], _shared_message_handler_message_handler_service__WEBPACK_IMPORTED_MODULE_11__["MessageService"], _shared_services_user_info_service__WEBPACK_IMPORTED_MODULE_15__["UserInfoService"]])
    ], DealReviewsComponent);
    return DealReviewsComponent;
}());



/***/ }),

/***/ "./src/app/deal-reviews/deal-reviews.guard.ts":
/*!****************************************************!*\
  !*** ./src/app/deal-reviews/deal-reviews.guard.ts ***!
  \****************************************************/
/*! exports provided: DealReviewsGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealReviewsGuard", function() { return DealReviewsGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_user_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/user-info.service */ "./src/app/shared/services/user-info.service.ts");




var DealReviewsGuard = /** @class */ (function () {
    function DealReviewsGuard(router, userInfoService) {
        this.router = router;
        this.userInfoService = userInfoService;
    }
    DealReviewsGuard.prototype.canActivate = function (route, state) {
        return this.userInfoService.checkRole();
    };
    DealReviewsGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_user_info_service__WEBPACK_IMPORTED_MODULE_3__["UserInfoService"]])
    ], DealReviewsGuard);
    return DealReviewsGuard;
}());



/***/ }),

/***/ "./src/app/help/help.component.html":
/*!******************************************!*\
  !*** ./src/app/help/help.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class = \"content\">\r\n   \r\n\r\n  </div>"

/***/ }),

/***/ "./src/app/help/help.component.scss":
/*!******************************************!*\
  !*** ./src/app/help/help.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  height: 100vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVscC9DOlxcRlNEXFxwb2xpY3ktbWFuYWdlbWVudC9zcmNcXGFwcFxcaGVscFxcaGVscC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQ0osRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hlbHAvaGVscC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIGhlaWdodDogMTAwdmhcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/help/help.component.ts":
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.scss */ "./src/app/help/help.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/help/help.guard.ts":
/*!************************************!*\
  !*** ./src/app/help/help.guard.ts ***!
  \************************************/
/*! exports provided: HelpGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpGuard", function() { return HelpGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelpGuard = /** @class */ (function () {
    function HelpGuard() {
    }
    HelpGuard.prototype.canActivate = function (next, state) {
        return true;
    };
    HelpGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], HelpGuard);
    return HelpGuard;
}());



/***/ }),

/***/ "./src/app/incentive-details/incentive-details.component.html":
/*!********************************************************************!*\
  !*** ./src/app/incentive-details/incentive-details.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb></app-breadcrumb>\r\n<div class=\"container-fluid mt-2\">\r\n  <mat-card style=\"background-color:#f5f5f5;\">\r\n    <mat-card-header>\r\n      <mat-card-title>\r\n        <label class=\"font-weight-bold\">{{'labels.Details_for'|translate}}\r\n          {{incentiveDetails.incentiveTypeName}}</label>\r\n      </mat-card-title>\r\n      <span class=\"space-away\"></span>\r\n      <mat-icon matTooltip=\"Print\" class=\"ip-mat-icon\" (click)=\"printGrid()\">local_printshop</mat-icon>\r\n      <span style=\"padding-left: 20px\"></span>\r\n      <i class=\"fa fa-file-excel-o fa-lg mt-1\" (click)=\"excelExporterForm()\" matTooltip=\"Export to Excel\"\r\n        style=\"font-size: 16px;\"></i>\r\n    </mat-card-header>\r\n    <mat-divider></mat-divider>\r\n    <mat-card-content>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4 col-sm-12\">\r\n          <div class=\"row ml-1 my-3\">\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Incentive_Category'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{incentiveDetails.category}}</div>\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Incentive_Type'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{incentiveDetails.optionType}}</div>\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Incentive_Type_Name'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{incentiveDetails.incentiveTypeName}}</div>\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Brand'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{incentiveDetails.brand}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-12\">\r\n          <div class=\"row ml-1 my-3\">\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Incentive_Type_Start_Date'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{incentiveDetails.incentiveStartDate}}</div>\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Incentive_Type_End_Date'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{incentiveDetails.incentiveEndDate}}</div>\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Series'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{incentiveDetails.series}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n  <mat-toolbar class=\"buttons-panel\">\r\n    <mat-toolbar-row>\r\n      <button class=\"iplus_Btn_Primary\" mat-raised-button [disabled]=\"routeButtonState\"\r\n        (click)=\"routePaymentStatus()\">{{'button.Payment_Status'|translate}}</button>\r\n      <span class=\"space-away\"></span>\r\n      <button class=\"mr-2\" mat-raised-button (click)=\"refreshData()\">\r\n        <span class=\"d-none d-md-inline\">{{'button.Refresh_Data'|translate}}</span>\r\n        <mat-icon class=\"ip-mat-icon m-l-xs\">cached</mat-icon>\r\n      </button>\r\n      <button mat-raised-button (click)=\"clearFilters()\">\r\n        <span class=\"d-none d-md-inline\">{{'button.Clear_Filter'|translate}}</span>\r\n        <mat-icon class=\"ip-mat-icon m-l-xs\">replay</mat-icon>\r\n      </button>\r\n    </mat-toolbar-row>\r\n  </mat-toolbar>\r\n\r\n\r\n  <div class=\"col-sm-12\" style=\"padding: 0px;\" id=\"vinGridcontainer\" class=\"gridcontainer\">\r\n\r\n    <ag-grid-angular #agGrid id=\"vinSummaryGrid\" style=\"width: 100%; height: 448px;\" class=\"ag-theme-material\"\r\n      [gridOptions]=\"gridOptions\" [columnDefs]=\"incentiveColumnDefs\" [rowData]=\"incentiveRowData\"\r\n      [rowModelType]=\"rowModelType\" [maxBlocksInCache]=\"200\" [cacheBlockSize]=\"200\" [pagination]=\"true\"\r\n      [paginationPageSize]=\"paginationPageSize\" [suppressPaginationPanel]=\"true\"\r\n      (paginationChanged)=\"onPaginationChanged($event)\" [suppressRowClickSelection]=\"true\"\r\n      [isFullWidthCell]=\"isFullWidthCell\" [animateRows]=\"true\" (gridReady)=\"onReady($event)\"\r\n      [overlayNoRowsTemplate]=\"overlayNoRowsTemplate\" (sortChanged)=\"onSortChanged($event)\"\r\n      (filterChanged)=\"onFilterChanged($event)\" (rowSelected)=\"routeButtonToggle()\">\r\n    </ag-grid-angular>\r\n\r\n    <br>\r\n\r\n    <mat-toolbar-row>\r\n      <div class=\"ag-paging-panel ag-font-style\" style=\"margin-bottom:5px\">\r\n        <span class=\"ag-paging-page-summary-panel\">\r\n          <button class=\"ag-paging-button\" ref=\"btFirst\"\r\n            [ngStyle]=\"{'opacity' : buttonDisabled.firstButton ? '0.65' : '1'}\"\r\n            [disabled]=\"this.buttonDisabled.firstButton\" (click)=\"onBtFirst()\">\r\n            <div class=\"pagination-previous-icon\">\r\n              <div class=\"pagination-previous-bar\"></div>\r\n            </div>\r\n          </button>\r\n          <button class=\"ag-paging-button\" ref=\"btPrevious\"\r\n            [ngStyle]=\"{'opacity' : buttonDisabled.previousButton ? '0.65' : '1'}\"\r\n            [disabled]=\"this.buttonDisabled.previousButton\" (click)=\"onBtPrevious()\">\r\n            <div class=\"pagination-previous-icon\"></div>\r\n          </button>\r\n          <input type=\"number\" class=\"pagination-input\" [(ngModel)]=\"pageInputValue\"\r\n            (keyup.enter)=\"onCustomPageChange(pageInputValue)\" (blur)=\"onCustomPageChange(pageInputValue)\"\r\n            autocomplete=\"off\" />{{'labels.of' | translate}}\r\n          <span ref=\"lbTotal\">{{totalPageCount}}</span>\r\n          <button class=\"ag-paging-button\" ref=\"btNext\"\r\n            [ngStyle]=\"{'opacity' : buttonDisabled.nextButton ? '0.65' : '1'}\"\r\n            [disabled]=\"this.buttonDisabled.nextButton\" (click)=\"onBtNext()\">\r\n            <div class='pagination-next-icon'></div>\r\n          </button>\r\n          <button class=\"ag-paging-button\" ref=\"btLast\"\r\n            [ngStyle]=\"{'opacity' : buttonDisabled.lastButton ? '0.65' : '1'}\" [disabled]=\"buttonDisabled.lastButton\"\r\n            (click)=\"onBtLast()\">\r\n            <div class='pagination-next-icon'>\r\n              <div class='pagination-last-bar'></div>\r\n            </div>\r\n          </button>\r\n        </span>\r\n      </div>\r\n\r\n      <div style=\"margin:8px 9px 0 0;\">\r\n        <span ref=\"eSummaryPanel\" class=\"ag-paging-row-summary-panel\">\r\n          <span ref=\"lbFirstRowOnPage\">{{currentPageSet.start}}</span> {{'labels.to' | translate}}\r\n          <span ref=\"lbLastRowOnPage\">{{currentPageSet.end}}</span> {{'labels.of' | translate}}\r\n          <span ref=\"lbRecordCount\">{{totalRowCount}}</span>\r\n          <span style=\"margin-left:3px;\"> {{'labels.items' | translate}}</span>\r\n        </span>\r\n      </div>\r\n\r\n      <span _ngcontent-ljs-c8=\"\" class=\"space-away\"></span>\r\n\r\n      <div style=\"margin:8px 9px 0 0;\">\r\n        <span ref=\"eSummaryPanel\" class=\"ag-paging-row-summary-panel\">\r\n          <span ref=\"lbFirstRowOnPage\">{{currentPageSet.start}}</span> {{'labels.to' | translate}}\r\n          <span ref=\"lbLastRowOnPage\">{{currentPageSet.end}}</span> {{'labels.of' | translate}}\r\n          <span ref=\"lbRecordCount\">{{totalRowCount}}</span>\r\n          <span style=\"margin-left:3px;\">{{'labels.items' | translate}}</span>\r\n        </span>\r\n      </div>\r\n\r\n    </mat-toolbar-row>\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/incentive-details/incentive-details.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/incentive-details/incentive-details.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  border: 1px solid #c2c2c2;\n  padding: 0;\n  border-radius: 4px; }\n\n.mat-card {\n  padding: 0px; }\n\n.mat-card * {\n  font-size: 12px; }\n\n.mat-card-header {\n  padding: 10px;\n  background-color: #efefef;\n  background-image: linear-gradient(to bottom, #efefef, #ffffff); }\n\n.mat-card-header .mat-card-title {\n  font-size: 12px;\n  margin: 0px; }\n\n.mat-card-header-text {\n  margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5jZW50aXZlLWRldGFpbHMvQzpcXEZTRFxccG9saWN5LW1hbmFnZW1lbnQvc3JjXFxhcHBcXGluY2VudGl2ZS1kZXRhaWxzXFxpbmNlbnRpdmUtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1Ysa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFLekIsOERBQThELEVBQUE7O0FBRWhFO0VBQ0UsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFFYjtFQUNFLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2luY2VudGl2ZS1kZXRhaWxzL2luY2VudGl2ZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2MyYzJjMjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4ubWF0LWNhcmQge1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG4ubWF0LWNhcmQgKiB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5tYXQtY2FyZC1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNlZmVmZWYsICNmZmZmZmYpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2VmZWZlZiwgI2ZmZmZmZik7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgI2VmZWZlZiksIGNvbG9yLXN0b3AoMTAwJSwgI2ZmZmZmZikpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICNlZmVmZWYsICNmZmZmZmYpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNlZmVmZWYsICNmZmZmZmYpO1xyXG59XHJcbi5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/incentive-details/incentive-details.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/incentive-details/incentive-details.component.ts ***!
  \******************************************************************/
/*! exports provided: IncentiveDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncentiveDetailsComponent", function() { return IncentiveDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_dataModels_incentiveDetailResponseHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dataModels/incentiveDetailResponseHeader */ "./src/app/shared/dataModels/incentiveDetailResponseHeader.ts");
/* harmony import */ var _shared_dataModels_incentiveDetailsRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/dataModels/incentiveDetailsRequest */ "./src/app/shared/dataModels/incentiveDetailsRequest.ts");
/* harmony import */ var _shared_services_isp_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/isp-app-config.service */ "./src/app/shared/services/isp-app-config.service.ts");
/* harmony import */ var _isp_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isp-app.service */ "./src/app/isp-app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_grid_filter_custom_text_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/grid/filter/custom-text-filter.component */ "./src/app/shared/grid/filter/custom-text-filter.component.ts");
/* harmony import */ var _shared_grid_grid_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/grid/grid-common.service */ "./src/app/shared/grid/grid-common.service.ts");
/* harmony import */ var _shared_grid_filter_custom_date_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/grid/filter/custom-date-filter.component */ "./src/app/shared/grid/filter/custom-date-filter.component.ts");
/* harmony import */ var _shared_grid_page_navigate_cell_renderer_page_navigate_cell_renderer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/grid/page-navigate-cell-renderer/page-navigate-cell-renderer.component */ "./src/app/shared/grid/page-navigate-cell-renderer/page-navigate-cell-renderer.component.ts");
/* harmony import */ var _shared_services_print_data_grid_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/services/print-data-grid.service */ "./src/app/shared/services/print-data-grid.service.ts");
/* harmony import */ var _shared_services_isp_excel_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/services/isp-excel-service */ "./src/app/shared/services/isp-excel-service.ts");
/* harmony import */ var _shared_dataModels_excelPaymentByIncentiveTypeResponse__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/dataModels/excelPaymentByIncentiveTypeResponse */ "./src/app/shared/dataModels/excelPaymentByIncentiveTypeResponse.ts");
/* harmony import */ var _shared_message_handler_message_handler_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/message-handler/message-handler.service */ "./src/app/shared/message-handler/message-handler.service.ts");
/* harmony import */ var _shared_grid_replace_zero_with_empty_cell_renderer_replace_zero_with_empty_cell_renderer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/grid/replace-zero-with-empty-cell-renderer/replace-zero-with-empty-cell-renderer.component */ "./src/app/shared/grid/replace-zero-with-empty-cell-renderer/replace-zero-with-empty-cell-renderer.component.ts");
















var IncentiveDetailsComponent = /** @class */ (function () {
    function IncentiveDetailsComponent(ispService, route, ispAppConfigService, router, gridCommonService, excelService, printService, messageService) {
        this.ispService = ispService;
        this.route = route;
        this.ispAppConfigService = ispAppConfigService;
        this.router = router;
        this.gridCommonService = gridCommonService;
        this.excelService = excelService;
        this.printService = printService;
        this.messageService = messageService;
        this.routeButtonState = true;
        this.pageIndex = 1;
        this.inputValue = 1;
        this.pageInputValue = 1;
        this.totalPageCount = 1;
        this.totalRowCount = 0;
        this.isRegulatoryUser = false;
        this.currentPageSet = {
            start: 1,
            end: this.paginationPageSize
        };
        this.buttonDisabled = {
            firstButton: true,
            previousButton: true,
            nextButton: false,
            lastButton: false
        };
        this.isBtnLastClicked = false;
        /** Grid Properties - END */
        this.currentPageRoutePath = 'paymentByIncentive/vinSummaryDetails/';
        this.incentiveDetails = new _shared_dataModels_incentiveDetailResponseHeader__WEBPACK_IMPORTED_MODULE_2__["IncentiveResultHeader"]();
        this.headerObj = this.ispAppConfigService.getHeaderDetails();
        /** Grid Properties initialize - START */
        this.overlayNoRowsTemplate = '<span class="grid-noOverlay"> There are no results for the entered criterion. Please refine your search parameter </span>';
        this.frameworkComponents = {
            'customTextFilter': _shared_grid_filter_custom_text_filter_component__WEBPACK_IMPORTED_MODULE_7__["CustomTextFilterComponent"],
            'customDateFilter': _shared_grid_filter_custom_date_filter_component__WEBPACK_IMPORTED_MODULE_9__["CustomDateFilterComponent"],
            'pageNavigateCellRendererComponent': _shared_grid_page_navigate_cell_renderer_page_navigate_cell_renderer_component__WEBPACK_IMPORTED_MODULE_10__["PageNavigateCellRendererComponent"],
            'replaceZeroWithEmptyCellRendererComponent': _shared_grid_replace_zero_with_empty_cell_renderer_replace_zero_with_empty_cell_renderer_component__WEBPACK_IMPORTED_MODULE_15__["ReplaceZeroWithEmptyCellRendererComponent"]
        };
        this.paginationPageSize = 200;
        this.rowModelType = 'infinite';
        /** Grid Properties initialize - END */
    }
    IncentiveDetailsComponent.prototype.ngOnInit = function () {
        this.gridSetUp();
        this.setincentiveRequest();
        /*this.Headersubscription = this.ispService.getIncentiveDetails(this.incentiveRequestObject).subscribe(success => {
          this.incentiveDetails = success.header.resultHeader;
        });*/
    };
    IncentiveDetailsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.loadincentiveGrid(_this.incentiveRequestObject);
        }, 500);
    };
    IncentiveDetailsComponent.prototype.setincentiveRequest = function () {
        this.incentiveRequestObject = new _shared_dataModels_incentiveDetailsRequest__WEBPACK_IMPORTED_MODULE_3__["IncentiveDetailsRequest"]();
        this.incentiveRequestObject.queryParams.dealerCode = this.headerObj.dealerCode;
        this.incentiveRequestObject.queryParams.incentiveTypeName = this.route.snapshot.paramMap.get('incentiveTypeName');
        this.incentiveRequestObject.queryParams.incentiveTypeNum = this.route.snapshot.paramMap.get('incentiveTypeNo');
    };
    IncentiveDetailsComponent.prototype.routePaymentStatus = function () {
        var temp = this.api.getSelectedRows()[0];
        var temp1 = this.api.getSelectedRows()[0];
        this.ispService.setVSDTabIndicator(2);
        if (temp) {
            // stores the search request, later this is used to prepopulate the page
            this.ispService.setSelectedVIN_IncDet(temp.vin);
            var url = temp.vin + '/' + temp1.incentiveTypeName + '/' + temp1.incentiveTypeNo + '/' + encodeURIComponent(temp.customerName) + '/' + temp.retailDate.split('/').join('~');
            this.router.navigate([this.currentPageRoutePath + url]);
        }
    };
    IncentiveDetailsComponent.prototype.routeButtonToggle = function () {
        var temp = this.api.getSelectedRows()[0];
        // this.routeButtonState = temp == null ? true : false;
        if (temp == null) {
            this.routeButtonState = true;
        }
        else {
            this.routeButtonState = false;
        }
    };
    /** Grid Methods - START */
    /**
      @name onReady vin summary grid configurations and column defintions.
    */
    IncentiveDetailsComponent.prototype.gridSetUp = function () {
        var _this = this;
        this.gridOptions = {
            context: {
                componentParent: this
            },
            onGridReady: function (params) {
                _this.api = params.api;
                //this.api.sizeColumnsToFit();
                _this.api.refreshCells();
            },
            enableColResize: false,
            enableFilter: true,
            enableServerSideSorting: true,
            sortingOrder: ["asc", "desc"],
            pagination: true,
            headerHeight: 48,
            floatingFiltersHeight: 40,
            rowHeight: 35,
            rowSelection: 'single',
            filter: true,
            frameworkComponents: this.frameworkComponents,
            floatingFilter: true,
            suppressContextMenu: false,
            suppressMenuMainPanel: false,
            suppressMenuColumnPanel: false,
            suppressTabbing: true,
            suppressPaginationPanel: true,
            suppressMovableColumns: true,
            suppressMenu: true,
            suppressDragLeaveHidesColumns: true,
            suppressColumnVirtualisation: true,
            enableCellTextSelection: true
        };
        this.incentiveColumnDefs = [
            {
                headerCheckboxSelection: false,
                checkboxSelection: true,
                suppressFilter: true,
                suppressSorting: true,
                width: 50
            },
            {
                headerName: 'VIN',
                headerTooltip: 'VIN',
                tooltipField: 'vin',
                field: 'vin',
                width: 150,
                suppressMenu: true,
                cellRenderer: "pageNavigateCellRendererComponent",
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Model No.',
                field: 'modelNo',
                width: 80,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Serial No.',
                field: 'serialNo',
                width: 100,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Series',
                field: 'series',
                width: 100,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Model Year',
                field: 'modelYear',
                width: 80,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Brand',
                field: 'brand',
                width: 100,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Customer Name',
                field: 'customerName',
                width: 180,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Paid Date',
                field: 'paidDate',
                width: 130,
                suppressMenu: true,
                floatingFilterComponent: 'customDateFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Eligible Amt.',
                field: 'eligibleAmount',
                width: 130,
                suppressMenu: true,
                cellRenderer: "replaceZeroWithEmptyCellRendererComponent",
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Applied for Amt.',
                field: 'appliedAmt',
                width: 100,
                suppressMenu: true,
                cellRenderer: "replaceZeroWithEmptyCellRendererComponent",
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Paid Amt.',
                field: 'paidAmt',
                width: 80,
                suppressMenu: true,
                cellRenderer: "replaceZeroWithEmptyCellRendererComponent",
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Chargeback Amt.',
                field: 'chargebackAmount',
                width: 110,
                suppressMenu: true,
                cellRenderer: "replaceZeroWithEmptyCellRendererComponent",
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true },
                cellStyle: function (params) {
                    if (params.value < 0) {
                        //mark cells with negative values as red
                        return { color: 'red', };
                    }
                }
            },
            {
                headerName: 'Transaction Description',
                field: 'transactionDescription',
                width: 200,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Retail Date',
                field: 'retailDate',
                width: 130,
                suppressMenu: true,
                floatingFilterComponent: 'customDateFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'RDR Date',
                field: 'rdrDate',
                width: 130,
                suppressMenu: true,
                floatingFilterComponent: 'customDateFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            }
        ];
    };
    /**
      @name onReady trigger on vin summary grid ready in DOM.
      @param params - event
    */
    IncentiveDetailsComponent.prototype.onReady = function (params) {
        this.api = params.api;
        this.readyParam = params;
        setTimeout(function () {
            // this.api.sizeColumnsToFit();
        }, 100);
    };
    /**
      @name loadGrid trigger on vin summary search.
      @param formDetails Search Request
    */
    IncentiveDetailsComponent.prototype.loadincentiveGrid = function (incentiveGridDetails) {
        var _this = this;
        var rowData, rowcount, totalRows;
        var dataSource = {
            rowCount: totalRows,
            getRows: function (params) {
                _this.incentiveRowData = [];
                _this.ispService.getIncentiveDetails(incentiveGridDetails)
                    .subscribe(function (data) {
                    _this.incentiveDetails = data.header.resultHeader;
                    if (data.responseMessage === '0' && data.header.results) {
                        rowcount = data.header.totalResults;
                        rowData = data['header']['results'];
                    }
                    else {
                        _this.messageService.showMessage(data.error.errMessage, 'error');
                    }
                    _this.totalRowCount = rowcount;
                    totalRows = _this.totalRowCount;
                    _this.totalPageCount = _this.gridCommonService.calculateTotalPages(rowcount, _this.paginationPageSize);
                    _this.incentiveRowData = rowData;
                    if (_this.incentiveRowData && _this.incentiveRowData.length) {
                        _this.api.hideOverlay();
                    }
                    else {
                        _this.api.showNoRowsOverlay();
                    }
                    setTimeout(function () {
                        var rowsThisPage = rowData;
                        var lastRow = totalRows;
                        params.successCallback(rowsThisPage, lastRow);
                    }, 500);
                }, function (error) {
                    _this.incentiveRowData = [];
                    _this.api.showNoRowsOverlay();
                    _this.totalPageCount = 0;
                    _this.totalRowCount = 0;
                    _this.buttonDisabled = {
                        firstButton: true,
                        previousButton: true,
                        nextButton: true,
                        lastButton: true
                    };
                });
            }
        };
        this.readyParam.api.setDatasource(dataSource);
    };
    /**
    @name onPaginationChanged trigger on pagination changes.
    */
    IncentiveDetailsComponent.prototype.onPaginationChanged = function (params) {
        if (this.api) {
            this.buttonDisabled = {
                firstButton: false,
                previousButton: false,
                nextButton: false,
                lastButton: false
            };
            if (this.api.paginationGetCurrentPage() + 1 === 1) {
                this.pageInputValue = this.api.paginationGetCurrentPage() + 1;
                this.buttonDisabled.firstButton = true;
                this.buttonDisabled.previousButton = true;
                // Disable first and previous buttons
            }
            else {
                this.pageInputValue = this.api.paginationGetCurrentPage() + 1;
                this.buttonDisabled.firstButton = false;
                this.buttonDisabled.previousButton = false;
                // enable first and previous buttons
                // check if the page number ast page
                if (this.pageInputValue === this.totalPageCount) {
                    this.buttonDisabled.lastButton = true;
                    this.buttonDisabled.nextButton = true;
                }
                this.incentiveRequestObject.pageNumber = (this.api.paginationGetCurrentPage() + 1);
            }
            this.currentPageSet = this.gridCommonService.calculateCurrentPageSetValues(this.api.paginationGetCurrentPage(), this.paginationPageSize);
            if (this.totalRowCount <= this.paginationPageSize) {
                this.currentPageSet.end = this.totalRowCount;
                if (this.totalRowCount < 1) {
                    this.currentPageSet.start = 0;
                }
                this.buttonDisabled.lastButton = true;
                this.buttonDisabled.nextButton = true;
            }
        }
    };
    /**
       @name refreshData- triggers on refresh data button click
    */
    IncentiveDetailsComponent.prototype.refreshData = function () {
        this.loadincentiveGrid(this.incentiveRequestObject);
    };
    /**
       @name clearFilters- triggers on clearfilter  button click
    */
    IncentiveDetailsComponent.prototype.clearFilters = function () {
        var _this = this;
        setTimeout(function () {
            _this.api.setFilterModel(null);
        }, 100);
        // perform service call to reset the grid data with the criteria in the form currently
        this.loadincentiveGrid(this.incentiveRequestObject);
    };
    /**
       @name onBtFirst- triggers on pagination toFirst icon clicked.
    */
    IncentiveDetailsComponent.prototype.onBtFirst = function () {
        this.api.paginationGoToFirstPage();
    };
    /**
      @name onBtLast- triggers on pagination toLast icon clicked.
    */
    IncentiveDetailsComponent.prototype.onBtLast = function () {
        this.api.paginationGoToLastPage();
        this.isBtnLastClicked = true;
    };
    /**
      @name onBtLast- triggers on pagination next icon clicked.
    */
    IncentiveDetailsComponent.prototype.onBtNext = function () {
        this.api.paginationGoToNextPage();
    };
    /**
      @name onBtPrevious- triggers on pagination previous icon clicked.
    */
    IncentiveDetailsComponent.prototype.onBtPrevious = function () {
        this.api.paginationGoToPreviousPage();
    };
    /**
      @name onCustomPageChange- triggers on pagination text field changed and focused out.
      @param fieldValue - requested page number.
    */
    IncentiveDetailsComponent.prototype.onCustomPageChange = function (fieldValue) {
        this.pageInputValue = fieldValue;
        this.api.paginationGoToPage(this.pageInputValue - 1);
    };
    /**
      @name onSortChanged - on sort model changes.
      @param event - sort event parameters.
      */
    IncentiveDetailsComponent.prototype.onSortChanged = function (event) {
        var sortModel = event.api.getSortModel();
        var sortPresent = sortModel && sortModel.length > 0;
        this.resetPageIndex();
        if (sortPresent) {
            this.incentiveRequestObject.sortData = [];
            this.incentiveRequestObject.sortData.push({ colName: sortModel[0].colId, order: sortModel[0].sort });
        }
        else {
            this.incentiveRequestObject.sortData = [];
        }
        // reset routing buttons to disabled state
        this.routeButtonState = true;
    };
    /**
       @name resetPageIndex reset page index to 1.
       */
    IncentiveDetailsComponent.prototype.resetPageIndex = function () {
        this.incentiveRequestObject.pageNumber = 1;
    };
    /**
    @name onFilterChanged - on filter model changes.
    @param event - filter event parameters.
    */
    IncentiveDetailsComponent.prototype.onFilterChanged = function (event) {
        var filterModel = event.api.getFilterModel();
        var filterPresent = filterModel && Object.keys(filterModel).length > 0;
        this.resetPageIndex();
        Object.keys(filterModel);
        if (filterPresent) {
            this.incentiveRequestObject.filterData = [];
            for (var key in filterModel) {
                this.incentiveRequestObject.filterData.push({ 'filterName': key, 'filterValue': filterModel[key]['filter'] });
            }
        }
        else {
            this.incentiveRequestObject.filterData = [];
        }
        // reset routing buttons to disabled state
        this.routeButtonState = true;
    };
    /**
        @name excel export trigger on payment details .
        @param request Search Request query param
      */
    IncentiveDetailsComponent.prototype.excelConfig = function (request) {
        var _this = this;
        var rowData, excelVSData;
        var excelHeader = [];
        var emptyHeader = [];
        var reportHeading = ["PAYMENTS BY INCENTIVE TYPE", this.incentiveRequestObject.queryParams.incentiveTypeName, this.excelService.getCurrentDate()];
        excelHeader.push(emptyHeader);
        excelHeader.push(emptyHeader);
        excelHeader.push(emptyHeader);
        excelHeader.push(reportHeading);
        excelHeader.push(emptyHeader);
        this.ispService.getIncentiveDetails(request)
            .subscribe(function (data) {
            rowData = data['header']['results'];
            excelVSData = _this.setIncentiveDetailExcelResponse(rowData);
            _this.excelService.generateExcel(excelHeader, excelVSData, 'searchPaymentsByTypeDetails', 'paymentByIncentiveTypeDetails');
        });
    };
    IncentiveDetailsComponent.prototype.setIncentiveDetailExcelResponse = function (rowData) {
        var excelList = new Array();
        rowData.forEach(function (element) {
            var excelResp = new _shared_dataModels_excelPaymentByIncentiveTypeResponse__WEBPACK_IMPORTED_MODULE_13__["ExcelResponsePaymentByIncentiveType"]();
            excelResp.setOptionType(element.optionType);
            excelResp.setIncentiveTypeName(element.incentiveTypeName);
            excelResp.setIncentiveTypeNo(element.incentiveTypeNo);
            excelResp.setCategory(element.category);
            excelResp.setVin(element.vin);
            excelResp.setModelNo(element.modelNo);
            excelResp.setSerialNo(element.serialNo);
            excelResp.setSeries(element.series);
            excelResp.setModelYear(element.modelYear);
            excelResp.setBrand(element.brand);
            excelResp.setCustomerName(element.customerName);
            excelResp.setRetailDate(element.retailDate);
            excelResp.setRdrDate(element.rdrDate);
            excelResp.setPaidDate(element.paidDate);
            excelResp.setEligibleAmount(element.eligibleAmount);
            excelResp.setAppliedAmt(element.appliedAmt);
            excelResp.setPaidAmt(element.appliedAmt);
            excelResp.setPendingAmount(element.pendingAmount);
            excelResp.setchargebackAmount(element.chargebackAmount);
            excelResp.setTransactionDesc(element.transactionDesc);
            excelList.push(excelResp);
        });
        return excelList;
    };
    /**
       @name export to excel
       */
    IncentiveDetailsComponent.prototype.excelExporterForm = function () {
        this.incentiveRequestObject.showAll = true;
        this.incentiveRequestObject.pageNumber = 1;
        // setting the max count of data based on any previous search service calls
        this.incentiveRequestObject.totalResults = this.totalRowCount;
        this.excelConfig(this.incentiveRequestObject);
        // IPLUS-11093 Excel download feature not working in subsequent pages
        this.incentiveRequestObject.showAll = false;
    };
    /**
       @name printGrid trigger the service to print grid table
       */
    IncentiveDetailsComponent.prototype.printGrid = function () {
        var gridEle = document.getElementById('vinSummaryGrid');
        this.printService.printGrid(gridEle, this.gridOptions, this.api);
    };
    IncentiveDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-incentive-details',
            template: __webpack_require__(/*! ./incentive-details.component.html */ "./src/app/incentive-details/incentive-details.component.html"),
            styles: [__webpack_require__(/*! ./incentive-details.component.scss */ "./src/app/incentive-details/incentive-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_isp_app_service__WEBPACK_IMPORTED_MODULE_5__["IspAppService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _shared_services_isp_app_config_service__WEBPACK_IMPORTED_MODULE_4__["ISPAppConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _shared_grid_grid_common_service__WEBPACK_IMPORTED_MODULE_8__["GridCommonService"], _shared_services_isp_excel_service__WEBPACK_IMPORTED_MODULE_12__["ExcelExportService"], _shared_services_print_data_grid_service__WEBPACK_IMPORTED_MODULE_11__["PrintDataGridService"], _shared_message_handler_message_handler_service__WEBPACK_IMPORTED_MODULE_14__["MessageService"]])
    ], IncentiveDetailsComponent);
    return IncentiveDetailsComponent;
}());



/***/ }),

/***/ "./src/app/incentive-details/incentive-details.guard.ts":
/*!**************************************************************!*\
  !*** ./src/app/incentive-details/incentive-details.guard.ts ***!
  \**************************************************************/
/*! exports provided: IncentiveDetailsGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncentiveDetailsGuard", function() { return IncentiveDetailsGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_user_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/user-info.service */ "./src/app/shared/services/user-info.service.ts");




var IncentiveDetailsGuard = /** @class */ (function () {
    function IncentiveDetailsGuard(router, userInfoService) {
        this.router = router;
        this.userInfoService = userInfoService;
    }
    IncentiveDetailsGuard.prototype.canActivate = function (route, state) {
        return this.userInfoService.checkRole();
    };
    IncentiveDetailsGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_user_info_service__WEBPACK_IMPORTED_MODULE_3__["UserInfoService"]])
    ], IncentiveDetailsGuard);
    return IncentiveDetailsGuard;
}());



/***/ }),

/***/ "./src/app/isp-app.service.ts":
/*!************************************!*\
  !*** ./src/app/isp-app.service.ts ***!
  \************************************/
/*! exports provided: IspAppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IspAppService", function() { return IspAppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_isp_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/isp-http.service */ "./src/app/shared/services/isp-http.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_dataModels_dealReviewSearchRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/dataModels/dealReviewSearchRequest */ "./src/app/shared/dataModels/dealReviewSearchRequest.ts");
/* harmony import */ var _shared_dataModels_challengeSearchRequest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/dataModels/challengeSearchRequest */ "./src/app/shared/dataModels/challengeSearchRequest.ts");






var IspAppService = /** @class */ (function () {
    function IspAppService(IspHttpService) {
        this.IspHttpService = IspHttpService;
        this.vinContext = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].context + '/vinsummary';
        this.paymentsContext = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].context + '/payments';
        this.challengeContext = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].context + '/challenges';
        this.challengeDetailContext = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].context + '/challengeDetails';
        this.dealReviewContext = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].context + '/dealreview';
        this.dealReviewDetailsContext = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].context + '/dealReviewDetails';
        this.VSDTabIndicator = 1;
        this.vsSelectedData = null;
        this.selectedVIN = null;
        this.incentiveSelectedData = null;
        this.selectedIncentiveId = null;
        // Incentive detail tab, stores the selected vin
        this.selectedVIN_IncDet = null;
        this.paymentSelectedData = null;
        this.selectedPayRefNo = null;
        // Incentive detail tab, stores the selected vin
        this.selectedVIN_PayDet = null;
        this.challengeSelectedData = new _shared_dataModels_challengeSearchRequest__WEBPACK_IMPORTED_MODULE_5__["ChallengesSearchRequest"]();
        this.challengeSelectedVIN = null;
        this.dealReviewSelectedData = new _shared_dataModels_dealReviewSearchRequest__WEBPACK_IMPORTED_MODULE_4__["DealReviewSearchRequest"]();
        this.dealReviewSelectedVIN = null;
    }
    /**
       @name vinSearch- call to db to fetch Vin Summary Grid Data.
       @param request - form details to update.
       */
    IspAppService.prototype.vinSearchForm = function (request) {
        return this.IspHttpService
            .post(this.vinContext + "/searchSummary", request)
            .pipe(function (data) {
            // this.logger.logMethodEnd('dist-fd', 'getDistFDDetails', 'Error in getDistFDDetails Service', '' + data);
            return data;
        });
    };
    IspAppService.prototype.getVSDetails = function (request) {
        return this.IspHttpService
            .post(this.vinContext + "/getIncentiveStatus", request)
            .pipe(function (data) {
            // this.logger.logMethodEnd('dist-fd', 'getDistFDDetails', 'Error in getDistFDDetails Service', '' + data);
            return data;
        });
    };
    IspAppService.prototype.getVSPaymentDetails = function (request) {
        return this.IspHttpService
            .post(this.vinContext + "/getPaymentStatus", request)
            .pipe(function (data) {
            // this.logger.logMethodEnd('dist-fd', 'getDistFDDetails', 'Error in getDistFDDetails Service', '' + data);
            return data;
        });
    };
    // determines which tab is open in VIN Summary details, Incentive Status is 1 and Payment Status is 2
    IspAppService.prototype.setVSDTabIndicator = function (option) {
        this.VSDTabIndicator = option;
    };
    // stores the request object from the search form in the VIN Summary page, it's later used to preload the page when coming back to it via the breadcrumb
    IspAppService.prototype.setVSSelectedData = function (data) {
        this.vsSelectedData = data;
    };
    // stores the VIN of the record selected in grid table, it's later used to preload the page when coming back to it via the breadcrumb
    IspAppService.prototype.setselectedVIN = function (vin) {
        this.selectedVIN = vin;
    };
    // stores the request object from the search form in the Payment detail page, it's later used to preload the page when coming back to it via the breadcrumb
    IspAppService.prototype.setPaymentSelectedData = function (data) {
        this.paymentSelectedData = data;
    };
    // stores the Payment Reference number of the record selected in any grid table, it's later used to preload the page when coming back to it via the breadcrumb
    IspAppService.prototype.setselectedPayRefNo = function (payRefNo) {
        this.selectedPayRefNo = payRefNo;
    };
    // stores the request object from the search form in the Incentive detail page, it's later used to preload the page when coming back to it via the breadcrumb
    IspAppService.prototype.setIncentiveSelectedData = function (data) {
        this.incentiveSelectedData = data;
    };
    // stores VIN in Incentive detail page
    IspAppService.prototype.setSelectedVIN_IncDet = function (vin) {
        this.selectedVIN_IncDet = vin;
    };
    // stores VIN in Incentive detail page
    IspAppService.prototype.setSelectedVIN_PayDet = function (vin) {
        this.selectedVIN_PayDet = vin;
    };
    // stores the request object from the search form in the Incentive detail page, it's later used to preload the page when coming back to it via the breadcrumb
    IspAppService.prototype.setselectedIncentiveId = function (data) {
        this.selectedIncentiveId = data;
    };
    IspAppService.prototype.setChallengeSelectedData = function (data) {
        this.challengeSelectedData = data;
    };
    IspAppService.prototype.setChallengeSelectedVIN = function (vin) {
        this.challengeSelectedVIN = vin;
    };
    IspAppService.prototype.setDealReviewSelectedData = function (data) {
        this.dealReviewSelectedData = data;
    };
    IspAppService.prototype.setDealReviewSelectedVIN = function (vin) {
        this.dealReviewSelectedVIN = vin;
    };
    // fetches the data for Payment by Payment Search Form
    IspAppService.prototype.fetchPayByPayData = function (request) {
        return this.IspHttpService.post(this.paymentsContext + "/searchPaymentsByMethod", request);
    };
    // fetches the data for Payment by Incentive Search Form
    IspAppService.prototype.fetchPayByIncData = function (request) {
        return this.IspHttpService.post(this.paymentsContext + "/searchPaymentsByType", request);
    };
    // fetches the data for paymentdetails
    IspAppService.prototype.getPaymentsDetails = function (request) {
        return this.IspHttpService.post(this.paymentsContext + "/searchPaymentsByMethodDetails", request).pipe(function (data) {
            return data;
        });
    };
    // fetches the data for Incentivedetails
    IspAppService.prototype.getIncentiveDetails = function (request) {
        return this.IspHttpService.post(this.paymentsContext + "/searchPaymentsByTypeDetails", request).pipe(function (data) {
            return data;
        });
    };
    // fetches the data for challenges search form
    IspAppService.prototype.searchChallengeForm = function (request) {
        return this.IspHttpService.post(this.challengeContext + "/searchChlngSummary", request);
    };
    IspAppService.prototype.chlgdetailsSearchForm = function (request) {
        return this.IspHttpService.post(this.challengeDetailContext + "/viewChallenge", request);
    };
    IspAppService.prototype.createChallengeDetails = function (request) {
        return this.IspHttpService.post(this.challengeDetailContext + "/createChallenge", request);
    };
    // fetches the data for Deal Review Search Form
    IspAppService.prototype.fetchDealReviewData = function (request) {
        return this.IspHttpService.post(this.dealReviewContext + "/searchdealRvwSummary", request);
    };
    IspAppService.prototype.getDRPaymentDetails = function (request) {
        return this.IspHttpService.post(this.dealReviewDetailsContext + "/searchDealReviewById", request);
    };
    IspAppService.prototype.deleteChallengeDetails = function (request) {
        return this.IspHttpService.post(this.challengeDetailContext + "/deleteChallenge", request);
    };
    IspAppService.prototype.getsaveDetails = function (request) {
        return this.IspHttpService.postForm(this.challengeDetailContext + "/saveChallenge", request)
            // .post(`${this.challengeDetailContext}/saveChallenge`, request)
            //.postForm('iplus-isp-0.0.1-SNAPSHOT/challengeDetails/saveChallenge', request)
            .pipe(function (data) {
            // this.logger.logMethodEnd('dist-fd', 'getDistFDDetails', 'Error in getDistFDDetails Service', '' + data);
            return data;
        });
    };
    IspAppService.prototype.getDocument = function (request) {
        return this.IspHttpService.downloadUploadedFile(this.challengeDetailContext + "/getDocument", request)
            .pipe(function (data) {
            return data;
        });
    };
    IspAppService.prototype.getDealDocument = function (request) {
        return this.IspHttpService.downloadUploadedFile(this.dealReviewDetailsContext + "/retriveDocument", request)
            .pipe(function (data) {
            return data;
        });
    };
    IspAppService.prototype.submitChallengeDetails = function (request) {
        return this.IspHttpService.postForm(this.challengeDetailContext + "/submitChallenge", request)
            .pipe(function (data) {
            return data;
        });
    };
    IspAppService.prototype.saveDealReview = function (request) {
        return this.IspHttpService.postForm(this.dealReviewDetailsContext + "/saveDealReview", request);
    };
    IspAppService.prototype.submitDealReview = function (request) {
        return this.IspHttpService.postForm(this.dealReviewDetailsContext + "/submitDealReview", request);
    };
    IspAppService.prototype.setFilterSortModel = function (filterModel, sortModel) {
        this.selectedFilterModel = filterModel;
        this.selectedSortModel = sortModel;
    };
    IspAppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_isp_http_service__WEBPACK_IMPORTED_MODULE_2__["IspHttpService"]])
    ], IspAppService);
    return IspAppService;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar-row>\r\n    <span style=\"padding-right: 500px\"></span>\r\n    <span><strong class=\"font-weight-bold\">{{pageTitle | translate}}</strong></span>\r\n    <span class=\"space-away\"></span>\r\n    <span style=\"padding-left: 500px\"></span>\r\n</mat-toolbar-row>\r\n<mat-tab-group #VSDetailTabs (selectedTabChange)=\"policymanage($event)\" class=\"mat-sub-tab\">\r\n    <mat-tab id=\"Register\">\r\n        <ng-template mat-tab-label>\r\n            <span class=\"font-weight-bold\">{{'title.Register'|translate}}</span>\r\n        </ng-template>\r\n    </mat-tab>\r\n\r\n    <mat-tab id=\"About Us\">\r\n        <ng-template mat-tab-label>\r\n            <span class=\"font-weight-bold\">{{'title.About_Us'|translate}}</span>\r\n        </ng-template>\r\n    </mat-tab>\r\n\r\n    <mat-tab id=\"Contact Us\">\r\n        <ng-template mat-tab-label>\r\n            <span class=\"font-weight-bold\">{{'title.Contact_Us'|translate}}</span>\r\n        </ng-template>\r\n    </mat-tab>\r\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".referenceTextBox {\n  height: 32px;\n  margin-right: 10px; }\n\n.vinTextBox {\n  width: 250px;\n  padding-left: 2px; }\n\n.block-display {\n  display: block; }\n\n.pack {\n  margin-left: -7px; }\n\n.buttons-panel {\n  margin: 10px;\n  width: auto; }\n\n.iplus_Btn_Primary {\n  font-size: 12px; }\n\n.mat-card-actions {\n  padding: 0px 0; }\n\n.mat-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 5px 0; }\n\n.mat-radio-group .mat-radio-button {\n    color: white; }\n\n.font-size {\n  font-size: 12px; }\n\n::ng-deep .mat-radio-outer-circle {\n  background: #fff !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXEZTRFxccG9saWN5LW1hbmFnZW1lbnQvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBRWI7RUFDSSxlQUFlLEVBQUE7O0FBRWxCO0VBQ0csY0FBYyxFQUFBOztBQUVsQjtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYSxFQUFBOztBQUhqQjtJQU1NLFlBQVksRUFBQTs7QUFJbEI7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWZlcmVuY2VUZXh0Qm94IHtcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjYzhjOGM4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLnZpblRleHRCb3gge1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDJweDtcclxufVxyXG5cclxuLmJsb2NrLWRpc3BsYXkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ucGFjayB7XHJcbiAgbWFyZ2luLWxlZnQ6IC03cHg7XHJcbn1cclxuXHJcbi5idXR0b25zLXBhbmVsIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuLmlwbHVzX0J0bl9QcmltYXJ5IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAubWF0LWNhcmQtYWN0aW9ucyB7XHJcbiAgICBwYWRkaW5nOiAwcHggMDtcclxufVxyXG4ubWF0LXJhZGlvLWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICAgIFxyXG4ubWF0LXJhZGlvLWJ1dHRvbiB7ICBcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuLmZvbnQtc2l6ZXtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn0gIFxyXG46Om5nLWRlZXAgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUgIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_isp_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/isp-app-config.service */ "./src/app/shared/services/isp-app-config.service.ts");
/* harmony import */ var _shared_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/data-sharing.service */ "./src/app/shared/services/data-sharing.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(ispAppConfigService, dataService, translate, router, route, renderer) {
        this.ispAppConfigService = ispAppConfigService;
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.renderer = renderer;
        this.showMessage = false;
        this._dealerCode = '31069';
        this._message = 'Not a valid Dealer Code!';
        translate.addLangs(['en']);
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
        this.headerObj = this.ispAppConfigService.getHeaderDetails();
    }
    Object.defineProperty(LoginComponent.prototype, "dealerTheme", {
        get: function () {
            return this._dealerTheme;
        },
        set: function (value) {
            this._dealerTheme = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "ispDealerName", {
        get: function () {
            return this._ispDealerName;
        },
        set: function (value) {
            this._ispDealerName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "dealerRegionName", {
        get: function () {
            return this._dealerRegionName;
        },
        set: function (value) {
            this._dealerRegionName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "dealerName", {
        get: function () {
            return this._dealerName;
        },
        set: function (value) {
            this._dealerName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (value) {
            this._message = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "dealerCode", {
        get: function () {
            return this._dealerCode;
        },
        set: function (value) {
            this._dealerCode = value;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.renderer.addClass(document.body, 'login');
        this.dataService.currentDealerCode.subscribe(function (value) { return _this.dealerCode = value; });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.renderer.removeClass(document.body, 'login');
    };
    LoginComponent.prototype.onSubmit = function (f) {
        var _this = this;
        this._dealerName = "SEWELL LEXUS";
        this._dealerRegionName = "KANSAS CITY REGION";
        this._dealerTheme = "Lexus";
        var pattern = new RegExp("[0-9][0-9][0-9][0-9][0-9]");
        if (pattern.test(this._dealerCode)) {
            if (this._ispDealerName == undefined) {
                return;
            }
            var d = new Date();
            d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = "DealerDaily=SelectedDealer=" + this._dealerCode + "&"
                + "SelectedDealerName=" + this._dealerName + "&"
                + "SelectedTheme=" + this._dealerTheme + "&"
                + "SelectedRegionName=" + this._dealerRegionName + "&"
                + expires + ";path=/";
            this.dataService.changeMessage(this.dealerCode);
            // this.ispAppConfigService.load();      
            this.router.navigate(['vinSummary']);
            setTimeout(function () {
                window.location.reload();
            }, 500);
            return;
        }
        else {
            this.showMessage = true;
            setTimeout(function () {
                _this.showMessage = !_this.showMessage;
            }, 2000);
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_isp_app_config_service__WEBPACK_IMPORTED_MODULE_4__["ISPAppConfigService"], _shared_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_5__["DataSharingService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.guard.ts":
/*!**************************************!*\
  !*** ./src/app/login/login.guard.ts ***!
  \**************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var LoginGuard = /** @class */ (function () {
    function LoginGuard(router, http) {
        this.router = router;
        this.http = http;
    }
    Object.defineProperty(LoginGuard.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (value) {
            this._user = value;
        },
        enumerable: true,
        configurable: true
    });
    LoginGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http
                .get('assets/mockData/auth.json')
                .subscribe(function (response) {
                _this._user = response.user;
                if (_this._user === 'formAuthProvider') {
                    resolve(true);
                }
                else {
                    _this.router.navigate(['vinSummary']);
                    resolve(false);
                }
            });
        });
    };
    LoginGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/payment-by-incentive/payment-by-incentive.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/payment-by-incentive/payment-by-incentive.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar style=\"width: auto\">\r\n  <mat-toolbar-row>\r\n    <span><strong class=\"bold_text\">{{'title.Payment_By_Incentive'|translate}}</strong></span>\r\n    <span class=\"space-away\"></span>\r\n    <mat-icon matTooltip=\"Print\" class=\"ip-mat-icon\" (click)=\"printGrid()\">local_printshop</mat-icon>\r\n    <span style=\"padding-left: 20px\"></span>\r\n    <i class=\"fa fa-file-excel-o fa-lg\" matTooltip=\"Export to Excel\" (click)=\"excelExporterFormForPaymentByIncType()\"style=\"font-size: 16px; cursor: Pointer;\"></i>\r\n \r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<div class=\"row mt-2 ml-1 search-form\">\r\n  <div class=\"col-md-12 col-lg-8 col-xs-6\">\r\n    <label><strong>{{'labels.Search_by_Active_Incentive_Date'|translate}}</strong></label>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 col-lg-2 mt-2 pr-0\">\r\n        <label><strong>{{'labels.Incentive_Month'|translate}}</strong></label>\r\n      </div>\r\n      <div class=\"col-md-4 mt-1\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-7\">\r\n            <mat-select placeholder=\"January\" [(ngModel)]=\"selectedMonth\" [disabled]='calDropEnable'>\r\n              <mat-option *ngFor=\"let month of monthList\" [value]='month'>{{month}}</mat-option>\r\n            </mat-select>\r\n          </div>\r\n          <div class=\"col-md-5\">\r\n            <mat-select placeholder=\"2019\" [(ngModel)]=\"selectedYear\" [disabled]='calDropEnable' (ngModelChange)=\"onDateChange()\">\r\n              <mat-option *ngFor=\"let year of yearList\" [value]='year' (click)=\"resetMonths()\">{{year}}</mat-option>\r\n            </mat-select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 mt-1\">\r\n        <div class=\"row\">\r\n          <span class=\"space-away\"></span>\r\n          <button class=\"iplus_Btn_Primary\" mat-raised-button matTooltip=\"Search records\" (click)=\"searchRecords()\">\r\n            {{'button.Search'| translate}}\r\n          </button>\r\n          <span style=\"display: block; padding-left: 10px\"></span>\r\n          <button class='resetBtn' mat-raised-button matTooltip=\"Reset all data\" (click)=\"resetForm()\">\r\n            {{'button.Reset'| translate}}\r\n          </button>\r\n          <span style=\"display: block; padding-left: 30px\"></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<mat-toolbar class=\"buttons-panel\">\r\n  <mat-toolbar-row>\r\n    <button class=\"iplus_Btn_Primary m-r\" id=\"incentiveDetailsBtn\" mat-raised-button [disabled]=\"incentiveBtnState\" (click)=\"routeIncentiveDetails()\">{{'button.Incentive_Details'| translate}}</button>\r\n    <span class=\"space-away\"></span>\r\n    <button class=\"mr-2\" mat-raised-button (click)=\"submitForm()\">\r\n      <span class=\"d-none d-md-inline\"> {{'button.Refresh_Data'| translate}}</span>\r\n      <mat-icon class=\"ip-mat-icon m-l-xs\">cached</mat-icon>\r\n    </button>\r\n    <button mat-raised-button (click)=\"clearFilters()\">\r\n        <span class=\"d-none d-md-inline\"> {{'button.Clear_Filter'| translate}}</span>\r\n      <mat-icon class=\"ip-mat-icon m-l-xs\">replay</mat-icon>\r\n    </button>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<mat-divider></mat-divider>\r\n\r\n<div class=\"col-sm-12\" style=\"padding: 0px;\" id=\"vinGridcontainer\" class=\"gridcontainer\">\r\n\r\n  <ag-grid-angular #agGrid id=\"vinSummaryGrid\" style=\"width: 100%; height: 448px;\" class=\"ag-theme-material\"\r\n    [gridOptions]=\"gridOptions\" [columnDefs]=\"payByIncentiveColumnDefs\" [rowData]=\"payByIncentiveRowData\"\r\n    [rowModelType]=\"rowModelType\" [maxBlocksInCache]=\"200\" [cacheBlockSize]=\"200\" [pagination]=\"true\"\r\n    [paginationPageSize]=\"paginationPageSize\" [suppressPaginationPanel]=\"true\" (paginationChanged)=\"onPaginationChanged($event)\"\r\n    [suppressRowClickSelection]=\"true\" [animateRows]=\"true\" (gridReady)=\"onReady($event)\"\r\n    [overlayNoRowsTemplate]=\"overlayNoRowsTemplate\" (rowSelected)=\"incentiveButtonToggle()\" (sortChanged)=\"onSortChanged($event)\" (filterChanged)=\"onFilterChanged($event)\">\r\n  </ag-grid-angular>\r\n\r\n  <br>\r\n\r\n  <mat-toolbar-row>\r\n    <div class=\"ag-paging-panel ag-font-style\" style=\"margin-bottom:5px\">\r\n      <span class=\"ag-paging-page-summary-panel\">\r\n        <button class=\"ag-paging-button\" ref=\"btFirst\" [ngStyle]=\"{'opacity' : buttonDisabled.firstButton ? '0.65' : '1'}\"\r\n          [disabled]=\"this.buttonDisabled.firstButton\" (click)=\"onBtFirst()\">\r\n          <div class=\"pagination-previous-icon\">\r\n            <div class=\"pagination-previous-bar\"></div>\r\n          </div>\r\n        </button>\r\n        <button class=\"ag-paging-button\" ref=\"btPrevious\" [ngStyle]=\"{'opacity' : buttonDisabled.previousButton ? '0.65' : '1'}\"\r\n          [disabled]=\"this.buttonDisabled.previousButton\" (click)=\"onBtPrevious()\">\r\n          <div class=\"pagination-previous-icon\"></div>\r\n        </button>\r\n        <input type=\"number\" class=\"pagination-input\" [(ngModel)]=\"pageInputValue\" (keyup.enter)=\"onCustomPageChange(pageInputValue)\"\r\n          (blur)=\"onCustomPageChange(pageInputValue)\" autocomplete=\"off\" />  {{'labels.of' | translate}}\r\n        <span ref=\"lbTotal\">{{totalPageCount}}</span>\r\n        <button class=\"ag-paging-button\" ref=\"btNext\" [ngStyle]=\"{'opacity' : buttonDisabled.nextButton ? '0.65' : '1'}\"\r\n          [disabled]=\"this.buttonDisabled.nextButton\" (click)=\"onBtNext()\">\r\n          <div class='pagination-next-icon'></div>\r\n        </button>\r\n        <button class=\"ag-paging-button\" ref=\"btLast\" [ngStyle]=\"{'opacity' : buttonDisabled.lastButton ? '0.65' : '1'}\"\r\n          [disabled]=\"buttonDisabled.lastButton\" (click)=\"onBtLast()\">\r\n          <div class='pagination-next-icon'>\r\n            <div class='pagination-last-bar'></div>\r\n          </div>\r\n        </button>\r\n      </span>\r\n    </div>\r\n\r\n\r\n    <span _ngcontent-ljs-c8=\"\" class=\"space-away\"></span>\r\n\r\n    <div style=\"margin:8px 9px 0 0;\">\r\n      <span ref=\"eSummaryPanel\" class=\"ag-paging-row-summary-panel\">\r\n        <span ref=\"lbFirstRowOnPage\">{{currentPageSet.start}}</span> {{'labels.to' | translate}}\r\n        <span ref=\"lbLastRowOnPage\">{{currentPageSet.end}}</span> {{'labels.of' | translate}}\r\n        <span ref=\"lbRecordCount\">{{totalRowCount}}</span>\r\n        <span style=\"margin-left:3px;\">{{'labels.items' | translate}}</span>\r\n      </span>\r\n    </div>\r\n  </mat-toolbar-row>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/payment-by-incentive/payment-by-incentive.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/payment-by-incentive/payment-by-incentive.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".referenceTextBox {\n  height: 32px;\n  margin-right: 10px; }\n\n.vinTextBox {\n  width: 250px;\n  padding-left: 2px; }\n\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n\n.column-flex {\n  display: flex;\n  flex-direction: column; }\n\n.row-flex {\n  display: flex;\n  flex-direction: row; }\n\n.block-display {\n  display: block; }\n\n.bold_text {\n  font-size: 18px; }\n\nb {\n  font-size: 13px; }\n\n.pack {\n  margin-left: -7px; }\n\n.buttons-panel {\n  margin: 10px;\n  width: auto; }\n\n::ng-deep ag-grid-angular .ag-header-row:first-child .ag-header-cell {\n  background-color: #757575 !important;\n  text-align: center !important;\n  color: #fff;\n  font-weight: 700; }\n\n::ng-deep ag-grid-angular .ag-header-cell {\n  font-weight: 900 !important;\n  font-size: 15px !important;\n  background-color: #ffffff; }\n\n::ng-deep ag-grid-angular .ag-row-odd {\n  background-color: #f6f6f6 !important; }\n\n::ng-deep ag-grid-angular .ag-row-even {\n  background: white !important; }\n\n::ng-deep ag-grid-angular .ag-horizontal-left-spacer {\n  visibility: hidden; }\n\n::ng-deep ag-grid-angular .ag-header-cell-label .ag-header-cell-text {\n  margin-top: -8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC1ieS1pbmNlbnRpdmUvQzpcXEZTRFxccG9saWN5LW1hbmFnZW1lbnQvc3JjXFxhcHBcXHBheW1lbnQtYnktaW5jZW50aXZlXFxwYXltZW50LWJ5LWluY2VudGl2ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2I7RUFFSSxvQ0FBb0M7RUFDcEMsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFMcEI7RUFRSSwyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLHlCQUF5QixFQUFBOztBQVY3QjtFQWNJLG9DQUFvQyxFQUFBOztBQWR4QztFQWlCSSw0QkFBNEIsRUFBQTs7QUFqQmhDO0VBb0JJLGtCQUFrQixFQUFBOztBQXBCdEI7RUF1QkksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYXltZW50LWJ5LWluY2VudGl2ZS9wYXltZW50LWJ5LWluY2VudGl2ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWZlcmVuY2VUZXh0Qm94IHtcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjYzhjOGM4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLnZpblRleHRCb3gge1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDJweDtcclxufVxyXG4uZmxleC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jb2x1bW4tZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ucm93LWZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmJsb2NrLWRpc3BsYXkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5ib2xkX3RleHQge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5iIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLnBhY2sge1xyXG4gIG1hcmdpbi1sZWZ0OiAtN3B4O1xyXG59XHJcblxyXG4uYnV0dG9ucy1wYW5lbCB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG46Om5nLWRlZXAgYWctZ3JpZC1hbmd1bGFyIHtcclxuICAuYWctaGVhZGVyLXJvdzpmaXJzdC1jaGlsZCAuYWctaGVhZGVyLWNlbGwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc1NzU3NSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIC5hZy1oZWFkZXItY2VsbCB7XHJcbiAgICBmb250LXdlaWdodDogOTAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAvL2JhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI0ZGRkZGRiwgI0Q5RDlEOSA1MCUsICNGRkZGRkYpO1xyXG4gIH1cclxuICAuYWctcm93LW9kZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5hZy1yb3ctZXZlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYWctaG9yaXpvbnRhbC1sZWZ0LXNwYWNlciB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5hZy1oZWFkZXItY2VsbC1sYWJlbCAuYWctaGVhZGVyLWNlbGwtdGV4dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/payment-by-incentive/payment-by-incentive.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/payment-by-incentive/payment-by-incentive.component.ts ***!
  \************************************************************************/
/*! exports provided: PaymentByIncentiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentByIncentiveComponent", function() { return PaymentByIncentiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_grid_filter_custom_text_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/grid/filter/custom-text-filter.component */ "./src/app/shared/grid/filter/custom-text-filter.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _isp_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isp-app.service */ "./src/app/isp-app.service.ts");
/* harmony import */ var _shared_services_isp_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/isp-app-config.service */ "./src/app/shared/services/isp-app-config.service.ts");
/* harmony import */ var _shared_dataModels_incentiveSearchRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/dataModels/incentiveSearchRequest */ "./src/app/shared/dataModels/incentiveSearchRequest.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_grid_grid_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/grid/grid-common.service */ "./src/app/shared/grid/grid-common.service.ts");
/* harmony import */ var _shared_grid_filter_custom_date_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/grid/filter/custom-date-filter.component */ "./src/app/shared/grid/filter/custom-date-filter.component.ts");
/* harmony import */ var _shared_services_isp_excel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/services/isp-excel-service */ "./src/app/shared/services/isp-excel-service.ts");
/* harmony import */ var _shared_dataModels_excelPaymentByIncentiveTypeResponse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/dataModels/excelPaymentByIncentiveTypeResponse */ "./src/app/shared/dataModels/excelPaymentByIncentiveTypeResponse.ts");
/* harmony import */ var _shared_services_print_data_grid_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/services/print-data-grid.service */ "./src/app/shared/services/print-data-grid.service.ts");
/* harmony import */ var _shared_message_handler_message_handler_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/message-handler/message-handler.service */ "./src/app/shared/message-handler/message-handler.service.ts");
/* harmony import */ var _shared_grid_replace_zero_with_empty_cell_renderer_replace_zero_with_empty_cell_renderer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/grid/replace-zero-with-empty-cell-renderer/replace-zero-with-empty-cell-renderer.component */ "./src/app/shared/grid/replace-zero-with-empty-cell-renderer/replace-zero-with-empty-cell-renderer.component.ts");















var PaymentByIncentiveComponent = /** @class */ (function () {
    /** Grid Properties - END */
    function PaymentByIncentiveComponent(fb, ispService, ispAppConfigService, router, gridCommonService, printService, excelService, messageService) {
        this.fb = fb;
        this.ispService = ispService;
        this.ispAppConfigService = ispAppConfigService;
        this.router = router;
        this.gridCommonService = gridCommonService;
        this.printService = printService;
        this.excelService = excelService;
        this.messageService = messageService;
        // stores the start and end date from the custom date fields
        this.date = new Date();
        this.calenderEnable = true;
        this.calDropEnable = false;
        // toggles the state of Incentive Details button
        this.incentiveBtnState = true;
        this.searchOption = '1';
        this.pageIndex = 1;
        this.inputValue = 1;
        this.pageInputValue = 1;
        this.totalPageCount = 1;
        this.totalRowCount = 0;
        this.isRegulatoryUser = false;
        this.currentPageSet = {
            start: 1,
            end: this.paginationPageSize
        };
        this.buttonDisabled = {
            firstButton: true,
            previousButton: true,
            nextButton: false,
            lastButton: false
        };
        this.isBtnLastClicked = false;
        this.months = ['January', 'February', 'March', "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.yearList = [];
        this.headerObj = this.ispAppConfigService.getHeaderDetails();
        this.incentiveSearchRequest = new _shared_dataModels_incentiveSearchRequest__WEBPACK_IMPORTED_MODULE_6__["IncentiveSearchRequest"]();
        /** Grid Properties initialize - START */
        this.overlayNoRowsTemplate = '<span class="grid-noOverlay"> There are no results for the entered criterion. Please refine your search parameter </span>';
        this.frameworkComponents = {
            'customTextFilter': _shared_grid_filter_custom_text_filter_component__WEBPACK_IMPORTED_MODULE_2__["CustomTextFilterComponent"],
            'customDateFilter': _shared_grid_filter_custom_date_filter_component__WEBPACK_IMPORTED_MODULE_9__["CustomDateFilterComponent"],
            'replaceZeroWithEmptyCellRendererComponent': _shared_grid_replace_zero_with_empty_cell_renderer_replace_zero_with_empty_cell_renderer_component__WEBPACK_IMPORTED_MODULE_14__["ReplaceZeroWithEmptyCellRendererComponent"]
        };
        this.paginationPageSize = 200;
        this.rowModelType = 'infinite';
        /** Grid Properties initialize - END */
    }
    PaymentByIncentiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gridSetUp();
        this.setDefaultDate();
        // subscribes the pre-selected search request and preloads the page if required
        if (this.ispService.incentiveSelectedData !== null) {
            this.preLoadPaybyIncPage(this.ispService.incentiveSelectedData);
            setTimeout(function () {
                _this.submitForm();
            }, 500);
        }
        else {
            // will work when there's nothing to preLoad, i.e. first time payment by Incentive component is loaded. Will fetch the data with the default values in the form
            setTimeout(function () {
                _this.submitForm();
            }, 500);
        }
    };
    PaymentByIncentiveComponent.prototype.preLoadPaybyIncPage = function (data) {
        this.selectedMonth = data.queryParams.incentiveMonth;
        this.selectedYear = data.queryParams.incentiveYear;
    };
    PaymentByIncentiveComponent.prototype.setDefaultDate = function () {
        var date = new Date();
        this.selectedMonth = this.months[date.getMonth()];
        this.selectedYear = date.getFullYear();
        this.resetMonths();
        for (var index = 0; index < 10; index++) {
            this.yearList.push(date.getFullYear() - index);
        }
    };
    PaymentByIncentiveComponent.prototype.onDateChange = function () {
        if (this.monthList = this.selectedYear == this.date.getFullYear() ? this.months.slice(0, 1 + this.date.getMonth()) : this.months) {
            if (this.selectedYear == this.date.getFullYear() && this.selectedMonth !== this.monthList[this.months.indexOf(this.selectedMonth, 0)]) {
                this.selectedMonth = this.months[this.date.getMonth()];
            }
        }
    };
    PaymentByIncentiveComponent.prototype.resetMonths = function () {
        this.monthList = this.selectedYear == this.date.getFullYear() ? this.months.slice(0, 1 + this.date.getMonth()) : this.months;
    };
    /* formulates the request object with all relevant data. */
    PaymentByIncentiveComponent.prototype.setSearchRequest = function () {
        // some default properties in the request object are set in the constructor itself
        this.incentiveSearchRequest = new _shared_dataModels_incentiveSearchRequest__WEBPACK_IMPORTED_MODULE_6__["IncentiveSearchRequest"]();
        this.incentiveSearchRequest.excelUrl = {
            url: "excelExporter/searchPaymentsByType"
        };
        this.incentiveSearchRequest.queryParams.dealerCode = this.headerObj.dealerCode;
        this.incentiveSearchRequest.queryParams.incentiveMonth = this.selectedMonth;
        this.incentiveSearchRequest.queryParams.incentiveYear = this.selectedYear;
        // setting the sorting parameters, if any, in the request object
        var sortModel = this.api.getSortModel();
        if (sortModel && sortModel.length > 0) {
            this.incentiveSearchRequest.sortData = [];
            this.incentiveSearchRequest.sortData.push({ colName: sortModel[0].colId, order: sortModel[0].sort });
        }
        // setting the filtering parameters, if any, in the request object
        var filterModel = this.api.getFilterModel();
        Object.keys(filterModel);
        if (filterModel && Object.keys(filterModel).length > 0) {
            this.incentiveSearchRequest.filterData = [];
            for (var key in filterModel) {
                this.incentiveSearchRequest.filterData.push({ 'filterName': key, 'filterValue': filterModel[key]['filter'] });
            }
        }
    };
    PaymentByIncentiveComponent.prototype.searchRecords = function () {
        // filter and sorting retain
        this.readyParam.api.setDatasource({});
        this.api.setFilterModel(null);
        this.api.setSortModel(null);
        this.submitForm();
    };
    PaymentByIncentiveComponent.prototype.submitForm = function () {
        this.setSearchRequest();
        this.loadGrid(this.incentiveSearchRequest);
    };
    // resets all the form fields and does a service call
    PaymentByIncentiveComponent.prototype.resetForm = function () {
        this.setDefaultDate();
        // filter and sorting retain
        this.readyParam.api.setDatasource({});
        this.api.setFilterModel(null);
        this.api.setSortModel(null);
        this.submitForm();
    };
    // toggles the state of Incentive buttons
    PaymentByIncentiveComponent.prototype.incentiveButtonToggle = function () {
        var temp = this.api.getSelectedRows()[0];
        // this.incentiveBtnState = temp == null ? true : false;
        if (temp == null) {
            this.incentiveBtnState = true;
        }
        else {
            this.incentiveBtnState = false;
        }
    };
    PaymentByIncentiveComponent.prototype.routeIncentiveDetails = function () {
        var temp = this.api.getSelectedRows()[0];
        if (temp) {
            // stores the identifier for the record selected in Payment by Incentive grid table
            this.ispService.setselectedIncentiveId(temp.incentiveTypeNo);
            // stores the search request, later this is used to prepopulate the page
            this.ispService.setIncentiveSelectedData(this.incentiveSearchRequest);
            this.ispService.setFilterSortModel(this.api.getFilterModel(), this.api.getSortModel());
            var url = temp.incentiveTypeName + '/' + temp.incentiveTypeNo;
            this.router.navigate(['paymentByIncentive/incentiveDetails/' + url]);
        }
    };
    /** Grid Methods - START */
    /**
      @name onReady vin summary grid configurations and column defintions.
    */
    PaymentByIncentiveComponent.prototype.gridSetUp = function () {
        var _this = this;
        this.gridOptions = {
            context: {
                componentParent: this
            },
            onGridReady: function (params) {
                _this.api = params.api;
                //this.api.sizeColumnsToFit();
                _this.api.refreshCells();
                _this.api.setFilterModel(_this.ispService.selectedFilterModel);
                _this.api.setSortModel(_this.ispService.selectedSortModel);
            },
            enableColResize: false,
            enableFilter: true,
            enableServerSideSorting: true,
            sortingOrder: ["asc", "desc"],
            pagination: true,
            headerHeight: 48,
            floatingFiltersHeight: 40,
            rowHeight: 35,
            rowSelection: 'single',
            filter: true,
            frameworkComponents: this.frameworkComponents,
            floatingFilter: true,
            suppressContextMenu: false,
            suppressMenuMainPanel: false,
            suppressMenuColumnPanel: false,
            suppressTabbing: true,
            suppressPaginationPanel: true,
            suppressMovableColumns: true,
            suppressMenu: true,
            suppressDragLeaveHidesColumns: true,
            suppressColumnVirtualisation: true,
            enableCellTextSelection: true
        };
        this.payByIncentiveColumnDefs = [
            {
                headerCheckboxSelection: false,
                checkboxSelection: true,
                suppressFilter: true,
                suppressSorting: true,
                width: 50
            },
            {
                headerName: 'Incentive Category',
                field: 'category',
                width: 130,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true },
                cellRenderer: function (params) {
                    // sets the previously selected node while preLoading the data table
                    if (_this.ispService.selectedIncentiveId && params.node.data && params.node.data.incentiveTypeNo === _this.ispService.selectedIncentiveId) {
                        params.node.setSelected(true);
                    }
                    return params.value;
                }
            },
            {
                headerName: 'Incentive Type',
                field: 'optionType',
                width: 130,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Incentive Type Name',
                field: 'incentiveTypeName',
                width: 150,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Incentive Start Date',
                field: 'incentiveStartDate',
                width: 130,
                suppressMenu: true,
                floatingFilterComponent: 'customDateFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Incentive End Date',
                field: 'incentiveEndDate',
                width: 130,
                suppressMenu: true,
                floatingFilterComponent: 'customDateFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Series',
                field: 'series',
                width: 100,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Applied for Amt.',
                field: 'appliedAmt',
                width: 100,
                suppressMenu: true,
                cellRenderer: "replaceZeroWithEmptyCellRendererComponent",
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Paid Amount',
                field: 'paidAmt',
                width: 100,
                suppressMenu: true,
                cellRenderer: "replaceZeroWithEmptyCellRendererComponent",
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Chargeback Amount',
                field: 'chargebackAmount',
                width: 100,
                suppressMenu: true,
                cellRenderer: "replaceZeroWithEmptyCellRendererComponent",
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true },
                cellStyle: function (params) {
                    if (params.value < 0) {
                        //mark cells with negative values as red
                        return { color: 'red', };
                    }
                }
            },
            {
                headerName: 'Denied Amount',
                field: 'deniedAmount',
                width: 100,
                suppressMenu: true,
                cellRenderer: "replaceZeroWithEmptyCellRendererComponent",
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Net Paid Amount',
                field: 'netPaidAmt',
                width: 100,
                suppressMenu: true,
                // IPLUS-11091
                // IPLUS-11593 - Removed code for fix
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            }
        ];
    };
    /**
      @name onReady trigger on vin summary grid ready in DOM.
      @param params - event
    */
    PaymentByIncentiveComponent.prototype.onReady = function (params) {
        this.api = params.api;
        this.readyParam = params;
        setTimeout(function () {
            // this.api.sizeColumnsToFit();
        }, 100);
    };
    /**
      @name loadGrid trigger on vin summary search.
      @param formDetails Search Request
    */
    PaymentByIncentiveComponent.prototype.loadGrid = function (formDetails) {
        var _this = this;
        var rowData, rowcount, totalRows;
        var dataSource = {
            rowCount: totalRows,
            getRows: function (params) {
                _this.payByIncentiveRowData = [];
                _this.ispService.fetchPayByIncData(formDetails)
                    .subscribe(function (data) {
                    if (data.responseMessage === '0' && data.result.results) {
                        rowcount = data.result.totalResults;
                        rowData = data['result']['results'];
                    }
                    else {
                        _this.messageService.showMessage(data.error.errMessage, 'error');
                    }
                    _this.totalRowCount = rowcount;
                    totalRows = _this.totalRowCount;
                    _this.totalPageCount = _this.gridCommonService.calculateTotalPages(rowcount, _this.paginationPageSize);
                    _this.payByIncentiveRowData = rowData;
                    if (_this.payByIncentiveRowData && _this.payByIncentiveRowData.length) {
                        _this.api.hideOverlay();
                    }
                    else {
                        _this.api.showNoRowsOverlay();
                    }
                    setTimeout(function () {
                        var rowsThisPage = rowData;
                        var lastRow = totalRows;
                        params.successCallback(rowsThisPage, lastRow);
                    }, 500);
                }, function (error) {
                    _this.payByIncentiveRowData = [];
                    _this.api.showNoRowsOverlay();
                    _this.totalPageCount = 0;
                    _this.totalRowCount = 0;
                    _this.buttonDisabled = {
                        firstButton: true,
                        previousButton: true,
                        nextButton: true,
                        lastButton: true
                    };
                });
            }
        };
        this.readyParam.api.setDatasource(dataSource);
        // on load of table, no data is selected, thus Incentive details button state is reverted to disabled
        this.incentiveBtnState = true;
    };
    /**
    @name onPaginationChanged trigger on pagination changes.
    */
    PaymentByIncentiveComponent.prototype.onPaginationChanged = function (params) {
        if (this.api) {
            this.buttonDisabled = {
                firstButton: false,
                previousButton: false,
                nextButton: false,
                lastButton: false
            };
            if (this.api.paginationGetCurrentPage() + 1 === 1) {
                this.pageInputValue = this.api.paginationGetCurrentPage() + 1;
                this.buttonDisabled.firstButton = true;
                this.buttonDisabled.previousButton = true;
                // Disable first and previous buttons
            }
            else {
                this.pageInputValue = this.api.paginationGetCurrentPage() + 1;
                this.buttonDisabled.firstButton = false;
                this.buttonDisabled.previousButton = false;
                // enable first and previous buttons
                // check if the page number ast page
                if (this.pageInputValue === this.totalPageCount) {
                    this.buttonDisabled.lastButton = true;
                    this.buttonDisabled.nextButton = true;
                }
                this.incentiveSearchRequest.pageNumber = (this.api.paginationGetCurrentPage() + 1).toString();
            }
            this.currentPageSet = this.gridCommonService.calculateCurrentPageSetValues(this.api.paginationGetCurrentPage(), this.paginationPageSize);
            if (this.totalRowCount <= this.paginationPageSize) {
                this.currentPageSet.end = this.totalRowCount;
                if (this.totalRowCount < 1) {
                    this.currentPageSet.start = 0;
                }
                this.buttonDisabled.lastButton = true;
                this.buttonDisabled.nextButton = true;
            }
        }
    };
    /**
      @name excelExporterFormForPaymentByIncType
      @parm paymentSearchRequest
      */
    PaymentByIncentiveComponent.prototype.excelExporterFormForPaymentByIncType = function () {
        this.incentiveSearchRequest.showAll = true;
        this.incentiveSearchRequest.pageNumber = '1';
        // setting the max count of data based on any previous search service calls
        this.incentiveSearchRequest.totalResults = this.totalRowCount;
        this.excelConfigForPaymentByIncType(this.incentiveSearchRequest);
        // IPLUS-11093 Excel download feature not working in subsequent pages
        this.incentiveSearchRequest.showAll = false;
    };
    /**
    @name loadPaymentByIncType trigger on vin summary search.
    @param paymentincentiveDetails Search Request
    */
    PaymentByIncentiveComponent.prototype.excelConfigForPaymentByIncType = function (formDetails) {
        var _this = this;
        var excelDataForPaymentByIncType;
        var excelData;
        var excelHeader = [];
        var emptyHeader = [];
        var reportHeading = ["PAYMENT BY INCENTIVE TYPE", this.excelService.getCurrentDate()];
        var incentiveMonth = ['Incentive Month', formDetails.queryParams.incentiveMonth + ' ' +
                formDetails.queryParams.incentiveYear];
        excelHeader.push(emptyHeader);
        excelHeader.push(emptyHeader);
        excelHeader.push(emptyHeader);
        excelHeader.push(reportHeading);
        excelHeader.push(emptyHeader);
        excelHeader.push(incentiveMonth);
        excelHeader.push(emptyHeader);
        this.ispService.fetchPayByIncData(formDetails)
            .subscribe(function (data) {
            excelDataForPaymentByIncType = _this.setPaymentByIncentiveExcelResponse(data['result']['results']);
            _this.excelService.generateExcel(excelHeader, excelDataForPaymentByIncType, 'PaymentByIncentiveType', 'paymentByIncentiveType');
        });
    };
    PaymentByIncentiveComponent.prototype.setPaymentByIncentiveExcelResponse = function (rowData) {
        var excelList = new Array();
        rowData.forEach(function (element) {
            var excelResp = new _shared_dataModels_excelPaymentByIncentiveTypeResponse__WEBPACK_IMPORTED_MODULE_11__["ExcelResponsePaymentByIncentiveType"]();
            excelResp.setIncentiveTypeNo(element.incentiveTypeNo);
            excelResp.setOptionType(element.optionType);
            excelResp.setIncentiveTypeName(element.incentiveTypeName);
            excelResp.setCategory(element.category);
            excelResp.setSeries(element.series);
            excelResp.setIncentiveStartDate(element.incentiveStartDate);
            excelResp.setIncentiveEndDate(element.incentiveEndDate);
            excelResp.setAppliedAmt(element.appliedAmt);
            excelResp.setPaidAmt(element.paidAmt);
            excelResp.setPendingAmount(element.pendingAmount);
            excelResp.setchargebackAmount(element.chargebackAmount);
            excelResp.setDeniedAmount(element.deniedAmount);
            excelResp.setNetPaidAmt(element.netPaidAmt);
            excelList.push(excelResp);
        });
        return excelList;
    };
    /**
       @name clearFilters- triggers on clear filter icon clicked.
    */
    PaymentByIncentiveComponent.prototype.clearFilters = function () {
        var _this = this;
        setTimeout(function () {
            _this.api.setFilterModel(null);
        }, 100);
        // perform service call to reset the grid data with the criteria in the form currently
        this.submitForm();
    };
    /**
       @name onBtFirst- triggers on pagination toFirst icon clicked.
    */
    PaymentByIncentiveComponent.prototype.onBtFirst = function () {
        this.api.paginationGoToFirstPage();
    };
    /**
      @name onBtLast- triggers on pagination toLast icon clicked.
    */
    PaymentByIncentiveComponent.prototype.onBtLast = function () {
        this.api.paginationGoToLastPage();
        this.isBtnLastClicked = true;
    };
    /**
      @name onBtLast- triggers on pagination next icon clicked.
    */
    PaymentByIncentiveComponent.prototype.onBtNext = function () {
        this.api.paginationGoToNextPage();
    };
    /**
      @name onBtPrevious- triggers on pagination previous icon clicked.
    */
    PaymentByIncentiveComponent.prototype.onBtPrevious = function () {
        this.api.paginationGoToPreviousPage();
    };
    /**
      @name onCustomPageChange- triggers on pagination text field changed and focused out.
      @param fieldValue - requested page number.
    */
    PaymentByIncentiveComponent.prototype.onCustomPageChange = function (fieldValue) {
        this.pageInputValue = fieldValue;
        this.api.paginationGoToPage(this.pageInputValue - 1);
    };
    /**
    @name onSortChanged - on sort model changes.
    @param event - sort event parameters.
    */
    PaymentByIncentiveComponent.prototype.onSortChanged = function (event) {
        var sortModel = event.api.getSortModel();
        var sortPresent = sortModel && sortModel.length > 0;
        this.resetPageIndex();
        if (sortPresent) {
            this.incentiveSearchRequest.sortData = [];
            this.incentiveSearchRequest.sortData.push({ colName: sortModel[0].colId, order: sortModel[0].sort });
        }
        else {
            this.incentiveSearchRequest.sortData = [];
        }
        // reset routing buttons to disabled state
        this.incentiveBtnState = true;
    };
    /**
      @name onFilterChanged - on filter model changes.
      @param event - filter event parameters.
      */
    PaymentByIncentiveComponent.prototype.onFilterChanged = function (event) {
        var filterModel = event.api.getFilterModel();
        var filterPresent = filterModel && Object.keys(filterModel).length > 0;
        this.resetPageIndex();
        Object.keys(filterModel);
        if (filterPresent) {
            this.incentiveSearchRequest.filterData = [];
            for (var key in filterModel) {
                this.incentiveSearchRequest.filterData.push({ 'filterName': key, 'filterValue': filterModel[key]['filter'] });
            }
        }
        else {
            this.incentiveSearchRequest.filterData = [];
        }
        // reset routing buttons to disabled state
        this.incentiveBtnState = true;
    };
    /**
       @name resetPageIndex reset page index to 1.
       */
    PaymentByIncentiveComponent.prototype.resetPageIndex = function () {
        this.incentiveSearchRequest.pageNumber = '1';
    };
    /** Grid Methods - END */
    /**
     @name printGrid trigger the service to print grid table
     */
    PaymentByIncentiveComponent.prototype.printGrid = function () {
        var gridEle = document.getElementById('vinSummaryGrid');
        this.printService.printGrid(gridEle, this.gridOptions, this.api);
    };
    PaymentByIncentiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-by-incentive',
            template: __webpack_require__(/*! ./payment-by-incentive.component.html */ "./src/app/payment-by-incentive/payment-by-incentive.component.html"),
            styles: [__webpack_require__(/*! ./payment-by-incentive.component.scss */ "./src/app/payment-by-incentive/payment-by-incentive.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _isp_app_service__WEBPACK_IMPORTED_MODULE_4__["IspAppService"], _shared_services_isp_app_config_service__WEBPACK_IMPORTED_MODULE_5__["ISPAppConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _shared_grid_grid_common_service__WEBPACK_IMPORTED_MODULE_8__["GridCommonService"], _shared_services_print_data_grid_service__WEBPACK_IMPORTED_MODULE_12__["PrintDataGridService"], _shared_services_isp_excel_service__WEBPACK_IMPORTED_MODULE_10__["ExcelExportService"], _shared_message_handler_message_handler_service__WEBPACK_IMPORTED_MODULE_13__["MessageService"]])
    ], PaymentByIncentiveComponent);
    return PaymentByIncentiveComponent;
}());



/***/ }),

/***/ "./src/app/payment-by-incentive/payment-by-incentive.guard.ts":
/*!********************************************************************!*\
  !*** ./src/app/payment-by-incentive/payment-by-incentive.guard.ts ***!
  \********************************************************************/
/*! exports provided: PaymentByIncentiveGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentByIncentiveGuard", function() { return PaymentByIncentiveGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_user_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/user-info.service */ "./src/app/shared/services/user-info.service.ts");




var PaymentByIncentiveGuard = /** @class */ (function () {
    function PaymentByIncentiveGuard(router, userInfoService) {
        this.router = router;
        this.userInfoService = userInfoService;
    }
    PaymentByIncentiveGuard.prototype.canActivate = function (route, state) {
        return this.userInfoService.checkRole();
    };
    PaymentByIncentiveGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_user_info_service__WEBPACK_IMPORTED_MODULE_3__["UserInfoService"]])
    ], PaymentByIncentiveGuard);
    return PaymentByIncentiveGuard;
}());



/***/ }),

/***/ "./src/app/payment-by-payment/payment-by-payment.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/payment-by-payment/payment-by-payment.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar style=\"width: auto\">\r\n  <mat-toolbar-row>\r\n    <span><strong class=\"bold_text\">{{'title.Payments_By_Payment_Method' | translate}}</strong></span>\r\n    <span class=\"space-away\"></span>\r\n    <mat-icon matTooltip=\"Print\" class=\"ip-mat-icon\" (click)=\"printGrid()\">local_printshop</mat-icon>\r\n    <span style=\"padding-left: 20px\"></span>\r\n    <i class=\"fa fa-file-excel-o fa-lg\" matTooltip=\"Export to Excel\" (click)=\"excelExporterFormForPaymentByMethod()\"\r\n      style=\"font-size: 16px; cursor: Pointer;\"></i>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<div class=\"row mt-2 ml-1 search-form\">\r\n  <div class=\"col-lg-5 col-md-6 col-sm-6 col-xs-6\">\r\n    <label><strong>{{'labels.Search_by_Paid_Date' | translate}}</strong></label>\r\n    <mat-radio-group aria-labelledby=\"radio-group-label\" name=\"vinSummaryGroup\" [(ngModel)]=\"searchOption\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <mat-radio-button id=\"calMonthBtn\" style='display: block' value=\"1\"\r\n            (change)=\"disableInput($event.value); dateReset()\">\r\n            <strong>{{'labels.Calendar_Month' | translate}}</strong>\r\n          </mat-radio-button>\r\n        </div>\r\n        <div class=\"col-md-4 pack\">\r\n          <mat-select id=\"monthList\" placeholder=\"January\" [(ngModel)]=\"selectedMonth\" [disabled]='calDropEnable'\r\n            (ngModelChange)=\"onDateChange()\">\r\n            <mat-option *ngFor=\"let month of monthList\" [value]='month'>{{month}}</mat-option>\r\n          </mat-select>\r\n        </div>\r\n        <div class=\"col-md-4 pack\">\r\n          <mat-select id=\"yearList\" placeholder=\"2019\" [(ngModel)]=\"selectedYear\" [disabled]='calDropEnable'\r\n            (ngModelChange)=\"onDateChange(); onMonthChange()\">\r\n            <mat-option *ngFor=\"let year of yearList\" [value]='year' (click)=\"resetMonths()\">{{year}}</mat-option>\r\n          </mat-select>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <mat-radio-button style='display: block;margin-top: 10px;' value=\"2\" (change)=\"disableInput($event.value)\">\r\n            <strong>{{'labels.Custom' | translate}}</strong>\r\n          </mat-radio-button>\r\n        </div>\r\n        <div class=\"col-md-4 pack\">\r\n          <input matInput [(ngModel)]=\"startDate\" [max]=\"maxDate\" [matDatepicker]=\"startDatePicker\"\r\n            placeholder=\"Choose a date\" autocomplete=\"off\" [disabled]=\"calenderEnable\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"startDatePicker\"></mat-datepicker-toggle>\r\n          <mat-datepicker color=\"accent\" #startDatePicker></mat-datepicker>\r\n        </div>\r\n        <div class=\"col-md-4 pack\">\r\n          <input matInput [(ngModel)]=\"endDate\" [max]=\"maxDate\" [matDatepicker]=\"endDatePicker\"\r\n            placeholder=\"Choose a date\" autocomplete=\"off\" [disabled]=\"calenderEnable\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"endDatePicker\"></mat-datepicker-toggle>\r\n          <mat-datepicker color=\"accent\" #endDatePicker></mat-datepicker>\r\n        </div>\r\n        <div class=\"col-md-8 offset-4\">\r\n          <ng-container *ngIf=\"startDate > endDate  && !calenderEnable \">\r\n            <mat-error> {{'errormsg.Date_Error' | translate}}</mat-error>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n    </mat-radio-group>\r\n  </div>\r\n  <div class=\"col-lg-5 col-md-6 col-sm-6 col-xs-6\">\r\n    <label><strong>{{'labels.Search_by' | translate}}</strong></label>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-5 mt-3\">\r\n        <mat-radio-group aria-labelledby=\"radio-group-label\" [(ngModel)]=\"searchOption\">\r\n          <mat-radio-button id=\"payrefRadioBtn\" style='display: block' value=\"3\" (change)=\"enableInput($event.value)\">\r\n            <strong>{{'labels.Payment_Reference_No' | translate}}</strong>\r\n          </mat-radio-button>\r\n        </mat-radio-group>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <form [formGroup]=\"payByPayForm\">\r\n          <mat-form-field appearance=\"outline\">\r\n            <mat-label>{{'labels.Payment_Reference_No' | translate}}</mat-label>\r\n            <input matInput id=\"paymentRef\" formControlName=\"paymentRef\" autocomplete=\"off\" (input)=\"removeSpace()\">\r\n            <mat-error *ngIf=\"payByPayForm.controls['paymentRef'].errors?.required\">\r\n              {{'errormsg.Mandatory'|translate}}\r\n            </mat-error>\r\n            <mat-error\r\n              *ngIf=\"payByPayForm.controls['paymentRef'].errors?.minlength && !payByPayForm.controls['paymentRef'].errors?.pattern\">\r\n              {{'errormsg.Complete_PayRefNo' | translate}}\r\n            </mat-error>\r\n            <mat-error *ngIf=\"payByPayForm.controls['paymentRef'].errors?.pattern\">\r\n              {{'errormsg.Invalid_PayRefNo' | translate}}\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-2 col-sm-12 mt-lg-5 text-right\">\r\n      <button class=\"iplus_Btn_Primary mr-2\" mat-raised-button matTooltip=\"Search records\" (click)=\"searchRecords()\">\r\n        {{'button.Search'| translate}}\r\n      </button>\r\n      <button class='resetBtn' mat-raised-button matTooltip=\"Reset all data\" (click)=\"resetForm()\">\r\n        {{'button.Reset'| translate}}\r\n      </button>\r\n  </div>\r\n</div>\r\n\r\n<mat-toolbar class=\"buttons-panel\">\r\n  <mat-toolbar-row>\r\n    <button id=\"paymentDetailsBtn\" class=\"iplus_Btn_Primary m-r\" mat-raised-button [disabled]=\"paymentBtnState\"\r\n      (click)=\"routePaymentDetails()\">{{'button.Payment_Details'| translate}}</button>\r\n    <span class=\"space-away\"></span>\r\n    <button mat-raised-button (click)=\"submitForm()\" class=\"mr-2\">\r\n      <span class=\"d-none d-md-inline\">{{'button.Refresh_Data'|translate}}</span>\r\n      <mat-icon class=\"ip-mat-icon m-l-xs\">cached</mat-icon>\r\n    </button>\r\n    <button mat-raised-button (click)=\"clearFilters()\">\r\n      <span class=\"d-none d-md-inline\">{{'button.Clear_Filter'|translate}}</span>\r\n      <mat-icon class=\"ip-mat-icon m-l-xs\">replay</mat-icon>\r\n    </button>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<mat-divider></mat-divider>\r\n\r\n<div class=\"col-sm-12\" style=\"padding: 0px;\" id=\"vinGridcontainer\" class=\"gridcontainer\">\r\n\r\n  <ag-grid-angular #agGrid id=\"vinSummaryGrid\" style=\"width: 100%; height: 448px;\" class=\"ag-theme-material\"\r\n    [gridOptions]=\"gridOptions\" [columnDefs]=\"paymentBPColumnDefs\" [rowData]=\"paymentBPRowData\"\r\n    [rowModelType]=\"rowModelType\" [maxBlocksInCache]=\"200\" [cacheBlockSize]=\"200\" [pagination]=\"true\"\r\n    [paginationPageSize]=\"paginationPageSize\" [suppressPaginationPanel]=\"true\"\r\n    (paginationChanged)=\"onPaginationChanged($event)\" [suppressRowClickSelection]=\"true\" [animateRows]=\"true\"\r\n    (gridReady)=\"onReady($event)\" [overlayNoRowsTemplate]=\"overlayNoRowsTemplate\" (rowSelected)=\"paymentButtonToggle()\"\r\n    (sortChanged)=\"onSortChanged($event)\" (filterChanged)=\"onFilterChanged($event)\">\r\n  </ag-grid-angular>\r\n\r\n  <br>\r\n\r\n  <mat-toolbar-row>\r\n    <div class=\"ag-paging-panel ag-font-style\" style=\"margin-bottom:5px\">\r\n      <span class=\"ag-paging-page-summary-panel\">\r\n        <button class=\"ag-paging-button\" ref=\"btFirst\"\r\n          [ngStyle]=\"{'opacity' : buttonDisabled.firstButton ? '0.65' : '1'}\"\r\n          [disabled]=\"this.buttonDisabled.firstButton\" (click)=\"onBtFirst()\">\r\n          <div class=\"pagination-previous-icon\">\r\n            <div class=\"pagination-previous-bar\"></div>\r\n          </div>\r\n        </button>\r\n        <button class=\"ag-paging-button\" ref=\"btPrevious\"\r\n          [ngStyle]=\"{'opacity' : buttonDisabled.previousButton ? '0.65' : '1'}\"\r\n          [disabled]=\"this.buttonDisabled.previousButton\" (click)=\"onBtPrevious()\">\r\n          <div class=\"pagination-previous-icon\"></div>\r\n        </button>\r\n        <input type=\"number\" class=\"pagination-input\" [(ngModel)]=\"pageInputValue\"\r\n          (keyup.enter)=\"onCustomPageChange(pageInputValue)\" (blur)=\"onCustomPageChange(pageInputValue)\"\r\n          autocomplete=\"off\" /> {{'labels.of' | translate}}\r\n        <span ref=\"lbTotal\">{{totalPageCount}}</span>\r\n        <button class=\"ag-paging-button\" ref=\"btNext\" [ngStyle]=\"{'opacity' : buttonDisabled.nextButton ? '0.65' : '1'}\"\r\n          [disabled]=\"this.buttonDisabled.nextButton\" (click)=\"onBtNext()\">\r\n          <div class='pagination-next-icon'></div>\r\n        </button>\r\n        <button class=\"ag-paging-button\" ref=\"btLast\" [ngStyle]=\"{'opacity' : buttonDisabled.lastButton ? '0.65' : '1'}\"\r\n          [disabled]=\"buttonDisabled.lastButton\" (click)=\"onBtLast()\">\r\n          <div class='pagination-next-icon'>\r\n            <div class='pagination-last-bar'></div>\r\n          </div>\r\n        </button>\r\n      </span>\r\n    </div>\r\n\r\n    <span _ngcontent-ljs-c8=\"\" class=\"space-away\"></span>\r\n\r\n    <div style=\"margin:8px 9px 0 0;\">\r\n      <span ref=\"eSummaryPanel\" class=\"ag-paging-row-summary-panel\">\r\n        <span ref=\"lbFirstRowOnPage\">{{currentPageSet.start}}</span> {{'labels.to' | translate}}\r\n        <span ref=\"lbLastRowOnPage\">{{currentPageSet.end}}</span> {{'labels.of' | translate}}\r\n        <span ref=\"lbRecordCount\">{{totalRowCount}}</span>\r\n        <span style=\"margin-left:3px;\">{{'labels.items' | translate}}</span>\r\n      </span>\r\n    </div>\r\n  </mat-toolbar-row>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/payment-by-payment/payment-by-payment.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/payment-by-payment/payment-by-payment.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".referenceTextBox {\n  height: 32px;\n  margin-right: 10px; }\n\n.vinTextBox {\n  width: 250px;\n  padding-left: 2px; }\n\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n\n.column-flex {\n  display: flex;\n  flex-direction: column; }\n\n.row-flex {\n  display: flex;\n  flex-direction: row; }\n\n.block-display {\n  display: block; }\n\n.bold_text {\n  font-size: 18px; }\n\nb {\n  font-size: 13px; }\n\n.pack {\n  margin-left: -7px; }\n\n.buttons-panel {\n  margin: 10px;\n  width: auto; }\n\n::ng-deep ag-grid-angular .ag-header-row:first-child .ag-header-cell {\n  background-color: #757575 !important;\n  text-align: center !important;\n  color: #fff;\n  font-weight: 700; }\n\n::ng-deep ag-grid-angular .ag-header-cell {\n  font-weight: 900 !important;\n  font-size: 15px !important;\n  background-color: #ffffff; }\n\n::ng-deep ag-grid-angular .ag-row-odd {\n  background-color: #f6f6f6 !important; }\n\n::ng-deep ag-grid-angular .ag-row-even {\n  background: white !important; }\n\n::ng-deep ag-grid-angular .ag-horizontal-left-spacer {\n  visibility: hidden; }\n\n::ng-deep ag-grid-angular .ag-header-cell-label .ag-header-cell-text {\n  margin-top: -8px; }\n\n@media print {\n  @page {\n    size: A4 portrait; }\n  ::ng-deep body {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    margin: auto 10px;\n    zoom: 0%; } }\n\n.search-form {\n  padding-bottom: 15px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC1ieS1wYXltZW50L0M6XFxGU0RcXHBvbGljeS1tYW5hZ2VtZW50L3NyY1xcYXBwXFxwYXltZW50LWJ5LXBheW1lbnRcXHBheW1lbnQtYnktcGF5bWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2I7RUFFSSxvQ0FBb0M7RUFDcEMsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFMcEI7RUFRSSwyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLHlCQUF5QixFQUFBOztBQVY3QjtFQWNJLG9DQUFvQyxFQUFBOztBQWR4QztFQWlCSSw0QkFBNEIsRUFBQTs7QUFqQmhDO0VBb0JJLGtCQUFrQixFQUFBOztBQXBCdEI7RUF1QkksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0U7SUFDRSxpQkFBaUIsRUFBQTtFQUduQjtJQUNFLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFFBQVEsRUFBQSxFQUNUOztBQUdIO0VBQ0UsK0JBQStCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYXltZW50LWJ5LXBheW1lbnQvcGF5bWVudC1ieS1wYXltZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZmVyZW5jZVRleHRCb3gge1xyXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICNjOGM4Yzg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4udmluVGV4dEJveCB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMnB4O1xyXG59XHJcbi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmNvbHVtbi1mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5yb3ctZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uYmxvY2stZGlzcGxheSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmJvbGRfdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbmIge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4ucGFjayB7XHJcbiAgbWFyZ2luLWxlZnQ6IC03cHg7XHJcbn1cclxuXHJcbi5idXR0b25zLXBhbmVsIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbjo6bmctZGVlcCBhZy1ncmlkLWFuZ3VsYXIge1xyXG4gIC5hZy1oZWFkZXItcm93OmZpcnN0LWNoaWxkIC5hZy1oZWFkZXItY2VsbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzU3NTc1ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbiAgLmFnLWhlYWRlci1jZWxsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIC8vYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjRkZGRkZGLCAjRDlEOUQ5IDUwJSwgI0ZGRkZGRik7XHJcbiAgfVxyXG4gIC5hZy1yb3ctb2RkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmFnLXJvdy1ldmVuIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5hZy1ob3Jpem9udGFsLWxlZnQtc3BhY2VyIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbiAgLmFnLWhlYWRlci1jZWxsLWxhYmVsIC5hZy1oZWFkZXItY2VsbC10ZXh0IHtcclxuICAgIG1hcmdpbi10b3A6IC04cHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBwcmludCB7XHJcbiAgQHBhZ2Uge1xyXG4gICAgc2l6ZTogQTQgcG9ydHJhaXQ7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgYm9keSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgbWFyZ2luOiBhdXRvIDEwcHg7XHJcbiAgICB6b29tOiAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtZm9ybSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/payment-by-payment/payment-by-payment.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/payment-by-payment/payment-by-payment.component.ts ***!
  \********************************************************************/
/*! exports provided: PaymentByPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentByPaymentComponent", function() { return PaymentByPaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_grid_filter_custom_text_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/grid/filter/custom-text-filter.component */ "./src/app/shared/grid/filter/custom-text-filter.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _isp_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isp-app.service */ "./src/app/isp-app.service.ts");
/* harmony import */ var _shared_services_isp_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/isp-app-config.service */ "./src/app/shared/services/isp-app-config.service.ts");
/* harmony import */ var _shared_dataModels_paymentsSearchRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/dataModels/paymentsSearchRequest */ "./src/app/shared/dataModels/paymentsSearchRequest.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_grid_grid_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/grid/grid-common.service */ "./src/app/shared/grid/grid-common.service.ts");
/* harmony import */ var _shared_grid_filter_custom_drop_down_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/grid/filter/custom-drop-down-filter.component */ "./src/app/shared/grid/filter/custom-drop-down-filter.component.ts");
/* harmony import */ var _shared_grid_filter_custom_date_filter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/grid/filter/custom-date-filter.component */ "./src/app/shared/grid/filter/custom-date-filter.component.ts");
/* harmony import */ var _shared_grid_page_navigate_cell_renderer_page_navigate_cell_renderer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/grid/page-navigate-cell-renderer/page-navigate-cell-renderer.component */ "./src/app/shared/grid/page-navigate-cell-renderer/page-navigate-cell-renderer.component.ts");
/* harmony import */ var _shared_services_print_data_grid_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/services/print-data-grid.service */ "./src/app/shared/services/print-data-grid.service.ts");
/* harmony import */ var _shared_services_isp_excel_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/services/isp-excel-service */ "./src/app/shared/services/isp-excel-service.ts");
/* harmony import */ var _shared_dataModels_excelPaymentByMethodResponse__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/dataModels/excelPaymentByMethodResponse */ "./src/app/shared/dataModels/excelPaymentByMethodResponse.ts");
/* harmony import */ var _shared_message_handler_message_handler_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/message-handler/message-handler.service */ "./src/app/shared/message-handler/message-handler.service.ts");
/* harmony import */ var _shared_grid_replace_zero_with_empty_cell_renderer_replace_zero_with_empty_cell_renderer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/grid/replace-zero-with-empty-cell-renderer/replace-zero-with-empty-cell-renderer.component */ "./src/app/shared/grid/replace-zero-with-empty-cell-renderer/replace-zero-with-empty-cell-renderer.component.ts");

















var PaymentByPaymentComponent = /** @class */ (function () {
    function PaymentByPaymentComponent(fb, ispService, printService, ispAppConfigService, router, gridCommonService, excelService, messageService) {
        this.fb = fb;
        this.ispService = ispService;
        this.printService = printService;
        this.ispAppConfigService = ispAppConfigService;
        this.router = router;
        this.gridCommonService = gridCommonService;
        this.excelService = excelService;
        this.messageService = messageService;
        // stores the start and end date from the custom date fields
        this.maxDate = new Date();
        this.endDate = new Date();
        this.date = new Date();
        this.startDate = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth(), 1);
        this.calenderEnable = true;
        this.calDropEnable = false;
        // toggles the state of the Payment Status Button
        this.paymentBtnState = true;
        this.searchOption = '1';
        this.pageIndex = 1;
        this.inputValue = 1;
        this.pageInputValue = 1;
        this.totalPageCount = 1;
        this.totalRowCount = 0;
        this.isRegulatoryUser = false;
        this.currentPageSet = {
            start: 1,
            end: this.paginationPageSize
        };
        this.buttonDisabled = {
            firstButton: true,
            previousButton: true,
            nextButton: false,
            lastButton: false
        };
        this.isBtnLastClicked = false;
        /** Grid Properties - END */
        this.currentPageRoutePath = 'paymentByPayment/paymentDetails/';
        this.months = ['January', 'February', 'March', "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.yearList = [];
        this.headerObj = this.ispAppConfigService.getHeaderDetails();
        // ready the request model
        this.paymentSearchRequest = new _shared_dataModels_paymentsSearchRequest__WEBPACK_IMPORTED_MODULE_6__["PaymentsSearchRequest"]();
        /** Grid Properties initialize - START */
        this.overlayNoRowsTemplate = '<span class="grid-noOverlay"> There are no results for the entered criterion. Please refine your search parameter </span>';
        this.frameworkComponents = {
            'customTextFilter': _shared_grid_filter_custom_text_filter_component__WEBPACK_IMPORTED_MODULE_2__["CustomTextFilterComponent"],
            'customDropDownFilter': _shared_grid_filter_custom_drop_down_filter_component__WEBPACK_IMPORTED_MODULE_9__["CustomDropDownFilterComponent"],
            'customDateFilter': _shared_grid_filter_custom_date_filter_component__WEBPACK_IMPORTED_MODULE_10__["CustomDateFilterComponent"],
            'pageNavigateCellRendererComponent': _shared_grid_page_navigate_cell_renderer_page_navigate_cell_renderer_component__WEBPACK_IMPORTED_MODULE_11__["PageNavigateCellRendererComponent"],
            'replaceZeroWithEmptyCellRendererComponent': _shared_grid_replace_zero_with_empty_cell_renderer_replace_zero_with_empty_cell_renderer_component__WEBPACK_IMPORTED_MODULE_16__["ReplaceZeroWithEmptyCellRendererComponent"]
        };
        this.paginationPageSize = 200;
        this.rowModelType = 'infinite';
        /** Grid Properties initialize - END */
    }
    PaymentByPaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gridSetUp();
        this.createForm();
        this.setDefaultDate();
        // subscribes the pre-selected search request and preloads the page if required
        if (this.ispService.paymentSelectedData !== null) {
            this.preLoadPaybyPayPage(this.ispService.paymentSelectedData);
            setTimeout(function () {
                _this.submitForm();
            }, 500);
        }
        else {
            // will work when there's nothing to preLoad, i.e. first time payment by Payment component is loaded. Will fetch the data with the default values in the form
            setTimeout(function () {
                _this.submitForm();
            }, 500);
        }
    };
    PaymentByPaymentComponent.prototype.preLoadPaybyPayPage = function (data) {
        // set data to search type radio buttons
        if (data.searchOption === '1') {
            this.searchOption = '1';
            this.calDropEnable = false;
        }
        else if (data.searchOption === '2') {
            this.searchOption = '2';
            this.calenderEnable = false;
            this.calDropEnable = true;
        }
        else if (data.searchOption === '3') {
            this.searchOption = '3';
            this.payByPayForm.controls['paymentRef'].reset({ value: data.queryParams.paymentReferenceNo, disabled: false });
            this.calDropEnable = true;
        }
        this.startDate = new Date(data.queryParams.startDate);
        this.endDate = new Date(data.queryParams.endDate);
        this.selectedMonth = data.queryParams.month;
        this.selectedYear = data.queryParams.year;
    };
    // removes all the space from the input field on focus out
    PaymentByPaymentComponent.prototype.removeSpace = function () {
        this.payByPayForm.controls['paymentRef'].reset({ value: this.payByPayForm.controls['paymentRef'].value.replace(/ /g, ''), disabled: false });
    };
    PaymentByPaymentComponent.prototype.setDefaultDate = function () {
        var date = new Date();
        this.selectedMonth = this.months[date.getMonth()];
        this.selectedYear = date.getFullYear();
        this.resetMonths();
        for (var index = 0; index < 10; index++) {
            this.yearList.push(date.getFullYear() - index);
        }
    };
    PaymentByPaymentComponent.prototype.onDateChange = function () {
        this.startDate = new Date(this.selectedYear, this.months.indexOf(this.selectedMonth, 0));
        this.endDate = new Date(this.selectedYear, this.months.indexOf(this.selectedMonth, 0) + 1, 0);
        this.resetMonths();
    };
    PaymentByPaymentComponent.prototype.onMonthChange = function () {
        if (this.selectedYear == this.date.getFullYear() && this.selectedMonth !== this.monthList[this.months.indexOf(this.selectedMonth, 0)]) {
            this.startDate = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth(), 1);
            this.selectedMonth = this.months[this.date.getMonth()];
        }
    };
    PaymentByPaymentComponent.prototype.resetMonths = function () {
        if (this.selectedMonth == this.months[this.date.getMonth()] && this.selectedYear == this.date.getFullYear()) {
            this.endDate = new Date();
        }
        this.monthList = this.selectedYear == this.date.getFullYear() ? this.months.slice(0, 1 + this.date.getMonth()) : this.months;
    };
    PaymentByPaymentComponent.prototype.dateReset = function () {
        this.selectedMonth = this.months[this.date.getMonth()];
        this.selectedYear = this.date.getFullYear();
        this.startDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
        this.endDate = new Date();
    };
    PaymentByPaymentComponent.prototype.createForm = function () {
        this.payByPayForm = this.fb.group({
            paymentRef: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9 ]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10)])]
        });
    };
    // toggles the datepicker and date dropdown fields, also sets the label for VIN/Serial input field
    PaymentByPaymentComponent.prototype.enableInput = function (value) {
        /* setting the value from event instead of using ngModel because ngModel is causing the value binding to be delayed, using delay resolves the issue.
         might optimize later. mb */
        this.searchOption = value;
        this.createForm();
        this.payByPayForm.controls['paymentRef'].reset({ value: '', disabled: false });
        this.calenderEnable = true;
        this.calDropEnable = true;
    };
    // toggles the datepicker and date dropdown fields
    PaymentByPaymentComponent.prototype.disableInput = function (value) {
        /* setting the value from event instead of using ngModel because ngModel is causing the value binding to be delayed, using delay resolves the issue.
         might optimize later. mb */
        this.searchOption = value;
        this.payByPayForm.controls['paymentRef'].reset({ value: '', disabled: true });
        switch (this.searchOption) {
            // 1 refers to the Calender month radio button
            case '1':
                this.calenderEnable = true;
                this.calDropEnable = false;
                break;
            // 2 refers to the Calender month radio button
            case '2':
                this.calenderEnable = false;
                this.calDropEnable = true;
                break;
        }
    };
    /* formulates the request object with all relevant data. */
    PaymentByPaymentComponent.prototype.setSearchRequest = function () {
        // some default properties in the request object are set in the constructor itself
        this.paymentSearchRequest = new _shared_dataModels_paymentsSearchRequest__WEBPACK_IMPORTED_MODULE_6__["PaymentsSearchRequest"]();
        this.paymentSearchRequest.queryParams.dealerCode = this.headerObj.dealerCode;
        this.paymentSearchRequest.excelUrl = {
            url: "excelExporter/searchPaymentsByMethod"
        };
        this.paymentSearchRequest.queryParams.month = this.selectedMonth;
        this.paymentSearchRequest.queryParams.year = this.selectedYear;
        this.paymentSearchRequest.queryParams.startDate = this.paymentSearchRequest.queryParams.replaceNonAscii(this.startDate.toLocaleDateString());
        this.paymentSearchRequest.queryParams.endDate = this.paymentSearchRequest.queryParams.replaceNonAscii(this.endDate.toLocaleDateString());
        switch (this.searchOption) {
            case '1':
                this.paymentSearchRequest.taskToDo = 'searchByDateRange';
                break;
            case '2':
                this.paymentSearchRequest.taskToDo = 'searchByDateRange';
                break;
            case '3':
                this.paymentSearchRequest.taskToDo = 'searchByReferenceNo';
                this.paymentSearchRequest.queryParams.paymentReferenceNo = this.payByPayForm.controls['paymentRef'].value;
                break;
        }
        this.paymentSearchRequest.searchOption = this.searchOption;
        // setting the sorting parameters, if any, in the request object
        var sortModel = this.api.getSortModel();
        if (sortModel && sortModel.length > 0) {
            this.paymentSearchRequest.sortData = [];
            this.paymentSearchRequest.sortData.push({ colName: sortModel[0].colId, order: sortModel[0].sort });
        }
        // setting the filtering parameters, if any, in the request object
        var filterModel = this.api.getFilterModel();
        Object.keys(filterModel);
        if (filterModel && Object.keys(filterModel).length > 0) {
            this.paymentSearchRequest.filterData = [];
            for (var key in filterModel) {
                this.paymentSearchRequest.filterData.push({ 'filterName': key, 'filterValue': filterModel[key]['filter'] });
            }
        }
    };
    PaymentByPaymentComponent.prototype.searchRecords = function () {
        // reset all parameters
        // filter and sorting retain
        this.readyParam.api.setDatasource({});
        this.api.setFilterModel(null);
        this.api.setSortModel(null);
        this.submitForm();
    };
    PaymentByPaymentComponent.prototype.submitForm = function () {
        this.setSearchRequest();
        this.loadGrid(this.paymentSearchRequest);
    };
    // resets all the form fields and does a service call
    PaymentByPaymentComponent.prototype.resetForm = function () {
        this.createForm();
        this.searchOption = '1';
        // enables the the dropdowns for Calender month dropdowns
        this.calDropEnable = false;
        this.calenderEnable = true;
        // reset date
        this.startDate = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth(), 1);
        this.setDefaultDate();
        // filter and sorting retain
        this.readyParam.api.setDatasource({});
        this.api.setFilterModel(null);
        this.api.setSortModel(null);
        this.submitForm();
    };
    // toggles the state of Payment buttons
    PaymentByPaymentComponent.prototype.paymentButtonToggle = function () {
        var temp = this.api.getSelectedRows()[0];
        // this.paymentBtnState = temp == null ? true : false;
        if (temp == null) {
            this.paymentBtnState = true;
        }
        else {
            this.paymentBtnState = false;
        }
    };
    PaymentByPaymentComponent.prototype.routePaymentDetails = function () {
        var temp = this.api.getSelectedRows()[0];
        if (temp) {
            // stores the identifier of the selceted record
            this.ispService.setselectedPayRefNo(temp.paymentReferenceNo);
            // stores the search request, later this is used to prepopulate the page
            this.ispService.setPaymentSelectedData(this.paymentSearchRequest);
            this.ispService.setFilterSortModel(this.api.getFilterModel(), this.api.getSortModel());
            var url = temp.paymentReferenceNo;
            this.router.navigate([this.currentPageRoutePath + url]);
        }
    };
    /** Grid Methods - START */
    /**
      @name onReady vin summary grid configurations and column defintions.
    */
    PaymentByPaymentComponent.prototype.gridSetUp = function () {
        var _this = this;
        this.gridOptions = {
            context: {
                componentParent: this
            },
            onGridReady: function (params) {
                _this.api = params.api;
                //this.api.sizeColumnsToFit();
                _this.api.refreshCells();
                _this.api.setFilterModel(_this.ispService.selectedFilterModel);
                _this.api.setSortModel(_this.ispService.selectedSortModel);
            },
            enableColResize: false,
            enableFilter: true,
            enableServerSideSorting: true,
            sortingOrder: ["asc", "desc"],
            pagination: true,
            headerHeight: 40,
            floatingFiltersHeight: 40,
            rowHeight: 35,
            rowSelection: 'single',
            filter: true,
            frameworkComponents: this.frameworkComponents,
            floatingFilter: true,
            suppressContextMenu: false,
            suppressMenuMainPanel: false,
            suppressMenuColumnPanel: false,
            suppressTabbing: true,
            suppressPaginationPanel: true,
            suppressMovableColumns: true,
            suppressMenu: true,
            suppressDragLeaveHidesColumns: true,
            suppressColumnVirtualisation: true,
            enableCellTextSelection: true
        };
        this.paymentBPColumnDefs = [
            {
                headerCheckboxSelection: false,
                checkboxSelection: true,
                suppressFilter: true,
                suppressSorting: true,
                width: 50,
            },
            {
                headerName: 'Payment Reference No.',
                field: 'paymentReferenceNo',
                width: 200,
                suppressMenu: true,
                cellRenderer: "pageNavigateCellRendererComponent",
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Payment Method',
                field: 'paymentMethod',
                width: 200,
                suppressMenu: true,
                floatingFilterComponent: 'customDropDownFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true },
                cellRenderer: function (params) {
                    // sets the previously selected node while preLoading the data table
                    if (_this.ispService.selectedPayRefNo && params.node.data && params.node.data.paymentReferenceNo === _this.ispService.selectedPayRefNo) {
                        params.node.setSelected(true);
                    }
                    return params.value;
                }
            },
            {
                headerName: 'Paid Date',
                field: 'paidDate',
                width: 200,
                suppressMenu: true,
                floatingFilterComponent: 'customDateFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Total Paid Amount',
                field: 'totalPaidAmt',
                width: 200,
                suppressMenu: true,
                cellRenderer: "replaceZeroWithEmptyCellRendererComponent",
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            }
        ];
    };
    /**
      @name onReady trigger on vin summary grid ready in DOM.
      @param params - event
    */
    PaymentByPaymentComponent.prototype.onReady = function (params) {
        this.api = params.api;
        this.readyParam = params;
        setTimeout(function () {
            // this.api.sizeColumnsToFit();
        }, 100);
    };
    /**
      @name loadGrid trigger on vin summary search.
      @param formDetails Search Request
    */
    PaymentByPaymentComponent.prototype.loadGrid = function (formDetails) {
        var _this = this;
        var rowData, rowcount, totalRows;
        var dataSource = {
            rowCount: totalRows,
            getRows: function (params) {
                _this.paymentBPRowData = [];
                _this.ispService.fetchPayByPayData(formDetails)
                    .subscribe(function (data) {
                    if (data.responseMessage === '0' && data.result.results) {
                        rowcount = data.result.totalResults;
                        rowData = data['result']['results'];
                    }
                    else {
                        _this.messageService.showMessage(data.error.errMessage, 'error');
                    }
                    _this.totalRowCount = rowcount;
                    totalRows = _this.totalRowCount;
                    _this.totalPageCount = _this.gridCommonService.calculateTotalPages(rowcount, _this.paginationPageSize);
                    _this.paymentBPRowData = rowData;
                    if (_this.paymentBPRowData && _this.paymentBPRowData.length) {
                        _this.api.hideOverlay();
                    }
                    else {
                        _this.api.showNoRowsOverlay();
                    }
                    setTimeout(function () {
                        var rowsThisPage = rowData;
                        var lastRow = totalRows;
                        params.successCallback(rowsThisPage, lastRow);
                    }, 500);
                }, function (error) {
                    _this.paymentBPRowData = [];
                    _this.api.showNoRowsOverlay();
                    _this.totalPageCount = 0;
                    _this.totalRowCount = 0;
                    _this.buttonDisabled = {
                        firstButton: true,
                        previousButton: true,
                        nextButton: true,
                        lastButton: true
                    };
                });
            }
        };
        this.readyParam.api.setDatasource(dataSource);
        // on load of table, no data is selected, thus Payment details button state is reverted to disabled
        this.paymentBtnState = true;
    };
    /**
    @name onPaginationChanged trigger on pagination changes.
    */
    PaymentByPaymentComponent.prototype.onPaginationChanged = function (params) {
        if (this.api) {
            this.buttonDisabled = {
                firstButton: false,
                previousButton: false,
                nextButton: false,
                lastButton: false
            };
            if (this.api.paginationGetCurrentPage() + 1 === 1) {
                this.pageInputValue = this.api.paginationGetCurrentPage() + 1;
                this.buttonDisabled.firstButton = true;
                this.buttonDisabled.previousButton = true;
                // Disable first and previous buttons
            }
            else {
                this.pageInputValue = this.api.paginationGetCurrentPage() + 1;
                this.buttonDisabled.firstButton = false;
                this.buttonDisabled.previousButton = false;
                // enable first and previous buttons
                // check if the page number ast page
                if (this.pageInputValue === this.totalPageCount) {
                    this.buttonDisabled.lastButton = true;
                    this.buttonDisabled.nextButton = true;
                }
                this.paymentSearchRequest.pageNumber = (this.api.paginationGetCurrentPage() + 1);
            }
            this.currentPageSet = this.gridCommonService.calculateCurrentPageSetValues(this.api.paginationGetCurrentPage(), this.paginationPageSize);
            if (this.totalRowCount <= this.paginationPageSize) {
                this.currentPageSet.end = this.totalRowCount;
                if (this.totalRowCount < 1) {
                    this.currentPageSet.start = 0;
                }
                this.buttonDisabled.lastButton = true;
                this.buttonDisabled.nextButton = true;
            }
        }
    };
    /**
    @name excelExporterFormForPaymentByMethod
    @parm paymentSearchRequest
    */
    PaymentByPaymentComponent.prototype.excelExporterFormForPaymentByMethod = function () {
        this.paymentSearchRequest.showAll = true;
        this.paymentSearchRequest.pageNumber = 1;
        // setting the max count of data based on any previous search service calls
        this.paymentSearchRequest.totalResults = this.totalRowCount;
        this.excelConfigForPaymentByMethod(this.paymentSearchRequest);
        // IPLUS-11093 Excel download feature not working in subsequent pages
        this.paymentSearchRequest.showAll = false;
    };
    /**
    @name loadPaymentGrid trigger on vin summary search.
    @param paymentDetails Search Request
    */
    PaymentByPaymentComponent.prototype.excelConfigForPaymentByMethod = function (formDetails) {
        var _this = this;
        var excelDataForPaymentByMethod;
        var excelData;
        var excelHeader = [];
        var emptyHeader = [];
        var reportHeading = ["PAYMENT BY PAYMENT METHOD", this.excelService.getCurrentDate()];
        var fromDate = ['From Paid Date', formDetails.queryParams.startDate];
        var toDate = ['To Paid Date', formDetails.queryParams.endDate];
        excelHeader.push(emptyHeader);
        excelHeader.push(emptyHeader);
        excelHeader.push(emptyHeader);
        excelHeader.push(reportHeading);
        excelHeader.push(fromDate);
        excelHeader.push(toDate);
        excelHeader.push(emptyHeader);
        this.ispService.fetchPayByPayData(formDetails)
            .subscribe(function (data) {
            excelDataForPaymentByMethod = _this.setPaymentByPaymentExcelResponse(data['result']['results']);
            _this.excelService.generateExcel(excelHeader, excelDataForPaymentByMethod, 'PaymentByPaymentMethod', 'paymentByMethod');
        });
    };
    PaymentByPaymentComponent.prototype.getFormattedDate = function (input) {
        var todayTime = new Date(input);
        var day = todayTime.getDate() < 10 ? "0" + todayTime.getDate() : todayTime.getDate();
        var month = todayTime.getMonth() + 1 < 10 ? "0" + (todayTime.getMonth() + 1) : (todayTime.getMonth() + 1);
        var year = todayTime.getFullYear();
        return month + "/" + day + "/" + year;
    };
    PaymentByPaymentComponent.prototype.setPaymentByPaymentExcelResponse = function (rowData) {
        var _this = this;
        var excelList = new Array();
        rowData.forEach(function (element) {
            var excelResp = new _shared_dataModels_excelPaymentByMethodResponse__WEBPACK_IMPORTED_MODULE_14__["ExcelResponsePaymentByMethod"]();
            excelResp.setPaymentReferenceNo(element.paymentReferenceNo);
            excelResp.setPaymentMethod(element.paymentMethod);
            excelResp.setPaidDate(_this.getFormattedDate(element.paidDate));
            excelResp.setTotalPaidAmt(element.totalPaidAmt);
            excelList.push(excelResp);
        });
        return excelList;
    };
    /**
       @name clearFilters- triggers on clear filter icon clicked.
    */
    PaymentByPaymentComponent.prototype.clearFilters = function () {
        var _this = this;
        setTimeout(function () {
            _this.api.setFilterModel(null);
        }, 100);
        // perform service call to reset the grid data with the criteria in the form currently
        this.submitForm();
    };
    /**
       @name onBtFirst- triggers on pagination toFirst icon clicked.
    */
    PaymentByPaymentComponent.prototype.onBtFirst = function () {
        this.api.paginationGoToFirstPage();
    };
    /**
      @name onBtLast- triggers on pagination toLast icon clicked.
    */
    PaymentByPaymentComponent.prototype.onBtLast = function () {
        this.api.paginationGoToLastPage();
        this.isBtnLastClicked = true;
    };
    /**
      @name onBtLast- triggers on pagination next icon clicked.
    */
    PaymentByPaymentComponent.prototype.onBtNext = function () {
        this.api.paginationGoToNextPage();
    };
    /**
      @name onBtPrevious- triggers on pagination previous icon clicked.
    */
    PaymentByPaymentComponent.prototype.onBtPrevious = function () {
        this.api.paginationGoToPreviousPage();
    };
    /**
      @name onCustomPageChange- triggers on pagination text field changed and focused out.
      @param fieldValue - requested page number.
    */
    PaymentByPaymentComponent.prototype.onCustomPageChange = function (fieldValue) {
        this.pageInputValue = fieldValue;
        this.api.paginationGoToPage(this.pageInputValue - 1);
    };
    /**
      @name onSortChanged - on sort model changes.
      @param event - sort event parameters.
      */
    PaymentByPaymentComponent.prototype.onSortChanged = function (event) {
        var sortModel = event.api.getSortModel();
        var sortPresent = sortModel && sortModel.length > 0;
        this.resetPageIndex();
        if (sortPresent) {
            this.paymentSearchRequest.sortData = [];
            this.paymentSearchRequest.sortData.push({ colName: sortModel[0].colId, order: sortModel[0].sort });
        }
        else {
            this.paymentSearchRequest.sortData = [];
        }
        // reset routing buttons to disabled state
        this.paymentBtnState = true;
    };
    /**
      @name onFilterChanged - on filter model changes.
      @param event - filter event parameters.
      */
    PaymentByPaymentComponent.prototype.onFilterChanged = function (event) {
        var filterModel = event.api.getFilterModel();
        var filterPresent = filterModel && Object.keys(filterModel).length > 0;
        this.resetPageIndex();
        Object.keys(filterModel);
        if (filterPresent) {
            this.paymentSearchRequest.filterData = [];
            for (var key in filterModel) {
                this.paymentSearchRequest.filterData.push({ 'filterName': key, 'filterValue': filterModel[key]['filter'] });
            }
        }
        else {
            this.paymentSearchRequest.filterData = [];
        }
        // reset routing buttons to disabled state
        this.paymentBtnState = true;
    };
    /**
     @name resetPageIndex reset page index to 1.
     */
    PaymentByPaymentComponent.prototype.resetPageIndex = function () {
        this.paymentSearchRequest.pageNumber = 1;
    };
    /**
       @name printGrid trigger the service to print grid table
       */
    PaymentByPaymentComponent.prototype.printGrid = function () {
        var gridEle = document.getElementById('vinSummaryGrid');
        this.printService.printGrid(gridEle, this.gridOptions, this.api);
    };
    PaymentByPaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-by-payment',
            template: __webpack_require__(/*! ./payment-by-payment.component.html */ "./src/app/payment-by-payment/payment-by-payment.component.html"),
            styles: [__webpack_require__(/*! ./payment-by-payment.component.scss */ "./src/app/payment-by-payment/payment-by-payment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _isp_app_service__WEBPACK_IMPORTED_MODULE_4__["IspAppService"], _shared_services_print_data_grid_service__WEBPACK_IMPORTED_MODULE_12__["PrintDataGridService"],
            _shared_services_isp_app_config_service__WEBPACK_IMPORTED_MODULE_5__["ISPAppConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _shared_grid_grid_common_service__WEBPACK_IMPORTED_MODULE_8__["GridCommonService"], _shared_services_isp_excel_service__WEBPACK_IMPORTED_MODULE_13__["ExcelExportService"], _shared_message_handler_message_handler_service__WEBPACK_IMPORTED_MODULE_15__["MessageService"]])
    ], PaymentByPaymentComponent);
    return PaymentByPaymentComponent;
}());



/***/ }),

/***/ "./src/app/payment-by-payment/payment-by-payment.guard.ts":
/*!****************************************************************!*\
  !*** ./src/app/payment-by-payment/payment-by-payment.guard.ts ***!
  \****************************************************************/
/*! exports provided: PaymentByPaymentGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentByPaymentGuard", function() { return PaymentByPaymentGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_user_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/user-info.service */ "./src/app/shared/services/user-info.service.ts");



var PaymentByPaymentGuard = /** @class */ (function () {
    function PaymentByPaymentGuard(userInfoService) {
        this.userInfoService = userInfoService;
    }
    PaymentByPaymentGuard.prototype.canActivate = function (route, state) {
        return this.userInfoService.checkRole();
    };
    PaymentByPaymentGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_info_service__WEBPACK_IMPORTED_MODULE_2__["UserInfoService"]])
    ], PaymentByPaymentGuard);
    return PaymentByPaymentGuard;
}());



/***/ }),

/***/ "./src/app/payment-details/payment-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/payment-details/payment-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb></app-breadcrumb>\r\n<div class=\"container-fluid mt-2\">\r\n  <mat-card style=\"background-color:#f5f5f5;\">\r\n    <mat-card-header>\r\n      <mat-card-title>\r\n        <label class=\"font-weight-bold\">{{'labels.Payment_Details_for'|translate}}\r\n          {{paymentDetails.paymentReferenceNo}}</label>\r\n      </mat-card-title>\r\n      <span class=\"space-away\"></span>\r\n      <mat-icon matTooltip=\"Print\" class=\"ip-mat-icon\" (click)=\"printGrid()\">local_printshop</mat-icon>\r\n      <span style=\"padding-left: 20px\"></span>\r\n      <i class=\"fa fa-file-excel-o fa-lg mt-1\" (click)=\"excelExporterForm()\" matTooltip=\"Export to Excel\"\r\n        style=\"font-size: 16px;\"></i>\r\n    </mat-card-header>\r\n    <mat-divider></mat-divider>\r\n    <mat-card-content>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 col-lg-4 col-sm-12\">\r\n          <div class=\"row ml-1 my-3\">\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Paid_Amount_Total'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{paymentDetails.totalPaidAmt}}</div>\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Paid_Date'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{paymentDetails.paidDate}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-lg-4 col-sm-12\">\r\n          <div class=\"row ml-1 my-3\">\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Payment_Reference_No'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{paymentDetails.paymentReferenceNo}}</div>\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Payment_Method'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{paymentDetails.paymentMethod}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n\r\n  <mat-toolbar class=\"buttons-panel\">\r\n    <mat-toolbar-row>\r\n      <button class=\"iplus_Btn_Primary\" mat-raised-button [disabled]=\"routeButtonState\"\r\n        (click)=\"routePaymentStatus()\">{{'button.Payment_Status'|translate}}</button>\r\n      <span class=\"space-away\"></span>\r\n      <button class=\"mr-2\" mat-raised-button>\r\n        <span class=\"d-none d-md-inline\" (click)=\"refreshData()\">{{'button.Refresh_Data'|translate}}</span>\r\n        <mat-icon class=\"ip-mat-icon m-l-xs\">cached</mat-icon>\r\n      </button>\r\n      <button mat-raised-button (click)=\"clearFilters()\">\r\n        <span class=\"d-none d-md-inline\">{{'button.Clear_Filter'|translate}}</span>\r\n        <mat-icon class=\"ip-mat-icon m-l-xs\">replay</mat-icon>\r\n      </button>\r\n    </mat-toolbar-row>\r\n  </mat-toolbar>\r\n\r\n  <div class=\"col-sm-12\" style=\"padding: 0px;\" id=\"vinGridcontainer\" class=\"gridcontainer\">\r\n\r\n    <ag-grid-angular #agGrid id=\"vinSummaryGrid\" style=\"width: 100%; height: 448px;\" class=\"ag-theme-material\"\r\n      [gridOptions]=\"gridOptions\" [columnDefs]=\"paymentDetailColumnDefs\" [rowData]=\"paymentDetailRowData\"\r\n      [rowModelType]=\"rowModelType\" [maxBlocksInCache]=\"200\" [cacheBlockSize]=\"200\" [pagination]=\"true\"\r\n      [paginationPageSize]=\"paginationPageSize\" [suppressPaginationPanel]=\"true\"\r\n      (paginationChanged)=\"onPaginationChanged($event)\" [suppressRowClickSelection]=\"true\"\r\n      [isFullWidthCell]=\"isFullWidthCell\" [animateRows]=\"true\" (gridReady)=\"onReady($event)\"\r\n      [overlayNoRowsTemplate]=\"overlayNoRowsTemplate\" (rowSelected)=\"routeButtonToggle()\"\r\n      (sortChanged)=\"onSortChanged($event)\" (filterChanged)=\"onFilterChanged($event)\">\r\n    </ag-grid-angular>\r\n\r\n    <br>\r\n\r\n    <mat-toolbar-row>\r\n      <div class=\"ag-paging-panel ag-font-style\" style=\"margin-bottom:5px\">\r\n        <span class=\"ag-paging-page-summary-panel\">\r\n          <button class=\"ag-paging-button\" ref=\"btFirst\"\r\n            [ngStyle]=\"{'opacity' : buttonDisabled.firstButton ? '0.65' : '1'}\"\r\n            [disabled]=\"this.buttonDisabled.firstButton\" (click)=\"onBtFirst()\">\r\n            <div class=\"pagination-previous-icon\">\r\n              <div class=\"pagination-previous-bar\"></div>\r\n            </div>\r\n          </button>\r\n          <button class=\"ag-paging-button\" ref=\"btPrevious\"\r\n            [ngStyle]=\"{'opacity' : buttonDisabled.previousButton ? '0.65' : '1'}\"\r\n            [disabled]=\"this.buttonDisabled.previousButton\" (click)=\"onBtPrevious()\">\r\n            <div class=\"pagination-previous-icon\"></div>\r\n          </button>\r\n          <input type=\"number\" class=\"pagination-input\" [(ngModel)]=\"pageInputValue\"\r\n            (keyup.enter)=\"onCustomPageChange(pageInputValue)\" (blur)=\"onCustomPageChange(pageInputValue)\"\r\n            autocomplete=\"off\" /> {{'labels.of' | translate}}\r\n          <span ref=\"lbTotal\">{{totalPageCount}}</span>\r\n          <button class=\"ag-paging-button\" ref=\"btNext\"\r\n            [ngStyle]=\"{'opacity' : buttonDisabled.nextButton ? '0.65' : '1'}\"\r\n            [disabled]=\"this.buttonDisabled.nextButton\" (click)=\"onBtNext()\">\r\n            <div class='pagination-next-icon'></div>\r\n          </button>\r\n          <button class=\"ag-paging-button\" ref=\"btLast\"\r\n            [ngStyle]=\"{'opacity' : buttonDisabled.lastButton ? '0.65' : '1'}\" [disabled]=\"buttonDisabled.lastButton\"\r\n            (click)=\"onBtLast()\">\r\n            <div class='pagination-next-icon'>\r\n              <div class='pagination-last-bar'></div>\r\n            </div>\r\n          </button>\r\n        </span>\r\n      </div>\r\n\r\n      <div style=\"margin:8px 9px 0 0;\">\r\n        <span ref=\"eSummaryPanel\" class=\"ag-paging-row-summary-panel\">\r\n          <span ref=\"lbFirstRowOnPage\">{{currentPageSet.start}}</span> {{'labels.to' | translate}}\r\n          <span ref=\"lbLastRowOnPage\">{{currentPageSet.end}}</span> {{'labels.of' | translate}}\r\n          <span ref=\"lbRecordCount\">{{totalRowCount}}</span>\r\n          <span style=\"margin-left:3px;\"> {{'labels.items' | translate}}</span>\r\n        </span>\r\n      </div>\r\n\r\n      <span _ngcontent-ljs-c8=\"\" class=\"space-away\"></span>\r\n\r\n      <div style=\"margin:8px 9px 0 0;\">\r\n        <span ref=\"eSummaryPanel\" class=\"ag-paging-row-summary-panel\">\r\n          <span ref=\"lbFirstRowOnPage\">{{currentPageSet.start}}</span> {{'labels.to' | translate}}\r\n          <span ref=\"lbLastRowOnPage\">{{currentPageSet.end}}</span> {{'labels.of' | translate}}\r\n          <span ref=\"lbRecordCount\">{{totalRowCount}}</span>\r\n          <span style=\"margin-left:3px;\">{{'labels.items' | translate}}</span>\r\n        </span>\r\n      </div>\r\n\r\n    </mat-toolbar-row>\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/payment-details/payment-details.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/payment-details/payment-details.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  border: 1px solid #c2c2c2;\n  padding: 0;\n  border-radius: 4px; }\n\n.mat-card {\n  padding: 0px; }\n\n.mat-card * {\n  font-size: 12px; }\n\n.mat-card-header {\n  padding: 10px;\n  background-color: #efefef;\n  background-image: linear-gradient(to bottom, #efefef, #ffffff); }\n\n.mat-card-header .mat-card-title {\n  font-size: 12px;\n  margin: 0px; }\n\n.mat-card-header-text {\n  margin: 0px; }\n\n@media print {\n  @page {\n    size: A4 landscape; }\n  ::ng-deep body {\n    -webkit-transform: scale(0.64);\n            transform: scale(0.64);\n    margin: auto -20%;\n    zoom: 80%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC1kZXRhaWxzL0M6XFxGU0RcXHBvbGljeS1tYW5hZ2VtZW50L3NyY1xcYXBwXFxwYXltZW50LWRldGFpbHNcXHBheW1lbnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1Ysa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFLekIsOERBQThELEVBQUE7O0FBRWhFO0VBQ0UsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFFYjtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFO0lBQ0Usa0JBQWtCLEVBQUE7RUFHcEI7SUFDRSw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixTQUFTLEVBQUEsRUFDViIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQtZGV0YWlscy9wYXltZW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYzJjMmMyO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5tYXQtY2FyZCB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5tYXQtY2FyZCAqIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLm1hdC1jYXJkLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2VmZWZlZiwgI2ZmZmZmZik7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZWZlZmVmLCAjZmZmZmZmKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCAjZWZlZmVmKSwgY29sb3Itc3RvcCgxMDAlLCAjZmZmZmZmKSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgI2VmZWZlZiwgI2ZmZmZmZik7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2VmZWZlZiwgI2ZmZmZmZik7XHJcbn1cclxuLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG4ubWF0LWNhcmQtaGVhZGVyLXRleHQge1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcbkBtZWRpYSBwcmludCB7XHJcbiAgQHBhZ2Uge1xyXG4gICAgc2l6ZTogQTQgbGFuZHNjYXBlO1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIGJvZHkge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjY0KTtcclxuICAgIG1hcmdpbjogYXV0byAtMjAlO1xyXG4gICAgem9vbTogODAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/payment-details/payment-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/payment-details/payment-details.component.ts ***!
  \**************************************************************/
/*! exports provided: PaymentDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailsComponent", function() { return PaymentDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_dataModels_paymentDetailsResponseHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dataModels/paymentDetailsResponseHeader */ "./src/app/shared/dataModels/paymentDetailsResponseHeader.ts");
/* harmony import */ var _shared_services_isp_app_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/isp-app-config.service */ "./src/app/shared/services/isp-app-config.service.ts");
/* harmony import */ var _isp_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isp-app.service */ "./src/app/isp-app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_dataModels_paymentDetailsRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/dataModels/paymentDetailsRequest */ "./src/app/shared/dataModels/paymentDetailsRequest.ts");
/* harmony import */ var _shared_grid_filter_custom_text_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/grid/filter/custom-text-filter.component */ "./src/app/shared/grid/filter/custom-text-filter.component.ts");
/* harmony import */ var _shared_grid_grid_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/grid/grid-common.service */ "./src/app/shared/grid/grid-common.service.ts");
/* harmony import */ var _shared_grid_filter_custom_date_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/grid/filter/custom-date-filter.component */ "./src/app/shared/grid/filter/custom-date-filter.component.ts");
/* harmony import */ var _shared_grid_page_navigate_cell_renderer_page_navigate_cell_renderer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/grid/page-navigate-cell-renderer/page-navigate-cell-renderer.component */ "./src/app/shared/grid/page-navigate-cell-renderer/page-navigate-cell-renderer.component.ts");
/* harmony import */ var _shared_services_isp_excel_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/services/isp-excel-service */ "./src/app/shared/services/isp-excel-service.ts");
/* harmony import */ var _shared_dataModels_excelPaymentByMethodResponse__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/dataModels/excelPaymentByMethodResponse */ "./src/app/shared/dataModels/excelPaymentByMethodResponse.ts");
/* harmony import */ var _shared_services_print_data_grid_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/services/print-data-grid.service */ "./src/app/shared/services/print-data-grid.service.ts");
/* harmony import */ var _shared_message_handler_message_handler_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/message-handler/message-handler.service */ "./src/app/shared/message-handler/message-handler.service.ts");
/* harmony import */ var _shared_grid_replace_zero_with_empty_cell_renderer_replace_zero_with_empty_cell_renderer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/grid/replace-zero-with-empty-cell-renderer/replace-zero-with-empty-cell-renderer.component */ "./src/app/shared/grid/replace-zero-with-empty-cell-renderer/replace-zero-with-empty-cell-renderer.component.ts");
















var PaymentDetailsComponent = /** @class */ (function () {
    function PaymentDetailsComponent(ispService, gridCommonService, route, ispAppConfigService, router, excelService, printService, messageService) {
        this.ispService = ispService;
        this.gridCommonService = gridCommonService;
        this.route = route;
        this.ispAppConfigService = ispAppConfigService;
        this.router = router;
        this.excelService = excelService;
        this.printService = printService;
        this.messageService = messageService;
        this.routeButtonState = true;
        this.pageIndex = 1;
        this.inputValue = 1;
        this.pageInputValue = 1;
        this.totalPageCount = 1;
        this.totalRowCount = 0;
        this.isRegulatoryUser = false;
        this.currentPageSet = {
            start: 1,
            end: this.paginationPageSize
        };
        this.buttonDisabled = {
            firstButton: true,
            previousButton: true,
            nextButton: false,
            lastButton: false
        };
        this.isBtnLastClicked = false;
        /** Grid Properties - END */
        this.currentPageRoutePath = 'paymentByPayment/vinSummaryDetails/';
        this.paymentDetails = new _shared_dataModels_paymentDetailsResponseHeader__WEBPACK_IMPORTED_MODULE_2__["PaymentDetalisResultHeader"]();
        this.headerObj = this.ispAppConfigService.getHeaderDetails();
        /** Grid Properties initialize - START */
        this.overlayNoRowsTemplate = '<span class="grid-noOverlay"> There are no results for the entered criterion. Please refine your search parameter </span>';
        this.frameworkComponents = {
            'customTextFilter': _shared_grid_filter_custom_text_filter_component__WEBPACK_IMPORTED_MODULE_7__["CustomTextFilterComponent"],
            'customDateFilter': _shared_grid_filter_custom_date_filter_component__WEBPACK_IMPORTED_MODULE_9__["CustomDateFilterComponent"],
            'pageNavigateCellRendererComponent': _shared_grid_page_navigate_cell_renderer_page_navigate_cell_renderer_component__WEBPACK_IMPORTED_MODULE_10__["PageNavigateCellRendererComponent"],
            'replaceZeroWithEmptyCellRendererComponent': _shared_grid_replace_zero_with_empty_cell_renderer_replace_zero_with_empty_cell_renderer_component__WEBPACK_IMPORTED_MODULE_15__["ReplaceZeroWithEmptyCellRendererComponent"]
        };
        this.paginationPageSize = 200;
        this.rowModelType = 'infinite';
        /** Grid Properties initialize - END */
    }
    PaymentDetailsComponent.prototype.ngOnInit = function () {
        this.gridSetUp();
        this.setPaymentRequest();
    };
    PaymentDetailsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.loadPaymentdetailGrid(_this.paymentRequestObject);
        }, 500);
    };
    PaymentDetailsComponent.prototype.setPaymentRequest = function () {
        this.paymentRequestObject = new _shared_dataModels_paymentDetailsRequest__WEBPACK_IMPORTED_MODULE_6__["PaymentDetailsRequest"]();
        this.paymentRequestObject.queryParams.dealerCode = this.headerObj.dealerCode;
        this.paymentRequestObject.queryParams.paymentReferenceNo = this.route.snapshot.paramMap.get('paymentReferenceNo');
    };
    PaymentDetailsComponent.prototype.routeButtonToggle = function () {
        var temp = this.api.getSelectedRows()[0];
        // this.routeButtonState = temp == null ? true : false;
        if (temp == null) {
            this.routeButtonState = true;
        }
        else {
            this.routeButtonState = false;
        }
    };
    PaymentDetailsComponent.prototype.routePaymentStatus = function () {
        var temp = this.api.getSelectedRows()[0];
        var temp1 = this.api.getSelectedRows()[0];
        this.ispService.setVSDTabIndicator(2);
        if (temp) {
            // stores the search request, later this is used to prepopulate the page
            this.ispService.setSelectedVIN_PayDet(temp.vin);
            var url = temp.vin + '/' + temp1.paymentReferenceNo + '/' + encodeURIComponent(temp.customerName) + '/' + temp.retailDate.split('/').join('~');
            this.router.navigate([this.currentPageRoutePath + url]);
        }
    };
    /** Grid Methods - START */
    /**
      @name onReady vin summary grid configurations and column defintions.
    */
    PaymentDetailsComponent.prototype.gridSetUp = function () {
        var _this = this;
        this.gridOptions = {
            context: {
                componentParent: this
            },
            onGridReady: function (params) {
                _this.api = params.api;
                //this.api.sizeColumnsToFit();
                _this.api.refreshCells();
            },
            enableColResize: false,
            enableFilter: true,
            enableServerSideSorting: true,
            sortingOrder: ["asc", "desc"],
            pagination: true,
            headerHeight: 48,
            floatingFiltersHeight: 40,
            rowHeight: 35,
            rowSelection: 'single',
            filter: true,
            frameworkComponents: this.frameworkComponents,
            floatingFilter: true,
            suppressContextMenu: false,
            suppressMenuMainPanel: false,
            suppressMenuColumnPanel: false,
            suppressTabbing: true,
            suppressPaginationPanel: true,
            suppressMovableColumns: true,
            suppressMenu: true,
            suppressDragLeaveHidesColumns: true,
            suppressColumnVirtualisation: true,
            enableCellTextSelection: true
        };
        this.paymentDetailColumnDefs = [
            {
                headerCheckboxSelection: false,
                checkboxSelection: true,
                suppressFilter: true,
                suppressSorting: true,
                width: 50
            },
            {
                headerName: 'VIN',
                headerTooltip: 'VIN',
                tooltipField: 'vin',
                field: 'vin',
                width: 150,
                suppressMenu: true,
                cellRenderer: "pageNavigateCellRendererComponent",
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true },
            },
            {
                headerName: 'Model No.',
                field: 'modelNo',
                width: 80,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Serial No.',
                field: 'serialNo',
                width: 100,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Series',
                field: 'series',
                width: 100,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Model Year',
                field: 'modelYear',
                width: 80,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Brand',
                field: 'brand',
                width: 100,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Incentive Category',
                field: 'category',
                width: 130,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Incentive Type',
                field: 'optionType',
                width: 130,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Incentive Type Name',
                field: 'incentiveTypeName',
                width: 150,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Eligible Amount',
                field: 'eligibleAmount',
                width: 80,
                suppressMenu: true,
                cellRenderer: "replaceZeroWithEmptyCellRendererComponent",
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Applied for Amt.',
                field: 'appliedAmt',
                width: 90,
                suppressMenu: true,
                cellRenderer: "replaceZeroWithEmptyCellRendererComponent",
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Total Paid Amount',
                field: 'paidAmt',
                width: 95,
                suppressMenu: true,
                cellRenderer: "replaceZeroWithEmptyCellRendererComponent",
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Chargeback Amt.',
                field: 'chargebackAmount',
                width: 80,
                suppressMenu: true,
                cellRenderer: "replaceZeroWithEmptyCellRendererComponent",
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true },
                cellStyle: function (params) {
                    if (params.value < 0) {
                        //mark cells with negative values as red
                        return { color: 'red', };
                    }
                }
            },
            {
                headerName: 'Transaction Description',
                field: 'transactionDescription',
                width: 180,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Incentive Month-Year',
                field: 'incentiveMonthYear',
                width: 130,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Customer Name',
                field: 'customerName',
                width: 160,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Retail Date',
                field: 'retailDate',
                width: 100,
                suppressMenu: true,
                floatingFilterComponent: 'customDateFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'RDR Date',
                field: 'rdrDate',
                width: 100,
                suppressMenu: true,
                floatingFilterComponent: 'customDateFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            }
        ];
    };
    /**
      @name onReady trigger on vin summary grid ready in DOM.
      @param params - event
    */
    PaymentDetailsComponent.prototype.onReady = function (params) {
        this.api = params.api;
        this.readyParam = params;
        setTimeout(function () {
            // this.api.sizeColumnsToFit();
        }, 100);
    };
    /**
      @name loadPaymentdetailGrid trigger on vin summary search.
      @param paymentGridDetails Search Request
    */
    PaymentDetailsComponent.prototype.loadPaymentdetailGrid = function (paymentGridDetails) {
        var _this = this;
        var rowData, rowcount, totalRows;
        var dataSource = {
            rowCount: totalRows,
            getRows: function (params) {
                _this.paymentDetailRowData = [];
                _this.ispService.getPaymentsDetails(paymentGridDetails)
                    .subscribe(function (data) {
                    _this.paymentDetails = data.header.resultHeader;
                    if (data.responseMessage === '0' && data.header.results) {
                        rowcount = data.header.totalResults;
                        rowData = data['header']['results'];
                    }
                    else {
                        _this.messageService.showMessage(data.error.errMessage, 'error');
                    }
                    _this.totalRowCount = rowcount;
                    totalRows = _this.totalRowCount;
                    _this.totalPageCount = _this.gridCommonService.calculateTotalPages(rowcount, _this.paginationPageSize);
                    _this.paymentDetailRowData = rowData;
                    if (_this.paymentDetailRowData && _this.paymentDetailRowData.length) {
                        _this.api.hideOverlay();
                    }
                    else {
                        _this.api.showNoRowsOverlay();
                    }
                    setTimeout(function () {
                        var rowsThisPage = rowData;
                        var lastRow = totalRows;
                        params.successCallback(rowsThisPage, lastRow);
                    }, 500);
                }, function (error) {
                    _this.paymentDetailRowData = [];
                    _this.api.showNoRowsOverlay();
                    _this.totalPageCount = 0;
                    _this.totalRowCount = 0;
                    _this.buttonDisabled = {
                        firstButton: true,
                        previousButton: true,
                        nextButton: true,
                        lastButton: true
                    };
                });
            }
        };
        this.readyParam.api.setDatasource(dataSource);
    };
    /**
    @name onPaginationChanged trigger on pagination changes.
    */
    PaymentDetailsComponent.prototype.onPaginationChanged = function (params) {
        if (this.api) {
            this.buttonDisabled = {
                firstButton: false,
                previousButton: false,
                nextButton: false,
                lastButton: false
            };
            if (this.api.paginationGetCurrentPage() + 1 === 1) {
                this.pageInputValue = this.api.paginationGetCurrentPage() + 1;
                this.buttonDisabled.firstButton = true;
                this.buttonDisabled.previousButton = true;
                // Disable first and previous buttons
            }
            else {
                this.pageInputValue = this.api.paginationGetCurrentPage() + 1;
                this.buttonDisabled.firstButton = false;
                this.buttonDisabled.previousButton = false;
                // enable first and previous buttons
                // check if the page number ast page
                if (this.pageInputValue === this.totalPageCount) {
                    this.buttonDisabled.lastButton = true;
                    this.buttonDisabled.nextButton = true;
                }
                this.paymentRequestObject.pageNumber = (this.api.paginationGetCurrentPage() + 1);
            }
            this.currentPageSet = this.gridCommonService.calculateCurrentPageSetValues(this.api.paginationGetCurrentPage(), this.paginationPageSize);
            if (this.totalRowCount <= this.paginationPageSize) {
                this.currentPageSet.end = this.totalRowCount;
                if (this.totalRowCount < 1) {
                    this.currentPageSet.start = 0;
                }
                this.buttonDisabled.lastButton = true;
                this.buttonDisabled.nextButton = true;
            }
        }
    };
    /**
       @name refreshData- triggers on refresh data button click
    */
    PaymentDetailsComponent.prototype.refreshData = function () {
        this.loadPaymentdetailGrid(this.paymentRequestObject);
    };
    /**
       @name clearFilters- triggers on clear filter button click
    */
    PaymentDetailsComponent.prototype.clearFilters = function () {
        var _this = this;
        setTimeout(function () {
            _this.api.setFilterModel(null);
        }, 100);
        // perform service call to reset the grid data with the criteria in the form currently
        this.loadPaymentdetailGrid(this.paymentRequestObject);
    };
    /**
       @name onBtFirst- triggers on pagination toFirst icon clicked.
    */
    PaymentDetailsComponent.prototype.onBtFirst = function () {
        this.api.paginationGoToFirstPage();
    };
    /**
      @name onBtLast- triggers on pagination toLast icon clicked.
    */
    PaymentDetailsComponent.prototype.onBtLast = function () {
        this.api.paginationGoToLastPage();
        this.isBtnLastClicked = true;
    };
    /**
      @name onBtLast- triggers on pagination next icon clicked.
    */
    PaymentDetailsComponent.prototype.onBtNext = function () {
        this.api.paginationGoToNextPage();
    };
    /**
      @name onBtPrevious- triggers on pagination previous icon clicked.
    */
    PaymentDetailsComponent.prototype.onBtPrevious = function () {
        this.api.paginationGoToPreviousPage();
    };
    /**
      @name onCustomPageChange- triggers on pagination text field changed and focused out.
      @param fieldValue - requested page number.
    */
    PaymentDetailsComponent.prototype.onCustomPageChange = function (fieldValue) {
        this.pageInputValue = fieldValue;
        this.api.paginationGoToPage(this.pageInputValue - 1);
    };
    /**
      @name onSortChanged - on sort model changes.
      @param event - sort event parameters.
      */
    PaymentDetailsComponent.prototype.onSortChanged = function (event) {
        var sortModel = event.api.getSortModel();
        var sortPresent = sortModel && sortModel.length > 0;
        this.resetPageIndex();
        if (sortPresent) {
            this.paymentRequestObject.sortData = [];
            this.paymentRequestObject.sortData.push({ colName: sortModel[0].colId, order: sortModel[0].sort });
        }
        else {
            this.paymentRequestObject.sortData = [];
        }
        // reset routing buttons to disabled state
        this.routeButtonState = true;
    };
    /**
    @name onFilterChanged - on filter model changes.
    @param event - filter event parameters.
    */
    PaymentDetailsComponent.prototype.onFilterChanged = function (event) {
        var filterModel = event.api.getFilterModel();
        var filterPresent = filterModel && Object.keys(filterModel).length > 0;
        this.resetPageIndex();
        Object.keys(filterModel);
        if (filterPresent) {
            this.paymentRequestObject.filterData = [];
            for (var key in filterModel) {
                this.paymentRequestObject.filterData.push({ 'filterName': key, 'filterValue': filterModel[key]['filter'] });
            }
        }
        else {
            this.paymentRequestObject.filterData = [];
        }
        // reset routing buttons to disabled state
        this.routeButtonState = true;
    };
    /**
       @name resetPageIndex reset page index to 1.
       */
    PaymentDetailsComponent.prototype.resetPageIndex = function () {
        this.paymentRequestObject.pageNumber = 1;
    };
    PaymentDetailsComponent.prototype.ngOnDestroy = function () {
        // this.Headersubscription.unsubscribe();
    };
    /**
        @name excel export trigger on payment details .
        @param request Search Request query param
      */
    PaymentDetailsComponent.prototype.excelConfig = function (request) {
        var _this = this;
        var rowData, excelVSData;
        var excelHeader = [];
        var emptyHeader = [];
        var reportHeading = ["PAYMENT BY PAYMENT METHOD FOR PAYMENT REF NO.", this.paymentRequestObject.queryParams.paymentReferenceNo, this.excelService.getCurrentDate()];
        excelHeader.push(emptyHeader);
        excelHeader.push(emptyHeader);
        excelHeader.push(emptyHeader);
        excelHeader.push(reportHeading);
        excelHeader.push(emptyHeader);
        this.ispService.getPaymentsDetails(request)
            .subscribe(function (data) {
            rowData = data['header']['results'];
            excelVSData = _this.setPaymentDetailExcelResponse(rowData);
            _this.excelService.generateExcel(excelHeader, excelVSData, 'searchPaymentsByMethodDetails', 'PaymentByPaymentMethodDetails');
        });
    };
    PaymentDetailsComponent.prototype.setPaymentDetailExcelResponse = function (rowData) {
        var excelList = new Array();
        rowData.forEach(function (element) {
            var excelResp = new _shared_dataModels_excelPaymentByMethodResponse__WEBPACK_IMPORTED_MODULE_12__["ExcelResponsePaymentByMethod"]();
            excelResp.setPaymentReferenceNo(element.paymentReferenceNo);
            excelResp.setPaymentMethod(element.paymentMethod);
            excelResp.setPaidDate(element.paidDate);
            //IPLUS-13070 Net Total Amount FIx in excel export in case of same cycle payment & chargeback
            excelResp.setPayDetTotalPaidAmt(element.chargebackAmount, element.totalPaidAmt, element.paidAmt);
            excelResp.setVin(element.vin);
            excelResp.setModelNo(element.modelNo);
            excelResp.setSerialNo(element.serialNo);
            excelResp.setSeries(element.series);
            excelResp.setModelYear(element.modelYear);
            excelResp.setBrand(element.brand);
            excelResp.setEligibleAmount(element.eligibleAmount);
            excelResp.setAppliedAmt(element.appliedAmt);
            excelResp.setPaidAmt(element.paidAmt);
            excelResp.setChargebackAmount(element.chargebackAmount);
            excelResp.setTransactionDescription(element.transactionDescription);
            excelResp.setCustomerName(element.customerName);
            excelResp.setRetailDate(element.retailDate);
            excelResp.setRdrDate(element.rdrDate);
            excelResp.setIncentiveMonthYear(element.incentiveMonthYear);
            excelResp.setOptionType(element.optionType);
            excelResp.setIncentiveTypeName(element.incentiveTypeName);
            excelResp.setIncentiveTypeNo(element.incentiveTypeNo);
            excelResp.setCategory(element.category);
            excelList.push(excelResp);
        });
        return excelList;
    };
    ;
    /**
    @name export to excel
    */
    PaymentDetailsComponent.prototype.excelExporterForm = function () {
        this.paymentRequestObject.showAll = true;
        this.paymentRequestObject.pageNumber = 1;
        // setting the max count of data based on any previous search service calls
        this.paymentRequestObject.totalResults = this.totalRowCount;
        this.excelConfig(this.paymentRequestObject);
        // IPLUS-11093 Excel download feature not working in subsequent pages
        this.paymentRequestObject.showAll = false;
    };
    /**
    @name printGrid trigger the service to print grid table
    */
    PaymentDetailsComponent.prototype.printGrid = function () {
        var gridEle = document.getElementById('vinSummaryGrid');
        this.printService.printGrid(gridEle, this.gridOptions, this.api);
    };
    PaymentDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-details',
            template: __webpack_require__(/*! ./payment-details.component.html */ "./src/app/payment-details/payment-details.component.html"),
            styles: [__webpack_require__(/*! ./payment-details.component.scss */ "./src/app/payment-details/payment-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_isp_app_service__WEBPACK_IMPORTED_MODULE_4__["IspAppService"], _shared_grid_grid_common_service__WEBPACK_IMPORTED_MODULE_8__["GridCommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _shared_services_isp_app_config_service__WEBPACK_IMPORTED_MODULE_3__["ISPAppConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _shared_services_isp_excel_service__WEBPACK_IMPORTED_MODULE_11__["ExcelExportService"], _shared_services_print_data_grid_service__WEBPACK_IMPORTED_MODULE_13__["PrintDataGridService"], _shared_message_handler_message_handler_service__WEBPACK_IMPORTED_MODULE_14__["MessageService"]])
    ], PaymentDetailsComponent);
    return PaymentDetailsComponent;
}());



/***/ }),

/***/ "./src/app/payment-details/payment-details.guard.ts":
/*!**********************************************************!*\
  !*** ./src/app/payment-details/payment-details.guard.ts ***!
  \**********************************************************/
/*! exports provided: PaymentDetailsGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailsGuard", function() { return PaymentDetailsGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_user_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/user-info.service */ "./src/app/shared/services/user-info.service.ts");




var PaymentDetailsGuard = /** @class */ (function () {
    function PaymentDetailsGuard(router, userInfoService) {
        this.router = router;
        this.userInfoService = userInfoService;
    }
    PaymentDetailsGuard.prototype.canActivate = function (route, state) {
        return this.userInfoService.checkRole();
    };
    PaymentDetailsGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_user_info_service__WEBPACK_IMPORTED_MODULE_3__["UserInfoService"]])
    ], PaymentDetailsGuard);
    return PaymentDetailsGuard;
}());



/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"breadcrumb-panel\">\r\n  <mat-toolbar-row>\r\n\r\n    <ng-container *ngFor=\"let crumb of breadcrumbList; let i=index\">\r\n      <a [ngClass]=\"{'crumb': i !== breadcrumbList.length - 1, 'last-crumb' : i == breadcrumbList.length - 1, 'm-l-sm': true }\"\r\n        (click)=\"routeToParent(crumb.route)\">{{crumb.title}}{{crumb.append}}</a>\r\n      <i class=\"ip-mat-icon fas fa-angle-double-right\" *ngIf=\"i !== breadcrumbList.length - 1\"></i>\r\n    </ng-container>\r\n\r\n    <span class=\"space-away\"></span>\r\n    <mat-icon matTooltip=\"Close\" class=\"ip-mat-icon\" (click)=\"closeBreadcrumb()\">close</mat-icon>\r\n\r\n  </mat-toolbar-row>\r\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".breadcrumb-panel {\n  margin: 10px auto;\n  width: auto;\n  border-radius: 5px;\n  background-color: #efefef; }\n\n.crumb {\n  font-size: 15px;\n  font-weight: bolder;\n  color: #337ab7 !important;\n  text-decoration: none !important;\n  padding-right: 5px;\n  cursor: pointer; }\n\n.last-crumb {\n  font-size: 15px;\n  font-weight: bolder;\n  color: black;\n  text-decoration: none;\n  padding-right: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2JyZWFkY3J1bWIvQzpcXEZTRFxccG9saWN5LW1hbmFnZW1lbnQvc3JjXFxhcHBcXHNoYXJlZFxcYnJlYWRjcnVtYlxcYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBRWxCLHlCQUNKLEVBQUE7O0FBRUE7RUFDSSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyZWFkY3J1bWItcGFuZWwge1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZlxyXG59XHJcblxyXG4uY3J1bWIge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGNvbG9yOiAjMzM3YWI3ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxhc3QtY3J1bWIge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDsgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.ts ***!
  \***********************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_isp_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/isp-app.service */ "./src/app/isp-app.service.ts");




var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(router, route, ispService) {
        this.router = router;
        this.route = route;
        this.ispService = ispService;
        this.breadcrumbList = [];
        this.breadcrumbList = this.route.snapshot.data['breadcrumbs'];
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.breadcrumbList.forEach(function (crumb) {
            crumb.append = crumb.urlParam ? _this.route.snapshot.paramMap.get(crumb.urlParam) : '';
        });
    };
    BreadcrumbComponent.prototype.closeBreadcrumb = function () {
        this.routeToParent(this.breadcrumbList[this.breadcrumbList.length - 2].route, false);
    };
    BreadcrumbComponent.prototype.routeToParent = function (path, reset) {
        var _this = this;
        if (reset === void 0) { reset = true; }
        // resets the data in the respective component so that default data set loads
        if (reset) {
            // reset constrains from the data grids
            this.ispService.setFilterSortModel(null, null);
            if (path == '/vinSummary') {
                this.ispService.setVSSelectedData(null);
                this.ispService.setselectedVIN(null);
            }
            else if (path == '/paymentByPayment') {
                this.ispService.setPaymentSelectedData(null);
                this.ispService.setselectedPayRefNo(null);
            }
            else if (path == '/paymentByIncentive') {
                this.ispService.setIncentiveSelectedData(null);
                this.ispService.setselectedIncentiveId(null);
            }
            else if (path == '/challenges') {
                this.ispService.setChallengeSelectedData(null);
                this.ispService.setChallengeSelectedVIN(null);
            }
            else if (path == '/dealReviews') {
                this.ispService.setDealReviewSelectedData(null);
                this.ispService.setDealReviewSelectedVIN(null);
            }
        }
        var temp;
        if (path.includes(':')) {
            temp = path.split('/:')[0];
            var argsList = path.split('/:').slice(1);
            argsList.forEach(function (arg) {
                temp = temp + '/' + _this.route.snapshot.paramMap.get(arg);
            });
        }
        else {
            temp = path;
        }
        // routes to the respective path
        if (path) {
            this.router.navigate([temp]);
        }
    };
    BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/shared/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/shared/breadcrumb/breadcrumb.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_isp_app_service__WEBPACK_IMPORTED_MODULE_3__["IspAppService"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/shared/confirm-modal/confirm-modal.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shared/confirm-modal/confirm-modal.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-title class=\"confirm_title\">{{data.title}}\r\n  <span class=\"space-away\"></span>\r\n  <mat-icon matTooltip=\"Close\" class=\"ip-mat-icon\" (click)=\"dialogRef.close(false);\">close</mat-icon>\r\n</div>\r\n<mat-dialog-actions style=\"padding: 15px;\">\r\n  <span class=\"space-away\"></span>\r\n  <button mat-button [mat-dialog-close]=\"true\">{{'button.Yes' | translate}}</button>\r\n  <button mat-button [mat-dialog-close]=\"false\">{{'button.No' | translate}}</button>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/shared/confirm-modal/confirm-modal.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shared/confirm-modal/confirm-modal.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".confirm_title {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5;\n  font-size: 12px !important;\n  display: flex !important;\n  margin: 0 !important; }\n\n::ng-deep .mat-dialog-container {\n  padding: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbmZpcm0tbW9kYWwvQzpcXEZTRFxccG9saWN5LW1hbmFnZW1lbnQvc3JjXFxhcHBcXHNoYXJlZFxcY29uZmlybS1tb2RhbFxcY29uZmlybS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QixvQkFBb0IsRUFBQTs7QUFFeEI7RUFDSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29uZmlybS1tb2RhbC9jb25maXJtLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZpcm1fdGl0bGV7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/confirm-modal/confirm-modal.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/confirm-modal/confirm-modal.component.ts ***!
  \*****************************************************************/
/*! exports provided: ConfirmModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function() { return ConfirmModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var ConfirmModalComponent = /** @class */ (function () {
    function ConfirmModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.modalRef = dialogRef;
    }
    ConfirmModalComponent.prototype.ngOnInit = function () {
    };
    ConfirmModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-modal',
            template: __webpack_require__(/*! ./confirm-modal.component.html */ "./src/app/shared/confirm-modal/confirm-modal.component.html"),
            styles: [__webpack_require__(/*! ./confirm-modal.component.scss */ "./src/app/shared/confirm-modal/confirm-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], ConfirmModalComponent);
    return ConfirmModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/confirm-modal/confirm-modal.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/confirm-modal/confirm-modal.service.ts ***!
  \***************************************************************/
/*! exports provided: ConfirmModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalService", function() { return ConfirmModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm-modal.component */ "./src/app/shared/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");




var ConfirmModalService = /** @class */ (function () {
    function ConfirmModalService(dialog) {
        this.dialog = dialog;
    }
    /** For creating and showing confirmation modal
     * @class ConfirmationModalService
     * @method showConfirm
     * @param text - string to display on modal
     */
    ConfirmModalService.prototype.showConfirm = function (text) {
        var dialogRef = this.dialog.open(_confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmModalComponent"], {
            height: '130px',
            width: '600px',
            position: {
                top: '3%',
                left: '35%'
            },
            data: { title: text },
        });
        return dialogRef;
    };
    ConfirmModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], ConfirmModalService);
    return ConfirmModalService;
}());



/***/ }),

/***/ "./src/app/shared/dataModels/challengeDetailsRequest.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/dataModels/challengeDetailsRequest.ts ***!
  \**************************************************************/
/*! exports provided: ChallengesDetailSearchRequest, QueryParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesDetailSearchRequest", function() { return ChallengesDetailSearchRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryParameter", function() { return QueryParameter; });
var ChallengesDetailSearchRequest = /** @class */ (function () {
    function ChallengesDetailSearchRequest() {
        this.queryParams = new QueryParameter();
    }
    return ChallengesDetailSearchRequest;
}());

var QueryParameter = /** @class */ (function () {
    function QueryParameter() {
        this.dealerCode = '';
        this.challengeNo = '';
    }
    return QueryParameter;
}());



/***/ }),

/***/ "./src/app/shared/dataModels/challengeDetailsResponseHeader.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/dataModels/challengeDetailsResponseHeader.ts ***!
  \*********************************************************************/
/*! exports provided: ChallengeDetaisResultHeader, ChallengeCommentDtoList, ChallengeDto, RequiredDocumentsDtoList, ChallengeAttachmentDtoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeDetaisResultHeader", function() { return ChallengeDetaisResultHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeCommentDtoList", function() { return ChallengeCommentDtoList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeDto", function() { return ChallengeDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredDocumentsDtoList", function() { return RequiredDocumentsDtoList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeAttachmentDtoList", function() { return ChallengeAttachmentDtoList; });
var ChallengeDetaisResultHeader = /** @class */ (function () {
    function ChallengeDetaisResultHeader() {
        this.challengeAmt = '';
        this.challengeCommentDtoList = [];
        this.challengeDto = new ChallengeDto();
        this.requierdDocumentsDtoList = [];
        this.challengeAttachmentDtoList = [];
    }
    return ChallengeDetaisResultHeader;
}());

var ChallengeCommentDtoList = /** @class */ (function () {
    function ChallengeCommentDtoList() {
    }
    return ChallengeCommentDtoList;
}());

var ChallengeDto = /** @class */ (function () {
    function ChallengeDto() {
        // this.chlngAmt = '';
        // this.chlngContactNm = '';
        this.inctvOptionId = null;
        this.inctvAppId = null;
        // this.chlngPhoneNo = null;
        // this.comments = null;
    }
    return ChallengeDto;
}());

//Open Upload IPLUS-9053
var RequiredDocumentsDtoList = /** @class */ (function () {
    function RequiredDocumentsDtoList() {
        this.attatchmentId = null;
        this.challengeId = null;
        this.dealRvwId = null;
        this.documentDescription = null;
        this.documentName = null;
        this.fileName = null;
        this.id = null;
        this.optionId = null;
        this.optionTypes = null;
        this.uploadedOn = null;
    }
    return RequiredDocumentsDtoList;
}());

//Open Upload IPLUS-9053
var ChallengeAttachmentDtoList = /** @class */ (function () {
    function ChallengeAttachmentDtoList() {
    }
    return ChallengeAttachmentDtoList;
}());



/***/ }),

/***/ "./src/app/shared/dataModels/challengeSearchRequest.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/dataModels/challengeSearchRequest.ts ***!
  \*************************************************************/
/*! exports provided: ChallengesSearchRequest, FilterParameter, ChallengesQueryParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesSearchRequest", function() { return ChallengesSearchRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterParameter", function() { return FilterParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesQueryParameter", function() { return ChallengesQueryParameter; });
// request object used to fetch data in challenge page with form details
var ChallengesSearchRequest = /** @class */ (function () {
    // default values of few properties corrosponds to the pre-selected radio buttons on default page load
    function ChallengesSearchRequest() {
        this.sortData = [];
        this.filterData = [];
        this.queryParams = new ChallengesQueryParameter();
        this.taskToDo = "searchByUpdates";
        this.excelUrl = {
            url: "excelExporter/searchChlngSummary"
        };
        this.pageNumber = null;
        this.totalResults = null;
        this.showAll = false;
        this.pageCnt = '';
        this.totalPages = null;
        this.currentPageNumber = null;
        this.recordsPerPage = null;
    }
    return ChallengesSearchRequest;
}());

// forms the base for object arrays required for the filterData property in the request object
var FilterParameter = /** @class */ (function () {
    function FilterParameter() {
        this.filterName = null;
        this.filterValue = null;
    }
    return FilterParameter;
}());

// forms the query parameters for the above class in VIN Summary page
var ChallengesQueryParameter = /** @class */ (function () {
    function ChallengesQueryParameter() {
        this.dealerCode = '';
        this.searchByRadio = '';
        this.vinSerial = '';
        this.status = '';
        this.serialNo = '';
        this.vin = '';
    }
    ChallengesQueryParameter.prototype.replaceNonAscii = function (val) {
        return val.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, '');
    };
    return ChallengesQueryParameter;
}());



/***/ }),

/***/ "./src/app/shared/dataModels/createChallengeRequest.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/dataModels/createChallengeRequest.ts ***!
  \*************************************************************/
/*! exports provided: CreateChallengeDetailsRequest, QueryParameter, DeleteChallengeDetailsRequest, deleteQueryParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateChallengeDetailsRequest", function() { return CreateChallengeDetailsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryParameter", function() { return QueryParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteChallengeDetailsRequest", function() { return DeleteChallengeDetailsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteQueryParameter", function() { return deleteQueryParameter; });
var CreateChallengeDetailsRequest = /** @class */ (function () {
    function CreateChallengeDetailsRequest() {
        this.queryParams = new QueryParameter();
    }
    return CreateChallengeDetailsRequest;
}());

var QueryParameter = /** @class */ (function () {
    function QueryParameter() {
        this.vin = '';
        this.dealerCode = '';
        this.incentiveTypeNo = '';
        this.optionType = '';
        this.iaId = '';
    }
    return QueryParameter;
}());

var DeleteChallengeDetailsRequest = /** @class */ (function () {
    function DeleteChallengeDetailsRequest() {
        this.queryParams = new deleteQueryParameter();
    }
    return DeleteChallengeDetailsRequest;
}());

var deleteQueryParameter = /** @class */ (function () {
    function deleteQueryParameter() {
        this.challengeNo = null;
    }
    return deleteQueryParameter;
}());



/***/ }),

/***/ "./src/app/shared/dataModels/dealReviewDetailsRequest.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/dataModels/dealReviewDetailsRequest.ts ***!
  \***************************************************************/
/*! exports provided: DRDetailsRequest, QueryParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRDetailsRequest", function() { return DRDetailsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryParameter", function() { return QueryParameter; });
var DRDetailsRequest = /** @class */ (function () {
    function DRDetailsRequest() {
        this.queryParams = new QueryParameter();
        this.taskToDo = 'searchDealReviewById';
    }
    return DRDetailsRequest;
}());

var QueryParameter = /** @class */ (function () {
    function QueryParameter() {
        this.dealReviewNo = '';
        this.dealerCode = '';
    }
    return QueryParameter;
}());



/***/ }),

/***/ "./src/app/shared/dataModels/dealReviewDetailsResponseHeader.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/dataModels/dealReviewDetailsResponseHeader.ts ***!
  \**********************************************************************/
/*! exports provided: DRDetailsResultHeader, CommentLog, OptionType, RequiredDocumentsDto, VehicleDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRDetailsResultHeader", function() { return DRDetailsResultHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentLog", function() { return CommentLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionType", function() { return OptionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredDocumentsDto", function() { return RequiredDocumentsDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleDetail", function() { return VehicleDetail; });
var DRDetailsResultHeader = /** @class */ (function () {
    function DRDetailsResultHeader() {
        this.commentLog = [];
        this.optionType = [];
        this.requierdDocumentsDto = [];
        this.vehicleDetail = new VehicleDetail();
    }
    return DRDetailsResultHeader;
}());

var CommentLog = /** @class */ (function () {
    function CommentLog() {
    }
    return CommentLog;
}());

var OptionType = /** @class */ (function () {
    function OptionType() {
    }
    return OptionType;
}());

var RequiredDocumentsDto = /** @class */ (function () {
    function RequiredDocumentsDto() {
    }
    return RequiredDocumentsDto;
}());

var VehicleDetail = /** @class */ (function () {
    function VehicleDetail() {
        this.id = '';
        this.modelNo = '';
        this.serialNo = '';
        this.modelYear = '';
        this.series = '';
        this.customerName = '';
        this.retailDt = '';
        this.rdrDate = '';
        this.dealreviewStatus = '';
    }
    return VehicleDetail;
}());



/***/ }),

/***/ "./src/app/shared/dataModels/dealReviewSearchRequest.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/dataModels/dealReviewSearchRequest.ts ***!
  \**************************************************************/
/*! exports provided: DealReviewSearchRequest, filterParameter, DealReviewQueryParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealReviewSearchRequest", function() { return DealReviewSearchRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterParameter", function() { return filterParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealReviewQueryParameter", function() { return DealReviewQueryParameter; });
// request object used to fetch data in Payments page with form details
var DealReviewSearchRequest = /** @class */ (function () {
    // default values of few properties corrosponds to the pre-selected radio buttons on default page load
    function DealReviewSearchRequest() {
        this.sortData = [];
        this.filterData = [];
        this.queryParams = new DealReviewQueryParameter();
        this.taskToDo = 'searchByUpdates';
        this.excelUrl = {
            url: "excelExporter/searchdealRvwSummary"
        };
        this.pageNumber = null;
        this.totalResults = null;
        this.showAll = false;
        this.pageCnt = '';
        this.totalPages = null;
        this.currentPageNumber = null;
        this.recordsPerPage = null;
    }
    return DealReviewSearchRequest;
}());

var filterParameter = /** @class */ (function () {
    function filterParameter() {
        this.filterName = null;
        this.filterValue = null;
    }
    return filterParameter;
}());

// forms the query parameters for the above class in Payments page
var DealReviewQueryParameter = /** @class */ (function () {
    function DealReviewQueryParameter() {
        this.dealerCode = '';
        this.searchByRadio = 'newUpdates';
        this.serialNo = '';
        this.status = '';
        this.vinSerial = '';
        this.vin = '';
    }
    return DealReviewQueryParameter;
}());



/***/ }),

/***/ "./src/app/shared/dataModels/excelChallengeSearchResponse.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/dataModels/excelChallengeSearchResponse.ts ***!
  \*******************************************************************/
/*! exports provided: ExcelResponseChallengeSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelResponseChallengeSearch", function() { return ExcelResponseChallengeSearch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _excelVinSummaryResponse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./excelVinSummaryResponse */ "./src/app/shared/dataModels/excelVinSummaryResponse.ts");


var ExcelResponseChallengeSearch = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ExcelResponseChallengeSearch, _super);
    function ExcelResponseChallengeSearch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExcelResponseChallengeSearch.prototype.getOptionType = function () {
        return this.optionType;
    };
    ExcelResponseChallengeSearch.prototype.setOptionType = function (value) {
        this.optionType = value;
    };
    ExcelResponseChallengeSearch.prototype.getIncentiveTypeNo = function () {
        return this.incentiveTypeNo;
    };
    ExcelResponseChallengeSearch.prototype.setIncentiveTypeNo = function (value) {
        this.incentiveTypeNo = value;
    };
    ExcelResponseChallengeSearch.prototype.getIncentiveTypeName = function () {
        return this.incentiveTypeName;
    };
    ExcelResponseChallengeSearch.prototype.setIncentiveTypeName = function (value) {
        this.incentiveTypeName = value;
    };
    ExcelResponseChallengeSearch.prototype.getChallengeNo = function () {
        return this.challengeNo;
    };
    ExcelResponseChallengeSearch.prototype.setChallengeNo = function (value) {
        this.challengeNo = value;
    };
    ExcelResponseChallengeSearch.prototype.getChallengeSubmitDate = function () {
        return this.challengeSubmitDate;
    };
    ExcelResponseChallengeSearch.prototype.setChallengeSubmitDate = function (value) {
        this.challengeSubmitDate = value;
    };
    ExcelResponseChallengeSearch.prototype.getChallengeLastUpdateDate = function () {
        return this.challengeLastUpdateDate;
    };
    ExcelResponseChallengeSearch.prototype.setChallengeLastUpdateDate = function (value) {
        this.challengeLastUpdateDate = value;
    };
    ExcelResponseChallengeSearch.prototype.getChallengeAmt = function () {
        return this.challengeAmt;
    };
    ExcelResponseChallengeSearch.prototype.setChallengeAmt = function (value) {
        this.challengeAmt = value;
    };
    return ExcelResponseChallengeSearch;
}(_excelVinSummaryResponse__WEBPACK_IMPORTED_MODULE_1__["ExcelVSResponse"]));



/***/ }),

/***/ "./src/app/shared/dataModels/excelDealReviewSearchResponse.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/dataModels/excelDealReviewSearchResponse.ts ***!
  \********************************************************************/
/*! exports provided: ExcelResponseDealReviewSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelResponseDealReviewSearch", function() { return ExcelResponseDealReviewSearch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _excelVinSummaryResponse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./excelVinSummaryResponse */ "./src/app/shared/dataModels/excelVinSummaryResponse.ts");


var ExcelResponseDealReviewSearch = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ExcelResponseDealReviewSearch, _super);
    function ExcelResponseDealReviewSearch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExcelResponseDealReviewSearch.prototype.getretailDt = function () {
        return this.retailDt;
    };
    ExcelResponseDealReviewSearch.prototype.setretailDt = function (value) {
        this.retailDt = value;
    };
    ExcelResponseDealReviewSearch.prototype.getdealReviewNo = function () {
        return this.dealReviewNo;
    };
    ExcelResponseDealReviewSearch.prototype.setdealReviewNo = function (value) {
        this.dealReviewNo = value;
    };
    ExcelResponseDealReviewSearch.prototype.getdealReviewStatus = function () {
        return this.dealreviewStatus;
    };
    ExcelResponseDealReviewSearch.prototype.setdealReviewStatus = function (value) {
        this.dealreviewStatus = value;
    };
    ExcelResponseDealReviewSearch.prototype.getdealreviewRequestDate = function () {
        return this.dealreviewRequestDate;
    };
    ExcelResponseDealReviewSearch.prototype.setdealreviewRequestDate = function (value) {
        this.dealreviewRequestDate = value;
    };
    ExcelResponseDealReviewSearch.prototype.getdealreviewSubmitDate = function () {
        return this.dealreviewSubmitDate;
    };
    ExcelResponseDealReviewSearch.prototype.setdealreviewSubmitDate = function (value) {
        this.dealreviewSubmitDate = value;
    };
    ExcelResponseDealReviewSearch.prototype.getiagDealReviewLastUpdateDate = function () {
        return this.iagDealReviewLastUpdateDate;
    };
    ExcelResponseDealReviewSearch.prototype.setiagDealReviewLastUpdateDate = function (value) {
        this.iagDealReviewLastUpdateDate = value;
    };
    return ExcelResponseDealReviewSearch;
}(_excelVinSummaryResponse__WEBPACK_IMPORTED_MODULE_1__["ExcelVSResponse"]));



/***/ }),

/***/ "./src/app/shared/dataModels/excelIncentiveStatusResponse.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/dataModels/excelIncentiveStatusResponse.ts ***!
  \*******************************************************************/
/*! exports provided: ExcelResponseIncentiveType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelResponseIncentiveType", function() { return ExcelResponseIncentiveType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _excelPaymentStatusResponse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./excelPaymentStatusResponse */ "./src/app/shared/dataModels/excelPaymentStatusResponse.ts");


var ExcelResponseIncentiveType = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ExcelResponseIncentiveType, _super);
    function ExcelResponseIncentiveType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExcelResponseIncentiveType.prototype.getStatusDate = function () {
        return this.statusDate;
    };
    ExcelResponseIncentiveType.prototype.setStatusDate = function (value) {
        this.statusDate = value;
    };
    ExcelResponseIncentiveType.prototype.getInctvStatus = function () {
        return this.incentiveStatus;
    };
    ExcelResponseIncentiveType.prototype.setInctvStatus = function (value) {
        this.incentiveStatus = value;
    };
    ExcelResponseIncentiveType.prototype.getDealReviewDisposition = function () {
        return this.dealReviewDisposition;
    };
    ExcelResponseIncentiveType.prototype.setDealReviewDisposition = function (value) {
        this.dealReviewDisposition = value;
    };
    ExcelResponseIncentiveType.prototype.getReasonCode = function () {
        return this.reasonCode;
    };
    ExcelResponseIncentiveType.prototype.setReasonCode = function (value) {
        this.reasonCode = value;
    };
    ExcelResponseIncentiveType.prototype.getReasonDescription = function () {
        return this.reasonDescription;
    };
    ExcelResponseIncentiveType.prototype.setReasonDescription = function (value) {
        this.reasonDescription = value;
    };
    ExcelResponseIncentiveType.prototype.getCurrentOwner = function () {
        return this.currentOwner;
    };
    ExcelResponseIncentiveType.prototype.setCurrentOwner = function (value) {
        this.currentOwner = value;
    };
    ExcelResponseIncentiveType.prototype.getChallengeDisposition = function () {
        return this.challengeDisposition;
    };
    ExcelResponseIncentiveType.prototype.setChallengeDisposition = function (value) {
        this.challengeDisposition = value;
    };
    ExcelResponseIncentiveType.prototype.getIaReceivedDate = function () {
        return this.iaReceivedDate;
    };
    ExcelResponseIncentiveType.prototype.setIaReceivedDate = function (value) {
        this.iaReceivedDate = value;
    };
    return ExcelResponseIncentiveType;
}(_excelPaymentStatusResponse__WEBPACK_IMPORTED_MODULE_1__["ExcelResponsePaymentType"]));



/***/ }),

/***/ "./src/app/shared/dataModels/excelPaymentByIncentiveTypeResponse.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/dataModels/excelPaymentByIncentiveTypeResponse.ts ***!
  \**************************************************************************/
/*! exports provided: ExcelResponsePaymentByIncentiveType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelResponsePaymentByIncentiveType", function() { return ExcelResponsePaymentByIncentiveType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _excelPaymentStatusResponse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./excelPaymentStatusResponse */ "./src/app/shared/dataModels/excelPaymentStatusResponse.ts");


var ExcelResponsePaymentByIncentiveType = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ExcelResponsePaymentByIncentiveType, _super);
    function ExcelResponsePaymentByIncentiveType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExcelResponsePaymentByIncentiveType.prototype.getIncentiveStartDate = function () {
        return this.incentiveStartDate;
    };
    ExcelResponsePaymentByIncentiveType.prototype.setIncentiveStartDate = function (value) {
        this.incentiveStartDate = value;
    };
    ExcelResponsePaymentByIncentiveType.prototype.getIncentiveEndDate = function () {
        return this.incentiveEndDate;
    };
    ExcelResponsePaymentByIncentiveType.prototype.setIncentiveEndDate = function (value) {
        this.incentiveEndDate = value;
    };
    ExcelResponsePaymentByIncentiveType.prototype.getPendingAmount = function () {
        return this.pendingAmount;
    };
    ExcelResponsePaymentByIncentiveType.prototype.setPendingAmount = function (value) {
        this.pendingAmount = value;
    };
    ExcelResponsePaymentByIncentiveType.prototype.getEligibleAmount = function () {
        return this.eligibleAmount;
    };
    ExcelResponsePaymentByIncentiveType.prototype.setEligibleAmount = function (value) {
        this.eligibleAmount = value;
    };
    return ExcelResponsePaymentByIncentiveType;
}(_excelPaymentStatusResponse__WEBPACK_IMPORTED_MODULE_1__["ExcelResponsePaymentType"]));



/***/ }),

/***/ "./src/app/shared/dataModels/excelPaymentByMethodResponse.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/dataModels/excelPaymentByMethodResponse.ts ***!
  \*******************************************************************/
/*! exports provided: ExcelResponsePaymentByMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelResponsePaymentByMethod", function() { return ExcelResponsePaymentByMethod; });
var ExcelResponsePaymentByMethod = /** @class */ (function () {
    function ExcelResponsePaymentByMethod() {
    }
    ExcelResponsePaymentByMethod.prototype.getPaymentReferenceNo = function () {
        return this.paymentReferenceNo;
    };
    ExcelResponsePaymentByMethod.prototype.setPaymentReferenceNo = function (value) {
        this.paymentReferenceNo = value;
    };
    ExcelResponsePaymentByMethod.prototype.getPaymentMethod = function () {
        return this.paymentMethod;
    };
    ExcelResponsePaymentByMethod.prototype.setPaymentMethod = function (value) {
        this.paymentMethod = value;
    };
    ExcelResponsePaymentByMethod.prototype.getPaidDate = function () {
        return this.paidDate;
    };
    ExcelResponsePaymentByMethod.prototype.setPaidDate = function (value) {
        this.paidDate = value;
    };
    ExcelResponsePaymentByMethod.prototype.getTotalPaidAmt = function () {
        return this.totalPaidAmt;
    };
    ExcelResponsePaymentByMethod.prototype.setTotalPaidAmt = function (value) {
        this.totalPaidAmt = value;
    };
    ExcelResponsePaymentByMethod.prototype.getPayDetTotalPaidAmt = function () {
        return this.totalPaidAmt;
    };
    //IPLUS-13070 Net Total Amount FIx in excel export in case of same cycle payment & chargeback
    ExcelResponsePaymentByMethod.prototype.setPayDetTotalPaidAmt = function (chrgbackAmount, totPaidAmt, paidAmt) {
        if (chrgbackAmount !== 0 && chrgbackAmount < 0) {
            this.totalPaidAmt = chrgbackAmount + paidAmt;
        }
        else {
            this.totalPaidAmt = totPaidAmt;
        }
    };
    ExcelResponsePaymentByMethod.prototype.getVin = function () {
        return this.vin;
    };
    ExcelResponsePaymentByMethod.prototype.setVin = function (value) {
        this.vin = value;
    };
    ExcelResponsePaymentByMethod.prototype.getModelNo = function () {
        return this.modelNo;
    };
    ExcelResponsePaymentByMethod.prototype.setModelNo = function (value) {
        this.modelNo = value;
    };
    ExcelResponsePaymentByMethod.prototype.getSerialNo = function () {
        return this.serialNo;
    };
    ExcelResponsePaymentByMethod.prototype.setSerialNo = function (value) {
        this.serialNo = value;
    };
    ExcelResponsePaymentByMethod.prototype.getSeries = function () {
        return this.series;
    };
    ExcelResponsePaymentByMethod.prototype.setSeries = function (value) {
        this.series = value;
    };
    ExcelResponsePaymentByMethod.prototype.getModelYear = function () {
        return this.modelYear;
    };
    ExcelResponsePaymentByMethod.prototype.setModelYear = function (value) {
        this.modelYear = value;
    };
    ExcelResponsePaymentByMethod.prototype.getBrand = function () {
        return this.brand;
    };
    ExcelResponsePaymentByMethod.prototype.setBrand = function (value) {
        this.brand = value;
    };
    ExcelResponsePaymentByMethod.prototype.getEligibleAmount = function () {
        return this.eligibleAmount;
    };
    ExcelResponsePaymentByMethod.prototype.setEligibleAmount = function (value) {
        this.eligibleAmount = value;
    };
    ExcelResponsePaymentByMethod.prototype.getAppliedAmt = function () {
        return this.appliedAmt;
    };
    ExcelResponsePaymentByMethod.prototype.setAppliedAmt = function (value) {
        this.appliedAmt = value;
    };
    ExcelResponsePaymentByMethod.prototype.getPaidAmt = function () {
        return this.paidAmt;
    };
    ExcelResponsePaymentByMethod.prototype.setPaidAmt = function (value) {
        this.paidAmt = value;
    };
    ExcelResponsePaymentByMethod.prototype.getChargebackAmount = function () {
        return this.chargebackAmount;
    };
    ExcelResponsePaymentByMethod.prototype.setChargebackAmount = function (value) {
        this.chargebackAmount = value;
    };
    ExcelResponsePaymentByMethod.prototype.getTransactionDescription = function () {
        return this.transactionDescription;
    };
    ExcelResponsePaymentByMethod.prototype.setTransactionDescription = function (value) {
        this.transactionDescription = value;
    };
    ExcelResponsePaymentByMethod.prototype.getCustomerName = function () {
        return this.customerName;
    };
    ExcelResponsePaymentByMethod.prototype.setCustomerName = function (value) {
        this.customerName = value;
    };
    ExcelResponsePaymentByMethod.prototype.getRetailDate = function () {
        return this.retailDate;
    };
    ExcelResponsePaymentByMethod.prototype.setRetailDate = function (value) {
        this.retailDate = value;
    };
    ExcelResponsePaymentByMethod.prototype.getRdrDate = function () {
        return this.rdrDate;
    };
    ExcelResponsePaymentByMethod.prototype.setRdrDate = function (value) {
        this.rdrDate = value;
    };
    ExcelResponsePaymentByMethod.prototype.getIncentiveMonthYear = function () {
        return this.incentiveMonthYear;
    };
    ExcelResponsePaymentByMethod.prototype.setIncentiveMonthYear = function (value) {
        this.incentiveMonthYear = value;
    };
    ExcelResponsePaymentByMethod.prototype.getOptionType = function () {
        return this.optionType;
    };
    ExcelResponsePaymentByMethod.prototype.setOptionType = function (value) {
        this.optionType = value;
    };
    ExcelResponsePaymentByMethod.prototype.getIncentiveTypeName = function () {
        return this.incentiveTypeName;
    };
    ExcelResponsePaymentByMethod.prototype.setIncentiveTypeName = function (value) {
        this.incentiveTypeName = value;
    };
    ExcelResponsePaymentByMethod.prototype.getIncentiveTypeNo = function () {
        return this.incentiveTypeNo;
    };
    ExcelResponsePaymentByMethod.prototype.setIncentiveTypeNo = function (value) {
        this.incentiveTypeNo = value;
    };
    ExcelResponsePaymentByMethod.prototype.getCategory = function () {
        return this.category;
    };
    ExcelResponsePaymentByMethod.prototype.setCategory = function (value) {
        this.category = value;
    };
    return ExcelResponsePaymentByMethod;
}());



/***/ }),

/***/ "./src/app/shared/dataModels/excelPaymentStatusResponse.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/dataModels/excelPaymentStatusResponse.ts ***!
  \*****************************************************************/
/*! exports provided: ExcelResponsePaymentType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelResponsePaymentType", function() { return ExcelResponsePaymentType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _excelVinSummaryResponse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./excelVinSummaryResponse */ "./src/app/shared/dataModels/excelVinSummaryResponse.ts");


var ExcelResponsePaymentType = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ExcelResponsePaymentType, _super);
    function ExcelResponsePaymentType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExcelResponsePaymentType.prototype.getTypeSalesCode = function () {
        return this.typeSalesCode;
    };
    ExcelResponsePaymentType.prototype.setTypeSalesCode = function (value) {
        this.typeSalesCode = value;
    };
    ExcelResponsePaymentType.prototype.getIncentiveMonthYear = function () {
        return this.incentiveMonthYear;
    };
    ExcelResponsePaymentType.prototype.setIncentiveMonthYear = function (value) {
        this.incentiveMonthYear = value;
    };
    ExcelResponsePaymentType.prototype.getCategory = function () {
        return this.category;
    };
    ExcelResponsePaymentType.prototype.setCategory = function (value) {
        this.category = value;
    };
    ExcelResponsePaymentType.prototype.getOptionType = function () {
        return this.optionType;
    };
    ExcelResponsePaymentType.prototype.setOptionType = function (value) {
        this.optionType = value;
    };
    ExcelResponsePaymentType.prototype.getIncentiveTypeName = function () {
        return this.incentiveTypeName;
    };
    ExcelResponsePaymentType.prototype.setIncentiveTypeName = function (value) {
        this.incentiveTypeName = value;
    };
    ExcelResponsePaymentType.prototype.getIncentiveTypeNo = function () {
        return this.incentiveTypeNo;
    };
    ExcelResponsePaymentType.prototype.setIncentiveTypeNo = function (value) {
        this.incentiveTypeNo = value;
    };
    ExcelResponsePaymentType.prototype.getPaymentReferenceNo = function () {
        return this.paymentReferenceNo;
    };
    ExcelResponsePaymentType.prototype.setPaymentReferenceNo = function (value) {
        this.paymentReferenceNo = value;
    };
    ExcelResponsePaymentType.prototype.getPaymentMethod = function () {
        return this.paymentMethod;
    };
    ExcelResponsePaymentType.prototype.setPaymentMethod = function (value) {
        this.paymentMethod = value;
    };
    ExcelResponsePaymentType.prototype.getPaidDate = function () {
        return this.paidDate;
    };
    ExcelResponsePaymentType.prototype.setPaidDate = function (value) {
        this.paidDate = value;
    };
    ExcelResponsePaymentType.prototype.getNetPaidAmt = function () {
        return this.paidAmt;
    };
    ExcelResponsePaymentType.prototype.setPaidAmt = function (value) {
        this.paidAmt = value;
    };
    ExcelResponsePaymentType.prototype.getPendingAmt = function () {
        return this.pendingAmt;
    };
    ExcelResponsePaymentType.prototype.setPendingAmtt = function (value) {
        this.pendingAmt = value;
    };
    ExcelResponsePaymentType.prototype.getchargebackAmount = function () {
        return this.chargebackAmount;
    };
    ExcelResponsePaymentType.prototype.setchargebackAmount = function (value) {
        this.chargebackAmount = value;
    };
    ExcelResponsePaymentType.prototype.getDeniedAmount = function () {
        return this.deniedAmount;
    };
    ExcelResponsePaymentType.prototype.setDeniedAmount = function (value) {
        this.deniedAmount = value;
    };
    ExcelResponsePaymentType.prototype.getTransactionDesc = function () {
        return this.transactionDesc;
    };
    ExcelResponsePaymentType.prototype.setTransactionDesc = function (value) {
        this.transactionDesc = value;
    };
    ExcelResponsePaymentType.prototype.getTransactionDescription = function () {
        return this.transactionDescription;
    };
    ExcelResponsePaymentType.prototype.setTransactionDescription = function (value) {
        this.transactionDescription = value;
    };
    return ExcelResponsePaymentType;
}(_excelVinSummaryResponse__WEBPACK_IMPORTED_MODULE_1__["ExcelVSResponse"]));



/***/ }),

/***/ "./src/app/shared/dataModels/excelVinSummaryResponse.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/dataModels/excelVinSummaryResponse.ts ***!
  \**************************************************************/
/*! exports provided: ExcelVSResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelVSResponse", function() { return ExcelVSResponse; });
var ExcelVSResponse = /** @class */ (function () {
    function ExcelVSResponse() {
    }
    ExcelVSResponse.prototype.getVin = function () {
        return this.vin;
    };
    ExcelVSResponse.prototype.setVin = function (value) {
        this.vin = value;
    };
    ExcelVSResponse.prototype.getModelNo = function () {
        return this.modelNo;
    };
    ExcelVSResponse.prototype.setModelNo = function (value) {
        this.modelNo = value;
    };
    ExcelVSResponse.prototype.getSerialNo = function () {
        return this.serialNo;
    };
    ExcelVSResponse.prototype.setSerialNo = function (value) {
        this.serialNo = value;
    };
    ExcelVSResponse.prototype.getSeries = function () {
        return this.series;
    };
    ExcelVSResponse.prototype.setSeries = function (value) {
        this.series = value;
    };
    ExcelVSResponse.prototype.getModelYear = function () {
        return this.modelYear;
    };
    ExcelVSResponse.prototype.setModelYear = function (value) {
        this.modelYear = value;
    };
    ExcelVSResponse.prototype.getBrand = function () {
        return this.brand;
    };
    ExcelVSResponse.prototype.setBrand = function (value) {
        this.brand = value;
    };
    ExcelVSResponse.prototype.getCustomerName = function () {
        return this.customerName;
    };
    ExcelVSResponse.prototype.setCustomerName = function (value) {
        this.customerName = value;
    };
    ExcelVSResponse.prototype.getRetailDate = function () {
        return this.retailDate;
    };
    ExcelVSResponse.prototype.setRetailDate = function (value) {
        this.retailDate = value;
    };
    ExcelVSResponse.prototype.getRdrDate = function () {
        return this.rdrDate;
    };
    ExcelVSResponse.prototype.setRdrDate = function (value) {
        this.rdrDate = value;
    };
    ExcelVSResponse.prototype.getDealRvwStatus = function () {
        return this.dealRvwStatus;
    };
    ExcelVSResponse.prototype.setDealRvwStatus = function (value) {
        this.dealRvwStatus = value;
    };
    ExcelVSResponse.prototype.getChallengeSubmitted = function () {
        return this.challengeSubmitted;
    };
    ExcelVSResponse.prototype.setChallengeSubmitted = function (value) {
        this.challengeSubmitted = value;
    };
    ExcelVSResponse.prototype.getChallengeStatus = function () {
        return this.challengeStatus;
    };
    ExcelVSResponse.prototype.setChallengeStatus = function (value) {
        this.challengeStatus = value;
    };
    ExcelVSResponse.prototype.getIaStatus = function () {
        return this.iaStatus;
    };
    ExcelVSResponse.prototype.setIaStatus = function (value) {
        this.iaStatus = value;
    };
    ExcelVSResponse.prototype.getContractStatus = function () {
        return this.contractStatus;
    };
    ExcelVSResponse.prototype.setContractStatus = function (value) {
        this.contractStatus = value;
    };
    ExcelVSResponse.prototype.getRdrStatus = function () {
        return this.rdrStatus;
    };
    ExcelVSResponse.prototype.setRdrStatus = function (value) {
        this.rdrStatus = value;
    };
    ExcelVSResponse.prototype.getAppliedAmt = function () {
        return this.appliedAmt;
    };
    ExcelVSResponse.prototype.setAppliedAmt = function (value) {
        this.appliedAmt = value;
    };
    ExcelVSResponse.prototype.getNetPaidAmt = function () {
        return this.netPaidAmt;
    };
    ExcelVSResponse.prototype.setNetPaidAmt = function (value) {
        this.netPaidAmt = value;
    };
    return ExcelVSResponse;
}());



/***/ }),

/***/ "./src/app/shared/dataModels/incentiveDetailResponseHeader.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/dataModels/incentiveDetailResponseHeader.ts ***!
  \********************************************************************/
/*! exports provided: IncentiveResultHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncentiveResultHeader", function() { return IncentiveResultHeader; });
var IncentiveResultHeader = /** @class */ (function () {
    function IncentiveResultHeader() {
    }
    return IncentiveResultHeader;
}());



/***/ }),

/***/ "./src/app/shared/dataModels/incentiveDetailsRequest.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/dataModels/incentiveDetailsRequest.ts ***!
  \**************************************************************/
/*! exports provided: IncentiveDetailsRequest, IncentiveDetailQueryParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncentiveDetailsRequest", function() { return IncentiveDetailsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncentiveDetailQueryParameter", function() { return IncentiveDetailQueryParameter; });
var IncentiveDetailsRequest = /** @class */ (function () {
    function IncentiveDetailsRequest() {
        this.sortData = [];
        this.filterData = [];
        this.queryParams = new IncentiveDetailQueryParameter();
        this.excelUrl = {
            url: "excelExporter/searchPaymentsByTypeDetails"
        };
        this.pageNumber = 1;
        this.taskToDo = '';
        this.totalResults = null;
        this.showAll = false;
        this.pageCnt = '';
        this.totalPages = null;
        this.currentPageNumber = null;
        this.recordsPerPage = null;
    }
    return IncentiveDetailsRequest;
}());

var IncentiveDetailQueryParameter = /** @class */ (function () {
    function IncentiveDetailQueryParameter() {
        this.dealerCode = '';
        this.incentiveTypeName = '';
        this.incentiveTypeNum = '';
    }
    return IncentiveDetailQueryParameter;
}());



/***/ }),

/***/ "./src/app/shared/dataModels/incentiveSearchRequest.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/dataModels/incentiveSearchRequest.ts ***!
  \*************************************************************/
/*! exports provided: IncentiveSearchRequest, filterParameter, IncentiveSearchQueryParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncentiveSearchRequest", function() { return IncentiveSearchRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterParameter", function() { return filterParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncentiveSearchQueryParameter", function() { return IncentiveSearchQueryParameter; });
// request object used to fetch data in Payments page with form details
var IncentiveSearchRequest = /** @class */ (function () {
    // default values of few properties corrosponds to the pre-selected radio buttons on default page load
    function IncentiveSearchRequest() {
        this.sortData = [];
        this.filterData = [];
        this.queryParams = new IncentiveSearchQueryParameter();
        this.taskToDo = 'searchByIncentiveType';
        this.excelUrl = {
            url: 'excelExporter/searchPaymentsByType'
        };
        this.pageNumber = '1';
        this.totalResults = null;
        this.showAll = false;
        this.pageCnt = '';
        this.totalPages = null;
        this.currentPageNumber = null;
        this.recordsPerPage = null;
    }
    return IncentiveSearchRequest;
}());

// forms the base for object arrays required for the filterData property in the request object
var filterParameter = /** @class */ (function () {
    function filterParameter() {
        this.filterName = null;
        this.filterValue = null;
    }
    return filterParameter;
}());

// forms the query parameters for the above class in Payments page
var IncentiveSearchQueryParameter = /** @class */ (function () {
    // the below two are specifically for Payments by Payments Reuqest
    function IncentiveSearchQueryParameter() {
        this.dealerCode = '';
        this.incentiveMonth = '';
        this.incentiveYear = new Date().getFullYear();
    }
    return IncentiveSearchQueryParameter;
}());



/***/ }),

/***/ "./src/app/shared/dataModels/paymentDetailsRequest.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/dataModels/paymentDetailsRequest.ts ***!
  \************************************************************/
/*! exports provided: PaymentDetailsRequest, PayDetailQueryParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailsRequest", function() { return PaymentDetailsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayDetailQueryParameter", function() { return PayDetailQueryParameter; });
var PaymentDetailsRequest = /** @class */ (function () {
    function PaymentDetailsRequest() {
        this.sortData = [];
        this.filterData = [];
        this.queryParams = new PayDetailQueryParameter();
        this.excelUrl = {
            url: "excelExporter/searchPaymentsByMethodDetails"
        };
        this.pageNumber = 1;
        this.taskToDo = '';
        this.totalResults = null;
        this.showAll = false;
        this.pageCnt = '';
        this.totalPages = null;
        this.currentPageNumber = null;
        this.recordsPerPage = null;
    }
    return PaymentDetailsRequest;
}());

var PayDetailQueryParameter = /** @class */ (function () {
    function PayDetailQueryParameter() {
        this.dealerCode = '';
        this.paymentReferenceNo = '';
    }
    return PayDetailQueryParameter;
}());



/***/ }),

/***/ "./src/app/shared/dataModels/paymentDetailsResponseHeader.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/dataModels/paymentDetailsResponseHeader.ts ***!
  \*******************************************************************/
/*! exports provided: PaymentDetalisResultHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetalisResultHeader", function() { return PaymentDetalisResultHeader; });
var PaymentDetalisResultHeader = /** @class */ (function () {
    function PaymentDetalisResultHeader() {
    }
    return PaymentDetalisResultHeader;
}());



/***/ }),

/***/ "./src/app/shared/dataModels/paymentsSearchRequest.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/dataModels/paymentsSearchRequest.ts ***!
  \************************************************************/
/*! exports provided: PaymentsSearchRequest, PaymentSearchQueryParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsSearchRequest", function() { return PaymentsSearchRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentSearchQueryParameter", function() { return PaymentSearchQueryParameter; });
// request object used to fetch data in Payments page with form details
var PaymentsSearchRequest = /** @class */ (function () {
    // default values of few properties corrosponds to the pre-selected radio buttons on default page load
    function PaymentsSearchRequest() {
        this.sortData = [];
        this.filterData = [];
        this.queryParams = new PaymentSearchQueryParameter();
        this.taskToDo = 'searchByDateRange';
        this.excelUrl = {
            url: ''
        };
        this.pageNumber = 1;
        this.totalResults = null;
        this.showAll = false;
        this.pageCnt = '';
        this.totalPages = null;
        this.currentPageNumber = null;
        this.recordsPerPage = null;
    }
    return PaymentsSearchRequest;
}());

// forms the query parameters for the above class in Payments page
var PaymentSearchQueryParameter = /** @class */ (function () {
    function PaymentSearchQueryParameter() {
        this.dealerCode = '';
        this.paymentReferenceNo = '';
        this.startDate = this.replaceNonAscii(new Date().toLocaleDateString());
        this.endDate = this.replaceNonAscii(new Date().toLocaleDateString());
        // set to current month in string, TBD later, mb
        this.month = '';
        this.year = new Date().getFullYear();
    }
    PaymentSearchQueryParameter.prototype.replaceNonAscii = function (val) {
        return val.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, '');
    };
    return PaymentSearchQueryParameter;
}());



/***/ }),

/***/ "./src/app/shared/dataModels/vinSummaryDetailsRequest.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/dataModels/vinSummaryDetailsRequest.ts ***!
  \***************************************************************/
/*! exports provided: VSDetailsRequest, QueryParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VSDetailsRequest", function() { return VSDetailsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryParameter", function() { return QueryParameter; });
// In VIN Summary Details this request object is used for fetching the data in Incentive/Payment Status header panel tab
var VSDetailsRequest = /** @class */ (function () {
    function VSDetailsRequest() {
        this.sortData = [];
        this.filterData = [];
        this.queryParams = new QueryParameter();
        this.isReadOnly = false;
        this.excelUrl = {
            url: "excelExporter/incentiveStatus"
        };
        this.pageNumber = 1;
        this.taskToDo = '';
    }
    return VSDetailsRequest;
}());

// Refers to the query parameters for the above object for Incentive/Payment Status header panel tab
var QueryParameter = /** @class */ (function () {
    function QueryParameter() {
        this.dealerCode = '';
        this.customerName = '';
        this.vin = '';
        this.retailDate = '';
    }
    return QueryParameter;
}());



/***/ }),

/***/ "./src/app/shared/dataModels/vinSummaryDetailsResponseHeader.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/dataModels/vinSummaryDetailsResponseHeader.ts ***!
  \**********************************************************************/
/*! exports provided: VSDetaisResultHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VSDetaisResultHeader", function() { return VSDetaisResultHeader; });
var VSDetaisResultHeader = /** @class */ (function () {
    function VSDetaisResultHeader() {
    }
    return VSDetaisResultHeader;
}());



/***/ }),

/***/ "./src/app/shared/dataModels/vinSummarySearchRequest.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/dataModels/vinSummarySearchRequest.ts ***!
  \**************************************************************/
/*! exports provided: VSSearchRequest, FilterParameter, VSSearchQueryParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VSSearchRequest", function() { return VSSearchRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterParameter", function() { return FilterParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VSSearchQueryParameter", function() { return VSSearchQueryParameter; });
// request object used to fetch data in VIN Summary page with form details
var VSSearchRequest = /** @class */ (function () {
    // default values of few properties corrosponds to the pre-selected radio buttons on default page load
    function VSSearchRequest() {
        this.sortData = [];
        this.filterData = [];
        this.queryParams = new VSSearchQueryParameter();
        this.taskToDo = 'searchByCalMonth';
        this.excelUrl = {
            url: 'excelExporter/vinSummary'
        };
        this.pageNumber = '1';
        this.totalResults = null;
        this.showAll = false;
        this.pageCnt = '';
        this.totalPages = null;
        this.currentPageNumber = null;
        this.recordsPerPage = null;
    }
    return VSSearchRequest;
}());

// forms the base for object arrays required for the filterData property in the request object
var FilterParameter = /** @class */ (function () {
    function FilterParameter() {
        this.filterName = null;
        this.filterValue = null;
    }
    return FilterParameter;
}());

// forms the query parameters for the above class in VIN Summary page
var VSSearchQueryParameter = /** @class */ (function () {
    function VSSearchQueryParameter() {
        this.dealerCode = '';
        this.searchByIncentive = 'Y';
        this.startDate = this.replaceNonAscii(new Date().toLocaleDateString());
        this.endDate = this.replaceNonAscii(new Date().toLocaleDateString());
        // set to current month in string, TBD later, mb
        this.month = '';
        this.year = new Date().getFullYear();
        this.serialNo = '';
        this.vinSerial = '';
        this.vin = '';
    }
    VSSearchQueryParameter.prototype.replaceNonAscii = function (val) {
        return val.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, '');
    };
    return VSSearchQueryParameter;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid footer_bg\">\r\n  <div class=\"footer_logo pull-left\">\r\n      <img src=\"assets/images/toyota.png\" alt=\"toyota footer image\" *ngIf=\"!isLexus\">\r\n      <img src=\"assets/images/lexus.png\" alt=\"lexus footer image\" *ngIf=\"isLexus\">\r\n  </div>\r\n  <div class=\"footer_text pull-right\">{{'footer.CopyrightText_1'|translate}}{{currentYear}}{{'footer.CopyrightText_2'|translate}}</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  position: relative; }\n\n.footer_bg {\n  background: url('footer_background.png') repeat-x;\n  height: 36px; }\n\n.footer_text {\n  margin-top: 10px;\n  font-size: 1em;\n  color: #000; }\n\n.pull-right {\n  float: right !important; }\n\n.footer_logo {\n  margin-top: 9px; }\n\n.pull-left {\n  float: left !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9DOlxcRlNEXFxwb2xpY3ktbWFuYWdlbWVudC9zcmNcXGFwcFxcc2hhcmVkXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxpREFBc0U7RUFDdEUsWUFBWSxFQUFBOztBQUVoQjtFQUNJLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsV0FBVyxFQUFBOztBQUVmO0VBQ0ksdUJBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLHNCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuLmZvb3Rlcl9iZ3tcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Zvb3Rlcl9iYWNrZ3JvdW5kLnBuZykgcmVwZWF0LXg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbn1cclxuLmZvb3Rlcl90ZXh0e1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuLnB1bGwtcmlnaHQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0IWltcG9ydGFudDtcclxufVxyXG4uZm9vdGVyX2xvZ28ge1xyXG4gICAgbWFyZ2luLXRvcDogOXB4O1xyXG59XHJcbi5wdWxsLWxlZnQge1xyXG4gICAgZmxvYXQ6IGxlZnQhaW1wb3J0YW50O1xyXG59XHJcbiAgICAiXX0= */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_isp_app_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/isp-app-config.service */ "./src/app/shared/services/isp-app-config.service.ts");



var FooterComponent = /** @class */ (function () {
    function FooterComponent(ispAppConfig) {
        this.ispAppConfig = ispAppConfig;
        if (this.ispAppConfig.getSelectedTheme() === 'Lexus') {
            this.isLexus = true;
        }
        var d = new Date();
        this.currentYear = d.getFullYear().toString().substring(2);
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_isp_app_config_service__WEBPACK_IMPORTED_MODULE_2__["ISPAppConfigService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/grid/filter/custom-date-filter.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/grid/filter/custom-date-filter.component.ts ***!
  \********************************************************************/
/*! exports provided: CustomDateFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDateFilterComponent", function() { return CustomDateFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var CustomDateFilterComponent = /** @class */ (function () {
    function CustomDateFilterComponent() {
        this.maxDate = new Date();
    }
    CustomDateFilterComponent.prototype.agInit = function (params) {
        this.params = params;
        this.currentValue = '';
    };
    /**
     @name valueChanged- set current value and trigger floating filter change.
     */
    CustomDateFilterComponent.prototype.valueChanged = function () {
        if (this.initialValue !== this.currentValue) {
            this.initialValue = this.currentValue;
            this.params.onFloatingFilterChanged({ model: this.buildModel() });
        }
    };
    CustomDateFilterComponent.prototype.ngAfterViewInit = function () {
        //  this.valueChanged();
    };
    /**
      @name onParentModelChanged- set current filter Value
      */
    CustomDateFilterComponent.prototype.onParentModelChanged = function (parentModel) {
        if (!parentModel) {
            this.currentValue = '';
        }
        else {
            this.currentValue = new Date(parentModel.filter);
        }
    };
    /**
     @name onFocus- set initialValue value on focus filter text box
     */
    CustomDateFilterComponent.prototype.onFocus = function () {
        this.initialValue = this.currentValue;
    };
    /**
     @name buildModel- set filter model
     */
    CustomDateFilterComponent.prototype.buildModel = function () {
        if (this.currentValue === null || this.currentValue === '' || this.currentValue.toString() === 'Invalid Date') {
            return null;
        }
        var value = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(this.currentValue, 'MM/dd/yyyy');
        return {
            filterType: 'text',
            type: 'equals',
            filter: value
        };
    };
    CustomDateFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <div class=\"centered\">\n      <input class=\"ag-floating-filter-input datepicker\" matInput [(ngModel)]=\"currentValue\" (dateChange)=\"valueChanged()\" disabled\n        [matDatepicker]=\"filterDatePicker\"  autocomplete=\"off\" (keyup.enter)=\"valueChanged()\" [max]=\"maxDate\" (blur)=\"valueChanged()\" (focus)=\"onFocus()\">\n      <mat-datepicker-toggle matSuffix [for]=\"filterDatePicker\"></mat-datepicker-toggle>\n      <mat-datepicker color=\"accent\" #filterDatePicker disabled=\"false\"></mat-datepicker>\n    </div>    \n  ",
            styles: ["\n    input.datepicker{\n        width: 100% !important;\n        line-height: 30px !important;\n      }      \n    .centered ::ng-deep .mat-button-wrapper {\n      display: flex;\n      justify-content: center;\n    }\n    .centered ::ng-deep .mat-icon-button{\n      width: 30px;\n      height:30px;\n      line-height:30px;\n      position: relative;\n      right: 26px;\n      vertical-align: text-bottom;\n    }    \n    input.datepicker:focus {\n      padding-bottom: 0px !important;\n      border-bottom: none !important;\n    }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomDateFilterComponent);
    return CustomDateFilterComponent;
}());



/***/ }),

/***/ "./src/app/shared/grid/filter/custom-drop-down-filter.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/grid/filter/custom-drop-down-filter.component.ts ***!
  \*************************************************************************/
/*! exports provided: CustomDropDownFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDropDownFilterComponent", function() { return CustomDropDownFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomDropDownFilterComponent = /** @class */ (function () {
    function CustomDropDownFilterComponent() {
        this.optionList = [];
    }
    CustomDropDownFilterComponent.prototype.agInit = function (params) {
        this.params = params;
        this.currentValue = '';
    };
    CustomDropDownFilterComponent.prototype.ngOnInit = function () {
        if (this.params.column.getColId() === 'dealRvwStatus') {
            this.optionList = ['', 'Pending Submit', 'Approved', 'Submitted', 'Denied'];
        }
        else if (this.params.column.getColId() === 'paymentMethod') {
            this.optionList = ['', 'ACH', 'Billing', 'Check'];
        }
    };
    CustomDropDownFilterComponent.prototype.ngAfterViewInit = function () {
        //  this.params.onFloatingFilterChanged({ model: this.buildModel() });
    };
    CustomDropDownFilterComponent.prototype.onSelectionChange = function (val) {
        this.currentValue = val;
        this.params.onFloatingFilterChanged({ model: this.buildModel() });
    };
    CustomDropDownFilterComponent.prototype.onParentModelChanged = function (parentModel) {
        if (!parentModel) {
            this.currentValue = '';
        }
        else {
            this.currentValue = parentModel.filter;
        }
    };
    CustomDropDownFilterComponent.prototype.buildModel = function () {
        if (this.currentValue === '') {
            return null;
        }
        return {
            filterType: 'text',
            type: 'equals',
            filter: this.currentValue,
        };
    };
    CustomDropDownFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "<mat-select placeholder=\"Filter\" [(ngModel)]=\"currentValue\"  (ngModelChange)=\"onSelectionChange($event)\">\n      <mat-option *ngFor=\"let opt of optionList\" [value]='opt'>{{opt}}</mat-option>\n    </mat-select>",
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomDropDownFilterComponent);
    return CustomDropDownFilterComponent;
}());



/***/ }),

/***/ "./src/app/shared/grid/filter/custom-text-filter.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/grid/filter/custom-text-filter.component.ts ***!
  \********************************************************************/
/*! exports provided: CustomTextFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomTextFilterComponent", function() { return CustomTextFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomTextFilterComponent = /** @class */ (function () {
    function CustomTextFilterComponent() {
    }
    CustomTextFilterComponent.prototype.agInit = function (params) {
        this.params = params;
        this.currentValue = '';
    };
    /**
     @name valueChanged- set current value and trigger floating filter change.
     */
    CustomTextFilterComponent.prototype.valueChanged = function () {
        if (this.initialValue !== this.currentValue) {
            this.initialValue = this.currentValue;
            this.params.onFloatingFilterChanged({ model: this.buildModel() });
        }
    };
    CustomTextFilterComponent.prototype.ngAfterViewInit = function () {
        // this.valueChanged();
    };
    /**
      @name onParentModelChanged- set current filter Value
      */
    CustomTextFilterComponent.prototype.onParentModelChanged = function (parentModel) {
        if (!parentModel) {
            this.currentValue = '';
        }
        else {
            this.currentValue = parentModel.filter;
        }
    };
    /**
     @name onFocus- set initialValue value on focus filter text box
     */
    CustomTextFilterComponent.prototype.onFocus = function () {
        this.initialValue = this.currentValue;
    };
    /**
     @name buildModel- set filter model
     */
    CustomTextFilterComponent.prototype.buildModel = function () {
        if (this.currentValue === '') {
            return null;
        }
        return {
            filterType: 'text',
            type: 'equals',
            filter: this.currentValue.trim()
        };
    };
    CustomTextFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <input matInput type=\"text\" autofill=\"false\" class=\"ag-floating-filter-input\" autocomplete=\"off\"\n          [(ngModel)]=\"currentValue\" (keyup.enter)=\"valueChanged()\" (blur)=\"valueChanged()\" (focus)=\"onFocus()\"/>\n  ",
            styles: ["\n    input.ag-floating-filter-input {\n        border-bottom: none !important;\n      }\n    input.ag-floating-filter-input:focus {\n      padding-bottom: 0px !important;\n      border-bottom: none !important;\n    }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomTextFilterComponent);
    return CustomTextFilterComponent;
}());



/***/ }),

/***/ "./src/app/shared/grid/grid-common.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/grid/grid-common.service.ts ***!
  \****************************************************/
/*! exports provided: GridCommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridCommonService", function() { return GridCommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GridCommonService = /** @class */ (function () {
    function GridCommonService() {
    }
    /**
    @name calculateTotalPages-calculation of total pages based on total row count received from service.
    @param rowCtVal - total row count values.
    @param rowsPerPage - number of rows per page.
    */
    GridCommonService.prototype.calculateTotalPages = function (rowCtVal, rowsPerPage) {
        var pages = Math.floor(rowCtVal / rowsPerPage);
        if (rowCtVal % rowsPerPage !== 0) {
            pages += 1;
        }
        return pages;
    };
    /**
    @name calculateCurrentPageSetValues - calculating current set values based on current page.
    @param currentPageValue - current page no value entered by user.
    @param rowsPerPage - number of rows per page.
    */
    GridCommonService.prototype.calculateCurrentPageSetValues = function (currentPageValue, rowsPerPage) {
        var pageSet = {
            start: 1,
            end: rowsPerPage
        };
        pageSet.start = currentPageValue * rowsPerPage + 1;
        pageSet.end = currentPageValue * rowsPerPage + rowsPerPage;
        return pageSet;
    };
    GridCommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GridCommonService);
    return GridCommonService;
}());



/***/ }),

/***/ "./src/app/shared/grid/page-navigate-cell-renderer/page-navigate-cell-renderer.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/shared/grid/page-navigate-cell-renderer/page-navigate-cell-renderer.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: PageNavigateCellRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNavigateCellRendererComponent", function() { return PageNavigateCellRendererComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PageNavigateCellRendererComponent = /** @class */ (function () {
    function PageNavigateCellRendererComponent(router) {
        this.router = router;
    }
    PageNavigateCellRendererComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    PageNavigateCellRendererComponent.prototype.refresh = function () {
        return false;
    };
    PageNavigateCellRendererComponent.prototype.pageNavigate = function () {
        var routePath = this.params.context.componentParent.currentPageRoutePath;
        if (routePath === 'vinSummary/vinSummaryDetails/') {
            this.params.context.componentParent.ispService.setselectedVIN(this.params.value);
            this.params.context.componentParent.ispService.setVSSelectedData(this.params.context.componentParent.vSSearchRequest);
            this.params.context.componentParent.ispService.setVSDTabIndicator(1);
            this.params.context.componentParent.ispService.setFilterSortModel(this.params.context.componentParent.api.getFilterModel(), this.params.context.componentParent.api.getSortModel());
            this.router.navigate([routePath + '/' + this.params.value + '/' + encodeURIComponent(this.params.data.customerName) + '/' + this.params.data.retailDate.split('/').join('~')]);
        }
        else if (routePath === 'paymentByPayment/paymentDetails/') {
            this.params.context.componentParent.ispService.setselectedPayRefNo(this.params.value);
            this.params.context.componentParent.ispService.setPaymentSelectedData(this.params.context.componentParent.paymentSearchRequest);
            this.params.context.componentParent.ispService.setFilterSortModel(this.params.context.componentParent.api.getFilterModel(), this.params.context.componentParent.api.getSortModel());
            this.router.navigate([routePath + '/' + this.params.value]);
        }
        else if (routePath === 'paymentByPayment/vinSummaryDetails/') {
            this.params.context.componentParent.ispService.setVSDTabIndicator(2);
            this.params.context.componentParent.ispService.setSelectedVIN_PayDet(this.params.value);
            this.router.navigate([routePath + '/' + this.params.value + '/' + this.params.data.paymentReferenceNo + '/' + encodeURIComponent(this.params.data.customerName) + '/' + this.params.data.retailDate.split('/').join('~')]);
        }
        else if (routePath === 'paymentByIncentive/vinSummaryDetails/') {
            this.params.context.componentParent.ispService.setVSDTabIndicator(2);
            this.params.context.componentParent.ispService.setSelectedVIN_IncDet(this.params.value);
            this.router.navigate([routePath + '/' + this.params.value + '/' + this.params.data.incentiveTypeName + '/' + this.params.data.incentiveTypeNo + '/' + encodeURIComponent(this.params.data.customerName) + '/' + this.params.data.retailDate.split('/').join('~')]);
        }
        else if (routePath === 'challenges/detail/') {
            this.params.context.componentParent.ispService.setChallengeSelectedData(this.params.context.componentParent.challengeSearchRequest);
            this.params.context.componentParent.ispService.setChallengeSelectedVIN(this.params.data.vin);
            this.params.context.componentParent.ispService.setFilterSortModel(this.params.context.componentParent.api.getFilterModel(), this.params.context.componentParent.api.getSortModel());
            this.router.navigate([routePath + '/' + this.params.value + '/' + this.params.data.challengeNo]);
        }
        else if (routePath === 'dealReviews/detail/') {
            this.params.context.componentParent.ispService.setDealReviewSelectedData(this.params.context.componentParent.dealReviewSearchRequest);
            this.params.context.componentParent.ispService.setDealReviewSelectedVIN(this.params.data.vin);
            this.params.context.componentParent.ispService.setFilterSortModel(this.params.context.componentParent.api.getFilterModel(), this.params.context.componentParent.api.getSortModel());
            this.router.navigate([routePath + '/' + this.params.value + '/' + this.params.data.dealReviewNo]);
        }
        else {
            this.router.navigate([routePath]);
        }
    };
    PageNavigateCellRendererComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-navigate-cell-renderer',
            template: "<a href='javascript:void(0);' (click)='pageNavigate()' style='color: #007bff'> {{params.value}} </a>",
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PageNavigateCellRendererComponent);
    return PageNavigateCellRendererComponent;
}());



/***/ }),

/***/ "./src/app/shared/grid/replace-zero-with-empty-cell-renderer/replace-zero-with-empty-cell-renderer.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/shared/grid/replace-zero-with-empty-cell-renderer/replace-zero-with-empty-cell-renderer.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: ReplaceZeroWithEmptyCellRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceZeroWithEmptyCellRendererComponent", function() { return ReplaceZeroWithEmptyCellRendererComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReplaceZeroWithEmptyCellRendererComponent = /** @class */ (function () {
    function ReplaceZeroWithEmptyCellRendererComponent() {
    }
    // called on init
    ReplaceZeroWithEmptyCellRendererComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    ReplaceZeroWithEmptyCellRendererComponent.prototype.refresh = function () {
        return false;
    };
    ReplaceZeroWithEmptyCellRendererComponent.prototype.processValue = function () {
        if (this.params.value !== 0) {
            return this.params.value;
        }
        else {
            return '';
        }
    };
    ReplaceZeroWithEmptyCellRendererComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-replace-zero-with-empty-cell-renderer',
            template: '{{processValue()}}',
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReplaceZeroWithEmptyCellRendererComponent);
    return ReplaceZeroWithEmptyCellRendererComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-default\">\r\n    <a class=\"navbar-brand px-md-2 mr-md-1\" href=\"#\">\r\n    <span style=\"padding-right: 500px\"></span>\r\n    <span class=\"app_title\">{{'title.Page_Title'\r\n      | translate}}</span></a>\r\n      <span style=\"padding-right: 300px\"></span>\r\n      </div>"

/***/ }),

/***/ "./src/app/shared/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-default {\n  background-image: linear-gradient(to bottom, #fff 0, #fff 100%);\n  background-repeat: repeat-x;\n  /*border-radius: 4px;\r\n    -webkit-border-radius: 4px;\r\n    -moz-border-radius: 4px;\r\n    -webkit-box-shadow: none;*/\n  box-shadow: none;\n  width: 100%;\n  overflow: hidden; }\n\n.navbar-brand {\n  float: left;\n  height: 50px;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px;\n  color: #777; }\n\n.headerChildContainer div {\n  font-size: 1em;\n  color: #474747; }\n\n.headerChildContainer * {\n  vertical-align: middle; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9DOlxcRlNEXFxwb2xpY3ktbWFuYWdlbWVudC9zcmNcXGFwcFxcc2hhcmVkXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFLSSwrREFBK0Q7RUFDL0QsMkJBQTJCO0VBQzNCOzs7OEJDRzBCO0VEQzFCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBSWY7RUFDSSxjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUVsQjtFQUNJLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWRlZmF1bHQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmIDAsICNmZmYgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmIDAsICNmZmYgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmYgMCwgI2ZmZiAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oI2ZmZiksIHRvKCNmZmYpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmYgMCwgI2ZmZiAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuICAgIC8qYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTsqL1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyQ2hpbGRDb250YWluZXIgZGl2eyAgICBcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6ICM0NzQ3NDc7XHJcbn1cclxuLmhlYWRlckNoaWxkQ29udGFpbmVyICp7ICAgIFxyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufSIsIi5uYXZiYXItZGVmYXVsdCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZiAwLCAjZmZmIDEwMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmIDAsICNmZmYgMTAwJSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZiAwLCAjZmZmIDEwMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCNmZmYpLCB0bygjZmZmKSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmYgMCwgI2ZmZiAxMDAlKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAvKmJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7Ki9cbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuLm5hdmJhci1icmFuZCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDE1cHggMTVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICM3Nzc7IH1cblxuLmhlYWRlckNoaWxkQ29udGFpbmVyIGRpdiB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjb2xvcjogIzQ3NDc0NzsgfVxuXG4uaGVhZGVyQ2hpbGRDb250YWluZXIgKiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_isp_app_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/isp-app-config.service */ "./src/app/shared/services/isp-app-config.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_data_sharing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data-sharing.service */ "./src/app/shared/services/data-sharing.service.ts");
/* harmony import */ var _services_user_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user-info.service */ "./src/app/shared/services/user-info.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(ispAppConfigService, dataService, translate, userInfoService, renderer) {
        var _this = this;
        this.ispAppConfigService = ispAppConfigService;
        this.dataService = dataService;
        this.userInfoService = userInfoService;
        this.renderer = renderer;
        this.contextPath = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].context;
        translate.addLangs(['en']);
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
        //this.headerObj = this.ispAppConfigService.getHeaderDetails();
        this.cookiedealerCode = this.ispAppConfigService.getSelectedDealerCode();
        this.region = this.ispAppConfigService.getSelectedRegionName();
        this.dealerName = this.ispAppConfigService.getSelectedDealer();
        this.dealerTheme = this.ispAppConfigService.getSelectedTheme();
        if (this.dealerTheme !== undefined || this.dealerTheme !== null) {
            this.renderer.removeClass(document.body, 'Toyota');
            this.renderer.addClass(document.body, this.dealerTheme);
        }
        this.userInfoService.getUserInfo().subscribe(function (data) {
            _this.dealerEmail = data.emailId;
            _this.dealerDisplayName = data.displayName;
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.currentDealerCode.subscribe(function (value) { return _this.cookiedealerCode = value; });
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_isp_app_config_service__WEBPACK_IMPORTED_MODULE_2__["ISPAppConfigService"], _services_data_sharing_service__WEBPACK_IMPORTED_MODULE_4__["DataSharingService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _services_user_info_service__WEBPACK_IMPORTED_MODULE_5__["UserInfoService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/loader/ip-loader.component.html":
/*!********************************************************!*\
  !*** ./src/app/shared/loader/ip-loader.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div>\r\n        <div id=\"divLoading\" class=\"spinner\" *ngIf=\"show\">\r\n            <div class=\"spinnerText\">{{'labels.Loading' | translate}}</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/shared/loader/ip-loader.component.scss":
/*!********************************************************!*\
  !*** ./src/app/shared/loader/ip-loader.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader-hidden {\n  visibility: hidden; }\n\n.loader-overlay {\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  opacity: 1;\n  z-index: 500000; }\n\n#divLoading.spinner {\n  display: block;\n  position: fixed;\n  z-index: 9999;\n  background-image: url('ajax-loader.gif');\n  background-color: #666;\n  opacity: 0.4;\n  background-repeat: no-repeat;\n  background-position: center;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  top: 0; }\n\n.spinnerText {\n  position: absolute;\n  color: #000;\n  top: 49%;\n  left: 48%;\n  float: left;\n  font-family: arial;\n  font-size: 13px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRlci9DOlxcRlNEXFxwb2xpY3ktbWFuYWdlbWVudC9zcmNcXGFwcFxcc2hhcmVkXFxsb2FkZXJcXGlwLWxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE9BQU87RUFDUCxVQUFVO0VBQ1YsZUFBZSxFQUFBOztBQUduQjtFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHdDQUFrRDtFQUNsRCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRO0VBQ1IsTUFBTSxFQUFBOztBQUlWO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2xvYWRlci9pcC1sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyLWhpZGRlbiB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4ubG9hZGVyLW92ZXJsYXkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHotaW5kZXg6IDUwMDAwMDtcbn1cblxuI2RpdkxvYWRpbmcuc3Bpbm5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9sb2FkZXIvYWpheC1sb2FkZXIuZ2lmJyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuXG59XG5cbi5zcGlubmVyVGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHRvcDogNDklO1xuICAgIGxlZnQ6IDQ4JTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LWZhbWlseTogYXJpYWw7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/loader/ip-loader.component.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/loader/ip-loader.component.ts ***!
  \******************************************************/
/*! exports provided: ipLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ipLoaderComponent", function() { return ipLoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ip_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ip-loader.service */ "./src/app/shared/loader/ip-loader.service.ts");



var ipLoaderComponent = /** @class */ (function () {
    function ipLoaderComponent(loaderService) {
        this.loaderService = loaderService;
        this.show = false;
    }
    ipLoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.loaderService.loaderState
            .subscribe(function (state) {
            _this.show = state.show;
        });
    };
    ipLoaderComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    ipLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ip-loader',
            template: __webpack_require__(/*! ./ip-loader.component.html */ "./src/app/shared/loader/ip-loader.component.html"),
            styles: [__webpack_require__(/*! ./ip-loader.component.scss */ "./src/app/shared/loader/ip-loader.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ip_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])
    ], ipLoaderComponent);
    return ipLoaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/loader/ip-loader.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/loader/ip-loader.service.ts ***!
  \****************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.loaderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loaderState = this.loaderSubject.asObservable();
    }
    LoaderService.prototype.show = function () {
        this.loaderSubject.next({ show: true });
    };
    LoaderService.prototype.hide = function () {
        this.loaderSubject.next({ show: false });
    };
    LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
        /*
        * Service to show and hide loading icon
        */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/shared/message-handler/message-handler.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shared/message-handler/message-handler.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"errorMsg-panel\" *ngIf=\"errorMessage\" style=\"width: auto\">\r\n  <mat-toolbar-row [ngClass]=\"{'message-success':type ==='success',\r\n  'message-error':type === 'error',\r\n  'message-warning':type === 'warning'}\">\r\n    <span class=\"fa fa-times-circle fa-lg\" style=\"cursor: pointer;\" (click)=\"messageService.hideMessage()\"\r\n      matTooltip=\"Close\"></span>\r\n    <div class=\"message-banner col-md-12\">\r\n      <span>\r\n        <div *ngIf='errorMessage.constructor === Array;else stringMessage'>\r\n          <ul>\r\n            <li *ngFor=\"let message of errorMessage\">\r\n              {{message}}\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <ng-template #stringMessage>\r\n          {{errorMessage}}\r\n        </ng-template>\r\n      </span>\r\n    </div>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/shared/message-handler/message-handler.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/shared/message-handler/message-handler.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".errorMsg-panel {\n  margin: 10px;\n  font-size: 12px; }\n  .errorMsg-panel .ip-mat-icon {\n    font-size: 12px !important;\n    height: 12px !important;\n    width: 12px !important;\n    cursor: pointer; }\n  .errorMsg-panel .mat-toolbar-row.message-error {\n    background-color: #f3d09e;\n    color: #ff0000;\n    border: 1px solid #fe0000;\n    border-radius: 4px; }\n  .errorMsg-panel .mat-toolbar-row.message-success {\n    background-image: linear-gradient(to bottom, #dff0d8 0, #c8e5bc 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffdff0d8', endColorstr='#ffc8e5bc', GradientType=0);\n    background-repeat: repeat-x;\n    border: 1px solid #b2dba1;\n    color: #3c763d;\n    background-color: #dff0d8;\n    border-radius: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21lc3NhZ2UtaGFuZGxlci9DOlxcRlNEXFxwb2xpY3ktbWFuYWdlbWVudC9zcmNcXGFwcFxcc2hhcmVkXFxtZXNzYWdlLWhhbmRsZXJcXG1lc3NhZ2UtaGFuZGxlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixlQUFlLEVBQUE7RUFGakI7SUFJSSwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixlQUFlLEVBQUE7RUFQbkI7SUFVSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0IsRUFBQTtFQWJ0QjtJQW1CSSxxRUFBcUU7SUFDckUsc0hBQXNIO0lBQ3RILDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tZXNzYWdlLWhhbmRsZXIvbWVzc2FnZS1oYW5kbGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yTXNnLXBhbmVsIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIC5pcC1tYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEycHggIWltcG9ydGFudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLm1hdC10b29sYmFyLXJvdy5tZXNzYWdlLWVycm9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2QwOWU7XHJcbiAgICBjb2xvcjogI2ZmMDAwMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZTAwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG4gIC5tYXQtdG9vbGJhci1yb3cubWVzc2FnZS1zdWNjZXNzIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2RmZjBkOCAwLCAjYzhlNWJjIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgI2RmZjBkOCAwLCAjYzhlNWJjIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjZGZmMGQ4KSwgdG8oI2M4ZTViYykpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2RmZjBkOCAwLCAjYzhlNWJjIDEwMCUpO1xyXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI2ZmZGZmMGQ4JywgZW5kQ29sb3JzdHI9JyNmZmM4ZTViYycsIEdyYWRpZW50VHlwZT0wKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiMmRiYTE7XHJcbiAgICBjb2xvcjogIzNjNzYzZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmYwZDg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/message-handler/message-handler.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/message-handler/message-handler.component.ts ***!
  \*********************************************************************/
/*! exports provided: MessageHandlerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageHandlerComponent", function() { return MessageHandlerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message-handler.service */ "./src/app/shared/message-handler/message-handler.service.ts");



var MessageHandlerComponent = /** @class */ (function () {
    function MessageHandlerComponent(messageService, zone) {
        this.messageService = messageService;
        this.zone = zone;
        this.errorMessage = '';
        this.type = '';
    }
    MessageHandlerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.messageService.MessageState
            .subscribe(function (state) {
            _this.zone.run(function () {
                _this.errorMessage = state.message;
                _this.type = state.messageType;
            });
        });
    };
    MessageHandlerComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    MessageHandlerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message-handler',
            template: __webpack_require__(/*! ./message-handler.component.html */ "./src/app/shared/message-handler/message-handler.component.html"),
            styles: [__webpack_require__(/*! ./message-handler.component.scss */ "./src/app/shared/message-handler/message-handler.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_message_handler_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], MessageHandlerComponent);
    return MessageHandlerComponent;
}());



/***/ }),

/***/ "./src/app/shared/message-handler/message-handler.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/message-handler/message-handler.service.ts ***!
  \*******************************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var MessageService = /** @class */ (function () {
    /**
     * @class NapoMessageService
     * @constructor
     */
    function MessageService() {
        this.messageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.MessageState = this.messageSubject.asObservable();
    }
    /** For passing message and message type to component
     * @class NapoMessageService
     * @method showMessage
     * @param response
     * @param type
     */
    MessageService.prototype.showMessage = function (response, type) {
        this.messageSubject.next({ message: response, messageType: type });
    };
    /** For passing blank message to indicate hiding of message
     * @class NapoMessageService
     * @method hideMessage
     */
    MessageService.prototype.hideMessage = function () {
        this.messageSubject.next({ message: '' });
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
        /*
        * Service to show and hide messages from service
        */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/shared/services/data-sharing.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/data-sharing.service.ts ***!
  \*********************************************************/
/*! exports provided: DataSharingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSharingService", function() { return DataSharingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_isp_app_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/isp-app-config.service */ "./src/app/shared/services/isp-app-config.service.ts");




var DataSharingService = /** @class */ (function () {
    function DataSharingService(ispAppConfigService) {
        this.ispAppConfigService = ispAppConfigService;
        this.dealerCode = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.ispAppConfigService.getSelectedDealerCode());
        this.currentDealerCode = this.dealerCode.asObservable();
    }
    DataSharingService.prototype.changeMessage = function (message) {
        this.dealerCode.next(message);
    };
    DataSharingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_isp_app_config_service__WEBPACK_IMPORTED_MODULE_3__["ISPAppConfigService"]])
    ], DataSharingService);
    return DataSharingService;
}());



/***/ }),

/***/ "./src/app/shared/services/isp-app-config.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/isp-app-config.service.ts ***!
  \***********************************************************/
/*! exports provided: ISPAppConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ISPAppConfigService", function() { return ISPAppConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var ISPAppConfigService = /** @class */ (function () {
    function ISPAppConfigService(http) {
        this.http = http;
        this.contextPath = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].context;
        this.selectedTheme = 'Toyota';
    }
    ISPAppConfigService.prototype.getSelectedDealerCode = function () {
        return this.selectedDealerCode;
    };
    ISPAppConfigService.prototype.setSelectedDealerCode = function (value) {
        this.selectedDealerCode = value;
    };
    ISPAppConfigService.prototype.getSelectedTheme = function () {
        return this.selectedTheme;
    };
    ISPAppConfigService.prototype.setSelectedTheme = function (value) {
        this.selectedTheme = value;
    };
    ISPAppConfigService.prototype.getSelectedRegionName = function () {
        return this.selectedRegionName;
    };
    ISPAppConfigService.prototype.setSelectedRegionName = function (value) {
        this.selectedRegionName = value;
    };
    ISPAppConfigService.prototype.getSelectedDealer = function () {
        return this.selectedDealer;
    };
    ISPAppConfigService.prototype.setSelectedDealer = function (value) {
        this.selectedDealer = value;
    };
    ISPAppConfigService.prototype.getHeaderDetails = function () {
        return this.headerDetails;
    };
    ISPAppConfigService.prototype.setHeaderDetails = function (notificationDetails) {
        this.headerDetails = notificationDetails;
    };
    ISPAppConfigService.prototype.cookieChunk = function (cookieData, preString, postString) {
        var dealerSubStr = [];
        var preIndex = cookieData.indexOf(preString);
        var searchIndex = cookieData.substring(preIndex).indexOf(postString);
        dealerSubStr = cookieData.substr(preIndex, searchIndex).split('=');
        return dealerSubStr;
    };
    ISPAppConfigService.prototype.loadcookieData = function () {
        // const cookieData = 'JSESSIONID=7ClTeunvOiHC2IGGfw-4srMoyHneyMi3jNY6gI8l.iplusisp-node2-live-server-1; DealerDaily=SelectedUserName=138429&SelectedUserLastVisit=&SelectedUserFirstName=Subramanian&SelectedUserLastName=Thangavelu&SelectedDepotCode=08&SelectedDealer=15056&SelectedDealerName=SEWELL+LEXUS&SelectedMake=Lexus&SelectedDistrict=1&SelectedRegion=34&SelectedRegionAbbr=SOU&SelectedRegionName=LEXUS+SOUTHERN+AREA&SelectedUserLanguage=en&SelectedTheme=Lexus&SelectedDealerType=TMS&CP2URL=&SelectedEmailSubDomain=sewell-lexus-64204.dlrmail.com&SelectedUserNameSpace=DD&SessionLoginTime=07%2f09%2f2019+02%3a55%3a37+AM&UserHasMailBoxAccess=&UISelectedUserId=&SelectedUserAccountType=IT+Support+Admin; OAMAuthnCookie_iplus-isp-qaps.lexus.com:80=y5f1%2B%2BGoC8HvMxZcsLsVgLkfRaTpUiX6ES%2BL%2BLOWnV0bxAEWP7fZlNUEi1JEmMeTS%2FWtEhOxqWcPqsFpvAR2Xh%2FuyemtB8W9u62oCZ01bOMIG7mYiI2MnOMJWQR%2Fs9J%2BXBbtmNddzElt%2BnKQSprArOFAmBcn80%2FSfEqN1dkSnvhh8Ek0OrhCNXa5yN88o1wCeCFgxxxmJN9qWYDza5VgiSxBC8ZBugkiYlvahtDo%2BlrJvFIWhQ0FEx7%2F3FzBV%2FKo9dFqgtajpmzZABcSSHiNXtC7p0vCDlJ0VSBQuOXQ9MnAyeyRjmzNqt7BKYu3oOJwnvKb4ZGgnZcfNT56f2b%2BS9a%2FxA9a1ALJZylpI2qZfVJQJPOxWoKpXGW9EBlhgHu1Ghd3thz%2F%2FUG39kfwzWrJH%2FzcZSd%2Fuq8Es54rAScWoNOOrNfStFnLBiKJu3vy6hH6cqx%2Fz%2BwquwX9T%2BvElmbZ%2FQ%3D%3D';
        // const cookieData = 'smlanguage=en; ObSSOCookie=loggedoutcontinue; ddlanguage=en; dd_username_remember=138429; DDAuthCookie=pCp/4ee100c=; DealerDaily=SelectedUserName=138429&SelectedUserLastVisit=&SelectedUserFirstName=Subramanian&SelectedUserLastName=Thangavelu&SelectedDepotCode=23&SelectedDealer=15056&SelectedDealerName=SEEGER+TOYOTA&SelectedMake=Toyota&SelectedDistrict=2&SelectedRegion=23&SelectedRegionAbbr=KC&SelectedRegionName=KANSAS+CITY+REGION&SelectedUserLanguage=en&SelectedTheme=Toyota&SelectedDealerType=TMS&CP2URL=&SelectedEmailSubDomain=seeger-toyota-24022.dlrmail.com&SelectedUserNameSpace=DD&SessionLoginTime=04%2f26%2f2019+03%3a56%3a00+AM&UserHasMailBoxAccess=&UISelectedUserId=&SelectedUserAccountType=IT+Support+Admin';
        var cookieData = document.cookie;
        var preString = "SelectedDealer=";
        var preStringDealerName = "SelectedDealerName=";
        var preStringDealerRegionName = "SelectedRegionName";
        var postString = "&";
        var cookieArr = this.cookieChunk(cookieData, preString, postString);
        if (cookieArr.length && cookieArr[0] !== '') {
            this.setSelectedDealer(this.cookieChunk(cookieData, preStringDealerName, postString)[1]);
            this.setSelectedDealer(decodeURIComponent(this.removePlusSymbol(this.getSelectedDealer())));
            this.setSelectedRegionName(this.cookieChunk(cookieData, preStringDealerRegionName, postString)[1]);
            this.setSelectedRegionName(decodeURIComponent(this.removePlusSymbol(this.getSelectedRegionName())));
            if (location.host.indexOf('lexus.com') > 0) {
                this.setSelectedTheme('Lexus');
            }
            this.setSelectedDealerCode(cookieArr[1]);
            //return cookieArr[1];    
        }
    };
    ISPAppConfigService.prototype.removePlusSymbol = function (str) {
        if (str.indexOf('+') > 0) {
            return str.replace(new RegExp('\\+', 'g'), ' ');
        }
        return str;
    };
    ISPAppConfigService.prototype.load = function () {
        var _this = this;
        var URL = this.contextPath + "/notification/getNotification/";
        this.loadcookieData();
        var dealerCode = this.getSelectedDealerCode();
        this.setHeaderDetails({ dealerCode: '', challengeNew: 0, dealReviewNew: 0 });
        this.headerDetails['dealerCode'] = dealerCode;
        this.http
            .get("" + URL + dealerCode)
            .subscribe(function (response) {
            _this.setHeaderDetails(response);
        }, function (error) {
            console.log('error:', error);
        });
        /*
        return new Promise((resolve, reject) => {
          this.http
            .get(`${URL}${dealerCode}`)
            .subscribe((response: IHeader) => {
              this.headerDetails = response;
              resolve(true);
            },
              error => {
                console.log('error:', error);
              }
            )
          })  */
    };
    ISPAppConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ISPAppConfigService);
    return ISPAppConfigService;
}());



/***/ }),

/***/ "./src/app/shared/services/isp-csv-service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/isp-csv-service.ts ***!
  \****************************************************/
/*! exports provided: CsvExportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvExportService", function() { return CsvExportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! exceljs/dist/exceljs.min.js */ "./node_modules/exceljs/dist/exceljs.min.js");
/* harmony import */ var exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isp-excel-report */ "./src/app/shared/services/isp-excel-report.ts");





var CSV_TYPE = 'text/csv;charset=utf-8';
var CSV_EXTENSION = '.csv';
var CsvExportService = /** @class */ (function () {
    function CsvExportService() {
    }
    CsvExportService.prototype.generateCsv = function (header, json, excelFileName, reportName) {
        var options = {
            filename: './Vin-Summary.csv',
            useStyles: true,
            useSharedStrings: true
        };
        var workbook = new exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_2__["Workbook"](options);
        var worksheet = workbook.addWorksheet(excelFileName);
        // worksheet.properties.defaultRowHeight = 25; //setting to default height because of uneven height
        var reportHeaderStyle;
        var currentRow;
        var totalColumns;
        if (reportName == "vinSummary") {
            totalColumns = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderForVinSummary"].length;
            this.generateReportHeader(worksheet, header, _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderForVinSummary"]);
            reportHeaderStyle = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderStyleForVinSummary"];
        }
        else if (reportName == "paymentStatus") {
            totalColumns = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderForPaymentType"].length;
            this.generateReportHeader(worksheet, header, _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderForPaymentType"]);
            reportHeaderStyle = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderStyleForPaymentStatus"];
        }
        else if (reportName == "incentiveStatus") {
            totalColumns = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderForIncentiveType"].length;
            this.generateReportHeader(worksheet, header, _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderForIncentiveType"]);
            reportHeaderStyle = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderStyleForIncentiveStatus"];
        }
        else if (reportName == "paymentByMethod") {
            totalColumns = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderStyleForPaymentByMethod"].length;
            this.generateReportHeader(worksheet, header, _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderForPaymentByMethod"]);
            reportHeaderStyle = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderStyleForPaymentByMethod"];
        }
        else if (reportName == 'paymentByIncentiveType') {
            totalColumns = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderStyleForPaymentByIncType"].length;
            this.generateReportHeader(worksheet, header, _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderForPaymentByIncType"]);
            reportHeaderStyle = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderStyleForPaymentByIncType"];
        }
        else if (reportName == 'PaymentByPaymentMethodDetails') {
            totalColumns = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderStyleForPaymentByMethodDetails"].length;
            this.generateReportHeader(worksheet, header, _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderForPaymentByMethodDetail"]);
            reportHeaderStyle = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderStyleForPaymentByMethodDetails"];
        }
        else if (reportName == 'paymentByIncentiveTypeDetails') {
            totalColumns = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderStyleForPaymentByIncTypeDetails"].length;
            this.generateReportHeader(worksheet, header, _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderForPaymentByIncDetails"]);
            reportHeaderStyle = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderStyleForPaymentByIncTypeDetails"];
        }
        else if (reportName == 'ChallengeSummary') {
            totalColumns = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderForChallengeSearchDetails"].length;
            this.generateReportHeader(worksheet, header, _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderForChallengeSearchDetails"]);
            reportHeaderStyle = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportStyleForChallengeSearch"];
        }
        else if (reportName == 'DealReviewSummary') {
            totalColumns = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderForDealReviewSearchDetails"].length;
            this.generateReportHeader(worksheet, header, _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderForDealReviewSearchDetails"]);
            reportHeaderStyle = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportStyleForDealReviewSearch"];
        }
        worksheet.columns = reportHeaderStyle;
        var rowNum = this.currentRow;
        json.forEach(function (element) {
            worksheet.addRow(element);
            var reportData = worksheet.getRow(rowNum);
            for (var i = 1; i < (totalColumns) + 1; i++) {
                reportData.getCell(i).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            }
            rowNum = rowNum + 1;
        });
        this.reportDetailFormat(worksheet, reportName);
        var excelBuffer = workbook.xlsx.writeBuffer();
        this.saveAsCSVFile(excelBuffer, excelFileName, workbook);
    };
    CsvExportService.prototype.generateReportHeader = function (worksheet, header, reportHeader) {
        var rowNumber = 1;
        header.forEach(function (row) {
            worksheet.addRow(row);
            var reportHeaderRow = worksheet.getRow(rowNumber);
            reportHeaderRow.getCell(1).font = { name: 'Arial', size: 10, bold: true };
            reportHeaderRow.getCell(2).font = { name: 'Arial', size: 10, bold: false };
            //worksheet.getRow(rowNumber).width = 45; 
            rowNumber++;
        });
        this.reportHeaderFormat(worksheet, reportHeader, rowNumber);
    };
    CsvExportService.prototype.reportHeaderFormat = function (worksheet, reportHeader, row) {
        worksheet.getRow(row).values = reportHeader;
        var reportHeaderfill = worksheet.getRow(row);
        for (var i = 1; i < (reportHeader.length) + 1; i++) {
            reportHeaderfill.getCell(i).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFc0c0c0' },
                bgColor: { argb: 'FF0000FF' },
            };
            reportHeaderfill.getCell(i).border = { top: { style: 'thick' }, left: { style: 'thick' }, bottom: { style: 'thick' }, right: { style: 'thick' } };
            reportHeaderfill.getCell(i).font = { name: 'Arial', size: 10, bold: true };
        }
        this.currentRow = row + 1;
    };
    CsvExportService.prototype.getCurrentDate = function () {
        var currentdate = new Date();
        var day = currentdate.getDate() < 10 ? "0" + currentdate.getDate() : currentdate.getDate();
        var month = currentdate.getMonth() + 1 < 10 ? "0" + (currentdate.getMonth() + 1) : (currentdate.getMonth() + 1);
        var datetime = "as on " + month + "/" + day + "/" + currentdate.getFullYear() + "  "
            + currentdate.getHours() + ":" + currentdate.getMinutes();
        return datetime;
    };
    CsvExportService.prototype.reportDetailFormat = function (worksheet, reportName) {
        worksheet.getRow(1).values = ' ';
        if (reportName == "vinSummary") {
            worksheet.getColumn(15).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(16).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
        }
        else if (reportName == "paymentStatus") {
            worksheet.getColumn(22).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(23).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(24).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(25).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(26).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
        }
        else if (reportName == "incentiveStatus") {
            worksheet.getColumn(24).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(25).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
        }
        else if (reportName == "paymentByMethod") {
            worksheet.getColumn(4).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
        }
        else if (reportName == 'PaymentByPaymentMethodDetails') {
            worksheet.getColumn(4).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(11).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(12).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(13).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(14).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
        }
        else if (reportName == 'paymentByIncentiveType') {
            worksheet.getColumn(8).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(9).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(10).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(11).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(12).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(13).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
        }
        else if (reportName == 'paymentByIncentiveTypeDetails') {
            worksheet.getColumn(15).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(16).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(17).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(18).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(19).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
        }
        else if (reportName == 'ChallengeSummary') {
            worksheet.getColumn(16).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
        }
    };
    CsvExportService.prototype.saveAsCSVFile = function (buffer, fileName, workbook) {
        workbook.xlsx.writeBuffer()
            .then(function (buffer) {
            // done buffering
            var data = new Blob([buffer], { type: CSV_TYPE });
            file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"](data, fileName + CSV_EXTENSION);
        });
    };
    CsvExportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CsvExportService);
    return CsvExportService;
}());



/***/ }),

/***/ "./src/app/shared/services/isp-excel-report.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/isp-excel-report.ts ***!
  \*****************************************************/
/*! exports provided: reportHeaderStyleForVinSummary, reportHeaderForVinSummary, reportHeaderStyleForPaymentStatus, reportHeaderForPaymentType, reportHeaderStyleForIncentiveStatus, reportHeaderForIncentiveType, reportHeaderStyleForPaymentByMethod, reportHeaderForPaymentByMethod, reportHeaderStyleForPaymentByMethodDetails, reportHeaderForPaymentByMethodDetail, reportHeaderStyleForPaymentByIncType, reportHeaderForPaymentByIncType, reportHeaderStyleForPaymentByIncTypeDetails, reportHeaderForPaymentByIncDetails, reportStyleForChallengeSearch, reportHeaderForChallengeSearchDetails, reportHeaderForDealReviewSearchDetails, reportStyleForDealReviewSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportHeaderStyleForVinSummary", function() { return reportHeaderStyleForVinSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportHeaderForVinSummary", function() { return reportHeaderForVinSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportHeaderStyleForPaymentStatus", function() { return reportHeaderStyleForPaymentStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportHeaderForPaymentType", function() { return reportHeaderForPaymentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportHeaderStyleForIncentiveStatus", function() { return reportHeaderStyleForIncentiveStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportHeaderForIncentiveType", function() { return reportHeaderForIncentiveType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportHeaderStyleForPaymentByMethod", function() { return reportHeaderStyleForPaymentByMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportHeaderForPaymentByMethod", function() { return reportHeaderForPaymentByMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportHeaderStyleForPaymentByMethodDetails", function() { return reportHeaderStyleForPaymentByMethodDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportHeaderForPaymentByMethodDetail", function() { return reportHeaderForPaymentByMethodDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportHeaderStyleForPaymentByIncType", function() { return reportHeaderStyleForPaymentByIncType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportHeaderForPaymentByIncType", function() { return reportHeaderForPaymentByIncType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportHeaderStyleForPaymentByIncTypeDetails", function() { return reportHeaderStyleForPaymentByIncTypeDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportHeaderForPaymentByIncDetails", function() { return reportHeaderForPaymentByIncDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportStyleForChallengeSearch", function() { return reportStyleForChallengeSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportHeaderForChallengeSearchDetails", function() { return reportHeaderForChallengeSearchDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportHeaderForDealReviewSearchDetails", function() { return reportHeaderForDealReviewSearchDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportStyleForDealReviewSearch", function() { return reportStyleForDealReviewSearch; });
var reportHeaderStyleForVinSummary = [{
        "key": "vin",
        "header": "VIN",
        "type": "TEXT",
        "width": 20,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "modelNo",
        "header": "Model No.",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "serialNo",
        "header": "Serial No.",
        "type": "TEXT",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "series",
        "header": "Series",
        "type": "TEXT",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "modelYear",
        "header": "Model Year",
        "type": "TEXT",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "brand",
        "header": "Brand",
        "type": "TEXT",
        "width": 8,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "customerName",
        "header": "Customer Name",
        "width": 20,
        "style": { font: { name: 'Arial', size: 10, bold: false } },
        "type": "TEXT",
    }, {
        "key": "retailDate",
        "header": "Retail Date",
        "type": "DATE",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "rdrDate",
        "header": "RDR Date",
        "type": "DATE",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "dealRvwStatus",
        "header": "Deal Review Status",
        "type": "TEXT",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "challengeSubmitted",
        "header": "Challenge Submitted",
        "type": "TEXT",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "iaStatus",
        "header": "Incentive Application Status",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "contractStatus",
        "header": "Contract Status",
        "type": "TEXT",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "rdrStatus",
        "header": "RDR Status",
        "type": "TEXT",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "appliedAmt",
        "header": "Applied For Amount",
        "type": "TEXT",
        "width": 10,
        "style": { font: { name: 'Arial' } }
    }, {
        "key": "netPaidAmt",
        "header": "Net Paid Amount",
        "type": "TEXT",
        "width": 11,
        "style": { font: { name: 'Arial' } }
    }];
var reportHeaderForVinSummary = ['VIN', 'Model No.', 'Serial No.',
    'Series', 'Model Year', 'Brand', 'Customer Name', 'Retail Date', 'RDR Date',
    'Deal Review Status', 'Challenge Submitted', 'Incentive Application Status', 'Contract Status', 'RDR Status', 'Applied For Amount', 'Net Paid Amount'];
var reportHeaderStyleForPaymentStatus = [
    {
        "key": "modelNo",
        "header": "Model No.",
        "type": "TEXT",
        "width": 25,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "serialNo",
        "header": "Serial No.",
        "type": "TEXT",
        "width": 20,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "modelYear",
        "header": "Model Year",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "series",
        "header": "Series",
        "type": "TEXT",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "customerName",
        "header": "Customer Name",
        "width": 20,
        "style": { font: { name: 'Arial', size: 10, bold: false } },
        "type": "TEXT",
    }, {
        "key": "retailDate",
        "header": "Retail Date",
        "type": "DATE",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "rdrDate",
        "header": "RDR Date",
        "type": "DATE",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "typeSalesCode",
        "header": "Type Sales Code",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "dealRvwStatus",
        "header": "Deal Review Status",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "iaStatus",
        "header": "Incentive Application Status",
        "type": "TEXT",
        "width": 20,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "contractStatus",
        "header": "Contract Status",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "rdrStatus",
        "header": "RDR Status",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "incentiveMonthYear",
        "header": "Incentive Month Year",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "category",
        "header": "Category",
        "type": "TEXT",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "brand",
        "header": "Brand",
        "type": "TEXT",
        "width": 8,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "optionType",
        "header": "Option Type",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "incentiveTypeName",
        "header": "Incentive Type Name",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "incentiveTypeNo",
        "header": "Incentive Type No",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "paymentReferenceNo",
        "header": "Payment Reference No",
        "type": "TEXT",
        "width": 20,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "paymentMethod",
        "header": "Payment Method",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "paidDate",
        "header": "Paid Date",
        "type": "DATE",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "appliedAmt",
        "header": "Applied Amount",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial' } }
    }, {
        "key": "paidAmt",
        "header": "Paid Amount",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial' } }
    },
    {
        "key": "pendingAmt",
        "header": "Pending Amount",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial' } }
    },
    {
        "key": "chargebackAmount",
        "header": "Chargeback Amount",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial' } }
    },
    {
        "key": "deniedAmount",
        "header": "Denied Amount",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial' } }
    },
    {
        "key": "transactionDescription",
        "header": "Transaction Description",
        "type": "TEXT",
        "width": 20,
        "style": { font: { name: 'Arial' } }
    }
];
var reportHeaderForPaymentType = ['Model No.', 'Serial No.',
    'Model Year', 'Series', 'Customer Name', 'Retail Date', 'RDR Date', 'Type Sales Code',
    'Deal Review Status', 'Incentive Application Status',
    'Contract Status', 'RDR Status', 'Incentive Month Year', 'Category',
    'Brand', 'Option Type', 'Incentive Type Name', 'Incentive Type No.', 'Payment Reference No.', 'Payment Method',
    'Paid Date', 'Applied Amount', 'Paid Amount', 'Pending Amount', 'Chargeback Amount', 'Denied Amount',
    'Transaction Description'];
var reportHeaderStyleForIncentiveStatus = [
    {
        "key": "modelNo",
        "header": "Model No.",
        "type": "TEXT",
        "width": 25,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "serialNo",
        "header": "Serial No.",
        "type": "TEXT",
        "width": 20,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "modelYear",
        "header": "Model Year",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "series",
        "header": "Series",
        "type": "TEXT",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "customerName",
        "header": "Customer Name",
        "width": 20,
        "style": { font: { name: 'Arial', size: 10, bold: false } },
        "type": "TEXT",
    }, {
        "key": "retailDate",
        "header": "Retail Date",
        "type": "DATE",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "rdrDate",
        "header": "RDR Date",
        "type": "DATE",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "typeSalesCode",
        "header": "Type Sales Code",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "dealRvwStatus",
        "header": "Deal Review Status",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "iaStatus",
        "header": "Incentive Application Status",
        "type": "TEXT",
        "width": 20,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "contractStatus",
        "header": "Contract Status",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "rdrStatus",
        "header": "RDR Status",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "incentiveMonthYear",
        "header": "Incentive Month Year",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "category",
        "header": "Category",
        "type": "TEXT",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "brand",
        "header": "Brand",
        "type": "TEXT",
        "width": 8,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "optionType",
        "header": "Option Type",
        "type": "TEXT",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "incentiveTypeName",
        "header": "Incentive Type Name",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "incentiveTypeNo",
        "header": "Incentive Type No",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "iaReceivedDate",
        "header": "IA Received Date",
        "type": "Date",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "statusDate",
        "header": "Status Date",
        "type": "Date",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "incentiveStatus",
        "header": "Incentive Status",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "dealReviewDisposition",
        "header": "Deal Review Disposition",
        "type": "TEXT",
        "width": 20,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "reasonCode",
        "header": "Reason Code",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "reasonDescription",
        "header": "Reason Description",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "appliedAmt",
        "header": "Applied Amount",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial' } }
    }, {
        "key": "netPaidAmt",
        "header": "Paid Amount",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial' } }
    },
    {
        "key": "currentOwner",
        "header": "Current Owner",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial' } }
    },
    {
        "key": "challengeSubmitted",
        "header": "Challenge Submitted",
        "type": "TEXT",
        "width": 20,
        "style": { font: { name: 'Arial' } }
    },
    {
        "key": "challengeDisposition",
        "header": "Challenge Disposition",
        "type": "TEXT",
        "width": 20,
        "style": { font: { name: 'Arial' } }
    }
];
var reportHeaderForIncentiveType = ['Model No.', 'Serial No.',
    'Model Year', 'Series', 'Customer Name', 'Retail Date', 'RDR Date', 'Type Sales Code',
    'Deal Review Status', 'Incentive Application Status',
    'Contract Status', 'RDR Status', 'Incentive Month Year', 'Category',
    'Brand', 'Option Type', 'Incentive Type Name', 'Incentive Type No.', 'IA Received Date',
    'Status Date', 'Incentive Status', 'Deal Review Disposition', 'Reason Code', 'Reason Description',
    'Applied Amount', 'Net Paid Amount', 'Current Owner', 'Challenge Submitted', 'Challenge Disposition'
];
var reportHeaderStyleForPaymentByMethod = [
    {
        "key": "paymentReferenceNo",
        "header": "Payment Reference No",
        "type": "TEXT",
        "width": 30,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "paymentMethod",
        "header": "Payment Method",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "paidDate",
        "header": "Paid Date",
        "type": "DATE",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "totalPaidAmt",
        "header": "Total Paid Amount",
        "type": "TEXT",
        "width": 17,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }
];
var reportHeaderForPaymentByMethod = ['Payment Reference No.', 'Payment Method',
    'Paid Date', 'Total Paid Amount'];
var reportHeaderStyleForPaymentByMethodDetails = [
    {
        "key": "paymentReferenceNo",
        "header": "Payment Reference No",
        "type": "TEXT",
        "width": 60,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "paymentMethod",
        "header": "Payment Method",
        "type": "TEXT",
        "width": 20,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "paidDate",
        "header": "Paid Date",
        "type": "DATE",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "totalPaidAmt",
        "header": "Net Total Amount",
        "type": "TEXT",
        "width": 20,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "vin",
        "header": "Vin Number",
        "type": "TEXT",
        "width": 22,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "modelNo",
        "header": "Model No.",
        "type": "TEXT",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "serialNo",
        "header": "Serial No.",
        "type": "TEXT",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "series",
        "header": "Series",
        "type": "TEXT",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "modelYear",
        "header": "Model Year",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "brand",
        "header": "Brand",
        "type": "TEXT",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "eligibleAmount",
        "header": "Eligible Amount",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "appliedAmt",
        "header": "Applied For Amount",
        "type": "TEXT",
        "width": 20,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "paidAmt",
        "header": "Paid Amount",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "chargebackAmount",
        "header": "Chargeback Amount",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "transactionDescription",
        "header": "Transaction Description",
        "type": "TEXT",
        "width": 20,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "customerName",
        "header": "Customer Name",
        "type": "TEXT",
        "width": 25,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "retailDate",
        "header": "Retail Date",
        "type": "DATE",
        "width": 12,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "rdrDate",
        "header": "Rdr Date",
        "type": "DATE",
        "width": 12,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "incentiveMonthYear",
        "header": "Incentive Month - Year",
        "type": "TEXT",
        "width": 22,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "optionType",
        "header": "Option Type",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "incentiveTypeName",
        "header": "Incentive Type Name",
        "type": "TEXT",
        "width": 22,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "incentiveTypeNo",
        "header": "Incentive Type Number",
        "type": "TEXT",
        "width": 20,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "category",
        "header": "Category",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }
];
var reportHeaderForPaymentByMethodDetail = ['Payment Reference Number', 'Payment Method',
    'Paid Date', 'Net Total Amount', 'Vin Number', 'Model No.', 'Serial No.', 'Series', 'Model Year',
    'Brand', 'Eligible Amount', 'Applied For Amount', 'Paid Amount', 'Chargeback Amount',
    'Transaction Description', 'Customer Name', 'Retail Date', 'Rdr Date', 'Incentive Month - Year',
    'Option Type', 'Incentive Type Name', 'Incentive Type Number', 'Category'];
var reportHeaderStyleForPaymentByIncType = [
    {
        "key": "incentiveTypeNo",
        "header": "Incentive Type No",
        "type": "TEXT",
        "width": 25,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }, {
        "key": "optionType",
        "header": "Option Type",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "incentiveTypeName",
        "header": "Incentive Type Name",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "category",
        "header": "Category",
        "type": "TEXT",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "series",
        "header": "Series",
        "type": "TEXT",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "incentiveStartDate",
        "header": "Incentive Start Date",
        "type": "DATE",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "incentiveEndDate",
        "header": "Incentive End Date",
        "type": "DATE",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "appliedAmt",
        "header": "Applied For Amount",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial' } }
    }, {
        "key": "paidAmt",
        "header": "Paid Amount",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial' } }
    },
    {
        "key": "pendingAmount",
        "header": "Pending Amount",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial' } }
    },
    {
        "key": "chargebackAmount",
        "header": "Chargeback Amount",
        "type": "TEXT",
        "width": 25,
        "style": { font: { name: 'Arial' } }
    },
    {
        "key": "deniedAmount",
        "header": "Denied Amount",
        "type": "TEXT",
        "width": 25,
        "style": { font: { name: 'Arial' } }
    },
    {
        "key": "netPaidAmt",
        "header": "Net Paid Amount",
        "type": "TEXT",
        "width": 25,
        "style": { font: { name: 'Arial' } }
    }
];
var reportHeaderForPaymentByIncType = ['Incentive Type No.', 'Option Type', 'Incentive Type Name', 'Category', 'Series',
    'Incentive Start Date', 'Incentive End Date', 'Applied For Amount', 'Paid Amount', 'Pending Amount', 'Chargeback Amount', 'Denied Amount',
    'Net Paid Amount'];
var reportHeaderStyleForPaymentByIncTypeDetails = [
    {
        "key": "optionType",
        "header": "Option Type",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "incentiveTypeName",
        "header": "Incentive Type Name",
        "type": "TEXT",
        "width": 22,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "incentiveTypeNo",
        "header": "Incentive Type No.",
        "type": "TEXT",
        "width": 20,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "category",
        "header": "Category",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "vin",
        "header": "Vin Number",
        "type": "TEXT",
        "width": 22,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "modelNo",
        "header": "Model No.",
        "type": "TEXT",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "serialNo",
        "header": "Serial No.",
        "type": "TEXT",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "series",
        "header": "Series",
        "type": "TEXT",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "modelYear",
        "header": "Model Year",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "brand",
        "header": "Brand",
        "type": "TEXT",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "customerName",
        "header": "Customer Name",
        "type": "TEXT",
        "width": 25,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "retailDate",
        "header": "Retail Date",
        "type": "DATE",
        "width": 12,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "rdrDate",
        "header": "Rdr Date",
        "type": "DATE",
        "width": 12,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "paidDate",
        "header": "Paid Date",
        "type": "DATE",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "eligibleAmount",
        "header": "Eligible Amount",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "appliedAmt",
        "header": "Applied For Amount",
        "type": "TEXT",
        "width": 20,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "paidAmt",
        "header": "Paid Amount",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "pendingAmount",
        "header": "Pending Amount",
        "type": "TEXT",
        "width": 20,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "chargebackAmount",
        "header": "Chargeback Amount",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "transactionDescription",
        "header": "Transaction Description",
        "type": "TEXT",
        "width": 20,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }
];
var reportHeaderForPaymentByIncDetails = ['Option Type', 'Incentive Type Name', 'Incentive Type No.', 'Category',
    'Vin', 'Model No.', 'Serial No.', 'Series', 'Model Year', 'Brand', 'Customer Name', 'Retail Date', 'Rdr Date',
    'Paid Date', 'Eligible Amount', 'Applied For Amount', 'Paid Amount', 'Pending Amount', 'Chargeback Amount',
    'Transaction Description'];
var reportStyleForChallengeSearch = [
    {
        "key": "vin",
        "header": "VIN",
        "type": "TEXT",
        "width": 22,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "modelNo",
        "header": "Model No.",
        "type": "TEXT",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "serialNo",
        "header": "Serial No.",
        "type": "TEXT",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "series",
        "header": "Series",
        "type": "TEXT",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "modelYear",
        "header": "Model Year",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "brand",
        "header": "Brand",
        "type": "TEXT",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "customerName",
        "header": "Customer Name",
        "type": "TEXT",
        "width": 25,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "retailDate",
        "header": "Retail Date",
        "type": "DATE",
        "width": 12,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "optionType",
        "header": "Option Type",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "incentiveTypeNo",
        "header": "Incentive Type No",
        "type": "TEXT",
        "width": 20,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "incentiveTypeName",
        "header": "Incentive Type Name",
        "type": "TEXT",
        "width": 20,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "challengeNo",
        "header": "Challenge No.",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "challengeStatus",
        "header": "Challenge Status",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "challengeSubmitDate",
        "header": "Challenge Submit Date",
        "type": "TEXT",
        "width": 20,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "challengeLastUpdateDate",
        "header": "ChallengeLast Update Date",
        "type": "TEXT",
        "width": 20,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "challengeAmt",
        "header": "Challenge Amt. Total",
        "type": "TEXT",
        "width": 20,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    }
];
var reportHeaderForChallengeSearchDetails = ['VIN', 'Model No.', 'Serial No.', 'Series', 'Model Year', 'Brand', 'Customer Name', 'Retail Date',
    'Option Type', 'Incentive Type No', 'Incentive Type Name', 'Challenge No.', 'Challenge Status', 'Challenge Submit Date', 'ChallengeLast Update Date',
    'Challenge Amt. Total'
];
var reportHeaderForDealReviewSearchDetails = ['VIN', 'Model No.', 'Serial No.', 'Series', 'Model Year', 'Brand', 'Customer Name', 'Retail Date',
    'Deal Review No.', 'Deal Review Status', 'Deal Review Create Date', 'Deal Review Dealer Submit Date', 'Deal Review Last Update Date'
];
var reportStyleForDealReviewSearch = [
    {
        "key": "vin",
        "header": "VIN",
        "type": "TEXT",
        "width": 22,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "modelNo",
        "header": "Model No.",
        "type": "TEXT",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "serialNo",
        "header": "Serial No.",
        "type": "TEXT",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "series",
        "header": "Series",
        "type": "TEXT",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "modelYear",
        "header": "Model Year",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "brand",
        "header": "Brand",
        "type": "TEXT",
        "width": 10,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "customerName",
        "header": "Customer Name",
        "type": "TEXT",
        "width": 25,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "retailDt",
        "header": "Retail Date",
        "type": "DATE",
        "width": 12,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "dealReviewNo",
        "header": "Deal Review No.",
        "type": "TEXT",
        "width": 15,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "dealreviewStatus",
        "header": "Deal Review Status",
        "type": "TEXT",
        "width": 20,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "dealreviewRequestDate",
        "header": "Deal Review Create Date",
        "type": "TEXT",
        "width": 28,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "dealreviewSubmitDate",
        "header": "Deal Review Dealer Submit Date",
        "type": "TEXT",
        "width": 38,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
    {
        "key": "iagDealReviewLastUpdateDate",
        "header": "Deal Review Last Update Date",
        "type": "TEXT",
        "width": 30,
        "style": { font: { name: 'Arial', size: 10, bold: false } }
    },
];


/***/ }),

/***/ "./src/app/shared/services/isp-excel-service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/isp-excel-service.ts ***!
  \******************************************************/
/*! exports provided: ExcelExportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelExportService", function() { return ExcelExportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! exceljs/dist/exceljs.min.js */ "./node_modules/exceljs/dist/exceljs.min.js");
/* harmony import */ var exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isp-excel-report */ "./src/app/shared/services/isp-excel-report.ts");





var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var EXCEL_EXTENSION = '.xlsx';
var ExcelExportService = /** @class */ (function () {
    function ExcelExportService() {
    }
    ExcelExportService.prototype.generateExcel = function (header, json, excelFileName, reportName) {
        var options = {
            filename: './Vin-Summary.xlsx',
            useStyles: true,
            useSharedStrings: true
        };
        var workbook = new exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_2__["Workbook"](options);
        var worksheet = workbook.addWorksheet(excelFileName);
        // worksheet.properties.defaultRowHeight = 25; //setting to default height because of uneven height
        var reportHeaderStyle;
        var currentRow;
        var totalColumns;
        if (reportName == "vinSummary") {
            totalColumns = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderForVinSummary"].length;
            this.generateReportHeader(worksheet, header, _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderForVinSummary"]);
            reportHeaderStyle = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderStyleForVinSummary"];
        }
        else if (reportName == "paymentStatus") {
            totalColumns = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderForPaymentType"].length;
            this.generateReportHeader(worksheet, header, _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderForPaymentType"]);
            reportHeaderStyle = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderStyleForPaymentStatus"];
        }
        else if (reportName == "incentiveStatus") {
            totalColumns = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderForIncentiveType"].length;
            this.generateReportHeader(worksheet, header, _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderForIncentiveType"]);
            reportHeaderStyle = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderStyleForIncentiveStatus"];
        }
        else if (reportName == "paymentByMethod") {
            totalColumns = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderStyleForPaymentByMethod"].length;
            this.generateReportHeader(worksheet, header, _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderForPaymentByMethod"]);
            reportHeaderStyle = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderStyleForPaymentByMethod"];
        }
        else if (reportName == 'paymentByIncentiveType') {
            totalColumns = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderStyleForPaymentByIncType"].length;
            this.generateReportHeader(worksheet, header, _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderForPaymentByIncType"]);
            reportHeaderStyle = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderStyleForPaymentByIncType"];
        }
        else if (reportName == 'PaymentByPaymentMethodDetails') {
            totalColumns = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderStyleForPaymentByMethodDetails"].length;
            this.generateReportHeader(worksheet, header, _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderForPaymentByMethodDetail"]);
            reportHeaderStyle = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderStyleForPaymentByMethodDetails"];
        }
        else if (reportName == 'paymentByIncentiveTypeDetails') {
            totalColumns = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderStyleForPaymentByIncTypeDetails"].length;
            this.generateReportHeader(worksheet, header, _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderForPaymentByIncDetails"]);
            reportHeaderStyle = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderStyleForPaymentByIncTypeDetails"];
        }
        else if (reportName == 'ChallengeSummary') {
            totalColumns = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderForChallengeSearchDetails"].length;
            this.generateReportHeader(worksheet, header, _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderForChallengeSearchDetails"]);
            reportHeaderStyle = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportStyleForChallengeSearch"];
        }
        else if (reportName == 'DealReviewSummary') {
            totalColumns = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderForDealReviewSearchDetails"].length;
            this.generateReportHeader(worksheet, header, _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportHeaderForDealReviewSearchDetails"]);
            reportHeaderStyle = _isp_excel_report__WEBPACK_IMPORTED_MODULE_4__["reportStyleForDealReviewSearch"];
        }
        worksheet.columns = reportHeaderStyle;
        var rowNum = this.currentRow;
        json.forEach(function (element) {
            worksheet.addRow(element);
            var reportData = worksheet.getRow(rowNum);
            for (var i = 1; i < (totalColumns) + 1; i++) {
                reportData.getCell(i).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            }
            rowNum = rowNum + 1;
        });
        this.reportDetailFormat(worksheet, reportName);
        var excelBuffer = workbook.xlsx.writeBuffer();
        this.saveAsExcelFile(excelBuffer, excelFileName, workbook);
    };
    ExcelExportService.prototype.generateReportHeader = function (worksheet, header, reportHeader) {
        var rowNumber = 1;
        header.forEach(function (row) {
            worksheet.addRow(row);
            var reportHeaderRow = worksheet.getRow(rowNumber);
            reportHeaderRow.getCell(1).font = { name: 'Arial', size: 10, bold: true };
            reportHeaderRow.getCell(2).font = { name: 'Arial', size: 10, bold: false };
            //worksheet.getRow(rowNumber).width = 45; 
            rowNumber++;
        });
        this.reportHeaderFormat(worksheet, reportHeader, rowNumber);
    };
    ExcelExportService.prototype.reportHeaderFormat = function (worksheet, reportHeader, row) {
        worksheet.getRow(row).values = reportHeader;
        var reportHeaderfill = worksheet.getRow(row);
        for (var i = 1; i < (reportHeader.length) + 1; i++) {
            reportHeaderfill.getCell(i).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFc0c0c0' },
                bgColor: { argb: 'FF0000FF' },
            };
            reportHeaderfill.getCell(i).border = { top: { style: 'thick' }, left: { style: 'thick' }, bottom: { style: 'thick' }, right: { style: 'thick' } };
            reportHeaderfill.getCell(i).font = { name: 'Arial', size: 10, bold: true };
        }
        this.currentRow = row + 1;
    };
    ExcelExportService.prototype.getCurrentDate = function () {
        var currentdate = new Date();
        var day = currentdate.getDate() < 10 ? "0" + currentdate.getDate() : currentdate.getDate();
        var month = currentdate.getMonth() + 1 < 10 ? "0" + (currentdate.getMonth() + 1) : (currentdate.getMonth() + 1);
        var datetime = "as on " + month + "/" + day + "/" + currentdate.getFullYear() + "  "
            + currentdate.getHours() + ":" + currentdate.getMinutes();
        return datetime;
    };
    ExcelExportService.prototype.reportDetailFormat = function (worksheet, reportName) {
        worksheet.getRow(1).values = ' ';
        if (reportName == "vinSummary") {
            worksheet.getColumn(15).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(16).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
        }
        else if (reportName == "paymentStatus") {
            worksheet.getColumn(22).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(23).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(24).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(25).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(26).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
        }
        else if (reportName == "incentiveStatus") {
            worksheet.getColumn(24).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(25).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
        }
        else if (reportName == "paymentByMethod") {
            worksheet.getColumn(4).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
        }
        else if (reportName == 'PaymentByPaymentMethodDetails') {
            worksheet.getColumn(4).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(11).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(12).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(13).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(14).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
        }
        else if (reportName == 'paymentByIncentiveType') {
            worksheet.getColumn(8).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(9).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(10).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(11).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(12).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(13).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
        }
        else if (reportName == 'paymentByIncentiveTypeDetails') {
            worksheet.getColumn(15).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(16).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(17).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(18).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
            worksheet.getColumn(19).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
        }
        else if (reportName == 'ChallengeSummary') {
            worksheet.getColumn(16).numFmt = '$#,##0.00;[Red]"($"#,##0.00")"';
        }
    };
    ExcelExportService.prototype.saveAsExcelFile = function (buffer, fileName, workbook) {
        workbook.xlsx.writeBuffer()
            .then(function (buffer) {
            // done buffering
            var data = new Blob([buffer], { type: EXCEL_TYPE });
            file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"](data, fileName + EXCEL_EXTENSION);
        });
    };
    ExcelExportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExcelExportService);
    return ExcelExportService;
}());



/***/ }),

/***/ "./src/app/shared/services/isp-http-response-handler.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/services/isp-http-response-handler.service.ts ***!
  \**********************************************************************/
/*! exports provided: IspHttpResponseHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IspHttpResponseHandlerService", function() { return IspHttpResponseHandlerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _loader_ip_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader/ip-loader.service */ "./src/app/shared/loader/ip-loader.service.ts");




var IspHttpResponseHandlerService = /** @class */ (function () {
    function IspHttpResponseHandlerService(loaderService) {
        this.loaderService = loaderService;
        this.loadingServiceCount = 0;
    }
    /**
     * Global http success handler
     * @param response
     * */
    IspHttpResponseHandlerService.prototype.onSuccess = function (response) {
        this.hideLoader();
    };
    /**
   * Global http error handler.
   *
   * @param error
   * @param source
   * @returns {ErrorObservable}
   */
    IspHttpResponseHandlerService.prototype.onCatch = function (response, source) {
        //let errMsg = response.status + ' ' + response.statusText;
        switch (response.status) {
            case 400:
                //errMsg = response.error[0].message;
                this.handleBadRequest(response);
                break;
            case 401:
                this.handleUnauthorized(response);
                break;
            case 403:
                this.handleForbidden(response);
                break;
            case 404:
                this.handleNotFound(response);
                break;
            case 500:
                this.hideLoader();
                this.handleServerError(response);
                break;
            default:
                this.handleDefaultError(response);
                break;
        }
        this.hideLoader();
        // this.commonService.setServiceErrorList(response.message);
        // this.alertService.show({'type': 'danger', 'msg': errMsg});
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create();
    };
    /**
     * Shows notification errors when server response status is 400
     *
     * @param error
     */
    IspHttpResponseHandlerService.prototype.handleBadRequest = function (responseBody) {
        if (responseBody._body) {
            try {
                var bodyParsed = responseBody.json();
                this.handleErrorMessages(bodyParsed);
            }
            catch (error) {
                this.handleServerError(error);
            }
        }
        else {
            this.handleServerError(responseBody.error);
        }
    };
    /**
     * Shows notification errors when server response status is 401 and redirects user to login page
     *
     * @param responseBody
     */
    IspHttpResponseHandlerService.prototype.handleUnauthorized = function (response) {
        console.error('isp-http', 'handleUnauthorized', '401 Error', response, response.error);
    };
    /**
     * Shows notification errors when server response status is 403
     */
    IspHttpResponseHandlerService.prototype.handleForbidden = function (response) {
        console.error('isp-http', 'handleForbidden', '403 Error', response, response.error);
        // this.router.navigate(['/login']);
    };
    /**
     * Shows notification errors when server response status is 404
     *
     * @param responseBody
     */
    IspHttpResponseHandlerService.prototype.handleNotFound = function (response) {
        console.error('isp-http', 'handleNotFound', '404 Error', response, response.error);
    };
    /**
     * Parses server response and shows notification errors with translated messages
     *
     * @param response
     */
    IspHttpResponseHandlerService.prototype.handleErrorMessages = function (response) {
        console.error('isp-http', 'handleErrorMessages', '400 Error', response, response.error());
    };
    /**
     * Shows notification errors when there is a default error
     *
     * @param response
     */
    IspHttpResponseHandlerService.prototype.handleDefaultError = function (response) {
        console.error('isp-http', 'handleDefaultError', 'Default Error', response, response.error);
    };
    /**
     * Shows notification errors when server response status is 500
     */
    IspHttpResponseHandlerService.prototype.handleServerError = function (response) {
        console.error('isp-http', 'handleServerError', 'Server Error', response, response.error);
    };
    /**
   * showLoader()
   */
    IspHttpResponseHandlerService.prototype.showLoader = function () {
        this.loadingServiceCount++;
        this.loaderService.show();
    };
    /**
     * hideLoader()
     */
    IspHttpResponseHandlerService.prototype.hideLoader = function () {
        if (this.loadingServiceCount <= 1) {
            this.loaderService.hide();
        }
        this.loadingServiceCount--;
    };
    IspHttpResponseHandlerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loader_ip_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]])
    ], IspHttpResponseHandlerService);
    return IspHttpResponseHandlerService;
}());



/***/ }),

/***/ "./src/app/shared/services/isp-http.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/isp-http.service.ts ***!
  \*****************************************************/
/*! exports provided: IspHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IspHttpService", function() { return IspHttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _isp_http_response_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isp-http-response-handler.service */ "./src/app/shared/services/isp-http-response-handler.service.ts");






var IspHttpService = /** @class */ (function () {
    function IspHttpService(http, responseHandler) {
        this.http = http;
        this.responseHandler = responseHandler;
        this.baseUrl = '';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
    }
    IspHttpService.prototype.showLoader = function () {
        // this.loaderService.show();
    };
    IspHttpService.prototype.hideLoader = function () {
        // this.loaderService.hide();
    };
    /**
      * Set  HTTP Headers
      */
    /*
   private setHeaders(): Headers {
     const headersConfig = {
       'Content-Type': 'application/json',
       'Accept': 'application/json',
       'Cache-Control': 'no-cache',
       'Pragma': 'no-cache',
       'Expires': 'Sat, 01 jan 2000 00:00:00 GMT'
     };
  
     return new Headers(headersConfig);
   }*/
    /**
       * GET method requests a resource from the server along with query parameters if required
       * @param path
       * @param params
       */
    /*get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
      this.showLoader();
      const timeStart: number = performance.now();
      return this.http.get(`${this.baseUrl}${path}`, options:{ headers: this.setHeaders(), search: params })
        .catch((err, source) => this.responseHandler.onCatch(err, source))
        .map((res: Response) => this.responseHandler.onSuccess(res, timeStart));
    } */
    IspHttpService.prototype.getConfig = function (path) {
        return this.http.get("" + this.baseUrl + path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    /**
     * Set  HTTP Headers
     */
    IspHttpService.prototype.setHeaders = function () {
        var headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headersConfig);
    };
    /**
     * GET method requests a resource from the server along with query parameters if required
     * @param path
     * @param params
     */
    IspHttpService.prototype.get = function (path, params) {
        var _this = this;
        if (params === void 0) { params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"](); }
        this.responseHandler.showLoader();
        return this.http
            .get("" + this.baseUrl + path, {
            headers: this.setHeaders(),
            params: params
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) { return _this.responseHandler.onSuccess(res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err, source) { return _this.responseHandler.onCatch(err, source); }));
    };
    /**
     * Utility method for Create.
     * @param path
     * @param params
     */
    IspHttpService.prototype.post = function (path, body, resType) {
        var _this = this;
        if (resType === void 0) { resType = 'json'; }
        this.responseHandler.showLoader();
        return this.http
            .post("" + this.baseUrl + path, JSON.stringify(body), {
            headers: this.setHeaders()
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) { return _this.responseHandler.onSuccess(res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err, source) { return _this.responseHandler.onCatch(err, source); }));
    };
    /**
     * Utility method for Create.
     * @param path
     * @param params
     */
    IspHttpService.prototype.postForm = function (path, body, resType) {
        var _this = this;
        if (resType === void 0) { resType = 'json'; }
        this.responseHandler.showLoader();
        return this.http
            .post("" + this.baseUrl + path, (body), {
            headers: this.setFormHeaders()
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) { return _this.responseHandler.onSuccess(res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err, source) { return _this.responseHandler.onCatch(err, source); }));
    };
    /**
     * Utility method for File Download.
     * @param path
     * @param params
     */
    IspHttpService.prototype.downloadUploadedFile = function (path, body, resType) {
        var _this = this;
        if (resType === void 0) { resType = 'json'; }
        this.responseHandler.showLoader();
        return this.http
            .post("" + this.baseUrl + path, (body), {
            headers: this.setFormHeaders(),
            responseType: 'blob'
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) { return _this.responseHandler.onSuccess(res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err, source) { return _this.responseHandler.onCatch(err, source); }));
    };
    /**
     * Set  HTTP Headers
     */
    IspHttpService.prototype.setFormHeaders = function () {
        // const headersConfig = {
        //   'Content-Type': 'multipart/form-data',
        //   'Accept': 'application/json'
        // };
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
    };
    IspHttpService.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = "Error: " + error.error.message;
        }
        else {
            // server-side error
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    IspHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _isp_http_response_handler_service__WEBPACK_IMPORTED_MODULE_5__["IspHttpResponseHandlerService"]])
    ], IspHttpService);
    return IspHttpService;
}());



/***/ }),

/***/ "./src/app/shared/services/isp-xml.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/isp-xml.service.ts ***!
  \****************************************************/
/*! exports provided: XMLExportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XMLExportService", function() { return XMLExportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js2xmlparser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js2xmlparser */ "./node_modules/js2xmlparser/lib/main.js");
/* harmony import */ var js2xmlparser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js2xmlparser__WEBPACK_IMPORTED_MODULE_3__);




var XMLExportService = /** @class */ (function () {
    function XMLExportService() {
    }
    XMLExportService.prototype.generateXML = function (excelVSData) {
        var xml = js2xmlparser__WEBPACK_IMPORTED_MODULE_3__["parse"]("VinSummaryExport", { "Row": excelVSData });
        var test = new Blob([xml], { type: 'text/plain' });
        file_saver__WEBPACK_IMPORTED_MODULE_2__(test, 'VinSummary.xml');
        return;
    };
    XMLExportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], XMLExportService);
    return XMLExportService;
}());



/***/ }),

/***/ "./src/app/shared/services/print-data-grid.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/services/print-data-grid.service.ts ***!
  \************************************************************/
/*! exports provided: PrintDataGridService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintDataGridService", function() { return PrintDataGridService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrintDataGridService = /** @class */ (function () {
    function PrintDataGridService() {
    }
    /**
      @name printGrid- change the grid to printable layout and to trigger print.
    */
    PrintDataGridService.prototype.printGrid = function (gridEle, gridOptions, api) {
        var style = document.createElement('style');
        style.media = 'print';
        style.id = 'printStyle';
        document.head.appendChild(style);
        var rule = '@page {size: landscape}';
        style.innerHTML = rule;
        gridEle.style.height = 'auto';
        gridEle.style.width = 'auto';
        gridOptions.enableFilter = false;
        gridOptions.floatingFilter = false;
        api.setDomLayout('print');
        var self = this;
        setTimeout(function () {
            print();
            self.resetGrid(gridEle, gridOptions, api);
        }, 2000);
    };
    /**
      @name resetGrid- reset the grid layout to normal after print.
    */
    PrintDataGridService.prototype.resetGrid = function (gridEle, gridOptions, api) {
        gridEle.style.height = '470px';
        gridEle.style.width = '100%';
        gridOptions.enableFilter = true;
        gridOptions.floatingFilter = true;
        api.setDomLayout(null);
        document.getElementById('printStyle').remove();
    };
    /**
      @name printDetails- setting to printable layout for Challenge and Deal review details page and to trigger print.
    */
    PrintDataGridService.prototype.printDetails = function (orientation) {
        var style = document.createElement('style');
        style.media = 'print';
        style.id = 'printStyle';
        document.head.appendChild(style);
        var rule = '@page {size: ' + orientation + '}';
        style.innerHTML = rule;
        print();
        var self = this;
        setTimeout(function () {
            self.resetDetails();
        }, 5000);
    };
    /**
        @name resetDetails- reset the details layout to normal after print.
      */
    PrintDataGridService.prototype.resetDetails = function () {
        document.getElementById('printStyle').remove();
    };
    PrintDataGridService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrintDataGridService);
    return PrintDataGridService;
}());



/***/ }),

/***/ "./src/app/shared/services/user-info.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/user-info.service.ts ***!
  \******************************************************/
/*! exports provided: UserInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoService", function() { return UserInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var UserInfoService = /** @class */ (function () {
    function UserInfoService(http, router) {
        this.http = http;
        this.router = router;
        this.contextPath = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].context;
        this.canEdit = false;
    }
    UserInfoService.prototype.getUserInfo = function () {
        var _this = this;
        //below line is only for local testing where userName is passed as queryparam
        // const URL = `${this.contextPath}/getUserInfo/ISYS_IAG_USER1`;
        var URL = this.contextPath + "/getUserInfo";
        // Cache it once if value is false
        if (!this.cache) {
            this.cache = this.http.get("" + URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) { return _this.mapUserDetails(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["publishReplay"])(1), // this tells Rx to cache the latest emitted
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["refCount"])() // and this tells Rx to keep the Observable alive as long as there are any Subscribers
            );
        }
        else {
            console.log("userInfo from cache");
        }
        return this.cache;
    };
    UserInfoService.prototype.mapUserDetails = function (data) {
        this.userInfoDetails = data;
        return this.userInfoDetails;
    };
    // Clear configs
    UserInfoService.prototype.clearCache = function () {
        this.cache = null;
    };
    UserInfoService.prototype.checkRole = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.getUserInfo()
                .subscribe(function (data) {
                _this.authorities = data.authorities;
                var validRole = _this.checkAuthorities(_this.authorities);
                if (validRole) {
                    resolve(validRole);
                }
                else {
                    _this.router.navigate(['login']);
                    resolve(false);
                }
            }, function (error) {
                resolve(false);
            });
        });
    };
    UserInfoService.prototype.checkAuthorities = function (authorities) {
        //let authorities: string[] = this._userInfo.authorities;
        var validRoles = ['IPLUS_ISP_ENROLLED', 'IPLUS_ISP_DEALER', 'IPLUS_IAG_MGR', 'IPLUS_IAG_ADMIN', 'IPLUS_IAG'];
        var validRole = false;
        if (authorities) {
            for (var i = 0; i < authorities.length; i++) {
                if (authorities[i].authority === 'IPLUS_ISP_DEALER') {
                    this.canEdit = true;
                    break;
                }
            }
        }
        authorities.
            forEach(function (element) {
            validRoles.forEach(function (role) {
                if (role === element.authority) {
                    validRole = true;
                    return validRole;
                }
            });
        });
        return validRole;
    };
    UserInfoService.prototype.editAccess = function () {
        return this.canEdit;
    };
    UserInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserInfoService);
    return UserInfoService;
}());



/***/ }),

/***/ "./src/app/vin-summary-details/vin-summary-details.component.html":
/*!************************************************************************!*\
  !*** ./src/app/vin-summary-details/vin-summary-details.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-message-handler></app-message-handler>\r\n\r\n<app-breadcrumb></app-breadcrumb>\r\n\r\n<div class=\"mt-2 mr-2 print-excel-container\">\r\n  <mat-icon matTooltip=\"Print\" style=\"top: 25px; left:5px\" class=\"ip-mat-icon\" (click)=\"printGrid()\">local_printshop\r\n  </mat-icon>\r\n  <span style=\"padding-left: 13px\"></span>\r\n  <i class=\"fa fa-file-excel-o fa-lg \" matTooltip=\"Export to Excel\" (click)=\"excelExporterFormForPaymentStatus()\"\r\n    style=\"font-size: 15px; cursor: Pointer; position: relative;bottom: 5px\"></i>\r\n</div>\r\n<mat-tab-group #VSDetailTabs (selectedTabChange)=\"vinDetailTabs($event)\" class=\"mat-sub-tab\">\r\n  <mat-tab id=\"incentiveStatus\">\r\n\r\n    <ng-template mat-tab-label>\r\n      <span class=\"font-weight-bold\">{{'button.Incentive_Status'|translate}}</span>\r\n    </ng-template>\r\n    <ng-template matTabContent>\r\n      <div class=\"row py-3 m-0 bg-grey\" id=\"incentiveDetailsHeader\">\r\n        <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n          <div class=\"row ml-1\">\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Model_Number'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{vinSummaryDetails.modelNo}}</div>\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Serial_Number'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{vinSummaryDetails.serialNo}}</div>\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Model_Year'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{vinSummaryDetails.modelYear}}</div>\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Series'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{vinSummaryDetails.series}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n          <div class=\"row ml-1\">\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Customer_Name'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{vinSummaryDetails.customerName}}</div>\r\n            <div class=\"col-6 my-1\"><strong> {{'labels.Retail_Date'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{vinSummaryDetails.retailDate}}</div>\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.RDR_Date'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{vinSummaryDetails.rdrDate}}</div>\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Type_Sales_Code'|translate}}</strong> </div>\r\n            <div class=\"col-6 my-1\">{{vinSummaryDetails.typeSalesCode}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n          <div class=\"row ml-1\">\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Deal_Review_Status'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{vinSummaryDetails.dealRvwStatus}}</div>\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Incentive_Application_Status'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{vinSummaryDetails.iaStatus}}</div>\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Contract_Status'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{vinSummaryDetails.contractStatus}}</div>\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.RDR_Status'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{vinSummaryDetails.rdrStatus}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <mat-toolbar class=\"buttons-panel mt-0 mx-0\">\r\n        <mat-toolbar-row>\r\n          <span class=\"space-away\"></span>\r\n          <button class=\"mr-2 mr-2\" mat-raised-button (click)=\"refreshData(1)\">\r\n            <span class=\"d-none d-md-inline\">{{'button.Refresh_Data'|translate}}</span>\r\n            <mat-icon class=\"ip-mat-icon m-l-xs\">cached</mat-icon>\r\n          </button>\r\n          <button mat-raised-button (click)=\"clearFilter(1)\">\r\n            <span class=\"d-none d-md-inline\">{{'button.Clear_Filter'|translate}}</span>\r\n            <mat-icon class=\"ip-mat-icon m-l-xs\">replay</mat-icon>\r\n          </button>\r\n        </mat-toolbar-row>\r\n      </mat-toolbar>\r\n      <div class=\"col-sm-12\" style=\"padding: 0px;\" id=\"vinDetailGridcontainer\" class=\"gridcontainer\">\r\n        <ag-grid-angular #agGrid id=\"vinSummaryGrid\" style=\"width: 100%; height: 448px;\" class=\"ag-theme-material\"\r\n          [gridOptions]=\"gridOptions\" [columnDefs]=\"incentiveColumnDefs\" [rowData]=\"incentiveRowData\"\r\n          [rowModelType]=\"rowModelType\" [maxBlocksInCache]=\"200\" [cacheBlockSize]=\"200\" [pagination]=\"true\"\r\n          [paginationPageSize]=\"paginationPageSize\" [suppressPaginationPanel]=\"true\"\r\n          (paginationChanged)=\"onPaginationChanged($event)\" [isFullWidthCell]=\"isFullWidthCell\" [animateRows]=\"true\"\r\n          (gridReady)=\"onReady($event)\" [overlayNoRowsTemplate]=\"overlayNoRowsTemplate\"\r\n          (sortChanged)=\"onSortChanged($event)\" (filterChanged)=\"onFilterChanged($event)\"></ag-grid-angular>\r\n        <br>\r\n        <mat-toolbar-row>\r\n          <div class=\"ag-paging-panel ag-font-style\" style=\"margin-bottom:5px\">\r\n            <span class=\"ag-paging-page-summary-panel\">\r\n              <button class=\"ag-paging-button\" ref=\"btFirst\"\r\n                [ngStyle]=\"{'opacity' : buttonDisabled.firstButton ? '0.65' : '1'}\"\r\n                [disabled]=\"this.buttonDisabled.firstButton\" (click)=\"onBtFirst()\">\r\n                <div class=\"pagination-previous-icon\">\r\n                  <div class=\"pagination-previous-bar\"></div>\r\n                </div>\r\n              </button>\r\n              <button class=\"ag-paging-button\" ref=\"btPrevious\"\r\n                [ngStyle]=\"{'opacity' : buttonDisabled.previousButton ? '0.65' : '1'}\"\r\n                [disabled]=\"this.buttonDisabled.previousButton\" (click)=\"onBtPrevious()\">\r\n                <div class=\"pagination-previous-icon\"></div>\r\n              </button>\r\n              <input type=\"number\" class=\"pagination-input\" [(ngModel)]=\"pageInputValue\"\r\n                (keyup.enter)=\"onCustomPageChange(pageInputValue)\" (blur)=\"onCustomPageChange(pageInputValue)\"\r\n                autocomplete=\"off\" /> {{'labels.of' | translate}}\r\n              <span ref=\"lbTotal\">{{totalPageCount}}</span>\r\n              <button class=\"ag-paging-button\" ref=\"btNext\"\r\n                [ngStyle]=\"{'opacity' : buttonDisabled.nextButton ? '0.65' : '1'}\"\r\n                [disabled]=\"this.buttonDisabled.nextButton\" (click)=\"onBtNext()\">\r\n                <div class='pagination-next-icon'></div>\r\n              </button>\r\n              <button class=\"ag-paging-button\" ref=\"btLast\"\r\n                [ngStyle]=\"{'opacity' : buttonDisabled.lastButton ? '0.65' : '1'}\"\r\n                [disabled]=\"buttonDisabled.lastButton\" (click)=\"onBtLast()\">\r\n                <div class='pagination-next-icon'>\r\n                  <div class='pagination-last-bar'></div>\r\n                </div>\r\n              </button>\r\n            </span>\r\n          </div>\r\n\r\n          <span _ngcontent-ljs-c8=\"\" class=\"space-away\"></span>\r\n          <div style=\"margin:8px 9px 0 0;\">\r\n            <span ref=\"eSummaryPanel\" class=\"ag-paging-row-summary-panel\">\r\n              <span ref=\"lbFirstRowOnPage\">{{currentPageSet.start}}</span> {{'labels.to' | translate}}\r\n              <span ref=\"lbLastRowOnPage\">{{currentPageSet.end}}</span> {{'labels.of' | translate}}\r\n              <span ref=\"lbRecordCount\">{{totalRowCount}}</span>\r\n              <span style=\"margin-left:3px;\">{{'labels.items' | translate}}</span>\r\n            </span>\r\n          </div>\r\n        </mat-toolbar-row>\r\n      </div>\r\n    </ng-template>\r\n  </mat-tab>\r\n\r\n  <mat-tab id=\"paymentStatus\">\r\n    <ng-template mat-tab-label>\r\n      <span class=\"font-weight-bold\">{{'button.Payment_Status'|translate}}</span>\r\n    </ng-template>\r\n    <ng-template matTabContent>\r\n      <div class=\"row py-3 m-0 bg-grey\" id=\"paymentDetailsHeader\">\r\n        <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n          <div class=\"row ml-1\">\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Model_Number'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{vinSummaryDetails.modelNo}}</div>\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Serial_Number'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{vinSummaryDetails.serialNo}}</div>\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Model_Year'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{vinSummaryDetails.modelYear}}</div>\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Series'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{vinSummaryDetails.series}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n          <div class=\"row ml-1\">\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Customer_Name'|translate}} </strong></div>\r\n            <div class=\"col-6 my-1\">{{vinSummaryDetails.customerName}}</div>\r\n            <div class=\"col-6 my-1\"><strong> {{'labels.Retail_Date'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{vinSummaryDetails.retailDate}}</div>\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.RDR_Date'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{vinSummaryDetails.rdrDate}}</div>\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Type_Sales_Code'|translate}} </strong> </div>\r\n            <div class=\"col-6 my-1\">{{vinSummaryDetails.typeSalesCode}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n          <div class=\"row ml-1\">\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Deal_Review_Status'|translate}} </strong></div>\r\n            <div class=\"col-6 my-1\">{{vinSummaryDetails.dealRvwStatus}}</div>\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Incentive_Application_Status'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{vinSummaryDetails.iaStatus}}</div>\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.Contract_Status'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{vinSummaryDetails.contractStatus}}</div>\r\n            <div class=\"col-6 my-1\"><strong>{{'labels.RDR_Status'|translate}}</strong></div>\r\n            <div class=\"col-6 my-1\">{{vinSummaryDetails.rdrStatus}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <mat-toolbar class=\"buttons-panel mt-0 mx-0\">\r\n        <mat-toolbar-row>\r\n          <button class=\"iplus_Btn_Primary m-r\" mat-raised-button [disabled]=\"editAccess ? challengeFlag : true\"\r\n            (click)=\"routeToChallenge()\">{{'button.Challenge'|translate}}</button>\r\n          <span class=\"space-away\"></span>\r\n          <button mat-raised-button (click)=\"refreshData(2)\" class=\"mr-2\">\r\n            <span class=\"d-none d-md-inline\">{{'button.Refresh_Data'|translate}}</span>\r\n            <mat-icon class=\"ip-mat-icon m-l-xs\">cached</mat-icon>\r\n          </button>\r\n          <button mat-raised-button (click)=\"clearFilter(2)\">\r\n            <span class=\"d-none d-md-inline\">{{'button.Clear_Filter'|translate}}</span>\r\n            <mat-icon class=\"ip-mat-icon m-l-xs\">replay</mat-icon>\r\n          </button>\r\n        </mat-toolbar-row>\r\n      </mat-toolbar>\r\n      <div class=\"col-sm-12\" style=\"padding: 0px;\" id=\"vinDetailGridcontainer\" class=\"gridcontainer\">\r\n        <ag-grid-angular #agGrid id=\"vinSummaryGrid\" style=\"width: 100%; height: 448px;\" class=\"ag-theme-material\"\r\n          [gridOptions]=\"gridOptions\" [columnDefs]=\"paymentColumnDefs\" [rowData]=\"paymentRowData\"\r\n          [rowModelType]=\"rowModelType\" [maxBlocksInCache]=\"200\" [cacheBlockSize]=\"200\" [pagination]=\"true\"\r\n          [paginationPageSize]=\"paginationPageSize\" [suppressPaginationPanel]=\"true\" [suppressRowClickSelection]=\"true\"\r\n          (paginationChanged)=\"onPaginationChanged($event)\" [isFullWidthCell]=\"isFullWidthCell\" [animateRows]=\"true\"\r\n          (gridReady)=\"onReady($event)\" [overlayNoRowsTemplate]=\"overlayNoRowsTemplate\"\r\n          (rowSelected)=\"challengeButtonToggle()\" (sortChanged)=\"onSortChanged($event)\"\r\n          (filterChanged)=\"onFilterChanged($event)\"></ag-grid-angular>\r\n        <br>\r\n        <mat-toolbar-row>\r\n          <div class=\"ag-paging-panel ag-font-style\" style=\"margin-bottom:5px\">\r\n            <span class=\"ag-paging-page-summary-panel\">\r\n              <button class=\"ag-paging-button\" ref=\"btFirst\"\r\n                [ngStyle]=\"{'opacity' : buttonDisabled.firstButton ? '0.65' : '1'}\"\r\n                [disabled]=\"this.buttonDisabled.firstButton\" (click)=\"onBtFirst()\">\r\n                <div class=\"pagination-previous-icon\">\r\n                  <div class=\"pagination-previous-bar\"></div>\r\n                </div>\r\n              </button>\r\n              <button class=\"ag-paging-button\" ref=\"btPrevious\"\r\n                [ngStyle]=\"{'opacity' : buttonDisabled.previousButton ? '0.65' : '1'}\"\r\n                [disabled]=\"this.buttonDisabled.previousButton\" (click)=\"onBtPrevious()\">\r\n                <div class=\"pagination-previous-icon\"></div>\r\n              </button>\r\n              <input type=\"number\" class=\"pagination-input\" [(ngModel)]=\"pageInputValue\"\r\n                (keyup.enter)=\"onCustomPageChange(pageInputValue)\" (blur)=\"onCustomPageChange(pageInputValue)\"\r\n                autocomplete=\"off\" /> of\r\n              <span ref=\"lbTotal\">{{totalPageCount}}</span>\r\n              <button class=\"ag-paging-button\" ref=\"btNext\"\r\n                [ngStyle]=\"{'opacity' : buttonDisabled.nextButton ? '0.65' : '1'}\"\r\n                [disabled]=\"this.buttonDisabled.nextButton\" (click)=\"onBtNext()\">\r\n                <div class='pagination-next-icon'></div>\r\n              </button>\r\n              <button class=\"ag-paging-button\" ref=\"btLast\"\r\n                [ngStyle]=\"{'opacity' : buttonDisabled.lastButton ? '0.65' : '1'}\"\r\n                [disabled]=\"buttonDisabled.lastButton\" (click)=\"onBtLast()\">\r\n                <div class='pagination-next-icon'>\r\n                  <div class='pagination-last-bar'></div>\r\n                </div>\r\n              </button>\r\n            </span>\r\n          </div>\r\n\r\n          <span _ngcontent-ljs-c8=\"\" class=\"space-away\"></span>\r\n          <div style=\"margin:8px 9px 0 0;\">\r\n            <span ref=\"eSummaryPanel\" class=\"ag-paging-row-summary-panel\">\r\n              <span ref=\"lbFirstRowOnPage\">{{currentPageSet.start}}</span> {{'labels.to' | translate}}\r\n              <span ref=\"lbLastRowOnPage\">{{currentPageSet.end === '0' ? currentPageSet.end : currentPageSet.end - 1 }}</span> {{'labels.of' | translate}}\r\n              <span ref=\"lbRecordCount\">{{totalRowCount === '0' ? totalRowCount : totalRowCount - 1}}</span> \r\n              <span style=\"margin-left:3px;\">{{'labels.items' | translate}}</span>\r\n            </span>\r\n          </div>\r\n        </mat-toolbar-row>\r\n      </div>\r\n    </ng-template>\r\n  </mat-tab>\r\n\r\n</mat-tab-group>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<mat-divider></mat-divider>"

/***/ }),

/***/ "./src/app/vin-summary-details/vin-summary-details.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/vin-summary-details/vin-summary-details.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttons-panel {\n  margin: 10px;\n  width: auto; }\n\n@media print {\n  @page {\n    size: A4 landscape; }\n  ::ng-deep body.vinSummaryDetails {\n    -webkit-transform: scale(0.74);\n            transform: scale(0.74);\n    margin: auto -15%;\n    zoom: 86%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmluLXN1bW1hcnktZGV0YWlscy9DOlxcRlNEXFxwb2xpY3ktbWFuYWdlbWVudC9zcmNcXGFwcFxcdmluLXN1bW1hcnktZGV0YWlsc1xcdmluLXN1bW1hcnktZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBRWY7RUFDSTtJQUFPLGtCQUFrQixFQUFBO0VBQ3pCO0lBQ0ksOEJBQXFCO1lBQXJCLHNCQUFxQjtJQUNyQixpQkFBa0I7SUFDbEIsU0FBUyxFQUFBLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC92aW4tc3VtbWFyeS1kZXRhaWxzL3Zpbi1zdW1tYXJ5LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9ucy1wYW5lbHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcbkBtZWRpYSBwcmludCB7XHJcbiAgICBAcGFnZSB7c2l6ZTogQTQgbGFuZHNjYXBlO31cclxuICAgIDo6bmctZGVlcCBib2R5LnZpblN1bW1hcnlEZXRhaWxzIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC43NCk7XHJcbiAgICAgICAgbWFyZ2luOiAgYXV0byAtMTUlO1xyXG4gICAgICAgIHpvb206IDg2JTtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/vin-summary-details/vin-summary-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/vin-summary-details/vin-summary-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: VinSummaryDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VinSummaryDetailsComponent", function() { return VinSummaryDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _isp_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../isp-app.service */ "./src/app/isp-app.service.ts");
/* harmony import */ var _shared_dataModels_vinSummaryDetailsRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/dataModels/vinSummaryDetailsRequest */ "./src/app/shared/dataModels/vinSummaryDetailsRequest.ts");
/* harmony import */ var _shared_dataModels_vinSummaryDetailsResponseHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/dataModels/vinSummaryDetailsResponseHeader */ "./src/app/shared/dataModels/vinSummaryDetailsResponseHeader.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_grid_filter_custom_text_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/grid/filter/custom-text-filter.component */ "./src/app/shared/grid/filter/custom-text-filter.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_services_isp_excel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/services/isp-excel-service */ "./src/app/shared/services/isp-excel-service.ts");
/* harmony import */ var _shared_dataModels_excelPaymentStatusResponse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/dataModels/excelPaymentStatusResponse */ "./src/app/shared/dataModels/excelPaymentStatusResponse.ts");
/* harmony import */ var _shared_dataModels_excelIncentiveStatusResponse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/dataModels/excelIncentiveStatusResponse */ "./src/app/shared/dataModels/excelIncentiveStatusResponse.ts");
/* harmony import */ var _shared_grid_filter_custom_date_filter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/grid/filter/custom-date-filter.component */ "./src/app/shared/grid/filter/custom-date-filter.component.ts");
/* harmony import */ var _shared_grid_grid_common_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/grid/grid-common.service */ "./src/app/shared/grid/grid-common.service.ts");
/* harmony import */ var _shared_services_print_data_grid_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/services/print-data-grid.service */ "./src/app/shared/services/print-data-grid.service.ts");
/* harmony import */ var _shared_message_handler_message_handler_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/message-handler/message-handler.service */ "./src/app/shared/message-handler/message-handler.service.ts");
/* harmony import */ var _shared_services_user_info_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/services/user-info.service */ "./src/app/shared/services/user-info.service.ts");
/* harmony import */ var _shared_services_isp_app_config_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/services/isp-app-config.service */ "./src/app/shared/services/isp-app-config.service.ts");
/* harmony import */ var _shared_grid_replace_zero_with_empty_cell_renderer_replace_zero_with_empty_cell_renderer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/grid/replace-zero-with-empty-cell-renderer/replace-zero-with-empty-cell-renderer.component */ "./src/app/shared/grid/replace-zero-with-empty-cell-renderer/replace-zero-with-empty-cell-renderer.component.ts");


















var VinSummaryDetailsComponent = /** @class */ (function () {
    function VinSummaryDetailsComponent(ispService, route, ispAppConfigService, router, messageService, excelService, printService, gridCommonService, userInfoService) {
        this.ispService = ispService;
        this.route = route;
        this.ispAppConfigService = ispAppConfigService;
        this.router = router;
        this.messageService = messageService;
        this.excelService = excelService;
        this.printService = printService;
        this.gridCommonService = gridCommonService;
        this.userInfoService = userInfoService;
        // is true if user has valid role and can edit in Challenge and Deal Review page
        this.editAccess = false;
        // toggles the state of challenge button
        this.challengeFlag = true;
        this.pageIndex = 1;
        this.inputValue = 1;
        this.pageInputValue = 1;
        this.totalPageCount = 1;
        this.totalRowCount = 0;
        this.isRegulatoryUser = false;
        this.currentPageSet = {
            start: 1,
            end: this.paginationPageSize
        };
        this.buttonDisabled = {
            firstButton: true,
            previousButton: true,
            nextButton: false,
            lastButton: false
        };
        this.isBtnLastClicked = false;
        this.errorMsg = '';
        this.vinSummaryDetails = new _shared_dataModels_vinSummaryDetailsResponseHeader__WEBPACK_IMPORTED_MODULE_4__["VSDetaisResultHeader"]();
        this.headerObj = this.ispAppConfigService.getHeaderDetails();
        /** Grid Properties initialize - START */
        this.overlayNoRowsTemplate = '<span class="grid-noOverlay"> There are no results for the entered criterion. Please refine your search parameter </span>';
        this.frameworkComponents = {
            'customTextFilter': _shared_grid_filter_custom_text_filter_component__WEBPACK_IMPORTED_MODULE_6__["CustomTextFilterComponent"],
            'customDateFilter': _shared_grid_filter_custom_date_filter_component__WEBPACK_IMPORTED_MODULE_11__["CustomDateFilterComponent"],
            'replaceZeroWithEmptyCellRendererComponent': _shared_grid_replace_zero_with_empty_cell_renderer_replace_zero_with_empty_cell_renderer_component__WEBPACK_IMPORTED_MODULE_17__["ReplaceZeroWithEmptyCellRendererComponent"]
        };
        this.paginationPageSize = 200;
        this.rowModelType = 'infinite';
        /** Grid Properties initialize - END */
        this.editAccess = this.userInfoService.editAccess();
    }
    VinSummaryDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gridSetUp();
        this.setRequestObject();
        if (this.ispService.VSDTabIndicator == 2) {
            setTimeout(function () {
                _this.loadPaymentGrid(_this.requestObject);
            }, 1000);
            this.tabGroup.selectedIndex = this.ispService.VSDTabIndicator;
        }
        else {
            setTimeout(function () {
                _this.loadIncentiveGrid(_this.requestObject);
            }, 1000);
        }
    };
    VinSummaryDetailsComponent.prototype.setRequestObject = function () {
        this.requestObject = new _shared_dataModels_vinSummaryDetailsRequest__WEBPACK_IMPORTED_MODULE_3__["VSDetailsRequest"]();
        this.requestObject.queryParams.dealerCode = this.headerObj.dealerCode;
        this.requestObject.queryParams.customerName = decodeURIComponent(this.route.snapshot.paramMap.get('user'));
        this.requestObject.queryParams.vin = this.route.snapshot.paramMap.get('vin');
        this.requestObject.queryParams.retailDate = this.route.snapshot.paramMap.get('rDate').split('~').join('/');
    };
    // is called on tab toggle, populates the grid data
    VinSummaryDetailsComponent.prototype.vinDetailTabs = function (position) {
        var _this = this;
        setTimeout(function () {
            _this.optiontab = position.index;
            position.index == 0 ? _this.loadIncentiveGrid(_this.requestObject) : _this.loadPaymentGrid(_this.requestObject);
        }, 500);
    };
    // 1 refreshes the Incentive Grid and 2 refreshes the Payments grid
    VinSummaryDetailsComponent.prototype.refreshData = function (option) {
        option == 1 ? this.loadIncentiveGrid(this.requestObject) : this.loadPaymentGrid(this.requestObject);
    };
    // clears all the filters from the grid table
    VinSummaryDetailsComponent.prototype.clearFilter = function (option) {
        // clear the filter parameters from the grid and search object
        this.api.setFilterModel(null);
        // reset routing buttons to disabled state
        if (option == 2) {
            this.challengeFlag = true;
        }
    };
    // toggles the state of Challenge button
    VinSummaryDetailsComponent.prototype.challengeButtonToggle = function () {
        var temp = this.api.getSelectedRows()[0];
        // this.challengeFlag = temp == null ? true : false;
        if (temp == null) {
            this.challengeFlag = true;
        }
        else {
            this.challengeFlag = false;
        }
    };
    VinSummaryDetailsComponent.prototype.routeToChallenge = function () {
        this.currentUrl = this.route.snapshot.url[0].path;
        var temp = this.api.getSelectedRows()[0];
        this.errorMsg = this.api.getSelectedRows()[0].challengeMSG;
        // stores the search request, later this is used to prepopulate the page
        this.ispService.setChallengeSelectedData(this.createChlgRequest);
        if (this.errorMsg) {
            // populate error-banner if it exists
            this.messageService.showMessage(this.errorMsg, 'error');
        }
        else {
            switch (this.currentUrl) {
                case 'vinSummary':
                    var url = temp.vin + '/' + 'Challenge' + '/' + encodeURIComponent(temp.customerName) + '/' + temp.incentiveTypeNo + '/' + temp.optionType + '/' + temp.iaId + '/' + temp.retailDate.split('/').join('~');
                    this.router.navigate(['vin-summary/vinSummaryChallenge/' + url]);
                    break;
                case 'paymentByPayment':
                    var temp1 = this.api.getSelectedRows()[0];
                    var url1 = temp.vin + '/' + temp1.paymentReferenceNo + '/' + 'Challenge' + '/' + encodeURIComponent(temp.customerName) + '/' + temp.incentiveTypeNo + '/' + temp.optionType + '/' + temp.iaId + '/' + temp.retailDate.split('/').join('~');
                    this.router.navigate(['paymentbypayment/paymentChallenge/' + url1]);
                    break;
                case 'paymentByIncentive':
                    var url3 = temp.vin + '/' + temp.incentiveTypeName + '/' + temp.incentiveTypeNo + '/' + 'Challenge' + '/' + encodeURIComponent(temp.customerName) + '/' + temp.incentiveTypeNo + '/' + temp.optionType + '/' + temp.iaId + '/' + temp.retailDate.split('/').join('~');
                    this.router.navigate(['paymentbyincentive/incentiveChallenge/' + url3]);
                    break;
            }
        }
    };
    //exports to excel based on search criteria 
    VinSummaryDetailsComponent.prototype.excelExporterFormForPaymentStatus = function () {
        this.requestObject.showAll = true;
        this.requestObject.pageNumber = 1;
        // setting the max count of data based on any previous search service calls
        this.requestObject.totalResults = this.totalRowCount;
        this.option = this.ispService.VSDTabIndicator;
        if ((this.optiontab == 0) || (this.optiontab == 1)) {
            this.optiontab == 0 ? this.excelConfigForIncentiveStatus(this.requestObject) : this.excelConfigForPaymentStatus(this.requestObject);
        }
        else {
            this.option == 1 ? this.excelConfigForIncentiveStatus(this.requestObject) : this.excelConfigForPaymentStatus(this.requestObject);
        }
        // IPLUS-11093 Excel download feature not working in subsequent pages
        this.requestObject.showAll = false;
    };
    /** Grid Methods - START */
    /**
      @name onReady vin summary grid configurations and column defintions.
    */
    VinSummaryDetailsComponent.prototype.gridSetUp = function () {
        var _this = this;
        this.gridOptions = {
            context: {
                componentParent: this
            },
            onGridReady: function (params) {
                _this.api = params.api;
                //this.api.sizeColumnsToFit();
                _this.api.refreshCells();
            },
            enableColResize: false,
            enableFilter: true,
            enableServerSideSorting: true,
            sortingOrder: ["asc", "desc"],
            pagination: true,
            headerHeight: 48,
            floatingFiltersHeight: 40,
            rowHeight: 35,
            rowSelection: 'single',
            filter: true,
            frameworkComponents: this.frameworkComponents,
            floatingFilter: true,
            suppressContextMenu: false,
            suppressMenuMainPanel: false,
            suppressMenuColumnPanel: false,
            suppressTabbing: true,
            suppressPaginationPanel: true,
            suppressMovableColumns: true,
            suppressMenu: true,
            suppressDragLeaveHidesColumns: true,
            suppressColumnVirtualisation: true,
            enableCellTextSelection: true
        };
        this.paymentColumnDefs = [
            {
                headerCheckboxSelection: false,
                checkboxSelection: function (params) {
                    if (params.node.rowIndex > 0) {
                        return true;
                    }
                    else {
                        return false;
                    }
                },
                suppressFilter: true,
                suppressSorting: true,
                width: 50,
            },
            {
                headerName: 'Incentive Month-Year',
                field: 'incentiveMonthYear',
                width: 160,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true },
                cellRenderer: function (params) {
                    return params.node.rowIndex < 1 ? '<span class="bold-txt">' + params.value + '</span>' : params.value;
                }
            },
            {
                headerName: 'Brand',
                field: 'brand',
                width: 100,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Incentive Category',
                field: 'category',
                width: 130,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Incentive Type',
                field: 'optionType',
                width: 130,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Incentive Type Name',
                field: 'incentiveTypeName',
                width: 150,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Payment Reference Number',
                field: 'paymentReferenceNo',
                width: 180,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Payment Method',
                field: 'paymentMethod',
                width: 110,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Paid Date',
                field: 'paidDate',
                width: 100,
                suppressMenu: true,
                floatingFilterComponent: 'customDateFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Applied for Amt.',
                field: 'appliedAmt',
                width: 100,
                suppressMenu: true,
                cellRenderer: "replaceZeroWithEmptyCellRendererComponent",
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Paid Amt.',
                field: 'paidAmt',
                width: 100,
                suppressMenu: true,
                cellRenderer: "replaceZeroWithEmptyCellRendererComponent",
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Chargeback Amt.',
                field: 'chargebackAmount',
                width: 110,
                suppressMenu: true,
                cellRenderer: "replaceZeroWithEmptyCellRendererComponent",
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true },
                cellStyle: function (params) {
                    if (params.value < 0) {
                        //mark cells with negative values as red
                        return { color: 'red', };
                    }
                }
            },
            {
                headerName: 'Denied Amt.',
                field: 'deniedAmount',
                width: 100,
                suppressMenu: true,
                cellRenderer: "replaceZeroWithEmptyCellRendererComponent",
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Transaction Description',
                field: 'transactionDescription',
                width: 180,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            }
        ];
        this.incentiveColumnDefs = [
            {
                headerCheckboxSelection: false,
                checkboxSelection: false,
                suppressFilter: true,
                suppressSorting: true,
                width: 50,
            },
            {
                headerName: 'Incentive Month-Year',
                field: 'incentiveMonthYear',
                width: 130,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Brand',
                field: 'brand',
                width: 100,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Incentive Category',
                field: 'category',
                width: 130,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Incentive Type',
                field: 'optionType',
                width: 130,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Incentive Type Name',
                field: 'incentiveTypeName',
                width: 150,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Status Last Updated',
                field: 'statusDate',
                width: 100,
                suppressMenu: true,
                floatingFilterComponent: 'customDateFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Challenge Submitted',
                field: 'challengeSubmitted',
                width: 130,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Challenge Status',
                field: 'challengeDisposition',
                width: 130,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Incentive Status',
                field: 'incentiveStatus',
                width: 130,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'IA Received Date',
                field: 'iaReceivedDate',
                width: 100,
                suppressMenu: true,
                floatingFilterComponent: 'customDateFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Reason Description',
                field: 'reasonDescription',
                width: 180,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Applied for Amt.',
                field: 'appliedAmt',
                width: 100,
                suppressMenu: true,
                cellRenderer: "replaceZeroWithEmptyCellRendererComponent",
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Net Paid Amt.',
                field: 'netPaidAmt',
                width: 100,
                suppressMenu: true,
                // IPLUS-11091
                // IPLUS-11593 - Removed code for fix
                //IPLUS-11991 Modified similar to Angular 1.x 
                cellRenderer: function (params) {
                    if (params.data != undefined && ((params.data.netPaidAmt != 0.00 && params.data.incentiveStatus != 'Chargeback' && params.data.incentiveStatus != 'Cancelled')
                        ||
                            (params.data.netPaidAmt != null && (params.data.incentiveStatus == 'Chargeback' || params.data.incentiveStatus == 'Cancelled')))) {
                        return params.value ? params.value : '';
                    }
                    else {
                        return '';
                    }
                },
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            }
        ];
    };
    /**
      @name onReady trigger on vin summary grid ready in DOM.
      @param params - event
    */
    VinSummaryDetailsComponent.prototype.onReady = function (params) {
        this.api = params.api;
        this.readyParam = params;
        setTimeout(function () {
            // this.api.sizeColumnsToFit();
        }, 100);
    };
    /**
     *
        @name loadIncentiveStatus trigger on vin summary search.
        @param incentiveDetails Search Request
      */
    VinSummaryDetailsComponent.prototype.excelConfigForIncentiveStatus = function (incentiveDetails) {
        var _this = this;
        var excelDataForIncentiveStatus;
        var excelDataForIncentiveStatusHeader;
        var excelHeader = [];
        var emptyHeader = [];
        var vin = incentiveDetails['queryParams']['vin'];
        var reportHeading = ["INCENTIVE STATUS FOR VIN", vin, this.excelService.getCurrentDate()];
        excelHeader.push(emptyHeader);
        excelHeader.push(emptyHeader);
        excelHeader.push(emptyHeader);
        excelHeader.push(reportHeading);
        excelHeader.push(emptyHeader);
        this.ispService.getVSDetails(incentiveDetails)
            .subscribe(function (data) {
            excelDataForIncentiveStatus = data['header']['results'];
            excelDataForIncentiveStatusHeader = data['header']['resultHeader'];
            excelDataForIncentiveStatus = _this.setIncentiveExcelResponse(excelDataForIncentiveStatusHeader, excelDataForIncentiveStatus);
            _this.excelService.generateExcel(excelHeader, excelDataForIncentiveStatus, 'IncentiveStatusForVin', 'incentiveStatus');
        });
    };
    VinSummaryDetailsComponent.prototype.setIncentiveExcelResponse = function (headerData, rowData) {
        var _this = this;
        var excelList = new Array();
        rowData.forEach(function (element) {
            var excelResp = new _shared_dataModels_excelIncentiveStatusResponse__WEBPACK_IMPORTED_MODULE_10__["ExcelResponseIncentiveType"]();
            excelResp.setModelNo(headerData.modelNo);
            excelResp.setSerialNo(headerData.serialNo);
            excelResp.setModelYear(headerData.modelYear);
            excelResp.setSeries(headerData.series);
            excelResp.setCustomerName(headerData.customerName);
            excelResp.setRetailDate(_this.getFormattedDate(headerData.retailDate));
            excelResp.setRdrDate(_this.getFormattedDate(headerData.rdrDate));
            excelResp.setTypeSalesCode(headerData.typeSalesCode);
            excelResp.setDealRvwStatus(headerData.dealReviewStatus);
            excelResp.setIaStatus(headerData.iaStatus);
            excelResp.setContractStatus(headerData.contractStatus);
            excelResp.setRdrStatus(headerData.rdrStatus);
            excelResp.setIncentiveMonthYear(element.incentiveMonthYear);
            excelResp.setCategory(element.category);
            excelResp.setBrand(element.brand);
            excelResp.setOptionType(element.optionType);
            excelResp.setIncentiveTypeName(element.incentiveTypeName);
            excelResp.setIncentiveTypeNo(element.incentiveTypeNo);
            excelResp.setIaReceivedDate(_this.getFormattedDate(element.iaReceivedDate));
            excelResp.setStatusDate(_this.getFormattedDate(element.statusDate));
            excelResp.setInctvStatus(element.incentiveStatus);
            excelResp.setDealReviewDisposition(element.dealReviewDisposition);
            excelResp.setReasonCode(element.reasonCode);
            excelResp.setReasonDescription(element.reasonDescription);
            excelResp.setAppliedAmt(element.appliedAmt);
            excelResp.setNetPaidAmt(element.netPaidAmt);
            excelResp.setCurrentOwner(element.currentOwner);
            excelResp.setChallengeSubmitted(element.challengeSubmitted);
            excelResp.setChallengeDisposition(element.reasonCode);
            excelList.push(excelResp);
        });
        return excelList;
    };
    /**
      @name loadPaymentGrid trigger on vin summary search.
      @param paymentDetails Search Request
    */
    VinSummaryDetailsComponent.prototype.loadPaymentGrid = function (paymentDetails) {
        var _this = this;
        var rowData, totalRows;
        var dataSource = {
            rowCount: totalRows,
            getRows: function (params) {
                _this.paymentRowData = [];
                _this.ispService.getVSPaymentDetails(paymentDetails)
                    .subscribe(function (data) {
                    _this.vinSummaryDetails = data.header.resultHeader;
                    if (data.responseMessage === '1') {
                        _this.messageService.showMessage(data.error.errMessage, 'error');
                    }
                    else {
                        rowData = data['header']['results'];
                        if (data.header.totalResults > 0) {
                            _this.totalRowCount = Number(data.header.totalResults) + 1;
                            _this.totalPageCount = _this.gridCommonService.calculateTotalPages(Number(data.header.totalResults) + 1, _this.paginationPageSize);
                            rowData.unshift({ 'incentiveMonthYear': 'Retail Date-' + rowData[0].retailDate });
                            _this.api.hideOverlay();
                        }
                        else {
                            _this.totalRowCount = data.header.totalResults;
                            _this.totalPageCount = _this.gridCommonService.calculateTotalPages(data.header.totalResults, _this.paginationPageSize);
                            _this.api.showNoRowsOverlay();
                        }
                    }
                    _this.paymentRowData = rowData;
                    totalRows = _this.totalRowCount;
                    setTimeout(function () {
                        var rowsThisPage = rowData;
                        var lastRow = totalRows;
                        params.successCallback(rowsThisPage, lastRow);
                    }, 500);
                }, function (error) {
                    _this.paymentRowData = [];
                    _this.api.showNoRowsOverlay();
                    _this.totalPageCount = 0;
                    _this.totalRowCount = 0;
                    _this.buttonDisabled = {
                        firstButton: true,
                        previousButton: true,
                        nextButton: true,
                        lastButton: true
                    };
                });
            }
        };
        if (this.readyParam) {
            this.readyParam.api.setDatasource(dataSource);
        }
        // reset routing buttons to disabled state
        this.challengeFlag = true;
    };
    /**
     *
        @name excelConfigForPaymentStatus
        @param paymentDetails Search Request
      */
    VinSummaryDetailsComponent.prototype.excelConfigForPaymentStatus = function (paymentDetails) {
        var _this = this;
        var excelDataForPaymentStatus;
        var excelDataForPaymentStatusHeader;
        var excelData;
        var excelHeader = [];
        var emptyHeader = [];
        var vin = paymentDetails['queryParams']['vin'];
        var reportHeading = ["PAYMENT STATUS FOR VIN", vin, this.excelService.getCurrentDate()];
        excelHeader.push(emptyHeader);
        excelHeader.push(emptyHeader);
        excelHeader.push(emptyHeader);
        excelHeader.push(reportHeading);
        excelHeader.push(emptyHeader);
        this.ispService.getVSPaymentDetails(paymentDetails)
            .subscribe(function (data) {
            excelDataForPaymentStatusHeader = data['header']['resultHeader'];
            excelDataForPaymentStatus = data['header']['results'];
            excelDataForPaymentStatus = _this.setPaymentExcelResponse(excelDataForPaymentStatusHeader, excelDataForPaymentStatus);
            _this.excelService.generateExcel(excelHeader, excelDataForPaymentStatus, 'PaymentStatusForVin', 'paymentStatus');
        });
    };
    VinSummaryDetailsComponent.prototype.setPaymentExcelResponse = function (headerData, rowData) {
        var _this = this;
        var excelList = new Array();
        rowData.forEach(function (element) {
            var excelResp = new _shared_dataModels_excelPaymentStatusResponse__WEBPACK_IMPORTED_MODULE_9__["ExcelResponsePaymentType"]();
            excelResp.setModelNo(headerData.modelNo);
            excelResp.setSerialNo(headerData.serialNo);
            excelResp.setModelYear(headerData.modelYear);
            excelResp.setSeries(headerData.series);
            excelResp.setCustomerName(headerData.customerName);
            excelResp.setRetailDate(_this.getFormattedDate(headerData.retailDate));
            excelResp.setRdrDate(_this.getFormattedDate(headerData.rdrDate));
            excelResp.setTypeSalesCode(headerData.typeSalesCode);
            excelResp.setDealRvwStatus(headerData.dealReviewStatus);
            excelResp.setIaStatus(headerData.iaStatus);
            excelResp.setContractStatus(headerData.contractStatus);
            excelResp.setRdrStatus(headerData.rdrStatus);
            excelResp.setIncentiveMonthYear(element.incentiveMonthYear);
            excelResp.setCategory(element.category);
            excelResp.setBrand(element.brand);
            excelResp.setOptionType(element.optionType);
            excelResp.setIncentiveTypeName(element.incentiveTypeName);
            excelResp.setIncentiveTypeNo(element.incentiveTypeNo);
            excelResp.setPaymentReferenceNo(element.paymentReferenceNo);
            excelResp.setPaymentMethod(element.paymentMethod);
            excelResp.setPaidDate(_this.getFormattedDate(element.paidDate));
            excelResp.setAppliedAmt(element.appliedAmt);
            excelResp.setPaidAmt(element.paidAmt);
            excelResp.setPendingAmtt(element.pendingAmt);
            excelResp.setchargebackAmount(element.chargebackAmount);
            excelResp.setDeniedAmount(element.deniedAmount);
            excelResp.setTransactionDesc(element.transactionDescription);
            excelList.push(excelResp);
        });
        return excelList;
    };
    /**
      @name loadIncentiveGrid trigger on vin summary search.
      @param incentiveDetails Search Request
    */
    VinSummaryDetailsComponent.prototype.loadIncentiveGrid = function (incentiveDetails) {
        var _this = this;
        var rowData, rowcount, totalRows;
        var dataSource = {
            rowCount: totalRows,
            getRows: function (params) {
                _this.incentiveRowData = [];
                _this.ispService.getVSDetails(incentiveDetails)
                    .subscribe(function (data) {
                    _this.vinSummaryDetails = data.header.resultHeader;
                    if (data.responseMessage === '0') {
                        rowcount = data.header.totalResults;
                        rowData = data['header']['results'];
                    }
                    else {
                        _this.messageService.showMessage(data.error.errMessage, 'error');
                    }
                    _this.totalRowCount = rowcount;
                    totalRows = _this.totalRowCount;
                    _this.totalPageCount = _this.gridCommonService.calculateTotalPages(rowcount, _this.paginationPageSize);
                    _this.incentiveRowData = rowData;
                    if (_this.incentiveRowData && _this.incentiveRowData.length) {
                        _this.api.hideOverlay();
                    }
                    else {
                        _this.api.showNoRowsOverlay();
                    }
                    setTimeout(function () {
                        var rowsThisPage = rowData;
                        var lastRow = totalRows;
                        params.successCallback(rowsThisPage, lastRow);
                    }, 500);
                }, function (error) {
                    _this.incentiveRowData = [];
                    _this.api.showNoRowsOverlay();
                    _this.totalPageCount = 0;
                    _this.totalRowCount = 0;
                    _this.buttonDisabled = {
                        firstButton: true,
                        previousButton: true,
                        nextButton: true,
                        lastButton: true
                    };
                });
            }
        };
        this.readyParam.api.setDatasource(dataSource);
    };
    /**
    @name onPaginationChanged trigger on pagination changes.
    */
    VinSummaryDetailsComponent.prototype.onPaginationChanged = function (params) {
        if (this.api) {
            this.buttonDisabled = {
                firstButton: false,
                previousButton: false,
                nextButton: false,
                lastButton: false
            };
            if (this.api.paginationGetCurrentPage() + 1 === 1) {
                this.pageInputValue = this.api.paginationGetCurrentPage() + 1;
                this.buttonDisabled.firstButton = true;
                this.buttonDisabled.previousButton = true;
                // Disable first and previous buttons
            }
            else {
                this.pageInputValue = this.api.paginationGetCurrentPage() + 1;
                this.buttonDisabled.firstButton = false;
                this.buttonDisabled.previousButton = false;
                // enable first and previous buttons
                // check if the page number ast page
                if (this.pageInputValue === this.totalPageCount) {
                    this.buttonDisabled.lastButton = true;
                    this.buttonDisabled.nextButton = true;
                }
                this.requestObject.pageNumber = (this.api.paginationGetCurrentPage() + 1);
            }
            this.currentPageSet = this.gridCommonService.calculateCurrentPageSetValues(this.api.paginationGetCurrentPage(), this.paginationPageSize);
            if (this.totalRowCount <= this.paginationPageSize) {
                this.currentPageSet.end = this.totalRowCount;
                if (this.totalRowCount < 1) {
                    this.currentPageSet.start = 0;
                }
                this.buttonDisabled.lastButton = true;
                this.buttonDisabled.nextButton = true;
            }
        }
    };
    /**
       @name refreshFilters- triggers on refresh icon clicked.
    */
    VinSummaryDetailsComponent.prototype.refreshFilters = function () {
        var _this = this;
        setTimeout(function () {
            _this.api.setFilterModel(null);
            _this.api.setSortModel(null);
        }, 100);
    };
    /**
       @name onBtFirst- triggers on pagination toFirst icon clicked.
    */
    VinSummaryDetailsComponent.prototype.onBtFirst = function () {
        this.api.paginationGoToFirstPage();
    };
    /**
      @name onBtLast- triggers on pagination toLast icon clicked.
    */
    VinSummaryDetailsComponent.prototype.onBtLast = function () {
        this.api.paginationGoToLastPage();
        this.isBtnLastClicked = true;
    };
    /**
      @name onBtLast- triggers on pagination next icon clicked.
    */
    VinSummaryDetailsComponent.prototype.onBtNext = function () {
        this.api.paginationGoToNextPage();
    };
    /**
      @name onBtPrevious- triggers on pagination previous icon clicked.
    */
    VinSummaryDetailsComponent.prototype.onBtPrevious = function () {
        this.api.paginationGoToPreviousPage();
    };
    /**
      @name onCustomPageChange- triggers on pagination text field changed and focused out.
      @param fieldValue - requested page number.
    */
    VinSummaryDetailsComponent.prototype.onCustomPageChange = function (fieldValue) {
        this.pageInputValue = fieldValue;
        this.api.paginationGoToPage(this.pageInputValue - 1);
    };
    /** Grid Methods - END */
    /**
      @name onSortChanged - on sort model changes.
      @param event - sort event parameters.
      */
    VinSummaryDetailsComponent.prototype.onSortChanged = function (event) {
        var sortModel = event.api.getSortModel();
        var sortPresent = sortModel && sortModel.length > 0;
        this.resetPageIndex();
        if (sortPresent) {
            this.requestObject.sortData = [];
            this.requestObject.sortData.push({ colName: sortModel[0].colId, order: sortModel[0].sort });
        }
        else {
            this.requestObject.sortData = [];
        }
        // reset routing buttons to disabled state
        this.challengeFlag = true;
    };
    /**
    @name onFilterChanged - on filter model changes.
    @param event - filter event parameters.
    */
    VinSummaryDetailsComponent.prototype.onFilterChanged = function (event) {
        var filterModel = event.api.getFilterModel();
        var filterPresent = filterModel && Object.keys(filterModel).length > 0;
        this.resetPageIndex();
        if (filterPresent) {
            this.requestObject.filterData = [];
            for (var key in filterModel) {
                this.requestObject.filterData.push({ 'filterName': key, 'filterValue': filterModel[key]['filter'] });
            }
        }
        else {
            this.requestObject.filterData = [];
        }
        // reset routing buttons to disabled state
        this.challengeFlag = true;
    };
    /**
       @name resetPageIndex reset page index to 1.
       */
    VinSummaryDetailsComponent.prototype.resetPageIndex = function () {
        this.requestObject.pageNumber = 1;
    };
    VinSummaryDetailsComponent.prototype.getFormattedDate = function (input) {
        if (input != null) {
            var todayTime = new Date(input);
            var day = todayTime.getDate() < 10 ? "0" + todayTime.getDate() : todayTime.getDate();
            var month = todayTime.getMonth() + 1 < 10 ? "0" + (todayTime.getMonth() + 1) : (todayTime.getMonth() + 1);
            var year = todayTime.getFullYear();
            return month + "/" + day + "/" + year;
        }
        else {
            return null;
        }
    };
    VinSummaryDetailsComponent.prototype.ngOnDestroy = function () {
        /* doesn't exist anymore
        this.tabIndsubscription.unsubscribe(); */
        // this.Headersubscription.unsubscribe();
    };
    /**
    @name printGrid trigger the service to print grid table
    */
    VinSummaryDetailsComponent.prototype.printGrid = function () {
        var gridEle = document.getElementById('vinSummaryGrid');
        this.printService.printGrid(gridEle, this.gridOptions, this.api);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('VSDetailTabs'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabGroup"])
    ], VinSummaryDetailsComponent.prototype, "tabGroup", void 0);
    VinSummaryDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vin-summary-details',
            template: __webpack_require__(/*! ./vin-summary-details.component.html */ "./src/app/vin-summary-details/vin-summary-details.component.html"),
            styles: [__webpack_require__(/*! ./vin-summary-details.component.scss */ "./src/app/vin-summary-details/vin-summary-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_isp_app_service__WEBPACK_IMPORTED_MODULE_2__["IspAppService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _shared_services_isp_app_config_service__WEBPACK_IMPORTED_MODULE_16__["ISPAppConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _shared_message_handler_message_handler_service__WEBPACK_IMPORTED_MODULE_14__["MessageService"],
            _shared_services_isp_excel_service__WEBPACK_IMPORTED_MODULE_8__["ExcelExportService"], _shared_services_print_data_grid_service__WEBPACK_IMPORTED_MODULE_13__["PrintDataGridService"], _shared_grid_grid_common_service__WEBPACK_IMPORTED_MODULE_12__["GridCommonService"], _shared_services_user_info_service__WEBPACK_IMPORTED_MODULE_15__["UserInfoService"]])
    ], VinSummaryDetailsComponent);
    return VinSummaryDetailsComponent;
}());



/***/ }),

/***/ "./src/app/vin-summary-details/vin-summary-details.guard.ts":
/*!******************************************************************!*\
  !*** ./src/app/vin-summary-details/vin-summary-details.guard.ts ***!
  \******************************************************************/
/*! exports provided: VinSummaryDetailsGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VinSummaryDetailsGuard", function() { return VinSummaryDetailsGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_user_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/user-info.service */ "./src/app/shared/services/user-info.service.ts");




var VinSummaryDetailsGuard = /** @class */ (function () {
    function VinSummaryDetailsGuard(router, userInfoService) {
        this.router = router;
        this.userInfoService = userInfoService;
    }
    VinSummaryDetailsGuard.prototype.canActivate = function (route, state) {
        return this.userInfoService.checkRole();
    };
    VinSummaryDetailsGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_user_info_service__WEBPACK_IMPORTED_MODULE_3__["UserInfoService"]])
    ], VinSummaryDetailsGuard);
    return VinSummaryDetailsGuard;
}());



/***/ }),

/***/ "./src/app/vin-summary/vin-summary.component.html":
/*!********************************************************!*\
  !*** ./src/app/vin-summary/vin-summary.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-message-handler></app-message-handler>\r\n<mat-toolbar style=\"width: auto\">\r\n  <mat-toolbar-row>\r\n    <span><strong class=\"font-weight-bold\">{{'title.VIN_Summary' | translate}}</strong></span>\r\n    <span class=\"space-away\"></span>\r\n    <mat-icon matTooltip=\"Print\" class=\"ip-mat-icon\" (click)=\"printGrid()\">local_printshop</mat-icon>\r\n    <span style=\"padding-left: 20px\"></span>\r\n    <mde-popover-target #appElement=\"mdePopoverTarget\">\r\n    <i class=\"fa fa-file-excel-o fa-lg fa-16px\" style=\"cursor: Pointer;\" [mdePopoverTriggerFor]=\"appPopover\"\r\n    mdePopoverTriggerOn=\"click\" [mdePopoverTargetAt]=\"appElement\" #popoverTrigger=\"mdePopoverTrigger\"></i>\r\n  </mde-popover-target>\r\n  <mde-popover #appPopover=\"mdePopover\" (close)=\"resetPopOver()\" [mdePopoverOverlapTrigger]=\"false\" mdePopoverCloseOnClick=\"false\" mdePopoverPositionY=\"below\" mdePopoverPositionX=\"after\">\r\n    <mat-card class=\"exportpop\">\r\n      <mat-card-content>\r\n        <section class=\"mat-export-dialog-container\">\r\n          <div class =\"font-size\">\r\n          <mat-radio-group name=\"exportGroup\" aria-labelledby=\"example-radio-group-label\" class=\"mat-radio-button\" [(ngModel)]=\"exportIndex\">\r\n            <mat-radio-button style=\"display: block\" [value]=1>\r\n              <font> Export To Excel </font>\r\n            </mat-radio-button>\r\n            <mat-radio-button style=\"display: block\" [value]=2>\r\n              <font> Export To CSV </font>\r\n            </mat-radio-button>\r\n            <mat-radio-button style=\"display: block\" [value]=3>\r\n              <font> Export To XML </font>\r\n            </mat-radio-button> \r\n          </mat-radio-group>              \r\n\t\t  </div>\t\r\n        </section>       \r\n        <mat-card-actions align=\"end\">\r\n          <button [disabled]=\"exportIndex == 0\" (click)=\"exportData();\" class=\"iplus_Btn_Primary mat-raised-button\" mat-raised-button>Apply</button>\r\n        </mat-card-actions>\r\n      </mat-card-content>      \r\n    </mat-card>\r\n  </mde-popover>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<div class=\"row mt-2 ml-1 search-form\">\r\n  <div class=\"col-lg-5 col-md-6 col-sm-12 col-xs-12\">\r\n    <label><strong>{{'labels.Search_by_Retail_date' | translate}}</strong></label>\r\n    <mat-radio-group aria-labelledby=\"radio-group-label\" name=\"vinSummaryGroup\" [(ngModel)]=\"searchOption\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <mat-radio-button id=\"calMonthBtn\" style='display: block' value=\"1\"\r\n            (change)=\"disableInput($event.value);  dateReset()\">\r\n            <strong>{{'labels.Calendar_Month' | translate}}</strong>\r\n          </mat-radio-button>\r\n        </div>\r\n        <div class=\"col-md-4 pack\">\r\n          <mat-select id=\"monthList\" placeholder=\"January\" [(ngModel)]=\"selectedMonth\" [disabled]='calDropEnable'\r\n            (ngModelChange)=\"onDateChange()\">\r\n            <mat-option *ngFor=\"let month of monthList\" [value]='month'>{{month}}</mat-option>\r\n          </mat-select>\r\n        </div>\r\n        <div class=\"col-md-4 pack\">\r\n          <mat-select id=\"yearList\" placeholder=\"2019\" [(ngModel)]=\"selectedYear\" [disabled]='calDropEnable'\r\n            (ngModelChange)=\"onDateChange(); onMonthChange();\">\r\n            <mat-option *ngFor=\"let year of yearList\" [value]='year' (click)=\"resetMonths()\">{{year}}</mat-option>\r\n          </mat-select>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <mat-radio-button id=\"customBtn\" style='display: block;margin-top: 10px;' value=\"2\"\r\n            (change)=\"disableInput($event.value)\">\r\n            <strong>{{'labels.Custom' | translate}}</strong>\r\n          </mat-radio-button>\r\n        </div>\r\n        <div class=\"col-md-4 pack\">\r\n          <input matInput [(ngModel)]=\"startDate\" [max]=\"maxdt\" [matDatepicker]=\"startDatePicker\"\r\n            placeholder=\"Choose a date\" autocomplete=\"off\" [disabled]=\"calenderEnable\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"startDatePicker\"></mat-datepicker-toggle>\r\n          <mat-datepicker color=\"accent\" #startDatePicker></mat-datepicker>\r\n        </div>\r\n        <div class=\"col-md-4 pack\">\r\n          <input matInput [(ngModel)]=\"endDate\" [max]=\"maxdt\" [matDatepicker]=\"endDatePicker\"\r\n            placeholder=\"Choose a date\" autocomplete=\"off\" [disabled]=\"calenderEnable\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"endDatePicker\"></mat-datepicker-toggle>\r\n          <mat-datepicker color=\"accent\" #endDatePicker></mat-datepicker>\r\n        </div>\r\n        <div class=\"col-md-8 offset-4\">\r\n          <ng-container *ngIf=\"startDate > endDate  && !calenderEnable \">\r\n            <mat-error> {{'errormsg.Date_Error' | translate}} </mat-error>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n    </mat-radio-group>\r\n  </div>\r\n  <div class=\"col-lg-3 col-md-6 col-sm-12 col-xs-12\">\r\n    <label><strong>{{'labels.Search_by' | translate}}</strong></label>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 pl-2\">\r\n        <mat-radio-group aria-labelledby=\"radio-group-label\" [(ngModel)]=\"searchOption\">\r\n          <mat-radio-button id=\"vinRadioBtn\" style='display: block' value=\"3\" (change)=\"enableInput($event.value)\">\r\n            <strong>{{'labels.VIN' | translate}}</strong>\r\n          </mat-radio-button>\r\n          <mat-radio-button id=\"serialNoBtn\" style='display: block' value=\"4\" (change)=\"enableInput($event.value)\">\r\n            <strong>{{'labels.Serial_No' | translate}}</strong>\r\n          </mat-radio-button>\r\n        </mat-radio-group>\r\n      </div>\r\n      <div class=\"col-md-8\">\r\n        <form [formGroup]=\"vinSearchForm\">\r\n          <mat-form-field appearance=\"outline\">\r\n            <mat-label>{{selectedInpField}}</mat-label>\r\n            <input matInput [placeholder]=\"selectedInpField\" id=\"vinAndSerailNo\" formControlName=\"vinAndSerailNo\"\r\n              autocomplete=\"off\" (input)=\"removeSpace()\">\r\n            <mat-error *ngIf=\"vinSearchForm.controls['vinAndSerailNo'].errors?.required\">\r\n              {{'errormsg.Mandatory'|translate}}\r\n            </mat-error>\r\n            <mat-error\r\n              *ngIf=\"vinSearchForm.controls['vinAndSerailNo'].errors?.minlength && !vinSearchForm.controls['vinAndSerailNo'].errors?.pattern\">\r\n              {{'errormsg.Vin_Message'|translate}} {{selectedInpField}}\r\n            </mat-error>\r\n            <mat-error *ngIf=\"vinSearchForm.controls['vinAndSerailNo'].errors?.pattern\">\r\n              {{'errormsg.Invalid'|translate}} {{selectedInpField}}(s)\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-4 col-md-6 col-sm-12 col-xs-12\">\r\n    <label><strong>{{'labels.Filter_by' | translate}}</strong></label>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-7 pl-2\">\r\n        <mat-radio-group aria-labelledby=\"radio-group-label\" [(ngModel)]=\"filterOption\">\r\n          <mat-radio-button style='display: block' value=\"1\">\r\n            <strong>{{'labels.Submitted_Incentive_VINs' | translate}}</strong></mat-radio-button>\r\n          <mat-radio-button style='display: block' value=\"2\">\r\n            <strong>{{'labels.VINs_Without_Incentives' | translate}}</strong>\r\n          </mat-radio-button>\r\n          <mat-radio-button style='display: block' value=\"3\">\r\n            <strong>{{'labels.All_VINs' | translate}}</strong></mat-radio-button>\r\n        </mat-radio-group>\r\n      </div>\r\n      <div class=\"col-md-5 pl-2\">\r\n        <div class=\"row mt-4\">\r\n          <button id=\"searchBtn\" class=\"iplus_Btn_Primary\" mat-raised-button matTooltip=\"Search records\"\r\n            (click)=\"searchRecords()\">\r\n            {{'button.Search'| translate}}\r\n          </button>\r\n          <span style=\"display: block; padding-left: 10px\"></span>\r\n          <button class='resetBtn' mat-raised-button matTooltip=\"Reset all data\" (click)=\"resetForm()\">\r\n            {{'button.Reset'| translate}}\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<mat-toolbar class=\"buttons-panel\">\r\n  <mat-toolbar-row>\r\n    <button id=\"incentiveStatusBtn\" class=\"iplus_Btn_Primary m-r\" mat-raised-button [disabled]=\"routeButtonState\"\r\n      (click)=\"routeVinDetails(1)\">{{'button.Incentive_Status'|translate}}</button>\r\n    <button id=\"paymentStatusBtn\" class=\"iplus_Btn_Primary\" mat-raised-button [disabled]=\"routeButtonState\"\r\n      (click)=\"routeVinDetails(2)\">{{'button.Payment_Status'|translate}}</button>\r\n    <span class=\"space-away\"></span>\r\n    <button id=\"refreshBtn\" mat-raised-button (click)=\"submitForm()\">\r\n      <span class=\"d-none d-md-inline\">{{'button.Refresh_Data'|translate}}</span>\r\n      <mat-icon class=\"ip-mat-icon m-l-xs\">cached</mat-icon>\r\n    </button>\r\n    <button id=\"clearFilterBtn\" class=\"ml-2\" mat-raised-button (click)=\"clearFilters()\">\r\n      <span class=\"d-none d-md-inline\">{{'button.Clear_Filter'|translate}}</span>\r\n      <mat-icon class=\"ip-mat-icon m-l-xs\">replay</mat-icon>\r\n    </button>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<mat-divider></mat-divider>\r\n\r\n<div class=\"col-sm-12\" style=\"padding: 0px;\" id=\"vinGridcontainer\" class=\"gridcontainer\">\r\n\r\n  <ag-grid-angular #agGrid id=\"vinSummaryGrid\" style=\"width: 100%; height: 448px;\" class=\"ag-theme-material isp-grid\"\r\n    [gridOptions]=\"gridOptions\" [columnDefs]=\"vinColumnDefs\" [rowData]=\"vinRowData\" [rowModelType]=\"rowModelType\"\r\n    [maxBlocksInCache]=\"paginationPageSize\" [cacheBlockSize]=\"paginationPageSize\" [pagination]=\"true\"\r\n    [paginationPageSize]=\"paginationPageSize\" [suppressPaginationPanel]=\"true\"\r\n    (paginationChanged)=\"onPaginationChanged($event)\" [suppressRowClickSelection]=\"true\"\r\n    [isFullWidthCell]=\"isFullWidthCell\" [animateRows]=\"true\" (gridReady)=\"onReady($event)\"\r\n    [overlayNoRowsTemplate]=\"overlayNoRowsTemplate\" (rowSelected)=\"routeButtonToggle()\"\r\n    (sortChanged)=\"onSortChanged($event)\" (filterChanged)=\"onFilterChanged($event)\">\r\n  </ag-grid-angular>\r\n\r\n  <br>\r\n\r\n  <mat-toolbar-row>\r\n    <div class=\"ag-paging-panel ag-font-style\" style=\"margin-bottom:5px\">\r\n      <span class=\"ag-paging-page-summary-panel\">\r\n        <button class=\"ag-paging-button\" ref=\"btFirst\"\r\n          [ngStyle]=\"{'opacity' : buttonDisabled.firstButton ? '0.65' : '1'}\"\r\n          [disabled]=\"this.buttonDisabled.firstButton\" (click)=\"onBtFirst()\">\r\n          <div class=\"pagination-previous-icon\">\r\n            <div class=\"pagination-previous-bar\"></div>\r\n          </div>\r\n        </button>\r\n        <button class=\"ag-paging-button\" ref=\"btPrevious\"\r\n          [ngStyle]=\"{'opacity' : buttonDisabled.previousButton ? '0.65' : '1'}\"\r\n          [disabled]=\"this.buttonDisabled.previousButton\" (click)=\"onBtPrevious()\">\r\n          <div class=\"pagination-previous-icon\"></div>\r\n        </button>\r\n        <input type=\"number\" class=\"pagination-input\" [(ngModel)]=\"pageInputValue\"\r\n          (keyup.enter)=\"onCustomPageChange(pageInputValue)\" (blur)=\"onCustomPageChange(pageInputValue)\"\r\n          autocomplete=\"off\" /> {{'labels.of' | translate}}\r\n        <span ref=\"lbTotal\">{{totalPageCount}}</span>\r\n        <button class=\"ag-paging-button\" ref=\"btNext\" [ngStyle]=\"{'opacity' : buttonDisabled.nextButton ? '0.65' : '1'}\"\r\n          [disabled]=\"this.buttonDisabled.nextButton\" (click)=\"onBtNext()\">\r\n          <div class='pagination-next-icon'></div>\r\n        </button>\r\n        <button class=\"ag-paging-button\" ref=\"btLast\" [ngStyle]=\"{'opacity' : buttonDisabled.lastButton ? '0.65' : '1'}\"\r\n          [disabled]=\"buttonDisabled.lastButton\" (click)=\"onBtLast()\">\r\n          <div class='pagination-next-icon'>\r\n            <div class='pagination-last-bar'></div>\r\n          </div>\r\n        </button>\r\n      </span>\r\n    </div>\r\n\r\n    <span _ngcontent-ljs-c8=\"\" class=\"space-away\"></span>\r\n\r\n    <div style=\"margin:8px 9px 0 0;\">\r\n      <span ref=\"eSummaryPanel\" class=\"ag-paging-row-summary-panel\">\r\n        <span ref=\"lbFirstRowOnPage\">{{currentPageSet.start}}</span> {{'labels.to' | translate}}\r\n        <span ref=\"lbLastRowOnPage\">{{currentPageSet.end}}</span> {{'labels.of' | translate}}\r\n        <span ref=\"lbRecordCount\">{{totalRowCount}}</span>\r\n        <span style=\"margin-left:3px;\">{{'labels.items' | translate}}</span>\r\n      </span>\r\n    </div>\r\n  </mat-toolbar-row>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/vin-summary/vin-summary.component.scss":
/*!********************************************************!*\
  !*** ./src/app/vin-summary/vin-summary.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".referenceTextBox {\n  height: 32px;\n  margin-right: 10px; }\n\n.vinTextBox {\n  width: 250px;\n  padding-left: 2px; }\n\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n\n.column-flex {\n  display: flex;\n  flex-direction: column; }\n\n.row-flex {\n  display: flex;\n  flex-direction: row; }\n\n.block-display {\n  display: block; }\n\n.pack {\n  margin-left: -7px; }\n\n.buttons-panel {\n  margin: 10px;\n  width: auto; }\n\n.exportpop {\n  /* min-width: 225px; */\n  width: 200px;\n  background-color: #474747;\n  border-radius: 10px; }\n\n.exportpop .iplus_Btn_Primary {\n    font-size: 12px; }\n\n.exportpop .mat-card-actions {\n    padding: 0px 0; }\n\n.exportpop .mat-radio-group {\n    display: flex;\n    flex-direction: column;\n    margin: 5px 0; }\n\n.exportpop .mat-radio-group .mat-radio-button {\n      color: white; }\n\n.font-size {\n  font-size: 12px; }\n\n::ng-deep .mat-radio-outer-circle {\n  background: #fff !important; }\n\n@media print {\n  @page {\n    size: A4 landscape; }\n  ::ng-deep body.vinSummary {\n    -webkit-transform: scale(0.66);\n            transform: scale(0.66);\n    margin: auto -20%;\n    zoom: 86%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmluLXN1bW1hcnkvQzpcXEZTRFxccG9saWN5LW1hbmFnZW1lbnQvc3JjXFxhcHBcXHZpbi1zdW1tYXJ5XFx2aW4tc3VtbWFyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUViO0VBQ0Usc0JBQUE7RUFDQSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG1CQUFtQixFQUFBOztBQUpyQjtJQU9JLGVBQWUsRUFBQTs7QUFQbkI7SUFVSSxjQUFjLEVBQUE7O0FBVmxCO0lBYUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhLEVBQUE7O0FBZmpCO01Ba0JNLFlBQVksRUFBQTs7QUFLbEI7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0U7SUFDRSxrQkFBa0IsRUFBQTtFQUVwQjtJQUNFLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFNBQVMsRUFBQSxFQUNWIiwiZmlsZSI6InNyYy9hcHAvdmluLXN1bW1hcnkvdmluLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVmZXJlbmNlVGV4dEJveCB7XHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgI2M4YzhjODtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi52aW5UZXh0Qm94IHtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbn1cclxuLmZsZXgtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY29sdW1uLWZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnJvdy1mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5ibG9jay1kaXNwbGF5IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnBhY2sge1xyXG4gIG1hcmdpbi1sZWZ0OiAtN3B4O1xyXG59XHJcblxyXG4uYnV0dG9ucy1wYW5lbCB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcbi5leHBvcnRwb3B7XHJcbiAgLyogbWluLXdpZHRoOiAyMjVweDsgKi9cclxuICB3aWR0aDogMjAwcHg7ICBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0NzQ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4uaXBsdXNfQnRuX1ByaW1hcnkge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAubWF0LWNhcmQtYWN0aW9ucyB7XHJcbiAgICBwYWRkaW5nOiAwcHggMDtcclxufVxyXG4ubWF0LXJhZGlvLWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICAgIFxyXG4ubWF0LXJhZGlvLWJ1dHRvbiB7ICBcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxufVxyXG4uZm9udC1zaXple1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufSAgXHJcbjo6bmctZGVlcCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSAge1xyXG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIHByaW50IHtcclxuICBAcGFnZSB7XHJcbiAgICBzaXplOiBBNCBsYW5kc2NhcGU7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCBib2R5LnZpblN1bW1hcnkge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjY2KTtcclxuICAgIG1hcmdpbjogYXV0byAtMjAlO1xyXG4gICAgem9vbTogODYlO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/vin-summary/vin-summary.component.ts":
/*!******************************************************!*\
  !*** ./src/app/vin-summary/vin-summary.component.ts ***!
  \******************************************************/
/*! exports provided: VinSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VinSummaryComponent", function() { return VinSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_isp_app_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/isp-app-config.service */ "./src/app/shared/services/isp-app-config.service.ts");
/* harmony import */ var _shared_grid_filter_custom_text_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/grid/filter/custom-text-filter.component */ "./src/app/shared/grid/filter/custom-text-filter.component.ts");
/* harmony import */ var _shared_grid_filter_custom_drop_down_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/grid/filter/custom-drop-down-filter.component */ "./src/app/shared/grid/filter/custom-drop-down-filter.component.ts");
/* harmony import */ var _isp_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../isp-app.service */ "./src/app/isp-app.service.ts");
/* harmony import */ var _shared_dataModels_vinSummarySearchRequest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/dataModels/vinSummarySearchRequest */ "./src/app/shared/dataModels/vinSummarySearchRequest.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_grid_filter_custom_date_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/grid/filter/custom-date-filter.component */ "./src/app/shared/grid/filter/custom-date-filter.component.ts");
/* harmony import */ var _shared_grid_grid_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/grid/grid-common.service */ "./src/app/shared/grid/grid-common.service.ts");
/* harmony import */ var _shared_grid_page_navigate_cell_renderer_page_navigate_cell_renderer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/grid/page-navigate-cell-renderer/page-navigate-cell-renderer.component */ "./src/app/shared/grid/page-navigate-cell-renderer/page-navigate-cell-renderer.component.ts");
/* harmony import */ var _shared_services_print_data_grid_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/services/print-data-grid.service */ "./src/app/shared/services/print-data-grid.service.ts");
/* harmony import */ var _shared_services_isp_excel_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/services/isp-excel-service */ "./src/app/shared/services/isp-excel-service.ts");
/* harmony import */ var _shared_services_isp_csv_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/services/isp-csv-service */ "./src/app/shared/services/isp-csv-service.ts");
/* harmony import */ var _shared_services_isp_xml_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/services/isp-xml.service */ "./src/app/shared/services/isp-xml.service.ts");
/* harmony import */ var _shared_dataModels_excelVinSummaryResponse__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/dataModels/excelVinSummaryResponse */ "./src/app/shared/dataModels/excelVinSummaryResponse.ts");
/* harmony import */ var _shared_message_handler_message_handler_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/message-handler/message-handler.service */ "./src/app/shared/message-handler/message-handler.service.ts");
/* harmony import */ var _shared_grid_replace_zero_with_empty_cell_renderer_replace_zero_with_empty_cell_renderer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/grid/replace-zero-with-empty-cell-renderer/replace-zero-with-empty-cell-renderer.component */ "./src/app/shared/grid/replace-zero-with-empty-cell-renderer/replace-zero-with-empty-cell-renderer.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _material_extended_mde__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-extended/mde */ "./node_modules/@material-extended/mde/fesm5/material-extended-mde.js");





















var VinSummaryComponent = /** @class */ (function () {
    function VinSummaryComponent(fb, ispService, ispAppConfigService, router, gridCommonService, printService, excelService, csvService, xmlService, messageService, dialog) {
        this.fb = fb;
        this.ispService = ispService;
        this.ispAppConfigService = ispAppConfigService;
        this.router = router;
        this.gridCommonService = gridCommonService;
        this.printService = printService;
        this.excelService = excelService;
        this.csvService = csvService;
        this.xmlService = xmlService;
        this.messageService = messageService;
        this.dialog = dialog;
        this.maxdt = new Date();
        this.filterOption = '1';
        this.searchOption = '1';
        // toggles the state of Incentive/Payment buttons
        this.routeButtonState = true;
        // stores the start and end date from the custom date fields
        this.maxDate = new Date();
        this.endDate = new Date();
        this.startDate = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth(), 1);
        this.date = new Date();
        this.calenderEnable = true;
        this.calDropEnable = false;
        this.pageIndex = 1;
        this.inputValue = 1;
        this.pageInputValue = 1;
        this.totalPageCount = 1;
        this.totalRowCount = 0;
        this.isRegulatoryUser = false;
        this.currentPageSet = {
            start: 1,
            end: this.paginationPageSize
        };
        this.buttonDisabled = {
            firstButton: true,
            previousButton: true,
            nextButton: false,
            lastButton: false
        };
        this.isBtnLastClicked = false;
        /** Grid Properties - END */
        this.currentPageRoutePath = 'vinSummary/vinSummaryDetails/';
        this.exportIndex = 0;
        this.months = ['January', 'February', 'March', "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.yearList = [];
        this.exportOptions = ['excel', 'csv', 'xml'];
        this.headerObj = this.ispAppConfigService.getHeaderDetails();
        // ready the request model
        this.vSSearchRequest = new _shared_dataModels_vinSummarySearchRequest__WEBPACK_IMPORTED_MODULE_7__["VSSearchRequest"]();
        /** Grid Properties initialize - START */
        this.overlayNoRowsTemplate = '<span class="grid-noOverlay"> There are no results for the entered criterion. Please refine your search parameter </span>';
        this.frameworkComponents = {
            'pageNavigateCellRendererComponent': _shared_grid_page_navigate_cell_renderer_page_navigate_cell_renderer_component__WEBPACK_IMPORTED_MODULE_11__["PageNavigateCellRendererComponent"],
            'customTextFilter': _shared_grid_filter_custom_text_filter_component__WEBPACK_IMPORTED_MODULE_4__["CustomTextFilterComponent"],
            'customDropDownFilter': _shared_grid_filter_custom_drop_down_filter_component__WEBPACK_IMPORTED_MODULE_5__["CustomDropDownFilterComponent"],
            'customDateFilter': _shared_grid_filter_custom_date_filter_component__WEBPACK_IMPORTED_MODULE_9__["CustomDateFilterComponent"],
            'replaceZeroWithEmptyCellRendererComponent': _shared_grid_replace_zero_with_empty_cell_renderer_replace_zero_with_empty_cell_renderer_component__WEBPACK_IMPORTED_MODULE_18__["ReplaceZeroWithEmptyCellRendererComponent"]
        };
        this.rowModelType = 'infinite';
        this.paginationPageSize = 200;
        /** Grid Properties initialize - END */
    }
    VinSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gridSetUp();
        this.setDefaultDate();
        this.createForm();
        // subscribes the pre-selected search request and preloads the page if required
        if (this.ispService.vsSelectedData !== null) {
            this.preLoadVSPage(this.ispService.vsSelectedData);
            setTimeout(function () {
                _this.submitForm();
            }, 500);
        }
        else {
            // will work when there's nothing to preLoad, i.e. first time VS component is loaded. Will fetch the data with the default values in the form
            setTimeout(function () {
                _this.submitForm();
            }, 500);
        }
    };
    // preloads the page with previously selected values when coming from the back button via breadcrumb
    VinSummaryComponent.prototype.preLoadVSPage = function (data) {
        // set data to search type radio buttons
        if (data.taskToDo === 'searchByCalMonth') {
            this.searchOption = '1';
            this.calDropEnable = false;
        }
        else if (data.taskToDo === 'searchByDateRange') {
            this.searchOption = '2';
            // date dropdown is disabled
            this.calDropEnable = true;
            // datepicker is enabled
            this.calenderEnable = false;
        }
        else if (data.taskToDo === 'searchByVin') {
            this.searchOption = '3';
            this.calDropEnable = true;
            this.vinSearchForm = this.fb.group({
                vinAndSerailNo: [{ value: data.queryParams.vin, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9 ]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(17)])]
            });
        }
        else if (data.taskToDo === 'searchBySerial') {
            this.searchOption = '4';
            this.calDropEnable = true;
            this.vinSearchForm = this.fb.group({
                vinAndSerailNo: [{ value: data.queryParams.serialNo, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9 ]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)])]
            });
        }
        // set data to filter type radio buttons
        if (data.queryParams.searchByIncentive == 'Y') {
            this.filterOption = '1';
        }
        else if (data.queryParams.searchByIncentive == 'N') {
            this.filterOption = '2';
        }
        else if (data.queryParams.searchByIncentive == 'A') {
            this.filterOption = '3';
        }
        // set data to input fields
        this.selectedMonth = data.queryParams.month;
        this.selectedYear = data.queryParams.year;
        this.startDate = new Date(data.queryParams.startDate);
        this.endDate = new Date(data.queryParams.endDate);
    };
    // removes all the space from the input field on focus out
    VinSummaryComponent.prototype.removeSpace = function () {
        this.vinSearchForm.controls['vinAndSerailNo'].reset({ value: this.vinSearchForm.controls['vinAndSerailNo'].value.replace(/ /g, ''), disabled: false });
    };
    /* formulates the request object with all relevant data.
    would help in reloading data while navigating with close button from bredacrumb. mb */
    VinSummaryComponent.prototype.setSearchRequest = function () {
        // some default properties in the request object are set in the constructor itself
        this.vSSearchRequest = new _shared_dataModels_vinSummarySearchRequest__WEBPACK_IMPORTED_MODULE_7__["VSSearchRequest"]();
        this.vSSearchRequest.queryParams.dealerCode = this.headerObj.dealerCode;
        this.vSSearchRequest.queryParams.month = this.selectedMonth;
        this.vSSearchRequest.queryParams.year = this.selectedYear;
        this.vSSearchRequest.queryParams.startDate = this.replaceNonAscii(this.startDate.toLocaleDateString());
        this.vSSearchRequest.queryParams.endDate = this.replaceNonAscii(this.endDate.toLocaleDateString());
        // taskToDo parameter is being set here
        switch (this.searchOption) {
            // 1 refers to the Calender month radio button
            case '1':
                this.vSSearchRequest.taskToDo = 'searchByCalMonth';
                break;
            // 2 refers to the Calender month radio button
            case '2':
                this.vSSearchRequest.taskToDo = 'searchByDateRange';
                break;
            // 3 corrosponds to VIN radio button
            case '3':
                this.vSSearchRequest.taskToDo = 'searchByVin';
                this.vSSearchRequest.queryParams.vin = this.vinSearchForm.controls['vinAndSerailNo'].value.toUpperCase();
                break;
            // 4 corrosponds to Serial Number radio button
            case '4':
                this.vSSearchRequest.taskToDo = 'searchBySerial';
                this.vSSearchRequest.queryParams.serialNo = this.vinSearchForm.controls['vinAndSerailNo'].value.toUpperCase();
                break;
        }
        // searchByIncentive parameter is being set here
        switch (this.filterOption) {
            // option 1 corrosponds to Submitted Incentive VINs option 
            case '1':
                this.vSSearchRequest.queryParams.searchByIncentive = 'Y';
                break;
            // option 2 corrosponds to VINs without Incentive  option 
            case '2':
                this.vSSearchRequest.queryParams.searchByIncentive = 'N';
                break;
            // option 3 corrosponds to All VINs option 
            case '3':
                this.vSSearchRequest.queryParams.searchByIncentive = 'A';
                break;
        }
        this.vSSearchRequest.queryParams.vinSerial = this.vinSearchForm.controls['vinAndSerailNo'].value.toUpperCase();
        // setting the sorting parameters, if any, in the request object
        var sortModel = this.api.getSortModel();
        if (sortModel && sortModel.length > 0) {
            this.vSSearchRequest.sortData = [];
            this.vSSearchRequest.sortData.push({ colName: sortModel[0].colId, order: sortModel[0].sort });
        }
        // setting the filtering parameters, if any, in the request object
        var filterModel = this.api.getFilterModel();
        Object.keys(filterModel);
        if (filterModel && Object.keys(filterModel).length > 0) {
            this.vSSearchRequest.filterData = [];
            for (var key in filterModel) {
                this.vSSearchRequest.filterData.push({ 'filterName': key, 'filterValue': filterModel[key]['filter'] });
            }
        }
    };
    VinSummaryComponent.prototype.createForm = function () {
        var len = this.selectedInpField == 'VIN' ? 17 : 8;
        this.vinSearchForm = this.fb.group({
            vinAndSerailNo: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9 ]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(len)])]
        });
    };
    // toggles the datepicker and date dropdown fields, also sets the label for VIN/Serial input field
    VinSummaryComponent.prototype.enableInput = function (value) {
        this.searchOption = value;
        /* 3 and 4 corrosponds to VIN and serial number radio buttons respectively the label name is toggled.*/
        this.selectedInpField = this.searchOption == '3' ? 'VIN' : this.searchOption == '4' ? 'Serial No.' : this.selectedInpField;
        // setting the default Filter Option value for VIN/Serial No.
        this.filterOption = '3';
        this.createForm();
        this.vinSearchForm.controls['vinAndSerailNo'].reset({ value: '', disabled: false });
        this.calenderEnable = true;
        this.calDropEnable = true;
        this.messageService.hideMessage();
    };
    // toggles the datepicker and date dropdown fields
    VinSummaryComponent.prototype.disableInput = function (value) {
        /* setting the value from event instead of using ngModel because ngModel is causing the value binding to be delayed, using delay resolves the issue.
         might optimize later. mb */
        this.messageService.hideMessage();
        this.searchOption = value;
        this.vinSearchForm.controls['vinAndSerailNo'].reset({ value: '', disabled: true });
        // handles the VIN/Serial name tag for the combined input field
        this.selectedInpField = '';
        // setting the default Filter Option value for custom date/calendar month.
        this.filterOption = '1';
        switch (this.searchOption) {
            // 1 refers to the Calender month radio button
            case '1':
                this.calenderEnable = true;
                this.calDropEnable = false;
                break;
            // 2 refers to the Calender month radio button
            case '2':
                this.calenderEnable = false;
                this.calDropEnable = true;
                break;
        }
    };
    VinSummaryComponent.prototype.setDefaultDate = function () {
        var date = new Date();
        this.selectedMonth = this.months[date.getMonth()];
        this.selectedYear = date.getFullYear();
        this.resetMonths();
        for (var index = 0; index < 10; index++) {
            this.yearList.push(date.getFullYear() - index);
        }
    };
    VinSummaryComponent.prototype.onDateChange = function () {
        this.startDate = new Date(this.selectedYear, this.months.indexOf(this.selectedMonth, 0));
        this.endDate = new Date(this.selectedYear, this.months.indexOf(this.selectedMonth, 0) + 1, 0);
        this.resetMonths();
    };
    VinSummaryComponent.prototype.onMonthChange = function () {
        if (this.selectedYear == this.date.getFullYear() && this.selectedMonth !== this.monthList[this.months.indexOf(this.selectedMonth, 0)]) {
            this.startDate = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth(), 1);
            this.selectedMonth = this.months[this.date.getMonth()];
        }
    };
    VinSummaryComponent.prototype.resetMonths = function () {
        if (this.selectedMonth == this.months[this.date.getMonth()] && this.selectedYear == this.date.getFullYear()) {
            this.endDate = new Date();
        }
        this.monthList = this.selectedYear == this.date.getFullYear() ? this.months.slice(0, 1 + this.date.getMonth()) : this.months;
    };
    VinSummaryComponent.prototype.dateReset = function () {
        this.selectedMonth = this.months[this.date.getMonth()];
        this.selectedYear = this.date.getFullYear();
        this.startDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
        this.endDate = new Date();
    };
    VinSummaryComponent.prototype.searchRecords = function () {
        // reset all parameters
        // filter and sorting retain
        this.readyParam.api.setDatasource({});
        this.api.setFilterModel(null);
        this.api.setSortModel(null);
        this.submitForm();
    };
    VinSummaryComponent.prototype.submitForm = function () {
        if (this.vinSearchForm.status != 'INVALID') {
            this.messageService.hideMessage();
            this.setSearchRequest();
            this.loadGrid(this.vSSearchRequest);
        }
        else if (this.vinSearchForm.status == 'INVALID') {
            this.messageService.showMessage('Please enter complete ' + this.selectedInpField, 'error');
        }
    };
    // resets all the form fields and does a service call
    VinSummaryComponent.prototype.resetForm = function () {
        this.createForm();
        // reset default selected radio buttons
        this.filterOption = '1';
        this.searchOption = '1';
        // reset date
        this.startDate = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth(), 1);
        this.setDefaultDate();
        // enables the the dropdowns for Calender month dropdowns
        this.calDropEnable = false;
        this.calenderEnable = true;
        // reset placeholder
        this.selectedInpField = '';
        // filter and sorting retain
        this.readyParam.api.setDatasource({});
        this.api.setFilterModel(null);
        this.api.setSortModel(null);
        this.submitForm();
    };
    //exports to excel based on search criteria 
    VinSummaryComponent.prototype.excelExporterForm = function () {
        this.vSSearchRequest.showAll = true;
        this.vSSearchRequest.pageNumber = '1';
        // setting the max count of data based on any previous search service calls
        this.vSSearchRequest.totalResults = this.totalRowCount;
        this.excelConfig(this.vSSearchRequest);
        // IPLUS-11093 Excel download feature not working in subsequent pages
        this.vSSearchRequest.showAll = false;
    };
    //IPLUS-10932 Exports to csv based on the search criteria
    VinSummaryComponent.prototype.csvExportForm = function () {
        this.vSSearchRequest.pageNumber = '1';
        // setting the max count of data based on any previous search service calls
        this.vSSearchRequest.totalResults = this.totalRowCount;
        this.csvConfig(this.vSSearchRequest);
        this.vSSearchRequest.showAll = false;
    };
    //IPLUS-11016 exports to xml based on the search criteria
    VinSummaryComponent.prototype.xmlExportForm = function () {
        this.vSSearchRequest.pageNumber = '1';
        this.vSSearchRequest.totalResults = this.totalRowCount;
        this.xmlConfig(this.vSSearchRequest);
        this.vSSearchRequest.showAll = false;
    };
    // routes to Incentive/Payment Status tab on VIN Summary Details page
    // Incentive : 1
    // Payment : 2
    VinSummaryComponent.prototype.routeVinDetails = function (option) {
        var temp = this.api.getSelectedRows()[0];
        this.ispService.setVSDTabIndicator(option);
        if (temp) {
            this.ispService.setselectedVIN(temp.vin);
            // stores the search request, later this is used to prepopulate the page
            this.ispService.setVSSelectedData(this.vSSearchRequest);
            this.ispService.setFilterSortModel(this.api.getFilterModel(), this.api.getSortModel());
            var url = temp.vin + '/' + encodeURIComponent(temp.customerName) + '/' + temp.retailDate.split('/').join('~');
            this.router.navigate([this.currentPageRoutePath + url]);
        }
    };
    // toggles the state of Incentive/Payment buttons
    VinSummaryComponent.prototype.routeButtonToggle = function () {
        var temp = this.api.getSelectedRows()[0];
        // this.routeButtonState = temp == null ? true : false;
        if (temp == null) {
            this.routeButtonState = true;
        }
        else {
            this.routeButtonState = false;
        }
    };
    VinSummaryComponent.prototype.replaceNonAscii = function (val) {
        return val.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, '');
    };
    /** Grid Methods - START */
    /**
      @name onReady vin summary grid configurations and column defintions.
    */
    VinSummaryComponent.prototype.gridSetUp = function () {
        var _this = this;
        this.gridOptions = {
            context: {
                componentParent: this
            },
            onGridReady: function (params) {
                _this.api = params.api;
                //this.api.sizeColumnsToFit();
                _this.api.refreshCells();
                _this.api.setFilterModel(_this.ispService.selectedFilterModel);
                _this.api.setSortModel(_this.ispService.selectedSortModel);
            },
            enableColResize: false,
            enableFilter: true,
            enableServerSideSorting: true,
            sortingOrder: ["asc", "desc"],
            pagination: true,
            headerHeight: 48,
            floatingFiltersHeight: 40,
            rowHeight: 35,
            rowSelection: 'single',
            filter: true,
            frameworkComponents: this.frameworkComponents,
            floatingFilter: true,
            suppressContextMenu: false,
            suppressMenuMainPanel: false,
            suppressMenuColumnPanel: false,
            suppressTabbing: true,
            suppressPaginationPanel: true,
            suppressMovableColumns: true,
            suppressMenu: true,
            suppressDragLeaveHidesColumns: true,
            suppressColumnVirtualisation: true,
            enableCellTextSelection: true
        };
        this.vinColumnDefs = [
            {
                headerCheckboxSelection: false,
                checkboxSelection: true,
                suppressFilter: true,
                suppressSorting: true,
                width: 50
            },
            {
                headerName: 'VIN',
                headerTooltip: 'VIN',
                tooltipField: 'vin',
                field: 'vin',
                width: 150,
                suppressMenu: true,
                cellRenderer: "pageNavigateCellRendererComponent",
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Model No.',
                field: 'modelNo',
                width: 80,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                cellRenderer: function (params) {
                    // sets the previously selected node while preLoading the data table
                    if (_this.ispService.selectedVIN && params.node.data && params.node.data.vin === _this.ispService.selectedVIN) {
                        params.node.setSelected(true);
                    }
                    return params.value;
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Serial No.',
                field: 'serialNo',
                width: 100,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Series',
                field: 'series',
                width: 100,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Model Year',
                field: 'modelYear',
                width: 70,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Brand',
                field: 'brand',
                width: 100,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Customer Name',
                field: 'customerName',
                width: 180,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Retail Date',
                field: 'retailDate',
                width: 130,
                suppressMenu: true,
                floatingFilterComponent: 'customDateFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'RDR Date',
                field: 'rdrDate',
                width: 130,
                suppressMenu: true,
                floatingFilterComponent: 'customDateFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Challenge Submitted',
                field: 'challengeSubmitted',
                width: 150,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'RDR Status',
                field: 'rdrStatus',
                width: 100,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true },
                cellRenderer: function (params) {
                    if (params.data != undefined && params.data.hasIncentive != undefined && params.data.hasIncentive != 'N') {
                        return params.value;
                    }
                    else {
                        return '';
                    }
                }
            },
            {
                headerName: 'Contract Status',
                field: 'contractStatus',
                width: 100,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Incentive Application Status',
                field: 'iaStatus',
                width: 150,
                suppressMenu: true,
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Deal Review Status',
                field: 'dealRvwStatus',
                width: 100,
                suppressMenu: true,
                floatingFilterComponent: 'customDropDownFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Applied for Amt.',
                field: 'appliedAmt',
                width: 100,
                suppressMenu: true,
                cellRenderer: "replaceZeroWithEmptyCellRendererComponent",
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            },
            {
                headerName: 'Net Paid Amount',
                field: 'netPaidAmt',
                width: 100,
                suppressMenu: true,
                // IPLUS-11091
                // IPLUS-11593 - Removed code for fix
                //IPLUS-11991 Modified similar to Angular 1.x
                cellRenderer: function (params) {
                    if (params.data != undefined && ((params.data.netPaidAmt != 0.00 && params.data.iaStatus != 'Cancelled' && (params.data.appliedAmt != 0.00 || params.data.appliedAmt != null))
                        ||
                            (params.data.netPaidAmt != null && params.data.iaStatus === 'Cancelled'))) {
                        return params.value ? params.value : '';
                    }
                    else {
                        return '';
                    }
                },
                floatingFilterComponent: 'customTextFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true, newRowsAction: 'keep'
                },
                filterParams: { caseSensitive: true }
            }
        ];
    };
    /**
      @name onReady trigger on vin summary grid ready in DOM.
      @param params - event
    */
    VinSummaryComponent.prototype.onReady = function (params) {
        this.api = params.api;
        this.readyParam = params;
        setTimeout(function () {
            // this.api.sizeColumnsToFit();
        }, 100);
    };
    /**
      @name loadGrid trigger on vin summary search.
      @param formDetails Search Request
    */
    VinSummaryComponent.prototype.loadGrid = function (formDetails) {
        var _this = this;
        var rowData = [], rowcount, totalRows;
        var dataSource = {
            rowCount: totalRows,
            getRows: function (params) {
                _this.vinRowData = [];
                _this.ispService.vinSearchForm(formDetails).subscribe(function (data) {
                    if (data.responseMessage === '0' && data.result.results) {
                        rowcount = data.result.totalResults;
                        rowData = data['result']['results'];
                    }
                    else {
                        _this.messageService.showMessage(data.error.errMessage, 'error');
                        rowcount = rowData.length;
                        // rowData = rowData;
                    }
                    _this.totalRowCount = rowcount;
                    totalRows = _this.totalRowCount;
                    _this.totalPageCount = _this.gridCommonService.calculateTotalPages(rowcount, _this.paginationPageSize);
                    _this.vinRowData = rowData;
                    if (_this.vinRowData && _this.vinRowData.length) {
                        _this.api.hideOverlay();
                    }
                    else {
                        _this.api.showNoRowsOverlay();
                    }
                    setTimeout(function () {
                        var rowsThisPage = rowData;
                        var lastRow = totalRows;
                        params.successCallback(rowsThisPage, lastRow);
                    }, 500);
                }, function (error) {
                    _this.vinRowData = [];
                    _this.api.showNoRowsOverlay();
                    _this.totalPageCount = 0;
                    _this.totalRowCount = 0;
                    _this.buttonDisabled = {
                        firstButton: true,
                        previousButton: true,
                        nextButton: true,
                        lastButton: true
                    };
                });
            }
        };
        this.readyParam.api.setDatasource(dataSource);
        // on load of table, no data is selected, thus vin summary details button state is reverted to disabled
        this.routeButtonState = true;
    };
    /**
      @name excel export trigger on vin summary .
      @param request Search Request query param
    */
    VinSummaryComponent.prototype.excelConfig = function (request) {
        var _this = this;
        var rowData, excelVSData;
        var excelHeader = [];
        var emptyHeader = [];
        var reportHeading = ["VIN SUMMARY", this.excelService.getCurrentDate()];
        var fromDate = ['From Retail Date', this.vSSearchRequest.queryParams.startDate];
        var toDate = ['To Retail Date', this.vSSearchRequest.queryParams.endDate];
        excelHeader.push(emptyHeader);
        excelHeader.push(emptyHeader);
        excelHeader.push(emptyHeader);
        excelHeader.push(reportHeading);
        excelHeader.push(fromDate);
        excelHeader.push(toDate);
        excelHeader.push(emptyHeader);
        this.ispService.vinSearchForm(request)
            .subscribe(function (data) {
            rowData = data['result']['results'];
            excelVSData = _this.setVinSummaryExcelResponse(rowData);
            _this.excelService.generateExcel(excelHeader, excelVSData, 'VinSummary', 'vinSummary');
        });
    };
    VinSummaryComponent.prototype.setVinSummaryExcelResponse = function (rowData) {
        var excelList = new Array();
        rowData.forEach(function (element) {
            var excelResp = new _shared_dataModels_excelVinSummaryResponse__WEBPACK_IMPORTED_MODULE_16__["ExcelVSResponse"]();
            excelResp.setVin(element.vin);
            excelResp.setModelNo(element.modelNo);
            excelResp.setSerialNo(element.serialNo);
            excelResp.setSeries(element.series);
            excelResp.setModelYear(element.modelYear);
            excelResp.setBrand(element.brand);
            excelResp.setCustomerName(element.customerName);
            excelResp.setRetailDate(element.retailDate);
            excelResp.setRdrDate(element.rdrDate);
            excelResp.setDealRvwStatus(element.dealRvwStatus);
            excelResp.setChallengeSubmitted(element.challengeSubmitted);
            excelResp.setIaStatus(element.iaStatus);
            excelResp.setContractStatus(element.contractStatus);
            excelResp.setRdrStatus(element.rdrStatus);
            excelResp.setAppliedAmt(element.appliedAmt);
            excelResp.setChallengeStatus(element.challengeStatus);
            excelResp.setNetPaidAmt(element.netPaidAmt);
            excelList.push(excelResp);
        });
        return excelList;
    };
    /**
     @name csv export trigger on vin summary .
     @param request Search Request query param
   */
    VinSummaryComponent.prototype.csvConfig = function (request) {
        var _this = this;
        var rowData, excelVSData;
        var excelHeader = [];
        var emptyHeader = [];
        var reportHeading = ["VIN SUMMARY", this.excelService.getCurrentDate()];
        var fromDate = ['From Retail Date', this.vSSearchRequest.queryParams.startDate];
        var toDate = ['To Retail Date', this.vSSearchRequest.queryParams.endDate];
        excelHeader.push(emptyHeader);
        excelHeader.push(emptyHeader);
        excelHeader.push(emptyHeader);
        excelHeader.push(reportHeading);
        excelHeader.push(fromDate);
        excelHeader.push(toDate);
        excelHeader.push(emptyHeader);
        this.ispService.vinSearchForm(request)
            .subscribe(function (data) {
            rowData = data['result']['results'];
            excelVSData = _this.setVinSummaryExcelResponse(rowData);
            _this.csvService.generateCsv(excelHeader, excelVSData, 'VinSummary', 'vinSummary');
        });
    };
    /**
     @name xml export trigger on vins summary
     @param request Search Request query param
     */
    VinSummaryComponent.prototype.xmlConfig = function (request) {
        var _this = this;
        var rowData, excelVSData;
        var obj = {};
        var excelHeader = [];
        var emptyHeader = [];
        var reportHeading = ["VIN SUMMARY", this.excelService.getCurrentDate()];
        var fromDate = ['From Retail Date', this.vSSearchRequest.queryParams.startDate];
        var toDate = ['To Retail Date', this.vSSearchRequest.queryParams.endDate];
        excelHeader.push(emptyHeader);
        excelHeader.push(emptyHeader);
        excelHeader.push(emptyHeader);
        excelHeader.push(reportHeading);
        excelHeader.push(fromDate);
        excelHeader.push(toDate);
        excelHeader.push(emptyHeader);
        this.ispService.vinSearchForm(request)
            .subscribe(function (data) {
            rowData = data['result']['results'];
            excelVSData = _this.setVinSummaryExcelResponse(rowData);
            _this.xmlService.generateXML(excelVSData);
        });
    };
    /**
    @name onPaginationChanged trigger on pagination changes.
    */
    VinSummaryComponent.prototype.onPaginationChanged = function (params) {
        if (this.api) {
            this.buttonDisabled = {
                firstButton: false,
                previousButton: false,
                nextButton: false,
                lastButton: false
            };
            if (this.api.paginationGetCurrentPage() + 1 === 1) {
                this.pageInputValue = this.api.paginationGetCurrentPage() + 1;
                this.buttonDisabled.firstButton = true;
                this.buttonDisabled.previousButton = true;
                // Disable first and previous buttons
            }
            else {
                this.pageInputValue = this.api.paginationGetCurrentPage() + 1;
                this.buttonDisabled.firstButton = false;
                this.buttonDisabled.previousButton = false;
                // enable first and previous buttons
                // check if the page number ast page
                if (this.pageInputValue === this.totalPageCount) {
                    this.buttonDisabled.lastButton = true;
                    this.buttonDisabled.nextButton = true;
                }
                this.vSSearchRequest.pageNumber = (this.api.paginationGetCurrentPage() + 1).toString();
            }
            this.currentPageSet = this.gridCommonService.calculateCurrentPageSetValues(this.api.paginationGetCurrentPage(), this.paginationPageSize);
            if (this.totalRowCount <= this.paginationPageSize) {
                this.currentPageSet.end = this.totalRowCount;
                if (this.totalRowCount < 1) {
                    this.currentPageSet.start = 0;
                }
                this.buttonDisabled.lastButton = true;
                this.buttonDisabled.nextButton = true;
            }
        }
    };
    /**
       @name clearFilters- triggers on refresh icon clicked.
    */
    VinSummaryComponent.prototype.clearFilters = function () {
        var _this = this;
        setTimeout(function () {
            _this.api.setFilterModel(null);
        }, 100);
        // perform service call to reset the grid data with the criteria in the form currently
        this.submitForm();
    };
    /**
       @name onBtFirst- triggers on pagination toFirst icon clicked.
    */
    VinSummaryComponent.prototype.onBtFirst = function () {
        this.api.paginationGoToFirstPage();
    };
    /**
      @name onBtLast- triggers on pagination toLast icon clicked.
    */
    VinSummaryComponent.prototype.onBtLast = function () {
        this.api.paginationGoToLastPage();
        this.isBtnLastClicked = true;
    };
    /**
      @name onBtLast- triggers on pagination next icon clicked.
    */
    VinSummaryComponent.prototype.onBtNext = function () {
        this.api.paginationGoToNextPage();
    };
    /**
      @name onBtPrevious- triggers on pagination previous icon clicked.
    */
    VinSummaryComponent.prototype.onBtPrevious = function () {
        this.api.paginationGoToPreviousPage();
    };
    /**
      @name onCustomPageChange- triggers on pagination text field changed and focused out.
      @param fieldValue - requested page number.
    */
    VinSummaryComponent.prototype.onCustomPageChange = function (fieldValue) {
        this.pageInputValue = fieldValue;
        this.api.paginationGoToPage(this.pageInputValue - 1);
    };
    /** Grid Methods - END */
    /**
    @name onSortChanged - on sort model changes.
    @param event - sort event parameters.
    */
    VinSummaryComponent.prototype.onSortChanged = function (event) {
        var sortModel = event.api.getSortModel();
        var sortPresent = sortModel && sortModel.length > 0;
        this.resetPageIndex();
        if (sortPresent) {
            this.vSSearchRequest.sortData = [];
            this.vSSearchRequest.sortData.push({ colName: sortModel[0].colId, order: sortModel[0].sort });
        }
        else {
            this.vSSearchRequest.sortData = [];
        }
        // reset routing buttons to disabled state
        this.routeButtonState = true;
    };
    /**
    @name onFilterChanged - on filter model changes.
    @param event - filter event parameters.
    */
    VinSummaryComponent.prototype.onFilterChanged = function (event) {
        var filterModel = event.api.getFilterModel();
        var filterPresent = filterModel && Object.keys(filterModel).length > 0;
        this.resetPageIndex();
        Object.keys(filterModel);
        if (filterPresent) {
            this.vSSearchRequest.filterData = [];
            for (var key in filterModel) {
                this.vSSearchRequest.filterData.push({ 'filterName': key, 'filterValue': filterModel[key]['filter'] });
            }
        }
        else {
            this.vSSearchRequest.filterData = [];
        }
        // reset routing buttons to disabled state
        this.routeButtonState = true;
    };
    /**
     @name resetPageIndex reset page index to 1.
     */
    VinSummaryComponent.prototype.resetPageIndex = function () {
        this.vSSearchRequest.pageNumber = '1';
    };
    /**
     @name printGrid trigger the service to print grid table
     */
    VinSummaryComponent.prototype.printGrid = function () {
        var gridEle = document.getElementById('vinSummaryGrid');
        this.printService.printGrid(gridEle, this.gridOptions, this.api);
    };
    VinSummaryComponent.prototype.exportData = function () {
        if (this.exportIndex === 1) {
            this.excelExporterForm();
        }
        else if (this.exportIndex === 2) {
            this.csvExportForm();
        }
        else if (this.exportIndex === 3) {
            this.xmlExportForm();
        }
        this.trigger.closePopover();
        this.exportIndex = 0;
    };
    VinSummaryComponent.prototype.resetPopOver = function () {
        this.exportIndex = 0;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_material_extended_mde__WEBPACK_IMPORTED_MODULE_20__["MdePopoverTrigger"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _material_extended_mde__WEBPACK_IMPORTED_MODULE_20__["MdePopoverTrigger"])
    ], VinSummaryComponent.prototype, "trigger", void 0);
    VinSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vin-summary',
            template: __webpack_require__(/*! ./vin-summary.component.html */ "./src/app/vin-summary/vin-summary.component.html"),
            styles: [__webpack_require__(/*! ./vin-summary.component.scss */ "./src/app/vin-summary/vin-summary.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _isp_app_service__WEBPACK_IMPORTED_MODULE_6__["IspAppService"], _shared_services_isp_app_config_service__WEBPACK_IMPORTED_MODULE_3__["ISPAppConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _shared_grid_grid_common_service__WEBPACK_IMPORTED_MODULE_10__["GridCommonService"], _shared_services_print_data_grid_service__WEBPACK_IMPORTED_MODULE_12__["PrintDataGridService"], _shared_services_isp_excel_service__WEBPACK_IMPORTED_MODULE_13__["ExcelExportService"], _shared_services_isp_csv_service__WEBPACK_IMPORTED_MODULE_14__["CsvExportService"], _shared_services_isp_xml_service__WEBPACK_IMPORTED_MODULE_15__["XMLExportService"], _shared_message_handler_message_handler_service__WEBPACK_IMPORTED_MODULE_17__["MessageService"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatDialog"]])
    ], VinSummaryComponent);
    return VinSummaryComponent;
}());



/***/ }),

/***/ "./src/app/vin-summary/vin-summary.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/vin-summary/vin-summary.guard.ts ***!
  \**************************************************/
/*! exports provided: VinSummaryGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VinSummaryGuard", function() { return VinSummaryGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_user_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/user-info.service */ "./src/app/shared/services/user-info.service.ts");




var VinSummaryGuard = /** @class */ (function () {
    function VinSummaryGuard(router, userInfoService) {
        this.router = router;
        this.userInfoService = userInfoService;
    }
    VinSummaryGuard.prototype.canActivate = function (route, state) {
        return this.userInfoService.checkRole();
    };
    VinSummaryGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_user_info_service__WEBPACK_IMPORTED_MODULE_3__["UserInfoService"]])
    ], VinSummaryGuard);
    return VinSummaryGuard;
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
    production: false,
    context: '/isp-api'
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

module.exports = __webpack_require__(/*! C:\FSD\policy-management\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map