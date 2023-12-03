import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EtudiantLayoutComponent} from "./layout/etudiant-layout.component";
import {UpdateReservationComponent} from "./views/reservation/update-reservation/update-reservation.component";
import {ListReservationComponent} from "./views/reservation/list-reservation/list-reservation.component";
import {AddReservationComponent} from "./views/reservation/add-reservation/add-reservation.component";

const routes: Routes = [
  { path: '', component: EtudiantLayoutComponent, children:[
     /* { path: 'etudiant-profile', component: EtudiantProfileComponent },
      { path: 'list-foyer', component: ListFoyerComponent },*/
      { path: 'reservations', component: ListReservationComponent},
      { path: 'addreservation', component: AddReservationComponent},
      { path: 'reservations/edit/:idreservation', component: UpdateReservationComponent }
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
