import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgUploaderModule } from 'ngx-uploader';
import { FormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { HttpModule } from '@angular/http';
import { routes } from './app.routes';
import { EmojiModule } from 'angular2-emoji';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { DropdownModule } from 'ng2-dropdown';
import { AppComponent } from './app.component';
import { LocationComponent } from './main-view/conversation/location/location.component';
import { AgmCoreModule } from '@agm/core';
import { FormControl } from "@angular/forms";
import { MainViewComponent } from './main-view/main-view.component';
import { UserComponent } from './main-view/user/user.component';
import { ConversationComponent } from './main-view/conversation/conversation.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { ProfileupdateComponent } from './profileupdate/profileupdate.component';
import { RightbarComponent } from './main-view/rightbar/rightbar.component';
import { Ng2Cable, Broadcaster } from 'ng2-cable/js/index';


@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    UserComponent,
    ConversationComponent,
    AuthComponent,
    RegisterComponent,
    ProfileupdateComponent,
    LocationComponent,
    RightbarComponent

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
    DropdownModule,
    NgUploaderModule,
    Ng2FilterPipeModule
  ],
  providers: [
    Ng2Cable,
    Broadcaster
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
