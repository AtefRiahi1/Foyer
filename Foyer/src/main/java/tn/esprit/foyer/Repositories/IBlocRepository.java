package tn.esprit.foyer.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.foyer.Entities.Bloc;

import java.util.List;


public interface IBlocRepository extends JpaRepository<Bloc, Long> {

    List<Bloc> findByFoyerIdFoyer(Long idFoyer);
}
