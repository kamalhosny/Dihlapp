import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.routes';
import { EmojiModule } from 'angular2-emoji';


import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { UserComponent } from './main-view/user/user.component';
import { ConversationComponent } from './main-view/conversation/conversation.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    UserComponent,
    ConversationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    EmojiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
