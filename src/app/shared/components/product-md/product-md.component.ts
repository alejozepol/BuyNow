import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { OrderService } from 'src/app/core/services/order.service';
import { Order } from 'src/app/core/models/order.model';

@Component({
  selector: 'app-product-md',
  templateUrl: './product-md.component.html',
  styleUrls: ['./product-md.component.scss']
})
export class ProductMdComponent implements OnInit {
  @Input() product: Product;
  order: Order;

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {

  }

  addCart(product: Product){
    this.order = {
      id: Date.now(),
      idProduct: product.id,
      titleProduct: product.title,
      image: product.image,
      color: product.colors[0],
      size: product.sizes[0],
      priceProduct: product.price,
      discount: product.discount,
      percentaje: product.percentaje,
      valueDiscount: (product.discount ? (product.price * product.percentaje / 100) * 1 : 0),
      amound: 1,
      totalPrice: (product.price * 1),
    };
    this.order.totalPrice = this.order.totalPrice - this.order.valueDiscount;
    this.orderService.addCart(this.order);
  }

}
