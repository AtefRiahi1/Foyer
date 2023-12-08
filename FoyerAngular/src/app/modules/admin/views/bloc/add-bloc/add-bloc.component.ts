import {Component, OnInit} from '@angular/core';
import {Bloc} from "../../../../../core/models/bloc/bloc";
import {ActivatedRoute, Router} from "@angular/router";
import {FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {BlocService} from "../../../../../core/services/bloc/bloc.service";
import Swal from "sweetalert2";
import {Observable} from "rxjs";

@Component({
  selector: 'app-add-bloc',
  templateUrl: './add-bloc.component.html',
  styleUrls: ['./add-bloc.component.css']
})
export class AddBlocComponent {
  foyer_id_foyer!:number;
  bloc!: Bloc;

  constructor(private activatedRoute: ActivatedRoute,private blocService: BlocService , private router:Router) {
  }

  addBlocForm = new FormGroup({
    nomBloc: new FormControl('', Validators.required),
    capacityBloc: new FormControl('', Validators.required),
  });


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.foyer_id_foyer = +params['id']; // 'idFoyer' doit correspondre au nom du paramètre dans votre route
    });
  }

  resetForm() {
    this.addBlocForm.reset();
  }

  createNewBloc() {
    const data = this.addBlocForm.value as unknown as Bloc;
    if (this.addBlocForm.valid) {
      this.blocService.addBloc(data).subscribe(
        (result) => {
          this.bloc = result as Bloc; // Convertir le résultat en type Bloc si nécessaire

      this.blocService.affecterBlocAFoyer(this.bloc.idBloc, this.foyer_id_foyer).subscribe(() => {
            Swal.fire({
              icon: 'success',
              title: 'Success!',
              text: 'Bloc added successfully.',
            });
        this.router.navigate(['/admin/list-bloc']);
          }, (error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong while assigning block to home!',
            });
          });
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong while adding block!',
          });
        }
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid data!',
      });
    }}}
