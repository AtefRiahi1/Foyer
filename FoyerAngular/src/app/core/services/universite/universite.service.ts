import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Universite } from '../../models/universite/universite';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Foyer } from '../../models/foyer/foyer';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {

  constructor(private http: HttpClient) { }


  
  ajouteruniversite(universite: Universite){
    return this.http.post(`${environment.baseUrl}/universite`, universite);
  }

  

  getUniversite(): Observable<Universite[]>{
    return this.http.get<Universite[]>(`${environment.baseUrl}/universite`);
  }

  updateuniversite(universite: Universite){
    return this.http.put(`${environment.baseUrl}/universite`, universite)
  }

  getUniversiteById(idUniversite:number): Observable<Universite> {
    return this.http.get<Universite>(`${environment.baseUrl}/universite/${idUniversite}`);
  }

  deleteUniversite(idUniversite:number) {
    return this.http.delete(`${environment.baseUrl}/universite/${idUniversite}`);
  }

  affecterFoyerAUniversite(idFoyer: number, nomUniversite: string): Observable<any> {
    const url = `${environment.baseUrl}/${idFoyer}/${nomUniversite}`;
    return this.http.put(url, {});
  }

  // affecterFoyerAUniversite(idFoyer: number, nomUniversite: string) {
  //   const url = `${environment.baseUrl}/${idFoyer}/${nomUniversite}`;
  //   return this.http.put<Universite>(url, {}); // Remplacez 'Universite' par le type de retour attendu
  // }

  getAllFoyers(): Observable<Foyer[]> {
    const url = `${environment.baseUrl}/foyer`; // Assurez-vous que le chemin correspond à votre backend
    return this.http.get<Foyer[]>(url);
  }

}
