import { Component, OnInit } from '@angular/core';
import { Doctors } from '../user.module';
import { DoctorsService } from '../doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-doctors',
  templateUrl: './admin-doctors.component.html',
  styleUrls: ['./admin-doctors.component.css']
})
export class AdminDoctorsComponent implements OnInit {

  doctors:Doctors[]=[];
  editingDoctor: any = null;
  showDoctorForm:boolean = false;
  doctorForm: Doctors = {
    doctorid:0,
    doctorName:'',
    specialization:'',
    city:'',
    ratings:0,
    availableDateTime:new Date
  }

  constructor(private doctorService: DoctorsService, private router:Router ){}

  ngOnInit(): void {
      this.showDoctors();
  }

  showDoctors():void{
    this.doctorService.getDoctors().subscribe((data) => {
      this.doctors = data;
    });
  }

  deleteDoctor(id:number):void{
    this.doctorService.deleteDoctor(id).subscribe(() => {
      this.showDoctors();
    })
  }

  editDoctor(doctors:Doctors):void{
    this.doctorForm = {...doctors}
    this.editingDoctor = doctors;
    this.showDoctorForm = true;
  }

  addDoctor():void{
    this.doctorForm = {
      doctorid:0,
    doctorName:'',
    specialization:'',
    city:'',
    ratings:0,
    availableDateTime: new Date
    }
    this.editingDoctor = null;
    this.showDoctorForm = true;
  }

  saveDoctor():void{
    if(this.editingDoctor){
      this.doctorService.updateDoctor(this.editingDoctor.doctorid, this.doctorForm).subscribe(()=>{
        this.showDoctors();
        this.cancleEdit();
        this.showDoctorForm = false;
      })
    }else{
      this.doctorService.createDoctor(this.doctorForm).subscribe(()=>{
        this.showDoctors();
        this.cancleEdit();
        this.showDoctorForm=false;
      })
    }
  }

  cancleEdit(){
  
  }



}
