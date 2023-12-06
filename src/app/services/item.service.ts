import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { IProduct, IProductData } from '../types/product.type';
import { GET_ALL_PRODUCTS } from '../gqlQuery/products.query';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  readonly baseUrl = 'http://localhost:8080/graphql';
  private productsSubject$ = new BehaviorSubject<IProduct[]>([]);

  constructor(private readonly http: HttpClient) {}

  get products(): Observable<IProduct[]> {
    return this.productsSubject$.asObservable();
  }

  getAll() {
    this.http
      .post<IProductData>(this.baseUrl, {
        query: GET_ALL_PRODUCTS,
      })
      .pipe(map((res) => res.data.products))
      .subscribe((res) => this.productsSubject$.next(res));
  }
}
