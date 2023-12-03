import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantLayoutComponent } from './layout/etudiant-layout.component';
import { ListReservationComponent } from './views/reservation/list-reservation/list-reservation.component';
import { AddReservationComponent } from './views/reservation/add-reservation/add-reservation.component';
import { UpdateReservationComponent } from './views/reservation/update-reservation/update-reservation.component';
import { DeleteReservationComponent } from './views/reservation/delete-reservation/delete-reservation.component';


@NgModule({
  declarations: [
    EtudiantLayoutComponent,
    ListReservationComponent,
    AddReservationComponent,
    UpdateReservationComponent,
    DeleteReservationComponent
  ],
  imports: [
    CommonModule,
    EtudiantRoutingModule
  ]
})
export class EtudiantModule { }
