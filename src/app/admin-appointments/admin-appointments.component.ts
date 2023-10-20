import { Component, OnInit } from '@angular/core';
import { Appointments } from '../user.module';
import { AppointmentsService } from '../appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-appointments',
  templateUrl: './admin-appointments.component.html',
  styleUrls: ['./admin-appointments.component.css']
})
export class AdminAppointmentsComponent implements OnInit {

  appointments:Appointments[]=[];
  filterText: any;
  filteredAppointments:any[] = [];
  sortField: any;

  constructor(private appointmentsService:AppointmentsService, private router:Router){}

  ngOnInit(): void {
      this.showAppointments();
  }

  showAppointments():void{
    this.appointmentsService.getAppointments().subscribe((data) => {
      this.appointments = data;
      this.filterAndSortAppointments();
    })
    
    
  }
  

  deleteAppointment(id:number):void{
    this.appointmentsService.deleteAppointment(id).subscribe(() => {
      this.showAppointments();
    })
  }

  filterAndSortAppointments(){
    const filterCriteria = (this.filterText || '').toLowerCase();

  // Filter doctors based on the combined criteria
  this.filteredAppointments = this.appointments.filter(appointment =>
    (!filterCriteria ||
     (appointment.patientName && appointment.patientName.toLowerCase().includes(filterCriteria)) ||
     (appointment.doctorName && appointment.doctorName.toLowerCase().includes(filterCriteria)) 
     //|| (appointment.bookingDate && appointment.bookingDate.getDate(filterCriteria))
    )
  );
  
    // Sort the filtered data
    this.filteredAppointments.sort((a, b) => {
      if (this.sortField) {
        if (a[this.sortField] < b[this.sortField]) {
          return -1;
        }
        if (a[this.sortField] > b[this.sortField]) {
          return 1;
        }
      }
      return 0;
    });

  }
  sendConfirmationEmail(appointment: any) {
    this.appointmentsService.sendConfirmationEmail( appointment).subscribe(
      () => {
        // Handle a successful email sending (e.g., show a success message)
        console.log('Email sent successfully');
      },
      (error) => {
        // Handle errors (e.g., show an error message)
        console.error('Failed to send the email');
      }
    );
  }
}
