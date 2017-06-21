import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainViewComponent } from './main-view/main-view.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { ProfileupdateComponent } from './profileupdate/profileupdate.component';
import { ConversationComponent } from './main-view/conversation/conversation.component';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  { path: '', component: ConversationComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'sign_in', component: AuthComponent },
  { path: 'conversation/:id', component: ConversationComponent, canActivate: [AuthGuard] },

    // needs to update this route ont the website, too.
  { path: 'updateprofile', component: ProfileupdateComponent, canActivate: [AuthGuard] }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
