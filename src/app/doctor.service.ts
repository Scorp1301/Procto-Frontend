import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Doctors } from "./user.module";

@Injectable({
    providedIn:'root'
})

export class DoctorsService{
    private baseUrl = 'http://localhost:8082/api/doctors'

    private doctors:Doctors[]=[];
    specialization: string = '';
  city: string = '';
  ratings: number | null = null;
  dateTime: string | null = null;


    constructor(private httpClient: HttpClient){}

    getDoctors():Observable<Doctors[]>{
        return this.httpClient.get<Doctors[]>(this.baseUrl);
    }
    createDoctor(doctors: Doctors): Observable<Doctors> {
        return this.httpClient.post<Doctors>(`${this.baseUrl}`, doctors);
      }

    deleteDoctor(id: number): Observable<void> {
        return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
      }

    updateDoctor(id:number, updateDoctor:Doctors): Observable<Doctors>{
        return this.httpClient.put<Doctors>(`${this.baseUrl}/${id}`,updateDoctor);
    }
}
    
    
 

