import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/layouts/home.component';
import { SignInComponent } from './home/views/sign-in/sign-in.component';
import { SignUpComponent } from './home/views/sign-up/sign-up.component';
import { Error404Component } from './home/views/error404/error404.component';
import {AdminModule} from "./modules/admin/admin.module";
import { ListBlocComponent } from './modules/admin/views/bloc/list-bloc/list-bloc.component';
import { AddBlocComponent } from './modules/admin/views/bloc/add-bloc/add-bloc.component';
import { EditBlocComponent } from './modules/admin/views/bloc/edit-bloc/edit-bloc.component';
import { ListBlocsComponent } from './modules/etudiant/views/bloc/list-blocs/list-blocs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { DetailsBlocComponent } from './modules/etudiant/views/bloc/details-bloc/details-bloc.component';
import { EtudiantModule } from './modules/etudiant/etudiant.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    Error404Component,
    ListBlocComponent,
    AddBlocComponent,
    EditBlocComponent,
    ListBlocsComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    EtudiantModule,
    BrowserAnimationsModule,
    NgxQRCodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
export class VotreModule { }
