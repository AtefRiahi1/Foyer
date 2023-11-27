import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './layout/admin-layout.component';
import { AjouterUniversiteComponent } from './views/universite/ajouter-universite/ajouter-universite.component';
import { ListUniversiteComponent } from './views/universite/list-universite/list-universite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateUniversiteComponent } from './views/universite/update-universite/update-universite.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    AjouterUniversiteComponent,
    ListUniversiteComponent,
    UpdateUniversiteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
