import { environment } from 'src/environments/environment';
import { Log } from './../models/log';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const LOGS_RESOURCES = environment.url_api + '/logs';

@Injectable({
  providedIn: 'root',
})
export class LogsService {
  constructor(private httpClient: HttpClient) {}

  findAll(params?: any) {
    return this.httpClient.get<Log[]>(`${LOGS_RESOURCES}`, {
      params,
    });
  }
}
