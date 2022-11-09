import { ValidationMessageModule } from './../../components/validation-message/validation-message.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailCodeComponent } from './email-code.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmailCodeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ValidationMessageModule,
    RouterModule.forChild([{ path: '', component: EmailCodeComponent }]),
  ],
})
export class EmailCodeModule {}
