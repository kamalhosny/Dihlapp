import { Component } from '@angular/core';
import { Ng2Cable } from 'ng2-cable/js/index';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  constructor(private ng2cable: Ng2Cable) {
  	this.ng2cable.subscribe('http://localhost:3000/cable', 'NotificationChannel' )
  }
  
}
