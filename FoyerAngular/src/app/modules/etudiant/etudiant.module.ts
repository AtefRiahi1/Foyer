import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantLayoutComponent } from './layout/etudiant-layout.component';
import { EtudiantProfileComponent } from './views/etudiant/etudiant-profile/etudiant-profile.component';
import { EtudiantControlComponent } from './views/etudiant/etudiant-control/etudiant-control.component';
import { EtudiantEditComponent } from './views/etudiant/etudiant-edit/etudiant-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ListFoyerComponent } from './views/foyer/list-foyer/list-foyer.component';
import { ListReservationComponent } from './views/reservation/list-reservation/list-reservation.component';
import { AddReservationComponent } from './views/reservation/add-reservation/add-reservation.component';
import { UpdateReservationComponent } from './views/reservation/update-reservation/update-reservation.component';
import { DeleteReservationComponent } from './views/reservation/delete-reservation/delete-reservation.component';
import { ListUniversiteFrontComponent } from './views/universite/list-universite-front/list-universite-front.component';

import { DetailsBlocComponent } from './views/bloc/details-bloc/details-bloc.component';
import { AffecterBlocFoyerComponent } from './views/bloc/affecter-bloc-foyer/affecter-bloc-foyer.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';


@NgModule({
  declarations: [
    EtudiantLayoutComponent,
    EtudiantProfileComponent,
    EtudiantControlComponent,
    EtudiantEditComponent,
    ListFoyerComponent,
    ListReservationComponent,
    AddReservationComponent,
    UpdateReservationComponent,
    DeleteReservationComponent,
    ListUniversiteFrontComponent,
    DetailsBlocComponent,
    AffecterBlocFoyerComponent

  ],
    imports: [
        CommonModule,
        EtudiantRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgOptimizedImage,
        NgxQRCodeModule
    ]
    
})
export class EtudiantModule { }

