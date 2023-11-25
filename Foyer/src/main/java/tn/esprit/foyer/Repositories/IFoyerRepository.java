package tn.esprit.foyer.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.esprit.foyer.Entities.Foyer;


public interface IFoyerRepository extends JpaRepository<Foyer, Long> {
    @Query( value = "SELECT * FROM universite u   \n" +
            "JOIN foyer f\n" +
            "ON u.foyer_id_foyer =f.id_foyer\n" +
            "WHERE u.nom_universite= :nomU" ,nativeQuery = true)
    Foyer findFoyerBynomUniversite(@Param("nomU") String nomU);
}
