import {Component, OnInit} from '@angular/core';
import {Bloc} from "../../../../../core/models/bloc/bloc";
import {ActivatedRoute, Router} from "@angular/router";
import {BlocService} from "../../../../../core/services/bloc/bloc.service";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-edit-bloc',
  templateUrl: './edit-bloc.component.html',
  styleUrls: ['./edit-bloc.component.css']
})
export class EditBlocComponent implements OnInit {
    idBloc!: number;
    bloc!: Bloc;
  foyer_id_foyer = 1;

    constructor(private blocService: BlocService ,private avtR: ActivatedRoute, private blocb: BlocService, private R: Router, private FormB: FormBuilder) {
    }

    updateForm: FormGroup = this.FormB.group({
        idBloc: 0,
        nomBloc: [''],
        capacityBloc: [0],
        //etatBloc: this.FormB.array([new FormControl('', Validators.minLength(3)), new FormControl('', Validators.minLength(3))])
    })

    getParam() {
        this.avtR.paramMap.subscribe((data) => {
            this.idBloc = Number(data.get('idBloc'));
        });
    }

    ngOnInit(): void {
        this.getParam();

        this.blocb.getBlocById(this.idBloc).subscribe((data) => {
            this.bloc = data;
            this.updateForm.setValue({
                idBloc: this.bloc.idBloc,
                nomBloc: this.bloc.nomBloc,
                capacityBloc: this.bloc.capacityBloc,

            });
        });
    }

    update() {
        const updatedBloc: Bloc = {
            idBloc: this.updateForm.value.idBloc,
            nomBloc: this.updateForm.value.nomBloc,
            capacityBloc: this.updateForm.value.capacityBloc,
          foyer:this.updateForm.value.foyer

          //idFoyer:this.updateForm.value.idFoyer
        };

        this.blocb.updateBloc(updatedBloc).subscribe(() => {
          this.blocService.affecterBlocAFoyer(this.bloc.idBloc, this.foyer_id_foyer).subscribe(() => {

            this.R.navigate(['/admin/list-bloc']);
          });
        })
    }
}
