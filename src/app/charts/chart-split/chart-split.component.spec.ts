import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSplitComponent } from './chart-split.component';

describe('ChartSplitComponent', () => {
  let component: ChartSplitComponent;
  let fixture: ComponentFixture<ChartSplitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartSplitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
