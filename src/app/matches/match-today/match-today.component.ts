import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Match } from 'src/app/models/match';

import { TipEvent } from '../../models/tip-event';

@Component({
  selector: 'app-match-today',
  templateUrl: './match-today.component.html',
  styleUrls: ['./match-today.component.scss'],
})
export class MatchTodayComponent implements OnInit {
  @Input() match!: Match;
  @Output() selectedTip = new EventEmitter<TipEvent>();

  constructor() {}

  ngOnInit(): void {}

  selectTip(tip: TipEvent) {
    this.selectedTip.emit(tip);
  }

  matchFinished(match: Match) {
    return match.result !== 'NOT_PLAYED';
  }
}
