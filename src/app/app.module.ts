import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { HttpModule } from '@angular/http';
import { routes } from './app.routes';
import { EmojiModule } from 'angular2-emoji';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';


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
    JsonpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAlGiEgwr_RLe6kpMvMtAWaEyoAjQcQFAE',
      libraries: ["places"]
    }),
    routes,
    EmojiModule,
    Ng2FilterPipeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
