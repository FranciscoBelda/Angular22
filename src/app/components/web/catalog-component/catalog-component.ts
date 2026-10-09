import {Component, signal} from '@angular/core';
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
  products = signal<Product[]>(PRODUCTS_MOCK);

  reduceStock(selectedProduct: Product) {
    this.products.update(currentProducts => currentProducts.map(prod => {
      if (prod.id === selectedProduct.id && prod.stock > 0){
        return {...prod, stock: prod.stock -1};
      }
      return prod;
      })
    )
  }
}
