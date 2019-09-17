import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  router: Router;
  authService: AuthenticationService;

  constructor(authService: AuthenticationService, router: Router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    return new Promise((resolve) => {
        if (!this.authService.user.connected) {
          console.log(this.authService.user.connected);
          this.router.navigate(['/tabs/login']);
          resolve(false);
        }
        resolve(true);
    });
  }
}
