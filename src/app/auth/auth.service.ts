import { Router } from '@angular/router';
import { UserLogin } from './../models/user-login';
import { Token } from './../models/token';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserEmailCode } from '../models/user-email-code';
import { environment } from 'src/environments/environment';
import jwtDecode from 'jwt-decode';
import { Jwt } from '../models/jwt';

const AUTH_RESOURCES = environment.url_api + '/auth';
const KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) {}

  authenticate(user: UserLogin): void {
    this.httpClient.post<Token>(AUTH_RESOURCES, user).subscribe({
      next: ({ token }: Token) => {
        this.saveToken(token);
        this.router.navigate(['/matches']);
      },
      error: (error) => {
        this.toastr.error(error.error);
      },
    });
  }

  verifyEmailCode(user: UserEmailCode): void {
    this.httpClient.post(`${AUTH_RESOURCES}/activation-code`, user).subscribe({
      next: () => {
        this.toastr.success('Email verificado com sucesso!');
        this.router.navigate(['/auth', 'login']);
      },
      error: (error) => {
        this.toastr.error(error.error);
      },
    });
  }

  resendEmailCode(user: UserEmailCode): void {
    this.httpClient
      .post(`${AUTH_RESOURCES}/resend-activation-code`, user)
      .subscribe({
        next: () => {
          this.toastr.success('Email enviado com sucesso!');
        },
        error: (error) => {
          this.toastr.error('Erro inesperado!');
        },
      });
  }

  sendPasswordResetLink(email: string): void {
    this.httpClient
      .post(`${AUTH_RESOURCES}/email-password-reset`, { email })
      .subscribe({
        next: () => {
          this.toastr.success('Email enviado com sucesso!');
          this.router.navigate(['/auth', 'login']);
        },
        error: (error) => {
          this.toastr.error('Email não encontrado!');
        },
      });
  }

  getToken() {
    return localStorage.getItem(KEY) ?? '';
  }

  private saveToken(token: string) {
    localStorage.setItem(KEY, token);
  }

  public deleteToken() {
    localStorage.removeItem(KEY);
  }

  getJwt() {
    return jwtDecode(this.getToken()) as Jwt;
  }

  hasToken() {
    return !!this.getToken();
  }

  isAutheticated(): boolean {
    let data: Jwt;
    try {
      data = jwtDecode(this.getToken()) as Jwt;
    } catch (error) {
      return false;
    }

    if (!!data && !(Date.now() >= data.exp * 1000)) {
      return true;
    }

    return false;
  }
}
