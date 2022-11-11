import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Match } from 'src/app/models/match';
import { TipEvent } from 'src/app/models/tip-event';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit {
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
