import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExaminationComponent } from './create-examination.component';

describe('CreateExaminationComponent', () => {
  let component: CreateExaminationComponent;
  let fixture: ComponentFixture<CreateExaminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateExaminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
