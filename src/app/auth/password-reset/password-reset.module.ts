import { ValidationMessageModule } from 'src/app/components/validation-message/validation-message.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordResetComponent } from './password-reset.component';

@NgModule({
  declarations: [PasswordResetComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ValidationMessageModule,
    RouterModule.forChild([{ path: '', component: PasswordResetComponent }]),
  ],
})
export class PasswordResetModule {}
