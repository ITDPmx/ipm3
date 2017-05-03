import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartExercisedComponent } from './chart-exercised.component';

describe('ChartExercisedComponent', () => {
  let component: ChartExercisedComponent;
  let fixture: ComponentFixture<ChartExercisedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartExercisedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartExercisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
