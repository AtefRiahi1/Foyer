import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLayoutComponent} from "./layout/admin-layout.component";
import {ListReservationComponent} from "./views/reservation/list-reservation/list-reservation.component";

import {AddReservationComponent} from "./views/reservation/add-reservation/add-reservation.component";
import {StatReservationComponent} from "./views/reservation/stat-reservation/stat-reservation.component";
import {UpdateReservationComponent} from "./views/reservation/update-reservation/update-reservation.component";

const routes: Routes = [
  { path: '', component: AdminLayoutComponent, children:[
      /*{ path: 'admin-profile', component: AdminProfileComponent },
      { path: 'list-foyer', component: ListFoyerComponent },
      { path: 'list-university', component: ListReservationComponent },
      { path: 'list-bloc-foyer', component: ListBlocFoyerComponent },
      { path: 'list-chambre-bloc', component: ListChambreBlocComponent },
      { path: 'list-reservation', component: ListReservationComponent },
      { path: 'list-etudiant', component: ListEtudiantComponent}*/
      { path: 'reservations', component: ListReservationComponent },
      { path: 'addreservation', component: AddReservationComponent},
      { path: 'reservations/reservationsedit/:id', component: UpdateReservationComponent },
      { path: 'statreservation', component: StatReservationComponent},
    ] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
