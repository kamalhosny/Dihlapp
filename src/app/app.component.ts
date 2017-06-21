import { Component } from '@angular/core';
import { Ng2Cable, Broadcaster } from 'ng2-cable/js/index';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[Ng2Cable, Broadcaster]
})
export class AppComponent {
  constructor(private ng2cable: Ng2Cable,
              private broadcaster: Broadcaster) {
    this.ng2cable.subscribe('http://example.com/cable', 'ChatChannel');
    //By default event name is 'channel name'. But you can pass from backend field { action: 'MyEventName'}

    this.broadcaster.on<string>('ChatChannel').subscribe(
      message => {
        console.log(message);
      }
    );
  }
}
