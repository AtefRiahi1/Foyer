import { Component } from '@angular/core';
import {EtudiantService} from "../../../../../core/services/etudiant/etudiant.service";
import {Router} from "@angular/router";
import {Etudiant} from "../../../../../core/models/etudiant/etudiant";

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent {
  list:Etudiant[]=[];
  constructor(private router:Router,private etudiantservice:EtudiantService) {
  }

  ngOnInit(){
    this.etudiantservice.getAllEtudiants().subscribe((data:Etudiant[])=>this.list=data);
  }

  delete(id :number){
    this.etudiantservice.deleteEtudiant(id).subscribe(()=>{
      alert("user deleted");
      this.router.navigate(["/admin/etudiants"]);
    });

  }
}
