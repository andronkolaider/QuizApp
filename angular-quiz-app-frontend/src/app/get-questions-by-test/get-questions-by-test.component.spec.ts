import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetQuestionsByTestComponent } from './get-questions-by-test.component';

describe('GetQuestionsByTestComponent', () => {
  let component: GetQuestionsByTestComponent;
  let fixture: ComponentFixture<GetQuestionsByTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetQuestionsByTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetQuestionsByTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
