import { Component, OnInit, EventEmitter, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgForm} from '@angular/forms';
// import { FileUploadService } from '../../services/upload/file-upload.service';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes } from 'ngx-uploader';

import { MESSAGES } from './mock-message';
import { Message } from './message.type';
import { MessageService } from '../../services/message.service';
import { LocationComponent } from './location/location.component';
import { AgmCoreModule } from '@agm/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss'],
  providers:[
    MessageService,
    // FileUploadService,
    LocationComponent,
    AuthService
  ],
})

export class ConversationComponent implements OnInit {
  message: Message;
  messages: Message[];
  messageData: any = {};
  // updateTokenData: any = {};
  showMap: boolean =false;
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;
  tempImg: string;
  attachmentMenu: boolean = true;

  constructor(private messageService: MessageService,
              private element: ElementRef,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) {

    if (location.hash) {
      let token = location.hash.substring(1).split('&').filter(function(s) { return s.startsWith('access_token') })[0].split('=')[1]
      localStorage.setItem('token', token);
    }

    this.message = {} as Message;
    this.messageData.message = {};
    this.messages = [
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


  // show attachment small menu
  showAttachmentMenu() {
    if (this.attachmentMenu === true) {
      this.attachmentMenu = false;
    } else {
      this.attachmentMenu = true;
    }
  }

  // handle messages CRUD from the message service
  sendMessage() {

    // get conversation id
    // this.route.params.subscribe(params => {
    //   this.messageData.conversation_id = params['conversation_id'];
    // })

    let coords = JSON.parse(localStorage.getItem('coords'));
    this.messageData.message.location_attributes = coords;

    this.messageService.postMessage(this.messageData)
        .subscribe(message => {
          localStorage.removeItem('coords');
        });
  }

  // deleteMessage(id) {
  //   this.messageService.destroyMessage(id)
  //       .subscribe(messages => this.messages = messages);
  // }

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
