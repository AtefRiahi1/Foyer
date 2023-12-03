import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  ReactiveFormsModule,
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
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
    ], [this.uniqueUniversityNameValidator()]),
    adresse: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    
   
  });

  loadExistingUniversities() {
    // Utilisez votre service pour récupérer les universités existantes
    // Par exemple, si votre service retourne un Observable<Universite[]>, vous pouvez faire quelque chose comme :
    this.universiteS.getUniversite().subscribe(
      universities => {
        this.existingUniversities = universities;
      },
      error => {
        console.error('Erreur lors du chargement des universités existantes', error);
      }
    );
  }

  uniqueUniversityNameValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      const value = control.value;
      const isUnique = !this.existingUniversities.some(universite => universite.nomUniversite === value);

      return of(isUnique ? null : { duplicateName: true });
    };
  }

  existingUniversities: Universite[] = [
    // initialisez avec les universités existantes si nécessaire
  ];

  

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

  ngOnInit() {
    // Chargez les universités existantes au démarrage du composant
    this.loadExistingUniversities();
  }

}
