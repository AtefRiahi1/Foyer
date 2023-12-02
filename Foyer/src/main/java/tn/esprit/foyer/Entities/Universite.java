package tn.esprit.foyer.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
@Entity
@NoArgsConstructor /*constructeur non pram*/
@Getter
@Setter
@AllArgsConstructor /*constructeur param*/
@ToString
public class Universite implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idUniversite;
    private String nomUniversite;
    private String adresse;
    @JsonIgnore
    @OneToOne(fetch=FetchType.EAGER)
    private Foyer foyer;
}
