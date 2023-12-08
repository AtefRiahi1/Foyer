import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EtudiantLayoutComponent} from "./layout/etudiant-layout.component";
import { ListBlocsComponent } from './views/bloc/list-blocs/list-blocs.component';
import { DetailsBlocComponent } from './views/bloc/details-bloc/details-bloc.component';
import { AffecterBlocFoyerComponent } from './views/bloc/affecter-bloc-foyer/affecter-bloc-foyer.component';

const routes: Routes = [
  { path: '', component: EtudiantLayoutComponent, children:[
      { path: 'list-bloc-f/:idFoyer', component: ListBlocsComponent },
      { path: 'bloc/:idBloc/:idFoyer', component: DetailsBlocComponent },
      {
        path: 'affecter_foyer_bloc/:idbloc',
        component: AffecterBlocFoyerComponent,
      },
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
