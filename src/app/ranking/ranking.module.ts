import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingComponent } from './ranking.component';

@NgModule({
  declarations: [RankingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: RankingComponent }]),
  ],
})
export class RankingModule {}
