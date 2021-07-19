import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CheckloginGuard implements CanActivate {
  
  constructor(private auth: AuthService, private router: Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.auth.hasUser().pipe(
        map((user) => (user !== null ? true : false)),
        tap((hasUser) => {
          if (!hasUser !== true) {
            window.alert(
              'Ya estás registrado, acceso denegado'
            );
            this.router.navigate(['/Notes']);
          }
        })
      );
      }
    }
  
  
