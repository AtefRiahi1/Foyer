import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Universite } from 'src/app/core/models/universite/universite';
import { UniversiteService } from 'src/app/core/services/universite/universite.service';

@Component({
  selector: 'app-update-universite',
  templateUrl: './update-universite.component.html',
  styleUrls: ['./update-universite.component.css'],
})
export class UpdateUniversiteComponent implements OnInit {
  idUniversite!: number;
  universite!: Universite;

  constructor(
    private avtR: ActivatedRoute,
    private universiteS: UniversiteService,
    private router: Router,
    private FormB: FormBuilder
  ) {}

  updateForm: FormGroup = this.FormB.group({
    idUniversite: 0,
    nomUniversite: [''],
    adresse: [''],
  });

  getParam() {
    this.avtR.paramMap.subscribe((data) => {
      this.idUniversite = Number(data.get('id'));
    });
  }

  ngOnInit(): void {
    this.getParam();

    this.universiteS.getUniversiteById(this.idUniversite).subscribe((data) => {
      this.universite = data;
      this.updateForm.setValue({
        idUniversite: this.universite.idUniversite,
        nomUniversite: this.universite.nomUniversite,
        adresse: this.universite.adresse,
      });
    });
  }

  update() {
    const updatedUniversite: Universite = {
      idUniversite: this.updateForm.value.idUniversite,
      nomUniversite: this.updateForm.value.nomUniversite,
      adresse: this.updateForm.value.adresse,
    };

    this.universiteS.updateuniversite(updatedUniversite).subscribe(() => {
      this.router.navigate(['/admin/universite']);
    });
  }
}
