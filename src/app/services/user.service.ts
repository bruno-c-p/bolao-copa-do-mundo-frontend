import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRegister } from '../models/user-register';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {}

  register(user: UserRegister): void {
    this.httpClient
      .post('http://localhost:8080/users', user, { responseType: 'text' })
      .subscribe({
        next: (token) => {
          this.router.navigate(['/auth', 'email-code', token]);
        },
        error: (error) => {
          this.toastr.error(error.error);
        },
      });
  }

  verifyEmail(email: string) {
    return this.httpClient.get(
      `http://localhost:8080/users/exists/email/${email}`
    );
  }

  emailAlreadyExists() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((email) => this.verifyEmail(email)),
        map((userExists) => (userExists ? { existingUser: true } : null)),
        first()
      );
    };
  }

  verifyNickname(nickname: string) {
    return this.httpClient.get(
      `http://localhost:8080/users/exists/nickname/${nickname}`
    );
  }

  nicknameAlreadyExists() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((nickname) => this.verifyNickname(nickname)),
        map((userExists) => (userExists ? { existingUser: true } : null)),
        first()
      );
    };
  }
}
