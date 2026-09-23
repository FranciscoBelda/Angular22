import {Component, OnInit} from '@angular/core';
import {CategoryType, Product} from '../../../common/interfaces/interfaces';

@Component({
  imports: [],
  selector: 'app-ejercicios-sesion4',
  styleUrl: './ejercicios-sesion4.scss',
  templateUrl: './ejercicios-sesion4.html',
})
export class EjerciciosSesion4 implements OnInit {
  products: Product[] = [
    {
      id: '0',
      title: 'Camiseta',
      price: 5,
      description: 'Camiseta guapa',
      category: 'clothing',
      imageUrl: 'imageCamiseta.jpg',
      rating: {
        count: 1,
        rate: 5
      }
    },
    {
      id: '1',
      title: 'Radio',
      price: 15,
      description: 'Radio guapa',
      category: 'electronics',
      imageUrl: 'imageRadio.jpg',
      rating: {
        count: 2,
        rate: 4
      }
    },
  ];

  filterProductsByCategory(products: Product[], category: CategoryType): Product[]{
    return products.filter(product => product.category === category);
  }

  applyDiscount(products: Product[], percentage: number): Product[]{
    return products.map(product => {
      product.price = product.price / percentage * 100;
      return product;
    })
  }

  ngOnInit() {
    this.applyDiscount(this.filterProductsByCategory(this.products, 'electronics'), 10);
  }




}
