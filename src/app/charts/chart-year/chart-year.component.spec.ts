import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartYearComponent } from './chart-year.component';

describe('ChartYearComponent', () => {
  let component: ChartYearComponent;
  let fixture: ComponentFixture<ChartYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
