import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    const url = 'https://fakestoreapi.com/products';
    return this.http.get<any[]>(url);
  }
 
}


 

