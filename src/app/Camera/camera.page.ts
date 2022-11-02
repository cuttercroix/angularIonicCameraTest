/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Camera } from '@capacitor/camera';
import { ModalController } from '@ionic/angular';
import { GalleryComponent } from './gallery/gallery.component';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { PhotoviewerComponent } from './photo-viewer/photo-viewer.component';
import { Capacitor } from '@capacitor/core';
import { CameraPreviewFlashMode, CameraPreview, CameraPreviewOptions, CameraPreviewPictureOptions } from 'capacitor-community-multilens-camerapreview';

@Component({
  selector: 'app-camera',
  templateUrl: 'camera.page.html',
  styleUrls: ['camera.page.scss'],
})
export class CameraPage {
  @ViewChild('thumbnails') public thumbnails: ElementRef;
  @ViewChild('content') public content: ElementRef;
  @ViewChild('imagePlaceholder') public imagePlaceholder: ElementRef;
  public LoadedImage: string = '';
  public Images = [];
  public OriginalImages = [];
  public Platform: string = ''
  CameraHeight = 0;
  CameraActive = false;
  ZoomLevels = [];
  Zoom = '';
  Flash = 'off';
  Front = false;
  FlashModes: CameraPreviewFlashMode[] = [];
  HasFlash = false;

  constructor(private _modal: ModalController) { }
  async ngAfterViewInit(): Promise<void> {
    this.Platform = Capacitor.getPlatform();
    if(this.Zoom === ''){
      if(this.Platform === 'ios'){
        this.Zoom = 'ultra'
      }else {
        this.Zoom = '100';
      }
    }
    setTimeout(async () => {
      await this.launchCamera();
      if(this.Platform !== 'web'){
        await this.ConfigCameras()
      }
    }, 1000);
  }
  ConfigFlash = async () => {
    //get flash modes and eliminate the ones we dont want
    const flashModes = await CameraPreview.getSupportedFlashModes();
    this.FlashModes = flashModes.result;
    let loopNum = 0;
    for(const mode of this.FlashModes){
      loopNum++
      if(mode === 'auto' || mode === 'red-eye'){
        this.FlashModes.splice(loopNum,1)
      }
    }
    if(this.FlashModes.length){
      this.HasFlash = true;
    }
  }
  async SetZoom(zoomLevel: any){
    if(this.Platform === 'ios'){
      this.Zoom = zoomLevel;
      const cameraPreviewOptions: CameraPreviewOptions = {
        zoomFactor: this.Zoom
      };
      await CameraPreview.setZoom(cameraPreviewOptions);
    }
  }
  async launchCamera() {
    const cameraPreviewOptions: CameraPreviewOptions = {
      position: 'rear', // front or rear
      parent: 'content', // the id on the ion-content
      className: 'cameraPreview',
      enableZoom: true,
      enableHighResolution: true,
      disableExifHeaderStripping: true,
      rotateWhenOrientationChanged: false,
      toBack: true,
      width: this.content.nativeElement.offsetWidth,
      zoomFactor: this.Zoom
    };
    await CameraPreview.start(cameraPreviewOptions);
    this.CameraActive = true;
    if(!this.FlashModes.length && this.Platform !== 'web'){
      await this.ConfigFlash();
    }
  }
  async ConfigCameras(){
    const cams = await CameraPreview.getSupportedZoomLevels();
    for(const cam of cams.result){
      this.ZoomLevels.push(cam)
      console.log(cam)
    }
    this.Zoom = this.ZoomLevels[0];
  }
  async takePicture() {
    this.CameraActive = false;
    const cameraPreviewPictureOptions: CameraPreviewPictureOptions = {
      quality: 100,
      width: 800,
    };
    const result = await CameraPreview.capture(cameraPreviewPictureOptions);
    this.CameraActive = true;
    const image = {
      Data: `data:image/jpeg;base64,${result.value}`,
      Selected: false
    }
    console.log(image)
    //this.OriginalImages.push(image)
    this.Images.push(image);
    this.scrollMyDiv();
  }
  scrollMyDiv() {
    //figure this out
    setTimeout(() => {
      this.thumbnails.nativeElement.scrollTo({ left: (this.thumbnails.nativeElement.scrollLeft + 60), behavior: 'smooth' });
    }, 500);
  }
  LaunchGallery = async () => {
    this.stopCamera()
    const modal = await this._modal.create({
      component: GalleryComponent,
      cssClass: 'fullScreenModal',
      componentProps: {
        Images: this.Images
      }
    });
    modal.onDidDismiss().then(async data => {
      if(data){
        this.Images = data.data;
      }
      await this.launchCamera()
    });
    return await modal.present();
  }
  ViewImage = async (img) => {
    this.stopCamera()
    const modal = await this._modal.create({
      component: PhotoviewerComponent,
      cssClass: 'fullScreenModal',
      componentProps: {
        Image: img
      }
    });
    modal.onDidDismiss().then(async data => {
      await this.launchCamera();
    });
    return await modal.present();
  }
  PickFromGallery = async () => {
    const photos = await Camera.pickImages({
      quality: 100,
      correctOrientation: true,
      presentationStyle: 'popover'
    });
  }
  async stopCamera() {
    this.CameraActive = false;
    await CameraPreview.stop();
  }
  Close = () => {
    if(this.CameraActive){
      this.stopCamera()
    } else {
      this.launchCamera()
    }
  }
  CycleFlash = () =>{
    if(this.Flash === 'off'){
      this.Flash = 'on'
      CameraPreview.setFlashMode({flashMode:'on'});
    } else if(this.Flash === 'on'){
      this.Flash = 'torch'
      CameraPreview.setFlashMode({flashMode:'torch'});
    } else if(this.Flash === 'torch'){
      this.Flash = 'off'
      CameraPreview.setFlashMode({flashMode:'off'});
    }else {
      this.Flash = 'off'
    }
  }
  FlipCam = () => {
    this.Front = !this.Front;
    CameraPreview.flip()
  }
}
