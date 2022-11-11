import { ToastrService } from 'ngx-toastr';
import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/models/match';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  matches!: Match[];

  constructor(
    private matchService: MatchService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.matchService.findAll().subscribe((matches) => {
      this.matches = matches;
    });
  }

  setResult({ id, result }: Match) {
    this.matchService.changeMatchResult(result, id).subscribe(() => {
      this.toastr.success('Resultado alterado com sucesso!');
    });
  }
}
