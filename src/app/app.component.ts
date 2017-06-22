import { Component } from '@angular/core';
import { Ng2Cable, Broadcaster } from 'ng2-cable/js/index';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[Ng2Cable, Broadcaster]
})
export class AppComponent {

}
