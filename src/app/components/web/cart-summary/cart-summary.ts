import {Component, computed, effect, signal} from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Component({
  imports: [
    CurrencyPipe
  ],
  selector: 'app-cart-summary',
  styleUrl: './cart-summary.scss',
  templateUrl: './cart-summary.html',
})
export class CartSummary {
  itemsCount = signal(1);
  unitPrice = signal(50);
  couponDiscount = signal(10);

  // COMPUTED
  rawSubtotal = computed(() => this.itemsCount() *this.unitPrice());
  discountAmount = computed(() => this.rawSubtotal() * this.couponDiscount() / 100 );
  taxAmount = computed(() => (this.rawSubtotal() - this.discountAmount()) * 0.21);
  grandTotal = computed(() => this.rawSubtotal() - this.discountAmount() + this.taxAmount());

  loaded = signal(false);

    constructor() {
      effect(() => {
        console.log('Grand Total: ', this.grandTotal());
        console.log('ItemsCount: ', this.itemsCount());
        let cartState;
        if (this.loaded()) {
          cartState = {
            items: this.itemsCount(),
            price: this.unitPrice(),
            discount: this.couponDiscount(),
            total: this.grandTotal()
          }
        }else {
          cartState = JSON.parse(localStorage.getItem('digishop_cart') as string);
          this.loaded.set(true);
          this.itemsCount.set(cartState.items);
          this.unitPrice.set(cartState.price);
          this.couponDiscount.set(cartState.discount);
        }

        console.log(cartState);

        localStorage.setItem('digishop_cart', JSON.stringify(cartState));
        console.log('Carrito guardado correctamente!');
      });
    }

  incrementItems() {
    this.itemsCount.update(val => val +1);
  }


  applySpecialCoupon() {
    this.couponDiscount.set(25);
  }
}
