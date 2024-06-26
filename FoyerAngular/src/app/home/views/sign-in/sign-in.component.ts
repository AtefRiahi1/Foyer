import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../core/services/authentication/authentication.service";
import {LoginPayload} from "../../../core/models/login-payload";
import Swal from 'sweetalert2';
import {Role} from "../../../core/models/Role/role.enum";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  login() {
    const payload: LoginPayload = {
      email: this.loginForm.value.email || '',
      password: this.loginForm.value.password || ''
    };

    this.authenticationService.login(payload).subscribe((res: any) => {
      console.log(res);

      if (res && res.userDetails && res.userDetails.enabled) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        });

        Toast.fire({
          icon: 'success',
          title: 'Connexion réussie'
        });

        localStorage.setItem('userconnect', JSON.stringify(res.userDetails));
        localStorage.setItem('token', res.accessToken);
        localStorage.setItem("state", "0");

        if (res.userDetails.role === Role.ADMIN) {
          this.router.navigateByUrl('/admin');
        } else {
          this.router.navigateByUrl('/etudiant');
        }
      }
    }, err => {
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'La connexion a échoué. Veuillez vérifier vos informations d\'identification.',
        showConfirmButton: true
      });
    });
  }
}
