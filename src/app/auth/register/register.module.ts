import { ValidationMessageModule } from './../../components/validation-message/validation-message.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ValidationMessageModule,
    RouterModule.forChild([{ path: '', component: RegisterComponent }]),
  ],
})
export class RegisterModule {}
