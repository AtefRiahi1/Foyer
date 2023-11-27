import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    this.universiteS.getUniversite().subscribe((admin) => {
      this.listUniversite = admin;
    });
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
}
