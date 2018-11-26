import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassingTestComponent } from './passing-test.component';

describe('PassingTestComponent', () => {
  let component: PassingTestComponent;
  let fixture: ComponentFixture<PassingTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassingTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
