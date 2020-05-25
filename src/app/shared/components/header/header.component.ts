import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Routes } from '../../models/routes.model';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {


  routes: Routes[] = [
    {
      id: 1,
      path: '/home',
      name: 'Inicio'
    },
    {
      id: 2,
      path: '/products',
      name: 'Productos'
    },
    {
      id: 3,
      path: '/contact',
      name: 'Contacto'
    }
  ];
  total$: Observable<number>;
  menu = false;

  constructor(
    private orderService: OrderService
  ) {
    this.total$ = this.orderService.cart$
      .pipe(
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
  }

  ngOnInit(): void {
  }

  hideMenu() {
    if (this.menu) {
      this.menu = false;
    }
  }


}
