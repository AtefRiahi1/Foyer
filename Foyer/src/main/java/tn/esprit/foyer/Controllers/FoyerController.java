package tn.esprit.foyer.Controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.foyer.Entities.Foyer;
import tn.esprit.foyer.Services.IFoyerServices;



import java.util.List;

@RestController
@RequestMapping("/foyer")
@RequiredArgsConstructor
@CrossOrigin("*")
public class FoyerController {

    private final IFoyerServices foyerService;

    @PostMapping
    public Foyer addFoyer(@RequestBody Foyer foyer) {
        return foyerService.ajouterFoyer(foyer);
    }

    /*@PostMapping("/{idUniversite}")
    public Foyer ajouterFoyerEtAffecterAUniversite(@RequestBody Foyer foyer, @PathVariable Long idUniversite) {
        return foyerService.ajouterFoyerEtAffecterAUniversite(foyer, idUniversite);
    }*/

    @PutMapping
    public Foyer updateFoyer(@RequestBody Foyer foyer) {
        return foyerService.updateFoyer(foyer);
    }

    @GetMapping
    public List<Foyer> getAllFoyers() {
        return foyerService.getAllFoyers();
    }


    @GetMapping("/{idFoyer}")
    public Foyer getFoyerById(@PathVariable Long idFoyer) {
        return foyerService.getFoyerById(idFoyer);
    }

    @DeleteMapping("/{idFoyer}")
    public void deleteFoyer(@PathVariable Long idFoyer) {
        foyerService.deleteFoyer(idFoyer);
    }
}
