package tn.esprit.foyer.Services;

import tn.esprit.foyer.Entities.Universite;


import java.util.List;

public interface IUniversiteServices {
    Universite addUniversite(Universite universite);
    Universite updateUniversite(Universite universite);
    List<Universite> getAllUniversites();

    List<Universite> getUniversitesNonAffectees();

    Universite getUniversiteByNom(String nomUniversite);

    void deleteUniversite(long idUniversite);

    Universite affecterFoyerAUniversite(Long idFoyer, String nomUniversite);
    Universite desaffecterFoyerAUniversite(Long idUniversite);
    Universite getUniversiteById(Long idUniversite);
}
