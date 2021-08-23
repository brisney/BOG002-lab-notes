import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import firebase  from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class NotesService {
collectionName = "Notes"


  constructor(private firestore: AngularFirestore,) { 
  }

   // crea una nota en firebase
    // parametro note nota a crear
    createNote(note: any): Promise<any>{
      return this.firestore.collection(this.collectionName).add({...note, createAt: firebase.firestore.Timestamp.now()
      })
    }
  
    // Metodo para listar todas las notas
   getNotes(): Observable<any> {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  // metodo para obtener solo una Nota y poder pintarla
  getNote(id: string): Observable<any>{
    return this.firestore.collection(this.collectionName).doc(id).valueChanges();
  }
  // getNote(id: string):  Observable<any>{
  //   return this.firestore.collection(this.collectionName).doc(id).get();
  // }

   // borrar una nota existente en firebase
    // parametro id id de la coleccion en firebase
    deleteNote(id:string): Promise<any>{
      return this.firestore.collection(this.collectionName).doc(id).delete();
  
    }
  
  // metodo para obtener el id de cada nota
  getNoteEdit(id: string): Observable<any> {
    return this.firestore.collection(this.collectionName).doc(id).snapshotChanges();
  }

    // actualiza una nota existente en firebase
   updateNote(id: any, nota: any): Promise<any>{
    return this.firestore.collection(this.collectionName).doc(id).update(nota);
  }
}
