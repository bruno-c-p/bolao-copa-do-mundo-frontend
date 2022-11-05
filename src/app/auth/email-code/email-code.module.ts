import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailCodeComponent } from './email-code.component';

@NgModule({
  declarations: [EmailCodeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: EmailCodeComponent }]),
  ],
})
export class EmailCodeModule {}
