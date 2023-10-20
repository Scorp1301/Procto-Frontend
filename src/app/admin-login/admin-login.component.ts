import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { Admin } from '../user.module';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  admin:Admin = {username:'', password:''};
  constructor (private adminService:AdminService , private router:Router){}

  loginAdmin():void{
    this.adminService.loginAdmin(this.admin).subscribe((response) => {
      console.log('admin login successful',response);
      this.router.navigate(['admin-main']);
    },
    (error) =>{
      console.error('login failed',error);
  
    }
    );
  }

  user(){
    this.router.navigate(['/login'])
  }

}
