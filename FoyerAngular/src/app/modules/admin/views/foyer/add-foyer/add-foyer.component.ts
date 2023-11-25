import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Foyer } from 'src/app/core/models/foyer/foyer';
import { FoyerService } from 'src/app/core/services/foyer/foyer.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-foyer',
  templateUrl: './add-foyer.component.html',
  styleUrls: ['./add-foyer.component.css']
})
export class AddFoyerComponent {

  addForm = new FormGroup({
    nomFoyer: new FormControl('', [Validators.required, Validators.minLength(3)]),
    capaciteFoyer: new FormControl('', [Validators.required, Validators.maxLength(8)])
  });
  constructor(private foyerS : FoyerService ,private router:Router,private location: Location){}


  addF() {
    if (this.addForm.valid) {
      const foyer: Foyer = {
        idFoyer: 0,
        nomFoyer: this.addForm.value.nomFoyer || '',
        capaciteFoyer: Number(this.addForm.value.capaciteFoyer) || 0,
      };
      this.foyerS.addFoyer(foyer).subscribe(
        () => {
          alert("Foyer ajouté");
          this.router.navigate(['/admin/foyer']);
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
