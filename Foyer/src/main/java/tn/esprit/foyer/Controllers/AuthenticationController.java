package tn.esprit.foyer.Controllers;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tn.esprit.foyer.Entities.AuthenticationResponse;
import tn.esprit.foyer.Entities.Etudiant;
import tn.esprit.foyer.Entities.RefreshTokenRequest;
import tn.esprit.foyer.Entities.User;
import tn.esprit.foyer.Services.IAuthenticationServices;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;

import static java.nio.file.Files.copy;
import static java.nio.file.Paths.get;
import static java.nio.file.StandardCopyOption.REPLACE_EXISTING;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@CrossOrigin("*")
public class AuthenticationController {

    private final IAuthenticationServices authenticationServices;
    public static final String DIRECTORY=System.getProperty("user.home")+"/Downloads/uploads/";

    @PostMapping("/registerEtudiant")
    public Etudiant registerEtudiant(@RequestBody Etudiant etudiant) {
        return authenticationServices.registerEtudiant(etudiant);
    }

    @PostMapping("/login")
    public AuthenticationResponse login(@RequestBody User user) {
        return authenticationServices.login(user.getEmail(), user.getPassword());
    }

    @PostMapping("/refreshToken")
    public AuthenticationResponse refreshToken(@RequestBody RefreshTokenRequest refreshToken) {
        return authenticationServices.refreshToken(refreshToken);
    }
    @PostMapping(value="/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile multipartFile) throws IOException {
        String filename= StringUtils.cleanPath(multipartFile.getOriginalFilename());
        Path fileStorage=get(DIRECTORY,filename).toAbsolutePath().normalize();
        copy(multipartFile.getInputStream(),fileStorage,REPLACE_EXISTING);
        return ResponseEntity.ok().body(filename);
    }

    @GetMapping("/{fileName}")
    public ResponseEntity<Resource> serveImage(@PathVariable String fileName) {
        Path imagePath = Paths.get("C:\\Users\\LENOVO\\Downloads\\uploads", fileName);

        try {
            Resource resource = new UrlResource(imagePath.toUri());

            if (resource.exists() && resource.isReadable()) {
                return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(resource);
            }
        } catch (IOException e) {

        }

        return ResponseEntity.notFound().build();
    }
}
