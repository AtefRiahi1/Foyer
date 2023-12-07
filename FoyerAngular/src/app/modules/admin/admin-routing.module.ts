import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLayoutComponent} from "./layout/admin-layout.component";
import { ListeChambreComponent } from './views/chambre/liste-chambre/liste-chambre.component';
import { AddChambreComponent } from './views/chambre/add-chambre/add-chambre.component';
import { UpdateChambreComponent } from './views/chambre/update-chambre/update-chambre.component';
import { AffectationBLocChambreComponent } from './views/chambre/affectation-bloc-chambre/affectation-bloc-chambre.component';

const routes: Routes = [
  { path: '', component: AdminLayoutComponent, children:[
    { path: 'chambre', component: ListeChambreComponent },
    { path: 'chambre/addChambre', component: AddChambreComponent},
    { path: 'chambre/updatechambre/:id', component: UpdateChambreComponent},
    { path: 'chambre/:idBloc/affecterChambre', component: AffectationBLocChambreComponent}

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
