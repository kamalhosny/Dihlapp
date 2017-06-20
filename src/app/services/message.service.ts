import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Message } from '../conversation/message.type';
import { MESSAGES } from '../conversation/mock-message';

import 'rxjs/add/operator/map';

@Injectable()  
export class MessageService {

  constructor(private http: Http) { }

  getMessages() {
    return this.http.get('http://jsonplaceholder.typicode.com/posts')
                    .map(res => res.json().data)
  }  

  postMessage(message) {
    return this.http.post('http://jsonplaceholder.typicode.com/posts', message)
                    .map(res => res.json().data)
  }

  destroyMessage(id) {
    return this.http.delete('http://jsonplaceholder.typicode.com/posts/:id')
                    .map(res => res.json().data)
  }
}
