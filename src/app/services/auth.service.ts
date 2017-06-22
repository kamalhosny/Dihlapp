import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppSettings } from '../app.constants'

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  updateToken(data) {
    return this.http.post(AppSettings.API_ENDPOINT + 'sessions.json', data)
      .map(res => res.json());
  }

  registerUser(data) {
    return this.http.post(AppSettings.API_ENDPOINT + 'users.json', data)
      .map(res => res.json());
  }
}
