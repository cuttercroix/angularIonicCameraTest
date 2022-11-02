/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @angular-eslint/component-selector */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cc-simple-color-picker',
  templateUrl: './simple-color-picker.component.html',
  styleUrls: ['./simple-color-picker.component.scss']
})
export class SimpleColorPickerComponent implements OnInit {
  @Input() Color:string = '#2196F3';
  @Input() SizeClass:string = 'smIconBtn';
  @Input() Vertical:boolean = false;
  @Input() PickerClass:string = 'black-text';
  @Input() SingleMode:boolean = false;
  @Input() MobileMode:boolean = false;
  DefaultPickerClass:string = null;
  
  @Output() ColorChange = new EventEmitter<string>();
  constructor() { 
    if(this.Color == null){}else{
      this.SetColor('#000000');
    }
  }

  ngOnInit(): void {
    this.DefaultPickerClass = this.PickerClass;
  }
  SetColor = (val:string) => {
    this.Color = val;
    this.ColorChange.emit(val)

    
    if(!this.NotStandardColor()){
      this.PickerClass = this.DefaultPickerClass;
    }else {
      let rgb = val.substring(5, val.length-1).replace(/ /g, '').split(',');
      if(rgb.length === 4){
        rgb.pop();
      }
      let lessthan128 = false;
      for(let val of rgb){
        if(Number(val) < 128){
          lessthan128 = true
        }
      }
      if(lessthan128){
        this.PickerClass = 'white-text';
      }else{
        this.PickerClass = 'black-text';
      }
    }
  }
  NotStandardColor = () => {
    if(this.Color === '#2196F3'){
      return false
    }else if(this.Color === '#4CAF50'){
      return false
    }else if(this.Color === '#ffeb3b'){
      return false
    }else if(this.Color === '#ff9800'){
      return false
    }else if(this.Color === '#9c27b0'){
      return false
    }else if(this.Color === '#F44336'){
      return false
    } 
    else {
      return true
    }
  }
}
