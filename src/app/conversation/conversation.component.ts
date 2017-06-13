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
  messages: Message[];

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