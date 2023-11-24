package tn.esprit.foyer.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.foyer.Entities.Reservation;

import java.time.LocalDate;


public interface IReservationRepository extends JpaRepository<Reservation, String>  {
    boolean existsByEtudiantsCinAndAnneeUniversitaireBetween(long cin, LocalDate startDate, LocalDate finDate);
}
