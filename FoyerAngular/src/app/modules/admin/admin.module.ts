import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './layout/admin-layout.component';
import { ListReservationComponent } from './views/reservation/list-reservation/list-reservation.component';
import { AddReservationComponent } from './views/reservation/add-reservation/add-reservation.component';
import { UpdateReservationComponent } from './views/reservation/update-reservation/update-reservation.component';
import { DeleteReservationComponent } from './views/reservation/delete-reservation/delete-reservation.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { StatReservationComponent } from './views/reservation/stat-reservation/stat-reservation.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    ListReservationComponent,
    AddReservationComponent,
    UpdateReservationComponent,
    DeleteReservationComponent,
    StatReservationComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
