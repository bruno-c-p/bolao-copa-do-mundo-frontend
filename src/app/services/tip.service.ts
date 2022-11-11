import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const TIPS_RESOURCES = environment.url_api + '/tips';

@Injectable({ providedIn: 'root' })
export class TipService {
  constructor(private httpClient: HttpClient) {}

  insert(data: any) {
    return this.httpClient.post(TIPS_RESOURCES, data);
  }

  getTips(params: any) {
    return this.httpClient.get(TIPS_RESOURCES, { params });
  }
}
