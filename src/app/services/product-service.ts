import {inject, Service} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, of} from 'rxjs';
import {Product} from '../common/interfaces/interfaces';

@Service()
export class ProductService {
  private readonly httpClient: HttpClient = inject(HttpClient);
  private readonly urlBase = 'https://fakestoreapi.com/products';

  getProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.urlBase).pipe(
      catchError((error:  any) => {
        console.error(error);
        return of([]);
      })
    )
    //return this.httpClient.get<Product[]>(this.urlBase+ '/products');
  }

  getCategories(): Observable<string[]>{
    return this.httpClient.get<string[]>(this.urlBase + '/categories').pipe(
      catchError(error => {
        console.error(error);
        return of([]);
      })
    );
  }

  getProductById(id: number): Observable<Product | null>{
    return this.httpClient.get<Product>(this.urlBase + '/' +id).pipe(
      catchError(err => {
        console.error(err);
        return of(null);
      })
    )
  }

  getProductsByCategory(category: string): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.urlBase + '/category/' +category).pipe(
      catchError(err => {
        console.error(err);
        return of([]);
      })
    )
  }
}
