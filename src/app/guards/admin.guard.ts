import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.userIsAdmin();
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.userIsAdmin();
  }

  private userIsAdmin(): boolean {
    const jwt = this.authService.getJwt();

    const roles = jwt.roles.split(',');

    if (roles.includes('ROLE_ADMIN')) {
      return true;
    }

    this.router.navigate(['/']);

    return false;
  }
}
