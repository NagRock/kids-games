import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RememberRandomImagesScreenComponent } from './remember-random-images-screen.component';

describe('RememberRandomImagesScreenComponent', () => {
  let component: RememberRandomImagesScreenComponent;
  let fixture: ComponentFixture<RememberRandomImagesScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RememberRandomImagesScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RememberRandomImagesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
