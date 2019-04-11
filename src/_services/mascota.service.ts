import { API_URL } from '../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Mascota } from '../_models';

@Injectable()
export class MascotaService {
  URL = `${API_URL}mascota/`;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Mascota[]>(`${this.URL}list/`);
  }

}
