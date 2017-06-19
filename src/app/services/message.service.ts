import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Message } from '../main-view/conversation/message.type';
import { MESSAGES } from '../main-view/conversation/mock-message';

import 'rxjs/add/operator/map';

@Injectable()
export class MessageService {

  public apiUrl = 'http://localhost:3000';

  constructor(private http: Http) { }

  getMessages(conversation) {
    return this.http.get(`${this.apiUrl}/conversations/${conversation}`)
                    .map(res => res.json().data)
  }

  postMessage(message) {
    return this.http.post(`${this.apiUrl}/messages`, message)
                    .map(res => res.json().data)
  }

  destroyMessage(id) {
    return this.http.delete('http://jsonplaceholder.typicode.com/posts/:id')
                    .map(res => res.json().data)
  }
}
