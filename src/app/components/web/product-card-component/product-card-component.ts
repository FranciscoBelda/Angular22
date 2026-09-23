import {Component, input, InputSignal} from '@angular/core';
import {Product} from '../../../common/interfaces/interfaces';
import {CurrencyPipe} from '@angular/common';

@Component({
  imports: [
    CurrencyPipe
  ],
  selector: 'app-product-card-component',
  styleUrl: './product-card-component.scss',
  templateUrl: './product-card-component.html',
})
export class ProductCardComponent {
  product:InputSignal<Product> = input.required();
}
