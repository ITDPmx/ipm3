import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPercentageInvestmentComponent } from './chart-percentage-investment.component';

describe('ChartPercentageInvestmentComponent', () => {
  let component: ChartPercentageInvestmentComponent;
  let fixture: ComponentFixture<ChartPercentageInvestmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartPercentageInvestmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPercentageInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
