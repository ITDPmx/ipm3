import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartFiveComponent } from './chart-five.component';

describe('ChartFiveComponent', () => {
  let component: ChartFiveComponent;
  let fixture: ComponentFixture<ChartFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
