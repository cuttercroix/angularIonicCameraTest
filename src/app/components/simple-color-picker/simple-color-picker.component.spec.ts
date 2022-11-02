import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleColorPickerComponent } from './simple-color-picker.component';

describe('SimpleColorPickerComponent', () => {
  let component: SimpleColorPickerComponent;
  let fixture: ComponentFixture<SimpleColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleColorPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
