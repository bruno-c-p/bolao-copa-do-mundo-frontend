import { LogsService } from './../../services/logs.service';
import { Component, OnInit } from '@angular/core';
import { Log } from 'src/app/models/log';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss'],
})
export class LogsComponent implements OnInit {
  allLogs!: Log[];
  datepicker!: string;

  constructor(private logService: LogsService) {}

  ngOnInit(): void {
    this.logService.findAll().subscribe((logs) => {
      this.allLogs = logs;
    });
  }

  getLogsByDate() {
    this.logService
      .findAll({
        date: new Date(this.datepicker).toISOString().split('T')[0],
      })
      .subscribe((logs) => {
        this.allLogs = logs;
      });
  }
}
