import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ReservationService} from "../../../../../core/services/reservation/reservation.service";
import Swal from "sweetalert2";
import {ChambreService} from "../../../../../core/services/chambre/chambre.service";

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {

  userconnect = JSON.parse(localStorage.getItem("userconnect")!);
  roomId!: string;
  cinEtudiant!: string;
  chambres: any[] = [];

  constructor(private reservationService: ReservationService,private chambreService: ChambreService) { }


  ngOnInit() {
    this.fetchRooms();
  }

  fetchRooms() {
    // Call your service method to fetch the list of rooms
    this.chambreService.getAllChambres().subscribe(
      (response: any) => {
        this.chambres = response; // Assuming the response contains an array of rooms
      },
      (error: any) => {
        console.error('Failed to fetch rooms:', error);
        // Handle error if necessary
      }
    );
  }
  addReservation() {
    const cinEtudiant = this.cinEtudiant;
    const roomId =  this.roomId;


    this.reservationService.ajouterReservation(roomId,cinEtudiant).subscribe(() => {
      Swal.fire({
        title: 'Success',
        text: 'Reservation added successfully',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }, error => {
      Swal.fire({
        title: 'Error',
        text: 'Failed to add reservation',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });
  }
}
