import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantLayoutComponent } from './layout/etudiant-layout.component';
import { ListFoyerComponent } from './views/foyer/list-foyer/list-foyer.component';


@NgModule({
  declarations: [
    EtudiantLayoutComponent,
    ListFoyerComponent
  ],
  imports: [
    CommonModule,
    EtudiantRoutingModule
  ]
})
export class EtudiantModule { }
