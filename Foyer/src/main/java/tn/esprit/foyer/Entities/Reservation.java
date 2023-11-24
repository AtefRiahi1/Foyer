package tn.esprit.foyer.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Entity
@NoArgsConstructor /*constructeur non pram*/
@Getter
@Setter
@AllArgsConstructor /*constructeur param*/
@ToString
@Builder
public class Reservation implements Serializable {
    @Id
    @Column(unique = true)
    private String idReservation;
    private LocalDate anneeUniversitaire;
    private boolean estValide;
    @JsonIgnore
    @ManyToMany
    private List<Etudiant> etudiants;
}
