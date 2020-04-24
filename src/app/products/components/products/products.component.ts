import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products.service';
import { Product } from '../../../core/models/product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  constructor(private productsService: ProductsService) {
    this.getServiceProducts();
  }

  ngOnInit(): void {
  }

  getServiceProducts() {
    this.products = this.productsService.getAllproducts();
  }

}
