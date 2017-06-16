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
  showMap: boolean =false;
  constructor(private messageService: MessageService) {
    this.message = {} as Message;

    this.messages=[
      {
        id: 1,
        content: 'Hello there',
        sent: true,
        seen: true,
        timestamp: '3:20 PM',
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
        timestamp: '3:20 PM',
        user: {
          name: 'Kamal',
          avatar: 'https://placeholdit.co//i/50x50'
        }
      },
      {
        id: 3,
        content: 'How are you?',
        sent: true,
        seen: true,
        timestamp: '3:21 PM',
        user: {
          name: 'Joe',
          avatar: 'https://placeholdit.co//i/50x50'
        }
      },
      {
        id: 1,
        content: 'Hello there',
        sent: true,
        seen: true,
        timestamp: '3:21 PM',
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
        timestamp: '3:25 PM',
        user: {
          name: 'Kamal',
          avatar: 'https://placeholdit.co//i/50x50'
        }
      },
      {
        id: 3,
        content: 'How are you?',
        sent: true,
        seen: true,
        timestamp: '3:25 PM',
        user: {
          name: 'Joe',
          avatar: 'https://placeholdit.co//i/50x50'
        }
      },
      {
        id: 1,
        content: 'Hello there',
        sent: true,
        seen: true,
        timestamp: '4:33 PM',
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
        timestamp: '4:33 PM',
        user: {
          name: 'Kamal',
          avatar: 'https://placeholdit.co//i/50x50'
        }
      },
      {
        id: 3,
        content: 'How are you?',
        sent: true,
        seen: true,
        timestamp: '4:35 PM',
        user: {
          name: 'Joe',
          avatar: 'https://placeholdit.co//i/50x50'
        }
      },
      {
        id: 1,
        content: 'Hello there',
        sent: true,
        seen: true,
        timestamp: '5:15 PM',
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
        timestamp: '5:16 PM',
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
        timestamp: '5:18 PM',
        user: {
          name: 'Joe',
          avatar: 'https://placeholdit.co//i/50x50'
        }
      },
    ];
  }

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
// interface Message {
//   id: number;
//   content: string;
//   sent: boolean;
//   seen: boolean;
//   timestamp: string;
//   user: User;
// }
//  interface User {
//    name: string;
//    avatar: string;
//  }
