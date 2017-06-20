import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from './register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [ RegisterService ]
})
export class RegisterComponent implements OnInit {
  user: any = {};
  registerData: any = {};
  private sub: any;

  constructor(private router: Router, private route: ActivatedRoute, private registerService: RegisterService) {
    this.registerData.token=location.hash.substring(1).split('&').filter(function(s) { return s.startsWith('access_token') })[0].split('=')[1]

  }
  addUser(){
    this.registerService.registerUser(this.registerData).subscribe(user => {
      this.user = user;
    })
  }
  ngOnInit() {
    // this.sub = this.route.queryParams.subscribe(params => {
    //   // console.log(params);
    //   // this.registerData.token = params['access_token'];
    // });

  }
}
