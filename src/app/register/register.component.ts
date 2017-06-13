import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {
  user: any = {};
  registerData: any = {};
  private sub: any;

  constructor(private route: ActivatedRoute, private registerService: RegisterService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.registerData.token = params['access_token'];
    });

    this.registerService.registerUser(this.registerData).subscribe(user => {
      this.user = user;
    })
  }


}
