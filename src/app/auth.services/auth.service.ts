import { Injectable, } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
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

}


