package tn.esprit.foyer.Controllers;


import lombok.RequiredArgsConstructor;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import static java.nio.file.Paths.get;

import org.springframework.web.multipart.MultipartFile;
import tn.esprit.foyer.Entities.Bloc;
import tn.esprit.foyer.Entities.Chambre;
import tn.esprit.foyer.Entities.TypeChambre;
import tn.esprit.foyer.Services.IChambreServices;


import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;


import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;

import static java.nio.file.Files.copy;
import static java.nio.file.StandardCopyOption.REPLACE_EXISTING;

import java.util.List;

@RestController
@RequestMapping("/chambre")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ChambreController {

    private final IChambreServices chambreService;
    public static final String DIRECTORY=System.getProperty("user.home")+"/Downloads/uploads/";

    @PostMapping
    public Chambre addChambre(@RequestBody Chambre chambre) {
        return chambreService.addChambre(chambre);
    }

    @PutMapping
    public Chambre updateChambre(@RequestBody Chambre chambre) {
        return chambreService.updateChambre(chambre);
    }

    @GetMapping
    public List<Chambre> getAllChambres() {
        return chambreService.getAllChambres();
    }

    @GetMapping("/get/{idChambre}")
    public Chambre getChambreById(@PathVariable Long idChambre) {
        return chambreService.getChambreById(idChambre);
    }


    @GetMapping("/{idBloc}/{typeC}")
    public List<Chambre> getChambresParBlocEtType(@PathVariable Long idBloc, @PathVariable TypeChambre typeC) {
        return chambreService.getChambresParBlocEtType(idBloc, typeC);
    }
    @DeleteMapping("/{idChambre}")
    public void deleteChambre(@PathVariable Long idChambre) {
        chambreService.deleteChambre(idChambre);
    }
    /*@PostMapping(value="/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile multipartFile) throws IOException {
        String filename= StringUtils.cleanPath(multipartFile.getOriginalFilename());
        Path fileStorage=get(DIRECTORY,filename).toAbsolutePath().normalize();
        copy(multipartFile.getInputStream(),fileStorage,REPLACE_EXISTING);
        return ResponseEntity.ok().body(filename);
    }*/

    /*@GetMapping("/{fileName}")
    public ResponseEntity<Resource> serveImage(@PathVariable String fileName) {
        Path imagePath = Paths.get("C:\\Users\\rahma\\Downloads\\uploads", fileName);

        try {
            Resource resource = new UrlResource(imagePath.toUri());

            if (resource.exists() && resource.isReadable()) {
                return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(resource);
            }
        } catch (IOException e) {

        }

        return ResponseEntity.notFound().build();
    }*/
    /*@GetMapping("/{idBloc}")
    public List<Chambre> getChambreByIdBloc(@PathVariable long idBloc) {
        return chambreService.getChambresParBloc(idBloc);
    }*/
    @GetMapping("/getByBloc/{idBloc}")
    public List<Chambre> getChambresByBloc(@PathVariable Long idBloc) {
        return chambreService.getChambresByBlocId(idBloc);
    }

}