import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../core/services/authentication/authentication.service";
import {Router} from "@angular/router";
import {Etudiant} from "../../../core/models/etudiant/etudiant";
import Swal from 'sweetalert2';
import {Role} from "../../../core/models/Role/role.enum";
import {HttpEvent, HttpEventType} from "@angular/common/http";
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  image: string ="";

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



  registerForm = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(3)]),
    prenom: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cin: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
    ecole: new FormControl('', [Validators.required, Validators.minLength(3)]),
    dateNaissance: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  register() {
    const etudiant: Etudiant = {
      nom: this.registerForm.value.nom || '', // Default to empty string if null
      prenom: this.registerForm.value.prenom || '',
      cin: Number(this.registerForm.value.cin) || 0, // Adjust type conversion as needed
      image: this.image || '',
      ecole: this.registerForm.value.ecole || '',
      dateNaissance: new Date(this.registerForm.value.dateNaissance || Date.now()), // Handle date conversion
      email: this.registerForm.value.email || '',
      password: this.registerForm.value.password || '',
      id: 0, // Assuming this is generated by the backend and not needed here
      role: Role.ETUDIANT // Assuming a default role; adjust as necessary
    };

    this.authenticationService.registerEtudiant(etudiant).subscribe(
      (response: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Inscription réussie',
          text: 'Vous pouvez maintenant vous connecter',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/signin']);
      },
      (error: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Une erreur est survenue lors de l\'inscription',
          footer: 'Veuillez réessayer'
        });
      }
    );
  }
}
