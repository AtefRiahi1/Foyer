import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Chambre } from 'src/app/core/models/chambre/chambre';
import { ChambreService } from 'src/app/core/services/chambre/chambre.service';

@Component({
  selector: 'app-liste-chambre',
  templateUrl: './liste-chambre.component.html',
  styleUrls: ['./liste-chambre.component.css']
})
export class ListeChambreComponent {
  constructor(private Router:Router,private chambreS:ChambreService){}

  listChambre:Chambre[]=[];
  
  ngOnInit(){
    this.chambreS.getAllChambres().subscribe((data:Chambre[])=>this.listChambre=data);
  }
  
  delete(idC: number) {
    const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer cette chambre?");
    
    if (confirmDelete) {
      this.chambreS.deleteChambre(idC).subscribe(() => {
        alert("Chambre supprimée avec succés ");
        location.reload();
        this.Router.navigate(["/admin/chambre"]);
      });
    } else {
      
      alert("Suppression annulée");
    }
  }
}
