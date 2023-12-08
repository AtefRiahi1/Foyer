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
import { ListReservationComponent } from './views/reservation/list-reservation/list-reservation.component';
import { AddReservationComponent } from './views/reservation/add-reservation/add-reservation.component';
import { UpdateReservationComponent } from './views/reservation/update-reservation/update-reservation.component';
import { DeleteReservationComponent } from './views/reservation/delete-reservation/delete-reservation.component';
import { StatReservationComponent } from './views/reservation/stat-reservation/stat-reservation.component';
import { AjouterUniversiteComponent } from './views/universite/ajouter-universite/ajouter-universite.component';
import { ListUniversiteComponent } from './views/universite/list-universite/list-universite.component';
import { UpdateUniversiteComponent } from './views/universite/update-universite/update-universite.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    AddEtudiantComponent,
    UpdateEtudiantComponent,
    ListEtudiantComponent,
    ListFoyerComponent,
    AddFoyerComponent,
    UpdateFoyerComponent,
    ListReservationComponent,
    AddReservationComponent,
    UpdateReservationComponent,
    DeleteReservationComponent,
    StatReservationComponent,
    AjouterUniversiteComponent,
    ListUniversiteComponent,
    UpdateUniversiteComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
