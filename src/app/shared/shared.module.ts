import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { MaterialModule } from '@material/material.module';

/* Components */
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { ProductSmallComponent } from './components/product-small/product-small.component';
import { ProductMdComponent } from './components/product-md/product-md.component';
import { OrderProductSmComponent } from './components/order-product-sm/order-product-sm.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    ProductSmallComponent,
    ProductMdComponent,
    OrderProductSmComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    RouterModule,
    ProductSmallComponent,
    ProductMdComponent,
    OrderProductSmComponent
  ]
})
export class SharedModule { }
