package tn.esprit.foyer.Services;

import tn.esprit.foyer.Entities.AuthenticationResponse;
import tn.esprit.foyer.Entities.Etudiant;
import tn.esprit.foyer.Entities.RefreshTokenRequest;

public interface IAuthenticationServices {
    Etudiant registerEtudiant(Etudiant etudiant);
    AuthenticationResponse login(String email, String password);
    AuthenticationResponse refreshToken(RefreshTokenRequest refreshToken);
}
