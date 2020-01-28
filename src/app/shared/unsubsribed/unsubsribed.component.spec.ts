import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubsribedComponent } from './unsubsribed.component';

describe('UnsubsribedComponent', () => {
  let component: UnsubsribedComponent;
  let fixture: ComponentFixture<UnsubsribedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsubsribedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsubsribedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
