import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  webAuth;

  constructor() {
    this.webAuth = new auth0.WebAuth({
      domain: 'youssef1337.auth0.com',
      clientID: 'JEfDmjaaEellO2Z5yWBMxmzutDmeviTK'
    });
  }

  ngOnInit() {
  }

  // send a magic link using email

  sendMail(email) {
    this.webAuth.passwordlessStart({
      connection: 'email',
      send: 'link',
      email: email
    }, function (error, response) {
      console.log(response);
    });
  }
}
