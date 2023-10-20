// FIlter Working
import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../doctor.service';
import { Appointments, Doctors, Users } from '../user.module';
import { Router } from '@angular/router';
import { AppointmentsService } from '../appointment.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})
export class UserMainComponent implements OnInit {
  //doctors: Doctors[] = [];
  doctors:any[]=[];
  specialization: string = '';
  city: string = '';
  ratings: number = 0;
  availableDateTime: Date | null = null;
  filterCriteria: any = {};
  sortField: string = '';
  filterSpecialization: string = ''; 
  filteredDoctors: any[] = []; 
  filterCity: String='';
  filterInput: string = '';
  filterText: any;
  tempuser: Users | null = null;

  constructor(private doctorService: DoctorsService, private router: Router, private appointmentsService: AppointmentsService, private userService:UserService) { }

  ngOnInit() {
    this.fetchDoctors();    
  }
  logout(){
    this.router.navigate(['/login']);
  }

  fetchDoctors() {
    this.doctorService.getDoctors().subscribe(
      (data: any[]) => {
        this.doctors = data;
        this.filterAndSortDoctors();
        this.fetchUsers();
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  sortDoctors() {
    this.doctors.sort((a, b) => {
      if (a[this.sortField] < b[this.sortField]) {
        return -1;
      }
      if (a[this.sortField] > b[this.sortField]) {
        return 1;
      }
      return 0;
    });
  }
  fetchUsers() {
    this.userService.getUserById(this.userService.userId).subscribe(
      (data: Users) => {
        this.tempuser = data;
      },
      (error: any) => {
        console.error('Error fetching user:', error);
      }
    );
  }

  filterAndSortDoctors() {
    const filterCriteria = (this.filterText || '').toLowerCase();
  this.filteredDoctors = this.doctors.filter(doctor =>
    (!filterCriteria ||
     (doctor.specialization && doctor.specialization.toLowerCase().includes(filterCriteria)) ||
     (doctor.city && doctor.city.toLowerCase().includes(filterCriteria)) || (doctor.doctorName && doctor.doctorName.toLowerCase().includes(filterCriteria))
    )
  );
  
    this.filteredDoctors.sort((a, b) => {
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
  
  generateTimeSlots() {
    const timeSlots = [];
    const startTime = 9 * 60; 
    const endTime = 17 * 60; 
    const interval = 30;      
  
    for (let time = startTime; time < endTime; time += interval) {
      const hours = Math.floor(time / 60);
      const minutes = time % 60;
      const timeString = `${hours}:${minutes === 0 ? '00' : minutes}`;
      timeSlots.push(timeString);
    }
  
    return timeSlots;
  }
  
  showDateTimes(doctor: any, date: string) {
    doctor.showDateTimes = true;
    doctor.selectedDate = doctor.dates.find((d: any) => d.date === date);
  }
  showTimeSlots(doctor: any) {
    doctor.showTimeSlots = !doctor.showTimeSlots; 
    if (doctor.showTimeSlots && !doctor.dates) {
      doctor.dates = this.generateDatesAndTimeSlots();
    }
  }
  
  generateDatesAndTimeSlots() {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dateString = this.formatDate(date);
      const timeSlots = this.generateTimeSlots();
      dates.push({ date: dateString, timeSlots: timeSlots });
    }
    return dates;
  }
  toggleTimeSlots(doctor: any) {
    doctor.showTimeSlots = !doctor.showTimeSlots;
    if (doctor.showTimeSlots) {
      doctor.dates = this.generateDatesAndTimeSlots();
    }
  }
  formatDate(date: Date) {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  }
  apptable(){
    this.router.navigate(['/apptable'])

  }

  applyFilters() {
    const filteredDoctors = [...this.doctors];
    if (this.filterCriteria.specialization) {
      this.filterDoctors(filteredDoctors, 'specialization', this.filterCriteria.specialization);
    }

    if (this.filterCriteria.city) {
      this.filterDoctors(filteredDoctors, 'city', this.filterCriteria.city);
    }

    if (this.filterCriteria.ratings) {
      this.filterDoctors(filteredDoctors, 'ratings', this.filterCriteria.ratings);
    }

    if (this.filterCriteria.availableDateTime) {
      this.filterDoctors(filteredDoctors, 'availableDateTime', this.filterCriteria.availableDateTime);
    }
    this.doctors = filteredDoctors;
  }

  filterDoctors(doctors: any[], field: string, filterValue: any) {
    this.doctors = doctors.filter(doctor => 
      doctor[field].toString().toLowerCase().includes(filterValue.toString().toLowerCase())
    );
  }

  confirmBooking(doctor: any, date: string, timeSlot: string) {
        console.log('hi');
        console.log(timeSlot);
        const appointmentDate = new Date(doctor.selectedDate.date);
        const tempemail = this.userService.useremail;

        const appointments: any = {
              patientId:this.tempuser?.userid,
              patientName:this.tempuser?.firstName,
              bookingDate:appointmentDate,
              timeSlot:timeSlot,
              doctorName:doctor.doctorName,
              useremail: this.tempuser?.email,
        };
        this.appointmentsService.createAppointment(appointments)
          .subscribe(
            (response) => {
              console.log('Appointment created successfully', response);              
            },
            (error) => {
              console.error('Error creating appointment', error);
            }
          );

          
      }
}


