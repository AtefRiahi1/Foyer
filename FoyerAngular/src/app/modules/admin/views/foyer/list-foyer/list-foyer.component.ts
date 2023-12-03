import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Foyer } from 'src/app/core/models/foyer/foyer';
import { FoyerService } from 'src/app/core/services/foyer/foyer.service';
@Component({
  selector: 'app-list-foyer',
  templateUrl: './list-foyer.component.html',
  styleUrls: ['./list-foyer.component.css']
})
export class ListFoyerComponent {
constructor(private Router:Router,private foyerservice:FoyerService){}

listFoyer:Foyer[]=[];

ngOnInit(){
  this.foyerservice.getAllFoyer().subscribe((data:Foyer[])=>this.listFoyer=data);
}

delete(idFoyer: number) {
  const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer ce foyer ?");
  
  if (confirmDelete) {
    this.foyerservice.deleteFoyer(idFoyer).subscribe(() => {
      alert("Foyer supprimé");
      location.reload()
    });
  } else {
    
    alert("Suppression annulée");
  }
}

}
