import {Component, effect, signal, WritableSignal} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-teoria7',
  styleUrl: './teoria7.scss',
  templateUrl: './teoria7.html',
})
export class Teoria7 {
  contador:WritableSignal<number> = signal<number>(0);
  miContador:number = 0;
  contadorProtected = this.contador.asReadonly();

  usuario: WritableSignal<Usuario> = signal<Usuario>({nombre: 'Pepe',edad: 33});

  constructor() {
    effect(() => {
      console.log('El usuario ha cambiado: ', this.usuario());
    });

    setInterval(() => {
      this.miContador++;
      //this.contador.update(val => val +1);
    })
  }

  ejemplo(){
    console.log('Signal: ',this.contador);
    console.log('Contenido de la Signal: ',this.contador());

    this.contador.set(8);
    this.miContador = 8;
    console.log('Contenido de la Signal después del set: ',this.contador());

    this.contador.update(num => num *2);
    this.miContador *= 2;
    console.log('Contenido de la Signal después del update: ',this.contador());

    this.contador.update(num => num *2);
    console.log('Contenido de la Signal después del update: ',this.contador());

  }

  ejemplo2() {
    this.miContador ++;
  }
  ejemplo3() {
    this.contador.update(num => num +1);
  }

  cambiarUsuario() {
    const usuarioActual = this.usuario();
    usuarioActual.nombre = 'Luís';
    // MAL
  }

  cambiarUsuarioOK() {
    this.usuario.update(usu => ({
      ...usu,
      nombre: 'Luís',
      edad: 37
    }))
    // FORMA CORRECTA
  }

  // EJERCICIO
  /*
  * Vamos a aplicar el mét odo .set() y .update() para manejar estados primitivos en un componente interactivo.
Instrucciones
En el componente ProductCardComponent que diseñaste en el Workshop anterior, vamos a implementar un control dinámico
*  de stock para el botón de compra.
Declara una señal llamada stock inicializada en 5.
Declara otra señal booleana llamada showAlert inicializada en false.
Modifica la plantilla HTML para que el botón de "Añadir al carrito" disminuya el stock en 1 cada vez que se pulse,
*  utilizando .update().
Si el stock llega a 0, el botón debe deshabilitarse automáticamente y la señal showAlert debe pasar a true mediante
*  .set(), mostrando un mensaje de advertencia estilizado con Bootstrap.

  * */


  /*EJERCICIO 2
  *
  * Utilizar .update() combinado con el operador spread (...) de TypeScript para modificar de forma segura
  * un objeto complejo dentro de una Signal.
Instrucciones
Crea un componente standalone temporal de administración en src/app/components/user-profile.component para
* simular la edición de los datos de envío del comprador utilizando una Signal de tipo objeto.
Define la interfaz UserProfile con name, city y isPremium.
Instancia una señal mutable user que contenga los datos iniciales de un cliente de Valencia.
Crea un botón "Cambiar de Ciudad" que utilice .update() para actualizar la propiedad city a 'Madrid' de
* forma inmutable, manteniendo el resto de propiedades intactas.
Crea otro botón para alternar el estado de isPremium (de true a false y viceversa) usando .update().

  *
  * */
}
interface Usuario {
  nombre: string;
  edad: number;
}
