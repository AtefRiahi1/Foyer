import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './layout/admin-layout.component';
import { AddEtudiantComponent } from './views/etudiant/add-etudiant/add-etudiant.component';
import { UpdateEtudiantComponent } from './views/etudiant/update-etudiant/update-etudiant.component';
import { ListEtudiantComponent } from './views/etudiant/list-etudiant/list-etudiant.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ListFoyerComponent } from './views/foyer/list-foyer/list-foyer.component';
import { AddFoyerComponent } from './views/foyer/add-foyer/add-foyer.component';
import { UpdateFoyerComponent } from './views/foyer/update-foyer/update-foyer.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    AddEtudiantComponent,
    UpdateEtudiantComponent,
    ListEtudiantComponent,
    ListFoyerComponent,
    AddFoyerComponent,
    UpdateFoyerComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
