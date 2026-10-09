import {Component, computed, input, InputSignal, output, signal, WritableSignal} from '@angular/core';
import {Product} from '../../../common/interfaces/interfaces';
import {CurrencyPipe} from '@angular/common';

@Component({
  imports: [
    CurrencyPipe
  ],
  selector: 'app-product-card-component',
  styleUrl: './product-card-component.scss',
  templateUrl: './product-card-component.html',
})
export class ProductCardComponent {
  product:InputSignal<Product> = input.required();

  stock: WritableSignal<number> = signal<number>(5);
  showAlert: WritableSignal<boolean> = signal<boolean>(false);

  isLowStock = computed(() => this.product().stock > 0 && this.product().stock < 3);

  isOutOfStock = computed(() => this.product().stock === 0);

  addToCart = output<Product>();

  onAddToCart() {
   /* if (this.stock() > 0) this.stock.update(currentStock => currentStock -1);
    if (this.stock() === 0) this.showAlert.set(true);*/
    if (!this.isOutOfStock()){
      this.addToCart.emit(this.product());
    }
  }
}
