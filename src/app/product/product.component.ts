import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ ProductService ]
})

export class ProductComponent implements OnInit {
  product: any | undefined;
  id: any | undefined;

  constructor(public productService: ProductService,  private route: ActivatedRoute) {}

  // ngOnInit() {

  //   this.route.params
  //       .subscribe(
  //         params => { this.id = params['id'] }
  //       )

  //   this.productService.getProduct(this.id)
  //       .subscribe(
  //         (data) => {
  //           console.log(data);
  //           this.product = data;
  //         },
  //         (error) => {
  //           console.error(error);
  //         }
  //       );
  // }

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.id = params['id'];

    //   if (this.id) {
    //     this.productService.getProduct(this.id).subscribe(
    //       (data) => {
    //         console.log(data);
    //         this.product = data;
    //       },
    //       (error) => {
    //         console.error(error);
    //       }
    //     ); 
    //   }

    // });

    this.route.params.pipe(
      switchMap(params => {
        this.id = params['id'];
        return this.productService.getProduct(this.id);
      })
    ).subscribe(
      (data) => {
        console.log(data);
        this.product = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
