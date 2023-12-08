import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLayoutComponent} from "./layout/admin-layout.component";
import {AddBlocComponent} from "./views/bloc/add-bloc/add-bloc.component";
import {ListBlocComponent} from "./views/bloc/list-bloc/list-bloc.component";
import {EditBlocComponent} from "./views/bloc/edit-bloc/edit-bloc.component";

const routes: Routes = [
  { path: '', component: AdminLayoutComponent, children:[
      { path: 'add_bloc', component: AddBlocComponent },
      { path: 'list-bloc', component: ListBlocComponent },
      { path: 'bloc/:idBloc', component: EditBlocComponent },

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
