import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ReservationService} from "../../../../../core/services/reservation/reservation.service";

@Component({
  selector: 'app-stat-reservation',
  templateUrl: './stat-reservation.component.html',
  styleUrls: ['./stat-reservation.component.css']
})
export class StatReservationComponent implements OnInit{
  validCount: number = 0;
  invalidCount: number = 0;

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.calculateStatistics();
  }

  calculateStatistics() {
    this.reservationService.getAllReservations().subscribe(reservations => {
      this.validCount = reservations.filter(reservation => reservation.estValide).length;
      this.invalidCount = reservations.filter(reservation => !reservation.estValide).length;
    });

  }
}
