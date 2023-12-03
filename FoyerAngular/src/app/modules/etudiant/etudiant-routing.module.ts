import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EtudiantLayoutComponent} from "./layout/etudiant-layout.component";
import { ListUniversiteComponent } from '../admin/views/universite/list-universite/list-universite.component';
import { ListUniversiteFrontComponent } from './views/universite/list-universite-front/list-universite-front.component';

const routes: Routes = [
  { path: '', component: EtudiantLayoutComponent, children:[
      { path: 'listUniversitefront', component: ListUniversiteFrontComponent },
     /* { path: 'list-foyer', component: ListFoyerComponent },
      { path: 'list-reservation', component: ListReservationComponent }*/
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
