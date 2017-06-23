import { Injectable } from '@angular/core';
import { Router, CanActivate, CanDeactivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  // ignore this file, I made a mistake and this code doesn't work.
  
  updateTokenData: any = {};

  constructor(private router: Router,
              private authService: AuthService) {
    this.updateTokenData.email = localStorage.getItem('email');
    this.updateTokenData.token = localStorage.getItem('token');
  }

  canActivate() {

    if (!localStorage.getItem('currentUser') && localStorage.getItem('token')) {
      this.authService.updateToken(this.updateTokenData).subscribe(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
      }, error => {
        this.router.navigate(['register']);
      })
    } 

    if (localStorage.getItem('currentUser')) {
        return true;
    } else {    
        this.router.navigate(['/sign_in']);
        return false;
    }
  }
}
