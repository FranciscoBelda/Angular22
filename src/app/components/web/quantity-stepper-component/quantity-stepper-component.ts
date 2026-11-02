import {Component, input, model} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-quantity-stepper-component',
  styleUrl: './quantity-stepper-component.scss',
  templateUrl: './quantity-stepper-component.html',
})
export class QuantityStepperComponent {
  value = model<number>(0);
  quantity = model<number>(1);
  maxStock = input(Infinity);

  decrement() {
    if (this.quantity() > 1) this.quantity.update(val => val - 1);
  }
  increment() {
    this.quantity.update(val => val + 1);
  }
}
