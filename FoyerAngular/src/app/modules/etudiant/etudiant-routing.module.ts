import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EtudiantLayoutComponent} from "./layout/etudiant-layout.component";
import {EtudiantProfileComponent} from "./views/etudiant/etudiant-profile/etudiant-profile.component";
import {EtudiantControlComponent} from "./views/etudiant/etudiant-control/etudiant-control.component";
import {EtudiantEditComponent} from "./views/etudiant/etudiant-edit/etudiant-edit.component";
import { ListFoyerComponent } from './views/foyer/list-foyer/list-foyer.component';
import {UpdateReservationComponent} from "./views/reservation/update-reservation/update-reservation.component";
import {ListReservationComponent} from "./views/reservation/list-reservation/list-reservation.component";
import {AddReservationComponent} from "./views/reservation/add-reservation/add-reservation.component";

const routes: Routes = [
  { path: '', component: EtudiantLayoutComponent, children:[
      { path: 'etudiantprofile', component: EtudiantProfileComponent },
      { path: 'etudiantcontrol', component: EtudiantControlComponent },
      { path: 'etudiantedit/:id', component: EtudiantEditComponent },
    { path: ':idU/listfoyer', component: ListFoyerComponent } ,
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
