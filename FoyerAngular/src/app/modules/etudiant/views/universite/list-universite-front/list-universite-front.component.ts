import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Universite } from 'src/app/core/models/universite/universite';
import { UniversiteService } from 'src/app/core/services/universite/universite.service';

@Component({
  selector: 'app-list-universite-front',
  templateUrl: './list-universite-front.component.html',
  styleUrls: ['./list-universite-front.component.css']
})
export class ListUniversiteFrontComponent {

  constructor(private Router: Router, private universiteS: UniversiteService) {}

  listUniversite: Universite[] = [];

  ngOnInit() {
    this.universiteS.getUniversite().subscribe((admin) => {
      this.listUniversite = admin;
    });
   
  }

}
