import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/utils/utils.service'
import { UsersService } from '../service/users.service';
import { User } from '../models/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(private service: AuthService, private utils: UtilsService, private userService: UsersService, private formBuilder: FormBuilder, private toastController: ToastController, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'identifier': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  login(userInfo: User)
  {
    this.service.login(userInfo).subscribe(data=>{
      window.localStorage.setItem('token', data.jwt);
      console.log(this.service.redirectUrl);
      this.utils.presentToast("Connexion avec success", 'success')

      this.router.navigateByUrl(this.service.redirectUrl);
    }, error=> {
      this.utils.presentToast("Nom d'utilisateur ou mot de passe incorrect", 'danger');
    });
  }

}
