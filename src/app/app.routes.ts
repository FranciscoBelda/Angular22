import { Routes } from '@angular/router';
import {MainComponent} from './components/web/main-component/main-component';
import {Teoria4} from './components/clase/teoria-4/teoria-4';
import {Teoria5} from './components/clase/teoria5/teoria5';
import {CategoriesListComponent} from './components/web/categories-list-component/categories-list-component';
import {CatalogComponent} from './components/web/catalog-component/catalog-component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: MainComponent
  },
  {
    path: 'clase/teoria4',
    component: Teoria4
  },
  {
    path: 'clase/teoria5',
    component: Teoria5
  },
  {
    path: 'categories-list',
    component: CategoriesListComponent
  },
  {
    path: 'catalog',
    component: CatalogComponent
  }
];
