import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartInvestmentComponent } from './chart-investment.component';

describe('ChartInvestmentComponent', () => {
  let component: ChartInvestmentComponent;
  let fixture: ComponentFixture<ChartInvestmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartInvestmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
