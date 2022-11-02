(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



const routes = [
    {
        path: 'camera',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Camera_camera_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Camera/camera.module */ 156)).then(m => m.CameraPageModule)
    },
    {
        path: '',
        redirectTo: 'camera',
        pathMatch: 'full'
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material.module */ 3806);









let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 3806:
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/clipboard */ 1604);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 4941);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/scrolling */ 5752);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/stepper */ 1780);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/table */ 3865);
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/tree */ 8205);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ 3188);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/badge */ 178);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 3672);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button-toggle */ 1959);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/chips */ 1196);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/stepper */ 7650);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/grid-list */ 3346);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-bar */ 833);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/radio */ 8390);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/slider */ 1859);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/sort */ 4316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/tabs */ 2379);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tree */ 4972);










































let MaterialModule = class MaterialModule {
};
MaterialModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        exports: [
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__.ClipboardModule,
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__.CdkStepperModule,
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__.CdkTableModule,
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__.CdkTreeModule,
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__.DragDropModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__.MatAutocompleteModule,
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__.MatBadgeModule,
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__.MatBottomSheetModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__.MatButtonToggleModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__.MatChipsModule,
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStepperModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDividerModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatExpansionModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__.MatGridListModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInputModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_23__.MatListModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenuModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatNativeDateModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__.MatPaginatorModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__.MatProgressBarModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__.MatRadioModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatRippleModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelectModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__.MatSidenavModule,
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__.MatSliderModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__.MatSlideToggleModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__.MatSnackBarModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_36__.MatTableModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__.MatTabsModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__.MatToolbarModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__.MatTooltipModule,
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__.MatTreeModule,
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_41__.ScrollingModule
        ],
        providers: [
            { provide: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__.MatBottomSheetRef, useValue: {} },
            { provide: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__.MAT_BOTTOM_SHEET_DATA, useValue: {} },
            { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogRef, useValue: {} }
        ]
    })
], MaterialModule);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 8150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_parse-decd0f85_js-node_modules_ionic_core_dist_esm_t-a92c48",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_parse-decd0f85_js-node_modules_ionic_core_dist_esm_t-a92c48",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map