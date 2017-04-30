import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPopulationComponent } from './chart-population.component';

describe('ChartPopulationComponent', () => {
  let component: ChartPopulationComponent;
  let fixture: ComponentFixture<ChartPopulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartPopulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPopulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
