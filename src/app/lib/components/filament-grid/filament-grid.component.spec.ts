import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilamentGridComponent } from './filament-grid.component';

describe('FilamentGridComponent', () => {
  let component: FilamentGridComponent;
  let fixture: ComponentFixture<FilamentGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilamentGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilamentGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
