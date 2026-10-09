import {Component, computed, effect, signal} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-teoria8',
  styleUrl: './teoria8.scss',
  templateUrl: './teoria8.html',
})
export class Teoria8 {
  price = signal(100);
  quantity = signal(1);
  miQuantity = 1;

  subtotal = computed(() => this.price() * this.quantity());

  addPrice(){
    this.price.update(val => val +20);
  }
  addQuantity(){
    this.quantity.update(val => val +1);
    this.miQuantity++;
  }

  constructor() {
    effect(() => {
      console.log('Quantity: ', this.quantity());
    });
  }

  // EJERCICIOS
  /*
  * Crea un componente standalone en src/app/components/cart-summary/ que gestione el desglose financiero
  * de un pedido:
Declara tres señales mutables:
itemsCount: número de productos en el carrito (signal(1)).
unitPrice: precio base de cada unidad (signal(50)).
couponDiscount: porcentaje de descuento aplicable (signal(10)).
Construye tres señales derivadas con computed():
rawSubtotal: multiplicación de itemsCount por unitPrice.
discountAmount: cálculo del descuento aplicado sobre el rawSubtotal.
taxAmount: IVA del 21% aplicado sobre la base con descuento.
grandTotal: importe final a pagar (rawSubtotal - discountAmount + taxAmount).
*
Maqueta una tarjeta resumen de Bootstrap que muestre todos los importes dinámicamente y botones para
*  incrementar productos o cambiar el cupón de descuento.

*
*
* EJERCICIO 2
*
* En el mismo CartSummaryComponent, añade un constructor (constructor()).
Implementa un effect() que escuche los cambios de la señal grandTotal() o itemsCount().
Cada vez que cambie alguna de estas señales, guarda un objeto JSON en el localStorage con la
* clave 'digishop_cart'. (localStorage.setItem('digishop_cart', JSON.stringify(cartState));)
Añade un mensaje en la consola del navegador dentro del efecto para verificar que solo se dispara
* cuando los datos realmente cambian.

  * */


}
