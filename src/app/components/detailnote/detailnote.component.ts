import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/notes.services/notes.service';

@Component({
  selector: 'app-detailnote',
  templateUrl: './detailnote.component.html',
  styleUrls: ['./detailnote.component.css']
})
export class DetailnoteComponent implements OnInit {
  notes:  any;
  // note: notes;
  id: any;

  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
    this.getNoteDetail()
  //   this.valueDetailNote()
  }

  //  función para traer el valor de cada nota
//  valueDetailNote(){
//   this.noteService.getNote(this.id, this.nota).then((doc:any) => {
//    // console.log(data)
//    if ((doc.exists)) {
//         console.log("Datos del documento", doc.data());
//        } else {
//       console.log("No existe el documento" );
//   }
//   }).catch((err:any) => {
//   console.log("Error al obtener el documento", err);
//   });

// }
getNoteDetail(): void {
    this.noteService.getNote(this.id)
    .subscribe(doc =>{
    if ((doc)) {
              console.log("Datos del documento", doc.data());
             } else {
            console.log("No existe el documento" );
             }
        }), ((err:any) => {
          console.log("Error al obtener el documento", err);
         })
         console.log(this.id);
      }
    
  
}
