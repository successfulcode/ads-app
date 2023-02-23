import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    // return this.http.get('https://fakestoreapi.com/products')
    //   .pipe(
    //     map((res: any) => res.payload)
    //   );

    const url = 'https://fakestoreapi.com/products';
    return this.http.get<any[]>(url);
  }
 
}


 

