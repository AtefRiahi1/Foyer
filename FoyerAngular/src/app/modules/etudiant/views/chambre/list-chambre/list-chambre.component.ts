import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeChambre } from 'src/app/core/models/TypeChambre/type-chambre.enum';
import { Chambre } from 'src/app/core/models/chambre/chambre';
import { ChambreService } from 'src/app/core/services/chambre/chambre.service';

@Component({
  selector: 'app-list-chambre',
  templateUrl: './list-chambre.component.html',
  styleUrls: ['./list-chambre.component.css']
})
export class ListChambreComponent implements OnInit{

  listChambre: Chambre[] = [];
  idBloc: number;

  constructor(private router: Router, private avtR: ActivatedRoute, private chambreService: ChambreService) {
    this.idBloc = 0;

  }

  ngOnInit() {
    this.avtR.paramMap.subscribe(data => {
      this.idBloc = Number(data.get('idBloc'));
      this.chambreService.getChambreByBloc(this.idBloc).subscribe(
        (data) => {
          this.listChambre = data;
        },
        (error) => {
          console.error('Erreur lors de la récupération des chambres par bloc : ', error);
        }
      );
    });
  }
}

