import { Component, OnInit } from '@angular/core';
import { ConversationComponent } from './conversation/conversation.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
