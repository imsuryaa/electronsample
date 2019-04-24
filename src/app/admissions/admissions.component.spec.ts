import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionsComponent } from './admissions.component';

describe('AdmissionsComponent', () => {
  let component: AdmissionsComponent;
  let fixture: ComponentFixture<AdmissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
