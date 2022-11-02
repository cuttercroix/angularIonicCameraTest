/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { ModalController } from '@ionic/angular';
import { PhotoviewerComponent } from '../photo-viewer/photo-viewer.component';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  @Input() public Images = [];
  public SelectedImages = 0;
  public CameraOpen = false;
  constructor(private _modal: ModalController) {}

  ToggleImg = (img, _e: Event) => {
    _e.stopImmediatePropagation();
    _e.preventDefault();
    img.Selected = !img.Selected;
    this.UpdateSelectedImages();
  }
  ViewImage = async (img) => {
    const modal = await this._modal.create({
      component: PhotoviewerComponent,
      cssClass: 'fullScreenModal',
      componentProps: {
        Image: img
      }
    });
    modal.onDidDismiss().then(async data => {
      //
    });
    return await modal.present();
  }
  UpdateSelectedImages = () => {
    let selectedImages = 0
    for(const img of this.Images){
      if(img.Selected){
        selectedImages++;
      }
    }
    this.SelectedImages = selectedImages;
  }
  UnselectAll = () => {
    for(const img of this.Images){
      img.Selected = false;
    }
    this.SelectedImages = 0;
  }
  DeleteSelected = () => {
    this.Images = this.Images.filter(function( obj ) {
      return !obj.Selected;
    });
    this.UnselectAll()
  }
  Close(){
    this._modal.dismiss(this.Images);
  }
}
