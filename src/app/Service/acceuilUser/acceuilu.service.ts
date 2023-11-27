import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Formation } from 'src/app/Class/formation/formation';
import { Observable } from 'rxjs';
import { Formateur } from 'src/app/Class/formateur/formateur';

const URL = "http://localhost:3000/formation";
const URL2 = "http://localhost:3000/formateur";

@Injectable({
  providedIn: 'root'
})

export class AcceuiluService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
   console.log('aaa');
   
  }

  getFormation():Observable<Formation[]>{
    return this.http.get<Formation[]>(URL);
  }

  getFormationid(id:number):Observable<Formation>{
    return this.http.get<Formation>(URL+"/"+id)
  }

  getFormateur():Observable<Formateur[]>{
    return this.http.get<Formateur[]>(URL2);
  }

  updateFormation(formation: Formation): Observable<Formation> {
    const updateUrl = `${URL}/${formation.id}`;
    return this.http.put<Formation>(updateUrl, formation);
  }

  addFormateur(f:Formateur):Observable<Formateur>{
    return this.http.post<Formateur>(URL2, f);
  }

  deleteF(id:number){
    return this.http.delete(URL+"/"+ id);
  }

  addFormation(f:Formation):Observable<Formation>{
    return this.http.post<Formation>(URL, f);
  }

  convert(titre:string):Observable<any>{
    const URL3= 'https://book-finder1.p.rapidapi.com/api/search';
    let params= new HttpParams();
    params= params.append('author', titre);
    const headers : HttpHeaders = new HttpHeaders({
    'X-RapidAPI-Key': '46316b7c72msh8db0888e62c42eap11df9cjsn56b68b83bb60',
    'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'})
    return this.http.get<any>(URL3, {headers:headers, params: params});
  }

}

