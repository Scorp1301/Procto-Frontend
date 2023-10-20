import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserMainComponent } from './user-main/user-main.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { UsersBookingconfirmComponent } from './users-bookingconfirm/users-bookingconfirm.component';
import { UsersListappointmentComponent } from './users-listappointment/users-listappointment.component';
const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch:'full'},
  {path: 'login', component: UserLoginComponent},
  {path: 'admin', component: AdminLoginComponent},
  {path: 'register', component: UserRegistrationComponent},
  {path: 'user-main', component: UserMainComponent},
  {path: 'admin-main', component: AdminMainComponent},
  { path: 'booking', component: UsersBookingconfirmComponent},
  { path:'apptable', component: UsersListappointmentComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
