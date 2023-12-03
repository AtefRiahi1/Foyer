import { Component } from '@angular/core';
import {Reservation} from "../../../../../core/models/reservation/reservation";
import {ReservationService} from "../../../../../core/services/reservation/reservation.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {TypeChambre} from "../../../../../core/models/TypeChambre/type-chambre.enum";
import {Chambre} from "../../../../../core/models/chambre/chambre";


@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListReservationComponent {
  reservations: Reservation[] = [];
  typesChambre: string[] = Object.values(TypeChambre);
  chambres: Chambre[] = [];
  idBlocSelectionne!: number;
  typeChambreSelectionne!: TypeChambre;
  userconnect = JSON.parse(localStorage.getItem("userconnect")!);

  constructor(private reservationService: ReservationService, private router: Router) { }

  ngOnInit(): void {
    const idEtudiant = this.userconnect.id;
    this.reservationService.getAllReservations().subscribe((data) => {
      this.reservations = data;
    });
  }



  ajouterReservation() {
    const cinEtudiant = this.userconnect.cin;
    this.reservationService.ajouterReservation("1", "147258")
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

  navigateToUpdate(reservationId: number) {
    this.router.navigate(['/admin/reservations/reservationedit', reservationId]);
  }

}
