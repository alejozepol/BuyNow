import { Component, OnInit } from '@angular/core';
import { Routes } from '../../models/routes.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  routes: Routes[] = [
    {
      id: 1,
      path: '/home',
      name: 'Home'
    },
    {
      id: 2,
      path: '/products',
      name: 'Products'
    }
  ];

  ngOnInit(): void {
  }

}
