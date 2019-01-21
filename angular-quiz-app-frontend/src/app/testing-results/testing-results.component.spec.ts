import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingResultsComponent } from './testing-results.component';

describe('TestingResultsComponent', () => {
  let component: TestingResultsComponent;
  let fixture: ComponentFixture<TestingResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
