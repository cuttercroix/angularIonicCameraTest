/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-photoviewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.scss'],
})
export class PhotoviewerComponent implements AfterViewInit {
  
  //canvas defaults
  @ViewChild('header') public Header: ElementRef;
  @ViewChild('editContainer') public EditContainer: ElementRef;
  @ViewChild('imgcanvas') public IamgeCanvas: ElementRef<HTMLCanvasElement>;
  public Context: CanvasRenderingContext2D;
  public DPI = window.devicePixelRatio;
  public Width = 200;
  public Height = 200;
  private platform = '';
  @Input() Image: any;
  @Input() ShowDetails: boolean = false;
  @Input() ShapeColor = '#ffeb3b';
  @Input() Shapes = [
    {
      Label:'circle',
      Icon:'far fa-circle'
    },
    {
      Label:'square',
      Icon:'far fa-square'
    },
    {
      Label:'arrow',
      Icon:'fas fa-long-arrow-right'
    },
    {
      Label:'line',
      Icon:'fas fa-slash'
    }
    /*
    {
      Label:'path',
      Icon:'fas fa-paint-brush'
    }
    */
  ];
  @Input() MultipleColors: boolean = false;
  public SelectedShape = null;
  
  //drawing tools
  public StartX: number = 0.0;
  public StartY: number = 0.0;
  public EndX: number = 0.0;
  public EndY: number = 0.0;
  private minStroke: number = 2;
  private maxStroke: number = 20;
  private stokeStartX: number = 0.0;
  public ShowStrokeSize: boolean = false;
  public StrokeSize: number = 4;
  public CircleRadius: number = 12;
  public MyObjects = [];
  public FillCircle: boolean = false;
  public FillSquare: boolean = false;

  constructor(private _modal: ModalController) {

  }
  async ngAfterViewInit() {
    this.platform = Capacitor.getPlatform();
    console.log(this.Image);
    await this.DrawImageToCanvas();
    if(this.Shapes.length){
      this.SelectShape(this.Shapes[0], null);
    }
  };
  Close(save?: boolean){
    if(save){
      this._modal.dismiss();
    } else {
      this._modal.dismiss();
    }
  };

  GetWidth = () => this.Width;
  GetHeight = () => this.Height;

  public async DrawImageToCanvas(): Promise<void>
  {
    let image = new Image();
    let ctrl: PhotoviewerComponent = this;
    if (ctrl.Image?.Data)
    {
      image.src = this.Image.Data;
    }
    return new Promise((resolve, reject) => 
    {
      image.onload = () => {
        let canvas = this.IamgeCanvas;
        let w = this.EditContainer.nativeElement.offsetWidth - 20;
        this.Width = w;
        let aspectRatio = w / image.width;
        let h = image.height * aspectRatio;
        this.Height = h;
        if(image.height >= image.width){
          h = this.EditContainer.nativeElement.offsetHeight - 20;
          this.Height = h;
          aspectRatio = h / image.height;
          w = image.width * aspectRatio;
          this.Width = w;
        }

        if (canvas)
        {
          canvas.nativeElement.width = w * this.DPI;
          canvas.nativeElement.height = h * this.DPI;
          
          let ctx: CanvasRenderingContext2D = canvas.nativeElement.getContext('2d');
          ctx.scale(this.DPI, this.DPI);
          ctx.clearRect(0, 0, w, h);
          //ctx.drawImage(image, 0, 0, w, h);
        }
        resolve();
      };

      image.onabort = reject;
      image.onerror = reject;
    });
    
  }
  ToggleDetails = () => {
    this.ShowDetails = !this.ShowDetails;
  };
  ChangeShapeColor = async (color: any) => {
    this.ShapeColor = color;
    if(!this.MultipleColors){
      await this.DrawImageToCanvas();
      this.Context.clearRect(0, 0, this.Width, this.Height);
      for(let obj of this.MyObjects){
        this.DrawObjects(obj);
      }
    }
  };
  SelectShape = (shape: any, e?: TouchEvent) => {
    if(e){
      this.stokeStartX = e.touches[0].clientX;
    }
    if(this.SelectShape){
      if(shape?.Label === 'circle' || shape?.Label === 'square'){
        if(this.SelectedShape?.Label === shape?.Label){
          this.ToggleFill(shape);
        } else {
          this.SelectedShape = shape;
        }
      } else {
        this.SelectedShape = shape;
      }
    } else{
      this.SelectedShape = shape;
    }
  };
  ToggleFill = (shape: any) => {
    console.log('togglefill - ' + shape)
    if(shape.Label === 'circle'){
      this.FillCircle = !this.FillCircle;
      if(this.FillCircle)
      {
        shape.Icon = 'fas fa-circle';
      }else {
        shape.Icon = 'far fa-circle';
      }    
    }else if(shape.Label === 'square'){
      this.FillSquare = !this.FillSquare;
      if(this.FillSquare)
      {
        shape.Icon = 'fas fa-square';
      }else {
        shape.Icon = 'far fa-square';
      } 
    }
  }
  ChangeShapeStroke = (e: TouchEvent) => {
    this.ShowStrokeSize = true;
    let rate = (window.innerWidth)/this.maxStroke;
    let movement = (e.touches[0].clientX - this.stokeStartX)/rate;

    this.StrokeSize = Math.floor(this.StrokeSize + movement);
    if(this.minStroke > this.StrokeSize){
      this.StrokeSize = this.minStroke ;
    } else if(this.StrokeSize > this.maxStroke){
      this.StrokeSize = this.maxStroke;
    }
    console.log(this.StrokeSize);
  };
  SetShapeStroke = (e: TouchEvent) => {
    this.ShowStrokeSize = false;
  };
  TouchStart = (e: TouchEvent) => {
    if(this.SelectedShape){
      this.StartX = e.touches[0].clientX - (this.Header.nativeElement.offsetWidth - this.IamgeCanvas.nativeElement.offsetWidth)/2;
      this.StartY = e.touches[0].clientY - this.Header.nativeElement.offsetHeight;
      if(this.SelectedShape.Label !== 'square'){
        this.StartX = this.StartX + 10;
        this.StartY = this.StartY - 4;
      }
      
      this.EndX = e.touches[0].clientX - (this.Header.nativeElement.offsetWidth - this.IamgeCanvas.nativeElement.offsetWidth)/2;
      this.EndY = e.touches[0].clientY - this.Header.nativeElement.offsetHeight;
      this.DrawObjects();
    }
    else{
      e.stopImmediatePropagation();
      e.preventDefault();
    }
  };
  TouchEnd = async (e: TouchEvent) => {
    let fill = false;
    if(this.SelectedShape.Label === 'circle' && this.FillCircle){
      fill = true;
    } else if(this.SelectedShape.Label === 'square' && this.FillSquare){
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
    await this.DrawImageToCanvas();
    for(let object of this.MyObjects){
      this.DrawObjects(object);
    }
  };
  TouchMove = (e: TouchEvent) => {
    this.EndX = e.touches[0].clientX - (this.Header.nativeElement.offsetWidth - this.IamgeCanvas.nativeElement.offsetWidth)/2;
    this.EndY = e.touches[0].clientY - this.Header.nativeElement.offsetHeight;
    this.DrawObjects();
  };
  Undo = async () => {
    if(this.MyObjects.length){
      this.MyObjects.pop();
    }
    this.Context = this.IamgeCanvas.nativeElement.getContext('2d');
    await this.DrawImageToCanvas();
    this.Context.clearRect(0, 0, this.Width, this.Height);
    for(let object of this.MyObjects){
      this.DrawObjects(object);
    }
  };
  DrawObjects = async (object?: any) => {
    this.Context = this.IamgeCanvas.nativeElement.getContext('2d');
    let fill = '#ffffff00';
    let fillShape = false;
    if(object){
      if(object.Fill){
        fill = object.ShapeColor;
        fillShape = true;
      }
      if(object.Shape === 'circle'){
        this._drawCircle(this.Context, object.StartX, object.StartY, object.CircleRadius, fill, object.ShapeColor, object.StrokeSize, fillShape);
      } else if(object.Shape  === 'square'){
        this._drawSquare(this.Context, object.StartX , object.StartY, object.EndX - object.StartX , object.EndY - object.StartY, fill, object.ShapeColor, object.StrokeSize, fillShape);
      } else if(object.Shape  === 'arrow'){
        this._drawArrow(this.Context, object.StartX , object.StartY, object.EndX, object.EndY, fill, object.ShapeColor, object.StrokeSize);
      } else if(object.Shape  === 'line'){
        this._drawLine(this.Context, object.StartX , object.StartY, object.EndX, object.EndY, fill, object.ShapeColor, object.StrokeSize);
      }
    } else {
      if(this.MyObjects.length){
        await this.DrawImageToCanvas();
        this.Context.clearRect(0, 0, this.Width, this.Height);
        for(let obj of this.MyObjects){
          this.DrawObjects(obj);
        }
      }else {
        this.Context.clearRect(0, 0, this.Width, this.Height);
        await this.DrawImageToCanvas();
      }

      if(this.SelectedShape?.Label === 'circle'){
        
        if(12 > Math.abs(this.StartX - this.EndX) && 12 > Math.abs(this.StartY - this.EndY)){
          this.CircleRadius = 12;
        } else {
          let xMove = Math.abs(this.StartX - this.EndX);
          let yMove = Math.abs(this.StartY - this.EndY);
          if(xMove > yMove){
            this.CircleRadius = xMove;
          } else {
            this.CircleRadius = yMove;
          }
        }
        
        if(this.FillCircle){
          fill = this.ShapeColor;
          fillShape = true;
        }
        this._drawCircle(this.Context, this.StartX, this.StartY, this.CircleRadius, fill, this.ShapeColor, this.StrokeSize, fillShape);
      } else if(this.SelectedShape?.Label === 'square'){
        if(this.FillSquare){
          fill = this.ShapeColor;
          fillShape = true;
        }
        this._drawSquare(this.Context, this.StartX , this.StartY, this.EndX - this.StartX, this.EndY - this.StartY, fill, this.ShapeColor, this.StrokeSize, fillShape);
      } else if(this.SelectedShape?.Label === 'arrow'){
        if(5 > this.StartX - this.EndX){
          this.EndX += 5;
        }
        this._drawArrow(this.Context, this.StartX , this.StartY, this.EndX, this.EndY, fill, this.ShapeColor, this.StrokeSize);
      } else if(this.SelectedShape?.Label === 'line'){
        if(5 > this.StartX - this.EndX){
          this.EndX += 5;
        }
        this._drawLine(this.Context, this.StartX , this.StartY, this.EndX, this.EndY, '#ffffff00', this.ShapeColor, this.StrokeSize);
      }
    }
  };

  _drawCircle(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, fill: string, stroke: string, strokeWidth: number, fillShape: boolean)
  {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    if (fillShape)
    {
      if(this.MultipleColors){
        ctx.fillStyle = fill;
      } else {
        ctx.fillStyle = this.ShapeColor;
      }
      ctx.fill();
    }else {
      ctx.lineWidth = strokeWidth;
      if(this.MultipleColors){
        ctx.strokeStyle = stroke;
      } else {
        ctx.strokeStyle = this.ShapeColor;
      }
      ctx.stroke();
    }
    ctx.font = '14pt';
    ctx.fillStyle = 'white';
  }
  _drawSquare(ctx: CanvasRenderingContext2D, fromx: number, fromy: number, width: number, height: number, fill: string, stroke: string, strokeWidth: number, fillShape: boolean)
  {
    ctx.fillStyle = fill;
    if (fillShape)
    {
      if(this.MultipleColors){
        ctx.fillStyle = fill;
      } else {
        ctx.fillStyle = this.ShapeColor;
      }
      ctx.fillRect(fromx, fromy, width, height);
    }else {
      ctx.lineWidth = strokeWidth;
      if(this.MultipleColors){
        ctx.strokeStyle = stroke;
      } else {
        ctx.strokeStyle = this.ShapeColor;
      }
      ctx.strokeRect(fromx, fromy, width, height);
    }
    ctx.font = '14pt';
    ctx.fillStyle = 'white';
  }
  _drawArrow(ctx: CanvasRenderingContext2D, fromx, fromy, tox, toy, fill: string, stroke: string, strokeWidth: number){
    //variables to be used when creating the arrow
    const width = strokeWidth;
    let headlen = strokeWidth*2;
    let angle = Math.atan2(toy-fromy,tox-fromx);
    // This makes it so the end of the arrow head is located at tox, toy, don't ask where 1.15 comes from
    tox -= Math.cos(angle) * ((width*1.15));
    toy -= Math.sin(angle) * ((width*1.15));
    
    //starting path of the arrow from the start square to the end square and drawing the stroke
    ctx.beginPath();
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox, toy);

    if(this.MultipleColors){
      ctx.strokeStyle = stroke;
    } else {
      ctx.strokeStyle = this.ShapeColor;
    }
    ctx.lineWidth = width;
    ctx.stroke();
    
    //starting a new path from the head of the arrow to one of the sides of the point
    ctx.beginPath();
    ctx.moveTo(tox, toy);
    ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/7),toy-headlen*Math.sin(angle-Math.PI/7));
    
    //path from the side point of the arrow, to the other side point
    ctx.lineTo(tox-headlen*Math.cos(angle+Math.PI/7),toy-headlen*Math.sin(angle+Math.PI/7));
    
    //path from the side point back to the tip of the arrow, and then again to the opposite side point
    ctx.lineTo(tox, toy);
    ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/7),toy-headlen*Math.sin(angle-Math.PI/7));

    //draws the paths created above
    if(this.MultipleColors){
      ctx.strokeStyle = stroke;
    } else {
      ctx.strokeStyle = this.ShapeColor;
    }
    ctx.lineWidth = width;
    ctx.stroke();
    if(this.MultipleColors){
      ctx.fillStyle = stroke;
    } else {
      ctx.fillStyle = this.ShapeColor;
    }
    
    ctx.fill();
  }
  _drawLine(ctx: CanvasRenderingContext2D, fromx, fromy, tox, toy, fill: string, stroke: string, strokeWidth: number) {
    console.log(fromx, fromy, tox, toy);
    ctx.beginPath();
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox, toy);
    if(this.MultipleColors){
      ctx.strokeStyle = stroke;
    } else {
      ctx.strokeStyle = this.ShapeColor;
    }
    ctx.lineWidth = strokeWidth;
    ctx.stroke();
  }
  _draw(ctx: CanvasRenderingContext2D, fromx, fromy, tox, toy, fill: string, stroke: string, strokeWidth: number) {
    ctx.beginPath();
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox, toy);
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    if(this.MultipleColors){
      ctx.strokeStyle = stroke;
    } else {
      ctx.strokeStyle = this.ShapeColor;
    }
    ctx.lineWidth = strokeWidth;
    ctx.stroke();
    ctx.closePath();
}
}
