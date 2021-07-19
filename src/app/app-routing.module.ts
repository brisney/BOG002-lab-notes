import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NotesComponent } from './components/notes/notes.component';
import { NotesGuard } from './guards/guard.notes/notes.guard';
import { CheckloginGuard } from './guards/guard.checklogin/checklogin.guard';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'Inicio',
    pathMatch: 'full'
  },
  {
    path:'Inicio',

    // canActivate:[CheckloginGuard],
    component: HomeComponent
  },
  {path: 'Registrar',
  // canActivate: [AuthGuard],
  canActivateChild: [NotesGuard],
  component: RegisterComponent

  },
  // {
  //   path:'Registrar',
  //   component: RegisterComponent, children: [
  //     { path: 'Registrar', canActivate:[CheckloginGuard], component: RegisterComponent}
  //     // { path: ':id', canActivate:[AuthGuard], component: ServerComponent }
  //   // canActivate: [CheckloginGuard]   
  //   ]
  // },


  {
    path:'Iniciarsesion',
    component: LoginComponent
  },
  {
  path:'Notes',
  canActivate: [NotesGuard],
    component: NotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
