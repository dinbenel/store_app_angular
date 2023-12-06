import { Routes } from '@angular/router';
import { routeNames } from './constants/routeNames';

export const routes: Routes = [
  {
    path: routeNames.home,
    loadComponent: () => import('./pages/home/home.component'),
  },
  {
    path: routeNames.login,
    loadComponent: () => import('./pages/login/login.component'),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
