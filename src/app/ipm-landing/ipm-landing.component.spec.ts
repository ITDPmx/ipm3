import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpmLandingComponent } from './ipm-landing.component';

describe('IpmLandingComponent', () => {
  let component: IpmLandingComponent;
  let fixture: ComponentFixture<IpmLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpmLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpmLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
