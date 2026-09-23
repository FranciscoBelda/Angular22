import {Product} from './interfaces';

/*
* Crea la interfaz CartItem. Un ítem de carrito no es solo un producto;
* es un producto asociado a una cantidad seleccionada por el usuario.

* */
export interface CartItem {
  quantity: number;
  product: Product;
}
/*
* Crea la interfaz Order (Pedido) que consolide la compra del usuario,
* utilizando las interfaces previas y tipos específicos para el método de pago.
* */
export type PaymentMethod = 'credit_card' | 'paypal' | 'bank_transfer';

export interface Order {
  orderId: string;
  items: CartItem[];
  totalAmount: number;
  createdAt: Date;
  paymentMethod: PaymentMethod;
}
