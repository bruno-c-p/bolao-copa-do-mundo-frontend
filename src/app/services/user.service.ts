import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRegister } from '../models/user-register';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserPassword } from '../models/user-password';
import { UserRanking } from '../models/user-ranking';
import { User } from '../models/user';

const USER_RESOURCES = environment.url_api + '/users';

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
      .post(USER_RESOURCES, user, { responseType: 'text' })
      .subscribe({
        next: (token) => {
          this.router.navigate(['/auth', 'email-code', token]);
        },
        error: (error) => {
          this.toastr.error(error.error);
        },
      });
  }

  resetPassword({ password, token }: UserPassword): void {
    this.httpClient
      .patch(`${USER_RESOURCES}/password-reset`, { password, token })
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

  verifyEmail(email: string) {
    return this.httpClient.get(`${USER_RESOURCES}/exists/email/${email}`);
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
    return this.httpClient.get(`${USER_RESOURCES}/exists/nickname/${nickname}`);
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

  ranking(params?: any) {
    return this.httpClient.get<UserRanking[]>(`${USER_RESOURCES}/ranking`, {
      params,
    });
  }

  findAll(params?: any) {
    return this.httpClient.get<User[]>(`${USER_RESOURCES}`, {
      params,
    });
  }

  setAdmin(userId: number) {
    return this.httpClient.patch(`${USER_RESOURCES}/${userId}/admin`, {});
  }
}
