package tn.esprit.foyer.Services;

import tn.esprit.foyer.Entities.Etudiant;


import java.util.List;

public interface IEtudiantServices {
    Etudiant addEtudiant(Etudiant etudiant);
    Etudiant updateEtudiant(Etudiant etudiant);
    List<Etudiant> getAllEtudiants();
    Etudiant getEtudiantById(Long idEtudiant);
    void deleteEtudiant(Long idEtudiant);
}
