package tn.esprit.foyer.Services.Imp;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.foyer.Entities.Bloc;
import tn.esprit.foyer.Entities.Chambre;
import tn.esprit.foyer.Entities.Foyer;
import tn.esprit.foyer.Repositories.*;
import tn.esprit.foyer.Services.IBlocServices;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class IBlocServicesImp implements IBlocServices {

    private final IBlocRepository blocRepository;
    private final IChambreRepository chambreRepository;
    private final IFoyerRepository foyerRepository;


    @Override
    public Bloc addBloc(Bloc bloc) {
        return blocRepository.save(bloc);
    }

    @Override
    public Bloc updateBloc(Bloc bloc) {
        return blocRepository.save(bloc);
    }

    @Override
    public List<Bloc> getAllBlocs() {
        return blocRepository.findAll();
    }

    @Override
    public Bloc getBlocById(Long idBloc) {
        return blocRepository.findById(idBloc).orElse(null);
    }

    @Override
    public void deleteBloc(Long idBloc) {
        blocRepository.deleteById(idBloc);
    }


    @Override
    public Bloc affecterChambresABloc(List<Long> numChambre, Long idBloc) {
        Bloc bloc = blocRepository.findById(idBloc).orElseThrow(()->new IllegalArgumentException("Ce bloc n'existe pas"));
        for(Long num:numChambre){
            Chambre chambre = chambreRepository.findChambreByNumeroChambre(num);
            chambre.setBloc(bloc);
            chambreRepository.save(chambre);
        }
        return bloc;
    }

    @Override
    public Bloc affecterBlocAFoyer(Long idBloc, Long idFoyer) {
        Bloc bloc = blocRepository.findById(idBloc).orElseThrow(()->new IllegalArgumentException("Ce bloc n'existe pas"));
        Foyer foyer = foyerRepository.findById(idFoyer).orElseThrow(()->new IllegalArgumentException("Ce foyer n'existe pas"));
        bloc.setFoyer(foyer);
        blocRepository.save(bloc);
        return bloc;
    }

    /*@Override
    public List<Chambre> getChambresNonAffectees() {
        List<Chambre> chambres = chambreRepository.findAll();
        List<Chambre> ChambresNONaffectees = chambres.stream()
                .filter(chambre -> !blocRepository.existsByChambres(chambres))
                .collect(Collectors.toList());

        return ChambresNONaffectees;
    }*/
    @Override
    public List<Chambre> getChambresNonAffectees() {
        List<Chambre> chambres = chambreRepository.findAll();

        List<Chambre> chambresNonAffectees = chambres.stream()
                .filter(chambre -> !blocRepository.existsByChambresIn(Collections .singletonList(chambre)))
                .collect(Collectors.toList());

        return chambresNonAffectees;
    }
}
