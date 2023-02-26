import { map, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import Product from 'src/app/types/interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products$: Observable<Product[]> | undefined;

  sortedByPriceProducts$: Observable<Product[]> | undefined;

  chipestProducts$: Observable<Product[]> | undefined;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products$ = this.productsService.getProducts();

    this.sortedByPriceProducts$ = this.products$
      .pipe(
        map((products: Product[]) => products.sort((a, b) => a.price - b.price))
      )
    
    this.chipestProducts$ = this.products$
        .pipe(
          map((products: Product[]) => products.filter(product => product.price < 50))
        )
  }
}
