import {  EventEmitter, Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadOutput, UploadInput, UploadFile, NgUploaderModule } from 'ngx-uploader';

@Component({
  selector: 'app-profileupdate',
  templateUrl: './profileupdate.component.html',
  styleUrls: ['./profileupdate.component.scss']
})
export class ProfileupdateComponent implements OnInit {
    formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;
  constructor(private router: Router) {
  this.files = []; // local uploading files array
  this.uploadInput = new EventEmitter<UploadInput>();
}
  ngOnInit() {
  }
  EditProfile(){
    // httprequest
    alert('Profile updated');
     this.router.navigate(['']);
  }
  onUploadOutput(output: UploadOutput): void {
  console.log(output); // lets output to see what's going on in the console

  if (output.type === 'allAddedToQueue') { // when all files added in queue
    // uncomment this if you want to auto upload files when added
    const event: UploadInput = {
      type: 'uploadAll',
      url: 'http://httpbin.org',
      method: 'POST',
      data: { foo: 'bar' },
      concurrency: 0
    };
    this.uploadInput.emit(event);
  } else if (output.type === 'addedToQueue') {
    this.files.push(output.file); // add file to array when added
  } else if (output.type === 'uploading') {
    // update current data in files array for uploading file
    const index = this.files.findIndex(file => file.id === output.file.id);
    this.files[index] = output.file;
  } else if (output.type === 'removed') {
    // remove file from array when removed
    this.files = this.files.filter((file: UploadFile) => file !== output.file);
  } else if (output.type === 'dragOver') { // drag over event
    this.dragOver = true;
  } else if (output.type === 'dragOut') { // drag out event
    this.dragOver = false;
  } else if (output.type === 'drop') { // on drop event
    this.dragOver = false;
  }
}

startUpload(): void {  // manually start uploading
  const event: UploadInput = {
    type: 'uploadAll',
    url: 'http://httpbin.org',
    method: 'POST',
    data: { foo: 'bar' },
    concurrency: 1 // set sequential uploading of files with concurrency 1
  }

  this.uploadInput.emit(event);
}

cancelUpload(id: string): void {
  this.uploadInput.emit({ type: 'cancel', id: id });
}

}
export interface UploadInput {
  type: 'uploadAll' | 'uploadFile' | 'cancel' | 'cancelAll';
  url?: string;
  method?: string;
  id?: string;
  fieldName?: string;
  fileIndex?: number;
  file?: UploadFile;
  data?: { [key: string]: string | Blob };
  headers?: { [key: string]: string };
  concurrency?: number;
  withCredentials?: boolean;
}
export interface UploadOutput {
  type: 'addedToQueue' | 'allAddedToQueue' | 'uploading' | 'done' | 'removed' | 'start' | 'cancelled' | 'dragOver' | 'dragOut' | 'drop';
  file?: UploadFile;
}
