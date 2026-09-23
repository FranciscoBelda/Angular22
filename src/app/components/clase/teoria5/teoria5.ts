import { Component } from '@angular/core';
import {PromoBannerComponent} from '../../web/promo-banner-component/promo-banner-component';

@Component({
  imports: [
    PromoBannerComponent
  ],
  selector: 'app-teoria5',
  styleUrl: './teoria5.scss',
  templateUrl: './teoria5.html',
})
export class Teoria5 {

  /*
  Ejercicio 1
  * Vamos a diseñar una zona de notificaciones comerciales de la tienda que
  * reaccione dinámicamente al estado del usuario mediante condicionales anidados nativos.
Instrucciones
Vamos a usar el componente standalone llamado PromoBannerComponent.
* Este componente simulará el estado de la sesión del usuario para mostrar una oferta adaptada.
*

  *
  * */

  /*
  * Ejercicio 2
  * Vamos a iterar colecciones utilizando @for, controlar el caso de una lista sin datos
  * mediante @empty y destacar elementos utilizando variables de contexto de manera inmutable.

* Instrucciones
Crea el componente CategoriesListComponent y define un array de objetos categoría.
* SE debe maquetar el listado usando la rejilla de Bootstrap. Si el array se vacía de
* forma deliberada para pruebas, debe renderizar automáticamente un marcador de posición
* que invite a recargar los datos.

* Paso 1: Define los datos locales
Crea un array llamado categories en tu componente que contenga objetos con
* la estructura { id: number, name: string, active: boolean, icon: string }.

* Paso 2: Genera el bucle con seguimiento estricto
En el HTML, utiliza la estructura @for (cat of categories; track cat.id) para iterar
* y pintar cada categoría en una tarjeta estilizada de Bootstrap.

* Paso 3: Controla el estado vacío
Añade el bloque @empty al final del bucle para pintar un contenedor
* con clase .text-center .p-5 que indique al usuario que no existen categorías disponibles en este momento.

* Paso 4: Aplica estilos mediante variables contextuales
Utiliza la variable implícita $index para mostrar el número de categoría,
* y añade un badge decorativo que diga "¡Última!" únicamente en el elemento
* donde la propiedad $last sea verdadera.

  *
  * */
}
