package tn.esprit.foyer.Controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.foyer.Entities.Foyer;
import tn.esprit.foyer.Entities.Universite;
import tn.esprit.foyer.Services.IFoyerServices;
import tn.esprit.foyer.Services.IUniversiteServices;


import java.util.List;

@RestController
@RequestMapping("/universite")
@RequiredArgsConstructor
@CrossOrigin("*")
public class UniversiteController {

    private final IUniversiteServices universiteService;
    private final IFoyerServices foyerService;

    @PostMapping
    public Universite addUniversite(@RequestBody Universite universite) {
        return universiteService.addUniversite(universite);
    }

    @PutMapping
    public Universite updateUniversite(@RequestBody Universite universite) {
        return universiteService.updateUniversite(universite);
    }

    @GetMapping
    public List<Universite> getUniversitesNonAffectees() {
        return universiteService.getUniversitesNonAffectees();
    }


    @GetMapping("/nom/{nomUniversite}")
    public Universite getUniversiteByNom(@PathVariable String nomUniversite){
        return  universiteService.getUniversiteByNom(nomUniversite);
    }
    @GetMapping("/{idUniversite}")
    public Universite getUniversiteById(@PathVariable Long idUniversite) {
        return universiteService.getUniversiteById(idUniversite);
    }*/
    @GetMapping("/allfoyer/{idU}")
    public Foyer getFoyerById(@PathVariable long idU) {
        return foyerService.findFoyerByidUniversite(idU);
    }

    @PutMapping("/{idFoyer}/{nomUniversite}")
    public Universite affecterFoyerAUniversite(@PathVariable Long idFoyer, @PathVariable String nomUniversite) {
        return universiteService.affecterFoyerAUniversite(idFoyer, nomUniversite);
    }

    @PutMapping("/{idUniversite}")
    public Universite desaffecterFoyerAUniversite(@PathVariable Long idUniversite) {
        return universiteService.desaffecterFoyerAUniversite(idUniversite);
    }



    @DeleteMapping("{idUniveriste}")
    public  void deleteUniversite(@PathVariable long idUniveriste){
        universiteService.deleteUniversite(idUniveriste);
    }
}
