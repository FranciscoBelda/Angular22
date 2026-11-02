import {Component, computed, inject, signal} from '@angular/core';
import {rxResource} from '@angular/core/rxjs-interop';
import {ProductService} from '../../../services/product-service';
import {CurrencyPipe} from '@angular/common';

@Component({
  imports: [
    CurrencyPipe
  ],
  selector: 'app-product-detail-component',
  styleUrl: './product-detail-component.scss',
  templateUrl: './product-detail-component.html',
})
export class ProductDetailComponent {
  productId = signal(1);
  private readonly productService: ProductService = inject(ProductService);
  /*product =
    toSignal(this.productService.getProductById(this.productId()),{initialValue: undefined});*/

  readonly isLoading = computed(() => this.productResource.value() === undefined);
  readonly hasError = computed(() => this.productResource.value() === null);

  // rxResource se re-ejecuta automáticamente cada vez que productId cambia
  readonly productResource = rxResource({
    params: () => this.productId(),
    stream: ({ params: id }) =>
      this.productService.getProductById(id)
  });

  testError(){
    this.productId.set(999);
  }



}
