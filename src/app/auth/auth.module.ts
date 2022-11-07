import { ValidationMessageModule } from './../components/validation-message/validation-message.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./login/login.module').then((module) => module.LoginModule),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./register/register.module').then(
            (module) => module.RegisterModule
          ),
      },
      {
        path: 'email-code',
        loadChildren: () =>
          import('./email-code/email-code.module').then(
            (module) => module.EmailCodeModule
          ),
      },
      {
        path: 'email-password-reset',
        loadChildren: () =>
          import('./email-password-reset/email-password-reset.module').then(
            (module) => module.EmailPasswordResetModule
          ),
      },
      {
        path: 'password-reset',
        loadChildren: () =>
          import('./password-reset/password-reset.module').then(
            (module) => module.PasswordResetModule
          ),
      },
    ]),
  ],
})
export class AuthModule {}
