package tn.esprit.foyer.Controllers;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import tn.esprit.foyer.Entities.Bloc;
import tn.esprit.foyer.Entities.Chambre;
import tn.esprit.foyer.Entities.Foyer;
import tn.esprit.foyer.Services.IBlocServices;
import tn.esprit.foyer.Services.IChambreServices;


import java.util.List;

@RestController
@RequestMapping("/bloc")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin("*")
public class BlocController {

    private final IBlocServices blocService;
    private final IChambreServices chambreService;


    @PostMapping
    public Bloc addBloc(@RequestBody Bloc bloc) {
        return blocService.addBloc(bloc);
    }

    @PutMapping
    public Bloc updateBloc(@RequestBody Bloc bloc) {
        return blocService.updateBloc(bloc);
    }

    @GetMapping
    public List<Bloc> getAllBlocs() {
        return blocService.getAllBlocs();
    }

    @GetMapping("/{idBloc}")
    public Bloc getBlocById(@PathVariable Long idBloc) {
        return blocService.getBlocById(idBloc);
    }

    @DeleteMapping("/{idBloc}")
    public void deleteBloc(@PathVariable Long idBloc) {
        blocService.deleteBloc(idBloc);
    }


    @PostMapping("/{idBloc}")
    public Bloc affecterChambresABloc(@RequestBody List<Long> idChambre, @PathVariable Long idBloc) {
        return blocService.affecterChambresABloc(idChambre, idBloc);
    }
    /*
    @PostMapping("/{idBloc}")
    public Bloc affecterChambresABloc(@RequestBody List<Long> idChambre, @PathVariable Long idBloc) {
        log.info("ID du bloc reçu : " + idBloc);
        log.info("Chambres : testetettetetetetetetetetttetetetetet " + idChambre);
        return blocService.affecterChambresABloc(idChambre, idBloc);

    }*/
    @PostMapping("/{idBloc}/{idFoyer}")
    public Bloc affecterBlocAFoyer(@PathVariable Long idBloc, @PathVariable Long idFoyer) {
        return blocService.affecterBlocAFoyer(idBloc, idFoyer);
    }
    @GetMapping("/chambresNonAffectees")
    public List<Chambre> getChambresNonAffectees() {
        return blocService.getChambresNonAffectees();
    }
}
