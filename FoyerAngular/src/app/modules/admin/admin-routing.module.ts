import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLayoutComponent} from "./layout/admin-layout.component";
import {ListEtudiantComponent} from "./views/etudiant/list-etudiant/list-etudiant.component";
import {AddEtudiantComponent} from "./views/etudiant/add-etudiant/add-etudiant.component";
import {UpdateEtudiantComponent} from "./views/etudiant/update-etudiant/update-etudiant.component";

const routes: Routes = [
  { path: '', component: AdminLayoutComponent, children:[
      /*{ path: 'admin-profile', component: AdminProfileComponent },
      { path: 'list-foyer', component: ListFoyerComponent },
      { path: 'list-university', component: ListReservationComponent },
      { path: 'list-bloc-foyer', component: ListBlocFoyerComponent },*/
      { path: 'updateEtudiant/:id', component: UpdateEtudiantComponent },
      { path: 'addEtudiant', component: AddEtudiantComponent },
      { path: 'etudiants', component: ListEtudiantComponent}
    ] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
