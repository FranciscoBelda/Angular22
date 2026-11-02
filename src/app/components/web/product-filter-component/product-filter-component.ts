import {Component, model, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  imports: [
    FormsModule
  ],
  selector: 'app-product-filter-component',
  styleUrl: './product-filter-component.scss',
  templateUrl: './product-filter-component.html',
})
export class ProductFilterComponent {
  searchQuery = model<string>('');
  selectedCategory = model<string>('All');
  categories = signal<string[]>(['All', 'electronics', 'home', 'books','clothing']);


}
