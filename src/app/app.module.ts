import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';


import { AuthService } from 'src/app/services/auth.service';
import { NotesComponent } from './components/notes/notes.component';
import { NotesGuard } from './guards/guard.notes/notes.guard';
import { CheckloginGuard } from './guards/guard.checklogin/checklogin.guard';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    NotesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule
  
  ],
  providers: [AuthService, NotesGuard, CheckloginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
