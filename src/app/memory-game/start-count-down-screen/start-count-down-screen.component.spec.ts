import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartCountDownScreenComponent } from './start-count-down-screen.component';

describe('StartCountDownScreenComponent', () => {
  let component: StartCountDownScreenComponent;
  let fixture: ComponentFixture<StartCountDownScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartCountDownScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartCountDownScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
