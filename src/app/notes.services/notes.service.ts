import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Notes } from 'src/assets/notes.interface';


@Injectable({
  providedIn: 'root'
})
export class NotesService {
 
  constructor(private firestore: AngularFirestore,) { 
  
  }

  
    // Metodo para listar todos las notas
   
   getNotes(): Observable<any> {
    return this.firestore.collection("Notes", ref => ref.orderBy('creationDate','asc')).snapshotChanges();
  }

  // metodo para obtener el id de cada nota
  getNote(id: any): Observable<any> {
    return this.firestore.collection('Notes').doc(id).snapshotChanges();
  }
  
    // crea una nota en firebase
    // parametro note nota a crear
  createNote(note:any): Promise<any>{
    return this.firestore.collection("Notas").add(note);
  }
  
    // actualiza una nota existente en firebase
    // parametro id id de la coleccion en firebase
    // parametro note nota a actualizar
   updateNote(id:any, data:any): Promise<any>{
    return this.firestore.collection("notes").doc(id).update(data);
  }

    // borrar una nota existente en firebase
    // parametro id id de la coleccion en firebase
  deleteNote(id:any): Promise<any>{
    return this.firestore.collection("notes").doc(id).delete();

  }

}
