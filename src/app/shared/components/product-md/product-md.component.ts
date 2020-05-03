import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product-md',
  templateUrl: './product-md.component.html',
  styleUrls: ['./product-md.component.scss']
})
export class ProductMdComponent implements OnInit {
@Input() product: Product;
  constructor( ) { }

  ngOnInit(): void {

  }

}
