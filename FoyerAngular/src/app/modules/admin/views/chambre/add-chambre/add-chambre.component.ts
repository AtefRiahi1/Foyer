import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ChambreService } from 'src/app/core/services/chambre/chambre.service';
import { TypeChambre } from 'src/app/core/models/TypeChambre/type-chambre.enum';
import { Chambre } from 'src/app/core/models/chambre/chambre';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-chambre',
  templateUrl: './add-chambre.component.html',
  styleUrls: ['./add-chambre.component.css']
})
export class AddChambreComponent {
  typesChambre = Object.values(TypeChambre); // Ajoutez cette ligne

  addForm = new FormGroup({
    numeroChambre: new FormControl('', [Validators.required]),
    typeC: new FormControl('',)
  });

  constructor(private chambreS: ChambreService, private router: Router, private location: Location) {
    // ... Autres initialisations nécessaires ...
  }
  
  addChambre() {
    if (this.addForm.valid) {
        //const typeCValue = this.addForm.get('typeC').value;
        const typeCControl = this.addForm.get('typeC');
        const typeCValue = typeCControl ? typeCControl.value : null;

        const chambre: Chambre = {
            idChambre: 0,
            numeroChambre: Number(this.addForm.value.numeroChambre) || 0,
            typeC: TypeChambre[typeCValue as keyof typeof TypeChambre] || TypeChambre.SIMPLE,
        };
        this.chambreS.addChambre(chambre).subscribe(
            () => {
                alert("Chambre ajoutée avec succès");
                this.router.navigate(['/admin/chambre']);
            }
        );
    } else {
        alert("Veuillez remplir tous les champs correctement.");
    }
}

  isClicked: boolean = false;

  goBack(): void {
    this.location.back();
    this.isClicked = true;
  }
}