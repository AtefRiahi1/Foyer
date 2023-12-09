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
import { ListUniversiteComponent } from '../admin/views/universite/list-universite/list-universite.component';
import { ListUniversiteFrontComponent } from './views/universite/list-universite-front/list-universite-front.component';
import { ListBlocsComponent } from './views/bloc/list-blocs/list-blocs.component';
import { DetailsBlocComponent } from './views/bloc/details-bloc/details-bloc.component';
import { AffecterBlocFoyerComponent } from './views/bloc/affecter-bloc-foyer/affecter-bloc-foyer.component';
import { ListChambreComponent } from './views/chambre/list-chambre/list-chambre.component';

const routes: Routes = [
  { path: '', component: EtudiantLayoutComponent, children:[
      { path: 'etudiantprofile', component: EtudiantProfileComponent },
      { path: 'etudiantcontrol', component: EtudiantControlComponent },
      { path: 'etudiantedit/:id', component: EtudiantEditComponent },
    { path: ':idU/listfoyer', component: ListFoyerComponent } ,
      { path: 'reservations', component: ListReservationComponent},
      { path: 'addreservation', component: AddReservationComponent},
      { path: 'listUniversitefront', component: ListUniversiteFrontComponent },
      { path: 'reservations/edit/:idreservation', component: UpdateReservationComponent },
      { path: 'list-bloc-f/:idFoyer', component: ListBlocsComponent },
      { path: 'bloc/:idBloc/:idFoyer', component: DetailsBlocComponent },
      {
        path: 'affecter_foyer_bloc/:idbloc',
        component: AffecterBlocFoyerComponent
      },
      { path: ':idBloc/listChambre', component: ListChambreComponent } 

  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
