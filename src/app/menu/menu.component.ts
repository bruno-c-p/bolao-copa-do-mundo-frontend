import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Jwt } from '../models/jwt';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  jwt!: Jwt;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.jwt = this.authService.getJwt();
  }

  userIsAdmin() {
    const roles = this.jwt.roles.split(',');

    return roles.includes('ROLE_ADMIN');
  }

  logout() {
    this.authService.deleteToken();
    this.router.navigate(['/auth', 'login']);
  }
}
