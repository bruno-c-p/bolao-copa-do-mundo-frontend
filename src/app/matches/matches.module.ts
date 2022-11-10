import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesComponent } from './matches.component';

@NgModule({
  declarations: [MatchesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MatchesComponent }]),
  ],
})
export class MatchesModule {}
