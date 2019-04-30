import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExaminationComponent } from './view-examination.component';

describe('ViewExaminationComponent', () => {
  let component: ViewExaminationComponent;
  let fixture: ComponentFixture<ViewExaminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewExaminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
