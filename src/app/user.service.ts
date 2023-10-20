import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User, Users } from "./user.module";

@Injectable({
    providedIn:'root'
})


export class UserService{
    private baseUrl = 'http://localhost:8080/api/users';
    //http://localhost:8080/api/users/getUserId
    private users:Users[]=[];
    userId!: number;
    useremail:'nirav.vinchhi@gmail.com' | undefined;

    constructor(private httpClient: HttpClient){}

    registerUser(user:any){
        return this.httpClient.post(`${this.baseUrl}/register`,user, {responseType:'text'});
    }
    loginUser(user: User) {
        return this.httpClient.post(`${this.baseUrl}/login`, user, { responseType: 'text' });
      }
      

    getUsers():Observable<Users[]>{
        return this.httpClient.get<Users[]>(this.baseUrl);
    }
    createUser(user: Users) {
        return this.httpClient.post(`${this.baseUrl}`, user, {responseType:'text'});
      }

    deleteUser(id: number): Observable<void> {
        return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
      }

    updateUser(id:number, updateUser:Users): Observable<Users>{
        return this.httpClient.put<Users>(`${this.baseUrl}/${id}`,updateUser);
    }
    getUserById(id: number): Observable<Users> {
        const url = `${this.baseUrl}/${id}`; 
        return this.httpClient.get<Users>(url);
      }

    getUserIdByUsername(username: any): Observable<number> {
        const user = { username: username };
        
        // to specify the content type as JSON for header
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      
        // Make the POST request with the JSON content
        return this.httpClient.post<number>(`${this.baseUrl}/getUserId`, user, { headers: headers });
      }




}