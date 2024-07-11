import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleAboutComponent } from './apple-about.component';

describe('AppleAboutComponent', () => {
  let component: AppleAboutComponent;
  let fixture: ComponentFixture<AppleAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppleAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppleAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
