import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductService } from './services/product.service';
import { ProductsListComponent } from './components/products-list/products-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrdersComponent,
    ProductsComponent,
    AboutComponent,
    ProductComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
