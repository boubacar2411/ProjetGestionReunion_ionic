import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { User } from '../models/user';
import { UtilsService } from '../utils/utils.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: AuthService,
    private router: Router,
    private utils: UtilsService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      nom: ['', [Validators.required, Validators.minLength(2)]],
      prenom: ['', [Validators.required, Validators.minLength(3)]],
      direction: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    }
    );
  }

  register(user: any){
    this.service.register(user).subscribe(data=>{
      this.utils.presentToast('Inscription avec success, Veuillez vous connecter !', 'success');
      this.router.navigateByUrl('/login');
    }, error=>{
      switch (error.error.message[0].messages[0].id)
      {
        case 'Auth.form.error.email.taken':
          this.utils.presentToast('Cet Email est déjà utilisé!','danger');
          break;

        case 'Auth.form.error.username.taken':
            this.utils.presentToast('Username déjà utilisé !', 'danger');
            break;

        default:
          this.utils.presentToast('Une erreur interne est survenue!','danger');
          break;
      }
    });
  }

}
