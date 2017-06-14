import { Component, OnInit } from '@angular/core';

// import { MESSAGES } from './mock-message';
import { Message } from './message.type';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss'],
  providers:[
    MessageService,
  ]
})

export class ConversationComponent implements OnInit {
  message: Message;
  messages: Message[];
  attachmentMenu: boolean = true;
  showMap: boolean = false;
  constructor(private messageService: MessageService) {
    this.message = {} as Message;

    this.messages=[
      {
        id: 1,
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
        id: 2,
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
        id: 3,
        content: 'How are you?',
        sent: true,
        seen: false,
        timestamp: '11 June',
        user: {
          name: 'Joe',
          avatar: 'https://placeholdit.co//i/50x50'
        }
      }
    ];
  }


  // show attachment small menu
  showAttachmentMenu() {
    if (this.attachmentMenu === true) {
      this.attachmentMenu = false;
    } else {
      this.attachmentMenu = true;
    }
  }

  // handle messages CRUD from the message service
  sendMessage(data) {
    console.log(data);
    this.messageService.postMessage(data)
        .subscribe(messages => this.messages = messages);
  }

  deleteMessage(id) {
    this.messageService.destroyMessage(id)
        .subscribe(messages => this.messages = messages);
  }

  ngOnInit() {
    // this.messageService.getMessages()
    //     .subscribe(messages => this.messages = messages);
  }

}
