import { Component, OnInit } from '@angular/core';
import { Appointments } from '../user.module';
import { AppointmentsService } from '../appointment.service';
import { UserService } from '../user.service';




@Component({
  selector: 'app-users-listappointment',
  templateUrl: './users-listappointment.component.html',
  styleUrls: ['./users-listappointment.component.css']
})
export class UsersListappointmentComponent implements OnInit {

  appointments:Appointments[]=[];
  

  constructor( private appointmentsService: AppointmentsService, private userService:UserService){}

  ngOnInit(): void {
      this.ShowAppointments();
  }

  ShowAppointments(){
    
    this.appointmentsService.getAppointmentsById(this.userService.userId).subscribe(
      (data:Appointments[]) => {
        this.appointments = data
      },(error) => {
        console.error('Error fetching appointments',error)
      }
      );
    
  }

  deleteAppointment(id:number):void{
    this.appointmentsService.deleteAppointment(id).subscribe(() => {
      this.ShowAppointments();
    })
  }



}
