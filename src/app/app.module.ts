import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { HttpModule, JsonpModule } from '@angular/http';
import {Ng2EmojifyModule} from 'ng2-emojify';
=======
import { HttpModule } from '@angular/http';
import { routes } from './app.routes';
import { EmojiModule } from 'angular2-emoji';

>>>>>>> develop

import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { AgmCoreModule } from '@agm/core';
import { FormControl } from "@angular/forms";

import { MainViewComponent } from './main-view/main-view.component';
import { UserComponent } from './main-view/user/user.component';
import { ConversationComponent } from './main-view/conversation/conversation.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    UserComponent,
    ConversationComponent,
    AuthComponent,
    RegisterComponent,
    LocationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
<<<<<<< HEAD
    JsonpModule,
    Ng2EmojifyModule
=======
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAlGiEgwr_RLe6kpMvMtAWaEyoAjQcQFAE',
      libraries: ["places"]
    }),
    routes,
    EmojiModule
>>>>>>> develop
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
