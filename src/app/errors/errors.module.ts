import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '404',
        loadChildren: () =>
          import('./not-found/not-found.module').then((m) => m.NotFoundModule),
      },
      {
        path: '403',
        loadChildren: () =>
          import('./forbidden/forbidden.module').then((m) => m.ForbiddenModule),
      },
    ]),
  ],
})
export class ErrorsModule {}
