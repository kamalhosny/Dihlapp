import { Component, OnInit, EventEmitter } from '@angular/core';
import { FileUploadService } from '../services/upload/file-upload.service';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes } from 'ngx-uploader';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss'],
  providers: [FileUploadService]

})
export class ConversationComponent implements OnInit {
  messages: message[];
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;

    constructor(private fileUploadService: FileUploadService) {
      this.files = [];
      this.uploadInput = new EventEmitter<UploadInput>();
      this.humanizeBytes = humanizeBytes;
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
  }
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
