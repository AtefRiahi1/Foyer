package tn.esprit.foyer.Services;

import tn.esprit.foyer.Entities.Chambre;
import tn.esprit.foyer.Entities.TypeChambre;


import java.util.List;

public interface IChambreServices {
    Chambre addChambre(Chambre chambre);
    Chambre updateChambre(Chambre chambre);
    List<Chambre> getAllChambres();
    Chambre getChambreById(Long idChambre);

    List<Chambre> getChambresParBlocEtType (Long idBloc, TypeChambre typeC) ;
    void deleteChambre(Long idChambre);
    List<Chambre> getChambresByBlocId(Long idBloc);
}
