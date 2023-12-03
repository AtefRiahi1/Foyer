import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EtudiantLayoutComponent} from "./layout/etudiant-layout.component";
import {EtudiantProfileComponent} from "./views/etudiant/etudiant-profile/etudiant-profile.component";
import {EtudiantControlComponent} from "./views/etudiant/etudiant-control/etudiant-control.component";
import {EtudiantEditComponent} from "./views/etudiant/etudiant-edit/etudiant-edit.component";
import { ListFoyerComponent } from './views/foyer/list-foyer/list-foyer.component';

const routes: Routes = [
  { path: '', component: EtudiantLayoutComponent, children:[
      { path: 'etudiantprofile', component: EtudiantProfileComponent },
      { path: 'etudiantcontrol', component: EtudiantControlComponent },
      { path: 'etudiantedit/:id', component: EtudiantEditComponent },
    { path: ':idU/listfoyer', component: ListFoyerComponent } 
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
