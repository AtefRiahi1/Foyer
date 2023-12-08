import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxQrcodeElementTypes } from 'ngx-qrcode2';
import { Bloc } from 'src/app/core/models/bloc/bloc';
import { Foyer } from 'src/app/core/models/foyer/foyer';
import { BlocService } from 'src/app/core/services/bloc/bloc.service';
import { FoyerService } from 'src/app/core/services/foyer/foyer.service'; // Import du service de foyer
import Swal from 'sweetalert2';
import { BarcodeFormat,Result } from '@zxing/library';

@Component({
  selector: 'app-details-bloc',
  templateUrl: './details-bloc.component.html',
  styleUrls: ['./details-bloc.component.css']
})
export class DetailsBlocComponent implements OnInit {

  qrType: NgxQrcodeElementTypes = NgxQrcodeElementTypes.URL;
  qrValue: string = 'https://www.google.com/search?q=chatgpt&rlz=1CDGOYI_enTN1085TN1085&oq=&gs_lcrp=EgZjaHJvbWUqCQgBEEUYOxjCAzIJCAAQRRg7GMIDMgkIARBFGDsYwgMyCQgCEEUYOxjCAzIJCAMQRRg7GMIDMgkIBBBFGDsYwgMyCQgFEEUYOxjCAzIJCAYQRRg7GMIDMgkIBxBFGDsYwgPSAQwzMDMyMzU2N2owajeoAgiwAgE&hl=fr&sourceid=chrome-mobile&ie=UTF-8';
  idBloc!: number;
  bloc!: Bloc;
  foyer!: Foyer;
  foyerListe!: Foyer ;
  idFoyer: number = 0;


  constructor(
    private route: ActivatedRoute,
    private blocservice: BlocService,
    private foyerservice: FoyerService // Injection du service de foyer
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idBloc = +params['idBloc'];
      this.idFoyer = +params['idFoyer']; // 'idFoyer' doit correspondre au nom du paramètre dans votre route

      this.getBlocById();
      this.getFoyerById(this.idFoyer)
    });
  }

  getBlocById() {
    this.blocservice.getBlocById(this.idBloc).subscribe({
      next: (data) => {
        this.bloc = data;
        if (this.bloc.foyer && this.bloc.foyer.idFoyer) {
          this.getFoyerById(this.bloc.foyer.idFoyer);
        }
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong while fetching bloc data!',
        });
      },
    });
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


}
