package tn.esprit.foyer.Services;

import tn.esprit.foyer.Entities.Universite;


import java.util.List;

public interface IUniversiteServices {
    Universite addUniversite(Universite universite);
    Universite updateUniversite(Universite universite);
    List<Universite> getAllUniversites();
    Universite getUniversiteById(Long idUniversite);

    Universite affecterFoyerAUniversite(Long idFoyer, String nomUniversite);
    Universite desaffecterFoyerAUniversite(Long idUniversite);
}
