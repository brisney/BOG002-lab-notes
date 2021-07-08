import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'Inicio',
    pathMatch: 'full'
  },
  {
    path:'Inicio',
    component: HomeComponent
  },
  {
    path:'Registrar',
    component: RegisterComponent
  },
  {
    path:'Iniciarsesion',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
