import { Component } from '@angular/core';
import {Product} from '../../../common/interfaces/interfaces';
import {PRODUCTS_MOCK} from '../../../common/mocks/products.mock';
import {ProductCardComponent} from '../product-card-component/product-card-component';

@Component({
  imports: [
    ProductCardComponent
  ],
  selector: 'app-catalog-component',
  styleUrl: './catalog-component.scss',
  templateUrl: './catalog-component.html',
})
export class CatalogComponent {
  products: Product[] = PRODUCTS_MOCK;

}
