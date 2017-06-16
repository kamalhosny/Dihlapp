import { Component, OnInit } from '@angular/core';
import { DropdownModule } from 'ng2-dropdown';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  name: string;
  isOnline: boolean;
  avatar: string;
  contacts: contact[];
  contactFilter: any = { name: '' };

  constructor() {
    this.contacts = [
      {
        name: 'Kamoola',
        isOnline: true,
        avatar: 'https://placeholdit.co//i/50x50',
        lastMessage: 'ay 7aga',
        lastMessageDate: '11 June',
        isTyping:true
      },
      {
        name: 'Pakinam',
        isOnline: false,
        avatar: 'https://placeholdit.co//i/50x50',
        lastMessage: 'Bas ba2a',
        lastMessageDate: '11 June',
        isTyping:false
      },
      {
        name: 'Hossam',
        isOnline: false,
        avatar: 'https://placeholdit.co//i/50x50',
        lastMessage: 'I give up!',
        lastMessageDate: '11 June',
        isTyping:false
      },
      {
        name: 'Joe',
        isOnline: true,
        avatar: 'https://placeholdit.co//i/50x50',
        lastMessage: 'yo yo, matensish el spaces',
        lastMessageDate: '11 June',
        isTyping:false
      },
      {
        name: 'Mahmoud',
        isOnline: true,
        avatar: 'https://placeholdit.co//i/50x50',
        lastMessage: 'howa fih seya7 fe alb el makan?',
        lastMessageDate: '11 June',
        isTyping:false
      },
      {
        name: 'Karim',
        isOnline: true,
        avatar: 'https://placeholdit.co//i/50x50',
        lastMessage: 'Fuck you guys!',
        lastMessageDate: '11 June',
        isTyping:false
      },
      {
        name: 'Kamoola',
        isOnline: true,
        avatar: 'https://placeholdit.co//i/50x50',
        lastMessage: 'ay 7aga',
        lastMessageDate: '11 June',
        isTyping:true
      },
      {
        name: 'Pakinam',
        isOnline: false,
        avatar: 'https://placeholdit.co//i/50x50',
        lastMessage: 'Bas ba2a',
        lastMessageDate: '11 June',
        isTyping:false
      },
      {
        name: 'Hossam',
        isOnline: false,
        avatar: 'https://placeholdit.co//i/50x50',
        lastMessage: 'I give up!',
        lastMessageDate: '11 June',
        isTyping:false
      },
      {
        name: 'Joe',
        isOnline: true,
        avatar: 'https://placeholdit.co//i/50x50',
        lastMessage: 'yo yo, matensish el spaces',
        lastMessageDate: '11 June',
        isTyping:false
      },
      {
        name: 'Mahmoud',
        isOnline: true,
        avatar: 'https://placeholdit.co//i/50x50',
        lastMessage: 'howa fih seya7 fe alb el makan?',
        lastMessageDate: '11 June',
        isTyping:false
      },
      {
        name: 'Karim',
        isOnline: true,
        avatar: 'https://placeholdit.co//i/50x50',
        lastMessage: 'Fuck you guys!',
        lastMessageDate: '11 June',
        isTyping:false
      },
      {
        name: 'Kamoola',
        isOnline: true,
        avatar: 'https://placeholdit.co//i/50x50',
        lastMessage: 'ay 7aga',
        lastMessageDate: '11 June',
        isTyping:true
      },
      {
        name: 'Pakinam',
        isOnline: false,
        avatar: 'https://placeholdit.co//i/50x50',
        lastMessage: 'Bas ba2a',
        lastMessageDate: '11 June',
        isTyping:false
      },
      {
        name: 'Hossam',
        isOnline: false,
        avatar: 'https://placeholdit.co//i/50x50',
        lastMessage: 'I give up!',
        lastMessageDate: '11 June',
        isTyping:false
      },
      {
        name: 'Joe',
        isOnline: true,
        avatar: 'https://placeholdit.co//i/50x50',
        lastMessage: 'yo yo, matensish el spaces',
        lastMessageDate: '11 June',
        isTyping:false
      },
      {
        name: 'Mahmoud',
        isOnline: true,
        avatar: 'https://placeholdit.co//i/50x50',
        lastMessage: 'howa fih seya7 fe alb el makan?',
        lastMessageDate: '11 June',
        isTyping:false
      },
      {
        name: 'Karim',
        isOnline: true,
        avatar: 'https://placeholdit.co//i/50x50',
        lastMessage: 'Fuck you guys!',
        lastMessageDate: '11 June',
        isTyping:false
      },
      {
        name: 'Kamoola',
        isOnline: true,
        avatar: 'https://placeholdit.co//i/50x50',
        lastMessage: 'ay 7aga',
        lastMessageDate: '11 June',
        isTyping:true
      },
      {
        name: 'Pakinam',
        isOnline: false,
        avatar: 'https://placeholdit.co//i/50x50',
        lastMessage: 'Bas ba2a',
        lastMessageDate: '11 June',
        isTyping:false
      },
      {
        name: 'Hossam',
        isOnline: false,
        avatar: 'https://placeholdit.co//i/50x50',
        lastMessage: 'I give up!',
        lastMessageDate: '11 June',
        isTyping:false
      },
      {
        name: 'Joe',
        isOnline: true,
        avatar: 'https://placeholdit.co//i/50x50',
        lastMessage: 'yo yo, matensish el spaces',
        lastMessageDate: '11 June',
        isTyping:false
      },
      {
        name: 'Mahmoud',
        isOnline: true,
        avatar: 'https://placeholdit.co//i/50x50',
        lastMessage: 'howa fih seya7 fe alb el makan?',
        lastMessageDate: '11 June',
        isTyping:false
      },
      {
        name: 'Karim',
        isOnline: true,
        avatar: 'https://placeholdit.co//i/50x50',
        lastMessage: 'Fuck you guys!',
        lastMessageDate: '11 June',
        isTyping:false
      }
    ]
   }

  ngOnInit() {
  }

}
interface contact {
  name: string;
  isOnline: boolean;
  avatar: string;
  lastMessage: string;
  lastMessageDate: string;
  isTyping:boolean;
}
