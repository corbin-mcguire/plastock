import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFilamentComponent } from './add-filament.component';

describe('AddFilamentComponent', () => {
  let component: AddFilamentComponent;
  let fixture: ComponentFixture<AddFilamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFilamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFilamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
