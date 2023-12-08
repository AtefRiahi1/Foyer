import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { Bloc } from 'src/app/core/models/bloc/bloc';
import { Foyer } from 'src/app/core/models/foyer/foyer';
import { BlocService } from 'src/app/core/services/bloc/bloc.service';
import { FoyerService } from 'src/app/core/services/foyer/foyer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-blocs',
  templateUrl: './list-blocs.component.html',
  styleUrls: ['./list-blocs.component.css']
})
export class ListBlocsComponent implements OnInit {

  blocListe: Bloc[] = [];
  foyerListe!: Foyer ;

  idFoyer: number = 0;
  nomFoyer: string = '';
  constructor(private blocservice: BlocService, private route: Router, private activatedRoute: ActivatedRoute, private foyerservice: FoyerService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.idFoyer = +params['idFoyer']; // 'idFoyer' doit correspondre au nom du paramètre dans votre route
      this.getBlocsByFoyer(this.idFoyer);
      this.getFoyerById(this.idFoyer)
    });
  }
  detailsById(idBloc: number, idFoyer:number) {
    this.route.navigate(['etudiant/bloc/' + idBloc + '/'+ idFoyer]);
  }
  getFoyerById(idFoyer: number) {
    this.foyerservice.getFoyerById(idFoyer).subscribe({
      next: (dat: Foyer) => { // Utilisez Foyer au lieu de Foyer[]
        console.log(dat);
        this.foyerListe = dat; // Mettez l'objet unique dans un tableau si nécessaire
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      },
    });
  }

  getBlocsByFoyer(idFoyer: number) {
    this.blocservice.getBlocsByFoyer(idFoyer).subscribe({
      next: (data: Bloc[]) => {
        console.log(data); // Vérifiez les données reçues dans la console
        if (data != null) {
          this.blocListe = data;
        } else {
          Swal.fire('Liste bloc est vide !');
        }
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      },
    });
  }
  affecter(idbloc: number) {
    this.route.navigate(['admin/affecter_foyer_bloc/' + idbloc]);
  }

}
