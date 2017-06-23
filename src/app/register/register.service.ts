import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSettings } from '../app.constants'

@Injectable()
export class RegisterService {

  constructor(private http: Http) { }

  registerUser(data) {
    console.log(data)
    return this.http.post( AppSettings.API_ENDPOINT + 'users', data)
      .map(res => res.json());
  }
}
