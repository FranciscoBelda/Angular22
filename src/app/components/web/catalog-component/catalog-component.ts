import {Component, computed, inject, signal} from '@angular/core';
import {Product} from '../../../common/interfaces/interfaces';
import {PRODUCTS_MOCK} from '../../../common/mocks/products.mock';
import {ProductCardComponent} from '../product-card-component/product-card-component';
import {CurrencyPipe} from '@angular/common';
import {ProductFilterComponent} from '../product-filter-component/product-filter-component';
import {CartService} from '../../../services/cart-service';
import {CartItem} from '../../../common/interfaces/cart-item';
import {ProductService} from '../../../services/product-service';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  imports: [
    ProductCardComponent,
    CurrencyPipe,
    ProductFilterComponent
  ],
  selector: 'app-catalog-component',
  styleUrl: './catalog-component.scss',
  templateUrl: './catalog-component.html',
})
export class CatalogComponent {
  private readonly productService: ProductService = inject(ProductService);
  private readonly cartService: CartService = inject(CartService);
  products = toSignal(this.productService.getProducts());
  lastViewedProduct = signal<Product | null>(null);
  selectedCount = signal<number>(0);

  readonly isLoading = computed(() => this.products() === undefined);

  searchTerm = signal('');
  categoryTerm = signal('All');

  // Sesión 10. Actualizamos la función para recibir ahora un objeto con producto y cantidad
  reduceStock(selectedProduct: CartItem) {
    this.selectedCount.update(count => count + selectedProduct.quantity);
    /*this.products.update(currentProducts => currentProducts.map(prod => {
      if (prod.id === selectedProduct.product.id && prod.stock > 0 && prod.stock >= selectedProduct.quantity) {
        return {...prod, stock: prod.stock - selectedProduct.quantity};
      }
      return prod;
      })
    )*/
    this.cartService.addProduct(selectedProduct);
  }

  onProductDetails(product: Product) {
    this.lastViewedProduct.set(product);
  }

  filteredProducts = computed(() => {
    const query = this.searchTerm().toLowerCase().trim();
    const cat = this.categoryTerm();
    const result = [...this.products() as Product[]];
    return result.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(query);
        const matchesCategory = cat === 'All' || product.category === cat;

        return matchesSearch && matchesCategory;
      })
  })
}
