import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LogsComponent } from './logs.component';

@NgModule({
  declarations: [LogsComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: LogsComponent }]),
  ],
})
export class LogsModule {}
