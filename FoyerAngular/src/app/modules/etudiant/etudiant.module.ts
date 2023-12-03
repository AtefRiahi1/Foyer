import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantLayoutComponent } from './layout/etudiant-layout.component';
import { ListUniversiteFrontComponent } from './views/universite/list-universite-front/list-universite-front.component';



@NgModule({
  declarations: [
    EtudiantLayoutComponent,
    ListUniversiteFrontComponent,
   
  ],
  imports: [
    CommonModule,
    EtudiantRoutingModule
  ]
})
export class EtudiantModule { }
