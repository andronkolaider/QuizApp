import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveAnswerComponent } from './remove-answer.component';

describe('RemoveAnswerComponent', () => {
  let component: RemoveAnswerComponent;
  let fixture: ComponentFixture<RemoveAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
