import { Component, OnInit, Input } from '@angular/core';

import { Order } from '@core/models/order.model';
import { OrderService } from '@core/services/order.service';

@Component({
  selector: 'app-order-product-sm',
  templateUrl: './order-product-sm.component.html',
  styleUrls: ['./order-product-sm.component.scss']
})
export class OrderProductSmComponent implements OnInit {
@Input() order: Order;
  constructor(public orderService: OrderService) { }

  ngOnInit(): void {
  }

  amoundUp(){
    this.orderService.updateMoreElementOrder(this.order.id);
  }
  amoundDown(){
    this.orderService.updateLessElementOrder(this.order.id);
  }

}
