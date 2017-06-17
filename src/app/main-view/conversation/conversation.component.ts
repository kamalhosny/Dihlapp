import { Component, OnInit, EventEmitter, ElementRef } from '@angular/core';
import { FileUploadService } from '../../services/upload/file-upload.service';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes } from 'ngx-uploader';

import { MESSAGES } from './mock-message';
import { Message } from './message.type';
import { MessageService } from '../../services/message.service';
import { LocationComponent } from './location/location.component';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss'],
  providers:[
    MessageService,
    FileUploadService,
    LocationComponent
  ],
})

export class ConversationComponent implements OnInit {
  message: Message;
  messages: Message[];
  showMap: boolean =false;
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;
  tempImg: string;
  attachmentMenu: boolean = true;
  constructor(private messageService: MessageService, private element: ElementRef) {
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
