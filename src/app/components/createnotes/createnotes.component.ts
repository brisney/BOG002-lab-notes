import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { NotesService } from 'src/app/notes.services/notes.service';
import { Router } from '@angular/router';
import { Notes } from 'src/assets/notes.interface';

@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.component.html',
  styleUrls: ['./createnotes.component.css']
})
export class CreatenotesComponent implements OnInit {
  createNote: FormGroup;
  submitted = false;
  // loading = false;
  // loading = false;
  // id: string | null;
  // message = 'Añadir nota';
  constructor(
    private fb: FormBuilder,
    private noteService: NotesService,
    private router: Router,) 
    {
      this.createNote = this.fb.group({
        title: ['', Validators.required],
        description: ['', Validators.required]
      })
    }

  ngOnInit(): void {
  }
  
  addNote(){
    console.log(this.createNote.value)
    // this.submitted = true;
    // if(this.createNote.invalid){
    //   return;
    // }
    // console.log(this.createNote);
  //   const note: any = {
  //     title: this.createNote.value.title,
  //     description: this.createNote.value.description,
  //     createDate: new Date(),
  //     updateDate: new Date()
  //   }
    this.noteService.createNote(this.createNote.value).then((res: any) => {
      console.log('nota agregada con exito', res);
    })
    .catch((er:any) =>{
      console.log('nota no agregada', er);
    })
  // }
}
}











































































// addEditNote(){
  //   this.submitted = true;
  //   if(this.formNote.invalid){
  //   return;
  //   }
  //   if(this.id === null){
  //     this.addNote();
  //   }else {
  //     this.editNote(this.id);
  //   }
  // }








  //     this.loading = true;
  //     this.noteService.addNote(note).then(() =>{
  //       this.toastr.success('Tu nota ha sido añadida!', 'Listo!');
  //       // console.log('Nota añadida');
  //       this.loading = false;
  //       this.router.navigate(['/notes']);
  //     }).catch(error => {
  //       console.log(error);
  //       this.loading = false;
  //     })
  //   // console.log(note);
  // }

  // editNote(id: string) {
  //   const note: any = {
  //     title: this.createNoteForm.value.title,
  //     description: this.createNoteForm.value.description,
  //     updateDate: new Date()
  //   }
  //   this.loading = true;

  //   this.noteService.updateNote(id, note).then(() => {
  //     // this.loading = false;
  //     this.toastr.info('Tu nota ha sido modificada!', 'Listo!')
  //     this.loading = false;
  //     this.router.navigate(['/notes']);
  //   })
  // }

  // editNotesId(){
  //   this.message = "Editar Nota"
  //   if(this.id !== null){
  //     this.loading = true;
  //     this.noteService.getNoteId(this.id).subscribe(data => {
  //       this.loading = false;
  //       console.log(data.payload.data()['title']);
  //       this.createNoteForm.setValue({
  //         title: data.payload.data()['title'],
  //         description: data.payload.data()['description'],
  //       })
  //     })
  //   }
  // }
  


