import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSixComponent } from './chart-six.component';

describe('ChartSixComponent', () => {
  let component: ChartSixComponent;
  let fixture: ComponentFixture<ChartSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
