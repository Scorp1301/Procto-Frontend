import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListappointmentComponent } from './users-listappointment.component';

describe('UsersListappointmentComponent', () => {
  let component: UsersListappointmentComponent;
  let fixture: ComponentFixture<UsersListappointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersListappointmentComponent]
    });
    fixture = TestBed.createComponent(UsersListappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
