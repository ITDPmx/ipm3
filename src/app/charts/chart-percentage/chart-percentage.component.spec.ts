import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPercentageComponent } from './chart-percentage.component';

describe('ChartPercentageComponent', () => {
  let component: ChartPercentageComponent;
  let fixture: ComponentFixture<ChartPercentageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartPercentageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
