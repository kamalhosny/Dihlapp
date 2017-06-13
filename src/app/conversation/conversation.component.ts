import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../services/upload/file-upload.service';

import { FileUploader } from 'ng2-file-upload';


@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss'],
  providers: [FileUploadService]

})
export class ConversationComponent implements OnInit {
  messages: message[];
    constructor(private fileUploadService: FileUploadService) {
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
      ];


     }


  ngOnInit() {
  }
  
  public uploader:FileUploader = new FileUploader({url:'http://localhost:3001/upload'});

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
