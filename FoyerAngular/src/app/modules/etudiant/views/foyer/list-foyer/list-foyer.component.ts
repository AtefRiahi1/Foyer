import { Component } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { number } from 'prop-types';
import { Foyer } from 'src/app/core/models/foyer/foyer';
import { FoyerService } from 'src/app/core/services/foyer/foyer.service';

@Component({
  selector: 'app-list-foyer',
  templateUrl: './list-foyer.component.html',
  styleUrls: ['./list-foyer.component.css']
})
export class ListFoyerComponent {
  foyer: Foyer;
  idUniversite: number;
  
  constructor(private router: Router, private avtR: ActivatedRoute, private foyerService: FoyerService) {
    this.foyer = new Foyer(); // Initialisation de foyer, assurez-vous que votre classe Foyer dispose d'un constructeur par défaut si nécessaire
    this.idUniversite = 0; // Initialisation de idUniversite, utilisez la valeur par défaut que vous jugez appropriée
  }
  
  ngOnInit() {
    this.avtR.paramMap.subscribe(data => {
      this.idUniversite = Number(data.get('idU'));
      this.chargerListeFoyers();
    });
  }
  
  chargerListeFoyers() {
    this.foyerService.getFoyerByUniversite(this.idUniversite).subscribe(
      (data: Foyer) => this.foyer = data,
      (erreur) => {
        console.error('Erreur lors du chargement des foyers : ', erreur);
        // Gérer l'erreur, par exemple, afficher un message à l'utilisateur
      }
    );
  }
  
}
