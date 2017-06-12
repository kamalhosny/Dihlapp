import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {
  messages: message[];
    constructor() {
      this.messages = [
        {
          content: 'Hello there',
          sent: true,
          seen: true,
          timestamp: '11 June',
          user: {
            name: 'Joe',
            avatar: 'https://placeholdit.co//i/50x50'
          }
        },
        {
          content: 'salamo 3aleko',
          sent: false,
          seen: false,
          timestamp: '11 June',
          user: {
            name: 'Kamal',
            avatar: 'https://placeholdit.co//i/50x50'
          }
        },
        {
          content: 'How are you?',
          sent: true,
          seen: false,
          timestamp: '11 June',
          user: {
            name: 'Joe',
            avatar: 'https://placeholdit.co//i/50x50'
          }
        },
      ]

     }

  ngOnInit() {
  }

}
interface message{
  content: string;
  sent: boolean;
  seen: boolean;
  timestamp: string;
  user: user;
}
interface user{
  name:string;
  avatar:string;
}
