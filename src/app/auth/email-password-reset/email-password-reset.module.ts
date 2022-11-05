import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailPasswordResetComponent } from './email-password-reset.component';

@NgModule({
  declarations: [EmailPasswordResetComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: EmailPasswordResetComponent },
    ]),
  ],
})
export class EmailPasswordResetModule {}
