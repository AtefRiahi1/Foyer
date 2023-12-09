import { Injectable } from '@angular/core';
import {Chambre} from "../../models/chambre/chambre";
import {environment} from "../../../../environments/environment";
import {TypeChambre} from "../../models/TypeChambre/type-chambre.enum";
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {

  constructor(private http: HttpClient) { }

  addChambre(chambre: Chambre) {
    return this.http.post(`${environment.baseUrl}/chambre`, chambre);
  }

  updateChambre(chambre: Chambre) {
    return this.http.put(`${environment.baseUrl}/chambre`, chambre);
  }

  getAllChambres() {
    return this.http.get<Chambre[]>(`${environment.baseUrl}/chambre`);
  }

  getChambreById(idChambre: number) {
    return this.http.get<Chambre>(`${environment.baseUrl}/chambre/get/${idChambre}`);
  }

  getChambresParBlocEtType(idBloc: number, typeC: TypeChambre) {
    return this.http.get<Chambre[]>(`${environment.baseUrl}/chambre/${idBloc}/${typeC}`);
  }
  deleteChambre(idChambre: number) {
    return this.http.delete(`${environment.baseUrl}/chambre/${idChambre}`);
  }
  upload(formData: FormData): Observable<HttpEvent<string>> {
    return this.http.post<string>(`${environment.baseUrl}/auth/upload`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }
  getChambreByBloc(idBloc: number): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(`${environment.baseUrl}/chambre/getByBloc/${idBloc}`);
  }
  getChambresNonAffectees(): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(`${environment.baseUrl}/bloc/chambresNonAffectees`);
  }

  affecterChambresABloc(idBloc: number, numeroChambre: number[]) {
    return this.http.post(`${environment.baseUrl}/bloc/${idBloc}`, numeroChambre);
  }

}

