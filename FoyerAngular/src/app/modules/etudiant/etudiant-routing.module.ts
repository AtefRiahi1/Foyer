import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EtudiantLayoutComponent} from "./layout/etudiant-layout.component";

const routes: Routes = [
  { path: '', component: EtudiantLayoutComponent, children:[
     /* { path: 'etudiant-profile', component: EtudiantProfileComponent },
      { path: 'list-foyer', component: ListFoyerComponent },
      { path: 'list-reservation', component: ListReservationComponent }*/
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
