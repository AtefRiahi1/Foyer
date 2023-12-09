import { Component } from '@angular/core';
import {Reservation} from "../../../../../core/models/reservation/reservation";
import {ReservationService} from "../../../../../core/services/reservation/reservation.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";
import {TypeChambre} from "../../../../../core/models/TypeChambre/type-chambre.enum";
import {Chambre} from "../../../../../core/models/chambre/chambre";
// @ts-ignore
import pdfMake from "pdfmake/build/pdfmake";
// @ts-ignore
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListReservationComponent {

  reservation!:Reservation;
  typesChambre: string[] = Object.values(TypeChambre);
  chambres: Chambre[] = [];
  idBlocSelectionne!: number;
  typeChambreSelectionne!: TypeChambre;
  userconnect = JSON.parse(localStorage.getItem("userconnect")!);

  constructor(private reservationService:ReservationService) { }

  ngOnInit(): void {
    const idEtudiant = this.userconnect.id;
    console.log(this.userconnect.cin);
    this.reservationService.getCurrentReservationByEtudiantId(idEtudiant).subscribe((data) => {
      this.reservation = data;
    });
  }

  annulerReservation() {
    const cinEtudiant = this.userconnect.cin;
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, annuler!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Appel de la méthode d'annulation
        this.reservationService.annulerReservation(cinEtudiant).subscribe((data) => {
          Swal.fire(
            'Annulé!',
            'Votre réservation a été annulée.',
            'success'
          );
          this.ngOnInit();
        });
      }
    });
  }

  // {img : "http://localhost:9090/auth/"+user.image},
  exportpdf(): void {
    const user = this.userconnect;

    const rese = this.reservation;

    const tableData = [
      [{ text: 'Nom et Prenom ', bold: true }, `${user.nom} ${user.prenom}`],
      [{ text: 'Date de Naissance', bold: true }, user.dateNaissance],
      [{ text: 'Ecole', bold: true }, user.ecole],
      [{ text: 'Carte Cin', bold: true }, user.cin],
      [{ text: 'Email', bold: true }, user.email]
    ];

    const docDefinition = {
      content: [
        {
          columns: [
            {
              width: 'auto',
              text: 'Reservation',
              style: 'header'
            },
          ]
        },
        {

          text: `Reservation ID: ${rese.idReservation}`,
          style: 'subheader'
        },
        {
          text: `Year of Reservation: ${rese.anneeUniversitaire}`,
          style: 'subheader',
          margin: [0, 10, 0, 20]
        },
        {
          table: {
            widths: ['30%', '70%'],
            body: tableData
          },
          margin: [0, 0, 0, 20]
        }
      ],
      styles: {
        header: {
          fontSize: 24,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5]
        }
      }
    };

    pdfMake.createPdf(docDefinition).download('reservation_'+this.reservation.idReservation+'.pdf');
  }



  /*onBlocChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.idBlocSelectionne = Number(selectElement.value);
    if (this.idBlocSelectionne) {
      this.getChambresParBlocEtType();
    }
  }*/

  /*onTypeChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.typeChambreSelectionne = selectElement.value as TypeChambre;
    if (this.typeChambreSelectionne) {
      this.getChambresParBlocEtType();
    }
  }*/

  /*getChambresParBlocEtType() {
    this.chambreService.getChambresParBlocEtType(this.idBlocSelectionne, this.typeChambreSelectionne)
      .subscribe(chambres => {
        this.chambres = chambres;
      });
  }*/

  ajouterReservation(id :string) {
    const cinEtudiant = this.userconnect.cin;
    this.reservationService.ajouterReservation(id,cinEtudiant)
      .subscribe((data) => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });

        Toast.fire({
          icon: "success",
          title: "Réservation effectuée avec succès"
        });

        this.ngOnInit();
      });
  }




}
