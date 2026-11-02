import { Routes } from '@angular/router';
import {MainComponent} from './components/web/main-component/main-component';
import {Teoria4} from './components/clase/teoria-4/teoria-4';
import {Teoria5} from './components/clase/teoria5/teoria5';
import {CategoriesListComponent} from './components/web/categories-list-component/categories-list-component';
import {CatalogComponent} from './components/web/catalog-component/catalog-component';
import {Teoria7} from './components/clase/teoria7/teoria7';
import {UserProfileComponent} from './components/web/user-profile-component/user-profile-component';
import {Teoria8} from './components/clase/teoria8/teoria8';
import {CartSummary} from './components/web/cart-summary/cart-summary';
import {Teoria9} from './components/clase/teoria9/teoria9';
import {Teoria10} from './components/clase/teoria10/teoria10';
import {Teoria11} from './components/clase/teoria11/teoria11';
import {Teoria12} from './components/clase/teoria12/teoria12';
import {ProductDetailComponent} from './components/web/product-detail-component/product-detail-component';

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
    path: 'clase/teoria7',
    component: Teoria7
  },
  {
    path: 'clase/teoria8',
    component: Teoria8
  },
  {
    path: 'clase/teoria9',
    component: Teoria9
  },
  {
    path: 'clase/teoria10',
    component: Teoria10
  },
  {
    path: 'clase/teoria11',
    component: Teoria11
  },
  {
    path: 'clase/teoria12',
    component: Teoria12
  },
  {
    path: 'categories-list',
    component: CategoriesListComponent
  },
  {
    path: 'product-detail',
    component: ProductDetailComponent
  },
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: 'user-profile',
    component: UserProfileComponent
  },
  {
    path: 'cart-summary',
    component: CartSummary
  }
];
