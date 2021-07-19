import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { userI } from 'src/assets/user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(public auth: AuthService, private route: Router) {}


  formRegister = new FormGroup({
  email: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required),
});


  ngOnInit(): void {
  }

  onRegister(form: userI) {
    console.log(form)
    this.auth
  .registerByEmail(form)
      .then((re) => {
        console.log('registro exitoso', re);
        this.route.navigate(['/Notes']);
      })
      .catch((er) => console.log('registro no exitoso', er));
  }
}
























  // constructor() { }
  // constructor(private auth: AuthService, private router: Router, ) {}
// async registrar(user: string, pass: string) {
//   try {
//     await this.auth.register(user, pass);
//   } catch (e: any) {
//     alert(e.message)
//   }

// }




