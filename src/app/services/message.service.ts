import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Message } from '../main-view/conversation/message.type';
import { MESSAGES } from '../main-view/conversation/mock-message';
import { AppSettings } from '../app.constants'

import 'rxjs/add/operator/map';

@Injectable()
export class MessageService {

  constructor(private http: Http) { }

  getConversations() {
    return this.http.get(AppSettings.API_ENDPOINT + 'conversations')
                    .map(res => res.json().data)
  }

  getMessages(id) {
    return this.http.get(AppSettings.API_ENDPOINT + 'conversations/'+id)
                    .map(res => res.json().data)
  }

  postMessage(message) {
    return this.http.post(AppSettings.API_ENDPOINT + 'messages', message)
                    .map(res => res.json().data)
  }

  // destroyMessage(id) {
  //   return this.http.delete('http://jsonplaceholder.typicode.com/posts/:id')
  //                   .map(res => res.json().data)
  // }
}
