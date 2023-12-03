import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLayoutComponent} from "./layout/admin-layout.component";
import {ListEtudiantComponent} from "./views/etudiant/list-etudiant/list-etudiant.component";
import {AddEtudiantComponent} from "./views/etudiant/add-etudiant/add-etudiant.component";
import {UpdateEtudiantComponent} from "./views/etudiant/update-etudiant/update-etudiant.component";
import { ListFoyerComponent } from './views/foyer/list-foyer/list-foyer.component';
import { AddFoyerComponent } from './views/foyer/add-foyer/add-foyer.component';
import { UpdateFoyerComponent } from './views/foyer/update-foyer/update-foyer.component';
import {ListReservationComponent} from "./views/reservation/list-reservation/list-reservation.component";

import {AddReservationComponent} from "./views/reservation/add-reservation/add-reservation.component";
import {StatReservationComponent} from "./views/reservation/stat-reservation/stat-reservation.component";
import {UpdateReservationComponent} from "./views/reservation/update-reservation/update-reservation.component";

const routes: Routes = [
  { path: '', component: AdminLayoutComponent, children:[
    { path: 'foyer', component: ListFoyerComponent },
    { path: 'foyer/addfoyer', component: AddFoyerComponent},
    { path: 'foyer/updatefoyer/:id', component: UpdateFoyerComponent},
      /*{ path: 'admin-profile', component: AdminProfileComponent },
      { path: 'list-university', component: ListReservationComponent },
      { path: 'list-bloc-foyer', component: ListBlocFoyerComponent },*/
      { path: 'updateEtudiant/:id', component: UpdateEtudiantComponent },
      { path: 'addEtudiant', component: AddEtudiantComponent },
      { path: 'etudiants', component: ListEtudiantComponent},
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
