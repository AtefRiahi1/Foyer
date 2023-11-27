package tn.esprit.foyer.Services.Imp;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.foyer.Entities.Chambre;
import tn.esprit.foyer.Entities.TypeChambre;
import tn.esprit.foyer.Repositories.IChambreRepository;
import tn.esprit.foyer.Services.IChambreServices;


import java.util.List;

@Service
@RequiredArgsConstructor
public class IChambreServicesImp implements IChambreServices {

    private final IChambreRepository chambreRepository;


    @Override
    public Chambre addChambre(Chambre chambre) {
        return chambreRepository.save(chambre);
    }

    @Override
    public Chambre updateChambre(Chambre chambre) {
        return chambreRepository.save(chambre);
    }

    @Override
    public List<Chambre> getAllChambres() {
        return chambreRepository.findAll();
    }

    @Override
    public Chambre getChambreById(Long idChambre) {
        return chambreRepository.findById(idChambre).orElseThrow(()->new IllegalArgumentException("Cette chambre n'existe pas"));
    }

    @Override
    public List<Chambre> getChambresParBlocEtType(Long idBloc, TypeChambre typeC) {
        return chambreRepository.getChambresParBlocEtType(idBloc, typeC);  //Solution 1
    }

    @Override
    public void deleteChambre(Long idChambre) {
        chambreRepository.deleteById(idChambre);
    }


}
