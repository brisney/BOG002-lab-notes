import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { userI } from 'src/assets/user.interface';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private route: Router) {}

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });


  ngOnInit(): void {}

  onLogin(form: userI) {
    this.auth
      .loginByEmail(form)
      .then((res) => {
        console.log('login exitoso', res);
        this.route.navigate(['/Notes']);
      })
      .catch((err) => console.log('login no exitoso', err));
  }

  onGoogleLogin(){
    this.auth
      .loginWithGoogle()
      .then((res) => {
        console.log('login con google exitoso', res);
        this.route.navigate(['/Notes']);
      })
      .catch((err) => console.log('login con google no exitoso', err));
  }

  // }
}







