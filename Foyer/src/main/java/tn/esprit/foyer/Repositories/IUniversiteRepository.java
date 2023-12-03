package tn.esprit.foyer.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.foyer.Entities.Universite;

import java.util.List;


public interface IUniversiteRepository extends JpaRepository<Universite, Long>  {
    Universite findByNomUniversite(String nomUniversite);

    Universite findUniversiteByFoyer_IdFoyer(Long idf);
}
