package tn.esprit.foyer.Controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.foyer.Entities.Reservation;
import tn.esprit.foyer.Services.IReservationServices;

import java.util.List;

@RestController
@RequestMapping("/reservation")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ReservationController {

    private final IReservationServices reservationService;


    @PutMapping
    public Reservation updateReservation(@RequestBody Reservation reservation) {
        return reservationService.updateReservation(reservation);
    }

    @GetMapping
    public List<Reservation> getAllReservations() {
        return reservationService.getAllReservations();
    }

    @GetMapping("/{idReservation}")
    public Reservation getReservationById(@PathVariable String idReservation) {
        return reservationService.getReservationById(idReservation);
    }


    @PostMapping("/{idChambre}/{cin}")
    public Reservation ajouterReservation(@PathVariable Long idChambre, @PathVariable Long cin) {
        return reservationService.ajouterReservation(idChambre, cin);
    }

    @PutMapping("/{cin}")
    public Reservation annulerReservation(@PathVariable Long cin) {
        return reservationService.annulerReservation(cin);
    }
}
