import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Etudiant} from "../../models/etudiant/etudiant";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http: HttpClient) { }

  addEtudiant(etudiant: Etudiant) {
    return this.http.post(`${environment.baseUrl}/etudiant`, etudiant);
  }

  updateEtudiant(etudiant: Etudiant) {
    return this.http.put(`${environment.baseUrl}/etudiant`, etudiant);
  }

  getAllEtudiants() {
    return this.http.get<Etudiant[]>(`${environment.baseUrl}/etudiant`);
  }

  getEtudiantById(idEtudiant: number) {
    return this.http.get<Etudiant>(`${environment.baseUrl}/etudiant/${idEtudiant}`);
  }

  deleteEtudiant(idEtudiant: number) {
    return this.http.delete(`${environment.baseUrl}/etudiant/${idEtudiant}`);
  }

}
