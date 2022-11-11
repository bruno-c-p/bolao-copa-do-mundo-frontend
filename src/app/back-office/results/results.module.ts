import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ResultsComponent } from './results.component';

@NgModule({
  declarations: [ResultsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastrModule,
    RouterModule.forChild([{ path: '', component: ResultsComponent }]),
  ],
})
export class ResultsModule {}
