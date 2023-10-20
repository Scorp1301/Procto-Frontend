import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Users } from '../user.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  users:Users = {userid: 0,username:'',
  password:'',
  firstName:'',
  lastName:'',
  Bdate: new Date,
  city:'',
  email:'',
  description:'',};

  constructor(private userService: UserService, private router:Router){}

  registerUser():void{
    this.userService.registerUser(this.users).subscribe((response) => {
      console.log('Registration Successful', response);
      this.router.navigate(['/login']);
    },(error) => {
      try {
        const errorMessage = JSON.parse(error.error);
        console.error('Registration failed', errorMessage);
      } catch (e) {
        console.error('Registration failed', error);
      }
    })
  }



}
