import { TipModule } from './tip/tip.module';
import { FormsModule } from '@angular/forms';
import { MatchModule } from './match/match.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesComponent } from './matches.component';
import { MatchTodayModule } from './match-today/match-today.module';

@NgModule({
  declarations: [MatchesComponent],
  imports: [
    CommonModule,
    MatchTodayModule,
    MatchModule,
    FormsModule,
    TipModule,
    RouterModule.forChild([{ path: '', component: MatchesComponent }]),
  ],
})
export class MatchesModule {}
