import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private order: Order[] = [];

  private cart = new BehaviorSubject<Order[]>(this.order);
  cart$ = this.cart.asObservable();

  constructor() {
    this.cart.next(this.order);
  }
  getAllCard() {
    return this.cart.getValue();
  }
  updateMoreElementOrder(id: number){
    this.order.forEach(element => {
      if (element.id === id){
        element.amound++;
        element.totalPrice = element.priceProduct * element.amound;
      }
      this.cart.next(this.order);
    });
  }
  updateLessElementOrder(id: number){
    this.order.forEach(element => {
      if (element.id === id){
        element.amound--;
        element.totalPrice = element.priceProduct * element.amound;
      }
      this.cart.next(this.order);
    });
  }
  addCart(order: Order) {
    const orderExistent = this.order.find(item => item.idProduct === order.idProduct);
    if (orderExistent) {
      this.updateMoreElementOrder(orderExistent.id);
    } else {
      this.order = [...this.order, order];
      this.cart.next(this.order);
    }
  }

}
