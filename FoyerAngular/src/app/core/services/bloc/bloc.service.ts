import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Bloc} from "../../models/bloc/bloc";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlocService {

  constructor(private http: HttpClient) { }
  addBloc(bloc: Bloc) {
    return this.http.post(`${environment.baseUrl}/bloc`, bloc);
  }

    updateBloc(bloc:Bloc){
        return this.http.put(`${environment.baseUrl}/bloc`,bloc);
    }
  getAllBlocs() {
    return this.http.get<Bloc[]>(`${environment.baseUrl}/bloc`);
  }

  getBlocById(idBloc: number): Observable<Bloc> {
    return this.http.get<Bloc>(`${environment.baseUrl}/bloc/${idBloc}`);
  }

  deleteBloc(idBloc: number) {
    return this.http.delete(`${environment.baseUrl}/bloc/${idBloc}`);
  }

  affecterChambresABloc(idChambre: number[], idBloc: number) {
    return this.http.put(`${environment.baseUrl}/bloc/affecterChambres/${idBloc}`, idChambre);
  }

  affecterBlocAFoyer(idBloc: number, idFoyer: number):Observable<Bloc[]> {
    return this.http.post<Bloc[]>(`${environment.baseUrl}/bloc/${idBloc}/${idFoyer}`, null);
  }
  getBlocsByFoyer(idFoyer: number): Observable<Bloc[]> {
    return this.http.get<Bloc[]>(`${environment.baseUrl}/bloc/${idFoyer}/blocs`);
  }
}
