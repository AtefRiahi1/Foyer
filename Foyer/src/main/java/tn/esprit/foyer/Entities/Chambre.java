package tn.esprit.foyer.Entities;

import jakarta.persistence.*;
import lombok.*;
import tn.esprit.foyer.Entities.Bloc;

import java.io.Serializable;
import java.util.List;

@Entity
@NoArgsConstructor /*constructeur non pram*/
@Getter
@Setter
@AllArgsConstructor /*constructeur param*/
@ToString
public class Chambre implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idChambre;
    private long numeroChambre;
    @Enumerated(EnumType.STRING)
    private TypeChambre typeC;
    @OneToMany /* chambre 1-->* reservation */
    private List<Reservation> reservations;
    @ManyToOne /* bloc 1-->* chambre */
    private Bloc bloc;

}
