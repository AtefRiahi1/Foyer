import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ChambreService } from 'src/app/core/services/chambre/chambre.service';
import { TypeChambre } from 'src/app/core/models/TypeChambre/type-chambre.enum';
import { Chambre } from 'src/app/core/models/chambre/chambre';
import { Location } from '@angular/common';
import {HttpEvent, HttpEventType} from "@angular/common/http";


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
            image:String(this.image )|| ''
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
image: string ="";
onUploadImg(event:any):void{
  const file = event.target.files[0];
  if (!file) {
    return;
  }
  this.image = file.name;
  const formData=new FormData();
  formData.append('file',file,file.name);
  this.chambreS.upload(formData).subscribe(
    (event:any)=>{
      if (event.type === HttpEventType.Response) {
        // Handle the final response
        this.image = event.body;
        console.log(this.image);
      }
    },
    (error) => {
      if (error.status === 400) {
        const errorMessage = error.error;
        console.log(errorMessage);
        alert(errorMessage);
      }
    }
  );
}

  isClicked: boolean = false;

  goBack(): void {
    this.location.back();
    this.isClicked = true;
  }
}
