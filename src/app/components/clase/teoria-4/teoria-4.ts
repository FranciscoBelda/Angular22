import {Component, OnInit} from '@angular/core';
import {User} from '../../../common/interfaces/interfaces';
import {CartItem} from '../../../common/interfaces/cart-item';

@Component({
  imports: [],
  selector: 'app-teoria-4',
  styleUrl: './teoria-4.scss',
  templateUrl: './teoria-4.html',
})
export class Teoria4 implements OnInit {
  miArray = [1,2,3];


  ngOnInit(): void {
    this.ejemplo();
  }

  ejemplo(){
    this.miArray.push(2);
    console.log(this.miArray);
  }

  ejemplo2(){
    const cart = [{id:1, qty:1}];
    cart[0].qty = 2;

    const updatedCart = cart.map(item =>
      item.id === 1 ? {...item, qty: 2} : item);
  }

  ejemplo3(){
    const user: User = {
      id: '1',
      email: 'a@a.com',
      role: 'admin',
      name: 'Pepe'
    }

  const {name, email} = user;
    console.log(name, email);


  const updatedUser = {...user, role: 'guest'};

  console.log(updatedUser);
}

ejemploArrays(){
    // map: Transformar los elementos de un array
    // filter: Filtrar los elementos de un array que cumplan una condicion
    // reduce: Acumulador del contenido del array

  const miArray = [1,2,3];
  const array2 = miArray.map(item => item +1);
  console.log('map',array2);

  console.log('filter',miArray.filter(item => item >2));

  console.log('reduce', miArray.reduce((acu, b) => acu + b, 0));

}

ejemploObjetos(){
    const original = {title: 'Camiseta', price: 20};
    const copia = original; // MAL

    copia.price = 25;

  console.log(original.price);

  const original2 = {title: 'Camiseta', price: 20};
  const copiaSegura = {...original2}; // BIEN
  copiaSegura.price = 50;
  console.log(original2);

/*Ej1
* Vamos a aplicar map y filter para procesar una lista de productos simulando las necesidades de un buscador
* o un panel de rebajas.
Partiendo de un array de productos mock (que use la interfaz Product de la sesión anterior),
* implementa las siguientes funciones utilizando funciones flecha fuertemente tipadas:
Paso 1: Filtra por categoría
Crea una función llamada filterProductsByCategory(products: Product[], category: CategoryType): Product[]
* que devuelva únicamente los productos de la categoría seleccionada.
Paso 2: Aplica un descuento global
Crea una función llamada applyDiscount(products: Product[], percentage: number): Product[]
* que reduzca el precio de todos los productos en el porcentaje indicado, sin modificar los objetos originales.
Paso 3: Encadena las operaciones
Crea una rutina que obtenga los productos de la categoría 'electronics' y les aplique un 10% de descuento
* en una sola línea de ejecución.

*
* Ej2
* Vamos a resolver el problema clásico de calcular totales e impuestos de un carrito de compras
* utilizando reduce de forma inmutable.
Ejercicio
Utilizando la interfaz CartItem creada en la sesión anterior, escribe un conjunto de
* funciones auxiliares que simulen las operaciones críticas que meteremos en nuestro servicio de carrito
* en el Bloque 2:
Calcular el total de productos añadidos (la suma de las cantidades)
Calcular el importe total de la compra (precio * cantidad de cada ítem)
Simular la adición de un producto al carrito de forma inmutable

* */

  const calculateTotalItems = (cart: CartItem[]): number => {
    return  cart.reduce((acu, item) => acu + item.quantity,0);
  }

  const calculateTotalPrice = (cart: CartItem[]) :number => {
    return cart.reduce((acu, item) => acu + (item.product.price * item.quantity),0);
  }

  const addToCartInmutable = (cart: CartItem[],newItem: CartItem):CartItem[] => {
    // Si no existe, lo añado
    // Si existe, aumento la cantidad
    const exists = cart.find(item => item.product.id === newItem.product.id);
    if (exists) {
      return cart.map(item => {
        if(item.product.id === newItem.product.id){
          return {...item,quantity: item.quantity + newItem.quantity};
        }else{
          return item;
        }
      })
    }else return [...cart, newItem];
  }
}





}
