import {Component, Input} from '@angular/core';
import {Etudiant} from "../../../../core/models/etudiant/etudiant";

@Component({
  selector: 'app-etudiant-profile',
  templateUrl: './etudiant-profile.component.html',
  styleUrls: ['./etudiant-profile.component.css']
})
export class EtudiantProfileComponent {

  @Input() etudiant!:Etudiant;

  protected readonly Etudiant = Etudiant;
}
