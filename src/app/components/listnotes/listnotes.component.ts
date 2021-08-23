import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.services/auth.service';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/notes.services/notes.service';

@Component({
  selector: 'app-listnotes',
  templateUrl: './listnotes.component.html',
  styleUrls: ['./listnotes.component.css']
})
export class ListnotesComponent implements OnInit {
  notes: any[] = [];

  constructor(
    private auth: AuthService,
    private router: Router,
    private noteService: NotesService
  ) {}

  ngOnInit(): void {
    this.getNotes();
  }
 
  logout() {
    this.auth
      .logout()
      .then((res) => {
        console.log('sesión cerrada', res);
        this.router.navigate(['/inicio']);
      })
      .catch((er) => console.log('no se puede cerrar sesión', er));
  }
 
    // pintando todas las notas de firebase
    getNotes(): void {
      this.noteService.getNotes().subscribe(data =>{
        this.notes = data.map((element: any) => ({
          title: element.payload.doc.data().title,
          description: element.payload.doc.data().description,
          id: element.payload.doc.id 
          })
        );
          console.log(this.notes);
      });
    }

  deleteNote(id: any) {
    this.noteService.deleteNote(id).then((res) =>{
      console.log('Nota eliminada', res);
    }).catch((er) => console.log('No se puede eliminar nota', er));
  }

}
