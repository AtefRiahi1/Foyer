import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Foyer } from 'src/app/core/models/foyer/foyer';
import { Universite } from 'src/app/core/models/universite/universite';
import { UniversiteService } from 'src/app/core/services/universite/universite.service';

@Component({
  selector: 'app-list-universite',
  templateUrl: './list-universite.component.html',
  styleUrls: ['./list-universite.component.css'],
})
export class ListUniversiteComponent {
  constructor(private Router: Router, private universiteS: UniversiteService) {}

  listUniversite: Universite[] = [];
 

  search!: string;

  ngOnInit() {
    // this.universiteS.getUniversite().subscribe((admin) => {
    //   this.listUniversite = admin;
    // });
    this.loadFoyers();
    this.loadUniversites();
  }
  loadUniversites() {
    this.universiteS.getUniversite().subscribe(
      (universites) => {
        this.listUniversite = universites;
      },
      (error) => {
        console.error('Erreur lors de la récupération des universités:', error);
      }
    );
  }


  delete(idUniversite: number) {
    const confirmDelete = window.confirm(
      'Êtes-vous sûr de vouloir supprimer ce universite ?'
    );

    if (confirmDelete) {
      this.universiteS.deleteUniversite(idUniversite).subscribe(() => {
        alert('Foyer supprimé');
        this.Router.navigate(['/admin/universite']);
      });
    } else {
      alert('Suppression annulée');
    }
  }
  
  selectedFoyer: string | undefined;
   listeDesFoyers: Foyer[] = []; 


    loadFoyers() {
      this.universiteS.getAllFoyers().subscribe(
        (foyers) => {
          this.listeDesFoyers = foyers;
        },
        (error) => {
          console.error('Erreur lors de la récupération des foyers:', error);
        }
      );
    }
    
    
    // affecterFoyerAUniversite(idFoyer: number, nomUniversite: string) {
    //   if (!this.selectedFoyer) {
    //     alert('Veuillez sélectionner un foyer avant d\'affecter.');
    //     return;
    //   }
    
    //   this.universiteS.affecterFoyerAUniversite(idFoyer, nomUniversite).subscribe(
    //     (response) => {
    //       console.log('Foyer affecté à l\'université avec succès:', response);
    //       // Mettez à jour la liste des universités après l'affectation
    //       this.loadUniversites();
    //     },
    //     (error) => {
    //       console.error('Erreur lors de l\'affectation du foyer à l\'université:', error);
    //     }
    //   );
    // }
    
}


