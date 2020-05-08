import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/core/models/order.model';

@Component({
  selector: 'app-order-product-sm',
  templateUrl: './order-product-sm.component.html',
  styleUrls: ['./order-product-sm.component.scss']
})
export class OrderProductSmComponent implements OnInit {
@Input() order: Order;
  constructor() { }

  ngOnInit(): void {
  }

  amoundUp(){
    this.order.amound++;
  }
  amoundDown(){
    this.order.amound--;
  }

}
