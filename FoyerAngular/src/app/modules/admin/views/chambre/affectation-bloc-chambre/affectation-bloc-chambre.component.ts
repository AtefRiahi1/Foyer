import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chambre } from 'src/app/core/models/chambre/chambre';
import { ChambreService } from 'src/app/core/services/chambre/chambre.service';

@Component({
  selector: 'app-affectation-bloc-chambre',
  templateUrl: './affectation-bloc-chambre.component.html',
  styleUrls: ['./affectation-bloc-chambre.component.css']
})
export class AffectationBLocChambreComponent implements OnInit { //implements OnInit {

  idBloc: number;
  chambresNonAffectees: Chambre[] = [];
  chambresSelectionnees: Chambre[] = [];

  constructor(
    private chambreService: ChambreService,
    private router: Router,
    private actR: ActivatedRoute
  ) {

    this.idBloc = 0;
  }

  ngOnInit(): void {

    this.actR.paramMap.subscribe(params => {
      this.idBloc = Number(params.get('idBloc'));

      // Recuperez les chambres non affectees.
      this.chambreService.getChambresNonAffectees().subscribe(
        (chambres) => {
          this.chambresNonAffectees = chambres;
        },
        (error) => {
          console.error('Erreur lors de la récupération des chambres non affectées', error);
        }
      );
    });
  }

  onCheckboxChange(chambre: Chambre): void {
    // Gérez les sélections/déselections de chambres.
    if (this.chambresSelectionnees.includes(chambre)) {
      this.chambresSelectionnees = this.chambresSelectionnees.filter((c) => c !== chambre);
    } else {
      this.chambresSelectionnees.push(chambre);
    }
  }

  onSubmit(): void {
    console.log('ID du bloc:', this.idBloc);
    console.log('Chambres selectionnees', this.chambresSelectionnees);

    this.chambreService.affecterChambresABloc(this.idBloc, this.chambresSelectionnees.map(chambre => chambre.numeroChambre)).subscribe(
      () => {

        alert('Chambres affectées avec succès au bloc!');
        this.router.navigate(['/admin/list-bloc']);
      },
      (erreur) => {
        console.error('Erreur lors de l\'affectation des chambres au bloc', erreur);
        alert('Erreur lors de l\'affectation des chambres au bloc. Veuillez réessayer.');
      }
    );
    /*this.chambreService.getChambresNonAffectees().subscribe(
      (chambres) => {
        console.log('Chambres non affectées:', chambres);
        this.chambresNonAffectees = chambres;
      },
      (error) => {
        console.error('Erreur lors de la récupération des chambres non affectées', error);
      }
    );*/
  }



}
