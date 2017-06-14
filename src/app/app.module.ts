import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ConversationComponent } from './conversation/conversation.component';
import { NgUploaderModule } from 'ngx-uploader';




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ConversationComponent,
    NgUploaderModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
