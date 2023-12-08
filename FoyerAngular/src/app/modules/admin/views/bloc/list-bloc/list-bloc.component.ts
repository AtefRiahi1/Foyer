import {Component, OnInit} from '@angular/core';
import Swal from "sweetalert2";
import {Bloc} from "../../../../../core/models/bloc/bloc";
import {BlocService} from "../../../../../core/services/bloc/bloc.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-bloc',
  templateUrl: './list-bloc.component.html',
  styleUrls: ['./list-bloc.component.css']
})
export class ListBlocComponent implements OnInit {
  ListBlocs: Bloc[] = [];
    filteredBlocs: Bloc[] = []; // Nouveau tableau filtré
    searchTerm: string = '';
  constructor(private blocService: BlocService, private _router: Router) {}
  ngOnInit(): void {
    const idFoyer = 1
    this.getBlocsByFoyer(idFoyer);

  }
  getBlocsByFoyer(idFoyer: number) {
    this.blocService.getBlocsByFoyer(idFoyer).subscribe({
      next: (data) => {
        console.log(data);
        this.ListBlocs = data;
        if (data.length == 0) {

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Accun bloc trouvé',
          });
        } else {
          console.log(data);
          this.ListBlocs = data;
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
  SendIdBloc(idBloc: number) {
    this._router.navigate(['/admin/bloc/', +idBloc]);
  }


    filterBlocs() {
        if (this.searchTerm.trim() !== '') {
            this.ListBlocs = this.ListBlocs.filter(bloc =>
                bloc.nomBloc.toLowerCase().includes(this.searchTerm.toLowerCase())
            );
        } else {
            // Si le champ de recherche est vide, réinitialiser la liste des blocs
            this.getBlocsByFoyer(1);
        }
    }
  deleteBloc(idBloc: number) {
    this.blocService.deleteBloc(idBloc).subscribe({
      next: (data) => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: 'Deleted!',
              text: 'Your bloc has been deleted.',
              icon: 'success',
            });
            this.getBlocsByFoyer(1);
          }
        });
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      },
    });
  }
  detailsById(idBloc: number) {
    this._router.navigate(['admin/details_bloc/' + idBloc]);
  }
  affecter(idBloc: number) {
    this._router.navigate(['admin/affecter_foyer_bloc/' + idBloc]);
  }
}
