import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Chambre } from 'src/app/core/models/chambre/chambre';
import { ChambreService } from 'src/app/core/services/chambre/chambre.service';
import { Location } from '@angular/common';
import { TypeChambre } from 'src/app/core/models/TypeChambre/type-chambre.enum';
import {HttpEvent, HttpEventType} from "@angular/common/http";



@Component({
  selector: 'app-update-chambre',
  templateUrl: './update-chambre.component.html',
  styleUrls: ['./update-chambre.component.css']
})
export class UpdateChambreComponent {

  idChambre!: number;
  chambre!: Chambre;
  typesChambre: string[] = Object.values(TypeChambre);
  image: string ="";


  constructor(
    private actvtR: ActivatedRoute,
    private chambreS: ChambreService,
    private router: Router,
    private formBuilder: FormBuilder,
    private location: Location
  ) {
    
  }

  updateForm = this.formBuilder.group({
    idChambre: [0],
    numeroChambre: [0, [Validators.required]],
    typeC: [''],
    image:this.image
      // Assurez-vous que l'initialisation est correcte ici
  });
  ngOnInit(): void {
    this.getParam();
    this.getChambre();
  }

  getParam() {
    this.actvtR.paramMap.subscribe((data) => {
      this.idChambre = Number(data.get('id'));
    });
  }

  getChambre() {
    this.chambreS.getChambreById(this.idChambre).subscribe((data) => {
      this.chambre = data;
      this.updateForm.setValue({
        idChambre: this.chambre.idChambre,
        numeroChambre: this.chambre.numeroChambre,
        typeC: this.chambre.typeC,
        image:this.chambre.image
      });
    });
  }

  update() {
    const updatedChambre: Chambre = {
      idChambre: this.idChambre,
      numeroChambre:<number> this.updateForm.value.numeroChambre,
      typeC:<TypeChambre> this.updateForm.value.typeC,
      image: this.image,
    };

    this.chambreS.updateChambre(updatedChambre).subscribe(() => {
      this.router.navigate(['/admin/chambre']);
    });
  }
  
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
