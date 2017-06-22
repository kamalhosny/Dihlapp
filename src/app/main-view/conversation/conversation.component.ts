import { Component, ElementRef, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UploadFile, UploadInput, UploadOutput, humanizeBytes } from 'ngx-uploader';
import { AgmCoreModule } from '@agm/core';
import { Broadcaster, Ng2Cable } from 'ng2-cable/js/index';


import { MESSAGES } from './mock-message';
import { Message } from './message.type';
import { MessageService } from '../../services/message.service';
import { LocationComponent } from './location/location.component';
// import { FileUploadService } from '../../services/upload/file-upload.service';
// @importPlaceholder@
@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss'],
  providers:[
    MessageService,
    Ng2Cable,
    Broadcaster,
    // FileUploadService,
    LocationComponent
  ],
})

export class ConversationComponent implements OnInit {
  message: Message;
  messages: Message[];
  conversation_id: number;
  messageData: any = {};
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
              public ng2cable: Ng2Cable,
              public broadcaster: Broadcaster)
  {
      // this.ng2cable.subscribe('ws://localhost:3000/cable', 'ChatChannel');
      // By default event name is 'channel name'. But you can pass from backend field { action: 'MyEventName'}
  this.messageData.message = {};
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
    this.route.params.subscribe(params => {
      this.messageData.conversation_id = params['id'];
    })
    this.messageData.users = [{id: 2}];
    // this.messageData.conversation_id=this.route.params.value;

    let coords = JSON.parse(localStorage.getItem('coords'));
    this.messageData.message.location_attributes = coords;
    console.log(this.messageData)
    this.messageService.postMessage(this.messageData)
        .subscribe(message => {
          console.log(message);
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
    this.route.params.subscribe(params => {
      this.conversation_id = params['id'];
    })
    this.messageService.getMessages(this.conversation_id).subscribe(messages => {
      this.messages = messages
      // this.ng2cable.subscribe('ws://localhost:3000/cable', 'ChatChannel');
      // this.broadcaster.on<string>('ChatChannel').subscribe(
      //   message => {
      //     console.log(message);
      //   }
      // );
      console.log(messages)
    })
  }

}
