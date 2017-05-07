import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpmDownloadComponent } from './ipm-download.component';

describe('IpmDownloadComponent', () => {
  let component: IpmDownloadComponent;
  let fixture: ComponentFixture<IpmDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpmDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpmDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
