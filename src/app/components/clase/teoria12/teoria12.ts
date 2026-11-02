import {Component, effect, inject, OnInit, Signal} from '@angular/core';
import {TeoriaService} from '../../../services/teoria-service';
import {ProductService} from '../../../services/product-service';
import {toSignal} from '@angular/core/rxjs-interop';
import {ProductCardComponent} from '../../web/product-card-component/product-card-component';
import {Product} from '../../../common/interfaces/interfaces';

@Component({
  imports: [
    ProductCardComponent
  ],
  selector: 'app-teoria12',
  styleUrl: './teoria12.scss',
  templateUrl: './teoria12.html',
})
export class Teoria12 implements OnInit {
  private readonly teoriaService: TeoriaService = inject(TeoriaService);
  private readonly productService: ProductService = inject(ProductService);
  products = toSignal(this.productService.getProducts(),
    {
      initialValue: []
    });

  constructor() {
    effect(() => {
      console.log(this.products());
    });
  }

  ngOnInit() {
    this.loadProducts();
  }

  private loadProducts() {

    // ANTIGUAMENTE...
    this.teoriaService.getDatos().subscribe(
      {
        next: data => {
          console.log(data);
        },
        error: error => {
          console.error(error);
        }
      }
    )
  }


}
