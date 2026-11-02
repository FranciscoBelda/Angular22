import {Component, EventEmitter, Input, model, Output} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-teoria10-hijo',
  styleUrl: './teoria10-hijo.scss',
  templateUrl: './teoria10-hijo.html',
})
export class Teoria10Hijo {
  // ANTES
  @Input() quantity: number = 1;
  @Output() quantityChange = new EventEmitter<number>();

  quantityModern = model<number>(1);

  modifyQuantity(newQuantity: number) {
    this.quantityChange.emit(newQuantity);

    this.quantityModern.update(q => q+newQuantity);
  }
}
