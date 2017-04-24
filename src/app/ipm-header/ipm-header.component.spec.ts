import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpmHeaderComponent } from './ipm-header.component';

describe('IpmHeaderComponent', () => {
  let component: IpmHeaderComponent;
  let fixture: ComponentFixture<IpmHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpmHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpmHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
