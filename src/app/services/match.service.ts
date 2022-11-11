import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { Match } from '../models/match';

const MATCH_RESOURCES = environment.url_api + '/matches';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  constructor(private httpClient: HttpClient, private toastr: ToastrService) {}

  findAll(params?: any) {
    return this.httpClient.get<Match[]>(MATCH_RESOURCES, { params });
  }
}
