import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './layout/admin-layout.component';
import { AddChambreComponent } from './views/chambre/add-chambre/add-chambre.component';
import { ListeChambreComponent } from './views/chambre/liste-chambre/liste-chambre.component';
import { UpdateChambreComponent } from './views/chambre/update-chambre/update-chambre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AffectationBLocChambreComponent } from './views/chambre/affectation-bloc-chambre/affectation-bloc-chambre.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    AddChambreComponent,
    ListeChambreComponent,
    UpdateChambreComponent,
    AffectationBLocChambreComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
