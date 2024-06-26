import { Component } from '@angular/core';
import {Etudiant} from "../../../../../core/models/etudiant/etudiant";
import {HttpEventType} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../../../core/services/authentication/authentication.service";
import {EtudiantService} from "../../../../../core/services/etudiant/etudiant.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-etudiant-edit',
  templateUrl: './etudiant-edit.component.html',
  styleUrls: ['./etudiant-edit.component.css']
})
export class EtudiantEditComponent {
  image: string ="";
  id!:number;
  etudiant!:Etudiant;

  onUploadImg(event:any):void{
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    this.image = file.name;
    const formData=new FormData();
    formData.append('file',file,file.name);
    this.authenticationService.upload(formData).subscribe(
      (event:any)=>{
        if (event.type === HttpEventType.Response) {
          // Handle the final response
          this.image = event.body;
          console.log(this.image);
        }
      },
      (error) => {
        if (error.status === 400) {
          const errorMessage = error.error;
          console.log(errorMessage);
          alert(errorMessage);
        }
      }
    );
  }

  constructor(private router: Router,private actR:ActivatedRoute,private R:Router,private FormB:FormBuilder, private authenticationService: AuthenticationService,private etudiantservice:EtudiantService) { }

  updateForm = this.FormB.group({
    id:[0],
    nom: ['', [Validators.required, Validators.minLength(3)]],
    prenom: ['', [Validators.required, Validators.minLength(3)]],
    cin: [0, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
    dateNaissance: [new Date(''), [Validators.required]],
    image:this.image,
    ecole: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
  });
  getParam(){
    //this.id=Number(this.actR.snapshot.paramMap.get('id'));
    this.actR.paramMap.subscribe(data=>this.id=Number(data.get('id')));
  }
  ngOnInit() {
    this.getParam()
    this.etudiantservice.getEtudiantById(this.id).subscribe((data)=>{this.etudiant=data;
      this.updateForm.setValue({
          id: this.etudiant.id,
          nom: this.etudiant.nom,
          prenom: this.etudiant.prenom,
          cin: this.etudiant.cin,
          dateNaissance: this.etudiant.dateNaissance,
          image: this.etudiant.image,
          ecole: this.etudiant.ecole,
          email: this.etudiant.email,
        }
      );
    });
  }
  update() {
    const updatedEtudiant: Etudiant = {
      id: this.id,
      nom: <string>this.updateForm.value.nom,
      prenom: <string>this.updateForm.value.prenom,
      cin: <number>this.updateForm.value.cin,
      dateNaissance: <Date>this.updateForm.value.dateNaissance,
      image: <string>this.image,
      ecole: <string>this.updateForm.value.ecole,
      email: <string>this.updateForm.value.email,
      password: this.etudiant.password,
      role: this.etudiant.role
    }

    this.etudiantservice.updateEtudiant(updatedEtudiant).subscribe(
      () => {
        // Mise à jour réussie, actualisez les données dans le localStorage
        const userConnect = JSON.parse(localStorage.getItem("userconnect")!);
        userConnect.nom = updatedEtudiant.nom;
        userConnect.prenom = updatedEtudiant.prenom;
        userConnect.cin = updatedEtudiant.cin;
        userConnect.dateNaissance = updatedEtudiant.dateNaissance;
        userConnect.image = this.image;
        userConnect.ecole = updatedEtudiant.ecole;
        userConnect.email = updatedEtudiant.email;

        // Mettez à jour le localStorage avec les nouvelles données
        localStorage.setItem("userconnect", JSON.stringify(userConnect));

        Swal.fire({
          icon: 'success',
          title: 'Vos données sont modifiées',
          showConfirmButton: false,
          timer: 1500
        });
        location.reload();
        this.router.navigate(['/etudiant/etudiantcontrol']);

      },
      () => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Une erreur est survenue lors de la modification',
          footer: 'Veuillez réessayer'
        });
      }
    );
  }

}
