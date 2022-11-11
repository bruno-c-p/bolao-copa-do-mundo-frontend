import { UserService } from './../services/user.service';
import { UserRanking } from './../models/user-ranking';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
})
export class RankingComponent implements OnInit {
  users!: UserRanking[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.ranking({ limit: 10 }).subscribe((users) => {
      this.users = users;
    });
  }
}
