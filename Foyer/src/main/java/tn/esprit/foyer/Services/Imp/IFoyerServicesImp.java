package tn.esprit.foyer.Services.Imp;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
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

        Universite universite = universiteRepository.findUniversiteByFoyer_IdFoyer(idFoyer);
        universite.setFoyer(null);
        universiteRepository.save(universite);

        foyerRepository.deleteById(idFoyer);
    }

    @Override
    public Foyer findFoyerByidUniversite(long idU){
        return foyerRepository.findFoyerByIdUniversite(idU);
    }

    @Override
    public Foyer ajouterFoyerAUniversite(Foyer foyer, Long idUniversite) {

        Universite universite = universiteRepository.findById(idUniversite).orElseThrow(()->new IllegalArgumentException("Cette universite n'existe pas"));
        universite.setFoyer(foyer);

        foyerRepository.save(foyer);
        universiteRepository.save(universite);
        return foyer;


    }


}
