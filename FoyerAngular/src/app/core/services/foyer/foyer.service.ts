import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Foyer } from '../../models/foyer/foyer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {


  constructor(private http: HttpClient) { }
  getAllFoyers() {
    return this.http.get<Foyer[]>(`${environment.baseUrl}/foyer/all`);
  }
  getFoyerById(idFoyer: number): Observable<Foyer> {
    return this.http.get<Foyer>(`${environment.baseUrl}/foyer/${idFoyer}`);
  }
}
