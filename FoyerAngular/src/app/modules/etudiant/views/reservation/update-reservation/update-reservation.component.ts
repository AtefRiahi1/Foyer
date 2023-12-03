import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ReservationService} from "../../../../../core/services/reservation/reservation.service";
import {Reservation} from "../../../../../core/models/reservation/reservation";
import Swal from "sweetalert2";

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.css']
})
export class UpdateReservationComponent implements OnInit {


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private reservationService: ReservationService
    ) { }
    reservation!: Reservation ;
    isLoading: boolean = false;

    ngOnInit(): void {
        this.getReservation();
    }

    getReservation(): void {
        const reservationId = this.route.snapshot.params['id'];
        this.reservationService.getReservationById(reservationId).subscribe(
            (reservation: Reservation) => {
                this.reservation = reservation;
            },
            (error: any) => {
                console.error('Error retrieving reservation:', error);
            }
        );
    }

    updateReservation(): void {
        this.isLoading = true;
        this.reservationService.updateReservation(this.reservation).subscribe(
            () => {
                Swal.fire({
                    icon: 'success',
                    title: 'Reservation updated',
                    text: 'The reservation was successfully updated.',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    this.router.navigate(['/reservations']);
                });
            },
            (error: any) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'An error occurred while updating the reservation.',
                });
                this.isLoading = false;
            }
        );
    }
}
