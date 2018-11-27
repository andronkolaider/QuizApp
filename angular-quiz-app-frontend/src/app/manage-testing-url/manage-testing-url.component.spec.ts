import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTestingUrlComponent } from './manage-testing-url.component';

describe('ManageTestingUrlComponent', () => {
  let component: ManageTestingUrlComponent;
  let fixture: ComponentFixture<ManageTestingUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTestingUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTestingUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
