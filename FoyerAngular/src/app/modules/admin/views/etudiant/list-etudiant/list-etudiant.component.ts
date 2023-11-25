import { Component } from '@angular/core';
import {EtudiantService} from "../../../../../core/services/etudiant/etudiant.service";
import {Router} from "@angular/router";
import {Etudiant} from "../../../../../core/models/etudiant/etudiant";
import Swal from "sweetalert2";

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent {
  list:Etudiant[]=[];
  search!:string;
  constructor(private router:Router,private etudiantservice:EtudiantService) {
  }

  ngOnInit(){
    this.etudiantservice.getAllEtudiants().subscribe({
      next: (data) => {
        if (data.length == 0) {
          Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Accun etudiant trouvé',
          });
        } else {
          console.log(data);
          this.list = data;
        }
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Quelque chose s\'est mal passé!',
        });
      },
    });
  }

  delete(id: number) {
    Swal.fire({
      title: 'vous êtes sûre?',
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprime-le!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.etudiantservice.deleteEtudiant(id).subscribe({
          next: (data) => {
            Swal.fire({
              title: 'Supprimé!',
              text: 'Votre bloc a été supprimé.',
              icon: 'success',
            });
            this.router.navigate(["/admin/etudiants"]);
          },
          error: (error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            });
          },
        });
      }
    });
  }

}
