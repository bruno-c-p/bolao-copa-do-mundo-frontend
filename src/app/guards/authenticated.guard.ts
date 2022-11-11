import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Jwt } from '../models/jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.isAuthenticated();
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.isAuthenticated();
  }

  private isAuthenticated(): boolean {
    if (this.authService.isAutheticated()) {
      return true;
    }

    this.router.navigate(['/auth', 'login']);

    return false;
  }
}
