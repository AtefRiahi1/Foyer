import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantLayoutComponent } from './layout/etudiant-layout.component';
import { DetailsBlocComponent } from './views/bloc/details-bloc/details-bloc.component';
import { AffecterBlocFoyerComponent } from './views/bloc/affecter-bloc-foyer/affecter-bloc-foyer.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';


@NgModule({
  declarations: [
    EtudiantLayoutComponent,
    DetailsBlocComponent,
    AffecterBlocFoyerComponent,

  ],
  imports: [
    CommonModule,
    EtudiantRoutingModule,
    NgxQRCodeModule
  ]
})
export class EtudiantModule { }

