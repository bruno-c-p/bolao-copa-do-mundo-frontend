import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogsComponent } from './logs.component';

@NgModule({
  declarations: [LogsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LogsComponent }]),
  ],
})
export class LogsModule {}
