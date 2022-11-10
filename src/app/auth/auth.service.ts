import { Router } from '@angular/router';
import { UserLogin } from './../models/user-login';
import { Token } from './../models/token';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserEmailCode } from '../models/user-email-code';
import { UserPassword } from '../models/user-password';

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
    this.httpClient.post<Token>('http://localhost:8080/auth', user).subscribe({
      next: ({ token }: Token) => {
        this.saveToken(token);
        this.router.navigate(['/home', '']);
      },
      error: (error) => {
        this.toastr.error(error.error);
      },
    });
  }

  verifyEmailCode(user: UserEmailCode): void {
    this.httpClient
      .post('http://localhost:8080/auth/activation-code', user)
      .subscribe({
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
      .post('http://localhost:8080/auth/resend-activation-code', user)
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
      .post('http://localhost:8080/auth/email-password-reset', { email })
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

  resetPassword({ password, token }: UserPassword): void {
    this.httpClient
      .patch('http://localhost:8080/users/password-reset', { password, token })
      .subscribe({
        next: () => {
          this.toastr.success('Senha alterada com sucesso!');
          this.router.navigate(['/auth', 'login']);
        },
        error: (error) => {
          console.log({ password, token });

          this.toastr.error('Erro inesperado!');
        },
      });
  }

  getToken() {
    return localStorage.getItem(KEY) ?? '';
  }

  private saveToken(token: string) {
    localStorage.setItem(KEY, token);
  }

  private deleteToken() {
    localStorage.removeItem(KEY);
  }

  hasToken() {
    return !!this.getToken();
  }
}
