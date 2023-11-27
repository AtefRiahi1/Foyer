import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLayoutComponent} from "./layout/admin-layout.component";
import { ListUniversiteComponent } from './views/universite/list-universite/list-universite.component';
import { AjouterUniversiteComponent } from './views/universite/ajouter-universite/ajouter-universite.component';
import { UpdateUniversiteComponent } from './views/universite/update-universite/update-universite.component';


const routes: Routes = [
  { path: '', component: AdminLayoutComponent, children:[

      { path: 'universite', component: ListUniversiteComponent },
      { path: 'universite/ajouter', component: AjouterUniversiteComponent },
      { path: 'universite/update/:id', component: UpdateUniversiteComponent },
      /*{ path: 'admin-profile', component: AdminProfileComponent },
      { path: 'list-foyer', component: ListFoyerComponent },
       { path: 'list-university', component: ListReservationComponent },
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
