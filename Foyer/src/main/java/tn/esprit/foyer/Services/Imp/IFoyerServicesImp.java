package tn.esprit.foyer.Services.Imp;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.esprit.foyer.Entities.Bloc;
import tn.esprit.foyer.Entities.Foyer;
import tn.esprit.foyer.Entities.Universite;
import tn.esprit.foyer.Repositories.*;
import tn.esprit.foyer.Services.IFoyerServices;


import java.util.List;

@Service
@RequiredArgsConstructor
public class IFoyerServicesImp implements IFoyerServices {

    private final IFoyerRepository foyerRepository;
    private final IUniversiteRepository universiteRepository;


    @Override
    public Foyer ajouterFoyer(Foyer foyer) {
        return foyerRepository.save(foyer);
    }

/*    @Override
    public Foyer ajouterFoyerEtAffecterAUniversite(Foyer foyer, Long idUniversite) {
        foyerRepository.save(foyer);
        Universite universite = universiteRepository.findById(idUniversite).orElseThrow(()->new IllegalArgumentException("Cette universite n'existe pas"));
        universite.setFoyer(foyer);
        universiteRepository.save(universite);
        return foyer;
    }*/

    @Override
    public Foyer updateFoyer(Foyer foyer) {
        return foyerRepository.save(foyer);
    }

    @Override
    public List<Foyer> getAllFoyers() {
        return foyerRepository.findAll();
    }

    @Override
    public Foyer getFoyerById(Long idFoyer) {
        return foyerRepository.findById(idFoyer).orElseThrow(()->new IllegalArgumentException("Ce foyer n'existe pas"));
    }

    @Override
    public void deleteFoyer(Long idFoyer) {
        foyerRepository.deleteById(idFoyer);
    }
}
