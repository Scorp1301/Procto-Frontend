import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Appointments } from "./user.module";


@Injectable({
    providedIn:'root'
})

export class AppointmentsService{
    private baseUrl = 'http://localhost:8083/api/appointments';

private appointments:Appointments[]=[];
constructor(private httpClient:HttpClient){}

createAppointment(appointments:Appointments){
    return this.httpClient.post(`${this.baseUrl}`, appointments,{responseType:'text'});
}

deleteAppointment(id:number):Observable<void>{
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
}
getAppointments():Observable<Appointments[]>{
    return this.httpClient.get<Appointments[]>(this.baseUrl);
}
getAppointmentsById(id:number):Observable<Appointments[]>{
    return this.httpClient.get<Appointments[]>(`${this.baseUrl}/${id}`);
}

sendConfirmationEmail(appointment: Appointments): Observable<void> {  
    return this.httpClient.post<void>(`${this.baseUrl}/send-confirmation-email`, appointment);
  }

}