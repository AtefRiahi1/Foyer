package tn.esprit.foyer.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import tn.esprit.foyer.Entities.Reservation;

import java.time.LocalDate;
import java.util.List;


public interface IReservationRepository extends JpaRepository<Reservation, String>  {
    boolean existsByEtudiantsCinAndAnneeUniversitaireBetween(long cin, LocalDate startDate, LocalDate finDate);

    List<Reservation> findAllByEstValide(boolean estValide);
    @Query("SELECT r FROM Reservation r JOIN r.etudiants e WHERE e.id = :idEtudiant AND r.anneeUniversitaire <= :currentDate ")
    Reservation getCurrentReservationByEtudiantId(Long idEtudiant, LocalDate currentDate);
}
