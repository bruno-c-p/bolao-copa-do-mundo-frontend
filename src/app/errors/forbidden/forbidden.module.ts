import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForbiddenComponent } from './forbidden.component';

@NgModule({
  declarations: [ForbiddenComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ForbiddenComponent,
      },
    ]),
  ],
})
export class ForbiddenModule {}
