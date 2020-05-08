import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from 'src/app/core/services/order.service';
import { Order } from 'src/app/core/models/order.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  isLinear = false;
  secondFormGroup: FormGroup;
  orders$: Observable<Order[]>;
  totalPrice$: Observable<number>;
  totalAmound$: Observable<number>;
  totalProducts$: Observable<number>;

  constructor(
    private _formBuilder: FormBuilder,
    private orderService: OrderService
  ) {
  }

  ngOnInit() {
    this.orders$ = this.orderService.cart$;
    this.totalAmound$ = this.orders$.pipe(
      map(items => {
        let amound = 0;
        if (items.length){
          items.map((item) => {
            amound = amound + item.amound;
          });
        }
        return amound;
        }));
    this.totalProducts$ = this.orders$.pipe(
      map(items => items.length)
    )
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
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
