import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.routes';
import { EmojiModule } from 'angular2-emoji';


import { AppComponent } from './app.component';
<<<<<<< HEAD
import { UserComponent } from './user/user.component';
import { ConversationComponent } from './conversation/conversation.component';
import { LocationComponent } from './location/location.component';
import { AgmCoreModule } from '@agm/core';
import { FormControl } from "@angular/forms";

=======
import { MainViewComponent } from './main-view/main-view.component';
import { UserComponent } from './main-view/user/user.component';
import { ConversationComponent } from './main-view/conversation/conversation.component';
>>>>>>> 1616d8087ac64934bb4256e6d67c070f6ce50b84

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    UserComponent,
    ConversationComponent,
    LocationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
<<<<<<< HEAD
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAlGiEgwr_RLe6kpMvMtAWaEyoAjQcQFAE',
      libraries: ["places"]
    }),
=======
    routes,
    EmojiModule
>>>>>>> 1616d8087ac64934bb4256e6d67c070f6ce50b84
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
