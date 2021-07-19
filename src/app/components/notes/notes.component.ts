import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout()
    .then((res) => {
      console.log('sesión cerrada', res);
     this.router.navigate(['/Inicio'])
    })
    .catch((er) => console.log('no se puede cerrar sesión', er));
  }

}
