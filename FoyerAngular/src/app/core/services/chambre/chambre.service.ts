import { Injectable } from '@angular/core';
import {Chambre} from "../../models/chambre/chambre";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {TypeChambre} from "../../models/TypeChambre/type-chambre.enum";

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
    return this.http.get<Chambre>(`${environment.baseUrl}/chambre/${idChambre}`);
  }

  getChambresParBlocEtType(idBloc: number, typeC: TypeChambre) {
    return this.http.get<Chambre[]>(`${environment.baseUrl}/chambre/${idBloc}/${typeC}`);
  }
  deleteChambre(idChambre: number) {
    return this.http.delete(`${environment.baseUrl}/chambre/${idChambre}`);
  }
}
