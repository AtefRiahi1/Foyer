package tn.esprit.foyer.Controllers;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import tn.esprit.foyer.Entities.Bloc;
import tn.esprit.foyer.Services.IBlocServices;


import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/bloc")
@RequiredArgsConstructor
@CrossOrigin("*")
@Slf4j
public class BlocController {

    private final IBlocServices blocService;

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
    @PostMapping("/{idBloc}/{idFoyer}")
    public Bloc affecterBlocAFoyer(@PathVariable Long idBloc, @PathVariable Long idFoyer) {
        return blocService.affecterBlocAFoyer(idBloc, idFoyer);
    }

    @GetMapping("date/{date}")
    public void dateTest(@PathVariable LocalDate date) {
        log.info(String.valueOf(date));
    }
    @GetMapping("/{idFoyer}/blocs")
    public List<Bloc> getBlocsByFoyer(@PathVariable Long idFoyer){
        return blocService.getBlocsByFoyer(idFoyer);
    }
}
