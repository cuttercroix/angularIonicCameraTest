import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CameraPage } from './camera.page';

import { CameraRoutingModule } from './camera-routing.module';
import { MaterialModule } from '../material.module';
import { GalleryComponent } from './gallery/gallery.component';
import { PhotoviewerComponent } from './photo-viewer/photo-viewer.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CameraRoutingModule,
    MaterialModule,
    ComponentsModule,
  ],
  declarations: [CameraPage, GalleryComponent, PhotoviewerComponent]
})
export class CameraPageModule {}
