import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import Product from '../types/interfaces/product';

@Injectable({
  providedIn: 'root'
})


export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    const url = 'https://fakestoreapi.com/products';

    return this.http.get<any[]>(url)
        .pipe(
          tap(data => console.log('data', data)),
          map(
            res => res
          )
        ) 
  }
 
}


 

