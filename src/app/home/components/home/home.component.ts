import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  columns: string[] = [
    'assets/img/col1.jpg',
    'assets/img/col2.jpg',
    'assets/img/col3.jpg',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
