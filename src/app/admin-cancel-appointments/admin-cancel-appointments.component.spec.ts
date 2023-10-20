import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCancelAppointmentsComponent } from './admin-cancel-appointments.component';

describe('AdminCancelAppointmentsComponent', () => {
  let component: AdminCancelAppointmentsComponent;
  let fixture: ComponentFixture<AdminCancelAppointmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCancelAppointmentsComponent]
    });
    fixture = TestBed.createComponent(AdminCancelAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
