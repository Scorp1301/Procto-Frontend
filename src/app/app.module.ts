import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AdminAppointmentsComponent } from './admin-appointments/admin-appointments.component';
import { AdminCancelAppointmentsComponent } from './admin-cancel-appointments/admin-cancel-appointments.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AdminDoctorsComponent } from './admin-doctors/admin-doctors.component';
import { UserMainComponent } from './user-main/user-main.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { UsersBookingconfirmComponent } from './users-bookingconfirm/users-bookingconfirm.component';
import { UsersListappointmentComponent } from './users-listappointment/users-listappointment.component';



@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    AdminLoginComponent,
    AdminUsersComponent,
    AdminAppointmentsComponent,
    AdminCancelAppointmentsComponent,
    AdminMainComponent,
    AdminDoctorsComponent,
    UserMainComponent,
    UsersBookingconfirmComponent,
    UsersListappointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, 
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
