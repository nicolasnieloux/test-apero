import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', loadComponent: () => import('./sweet-home/sweet-home.component').then(mod => mod.SweetHomeComponent)},
];
