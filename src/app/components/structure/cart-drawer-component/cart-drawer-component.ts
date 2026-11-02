import {Component, inject, input, output} from '@angular/core';
import {CartService} from '../../../services/cart-service';
import {CurrencyPipe} from '@angular/common';

@Component({
  imports: [
    CurrencyPipe
  ],
  selector: 'app-cart-drawer-component',
  styleUrl: './cart-drawer-component.scss',
  templateUrl: './cart-drawer-component.html',
})
export class CartDrawerComponent {
  isOpen = input<boolean>(false);
  closeDrawer = output<void> ();

  protected readonly cartService: CartService = inject(CartService);


  onRemove(id: number) {
    this.cartService.removeItem(id);
  }

  onDecrement(id: number, quantity: number) {
    this.cartService.updateQuantity(id, quantity -1);
  }

  onIncrement(id: number, quantity: number) {
    this.cartService.updateQuantity(id, quantity + 1);
  }

  onCheckout() {
    alert('Compra realizada! Total: '+this.cartService.totalPrice()+'€');
    this.cartService.clearCart();
    this.closeDrawer.emit();
  }
}
