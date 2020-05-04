import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-best-products',
  templateUrl: './best-products.component.html',
  styleUrls: ['./best-products.component.scss']
})
export class BestProductsComponent implements OnInit {

  products: Product[] = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProductsService();
  }

  getProductsService() {
    this.products = this.productsService.getAllProductsDiscount();
  }

}
