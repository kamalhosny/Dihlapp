import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgUploaderModule } from 'ngx-uploader';
import { FormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { HttpModule } from '@angular/http';
import { routes } from './app.routes';
import { EmojiModule } from 'angular2-emoji';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

import { AppComponent } from './app.component';
import { NgUploaderModule } from 'ngx-uploader';
import { LocationComponent } from './location/location.component';
import { AgmCoreModule } from '@agm/core';
import { FormControl } from "@angular/forms";
import { MainViewComponent } from './main-view/main-view.component';
import { UserComponent } from './main-view/user/user.component';
import { ConversationComponent } from './main-view/conversation/conversation.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { ProfileupdateComponent } from './profileupdate/profileupdate.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    UserComponent,
    ConversationComponent,
    AuthComponent,
    RegisterComponent,
    ProfileupdateComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    NgUploaderModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAlGiEgwr_RLe6kpMvMtAWaEyoAjQcQFAE',
      libraries: ["places"]
    }),
    routes,
    EmojiModule,
    NgUploaderModule,
    Ng2FilterPipeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
