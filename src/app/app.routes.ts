import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainViewComponent } from './main-view/main-view.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { ProfileupdateComponent } from './profileupdate/profileupdate.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainViewComponent
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
    // needs to update this route ont the website, too.
    path: 'updateprofile',
    component: ProfileupdateComponent
  }

]

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
