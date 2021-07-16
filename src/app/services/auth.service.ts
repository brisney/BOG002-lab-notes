import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument,} from '@angular/fire/firestore';
import { observable } from 'rxjs';
import { userI } from 'src/assets/user.interface';


@Injectable({
  providedIn: 'root',
})

export class AuthService {
  userState: any = null;

  constructor(private auth: AngularFireAuth) {
    this.auth.authState.subscribe((auth) => {
      this.userState = auth;
    });
  }

  registerByEmail(user: userI) {
    const { email, password } = user;
    return this.auth.createUserWithEmailAndPassword(email, password);
  }


  loginByEmail(user: userI) {
    const { email, password } = user;
    return this.auth.signInWithEmailAndPassword(email, password);
  }


  logout() {
    this.auth.signOut();
  }
}


