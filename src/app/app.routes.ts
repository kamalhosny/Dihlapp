import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainViewComponent } from './main-view/main-view.component'

const appRoutes: Routes = [
  {
    path: '',
    component: MainViewComponent
  }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);