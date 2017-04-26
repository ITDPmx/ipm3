import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSevenComponent } from './chart-seven.component';

describe('ChartSevenComponent', () => {
  let component: ChartSevenComponent;
  let fixture: ComponentFixture<ChartSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
