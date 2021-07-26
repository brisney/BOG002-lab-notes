import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NotesService } from 'src/app/notes.services/notes.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  notes: any[] = [];

  constructor(
    private auth: AuthService,
    private router: Router,
    private noteService: NotesService
  ) {}

    //inicializando el formulario para guardar las notas
  // notesForm = new FormGroup({
  //   title: new FormControl('', Validators.required),
  //   description: new FormControl('', Validators.required),
  // });

  ngOnInit(): void {
    this.getNotes();
  }
    
  logout() {
    this.auth
      .logout()
      .then((res) => {
        console.log('sesión cerrada', res);
        this.router.navigate(['/Inicio']);
      })
      .catch((er) => console.log('no se puede cerrar sesión', er));
  }
 
    // cargando todos los estudiantes de firebase
    getNotes(){
      this.noteService.getNotes().subscribe(resp =>{
        this.notes = resp.map((e: any) => ({
          title: e.payload.doc.data().title,
          description: e.payload.doc.data().description,
          idFirebase: e.payload.doc.id 
          })
        );
          console.log(this.notes);
      });
    }


  deleteNotes(id: any) {
    this.noteService.deleteNote(id).then((res) =>{
      console.log('Nota eliminada', res);
    }).catch((er) => console.log('No se puede eliminar nota', er));
  }

  }

