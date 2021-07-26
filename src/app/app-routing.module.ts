import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NotesComponent } from './components/notes/notes.component';
import { NotesGuard } from './guards/guard.notes/notes.guard';
import { CheckloginGuard } from './guards/guard.checklogin/checklogin.guard';
import { CreatenotesComponent } from './components/createnotes/createnotes.component';
// import { CreatenotesComponent } from './components/createnotes/createnotes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    // canActivate:[CheckloginGuard],
    component: HomeComponent,
  },
  {
    path: 'registrar',
    // canActivate: [AuthGuard],
    canActivateChild: [NotesGuard],
    component: RegisterComponent,
  },
  
  {
    path: 'iniciar-sesion',
    component: LoginComponent,
  },
  {
    path: 'notas',
    canActivate: [NotesGuard],
    component: NotesComponent,
  }, 
  {
    path: 'crear-nota',
    component: CreatenotesComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
