import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EmojiModule } from 'angular2-emoji';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ConversationComponent } from './conversation/conversation.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ConversationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    EmojiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
