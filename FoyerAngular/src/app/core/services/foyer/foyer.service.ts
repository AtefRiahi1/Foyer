import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Foyer } from '../../models/foyer/foyer';
import { Universite } from '../../models/universite/universite';
@Injectable({
  providedIn: 'root'
})
export class FoyerService {

  constructor(private http: HttpClient) { }

  addFoyer(foyer:Foyer ,idUniversite : number ){
    return this.http.post(`${environment.baseUrl}/foyer/${idUniversite}`,foyer);
  }
  getAllFoyer() {
    
    return this.http.get<Foyer[]>(`${environment.baseUrl}/foyer`);
  }

  getFoyerByUniversite(idU : number) : Observable<Foyer>{
    return this.http.get<Foyer>(`${environment.baseUrl}/universite/allfoyer/${idU}`);
  }
  
  getFoyerById(idFoyer:number): Observable<Foyer> {
    return this.http.get<Foyer>(`${environment.baseUrl}/foyer/${idFoyer}`);
  }

  deleteFoyer(idFoyer:number) {
    return this.http.delete(`${environment.baseUrl}/foyer/${idFoyer}`);
  }

  updateFoyer(foyer:Foyer){
    return this.http.put(`${environment.baseUrl}/foyer`,foyer);
  }

  getAllUniversite(){
    return this.http.get<Universite[]>(`${environment.baseUrl}/universite`);
  }
}
