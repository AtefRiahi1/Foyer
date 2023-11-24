package tn.esprit.foyer.Entities;

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
public class Etudiant extends User {
    @Column(unique = true)
    private long cin;
    private String ecole;
    @ManyToMany (mappedBy = "etudiants")
    private List<Reservation> reservations;

    private LocalDate dateNaissance;
}
