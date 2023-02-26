import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, finalize, Observable } from 'rxjs';

@Injectable()
export class ProductService {

  private isLoadingSubject = new BehaviorSubject<boolean>(true);
  public isLoading$ = this.isLoadingSubject.asObservable();

  constructor(private http: HttpClient) { }

  getProduct(id: string): Observable<any[]> {
    const url = `https://fakestoreapi.com/products/${id}`;
    return this.http.get<any[]>(url).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    )
  }

}

