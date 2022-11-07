import { UserLogin } from './../models/user-login';
import { Token } from './../models/token';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

const KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient, private toastr: ToastrService) {}

  authenticate(user: UserLogin): void {
    this.httpClient.post<Token>('http://localhost:8080/auth', user).subscribe({
      next: ({ token }: Token) => {
        this.saveToken(token);
      },
      error: (error) => {
        this.toastr.error(error.error);
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
