import { Foyer } from "../foyer/foyer";

export class Bloc {
    idBloc!: number;
    nomBloc!: string;
    capacityBloc!: number;

    //etatBloc!: string[];
    //foyer_id_foyer!:number;

  foyer?: {
    idFoyer: number;
    nomFoyer: string;
    capaciteFoyer: number;
  };}
