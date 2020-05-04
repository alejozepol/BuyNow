import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private order: Order[] = [];
  private cart = new BehaviorSubject<Order[]>([]);

  cart$ = this.cart.asObservable();

  constructor() { }

  addCart(order: Order) {
    this.order = [...this.order, order];
    this.cart.next(this.order);
  }
}
