import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlHeaderComponent } from './pl-header.component';

describe('PlHeaderComponent', () => {
  let component: PlHeaderComponent;
  let fixture: ComponentFixture<PlHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
