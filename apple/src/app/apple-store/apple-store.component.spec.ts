import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleStoreComponent } from './apple-store.component';

describe('AppleStoreComponent', () => {
  let component: AppleStoreComponent;
  let fixture: ComponentFixture<AppleStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppleStoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppleStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
