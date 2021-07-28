import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.services/auth.service';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NotesGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.auth.hasUser().pipe(
      map((user) => (user === null ? false : true)),
      tap((hasUser) => {
        if (!hasUser) {
          window.alert(
            'Acceso denegado, es necesario iniciar sesión para acceder a esta página.'
          );
          this.router.navigate(['/iniciar-sesion']);
        }
      })
    );
  }
}
//     return this.auth.hasUser().pipe(
//       map(user => {
//         if (!user){
//           window.alert("Acceso denegado, es necesario iniciar sesión para acceder a esta página.");
//           this.router.navigate(['/Iniciarsesion']);
//           return false
//         }
//         return true
//       })
//     )
//   }

// }


    
