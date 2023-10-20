import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-bookingconfirm',
  templateUrl: './users-bookingconfirm.component.html',
  styleUrls: ['./users-bookingconfirm.component.css']
})
export class UsersBookingconfirmComponent {

  constructor(private router:Router){}

  logout(){
    this.router.navigate(['/login']);
  }

  goBack() {
    this.router.navigate(['/user-main']); 
  }

  apptable(){
    this.router.navigate(['/apptable'])

  }

}
