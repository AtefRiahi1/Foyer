import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Reservation} from "../../models/reservation/reservation";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

    ajouterReservation(idChambre: string | null, cin: string | null) {
    return this.http.post(`${environment.baseUrl}/reservation/${idChambre}/${cin}`, null);
  }

  updateReservation(reservation: Reservation) {
    return this.http.put(`${environment.baseUrl}/reservation`, reservation);
  }

  getAllReservations() {
    return this.http.get<Reservation[]>(`${environment.baseUrl}/reservation`);
  }

  getReservationById(idReservation: string) {
    return this.http.get<Reservation>(`${environment.baseUrl}/reservation/${idReservation}`);
  }

  annulerReservation(cin: string) {
    return this.http.put(`${environment.baseUrl}/reservation/annulerReservation/${cin}`, null);
  }

  getCurrentReservationByEtudiantId(idEtudiant: string) {
    return this.http.get<Reservation>(`${environment.baseUrl}/reservation/getReservationsByEtudiantId/${idEtudiant}`);
  }


}
