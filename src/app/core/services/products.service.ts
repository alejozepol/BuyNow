import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    {
      id: '1',
      title: 'Camiseta',
      description: 'Camiseta con el logo de platzi',
      image: 'assets/img/camiseta.png',
      price: 20000
    },
    {
      id: '2',
      title: 'hoodie',
      description: 'Cahqueta o Hoodie con el logo de platzi color azul',
      image: 'assets/img/hoodie.png',
      price: 35000
    },
    {
      id: '3',
      title: 'Mug',
      description: 'Increible mug blanco con el logo de platzi',
      image: 'assets/img/mug.png',
      price: 16000
    },
    {
      id: '4',
      title: 'Pin',
      description: 'LLeva a Platzi junto a tu corazon y nunca pares de aprender',
      image: 'assets/img/pin.png',
      price: 5000
    },
    {
      id: '5',
      title: 'Stickers Logo Platzi',
      description: 'Stickers o pegatin con el logo de Platzi',
      image: 'assets/img/pin.png',
      price: 4000
    },
    {
      id: '6',
      title: 'Stickers Nunca Pares de Aprender',
      description: 'Stickers o pegatin con el slogan de Nunca Pares de Aprender',
      image: 'assets/img/pin.png',
      price: 4000
    },
  ];
  constructor() { }

  getAllproducts() {
    return this.products;
  }

  getIdProduct(id: string) {
    return this.products.find((item) => item.id === id);
  }

  createProduct(product : Product){
    return this.products.push(product);
  }

  updateProduct(){
    /* pendiente por emplementar */
  }
  deleteIdProduct(id: string) {
    return this.products.filter((item) => item.id !== id);
  }

}
