import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products/products.component';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module'
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule
  ]
})
export class ProductsModule { }
