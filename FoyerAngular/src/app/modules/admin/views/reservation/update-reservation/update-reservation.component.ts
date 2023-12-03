import {Component, OnInit} from '@angular/core';
import {Reservation} from "../../../../../core/models/reservation/reservation";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ReservationService} from "../../../../../core/services/reservation/reservation.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.css']
})
export class UpdateReservationComponent implements OnInit {


  idReservation!: string;
  reservation!: Reservation;
  updateForm: FormGroup;
  isClicked = false;
  estValideOptions: boolean[] = [true, false];

  constructor(
    private avtR: ActivatedRoute,
    private reservationS: ReservationService,
    private router: Router,
    private formBuilder: FormBuilder,
    private location: Location
  ) {
    this.updateForm = this.formBuilder.group({
      idReservation: '',
      estValide: '',
      anneeReservation: ''
    });
  }

  getParam() {
    this.avtR.paramMap.subscribe((data) => {
      this.idReservation = String(data.get('id'));
      console.log(data.get('id'));
    });
  }

  ngOnInit(): void {
    this.getParam();

    this.reservationS.getReservationById(this.idReservation).subscribe((data) => {
      this.reservation = data;
      this.updateForm.setValue({
        idReservation: this.reservation.idReservation,
        estValide: this.reservation.estValide,
        anneeReservation: this.reservation.anneeUniversitaire
      });
    });
  }

  update() {
    if (this.updateForm.invalid) {
      return;
    }

    const updatedReservation: Reservation = {
      idReservation: this.reservation.idReservation,
      estValide: this.updateForm.value.estValide,
      anneeUniversitaire: this.updateForm.value.anneeReservation
    };

    this.reservationS.updateReservation(updatedReservation).subscribe(() => {
      this.router.navigate(['/admin/reservations']);
    });
  }

  goBack(): void {
    this.location.back();
    this.isClicked = true;
  }
}
