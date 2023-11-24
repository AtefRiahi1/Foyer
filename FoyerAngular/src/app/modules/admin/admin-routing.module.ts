import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLayoutComponent} from "./layout/admin-layout.component";

const routes: Routes = [
  { path: '', component: AdminLayoutComponent, children:[
      /*{ path: 'admin-profile', component: AdminProfileComponent },
      { path: 'list-foyer', component: ListFoyerComponent },
      { path: 'list-university', component: ListReservationComponent },
      { path: 'list-bloc-foyer', component: ListBlocFoyerComponent },
      { path: 'list-chambre-bloc', component: ListChambreBlocComponent },
      { path: 'list-reservation', component: ListReservationComponent },
      { path: 'list-etudiant', component: ListEtudiantComponent}*/
    ] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
