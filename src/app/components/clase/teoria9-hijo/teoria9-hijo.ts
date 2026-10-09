import {booleanAttribute, Component, computed, input, output} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-teoria9-hijo',
  styleUrl: './teoria9-hijo.scss',
  templateUrl: './teoria9-hijo.html',
})
export class Teoria9Hijo {
  productName = input<string>('Producto genérico'); // OPCIONAL
  price = input.required<number>(); // OBLIGATORIO
  productId = input.required<number>();

  disabled = input(false, {transform: booleanAttribute});

  priceWithTaxes = computed(() => this.price() * 1.21);

  onAddToCart = output<number>();

  addToCart(productId: number) {
    this.onAddToCart.emit(productId);
  }

}
