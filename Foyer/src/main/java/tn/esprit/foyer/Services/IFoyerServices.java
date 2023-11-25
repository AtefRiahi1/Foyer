package tn.esprit.foyer.Services;

import tn.esprit.foyer.Entities.Foyer;


import java.util.List;

public interface IFoyerServices {

    Foyer ajouterFoyer(Foyer foyer);
   /* Foyer ajouterFoyerEtAffecterAUniversite (Foyer foyer, Long idUniversite) ;*/
    Foyer updateFoyer(Foyer foyer);
    List<Foyer> getAllFoyers();
    Foyer getFoyerById(Long idFoyer);
    void deleteFoyer(Long idFoyer);

    Foyer findFoyerBynomUniversite(String nomU);
}
