import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { NotesService } from 'src/app/notes.services/notes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.component.html',
  styleUrls: ['./createnotes.component.css']
})
export class CreatenotesComponent implements OnInit {
  createNote: FormGroup;
  submitted = false;
  // loading = false;
  id: string | null;
  titulo = 'Agregar nota';

  constructor(
    private fb: FormBuilder,
    private noteService: NotesService,
    private router: Router,
    private aRoute: ActivatedRoute
    ) 
    {
      this.createNote = this.fb.group({
        title: ['', Validators.required],
        description: ['', Validators.required]
      })
      this.id = this.aRoute.snapshot.paramMap.get('id');
      // debugger;
      if(this.id !== null){
        this.titulo= 'Editar nota'
      }
    console.log(this.id)
    }

  ngOnInit(): void {
    this.valueEditNote();
  }
  
  // metodo para agregar nota
  addNote(){
    console.log(this.createNote.value);
    this.submitted = true;
    if(this.createNote.invalid){
      return;
    }
    this.noteService.createNote(this.createNote.value).then((res: any) => {
      console.log('nota agregada con exito', res);
      this.router.navigate(['notas']);
    })
    .catch((er:any) =>{
      console.log('nota no agregada', er);
    })
}

//  función para traer los valores de crear nota a editar nota
valueEditNote(){
  if (this.id !== null) {
    this.noteService.getNoteEdit(this.id).subscribe(data => {
      // console.log(data)
      this.createNote.setValue({
        title: data.payload.data()['title'],
        description: data.payload.data()['description'],
      })
    })
  }
}

// metodo a ejecutar segun la petición, si se crea o edita nota
addEditNote(event:any){
  if(this.id === null){
    this.addNote();
  }else{
    this.editNote(this.id);
  } 
}

// función para editar nota por id
editNote(id: string){
  this.noteService.updateNote(this.id, this.createNote.value).then((res: any) => {
    console.log('nota editada con exito', res);
    this.router.navigate(['notas']);
  })
  .catch((er:any) =>{
    console.log('no se pudo editar la nota', er);
  })
}

}



