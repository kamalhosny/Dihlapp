import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainViewComponent } from './main-view/main-view.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';

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
  }

]

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);