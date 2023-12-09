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
import { ListUniversiteComponent } from './views/universite/list-universite/list-universite.component';
import { AjouterUniversiteComponent } from './views/universite/ajouter-universite/ajouter-universite.component';
import { UpdateUniversiteComponent } from './views/universite/update-universite/update-universite.component';
import {AddBlocComponent} from "./views/bloc/add-bloc/add-bloc.component";
import {ListBlocComponent} from "./views/bloc/list-bloc/list-bloc.component";
import {EditBlocComponent} from "./views/bloc/edit-bloc/edit-bloc.component";
import { ListeChambreComponent } from './views/chambre/liste-chambre/liste-chambre.component';
import { AddChambreComponent } from './views/chambre/add-chambre/add-chambre.component';
import { UpdateChambreComponent } from './views/chambre/update-chambre/update-chambre.component';
import { AffectationBLocChambreComponent } from './views/chambre/affectation-bloc-chambre/affectation-bloc-chambre.component';



const routes: Routes = [
  { path: '', component: AdminLayoutComponent, children:[
    { path: 'foyer', component: ListFoyerComponent },
    { path: 'foyer/addfoyer', component: AddFoyerComponent},
    { path: 'foyer/updatefoyer/:id', component: UpdateFoyerComponent},
    { path: 'universite', component: ListUniversiteComponent },
    { path: 'universite/ajouter', component: AjouterUniversiteComponent },
    { path: 'universite/update/:id', component: UpdateUniversiteComponent },
    { path: 'updateEtudiant/:id', component: UpdateEtudiantComponent },
    { path: 'addEtudiant', component: AddEtudiantComponent },
    { path: 'etudiants', component: ListEtudiantComponent},
    { path: 'reservations', component: ListReservationComponent },
    { path: 'addreservation', component: AddReservationComponent},
    { path: 'reservations/reservationsedit/:id', component: UpdateReservationComponent },
    { path: 'statreservation', component: StatReservationComponent},
    { path: 'add_bloc/:id', component: AddBlocComponent },
    { path: 'list-bloc', component: ListBlocComponent },
    { path: 'bloc/:idBloc', component: EditBlocComponent },
    { path: 'chambre', component: ListeChambreComponent },
    { path: 'chambre/addChambre', component: AddChambreComponent},
    { path: 'chambre/updatechambre/:id', component: UpdateChambreComponent},
    { path: 'chambre/:idBloc/affecterChambre', component: AffectationBLocChambreComponent}

    ] }
    

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
