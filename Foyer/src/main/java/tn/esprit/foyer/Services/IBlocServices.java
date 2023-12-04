package tn.esprit.foyer.Services;

import tn.esprit.foyer.Entities.Bloc;


import java.util.List;

public interface IBlocServices {
    Bloc addBloc(Bloc bloc);
    Bloc updateBloc(Bloc bloc);
    List<Bloc> getAllBlocs();
    Bloc getBlocById(Long idBloc);
    void deleteBloc(Long idBloc);

    Bloc affecterChambresABloc(List<Long> idChambre, Long idBloc);
    Bloc affecterBlocAFoyer(Long idBloc, Long idFoyer) ;

    List<Bloc> getBlocsByFoyer(Long idFoyer);
}
