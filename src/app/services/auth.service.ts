import { Injectable, } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument,} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { userI } from 'src/assets/user.interface';
import firebase from 'firebase/app';


@Injectable({
  providedIn: 'root',
})

export class AuthService {
 
  constructor(private auth: AngularFireAuth) {
  }

  registerByEmail(user: userI) {
    const { email, password } = user;
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  loginByEmail(user: userI) {
    const { email, password } = user;
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  loginWithGoogle(){
    return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider)
  }

  logout() {
    return this.auth.signOut();
  }

  hasUser(){
    return this.auth.authState;
  }

  // get isLoggedIn(): boolean {
  //   const use= 'string'
  //   const user = JSON.parse(localStorage.getItem('use'));
  //   return (user !== null) ? true : false;
  // }

  // isL(){
  //   return this.auth.authState;
  // }
}


