import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EtudiantLayoutComponent} from "./layout/etudiant-layout.component";
import {EtudiantProfileComponent} from "./views/etudiant-profile/etudiant-profile.component";
import {EtudiantControlComponent} from "./views/etudiant-control/etudiant-control.component";
import {EtudiantEditComponent} from "./views/etudiant-edit/etudiant-edit.component";

const routes: Routes = [
  { path: '', component: EtudiantLayoutComponent, children:[
      { path: 'etudiantprofile', component: EtudiantProfileComponent },
      { path: 'etudiantcontrol', component: EtudiantControlComponent },
      { path: 'etudiantedit/:id', component: EtudiantEditComponent }
      /*{ path: 'list-foyer', component: ListFoyerComponent },
      { path: 'list-reservation', component: ListReservationComponent }*/
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
