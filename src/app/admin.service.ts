import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})


export class AdminService{
    private baseUrl = 'http://localhost:8081/api';

    constructor(private httpClient: HttpClient){}


    loginAdmin(admin:any){
        return this.httpClient.post(`${this.baseUrl}/login`,admin,{responseType:'text'});
    }
}