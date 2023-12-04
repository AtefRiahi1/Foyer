import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantLayoutComponent } from './layout/etudiant-layout.component';
import { ListChambreComponent } from './views/chambre/list-chambre/list-chambre.component';


@NgModule({
  declarations: [
    EtudiantLayoutComponent,
    ListChambreComponent
  ],
  imports: [
    CommonModule,
    EtudiantRoutingModule
  ]
})
export class EtudiantModule { }
