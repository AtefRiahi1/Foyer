package tn.esprit.foyer.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.List;

@Entity
@NoArgsConstructor /*constructeur non pram*/
@Getter
@Setter
@AllArgsConstructor /*constructeur param*/
@ToString

public class Bloc implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idBloc;
    private String nomBloc;
    private long capacityBloc;
    @JsonIgnore
    @ManyToOne /* foyer 1-->*bloc */
    private Foyer foyer;
    @JsonIgnore
    @OneToMany (mappedBy = "bloc")/* bloc 1-->* chambre */
    private List<Chambre> chambres;
}
