import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Universite } from 'src/app/core/models/universite/universite';
import { UniversiteService } from 'src/app/core/services/universite/universite.service';

@Component({
  selector: 'app-ajouter-universite',
  templateUrl: './ajouter-universite.component.html',
  styleUrls: ['./ajouter-universite.component.css'],
})
export class AjouterUniversiteComponent {
  addForm = new FormGroup({
    nomUniversite: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    adresse: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  constructor(private universiteS: UniversiteService, private router: Router) {}

  addUniversite() {
    if (this.addForm.valid) {
      const universite: Universite = {
        idUniversite: 0,
        nomUniversite: this.addForm.value.nomUniversite || '',
        adresse: this.addForm.value.adresse || '',
      };
      this.universiteS.ajouteruniversite(universite).subscribe(() => {
        alert('Universite ajoutee');
        this.router.navigate(['/admin/universite']);
      });
    } else {
      alert('Veuillez remplir tous les champs correctement.');
    }
  }
}
