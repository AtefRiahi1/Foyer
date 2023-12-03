import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EtudiantLayoutComponent} from "./layout/etudiant-layout.component";
import { ListFoyerComponent } from './views/foyer/list-foyer/list-foyer.component';

const routes: Routes = [
  { path: '', component: EtudiantLayoutComponent, children:[
    { path: ':idU/listfoyer', component: ListFoyerComponent } 
    
    /* { path: 'etudiant-profile', component: EtudiantProfileComponent },
      
      { path: 'list-reservation', component: ListReservationComponent }*/
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
