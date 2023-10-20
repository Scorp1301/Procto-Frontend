import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent  {
  displayUserManagement: boolean = false;
  displayAppointmentManagement: boolean = false;
  displayMessageSending: boolean = false;
  displayAppointmentCancellation: boolean = false;
  displayDoctorManagement: boolean = false;

  constructor(private router:Router){}

  showUserManagement() {
    this.resetDisplayFlags();
    this.displayUserManagement = true;
  }

  showAppointmentManagement() {
    this.resetDisplayFlags();
    this.displayAppointmentManagement = true;
  }

  showMessageSending() {
    this.resetDisplayFlags();
    this.displayMessageSending = true;
  }

  showAppointmentCancellation() {
    this.resetDisplayFlags();
    this.displayAppointmentCancellation = true;
  }
  showDoctorManagement() {
    this.resetDisplayFlags();
    this.displayDoctorManagement = true;
  }

  private resetDisplayFlags() {
    this.displayUserManagement = false;
    this.displayAppointmentManagement = false;
    this.displayMessageSending = false;
    this.displayAppointmentCancellation = false;
    this.displayDoctorManagement = false;
  }

  logout(){
    this.router.navigate(['/login']);
  }
}
