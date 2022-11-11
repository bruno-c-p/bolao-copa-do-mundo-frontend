import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BackOfficeComponent } from './back-office.component';

@NgModule({
  declarations: [BackOfficeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BackOfficeComponent,
        children: [
          {
            path: '',
            redirectTo: 'logs',
            pathMatch: 'full',
          },
          {
            path: 'admin',
            loadChildren: () =>
              import('./admin/admin.module').then((m) => m.AdminModule),
          },
          {
            path: 'logs',
            loadChildren: () =>
              import('./logs/logs.module').then((m) => m.LogsModule),
          },
          {
            path: 'results',
            loadChildren: () =>
              import('./results/results.module').then((m) => m.ResultsModule),
          },
        ],
      },
    ]),
  ],
})
export class BackOfficeModule {}
