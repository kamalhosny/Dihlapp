import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterService {

  constructor(private http: Http) { }

  registerUser(data) {
    return this.http.post('URL', data)
      .map(res => res.json());
  }
}
