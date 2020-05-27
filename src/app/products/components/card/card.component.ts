import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { OrderService } from '@core/services/order.service';
import { Order } from '@core/models/order.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  isLinear = true;
  DataSend: FormGroup;
  orders$: Observable<Order[]>;
  totalPrice$: Observable<number>;
  totalAmound$: Observable<number>;
  totalProducts$: Observable<number>;

  constructor(
    private formBuilder: FormBuilder,
    private orderService: OrderService
  ) {

    this.totalAmound$ = this.orderService.cart$.pipe(
      map(items => {
        let amound = 0;
        if (items.length) {
          items.map((item) => {
            amound = amound + item.amound;
          });
        }
        return amound;
      }
      ));

    this.totalProducts$ = this.orderService.cart$.pipe(
        map(items => items.length));
  }

  ngOnInit() {
    this.orders$ = this.orderService.cart$;


    this.totalPrice$ = this.orders$.pipe(
      map(items => {
        let prices = 0;
        if (items.length){
          items.map((item) => {
            prices = prices + item.totalPrice;
          });
        }
        return prices;
        }));

    this.DataSend = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]]
    });
  }
}
