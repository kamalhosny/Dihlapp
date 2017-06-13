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
  filesToUpload: Array<File>;

    constructor(private fileUploadService: FileUploadService) {
      this.filesToUpload = [];
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
 upload() {
      this.makeFileRequest("http://localhost:3000/upload", [], this.filesToUpload).then((result) => {
        console.log(result);
      }, (error) => {
        console.error(error);
      });
    }
  fileChangeEvent(fileInput: any){
      this.filesToUpload = <Array<File>> fileInput.target.files;
    }
  makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
    return new Promise((resolve, reject) => {
        var formData: any = new FormData();
        var xhr = new XMLHttpRequest();
        for(var i = 0; i < files.length; i++) {
            formData.append("uploads[]", files[i], files[i].name);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    resolve(JSON.parse(xhr.response));
                } else {
                    reject(xhr.response);
                }
            }
        }
        xhr.open("POST", url, true);
        xhr.send(formData);
      });
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
