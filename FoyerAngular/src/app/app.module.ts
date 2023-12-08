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
import {EtudiantModule} from "./modules/etudiant/etudiant.module";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    Error404Component,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    EtudiantModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
