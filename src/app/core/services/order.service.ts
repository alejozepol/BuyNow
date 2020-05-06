import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private order: Order[] = [{
    id: Date.now(),
    idProduct: '1',
    titleProduct: 'Camiseta',
    image: 'assets/img/camiseta.png',
    color: '#327580',
    size: 'S',
    priceProduct: 20000,
    discount: true,
    percentaje: 20,
    valueDiscount: 20000,
    amound: 1,
    totalPrice: 20000
  }];

  private cart = new BehaviorSubject<Order[]>(this.order);
  cart$ = this.cart.asObservable();

  constructor() {
    this.cart.next(this.order);
  }
  getAllCard() {
    return this.cart.getValue();
  }
  addCart(order: Order) {
    this.order = [...this.order, order];
    this.cart.next(this.order);
  }
}
