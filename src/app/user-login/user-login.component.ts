import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User, Users } from '../user.module';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  user: Users= {username:'', password:'', userid:0, firstName:'', lastName:'', Bdate:new Date, city:'',email:'', description:'' };
  

  constructor(private userService:UserService , private router: Router){}

  midiator(){
    this.fetchdata();
    this.loginUser();

    

  }


  fetchdata(){
    console.log(this.user.username);

    this.userService.getUserIdByUsername(this.user.username).subscribe(
      (userId) => {
        if (userId !== null) {
          console.log('User ID:', userId);
          this.userService.userId = userId;
          this.router.navigate(['/user-main']);
        } else {
          console.error('User not found');
          // To Handle the case  the user is not found.
        }
      },
      (error) => {
        console.error('Error fetching user ID', error);
        if (error.status === 404) {
          console.error('User not found on the server');
        } else {
          console.error('An unexpected error occurred');
        }
      }
    );

  }

  loginUser(){

    this.userService.loginUser(this.user).subscribe( (response) => {
      console.log('login successful',response);
      
     this.router.navigate(['/user-main']);
    },
    (error) =>{
      console.error('login failed',error);
      this.router.navigate(['/register']);
    }
    );
  }

  register(){
    this.router.navigate(['/register']);

  }

  admin(){
    this.router.navigate(['/admin']);
  }


}
