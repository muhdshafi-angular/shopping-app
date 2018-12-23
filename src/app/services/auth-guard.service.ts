import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '../../../node_modules/@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }
  // angular will remove subscruber later as we use map
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.user$.pipe(
      map( user => {
          if ( user) {
              return true;
          } else {
              this.router.navigate(['/login'], {queryParams: { returnUrl: state.url}});
          }
      })
    );
  }
}
