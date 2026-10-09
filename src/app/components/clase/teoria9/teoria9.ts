import { Component } from '@angular/core';
import {Teoria9Hijo} from '../teoria9-hijo/teoria9-hijo';

@Component({
  imports: [
    Teoria9Hijo
  ],
  selector: 'app-teoria9',
  styleUrl: './teoria9.scss',
  templateUrl: './teoria9.html',
})
export class Teoria9 {
  onAddToCart(event: any) {
    console.log(event);
  }

  /* EJERCICIOS
  *
  * Vamos a convertir la tarjeta de producto de "DigiShop" para que reciba sus datos desde una lista del
  * componente padre usando señales de entrada estrictas.
Instrucciones para el alumno
Asegurate de tener la interfaz Product en src/app/models/product.model.ts (id, title, price, stock, category).
En ProductCardComponent, sustituye cualquier propiedad local por una
* entrada requerida: product = input.required<Product>().
Crea una señal derivada
isLowStock = computed(() => this.product().stock < 3) para mostrar una
* etiqueta de "Últimas unidades" en la tarjeta.
En el componente padre ProductListComponent, define un array de productos
* en una signal() y renderízalos pasándoles la entrada obligatoria.

  *
  *
  * EJERCICIO 2
  *
  * Vamos a notificar al componente padre cuando el usuario hace clic en "Añadir al Carrito" o "Ver Detalle",
  * pasando la información necesaria sin mutar el estado en el hijo.
Instrucciones para el alumno
En ProductCardComponent, declara un output funcional: addToCart = output<Product>().
Añade un botón en la plantilla que invoque un
* método onSelectProduct() el cual disparará this.addToCart.emit(this.product()).
En el componente padre ProductListComponent, escucha el evento en la plantilla con
* la sintaxis habitual de binding (addToCart)="handleAddToCart($event)".
El padre deberá actualizar su propio contador global de productos seleccionados en el carrito usando .update().

  * */
}
