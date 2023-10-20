import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersBookingconfirmComponent } from './users-bookingconfirm.component';

describe('UsersBookingconfirmComponent', () => {
  let component: UsersBookingconfirmComponent;
  let fixture: ComponentFixture<UsersBookingconfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersBookingconfirmComponent]
    });
    fixture = TestBed.createComponent(UsersBookingconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
