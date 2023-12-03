import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Foyer } from 'src/app/core/models/foyer/foyer';
import { FoyerService } from 'src/app/core/services/foyer/foyer.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-update-foyer',
  templateUrl: './update-foyer.component.html',
  styleUrls: ['./update-foyer.component.css']
})
export class UpdateFoyerComponent implements OnInit {
  idFoyer!: number;
  foyer!: Foyer;

  constructor(
    private avtR: ActivatedRoute,
    private foyerS: FoyerService,
    private router: Router,
    private FormB: FormBuilder,
    private location: Location
  ) {}

  updateForm: FormGroup = this.FormB.group({
    idFoyer: 0,
    nomFoyer: [''],
    capaciteFoyer: [0],
  
  });

  getParam() {
    this.avtR.paramMap.subscribe((data) => {
      this.idFoyer = Number(data.get('id'));
    });
  }

  ngOnInit(): void {
    this.getParam();

    this.foyerS.getFoyerById(this.idFoyer).subscribe((data) => {
      this.foyer = data;
      this.updateForm.setValue({
        idFoyer: this.foyer.idFoyer,
        nomFoyer: this.foyer.nomFoyer,
        capaciteFoyer: this.foyer.capaciteFoyer,
      });
    });
  }

  update() {
    const updatedFoyer: Foyer = {
      idFoyer: this.updateForm.value.idFoyer,
      nomFoyer: this.updateForm.value.nomFoyer,
      capaciteFoyer: this.updateForm.value.capaciteFoyer,
      idUniversite : this.updateForm.value
    };

    this.foyerS.updateFoyer(updatedFoyer).subscribe(() => {
      this.router.navigate(['/admin/foyer']);
    });
  }
  isClicked: boolean = false;
  goBack(): void {
    this.location.back();
    this.isClicked = true;
  }

}
