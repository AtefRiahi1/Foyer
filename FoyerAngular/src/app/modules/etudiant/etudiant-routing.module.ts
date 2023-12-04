import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EtudiantLayoutComponent} from "./layout/etudiant-layout.component";
import { ListChambreComponent } from './views/chambre/list-chambre/list-chambre.component';

const routes: Routes = [
  { path: '', component: EtudiantLayoutComponent, children:[
    { path: ':idBloc/listChambre', component: ListChambreComponent } 
    
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
