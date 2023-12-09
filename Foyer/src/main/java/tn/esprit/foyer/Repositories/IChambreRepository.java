package tn.esprit.foyer.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.esprit.foyer.Entities.Bloc;
import tn.esprit.foyer.Entities.Chambre;
import tn.esprit.foyer.Entities.TypeChambre;
import tn.esprit.foyer.Entities.Reservation;


import java.util.List;

public interface IChambreRepository extends JpaRepository<Chambre, Long>  {
    //Solution 1
    @Query("SELECT c FROM Chambre c WHERE c.bloc.idBloc = :idBloc AND c.typeC = :typeC")
    List<Chambre> getChambresParBlocEtType(Long idBloc, TypeChambre typeC);

    //Solution 2
    List<Chambre> findByBlocIdBlocAndTypeC(Long idBloc, TypeChambre typeC);
    Chambre findChambreByNumeroChambre(Long numchambre);

    Chambre findByReservationsContains(Reservation reservation);
    List<Chambre> findChambreByBloc(Bloc bloc);

    /*@Query( value = "SELECT * FROM chambre c " +
            "JOIN bloc b " +
            "ON c.bloc_id_bloc =b.id_bloc " +
            "WHERE b.id_bloc= :idBloc" ,nativeQuery = true)
    List<Chambre> getChambreByIdBloc(@Param("idBloc") long idBloc);*/
    List<Chambre> findByBlocIdBloc (Long idBloc);
}
