import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantLayoutComponent } from './layout/etudiant-layout.component';
import { EtudiantProfileComponent } from './views/etudiant/etudiant-profile/etudiant-profile.component';
import { EtudiantControlComponent } from './views/etudiant/etudiant-control/etudiant-control.component';
import { EtudiantEditComponent } from './views/etudiant/etudiant-edit/etudiant-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ListFoyerComponent } from './views/foyer/list-foyer/list-foyer.component';


@NgModule({
  declarations: [
    EtudiantLayoutComponent,
    EtudiantProfileComponent,
    EtudiantControlComponent,
    EtudiantEditComponent,
    ListFoyerComponent
  ],
  imports: [
    CommonModule,
    EtudiantRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EtudiantModule { }
