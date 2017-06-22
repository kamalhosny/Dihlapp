import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainViewComponent } from './main-view/main-view.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { ProfileupdateComponent } from './profileupdate/profileupdate.component';
import { ConversationComponent } from './main-view/conversation/conversation.component'

const appRoutes: Routes = [
  {
    path: '',
    component: ConversationComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'sign_in',
    component: AuthComponent
  },
  {
    path: 'conversation/:id',
    component: ConversationComponent
  },
  {
    // needs to update this route ont the website, too.
    path: 'updateprofile',
    component: ProfileupdateComponent
  }

]

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
