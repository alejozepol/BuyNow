import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() {
  }
  imagens: string[] = [
    'assets/img/img1.jpg',
    'assets/img/img2.jpg',
    'assets/img/img3.jpg',
  ];
  imagensMov: string[] = [
    'assets/img/m-img1.jpg',
    'assets/img/m-img2.jpg',
    'assets/img/m-img3.jpg',
  ];

  ngOnInit(): void {
    const mySwiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

}
