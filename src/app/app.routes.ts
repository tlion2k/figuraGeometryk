import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    // carga perezosa: la página se descarga al visitarla
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    // la ruta vacía lleva a home
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
