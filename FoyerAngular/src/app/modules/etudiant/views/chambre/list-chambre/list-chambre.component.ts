import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeChambre } from 'src/app/core/models/TypeChambre/type-chambre.enum';
import { Chambre } from 'src/app/core/models/chambre/chambre';
import { ChambreService } from 'src/app/core/services/chambre/chambre.service';
import Swal from "sweetalert2";
import {Reservation} from "../../../../../core/models/reservation/reservation";
import {ReservationService} from "../../../../../core/services/reservation/reservation.service";

@Component({
  selector: 'app-list-chambre',
  templateUrl: './list-chambre.component.html',
  styleUrls: ['./list-chambre.component.css']
})
export class ListChambreComponent implements OnInit{

  listChambre: Chambre[] = [];
  idBloc: number;

  reservation!:Reservation;
  typesChambre: string[] = Object.values(TypeChambre);
  chambres: Chambre[] = [];
  idBlocSelectionne!: number;
  typeChambreSelectionne!: TypeChambre;
  userconnect = JSON.parse(localStorage.getItem("userconnect")!);

  constructor(private router: Router, private avtR: ActivatedRoute, private chambreService: ChambreService,private reservationService:ReservationService) {
    this.idBloc = 0;

  }

  ngOnInit() {
    this.avtR.paramMap.subscribe(data => {
      this.idBloc = Number(data.get('idBloc'));
      this.chambreService.getChambreByBloc(this.idBloc).subscribe(
        (data) => {
          this.listChambre = data;
        },
        (error) => {
          console.error('Erreur lors de la récupération des chambres par bloc : ', error);
        }
      );
    });

    const idEtudiant = this.userconnect.id;
    this.reservationService.getCurrentReservationByEtudiantId(idEtudiant).subscribe((data) => {
      this.reservation = data;
    });

  }
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

