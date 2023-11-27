import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Chambre } from 'src/app/core/models/chambre/chambre';
import { ChambreService } from 'src/app/core/services/chambre/chambre.service';
import { Location } from '@angular/common';
import { TypeChambre } from 'src/app/core/models/TypeChambre/type-chambre.enum';


@Component({
  selector: 'app-update-chambre',
  templateUrl: './update-chambre.component.html',
  styleUrls: ['./update-chambre.component.css']
})
export class UpdateChambreComponent {

  idChambre!: number;
  chambre!: Chambre;
  typesChambre: string[] = Object.values(TypeChambre);

  updateForm: FormGroup;

  constructor(
    private actvtR: ActivatedRoute,
    private chambreS: ChambreService,
    private router: Router,
    private formBuilder: FormBuilder,
    private location: Location
  ) {
    this.updateForm = this.formBuilder.group({
      idChambre: [0],
      numeroChambre: [0, [Validators.required]],
      typeC: ['']
    });
  }

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
      this.updateForm.patchValue({
        idChambre: this.chambre.idChambre,
        numeroChambre: this.chambre.numeroChambre,
        typeC: this.chambre.typeC
      });
    });
  }

  update() {
    const updatedChambre: Chambre = {
      idChambre: this.updateForm.value.idChambre,
      numeroChambre: this.updateForm.value.numeroChambre,
      typeC: this.updateForm.value.typeC
    };

    this.chambreS.updateChambre(updatedChambre).subscribe(() => {
      this.router.navigate(['/admin/chambre']);
    });
  }

  isClicked: boolean = false;

  goBack(): void {
    this.location.back();
    this.isClicked = true;
  }

}
