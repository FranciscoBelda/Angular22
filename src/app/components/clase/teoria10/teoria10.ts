import {Component, EventEmitter, Input, model, Output, WritableSignal} from '@angular/core';
import {Teoria10Hijo} from '../teoria10-hijo/teoria10-hijo';
import {
  QuantityStepperParentComponent
} from '../../web/quantity-stepper-parent-component/quantity-stepper-parent-component';

@Component({
  imports: [
    Teoria10Hijo,
    QuantityStepperParentComponent
  ],
  selector: 'app-teoria10',
  styleUrl: './teoria10.scss',
  templateUrl: './teoria10.html',
})
export class Teoria10 {

  updateQuantity(event: number) {
    console.log(event);
  }
  updateModernQuantity(event: number) {
    console.log(event);
  }

  /* PRÁCTICAS
  *
  * Práctica I: Filtro de Búsqueda y Categoría con model()
Vamos a crear un componente de barra de herramientas reutilizable que controle la búsqueda y la categoría
* seleccionada en el catálogo mediante model().
Instrucciones para el alumno
Crea ProductFilterComponent en src/app/components/product-filter/.
Declara dos señales de modelo:
searchQuery = model<string>('')
selectedCategory = model<string>('Todas')
Incluye un input de texto para la búsqueda y un selector HTML (<select>) de Bootstrap para las categorías.
* Utiliza el evento (input) o (change) para actualizar las señales con .set().
En el padre (ProductListComponent), conecta el filtro mediante [(searchQuery)] y [(selectedCategory)] a dos
* señales locales, y filtra dinámicamente la lista de productos usando una señal derivada computed().

  *
  * PRÁCTICA 2
  *
  * Práctica II: Selector de Unidades en la Tarjeta de Producto
Vamos a integrar el componente QuantityStepperComponent en la tarjeta de producto para permitir al usuario
*  seleccionar cuántas unidades desea añadir antes de pulsar el botón de compra.
Instrucciones para el alumno
Crea el componente QuantityStepperComponent con quantity = model<number>(1) y un límite máximo basado en
* una input() opcional maxStock.
Integre el QuantityStepperComponent dentro de ProductCardComponent usando [(quantity)]="selectedQuantity".
Al hacer clic en "Añadir al Carrito", emite el producto junto con la cantidad seleccionada.

  * */
}
