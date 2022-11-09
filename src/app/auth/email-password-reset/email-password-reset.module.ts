import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailPasswordResetComponent } from './email-password-reset.component';
import { FormsModule } from '@angular/forms';
import { ValidationMessageModule } from 'src/app/components/validation-message/validation-message.module';

@NgModule({
  declarations: [EmailPasswordResetComponent],
  imports: [
    CommonModule,
    FormsModule,
    ValidationMessageModule,
    RouterModule.forChild([
      { path: '', component: EmailPasswordResetComponent },
    ]),
  ],
})
export class EmailPasswordResetModule {}
