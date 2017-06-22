import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [ AuthService ]
})
export class RegisterComponent implements OnInit {
  user: any = {};
  registerData: any = {};
  private sub: any;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) {
    this.registerData.token = localStorage.getItem('token');
    this.registerData.email = localStorage.getItem('email');
  }


  ngOnInit() {
    // this.sub = this.route.queryParams.subscribe(params => {
    //   // console.log(params);
    //   // this.registerData.token = params['access_token'];
    // });

  }

  registerUser() {
    this.authService.registerUser(this.registerData).subscribe(user => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.router.navigate(['']);
    })
  }
}
