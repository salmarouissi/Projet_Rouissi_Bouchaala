import { Injectable } from '@angular/core';
import { Admin } from 'src/app/Class/admin/admin';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



const URL = "http://localhost:3000/admin";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getAdmin():Observable<Admin[]>{
      return this.http.get<Admin[]>(URL);
  }

  login(username:string,pwd:string,namebase:string,pwdbase:string){
    if(username==namebase && pwd==pwdbase){
      localStorage.setItem("etat","connected")
      return true;
    }
    else{
      localStorage.setItem("etat","disconnected")
      return false;
    }
  }
  logout(){
    localStorage.removeItem('etat')
  }
  
  updateAdminPassword(id:number, a:Admin):Observable<Admin>{
    return this.http.put<Admin>(URL+"/"+ id, a);
    }

}

