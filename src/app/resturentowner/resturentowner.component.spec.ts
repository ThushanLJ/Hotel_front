import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturentownerComponent } from './resturentowner.component';

describe('ResturentownerComponent', () => {
  let component: ResturentownerComponent;
  let fixture: ComponentFixture<ResturentownerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResturentownerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturentownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
