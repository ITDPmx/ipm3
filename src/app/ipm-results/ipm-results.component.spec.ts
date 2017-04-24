import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpmResultsComponent } from './ipm-results.component';

describe('IpmResultsComponent', () => {
  let component: IpmResultsComponent;
  let fixture: ComponentFixture<IpmResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpmResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpmResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
