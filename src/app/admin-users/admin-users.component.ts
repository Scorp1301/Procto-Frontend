import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Users } from '../user.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  users: Users[] = [];
  showUserForm: boolean = false; 
  editingUser: any = null; 
  userForm: Users = {
    userid: 0,
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    Bdate: new Date,
    city: '',
    email: '',
    description: '',
  };
  constructor(private userService: UserService, private router:Router){}

  ngOnInit(): void {
      this.showUsers();
  }
  showUsers():void{
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      
    });
  }

  deleteUser(id:number):void{
    this.userService.deleteUser(id).subscribe(()=>{
      this.showUsers();
    })

  }
  editUser(users:Users):void{
    this.userForm = { ...users}
    this.editingUser = users;
    this.showUserForm = true;

  }

  addUser():void{
    this.userForm = {userid: 0,username:'',
    password:'',
    firstName:'',
    lastName:'',
    Bdate:new Date,
    city:'',
    email:'',
    description:'',};

    this.editingUser = null;
    this.showUserForm=true;
  }
  saveUser():void{
    if(this.editingUser){
      this.userService.updateUser(this.editingUser.userid, this.userForm).subscribe(()=>{
        this.showUsers();
        this.cancleEdit();
        this.showUserForm=false;
        console.log(this.userForm.Bdate);
      });
    } else{
      this.userService.createUser(this.userForm).subscribe(() => {
        this.showUsers();
        this.cancleEdit();
        this.showUserForm=false;
        console.log(this.userForm.Bdate);
      });
    }
   }

   cancleEdit(){
  
   }



}
