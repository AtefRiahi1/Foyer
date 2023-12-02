import { Component } from '@angular/core';
import Swal from "sweetalert2";
import {Router} from "@angular/router";
import {EtudiantService} from "../../../../core/services/etudiant/etudiant.service";

@Component({
  selector: 'app-etudiant-control',
  templateUrl: './etudiant-control.component.html',
  styleUrls: ['./etudiant-control.component.css']
})
export class EtudiantControlComponent {

  loadScript(src: string) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
  }
  constructor(private router:Router,private etudiantservice:EtudiantService) {
  }

  userconnect = JSON.parse(localStorage.getItem("userconnect")!);

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
              text: "L'etudiant a été supprimé.",
              icon: 'success',
            });
            this.router.navigate(["/home"]);
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
