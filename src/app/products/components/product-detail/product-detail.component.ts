import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../../core/models/product.model';
import { ProductsService } from '../../../core/services/products.service';
import { OrderService } from 'src/app/core/services/order.service';
import { Order } from 'src/app/core/models/order.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})


export class ProductDetailComponent implements OnInit {
  product: Product;
  order: Order;
  selectSize = '';
  selectColor = '';
  amound = 1;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private orderService: OrderService,
  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.getProduct(id);
    });
  }

  getProduct(id: string) {
    this.product = this.productService.getIdProduct(id);
    this.selectSize = this.product.sizes[0];
    this.selectColor = this.product.colors[0];
  }

  addCard(product: Product) {
    this.order = {
      id: Date.now(),
      idProduct: product.id,
      titleProduct: product.title,
      image: product.image,
      color: this.selectColor,
      size: this.selectSize,
      priceProduct: product.price,
      discount: product.discount,
      percentaje: product.percentaje,
      valueDiscount: (product.discount ? (product.price * product.percentaje / 100) * this.amound : 0),
      amound: this.amound,
      totalPrice: (product.price * this.amound),
    };
    this.order.totalPrice = this.order.totalPrice - this.order.valueDiscount;
    this.orderService.addCart(this.order);
  }

  amoundUp() {
    this.amound++;
  }

  amoundDowd() {
    this.amound--;
  }
}
