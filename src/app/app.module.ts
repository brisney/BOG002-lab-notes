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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AuthService } from 'src/app/auth.services/auth.service';
import { NotesComponent } from './components/notes/notes.component';
import { NotesGuard } from './guards/guard.notes/notes.guard';
import { CheckloginGuard } from './guards/guard.checklogin/checklogin.guard';
import { NotesService } from './notes.services/notes.service';
import { CreatenotesComponent } from './components/createnotes/createnotes.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    NotesComponent,
    CreatenotesComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [AuthService, NotesService, NotesGuard, CheckloginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
