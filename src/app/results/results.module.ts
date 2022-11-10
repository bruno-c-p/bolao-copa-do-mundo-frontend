import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results.component';

@NgModule({
  declarations: [ResultsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ResultsComponent }]),
  ],
})
export class ResultsModule {}
