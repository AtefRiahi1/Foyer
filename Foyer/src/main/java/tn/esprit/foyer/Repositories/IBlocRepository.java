package tn.esprit.foyer.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.esprit.foyer.Entities.Bloc;
import tn.esprit.foyer.Entities.Chambre;

import java.util.List;


public interface IBlocRepository extends JpaRepository<Bloc, Long> {
    /*@Query(value = "SELECT * FROM chambre c JOIN bloc b ON c.bloc_id_bloc = b.id_bloc WHERE b.id_bloc = :idBloc", nativeQuery = true)
    Chambre findChambresByBlocId(@Param("idBloc") Long idBloc);*/
}
