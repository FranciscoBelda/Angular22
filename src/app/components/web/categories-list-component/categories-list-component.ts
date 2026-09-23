import { Component } from '@angular/core';
import {Category} from '../../../common/interfaces/interfaces';

@Component({
  imports: [],
  selector: 'app-categories-list-component',
  styleUrl: './categories-list-component.scss',
  templateUrl: './categories-list-component.html',
})
export class CategoriesListComponent {
  categories: Category[] = [
    {
      id: 1,
      name: 'electronic',
      active: true,
      icon: 'electronic',
    },   {
      id: 2,
      name: 'clothing',
      active: true,
      icon: 'clothing',
    },   {
      id: 1,
      name: 'books',
      active: true,
      icon: 'books',
    },   {
      id: 1,
      name: 'home',
      active: true,
      icon: 'home',
    },
  ];
  categoriesShow = [...this.categories];

  eliminarCat(index: number) {
    this.categoriesShow.splice(index, 1);
  }

  refreshCats() {
    this.categoriesShow = [...this.categories];
  }
}
