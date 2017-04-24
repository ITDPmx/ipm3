import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpmFooterComponent } from './ipm-footer.component';

describe('IpmFooterComponent', () => {
  let component: IpmFooterComponent;
  let fixture: ComponentFixture<IpmFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpmFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpmFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
