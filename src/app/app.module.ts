import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {Ng2EmojifyModule} from 'ng2-emojify';

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
    JsonpModule,
    Ng2EmojifyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
