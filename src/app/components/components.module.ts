import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleColorPickerComponent } from './simple-color-picker/simple-color-picker.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MaterialModule } from '../material.module';
import { ColorPickerModule } from 'ngx-color-picker';



@NgModule({
  declarations: [
    SimpleColorPickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    ColorPickerModule
  ],
  exports: [
    SimpleColorPickerComponent
  ]
})
export class ComponentsModule { }
