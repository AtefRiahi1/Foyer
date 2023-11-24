import {HttpClient, HttpEvent} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Etudiant } from '../../models/etudiant/etudiant';
import { User } from '../../models/user/user';
import { LoginPayload } from '../../models/login-payload';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  registerEtudiant(etudiant: Etudiant) {
    return this.http.post(`${environment.baseUrl}/auth/registerEtudiant`, etudiant);
  }

  login(user: LoginPayload) {
    return this.http.post(`${environment.baseUrl}/auth/login`, user);
  }
  upload(formData:FormData):Observable<HttpEvent<string>>{
    return this.http.post<string>(`${environment.baseUrl}/auth/upload`,formData,{
      reportProgress:true,
      observe:'events'
    });
  }

}
