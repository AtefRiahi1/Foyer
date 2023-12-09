package tn.esprit.foyer.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.esprit.foyer.Entities.Bloc;
import tn.esprit.foyer.Entities.Chambre;

import java.util.List;

import java.util.List;


public interface IBlocRepository extends JpaRepository<Bloc, Long> {

    List<Bloc> findByFoyerIdFoyer(Long idFoyer);
    //boolean existsByChambres(List<Chambre> chambres);
    boolean existsByChambresIn(List<Chambre> chambres);
}

