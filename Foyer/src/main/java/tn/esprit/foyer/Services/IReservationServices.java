package tn.esprit.foyer.Services;

import tn.esprit.foyer.Entities.Reservation;


import java.util.List;

public interface IReservationServices {
    Reservation updateReservation(Reservation reservation);
    List<Reservation> getAllReservations();
    Reservation getReservationById(String idReservation);

    Reservation ajouterReservation (Long idChambre, Long cinEtudiant) ;
    Reservation annulerReservation (Long cinEtudiant) ;
}
