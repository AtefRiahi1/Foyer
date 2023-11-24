package tn.esprit.foyer.Services.Imp;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Assert;
import tn.esprit.foyer.Entities.Chambre;
import tn.esprit.foyer.Entities.TypeChambre;
import tn.esprit.foyer.Entities.Etudiant;
import tn.esprit.foyer.Entities.Reservation;
import tn.esprit.foyer.Repositories.*;
import tn.esprit.foyer.Services.IReservationServices;


import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class IReservationServicesImp implements IReservationServices {

    private final IReservationRepository reservationRepository;
    private final IEtudiantRepository etudiantRepository;
    private final IChambreRepository chambreRepository;



    @Override
    public Reservation updateReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

    @Override
    public List<Reservation> getAllReservations() {
        return reservationRepository.findAll();
    }

    @Override
    public Reservation getReservationById(String idReservation) {
        return reservationRepository.findById(idReservation).orElseThrow(()->new IllegalArgumentException("Cette reservation n'existe pas"));
    }


    @Override
    @Transactional
    public Reservation ajouterReservation (Long idChambre, Long cin)  {
        LocalDate startDate=LocalDate.of(LocalDate.now().getYear(),1,1);
        LocalDate endDate=LocalDate.of(LocalDate.now().getYear(),12,31);
        Assert.isTrue(!reservationRepository.existsByEtudiantsCinAndAnneeUniversitaireBetween(cin,startDate,endDate),"Vous avez deja une reservation cette année");
        Chambre chambre = chambreRepository.findById(idChambre).orElseThrow(()->new IllegalArgumentException("Cette chambre n'existe pas"));

        Etudiant etudiant = etudiantRepository.findByCin(cin);
        String id=chambre.getNumeroChambre() +"-"+ chambre.getBloc().getNomBloc().replace(" ", "") +"-"+LocalDate.now().getYear();

        // Création de la réservation
        Reservation reservation = reservationRepository.findById(id).orElse(Reservation.builder().idReservation(id).anneeUniversitaire(LocalDate.now()).estValide(true).etudiants(new ArrayList<Etudiant>()).build());
        Assert.isTrue(reservation.isEstValide(),"La capacité maximale de la chambre est atteinte.");
        reservation.getEtudiants().add(etudiant);
        if (!chambre.getReservations().contains(reservation)){
            reservation=reservationRepository.save(reservation);
            chambre.getReservations().add(reservation);
        }
        switch (chambre.getTypeC()){
            case SIMPLE ->reservation.setEstValide(false);
            case DOUBLE ->{
                if(reservation.getEtudiants().size()==2){reservation.setEstValide(false);}
            }
            case TRIPLE ->{
                if(reservation.getEtudiants().size()==3){reservation.setEstValide(false);}
            }
        }
        return reservation;
    }

    @Override
    @Transactional
    public Reservation annulerReservation(Long cinEtudiant) {
        // Trouver l'étudiant et sa réservation
        Etudiant etudiant = etudiantRepository.findByCin(cinEtudiant);

        Reservation reservation = etudiant.getReservations().stream()
                .findFirst()
                .orElseThrow(()->new IllegalArgumentException("Cette reservation n'existe pas"));


        reservation.setEstValide(true);

        reservation.getEtudiants().remove(etudiant);


        Chambre chambreAssociee = chambreRepository.findByReservationsContains(reservation);
        if (chambreAssociee != null) {
            switch (chambreAssociee.getTypeC()){
                case SIMPLE ->chambreAssociee.getReservations().remove(reservation);
            }

            chambreRepository.save(chambreAssociee); // Sauvegarder les changements dans la chambre
        }

        // Sauvegarder les modifications
        return reservationRepository.save(reservation);
    }
}
