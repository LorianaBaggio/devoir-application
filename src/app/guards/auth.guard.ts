import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map, tap} from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()

export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {
    return this.auth.user$
    .pipe(
      take(1),
      map(user => user ? true : false),
      tap(IsLoggedIn => {
          if(!IsLoggedIn) {
            this.router.navigate(['/login']);
            return false;
          }
          return true;
      })
    )
  }
  
}
