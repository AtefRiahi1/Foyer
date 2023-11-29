import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Foyer } from '../../models/foyer/foyer';
@Injectable({
  providedIn: 'root'
})
export class FoyerService {

  constructor(private http: HttpClient) { }

  addFoyer(foyer:Foyer){
    return this.http.post(`${environment.baseUrl}/foyer`,foyer);
  }
  getAllFoyer() {
    
    return this.http.get<Foyer[]>(`${environment.baseUrl}/foyer`);
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
}
