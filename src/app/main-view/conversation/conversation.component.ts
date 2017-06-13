import { Component, OnInit } from '@angular/core';

import { MESSAGES } from './mock-message';
import { Message } from './message.type';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})

export class ConversationComponent implements OnInit {
<<<<<<< HEAD:src/app/conversation/conversation.component.ts
  messages: Message[];
=======
  messages: message[];
  showMap: boolean =false;
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
>>>>>>> develop:src/app/main-view/conversation/conversation.component.ts

  constructor(private messageService: MessageService) {  }

  sendMessage(data) {
    this.messageService.postMessage(data)
        .subscribe(messages => this.messages = messages);
  }

  deleteMessage(id) {
    this.messageService.destroyMessage(id)
        .subscribe(messages => this.messages = messages);
  }

  ngOnInit() {
    this.messageService.getMessages()
        .subscribe(messages => this.messages = messages);    
  }

}