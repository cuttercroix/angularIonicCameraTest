"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Camera_camera_module_ts"],{

/***/ 1769:
/*!*************************************************!*\
  !*** ./src/app/Camera/camera-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraRoutingModule": () => (/* binding */ CameraRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _camera_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camera.page */ 329);




const routes = [
    {
        path: '',
        component: _camera_page__WEBPACK_IMPORTED_MODULE_0__.CameraPage,
    }
];
let CameraRoutingModule = class CameraRoutingModule {
};
CameraRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], CameraRoutingModule);



/***/ }),

/***/ 156:
/*!*****************************************!*\
  !*** ./src/app/Camera/camera.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraPageModule": () => (/* binding */ CameraPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _camera_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camera.page */ 329);
/* harmony import */ var _camera_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camera-routing.module */ 1769);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material.module */ 3806);
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery/gallery.component */ 4540);
/* harmony import */ var _photo_viewer_photo_viewer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./photo-viewer/photo-viewer.component */ 1263);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/components.module */ 5642);











let CameraPageModule = class CameraPageModule {
};
CameraPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _camera_routing_module__WEBPACK_IMPORTED_MODULE_1__.CameraRoutingModule,
            _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule,
        ],
        declarations: [_camera_page__WEBPACK_IMPORTED_MODULE_0__.CameraPage, _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__.GalleryComponent, _photo_viewer_photo_viewer_component__WEBPACK_IMPORTED_MODULE_4__.PhotoviewerComponent]
    })
], CameraPageModule);



/***/ }),

/***/ 329:
/*!***************************************!*\
  !*** ./src/app/Camera/camera.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraPage": () => (/* binding */ CameraPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _camera_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camera.page.html?ngResource */ 5910);
/* harmony import */ var _camera_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camera.page.scss?ngResource */ 5121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery/gallery.component */ 4540);
/* harmony import */ var _photo_viewer_photo_viewer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./photo-viewer/photo-viewer.component */ 1263);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var capacitor_community_multilens_camerapreview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! capacitor-community-multilens-camerapreview */ 7952);



/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/naming-convention */







let CameraPage = class CameraPage {
    constructor(_modal) {
        this._modal = _modal;
        this.LoadedImage = '';
        this.Images = [];
        this.OriginalImages = [];
        this.Platform = '';
        this.CameraHeight = 0;
        this.CameraActive = false;
        this.ZoomLevels = [];
        this.Zoom = '';
        this.Flash = 'off';
        this.Front = false;
        this.FlashModes = [];
        this.HasFlash = false;
        this.ConfigFlash = () => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            //get flash modes and eliminate the ones we dont want
            const flashModes = yield capacitor_community_multilens_camerapreview__WEBPACK_IMPORTED_MODULE_6__.CameraPreview.getSupportedFlashModes();
            this.FlashModes = flashModes.result;
            let loopNum = 0;
            for (const mode of this.FlashModes) {
                loopNum++;
                if (mode === 'auto' || mode === 'red-eye') {
                    this.FlashModes.splice(loopNum, 1);
                }
            }
            if (this.FlashModes.length) {
                this.HasFlash = true;
            }
        });
        this.LaunchGallery = () => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.stopCamera();
            const modal = yield this._modal.create({
                component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__.GalleryComponent,
                cssClass: 'fullScreenModal',
                componentProps: {
                    Images: this.Images
                }
            });
            modal.onDidDismiss().then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                if (data) {
                    this.Images = data.data;
                }
                yield this.launchCamera();
            }));
            return yield modal.present();
        });
        this.ViewImage = (img) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.stopCamera();
            const modal = yield this._modal.create({
                component: _photo_viewer_photo_viewer_component__WEBPACK_IMPORTED_MODULE_4__.PhotoviewerComponent,
                cssClass: 'fullScreenModal',
                componentProps: {
                    Image: img
                }
            });
            modal.onDidDismiss().then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                yield this.launchCamera();
            }));
            return yield modal.present();
        });
        this.PickFromGallery = () => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const photos = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.pickImages({
                quality: 100,
                correctOrientation: true,
                presentationStyle: 'popover'
            });
        });
        this.Close = () => {
            if (this.CameraActive) {
                this.stopCamera();
            }
            else {
                this.launchCamera();
            }
        };
        this.CycleFlash = () => {
            if (this.Flash === 'off') {
                this.Flash = 'on';
                capacitor_community_multilens_camerapreview__WEBPACK_IMPORTED_MODULE_6__.CameraPreview.setFlashMode({ flashMode: 'on' });
            }
            else if (this.Flash === 'on') {
                this.Flash = 'torch';
                capacitor_community_multilens_camerapreview__WEBPACK_IMPORTED_MODULE_6__.CameraPreview.setFlashMode({ flashMode: 'torch' });
            }
            else if (this.Flash === 'torch') {
                this.Flash = 'off';
                capacitor_community_multilens_camerapreview__WEBPACK_IMPORTED_MODULE_6__.CameraPreview.setFlashMode({ flashMode: 'off' });
            }
            else {
                this.Flash = 'off';
            }
        };
        this.FlipCam = () => {
            this.Front = !this.Front;
            capacitor_community_multilens_camerapreview__WEBPACK_IMPORTED_MODULE_6__.CameraPreview.flip();
        };
    }
    ngAfterViewInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.Platform = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__.Capacitor.getPlatform();
            if (this.Zoom === '') {
                if (this.Platform === 'ios') {
                    this.Zoom = 'ultra';
                }
                else {
                    this.Zoom = '100';
                }
            }
            setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                yield this.launchCamera();
                if (this.Platform !== 'web') {
                    yield this.ConfigCameras();
                }
            }), 1000);
        });
    }
    SetZoom(zoomLevel) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.Platform === 'ios') {
                this.Zoom = zoomLevel;
                const cameraPreviewOptions = {
                    zoomFactor: this.Zoom
                };
                yield capacitor_community_multilens_camerapreview__WEBPACK_IMPORTED_MODULE_6__.CameraPreview.setZoom(cameraPreviewOptions);
            }
        });
    }
    launchCamera() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const cameraPreviewOptions = {
                position: 'rear',
                parent: 'content',
                className: 'cameraPreview',
                enableZoom: true,
                enableHighResolution: true,
                disableExifHeaderStripping: true,
                rotateWhenOrientationChanged: false,
                toBack: true,
                width: this.content.nativeElement.offsetWidth,
                zoomFactor: this.Zoom
            };
            yield capacitor_community_multilens_camerapreview__WEBPACK_IMPORTED_MODULE_6__.CameraPreview.start(cameraPreviewOptions);
            this.CameraActive = true;
            if (!this.FlashModes.length && this.Platform !== 'web') {
                yield this.ConfigFlash();
            }
        });
    }
    ConfigCameras() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const cams = yield capacitor_community_multilens_camerapreview__WEBPACK_IMPORTED_MODULE_6__.CameraPreview.getSupportedZoomLevels();
            for (const cam of cams.result) {
                this.ZoomLevels.push(cam);
                console.log(cam);
            }
            this.Zoom = this.ZoomLevels[0];
        });
    }
    takePicture() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.CameraActive = false;
            const cameraPreviewPictureOptions = {
                quality: 100,
                width: 800,
            };
            const result = yield capacitor_community_multilens_camerapreview__WEBPACK_IMPORTED_MODULE_6__.CameraPreview.capture(cameraPreviewPictureOptions);
            this.CameraActive = true;
            const image = {
                Data: `data:image/jpeg;base64,${result.value}`,
                Selected: false
            };
            console.log(image);
            //this.OriginalImages.push(image)
            this.Images.push(image);
            this.scrollMyDiv();
        });
    }
    scrollMyDiv() {
        //figure this out
        setTimeout(() => {
            this.thumbnails.nativeElement.scrollTo({ left: (this.thumbnails.nativeElement.scrollLeft + 60), behavior: 'smooth' });
        }, 500);
    }
    stopCamera() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.CameraActive = false;
            yield capacitor_community_multilens_camerapreview__WEBPACK_IMPORTED_MODULE_6__.CameraPreview.stop();
        });
    }
};
CameraPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController }
];
CameraPage.propDecorators = {
    thumbnails: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['thumbnails',] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['content',] }],
    imagePlaceholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['imagePlaceholder',] }]
};
CameraPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-camera',
        template: _camera_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_camera_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CameraPage);



/***/ }),

/***/ 4540:
/*!*****************************************************!*\
  !*** ./src/app/Camera/gallery/gallery.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryComponent": () => (/* binding */ GalleryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _gallery_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery.component.html?ngResource */ 3029);
/* harmony import */ var _gallery_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery.component.scss?ngResource */ 5375);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _photo_viewer_photo_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../photo-viewer/photo-viewer.component */ 1263);



/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/naming-convention */



let GalleryComponent = class GalleryComponent {
    constructor(_modal) {
        this._modal = _modal;
        this.Images = [];
        this.SelectedImages = 0;
        this.CameraOpen = false;
        this.ToggleImg = (img, _e) => {
            _e.stopImmediatePropagation();
            _e.preventDefault();
            img.Selected = !img.Selected;
            this.UpdateSelectedImages();
        };
        this.ViewImage = (img) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _photo_viewer_photo_viewer_component__WEBPACK_IMPORTED_MODULE_2__.PhotoviewerComponent,
                cssClass: 'fullScreenModal',
                componentProps: {
                    Image: img
                }
            });
            modal.onDidDismiss().then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                //
            }));
            return yield modal.present();
        });
        this.UpdateSelectedImages = () => {
            let selectedImages = 0;
            for (const img of this.Images) {
                if (img.Selected) {
                    selectedImages++;
                }
            }
            this.SelectedImages = selectedImages;
        };
        this.UnselectAll = () => {
            for (const img of this.Images) {
                img.Selected = false;
            }
            this.SelectedImages = 0;
        };
        this.DeleteSelected = () => {
            this.Images = this.Images.filter(function (obj) {
                return !obj.Selected;
            });
            this.UnselectAll();
        };
    }
    Close() {
        this._modal.dismiss(this.Images);
    }
};
GalleryComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
GalleryComponent.propDecorators = {
    Images: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
GalleryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-gallery',
        template: _gallery_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_gallery_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GalleryComponent);



/***/ }),

/***/ 1263:
/*!***************************************************************!*\
  !*** ./src/app/Camera/photo-viewer/photo-viewer.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoviewerComponent": () => (/* binding */ PhotoviewerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _photo_viewer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photo-viewer.component.html?ngResource */ 1719);
/* harmony import */ var _photo_viewer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photo-viewer.component.scss?ngResource */ 6885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);



/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */



let PhotoviewerComponent = class PhotoviewerComponent {
    constructor(_modal) {
        this._modal = _modal;
        this.DPI = window.devicePixelRatio;
        this.Width = 200;
        this.Height = 200;
        this.platform = '';
        this.ShowDetails = false;
        this.ShapeColor = '#ffeb3b';
        this.Shapes = [
            {
                Label: 'circle',
                Icon: 'far fa-circle'
            },
            {
                Label: 'square',
                Icon: 'far fa-square'
            },
            {
                Label: 'arrow',
                Icon: 'fas fa-long-arrow-right'
            },
            {
                Label: 'line',
                Icon: 'fas fa-slash'
            }
            /*
            {
              Label:'path',
              Icon:'fas fa-paint-brush'
            }
            */
        ];
        this.MultipleColors = false;
        this.SelectedShape = null;
        //drawing tools
        this.StartX = 0.0;
        this.StartY = 0.0;
        this.EndX = 0.0;
        this.EndY = 0.0;
        this.minStroke = 2;
        this.maxStroke = 20;
        this.stokeStartX = 0.0;
        this.ShowStrokeSize = false;
        this.StrokeSize = 4;
        this.CircleRadius = 12;
        this.MyObjects = [];
        this.FillCircle = false;
        this.FillSquare = false;
        this.GetWidth = () => this.Width;
        this.GetHeight = () => this.Height;
        this.ToggleDetails = () => {
            this.ShowDetails = !this.ShowDetails;
        };
        this.ChangeShapeColor = (color) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.ShapeColor = color;
            if (!this.MultipleColors) {
                yield this.DrawImageToCanvas();
                this.Context.clearRect(0, 0, this.Width, this.Height);
                for (let obj of this.MyObjects) {
                    this.DrawObjects(obj);
                }
            }
        });
        this.SelectShape = (shape, e) => {
            var _a;
            if (e) {
                this.stokeStartX = e.touches[0].clientX;
            }
            if (this.SelectShape) {
                if ((shape === null || shape === void 0 ? void 0 : shape.Label) === 'circle' || (shape === null || shape === void 0 ? void 0 : shape.Label) === 'square') {
                    if (((_a = this.SelectedShape) === null || _a === void 0 ? void 0 : _a.Label) === (shape === null || shape === void 0 ? void 0 : shape.Label)) {
                        this.ToggleFill(shape);
                    }
                    else {
                        this.SelectedShape = shape;
                    }
                }
                else {
                    this.SelectedShape = shape;
                }
            }
            else {
                this.SelectedShape = shape;
            }
        };
        this.ToggleFill = (shape) => {
            console.log('togglefill - ' + shape);
            if (shape.Label === 'circle') {
                this.FillCircle = !this.FillCircle;
                if (this.FillCircle) {
                    shape.Icon = 'fas fa-circle';
                }
                else {
                    shape.Icon = 'far fa-circle';
                }
            }
            else if (shape.Label === 'square') {
                this.FillSquare = !this.FillSquare;
                if (this.FillSquare) {
                    shape.Icon = 'fas fa-square';
                }
                else {
                    shape.Icon = 'far fa-square';
                }
            }
        };
        this.ChangeShapeStroke = (e) => {
            this.ShowStrokeSize = true;
            let rate = (window.innerWidth) / this.maxStroke;
            let movement = (e.touches[0].clientX - this.stokeStartX) / rate;
            this.StrokeSize = Math.floor(this.StrokeSize + movement);
            if (this.minStroke > this.StrokeSize) {
                this.StrokeSize = this.minStroke;
            }
            else if (this.StrokeSize > this.maxStroke) {
                this.StrokeSize = this.maxStroke;
            }
            console.log(this.StrokeSize);
        };
        this.SetShapeStroke = (e) => {
            this.ShowStrokeSize = false;
        };
        this.TouchStart = (e) => {
            if (this.SelectedShape) {
                this.StartX = e.touches[0].clientX - (this.Header.nativeElement.offsetWidth - this.IamgeCanvas.nativeElement.offsetWidth) / 2;
                this.StartY = e.touches[0].clientY - this.Header.nativeElement.offsetHeight;
                if (this.SelectedShape.Label !== 'square') {
                    this.StartX = this.StartX + 10;
                    this.StartY = this.StartY - 4;
                }
                this.EndX = e.touches[0].clientX - (this.Header.nativeElement.offsetWidth - this.IamgeCanvas.nativeElement.offsetWidth) / 2;
                this.EndY = e.touches[0].clientY - this.Header.nativeElement.offsetHeight;
                this.DrawObjects();
            }
            else {
                e.stopImmediatePropagation();
                e.preventDefault();
            }
        };
        this.TouchEnd = (e) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let fill = false;
            if (this.SelectedShape.Label === 'circle' && this.FillCircle) {
                fill = true;
            }
            else if (this.SelectedShape.Label === 'square' && this.FillSquare) {
                fill = true;
            }
            let shapeObj = {
                Shape: JSON.parse(JSON.stringify(this.SelectedShape.Label)),
                StartX: this.StartX,
                StartY: this.StartY,
                EndX: this.EndX,
                EndY: this.EndY,
                StrokeSize: JSON.parse(JSON.stringify(this.StrokeSize)),
                CircleRadius: JSON.parse(JSON.stringify(this.CircleRadius)),
                ShapeColor: this.ShapeColor,
                Fill: fill
            };
            this.MyObjects.push(shapeObj);
            console.log(this.MyObjects);
            this.Context = this.IamgeCanvas.nativeElement.getContext('2d');
            this.Context.clearRect(0, 0, this.Width, this.Height);
            yield this.DrawImageToCanvas();
            for (let object of this.MyObjects) {
                this.DrawObjects(object);
            }
        });
        this.TouchMove = (e) => {
            this.EndX = e.touches[0].clientX - (this.Header.nativeElement.offsetWidth - this.IamgeCanvas.nativeElement.offsetWidth) / 2;
            this.EndY = e.touches[0].clientY - this.Header.nativeElement.offsetHeight;
            this.DrawObjects();
        };
        this.Undo = () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.MyObjects.length) {
                this.MyObjects.pop();
            }
            this.Context = this.IamgeCanvas.nativeElement.getContext('2d');
            yield this.DrawImageToCanvas();
            this.Context.clearRect(0, 0, this.Width, this.Height);
            for (let object of this.MyObjects) {
                this.DrawObjects(object);
            }
        });
        this.DrawObjects = (object) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            this.Context = this.IamgeCanvas.nativeElement.getContext('2d');
            let fill = '#ffffff00';
            let fillShape = false;
            if (object) {
                if (object.Fill) {
                    fill = object.ShapeColor;
                    fillShape = true;
                }
                if (object.Shape === 'circle') {
                    this._drawCircle(this.Context, object.StartX, object.StartY, object.CircleRadius, fill, object.ShapeColor, object.StrokeSize, fillShape);
                }
                else if (object.Shape === 'square') {
                    this._drawSquare(this.Context, object.StartX, object.StartY, object.EndX - object.StartX, object.EndY - object.StartY, fill, object.ShapeColor, object.StrokeSize, fillShape);
                }
                else if (object.Shape === 'arrow') {
                    this._drawArrow(this.Context, object.StartX, object.StartY, object.EndX, object.EndY, fill, object.ShapeColor, object.StrokeSize);
                }
                else if (object.Shape === 'line') {
                    this._drawLine(this.Context, object.StartX, object.StartY, object.EndX, object.EndY, fill, object.ShapeColor, object.StrokeSize);
                }
            }
            else {
                if (this.MyObjects.length) {
                    yield this.DrawImageToCanvas();
                    this.Context.clearRect(0, 0, this.Width, this.Height);
                    for (let obj of this.MyObjects) {
                        this.DrawObjects(obj);
                    }
                }
                else {
                    this.Context.clearRect(0, 0, this.Width, this.Height);
                    yield this.DrawImageToCanvas();
                }
                if (((_a = this.SelectedShape) === null || _a === void 0 ? void 0 : _a.Label) === 'circle') {
                    if (12 > Math.abs(this.StartX - this.EndX) && 12 > Math.abs(this.StartY - this.EndY)) {
                        this.CircleRadius = 12;
                    }
                    else {
                        let xMove = Math.abs(this.StartX - this.EndX);
                        let yMove = Math.abs(this.StartY - this.EndY);
                        if (xMove > yMove) {
                            this.CircleRadius = xMove;
                        }
                        else {
                            this.CircleRadius = yMove;
                        }
                    }
                    if (this.FillCircle) {
                        fill = this.ShapeColor;
                        fillShape = true;
                    }
                    this._drawCircle(this.Context, this.StartX, this.StartY, this.CircleRadius, fill, this.ShapeColor, this.StrokeSize, fillShape);
                }
                else if (((_b = this.SelectedShape) === null || _b === void 0 ? void 0 : _b.Label) === 'square') {
                    if (this.FillSquare) {
                        fill = this.ShapeColor;
                        fillShape = true;
                    }
                    this._drawSquare(this.Context, this.StartX, this.StartY, this.EndX - this.StartX, this.EndY - this.StartY, fill, this.ShapeColor, this.StrokeSize, fillShape);
                }
                else if (((_c = this.SelectedShape) === null || _c === void 0 ? void 0 : _c.Label) === 'arrow') {
                    if (5 > this.StartX - this.EndX) {
                        this.EndX += 5;
                    }
                    this._drawArrow(this.Context, this.StartX, this.StartY, this.EndX, this.EndY, fill, this.ShapeColor, this.StrokeSize);
                }
                else if (((_d = this.SelectedShape) === null || _d === void 0 ? void 0 : _d.Label) === 'line') {
                    if (5 > this.StartX - this.EndX) {
                        this.EndX += 5;
                    }
                    this._drawLine(this.Context, this.StartX, this.StartY, this.EndX, this.EndY, '#ffffff00', this.ShapeColor, this.StrokeSize);
                }
            }
        });
    }
    ngAfterViewInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.platform = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Capacitor.getPlatform();
            console.log(this.Image);
            yield this.DrawImageToCanvas();
            if (this.Shapes.length) {
                this.SelectShape(this.Shapes[0], null);
            }
        });
    }
    ;
    Close(save) {
        if (save) {
            this._modal.dismiss();
        }
        else {
            this._modal.dismiss();
        }
    }
    ;
    DrawImageToCanvas() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let image = new Image();
            let ctrl = this;
            if ((_a = ctrl.Image) === null || _a === void 0 ? void 0 : _a.Data) {
                image.src = this.Image.Data;
            }
            return new Promise((resolve, reject) => {
                image.onload = () => {
                    let canvas = this.IamgeCanvas;
                    let w = this.EditContainer.nativeElement.offsetWidth - 20;
                    this.Width = w;
                    let aspectRatio = w / image.width;
                    let h = image.height * aspectRatio;
                    this.Height = h;
                    if (image.height >= image.width) {
                        h = this.EditContainer.nativeElement.offsetHeight - 20;
                        this.Height = h;
                        aspectRatio = h / image.height;
                        w = image.width * aspectRatio;
                        this.Width = w;
                    }
                    if (canvas) {
                        canvas.nativeElement.width = w * this.DPI;
                        canvas.nativeElement.height = h * this.DPI;
                        let ctx = canvas.nativeElement.getContext('2d');
                        ctx.scale(this.DPI, this.DPI);
                        ctx.clearRect(0, 0, w, h);
                        //ctx.drawImage(image, 0, 0, w, h);
                    }
                    resolve();
                };
                image.onabort = reject;
                image.onerror = reject;
            });
        });
    }
    _drawCircle(ctx, x, y, radius, fill, stroke, strokeWidth, fillShape) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        if (fillShape) {
            if (this.MultipleColors) {
                ctx.fillStyle = fill;
            }
            else {
                ctx.fillStyle = this.ShapeColor;
            }
            ctx.fill();
        }
        else {
            ctx.lineWidth = strokeWidth;
            if (this.MultipleColors) {
                ctx.strokeStyle = stroke;
            }
            else {
                ctx.strokeStyle = this.ShapeColor;
            }
            ctx.stroke();
        }
        ctx.font = '14pt';
        ctx.fillStyle = 'white';
    }
    _drawSquare(ctx, fromx, fromy, width, height, fill, stroke, strokeWidth, fillShape) {
        ctx.fillStyle = fill;
        if (fillShape) {
            if (this.MultipleColors) {
                ctx.fillStyle = fill;
            }
            else {
                ctx.fillStyle = this.ShapeColor;
            }
            ctx.fillRect(fromx, fromy, width, height);
        }
        else {
            ctx.lineWidth = strokeWidth;
            if (this.MultipleColors) {
                ctx.strokeStyle = stroke;
            }
            else {
                ctx.strokeStyle = this.ShapeColor;
            }
            ctx.strokeRect(fromx, fromy, width, height);
        }
        ctx.font = '14pt';
        ctx.fillStyle = 'white';
    }
    _drawArrow(ctx, fromx, fromy, tox, toy, fill, stroke, strokeWidth) {
        //variables to be used when creating the arrow
        const width = strokeWidth;
        let headlen = strokeWidth * 2;
        let angle = Math.atan2(toy - fromy, tox - fromx);
        // This makes it so the end of the arrow head is located at tox, toy, don't ask where 1.15 comes from
        tox -= Math.cos(angle) * ((width * 1.15));
        toy -= Math.sin(angle) * ((width * 1.15));
        //starting path of the arrow from the start square to the end square and drawing the stroke
        ctx.beginPath();
        ctx.moveTo(fromx, fromy);
        ctx.lineTo(tox, toy);
        if (this.MultipleColors) {
            ctx.strokeStyle = stroke;
        }
        else {
            ctx.strokeStyle = this.ShapeColor;
        }
        ctx.lineWidth = width;
        ctx.stroke();
        //starting a new path from the head of the arrow to one of the sides of the point
        ctx.beginPath();
        ctx.moveTo(tox, toy);
        ctx.lineTo(tox - headlen * Math.cos(angle - Math.PI / 7), toy - headlen * Math.sin(angle - Math.PI / 7));
        //path from the side point of the arrow, to the other side point
        ctx.lineTo(tox - headlen * Math.cos(angle + Math.PI / 7), toy - headlen * Math.sin(angle + Math.PI / 7));
        //path from the side point back to the tip of the arrow, and then again to the opposite side point
        ctx.lineTo(tox, toy);
        ctx.lineTo(tox - headlen * Math.cos(angle - Math.PI / 7), toy - headlen * Math.sin(angle - Math.PI / 7));
        //draws the paths created above
        if (this.MultipleColors) {
            ctx.strokeStyle = stroke;
        }
        else {
            ctx.strokeStyle = this.ShapeColor;
        }
        ctx.lineWidth = width;
        ctx.stroke();
        if (this.MultipleColors) {
            ctx.fillStyle = stroke;
        }
        else {
            ctx.fillStyle = this.ShapeColor;
        }
        ctx.fill();
    }
    _drawLine(ctx, fromx, fromy, tox, toy, fill, stroke, strokeWidth) {
        console.log(fromx, fromy, tox, toy);
        ctx.beginPath();
        ctx.moveTo(fromx, fromy);
        ctx.lineTo(tox, toy);
        if (this.MultipleColors) {
            ctx.strokeStyle = stroke;
        }
        else {
            ctx.strokeStyle = this.ShapeColor;
        }
        ctx.lineWidth = strokeWidth;
        ctx.stroke();
    }
    _draw(ctx, fromx, fromy, tox, toy, fill, stroke, strokeWidth) {
        ctx.beginPath();
        ctx.moveTo(fromx, fromy);
        ctx.lineTo(tox, toy);
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        if (this.MultipleColors) {
            ctx.strokeStyle = stroke;
        }
        else {
            ctx.strokeStyle = this.ShapeColor;
        }
        ctx.lineWidth = strokeWidth;
        ctx.stroke();
        ctx.closePath();
    }
};
PhotoviewerComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
PhotoviewerComponent.propDecorators = {
    Header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['header',] }],
    EditContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['editContainer',] }],
    IamgeCanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['imgcanvas',] }],
    Image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    ShowDetails: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    ShapeColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    Shapes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    MultipleColors: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
PhotoviewerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-photoviewer',
        template: _photo_viewer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_photo_viewer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PhotoviewerComponent);



/***/ }),

/***/ 5642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _simple_color_picker_simple_color_picker_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simple-color-picker/simple-color-picker.component */ 1034);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../material.module */ 3806);
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-color-picker */ 7038);








let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [
            _simple_color_picker_simple_color_picker_component__WEBPACK_IMPORTED_MODULE_0__.SimpleColorPickerComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
            ngx_color_picker__WEBPACK_IMPORTED_MODULE_7__.ColorPickerModule
        ],
        exports: [
            _simple_color_picker_simple_color_picker_component__WEBPACK_IMPORTED_MODULE_0__.SimpleColorPickerComponent
        ]
    })
], ComponentsModule);



/***/ }),

/***/ 1034:
/*!*********************************************************************************!*\
  !*** ./src/app/components/simple-color-picker/simple-color-picker.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimpleColorPickerComponent": () => (/* binding */ SimpleColorPickerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _simple_color_picker_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simple-color-picker.component.html?ngResource */ 7850);
/* harmony import */ var _simple_color_picker_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple-color-picker.component.scss?ngResource */ 6699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @angular-eslint/component-selector */

let SimpleColorPickerComponent = class SimpleColorPickerComponent {
    constructor() {
        this.Color = '#2196F3';
        this.SizeClass = 'smIconBtn';
        this.Vertical = false;
        this.PickerClass = 'black-text';
        this.SingleMode = false;
        this.MobileMode = false;
        this.DefaultPickerClass = null;
        this.ColorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.SetColor = (val) => {
            this.Color = val;
            this.ColorChange.emit(val);
            if (!this.NotStandardColor()) {
                this.PickerClass = this.DefaultPickerClass;
            }
            else {
                let rgb = val.substring(5, val.length - 1).replace(/ /g, '').split(',');
                if (rgb.length === 4) {
                    rgb.pop();
                }
                let lessthan128 = false;
                for (let val of rgb) {
                    if (Number(val) < 128) {
                        lessthan128 = true;
                    }
                }
                if (lessthan128) {
                    this.PickerClass = 'white-text';
                }
                else {
                    this.PickerClass = 'black-text';
                }
            }
        };
        this.NotStandardColor = () => {
            if (this.Color === '#2196F3') {
                return false;
            }
            else if (this.Color === '#4CAF50') {
                return false;
            }
            else if (this.Color === '#ffeb3b') {
                return false;
            }
            else if (this.Color === '#ff9800') {
                return false;
            }
            else if (this.Color === '#9c27b0') {
                return false;
            }
            else if (this.Color === '#F44336') {
                return false;
            }
            else {
                return true;
            }
        };
        if (this.Color == null) { }
        else {
            this.SetColor('#000000');
        }
    }
    ngOnInit() {
        this.DefaultPickerClass = this.PickerClass;
    }
};
SimpleColorPickerComponent.ctorParameters = () => [];
SimpleColorPickerComponent.propDecorators = {
    Color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    SizeClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    Vertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    PickerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    SingleMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    MobileMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    ColorChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
SimpleColorPickerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'cc-simple-color-picker',
        template: _simple_color_picker_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_simple_color_picker_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SimpleColorPickerComponent);



/***/ }),

/***/ 4830:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": () => (/* binding */ CameraDirection),
/* harmony export */   "CameraResultType": () => (/* binding */ CameraResultType),
/* harmony export */   "CameraSource": () => (/* binding */ CameraSource)
/* harmony export */ });
var CameraSource;

(function (CameraSource) {
  /**
   * Prompts the user to select either the photo album or take a photo.
   */
  CameraSource["Prompt"] = "PROMPT";
  /**
   * Take a new photo using the camera.
   */

  CameraSource["Camera"] = "CAMERA";
  /**
   * Pick an existing photo from the gallery or photo album.
   */

  CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));

var CameraDirection;

(function (CameraDirection) {
  CameraDirection["Rear"] = "REAR";
  CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));

var CameraResultType;

(function (CameraResultType) {
  CameraResultType["Uri"] = "uri";
  CameraResultType["Base64"] = "base64";
  CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));

/***/ }),

/***/ 4241:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Camera": () => (/* binding */ Camera),
/* harmony export */   "CameraDirection": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection),
/* harmony export */   "CameraResultType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType),
/* harmony export */   "CameraSource": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 4830);

const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 1327)).then(m => new m.CameraWeb())
});



/***/ }),

/***/ 5099:
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Capacitor": () => (/* binding */ Capacitor),
/* harmony export */   "CapacitorCookies": () => (/* binding */ CapacitorCookies),
/* harmony export */   "CapacitorException": () => (/* binding */ CapacitorException),
/* harmony export */   "CapacitorHttp": () => (/* binding */ CapacitorHttp),
/* harmony export */   "CapacitorPlatforms": () => (/* binding */ CapacitorPlatforms),
/* harmony export */   "ExceptionCode": () => (/* binding */ ExceptionCode),
/* harmony export */   "Plugins": () => (/* binding */ Plugins),
/* harmony export */   "WebPlugin": () => (/* binding */ WebPlugin),
/* harmony export */   "WebView": () => (/* binding */ WebView),
/* harmony export */   "addPlatform": () => (/* binding */ addPlatform),
/* harmony export */   "registerPlugin": () => (/* binding */ registerPlugin),
/* harmony export */   "registerWebPlugin": () => (/* binding */ registerWebPlugin),
/* harmony export */   "setPlatform": () => (/* binding */ setPlatform)
/* harmony export */ });
/* harmony import */ var _Users_petarkraguljac_Documents_CutterCroix_Source_Code_AngularIonicCamera_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);


/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = win => {
  const defaultPlatformMap = new Map();
  defaultPlatformMap.set('web', {
    name: 'web'
  });
  const capPlatforms = win.CapacitorPlatforms || {
    currentPlatform: {
      name: 'web'
    },
    platforms: defaultPlatformMap
  };

  const addPlatform = (name, platform) => {
    capPlatforms.platforms.set(name, platform);
  };

  const setPlatform = name => {
    if (capPlatforms.platforms.has(name)) {
      capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
    }
  };

  capPlatforms.addPlatform = addPlatform;
  capPlatforms.setPlatform = setPlatform;
  return capPlatforms;
};

const initPlatforms = win => win.CapacitorPlatforms = createCapacitorPlatforms(win);
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */


const CapacitorPlatforms = /*#__PURE__*/initPlatforms(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const addPlatform = CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const setPlatform = CapacitorPlatforms.setPlatform;

const legacyRegisterWebPlugin = (cap, webPlugin) => {
  var _a;

  const config = webPlugin.config;
  const Plugins = cap.Plugins;

  if (!config || !config.name) {
    // TODO: add link to upgrade guide
    throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
  } // TODO: add link to upgrade guide


  console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);

  if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
    // Add the web plugin into the plugins registry if there already isn't
    // an existing one. If it doesn't already exist, that means
    // there's no existing native implementation for it.
    // - OR -
    // If we already have a plugin registered (meaning it was defined in the native layer),
    // then we should only overwrite it if the corresponding web plugin activates on
    // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
    Plugins[config.name] = webPlugin;
  }
};

var ExceptionCode;

(function (ExceptionCode) {
  /**
   * API is not implemented.
   *
   * This usually means the API can't be used because it is not implemented for
   * the current platform.
   */
  ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
  /**
   * API is not available.
   *
   * This means the API can't be used right now because:
   *   - it is currently missing a prerequisite, such as network connectivity
   *   - it requires a particular platform or browser version
   */

  ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));

class CapacitorException extends Error {
  constructor(message, code, data) {
    super(message);
    this.message = message;
    this.code = code;
    this.data = data;
  }

}

const getPlatformId = win => {
  var _a, _b;

  if (win === null || win === void 0 ? void 0 : win.androidBridge) {
    return 'android';
  } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
    return 'ios';
  } else {
    return 'web';
  }
};

const createCapacitor = win => {
  var _a, _b, _c, _d, _e;

  const capCustomPlatform = win.CapacitorCustomPlatform || null;
  const cap = win.Capacitor || {};
  const Plugins = cap.Plugins = cap.Plugins || {};
  /**
   * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
   */

  const capPlatforms = win.CapacitorPlatforms;

  const defaultGetPlatform = () => {
    return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
  };

  const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;

  const defaultIsNativePlatform = () => getPlatform() !== 'web';

  const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;

  const defaultIsPluginAvailable = pluginName => {
    const plugin = registeredPlugins.get(pluginName);

    if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
      // JS implementation available for the current platform.
      return true;
    }

    if (getPluginHeader(pluginName)) {
      // Native implementation available.
      return true;
    }

    return false;
  };

  const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;

  const defaultGetPluginHeader = pluginName => {
    var _a;

    return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName);
  };

  const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;

  const handleError = err => win.console.error(err);

  const pluginMethodNoop = (_target, prop, pluginName) => {
    return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
  };

  const registeredPlugins = new Map();

  const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
    const registeredPlugin = registeredPlugins.get(pluginName);

    if (registeredPlugin) {
      console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
      return registeredPlugin.proxy;
    }

    const platform = getPlatform();
    const pluginHeader = getPluginHeader(pluginName);
    let jsImplementation;

    const loadPluginImplementation = /*#__PURE__*/function () {
      var _ref = (0,_Users_petarkraguljac_Documents_CutterCroix_Source_Code_AngularIonicCamera_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!jsImplementation && platform in jsImplementations) {
          jsImplementation = typeof jsImplementations[platform] === 'function' ? jsImplementation = yield jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
        } else if (capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations) {
          jsImplementation = typeof jsImplementations['web'] === 'function' ? jsImplementation = yield jsImplementations['web']() : jsImplementation = jsImplementations['web'];
        }

        return jsImplementation;
      });

      return function loadPluginImplementation() {
        return _ref.apply(this, arguments);
      };
    }();

    const createPluginMethod = (impl, prop) => {
      var _a, _b;

      if (pluginHeader) {
        const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);

        if (methodHeader) {
          if (methodHeader.rtype === 'promise') {
            return options => cap.nativePromise(pluginName, prop.toString(), options);
          } else {
            return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
          }
        } else if (impl) {
          return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
        }
      } else if (impl) {
        return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
      } else {
        throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
      }
    };

    const createPluginMethodWrapper = prop => {
      let remove;

      const wrapper = (...args) => {
        const p = loadPluginImplementation().then(impl => {
          const fn = createPluginMethod(impl, prop);

          if (fn) {
            const p = fn(...args);
            remove = p === null || p === void 0 ? void 0 : p.remove;
            return p;
          } else {
            throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
          }
        });

        if (prop === 'addListener') {
          p.remove = /*#__PURE__*/(0,_Users_petarkraguljac_Documents_CutterCroix_Source_Code_AngularIonicCamera_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return remove();
          });
        }

        return p;
      }; // Some flair ???


      wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;

      Object.defineProperty(wrapper, 'name', {
        value: prop,
        writable: false,
        configurable: false
      });
      return wrapper;
    };

    const addListener = createPluginMethodWrapper('addListener');
    const removeListener = createPluginMethodWrapper('removeListener');

    const addListenerNative = (eventName, callback) => {
      const call = addListener({
        eventName
      }, callback);

      const remove = /*#__PURE__*/function () {
        var _ref3 = (0,_Users_petarkraguljac_Documents_CutterCroix_Source_Code_AngularIonicCamera_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const callbackId = yield call;
          removeListener({
            eventName,
            callbackId
          }, callback);
        });

        return function remove() {
          return _ref3.apply(this, arguments);
        };
      }();

      const p = new Promise(resolve => call.then(() => resolve({
        remove
      })));
      p.remove = /*#__PURE__*/(0,_Users_petarkraguljac_Documents_CutterCroix_Source_Code_AngularIonicCamera_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.warn(`Using addListener() without 'await' is deprecated.`);
        yield remove();
      });
      return p;
    };

    const proxy = new Proxy({}, {
      get(_, prop) {
        switch (prop) {
          // https://github.com/facebook/react/issues/20030
          case '$$typeof':
            return undefined;

          case 'toJSON':
            return () => ({});

          case 'addListener':
            return pluginHeader ? addListenerNative : addListener;

          case 'removeListener':
            return removeListener;

          default:
            return createPluginMethodWrapper(prop);
        }
      }

    });
    Plugins[pluginName] = proxy;
    registeredPlugins.set(pluginName, {
      name: pluginName,
      proxy,
      platforms: new Set([...Object.keys(jsImplementations), ...(pluginHeader ? [platform] : [])])
    });
    return proxy;
  };

  const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin; // Add in convertFileSrc for web, it will already be available in native context

  if (!cap.convertFileSrc) {
    cap.convertFileSrc = filePath => filePath;
  }

  cap.getPlatform = getPlatform;
  cap.handleError = handleError;
  cap.isNativePlatform = isNativePlatform;
  cap.isPluginAvailable = isPluginAvailable;
  cap.pluginMethodNoop = pluginMethodNoop;
  cap.registerPlugin = registerPlugin;
  cap.Exception = CapacitorException;
  cap.DEBUG = !!cap.DEBUG;
  cap.isLoggingEnabled = !!cap.isLoggingEnabled; // Deprecated props

  cap.platform = cap.getPlatform();
  cap.isNative = cap.isNativePlatform();
  return cap;
};

const initCapacitorGlobal = win => win.Capacitor = createCapacitor(win);

const Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */

const Plugins = Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */

const registerWebPlugin = plugin => legacyRegisterWebPlugin(Capacitor, plugin);
/**
 * Base class web plugins should extend.
 */


class WebPlugin {
  constructor(config) {
    this.listeners = {};
    this.windowListeners = {};

    if (config) {
      // TODO: add link to upgrade guide
      console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
      this.config = config;
    }
  }

  addListener(eventName, listenerFunc) {
    var _this = this;

    const listeners = this.listeners[eventName];

    if (!listeners) {
      this.listeners[eventName] = [];
    }

    this.listeners[eventName].push(listenerFunc); // If we haven't added a window listener for this event and it requires one,
    // go ahead and add it

    const windowListener = this.windowListeners[eventName];

    if (windowListener && !windowListener.registered) {
      this.addWindowListener(windowListener);
    }

    const remove = /*#__PURE__*/function () {
      var _ref5 = (0,_Users_petarkraguljac_Documents_CutterCroix_Source_Code_AngularIonicCamera_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return _this.removeListener(eventName, listenerFunc);
      });

      return function remove() {
        return _ref5.apply(this, arguments);
      };
    }();

    const p = Promise.resolve({
      remove
    });
    Object.defineProperty(p, 'remove', {
      value: function () {
        var _ref6 = (0,_Users_petarkraguljac_Documents_CutterCroix_Source_Code_AngularIonicCamera_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          console.warn(`Using addListener() without 'await' is deprecated.`);
          yield remove();
        });

        return function value() {
          return _ref6.apply(this, arguments);
        };
      }()
    });
    return p;
  }

  removeAllListeners() {
    var _this2 = this;

    return (0,_Users_petarkraguljac_Documents_CutterCroix_Source_Code_AngularIonicCamera_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.listeners = {};

      for (const listener in _this2.windowListeners) {
        _this2.removeWindowListener(_this2.windowListeners[listener]);
      }

      _this2.windowListeners = {};
    })();
  }

  notifyListeners(eventName, data) {
    const listeners = this.listeners[eventName];

    if (listeners) {
      listeners.forEach(listener => listener(data));
    }
  }

  hasListeners(eventName) {
    return !!this.listeners[eventName].length;
  }

  registerWindowListener(windowEventName, pluginEventName) {
    this.windowListeners[pluginEventName] = {
      registered: false,
      windowEventName,
      pluginEventName,
      handler: event => {
        this.notifyListeners(pluginEventName, event);
      }
    };
  }

  unimplemented(msg = 'not implemented') {
    return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
  }

  unavailable(msg = 'not available') {
    return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
  }

  removeListener(eventName, listenerFunc) {
    var _this3 = this;

    return (0,_Users_petarkraguljac_Documents_CutterCroix_Source_Code_AngularIonicCamera_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const listeners = _this3.listeners[eventName];

      if (!listeners) {
        return;
      }

      const index = listeners.indexOf(listenerFunc);

      _this3.listeners[eventName].splice(index, 1); // If there are no more listeners for this type of event,
      // remove the window listener


      if (!_this3.listeners[eventName].length) {
        _this3.removeWindowListener(_this3.windowListeners[eventName]);
      }
    })();
  }

  addWindowListener(handle) {
    window.addEventListener(handle.windowEventName, handle.handler);
    handle.registered = true;
  }

  removeWindowListener(handle) {
    if (!handle) {
      return;
    }

    window.removeEventListener(handle.windowEventName, handle.handler);
    handle.registered = false;
  }

}

const WebView = /*#__PURE__*/registerPlugin('WebView');
/******** END WEB VIEW PLUGIN ********/

/******** COOKIES PLUGIN ********/

/**
 * Safely web encode a string value (inspired by js-cookie)
 * @param str The string value to encode
 */

const encode = str => encodeURIComponent(str).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);

class CapacitorCookiesPluginWeb extends WebPlugin {
  setCookie(options) {
    return (0,_Users_petarkraguljac_Documents_CutterCroix_Source_Code_AngularIonicCamera_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Safely Encoded Key/Value
        const encodedKey = encode(options.key);
        const encodedValue = encode(options.value); // Clean & sanitize options

        const expires = `; expires=${(options.expires || '').replace('expires=', '')}`; // Default is "; expires="

        const path = (options.path || '/').replace('path=', ''); // Default is "path=/"

        document.cookie = `${encodedKey}=${encodedValue || ''}${expires}; path=${path}`;
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }

  deleteCookie(options) {
    return (0,_Users_petarkraguljac_Documents_CutterCroix_Source_Code_AngularIonicCamera_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        document.cookie = `${options.key}=; Max-Age=0`;
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }

  clearCookies() {
    return (0,_Users_petarkraguljac_Documents_CutterCroix_Source_Code_AngularIonicCamera_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const cookies = document.cookie.split(';') || [];

        for (const cookie of cookies) {
          document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }

  clearAllCookies() {
    var _this4 = this;

    return (0,_Users_petarkraguljac_Documents_CutterCroix_Source_Code_AngularIonicCamera_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this4.clearCookies();
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }

}

const CapacitorCookies = registerPlugin('CapacitorCookies', {
  web: () => new CapacitorCookiesPluginWeb()
}); // UTILITY FUNCTIONS

/**
 * Read in a Blob value and return it as a base64 string
 * @param blob The blob value to convert to a base64 string
 */

const readBlobAsBase64 = /*#__PURE__*/function () {
  var _ref7 = (0,_Users_petarkraguljac_Documents_CutterCroix_Source_Code_AngularIonicCamera_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const base64String = reader.result; // remove prefix "data:application/pdf;base64,"

        resolve(base64String.indexOf(',') >= 0 ? base64String.split(',')[1] : base64String);
      };

      reader.onerror = error => reject(error);

      reader.readAsDataURL(blob);
    });
  });

  return function readBlobAsBase64(_x) {
    return _ref7.apply(this, arguments);
  };
}();
/**
 * Normalize an HttpHeaders map by lowercasing all of the values
 * @param headers The HttpHeaders object to normalize
 */


const normalizeHttpHeaders = (headers = {}) => {
  const originalKeys = Object.keys(headers);
  const loweredKeys = Object.keys(headers).map(k => k.toLocaleLowerCase());
  const normalized = loweredKeys.reduce((acc, key, index) => {
    acc[key] = headers[originalKeys[index]];
    return acc;
  }, {});
  return normalized;
};
/**
 * Builds a string of url parameters that
 * @param params A map of url parameters
 * @param shouldEncode true if you should encodeURIComponent() the values (true by default)
 */


const buildUrlParams = (params, shouldEncode = true) => {
  if (!params) return null;
  const output = Object.entries(params).reduce((accumulator, entry) => {
    const [key, value] = entry;
    let encodedValue;
    let item;

    if (Array.isArray(value)) {
      item = '';
      value.forEach(str => {
        encodedValue = shouldEncode ? encodeURIComponent(str) : str;
        item += `${key}=${encodedValue}&`;
      }); // last character will always be "&" so slice it off

      item.slice(0, -1);
    } else {
      encodedValue = shouldEncode ? encodeURIComponent(value) : value;
      item = `${key}=${encodedValue}`;
    }

    return `${accumulator}&${item}`;
  }, ''); // Remove initial "&" from the reduce

  return output.substr(1);
};
/**
 * Build the RequestInit object based on the options passed into the initial request
 * @param options The Http plugin options
 * @param extra Any extra RequestInit values
 */


const buildRequestInit = (options, extra = {}) => {
  const output = Object.assign({
    method: options.method || 'GET',
    headers: options.headers
  }, extra); // Get the content-type

  const headers = normalizeHttpHeaders(options.headers);
  const type = headers['content-type'] || ''; // If body is already a string, then pass it through as-is.

  if (typeof options.data === 'string') {
    output.body = options.data;
  } // Build request initializers based off of content-type
  else if (type.includes('application/x-www-form-urlencoded')) {
    const params = new URLSearchParams();

    for (const [key, value] of Object.entries(options.data || {})) {
      params.set(key, value);
    }

    output.body = params.toString();
  } else if (type.includes('multipart/form-data')) {
    const form = new FormData();

    if (options.data instanceof FormData) {
      options.data.forEach((value, key) => {
        form.append(key, value);
      });
    } else {
      for (const key of Object.keys(options.data)) {
        form.append(key, options.data[key]);
      }
    }

    output.body = form;
    const headers = new Headers(output.headers);
    headers.delete('content-type'); // content-type will be set by `window.fetch` to includy boundary

    output.headers = headers;
  } else if (type.includes('application/json') || typeof options.data === 'object') {
    output.body = JSON.stringify(options.data);
  }

  return output;
}; // WEB IMPLEMENTATION


class CapacitorHttpPluginWeb extends WebPlugin {
  /**
   * Perform an Http request given a set of options
   * @param options Options to build the HTTP request
   */
  request(options) {
    return (0,_Users_petarkraguljac_Documents_CutterCroix_Source_Code_AngularIonicCamera_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const requestInit = buildRequestInit(options, options.webFetchExtra);
      const urlParams = buildUrlParams(options.params, options.shouldEncodeUrlParams);
      const url = urlParams ? `${options.url}?${urlParams}` : options.url;
      const response = yield fetch(url, requestInit);
      const contentType = response.headers.get('content-type') || ''; // Default to 'text' responseType so no parsing happens

      let {
        responseType = 'text'
      } = response.ok ? options : {}; // If the response content-type is json, force the response to be json

      if (contentType.includes('application/json')) {
        responseType = 'json';
      }

      let data;
      let blob;

      switch (responseType) {
        case 'arraybuffer':
        case 'blob':
          blob = yield response.blob();
          data = yield readBlobAsBase64(blob);
          break;

        case 'json':
          data = yield response.json();
          break;

        case 'document':
        case 'text':
        default:
          data = yield response.text();
      } // Convert fetch headers to Capacitor HttpHeaders


      const headers = {};
      response.headers.forEach((value, key) => {
        headers[key] = value;
      });
      return {
        data,
        headers,
        status: response.status,
        url: response.url
      };
    })();
  }
  /**
   * Perform an Http GET request given a set of options
   * @param options Options to build the HTTP request
   */


  get(options) {
    var _this5 = this;

    return (0,_Users_petarkraguljac_Documents_CutterCroix_Source_Code_AngularIonicCamera_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this5.request(Object.assign(Object.assign({}, options), {
        method: 'GET'
      }));
    })();
  }
  /**
   * Perform an Http POST request given a set of options
   * @param options Options to build the HTTP request
   */


  post(options) {
    var _this6 = this;

    return (0,_Users_petarkraguljac_Documents_CutterCroix_Source_Code_AngularIonicCamera_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this6.request(Object.assign(Object.assign({}, options), {
        method: 'POST'
      }));
    })();
  }
  /**
   * Perform an Http PUT request given a set of options
   * @param options Options to build the HTTP request
   */


  put(options) {
    var _this7 = this;

    return (0,_Users_petarkraguljac_Documents_CutterCroix_Source_Code_AngularIonicCamera_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this7.request(Object.assign(Object.assign({}, options), {
        method: 'PUT'
      }));
    })();
  }
  /**
   * Perform an Http PATCH request given a set of options
   * @param options Options to build the HTTP request
   */


  patch(options) {
    var _this8 = this;

    return (0,_Users_petarkraguljac_Documents_CutterCroix_Source_Code_AngularIonicCamera_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this8.request(Object.assign(Object.assign({}, options), {
        method: 'PATCH'
      }));
    })();
  }
  /**
   * Perform an Http DELETE request given a set of options
   * @param options Options to build the HTTP request
   */


  delete(options) {
    var _this9 = this;

    return (0,_Users_petarkraguljac_Documents_CutterCroix_Source_Code_AngularIonicCamera_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this9.request(Object.assign(Object.assign({}, options), {
        method: 'DELETE'
      }));
    })();
  }

}

const CapacitorHttp = registerPlugin('CapacitorHttp', {
  web: () => new CapacitorHttpPluginWeb()
});
/******** END HTTP PLUGIN ********/



/***/ }),

/***/ 6600:
/*!******************************************************************************************!*\
  !*** ./node_modules/capacitor-community-multilens-camerapreview/dist/esm/definitions.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 7952:
/*!************************************************************************************!*\
  !*** ./node_modules/capacitor-community-multilens-camerapreview/dist/esm/index.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraPreview": () => (/* binding */ CameraPreview)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 6600);

const CameraPreview = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('CameraPreview', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-community-multilens-camerapreview_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 6682)).then(m => new m.CameraPreviewWeb())
});



/***/ }),

/***/ 5121:
/*!****************************************************!*\
  !*** ./src/app/Camera/camera.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = ".imgCell {\n  width: 28.125px;\n  height: 50px;\n}\n\n.imgCell .img {\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 28.125px;\n  height: 50px;\n  border-radius: 3px;\n  border: 1px solid #fff;\n}\n\n.scrollX {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\n.cameraTrigger {\n  width: 72px !important;\n  height: 72px !important;\n  line-height: normal !important;\n  opacity: 0.85;\n}\n\n.cameraTrigger .fa-circle {\n  font-size: 56px !important;\n  border: 3px solid rgba(0, 0, 0, 0.421);\n  border-radius: 50%;\n  line-height: normal !important;\n}\n\n#content {\n  --background: transparent !important;\n}\n\n.fullScreenModal {\n  --ion-background-color:transparent;\n}\n\n.zoompill {\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 50px;\n}\n\n.semiGrey {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.barelyGrey {\n  background-color: rgba(0, 0, 0, 0.25);\n}\n\n.blackTrans {\n  background-color: rgba(0, 0, 0, 0.25);\n}\n\nion-app, ion-content, .nav-decor {\n  background-color: transparent !important;\n}\n\n.viewGalleryBtnContainer {\n  position: relative;\n  left: calc(50vw - 18px);\n  bottom: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbWVyYS5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9Tb3VyY2UlMjBDb2RlL0FuZ3VsYXJJb25pY0NhbWVyYS9zcmMvYXBwL0NhbWVyYS9jYW1lcmEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNFLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ0VGOztBREFBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ0dKOztBRERBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQ0lKOztBREZBO0VBQ0ksMEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUNLSjs7QURIQTtFQUNJLG9DQUFBO0FDTUo7O0FESkM7RUFDRyxrQ0FBQTtBQ09KOztBRExDO0VBQ0csb0NBQUE7RUFDQSxtQkFBQTtBQ1FKOztBRE5DO0VBQ0csb0NBQUE7QUNTSjs7QURQQztFQUNHLHFDQUFBO0FDVUo7O0FEUkM7RUFDRyxxQ0FBQTtBQ1dKOztBRFRDO0VBQ0Usd0NBQUE7QUNZSDs7QURWQztFQUNDLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDYUYiLCJmaWxlIjoiY2FtZXJhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWdDZWxse1xuICB3aWR0aDogY2FsYyg1MHB4ICogKDkvMTYpKTtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuLmltZ0NlbGwgLmltZ3tcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICB3aWR0aDogY2FsYyg1MHB4ICogKDkvMTYpKTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG59XG4uc2Nyb2xsWHtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cbi5jYW1lcmFUcmlnZ2Vye1xuICAgIHdpZHRoOiA3MnB4IWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDcycHghaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWwhaW1wb3J0YW50O1xuICAgIG9wYWNpdHk6IC44NTtcbn1cbi5jYW1lcmFUcmlnZ2VyIC5mYS1jaXJjbGV7XG4gICAgZm9udC1zaXplOiA1NnB4IWltcG9ydGFudDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDIxKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbCFpbXBvcnRhbnQ7XG59XG4jY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gfVxuIC5mdWxsU2NyZWVuTW9kYWx7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiB9XG4gLnpvb21waWxse1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuIH1cbiAuc2VtaUdyZXl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuIH1cbiAuYmFyZWx5R3JleXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuIH1cbiAuYmxhY2tUcmFuc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuIH1cbiBpb24tYXBwLCBpb24tY29udGVudCwgLm5hdi1kZWNvciB7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuIH1cbiAudmlld0dhbGxlcnlCdG5Db250YWluZXJ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogY2FsYyg1MHZ3IC0gMThweCk7XG4gIGJvdHRvbTogMThweDtcbiB9XG4iLCIuaW1nQ2VsbCB7XG4gIHdpZHRoOiAyOC4xMjVweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uaW1nQ2VsbCAuaW1nIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICB3aWR0aDogMjguMTI1cHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xufVxuXG4uc2Nyb2xsWCB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLmNhbWVyYVRyaWdnZXIge1xuICB3aWR0aDogNzJweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDcycHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjg1O1xufVxuXG4uY2FtZXJhVHJpZ2dlciAuZmEtY2lyY2xlIHtcbiAgZm9udC1zaXplOiA1NnB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40MjEpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbn1cblxuI2NvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5mdWxsU2NyZWVuTW9kYWwge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xufVxuXG4uem9vbXBpbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi5zZW1pR3JleSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmJhcmVseUdyZXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG4uYmxhY2tUcmFucyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbmlvbi1hcHAsIGlvbi1jb250ZW50LCAubmF2LWRlY29yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLnZpZXdHYWxsZXJ5QnRuQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiBjYWxjKDUwdncgLSAxOHB4KTtcbiAgYm90dG9tOiAxOHB4O1xufSJdfQ== */";

/***/ }),

/***/ 5375:
/*!******************************************************************!*\
  !*** ./src/app/Camera/gallery/gallery.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".imgCell {\n  width: 33.3333333333vw;\n  height: 59.2592592593vw;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n\n.imgWrapper {\n  max-height: 59.2592592593vw;\n}\n\n.imgBtn {\n  width: 33.3333333333vw;\n  height: 140px;\n}\n\n.whiteBorder {\n  border: 1px solid #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnkuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9Tb3VyY2UlMjBDb2RlL0FuZ3VsYXJJb25pY0NhbWVyYS9zcmMvYXBwL0NhbWVyYS9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0FDQ0o7O0FEQ0U7RUFDRSwyQkFBQTtBQ0VKOztBREFFO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0FDR0o7O0FEREU7RUFDRSxzQkFBQTtBQ0lKIiwiZmlsZSI6ImdhbGxlcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nQ2VsbHtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAvIDMpO1xuICAgIGhlaWdodDogY2FsYygoMTAwdncgLyAzKSAqICgxNi85KSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgfVxuICAuaW1nV3JhcHBlcntcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKCgxMDB2dyAvIDMpICogKDE2LzkpKTtcbiAgfVxuICAuaW1nQnRue1xuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC8gMyk7XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgfVxuICAud2hpdGVCb3JkZXJ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgfSIsIi5pbWdDZWxsIHtcbiAgd2lkdGg6IDMzLjMzMzMzMzMzMzN2dztcbiAgaGVpZ2h0OiA1OS4yNTkyNTkyNTkzdnc7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cblxuLmltZ1dyYXBwZXIge1xuICBtYXgtaGVpZ2h0OiA1OS4yNTkyNTkyNTkzdnc7XG59XG5cbi5pbWdCdG4ge1xuICB3aWR0aDogMzMuMzMzMzMzMzMzM3Z3O1xuICBoZWlnaHQ6IDE0MHB4O1xufVxuXG4ud2hpdGVCb3JkZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xufSJdfQ== */";

/***/ }),

/***/ 6885:
/*!****************************************************************************!*\
  !*** ./src/app/Camera/photo-viewer/photo-viewer.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ".imgContainer {\n  border: 1px solid #fff;\n}\n\n#imgcanvas {\n  background-size: contain;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\n.strokeContainer {\n  z-index: 9999;\n  background-color: rgba(0, 0, 0, 0.8);\n  border-radius: 15px;\n  position: fixed;\n  width: 80px;\n  top: calc(50vh - 40px);\n  left: calc(50vw - 40px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob3RvLXZpZXdlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL1NvdXJjZSUyMENvZGUvQW5ndWxhcklvbmljQ2FtZXJhL3NyYy9hcHAvQ2FtZXJhL3Bob3RvLXZpZXdlci9waG90by12aWV3ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKOztBRENBO0VBQ0ksd0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0FDRUo7O0FEQUE7RUFDSSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0dKIiwiZmlsZSI6InBob3RvLXZpZXdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWdDb250YWluZXJ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbn1cbiNpbWdjYW52YXN7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5zdHJva2VDb250YWluZXJ7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgdG9wOiBjYWxjKDUwdmggLSA0MHB4KTtcbiAgICBsZWZ0OiBjYWxjKDUwdncgLSA0MHB4KTtcbn0iLCIuaW1nQ29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbn1cblxuI2ltZ2NhbnZhcyB7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLnN0cm9rZUNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogODBweDtcbiAgdG9wOiBjYWxjKDUwdmggLSA0MHB4KTtcbiAgbGVmdDogY2FsYyg1MHZ3IC0gNDBweCk7XG59Il19 */";

/***/ }),

/***/ 6699:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/simple-color-picker/simple-color-picker.component.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = ".smIconBtn i, .xsIconBtn i {\n  line-height: 0 !important;\n}\n\n.bordered {\n  border: 2px solid #fff;\n}\n\n.menubg {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbXBsZS1jb2xvci1waWNrZXIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9Tb3VyY2UlMjBDb2RlL0FuZ3VsYXJJb25pY0NhbWVyYS9zcmMvYXBwL2NvbXBvbmVudHMvc2ltcGxlLWNvbG9yLXBpY2tlci9zaW1wbGUtY29sb3ItcGlja2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0kseUJBQUE7QUNBUjs7QURHQTtFQUNJLHNCQUFBO0FDQUo7O0FERUE7RUFDSSxzQ0FBQTtBQ0NKIiwiZmlsZSI6InNpbXBsZS1jb2xvci1waWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc21JY29uQnRuLCAueHNJY29uQnRue1xuICAgIGl7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwIWltcG9ydGFudDtcbiAgICB9XG59XG4uYm9yZGVyZWR7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbn1cbi5tZW51Ymd7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG59IiwiLnNtSWNvbkJ0biBpLCAueHNJY29uQnRuIGkge1xuICBsaW5lLWhlaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyZWQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xufVxuXG4ubWVudWJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG59Il19 */";

/***/ }),

/***/ 5910:
/*!****************************************************!*\
  !*** ./src/app/Camera/camera.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<div class=\"flexWrapper\">\n  <div class=\"flexColumn\">\n    <div class=\"shrink\" [ngClass]=\"{'blackTrans': CameraActive, 'black': !CameraActive}\">\n      <div class=\"iosTop\">\n        <div class=\"flexRow\">\n          <div class=\"grow\"></div>\n          <div class=\"shrink p5\">\n            <button mat-icon-button (click)=\"Close()\" class=\"blue white-text\"><i class=\"fa fa-power-off\"></i></button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"grow\" #content style=\"overflow: hidden;\">\n      <div class=\"flexColumn\">\n        <div class=\"shrink\" [ngClass]=\"{'black': !CameraActive}\">\n          <div class=\"flexRow\">\n            <div class=\"shrink p20\" *ngIf=\"HasFlash && CameraActive\">\n              <button mat-icon-button class=\"white-text\" \n                      [ngClass]=\"{'amber darken-2': Flash === 'on', 'semiGrey': Flash === 'off', 'blue': Flash === 'torch'}\" (click)=\"CycleFlash()\">\n                <i class=\"fa\" [ngClass]=\"{'fa-bolt': Flash !== 'torch', 'fa-lightbulb': Flash === 'torch'}\"></i>\n              </button>\n            </div>\n            <div class=\"grow\"></div>\n            <div class=\"shrink p20\">\n              <button mat-icon-button class=\"white-text semiGrey\" (click)=\"FlipCam()\" *ngIf=\"CameraActive\">\n                <i class=\"fa fa-refresh\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"grow\" [ngClass]=\"{'black': !CameraActive}\">\n          <ion-content id=\"content\" style=\"overflow: hidden;\"></ion-content>\n          <img [src]=\"LoadedImage\" #imagePlaceholder class=\"hidden\">\n        </div>\n        <div class=\"shrink pb10 pt10\" [ngClass]=\"{'black': !CameraActive}\">\n          <div class=\"flexRow\">\n            <div class=\"grow\">\n              \n              <ng-container *ngIf=\"Platform === 'ios' && ZoomLevels.length > 1\">\n                <div class=\"align\" *ngIf=\"!Front && CameraActive && ZoomLevels?.length\">\n                  <div class=\"p5 zoompill\">\n                    <div class=\"flexRow\">\n                      <div class=\"shrink p5\" *ngFor=\"let zoom of ZoomLevels; let i = index;\">\n                        <div class=\"align\">\n                          <button mat-icon-button (click)=\"SetZoom(zoom)\" [ngClass]=\"{'smIconBtn grey amber-text mat-elevation-z3': Zoom === zoom, 'xsIconBtn white-text': Zoom !== zoom}\">\n                              <ng-container *ngIf=\"zoom === 'ultra'\">\n                                  .5\n                                </ng-container>\n                                <ng-container *ngIf=\"zoom === 'wide'\">\n                                  1\n                                </ng-container>\n                                <ng-container *ngIf=\"zoom === 'tele'\">\n                                  2\n                                </ng-container>\n                              <span class=\"f8\" *ngIf=\"Zoom === zoom\">x</span>\n                          </button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </ng-container>\n              \n              \n\n            </div>\n            <div class=\"shrink p5\">\n              <button mat-icon-button class=\"white cameraTrigger\" [disabled]=\"!CameraActive\" (click)=\"takePicture()\">\n                <ng-container *ngIf=\"CameraActive\">\n                  <i class=\"fa fa-circle white-text\"></i>\n                </ng-container>\n                <ng-container *ngIf=\"!CameraActive\">\n                  <i class=\"fa fa-spinner fa-spin grey-text text lighten-2\"></i>\n                </ng-container>\n              </button>\n            </div>\n            <div class=\"grow\">\n              <div class=\"flexRow\">\n                <div class=\"grow\">\n                </div>\n                <div class=\"shrink pr20\">\n                  <div class=\"align\">\n                    <button mat-icon-button class=\"white-text semiGrey\" (click)=\"PickFromGallery()\">\n                      <i class=\"fa fa-images\"></i>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"shrink\" [ngClass]=\"{'blackTrans': CameraActive, 'black': !CameraActive}\">\n          <div class=\"flexRow\">\n            <div class=\"shrink p5 pt10\" *ngIf=\"Images.length\">\n              <button mat-icon-button class=\"white-text\" (click)=\"LaunchGallery()\">\n                <i class=\"fa fa-chevron-up\"></i>\n              </button>\n            </div>\n            <div class=\"grow\">\n              <div class=\"flexRow scrollX\" #thumbnails>\n                <ng-container *ngFor=\"let img of Images\">\n                  <div class=\"shrink p5\">\n                    <div class=\"imgCell\" >\n                      <div class=\"img\" [ngStyle]=\"{ 'background-image': 'url(' + img.Data + ')'}\" (click)=\"ViewImage(img)\"></div>\n                    </div>\n                  </div>\n                </ng-container>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"shrink\" [ngClass]=\"{'blackTrans': CameraActive, 'black': !CameraActive}\">\n      <div class=\"iosBottom\">\n      </div>\n    </div>\n  </div>\n</div>";

/***/ }),

/***/ 3029:
/*!******************************************************************!*\
  !*** ./src/app/Camera/gallery/gallery.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"flexWrapper\">\n  <div class=\"flexColumn\">\n    <div class=\"shrink grey black\">\n      <div class=\"iosTop\">\n        <div class=\"flexRow\">\n          <div class=\"shrink p5\">\n            <button mat-icon-button class=\"white-text\" (click)=\"Close()\">\n              <i class=\"fa fa-chevron-down\"></i>\n            </button>\n          </div>\n          <div class=\"grow\">\n\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"grow grey darken-2 scrollY\">\n      <div class=\"flexColumn\">\n        <div class=\"shrink\">\n          <div class=\"flexRow\" style=\"flex-wrap: wrap;\">\n            <div class=\"shrink imgWrapper\">\n              <div class=\"imgCell black whiteBorder\" (click)=\"Close()\">\n                <div class=\"align\">\n                  <i class=\"fa fa-camera grey-text f22\"></i>\n                </div>\n              </div>\n            </div>\n            <ng-container *ngFor=\"let img of Images\"> \n              <div class=\"shrink imgWrapper\">\n                <div class=\"imgCell black whiteBorder\" (click)=\"ViewImage(img)\" [ngStyle]=\"{ 'background-image': 'url(' + img.Data + ')'}\">\n                  <div class=\"flexRow\">\n                    <div class=\"shrink\"></div>\n                    <button mat-icon-button class=\"mdIconBtn\" (click)=\"ToggleImg(img, $event)\">\n                      <i [ngClass]=\"{'far fa-circle white-text': !img.Selected, 'fa fa-check-circle primary-text': img.Selected}\"></i>\n                    </button>\n                    <div class=\"grow right\">\n                      \n                    </div>\n                  </div>\n                </div>\n              </div>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"shrink grey lighten-4\"  *ngIf=\"SelectedImages > 0\">\n      <div class=\"iosBottom\">\n        <div class=\"flexRow\">\n          <div class=\"shrink p5\">\n            <button mat-button class=\"black-text\" (click)=\"UnselectAll()\">\n              Unselect All\n            </button>\n          </div>\n          <div class=\"grow\"></div>\n          <div class=\"shrink p5\">\n            <button mat-button class=\"danger white-text\" (click)=\"DeleteSelected()\">\n             <i class=\"fa fa-trash-o mr5\"></i> Delete {{SelectedImages}} Photo(s)\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";

/***/ }),

/***/ 1719:
/*!****************************************************************************!*\
  !*** ./src/app/Camera/photo-viewer/photo-viewer.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"flexWrapper\">\n  <div class=\"flexColumn\">\n    <div class=\"shrink black white-text\" #header>\n      <div class=\"iosTop\">\n        <div class=\"flexRow\">\n          <div class=\"grow p5\">\n            <button mat-button disabled class=\"white-text\">\n              Edit Photo\n            </button>\n          </div>\n          <div class=\"shrink p5\">\n            <button mat-button class=\"white-text\" (click)=\"Close()\">\n              <i class=\"fa fa-undo mr5\"></i>Cancel\n            </button>\n          </div>\n          <div class=\"shrink p5\">\n            <button mat-button class=\"primary white-text\" (click)=\"Close(true)\">\n              <i class=\"fa fa-save mr5 black-text\"></i>Save\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <ng-container *ngIf=\"!ShowDetails\">\n      <div class=\"grow p5 grey darken-2 center\" #editContainer>\n        <canvas #imgcanvas id=\"imgcanvas\" class=\"imgContainer mat-elevation-z2\"\n                (touchstart)=\"TouchStart($event)\" \n                (touchmove)=\"TouchMove($event)\" \n                (touchend)=\"TouchEnd($event)\"\n                [style.width.px]=\"GetWidth()\"\n                [style.height.px]=\"GetHeight()\"\n                [style.background-image]=\"'url(' + Image.Data + ')'\">\n        </canvas>\n      </div>\n      <div class=\"shrink grey darken-2 p10 pt5\" style=\"z-index: 99;\">\n        <div class=\"flexRow grey darken-3 white-text rounded\">\n          <div class=\"grow p5\">\n            <div class=\"align left\" *ngIf=\"MyObjects.length\">\n              <button mat-icon-button (click)=\"Undo()\" class=\"grey-text text-lighten-2\">\n                <i class=\"fa fa-undo\"></i>\n              </button>\n            </div>\n          </div>\n          <div class=\"shrink p5\" *ngFor=\"let shape of Shapes\">\n            <div class=\"align\">\n              <button mat-icon-button (touchstart)=\"SelectShape(shape, $event)\" \n                                      (touchmove)=\"ChangeShapeStroke($event)\" \n                                      (touchend)=\"SetShapeStroke($event)\"\n                                      [ngClass]=\"{'grey darken-4': SelectedShape?.Label === shape.Label}\">\n                <i class=\"{{shape.Icon}}\" [ngStyle]=\"{'color': (SelectedShape?.Label === shape.Label) ? ShapeColor : '#ffffff'}\"></i>\n              </button>\n            </div>\n          </div>\n          <div class=\"grow p5\">\n            <div class=\"align right\">\n              <cc-simple-color-picker [Color]=\"ShapeColor\" [MobileMode]=\"true\" [SizeClass]=\"'xsIconBtn'\" (ColorChange)=\"ChangeShapeColor($event)\"></cc-simple-color-picker>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n    <div class=\"grey white-text\" [ngClass]=\"{'grow lighten-5': ShowDetails, 'shrink darken-4': !ShowDetails}\">\n      <div class=\"iosBottom\">\n        <div class=\"flexColumn\">\n          <div class=\"shrink grey darken-4\">\n            <div class=\"flexRow\">\n              <div class=\"shrink p5\">\n                <button mat-icon-button class=\"white-text\" (click)=\"ToggleDetails()\">\n                  <i class=\"fa\" [ngClass]=\"{'fa-chevron-up': ShowDetails, 'fa-chevron-down': !ShowDetails}\"></i>\n                </button>\n              </div>\n              <div class=\"grow p5\"></div>\n              <div class=\"shrink p5\">\n                <button mat-icon-button class=\"red-text\" (click)=\"Close()\">\n                  <i class=\"fa fa-trash-can\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n          <div class=\"grow p5 scrollY black-text\" *ngIf=\"ShowDetails\">\n              <div class=\"flexColumn\">\n                <div class=\"shrink p5\">\n                  <div class=\"label grey-text f10\">\n                    Name\n                  </div>\n                  <input type=\"styledInput left w100 white\">\n                </div>\n                <div class=\"shrink p5\">\n                  <div class=\"label grey-text f10\">\n                    Description\n                  </div>\n                  <textarea type=\"styledInput left w100 white\"></textarea>\n                </div>\n                <div class=\"shrink p5\">\n                  <div class=\"label grey-text f10\">\n                    Tags\n                  </div>\n                  <mat-checkbox>Tag</mat-checkbox>\n                </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"strokeContainer rounded\" *ngIf=\"ShowStrokeSize\">\n    <div class=\"flexColumn\">\n      <div class=\"shrink center p10 f14 white-text\">\n        Size\n      </div>\n      <div class=\"shrink center p10\">\n        <i class=\"fa fa-circle\" [style.font-size.px]=\"StrokeSize\" [style.color]=\"ShapeColor\"></i>\n      </div>\n    </div>\n  </div>\n</div>";

/***/ }),

/***/ 7850:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/simple-color-picker/simple-color-picker.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"flexWrapper\">\n    <ng-container *ngIf=\"MobileMode\">\n        <div class=\"flexRow\">\n            <div class=\"shrink\">\n                <button mat-icon-button [matMenuTriggerFor]=\"colorMenu\">\n                    <i class=\"fa fa-circle\" [style.color]=\"Color\"></i>\n                </button>\n                <mat-menu #colorMenu=\"matMenu\">\n                    <div class=\"flexWrapper\">\n                        <div class=\"flexRow pt10\">\n                            <div class=\"grow center p5\">\n                                <button mat-icon-button class=\"blue {{SizeClass}}\" (click)=\"SetColor('#2196F3')\" [ngClass]=\"{'bordered': Color === '#2196F3'}\">\n                                    <i class=\"fa fa-check white-text\" [ngClass]=\"{'fa-check': Color === '#2196F3'}\" ></i>\n                                </button>\n                            </div>\n                            <div class=\"grow center p5\">\n                                <button mat-icon-button class=\"green {{SizeClass}}\" (click)=\"SetColor('#4CAF50')\" [ngClass]=\"{'bordered': Color === '#4CAF50'}\">\n                                    <i class=\"fa fa-check white-text\" [ngClass]=\"{'fa-check': Color === '#4CAF50'}\"></i>\n                                </button>\n                            </div>\n                        </div>\n                        <div class=\"flexRow\">\n                            <div class=\"grow center p5\">\n                                <button mat-icon-button class=\"yellow {{SizeClass}}\" (click)=\"SetColor('#ffeb3b')\" [ngClass]=\"{'bordered': Color === '#ffeb3b'}\">\n                                    <i class=\"fa fa-check white-text\" [ngClass]=\"{'fa-check': Color === '#ffeb3b'}\"></i>\n                                </button>\n                            </div>\n                            <div class=\"grow center p5\">\n                                <button mat-icon-button class=\"red {{SizeClass}}\" (click)=\"SetColor('#F44336')\" [ngClass]=\"{'bordered': Color === '#F44336'}\">\n                                    <i class=\"fa fa-check white-text\" [ngClass]=\"{'fa-check': Color === '#F44336'}\"></i>\n                                </button>\n                            </div>\n                        </div>\n                        <div class=\"flexRow\">\n                            <div class=\"grow center p5\">\n                                <button mat-icon-button class=\"orange {{SizeClass}}\" (click)=\"SetColor('#ff9800')\" [ngClass]=\"{'bordered': Color === '#ff9800'}\">\n                                    <i class=\"fa fa-check white-text\" [ngClass]=\"{'fa-check': Color === '#ff9800'}\"></i>\n                                </button>\n                            </div>\n                            <div class=\"grow center p5\">\n                                <button mat-icon-button class=\"purple {{SizeClass}}\" (click)=\"SetColor('#9c27b0')\" [ngClass]=\"{'bordered': Color === '#9c27b0'}\">\n                                    <i class=\"fa white-text\" [ngClass]=\"{'fa-check': Color === '#9c27b0'}\"></i>\n                                </button>\n                            </div>\n                        </div>\n                        <div class=\"flexRow pb10\">\n                            <div class=\"grow center p5\">\n                                <button mat-icon-button class=\"black {{SizeClass}}\" (click)=\"SetColor('#000000')\" [ngClass]=\"{'bordered': Color === '#0000000'}\">\n                                    <i class=\"fa fa-check white-text\" [ngClass]=\"{'fa-check': Color === '#000000'}\"></i>\n                                </button>\n                            </div>\n                            <div class=\"grow center p5\">\n                                <button mat-icon-button class=\"white {{SizeClass}}\" (click)=\"SetColor('#ffffff')\" [ngClass]=\"{'bordered': Color === '#ffffff'}\" style=\"border: 1px solid #ccc;\">\n                                    <i class=\"fa white-text\" [ngClass]=\"{'fa-check': Color === '#ffffff'}\"></i>\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </mat-menu>\n            </div>\n        </div>\n    </ng-container>\n    <ng-container *ngIf=\"!MobileMode\">\n        <div [ngClass]=\"{'flexRow': !Vertical, 'flexColumn': Vertical}\">\n            <ng-container *ngIf=\"!SingleMode\">\n                <div class=\"shrink p2 menubg\" [ngClass]=\"{'roundedLeft': !Vertical, 'roundedTop': Vertical}\">\n                    <button mat-icon-button class=\"blue {{SizeClass}}\" (click)=\"SetColor('#2196F3')\" [ngClass]=\"{'bordered': Color === '#2196F3'}\">\n                        <i class=\"fa fa-check white-text\" [ngClass]=\"{'fa-check': Color === '#2196F3'}\" ></i>\n                    </button>\n                </div>\n                <div class=\"shrink p2 menubg\">\n                    <button mat-icon-button class=\"green {{SizeClass}}\" (click)=\"SetColor('#4CAF50')\" [ngClass]=\"{'bordered': Color === '#4CAF50'}\">\n                        <i class=\"fa fa-check white-text\" [ngClass]=\"{'fa-check': Color === '#4CAF50'}\"></i>\n                    </button>\n                </div>\n                <div class=\"shrink p2 menubg\">\n                    <button mat-icon-button class=\"yellow {{SizeClass}}\" (click)=\"SetColor('#ffeb3b')\" [ngClass]=\"{'bordered': Color === '#ffeb3b'}\">\n                        <i class=\"fa fa-check white-text\" [ngClass]=\"{'fa-check': Color === '#ffeb3b'}\"></i>\n                    </button>\n                </div>\n                <div class=\"shrink p2 menubg\">\n                    <button mat-icon-button class=\"orange {{SizeClass}}\" (click)=\"SetColor('#ff9800')\" [ngClass]=\"{'bordered': Color === '#ff9800'}\">\n                        <i class=\"fa fa-check white-text\" [ngClass]=\"{'fa-check': Color === '#ff9800'}\"></i>\n                    </button>\n                </div>\n                <div class=\"shrink p2 menubg\">\n                    <button mat-icon-button class=\"red {{SizeClass}}\" (click)=\"SetColor('#F44336')\" [ngClass]=\"{'bordered': Color === '#F44336'}\">\n                        <i class=\"fa fa-check white-text\" [ngClass]=\"{'fa-check': Color === '#F44336'}\"></i>\n                    </button>\n                </div>\n                <div class=\"shrink p2 menubg\">\n                    <button mat-icon-button class=\"purple {{SizeClass}}\" (click)=\"SetColor('#9c27b0')\" [ngClass]=\"{'bordered': Color === '#9c27b0'}\">\n                        <i class=\"fa white-text\" [ngClass]=\"{'fa-check': Color === '#9c27b0'}\"></i>\n                    </button>\n                </div>\n            </ng-container>\n            <div class=\"shrink p2 {{SizeClass}}\" [ngClass]=\"{'roundedRight': !Vertical, 'roundedBottom': Vertical, 'menubg': !SingleMode}\">\n                <button mat-icon-button class=\"{{SizeClass}}\" [ngClass]=\"{'bordered': NotStandardColor() && !SingleMode, 'mat-elevation-z1': SingleMode}\" [style.background-color]=\"NotStandardColor() ? Color: '#00000000'\"\n                    [cpAlphaChannel]=\"'always'\"\n                    [cpOutputFormat]=\"'rgba'\"\n                    [(colorPicker)]=\"Color\"\n                    (colorPickerChange)=\"SetColor(Color)\">\n                        <i class=\"fa fa-swatchbook {{PickerClass}}\" *ngIf=\"!SingleMode\"></i>\n                </button>\n            </div>\n        </div>\n    </ng-container>\n    \n</div>";

/***/ }),

/***/ 7038:
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-color-picker/fesm2015/ngx-color-picker.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cmyk": () => (/* binding */ Cmyk),
/* harmony export */   "ColorPickerComponent": () => (/* binding */ ColorPickerComponent),
/* harmony export */   "ColorPickerDirective": () => (/* binding */ ColorPickerDirective),
/* harmony export */   "ColorPickerModule": () => (/* binding */ ColorPickerModule),
/* harmony export */   "ColorPickerService": () => (/* binding */ ColorPickerService),
/* harmony export */   "Hsla": () => (/* binding */ Hsla),
/* harmony export */   "Hsva": () => (/* binding */ Hsva),
/* harmony export */   "Rgba": () => (/* binding */ Rgba),
/* harmony export */   "SliderDirective": () => (/* binding */ SliderDirective),
/* harmony export */   "TextDirective": () => (/* binding */ TextDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);




const _c0 = ["dialogPopup"];
const _c1 = ["hueSlider"];
const _c2 = ["alphaSlider"];

function ColorPickerComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div");
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("arrow arrow-", ctx_r1.cpUsePosition, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("top", ctx_r1.arrowTop, "px");
  }
}

function ColorPickerComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("newValue", function ColorPickerComponent_div_3_Template_div_newValue_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r18.onColorChange($event));
    })("dragStart", function ColorPickerComponent_div_3_Template_div_dragStart_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r20.onDragStart("saturation-lightness"));
    })("dragEnd", function ColorPickerComponent_div_3_Template_div_dragEnd_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r21.onDragEnd("saturation-lightness"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("background-color", ctx_r2.hueSliderColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rgX", 1)("rgY", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("top", ctx_r2.slider == null ? null : ctx_r2.slider.v, "px")("left", ctx_r2.slider == null ? null : ctx_r2.slider.s, "px");
  }
}

function ColorPickerComponent__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "svg", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "path", 30)(2, "path", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }
}

function ColorPickerComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ColorPickerComponent_button_9_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r22.onAddPresetColor($event, ctx_r22.selectedColor));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx_r4.cpAddColorButtonClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx_r4.cpPresetColors && ctx_r4.cpPresetColors.length >= ctx_r4.cpMaxPresetColorsLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r4.cpAddColorButtonText, " ");
  }
}

function ColorPickerComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 33);
  }
}

function ColorPickerComponent_div_21_input_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup.enter", function ColorPickerComponent_div_21_input_6_Template_input_keyup_enter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r26.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_input_6_Template_input_newValue_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r27);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r28.onAlphaInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }

  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rg", 1)("value", ctx_r24.cmykText == null ? null : ctx_r24.cmykText.a);
  }
}

function ColorPickerComponent_div_21_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }
}

function ColorPickerComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 34)(1, "div", 35)(2, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r29.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r30);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r31.onCyanInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r30);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r32.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r30);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r33.onMagentaInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r30);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r34.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r30);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r35.onYellowInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r30);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r36.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r30);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r37.onBlackInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, ColorPickerComponent_div_21_input_6_Template, 1, 2, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 35)(8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "K");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, ColorPickerComponent_div_21_div_16_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("display", ctx_r9.format !== 3 ? "none" : "block");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rg", 100)("value", ctx_r9.cmykText == null ? null : ctx_r9.cmykText.c);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rg", 100)("value", ctx_r9.cmykText == null ? null : ctx_r9.cmykText.m);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rg", 100)("value", ctx_r9.cmykText == null ? null : ctx_r9.cmykText.y);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rg", 100)("value", ctx_r9.cmykText == null ? null : ctx_r9.cmykText.k);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r9.cpAlphaChannel !== "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r9.cpAlphaChannel !== "disabled");
  }
}

function ColorPickerComponent_div_22_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup.enter", function ColorPickerComponent_div_22_input_5_Template_input_keyup_enter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r40.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_22_input_5_Template_input_newValue_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r41);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r42.onAlphaInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }

  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rg", 1)("value", ctx_r38.hslaText == null ? null : ctx_r38.hslaText.a);
  }
}

function ColorPickerComponent_div_22_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }
}

function ColorPickerComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 40)(1, "div", 35)(2, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r43.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r44);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r45.onHueInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r44);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r46.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r44);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r47.onSaturationInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r44);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r48.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r44);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r49.onLightnessInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, ColorPickerComponent_div_22_input_5_Template, 1, 2, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 35)(7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "H");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "L");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, ColorPickerComponent_div_22_div_13_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("display", ctx_r10.format !== 2 ? "none" : "block");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rg", 360)("value", ctx_r10.hslaText == null ? null : ctx_r10.hslaText.h);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rg", 100)("value", ctx_r10.hslaText == null ? null : ctx_r10.hslaText.s);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rg", 100)("value", ctx_r10.hslaText == null ? null : ctx_r10.hslaText.l);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r10.cpAlphaChannel !== "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r10.cpAlphaChannel !== "disabled");
  }
}

function ColorPickerComponent_div_23_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup.enter", function ColorPickerComponent_div_23_input_5_Template_input_keyup_enter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r52.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_23_input_5_Template_input_newValue_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r53);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r54.onAlphaInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }

  if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rg", 1)("value", ctx_r50.rgbaText == null ? null : ctx_r50.rgbaText.a);
  }
}

function ColorPickerComponent_div_23_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }
}

function ColorPickerComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 42)(1, "div", 35)(2, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup.enter", function ColorPickerComponent_div_23_Template_input_keyup_enter_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r56);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r55.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_23_Template_input_newValue_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r56);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r57.onRedInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup.enter", function ColorPickerComponent_div_23_Template_input_keyup_enter_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r56);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r58.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_23_Template_input_newValue_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r56);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r59.onGreenInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup.enter", function ColorPickerComponent_div_23_Template_input_keyup_enter_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r56);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r60.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_23_Template_input_newValue_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r56);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r61.onBlueInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, ColorPickerComponent_div_23_input_5_Template, 1, 2, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 35)(7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "R");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "G");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, ColorPickerComponent_div_23_div_13_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("display", ctx_r11.format !== 1 ? "none" : "block");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rg", 255)("value", ctx_r11.rgbaText == null ? null : ctx_r11.rgbaText.r);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rg", 255)("value", ctx_r11.rgbaText == null ? null : ctx_r11.rgbaText.g);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rg", 255)("value", ctx_r11.rgbaText == null ? null : ctx_r11.rgbaText.b);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r11.cpAlphaChannel !== "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r11.cpAlphaChannel !== "disabled");
  }
}

function ColorPickerComponent_div_24_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup.enter", function ColorPickerComponent_div_24_input_3_Template_input_keyup_enter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r65);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r64.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_24_input_3_Template_input_newValue_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r65);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r66.onAlphaInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }

  if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rg", 1)("value", ctx_r62.hexAlpha);
  }
}

function ColorPickerComponent_div_24_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }
}

function ColorPickerComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 44)(1, "div", 35)(2, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("blur", function ColorPickerComponent_div_24_Template_input_blur_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r68);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r67.onHexInput(null));
    })("keyup.enter", function ColorPickerComponent_div_24_Template_input_keyup_enter_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r68);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r69.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_24_Template_input_newValue_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r68);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r70.onHexInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, ColorPickerComponent_div_24_input_3_Template, 1, 2, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 35)(5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Hex");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, ColorPickerComponent_div_24_div_7_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("display", ctx_r12.format !== 0 ? "none" : "block");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hex-alpha", ctx_r12.cpAlphaChannel === "forced");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx_r12.hexText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.cpAlphaChannel === "forced");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.cpAlphaChannel === "forced");
  }
}

function ColorPickerComponent_div_25_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup.enter", function ColorPickerComponent_div_25_input_3_Template_input_keyup_enter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r73);
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r72.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_25_input_3_Template_input_newValue_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r73);
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r74.onAlphaInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }

  if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rg", 1)("value", ctx_r71.hslaText == null ? null : ctx_r71.hslaText.a);
  }
}

function ColorPickerComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 46)(1, "div", 35)(2, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup.enter", function ColorPickerComponent_div_25_Template_input_keyup_enter_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r76);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r75.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_25_Template_input_newValue_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r76);
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r77.onValueInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, ColorPickerComponent_div_25_input_3_Template, 1, 2, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 35)(5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "V");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rg", 100)("value", ctx_r13.hslaText == null ? null : ctx_r13.hslaText.l);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r13.cpAlphaChannel !== "disabled");
  }
}

function ColorPickerComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 47)(1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ColorPickerComponent_div_26_Template_span_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r79);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r78.onFormatToggle(-1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ColorPickerComponent_div_26_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r79);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r80.onFormatToggle(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
  }
}

function ColorPickerComponent_div_27_div_4_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ColorPickerComponent_div_27_div_4_div_1_span_1_Template_span_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r88);
      const color_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r86.onRemovePresetColor($event, color_r84));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }

  if (rf & 2) {
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx_r85.cpRemoveColorButtonClass);
  }
}

function ColorPickerComponent_div_27_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ColorPickerComponent_div_27_div_4_div_1_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r90);
      const color_r84 = restoredCtx.$implicit;
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r89.setColorFromString(color_r84));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ColorPickerComponent_div_27_div_4_div_1_span_1_Template, 1, 3, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }

  if (rf & 2) {
    const color_r84 = ctx.$implicit;
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("background-color", color_r84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r83.cpAddColorButton);
  }
}

function ColorPickerComponent_div_27_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ColorPickerComponent_div_27_div_4_div_1_Template, 2, 3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }

  if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx_r81.cpPresetColorsClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r81.cpPresetColors);
  }
}

function ColorPickerComponent_div_27_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }

  if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx_r82.cpPresetEmptyMessageClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r82.cpPresetEmptyMessage);
  }
}

function ColorPickerComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, ColorPickerComponent_div_27_div_4_Template, 2, 4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, ColorPickerComponent_div_27_div_5_Template, 2, 4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }

  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r15.cpPresetLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r15.cpPresetColors == null ? null : ctx_r15.cpPresetColors.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !(ctx_r15.cpPresetColors == null ? null : ctx_r15.cpPresetColors.length) && ctx_r15.cpAddColorButton);
  }
}

function ColorPickerComponent_div_28_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ColorPickerComponent_div_28_button_1_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r94);
      const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r93.onCancelColor($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }

  if (rf & 2) {
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx_r91.cpCancelButtonClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r91.cpCancelButtonText);
  }
}

function ColorPickerComponent_div_28_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ColorPickerComponent_div_28_button_2_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r96);
      const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r95.onAcceptColor($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }

  if (rf & 2) {
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx_r92.cpOKButtonClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r92.cpOKButtonText);
  }
}

function ColorPickerComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ColorPickerComponent_div_28_button_1_Template, 2, 4, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ColorPickerComponent_div_28_button_2_Template, 2, 4, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }

  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r16.cpCancelButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r16.cpOKButton);
  }
}

function ColorPickerComponent_div_29_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](0);
  }
}

function ColorPickerComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ColorPickerComponent_div_29_ng_container_1_Template, 1, 0, "ng-container", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }

  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", ctx_r17.cpExtraTemplate);
  }
}

var ColorFormats;

(function (ColorFormats) {
  ColorFormats[ColorFormats["HEX"] = 0] = "HEX";
  ColorFormats[ColorFormats["RGBA"] = 1] = "RGBA";
  ColorFormats[ColorFormats["HSLA"] = 2] = "HSLA";
  ColorFormats[ColorFormats["CMYK"] = 3] = "CMYK";
})(ColorFormats || (ColorFormats = {}));

class Rgba {
  constructor(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

}

class Hsva {
  constructor(h, s, v, a) {
    this.h = h;
    this.s = s;
    this.v = v;
    this.a = a;
  }

}

class Hsla {
  constructor(h, s, l, a) {
    this.h = h;
    this.s = s;
    this.l = l;
    this.a = a;
  }

}

class Cmyk {
  constructor(c, m, y, k, a = 1) {
    this.c = c;
    this.m = m;
    this.y = y;
    this.k = k;
    this.a = a;
  }

}

function calculateAutoPositioning(elBounds, triggerElBounds) {
  // Defaults
  let usePositionX = 'right';
  let usePositionY = 'bottom'; // Calculate collisions

  const {
    height,
    width
  } = elBounds;
  const {
    top,
    left
  } = triggerElBounds;
  const bottom = top + triggerElBounds.height;
  const right = left + triggerElBounds.width;
  const collisionTop = top - height < 0;
  const collisionBottom = bottom + height > (window.innerHeight || document.documentElement.clientHeight);
  const collisionLeft = left - width < 0;
  const collisionRight = right + width > (window.innerWidth || document.documentElement.clientWidth);
  const collisionAll = collisionTop && collisionBottom && collisionLeft && collisionRight; // Generate X & Y position values

  if (collisionBottom) {
    usePositionY = 'top';
  }

  if (collisionTop) {
    usePositionY = 'bottom';
  }

  if (collisionLeft) {
    usePositionX = 'right';
  }

  if (collisionRight) {
    usePositionX = 'left';
  } // Choose the largest gap available


  if (collisionAll) {
    const postions = ['left', 'right', 'top', 'bottom'];
    return postions.reduce((prev, next) => elBounds[prev] > elBounds[next] ? prev : next);
  }

  if (collisionLeft && collisionRight) {
    if (collisionTop) {
      return 'bottom';
    }

    if (collisionBottom) {
      return 'top';
    }

    return top > bottom ? 'top' : 'bottom';
  }

  if (collisionTop && collisionBottom) {
    if (collisionLeft) {
      return 'right';
    }

    if (collisionRight) {
      return 'left';
    }

    return left > right ? 'left' : 'right';
  }

  return `${usePositionY}-${usePositionX}`;
}

function detectIE() {
  let ua = '';

  if (typeof navigator !== 'undefined') {
    ua = navigator.userAgent.toLowerCase();
  }

  const msie = ua.indexOf('msie ');

  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  } // Other browser


  return false;
}

class TextDirective {
  constructor() {
    this.newValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

  inputChange(event) {
    const value = event.target.value;

    if (this.rg === undefined) {
      this.newValue.emit(value);
    } else {
      const numeric = parseFloat(value);
      this.newValue.emit({
        v: numeric,
        rg: this.rg
      });
    }
  }

}

TextDirective.??fac = function TextDirective_Factory(t) {
  return new (t || TextDirective)();
};

TextDirective.??dir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
  type: TextDirective,
  selectors: [["", "text", ""]],
  hostBindings: function TextDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function TextDirective_input_HostBindingHandler($event) {
        return ctx.inputChange($event);
      });
    }
  },
  inputs: {
    rg: "rg",
    text: "text"
  },
  outputs: {
    newValue: "newValue"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TextDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[text]'
    }]
  }], null, {
    rg: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    text: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    newValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    inputChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['input', ['$event']]
    }]
  });
})();

class SliderDirective {
  constructor(elRef) {
    this.elRef = elRef;
    this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.newValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();

    this.listenerMove = event => this.move(event);

    this.listenerStop = () => this.stop();
  }

  mouseDown(event) {
    this.start(event);
  }

  touchStart(event) {
    this.start(event);
  }

  move(event) {
    event.preventDefault();
    this.setCursor(event);
  }

  start(event) {
    this.setCursor(event);
    event.stopPropagation();
    document.addEventListener('mouseup', this.listenerStop);
    document.addEventListener('touchend', this.listenerStop);
    document.addEventListener('mousemove', this.listenerMove);
    document.addEventListener('touchmove', this.listenerMove);
    this.dragStart.emit();
  }

  stop() {
    document.removeEventListener('mouseup', this.listenerStop);
    document.removeEventListener('touchend', this.listenerStop);
    document.removeEventListener('mousemove', this.listenerMove);
    document.removeEventListener('touchmove', this.listenerMove);
    this.dragEnd.emit();
  }

  getX(event) {
    const position = this.elRef.nativeElement.getBoundingClientRect();
    const pageX = event.pageX !== undefined ? event.pageX : event.touches[0].pageX;
    return pageX - position.left - window.pageXOffset;
  }

  getY(event) {
    const position = this.elRef.nativeElement.getBoundingClientRect();
    const pageY = event.pageY !== undefined ? event.pageY : event.touches[0].pageY;
    return pageY - position.top - window.pageYOffset;
  }

  setCursor(event) {
    const width = this.elRef.nativeElement.offsetWidth;
    const height = this.elRef.nativeElement.offsetHeight;
    const x = Math.max(0, Math.min(this.getX(event), width));
    const y = Math.max(0, Math.min(this.getY(event), height));

    if (this.rgX !== undefined && this.rgY !== undefined) {
      this.newValue.emit({
        s: x / width,
        v: 1 - y / height,
        rgX: this.rgX,
        rgY: this.rgY
      });
    } else if (this.rgX === undefined && this.rgY !== undefined) {
      this.newValue.emit({
        v: y / height,
        rgY: this.rgY
      });
    } else if (this.rgX !== undefined && this.rgY === undefined) {
      this.newValue.emit({
        v: x / width,
        rgX: this.rgX
      });
    }
  }

}

SliderDirective.??fac = function SliderDirective_Factory(t) {
  return new (t || SliderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

SliderDirective.??dir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
  type: SliderDirective,
  selectors: [["", "slider", ""]],
  hostBindings: function SliderDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("mousedown", function SliderDirective_mousedown_HostBindingHandler($event) {
        return ctx.mouseDown($event);
      })("touchstart", function SliderDirective_touchstart_HostBindingHandler($event) {
        return ctx.touchStart($event);
      });
    }
  },
  inputs: {
    rgX: "rgX",
    rgY: "rgY",
    slider: "slider"
  },
  outputs: {
    dragEnd: "dragEnd",
    dragStart: "dragStart",
    newValue: "newValue"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SliderDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[slider]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    rgX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rgY: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    slider: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    dragStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    newValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    mouseDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['mousedown', ['$event']]
    }],
    touchStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['touchstart', ['$event']]
    }]
  });
})();

class SliderPosition {
  constructor(h, s, v, a) {
    this.h = h;
    this.s = s;
    this.v = v;
    this.a = a;
  }

}

class SliderDimension {
  constructor(h, s, v, a) {
    this.h = h;
    this.s = s;
    this.v = v;
    this.a = a;
  }

}

class ColorPickerService {
  constructor() {
    this.active = null;
  }

  setActive(active) {
    if (this.active && this.active !== active && this.active.cpDialogDisplay !== 'inline') {
      this.active.closeDialog();
    }

    this.active = active;
  }

  hsva2hsla(hsva) {
    const h = hsva.h,
          s = hsva.s,
          v = hsva.v,
          a = hsva.a;

    if (v === 0) {
      return new Hsla(h, 0, 0, a);
    } else if (s === 0 && v === 1) {
      return new Hsla(h, 1, 1, a);
    } else {
      const l = v * (2 - s) / 2;
      return new Hsla(h, v * s / (1 - Math.abs(2 * l - 1)), l, a);
    }
  }

  hsla2hsva(hsla) {
    const h = Math.min(hsla.h, 1),
          s = Math.min(hsla.s, 1);
    const l = Math.min(hsla.l, 1),
          a = Math.min(hsla.a, 1);

    if (l === 0) {
      return new Hsva(h, 0, 0, a);
    } else {
      const v = l + s * (1 - Math.abs(2 * l - 1)) / 2;
      return new Hsva(h, 2 * (v - l) / v, v, a);
    }
  }

  hsvaToRgba(hsva) {
    let r, g, b;
    const h = hsva.h,
          s = hsva.s,
          v = hsva.v,
          a = hsva.a;
    const i = Math.floor(h * 6);
    const f = h * 6 - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);

    switch (i % 6) {
      case 0:
        r = v, g = t, b = p;
        break;

      case 1:
        r = q, g = v, b = p;
        break;

      case 2:
        r = p, g = v, b = t;
        break;

      case 3:
        r = p, g = q, b = v;
        break;

      case 4:
        r = t, g = p, b = v;
        break;

      case 5:
        r = v, g = p, b = q;
        break;

      default:
        r = 0, g = 0, b = 0;
    }

    return new Rgba(r, g, b, a);
  }

  cmykToRgb(cmyk) {
    const r = (1 - cmyk.c) * (1 - cmyk.k);
    const g = (1 - cmyk.m) * (1 - cmyk.k);
    const b = (1 - cmyk.y) * (1 - cmyk.k);
    return new Rgba(r, g, b, cmyk.a);
  }

  rgbaToCmyk(rgba) {
    const k = 1 - Math.max(rgba.r, rgba.g, rgba.b);

    if (k === 1) {
      return new Cmyk(0, 0, 0, 1, rgba.a);
    } else {
      const c = (1 - rgba.r - k) / (1 - k);
      const m = (1 - rgba.g - k) / (1 - k);
      const y = (1 - rgba.b - k) / (1 - k);
      return new Cmyk(c, m, y, k, rgba.a);
    }
  }

  rgbaToHsva(rgba) {
    let h, s;
    const r = Math.min(rgba.r, 1),
          g = Math.min(rgba.g, 1);
    const b = Math.min(rgba.b, 1),
          a = Math.min(rgba.a, 1);
    const max = Math.max(r, g, b),
          min = Math.min(r, g, b);
    const v = max,
          d = max - min;
    s = max === 0 ? 0 : d / max;

    if (max === min) {
      h = 0;
    } else {
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;

        case g:
          h = (b - r) / d + 2;
          break;

        case b:
          h = (r - g) / d + 4;
          break;

        default:
          h = 0;
      }

      h /= 6;
    }

    return new Hsva(h, s, v, a);
  }

  rgbaToHex(rgba, allowHex8) {
    /* eslint-disable no-bitwise */
    let hex = '#' + (1 << 24 | rgba.r << 16 | rgba.g << 8 | rgba.b).toString(16).substr(1);

    if (allowHex8) {
      hex += (1 << 8 | Math.round(rgba.a * 255)).toString(16).substr(1);
    }
    /* eslint-enable no-bitwise */


    return hex;
  }

  normalizeCMYK(cmyk) {
    return new Cmyk(cmyk.c / 100, cmyk.m / 100, cmyk.y / 100, cmyk.k / 100, cmyk.a);
  }

  denormalizeCMYK(cmyk) {
    return new Cmyk(Math.floor(cmyk.c * 100), Math.floor(cmyk.m * 100), Math.floor(cmyk.y * 100), Math.floor(cmyk.k * 100), cmyk.a);
  }

  denormalizeRGBA(rgba) {
    return new Rgba(Math.round(rgba.r * 255), Math.round(rgba.g * 255), Math.round(rgba.b * 255), rgba.a);
  }

  stringToHsva(colorString = '', allowHex8 = false) {
    let hsva = null;
    colorString = (colorString || '').toLowerCase();
    const stringParsers = [{
      re: /(rgb)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
      parse: function (execResult) {
        return new Rgba(parseInt(execResult[2], 10) / 255, parseInt(execResult[3], 10) / 255, parseInt(execResult[4], 10) / 255, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
      }
    }, {
      re: /(hsl)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
      parse: function (execResult) {
        return new Hsla(parseInt(execResult[2], 10) / 360, parseInt(execResult[3], 10) / 100, parseInt(execResult[4], 10) / 100, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
      }
    }];

    if (allowHex8) {
      stringParsers.push({
        re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})?$/,
        parse: function (execResult) {
          return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, parseInt(execResult[4] || 'FF', 16) / 255);
        }
      });
    } else {
      stringParsers.push({
        re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
        parse: function (execResult) {
          return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, 1);
        }
      });
    }

    stringParsers.push({
      re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/,
      parse: function (execResult) {
        return new Rgba(parseInt(execResult[1] + execResult[1], 16) / 255, parseInt(execResult[2] + execResult[2], 16) / 255, parseInt(execResult[3] + execResult[3], 16) / 255, 1);
      }
    });

    for (const key in stringParsers) {
      if (stringParsers.hasOwnProperty(key)) {
        const parser = stringParsers[key];
        const match = parser.re.exec(colorString),
              color = match && parser.parse(match);

        if (color) {
          if (color instanceof Rgba) {
            hsva = this.rgbaToHsva(color);
          } else if (color instanceof Hsla) {
            hsva = this.hsla2hsva(color);
          }

          return hsva;
        }
      }
    }

    return hsva;
  }

  outputFormat(hsva, outputFormat, alphaChannel) {
    if (outputFormat === 'auto') {
      outputFormat = hsva.a < 1 ? 'rgba' : 'hex';
    }

    switch (outputFormat) {
      case 'hsla':
        const hsla = this.hsva2hsla(hsva);
        const hslaText = new Hsla(Math.round(hsla.h * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);

        if (hsva.a < 1 || alphaChannel === 'always') {
          return 'hsla(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%,' + hslaText.a + ')';
        } else {
          return 'hsl(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%)';
        }

      case 'rgba':
        const rgba = this.denormalizeRGBA(this.hsvaToRgba(hsva));

        if (hsva.a < 1 || alphaChannel === 'always') {
          return 'rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ',' + Math.round(rgba.a * 100) / 100 + ')';
        } else {
          return 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
        }

      default:
        const allowHex8 = alphaChannel === 'always' || alphaChannel === 'forced';
        return this.rgbaToHex(this.denormalizeRGBA(this.hsvaToRgba(hsva)), allowHex8);
    }
  }

}

ColorPickerService.??fac = function ColorPickerService_Factory(t) {
  return new (t || ColorPickerService)();
};

ColorPickerService.??prov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
  token: ColorPickerService,
  factory: ColorPickerService.??fac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ColorPickerService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})(); // Do not store that on the class instance since the condition will be run
// every time the class is created.


const SUPPORTS_TOUCH = typeof window !== 'undefined' && 'ontouchstart' in window;

class ColorPickerComponent {
  constructor(ngZone, elRef, cdRef, document, platformId, service) {
    this.ngZone = ngZone;
    this.elRef = elRef;
    this.cdRef = cdRef;
    this.document = document;
    this.platformId = platformId;
    this.service = service;
    this.isIE10 = false;
    this.dialogArrowSize = 10;
    this.dialogArrowOffset = 15;
    this.dialogInputFields = [ColorFormats.HEX, ColorFormats.RGBA, ColorFormats.HSLA, ColorFormats.CMYK];
    this.useRootViewContainer = false;
    this.eyeDropperSupported = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId) && 'EyeDropper' in this.document.defaultView;
  }

  handleEsc(event) {
    if (this.show && this.cpDialogDisplay === 'popup') {
      this.onCancelColor(event);
    }
  }

  handleEnter(event) {
    if (this.show && this.cpDialogDisplay === 'popup') {
      this.onAcceptColor(event);
    }
  }

  ngOnInit() {
    this.slider = new SliderPosition(0, 0, 0, 0);
    const hueWidth = this.hueSlider.nativeElement.offsetWidth || 140;
    const alphaWidth = this.alphaSlider.nativeElement.offsetWidth || 140;
    this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);

    if (this.cpCmykEnabled) {
      this.format = ColorFormats.CMYK;
    } else if (this.cpOutputFormat === 'rgba') {
      this.format = ColorFormats.RGBA;
    } else if (this.cpOutputFormat === 'hsla') {
      this.format = ColorFormats.HSLA;
    } else {
      this.format = ColorFormats.HEX;
    }

    this.listenerMouseDown = event => {
      this.onMouseDown(event);
    };

    this.listenerResize = () => {
      this.onResize();
    };

    this.openDialog(this.initialColor, false);
  }

  ngOnDestroy() {
    this.closeDialog();
  }

  ngAfterViewInit() {
    if (this.cpWidth !== 230 || this.cpDialogDisplay === 'inline') {
      const hueWidth = this.hueSlider.nativeElement.offsetWidth || 140;
      const alphaWidth = this.alphaSlider.nativeElement.offsetWidth || 140;
      this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
      this.updateColorPicker(false);
      this.cdRef.detectChanges();
    }
  }

  openDialog(color, emit = true) {
    this.service.setActive(this);

    if (!this.width) {
      this.cpWidth = this.directiveElementRef.nativeElement.offsetWidth;
    }

    if (!this.height) {
      this.height = 320;
    }

    this.setInitialColor(color);
    this.setColorFromString(color, emit);
    this.openColorPicker();
  }

  closeDialog() {
    this.closeColorPicker();
  }

  setupDialog(instance, elementRef, color, cpWidth, cpHeight, cpDialogDisplay, cpFallbackColor, cpColorMode, cpCmykEnabled, cpAlphaChannel, cpOutputFormat, cpDisableInput, cpIgnoredElements, cpSaveClickOutside, cpCloseClickOutside, cpUseRootViewContainer, cpPosition, cpPositionOffset, cpPositionRelativeToArrow, cpPresetLabel, cpPresetColors, cpPresetColorsClass, cpMaxPresetColorsLength, cpPresetEmptyMessage, cpPresetEmptyMessageClass, cpOKButton, cpOKButtonClass, cpOKButtonText, cpCancelButton, cpCancelButtonClass, cpCancelButtonText, cpAddColorButton, cpAddColorButtonClass, cpAddColorButtonText, cpRemoveColorButtonClass, cpEyeDropper, cpTriggerElement, cpExtraTemplate) {
    this.setInitialColor(color);
    this.setColorMode(cpColorMode);
    this.isIE10 = detectIE() === 10;
    this.directiveInstance = instance;
    this.directiveElementRef = elementRef;
    this.cpDisableInput = cpDisableInput;
    this.cpCmykEnabled = cpCmykEnabled;
    this.cpAlphaChannel = cpAlphaChannel;
    this.cpOutputFormat = cpOutputFormat;
    this.cpDialogDisplay = cpDialogDisplay;
    this.cpIgnoredElements = cpIgnoredElements;
    this.cpSaveClickOutside = cpSaveClickOutside;
    this.cpCloseClickOutside = cpCloseClickOutside;
    this.useRootViewContainer = cpUseRootViewContainer;
    this.width = this.cpWidth = parseInt(cpWidth, 10);
    this.height = this.cpHeight = parseInt(cpHeight, 10);
    this.cpPosition = cpPosition;
    this.cpPositionOffset = parseInt(cpPositionOffset, 10);
    this.cpOKButton = cpOKButton;
    this.cpOKButtonText = cpOKButtonText;
    this.cpOKButtonClass = cpOKButtonClass;
    this.cpCancelButton = cpCancelButton;
    this.cpCancelButtonText = cpCancelButtonText;
    this.cpCancelButtonClass = cpCancelButtonClass;
    this.cpEyeDropper = cpEyeDropper;
    this.fallbackColor = cpFallbackColor || '#fff';
    this.setPresetConfig(cpPresetLabel, cpPresetColors);
    this.cpPresetColorsClass = cpPresetColorsClass;
    this.cpMaxPresetColorsLength = cpMaxPresetColorsLength;
    this.cpPresetEmptyMessage = cpPresetEmptyMessage;
    this.cpPresetEmptyMessageClass = cpPresetEmptyMessageClass;
    this.cpAddColorButton = cpAddColorButton;
    this.cpAddColorButtonText = cpAddColorButtonText;
    this.cpAddColorButtonClass = cpAddColorButtonClass;
    this.cpRemoveColorButtonClass = cpRemoveColorButtonClass;
    this.cpTriggerElement = cpTriggerElement;
    this.cpExtraTemplate = cpExtraTemplate;

    if (!cpPositionRelativeToArrow) {
      this.dialogArrowOffset = 0;
    }

    if (cpDialogDisplay === 'inline') {
      this.dialogArrowSize = 0;
      this.dialogArrowOffset = 0;
    }

    if (cpOutputFormat === 'hex' && cpAlphaChannel !== 'always' && cpAlphaChannel !== 'forced') {
      this.cpAlphaChannel = 'disabled';
    }
  }

  setColorMode(mode) {
    switch (mode.toString().toUpperCase()) {
      case '1':
      case 'C':
      case 'COLOR':
        this.cpColorMode = 1;
        break;

      case '2':
      case 'G':
      case 'GRAYSCALE':
        this.cpColorMode = 2;
        break;

      case '3':
      case 'P':
      case 'PRESETS':
        this.cpColorMode = 3;
        break;

      default:
        this.cpColorMode = 1;
    }
  }

  setInitialColor(color) {
    this.initialColor = color;
  }

  setPresetConfig(cpPresetLabel, cpPresetColors) {
    this.cpPresetLabel = cpPresetLabel;
    this.cpPresetColors = cpPresetColors;
  }

  setColorFromString(value, emit = true, update = true) {
    let hsva;

    if (this.cpAlphaChannel === 'always' || this.cpAlphaChannel === 'forced') {
      hsva = this.service.stringToHsva(value, true);

      if (!hsva && !this.hsva) {
        hsva = this.service.stringToHsva(value, false);
      }
    } else {
      hsva = this.service.stringToHsva(value, false);
    }

    if (!hsva && !this.hsva) {
      hsva = this.service.stringToHsva(this.fallbackColor, false);
    }

    if (hsva) {
      this.hsva = hsva;
      this.sliderH = this.hsva.h;

      if (this.cpOutputFormat === 'hex' && this.cpAlphaChannel === 'disabled') {
        this.hsva.a = 1;
      }

      this.updateColorPicker(emit, update);
    }
  }

  onResize() {
    if (this.position === 'fixed') {
      this.setDialogPosition();
    } else if (this.cpDialogDisplay !== 'inline') {
      this.closeColorPicker();
    }
  }

  onDragEnd(slider) {
    this.directiveInstance.sliderDragEnd({
      slider: slider,
      color: this.outputColor
    });
  }

  onDragStart(slider) {
    this.directiveInstance.sliderDragStart({
      slider: slider,
      color: this.outputColor
    });
  }

  onMouseDown(event) {
    if (this.show && !this.isIE10 && this.cpDialogDisplay === 'popup' && event.target !== this.directiveElementRef.nativeElement && !this.isDescendant(this.elRef.nativeElement, event.target) && !this.isDescendant(this.directiveElementRef.nativeElement, event.target) && this.cpIgnoredElements.filter(item => item === event.target).length === 0) {
      this.ngZone.run(() => {
        if (this.cpSaveClickOutside) {
          this.directiveInstance.colorSelected(this.outputColor);
        } else {
          this.hsva = null;
          this.setColorFromString(this.initialColor, false);

          if (this.cpCmykEnabled) {
            this.directiveInstance.cmykChanged(this.cmykColor);
          }

          this.directiveInstance.colorChanged(this.initialColor);
          this.directiveInstance.colorCanceled();
        }

        if (this.cpCloseClickOutside) {
          this.closeColorPicker();
        }
      });
    }
  }

  onAcceptColor(event) {
    event.stopPropagation();

    if (this.outputColor) {
      this.directiveInstance.colorSelected(this.outputColor);
    }

    if (this.cpDialogDisplay === 'popup') {
      this.closeColorPicker();
    }
  }

  onCancelColor(event) {
    this.hsva = null;
    event.stopPropagation();
    this.directiveInstance.colorCanceled();
    this.setColorFromString(this.initialColor, true);

    if (this.cpDialogDisplay === 'popup') {
      if (this.cpCmykEnabled) {
        this.directiveInstance.cmykChanged(this.cmykColor);
      }

      this.directiveInstance.colorChanged(this.initialColor, true);
      this.closeColorPicker();
    }
  }

  onEyeDropper() {
    if (!this.eyeDropperSupported) return;
    const eyeDropper = new window.EyeDropper();
    eyeDropper.open().then(eyeDropperResult => {
      this.setColorFromString(eyeDropperResult.sRGBHex, true);
    });
  }

  onFormatToggle(change) {
    const availableFormats = this.dialogInputFields.length - (this.cpCmykEnabled ? 0 : 1);
    const nextFormat = ((this.dialogInputFields.indexOf(this.format) + change) % availableFormats + availableFormats) % availableFormats;
    this.format = this.dialogInputFields[nextFormat];
  }

  onColorChange(value) {
    this.hsva.s = value.s / value.rgX;
    this.hsva.v = value.v / value.rgY;
    this.updateColorPicker();
    this.directiveInstance.sliderChanged({
      slider: 'lightness',
      value: this.hsva.v,
      color: this.outputColor
    });
    this.directiveInstance.sliderChanged({
      slider: 'saturation',
      value: this.hsva.s,
      color: this.outputColor
    });
  }

  onHueChange(value) {
    this.hsva.h = value.v / value.rgX;
    this.sliderH = this.hsva.h;
    this.updateColorPicker();
    this.directiveInstance.sliderChanged({
      slider: 'hue',
      value: this.hsva.h,
      color: this.outputColor
    });
  }

  onValueChange(value) {
    this.hsva.v = value.v / value.rgX;
    this.updateColorPicker();
    this.directiveInstance.sliderChanged({
      slider: 'value',
      value: this.hsva.v,
      color: this.outputColor
    });
  }

  onAlphaChange(value) {
    this.hsva.a = value.v / value.rgX;
    this.updateColorPicker();
    this.directiveInstance.sliderChanged({
      slider: 'alpha',
      value: this.hsva.a,
      color: this.outputColor
    });
  }

  onHexInput(value) {
    if (value === null) {
      this.updateColorPicker();
    } else {
      if (value && value[0] !== '#') {
        value = '#' + value;
      }

      let validHex = /^#([a-f0-9]{3}|[a-f0-9]{6})$/gi;

      if (this.cpAlphaChannel === 'always') {
        validHex = /^#([a-f0-9]{3}|[a-f0-9]{6}|[a-f0-9]{8})$/gi;
      }

      const valid = validHex.test(value);

      if (valid) {
        if (value.length < 5) {
          value = '#' + value.substring(1).split('').map(c => c + c).join('');
        }

        if (this.cpAlphaChannel === 'forced') {
          value += Math.round(this.hsva.a * 255).toString(16);
        }

        this.setColorFromString(value, true, false);
      }

      this.directiveInstance.inputChanged({
        input: 'hex',
        valid: valid,
        value: value,
        color: this.outputColor
      });
    }
  }

  onRedInput(value) {
    const rgba = this.service.hsvaToRgba(this.hsva);
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

    if (valid) {
      rgba.r = value.v / value.rg;
      this.hsva = this.service.rgbaToHsva(rgba);
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }

    this.directiveInstance.inputChanged({
      input: 'red',
      valid: valid,
      value: rgba.r,
      color: this.outputColor
    });
  }

  onBlueInput(value) {
    const rgba = this.service.hsvaToRgba(this.hsva);
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

    if (valid) {
      rgba.b = value.v / value.rg;
      this.hsva = this.service.rgbaToHsva(rgba);
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }

    this.directiveInstance.inputChanged({
      input: 'blue',
      valid: valid,
      value: rgba.b,
      color: this.outputColor
    });
  }

  onGreenInput(value) {
    const rgba = this.service.hsvaToRgba(this.hsva);
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

    if (valid) {
      rgba.g = value.v / value.rg;
      this.hsva = this.service.rgbaToHsva(rgba);
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }

    this.directiveInstance.inputChanged({
      input: 'green',
      valid: valid,
      value: rgba.g,
      color: this.outputColor
    });
  }

  onHueInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

    if (valid) {
      this.hsva.h = value.v / value.rg;
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }

    this.directiveInstance.inputChanged({
      input: 'hue',
      valid: valid,
      value: this.hsva.h,
      color: this.outputColor
    });
  }

  onValueInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

    if (valid) {
      this.hsva.v = value.v / value.rg;
      this.updateColorPicker();
    }

    this.directiveInstance.inputChanged({
      input: 'value',
      valid: valid,
      value: this.hsva.v,
      color: this.outputColor
    });
  }

  onAlphaInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

    if (valid) {
      this.hsva.a = value.v / value.rg;
      this.updateColorPicker();
    }

    this.directiveInstance.inputChanged({
      input: 'alpha',
      valid: valid,
      value: this.hsva.a,
      color: this.outputColor
    });
  }

  onLightnessInput(value) {
    const hsla = this.service.hsva2hsla(this.hsva);
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

    if (valid) {
      hsla.l = value.v / value.rg;
      this.hsva = this.service.hsla2hsva(hsla);
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }

    this.directiveInstance.inputChanged({
      input: 'lightness',
      valid: valid,
      value: hsla.l,
      color: this.outputColor
    });
  }

  onSaturationInput(value) {
    const hsla = this.service.hsva2hsla(this.hsva);
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

    if (valid) {
      hsla.s = value.v / value.rg;
      this.hsva = this.service.hsla2hsva(hsla);
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }

    this.directiveInstance.inputChanged({
      input: 'saturation',
      valid: valid,
      value: hsla.s,
      color: this.outputColor
    });
  }

  onCyanInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

    if (valid) {
      this.cmyk.c = value.v;
      this.updateColorPicker(false, true, true);
    }

    this.directiveInstance.inputChanged({
      input: 'cyan',
      valid: true,
      value: this.cmyk.c,
      color: this.outputColor
    });
  }

  onMagentaInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

    if (valid) {
      this.cmyk.m = value.v;
      this.updateColorPicker(false, true, true);
    }

    this.directiveInstance.inputChanged({
      input: 'magenta',
      valid: true,
      value: this.cmyk.m,
      color: this.outputColor
    });
  }

  onYellowInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

    if (valid) {
      this.cmyk.y = value.v;
      this.updateColorPicker(false, true, true);
    }

    this.directiveInstance.inputChanged({
      input: 'yellow',
      valid: true,
      value: this.cmyk.y,
      color: this.outputColor
    });
  }

  onBlackInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

    if (valid) {
      this.cmyk.k = value.v;
      this.updateColorPicker(false, true, true);
    }

    this.directiveInstance.inputChanged({
      input: 'black',
      valid: true,
      value: this.cmyk.k,
      color: this.outputColor
    });
  }

  onAddPresetColor(event, value) {
    event.stopPropagation();

    if (!this.cpPresetColors.filter(color => color === value).length) {
      this.cpPresetColors = this.cpPresetColors.concat(value);
      this.directiveInstance.presetColorsChanged(this.cpPresetColors);
    }
  }

  onRemovePresetColor(event, value) {
    event.stopPropagation();
    this.cpPresetColors = this.cpPresetColors.filter(color => color !== value);
    this.directiveInstance.presetColorsChanged(this.cpPresetColors);
  } // Private helper functions for the color picker dialog status


  openColorPicker() {
    if (!this.show) {
      this.show = true;
      this.hidden = true;
      setTimeout(() => {
        this.hidden = false;
        this.setDialogPosition();
        this.cdRef.detectChanges();
      }, 0);
      this.directiveInstance.stateChanged(true);

      if (!this.isIE10) {
        // The change detection should be run on `mousedown` event only when the condition
        // is met within the `onMouseDown` method.
        this.ngZone.runOutsideAngular(() => {
          // There's no sense to add both event listeners on touch devices since the `touchstart`
          // event is handled earlier than `mousedown`, so we'll get 2 change detections and the
          // second one will be unnecessary.
          if (SUPPORTS_TOUCH) {
            document.addEventListener('touchstart', this.listenerMouseDown);
          } else {
            document.addEventListener('mousedown', this.listenerMouseDown);
          }
        });
      }

      window.addEventListener('resize', this.listenerResize);
    }
  }

  closeColorPicker() {
    if (this.show) {
      this.show = false;
      this.directiveInstance.stateChanged(false);

      if (!this.isIE10) {
        if (SUPPORTS_TOUCH) {
          document.removeEventListener('touchstart', this.listenerMouseDown);
        } else {
          document.removeEventListener('mousedown', this.listenerMouseDown);
        }
      }

      window.removeEventListener('resize', this.listenerResize);

      if (!this.cdRef['destroyed']) {
        this.cdRef.detectChanges();
      }
    }
  }

  updateColorPicker(emit = true, update = true, cmykInput = false) {
    if (this.sliderDimMax) {
      if (this.cpColorMode === 2) {
        this.hsva.s = 0;
      }

      let hue, hsla, rgba;
      const lastOutput = this.outputColor;
      hsla = this.service.hsva2hsla(this.hsva);

      if (!this.cpCmykEnabled) {
        rgba = this.service.denormalizeRGBA(this.service.hsvaToRgba(this.hsva));
      } else {
        if (!cmykInput) {
          rgba = this.service.hsvaToRgba(this.hsva);
          this.cmyk = this.service.denormalizeCMYK(this.service.rgbaToCmyk(rgba));
        } else {
          rgba = this.service.cmykToRgb(this.service.normalizeCMYK(this.cmyk));
          this.hsva = this.service.rgbaToHsva(rgba);
        }

        rgba = this.service.denormalizeRGBA(rgba);
        this.sliderH = this.hsva.h;
      }

      hue = this.service.denormalizeRGBA(this.service.hsvaToRgba(new Hsva(this.sliderH || this.hsva.h, 1, 1, 1)));

      if (update) {
        this.hslaText = new Hsla(Math.round(hsla.h * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
        this.rgbaText = new Rgba(rgba.r, rgba.g, rgba.b, Math.round(rgba.a * 100) / 100);

        if (this.cpCmykEnabled) {
          this.cmykText = new Cmyk(this.cmyk.c, this.cmyk.m, this.cmyk.y, this.cmyk.k, Math.round(this.cmyk.a * 100) / 100);
        }

        const allowHex8 = this.cpAlphaChannel === 'always';
        this.hexText = this.service.rgbaToHex(rgba, allowHex8);
        this.hexAlpha = this.rgbaText.a;
      }

      if (this.cpOutputFormat === 'auto') {
        if (this.format !== ColorFormats.RGBA && this.format !== ColorFormats.CMYK && this.format !== ColorFormats.HSLA) {
          if (this.hsva.a < 1) {
            this.format = this.hsva.a < 1 ? ColorFormats.RGBA : ColorFormats.HEX;
          }
        }
      }

      this.hueSliderColor = 'rgb(' + hue.r + ',' + hue.g + ',' + hue.b + ')';
      this.alphaSliderColor = 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
      this.outputColor = this.service.outputFormat(this.hsva, this.cpOutputFormat, this.cpAlphaChannel);
      this.selectedColor = this.service.outputFormat(this.hsva, 'rgba', null);

      if (this.format !== ColorFormats.CMYK) {
        this.cmykColor = '';
      } else {
        if (this.cpAlphaChannel === 'always' || this.cpAlphaChannel === 'enabled' || this.cpAlphaChannel === 'forced') {
          const alpha = Math.round(this.cmyk.a * 100) / 100;
          this.cmykColor = `cmyka(${this.cmyk.c},${this.cmyk.m},${this.cmyk.y},${this.cmyk.k},${alpha})`;
        } else {
          this.cmykColor = `cmyk(${this.cmyk.c},${this.cmyk.m},${this.cmyk.y},${this.cmyk.k})`;
        }
      }

      this.slider = new SliderPosition((this.sliderH || this.hsva.h) * this.sliderDimMax.h - 8, this.hsva.s * this.sliderDimMax.s - 8, (1 - this.hsva.v) * this.sliderDimMax.v - 8, this.hsva.a * this.sliderDimMax.a - 8);

      if (emit && lastOutput !== this.outputColor) {
        if (this.cpCmykEnabled) {
          this.directiveInstance.cmykChanged(this.cmykColor);
        }

        this.directiveInstance.colorChanged(this.outputColor);
      }
    }
  } // Private helper functions for the color picker dialog positioning


  setDialogPosition() {
    if (this.cpDialogDisplay === 'inline') {
      this.position = 'relative';
    } else {
      let position = 'static',
          transform = '',
          style;
      let parentNode = null,
          transformNode = null;
      let node = this.directiveElementRef.nativeElement.parentNode;
      const dialogHeight = this.dialogElement.nativeElement.offsetHeight;

      while (node !== null && node.tagName !== 'HTML') {
        style = window.getComputedStyle(node);
        position = style.getPropertyValue('position');
        transform = style.getPropertyValue('transform');

        if (position !== 'static' && parentNode === null) {
          parentNode = node;
        }

        if (transform && transform !== 'none' && transformNode === null) {
          transformNode = node;
        }

        if (position === 'fixed') {
          parentNode = transformNode;
          break;
        }

        node = node.parentNode;
      }

      const boxDirective = this.createDialogBox(this.directiveElementRef.nativeElement, position !== 'fixed');

      if (this.useRootViewContainer || position === 'fixed' && (!parentNode || parentNode instanceof HTMLUnknownElement)) {
        this.top = boxDirective.top;
        this.left = boxDirective.left;
      } else {
        if (parentNode === null) {
          parentNode = node;
        }

        const boxParent = this.createDialogBox(parentNode, position !== 'fixed');
        this.top = boxDirective.top - boxParent.top;
        this.left = boxDirective.left - boxParent.left;
      }

      if (position === 'fixed') {
        this.position = 'fixed';
      }

      let usePosition = this.cpPosition;

      if (this.cpPosition === 'auto') {
        const dialogBounds = this.dialogElement.nativeElement.getBoundingClientRect();
        const triggerBounds = this.cpTriggerElement.nativeElement.getBoundingClientRect();
        usePosition = calculateAutoPositioning(dialogBounds, triggerBounds);
      }

      if (usePosition === 'top') {
        this.arrowTop = dialogHeight - 1;
        this.top -= dialogHeight + this.dialogArrowSize;
        this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
      } else if (usePosition === 'bottom') {
        this.top += boxDirective.height + this.dialogArrowSize;
        this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
      } else if (usePosition === 'top-left' || usePosition === 'left-top') {
        this.top -= dialogHeight - boxDirective.height + boxDirective.height * this.cpPositionOffset / 100;
        this.left -= this.cpWidth + this.dialogArrowSize - 2 - this.dialogArrowOffset;
      } else if (usePosition === 'top-right' || usePosition === 'right-top') {
        this.top -= dialogHeight - boxDirective.height + boxDirective.height * this.cpPositionOffset / 100;
        this.left += boxDirective.width + this.dialogArrowSize - 2 - this.dialogArrowOffset;
      } else if (usePosition === 'left' || usePosition === 'bottom-left' || usePosition === 'left-bottom') {
        this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
        this.left -= this.cpWidth + this.dialogArrowSize - 2;
      } else {
        // usePosition === 'right' || usePosition === 'bottom-right' || usePosition === 'right-bottom'
        this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
        this.left += boxDirective.width + this.dialogArrowSize - 2;
      }

      this.cpUsePosition = usePosition;
    }
  } // Private helper functions for the color picker dialog positioning and opening


  isDescendant(parent, child) {
    let node = child.parentNode;

    while (node !== null) {
      if (node === parent) {
        return true;
      }

      node = node.parentNode;
    }

    return false;
  }

  createDialogBox(element, offset) {
    const {
      top,
      left
    } = element.getBoundingClientRect();
    return {
      top: top + (offset ? window.pageYOffset : 0),
      left: left + (offset ? window.pageXOffset : 0),
      width: element.offsetWidth,
      height: element.offsetHeight
    };
  }

}

ColorPickerComponent.??fac = function ColorPickerComponent_Factory(t) {
  return new (t || ColorPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ColorPickerService));
};

ColorPickerComponent.??cmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
  type: ColorPickerComponent,
  selectors: [["color-picker"]],
  viewQuery: function ColorPickerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c1, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c2, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.dialogElement = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.hueSlider = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.alphaSlider = _t.first);
    }
  },
  hostBindings: function ColorPickerComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup.esc", function ColorPickerComponent_keyup_esc_HostBindingHandler($event) {
        return ctx.handleEsc($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resolveDocument"])("keyup.enter", function ColorPickerComponent_keyup_enter_HostBindingHandler($event) {
        return ctx.handleEnter($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resolveDocument"]);
    }
  },
  decls: 30,
  vars: 51,
  consts: [[1, "color-picker", 3, "click"], ["dialogPopup", ""], [3, "class", "top", 4, "ngIf"], ["class", "saturation-lightness", 3, "slider", "rgX", "rgY", "background-color", "newValue", "dragStart", "dragEnd", 4, "ngIf"], [1, "hue-alpha", "box"], [1, "left"], [1, "selected-color-background"], [1, "selected-color", 3, "click"], ["class", "eyedropper-icon", "xmlns", "http://www.w3.org/2000/svg", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "fill", "#000000", 4, "ngIf"], ["type", "button", 3, "class", "disabled", "click", 4, "ngIf"], [1, "right"], ["style", "height: 16px;", 4, "ngIf"], [1, "hue", 3, "slider", "rgX", "newValue", "dragStart", "dragEnd"], ["hueSlider", ""], [1, "cursor"], [1, "value", 3, "slider", "rgX", "newValue", "dragStart", "dragEnd"], ["valueSlider", ""], [1, "alpha", 3, "slider", "rgX", "newValue", "dragStart", "dragEnd"], ["alphaSlider", ""], ["class", "cmyk-text", 3, "display", 4, "ngIf"], ["class", "hsla-text", 3, "display", 4, "ngIf"], ["class", "rgba-text", 3, "display", 4, "ngIf"], ["class", "hex-text", 3, "hex-alpha", "display", 4, "ngIf"], ["class", "value-text", 4, "ngIf"], ["class", "type-policy", 4, "ngIf"], ["class", "preset-area", 4, "ngIf"], ["class", "button-area", 4, "ngIf"], ["class", "extra-template", 4, "ngIf"], [1, "saturation-lightness", 3, "slider", "rgX", "rgY", "newValue", "dragStart", "dragEnd"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "fill", "#000000", 1, "eyedropper-icon"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M17.66 5.41l.92.92-2.69 2.69-.92-.92 2.69-2.69M17.67 3c-.26 0-.51.1-.71.29l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42l-2.34-2.34c-.2-.19-.45-.29-.7-.29zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"], ["type", "button", 3, "disabled", "click"], [2, "height", "16px"], [1, "cmyk-text"], [1, "box"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "100", 3, "text", "rg", "value", "keyup.enter", "newValue"], ["type", "number", "pattern", "[0-9]+([\\.,][0-9]{1,2})?", "min", "0", "max", "1", "step", "0.1", 3, "text", "rg", "value", "keyup.enter", "newValue", 4, "ngIf"], [4, "ngIf"], ["type", "number", "pattern", "[0-9]+([\\.,][0-9]{1,2})?", "min", "0", "max", "1", "step", "0.1", 3, "text", "rg", "value", "keyup.enter", "newValue"], [1, "hsla-text"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "360", 3, "text", "rg", "value", "keyup.enter", "newValue"], [1, "rgba-text"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "255", 3, "text", "rg", "value", "keyup.enter", "newValue"], [1, "hex-text"], [3, "text", "value", "blur", "keyup.enter", "newValue"], [1, "value-text"], [1, "type-policy"], [1, "type-policy-arrow", 3, "click"], [1, "preset-area"], [1, "preset-label"], [3, "class", 4, "ngIf"], ["class", "preset-color", 3, "backgroundColor", "click", 4, "ngFor", "ngForOf"], [1, "preset-color", 3, "click"], [3, "class", "click", 4, "ngIf"], [3, "click"], [1, "button-area"], ["type", "button", 3, "class", "click", 4, "ngIf"], ["type", "button", 3, "click"], [1, "extra-template"], [4, "ngTemplateOutlet"]],
  template: function ColorPickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ColorPickerComponent_Template_div_click_0_listener($event) {
        return $event.stopPropagation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ColorPickerComponent_div_2_Template, 1, 5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, ColorPickerComponent_div_3_Template, 2, 8, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4)(5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ColorPickerComponent_Template_div_click_7_listener() {
        return ctx.eyeDropperSupported && ctx.cpEyeDropper && ctx.onEyeDropper();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, ColorPickerComponent__svg_svg_8_Template, 3, 0, "svg", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, ColorPickerComponent_button_9_Template, 2, 5, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, ColorPickerComponent_div_11_Template, 1, 0, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("newValue", function ColorPickerComponent_Template_div_newValue_12_listener($event) {
        return ctx.onHueChange($event);
      })("dragStart", function ColorPickerComponent_Template_div_dragStart_12_listener() {
        return ctx.onDragStart("hue");
      })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_12_listener() {
        return ctx.onDragEnd("hue");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 15, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("newValue", function ColorPickerComponent_Template_div_newValue_15_listener($event) {
        return ctx.onValueChange($event);
      })("dragStart", function ColorPickerComponent_Template_div_dragStart_15_listener() {
        return ctx.onDragStart("value");
      })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_15_listener() {
        return ctx.onDragEnd("value");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 17, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("newValue", function ColorPickerComponent_Template_div_newValue_18_listener($event) {
        return ctx.onAlphaChange($event);
      })("dragStart", function ColorPickerComponent_Template_div_dragStart_18_listener() {
        return ctx.onDragStart("alpha");
      })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_18_listener() {
        return ctx.onDragEnd("alpha");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, ColorPickerComponent_div_21_Template, 17, 12, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, ColorPickerComponent_div_22_Template, 14, 10, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, ColorPickerComponent_div_23_Template, 14, 10, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, ColorPickerComponent_div_24_Template, 8, 7, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, ColorPickerComponent_div_25_Template, 9, 3, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, ColorPickerComponent_div_26_Template, 3, 0, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, ColorPickerComponent_div_27_Template, 6, 3, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, ColorPickerComponent_div_28_Template, 3, 2, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, ColorPickerComponent_div_29_Template, 2, 1, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("display", !ctx.show ? "none" : "block")("visibility", ctx.hidden ? "hidden" : "visible")("top", ctx.top, "px")("left", ctx.left, "px")("position", ctx.position)("height", ctx.cpHeight, "px")("width", ctx.cpWidth, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("open", ctx.show);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.cpDialogDisplay === "popup");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.cpColorMode || 1) === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("background-color", ctx.selectedColor)("cursor", ctx.eyeDropperSupported && ctx.cpEyeDropper ? "pointer" : null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.eyeDropperSupported && ctx.cpEyeDropper);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.cpAddColorButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.cpAlphaChannel === "disabled");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("display", (ctx.cpColorMode || 1) === 1 ? "block" : "none");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rgX", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("left", ctx.slider == null ? null : ctx.slider.h, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("display", (ctx.cpColorMode || 1) === 2 ? "block" : "none");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rgX", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("right", ctx.slider == null ? null : ctx.slider.v, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("display", ctx.cpAlphaChannel === "disabled" ? "none" : "block")("background-color", ctx.alphaSliderColor);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rgX", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("left", ctx.slider == null ? null : ctx.slider.a, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.cpPresetColors == null ? null : ctx.cpPresetColors.length) || ctx.cpAddColorButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.cpOKButton || ctx.cpCancelButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.cpExtraTemplate);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, TextDirective, SliderDirective],
  styles: [".color-picker{position:absolute;z-index:1000;width:230px;height:auto;border:#777 solid 1px;cursor:default;-webkit-user-select:none;user-select:none;background-color:#fff}.color-picker *{box-sizing:border-box;margin:0;font-size:11px}.color-picker input{width:0;height:26px;min-width:0;font-size:13px;text-align:center;color:#000}.color-picker input:invalid,.color-picker input:-moz-ui-invalid,.color-picker input:-moz-submit-invalid{box-shadow:none}.color-picker input::-webkit-inner-spin-button,.color-picker input::-webkit-outer-spin-button{margin:0;-webkit-appearance:none}.color-picker .arrow{position:absolute;z-index:999999;width:0;height:0;border-style:solid}.color-picker .arrow.arrow-top{left:8px;border-width:10px 5px;border-color:#777 rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .arrow.arrow-bottom{top:-20px;left:8px;border-width:10px 5px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) #777 rgba(0,0,0,0)}.color-picker .arrow.arrow-top-left,.color-picker .arrow.arrow-left-top{right:-21px;bottom:8px;border-width:5px 10px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #777}.color-picker .arrow.arrow-top-right,.color-picker .arrow.arrow-right-top{bottom:8px;left:-20px;border-width:5px 10px;border-color:rgba(0,0,0,0) #777 rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .arrow.arrow-left,.color-picker .arrow.arrow-left-bottom,.color-picker .arrow.arrow-bottom-left{top:8px;right:-21px;border-width:5px 10px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #777}.color-picker .arrow.arrow-right,.color-picker .arrow.arrow-right-bottom,.color-picker .arrow.arrow-bottom-right{top:8px;left:-20px;border-width:5px 10px;border-color:rgba(0,0,0,0) #777 rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .cursor{position:relative;width:16px;height:16px;border:#222 solid 2px;border-radius:50%;cursor:default}.color-picker .box{display:flex;padding:4px 8px}.color-picker .left{position:relative;padding:16px 8px}.color-picker .right{flex:1 1 auto;padding:12px 8px}.color-picker .button-area{padding:0 16px 16px;text-align:right}.color-picker .button-area button{margin-left:8px}.color-picker .preset-area{padding:4px 15px}.color-picker .preset-area .preset-label{overflow:hidden;width:100%;padding:4px;font-size:11px;white-space:nowrap;text-align:left;text-overflow:ellipsis;color:#555}.color-picker .preset-area .preset-color{position:relative;display:inline-block;width:18px;height:18px;margin:4px 6px 8px;border:#a9a9a9 solid 1px;border-radius:25%;cursor:pointer}.color-picker .preset-area .preset-empty-message{min-height:18px;margin-top:4px;margin-bottom:8px;font-style:italic;text-align:center}.color-picker .hex-text{width:100%;padding:4px 8px;font-size:11px}.color-picker .hex-text .box{padding:0 24px 8px 8px}.color-picker .hex-text .box div{float:left;flex:1 1 auto;text-align:center;color:#555;clear:left}.color-picker .hex-text .box input{flex:1 1 auto;padding:1px;border:#a9a9a9 solid 1px}.color-picker .hex-alpha .box div:first-child,.color-picker .hex-alpha .box input:first-child{flex-grow:3;margin-right:8px}.color-picker .cmyk-text,.color-picker .hsla-text,.color-picker .rgba-text,.color-picker .value-text{width:100%;padding:4px 8px;font-size:11px}.color-picker .cmyk-text .box,.color-picker .hsla-text .box,.color-picker .rgba-text .box{padding:0 24px 8px 8px}.color-picker .value-text .box{padding:0 8px 8px}.color-picker .cmyk-text .box div,.color-picker .hsla-text .box div,.color-picker .rgba-text .box div,.color-picker .value-text .box div{flex:1 1 auto;margin-right:8px;text-align:center;color:#555}.color-picker .cmyk-text .box div:last-child,.color-picker .hsla-text .box div:last-child,.color-picker .rgba-text .box div:last-child,.color-picker .value-text .box div:last-child{margin-right:0}.color-picker .cmyk-text .box input,.color-picker .hsla-text .box input,.color-picker .rgba-text .box input,.color-picker .value-text .box input{float:left;flex:1;padding:1px;margin:0 8px 0 0;border:#a9a9a9 solid 1px}.color-picker .cmyk-text .box input:last-child,.color-picker .hsla-text .box input:last-child,.color-picker .rgba-text .box input:last-child,.color-picker .value-text .box input:last-child{margin-right:0}.color-picker .hue-alpha{align-items:center;margin-bottom:3px}.color-picker .hue{direction:ltr;width:100%;height:16px;margin-bottom:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC)}.color-picker .value{direction:rtl;width:100%;height:16px;margin-bottom:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAACTklEQVR42u3SYUcrABhA4U2SkmRJMmWSJklKJiWZZpKUJJskKUmaTFImKZOUzMySpGRmliRNJilJSpKSJEtmSpIpmWmSdO736/6D+x7OP3gUCoWCv1cqlSQlJZGcnExKSgqpqamkpaWRnp5ORkYGmZmZqFQqsrKyyM7OJicnh9zcXNRqNXl5eeTn56PRaCgoKKCwsJCioiK0Wi3FxcWUlJRQWlpKWVkZ5eXlVFRUUFlZiU6no6qqiurqampqaqitraWurg69Xk99fT0GgwGj0UhDQwONjY00NTXR3NxMS0sLra2ttLW10d7ejslkwmw209HRQWdnJ11dXXR3d9PT00Nvby99fX309/czMDDA4OAgFouFoaEhrFYrw8PDjIyMMDo6ytjYGDabjfHxcSYmJpicnGRqagq73c709DQzMzPMzs4yNzfH/Pw8DocDp9OJy+XC7XazsLDA4uIiS0tLLC8vs7KywurqKmtra3g8HrxeLz6fD7/fz/r6OhsbG2xubrK1tcX29jaBQICdnR2CwSC7u7vs7e2xv7/PwcEBh4eHHB0dcXx8zMnJCaenp5ydnXF+fs7FxQWXl5dcXV1xfX3Nzc0Nt7e33N3dEQqFuL+/5+HhgXA4TCQS4fHxkaenJ56fn3l5eeH19ZVoNMrb2xvv7+98fHwQi8WIx+N8fn6SSCT4+vri+/ubn58ffn9/+VcKgSWwBJbAElgCS2AJLIElsASWwBJYAktgCSyBJbAElsASWAJLYAksgSWwBJbAElgCS2AJLIElsP4/WH8AmJ5Z6jHS4h8AAAAASUVORK5CYII=)}.color-picker .alpha{direction:ltr;width:100%;height:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==)}.color-picker .type-policy{position:absolute;top:218px;right:12px;width:16px;height:24px;background-size:8px 16px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACewAAAnsB01CO3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIASURBVEiJ7ZY9axRRFIafsxMStrLQJpAgpBFhi+C9w1YSo00I6RZ/g9vZpBf/QOr4GyRgkSKNSrAadsZqQGwCkuAWyRZJsySwvhZ7N/vhzrgbLH3Ld8597jlzz50zJokyxXH8DqDVar0qi6v8BbItqSGpEcfxdlmsFWXkvX8AfAVWg3UKPEnT9GKujMzsAFgZsVaCN1VTQd77XUnrgE1kv+6935268WRpzrnHZvYRWC7YvC3pRZZl3wozqtVqiyH9IgjAspkd1Gq1xUJQtVrdB9ZKIAOthdg/Qc65LUk7wNIMoCVJO865rYFhkqjX6/d7vV4GPJwBMqofURS5JEk6FYBer/eeYb/Mo9WwFnPOvQbeAvfuAAK4BN4sAJtAG/gJIElmNuiJyba3EGNmZiPeZuEVmVell/Y/6N+CzDn3AXhEOOo7Hv/3BeAz8IzQkMPnJbuPx1wC+yYJ7/0nYIP5S/0FHKdp+rwCEEXRS/rf5Hl1Gtb2M0iSpCOpCZzPATmX1EySpHMLAsiy7MjMDoHrGSDXZnaYZdnRwBh7J91utwmczAA6CbG3GgPleX4jqUH/a1CktqRGnuc3hSCAMB32gKspkCtgb3KCQMmkjeP4WNJThrNNZval1WptTIsv7JtQ4tmIdRa8qSoEpWl6YWZNoAN0zKxZNPehpLSBZv2t+Q0CJ9lLnARQLAAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-position:center}.color-picker .type-policy .type-policy-arrow{display:block;width:100%;height:50%}.color-picker .selected-color{position:absolute;top:16px;left:8px;width:40px;height:40px;border:1px solid #a9a9a9;border-radius:50%}.color-picker .selected-color-background{width:40px;height:40px;border-radius:50%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC)}.color-picker .saturation-lightness{direction:ltr;width:100%;height:130px;border:none;cursor:pointer;touch-action:manipulation;background-size:100% 100%;background-image:url(data:image/png;base64,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)}.color-picker .cp-add-color-button-class{position:absolute;display:inline;padding:0;margin:3px -3px;border:0;cursor:pointer;background:transparent}.color-picker .cp-add-color-button-class:hover{text-decoration:underline}.color-picker .cp-add-color-button-class:disabled{cursor:not-allowed;color:#999}.color-picker .cp-add-color-button-class:disabled:hover{text-decoration:none}.color-picker .cp-remove-color-button-class{position:absolute;top:-5px;right:-5px;display:block;width:10px;height:10px;border-radius:50%;cursor:pointer;text-align:center;background:#fff;box-shadow:1px 1px 5px #333}.color-picker .cp-remove-color-button-class:before{content:\"x\";position:relative;bottom:3.5px;display:inline-block;font-size:10px}.color-picker .eyedropper-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);fill:#fff;mix-blend-mode:exclusion}\n"],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ColorPickerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'color-picker',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: "<div #dialogPopup class=\"color-picker\" [class.open]=\"show\" [style.display]=\"!show ? 'none' : 'block'\" [style.visibility]=\"hidden ? 'hidden' : 'visible'\" [style.top.px]=\"top\" [style.left.px]=\"left\" [style.position]=\"position\" [style.height.px]=\"cpHeight\" [style.width.px]=\"cpWidth\" (click)=\"$event.stopPropagation()\">\n  <div *ngIf=\"cpDialogDisplay === 'popup'\" class=\"arrow arrow-{{cpUsePosition}}\" [style.top.px]=\"arrowTop\"></div>\n\n  <div *ngIf=\"(cpColorMode ||\u00A01) === 1\" class=\"saturation-lightness\" [slider] [rgX]=\"1\" [rgY]=\"1\" [style.background-color]=\"hueSliderColor\" (newValue)=\"onColorChange($event)\" (dragStart)=\"onDragStart('saturation-lightness')\" (dragEnd)=\"onDragEnd('saturation-lightness')\">\n    <div class=\"cursor\" [style.top.px]=\"slider?.v\" [style.left.px]=\"slider?.s\"></div>\n  </div>\n\n  <div class=\"hue-alpha box\">\n    <div class=\"left\">\n      <div class=\"selected-color-background\"></div>\n\n      <div class=\"selected-color\" [style.background-color]=\"selectedColor\" [style.cursor]=\"eyeDropperSupported && cpEyeDropper ? 'pointer' : null\" (click)=\"eyeDropperSupported && cpEyeDropper && onEyeDropper()\">\n        <svg *ngIf=\"eyeDropperSupported && cpEyeDropper\" class=\"eyedropper-icon\" xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 0 24 24\" width=\"24px\" fill=\"#000000\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\"/><path d=\"M17.66 5.41l.92.92-2.69 2.69-.92-.92 2.69-2.69M17.67 3c-.26 0-.51.1-.71.29l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42l-2.34-2.34c-.2-.19-.45-.29-.7-.29zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z\"/></svg>\n      </div>\n\n      <button *ngIf=\"cpAddColorButton\" type=\"button\" class=\"{{cpAddColorButtonClass}}\" [disabled]=\"cpPresetColors && cpPresetColors.length >= cpMaxPresetColorsLength\" (click)=\"onAddPresetColor($event, selectedColor)\">\n        {{cpAddColorButtonText}}\n      </button>\n    </div>\n\n    <div class=\"right\">\n      <div *ngIf=\"cpAlphaChannel==='disabled'\" style=\"height: 16px;\"></div>\n\n      <div #hueSlider class=\"hue\" [slider] [rgX]=\"1\" [style.display]=\"(cpColorMode ||\u00A01) === 1 ? 'block' : 'none'\" (newValue)=\"onHueChange($event)\" (dragStart)=\"onDragStart('hue')\" (dragEnd)=\"onDragEnd('hue')\">\n        <div class=\"cursor\" [style.left.px]=\"slider?.h\"></div>\n      </div>\n\n      <div #valueSlider class=\"value\" [slider] [rgX]=\"1\" [style.display]=\"(cpColorMode ||\u00A01) === 2 ? 'block': 'none'\" (newValue)=\"onValueChange($event)\" (dragStart)=\"onDragStart('value')\" (dragEnd)=\"onDragEnd('value')\">\n        <div class=\"cursor\" [style.right.px]=\"slider?.v\"></div>\n      </div>\n\n      <div #alphaSlider class=\"alpha\" [slider] [rgX]=\"1\" [style.display]=\"cpAlphaChannel === 'disabled' ? 'none' : 'block'\" [style.background-color]=\"alphaSliderColor\" (newValue)=\"onAlphaChange($event)\" (dragStart)=\"onDragStart('alpha')\" (dragEnd)=\"onDragEnd('alpha')\">\n        <div class=\"cursor\" [style.left.px]=\"slider?.a\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\u00A01) === 1\" class=\"cmyk-text\" [style.display]=\"format !== 3 ? 'none' : 'block'\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"cmykText?.c\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onCyanInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"cmykText?.m\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onMagentaInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"cmykText?.y\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onYellowInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"cmykText?.k\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onBlackInput($event)\" />\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"cmykText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\" />\n    </div>\n\n     <div class=\"box\">\n      <div>C</div><div>M</div><div>Y</div><div>K</div><div *ngIf=\"cpAlphaChannel!=='disabled'\" >A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\u00A01) === 1 \" class=\"hsla-text\" [style.display]=\"format !== 2 ? 'none' : 'block'\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"360\" [text] [rg]=\"360\" [value]=\"hslaText?.h\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onHueInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"hslaText?.s\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onSaturationInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"hslaText?.l\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onLightnessInput($event)\" />\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"hslaText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\" />\n    </div>\n\n    <div class=\"box\">\n      <div>H</div><div>S</div><div>L</div><div *ngIf=\"cpAlphaChannel!=='disabled'\">A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\u00A01) === 1 \" [style.display]=\"format !== 1 ? 'none' : 'block'\" class=\"rgba-text\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [text] [rg]=\"255\" [value]=\"rgbaText?.r\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onRedInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [text] [rg]=\"255\" [value]=\"rgbaText?.g\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onGreenInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [text] [rg]=\"255\" [value]=\"rgbaText?.b\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onBlueInput($event)\" />\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"rgbaText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\" />\n    </div>\n\n    <div class=\"box\">\n      <div>R</div><div>G</div><div>B</div><div *ngIf=\"cpAlphaChannel!=='disabled'\" >A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\u00A01) === 1\" class=\"hex-text\" [class.hex-alpha]=\"cpAlphaChannel==='forced'\"\n    [style.display]=\"format !== 0 ? 'none' : 'block'\">\n    <div class=\"box\">\n      <input [text] [value]=\"hexText\" (blur)=\"onHexInput(null)\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onHexInput($event)\"/>\n      <input *ngIf=\"cpAlphaChannel==='forced'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"hexAlpha\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\"/>\n    </div>\n\n    <div class=\"box\">\n      <div>Hex</div>\n      <div *ngIf=\"cpAlphaChannel==='forced'\">A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\u00A01) === 2\" class=\"value-text\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"hslaText?.l\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onValueInput($event)\" />\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\"  [text] [rg]=\"1\" [value]=\"hslaText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\" />\n    </div>\n\n    <div class=\"box\">\n      <div>V</div><div>A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\u00A01) === 1\" class=\"type-policy\">\n    <span class=\"type-policy-arrow\" (click)=\"onFormatToggle(-1)\"></span>\n    <span class=\"type-policy-arrow\" (click)=\"onFormatToggle(1)\"></span>\n  </div>\n\n  <div *ngIf=\"cpPresetColors?.length || cpAddColorButton\" class=\"preset-area\">\n    <hr>\n\n    <div class=\"preset-label\">{{cpPresetLabel}}</div>\n\n    <div *ngIf=\"cpPresetColors?.length\" class=\"{{cpPresetColorsClass}}\">\n      <div *ngFor=\"let color of cpPresetColors\" class=\"preset-color\" [style.backgroundColor]=\"color\" (click)=\"setColorFromString(color)\">\n        <span *ngIf=\"cpAddColorButton\" class=\"{{cpRemoveColorButtonClass}}\" (click)=\"onRemovePresetColor($event, color)\"></span>\n      </div>\n    </div>\n\n    <div *ngIf=\"!cpPresetColors?.length && cpAddColorButton\" class=\"{{cpPresetEmptyMessageClass}}\">{{cpPresetEmptyMessage}}</div>\n  </div>\n\n  <div *ngIf=\"cpOKButton || cpCancelButton\" class=\"button-area\">\n    <button *ngIf=\"cpCancelButton\" type=\"button\" class=\"{{cpCancelButtonClass}}\" (click)=\"onCancelColor($event)\">{{cpCancelButtonText}}</button>\n\n    <button *ngIf=\"cpOKButton\" type=\"button\" class=\"{{cpOKButtonClass}}\" (click)=\"onAcceptColor($event)\">{{cpOKButtonText}}</button>\n  </div>\n\n  <div class=\"extra-template\" *ngIf=\"cpExtraTemplate\">\n    <ng-container *ngTemplateOutlet=\"cpExtraTemplate\"></ng-container>\n  </div>\n</div>\n",
      styles: [".color-picker{position:absolute;z-index:1000;width:230px;height:auto;border:#777 solid 1px;cursor:default;-webkit-user-select:none;user-select:none;background-color:#fff}.color-picker *{box-sizing:border-box;margin:0;font-size:11px}.color-picker input{width:0;height:26px;min-width:0;font-size:13px;text-align:center;color:#000}.color-picker input:invalid,.color-picker input:-moz-ui-invalid,.color-picker input:-moz-submit-invalid{box-shadow:none}.color-picker input::-webkit-inner-spin-button,.color-picker input::-webkit-outer-spin-button{margin:0;-webkit-appearance:none}.color-picker .arrow{position:absolute;z-index:999999;width:0;height:0;border-style:solid}.color-picker .arrow.arrow-top{left:8px;border-width:10px 5px;border-color:#777 rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .arrow.arrow-bottom{top:-20px;left:8px;border-width:10px 5px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) #777 rgba(0,0,0,0)}.color-picker .arrow.arrow-top-left,.color-picker .arrow.arrow-left-top{right:-21px;bottom:8px;border-width:5px 10px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #777}.color-picker .arrow.arrow-top-right,.color-picker .arrow.arrow-right-top{bottom:8px;left:-20px;border-width:5px 10px;border-color:rgba(0,0,0,0) #777 rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .arrow.arrow-left,.color-picker .arrow.arrow-left-bottom,.color-picker .arrow.arrow-bottom-left{top:8px;right:-21px;border-width:5px 10px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #777}.color-picker .arrow.arrow-right,.color-picker .arrow.arrow-right-bottom,.color-picker .arrow.arrow-bottom-right{top:8px;left:-20px;border-width:5px 10px;border-color:rgba(0,0,0,0) #777 rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .cursor{position:relative;width:16px;height:16px;border:#222 solid 2px;border-radius:50%;cursor:default}.color-picker .box{display:flex;padding:4px 8px}.color-picker .left{position:relative;padding:16px 8px}.color-picker .right{flex:1 1 auto;padding:12px 8px}.color-picker .button-area{padding:0 16px 16px;text-align:right}.color-picker .button-area button{margin-left:8px}.color-picker .preset-area{padding:4px 15px}.color-picker .preset-area .preset-label{overflow:hidden;width:100%;padding:4px;font-size:11px;white-space:nowrap;text-align:left;text-overflow:ellipsis;color:#555}.color-picker .preset-area .preset-color{position:relative;display:inline-block;width:18px;height:18px;margin:4px 6px 8px;border:#a9a9a9 solid 1px;border-radius:25%;cursor:pointer}.color-picker .preset-area .preset-empty-message{min-height:18px;margin-top:4px;margin-bottom:8px;font-style:italic;text-align:center}.color-picker .hex-text{width:100%;padding:4px 8px;font-size:11px}.color-picker .hex-text .box{padding:0 24px 8px 8px}.color-picker .hex-text .box div{float:left;flex:1 1 auto;text-align:center;color:#555;clear:left}.color-picker .hex-text .box input{flex:1 1 auto;padding:1px;border:#a9a9a9 solid 1px}.color-picker .hex-alpha .box div:first-child,.color-picker .hex-alpha .box input:first-child{flex-grow:3;margin-right:8px}.color-picker .cmyk-text,.color-picker .hsla-text,.color-picker .rgba-text,.color-picker .value-text{width:100%;padding:4px 8px;font-size:11px}.color-picker .cmyk-text .box,.color-picker .hsla-text .box,.color-picker .rgba-text .box{padding:0 24px 8px 8px}.color-picker .value-text .box{padding:0 8px 8px}.color-picker .cmyk-text .box div,.color-picker .hsla-text .box div,.color-picker .rgba-text .box div,.color-picker .value-text .box div{flex:1 1 auto;margin-right:8px;text-align:center;color:#555}.color-picker .cmyk-text .box div:last-child,.color-picker .hsla-text .box div:last-child,.color-picker .rgba-text .box div:last-child,.color-picker .value-text .box div:last-child{margin-right:0}.color-picker .cmyk-text .box input,.color-picker .hsla-text .box input,.color-picker .rgba-text .box input,.color-picker .value-text .box input{float:left;flex:1;padding:1px;margin:0 8px 0 0;border:#a9a9a9 solid 1px}.color-picker .cmyk-text .box input:last-child,.color-picker .hsla-text .box input:last-child,.color-picker .rgba-text .box input:last-child,.color-picker .value-text .box input:last-child{margin-right:0}.color-picker .hue-alpha{align-items:center;margin-bottom:3px}.color-picker .hue{direction:ltr;width:100%;height:16px;margin-bottom:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC)}.color-picker .value{direction:rtl;width:100%;height:16px;margin-bottom:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAACTklEQVR42u3SYUcrABhA4U2SkmRJMmWSJklKJiWZZpKUJJskKUmaTFImKZOUzMySpGRmliRNJilJSpKSJEtmSpIpmWmSdO736/6D+x7OP3gUCoWCv1cqlSQlJZGcnExKSgqpqamkpaWRnp5ORkYGmZmZqFQqsrKyyM7OJicnh9zcXNRqNXl5eeTn56PRaCgoKKCwsJCioiK0Wi3FxcWUlJRQWlpKWVkZ5eXlVFRUUFlZiU6no6qqiurqampqaqitraWurg69Xk99fT0GgwGj0UhDQwONjY00NTXR3NxMS0sLra2ttLW10d7ejslkwmw209HRQWdnJ11dXXR3d9PT00Nvby99fX309/czMDDA4OAgFouFoaEhrFYrw8PDjIyMMDo6ytjYGDabjfHxcSYmJpicnGRqagq73c709DQzMzPMzs4yNzfH/Pw8DocDp9OJy+XC7XazsLDA4uIiS0tLLC8vs7KywurqKmtra3g8HrxeLz6fD7/fz/r6OhsbG2xubrK1tcX29jaBQICdnR2CwSC7u7vs7e2xv7/PwcEBh4eHHB0dcXx8zMnJCaenp5ydnXF+fs7FxQWXl5dcXV1xfX3Nzc0Nt7e33N3dEQqFuL+/5+HhgXA4TCQS4fHxkaenJ56fn3l5eeH19ZVoNMrb2xvv7+98fHwQi8WIx+N8fn6SSCT4+vri+/ubn58ffn9/+VcKgSWwBJbAElgCS2AJLIElsASWwBJYAktgCSyBJbAElsASWAJLYAksgSWwBJbAElgCS2AJLIElsP4/WH8AmJ5Z6jHS4h8AAAAASUVORK5CYII=)}.color-picker .alpha{direction:ltr;width:100%;height:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==)}.color-picker .type-policy{position:absolute;top:218px;right:12px;width:16px;height:24px;background-size:8px 16px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACewAAAnsB01CO3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIASURBVEiJ7ZY9axRRFIafsxMStrLQJpAgpBFhi+C9w1YSo00I6RZ/g9vZpBf/QOr4GyRgkSKNSrAadsZqQGwCkuAWyRZJsySwvhZ7N/vhzrgbLH3Ld8597jlzz50zJokyxXH8DqDVar0qi6v8BbItqSGpEcfxdlmsFWXkvX8AfAVWg3UKPEnT9GKujMzsAFgZsVaCN1VTQd77XUnrgE1kv+6935268WRpzrnHZvYRWC7YvC3pRZZl3wozqtVqiyH9IgjAspkd1Gq1xUJQtVrdB9ZKIAOthdg/Qc65LUk7wNIMoCVJO865rYFhkqjX6/d7vV4GPJwBMqofURS5JEk6FYBer/eeYb/Mo9WwFnPOvQbeAvfuAAK4BN4sAJtAG/gJIElmNuiJyba3EGNmZiPeZuEVmVell/Y/6N+CzDn3AXhEOOo7Hv/3BeAz8IzQkMPnJbuPx1wC+yYJ7/0nYIP5S/0FHKdp+rwCEEXRS/rf5Hl1Gtb2M0iSpCOpCZzPATmX1EySpHMLAsiy7MjMDoHrGSDXZnaYZdnRwBh7J91utwmczAA6CbG3GgPleX4jqUH/a1CktqRGnuc3hSCAMB32gKspkCtgb3KCQMmkjeP4WNJThrNNZval1WptTIsv7JtQ4tmIdRa8qSoEpWl6YWZNoAN0zKxZNPehpLSBZv2t+Q0CJ9lLnARQLAAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-position:center}.color-picker .type-policy .type-policy-arrow{display:block;width:100%;height:50%}.color-picker .selected-color{position:absolute;top:16px;left:8px;width:40px;height:40px;border:1px solid #a9a9a9;border-radius:50%}.color-picker .selected-color-background{width:40px;height:40px;border-radius:50%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC)}.color-picker .saturation-lightness{direction:ltr;width:100%;height:130px;border:none;cursor:pointer;touch-action:manipulation;background-size:100% 100%;background-image:url(data:image/png;base64,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)}.color-picker .cp-add-color-button-class{position:absolute;display:inline;padding:0;margin:3px -3px;border:0;cursor:pointer;background:transparent}.color-picker .cp-add-color-button-class:hover{text-decoration:underline}.color-picker .cp-add-color-button-class:disabled{cursor:not-allowed;color:#999}.color-picker .cp-add-color-button-class:disabled:hover{text-decoration:none}.color-picker .cp-remove-color-button-class{position:absolute;top:-5px;right:-5px;display:block;width:10px;height:10px;border-radius:50%;cursor:pointer;text-align:center;background:#fff;box-shadow:1px 1px 5px #333}.color-picker .cp-remove-color-button-class:before{content:\"x\";position:relative;bottom:3.5px;display:inline-block;font-size:10px}.color-picker .eyedropper-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);fill:#fff;mix-blend-mode:exclusion}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: Document,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
      }]
    }, {
      type: ColorPickerService
    }];
  }, {
    dialogElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['dialogPopup', {
        static: true
      }]
    }],
    hueSlider: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['hueSlider', {
        static: true
      }]
    }],
    alphaSlider: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['alphaSlider', {
        static: true
      }]
    }],
    handleEsc: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['document:keyup.esc', ['$event']]
    }],
    handleEnter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['document:keyup.enter', ['$event']]
    }]
  });
})(); // Caretaker note: we have still left the `typeof` condition in order to avoid
// creating a breaking change for projects that still use the View Engine.
// The `ngDevMode` is always available when Ivy is enabled.
// This will be evaluated during compilation into `const NG_DEV_MODE = false`,
// thus Terser will be able to tree-shake `console.warn` calls.


const NG_DEV_MODE = typeof ngDevMode === 'undefined' || !!ngDevMode;

class ColorPickerDirective {
  constructor(injector, cfr, appRef, vcRef, elRef, _service) {
    this.injector = injector;
    this.cfr = cfr;
    this.appRef = appRef;
    this.vcRef = vcRef;
    this.elRef = elRef;
    this._service = _service;
    this.dialogCreated = false;
    this.ignoreChanges = false;
    this.viewAttachedToAppRef = false;
    this.cpWidth = '230px';
    this.cpHeight = 'auto';
    this.cpToggle = false;
    this.cpDisabled = false;
    this.cpIgnoredElements = [];
    this.cpFallbackColor = '';
    this.cpColorMode = 'color';
    this.cpCmykEnabled = false;
    this.cpOutputFormat = 'auto';
    this.cpAlphaChannel = 'enabled';
    this.cpDisableInput = false;
    this.cpDialogDisplay = 'popup';
    this.cpSaveClickOutside = true;
    this.cpCloseClickOutside = true;
    this.cpUseRootViewContainer = false;
    this.cpPosition = 'auto';
    this.cpPositionOffset = '0%';
    this.cpPositionRelativeToArrow = false;
    this.cpOKButton = false;
    this.cpOKButtonText = 'OK';
    this.cpOKButtonClass = 'cp-ok-button-class';
    this.cpCancelButton = false;
    this.cpCancelButtonText = 'Cancel';
    this.cpCancelButtonClass = 'cp-cancel-button-class';
    this.cpEyeDropper = false;
    this.cpPresetLabel = 'Preset colors';
    this.cpPresetColorsClass = 'cp-preset-colors-class';
    this.cpMaxPresetColorsLength = 6;
    this.cpPresetEmptyMessage = 'No colors added';
    this.cpPresetEmptyMessageClass = 'preset-empty-message';
    this.cpAddColorButton = false;
    this.cpAddColorButtonText = 'Add color';
    this.cpAddColorButtonClass = 'cp-add-color-button-class';
    this.cpRemoveColorButtonClass = 'cp-remove-color-button-class';
    this.cpInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
    this.cpToggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
    this.cpSliderChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
    this.cpSliderDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
    this.cpSliderDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
    this.colorPickerOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
    this.colorPickerClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
    this.colorPickerCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
    this.colorPickerSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
    this.colorPickerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(false);
    this.cpCmykColorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
    this.cpPresetColorsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
  }

  handleClick() {
    this.inputFocus();
  }

  handleFocus() {
    this.inputFocus();
  }

  handleInput(event) {
    this.inputChange(event);
  }

  ngOnDestroy() {
    if (this.cmpRef != null) {
      if (this.viewAttachedToAppRef) {
        this.appRef.detachView(this.cmpRef.hostView);
      }

      this.cmpRef.destroy();
      this.cmpRef = null;
      this.dialog = null;
    }
  }

  ngOnChanges(changes) {
    if (changes.cpToggle && !this.cpDisabled) {
      if (changes.cpToggle.currentValue) {
        this.openDialog();
      } else if (!changes.cpToggle.currentValue) {
        this.closeDialog();
      }
    }

    if (changes.colorPicker) {
      if (this.dialog && !this.ignoreChanges) {
        if (this.cpDialogDisplay === 'inline') {
          this.dialog.setInitialColor(changes.colorPicker.currentValue);
        }

        this.dialog.setColorFromString(changes.colorPicker.currentValue, false);

        if (this.cpUseRootViewContainer && this.cpDialogDisplay !== 'inline') {
          this.cmpRef.changeDetectorRef.detectChanges();
        }
      }

      this.ignoreChanges = false;
    }

    if (changes.cpPresetLabel || changes.cpPresetColors) {
      if (this.dialog) {
        this.dialog.setPresetConfig(this.cpPresetLabel, this.cpPresetColors);
      }
    }
  }

  openDialog() {
    if (!this.dialogCreated) {
      let vcRef = this.vcRef;
      this.dialogCreated = true;
      this.viewAttachedToAppRef = false;

      if (this.cpUseRootViewContainer && this.cpDialogDisplay !== 'inline') {
        const classOfRootComponent = this.appRef.componentTypes[0];
        const appInstance = this.injector.get(classOfRootComponent, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector.NULL);

        if (appInstance !== _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector.NULL) {
          vcRef = appInstance.vcRef || appInstance.viewContainerRef || this.vcRef;

          if (NG_DEV_MODE && vcRef === this.vcRef) {
            console.warn('You are using cpUseRootViewContainer, ' + 'but the root component is not exposing viewContainerRef!' + 'Please expose it by adding \'public vcRef: ViewContainerRef\' to the constructor.');
          }
        } else {
          this.viewAttachedToAppRef = true;
        }
      }

      const compFactory = this.cfr.resolveComponentFactory(ColorPickerComponent);

      if (this.viewAttachedToAppRef) {
        this.cmpRef = compFactory.create(this.injector);
        this.appRef.attachView(this.cmpRef.hostView);
        document.body.appendChild(this.cmpRef.hostView.rootNodes[0]);
      } else {
        const injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector.create({
          providers: [],
          // We shouldn't use `vcRef.parentInjector` since it's been deprecated long time ago and might be removed
          // in newer Angular versions: https://github.com/angular/angular/pull/25174.
          parent: vcRef.injector
        });
        this.cmpRef = vcRef.createComponent(compFactory, 0, injector, []);
      }

      this.cmpRef.instance.setupDialog(this, this.elRef, this.colorPicker, this.cpWidth, this.cpHeight, this.cpDialogDisplay, this.cpFallbackColor, this.cpColorMode, this.cpCmykEnabled, this.cpAlphaChannel, this.cpOutputFormat, this.cpDisableInput, this.cpIgnoredElements, this.cpSaveClickOutside, this.cpCloseClickOutside, this.cpUseRootViewContainer, this.cpPosition, this.cpPositionOffset, this.cpPositionRelativeToArrow, this.cpPresetLabel, this.cpPresetColors, this.cpPresetColorsClass, this.cpMaxPresetColorsLength, this.cpPresetEmptyMessage, this.cpPresetEmptyMessageClass, this.cpOKButton, this.cpOKButtonClass, this.cpOKButtonText, this.cpCancelButton, this.cpCancelButtonClass, this.cpCancelButtonText, this.cpAddColorButton, this.cpAddColorButtonClass, this.cpAddColorButtonText, this.cpRemoveColorButtonClass, this.cpEyeDropper, this.elRef, this.cpExtraTemplate);
      this.dialog = this.cmpRef.instance;

      if (this.vcRef !== vcRef) {
        this.cmpRef.changeDetectorRef.detectChanges();
      }
    } else if (this.dialog) {
      this.dialog.openDialog(this.colorPicker);
    }
  }

  closeDialog() {
    if (this.dialog && this.cpDialogDisplay === 'popup') {
      this.dialog.closeDialog();
    }
  }

  cmykChanged(value) {
    this.cpCmykColorChange.emit(value);
  }

  stateChanged(state) {
    this.cpToggleChange.emit(state);

    if (state) {
      this.colorPickerOpen.emit(this.colorPicker);
    } else {
      this.colorPickerClose.emit(this.colorPicker);
    }
  }

  colorChanged(value, ignore = true) {
    this.ignoreChanges = ignore;
    this.colorPickerChange.emit(value);
  }

  colorSelected(value) {
    this.colorPickerSelect.emit(value);
  }

  colorCanceled() {
    this.colorPickerCancel.emit();
  }

  inputFocus() {
    const element = this.elRef.nativeElement;
    const ignored = this.cpIgnoredElements.filter(item => item === element);

    if (!this.cpDisabled && !ignored.length) {
      if (typeof document !== 'undefined' && element === document.activeElement) {
        this.openDialog();
      } else if (!this.dialog || !this.dialog.show) {
        this.openDialog();
      } else {
        this.closeDialog();
      }
    }
  }

  inputChange(event) {
    if (this.dialog) {
      this.dialog.setColorFromString(event.target.value, true);
    } else {
      this.colorPicker = event.target.value;
      this.colorPickerChange.emit(this.colorPicker);
    }
  }

  inputChanged(event) {
    this.cpInputChange.emit(event);
  }

  sliderChanged(event) {
    this.cpSliderChange.emit(event);
  }

  sliderDragEnd(event) {
    this.cpSliderDragEnd.emit(event);
  }

  sliderDragStart(event) {
    this.cpSliderDragStart.emit(event);
  }

  presetColorsChanged(value) {
    this.cpPresetColorsChange.emit(value);
  }

}

ColorPickerDirective.??fac = function ColorPickerDirective_Factory(t) {
  return new (t || ColorPickerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ColorPickerService));
};

ColorPickerDirective.??dir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
  type: ColorPickerDirective,
  selectors: [["", "colorPicker", ""]],
  hostBindings: function ColorPickerDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ColorPickerDirective_click_HostBindingHandler() {
        return ctx.handleClick();
      })("focus", function ColorPickerDirective_focus_HostBindingHandler() {
        return ctx.handleFocus();
      })("input", function ColorPickerDirective_input_HostBindingHandler($event) {
        return ctx.handleInput($event);
      });
    }
  },
  inputs: {
    colorPicker: "colorPicker",
    cpWidth: "cpWidth",
    cpHeight: "cpHeight",
    cpToggle: "cpToggle",
    cpDisabled: "cpDisabled",
    cpIgnoredElements: "cpIgnoredElements",
    cpFallbackColor: "cpFallbackColor",
    cpColorMode: "cpColorMode",
    cpCmykEnabled: "cpCmykEnabled",
    cpOutputFormat: "cpOutputFormat",
    cpAlphaChannel: "cpAlphaChannel",
    cpDisableInput: "cpDisableInput",
    cpDialogDisplay: "cpDialogDisplay",
    cpSaveClickOutside: "cpSaveClickOutside",
    cpCloseClickOutside: "cpCloseClickOutside",
    cpUseRootViewContainer: "cpUseRootViewContainer",
    cpPosition: "cpPosition",
    cpPositionOffset: "cpPositionOffset",
    cpPositionRelativeToArrow: "cpPositionRelativeToArrow",
    cpOKButton: "cpOKButton",
    cpOKButtonText: "cpOKButtonText",
    cpOKButtonClass: "cpOKButtonClass",
    cpCancelButton: "cpCancelButton",
    cpCancelButtonText: "cpCancelButtonText",
    cpCancelButtonClass: "cpCancelButtonClass",
    cpEyeDropper: "cpEyeDropper",
    cpPresetLabel: "cpPresetLabel",
    cpPresetColors: "cpPresetColors",
    cpPresetColorsClass: "cpPresetColorsClass",
    cpMaxPresetColorsLength: "cpMaxPresetColorsLength",
    cpPresetEmptyMessage: "cpPresetEmptyMessage",
    cpPresetEmptyMessageClass: "cpPresetEmptyMessageClass",
    cpAddColorButton: "cpAddColorButton",
    cpAddColorButtonText: "cpAddColorButtonText",
    cpAddColorButtonClass: "cpAddColorButtonClass",
    cpRemoveColorButtonClass: "cpRemoveColorButtonClass",
    cpExtraTemplate: "cpExtraTemplate"
  },
  outputs: {
    cpInputChange: "cpInputChange",
    cpToggleChange: "cpToggleChange",
    cpSliderChange: "cpSliderChange",
    cpSliderDragEnd: "cpSliderDragEnd",
    cpSliderDragStart: "cpSliderDragStart",
    colorPickerOpen: "colorPickerOpen",
    colorPickerClose: "colorPickerClose",
    colorPickerCancel: "colorPickerCancel",
    colorPickerSelect: "colorPickerSelect",
    colorPickerChange: "colorPickerChange",
    cpCmykColorChange: "cpCmykColorChange",
    cpPresetColorsChange: "cpPresetColorsChange"
  },
  exportAs: ["ngxColorPicker"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????NgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ColorPickerDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[colorPicker]',
      exportAs: 'ngxColorPicker'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: ColorPickerService
    }];
  }, {
    colorPicker: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpToggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpIgnoredElements: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpFallbackColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpColorMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpCmykEnabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpOutputFormat: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpAlphaChannel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpDisableInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpDialogDisplay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpSaveClickOutside: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpCloseClickOutside: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpUseRootViewContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpPositionOffset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpPositionRelativeToArrow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpOKButton: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpOKButtonText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpOKButtonClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpCancelButton: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpCancelButtonText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpCancelButtonClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpEyeDropper: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpPresetLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpPresetColors: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpPresetColorsClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpMaxPresetColorsLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpPresetEmptyMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpPresetEmptyMessageClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpAddColorButton: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpAddColorButtonText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpAddColorButtonClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpRemoveColorButtonClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpExtraTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cpInputChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    cpToggleChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    cpSliderChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    cpSliderDragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    cpSliderDragStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    colorPickerOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    colorPickerClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    colorPickerCancel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    colorPickerSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    colorPickerChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    cpCmykColorChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    cpPresetColorsChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    handleClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click']
    }],
    handleFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['focus']
    }],
    handleInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['input', ['$event']]
    }]
  });
})();

class ColorPickerModule {}

ColorPickerModule.??fac = function ColorPickerModule_Factory(t) {
  return new (t || ColorPickerModule)();
};

ColorPickerModule.??mod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
  type: ColorPickerModule,
  declarations: [ColorPickerComponent, ColorPickerDirective, TextDirective, SliderDirective],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
  exports: [ColorPickerDirective]
});
ColorPickerModule.??inj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
  providers: [ColorPickerService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ColorPickerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      exports: [ColorPickerDirective],
      providers: [ColorPickerService],
      declarations: [ColorPickerComponent, ColorPickerDirective, TextDirective, SliderDirective],
      entryComponents: [ColorPickerComponent]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_Camera_camera_module_ts.js.map