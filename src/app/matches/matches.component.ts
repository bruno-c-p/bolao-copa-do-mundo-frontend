import { Component, OnInit } from '@angular/core';

import { Match } from '../models/match';
import { MatchService } from './../services/match.service';
import { TipEvent } from '../models/tip-event';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
})
export class MatchesComponent implements OnInit {
  allMatches!: Match[];
  matchesToday!: Match[];
  datepicker!: string;
  selectedTip!: TipEvent;

  constructor(private matchService: MatchService) {}

  ngOnInit(): void {
    this.matchService
      .findAll({
        date: new Date().toISOString().split('T')[0],
      })
      .subscribe((matches) => {
        this.matchesToday = matches;
      });

    this.matchService.findAll().subscribe((matches) => {
      this.allMatches = matches;
    });
  }

  getMatchesByDate() {
    this.matchService
      .findAll({ date: new Date(this.datepicker).toISOString().split('T')[0] })
      .subscribe((matches) => {
        this.allMatches = matches;
      });
  }

  onSelectedTip(event: TipEvent) {
    this.selectedTip = event;
  }
}
