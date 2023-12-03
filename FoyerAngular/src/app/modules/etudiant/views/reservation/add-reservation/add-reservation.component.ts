import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Etudiant} from "../../../../../core/models/etudiant/etudiant";
import {Role} from "../../../../../core/models/Role/role.enum";
import Swal from "sweetalert2";
import {Reservation} from "../../../../../core/models/reservation/reservation";
import {AuthenticationService} from "../../../../../core/services/authentication/authentication.service";
import {ReservationService} from "../../../../../core/services/reservation/reservation.service";

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent {



  constructor(private router: Router, private route: ActivatedRoute, private reservationService: ReservationService) { }


  saveReservation() {
    const idChambre: string | null = this.route.snapshot.paramMap.get('idChambre');
    const cin: string | null = this.route.snapshot.paramMap.get('cin');


    this.reservationService.ajouterReservation(idChambre, cin).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Reservation saved',
        text: 'The reservation was successfully saved.',
        showConfirmButton: false,
        timer: 1500
      });
    //  this.router.navigate(['/']);
    });
  }

}
