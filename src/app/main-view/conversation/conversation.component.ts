import { Component, OnInit, EventEmitter, ElementRef } from '@angular/core';
import { FileUploadService } from '../../services/upload/file-upload.service';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes } from 'ngx-uploader';

import { MESSAGES } from './mock-message';
import { Message } from './message.type';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss'],
  providers:[
    MessageService,
    FileUploadService,
  ],
})

export class ConversationComponent implements OnInit {
  messages: Message[];
  showMap: boolean =false;
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;
  tempImg: string;
  constructor(private messageService: MessageService, private element: ElementRef) {

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

  sendMessage(data) {
    this.messageService.postMessage(data)
        .subscribe(messages => this.messages = messages);
  }

  deleteMessage(id) {
    this.messageService.destroyMessage(id)
        .subscribe(messages => this.messages = messages);
  }

  onUploadOutput(output: UploadOutput): void {
    console.log(output);
   
    if (output.type === 'allAddedToQueue') {

    } else if (output.type === 'addedToQueue') {
      this.files.push(output.file); 

    } else if (output.type === 'uploading') {

      const index = this.files.findIndex(file => file.id === output.file.id);
      this.files[index] = output.file;

    } else if (output.type === 'removed') {
        
      this.files = this.files.filter((file: UploadFile) => file !== output.file);

    } else if (output.type === 'dragOver') {
       
      this.dragOver = true;

    } else if (output.type === 'dragOut') { 

      this.dragOver = false;

    } else if (output.type === 'drop') { 

      this.dragOver = false;
    }
  }

  _window(): any {
    return window;
  }

  fakeClick(): void {
    let w = this._window()
    let d = w.document.getElementById('fileSelector').click()
  }
  changeListner(event) {
    var reader = new FileReader();
    var image = this.element.nativeElement.querySelector('.image');

    reader.onload = (e:any) => {
      var src = e.srcElement.result;
      this.tempImg  = src;
    };

    reader.readAsDataURL(event.target.files[0]);
  }
    
  startUpload(): void {  
    const event: UploadInput = {
      type: 'uploadAll',
      url: '/upload',
      method: 'POST',
      data: { foo: 'bar' },
      concurrency: 1 
    }
    
    this.uploadInput.emit(event);
  }
    
  cancelUpload(id: string): void {
    this.uploadInput.emit({ type: 'cancel', id: id });
  }

  ngOnInit() {
    // this.messageService.getMessages().subscribe(messages => this.messages = messages);
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
